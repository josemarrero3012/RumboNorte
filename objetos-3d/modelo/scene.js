// Three objects modelled as signed-distance geometry and path traced on the GPU.
const COMMON = `#version 300 es
precision highp float;
precision highp sampler2D;
uniform vec2 uRes; uniform int uFrame;
uniform sampler2D uA, uB, uDecal;
layout(location=0) out vec4 oA; layout(location=1) out vec4 oB;

#define NAVY 1.
#define ORANGE 2.
#define WHITE 3.
#define TINT 4.
#define RAISED 5.
#define LABEL_A 6.
#define LABEL_B 7.
#define GLASS 8.
#define STEEL 9.
#define LAMP 10.
#define NOTE 11.
#define BUTTON 12.
#define LEATHER 13.
#define PAPER 14.

const float PI = 3.14159265;
uint st;
uint pcg(){ st = st*747796405u + 2891336453u; uint w = ((st>>((st>>28u)+4u))^st)*277803737u; return (w>>22u)^w; }
float rnd(){ return float(pcg()>>8u)*(1./16777216.); }

vec3 lin(float r,float g,float b){ return pow(vec3(r,g,b)/255., vec3(2.2)); }
mat3 rX(float a){ float c=cos(a),s=sin(a); return mat3(1,0,0, 0,c,s, 0,-s,c); }
mat3 rY(float a){ float c=cos(a),s=sin(a); return mat3(c,0,-s, 0,1,0, s,0,c); }
mat3 rZ(float a){ float c=cos(a),s=sin(a); return mat3(c,s,0, -s,c,0, 0,0,1); }

float sdRB(vec3 p, vec3 b, float r){ vec3 q=abs(p)-b+r; return length(max(q,0.))+min(max(q.x,max(q.y,q.z)),0.)-r; }
float sdCyl(vec3 p, float h, float r, float e){ vec2 d=vec2(length(p.xz)-r+e, abs(p.y)-h+e); return min(max(d.x,d.y),0.)+length(max(d,0.))-e; }
float sdTor(vec3 p, float R, float r){ return length(vec2(length(p.xz)-R,p.y))-r; }
float rr2(vec2 p, vec2 b, float r){ vec2 q=abs(p)-b+r; return length(max(q,0.))+min(max(q.x,q.y),0.)-r; }
// rounded plate: corner radius c in xy, half thickness h in z, soft edge e
float sdPlate(vec3 p, vec2 b, float c, float h, float e){ vec2 w=vec2(rr2(p.xy,b,c)+e, abs(p.z)-h+e); return min(max(w.x,w.y),0.)+length(max(w,0.))-e; }
float smin(float a,float b,float k){ float h=max(k-abs(a-b),0.)/k; return min(a,b)-h*h*k*.25; }
vec2 U(vec2 a, vec2 b){ return a.x<b.x?a:b; }
`;

const SCENES = {
1: { // Nomina: three soft discs, one on top of another
cam: 'vec3(0.,.72,0.)', az: 0.6, el: 0.42, dist: 15.2, fov: 0.172,
c: ['lin(150.,164.,140.)','lin(186.,197.,174.)','lin(232.,233.,224.)'],
map: `
vec2 map(vec3 p){
  vec2 d = vec2(sdCyl(p-vec3(0.,.22,0.), .22,1.12,.13), 20.);
  d = U(d, vec2(sdCyl(p-vec3(.13,.66,-.07), .22,1.12,.13), 21.));
  d = U(d, vec2(sdCyl(p-vec3(-.09,1.1,.08), .22,1.12,.13), 22.));
  return d;
}
vec3 albedo(vec3 p, float id, inout float rough){ return vec3(.5); }
`},
2: { // Alojamiento: an arch on a low step, with a small sphere
cam: 'vec3(.1,1.28,0.)', az: 0.52, el: 0.2, dist: 15.2, fov: 0.172,
c: ['lin(214.,196.,168.)','lin(232.,220.,200.)','lin(190.,165.,132.)'],
map: `
vec2 map(vec3 p){
  vec2 q = p.xy;
  float outer = min(length(q-vec2(0.,1.62))-1.06, max(abs(q.x)-1.06, max(q.y-1.62,.12-q.y)));
  float inner = min(length(q-vec2(0.,1.5))-.56, max(abs(q.x)-.56, max(q.y-1.5,-q.y)));
  vec2 w = vec2(max(outer,-inner)+.05, abs(p.z)-.38+.05);
  float arch = min(max(w.x,w.y),0.)+length(max(w,0.))-.05;
  vec2 d = vec2(arch, 20.);
  d = U(d, vec2(sdRB(p-vec3(0.,.08,.1), vec3(1.5,.08,.82), .06), 21.));
  d = U(d, vec2(length(p-vec3(1.02,.46,.62))-.3, 22.));
  return d;
}
vec3 albedo(vec3 p, float id, inout float rough){ return vec3(.5); }
`},
3: { // Registros: three thin sheets and a ring resting on them
cam: 'vec3(0.,.86,0.)', az: 0.6, el: 0.42, dist: 15.2, fov: 0.172,
c: ['lin(166.,186.,202.)','lin(196.,210.,222.)','lin(232.,237.,241.)'],
map: `
vec2 map(vec3 p){
  vec2 d = vec2(sdRB(rY(-.2)*(p-vec3(0.,.07,0.)), vec3(1.42,.07,1.02), .06), 20.);
  d = U(d, vec2(sdRB(rY(.02)*(p-vec3(.04,.21,.02)), vec3(1.42,.07,1.02), .06), 21.));
  d = U(d, vec2(sdRB(rY(.2)*(p-vec3(-.03,.35,0.)), vec3(1.42,.07,1.02), .06), 22.));
  vec3 r = rZ(.1)*rY(-.5)*(p-vec3(.1,1.19,-.05));
  d = U(d, vec2(sdTor(r.xzy, .72,.1), 20.));
  return d;
}
vec3 albedo(vec3 p, float id, inout float rough){ return vec3(.5); }
`},
};

function traceSource(n) {
  const s = SCENES[n];
  return COMMON + `#define C1 ${s.c[0]}
#define C2 ${s.c[1]}
#define C3 ${s.c[2]}
` + s.map + `
vec3 mat(vec3 p, float id, inout float rough, inout float spec, inout vec3 emit){
  rough=.62; spec=.55; emit=vec3(0.);
  if(id==20.) return C1;
  if(id==21.) return C2;
  if(id==22.) return C3;
  if(id==NAVY){ spec=.55; rough=.42; return lin(11.,37.,67.); }
  if(id==ORANGE) return lin(253.,93.,3.);
  if(id==WHITE) return lin(246.,244.,240.);
  if(id==TINT) return lin(255.,240.,228.);
  if(id==PAPER) return lin(255.,246.,238.);
  if(id==RAISED){ spec=.6; rough=.45; return lin(21.,52.,92.); }
  if(id==STEEL){ rough=.16; spec=4.; return lin(205.,210.,216.); }
  if(id==LAMP){ emit=vec3(2.6,1.45,.8); return lin(255.,235.,214.); }
  if(id==LEATHER){ rough=.5; spec=.5; }
  return albedo(p,id,rough);
}
vec3 nrm(vec3 p){ const vec2 e=vec2(1,-1)*.0006; return normalize(e.xyy*map(p+e.xyy).x+e.yyx*map(p+e.yyx).x+e.yxy*map(p+e.yxy).x+e.xxx*map(p+e.xxx).x); }
vec2 march(vec3 ro, vec3 rd, float tmax){
  float t=.004;
  for(int i=0;i<128;i++){ vec2 h=map(ro+rd*t); if(h.x<.0007) return vec2(t,h.y); t+=h.x*.92; if(t>tmax) break; }
  return vec2(-1.);
}
vec3 env(vec3 d){
  float up=clamp(d.y*.5+.5,0.,1.);
  vec3 c=mix(vec3(.66,.64,.62),vec3(1.02,1.03,1.07),up)*.72;
  vec3 k=normalize(vec3(-.42,.82,.5));
  c+=vec3(1.,.98,.95)*2.1*smoothstep(.55,.95,dot(d,k));
  vec3 f=normalize(vec3(.9,.3,.32));
  c+=vec3(.97,.98,1.)*.5*smoothstep(.7,.97,dot(d,f));
  vec3 r=normalize(vec3(.1,.35,-.95));
  c+=vec3(1.,.97,.94)*.5*smoothstep(.6,.95,dot(d,r));
  return c;
}
vec3 cosDir(vec3 n){ float a=rnd()*2.*PI, z=rnd()*2.-1.; float r=sqrt(max(0.,1.-z*z)); return normalize(n+vec3(r*cos(a),r*sin(a),z)*.999); }
void main(){
  ivec2 px=ivec2(gl_FragCoord.xy);
  st=uint(px.x)*1973u+uint(px.y)*9277u+uint(uFrame)*26699u+1u; pcg();
  vec2 j=vec2(rnd()+rnd(),rnd()+rnd())*.5;
  vec2 uv=((gl_FragCoord.xy-.5+j)-uRes*.5)/uRes.y*2.;
  float az=${s.az}, el=${s.el}; vec3 ta=${s.cam};
  vec3 fw=-vec3(sin(az)*cos(el),sin(el),cos(az)*cos(el));
  vec3 ro=ta-fw*${s.dist.toFixed(2)};
  vec3 rt=normalize(cross(fw,vec3(0,1,0))), up=cross(rt,fw);
  vec3 rd=normalize(fw+(uv.x*rt+uv.y*up)*${s.fov});

  vec3 L=vec3(0.), T=vec3(1.); float cov=0., gcov=0., num=0., den=0.;
  bool primary=true, glassed=false;
  for(int b=0;b<6;b++){
    vec2 h=march(ro,rd,40.);
    float tg = rd.y<0. ? -ro.y/rd.y : -1.;
    bool ground = tg>0. && (h.x<0.||tg<h.x);
    if(h.x<0.&&!ground){ if(primary){ if(glassed){L+=vec3(.96,.98,1.); cov=.13;} break; } L+=T*env(rd); break; }
    if(ground){
      vec3 p=ro+rd*tg; vec3 n=vec3(0,1,0);
      if(primary){
        vec3 d=cosDir(n); vec3 e=env(d); float l=dot(e,vec3(.3,.5,.2));
        vec2 s=march(p+n*.002,d,14.);
        num+= s.x<0.? l:0.; den+=l; gcov=1.; break;
      }
      T*=vec3(.82); ro=p+n*.002; rd=cosDir(n); continue;
    }
    vec3 p=ro+rd*h.x; vec3 n=nrm(p);
    if(h.y==GLASS){
      float f=.04+.96*pow(1.-abs(dot(n,rd)),5.);
      if(rnd()<f){ rd=reflect(rd,n); ro=p+n*.003; primary=false; cov=1.; }
      else { ro=p+rd*.05; T*=vec3(.95,.97,1.); glassed=true; }
      continue;
    }
    if(primary){ cov=1.; primary=false; }
    float rough, spec; vec3 emit; vec3 alb=mat(p,h.y,rough,spec,emit);
    L+=T*emit;
    float f=clamp((.04*spec)+(1.-.04*spec)*pow(1.-max(dot(n,-rd),0.),5.),0.,1.);
    if(rnd()<f){
      vec3 r=reflect(rd,n);
      rd=normalize(mix(r,cosDir(n),rough*rough));
      if(spec>2.) T*=alb;
    } else { rd=cosDir(n); T*=alb; }
    ro=p+n*.003;
    if(b>2){ float q=max(T.r,max(T.g,T.b)); if(rnd()>q) break; T/=q; }
  }
  L=min(L,vec3(12.));
  oA=texelFetch(uA,px,0)+vec4(L*cov,cov);
  oB=texelFetch(uB,px,0)+vec4(num,den,gcov,0.);
}`;
}

function displaySource() {
  return `#version 300 es
precision highp float; precision highp sampler2D;
uniform sampler2D uA,uB; uniform float uN; out vec4 o;
vec3 tone(vec3 c){ c*=.84; vec3 e=max(c-.82,0.); return min(c,vec3(.82))+.18*(1.-exp(-e/.18)); }
void main(){
  ivec2 px=ivec2(gl_FragCoord.xy);
  vec4 A=texelFetch(uA,px,0)/uN, B=texelFetch(uB,px,0);
  float a=A.a; vec3 col=a>0.?A.rgb/a:vec3(0.);
  float gc=B.z/uN; float r=B.y>0.?B.x/B.y:1.;
  vec2 e=(gl_FragCoord.xy/vec2(textureSize(uA,0))-vec2(.5,.42))*2.; float edge=smoothstep(.98,.5,length(e*vec2(1.,1.25)));
  float sa=gc*pow(clamp((1.-r-.09)/.91,0.,1.),1.2)*.62*edge;
  col=pow(clamp(tone(col),0.,1.),vec3(1./2.2));
  vec3 sh=vec3(.2,.19,.17);
  float outA=a+(1.-a)*sa;
  vec3 pm=col*a+sh*(1.-a)*sa;
  o=vec4(pm,outA);
}`;
}
