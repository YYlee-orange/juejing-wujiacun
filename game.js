(()=>{var Iu=0,Cl=1,Pu=2;var Qi=1,Lu=2,Us=3,Ii=0,on=1,ln=2,ji=0,Fs=1,Rl=2,Il=3,Pl=4,Du=5;var ts=100,Nu=101,Uu=102,Fu=103,Ou=104,Bu=200,zu=201,ku=202,Vu=203,Ll=204,Dl=205,Gu=206,Hu=207,Wu=208,Xu=209,qu=210,Yu=211,$u=212,Zu=213,Ju=214,Xo=0,qo=1,Yo=2,Ss=3,$o=4,Zo=5,Jo=6,Ko=7,Aa=0,Ku=1,Qu=2,qn=0,Nl=1,Ul=2,Fl=3,Ol=4,Bl=5,zl=6,kl=7;var Vl=300,es=301,Os=302,Ea=303,Ca=304,Qo=1e3,kn=1001,jo=1002,We=1003,ju=1004;var Wr=1005;var qe=1006,Ra=1007;var pi=1008;var hn=1009,Gl=1010,Hl=1011,Bs=1012,Ia=1013,Dn=1014,An=1015,Nn=1016,Pa=1017,La=1018,ns=1020,Wl=35902,Xl=35899,ql=1021,Yl=1022,Un=1023,li=1026,mi=1027,zs=1028,Da=1029,Pi=1030,Na=1031;var Ua=1033,Xr=33776,qr=33777,Yr=33778,$r=33779,Fa=35840,Oa=35841,Ba=35842,za=35843,ka=36196,Va=37492,Ga=37496,Ha=37488,Wa=37489,Zr=37490,Xa=37491,qa=37808,Ya=37809,$a=37810,Za=37811,Ja=37812,Ka=37813,Qa=37814,ja=37815,tc=37816,ec=37817,nc=37818,ic=37819,sc=37820,rc=37821,oc=36492,ac=36494,cc=36495,lc=36283,hc=36284,Jr=36285,uc=36286;var dr=2300,ta=2301,Ho=2302,xl=2303,_l=2400,yl=2401,vl=2402;var td=3200;var Kr=0,ed=1,gi="",mn="srgb",fr="srgb-linear",pr="linear",ye="srgb";var Wo=7680;var nd=519,id=512,sd=513,rd=514,$l=515,od=516,ad=517,Zl=518,Jl=519,cd=35044,je=35048;var Kl="300 es",bn=2e3,bs=2001;function Dp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Np(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ld(){let i=mr("canvas");return i.style.display="block",i}var Zh={},ws=null;function Ql(...i){let t="THREE."+i.shift();ws?ws("log",t,...i):console.log(t,...i)}function hd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ee(...i){i=hd(i);let t="THREE."+i.shift();if(ws)ws("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ie(...i){i=hd(i);let t="THREE."+i.shift();if(ws)ws("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Hi(...i){let t=i.join(" ");t in Zh||(Zh[t]=!0,ee(...i))}function ud(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var dd={[Xo]:Xo,[Yo]:Jo,[$o]:$o,[Ss]:Zo,[qo]:qo,[Jo]:Yo,[Ko]:Ko,[Zo]:Ss},Gn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jh=1234567,cr=Math.PI/180,Ts=180/Math.PI;function is(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]).toLowerCase()}function ce(i,t,e){return Math.max(t,Math.min(e,i))}function jl(i,t){return(i%t+t)%t}function Up(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Fp(i,t,e){return i!==t?(e-i)/(t-i):0}function lr(i,t,e){return(1-e)*i+e*t}function Op(i,t,e,n){return lr(i,t,1-Math.exp(-e*n))}function Bp(i,t=1){return t-Math.abs(jl(i,t*2)-t)}function zp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function kp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Vp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Gp(i,t){return i+Math.random()*(t-i)}function Hp(i){return i*(.5-Math.random())}function Wp(i){i!==void 0&&(Jh=i);let t=Jh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Xp(i){return i*cr}function qp(i){return i*Ts}function Yp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function $p(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function th(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Zp(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),d=o((t+n)/2),h=r((t-n)/2),f=o((t-n)/2),u=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*d,c*h,c*f,a*l);break;case"YZY":i.set(c*f,a*d,c*h,a*l);break;case"ZXZ":i.set(c*h,c*f,a*d,a*l);break;case"XZX":i.set(a*d,c*g,c*u,a*l);break;case"YXY":i.set(c*u,a*d,c*g,a*l);break;case"ZYZ":i.set(c*g,c*u,a*d,a*l);break;default:ee("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function eh(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function fd(i,t){if(t.constructor===Float32Array)return i;let e=eh(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function pd(i,t){if(t.constructor===Float32Array)return i;let e=eh(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var Tt={DEG2RAD:cr,RAD2DEG:Ts,generateUUID:is,clamp:ce,euclideanModulo:jl,mapLinear:Up,inverseLerp:Fp,lerp:lr,damp:Op,pingpong:Bp,smoothstep:zp,smootherstep:kp,randInt:Vp,randFloat:Gp,randFloatSpread:Hp,seededRandom:Wp,degToRad:Xp,radToDeg:qp,isPowerOfTwo:Yp,ceilPowerOfTwo:$p,floorPowerOfTwo:th,setQuaternionFromProperEuler:Zp,normalize:pd,denormalize:fd},et=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ye=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],d=n[s+2],h=n[s+3],f=r[o+0],u=r[o+1],g=r[o+2],v=r[o+3];if(h!==v||c!==f||l!==u||d!==g){let m=c*f+l*u+d*g+h*v;m<0&&(f=-f,u=-u,g=-g,v=-v,m=-m);let p=1-a;if(m<.9995){let x=Math.acos(m),_=Math.sin(x);p=Math.sin(p*x)/_,a=Math.sin(a*x)/_,c=c*p+f*a,l=l*p+u*a,d=d*p+g*a,h=h*p+v*a}else{c=c*p+f*a,l=l*p+u*a,d=d*p+g*a,h=h*p+v*a;let x=1/Math.sqrt(c*c+l*l+d*d+h*h);c*=x,l*=x,d*=x,h*=x}}t[e]=c,t[e+1]=l,t[e+2]=d,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],d=n[s+3],h=r[o],f=r[o+1],u=r[o+2],g=r[o+3];return t[e]=a*g+d*h+c*u-l*f,t[e+1]=c*g+d*f+l*h-a*u,t[e+2]=l*g+d*u+a*f-c*h,t[e+3]=d*g-a*h-c*f-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),d=a(s/2),h=a(r/2),f=c(n/2),u=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*d*h+l*u*g,this._y=l*u*h-f*d*g,this._z=l*d*g+f*u*h,this._w=l*d*h-f*u*g;break;case"YXZ":this._x=f*d*h+l*u*g,this._y=l*u*h-f*d*g,this._z=l*d*g-f*u*h,this._w=l*d*h+f*u*g;break;case"ZXY":this._x=f*d*h-l*u*g,this._y=l*u*h+f*d*g,this._z=l*d*g+f*u*h,this._w=l*d*h-f*u*g;break;case"ZYX":this._x=f*d*h-l*u*g,this._y=l*u*h+f*d*g,this._z=l*d*g-f*u*h,this._w=l*d*h+f*u*g;break;case"YZX":this._x=f*d*h+l*u*g,this._y=l*u*h+f*d*g,this._z=l*d*g-f*u*h,this._w=l*d*h-f*u*g;break;case"XZY":this._x=f*d*h-l*u*g,this._y=l*u*h-f*d*g,this._z=l*d*g+f*u*h,this._w=l*d*h+f*u*g;break;default:ee("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],d=e[6],h=e[10],f=n+a+h;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(d-c)*u,this._y=(r-l)*u,this._z=(o-s)*u}else if(n>a&&n>h){let u=2*Math.sqrt(1+n-a-h);this._w=(d-c)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+l)/u}else if(a>h){let u=2*Math.sqrt(1+a-n-h);this._w=(r-l)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(c+d)/u}else{let u=2*Math.sqrt(1+h-n-a);this._w=(o-s)/u,this._x=(r+l)/u,this._y=(c+d)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ce(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,d=e._w;return this._x=n*d+o*a+s*l-r*c,this._y=s*d+o*c+r*a-n*l,this._z=r*d+o*l+n*c-s*a,this._w=o*d-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),d=Math.sin(l);c=Math.sin(c*l)/d,e=Math.sin(e*l)/d,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Kh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Kh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),d=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+c*l+o*h-a*d,this.y=n+c*d+a*l-r*h,this.z=s+c*h+r*d-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return $c.copy(this).projectOnVector(t),this.sub($c)}reflect(t){return this.sub($c.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},$c=new B,Kh=new Ye,re=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let d=this.elements;return d[0]=t,d[1]=s,d[2]=a,d[3]=e,d[4]=r,d[5]=c,d[6]=n,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],d=n[4],h=n[7],f=n[2],u=n[5],g=n[8],v=s[0],m=s[3],p=s[6],x=s[1],_=s[4],M=s[7],b=s[2],S=s[5],y=s[8];return r[0]=o*v+a*x+c*b,r[3]=o*m+a*_+c*S,r[6]=o*p+a*M+c*y,r[1]=l*v+d*x+h*b,r[4]=l*m+d*_+h*S,r[7]=l*p+d*M+h*y,r[2]=f*v+u*x+g*b,r[5]=f*m+u*_+g*S,r[8]=f*p+u*M+g*y,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],d=t[8];return e*o*d-e*a*l-n*r*d+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],d=t[8],h=d*o-a*l,f=a*c-d*r,u=l*r-o*c,g=e*h+n*f+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=h*v,t[1]=(s*l-d*n)*v,t[2]=(a*n-s*o)*v,t[3]=f*v,t[4]=(d*e-s*c)*v,t[5]=(s*r-a*e)*v,t[6]=u*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return Hi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Zc.makeScale(t,e)),this}rotate(t){return Hi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Zc.makeRotation(-t)),this}translate(t,e){return Hi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Zc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Zc=new re,Qh=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jh=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jp(){let i={enabled:!0,workingColorSpace:fr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ye&&(s.r=ci(s.r),s.g=ci(s.g),s.b=ci(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ye&&(s.r=Ms(s.r),s.g=Ms(s.g),s.b=Ms(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gi?pr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[fr]:{primaries:t,whitePoint:n,transfer:pr,toXYZ:Qh,fromXYZ:jh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:t,whitePoint:n,transfer:ye,toXYZ:Qh,fromXYZ:jh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}}),i}var de=Jp();function ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ms(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var as,ea=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{as===void 0&&(as=mr("canvas")),as.width=t.width,as.height=t.height;let s=as.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=as}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=mr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ci(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ci(e[n]/255)*255):e[n]=ci(e[n]);return{data:e,width:t.width,height:t.height}}else return ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Kp=0,As=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=is(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Jc(s[o].image)):r.push(Jc(s[o]))}else r=Jc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Jc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ea.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ee("Texture: Unable to serialize Texture."),{})}var Qp=0,Kc=new B,sn=class i extends Gn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=kn,s=kn,r=qe,o=pi,a=Un,c=hn,l=i.DEFAULT_ANISOTROPY,d=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=is(),this.name="",this.source=new As(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Kc).x}get height(){return this.source.getSize(Kc).y}get depth(){return this.source.getSize(Kc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){ee(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ee(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qo:t.x=t.x-Math.floor(t.x);break;case kn:t.x=t.x<0?0:1;break;case jo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qo:t.y=t.y-Math.floor(t.y);break;case kn:t.y=t.y<0?0:1;break;case jo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Vl;sn.DEFAULT_ANISOTROPY=1;var we=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],d=c[4],h=c[8],f=c[1],u=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(d-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(l+1)/2,M=(u+1)/2,b=(p+1)/2,S=(d+f)/4,y=(h+v)/4,w=(g+m)/4;return _>M&&_>b?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=S/n,r=y/n):M>b?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=S/s,r=w/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=y/r,s=w/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-d)*(f-d));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-v)/x,this.z=(f-d)/x,this.w=Math.acos((l+u+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this.w=ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this.w=ce(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},na=class extends Gn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new sn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new As(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},_n=class extends na{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},gr=class extends sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ia=class extends sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var fe=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,c,l,d,h,f,u,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,d,h,f,u,g,v,m)}set(t,e,n,s,r,o,a,c,l,d,h,f,u,g,v,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=d,p[10]=h,p[14]=f,p[3]=u,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/cs.setFromMatrixColumn(t,0).length(),r=1/cs.setFromMatrixColumn(t,1).length(),o=1/cs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let f=o*d,u=o*h,g=a*d,v=a*h;e[0]=c*d,e[4]=-c*h,e[8]=l,e[1]=u+g*l,e[5]=f-v*l,e[9]=-a*c,e[2]=v-f*l,e[6]=g+u*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*d,u=c*h,g=l*d,v=l*h;e[0]=f+v*a,e[4]=g*a-u,e[8]=o*l,e[1]=o*h,e[5]=o*d,e[9]=-a,e[2]=u*a-g,e[6]=v+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*d,u=c*h,g=l*d,v=l*h;e[0]=f-v*a,e[4]=-o*h,e[8]=g+u*a,e[1]=u+g*a,e[5]=o*d,e[9]=v-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*d,u=o*h,g=a*d,v=a*h;e[0]=c*d,e[4]=g*l-u,e[8]=f*l+v,e[1]=c*h,e[5]=v*l+f,e[9]=u*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,u=o*l,g=a*c,v=a*l;e[0]=c*d,e[4]=v-f*h,e[8]=g*h+u,e[1]=h,e[5]=o*d,e[9]=-a*d,e[2]=-l*d,e[6]=u*h+g,e[10]=f-v*h}else if(t.order==="XZY"){let f=o*c,u=o*l,g=a*c,v=a*l;e[0]=c*d,e[4]=-h,e[8]=l*d,e[1]=f*h+v,e[5]=o*d,e[9]=u*h-g,e[2]=g*h-u,e[6]=a*d,e[10]=v*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jp,t,t0)}lookAt(t,e,n){let s=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),yi.crossVectors(n,fn),yi.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),yi.crossVectors(n,fn)),yi.normalize(),vo.crossVectors(fn,yi),s[0]=yi.x,s[4]=vo.x,s[8]=fn.x,s[1]=yi.y,s[5]=vo.y,s[9]=fn.y,s[2]=yi.z,s[6]=vo.z,s[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],d=n[1],h=n[5],f=n[9],u=n[13],g=n[2],v=n[6],m=n[10],p=n[14],x=n[3],_=n[7],M=n[11],b=n[15],S=s[0],y=s[4],w=s[8],L=s[12],R=s[1],A=s[5],E=s[9],C=s[13],T=s[2],N=s[6],D=s[10],k=s[14],H=s[3],I=s[7],F=s[11],z=s[15];return r[0]=o*S+a*R+c*T+l*H,r[4]=o*y+a*A+c*N+l*I,r[8]=o*w+a*E+c*D+l*F,r[12]=o*L+a*C+c*k+l*z,r[1]=d*S+h*R+f*T+u*H,r[5]=d*y+h*A+f*N+u*I,r[9]=d*w+h*E+f*D+u*F,r[13]=d*L+h*C+f*k+u*z,r[2]=g*S+v*R+m*T+p*H,r[6]=g*y+v*A+m*N+p*I,r[10]=g*w+v*E+m*D+p*F,r[14]=g*L+v*C+m*k+p*z,r[3]=x*S+_*R+M*T+b*H,r[7]=x*y+_*A+M*N+b*I,r[11]=x*w+_*E+M*D+b*F,r[15]=x*L+_*C+M*k+b*z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],d=t[2],h=t[6],f=t[10],u=t[14],g=t[3],v=t[7],m=t[11],p=t[15],x=c*u-l*f,_=a*u-l*h,M=a*f-c*h,b=o*u-l*d,S=o*f-c*d,y=o*h-a*d;return e*(v*x-m*_+p*M)-n*(g*x-m*b+p*S)+s*(g*_-v*b+p*y)-r*(g*M-v*S+m*y)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],d=t[10];return e*(o*d-a*l)-n*(r*d-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],d=t[8],h=t[9],f=t[10],u=t[11],g=t[12],v=t[13],m=t[14],p=t[15],x=e*a-n*o,_=e*c-s*o,M=e*l-r*o,b=n*c-s*a,S=n*l-r*a,y=s*l-r*c,w=d*v-h*g,L=d*m-f*g,R=d*p-u*g,A=h*m-f*v,E=h*p-u*v,C=f*p-u*m,T=x*C-_*E+M*A+b*R-S*L+y*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/T;return t[0]=(a*C-c*E+l*A)*N,t[1]=(s*E-n*C-r*A)*N,t[2]=(v*y-m*S+p*b)*N,t[3]=(f*S-h*y-u*b)*N,t[4]=(c*R-o*C-l*L)*N,t[5]=(e*C-s*R+r*L)*N,t[6]=(m*M-g*y-p*_)*N,t[7]=(d*y-f*M+u*_)*N,t[8]=(o*E-a*R+l*w)*N,t[9]=(n*R-e*E-r*w)*N,t[10]=(g*S-v*M+p*x)*N,t[11]=(h*M-d*S-u*x)*N,t[12]=(a*L-o*A-c*w)*N,t[13]=(e*A-n*L+s*w)*N,t[14]=(v*_-g*b-m*x)*N,t[15]=(d*b-h*_+f*x)*N,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,d=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,d*a+n,d*c-s*o,0,l*c-s*a,d*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,d=o+o,h=a+a,f=r*l,u=r*d,g=r*h,v=o*d,m=o*h,p=a*h,x=c*l,_=c*d,M=c*h,b=n.x,S=n.y,y=n.z;return s[0]=(1-(v+p))*b,s[1]=(u+M)*b,s[2]=(g-_)*b,s[3]=0,s[4]=(u-M)*S,s[5]=(1-(f+p))*S,s[6]=(m+x)*S,s[7]=0,s[8]=(g+_)*y,s[9]=(m-x)*y,s[10]=(1-(f+v))*y,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=cs.set(s[0],s[1],s[2]).length(),a=cs.set(s[4],s[5],s[6]).length(),c=cs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),In.copy(this);let l=1/o,d=1/a,h=1/c;return In.elements[0]*=l,In.elements[1]*=l,In.elements[2]*=l,In.elements[4]*=d,In.elements[5]*=d,In.elements[6]*=d,In.elements[8]*=h,In.elements[9]*=h,In.elements[10]*=h,e.setFromRotationMatrix(In),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=bn,c=!1){let l=this.elements,d=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),u=(n+s)/(n-s),g,v;if(c)g=r/(o-r),v=o*r/(o-r);else if(a===bn)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===bs)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=bn,c=!1){let l=this.elements,d=2/(e-t),h=2/(n-s),f=-(e+t)/(e-t),u=-(n+s)/(n-s),g,v;if(c)g=1/(o-r),v=o/(o-r);else if(a===bn)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===bs)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},cs=new B,In=new fe,jp=new B(0,0,0),t0=new B(1,1,1),yi=new B,vo=new B,fn=new B,tu=new fe,eu=new Ye,Hn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],d=s[9],h=s[2],f=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ce(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ce(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,u),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ce(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ce(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,u),this._y=0);break;default:ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return tu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(tu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return eu.setFromEuler(this),this.setFromQuaternion(eu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Hn.DEFAULT_ORDER="XYZ";var Es=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},e0=0,nu=new B,ls=new Ye,ii=new fe,Mo=new B,er=new B,n0=new B,i0=new Ye,iu=new B(1,0,0),su=new B(0,1,0),ru=new B(0,0,1),ou={type:"added"},s0={type:"removed"},hs={type:"childadded",child:null},Qc={type:"childremoved",child:null},Te=class i extends Gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new B,e=new Hn,n=new Ye,s=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new re}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Es,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.multiply(ls),this}rotateOnWorldAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.premultiply(ls),this}rotateX(t){return this.rotateOnAxis(iu,t)}rotateY(t){return this.rotateOnAxis(su,t)}rotateZ(t){return this.rotateOnAxis(ru,t)}translateOnAxis(t,e){return nu.copy(t).applyQuaternion(this.quaternion),this.position.add(nu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(iu,t)}translateY(t){return this.translateOnAxis(su,t)}translateZ(t){return this.translateOnAxis(ru,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Mo.copy(t):Mo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(er,Mo,this.up):ii.lookAt(Mo,er,this.up),this.quaternion.setFromRotationMatrix(ii),s&&(ii.extractRotation(s.matrixWorld),ls.setFromRotationMatrix(ii),this.quaternion.premultiply(ls.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ie("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ou),hs.child=t,this.dispatchEvent(hs),hs.child=null):ie("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(s0),Qc.child=t,this.dispatchEvent(Qc),Qc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ou),hs.child=t,this.dispatchEvent(hs),hs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,t,n0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,i0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){let h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),d=o(t.images),h=o(t.shapes),f=o(t.skeletons),u=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let d=a[l];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Te.DEFAULT_UP=new B(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Jt=class extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}},r0={type:"move"},Cs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let d=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=d.position.distanceTo(h.position),u=.02,g=.005;l.inputState.pinching&&f>u+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=u-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(r0)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},md={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},So={h:0,s:0,l:0};function jc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var vt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=de.workingColorSpace){if(t=jl(t,1),e=ce(e,0,1),n=ce(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=jc(o,r,t+1/3),this.g=jc(o,r,t),this.b=jc(o,r,t-1/3)}return de.colorSpaceToWorking(this,s),this}setStyle(t,e=mn){function n(r){r!==void 0&&parseFloat(r)<1&&ee("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ee("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);ee("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=mn){let n=md[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ee("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ci(t.r),this.g=ci(t.g),this.b=ci(t.b),this}copyLinearToSRGB(t){return this.r=Ms(t.r),this.g=Ms(t.g),this.b=Ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=mn){return de.workingToColorSpace(Qe.copy(this),t),Math.round(ce(Qe.r*255,0,255))*65536+Math.round(ce(Qe.g*255,0,255))*256+Math.round(ce(Qe.b*255,0,255))}getHexString(t=mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.workingToColorSpace(Qe.copy(this),e);let n=Qe.r,s=Qe.g,r=Qe.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,d=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=d<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=d,t}getRGB(t,e=de.workingColorSpace){return de.workingToColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=mn){de.workingToColorSpace(Qe.copy(this),t);let e=Qe.r,n=Qe.g,s=Qe.b;return t!==mn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(vi),this.setHSL(vi.h+t,vi.s+e,vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(vi),t.getHSL(So);let n=lr(vi.h,So.h,e),s=lr(vi.s,So.s,e),r=lr(vi.l,So.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qe=new vt;vt.NAMES=md;var xr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new vt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Wi=class extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Pn=new B,si=new B,tl=new B,ri=new B,us=new B,ds=new B,au=new B,el=new B,nl=new B,il=new B,sl=new we,rl=new we,ol=new we,wi=class i{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Pn.subVectors(t,e),s.cross(Pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Pn.subVectors(s,e),si.subVectors(n,e),tl.subVectors(t,e);let o=Pn.dot(Pn),a=Pn.dot(si),c=Pn.dot(tl),l=si.dot(si),d=si.dot(tl),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,u=(l*c-a*d)*f,g=(o*d-a*c)*f;return r.set(1-u-g,g,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,ri)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ri.x),c.addScaledVector(o,ri.y),c.addScaledVector(a,ri.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return sl.setScalar(0),rl.setScalar(0),ol.setScalar(0),sl.fromBufferAttribute(t,e),rl.fromBufferAttribute(t,n),ol.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(sl,r.x),o.addScaledVector(rl,r.y),o.addScaledVector(ol,r.z),o}static isFrontFacing(t,e,n,s){return Pn.subVectors(n,e),si.subVectors(t,e),Pn.cross(si).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Pn.cross(si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;us.subVectors(s,n),ds.subVectors(r,n),el.subVectors(t,n);let c=us.dot(el),l=ds.dot(el);if(c<=0&&l<=0)return e.copy(n);nl.subVectors(t,s);let d=us.dot(nl),h=ds.dot(nl);if(d>=0&&h<=d)return e.copy(s);let f=c*h-d*l;if(f<=0&&c>=0&&d<=0&&c-d>0)return o=c/(c-d),e.copy(n).addScaledVector(us,o);il.subVectors(t,r);let u=us.dot(il),g=ds.dot(il);if(g>=0&&u<=g)return e.copy(r);let v=u*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ds,a);let m=d*g-u*h;if(m<=0&&h-d>=0&&u-g>=0)return au.subVectors(r,s),a=(h-d)/(h-d+(u-g)),e.copy(s).addScaledVector(au,a);let p=1/(m+v+f);return o=v*p,a=f*p,e.copy(n).addScaledVector(us,o).addScaledVector(ds,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},rn=class{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ln):Ln.fromBufferAttribute(r,o),Ln.applyMatrix4(t.matrixWorld),this.expandByPoint(Ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),bo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),bo.copy(n.boundingBox)),bo.applyMatrix4(t.matrixWorld),this.union(bo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ln),Ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(nr),wo.subVectors(this.max,nr),fs.subVectors(t.a,nr),ps.subVectors(t.b,nr),ms.subVectors(t.c,nr),Mi.subVectors(ps,fs),Si.subVectors(ms,ps),zi.subVectors(fs,ms);let e=[0,-Mi.z,Mi.y,0,-Si.z,Si.y,0,-zi.z,zi.y,Mi.z,0,-Mi.x,Si.z,0,-Si.x,zi.z,0,-zi.x,-Mi.y,Mi.x,0,-Si.y,Si.x,0,-zi.y,zi.x,0];return!al(e,fs,ps,ms,wo)||(e=[1,0,0,0,1,0,0,0,1],!al(e,fs,ps,ms,wo))?!1:(To.crossVectors(Mi,Si),e=[To.x,To.y,To.z],al(e,fs,ps,ms,wo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},oi=[new B,new B,new B,new B,new B,new B,new B,new B],Ln=new B,bo=new rn,fs=new B,ps=new B,ms=new B,Mi=new B,Si=new B,zi=new B,nr=new B,wo=new B,To=new B,ki=new B;function al(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ki.fromArray(i,r);let a=s.x*Math.abs(ki.x)+s.y*Math.abs(ki.y)+s.z*Math.abs(ki.z),c=t.dot(ki),l=e.dot(ki),d=n.dot(ki);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}var Ue=new B,Ao=new et,o0=0,Me=class extends Gn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:o0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=cd,this.updateRanges=[],this.gpuType=An,this.version=0,this._normalizationScale=t!==void 0?eh(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ao.fromBufferAttribute(this,e),Ao.applyMatrix3(t),this.setXY(e,Ao.x,Ao.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):fd(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):pd(t,this.array)}};var _r=class extends Me{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var yr=class extends Me{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Gt=class extends Me{constructor(t,e,n){super(new Float32Array(t),e,n)}},a0=new rn,ir=new B,cl=new B,an=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):a0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ir.subVectors(t,this.center);let e=ir.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ir,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ir.copy(t.center).add(cl)),this.expandByPoint(ir.copy(t.center).sub(cl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},c0=0,Sn=new fe,ll=new Te,gs=new B,pn=new rn,sr=new rn,He=new B,ae=class i extends Gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dp(t)?yr:_r)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new re().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Sn.makeRotationFromQuaternion(t),this.applyMatrix4(Sn),this}rotateX(t){return Sn.makeRotationX(t),this.applyMatrix4(Sn),this}rotateY(t){return Sn.makeRotationY(t),this.applyMatrix4(Sn),this}rotateZ(t){return Sn.makeRotationZ(t),this.applyMatrix4(Sn),this}translate(t,e,n){return Sn.makeTranslation(t,e,n),this.applyMatrix4(Sn),this}scale(t,e,n){return Sn.makeScale(t,e,n),this.applyMatrix4(Sn),this}lookAt(t){return ll.lookAt(t),ll.updateMatrix(),this.applyMatrix4(ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Gt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new an);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let n=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];sr.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(pn.min,sr.min),pn.expandByPoint(He),He.addVectors(pn.max,sr.max),pn.expandByPoint(He)):(pn.expandByPoint(sr.min),pn.expandByPoint(sr.max))}pn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)He.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(He));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)He.fromBufferAttribute(a,l),c&&(gs.fromBufferAttribute(t,l),He.add(gs)),s=Math.max(s,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Me(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[],l=new Uint8Array(n.count);for(let L=0;L<n.count;L++)a[L]=new B,c[L]=new B;let d=new B,h=new B,f=new B,u=new et,g=new et,v=new et,m=new B,p=new B;function x(L,R,A){l[L]=l[R]=l[A]=1,d.fromBufferAttribute(n,L),h.fromBufferAttribute(n,R),f.fromBufferAttribute(n,A),u.fromBufferAttribute(r,L),g.fromBufferAttribute(r,R),v.fromBufferAttribute(r,A),h.sub(d),f.sub(d),g.sub(u),v.sub(u);let E=1/(g.x*v.y-v.x*g.y);isFinite(E)&&(m.copy(h).multiplyScalar(v.y).addScaledVector(f,-g.y).multiplyScalar(E),p.copy(f).multiplyScalar(g.x).addScaledVector(h,-v.x).multiplyScalar(E),a[L].add(m),a[R].add(m),a[A].add(m),c[L].add(p),c[R].add(p),c[A].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let L=0,R=_.length;L<R;++L){let A=_[L],E=A.start,C=A.count;for(let T=E,N=E+C;T<N;T+=3)x(t.getX(T+0),t.getX(T+1),t.getX(T+2))}let M=new B,b=new B,S=new B,y=new B;function w(L){S.fromBufferAttribute(s,L),y.copy(S);let R=a[L];M.copy(R),M.sub(S.multiplyScalar(S.dot(R))).normalize(),b.crossVectors(y,R);let E=b.dot(c[L])<0?-1:1;o.setXYZW(L,M.x,M.y,M.z,E)}for(let L=0,R=n.count;L<R;++L)l[L]&&w(L);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Me(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);let s=new B,r=new B,o=new B,a=new B,c=new B,l=new B,d=new B,h=new B;if(t)for(let f=0,u=t.count;f<u;f+=3){let g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),d.subVectors(o,r),h.subVectors(s,r),d.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(d),c.add(d),l.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,u=e.count;f<u;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),d.subVectors(o,r),h.subVectors(s,r),d.cross(h),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(a,c){let l=a.array,d=a.itemSize,h=a.normalized,f=new l.constructor(c.length*d),u=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?u=c[v]*a.data.stride+a.offset:u=c[v]*d;for(let p=0;p<d;p++)f[g++]=l[u++]}return new Me(f,d,h)}if(this.index===null)return ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let d=0,h=l.length;d<h;d++){let f=l[d],u=t(f,n);c.push(u)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],d=[];for(let h=0,f=l.length;h<f;h++){let u=l[h];d.push(u.toJSON(t.data))}d.length>0&&(s[c]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let d=s[l];this.setAttribute(l,d.clone(e))}let r=t.morphAttributes;for(let l in r){let d=[],h=r[l];for(let f=0,u=h.length;f<u;f++)d.push(h[f].clone(e));this.morphAttributes[l]=d}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,d=o.length;l<d;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var hl=new B,l0=new B,h0=new re,gn=class{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=hl.subVectors(n,e).cross(l0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(hl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||h0.getNormalMatrix(t),s=this.coplanarPoint(hl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},u0=0,hi=class extends Gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=is(),this.name="",this.type="Material",this.blending=Fs,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ll,this.blendDst=Dl,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wo,this.stencilZFail=Wo,this.stencilZPass=Wo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){ee(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ee(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new vt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new gn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new et().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new et().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ai=new B,ul=new B,Eo=new B,Co=new B,vr=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ai.copy(this.origin).addScaledVector(this.direction,e),ai.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ul.copy(t).add(e).multiplyScalar(.5),Eo.copy(e).sub(t).normalize(),Co.copy(this.origin).sub(ul);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Eo),a=Co.dot(this.direction),c=-Co.dot(Eo),l=Co.lengthSq(),d=Math.abs(1-o*o),h,f,u,g;if(d>0)if(h=o*c-a,f=o*a-c,g=r*d,h>=0)if(f>=-g)if(f<=g){let v=1/d;h*=v,f*=v,u=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),u=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),u=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),u=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),u=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),u=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),u=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ul).addScaledVector(Eo,f),u}intersectSphere(t,e){if(t.radius<0)return null;ai.subVectors(t.center,this.origin);let n=ai.dot(this.direction),s=ai.dot(ai)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),d>=0?(r=(t.min.y-f.y)*d,o=(t.max.y-f.y)*d):(r=(t.max.y-f.y)*d,o=(t.min.y-f.y)*d),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ai)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,d=a.z,h=t.x-o.x,f=t.y-o.y,u=t.z-o.z,g=e.x-o.x,v=e.y-o.y,m=e.z-o.z,p=n.x-o.x,x=n.y-o.y,_=n.z-o.z,M=Math.abs(c),b=Math.abs(l),S=Math.abs(d),y,w,L,R,A,E,C,T,N,D,k,H;if(M>=b&&M>=S?(L=c,E=h,N=g,H=p,c>=0?(y=l,w=d,R=f,A=u,C=v,T=m,D=x,k=_):(y=d,w=l,R=u,A=f,C=m,T=v,D=_,k=x)):b>=S?(L=l,E=f,N=v,H=x,l>=0?(y=d,w=c,R=u,A=h,C=m,T=g,D=_,k=p):(y=c,w=d,R=h,A=u,C=g,T=m,D=p,k=_)):(L=d,E=u,N=m,H=_,d>=0?(y=c,w=l,R=h,A=f,C=g,T=v,D=p,k=x):(y=l,w=c,R=f,A=h,C=v,T=g,D=x,k=p)),L===0)return null;let I=y/L,F=w/L,z=1/L,X=R-I*E,j=A-F*E,q=C-I*N,Z=T-F*N,nt=D-I*H,rt=k-F*H,ct=nt*Z-rt*q,_t=X*rt-j*nt,Xt=q*j-Z*X;if(s){if(ct<0||_t<0||Xt<0)return null}else if((ct<0||_t<0||Xt<0)&&(ct>0||_t>0||Xt>0))return null;let Pt=ct+_t+Xt;if(Pt===0)return null;let Nt=z*(ct*E+_t*N+Xt*H);return(Pt>0?Nt<0:Nt>0)?null:this.at(Nt/Pt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$e=class extends hi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=Aa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},cu=new fe,Vi=new vr,Ro=new an,lu=new B,Io=new B,Po=new B,Lo=new B,dl=new B,Do=new B,hu=new B,No=new B,se=class extends Te{constructor(t=new ae,e=new $e){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Do.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let d=a[c],h=r[c];d!==0&&(dl.fromBufferAttribute(h,t),o?Do.addScaledVector(dl,d):Do.addScaledVector(dl.sub(e),d))}e.add(Do)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(r),Vi.copy(t.ray).recast(t.near),!(Ro.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(Ro,lu)===null||Vi.origin.distanceToSquared(lu)>(t.far-t.near)**2))&&(cu.copy(r).invert(),Vi.copy(t.ray).applyMatrix4(cu),!(n.boundingBox!==null&&Vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let m=f[g],p=o[m.materialIndex],x=Math.max(m.start,u.start),_=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let M=x,b=_;M<b;M+=3){let S=a.getX(M),y=a.getX(M+1),w=a.getX(M+2);s=Uo(this,p,t,n,l,d,h,S,y,w),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,u.start),v=Math.min(a.count,u.start+u.count);for(let m=g,p=v;m<p;m+=3){let x=a.getX(m),_=a.getX(m+1),M=a.getX(m+2);s=Uo(this,o,t,n,l,d,h,x,_,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let m=f[g],p=o[m.materialIndex],x=Math.max(m.start,u.start),_=Math.min(c.count,Math.min(m.start+m.count,u.start+u.count));for(let M=x,b=_;M<b;M+=3){let S=M,y=M+1,w=M+2;s=Uo(this,p,t,n,l,d,h,S,y,w),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,u.start),v=Math.min(c.count,u.start+u.count);for(let m=g,p=v;m<p;m+=3){let x=m,_=m+1,M=m+2;s=Uo(this,o,t,n,l,d,h,x,_,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function d0(i,t,e,n,s,r,o,a){let c;if(t.side===on?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Ii,a),c===null)return null;No.copy(a),No.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(No);return l<e.near||l>e.far?null:{distance:l,point:No.clone(),object:i}}function Uo(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Io),i.getVertexPosition(c,Po),i.getVertexPosition(l,Lo);let d=d0(i,t,e,n,Io,Po,Lo,hu);if(d){let h=new B;wi.getBarycoord(hu,Io,Po,Lo,h),s&&(d.uv=wi.getInterpolatedAttribute(s,a,c,l,h,new et)),r&&(d.uv1=wi.getInterpolatedAttribute(r,a,c,l,h,new et)),o&&(d.normal=wi.getInterpolatedAttribute(o,a,c,l,h,new B),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new B,materialIndex:0};wi.getNormal(Io,Po,Lo,f.normal),d.face=f,d.barycoord=h}return d}var Xi=class extends sn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=We,d=We,h,f){super(null,o,a,c,l,d,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rs=class extends Me{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},xs=new fe,uu=new fe,Fo=[],du=new rn,f0=new fe,rr=new se,or=new an,cn=class extends se{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Rs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,f0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new rn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xs),du.copy(t.boundingBox).applyMatrix4(xs),this.boundingBox.union(du)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new an),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xs),or.copy(t.boundingSphere).applyMatrix4(xs),this.boundingSphere.union(or)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(rr.geometry=this.geometry,rr.material=this.material,rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),or.copy(this.boundingSphere),or.applyMatrix4(n),t.ray.intersectsSphere(or)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,xs),uu.multiplyMatrices(n,xs),rr.matrixWorld=uu,rr.raycast(t,Fo);for(let o=0,a=Fo.length;o<a;o++){let c=Fo[o];c.instanceId=r,c.object=this,e.push(c)}Fo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Rs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Xi(new Float32Array(s*this.count),s,this.count,zs,An));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Gi=new an,p0=new et(.5,.5),Oo=new B,Ti=class{constructor(t=new gn,e=new gn,n=new gn,s=new gn,r=new gn,o=new gn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],d=r[4],h=r[5],f=r[6],u=r[7],g=r[8],v=r[9],m=r[10],p=r[11],x=r[12],_=r[13],M=r[14],b=r[15];if(s[0].setComponents(l-o,u-d,p-g,b-x).normalize(),s[1].setComponents(l+o,u+d,p+g,b+x).normalize(),s[2].setComponents(l+a,u+h,p+v,b+_).normalize(),s[3].setComponents(l-a,u-h,p-v,b-_).normalize(),n)s[4].setComponents(c,f,m,M).normalize(),s[5].setComponents(l-c,u-f,p-m,b-M).normalize();else if(s[4].setComponents(l-c,u-f,p-m,b-M).normalize(),e===bn)s[5].setComponents(l+c,u+f,p+m,b+M).normalize();else if(e===bs)s[5].setComponents(c,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(t){Gi.center.set(0,0,0);let e=p0.distanceTo(t.center);return Gi.radius=.7071067811865476+e,Gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Oo.x=s.normal.x>0?t.max.x:t.min.x,Oo.y=s.normal.y>0?t.max.y:t.min.y,Oo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Oo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},fu=new fe,sa=class i{constructor(){this.coordinateSystem=bn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];fu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ti),n[s].setFromProjectionMatrix(fu,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Ti),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Mr=class extends sn{constructor(t=[],e=es,n,s,r,o,a,c,l,d){super(t,e,n,s,r,o,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},qi=class extends sn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ui=class extends sn{constructor(t,e,n=Dn,s,r,o,a=We,c=We,l,d=li,h=1){if(d!==li&&d!==mi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:h};super(f,s,r,o,a,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new As(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Sr=class extends ui{constructor(t,e=Dn,n=es,s,r,o=We,a=We,c,l=li){let d={width:t,height:t,depth:1},h=[d,d,d,d,d,d];super(t,t,e,n,s,r,o,a,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},br=class extends sn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},wn=class i extends ae{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],d=[],h=[],f=0,u=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Gt(l,3)),this.setAttribute("normal",new Gt(d,3)),this.setAttribute("uv",new Gt(h,2));function g(v,m,p,x,_,M,b,S,y,w,L){let R=M/y,A=b/w,E=M/2,C=b/2,T=S/2,N=y+1,D=w+1,k=0,H=0,I=new B;for(let F=0;F<D;F++){let z=F*A-C;for(let X=0;X<N;X++){let j=X*R-E;I[v]=j*x,I[m]=z*_,I[p]=T,l.push(I.x,I.y,I.z),I[v]=0,I[m]=0,I[p]=S>0?1:-1,d.push(I.x,I.y,I.z),h.push(X/y),h.push(1-F/w),k+=1}}for(let F=0;F<w;F++)for(let z=0;z<y;z++){let X=f+z+N*F,j=f+z+N*(F+1),q=f+(z+1)+N*(F+1),Z=f+(z+1)+N*F;c.push(X,j,Z),c.push(j,q,Z),H+=6}a.addGroup(u,H,L),u+=H,f+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Wn=class i extends ae{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let d=[],h=[],f=[],u=[],g=0,v=[],m=n/2,p=0;x(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(d),this.setAttribute("position",new Gt(h,3)),this.setAttribute("normal",new Gt(f,3)),this.setAttribute("uv",new Gt(u,2));function x(){let M=new B,b=new B,S=0,y=(e-t)/n;for(let w=0;w<=r;w++){let L=[],R=w/r,A=R*(e-t)+t;for(let E=0;E<=s;E++){let C=E/s,T=C*c+a,N=Math.sin(T),D=Math.cos(T);b.x=A*N,b.y=-R*n+m,b.z=A*D,h.push(b.x,b.y,b.z),M.set(N,y,D).normalize(),f.push(M.x,M.y,M.z),u.push(C,1-R),L.push(g++)}v.push(L)}for(let w=0;w<s;w++)for(let L=0;L<r;L++){let R=v[L][w],A=v[L+1][w],E=v[L+1][w+1],C=v[L][w+1];(t>0||L!==0)&&(d.push(R,A,C),S+=3),(e>0||L!==r-1)&&(d.push(A,E,C),S+=3)}l.addGroup(p,S,0),p+=S}function _(M){let b=g,S=new et,y=new B,w=0,L=M===!0?t:e,R=M===!0?1:-1;for(let E=1;E<=s;E++)h.push(0,m*R,0),f.push(0,R,0),u.push(.5,.5),g++;let A=g;for(let E=0;E<=s;E++){let T=E/s*c+a,N=Math.cos(T),D=Math.sin(T);y.x=L*D,y.y=m*R,y.z=L*N,h.push(y.x,y.y,y.z),f.push(0,R,0),S.x=N*.5+.5,S.y=D*.5*R+.5,u.push(S.x,S.y),g++}for(let E=0;E<s;E++){let C=b+E,T=A+E;M===!0?d.push(T,T+1,C):d.push(T+1,T,C),w+=3}l.addGroup(p,w,M===!0?1:2),p+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},wr=class i extends Wn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Tr=class i extends ae{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),d(),this.setAttribute("position",new Gt(r,3)),this.setAttribute("normal",new Gt(r.slice(),3)),this.setAttribute("uv",new Gt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let _=new B,M=new B,b=new B;for(let S=0;S<e.length;S+=3)u(e[S+0],_),u(e[S+1],M),u(e[S+2],b),c(_,M,b,x)}function c(x,_,M,b){let S=b+1,y=[];for(let w=0;w<=S;w++){y[w]=[];let L=x.clone().lerp(M,w/S),R=_.clone().lerp(M,w/S),A=S-w;for(let E=0;E<=A;E++)E===0&&w===S?y[w][E]=L:y[w][E]=L.clone().lerp(R,E/A)}for(let w=0;w<S;w++)for(let L=0;L<2*(S-w)-1;L++){let R=Math.floor(L/2);L%2===0?(f(y[w][R+1]),f(y[w+1][R]),f(y[w][R])):(f(y[w][R+1]),f(y[w+1][R+1]),f(y[w+1][R]))}}function l(x){let _=new B;for(let M=0;M<r.length;M+=3)_.x=r[M+0],_.y=r[M+1],_.z=r[M+2],_.normalize().multiplyScalar(x),r[M+0]=_.x,r[M+1]=_.y,r[M+2]=_.z}function d(){let x=new B;for(let _=0;_<r.length;_+=3){x.x=r[_+0],x.y=r[_+1],x.z=r[_+2];let M=m(x)/2/Math.PI+.5,b=p(x)/Math.PI+.5;o.push(M,1-b)}g(),h()}function h(){for(let x=0;x<o.length;x+=6){let _=o[x+0],M=o[x+2],b=o[x+4],S=Math.max(_,M,b),y=Math.min(_,M,b);S>.9&&y<.1&&(_<.2&&(o[x+0]+=1),M<.2&&(o[x+2]+=1),b<.2&&(o[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function u(x,_){let M=x*3;_.x=t[M+0],_.y=t[M+1],_.z=t[M+2]}function g(){let x=new B,_=new B,M=new B,b=new B,S=new et,y=new et,w=new et;for(let L=0,R=0;L<r.length;L+=9,R+=6){x.set(r[L+0],r[L+1],r[L+2]),_.set(r[L+3],r[L+4],r[L+5]),M.set(r[L+6],r[L+7],r[L+8]),S.set(o[R+0],o[R+1]),y.set(o[R+2],o[R+3]),w.set(o[R+4],o[R+5]),b.copy(x).add(_).add(M).divideScalar(3);let A=m(b);v(S,R+0,x,A),v(y,R+2,_,A),v(w,R+4,M,A)}}function v(x,_,M,b){b<0&&x.x===1&&(o[_]=x.x-1),M.x===0&&M.z===0&&(o[_]=b/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ee("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let d=n[s],f=n[s+1]-d,u=(o-d)/f;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new et:new B);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new B,s=[],r=[],o=[],a=new B,c=new fe;for(let u=0;u<=t;u++){let g=u/t;s[u]=this.getTangentAt(g,new B)}r[0]=new B,o[0]=new B;let l=Number.MAX_VALUE,d=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);d<=l&&(l=d,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ce(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(c.makeRotationAxis(a,g))}o[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(ce(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],u*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Is=class extends yn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new et){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let d=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,u=l-this.aY;c=f*d-u*h+this.aX,l=f*h+u*d+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ra=class extends Is{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function nh(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,d,h){let f=(o-r)/l-(a-r)/(l+d)+(a-o)/d,u=(a-o)/d-(c-o)/(d+h)+(c-a)/h;f*=d,u*=d,s(o,a,f,u)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var pu=new B,mu=new B,fl=new nh,pl=new nh,ml=new nh,Yi=class extends yn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new B){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,d;this.closed||a>0?l=s[(a-1)%r]:(mu.subVectors(s[0],s[1]).add(s[0]),l=mu);let h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?d=s[(a+2)%r]:(pu.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=pu),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(h),u),v=Math.pow(h.distanceToSquared(f),u),m=Math.pow(f.distanceToSquared(d),u);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),fl.initNonuniformCatmullRom(l.x,h.x,f.x,d.x,g,v,m),pl.initNonuniformCatmullRom(l.y,h.y,f.y,d.y,g,v,m),ml.initNonuniformCatmullRom(l.z,h.z,f.z,d.z,g,v,m)}else this.curveType==="catmullrom"&&(fl.initCatmullRom(l.x,h.x,f.x,d.x,this.tension),pl.initCatmullRom(l.y,h.y,f.y,d.y,this.tension),ml.initCatmullRom(l.z,h.z,f.z,d.z,this.tension));return n.set(fl.calc(c),pl.calc(c),ml.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new B().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function gu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function m0(i,t){let e=1-i;return e*e*t}function g0(i,t){return 2*(1-i)*i*t}function x0(i,t){return i*i*t}function hr(i,t,e,n){return m0(i,t)+g0(i,e)+x0(i,n)}function _0(i,t){let e=1-i;return e*e*e*t}function y0(i,t){let e=1-i;return 3*e*e*i*t}function v0(i,t){return 3*(1-i)*i*i*t}function M0(i,t){return i*i*i*t}function ur(i,t,e,n,s){return _0(i,t)+y0(i,e)+v0(i,n)+M0(i,s)}var Ar=class extends yn{constructor(t=new et,e=new et,n=new et,s=new et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new et){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ur(t,s.x,r.x,o.x,a.x),ur(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},oa=class extends yn{constructor(t=new B,e=new B,n=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new B){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ur(t,s.x,r.x,o.x,a.x),ur(t,s.y,r.y,o.y,a.y),ur(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Er=class extends yn{constructor(t=new et,e=new et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new et){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},aa=class extends yn{constructor(t=new B,e=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new B){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new B){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Cr=class extends yn{constructor(t=new et,e=new et,n=new et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new et){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(hr(t,s.x,r.x,o.x),hr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Rr=class extends yn{constructor(t=new B,e=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new B){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(hr(t,s.x,r.x,o.x),hr(t,s.y,r.y,o.y),hr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$i=class extends yn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new et){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],d=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(gu(a,c.x,l.x,d.x,h.x),gu(a,c.y,l.y,d.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new et().fromArray(s))}return this}},ca=Object.freeze({__proto__:null,ArcCurve:ra,CatmullRomCurve3:Yi,CubicBezierCurve:Ar,CubicBezierCurve3:oa,EllipseCurve:Is,LineCurve:Er,LineCurve3:aa,QuadraticBezierCurve:Cr,QuadraticBezierCurve3:Rr,SplineCurve:$i}),la=class extends yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ca[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let d=c[l];n&&n.equals(d)||(e.push(d),n=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new ca[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Ir=class extends la{constructor(t){super(),this.type="Path",this.currentPoint=new et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Er(this.currentPoint.clone(),new et(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Cr(this.currentPoint.clone(),new et(t,e),new et(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Ar(this.currentPoint.clone(),new et(t,e),new et(n,s),new et(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new $i(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+l,e+d,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new Is(t,e,n,s,r,o,a,c);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let d=l.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Xn=class extends Ir{constructor(t){super(t),this.uuid=is(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ir().fromJSON(s))}return this}};function S0(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=gd(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=E0(i,t,r,e)),i.length>80*e){a=i[0],c=i[1];let d=a,h=c;for(let f=e;f<s;f+=e){let u=i[f],g=i[f+1];u<a&&(a=u),g<c&&(c=g),u>d&&(d=u),g>h&&(h=g)}l=Math.max(d-a,h-c),l=l!==0?32767/l:0}return Pr(r,o,e,a,c,l,0),o}function gd(i,t,e,n,s){let r;if(s===B0(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=xu(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=xu(o/n|0,i[o],i[o+1],r);return r&&Ps(r,r.next)&&(Dr(r),r=r.next),r}function Zi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ps(e,e.next)||Ie(e.prev,e,e.next)===0)){if(Dr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Pr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&L0(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?w0(i,n,s,r):b0(i)){t.push(c.i,i.i,l.i),Dr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=T0(Zi(i),t),Pr(i,t,e,n,s,r,2)):o===2&&A0(i,t,e,n,s,r):Pr(Zi(i),t,e,n,s,r,1);break}}}function b0(i){let t=i.prev,e=i,n=i.next;if(Ie(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,d=Math.min(s,r,o),h=Math.min(a,c,l),f=Math.max(s,r,o),u=Math.max(a,c,l),g=n.next;for(;g!==t;){if(g.x>=d&&g.x<=f&&g.y>=h&&g.y<=u&&ar(s,a,r,c,o,l,g.x,g.y)&&Ie(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function w0(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ie(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,d=s.y,h=r.y,f=o.y,u=Math.min(a,c,l),g=Math.min(d,h,f),v=Math.max(a,c,l),m=Math.max(d,h,f),p=Ml(u,g,t,e,n),x=Ml(v,m,t,e,n),_=i.prevZ,M=i.nextZ;for(;_&&_.z>=p&&M&&M.z<=x;){if(_.x>=u&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&ar(a,d,c,h,l,f,_.x,_.y)&&Ie(_.prev,_,_.next)>=0||(_=_.prevZ,M.x>=u&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&ar(a,d,c,h,l,f,M.x,M.y)&&Ie(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;_&&_.z>=p;){if(_.x>=u&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&ar(a,d,c,h,l,f,_.x,_.y)&&Ie(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;M&&M.z<=x;){if(M.x>=u&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&ar(a,d,c,h,l,f,M.x,M.y)&&Ie(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function T0(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ps(n,s)&&_d(n,e,e.next,s)&&Lr(n,s)&&Lr(s,n)&&(t.push(n.i,e.i,s.i),Dr(e),Dr(e.next),e=i=s),e=e.next}while(e!==i);return Zi(e)}function A0(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&U0(o,a)){let c=yd(o,a);o=Zi(o,o.next),c=Zi(c,c.next),Pr(o,t,e,n,s,r,0),Pr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function E0(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=gd(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(N0(l))}s.sort(C0);for(let r=0;r<s.length;r++)e=R0(s[r],e);return e}function C0(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function R0(i,t){let e=I0(i,t);if(!e)return t;let n=yd(e,i);return Zi(n,n.next),Zi(e,e.next)}function I0(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Ps(i,e))return e;do{if(Ps(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let h=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>r&&(r=h,o=e.x<e.next.x?e:e.next,h===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,d=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&xd(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let h=Math.abs(s-e.y)/(n-e.x);Lr(e,i)&&(h<d||h===d&&(e.x>o.x||e.x===o.x&&P0(o,e)))&&(o=e,d=h)}e=e.next}while(e!==a);return o}function P0(i,t){return Ie(i.prev,i,t.prev)<0&&Ie(t.next,i,i.next)<0}function L0(i,t,e,n){let s=i;do s.z===0&&(s.z=Ml(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,D0(s)}function D0(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Ml(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function N0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function xd(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function ar(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&xd(i,t,e,n,s,r,o,a)}function U0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!F0(i,t)&&(Lr(i,t)&&Lr(t,i)&&O0(i,t)&&(Ie(i.prev,i,t.prev)||Ie(i,t.prev,t))||Ps(i,t)&&Ie(i.prev,i,i.next)>0&&Ie(t.prev,t,t.next)>0)}function Ie(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ps(i,t){return i.x===t.x&&i.y===t.y}function _d(i,t,e,n){let s=zo(Ie(i,t,e)),r=zo(Ie(i,t,n)),o=zo(Ie(e,n,i)),a=zo(Ie(e,n,t));return!!(s!==r&&o!==a||s===0&&Bo(i,e,t)||r===0&&Bo(i,n,t)||o===0&&Bo(e,i,n)||a===0&&Bo(e,t,n))}function Bo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function zo(i){return i>0?1:i<0?-1:0}function F0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&_d(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Lr(i,t){return Ie(i.prev,i,i.next)<0?Ie(i,t,i.next)>=0&&Ie(i,i.prev,t)>=0:Ie(i,t,i.prev)<0||Ie(i,i.next,t)<0}function O0(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function yd(i,t){let e=Sl(i.i,i.x,i.y),n=Sl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function xu(i,t,e,n){let s=Sl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Dr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Sl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function B0(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var bl=class{static triangulate(t,e,n=2){return S0(t,e,n)}},Vn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];_u(t),yu(n,t);let o=t.length;e.forEach(_u);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,yu(n,e[c]);let a=bl.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function _u(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function yu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ls=class i extends ae{constructor(t=new Xn([new et(.5,.5),new et(-.5,.5),new et(-.5,-.5),new et(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new Gt(s,3)),this.setAttribute("uv",new Gt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,d=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:u-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:z0,_,M=!1,b,S,y,w;if(p){_=p.getSpacedPoints(d),M=!0,f=!1;let dt=p.isCatmullRomCurve3?p.closed:!1;b=p.computeFrenetFrames(d,dt),S=new B,y=new B,w=new B}f||(m=0,u=0,g=0,v=0);let L=a.extractPoints(l),R=L.shape,A=L.holes;if(!Vn.isClockWise(R)){R=R.reverse();for(let dt=0,Mt=A.length;dt<Mt;dt++){let yt=A[dt];Vn.isClockWise(yt)&&(A[dt]=yt.reverse())}}function C(dt){let yt=10000000000000001e-36,Rt=dt[0];for(let It=1;It<=dt.length;It++){let V=It%dt.length,J=dt[V],gt=J.x-Rt.x,Ut=J.y-Rt.y,At=gt*gt+Ut*Ut,G=Math.max(Math.abs(J.x),Math.abs(J.y),Math.abs(Rt.x),Math.abs(Rt.y)),jt=yt*G*G;if(At<=jt){dt.splice(V,1),It--;continue}Rt=J}}C(R),A.forEach(C);let T=A.length,N=R;for(let dt=0;dt<T;dt++){let Mt=A[dt];R=R.concat(Mt)}function D(dt,Mt,yt){return Mt||ie("ExtrudeGeometry: vec does not exist"),dt.clone().addScaledVector(Mt,yt)}let k=R.length;function H(dt,Mt,yt){let Rt,It,V,J=dt.x-Mt.x,gt=dt.y-Mt.y,Ut=yt.x-dt.x,At=yt.y-dt.y,G=J*J+gt*gt,jt=J*At-gt*Ut;if(Math.abs(jt)>Number.EPSILON){let qt=Math.sqrt(G),Bt=Math.sqrt(Ut*Ut+At*At),ht=Mt.x-gt/qt,te=Mt.y+J/qt,kt=yt.x-At/Bt,Qt=yt.y+Ut/Bt,O=((kt-ht)*At-(Qt-te)*Ut)/(J*At-gt*Ut);Rt=ht+J*O-dt.x,It=te+gt*O-dt.y;let P=Rt*Rt+It*It;if(P<=2)return new et(Rt,It);V=Math.sqrt(P/2)}else{let qt=!1;J>Number.EPSILON?Ut>Number.EPSILON&&(qt=!0):J<-Number.EPSILON?Ut<-Number.EPSILON&&(qt=!0):Math.sign(gt)===Math.sign(At)&&(qt=!0),qt?(Rt=-gt,It=J,V=Math.sqrt(G)):(Rt=J,It=gt,V=Math.sqrt(G/2))}return new et(Rt/V,It/V)}let I=[];for(let dt=0,Mt=N.length,yt=Mt-1,Rt=dt+1;dt<Mt;dt++,yt++,Rt++)yt===Mt&&(yt=0),Rt===Mt&&(Rt=0),I[dt]=H(N[dt],N[yt],N[Rt]);let F=[],z,X=I.concat();for(let dt=0,Mt=T;dt<Mt;dt++){let yt=A[dt];z=[];for(let Rt=0,It=yt.length,V=It-1,J=Rt+1;Rt<It;Rt++,V++,J++)V===It&&(V=0),J===It&&(J=0),z[Rt]=H(yt[Rt],yt[V],yt[J]);F.push(z),X=X.concat(z)}let j;if(m===0)j=Vn.triangulateShape(N,A);else{let dt=[],Mt=[];for(let yt=0;yt<m;yt++){let Rt=yt/m,It=u*Math.cos(Rt*Math.PI/2),V=g*Math.sin(Rt*Math.PI/2)+v;for(let J=0,gt=N.length;J<gt;J++){let Ut=D(N[J],I[J],V);_t(Ut.x,Ut.y,-It),Rt===0&&dt.push(Ut)}for(let J=0,gt=T;J<gt;J++){let Ut=A[J];z=F[J];let At=[];for(let G=0,jt=Ut.length;G<jt;G++){let qt=D(Ut[G],z[G],V);_t(qt.x,qt.y,-It),Rt===0&&At.push(qt)}Rt===0&&Mt.push(At)}}j=Vn.triangulateShape(dt,Mt)}let q=j.length,Z=g+v;for(let dt=0;dt<k;dt++){let Mt=f?D(R[dt],X[dt],Z):R[dt];M?(y.copy(b.normals[0]).multiplyScalar(Mt.x),S.copy(b.binormals[0]).multiplyScalar(Mt.y),w.copy(_[0]).add(y).add(S),_t(w.x,w.y,w.z)):_t(Mt.x,Mt.y,0)}for(let dt=1;dt<=d;dt++)for(let Mt=0;Mt<k;Mt++){let yt=f?D(R[Mt],X[Mt],Z):R[Mt];M?(y.copy(b.normals[dt]).multiplyScalar(yt.x),S.copy(b.binormals[dt]).multiplyScalar(yt.y),w.copy(_[dt]).add(y).add(S),_t(w.x,w.y,w.z)):_t(yt.x,yt.y,h/d*dt)}for(let dt=m-1;dt>=0;dt--){let Mt=dt/m,yt=u*Math.cos(Mt*Math.PI/2),Rt=g*Math.sin(Mt*Math.PI/2)+v;for(let It=0,V=N.length;It<V;It++){let J=D(N[It],I[It],Rt);_t(J.x,J.y,h+yt)}for(let It=0,V=A.length;It<V;It++){let J=A[It];z=F[It];for(let gt=0,Ut=J.length;gt<Ut;gt++){let At=D(J[gt],z[gt],Rt);M?_t(At.x,At.y+_[d-1].y,_[d-1].x+yt):_t(At.x,At.y,h+yt)}}}nt(),rt();function nt(){let dt=s.length/3;if(f){let Mt=0,yt=k*Mt;for(let Rt=0;Rt<q;Rt++){let It=j[Rt];Xt(It[2]+yt,It[1]+yt,It[0]+yt)}Mt=d+m*2,yt=k*Mt;for(let Rt=0;Rt<q;Rt++){let It=j[Rt];Xt(It[0]+yt,It[1]+yt,It[2]+yt)}}else{for(let Mt=0;Mt<q;Mt++){let yt=j[Mt];Xt(yt[2],yt[1],yt[0])}for(let Mt=0;Mt<q;Mt++){let yt=j[Mt];Xt(yt[0]+k*d,yt[1]+k*d,yt[2]+k*d)}}n.addGroup(dt,s.length/3-dt,0)}function rt(){let dt=s.length/3,Mt=0;ct(N,Mt),Mt+=N.length;for(let yt=0,Rt=A.length;yt<Rt;yt++){let It=A[yt];ct(It,Mt),Mt+=It.length}n.addGroup(dt,s.length/3-dt,1)}function ct(dt,Mt){let yt=dt.length;for(;--yt>=0;){let Rt=yt,It=yt-1;It<0&&(It=dt.length-1);for(let V=0,J=d+m*2;V<J;V++){let gt=k*V,Ut=k*(V+1),At=Mt+Rt+gt,G=Mt+It+gt,jt=Mt+It+Ut,qt=Mt+Rt+Ut;Pt(At,G,jt,qt)}}}function _t(dt,Mt,yt){c.push(dt),c.push(Mt),c.push(yt)}function Xt(dt,Mt,yt){Nt(dt),Nt(Mt),Nt(yt);let Rt=s.length/3,It=x.generateTopUV(n,s,Rt-3,Rt-2,Rt-1);Ht(It[0]),Ht(It[1]),Ht(It[2])}function Pt(dt,Mt,yt,Rt){Nt(dt),Nt(Mt),Nt(Rt),Nt(Mt),Nt(yt),Nt(Rt);let It=s.length/3,V=x.generateSideWallUV(n,s,It-6,It-3,It-2,It-1);Ht(V[0]),Ht(V[1]),Ht(V[3]),Ht(V[1]),Ht(V[2]),Ht(V[3])}function Nt(dt){s.push(c[dt*3+0]),s.push(c[dt*3+1]),s.push(c[dt*3+2])}function Ht(dt){r.push(dt.x),r.push(dt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return k0(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ca[s.type]().fromJSON(s)),new i(n,t.options)}},z0={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],d=t[s*3+1];return[new et(r,o),new et(a,c),new et(l,d)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],d=t[n*3+1],h=t[n*3+2],f=t[s*3],u=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-d)<Math.abs(o-l)?[new et(o,1-c),new et(l,1-h),new et(f,1-g),new et(v,1-p)]:[new et(a,1-c),new et(d,1-h),new et(u,1-g),new et(m,1-p)]}};function k0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var di=class i extends Tr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Ji=class i extends ae{constructor(t=[new et(0,-.5),new et(.5,0),new et(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ce(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],d=1/e,h=new B,f=new et,u=new B,g=new B,v=new B,m=0,p=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,u.x=p*1,u.y=-m,u.z=p*0,v.copy(u),u.normalize(),c.push(u.x,u.y,u.z);break;case t.length-1:v.normalize(),c.push(v.x,v.y,v.z);break;default:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,u.x=p*1,u.y=-m,u.z=p*0,g.copy(u),u.x+=v.x,u.y+=v.y,u.z+=v.z,u.normalize(),c.push(u.x,u.y,u.z),v.copy(g)}for(let x=0;x<=e;x++){let _=n+x*d*s,M=Math.sin(_),b=Math.cos(_);for(let S=0;S<=t.length-1;S++){h.x=t[S].x*M,h.y=t[S].y,h.z=t[S].x*b,o.push(h.x,h.y,h.z),f.x=x/e,f.y=S/(t.length-1),a.push(f.x,f.y);let y=c[3*S+0]*M,w=c[3*S+1],L=c[3*S+0]*b;l.push(y,w,L)}}for(let x=0;x<e;x++)for(let _=0;_<t.length-1;_++){let M=_+x*t.length,b=M,S=M+t.length,y=M+t.length+1,w=M+1;r.push(b,S,w),r.push(y,w,S)}this.setIndex(r),this.setAttribute("position",new Gt(o,3)),this.setAttribute("uv",new Gt(a,2)),this.setAttribute("normal",new Gt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Nr=class i extends Tr{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Ki=class i extends ae{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,d=c+1,h=t/a,f=e/c,u=[],g=[],v=[],m=[];for(let p=0;p<d;p++){let x=p*f-o;for(let _=0;_<l;_++){let M=_*h-r;g.push(M,-x,0),v.push(0,0,1),m.push(_/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<a;x++){let _=x+l*p,M=x+l*(p+1),b=x+1+l*(p+1),S=x+1+l*p;u.push(_,M,S),u.push(M,b,S)}this.setIndex(u),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(v,3)),this.setAttribute("uv",new Gt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ur=class i extends ae{constructor(t=new Xn([new et(0,.5),new et(-.5,-.5),new et(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let d=0;d<t.length;d++)l(t[d]),this.addGroup(a,c,d),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Gt(s,3)),this.setAttribute("normal",new Gt(r,3)),this.setAttribute("uv",new Gt(o,2));function l(d){let h=s.length/3,f=d.extractPoints(e),u=f.shape,g=f.holes;Vn.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,p=g.length;m<p;m++){let x=g[m];Vn.isClockWise(x)===!0&&(g[m]=x.reverse())}let v=Vn.triangulateShape(u,g);for(let m=0,p=g.length;m<p;m++){let x=g[m];u=u.concat(x)}for(let m=0,p=u.length;m<p;m++){let x=u[m];s.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let m=0,p=v.length;m<p;m++){let x=v[m],_=x[0]+h,M=x[1]+h,b=x[2]+h;n.push(_,M,b),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return V0(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function V0(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Ai=class i extends ae{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,d=[],h=new B,f=new B,u=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let x=[],_=p/n,M=o+_*a,b=t*Math.cos(M),S=Math.sqrt(t*t-b*b),y=0;p===0&&o===0?y=.5/e:p===n&&c===Math.PI&&(y=-.5/e);for(let w=0;w<=e;w++){let L=w/e,R=s+L*r;h.x=-S*Math.cos(R),h.y=b,h.z=S*Math.sin(R),g.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),m.push(L+y,1-_),x.push(l++)}d.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){let _=d[p][x+1],M=d[p][x],b=d[p+1][x],S=d[p+1][x+1];(p!==0||o>0)&&u.push(_,M,S),(p!==n-1||c<Math.PI)&&u.push(M,b,S)}this.setIndex(u),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(v,3)),this.setAttribute("uv",new Gt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Fr=class i extends ae{constructor(t=new Rr(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new B,c=new B,l=new et,d=new B,h=[],f=[],u=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Gt(h,3)),this.setAttribute("normal",new Gt(f,3)),this.setAttribute("uv",new Gt(u,2));function v(){for(let _=0;_<e;_++)m(_);m(r===!1?e:0),x(),p()}function m(_){d=t.getPointAt(_/e,d);let M=o.normals[_],b=o.binormals[_];for(let S=0;S<=s;S++){let y=S/s*Math.PI*2,w=Math.sin(y),L=-Math.cos(y);c.x=L*M.x+w*b.x,c.y=L*M.y+w*b.y,c.z=L*M.z+w*b.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=d.x+n*c.x,a.y=d.y+n*c.y,a.z=d.z+n*c.z,h.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=e;_++)for(let M=1;M<=s;M++){let b=(s+1)*(_-1)+(M-1),S=(s+1)*_+(M-1),y=(s+1)*_+M,w=(s+1)*(_-1)+M;g.push(b,S,w),g.push(S,y,w)}}function x(){for(let _=0;_<=e;_++)for(let M=0;M<=s;M++)l.x=_/e,l.y=M/s,u.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new ca[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function ss(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(vu(s))s.isRenderTargetTexture?(ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(vu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function tn(i){let t={};for(let e=0;e<i.length;e++){let n=ss(i[e]);for(let s in n)t[s]=n[s]}return t}function vu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function G0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ih(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}var vd={clone:ss,merge:tn},H0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,W0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Tn=class extends hi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=H0,this.fragmentShader=W0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ss(t.uniforms),this.uniformsGroups=G0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new vt().setHex(s.value);break;case"v2":this.uniforms[n].value=new et().fromArray(s.value);break;case"v3":this.uniforms[n].value=new B().fromArray(s.value);break;case"v4":this.uniforms[n].value=new we().fromArray(s.value);break;case"m3":this.uniforms[n].value=new re().fromArray(s.value);break;case"m4":this.uniforms[n].value=new fe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ha=class extends Tn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ua=class extends hi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kr,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ds=class extends ua{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new et(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ce(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new vt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new vt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new vt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Hi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Hi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Ae=class extends hi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kr,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=Aa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},da=class extends hi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=td,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fa=class extends hi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function _s(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ko(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ei=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},pa=class extends Ei{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_l,endingEnd:_l}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case yl:r=t,a=2*e-n;break;case vl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case yl:o=t,c=2*n-e;break;case vl:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,d=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,d=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,u=this._weightNext,g=(n-e)/(s-e),v=g*g,m=v*g,p=-f*m+2*f*v-f*g,x=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,_=(-1-u)*m+(1.5+u)*v+.5*g,M=u*m-u*v;for(let b=0;b!==a;++b)r[b]=p*o[d+b]+x*o[l+b]+_*o[c+b]+M*o[h+b];return r}},ma=class extends Ei{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,d=(n-e)/(s-e),h=1-d;for(let f=0;f!==a;++f)r[f]=o[l+f]*h+o[c+f]*d;return r}},ga=class extends Ei{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},xa=class extends Ei{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,d=this.inTangents,h=this.outTangents;if(!d||!h){let g=(n-e)/(s-e),v=1-g;for(let m=0;m!==a;++m)r[m]=o[l+m]*v+o[c+m]*g;return r}let f=a*2,u=t-1;for(let g=0;g!==a;++g){let v=o[l+g],m=o[c+g],p=u*f+g*2,x=h[p],_=h[p+1],M=t*f+g*2,b=d[M],S=d[M+1],y=q0(n,e,x,b,s);r[g]=Md(y,v,_,S,m)}return r}};function Md(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function X0(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function q0(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Md(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let c=X0(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var vn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=_s(e,this.TimeBufferType),this.values=_s(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:_s(t.times,Array),values:_s(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),ko(t.settings)&&(n.settings={inTangents:_s(t.settings.inTangents,Array),outTangents:_s(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ga(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ma(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new pa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new xa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case dr:e=this.InterpolantFactoryMethodDiscrete;break;case ta:e=this.InterpolantFactoryMethodLinear;break;case Ho:e=this.InterpolantFactoryMethodSmooth;break;case xl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ee("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return dr;case this.InterpolantFactoryMethodLinear:return ta;case this.InterpolantFactoryMethodSmooth:return Ho;case this.InterpolantFactoryMethodBezier:return xl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;ko(this.settings)&&(Mu(this.settings.inTangents,t),Mu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;ko(this.settings)&&(Su(this.settings.inTangents,t),Su(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ie("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ie("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){ie("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){ie("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Np(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){ie("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ho,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],d=t[a+1];if(l!==d&&(a!==1||l!==t[0]))if(s)c=!0;else{let h=a*n,f=h-n,u=h+n;for(let g=0;g!==n;++g){let v=e[h+g];if(v!==e[f+g]||v!==e[u+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let h=a*n,f=o*n;for(let u=0;u!==n;++u)e[f+u]=e[h+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,ko(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Mu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Su(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}vn.prototype.ValueTypeName="";vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=ta;var Ci=class extends vn{constructor(t,e,n){super(t,e,n)}};Ci.prototype.ValueTypeName="bool";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=dr;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var _a=class extends vn{constructor(t,e,n,s){super(t,e,n,s)}};_a.prototype.ValueTypeName="color";var ya=class extends vn{constructor(t,e,n,s){super(t,e,n,s)}};ya.prototype.ValueTypeName="number";var va=class extends Ei{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let d=l+a;l!==d;l+=4)Ye.slerpFlat(r,0,o,l-a,o,l,c);return r}},Or=class extends vn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new va(this.times,this.values,this.getValueSize(),t)}};Or.prototype.ValueTypeName="quaternion";Or.prototype.InterpolantFactoryMethodSmooth=void 0;var Ri=class extends vn{constructor(t,e,n){super(t,e,n)}};Ri.prototype.ValueTypeName="string";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=dr;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Ma=class extends vn{constructor(t,e,n,s){super(t,e,n,s)}};Ma.prototype.ValueTypeName="vector";var Sa=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,h){return l.push(d,h),this},this.removeHandler=function(d){let h=l.indexOf(d);return h!==-1&&l.splice(h,2),this},this.getHandler=function(d){for(let h=0,f=l.length;h<f;h+=2){let u=l[h],g=l[h+1];if(u.global&&(u.lastIndex=0),u.test(d))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Sd=new Sa,ba=class{constructor(t){this.manager=t!==void 0?t:Sd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};ba.DEFAULT_MATERIAL_NAME="__DEFAULT";var Br=class extends Te{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},zr=class extends Br{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},gl=new fe,bu=new B,wu=new B,wa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.mapType=hn,this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ti,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;bu.setFromMatrixPosition(t.matrixWorld),e.position.copy(bu),wu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){gl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(gl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===bs||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(gl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Vo=new B,Go=new Ye,zn=new B,kr=class extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Vo,Go,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vo,Go,zn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Vo,Go,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vo,Go,zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},bi=new B,Tu=new et,Au=new et,xn=class extends kr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ts*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(cr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ts*2*Math.atan(Math.tan(cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(bi.x,bi.y).multiplyScalar(-t/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-t/bi.z)}getViewSize(t,e){return this.getViewBounds(t,Tu,Au),e.subVectors(Au,Tu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(cr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var fi=class extends kr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},wl=class extends wa{constructor(){super(new fi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vr=class extends Br{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new wl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ys=-90,vs=1,Ns=class extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new xn(ys,vs,t,e);s.layers=this.layers,this.add(s);let r=new xn(ys,vs,t,e);r.layers=this.layers,this.add(r);let o=new xn(ys,vs,t,e);o.layers=this.layers,this.add(o);let a=new xn(ys,vs,t,e);a.layers=this.layers,this.add(a);let c=new xn(ys,vs,t,e);c.layers=this.layers,this.add(c);let l=new xn(ys,vs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,d]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.mipmapsAutoUpdate=v,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(h,f,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ta=class extends xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var sh="\\[\\]\\.:\\/",Y0=new RegExp("["+sh+"]","g"),rh="[^"+sh+"]",$0="[^"+sh.replace("\\.","")+"]",Z0=/((?:WC+[\/:])*)/.source.replace("WC",rh),J0=/(WCOD+)?/.source.replace("WCOD",$0),K0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rh),Q0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rh),j0=new RegExp("^"+Z0+J0+K0+Q0+"$"),tm=["material","materials","bones","map"],Tl=class{constructor(t,e,n){let s=n||Ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ee=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Y0,"")}static parseTrackName(t){let e=j0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);tm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ee("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ie("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ie("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===l){l=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ie("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ie("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){ie("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;ie("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ee.Composite=Tl;Ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ee.prototype.GetterByBindingType=[Ee.prototype._getValue_direct,Ee.prototype._getValue_array,Ee.prototype._getValue_arrayElement,Ee.prototype._getValue_toArray];Ee.prototype.SetterByBindingTypeAndVersioning=[[Ee.prototype._setValue_direct,Ee.prototype._setValue_direct_setNeedsUpdate,Ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_array,Ee.prototype._setValue_array_setNeedsUpdate,Ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_arrayElement,Ee.prototype._setValue_arrayElement_setNeedsUpdate,Ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_fromArray,Ee.prototype._setValue_fromArray_setNeedsUpdate,Ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var pv=new Float32Array(1);var Eu=new fe,Gr=class{constructor(t,e,n=0,s=1/0){this.ray=new vr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Es,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ie("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Eu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Eu),this}intersectObject(t,e=!0,n=[]){return Al(t,this,n,e),n.sort(Cu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Al(t[s],this,n,e);return n.sort(Cu),n}};function Cu(i,t){return i.distance-t.distance}function Al(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Al(r[o],t,e,!0)}}var El=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}},Ru=new et,Hr=class{constructor(t=new et(1/0,1/0),e=new et(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ru.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ru).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}};function oh(i,t,e,n){let s=em(n);switch(e){case ql:return i*t;case zs:return i*t/s.components*s.byteLength;case Da:return i*t/s.components*s.byteLength;case Pi:return i*t*2/s.components*s.byteLength;case Na:return i*t*2/s.components*s.byteLength;case Yl:return i*t*3/s.components*s.byteLength;case Un:return i*t*4/s.components*s.byteLength;case Ua:return i*t*4/s.components*s.byteLength;case Xr:case qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Yr:case $r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oa:case za:return Math.max(i,16)*Math.max(t,8)/4;case Fa:case Ba:return Math.max(i,8)*Math.max(t,8)/2;case ka:case Va:case Ha:case Wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ga:case Zr:case Xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ya:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case $a:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ja:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case tc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ec:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case nc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ic:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case sc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case rc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case oc:case ac:case cc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case lc:case hc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Jr:case uc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function em(i){switch(i){case hn:case Gl:return{byteLength:1,components:1};case Bs:case Hl:case Nn:return{byteLength:2,components:1};case Pa:case La:return{byteLength:2,components:4};case Dn:case Ia:case An:return{byteLength:4,components:1};case Wl:case Xl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Wd(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function cm(i){let t=new WeakMap;function e(a,c){let l=a.array,d=a.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,d),a.onUploadCallback();let u;if(l instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=i.SHORT;else if(l instanceof Uint32Array)u=i.UNSIGNED_INT;else if(l instanceof Int32Array)u=i.INT;else if(l instanceof Int8Array)u=i.BYTE;else if(l instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){let d=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,d);else{h.sort((u,g)=>u.start-g.start);let f=0;for(let u=1;u<h.length;u++){let g=h[f],v=h[u];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let u=0,g=h.length;u<g;u++){let v=h[u];i.bufferSubData(l,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var lm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,um=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,_m=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ym=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Rm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Im=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Lm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Dm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Nm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Um=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Om=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bm="gl_FragColor = linearToOutputTexel( gl_FragColor );",zm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,km=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Vm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Gm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ym=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$m=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Km=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,tg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,eg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ng=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ig=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,og=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ag=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hg=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ug=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_g=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sg=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Tg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ag=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Eg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ig=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Pg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Lg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ng=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ug=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Og=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Bg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Xg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Yg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$g=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Jg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Qg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,t1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,e1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,n1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,i1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,s1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,r1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,o1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,a1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,c1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u1=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,m1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,g1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,x1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,_1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,y1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,M1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,S1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,b1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,E1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,R1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,I1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,D1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,O1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,k1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,V1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,le={alphahash_fragment:lm,alphahash_pars_fragment:hm,alphamap_fragment:um,alphamap_pars_fragment:dm,alphatest_fragment:fm,alphatest_pars_fragment:pm,aomap_fragment:mm,aomap_pars_fragment:gm,batching_pars_vertex:xm,batching_vertex:_m,begin_vertex:ym,beginnormal_vertex:vm,bsdfs:Mm,iridescence_fragment:Sm,bumpmap_pars_fragment:bm,clipping_planes_fragment:wm,clipping_planes_pars_fragment:Tm,clipping_planes_pars_vertex:Am,clipping_planes_vertex:Em,color_fragment:Cm,color_pars_fragment:Rm,color_pars_vertex:Im,color_vertex:Pm,common:Lm,defaultnormal_vertex:Dm,displacementmap_pars_vertex:Nm,displacementmap_vertex:Um,emissivemap_fragment:Fm,emissivemap_pars_fragment:Om,colorspace_fragment:Bm,colorspace_pars_fragment:zm,envmap_fragment:km,envmap_common_pars_fragment:Vm,envmap_pars_fragment:Gm,envmap_pars_vertex:Hm,envmap_physical_pars_fragment:tg,envmap_vertex:Wm,fog_vertex:Xm,fog_pars_vertex:qm,fog_fragment:Ym,fog_pars_fragment:$m,gradientmap_pars_fragment:Zm,lightmap_pars_fragment:Jm,lights_lambert_fragment:Km,lights_lambert_pars_fragment:Qm,lights_pars_begin:jm,lights_toon_fragment:eg,lights_toon_pars_fragment:ng,lights_phong_fragment:ig,lights_phong_pars_fragment:sg,lights_physical_fragment:rg,lights_physical_pars_fragment:og,lights_fragment_begin:ag,lights_fragment_maps:cg,lights_fragment_end:lg,lightprobes_pars_fragment:hg,logdepthbuf_fragment:ug,logdepthbuf_pars_fragment:dg,logdepthbuf_pars_vertex:fg,logdepthbuf_vertex:pg,map_fragment:mg,map_pars_fragment:gg,map_particle_fragment:xg,map_particle_pars_fragment:_g,metalnessmap_fragment:yg,metalnessmap_pars_fragment:vg,morphinstance_vertex:Mg,morphcolor_vertex:Sg,morphnormal_vertex:bg,morphtarget_pars_vertex:wg,morphtarget_vertex:Tg,normal_fragment_begin:Ag,normal_fragment_maps:Eg,normal_pars_fragment:Cg,normal_pars_vertex:Rg,normal_vertex:Ig,normalmap_pars_fragment:Pg,clearcoat_normal_fragment_begin:Lg,clearcoat_normal_fragment_maps:Dg,clearcoat_pars_fragment:Ng,iridescence_pars_fragment:Ug,opaque_fragment:Fg,packing:Og,premultiplied_alpha_fragment:Bg,project_vertex:zg,dithering_fragment:kg,dithering_pars_fragment:Vg,roughnessmap_fragment:Gg,roughnessmap_pars_fragment:Hg,shadowmap_pars_fragment:Wg,shadowmap_pars_vertex:Xg,shadowmap_vertex:qg,shadowmask_pars_fragment:Yg,skinbase_vertex:$g,skinning_pars_vertex:Zg,skinning_vertex:Jg,skinnormal_vertex:Kg,specularmap_fragment:Qg,specularmap_pars_fragment:jg,tonemapping_fragment:t1,tonemapping_pars_fragment:e1,transmission_fragment:n1,transmission_pars_fragment:i1,uv_pars_fragment:s1,uv_pars_vertex:r1,uv_vertex:o1,worldpos_vertex:a1,background_vert:c1,background_frag:l1,backgroundCube_vert:h1,backgroundCube_frag:u1,cube_vert:d1,cube_frag:f1,depth_vert:p1,depth_frag:m1,distance_vert:g1,distance_frag:x1,equirect_vert:_1,equirect_frag:y1,linedashed_vert:v1,linedashed_frag:M1,meshbasic_vert:S1,meshbasic_frag:b1,meshlambert_vert:w1,meshlambert_frag:T1,meshmatcap_vert:A1,meshmatcap_frag:E1,meshnormal_vert:C1,meshnormal_frag:R1,meshphong_vert:I1,meshphong_frag:P1,meshphysical_vert:L1,meshphysical_frag:D1,meshtoon_vert:N1,meshtoon_frag:U1,points_vert:F1,points_frag:O1,shadow_vert:B1,shadow_frag:z1,sprite_vert:k1,sprite_frag:V1},Ft={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},$n={basic:{uniforms:tn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:tn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new vt(0)},envMapIntensity:{value:1}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:tn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:tn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:tn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new vt(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:tn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:tn([Ft.points,Ft.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:tn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:tn([Ft.common,Ft.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:tn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:tn([Ft.sprite,Ft.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distance:{uniforms:tn([Ft.common,Ft.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distance_vert,fragmentShader:le.distance_frag},shadow:{uniforms:tn([Ft.lights,Ft.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};$n.physical={uniforms:tn([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new re},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};var dc={r:0,b:0,g:0},G1=new fe,Xd=new re;Xd.set(-1,0,0,0,1,0,0,0,1);function H1(i,t,e,n,s,r){let o=new vt(0),a=s===!0?0:1,c,l,d=null,h=0,f=null;function u(x){let _=x.isScene===!0?x.background:null;if(_&&_.isTexture){let M=x.backgroundBlurriness>0;_=t.get(_,M)}return _}function g(x){let _=!1,M=u(x);M===null?m(o,a):M&&M.isColor&&(m(M,1),_=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||_)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(x,_){let M=u(_);M&&M.isCubeTexture?(l===void 0&&(l=new se(new wn(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:ss($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,S,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(G1.makeRotationFromEuler(_.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Xd),l.material.toneMapped=de.getTransfer(M.colorSpace)!==ye,(d!==M||h!==M.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=M,h=M.version,f=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new se(new Ki(2,2),new Tn({name:"BackgroundMaterial",uniforms:ss($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=de.getTransfer(M.colorSpace)!==ye,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||h!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=M,h=M.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,_){x.getRGB(dc,ih(i)),e.buffers.color.setClear(dc.r,dc.g,dc.b,_,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,_=1){o.set(x),a=_,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,m(o,a)},render:g,addToRenderList:v,dispose:p}}function W1(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(A,E,C,T,N){let D=!1,k=h(A,T,C,E);r!==k&&(r=k,l(r.object)),D=u(A,T,C,N),D&&g(A,T,C,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,M(A,E,C,T),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function c(){return i.createVertexArray()}function l(A){return i.bindVertexArray(A)}function d(A){return i.deleteVertexArray(A)}function h(A,E,C,T){let N=T.wireframe===!0,D=n[E.id];D===void 0&&(D={},n[E.id]=D);let k=A.isInstancedMesh===!0?A.id:0,H=D[k];H===void 0&&(H={},D[k]=H);let I=H[C.id];I===void 0&&(I={},H[C.id]=I);let F=I[N];return F===void 0&&(F=f(c()),I[N]=F),F}function f(A){let E=[],C=[],T=[];for(let N=0;N<e;N++)E[N]=0,C[N]=0,T[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:C,attributeDivisors:T,object:A,attributes:{},index:null}}function u(A,E,C,T){let N=r.attributes,D=E.attributes,k=0,H=C.getAttributes();for(let I in H)if(H[I].location>=0){let z=N[I],X=D[I];if(X===void 0&&(I==="instanceMatrix"&&A.instanceMatrix&&(X=A.instanceMatrix),I==="instanceColor"&&A.instanceColor&&(X=A.instanceColor)),z===void 0||z.attribute!==X||X&&z.data!==X.data)return!0;k++}return r.attributesNum!==k||r.index!==T}function g(A,E,C,T){let N={},D=E.attributes,k=0,H=C.getAttributes();for(let I in H)if(H[I].location>=0){let z=D[I];z===void 0&&(I==="instanceMatrix"&&A.instanceMatrix&&(z=A.instanceMatrix),I==="instanceColor"&&A.instanceColor&&(z=A.instanceColor));let X={};X.attribute=z,z&&z.data&&(X.data=z.data),N[I]=X,k++}r.attributes=N,r.attributesNum=k,r.index=T}function v(){let A=r.newAttributes;for(let E=0,C=A.length;E<C;E++)A[E]=0}function m(A){p(A,0)}function p(A,E){let C=r.newAttributes,T=r.enabledAttributes,N=r.attributeDivisors;C[A]=1,T[A]===0&&(i.enableVertexAttribArray(A),T[A]=1),N[A]!==E&&(i.vertexAttribDivisor(A,E),N[A]=E)}function x(){let A=r.newAttributes,E=r.enabledAttributes;for(let C=0,T=E.length;C<T;C++)E[C]!==A[C]&&(i.disableVertexAttribArray(C),E[C]=0)}function _(A,E,C,T,N,D,k){k===!0?i.vertexAttribIPointer(A,E,C,N,D):i.vertexAttribPointer(A,E,C,T,N,D)}function M(A,E,C,T){v();let N=T.attributes,D=C.getAttributes(),k=E.defaultAttributeValues;for(let H in D){let I=D[H];if(I.location>=0){let F=N[H];if(F===void 0&&(H==="instanceMatrix"&&A.instanceMatrix&&(F=A.instanceMatrix),H==="instanceColor"&&A.instanceColor&&(F=A.instanceColor)),F!==void 0){let z=F.normalized,X=F.itemSize,j=t.get(F);if(j===void 0)continue;let q=j.buffer,Z=j.type,nt=j.bytesPerElement,rt=Z===i.INT||Z===i.UNSIGNED_INT||F.gpuType===Ia;if(F.isInterleavedBufferAttribute){let ct=F.data,_t=ct.isInterleavedBuffer===!0?ct.stride:ct.itemSize,Xt=F.offset;if(ct.isInstancedInterleavedBuffer||ct.isInstancedBufferAttribute){for(let Pt=0;Pt<I.locationSize;Pt++)p(I.location+Pt,ct.meshPerAttribute);A.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Pt=0;Pt<I.locationSize;Pt++)m(I.location+Pt);i.bindBuffer(i.ARRAY_BUFFER,q);for(let Pt=0;Pt<I.locationSize;Pt++)_(I.location+Pt,X/I.locationSize,Z,z,_t*nt,(Xt+X/I.locationSize*Pt)*nt,rt)}else{if(F.isInstancedBufferAttribute){for(let ct=0;ct<I.locationSize;ct++)p(I.location+ct,F.meshPerAttribute);A.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let ct=0;ct<I.locationSize;ct++)m(I.location+ct);i.bindBuffer(i.ARRAY_BUFFER,q);for(let ct=0;ct<I.locationSize;ct++)_(I.location+ct,X/I.locationSize,Z,z,X*nt,X/I.locationSize*ct*nt,rt)}}else if(k!==void 0){let z=k[H];if(z!==void 0)switch(z.length){case 2:i.vertexAttrib2fv(I.location,z);break;case 3:i.vertexAttrib3fv(I.location,z);break;case 4:i.vertexAttrib4fv(I.location,z);break;default:i.vertexAttrib1fv(I.location,z)}}}}x()}function b(){L();for(let A in n){let E=n[A];for(let C in E){let T=E[C];for(let N in T){let D=T[N];for(let k in D)d(D[k].object),delete D[k];delete T[N]}}delete n[A]}}function S(A){if(n[A.id]===void 0)return;let E=n[A.id];for(let C in E){let T=E[C];for(let N in T){let D=T[N];for(let k in D)d(D[k].object),delete D[k];delete T[N]}}delete n[A.id]}function y(A){for(let E in n){let C=n[E];for(let T in C){let N=C[T];if(N[A.id]===void 0)continue;let D=N[A.id];for(let k in D)d(D[k].object),delete D[k];delete N[A.id]}}}function w(A){for(let E in n){let C=n[E],T=A.isInstancedMesh===!0?A.id:0,N=C[T];if(N!==void 0){for(let D in N){let k=N[D];for(let H in k)d(k[H].object),delete k[H];delete N[D]}delete C[T],Object.keys(C).length===0&&delete n[E]}}}function L(){R(),o=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:y,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function X1(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,d){d!==0&&(i.drawArraysInstanced(n,c,l,d),e.update(l,n,d))}function a(c,l,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,d);let f=0;for(let u=0;u<d;u++)f+=l[u];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function q1(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let y=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(y){return!(y!==Un&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){let w=y===Nn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(y!==hn&&y!==An&&!w&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(y){if(y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",d=c(l);d!==l&&(ee("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);let h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&h===!1;e.reversedDepthBuffer===!0&&h===!1&&ee("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&h===!0&&ee("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:u,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:M,maxSamples:b,samples:S}}function Y1(i){let t=this,e=null,n=0,s=!1,r=!1,o=new gn,a=new re,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let u=h.length!==0||f||n!==0||s;return s=f,n=h.length,u},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=d(h,f,0)},this.setState=function(h,f,u){let g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?d(null):l();else{let x=r?0:n,_=x*4,M=p.clippingState||null;c.value=M,M=d(g,f,_,u);for(let b=0;b!==_;++b)M[b]=e[b];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(h,f,u,g){let v=h!==null?h.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let p=u+v*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,M=u;_!==v;++_,M+=4)o.copy(h[_]).applyMatrix4(x,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}var to=class extends _n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Mr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new wn(5,5,5),r=new Tn({name:"CubemapFromEquirect",uniforms:ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:ji});r.uniforms.tEquirect.value=e;let o=new se(s,r),a=e.minFilter;return e.minFilter===pi&&(e.minFilter=qe),new Ns(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},bd=256,$1=3,Z1=20,qd=256,Yd=16,J1=3,K1=new B,Q1=new vt,pc=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ns(1,10,null),this._boxMesh=new se(new wn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=K1}=r,c=this._renderer;this._setSize(o);let l=this._allocateTarget(),d=this._getSourceTarget(!0);e>0&&(d.texture.mipmapsAutoUpdate=!1);let h=c.autoClear,f=c.autoClearColor,u=c.autoClearDepth,g=c.autoClearStencil,v=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,v===null&&(t.background=c.getClearColor(Q1));let m=new Ns(n,s,d);return m.position.copy(a),m.update(c,t),c.autoClear=h,c.autoClearColor=f,c.autoClearDepth=u,c.autoClearStencil=g,t.background=v,e>0&&(d.texture.mipmapsAutoUpdate=!0,this._blur(l,e)),this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ad(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Td(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(bd,th(t))}_fromTexture(t,e){t.mapping===es||t.mapping===Os?this._setSize(t.image.length===0?bd:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=wd(t,!1,!1),n=Math.log2(t)-$1;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=wd(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===es||t.mapping===Os?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ad()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Td()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=j1(),this._integrationMaterial=tx());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Yd);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-J1)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let c=a>0?Math.log2(e)+.5*Math.log2(6/(qd*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=c,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=ex());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function wd(i,t,e){return new to(i,{minFilter:pi,generateMipmaps:t,type:Nn,colorSpace:fr,depthBuffer:e})}function eo(i,t,e){return new Tn({name:i,uniforms:t,vertexShader:le.cube_vert,fragmentShader:e,side:on,blending:ji,depthTest:!1,depthWrite:!1})}function j1(){return eo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${qd}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function tx(){return eo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Yd}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function ex(){return eo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Z1}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Td(){return eo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Ad(){return eo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function nx(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,u=!1){return f==null?null:u?o(f):r(f)}function r(f){if(f&&f.isTexture){let u=f.mapping;if(u===Ea||u===Ca)if(t.has(f)){let g=t.get(f).texture;return a(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let v=new to(g.height);return v.fromEquirectangularTexture(i,f),t.set(f,v),f.addEventListener("dispose",l),a(v.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let u=f.mapping,g=u===Ea||u===Ca,v=u===es||u===Os;if(g||v){let m=e.get(f),p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new pc(i)),m=g?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let x=f.image;return g&&x&&x.height>0||v&&x&&c(x)?(n===null&&(n=new pc(i)),m=g?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",d),m.texture):null}}}return f}function a(f,u){return u===Ea?f.mapping=es:u===Ca&&(f.mapping=Os),f}function c(f){let u=0,g=6;for(let v=0;v<g;v++)f[v]!==void 0&&u++;return u===g}function l(f){let u=f.target;u.removeEventListener("dispose",l);let g=t.get(u);g!==void 0&&(t.delete(u),g.dispose())}function d(f){let u=f.target;u.removeEventListener("dispose",d);let g=e.get(u);g!==void 0&&(e.delete(u),g.dispose())}function h(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function ix(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Hi("WebGLRenderer: "+n+" extension not supported."),s}}}function sx(i,t,e,n){let s={},r=new WeakMap,o=new FinalizationRegistry(g=>delete s[g]);function a(g){c(g.target)}function c(g){g.index!==null&&t.remove(g.index);for(let m in g.attributes)t.remove(g.attributes[m]);g.removeEventListener("dispose",a),delete s[g.id],o.unregister(g);let v=r.get(g);v&&(t.remove(v),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function l(g,v){return s[v.id]!==void 0||(v.addEventListener("dispose",a),s[v.id]=new WeakRef(v),o.register(v,v.id,v),e.memory.geometries++),v}function d(g){let v=g.attributes;for(let m in v)t.update(v[m],i.ARRAY_BUFFER)}function h(g){let v=g.index,m=g.attributes.position,p=0;if(m===void 0)return;let x=v!==null?v.array.length:m.array.length/3-1,_=m.count>=65535?yr:_r,M=new _(Math.ceil(x/3)*6,1),b=M.array;if(v!==null){let y=v.array;p=v.version;for(let w=0,L=0;w<x;w+=3){let R=y[w+0],A=y[w+1],E=y[w+2];b[L++]=R,b[L++]=A,b[L++]=A,b[L++]=E,b[L++]=E,b[L++]=R}}else{p=m.version;for(let y=0,w=0;y<x;y+=3){let L=y+0,R=y+1,A=y+2;b[w++]=L,b[w++]=R,b[w++]=R,b[w++]=A,b[w++]=A,b[w++]=L}}M.version=p;let S=r.get(g);S&&t.remove(S),r.set(g,M)}function f(g){let v=r.get(g);if(v){let m=g.index;m!==null&&v.version<m.version&&h(g)}else h(g);return r.get(g)}function u(){for(let g in s){let v=s[g].deref();v!==void 0&&c(v)}}return{get:l,update:d,getWireframeAttribute:f,dispose:u}}function rx(i,t,e){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function c(h,f){i.drawElements(n,f,r,h*o),e.update(f,n,1)}function l(h,f,u){u!==0&&(i.drawElementsInstanced(n,f,r,h*o,u),e.update(f,n,u))}function d(h,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,u);let v=0;for(let m=0;m<u;m++)v+=f[m];e.update(v,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function ox(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:ie("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ax(i,t,e){let n=new WeakMap,s=new we;function r(o,a,c){let l=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0,f=n.get(a);if(f===void 0||f.count!==h){let L=function(){y.dispose(),n.delete(a),a.removeEventListener("dispose",L)};f!==void 0&&f.texture.dispose();let u=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],_=0;u===!0&&(_=1),g===!0&&(_=2),v===!0&&(_=3);let M=a.attributes.position.count*_,b=1;M>t.maxTextureSize&&(b=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let S=new Float32Array(M*b*4*h),y=new gr(S,M,b,h);y.type=An,y.needsUpdate=!0;let w=_*4;for(let R=0;R<h;R++){let A=m[R],E=p[R],C=x[R],T=M*b*4*R;for(let N=0;N<A.count;N++){let D=N*w;u===!0&&(s.fromBufferAttribute(A,N),S[T+D+0]=s.x,S[T+D+1]=s.y,S[T+D+2]=s.z,S[T+D+3]=0),g===!0&&(s.fromBufferAttribute(E,N),S[T+D+4]=s.x,S[T+D+5]=s.y,S[T+D+6]=s.z,S[T+D+7]=0),v===!0&&(s.fromBufferAttribute(C,N),S[T+D+8]=s.x,S[T+D+9]=s.y,S[T+D+10]=s.z,S[T+D+11]=C.itemSize===4?s.w:1)}}f={count:h,texture:y,size:new et(M,b)},n.set(a,f),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let u=0;for(let v=0;v<l.length;v++)u+=l[v];let g=a.morphTargetsRelative?1:1-u;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function cx(i,t,e,n,s){let r=new WeakMap;function o(l){let d=s.render.frame,h=l.geometry,f=t.get(l,h);if(r.get(f)!==d&&(t.update(f),r.set(f,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==d&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,d))),l.isSkinnedMesh){let u=l.skeleton;r.get(u)!==d&&(u.update(),r.set(u,d))}return f}function a(){r=new WeakMap}function c(l){let d=l.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:o,dispose:a}}var lx={[Nl]:"LINEAR_TONE_MAPPING",[Ul]:"REINHARD_TONE_MAPPING",[Fl]:"CINEON_TONE_MAPPING",[Ol]:"ACES_FILMIC_TONE_MAPPING",[zl]:"AGX_TONE_MAPPING",[kl]:"NEUTRAL_TONE_MAPPING",[Bl]:"CUSTOM_TONE_MAPPING"};function hx(i,t,e,n,s,r){let o=new _n(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=null,d=new ae;d.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Gt([0,2,0,0,2,0],2));let h=new ha({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new se(d,h),u=new fi(-1,1,1,-1,0,1),g=null,v=null,m=!1,p,x=null,_=[],M=!1;this.setSize=function(b,S){o.setSize(b,S),a!==null&&a.setSize(b,S),c!==null&&c.setSize(b,S);for(let y=0;y<_.length;y++){let w=_[y];w.setSize&&w.setSize(b,S)}},this.setEffects=function(b){_=b,M=_.length>0&&_[0].isRenderPass===!0;let S=o.width,y=o.height;_.length>0&&a===null&&(a=new _n(S,y,{type:Nn,depthBuffer:!1,stencilBuffer:!1}),c=new _n(S,y,{type:Nn,depthBuffer:!1,stencilBuffer:!1}));let w=s===!0&&_.some(L=>L.needsDepthTexture===!0);w!==(o.depthTexture!==null)&&(w===!0&&l===null&&(l=new ui(S,y),r===!0&&(l.format=mi,l.type=ns)),o.dispose(),o.depthTexture=w?l:null,o.resolveDepthBuffer=w,o.storeMultisampledDepthBuffer=w);for(let L=0;L<_.length;L++){let R=_[L];R.setSize&&R.setSize(S,y),w&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(l)}},this.begin=function(b,S){if(m||b.toneMapping===qn&&_.length===0)return!1;if(x=S,S!==null){let y=S.width,w=S.height;(o.width!==y||o.height!==w)&&this.setSize(y,w)}return M===!1&&b.setRenderTarget(o),p=b.toneMapping,b.toneMapping=qn,!0},this.hasRenderPass=function(){return M},this.end=function(b,S){b.toneMapping=p,m=!0;let y=o,w=a;for(let L=0;L<_.length;L++){let R=_[L];R.enabled!==!1&&(R.render(b,w,y,S),R.needsSwap!==!1&&(y=w,w=w===a?c:a))}if(g!==b.outputColorSpace||v!==b.toneMapping){g=b.outputColorSpace,v=b.toneMapping,h.defines={},de.getTransfer(g)===ye&&(h.defines.SRGB_TRANSFER="");let L=lx[v];L&&(h.defines[L]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=y.texture,b.setRenderTarget(x),b.render(f,u),x=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),d.dispose(),h.dispose()}}var $d=new sn,Zd=new ui(1,1),Jd=new Sr(1),Kd=new gr,Qd=new ia,jd=new Mr,Ed=[],Cd=[],Rd=new Float32Array(16),Id=new Float32Array(9),Pd=new Float32Array(4);function Gs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ed[s];if(r===void 0&&(r=new Float32Array(s),Ed[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function mc(i,t){let e=Cd[t];e===void 0&&(e=new Int32Array(t),Cd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ux(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function dx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2fv(this.addr,t),ze(e,t)}}function fx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;i.uniform3fv(this.addr,t),ze(e,t)}}function px(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4fv(this.addr,t),ze(e,t)}}function mx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;Pd.set(n),i.uniformMatrix2fv(this.addr,!1,Pd),ze(e,n)}}function gx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;Id.set(n),i.uniformMatrix3fv(this.addr,!1,Id),ze(e,n)}}function xx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;Rd.set(n),i.uniformMatrix4fv(this.addr,!1,Rd),ze(e,n)}}function _x(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function yx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2iv(this.addr,t),ze(e,t)}}function vx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3iv(this.addr,t),ze(e,t)}}function Mx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4iv(this.addr,t),ze(e,t)}}function Sx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function bx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2uiv(this.addr,t),ze(e,t)}}function wx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3uiv(this.addr,t),ze(e,t)}}function Tx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4uiv(this.addr,t),ze(e,t)}}function gc(i){return i.version===0&&(i.compareFunction=Jl,i.needsUpdate=!0),i}function Ax(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=gc(Zd):r=$d,e.setTexture2D(t||r,s)}function Ex(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Qd,s)}function Cx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=gc(Jd):r=jd,e.setTextureCube(t||r,s)}function Rx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Kd,s)}function Ix(i){switch(i){case 5126:return ux;case 35664:return dx;case 35665:return fx;case 35666:return px;case 35674:return mx;case 35675:return gx;case 35676:return xx;case 5124:case 35670:return _x;case 35667:case 35671:return yx;case 35668:case 35672:return vx;case 35669:case 35673:return Mx;case 5125:return Sx;case 36294:return bx;case 36295:return wx;case 36296:return Tx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ax;case 35679:case 36299:case 36307:return Ex;case 35680:case 36300:case 36308:case 36293:return Cx;case 36289:case 36303:case 36311:case 36292:return Rx}}function Px(i,t){i.uniform1fv(this.addr,t)}function Lx(i,t){let e=Gs(t,this.size,2);i.uniform2fv(this.addr,e)}function Dx(i,t){let e=Gs(t,this.size,3);i.uniform3fv(this.addr,e)}function Nx(i,t){let e=Gs(t,this.size,4);i.uniform4fv(this.addr,e)}function Ux(i,t){let e=Gs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Fx(i,t){let e=Gs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ox(i,t){let e=Gs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Bx(i,t){i.uniform1iv(this.addr,t)}function zx(i,t){i.uniform2iv(this.addr,t)}function kx(i,t){i.uniform3iv(this.addr,t)}function Vx(i,t){i.uniform4iv(this.addr,t)}function Gx(i,t){i.uniform1uiv(this.addr,t)}function Hx(i,t){i.uniform2uiv(this.addr,t)}function Wx(i,t){i.uniform3uiv(this.addr,t)}function Xx(i,t){i.uniform4uiv(this.addr,t)}function qx(i,t,e){let n=this.cache,s=t.length,r=mc(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=gc(Zd):o=$d;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Yx(i,t,e){let n=this.cache,s=t.length,r=mc(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Qd,r[o])}function $x(i,t,e){let n=this.cache,s=t.length,r=mc(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=gc(Jd):o=jd;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function Zx(i,t,e){let n=this.cache,s=t.length,r=mc(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Kd,r[o])}function Jx(i){switch(i){case 5126:return Px;case 35664:return Lx;case 35665:return Dx;case 35666:return Nx;case 35674:return Ux;case 35675:return Fx;case 35676:return Ox;case 5124:case 35670:return Bx;case 35667:case 35671:return zx;case 35668:case 35672:return kx;case 35669:case 35673:return Vx;case 5125:return Gx;case 36294:return Hx;case 36295:return Wx;case 36296:return Xx;case 35678:case 36198:case 36298:case 36306:case 35682:return qx;case 35679:case 36299:case 36307:return Yx;case 35680:case 36300:case 36308:case 36293:return $x;case 36289:case 36303:case 36311:case 36292:return Zx}}var lh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ix(e.type)}},hh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jx(e.type)}},uh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},ah=/(\w+)(\])?(\[|\.)?/g;function Ld(i,t){i.seq.push(t),i.map[t.id]=t}function Kx(i,t,e){let n=i.name,s=n.length;for(ah.lastIndex=0;;){let r=ah.exec(n),o=ah.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Ld(e,l===void 0?new lh(a,i,t):new hh(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new uh(a),Ld(e,h)),e=h}}}var ks=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);Kx(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Dd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Qx=37297,jx=0;function t_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Nd=new re;function e_(i){de._getMatrix(Nd,de.workingColorSpace,i);let t=`mat3( ${Nd.elements.map(e=>e.toFixed(4))} )`;switch(de.getTransfer(i)){case pr:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return ee("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ud(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+t_(i.getShaderSource(t),a)}else return r}function n_(i,t){let e=e_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var i_={[Nl]:"Linear",[Ul]:"Reinhard",[Fl]:"Cineon",[Ol]:"ACESFilmic",[zl]:"AgX",[kl]:"Neutral",[Bl]:"Custom"};function s_(i,t){let e=i_[t];return e===void 0?(ee("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var fc=new B;function r_(){de.getLuminanceCoefficients(fc);let i=fc.x.toFixed(4),t=fc.y.toFixed(4),e=fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function o_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jr).join(`
`)}function a_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function c_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function jr(i){return i!==""}function Fd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Od(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var l_=/^[ \t]*#include +<([\w\d./]+)>/gm;function dh(i){return i.replace(l_,h_)}function h_(i,t){let e=le[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return dh(e)}var u_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bd(i){return i.replace(u_,d_)}function d_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var f_={[Qi]:"SHADOWMAP_TYPE_PCF",[Us]:"SHADOWMAP_TYPE_VSM"};function p_(i){return f_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var m_={[Os]:"ENVMAP_MODE_REFRACTION"};function g_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":m_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var x_={[Aa]:"ENVMAP_BLENDING_MULTIPLY",[Ku]:"ENVMAP_BLENDING_MIX",[Qu]:"ENVMAP_BLENDING_ADD"};function __(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":x_[i.combine]||"ENVMAP_BLENDING_NONE"}function y_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=p_(e),l=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=g_(e),h=__(e),f=o_(e),u=a_(r),g=s.createProgram(),v,m,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(jr).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(jr).join(`
`),m.length>0&&(m+=`
`)):(v=[zd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jr).join(`
`),m=[zd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",e.envMap?"#define "+h:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qn?"#define TONE_MAPPING":"",e.toneMapping!==qn?le.tonemapping_pars_fragment:"",e.toneMapping!==qn?s_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,n_("linearToOutputTexel",e.outputColorSpace),r_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(jr).join(`
`)),o=dh(o),o=Fd(o,e),o=Od(o,e),a=dh(a),a=Fd(a,e),a=Od(a,e),o=Bd(o),a=Bd(a),e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",e.glslVersion===Kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let x=p+v+o,_=p+m+a,M=Dd(s,s.VERTEX_SHADER,x),b=Dd(s,s.FRAGMENT_SHADER,_);s.attachShader(g,M),s.attachShader(g,b),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function S(R){if(i.debug.checkShaderErrors){let A=s.getProgramInfoLog(g)||"",E=s.getShaderInfoLog(M)||"",C=s.getShaderInfoLog(b)||"",T=A.trim(),N=E.trim(),D=C.trim(),k=!0,H=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,M,b);else{let I=Ud(s,M,"vertex"),F=Ud(s,b,"fragment");ie("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+T+`
`+I+`
`+F)}else T!==""?ee("WebGLProgram: Program Info Log:",T):(N===""||D==="")&&(H=!1);H&&(R.diagnostics={runnable:k,programLog:T,vertexShader:{log:N,prefix:v},fragmentShader:{log:D,prefix:m}})}s.deleteShader(M),s.deleteShader(b),y=new ks(s,g),w=c_(s,g)}let y;this.getUniforms=function(){return y===void 0&&S(this),y};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(g,Qx)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=jx++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=b,this}var v_=0,fh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ph(t),e.set(t,n)),n}},ph=class{constructor(t){this.id=v_++,this.code=t,this.usedTimes=0}};function M_(i){return i===Pi||i===Zr||i===Jr}function S_(i,t,e,n,s,r){let o=new Es,a=new fh,c=new Set,l=[],d=new Map,h=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(y){return c.add(y),y===0?"uv":`uv${y}`}function g(y,w,L,R,A,E){let C=R.fog,T=A.geometry,N=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?R.environment:null,D=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,k=t.get(y.envMap||N,D),H=f[y.type],I=n.precision;y.precision!==null&&(I=n.getMaxPrecision(y.precision),I!==y.precision&&ee("WebGLProgram.getParameters:",y.precision,"not supported, using",I,"instead."));let F=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,z=F!==void 0?F.length:0,X=0;T.morphAttributes.position!==void 0&&(X=1),T.morphAttributes.normal!==void 0&&(X=2),T.morphAttributes.color!==void 0&&(X=3);let j,q,Z,nt;if(H){let Ct=$n[H];j=Ct.vertexShader,q=Ct.fragmentShader}else{j=y.vertexShader,q=y.fragmentShader;let Ct=a.getVertexShaderStage(y),xe=a.getFragmentShaderStage(y);a.update(y,Ct,xe),Z=Ct.id,nt=xe.id}let rt=i.getRenderTarget(),ct=i.state.buffers.depth.getReversed(),_t=A.isInstancedMesh===!0,Xt=A.isBatchedMesh===!0,Pt=!!y.map,Nt=!!y.matcap,Ht=!!k,dt=Ht&&k.isPMREMTexture===!0,Mt=!!y.aoMap,yt=!!y.lightMap,Rt=!!y.bumpMap&&y.wireframe===!1,It=!!y.normalMap,V=!!y.displacementMap,J=!!y.emissiveMap,gt=!!y.metalnessMap,Ut=!!y.roughnessMap,At=y.anisotropy>0,G=y.clearcoat>0,jt=y.diffuseRoughness>0,qt=y.dispersion>0,Bt=y.retroreflectivity>0,ht=y.iridescence>0,te=y.sheen>0,kt=y.transmission>0,Qt=At&&!!y.anisotropyMap,O=G&&!!y.clearcoatMap,P=G&&!!y.clearcoatNormalMap,K=G&&!!y.clearcoatRoughnessMap,xt=jt&&!!y.diffuseRoughnessMap,pt=ht&&!!y.iridescenceMap,wt=ht&&!!y.iridescenceThicknessMap,Et=te&&!!y.sheenColorMap,lt=te&&!!y.sheenRoughnessMap,ut=!!y.specularMap,St=!!y.specularColorMap,W=!!y.specularIntensityMap,ft=kt&&!!y.transmissionMap,ot=kt&&!!y.thicknessMap,Y=!!y.gradientMap,it=!!y.alphaMap,at=y.alphaTest>0,bt=!!y.alphaHash,zt=!!y.extensions,mt=qn;y.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(mt=i.toneMapping);let Vt=dt?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,ne={shaderID:H,shaderType:y.type,shaderName:y.name,vertexShader:j,fragmentShader:q,defines:y.defines,customVertexShaderID:Z,customFragmentShaderID:nt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:I,batching:Xt,batchingColor:Xt&&A._colorsTexture!==null,instancing:_t,instancingColor:_t&&A.instanceColor!==null,instancingMorph:_t&&A.morphTexture!==null,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:de.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Pt,matcap:Nt,envMap:Ht,envMapMode:Ht&&k.mapping,envMapPMREM:dt,envMapMaxLod:dt?Vt.length-1:null,envMapSize:dt?Vt[0].width:null,aoMap:Mt,lightMap:yt,bumpMap:Rt,normalMap:It,displacementMap:V,emissiveMap:J,normalMapObjectSpace:It&&y.normalMapType===ed,normalMapTangentSpace:It&&y.normalMapType===Kr,packedNormalMap:It&&y.normalMapType===Kr&&M_(y.normalMap.format),metalnessMap:gt,roughnessMap:Ut,anisotropy:At,anisotropyMap:Qt,clearcoat:G,clearcoatMap:O,clearcoatNormalMap:P,clearcoatRoughnessMap:K,diffuseRoughness:jt,diffuseRoughnessMap:xt,dispersion:qt,retroreflection:Bt,iridescence:ht,iridescenceMap:pt,iridescenceThicknessMap:wt,sheen:te,sheenColorMap:Et,sheenRoughnessMap:lt,specularMap:ut,specularColorMap:St,specularIntensityMap:W,transmission:kt,transmissionMap:ft,thicknessMap:ot,gradientMap:Y,opaque:y.transparent===!1&&y.blending===Fs&&y.alphaToCoverage===!1,alphaMap:it,alphaTest:at,alphaHash:bt,combine:y.combine,mapUv:Pt&&u(y.map.channel),aoMapUv:Mt&&u(y.aoMap.channel),lightMapUv:yt&&u(y.lightMap.channel),bumpMapUv:Rt&&u(y.bumpMap.channel),normalMapUv:It&&u(y.normalMap.channel),displacementMapUv:V&&u(y.displacementMap.channel),emissiveMapUv:J&&u(y.emissiveMap.channel),metalnessMapUv:gt&&u(y.metalnessMap.channel),roughnessMapUv:Ut&&u(y.roughnessMap.channel),anisotropyMapUv:Qt&&u(y.anisotropyMap.channel),clearcoatMapUv:O&&u(y.clearcoatMap.channel),clearcoatNormalMapUv:P&&u(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&u(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:xt&&u(y.diffuseRoughnessMap.channel),iridescenceMapUv:pt&&u(y.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&u(y.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&u(y.sheenColorMap.channel),sheenRoughnessMapUv:lt&&u(y.sheenRoughnessMap.channel),specularMapUv:ut&&u(y.specularMap.channel),specularColorMapUv:St&&u(y.specularColorMap.channel),specularIntensityMapUv:W&&u(y.specularIntensityMap.channel),transmissionMapUv:ft&&u(y.transmissionMap.channel),thicknessMapUv:ot&&u(y.thicknessMap.channel),alphaMapUv:it&&u(y.alphaMap.channel),vertexTangents:!!T.attributes.tangent&&(It||At),vertexNormals:!!T.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,pointsUvs:A.isPoints===!0&&!!T.attributes.uv&&(Pt||it),fog:!!C,useFog:y.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||T.attributes.normal===void 0&&It===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ct,skinning:A.isSkinnedMesh===!0,hasPositionAttribute:T.attributes.position!==void 0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:X,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:E.filter(Ct=>Ct.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:mt,decodeVideoTexture:Pt&&y.map.isVideoTexture===!0&&de.getTransfer(y.map.colorSpace)===ye,decodeVideoTextureEmissive:J&&y.emissiveMap.isVideoTexture===!0&&de.getTransfer(y.emissiveMap.colorSpace)===ye,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ln,flipSided:y.side===on,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:zt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&y.extensions.multiDraw===!0||Xt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ne.vertexUv1s=c.has(1),ne.vertexUv2s=c.has(2),ne.vertexUv3s=c.has(3),c.clear(),ne}function v(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let L in y.defines)w.push(L),w.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(m(w,y),p(w,y),w.push(i.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function m(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapPMREM),y.push(w.envMapMaxLod),y.push(w.envMapSize),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.diffuseRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.numSunLights),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numSunLightShadows),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.numLightProbeGrids),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function p(y,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.diffuseRoughness&&o.enable(25),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function x(y){let w=f[y.type],L;if(w){let R=$n[w];L=vd.clone(R.uniforms)}else L=y.uniforms;return L}function _(y,w){let L=d.get(w);return L!==void 0?++L.usedTimes:(L=new y_(i,w,y,s),l.push(L),d.set(w,L)),L}function M(y){if(--y.usedTimes===0){let w=l.indexOf(y);l[w]=l[l.length-1],l.pop(),d.delete(y.cacheKey),y.destroy()}}function b(y){a.remove(y)}function S(){a.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:x,acquireProgram:_,releaseProgram:M,releaseShaderCache:b,programs:l,dispose:S}}function b_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function w_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function kd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Vd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function a(f,u,g,v,m,p){let x=i[t];return x===void 0?(x={id:f.id,object:f,geometry:u,material:g,materialVariant:o(f),groupOrder:v,renderOrder:f.renderOrder,z:m,group:p},i[t]=x):(x.id=f.id,x.object=f,x.geometry=u,x.material=g,x.materialVariant=o(f),x.groupOrder=v,x.renderOrder=f.renderOrder,x.z=m,x.group=p),t++,x}function c(f,u,g,v,m,p,x){x.reversedDepth===!0&&(m=-m);let _=a(f,u,g,v,m,p);g.transmission>0?n.push(_):g.transparent===!0?s.push(_):e.push(_)}function l(f,u,g,v,m,p){let x=a(f,u,g,v,m,p);g.transmission>0?n.unshift(x):g.transparent===!0?s.unshift(x):e.unshift(x)}function d(f,u){e.length>1&&e.sort(f||w_),n.length>1&&n.sort(u||kd),s.length>1&&s.sort(u||kd)}function h(){for(let f=t,u=i.length;f<u;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:h,sort:d}}function T_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Vd,i.set(n,[o])):s>=r.length?(o=new Vd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function A_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new B,color:new vt};break;case"SpotLight":e={position:new B,direction:new B,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":e={color:new vt,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function E_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var C_=0;function R_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function I_(i){let t=new A_,e=E_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new B);let s=new B,r=new fe,o=new fe;function a(l){let d=0,h=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let u=0,g=0,v=0,m=0,p=0,x=0,_=0,M=0,b=0,S=0,y=0,w=0,L=0,R=0;l.sort(R_);for(let E=0,C=l.length;E<C;E++){let T=l[E],N=T.color,D=T.intensity,k=T.distance,H=null;if(T.shadow&&T.shadow.map&&(T.shadow.map.texture.format===Pi?H=T.shadow.map.texture:H=T.shadow.map.depthTexture||T.shadow.map.texture),T.isAmbientLight)d+=N.r*D,h+=N.g*D,f+=N.b*D;else if(T.isLightProbe){for(let I=0;I<9;I++)n.probe[I].addScaledVector(T.sh.coefficients[I],D);R++}else if(T.isSunLight){let I=t.get(T);if(I.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let F=T.shadow,z=e.get(T);z.shadowIntensity=F.intensity,z.shadowBias=F.bias,z.shadowNormalBias=F.normalBias,z.shadowRadius=F.radius,z.shadowMapSize.copy(F.mapSize).multiply(F.getFrameExtents()),n.sunShadow[g]=z,n.sunShadowMap[g]=H;let X=F.getViewportCount();for(let j=0;j<X;j++)n.sunShadowMatrix[v+j]=F.getMatrix(j),n.sunShadowCascade[v+j]=F._cascadeData[j];v+=X,g++}n.sun[u]=I,u++}else if(T.isDirectionalLight){let I=t.get(T);if(I.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let F=T.shadow,z=e.get(T);z.shadowIntensity=F.intensity,z.shadowBias=F.bias,z.shadowNormalBias=F.normalBias,z.shadowRadius=F.radius,z.shadowMapSize=F.mapSize,n.directionalShadow[m]=z,n.directionalShadowMap[m]=H,n.directionalShadowMatrix[m]=T.shadow.matrix,b++}n.directional[m]=I,m++}else if(T.isSpotLight){let I=t.get(T);I.position.setFromMatrixPosition(T.matrixWorld),I.color.copy(N).multiplyScalar(D),I.distance=k,I.coneCos=Math.cos(T.angle),I.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),I.decay=T.decay,n.spot[x]=I;let F=T.shadow;if(T.map&&(n.spotLightMap[w]=T.map,w++,F.updateMatrices(T),T.castShadow&&L++),n.spotLightMatrix[x]=F.matrix,T.castShadow){let z=e.get(T);z.shadowIntensity=F.intensity,z.shadowBias=F.bias,z.shadowNormalBias=F.normalBias,z.shadowRadius=F.radius,z.shadowMapSize=F.mapSize,n.spotShadow[x]=z,n.spotShadowMap[x]=H,y++}x++}else if(T.isRectAreaLight){let I=t.get(T);I.color.copy(N).multiplyScalar(D),I.halfWidth.set(T.width*.5,0,0),I.halfHeight.set(0,T.height*.5,0),n.rectArea[_]=I,_++}else if(T.isPointLight){let I=t.get(T);if(I.color.copy(T.color).multiplyScalar(T.intensity),I.distance=T.distance,I.decay=T.decay,T.castShadow){let F=T.shadow,z=e.get(T);z.shadowIntensity=F.intensity,z.shadowBias=F.bias,z.shadowNormalBias=F.normalBias,z.shadowRadius=F.radius,z.shadowMapSize=F.mapSize,z.shadowCameraNear=F.camera.near,z.shadowCameraFar=F.camera.far,n.pointShadow[p]=z,n.pointShadowMap[p]=H,n.pointShadowMatrix[p]=T.shadow.matrix,S++}n.point[p]=I,p++}else if(T.isHemisphereLight){let I=t.get(T);I.skyColor.copy(T.color).multiplyScalar(D),I.groundColor.copy(T.groundColor).multiplyScalar(D),n.hemi[M]=I,M++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ft.LTC_FLOAT_1,n.rectAreaLTC2=Ft.LTC_FLOAT_2):(n.rectAreaLTC1=Ft.LTC_HALF_1,n.rectAreaLTC2=Ft.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=f;let A=n.hash;(A.sunLength!==u||A.directionalLength!==m||A.pointLength!==p||A.spotLength!==x||A.rectAreaLength!==_||A.hemiLength!==M||A.numSunShadows!==g||A.numDirectionalShadows!==b||A.numPointShadows!==S||A.numSpotShadows!==y||A.numSpotMaps!==w||A.numLightProbes!==R)&&(n.sun.length=u,n.directional.length=m,n.spot.length=x,n.rectArea.length=_,n.point.length=p,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=y,n.spotShadowMap.length=y,n.spotLightMatrix.length=y+w-L,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=R,A.sunLength=u,A.directionalLength=m,A.pointLength=p,A.spotLength=x,A.rectAreaLength=_,A.hemiLength=M,A.numSunShadows=g,A.numDirectionalShadows=b,A.numPointShadows=S,A.numSpotShadows=y,A.numSpotMaps=w,A.numLightProbes=R,n.version=C_++)}function c(l,d){let h=0,f=0,u=0,g=0,v=0,m=0,p=d.matrixWorldInverse;for(let x=0,_=l.length;x<_;x++){let M=l[x];if(M.isSunLight){let b=n.sun[h];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(p),h++}else if(M.isDirectionalLight){let b=n.directional[f];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),f++}else if(M.isSpotLight){let b=n.spot[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let b=n.rectArea[v];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),v++}else if(M.isPointLight){let b=n.point[u];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),u++}else if(M.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:a,setupView:c,state:n}}function Gd(i){let t=new I_(i),e=[],n=[],s=[];function r(h){d.camera=h,e.length=0,n.length=0,s.length=0}function o(h){h.isLightProbeGrid?s.push(h):e.push(h)}function a(h){n.push(h)}function c(){t.setup(e),s.sort((h,f)=>h.priority-f.priority||h.id-f.id)}function l(h){t.setupView(e,h)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function P_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Gd(i),t.set(s,[a])):r>=o.length?(a=new Gd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var L_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,N_=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],U_=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Hd=new fe,Qr=new B,ch=new B;function F_(i,t,e){let n=new Ti,s=new et,r=new et,o=new we,a=new da,c=new fa,l={},d=e.maxTextureSize,h={[Ii]:on,[on]:Ii,[ln]:ln},f=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:L_,fragmentShader:D_}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let g=new ae;g.setAttribute("position",new Me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new se(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qi;let p=this.type;this.render=function(S,y,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Lu&&(ee("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Qi);let L=i.getRenderTarget(),R=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),E=i.state;E.setBlending(ji),E.buffers.depth.getReversed()===!0?E.buffers.color.setClear(0,0,0,0):E.buffers.color.setClear(1,1,1,1),E.buffers.depth.setTest(!0),E.setScissorTest(!1);let C=p!==this.type;C&&y.traverse(function(T){T.material&&(Array.isArray(T.material)?T.material.forEach(N=>N.needsUpdate=!0):T.material.needsUpdate=!0)});for(let T=0,N=S.length;T<N;T++){let D=S[T],k=D.shadow;if(k===void 0){ee("WebGLShadowMap:",D,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let H=k.getFrameExtents();s.multiply(H),r.copy(k.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/H.x),s.x=r.x*H.x,k.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/H.y),s.y=r.y*H.y,k.mapSize.y=r.y));let I=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=I,k.map===null||C===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Us){if(D.isPointLight){ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new _n(s.x,s.y,{format:Pi,type:Nn,minFilter:qe,magFilter:qe,generateMipmaps:!1}),k.map.texture.name=D.name+".shadowMap",k.map.depthTexture=new ui(s.x,s.y,An),k.map.depthTexture.name=D.name+".shadowMapDepth",k.map.depthTexture.format=li,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=We,k.map.depthTexture.magFilter=We}else D.isPointLight?(k.map=new to(s.x),k.map.depthTexture=new Sr(s.x,Dn)):(k.map=new _n(s.x,s.y),k.map.depthTexture=new ui(s.x,s.y,Dn)),k.map.depthTexture.name=D.name+".shadowMap",k.map.depthTexture.format=li,this.type===Qi?(k.map.depthTexture.compareFunction=I?Zl:$l,k.map.depthTexture.minFilter=qe,k.map.depthTexture.magFilter=qe):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=We,k.map.depthTexture.magFilter=We);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);let F=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();D.isPointLight!==!0&&k.updateMatrices(D,w);let z=(k.camera.layers.mask&4294967294)!==0?k.camera.layers:w.layers;for(let X=0;X<F;X++){let j=k.getCamera(X);if(D.isPointLight){let q=k.camera,Z=k.matrix,nt=D.distance||q.far;nt!==q.far&&(q.far=nt,q.updateProjectionMatrix()),Qr.setFromMatrixPosition(D.matrixWorld),q.position.copy(Qr),ch.copy(q.position),ch.add(N_[X]),q.up.copy(U_[X]),q.lookAt(ch),q.updateMatrixWorld(),Z.makeTranslation(-Qr.x,-Qr.y,-Qr.z),Hd.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Hd,q.coordinateSystem,q.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,X),i.clear();else{X===0&&(i.setRenderTarget(k.map),i.clear());let q=k.getViewport(X);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),E.viewport(o)}n=k.getFrustum(X),M(y,w,j,D,z,this.type)}k.isPointLightShadow!==!0&&this.type===Us&&x(k,w),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(L,R,A)};function x(S,y){let w=t.update(v);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,u.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),S.mapPass===null?S.mapPass=new _n(s.x,s.y,{format:Pi,type:Nn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(y,null,w,f,v,null),u.uniforms.shadow_pass.value=S.mapPass.texture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(y,null,w,u,v,null)}function _(S,y,w,L){let R=null,A=w.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(A!==void 0)R=A;else if(R=w.isPointLight===!0?c:a,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let E=R.uuid,C=y.uuid,T=l[E];T===void 0&&(T={},l[E]=T);let N=T[C];N===void 0&&(N=R.clone(),T[C]=N,y.addEventListener("dispose",b)),R=N}if(R.visible=y.visible,R.wireframe=y.wireframe,L===Us?R.side=y.shadowSide!==null?y.shadowSide:y.side:R.side=y.shadowSide!==null?y.shadowSide:h[y.side],R.alphaMap=y.alphaMap,R.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,R.map=y.map,R.clipShadows=y.clipShadows,R.clippingPlanes=y.clippingPlanes,R.clipIntersection=y.clipIntersection,R.displacementMap=y.displacementMap,R.displacementScale=y.displacementScale,R.displacementBias=y.displacementBias,R.wireframeLinewidth=y.wireframeLinewidth,R.linewidth=y.linewidth,w.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let E=i.properties.get(R);E.light=w}return R}function M(S,y,w,L,R,A){if(S.visible===!1)return;if(S.layers.test(R)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&A===Us)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,S.matrixWorld);let T=t.update(S),N=S.material;if(Array.isArray(N)){let D=T.groups;for(let k=0,H=D.length;k<H;k++){let I=D[k],F=N[I.materialIndex];if(F&&F.visible){let z=_(S,F,L,A);S.onBeforeShadow(i,S,y,w,T,z,I),i.renderBufferDirect(w,null,T,z,S,I),S.onAfterShadow(i,S,y,w,T,z,I)}}}else if(N.visible){let D=_(S,N,L,A);S.onBeforeShadow(i,S,y,w,T,D,null),i.renderBufferDirect(w,null,T,D,S,null),S.onAfterShadow(i,S,y,w,T,D,null)}}let C=S.children;for(let T=0,N=C.length;T<N;T++)M(C[T],y,w,L,R,A)}function b(S){S.target.removeEventListener("dispose",b);for(let w in l){let L=l[w],R=S.target.uuid;R in L&&(L[R].dispose(),delete L[R])}}}function O_(i,t){function e(){let W=!1,ft=new we,ot=null,Y=new we(0,0,0,0);return{setMask:function(it){ot!==it&&!W&&(i.colorMask(it,it,it,it),ot=it)},setLocked:function(it){W=it},setClear:function(it,at,bt,zt,mt){mt===!0&&(it*=zt,at*=zt,bt*=zt),ft.set(it,at,bt,zt),Y.equals(ft)===!1&&(i.clearColor(it,at,bt,zt),Y.copy(ft))},reset:function(){W=!1,ot=null,Y.set(-1,0,0,0)}}}function n(){let W=!1,ft=!1,ot=null,Y=null,it=null;return{setReversed:function(at){if(ft!==at){let bt=t.get("EXT_clip_control");at?bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.ZERO_TO_ONE_EXT):bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.NEGATIVE_ONE_TO_ONE_EXT),ft=at;let zt=it;it=null,this.setClear(zt)}},getReversed:function(){return ft},setTest:function(at){at?ct(i.DEPTH_TEST):_t(i.DEPTH_TEST)},setMask:function(at){ot!==at&&!W&&(i.depthMask(at),ot=at)},setFunc:function(at){if(ft&&(at=dd[at]),Y!==at){switch(at){case Xo:i.depthFunc(i.NEVER);break;case qo:i.depthFunc(i.ALWAYS);break;case Yo:i.depthFunc(i.LESS);break;case Ss:i.depthFunc(i.LEQUAL);break;case $o:i.depthFunc(i.EQUAL);break;case Zo:i.depthFunc(i.GEQUAL);break;case Jo:i.depthFunc(i.GREATER);break;case Ko:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Y=at}},setLocked:function(at){W=at},setClear:function(at){it!==at&&(it=at,ft&&(at=1-at),i.clearDepth(at))},reset:function(){W=!1,ot=null,Y=null,it=null,ft=!1}}}function s(){let W=!1,ft=null,ot=null,Y=null,it=null,at=null,bt=null,zt=null,mt=null;return{setTest:function(Vt){W||(Vt?ct(i.STENCIL_TEST):_t(i.STENCIL_TEST))},setMask:function(Vt){ft!==Vt&&!W&&(i.stencilMask(Vt),ft=Vt)},setFunc:function(Vt,ne,Ct){(ot!==Vt||Y!==ne||it!==Ct)&&(i.stencilFunc(Vt,ne,Ct),ot=Vt,Y=ne,it=Ct)},setOp:function(Vt,ne,Ct){(at!==Vt||bt!==ne||zt!==Ct)&&(i.stencilOp(Vt,ne,Ct),at=Vt,bt=ne,zt=Ct)},setLocked:function(Vt){W=Vt},setClear:function(Vt){mt!==Vt&&(i.clearStencil(Vt),mt=Vt)},reset:function(){W=!1,ft=null,ot=null,Y=null,it=null,at=null,bt=null,zt=null,mt=null}}}let r=new e,o=new n,a=new s,c={},l=new WeakMap,d={},h={},f={},u=new WeakMap,g=[],v=null,m=!1,p=null,x=null,_=null,M=null,b=null,S=null,y=null,w=new vt(0,0,0),L=0,R=!1,A=null,E=null,C=null,T=null,N=null,D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,H=0,I=i.getParameter(i.VERSION);I.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(I)[1]),k=H>=1):I.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),k=H>=2);let F=null,z={},X=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),q=new we().fromArray(X),Z=new we().fromArray(j);function nt(W,ft,ot,Y){let it=new Uint8Array(4),at=i.createTexture();i.bindTexture(W,at),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let bt=0;bt<ot;bt++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,Y,0,i.RGBA,i.UNSIGNED_BYTE,it):i.texImage2D(ft+bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,it);return at}let rt={};rt[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),rt[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),rt[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),rt[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ct(i.DEPTH_TEST),o.setFunc(Ss),Rt(!1),It(Cl),ct(i.CULL_FACE),Mt(ji);function ct(W){d[W]!==!0&&(i.enable(W),d[W]=!0)}function _t(W){d[W]!==!1&&(i.disable(W),d[W]=!1)}function Xt(W,ft){return f[W]!==ft?(i.bindFramebuffer(W,ft),f[W]=ft,W===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ft),W===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function Pt(W,ft){let ot=g,Y=!1;if(W){ot=u.get(ft),ot===void 0&&(ot=[],u.set(ft,ot));let it=W.textures;if(ot.length!==it.length||ot[0]!==i.COLOR_ATTACHMENT0){for(let at=0,bt=it.length;at<bt;at++)ot[at]=i.COLOR_ATTACHMENT0+at;ot.length=it.length,Y=!0}}else ot[0]!==i.BACK&&(ot[0]=i.BACK,Y=!0);Y&&i.drawBuffers(ot)}function Nt(W){return v!==W?(i.useProgram(W),v=W,!0):!1}let Ht={[ts]:i.FUNC_ADD,[Nu]:i.FUNC_SUBTRACT,[Uu]:i.FUNC_REVERSE_SUBTRACT};Ht[Fu]=i.MIN,Ht[Ou]=i.MAX;let dt={[Bu]:i.ZERO,[zu]:i.ONE,[ku]:i.SRC_COLOR,[Ll]:i.SRC_ALPHA,[qu]:i.SRC_ALPHA_SATURATE,[Wu]:i.DST_COLOR,[Gu]:i.DST_ALPHA,[Vu]:i.ONE_MINUS_SRC_COLOR,[Dl]:i.ONE_MINUS_SRC_ALPHA,[Xu]:i.ONE_MINUS_DST_COLOR,[Hu]:i.ONE_MINUS_DST_ALPHA,[Yu]:i.CONSTANT_COLOR,[$u]:i.ONE_MINUS_CONSTANT_COLOR,[Zu]:i.CONSTANT_ALPHA,[Ju]:i.ONE_MINUS_CONSTANT_ALPHA};function Mt(W,ft,ot,Y,it,at,bt,zt,mt,Vt){if(W===ji){m===!0&&(_t(i.BLEND),m=!1);return}if(m===!1&&(ct(i.BLEND),m=!0),W!==Du){if(W!==p||Vt!==R){if((x!==ts||b!==ts)&&(i.blendEquation(i.FUNC_ADD),x=ts,b=ts),Vt)switch(W){case Fs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rl:i.blendFunc(i.ONE,i.ONE);break;case Il:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ie("WebGLState: Invalid blending: ",W);break}else switch(W){case Fs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Il:ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pl:ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ie("WebGLState: Invalid blending: ",W);break}_=null,M=null,S=null,y=null,w.set(0,0,0),L=0,p=W,R=Vt}return}it=it||ft,at=at||ot,bt=bt||Y,(ft!==x||it!==b)&&(i.blendEquationSeparate(Ht[ft],Ht[it]),x=ft,b=it),(ot!==_||Y!==M||at!==S||bt!==y)&&(i.blendFuncSeparate(dt[ot],dt[Y],dt[at],dt[bt]),_=ot,M=Y,S=at,y=bt),(zt.equals(w)===!1||mt!==L)&&(i.blendColor(zt.r,zt.g,zt.b,mt),w.copy(zt),L=mt),p=W,R=!1}function yt(W,ft){W.side===ln?_t(i.CULL_FACE):ct(i.CULL_FACE);let ot=W.side===on;ft&&(ot=!ot),Rt(ot),W.blending===Fs&&W.transparent===!1?Mt(ji):Mt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);let Y=W.stencilWrite;a.setTest(Y),Y&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),J(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ct(i.SAMPLE_ALPHA_TO_COVERAGE):_t(i.SAMPLE_ALPHA_TO_COVERAGE)}function Rt(W){A!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),A=W)}function It(W){W!==Iu?(ct(i.CULL_FACE),W!==E&&(W===Cl?i.cullFace(i.BACK):W===Pu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_t(i.CULL_FACE),E=W}function V(W){W!==C&&(k&&i.lineWidth(W),C=W)}function J(W,ft,ot){W?(ct(i.POLYGON_OFFSET_FILL),(T!==ft||N!==ot)&&(T=ft,N=ot,o.getReversed()&&(ft=-ft,ot=-ot),i.polygonOffset(ft,ot))):_t(i.POLYGON_OFFSET_FILL)}function gt(W){W?ct(i.SCISSOR_TEST):_t(i.SCISSOR_TEST)}function Ut(W){W===void 0&&(W=i.TEXTURE0+D-1),F!==W&&(i.activeTexture(W),F=W)}function At(W,ft,ot){ot===void 0&&(F===null?ot=i.TEXTURE0+D-1:ot=F);let Y=z[ot];Y===void 0&&(Y={type:void 0,texture:void 0},z[ot]=Y),(Y.type!==W||Y.texture!==ft)&&(F!==ot&&(i.activeTexture(ot),F=ot),i.bindTexture(W,ft||rt[W]),Y.type=W,Y.texture=ft)}function G(){let W=z[F];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function jt(){try{i.compressedTexImage2D(...arguments)}catch(W){ie("WebGLState:",W)}}function qt(){try{i.compressedTexImage3D(...arguments)}catch(W){ie("WebGLState:",W)}}function Bt(){try{i.texSubImage2D(...arguments)}catch(W){ie("WebGLState:",W)}}function ht(){try{i.texSubImage3D(...arguments)}catch(W){ie("WebGLState:",W)}}function te(){try{i.compressedTexSubImage2D(...arguments)}catch(W){ie("WebGLState:",W)}}function kt(){try{i.compressedTexSubImage3D(...arguments)}catch(W){ie("WebGLState:",W)}}function Qt(){try{i.texStorage2D(...arguments)}catch(W){ie("WebGLState:",W)}}function O(){try{i.texStorage3D(...arguments)}catch(W){ie("WebGLState:",W)}}function P(){try{i.texImage2D(...arguments)}catch(W){ie("WebGLState:",W)}}function K(){try{i.texImage3D(...arguments)}catch(W){ie("WebGLState:",W)}}function xt(W){return h[W]!==void 0?h[W]:i.getParameter(W)}function pt(W,ft){h[W]!==ft&&(i.pixelStorei(W,ft),h[W]=ft)}function wt(W){q.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),q.copy(W))}function Et(W){Z.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),Z.copy(W))}function lt(W,ft){let ot=l.get(ft);ot===void 0&&(ot=new WeakMap,l.set(ft,ot));let Y=ot.get(W);Y===void 0&&(Y=i.getUniformBlockIndex(ft,W.name),i.uniformBlockBinding(ft,Y,Y),ot.set(W,Y))}function ut(W,ft,ot){let it=l.get(ft).get(W);c[it]!==ot&&(i.bindBufferBase(i.UNIFORM_BUFFER,it,ot),c[it]=ot)}function St(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},h={},F=null,z={},f={},c={},u=new WeakMap,g=[],v=null,m=!1,p=null,x=null,_=null,M=null,b=null,S=null,y=null,w=new vt(0,0,0),L=0,R=!1,A=null,E=null,C=null,T=null,N=null,q.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ct,disable:_t,bindFramebuffer:Xt,drawBuffers:Pt,useProgram:Nt,setBlending:Mt,setMaterial:yt,setFlipSided:Rt,setCullFace:It,setLineWidth:V,setPolygonOffset:J,setScissorTest:gt,activeTexture:Ut,bindTexture:At,unbindTexture:G,compressedTexImage2D:jt,compressedTexImage3D:qt,texImage2D:P,texImage3D:K,pixelStorei:pt,getParameter:xt,updateUBOMapping:lt,uniformBlockBinding:ut,texStorage2D:Qt,texStorage3D:O,texSubImage2D:Bt,texSubImage3D:ht,compressedTexSubImage2D:te,compressedTexSubImage3D:kt,scissor:wt,viewport:Et,reset:St}}function B_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new et,d=new WeakMap,h=new Set,f,u=new WeakMap,g=new Set,v=new FinalizationRegistry(O=>g.delete(O)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(O,P){return m?new OffscreenCanvas(O,P):mr("canvas")}function x(O,P,K){let xt=1,pt=Qt(O);if((pt.width>K||pt.height>K)&&(xt=K/Math.max(pt.width,pt.height)),xt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){let wt=Math.floor(xt*pt.width),Et=Math.floor(xt*pt.height);f===void 0&&(f=p(wt,Et));let lt=P?p(wt,Et):f;return lt.width=wt,lt.height=Et,lt.getContext("2d").drawImage(O,0,0,wt,Et),ee("WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+wt+"x"+Et+")."),lt}else return"data"in O&&ee("WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),O;return O}function _(O){return O.generateMipmaps}function M(O){i.generateMipmap(O)}function b(O){return O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?i.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(O,P,K,xt,pt,wt=!1){if(O!==null){if(i[O]!==void 0)return i[O];ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let Et;xt&&(Et=t.get("EXT_texture_norm16"),Et||ee("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let lt=P;if(P===i.RED&&(K===i.FLOAT&&(lt=i.R32F),K===i.HALF_FLOAT&&(lt=i.R16F),K===i.UNSIGNED_BYTE&&(lt=i.R8),K===i.UNSIGNED_SHORT&&Et&&(lt=Et.R16_EXT),K===i.SHORT&&Et&&(lt=Et.R16_SNORM_EXT)),P===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(lt=i.R8UI),K===i.UNSIGNED_SHORT&&(lt=i.R16UI),K===i.UNSIGNED_INT&&(lt=i.R32UI),K===i.BYTE&&(lt=i.R8I),K===i.SHORT&&(lt=i.R16I),K===i.INT&&(lt=i.R32I)),P===i.RG&&(K===i.FLOAT&&(lt=i.RG32F),K===i.HALF_FLOAT&&(lt=i.RG16F),K===i.UNSIGNED_BYTE&&(lt=i.RG8),K===i.UNSIGNED_SHORT&&Et&&(lt=Et.RG16_EXT),K===i.SHORT&&Et&&(lt=Et.RG16_SNORM_EXT)),P===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(lt=i.RG8UI),K===i.UNSIGNED_SHORT&&(lt=i.RG16UI),K===i.UNSIGNED_INT&&(lt=i.RG32UI),K===i.BYTE&&(lt=i.RG8I),K===i.SHORT&&(lt=i.RG16I),K===i.INT&&(lt=i.RG32I)),P===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(lt=i.RGB8UI),K===i.UNSIGNED_SHORT&&(lt=i.RGB16UI),K===i.UNSIGNED_INT&&(lt=i.RGB32UI),K===i.BYTE&&(lt=i.RGB8I),K===i.SHORT&&(lt=i.RGB16I),K===i.INT&&(lt=i.RGB32I)),P===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(lt=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(lt=i.RGBA16UI),K===i.UNSIGNED_INT&&(lt=i.RGBA32UI),K===i.BYTE&&(lt=i.RGBA8I),K===i.SHORT&&(lt=i.RGBA16I),K===i.INT&&(lt=i.RGBA32I)),P===i.RGB&&(K===i.UNSIGNED_SHORT&&Et&&(lt=Et.RGB16_EXT),K===i.SHORT&&Et&&(lt=Et.RGB16_SNORM_EXT),K===i.UNSIGNED_INT_5_9_9_9_REV&&(lt=i.RGB9_E5),K===i.UNSIGNED_INT_10F_11F_11F_REV&&(lt=i.R11F_G11F_B10F)),P===i.RGBA){let ut=wt?pr:de.getTransfer(pt);K===i.FLOAT&&(lt=i.RGBA32F),K===i.HALF_FLOAT&&(lt=i.RGBA16F),K===i.UNSIGNED_BYTE&&(lt=ut===ye?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT&&Et&&(lt=Et.RGBA16_EXT),K===i.SHORT&&Et&&(lt=Et.RGBA16_SNORM_EXT),K===i.UNSIGNED_SHORT_4_4_4_4&&(lt=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(lt=i.RGB5_A1)}return(lt===i.R16F||lt===i.R32F||lt===i.RG16F||lt===i.RG32F||lt===i.RGBA16F||lt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function y(O,P){let K;return O?P===null||P===Dn||P===ns?K=i.DEPTH24_STENCIL8:P===An?K=i.DEPTH32F_STENCIL8:P===Bs&&(K=i.DEPTH24_STENCIL8,ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===Dn||P===ns?K=i.DEPTH_COMPONENT24:P===An?K=i.DEPTH_COMPONENT32F:P===Bs&&(K=i.DEPTH_COMPONENT16),K}function w(O,P){return _(O)===!0||O.isFramebufferTexture&&O.minFilter!==We&&O.minFilter!==qe?Math.log2(Math.max(P.width,P.height))+1:O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?P.mipmaps.length:1}function L(O){let P=new WeakRef(O);n.get(O).__ref=P,g.add(P),v.register(O,P,P)}function R(O){let P=n.get(O).__ref;P!==void 0&&(g.delete(P),v.unregister(P))}function A(O){C(O.target)}function E(O){T(O.target)}function C(O){O.removeEventListener("dispose",A),R(O),D(O),O.isVideoTexture&&d.delete(O),O.isHTMLTexture&&h.delete(O)}function T(O){O.removeEventListener("dispose",E),R(O),H(O)}function N(){for(let O of g){let P=O.deref();P!==void 0&&(P.isRenderTarget===!0?T(P):C(P))}g.clear(),h.clear()}function D(O){let P=n.get(O);if(P.__webglInit===void 0)return;let K=O.source,xt=u.get(K);if(xt){let pt=xt[P.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&k(O),Object.keys(xt).length===0&&u.delete(K)}n.remove(O)}function k(O){let P=n.get(O);i.deleteTexture(P.__webglTexture);let K=O.source,xt=u.get(K);delete xt[P.__cacheKey],o.memory.textures--}function H(O){let P=n.get(O);P.__depthDisposeCallback&&P.__depthDisposeCallback();let K=O.depthTexture;if(K&&K.renderTarget===O&&C(K),O.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(P.__webglFramebuffer[pt]))for(let wt=0;wt<P.__webglFramebuffer[pt].length;wt++)i.deleteFramebuffer(P.__webglFramebuffer[pt][wt]);else i.deleteFramebuffer(P.__webglFramebuffer[pt]);P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer[pt])}else{if(Array.isArray(P.__webglFramebuffer))for(let pt=0;pt<P.__webglFramebuffer.length;pt++)i.deleteFramebuffer(P.__webglFramebuffer[pt]);else i.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&i.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let pt=0;pt<P.__webglColorRenderbuffer.length;pt++)P.__webglColorRenderbuffer[pt]&&i.deleteRenderbuffer(P.__webglColorRenderbuffer[pt]);P.__webglDepthRenderbuffer&&i.deleteRenderbuffer(P.__webglDepthRenderbuffer)}let xt=O.textures;for(let pt=0,wt=xt.length;pt<wt;pt++){let Et=n.get(xt[pt]);Et.__webglTexture&&(i.deleteTexture(Et.__webglTexture),o.memory.textures--),n.remove(xt[pt])}n.remove(O)}let I=0;function F(){I=0}function z(){return I}function X(O){I=O}function j(){let O=I;return O>=s.maxTextures&&ee("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+s.maxTextures),I+=1,O}function q(O){let P=[];return P.push(O.wrapS),P.push(O.wrapT),P.push(O.wrapR||0),P.push(O.magFilter),P.push(O.minFilter),P.push(O.anisotropy),P.push(O.internalFormat),P.push(O.format),P.push(O.type),P.push(O.generateMipmaps),P.push(O.mipmapsAutoUpdate),P.push(O.premultiplyAlpha),P.push(O.flipY),P.push(O.unpackAlignment),P.push(O.colorSpace),P.join()}function Z(O,P){let K=n.get(O);if(O.isVideoTexture&&te(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&K.__version!==O.version){let xt=O.image;if(xt===null)ee("WebGLRenderer: Texture marked for update but no image data found.");else if(xt.complete===!1)ee("WebGLRenderer: Texture marked for update but image is incomplete");else{yt(K,O,P);return}}else O.isExternalTexture&&(K.__webglTexture=O.sourceTexture?O.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+P)}function nt(O,P){let K=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&K.__version!==O.version){yt(K,O,P);return}else O.isExternalTexture&&(K.__webglTexture=O.sourceTexture?O.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+P)}function rt(O,P){let K=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&K.__version!==O.version){yt(K,O,P);return}e.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+P)}function ct(O,P){let K=n.get(O);if(O.version>0&&K.__version!==O.version){Rt(K,O,P);return}e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+P)}let _t={[Qo]:i.REPEAT,[kn]:i.CLAMP_TO_EDGE,[jo]:i.MIRRORED_REPEAT},Xt={[We]:i.NEAREST,[ju]:i.NEAREST_MIPMAP_NEAREST,[Wr]:i.NEAREST_MIPMAP_LINEAR,[qe]:i.LINEAR,[Ra]:i.LINEAR_MIPMAP_NEAREST,[pi]:i.LINEAR_MIPMAP_LINEAR},Pt={[id]:i.NEVER,[Jl]:i.ALWAYS,[sd]:i.LESS,[$l]:i.LEQUAL,[rd]:i.EQUAL,[Zl]:i.GEQUAL,[od]:i.GREATER,[ad]:i.NOTEQUAL};function Nt(O,P){if(P.type===An&&t.has("OES_texture_float_linear")===!1&&(P.magFilter===qe||P.magFilter===Ra||P.magFilter===Wr||P.magFilter===pi||P.minFilter===qe||P.minFilter===Ra||P.minFilter===Wr||P.minFilter===pi)&&ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(O,i.TEXTURE_WRAP_S,_t[P.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,_t[P.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,_t[P.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,Xt[P.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,Xt[P.minFilter]),P.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,Pt[P.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===We||P.minFilter!==Wr&&P.minFilter!==pi||P.type===An&&t.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){let K=t.get("EXT_texture_filter_anisotropic");i.texParameterf(O,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,s.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function Ht(O,P){let K=!1;O.__webglInit===void 0&&(O.__webglInit=!0,P.addEventListener("dispose",A),L(P));let xt=P.source,pt=u.get(xt);pt===void 0&&(pt={},u.set(xt,pt));let wt=q(P);if(wt!==O.__cacheKey){pt[wt]===void 0&&(pt[wt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,K=!0),pt[wt].usedTimes++;let Et=pt[O.__cacheKey];Et!==void 0&&(pt[O.__cacheKey].usedTimes--,Et.usedTimes===0&&k(P)),O.__cacheKey=wt,O.__webglTexture=pt[wt].texture}return K}function dt(O,P,K){return Math.floor(Math.floor(O/K)/P)}function Mt(O,P,K,xt){let wt=O.updateRanges;if(wt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,P.width,P.height,K,xt,P.data);else{wt.sort((W,ft)=>W.start-ft.start);let Et=0;for(let W=1;W<wt.length;W++){let ft=wt[Et],ot=wt[W],Y=ft.start+ft.count,it=dt(ot.start,P.width,4),at=dt(ft.start,P.width,4);ot.start<=Y+1&&it===at&&dt(ot.start+ot.count-1,P.width,4)===it?ft.count=Math.max(ft.count,ot.start+ot.count-ft.start):(++Et,wt[Et]=ot)}wt.length=Et+1;let lt=e.getParameter(i.UNPACK_ROW_LENGTH),ut=e.getParameter(i.UNPACK_SKIP_PIXELS),St=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,P.width);for(let W=0,ft=wt.length;W<ft;W++){let ot=wt[W],Y=Math.floor(ot.start/4),it=Math.ceil(ot.count/4),at=Y%P.width,bt=Math.floor(Y/P.width),zt=it,mt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,at),e.pixelStorei(i.UNPACK_SKIP_ROWS,bt),e.texSubImage2D(i.TEXTURE_2D,0,at,bt,zt,mt,K,xt,P.data)}O.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,lt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ut),e.pixelStorei(i.UNPACK_SKIP_ROWS,St)}}function yt(O,P,K){let xt=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(xt=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(xt=i.TEXTURE_3D);let pt=Ht(O,P),wt=P.source;e.bindTexture(xt,O.__webglTexture,i.TEXTURE0+K);let Et=n.get(wt);if(wt.version!==Et.__version||pt===!0){if(e.activeTexture(i.TEXTURE0+K),(typeof ImageBitmap<"u"&&P.image instanceof ImageBitmap)===!1){let mt=de.getPrimaries(de.workingColorSpace),Vt=P.colorSpace===gi?null:de.getPrimaries(P.colorSpace),ne=P.colorSpace===gi||mt===Vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne)}e.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment);let ut=x(P.image,!1,s.maxTextureSize);ut=kt(P,ut);let St=r.convert(P.format,P.colorSpace),W=r.convert(P.type),ft=S(P.internalFormat,St,W,P.normalized,P.colorSpace,P.isVideoTexture);Nt(xt,P);let ot,Y=P.mipmaps,it=P.isVideoTexture!==!0,at=Et.__version===void 0||pt===!0,bt=wt.dataReady,zt=w(P,ut);if(P.isDepthTexture)ft=y(P.format===mi,P.type),at&&(it?e.texStorage2D(i.TEXTURE_2D,1,ft,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,ft,ut.width,ut.height,0,St,W,null));else if(P.isDataTexture)if(Y.length>0){it&&at&&e.texStorage2D(i.TEXTURE_2D,zt,ft,Y[0].width,Y[0].height);for(let mt=0,Vt=Y.length;mt<Vt;mt++)ot=Y[mt],it?bt&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,ot.width,ot.height,St,W,ot.data):e.texImage2D(i.TEXTURE_2D,mt,ft,ot.width,ot.height,0,St,W,ot.data);P.generateMipmaps=!1}else it?(at&&e.texStorage2D(i.TEXTURE_2D,zt,ft,ut.width,ut.height),bt&&Mt(P,ut,St,W)):e.texImage2D(i.TEXTURE_2D,0,ft,ut.width,ut.height,0,St,W,ut.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){it&&at&&e.texStorage3D(i.TEXTURE_2D_ARRAY,zt,ft,Y[0].width,Y[0].height,ut.depth);for(let mt=0,Vt=Y.length;mt<Vt;mt++)if(ot=Y[mt],P.format!==Un)if(St!==null)if(it){if(bt)if(P.layerUpdates.size>0){let ne=oh(ot.width,ot.height,P.format,P.type);for(let Ct of P.layerUpdates){let xe=ot.data.subarray(Ct*ne/ot.data.BYTES_PER_ELEMENT,(Ct+1)*ne/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,Ct,ot.width,ot.height,1,St,xe)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,ot.width,ot.height,ut.depth,St,ot.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,mt,ft,ot.width,ot.height,ut.depth,0,ot.data,0,0);else ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?bt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,ot.width,ot.height,ut.depth,St,W,ot.data):e.texImage3D(i.TEXTURE_2D_ARRAY,mt,ft,ot.width,ot.height,ut.depth,0,St,W,ot.data);P.layerUpdates.size>0&&P.clearLayerUpdates()}else{it&&at&&e.texStorage2D(i.TEXTURE_2D,zt,ft,Y[0].width,Y[0].height);for(let mt=0,Vt=Y.length;mt<Vt;mt++)ot=Y[mt],P.format!==Un?St!==null?it?bt&&e.compressedTexSubImage2D(i.TEXTURE_2D,mt,0,0,ot.width,ot.height,St,ot.data):e.compressedTexImage2D(i.TEXTURE_2D,mt,ft,ot.width,ot.height,0,ot.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?bt&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,ot.width,ot.height,St,W,ot.data):e.texImage2D(i.TEXTURE_2D,mt,ft,ot.width,ot.height,0,St,W,ot.data)}else if(P.isDataArrayTexture)if(it){if(at&&e.texStorage3D(i.TEXTURE_2D_ARRAY,zt,ft,ut.width,ut.height,ut.depth),bt)if(P.layerUpdates.size>0){let mt=oh(ut.width,ut.height,P.format,P.type);for(let Vt of P.layerUpdates){let ne=ut.data.subarray(Vt*mt/ut.data.BYTES_PER_ELEMENT,(Vt+1)*mt/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Vt,ut.width,ut.height,1,St,W,ne)}P.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,St,W,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ft,ut.width,ut.height,ut.depth,0,St,W,ut.data);else if(P.isData3DTexture)it?(at&&e.texStorage3D(i.TEXTURE_3D,zt,ft,ut.width,ut.height,ut.depth),bt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,St,W,ut.data)):e.texImage3D(i.TEXTURE_3D,0,ft,ut.width,ut.height,ut.depth,0,St,W,ut.data);else if(P.isFramebufferTexture){if(at)if(it)e.texStorage2D(i.TEXTURE_2D,zt,ft,ut.width,ut.height);else{let mt=ut.width,Vt=ut.height;for(let ne=0;ne<zt;ne++)e.texImage2D(i.TEXTURE_2D,ne,ft,mt,Vt,0,St,W,null),mt>>=1,Vt>>=1}}else if(P.isHTMLTexture){if("texElementImage2D"in i){let mt=i.canvas;if(mt.hasAttribute("layoutsubtree")||mt.setAttribute("layoutsubtree","true"),ut.parentNode!==mt){mt.appendChild(ut),h.add(P),mt.onpaint=Vt=>{let ne=Vt.changedElements;for(let Ct of h)ne.includes(Ct.image)&&(Ct.needsUpdate=!0)},mt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ut);else{let ne=i.RGBA,Ct=i.RGBA,xe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ne,Ct,xe,ut)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Y.length>0){if(it&&at){let mt=Qt(Y[0]);e.texStorage2D(i.TEXTURE_2D,zt,ft,mt.width,mt.height)}for(let mt=0,Vt=Y.length;mt<Vt;mt++)ot=Y[mt],it?bt&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,St,W,ot):e.texImage2D(i.TEXTURE_2D,mt,ft,St,W,ot);P.generateMipmaps=!1}else if(it){if(at){let mt=Qt(ut);e.texStorage2D(i.TEXTURE_2D,zt,ft,mt.width,mt.height)}bt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,W,ut)}else e.texImage2D(i.TEXTURE_2D,0,ft,St,W,ut);_(P)&&P.mipmapsAutoUpdate===!0&&M(xt),Et.__version=wt.version,P.onUpdate&&P.onUpdate(P)}O.__version=P.version}function Rt(O,P,K){if(P.image.length!==6)return;let xt=Ht(O,P),pt=P.source;e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+K);let wt=n.get(pt);if(pt.version!==wt.__version||xt===!0){e.activeTexture(i.TEXTURE0+K);let Et=de.getPrimaries(de.workingColorSpace),lt=P.colorSpace===gi?null:de.getPrimaries(P.colorSpace),ut=P.colorSpace===gi||Et===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let St=P.isCompressedTexture||P.image[0].isCompressedTexture,W=P.image[0]&&P.image[0].isDataTexture,ft=[];for(let Ct=0;Ct<6;Ct++)!St&&!W?ft[Ct]=x(P.image[Ct],!0,s.maxCubemapSize):ft[Ct]=W?P.image[Ct].image:P.image[Ct],ft[Ct]=kt(P,ft[Ct]);let ot=ft[0],Y=r.convert(P.format,P.colorSpace),it=r.convert(P.type),at=S(P.internalFormat,Y,it,P.normalized,P.colorSpace),bt=P.isVideoTexture!==!0,zt=wt.__version===void 0||xt===!0,mt=pt.dataReady,Vt=w(P,ot);Nt(i.TEXTURE_CUBE_MAP,P);let ne;if(P.isDepthTexture){if(at=y(P.format===mi,P.type),zt)if(bt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,at,ot.width,ot.height);else for(let Ct=0;Ct<6;Ct++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,at,ot.width,ot.height,0,Y,it,null)}else if(St){bt&&zt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Vt,at,ot.width,ot.height);for(let Ct=0;Ct<6;Ct++){ne=ft[Ct].mipmaps;for(let xe=0;xe<ne.length;xe++){let De=ne[xe];P.format!==Un?Y!==null?bt?mt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,xe,0,0,De.width,De.height,Y,De.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,xe,at,De.width,De.height,0,De.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):bt?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,xe,0,0,De.width,De.height,Y,it,De.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,xe,at,De.width,De.height,0,Y,it,De.data)}}}else{if(ne=P.mipmaps,bt&&zt){ne.length>0&&Vt++;let Ct=Qt(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Vt,at,Ct.width,Ct.height)}for(let Ct=0;Ct<6;Ct++)if(W){bt?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,0,0,ft[Ct].width,ft[Ct].height,Y,it,ft[Ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,at,ft[Ct].width,ft[Ct].height,0,Y,it,ft[Ct].data);for(let xe=0;xe<ne.length;xe++){let xi=ne[xe].image[Ct].image;bt?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,xe+1,0,0,xi.width,xi.height,Y,it,xi.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,xe+1,at,xi.width,xi.height,0,Y,it,xi.data)}}else{bt?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,0,0,Y,it,ft[Ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,at,Y,it,ft[Ct]);for(let xe=0;xe<ne.length;xe++){let De=ne[xe];bt?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,xe+1,0,0,Y,it,De.image[Ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,xe+1,at,Y,it,De.image[Ct])}}}_(P)&&P.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),wt.__version=pt.version,P.onUpdate&&P.onUpdate(P)}O.__version=P.version}function It(O,P,K,xt,pt,wt){let Et=r.convert(K.format,K.colorSpace),lt=r.convert(K.type),ut=S(K.internalFormat,Et,lt,K.normalized,K.colorSpace),St=n.get(P),W=n.get(K);if(W.__renderTarget=P,!St.__hasExternalTextures){let ft=Math.max(1,P.width>>wt),ot=Math.max(1,P.height>>wt);pt===i.TEXTURE_3D||pt===i.TEXTURE_2D_ARRAY?e.texImage3D(pt,wt,ut,ft,ot,P.depth,0,Et,lt,null):e.texImage2D(pt,wt,ut,ft,ot,0,Et,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,O),ht(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xt,pt,W.__webglTexture,0,Bt(P)):(pt===i.TEXTURE_2D||pt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,xt,pt,W.__webglTexture,wt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function V(O,P,K){if(i.bindRenderbuffer(i.RENDERBUFFER,O),P.depthBuffer){let xt=P.depthTexture,pt=xt&&xt.isDepthTexture?xt.type:null,wt=y(P.stencilBuffer,pt),Et=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ht(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Bt(P),wt,P.width,P.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt(P),wt,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,wt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,O)}else{let xt=P.textures;for(let pt=0;pt<xt.length;pt++){let wt=xt[pt],Et=r.convert(wt.format,wt.colorSpace),lt=r.convert(wt.type),ut=S(wt.internalFormat,Et,lt,wt.normalized,wt.colorSpace);ht(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Bt(P),ut,P.width,P.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt(P),ut,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,ut,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function J(O,P,K){let xt=P.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,O),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let pt=n.get(P.depthTexture);pt.__renderTarget=P;let wt=xt?P.depthTexture.image[0]:P.depthTexture.image;(!pt.__webglTexture||wt.width!==P.width||wt.height!==P.height)&&(wt.width=P.width,wt.height=P.height,P.depthTexture.needsUpdate=!0),xt?ct(P.depthTexture,0):Z(P.depthTexture,0);let Et=pt.__webglTexture,lt=Bt(P),ut=xt?i.TEXTURE_CUBE_MAP_POSITIVE_X+K:i.TEXTURE_2D,St=P.depthTexture.format===mi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(P.depthTexture.format===li)ht(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,St,ut,Et,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,St,ut,Et,0);else if(P.depthTexture.format===mi)ht(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,St,ut,Et,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,St,ut,Et,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function gt(O){let P=n.get(O),K=O.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==O.depthTexture){let xt=O.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),xt){let pt=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,xt.removeEventListener("dispose",pt)};xt.addEventListener("dispose",pt),P.__depthDisposeCallback=pt}P.__boundDepthTexture=xt}if(O.depthTexture&&!P.__autoAllocateDepthBuffer)if(K)for(let xt=0;xt<6;xt++)J(P.__webglFramebuffer[xt],O,xt);else O.texture.mipmaps.length>0?J(P.__webglFramebuffer[0],O,0):J(P.__webglFramebuffer,O,0);else if(K){P.__webglDepthbuffer=[];for(let xt=0;xt<6;xt++)if(e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[xt]),P.__webglDepthbuffer[xt]===void 0)P.__webglDepthbuffer[xt]=i.createRenderbuffer(),V(P.__webglDepthbuffer[xt],O,!1);else{let pt=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=P.__webglDepthbuffer[xt];i.bindRenderbuffer(i.RENDERBUFFER,wt),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,wt)}}else if(O.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=i.createRenderbuffer(),V(P.__webglDepthbuffer,O,!1);else{let pt=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=P.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,wt),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,wt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(O,P,K){let xt=n.get(O);P!==void 0&&It(xt.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&gt(O)}function At(O){let P=O.texture,K=n.get(O),xt=n.get(P);O.addEventListener("dispose",E),L(O);let pt=O.textures,wt=O.isWebGLCubeRenderTarget===!0,Et=pt.length>1;if(Et||(xt.__webglTexture===void 0&&(xt.__webglTexture=i.createTexture()),xt.__version=P.version,o.memory.textures++),wt){K.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(P.mipmaps.length>0){K.__webglFramebuffer[lt]=[];for(let ut=0;ut<P.mipmaps.length;ut++)K.__webglFramebuffer[lt][ut]=i.createFramebuffer()}else K.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(P.mipmaps.length>0){K.__webglFramebuffer=[];for(let lt=0;lt<P.mipmaps.length;lt++)K.__webglFramebuffer[lt]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(Et)for(let lt=0,ut=pt.length;lt<ut;lt++){let St=n.get(pt[lt]);St.__webglTexture===void 0&&(St.__webglTexture=i.createTexture(),o.memory.textures++)}if(O.samples>0&&ht(O)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let lt=0;lt<pt.length;lt++){let ut=pt[lt];K.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[lt]);let St=r.convert(ut.format,ut.colorSpace),W=r.convert(ut.type),ft=S(ut.internalFormat,St,W,ut.normalized,ut.colorSpace,O.isXRRenderTarget===!0),ot=Bt(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,ft,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,K.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),V(K.__webglDepthRenderbuffer,O,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(wt){e.bindTexture(i.TEXTURE_CUBE_MAP,xt.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,P);for(let lt=0;lt<6;lt++)if(P.mipmaps.length>0)for(let ut=0;ut<P.mipmaps.length;ut++)It(K.__webglFramebuffer[lt][ut],O,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ut);else It(K.__webglFramebuffer[lt],O,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);_(P)?M(i.TEXTURE_CUBE_MAP):P.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,P.mipmaps.length-1),e.unbindTexture()}else if(Et){for(let lt=0,ut=pt.length;lt<ut;lt++){let St=pt[lt],W=n.get(St),ft=i.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(ft=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,W.__webglTexture),Nt(ft,St),It(K.__webglFramebuffer,O,St,i.COLOR_ATTACHMENT0+lt,ft,0),_(St)&&M(ft)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(lt=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,xt.__webglTexture),Nt(lt,P),P.mipmaps.length>0)for(let ut=0;ut<P.mipmaps.length;ut++)It(K.__webglFramebuffer[ut],O,P,i.COLOR_ATTACHMENT0,lt,ut);else It(K.__webglFramebuffer,O,P,i.COLOR_ATTACHMENT0,lt,0);_(P)?M(lt):P.mipmaps.length>0&&i.texParameteri(lt,i.TEXTURE_MAX_LEVEL,P.mipmaps.length-1),e.unbindTexture()}O.depthBuffer&&gt(O)}function G(O){let P=O.textures;for(let K=0,xt=P.length;K<xt;K++){let pt=P[K];if(_(pt)&&pt.mipmapsAutoUpdate===!0){let wt=b(O),Et=n.get(pt).__webglTexture;e.bindTexture(wt,Et),M(wt),e.unbindTexture()}}}let jt=[];function qt(O){if(O.samples>0){if(ht(O)===!1){let P=O.textures,K=O.width,xt=O.height,pt=i.COLOR_BUFFER_BIT,wt=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(O),lt=P.length>1;if(lt)for(let St=0;St<P.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),O.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let St=0;St<P.length;St++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(pt|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(pt|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[St]);let W=n.get(P[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,W,0)}i.blitFramebuffer(0,0,K,xt,0,0,K,xt,pt,i.NEAREST),c===!0&&(jt.length=0,jt.push(i.COLOR_ATTACHMENT0+St),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&jt.push(wt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,jt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let St=0;St<P.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,Et.__webglColorRenderbuffer[St]);let W=n.get(P[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,W,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&c){let P=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[P])}}}function Bt(O){return Math.min(s.maxSamples,O.samples)}function ht(O){let P=n.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function te(O){let P=o.render.frame;d.get(O)!==P&&(d.set(O,P),O.update())}function kt(O,P){let K=O.colorSpace,xt=O.format,pt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||K!==fr&&K!==gi&&(de.getTransfer(K)===ye?(xt!==Un||pt!==hn)&&ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ie("WebGLTextures: Unsupported texture color space:",K)),P}function Qt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(l.width=O.naturalWidth||O.width,l.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(l.width=O.displayWidth,l.height=O.displayHeight):(l.width=O.width,l.height=O.height),l}this.allocateTextureUnit=j,this.resetTextureUnits=F,this.getTextureUnits=z,this.setTextureUnits=X,this.setTexture2D=Z,this.setTexture2DArray=nt,this.setTexture3D=rt,this.setTextureCube=ct,this.rebindTextures=Ut,this.setupRenderTarget=At,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=It,this.useMultisampledRTT=ht,this.dispose=N}function z_(i,t){function e(n,s=gi){let r,o=de.getTransfer(s);if(n===hn)return i.UNSIGNED_BYTE;if(n===Pa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===La)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Gl)return i.BYTE;if(n===Hl)return i.SHORT;if(n===Bs)return i.UNSIGNED_SHORT;if(n===Ia)return i.INT;if(n===Dn)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===Nn)return i.HALF_FLOAT;if(n===ql)return i.ALPHA;if(n===Yl)return i.RGB;if(n===Un)return i.RGBA;if(n===li)return i.DEPTH_COMPONENT;if(n===mi)return i.DEPTH_STENCIL;if(n===zs)return i.RED;if(n===Da)return i.RED_INTEGER;if(n===Pi)return i.RG;if(n===Na)return i.RG_INTEGER;if(n===Ua)return i.RGBA_INTEGER;if(n===Xr||n===qr||n===Yr||n===$r)if(o===ye)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Xr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Xr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fa||n===Oa||n===Ba||n===za)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===za)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ka||n===Va||n===Ga||n===Ha||n===Wa||n===Zr||n===Xa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ka||n===Va)return o===ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ga)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ha)return r.COMPRESSED_R11_EAC;if(n===Wa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Zr)return r.COMPRESSED_RG11_EAC;if(n===Xa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===qa||n===Ya||n===$a||n===Za||n===Ja||n===Ka||n===Qa||n===ja||n===tc||n===ec||n===nc||n===ic||n===sc||n===rc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===qa)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ya)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$a)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Za)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ja)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ka)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Qa)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ja)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===tc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ec)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===nc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ic)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===rc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oc||n===ac||n===cc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===oc)return o===ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ac)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lc||n===hc||n===Jr||n===uc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===lc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===hc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ns?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var k_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,V_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,mh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new br(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Tn({vertexShader:k_,fragmentShader:V_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new se(new Ki(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gh=class extends Gn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,d=null,h=null,f=null,u=null,g=null,v=typeof XRWebGLBinding<"u",m=new mh,p={},x=e.getContextAttributes(),_=null,M=null,b=[],S=[],y=new et,w=null,L=null,R=new xn;R.viewport=new we;let A=new xn;A.viewport=new we;let E=[R,A],C=new Ta,T=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Z=b[q];return Z===void 0&&(Z=new Cs,b[q]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(q){let Z=b[q];return Z===void 0&&(Z=new Cs,b[q]=Z),Z.getGripSpace()},this.getHand=function(q){let Z=b[q];return Z===void 0&&(Z=new Cs,b[q]=Z),Z.getHandSpace()};function D(q){let Z=S.indexOf(q.inputSource);if(Z===-1)return;let nt=b[Z];nt!==void 0&&(nt.update(q.inputSource,q.frame,l||o),nt.dispatchEvent({type:q.type,data:q.inputSource}))}function k(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",H);for(let q=0;q<b.length;q++){let Z=S[q];Z!==null&&(S[q]=null,b[q].disconnect(Z))}T=null,N=null,m.reset();for(let q in p)delete p[q];if(t.setRenderTarget(_),u=null,f=null,h=null,s=null,M=null,j.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(y.width,y.height,!1),L!==null){let q=L.camera;q.fov=L.fov,q.zoom=L.zoom,q.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(_=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",k),s.addEventListener("inputsourceschange",H),x.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(y),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,rt=null,ct=null;x.depth&&(ct=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=x.stencil?mi:li,rt=x.stencil?ns:Dn);let _t={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(_t),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new _n(f.textureWidth,f.textureHeight,{format:Un,type:hn,depthTexture:new ui(f.textureWidth,f.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let nt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),M=new _n(u.framebufferWidth,u.framebufferHeight,{format:Un,type:hn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),j.setContext(s),j.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(q){for(let Z=0;Z<q.removed.length;Z++){let nt=q.removed[Z],rt=S.indexOf(nt);rt>=0&&(S[rt]=null,b[rt].disconnect(nt))}for(let Z=0;Z<q.added.length;Z++){let nt=q.added[Z],rt=S.indexOf(nt);if(rt===-1){for(let _t=0;_t<b.length;_t++)if(_t>=S.length){S.push(nt),rt=_t;break}else if(S[_t]===null){S[_t]=nt,rt=_t;break}if(rt===-1)break}let ct=b[rt];ct&&ct.connect(nt)}}function I(q,Z){Z===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Z.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let Z=q.near,nt=q.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(nt=m.depthFar)),C.near=A.near=R.near=Z,C.far=A.far=R.far=nt,(T!==C.near||N!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),T=C.near,N=C.far),C.layers.mask=q.layers.mask|6,R.layers.mask=C.layers.mask&-5,A.layers.mask=C.layers.mask&-3;let rt=q.parent,ct=C.cameras;I(C,rt);for(let _t=0;_t<ct.length;_t++)I(ct[_t],rt);C.projectionMatrix.copy(R.projectionMatrix),C.projectionMatrixInverse.copy(R.projectionMatrixInverse),L===null&&q.isPerspectiveCamera&&(L={camera:q,fov:q.fov,zoom:q.zoom}),F(q,C,rt)};function F(q,Z,nt){nt===null?q.matrix.copy(Z.matrixWorld):(q.matrix.copy(nt.matrixWorld),q.matrix.invert(),q.matrix.multiply(Z.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ts*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&u===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(C)},this.getCameraTexture=function(q){return p[q]};let z=null;function X(q,Z){if(d=Z.getViewerPose(l||o),g=Z,d!==null){let nt=d.views;u!==null&&(t.setRenderTargetFramebuffer(M,u.framebuffer),t.setRenderTarget(M));let rt=!1;nt.length!==C.cameras.length&&(C.cameras.length=0,rt=!0);for(let Pt=0;Pt<nt.length;Pt++){let Nt=nt[Pt],Ht=null;if(u!==null)Ht=u.getViewport(Nt);else{let Mt=h.getViewSubImage(f,Nt);Ht=Mt.viewport,Pt===0&&(t.setRenderTargetTextures(M,Mt.colorTexture,Mt.depthStencilTexture),t.setRenderTarget(M))}let dt=E[Pt];dt===void 0&&(dt=new xn,dt.layers.enable(Pt),dt.viewport=new we,E[Pt]=dt),dt.matrix.fromArray(Nt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(Nt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),Pt===0&&(C.matrix.copy(dt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),rt===!0&&C.cameras.push(dt)}let ct=s.enabledFeatures;if(ct&&ct.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){h=n.getBinding();let Pt=h.getDepthInformation(nt[0]);Pt&&Pt.isValid&&Pt.texture&&m.init(Pt,s.renderState)}if(ct&&ct.includes("camera-access")&&v){t.state.unbindTexture(),h=n.getBinding();for(let Pt=0;Pt<nt.length;Pt++){let Nt=nt[Pt].camera;if(Nt){let Ht=p[Nt];Ht||(Ht=new br,p[Nt]=Ht);let dt=h.getCameraImage(Nt);Ht.sourceTexture=dt}}}}for(let nt=0;nt<b.length;nt++){let rt=S[nt],ct=b[nt];rt!==null&&ct!==void 0&&ct.update(rt,Z,l||o)}z&&z(q,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}let j=new Wd;j.setAnimationLoop(X),this.setAnimationLoop=function(q){z=q},this.dispose=function(){}}},G_=new fe,tf=new re;tf.set(-1,0,0,0,1,0,0,0,1);function H_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ih(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,_,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),d(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&u(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,x,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===on&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===on&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x=t.get(p),_=x.envMap,M=x.envMapRotation;_&&(m.envMap.value=_,m.envMapRotation.value.setFromMatrix4(G_.makeRotationFromEuler(M)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(tf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,x){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,e(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function W_(i,t,e,n){let s={},r={};function o(x,_){let M=_.program;n.uniformBlockBinding(x,M,s[x.id])}function a(x,_){let M=s[x.id];M===void 0&&(g(x),M=c(x),s[x.id]=M,x.addEventListener("dispose",m));let b=_.program;n.updateUBOMapping(x,b);let S=t.render.frame;r[x.id]!==S&&(l(x),r[x.id]=S)}function c(x){let _=i.createBuffer(),M=x.__size,b=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,M,b),i.bindBuffer(i.UNIFORM_BUFFER,null),_}function l(x){let _=s[x.id],M=x.uniforms,b=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let S=0,y=M.length;S<y;S++){let w=M[S];if(Array.isArray(w))for(let L=0,R=w.length;L<R;L++)d(w[L],S,L,b);else d(w,S,0,b)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,_,M,b){if(f(x,_,M,b)===!0){let S=x.__offset,y=x.value;if(Array.isArray(y)){let w=0;for(let L=0;L<y.length;L++){let R=y[L],A=v(R,!0);h(R,x.__data,w),w+=A.storage/Float32Array.BYTES_PER_ELEMENT}}else h(y,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,x.__data)}}function h(x,_,M){typeof x=="number"||typeof x=="boolean"?_[M]=x:x.isMatrix3?(_[M]=x.elements[0],_[M+1]=x.elements[1],_[M+2]=x.elements[2],_[M+3]=0,_[M+4]=x.elements[3],_[M+5]=x.elements[4],_[M+6]=x.elements[5],_[M+7]=0,_[M+8]=x.elements[6],_[M+9]=x.elements[7],_[M+10]=x.elements[8],_[M+11]=0):ArrayBuffer.isView(x)?_.set(x.subarray(0,_.length-M),M):x.toArray(_,M)}function f(x,_,M,b){let S=x.value,y=_+"_"+M;if(Array.isArray(S)){b[y]===void 0&&(b[y]=[]);let w=b[y],L=!1;for(let R=0;R<S.length;R++)u(S[R],w,R)===!0&&(L=!0);return L}return u(S,b,y)}function u(x,_,M){if(_[M]===void 0)return typeof x=="number"||typeof x=="boolean"?_[M]=x:ArrayBuffer.isView(x)?_[M]=x.slice():_[M]=x.clone(),!0;{let b=_[M];if(typeof x=="number"||typeof x=="boolean"){if(b!==x)return _[M]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(b.equals(x)===!1)return b.copy(x),!0}}return!1}function g(x){let _=x.uniforms,M=0,b=16;for(let y=0,w=_.length;y<w;y++){let L=Array.isArray(_[y])?_[y]:[_[y]];for(let R=0,A=L.length;R<A;R++){let E=L[R],C=Array.isArray(E.value)?E.value:[E.value],T=Array.isArray(_[y])||Array.isArray(E.value),N=M;for(let k=0,H=C.length;k<H;k++){let I=C[k],F=v(I,T),z=M%b,X=z%F.boundary,j=z+X;M+=X,j!==0&&b-j<F.storage&&(M+=b-j),k===0&&(N=M),M+=F.storage}let D=E.type==="int"?Int32Array:E.type==="uint"?Uint32Array:Float32Array;E.__data=new D((M-N)/Float32Array.BYTES_PER_ELEMENT),E.__offset=N}}let S=M%b;return S>0&&(M+=b-S),x.__size=M,x.__cache={},this}function v(x,_){let M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=16,M.storage=48):x.isMatrix4?(M.boundary=16,M.storage=64):x.isTexture?ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):ee("WebGLRenderer: Unsupported uniform value type.",x),_===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(x){let _=x.target;_.removeEventListener("dispose",m),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let x in s)i.deleteBuffer(s[x]);s={},r={}}return{bind:o,update:a,dispose:p}}var X_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Yn=null;function q_(){return Yn===null&&(Yn=new Xi(X_,16,16,Pi,Nn),Yn.name="DFG_LUT",Yn.minFilter=qe,Yn.magFilter=qe,Yn.wrapS=kn,Yn.wrapT=kn,Yn.generateMipmaps=!1,Yn.needsUpdate=!0),Yn}var Vs=class{constructor(t={}){let{canvas:e=ld(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:u=hn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let v=u,m=new Set([Ua,Na,Da]),p=new Set([hn,Dn,Bs,ns,Pa,La]),x=new Uint32Array(4),_=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},b=null,S=null,y=[],w=[],L=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,A=!1,E=null,C=null,T=null,N=null;this._outputColorSpace=mn;let D=0,k=0,H=null,I=-1,F=null,z=new we,X=new we,j=null,q=new vt(0),Z=0,nt=e.width,rt=e.height,ct=1,_t=null,Xt=null,Pt=new we(0,0,nt,rt),Nt=new we(0,0,nt,rt),Ht=!1,dt=new Ti,Mt=new sa,yt=!1,Rt=!1,It=new fe,V=new B,J=new we,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ut=!1;function At(){return H===null?ct:1}let G=n;function jt(U,$){return e.getContext(U,$)}let qt,Bt,ht,te,kt,Qt,O,P,K,xt,pt,wt,Et,lt,ut,St,W,ft,ot,Y,it,at,bt;try{let U={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Vt,!1),e.addEventListener("webglcontextrestored",ne,!1),e.addEventListener("webglcontextcreationerror",Ct,!1),G===null){let $="webgl2";if(G=jt($,U),G===null)throw jt($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}zt()}catch(U){throw e.removeEventListener("webglcontextlost",Vt,!1),e.removeEventListener("webglcontextrestored",ne,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),ie("WebGLRenderer: "+U.message),U}function zt(){qt=new ix(G),qt.init(),it=new z_(G,qt),Bt=new q1(G,qt,t,it),ht=new O_(G,qt),Bt.reversedDepthBuffer&&f&&ht.buffers.depth.setReversed(!0),C=G.createFramebuffer(),T=G.createFramebuffer(),N=G.createFramebuffer(),te=new ox(G),kt=new b_,Qt=new B_(G,qt,ht,kt,Bt,it,te),O=new nx(R),P=new cm(G),at=new W1(G,P),K=new sx(G,P,te,at),xt=new cx(G,K,P,at,te),ft=new ax(G,Bt,Qt),ut=new Y1(kt),pt=new S_(R,O,qt,Bt,at,ut),wt=new H_(R,kt),Et=new T_,lt=new P_(qt),W=new H1(R,O,ht,xt,g,c),St=new F_(R,xt,Bt),bt=new W_(G,te,Bt,ht),ot=new X1(G,qt,te),Y=new rx(G,qt,te),te.programs=pt.programs,R.capabilities=Bt,R.extensions=qt,R.properties=kt,R.renderLists=Et,R.shadowMap=St,R.state=ht,R.info=te}v!==hn&&(L=new hx(v,e.width,e.height,a,s,r));let mt=new gh(R,G);this.xr=mt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let U=qt.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){let U=qt.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return ct},this.setPixelRatio=function(U){U!==void 0&&(ct=U,this.setSize(nt,rt,!1))},this.getSize=function(U){return U.set(nt,rt)},this.setSize=function(U,$,st=!0){if(mt.isPresenting){ee("WebGLRenderer: Can't change size while VR device is presenting.");return}nt=U,rt=$,e.width=Math.floor(U*ct),e.height=Math.floor($*ct),st===!0&&(e.style.width=U+"px",e.style.height=$+"px"),L!==null&&L.setSize(e.width,e.height),this.setViewport(0,0,U,$)},this.getDrawingBufferSize=function(U){return U.set(nt*ct,rt*ct).floor()},this.setDrawingBufferSize=function(U,$,st){nt=U,rt=$,ct=st,e.width=Math.floor(U*st),e.height=Math.floor($*st),this.setViewport(0,0,U,$)},this.setEffects=function(U){if(v===hn){ie("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(U){for(let $=0;$<U.length;$++)if(U[$].isOutputPass===!0){ee("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(U||[])},this.getCurrentViewport=function(U){return U.copy(z)},this.getViewport=function(U){return U.copy(Pt)},this.setViewport=function(U,$,st,Q){U.isVector4?Pt.set(U.x,U.y,U.z,U.w):Pt.set(U,$,st,Q),ht.viewport(z.copy(Pt).multiplyScalar(At()).round())},this.getScissor=function(U){return U.copy(Nt)},this.setScissor=function(U,$,st,Q){U.isVector4?Nt.set(U.x,U.y,U.z,U.w):Nt.set(U,$,st,Q),ht.scissor(X.copy(Nt).multiplyScalar(At()).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(U){ht.setScissorTest(Ht=U)},this.setOpaqueSort=function(U){_t=U},this.setTransparentSort=function(U){Xt=U},this.getClearColor=function(U){return U.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor(...arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha(...arguments)},this.clear=function(U=!0,$=!0,st=!0){let Q=0;if(U){let tt=!1;if(H!==null){let Dt=H.texture.format;tt=m.has(Dt)}if(tt){let Dt=H.texture.type,Wt=p.has(Dt),Lt=W.getClearColor(),Ot=W.getClearAlpha(),Zt=Lt.r,oe=Lt.g,he=Lt.b;Wt?(x[0]=Zt,x[1]=oe,x[2]=he,x[3]=Ot,G.clearBufferuiv(G.COLOR,0,x)):(_[0]=Zt,_[1]=oe,_[2]=he,_[3]=Ot,G.clearBufferiv(G.COLOR,0,_))}else Q|=G.COLOR_BUFFER_BIT}$&&(Q|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),st&&(Q|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&G.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(U){U.setRenderer(this),E=U},this.dispose=function(){e.removeEventListener("webglcontextlost",Vt,!1),e.removeEventListener("webglcontextrestored",ne,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),W.dispose(),Et.dispose(),lt.dispose(),Qt.dispose(),kt.dispose(),O.dispose(),xt.dispose(),K.dispose(),at.dispose(),bt.dispose(),pt.dispose(),mt.dispose(),mt.removeEventListener("sessionstart",zh),mt.removeEventListener("sessionend",kh),Fi.stop()};function Vt(U){U.preventDefault(),Ql("WebGLRenderer: Context Lost."),A=!0}function ne(){Ql("WebGLRenderer: Context Restored."),A=!1;let U=te.autoReset,$=St.enabled,st=St.autoUpdate,Q=St.needsUpdate,tt=St.type;zt(),te.autoReset=U,St.enabled=$,St.autoUpdate=st,St.needsUpdate=Q,St.type=tt}function Ct(U){ie("WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function xe(U){let $=U.target;$.removeEventListener("dispose",xe),De($)}function De(U){xi(U),kt.remove(U)}function xi(U){let $=kt.get(U).programs;$!==void 0&&($.forEach(function(st){pt.releaseProgram(st)}),U.isShaderMaterial&&pt.releaseShaderCache(U))}this.renderBufferDirect=function(U,$,st,Q,tt,Dt){$===null&&($=gt);let Wt=tt.isMesh&&tt.matrixWorld.determinantAffine()<0,Lt=Ip(U,$,st,Q,tt);ht.setMaterial(Q,Wt);let Ot=st.index,Zt=1;if(Q.wireframe===!0){if(Ot=K.getWireframeAttribute(st),Ot===void 0)return;Zt=2}let oe=st.drawRange,he=st.attributes.position,Yt=oe.start*Zt,ue=(oe.start+oe.count)*Zt;Dt!==null&&(Yt=Math.max(Yt,Dt.start*Zt),ue=Math.min(ue,(Dt.start+Dt.count)*Zt)),Ot!==null?(Yt=Math.max(Yt,0),ue=Math.min(ue,Ot.count)):he!=null&&(Yt=Math.max(Yt,0),ue=Math.min(ue,he.count));let Ne=ue-Yt;if(Ne<0||Ne===1/0)return;at.setup(tt,Q,Lt,st,Ot);let be,Se=ot;if(Ot!==null&&(be=P.get(Ot),Se=Y,Se.setIndex(be)),tt.isMesh)Q.wireframe===!0?(ht.setLineWidth(Q.wireframeLinewidth*At()),Se.setMode(G.LINES)):Se.setMode(G.TRIANGLES);else if(tt.isLine){let Ze=Q.linewidth;Ze===void 0&&(Ze=1),ht.setLineWidth(Ze*At()),tt.isLineSegments?Se.setMode(G.LINES):tt.isLineLoop?Se.setMode(G.LINE_LOOP):Se.setMode(G.LINE_STRIP)}else tt.isPoints?Se.setMode(G.POINTS):tt.isSprite&&Se.setMode(G.TRIANGLES);if(tt.isBatchedMesh)if(qt.get("WEBGL_multi_draw"))Se.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{let Ze=tt._multiDrawStarts,$t=tt._multiDrawCounts,nn=tt._multiDrawCount,_e=Ot?P.get(Ot).bytesPerElement:1,Oi=kt.get(Q).currentProgram.getUniforms();for(let Je=0;Je<nn;Je++)Oi.setValue(G,"_gl_DrawID",Je),Se.render(Ze[Je]/_e,$t[Je])}else if(tt.isInstancedMesh)Se.renderInstances(Yt,Ne,tt.count);else if(st.isInstancedBufferGeometry){let Ze=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,$t=Math.min(st.instanceCount,Ze);Se.renderInstances(Yt,Ne,$t)}else Se.render(Yt,Ne)};function Bh(U,$,st,Q){E!==null&&U.isNodeMaterial&&E.setObject(Q,U),yt===!0&&ut.setState(U,st,!1),U.transparent===!0&&U.side===ln&&U.forceSinglePass===!1?(U.side=on,U.needsUpdate=!0,tr(U,$,Q),U.side=Ii,U.needsUpdate=!0,tr(U,$,Q),U.side=ln):tr(U,$,Q)}this.compile=function(U,$,st=null){st===null&&(st=U),E!==null&&E.renderStart(U,$,st),S=lt.get(st),S.init($),w.push(S),st.traverseVisible(function(tt){tt.isLight&&tt.layers.test($.layers)&&(S.pushLight(tt),tt.castShadow&&S.pushShadow(tt))}),U!==st&&U.traverseVisible(function(tt){tt.isLight&&tt.layers.test($.layers)&&(S.pushLight(tt),tt.castShadow&&S.pushShadow(tt))}),S.setupLights(),E!==null&&E.updateLights(S.state.lightsArray),Rt=this.localClippingEnabled,yt=ut.init(this.clippingPlanes,Rt),yt===!0&&ut.setGlobalState(this.clippingPlanes,$),E!==null&&St.render(S.state.shadowsArray,st,$);let Q=new Set;return U.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;let Dt=tt.material;if(Dt)if(Array.isArray(Dt))for(let Wt=0;Wt<Dt.length;Wt++){let Lt=Dt[Wt];Bh(Lt,st,$,tt),Q.add(Lt)}else Bh(Dt,st,$,tt),Q.add(Dt)}),S=w.pop(),E!==null&&E.renderEnd(),Q},this.compileAsync=function(U,$,st=null){let Q=this.compile(U,$,st);return new Promise(tt=>{function Dt(){if(Q.forEach(function(Wt){let Ot=kt.get(Wt).currentProgram;(Ot===void 0||Ot.isReady())&&Q.delete(Wt)}),Q.size===0){tt(U);return}setTimeout(Dt,10)}qt.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let qc=null;function Cp(U){qc&&qc(U)}function zh(){Fi.stop()}function kh(){Fi.start()}let Fi=new Wd;Fi.setAnimationLoop(Cp),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(U){qc=U,mt.setAnimationLoop(U),U===null?Fi.stop():Fi.start()},mt.addEventListener("sessionstart",zh),mt.addEventListener("sessionend",kh),this.render=function(U,$){if($!==void 0&&$.isCamera!==!0){ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;E!==null&&E.renderStart(U,$);let st=mt.enabled===!0&&mt.isPresenting===!0,Q=L!==null&&(H===null||st)&&L.begin(R,H);if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),mt.enabled===!0&&mt.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(mt.cameraAutoUpdate===!0&&mt.updateCamera($),$=mt.getCamera()),U.isScene===!0&&U.onBeforeRender(R,U,$,H),S=lt.get(U,w.length),S.init($),S.state.textureUnits=Qt.getTextureUnits(),w.push(S),It.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),$.isArrayCamera?Mt.setFromArrayCamera($):dt.setFromProjectionMatrix(It,bn,$.reversedDepth),Rt=this.localClippingEnabled,yt=ut.init(this.clippingPlanes,Rt),b=Et.get(U,y.length),b.init(),y.push(b),this.info.render.frame++,mt.enabled===!0&&mt.isPresenting===!0){let Wt=R.xr.getDepthSensingMesh();Wt!==null&&Yc(Wt,$,-1/0,R.sortObjects)}Yc(U,$,0,R.sortObjects),b.finish(),E!==null&&E.updateLights(S.state.lightsArray),R.sortObjects===!0&&b.sort(_t,Xt),Ut=mt.enabled===!1||mt.isPresenting===!1||mt.hasDepthSensing()===!1,Ut&&W.addToRenderList(b,U),this.info.autoReset===!0&&this.info.reset(),yt===!0&&ut.beginShadows();let tt=S.state.shadowsArray;if(St.render(tt,U,$),yt===!0&&ut.endShadows(),(Q&&L.hasRenderPass())===!1){let Wt=b.opaque,Lt=b.transmissive;if(S.setupLights(),$.isArrayCamera){let Ot=$.cameras;if(Lt.length>0)for(let Zt=0,oe=Ot.length;Zt<oe;Zt++){let he=Ot[Zt];Gh(Wt,Lt,U,he)}Ut&&W.render(U);for(let Zt=0,oe=Ot.length;Zt<oe;Zt++){let he=Ot[Zt];Vh(b,U,he,he.viewport)}}else Lt.length>0&&Gh(Wt,Lt,U,$),Ut&&W.render(U),Vh(b,U,$)}H!==null&&k===0&&(Qt.updateMultisampleRenderTarget(H),Qt.updateRenderTargetMipmap(H)),Q&&L.end(R),U.isScene===!0&&U.onAfterRender(R,U,$),at.resetDefaultState(),I=-1,F=null,w.pop(),w.length>0?(S=w[w.length-1],Qt.setTextureUnits(S.state.textureUnits),yt===!0&&ut.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,y.pop(),y.length>0?b=y[y.length-1]:b=null,E!==null&&E.renderEnd()};function Yc(U,$,st,Q){if(U.visible===!1)return;if(U.layers.test($.layers)){if(U.isGroup)st=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update($);else if(U.isLight)S.pushLight(U),U.castShadow&&S.pushShadow(U);else if(U.isSprite){let Wt=$.isArrayCamera?Mt:dt;if(!U.frustumCulled||U.intersectsFrustum(Wt)){Q&&J.setFromMatrixPosition(U.matrixWorld).applyMatrix4(It);let Lt=xt.update(U),Ot=U.material;Ot.visible&&b.push(U,Lt,Ot,st,J.z,null,$)}}else if(U.isMesh||U.isLine||U.isPoints){let Wt=$.isArrayCamera?Mt:dt;if(!U.frustumCulled||U.intersectsFrustum(Wt)){let Lt=xt.update(U),Ot=U.material;if(Q&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),J.copy(U.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),J.copy(Lt.boundingSphere.center)),J.applyMatrix4(U.matrixWorld).applyMatrix4(It)),Array.isArray(Ot)){let Zt=Lt.groups;for(let oe=0,he=Zt.length;oe<he;oe++){let Yt=Zt[oe],ue=Ot[Yt.materialIndex];ue&&ue.visible&&b.push(U,Lt,ue,st,J.z,Yt,$)}}else Ot.visible&&b.push(U,Lt,Ot,st,J.z,null,$)}}}let Dt=U.children;for(let Wt=0,Lt=Dt.length;Wt<Lt;Wt++)Yc(Dt[Wt],$,st,Q)}function Vh(U,$,st,Q){let{opaque:tt,transmissive:Dt,transparent:Wt}=U;S.setupLightsView(st),yt===!0&&ut.setGlobalState(R.clippingPlanes,st),Q&&ht.viewport(z.copy(Q)),tt.length>0&&_o(tt,$,st),Dt.length>0&&_o(Dt,$,st),Wt.length>0&&_o(Wt,$,st),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function Gh(U,$,st,Q){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[Q.id]===void 0){let Yt=qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[Q.id]=new _n(1,1,{generateMipmaps:!0,type:Yt?Nn:hn,minFilter:pi,samples:Math.max(4,Bt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:de.workingColorSpace})}let Dt=S.state.transmissionRenderTarget[Q.id],Wt=Q.viewport||z;Dt.setSize(Wt.z*R.transmissionResolutionScale,Wt.w*R.transmissionResolutionScale);let Lt=R.getRenderTarget(),Ot=R.getActiveCubeFace(),Zt=R.getActiveMipmapLevel();R.setRenderTarget(Dt),R.getClearColor(q),Z=R.getClearAlpha(),Z<1&&R.setClearColor(16777215,.5),R.clear(),Ut&&W.render(st);let oe=R.toneMapping;R.toneMapping=qn;let he=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),S.setupLightsView(Q),yt===!0&&ut.setGlobalState(R.clippingPlanes,Q),_o(U,st,Q),Qt.updateMultisampleRenderTarget(Dt),Qt.updateRenderTargetMipmap(Dt),qt.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let ue=0,Ne=$.length;ue<Ne;ue++){let be=$[ue],{object:Se,geometry:Ze,material:$t,group:nn}=be;if($t.side===ln&&Se.layers.test(Q.layers)){let _e=$t.side;$t.side=on,$t.needsUpdate=!0,Hh(Se,st,Q,Ze,$t,nn),$t.side=_e,$t.needsUpdate=!0,Yt=!0}}Yt===!0&&(Qt.updateMultisampleRenderTarget(Dt),Qt.updateRenderTargetMipmap(Dt))}R.setRenderTarget(Lt,Ot,Zt),R.setClearColor(q,Z),he!==void 0&&(Q.viewport=he),R.toneMapping=oe}function _o(U,$,st){let Q=$.isScene===!0?$.overrideMaterial:null;for(let tt=0,Dt=U.length;tt<Dt;tt++){let Wt=U[tt],{object:Lt,geometry:Ot,group:Zt}=Wt,oe=Wt.material;oe.allowOverride===!0&&Q!==null&&(oe=Q),Lt.layers.test(st.layers)&&Hh(Lt,$,st,Ot,oe,Zt)}}function Hh(U,$,st,Q,tt,Dt){E!==null&&tt.isNodeMaterial&&E.setObject(U,tt),U.onBeforeRender(R,$,st,Q,tt,Dt),U.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),tt.onBeforeRender(R,$,st,Q,U,Dt),tt.transparent===!0&&tt.side===ln&&tt.forceSinglePass===!1?(tt.side=on,tt.needsUpdate=!0,R.renderBufferDirect(st,$,Q,tt,U,Dt),tt.side=Ii,tt.needsUpdate=!0,R.renderBufferDirect(st,$,Q,tt,U,Dt),tt.side=ln):R.renderBufferDirect(st,$,Q,tt,U,Dt),U.onAfterRender(R,$,st,Q,tt,Dt)}function Wh(U){let $=0;for(let st of U)st.texture!==null&&$++;return $}function tr(U,$,st){$.isScene!==!0&&($=gt);let Q=kt.get(U),tt=S.state.lights,Dt=S.state.shadowsArray,Wt=tt.state.version,Lt=pt.getParameters(U,tt.state,Dt,$,st,S.state.lightProbeGridArray),Ot=pt.getProgramCacheKey(Lt),Zt=Q.programs;Q.environment=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?$.environment:null,Q.fog=$.fog;let oe=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap;Q.envMap=O.get(U.envMap||Q.environment,oe),Q.envMapRotation=Q.environment!==null&&U.envMap===null?$.environmentRotation:U.envMapRotation,Zt===void 0&&(U.addEventListener("dispose",xe),Zt=new Map,Q.programs=Zt,Q.programVariants=new Map);let he=Zt.get(Ot);if(he!==void 0){if(Q.currentProgram===he&&Q.lightsStateVersion===Wt)return qh(U,Lt),he}else Lt.uniforms=pt.getUniforms(U),E!==null&&U.isNodeMaterial&&E.build(U,st,Lt),U.onBeforeCompile(Lt,R),he=pt.acquireProgram(Lt,Ot),Zt.set(Ot,he),Q.uniforms=Lt.uniforms;let Yt=Q.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Yt.clippingPlanes=ut.uniform),qh(U,Lt),Q.needsLights=Lp(U),Q.lightsStateVersion=Wt,Q.needsLights&&(Yt.ambientLightColor.value=tt.state.ambient,Yt.lightProbe.value=tt.state.probe,Yt.sunLights.value=tt.state.sun,Yt.sunLightShadows.value=tt.state.sunShadow,Yt.directionalLights.value=tt.state.directional,Yt.directionalLightShadows.value=tt.state.directionalShadow,Yt.spotLights.value=tt.state.spot,Yt.spotLightShadows.value=tt.state.spotShadow,Yt.rectAreaLights.value=tt.state.rectArea,Yt.ltc_1.value=tt.state.rectAreaLTC1,Yt.ltc_2.value=tt.state.rectAreaLTC2,Yt.pointLights.value=tt.state.point,Yt.pointLightShadows.value=tt.state.pointShadow,Yt.hemisphereLights.value=tt.state.hemi,Yt.sunShadowMatrix.value=tt.state.sunShadowMatrix,Yt.sunShadowCascade.value=tt.state.sunShadowCascade,Yt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Yt.spotLightMatrix.value=tt.state.spotLightMatrix,Yt.spotLightMap.value=tt.state.spotLightMap,Yt.pointShadowMatrix.value=tt.state.pointShadowMatrix),Q.numLightProbeGrids=Wh(S.state.lightProbeGridArray),Q.currentProgram=he,Q.uniformsList=null,he}function Rp(U,$,st,Q,tt){let Dt=kt.get(U),Wt=Dt.currentProgram.id+","+Q+","+tt,Lt=Dt.programVariants.get(Wt);return Lt===void 0?(Lt=tr(U,$,st),Dt.programVariants.set(Wt,Lt)):(Dt.currentProgram=Lt,Dt.uniformsList=null,Dt.outputColorSpace=Q,Dt.toneMapping=tt),Lt}function Xh(U){if(U.uniformsList===null){let $=U.currentProgram.getUniforms();U.uniformsList=ks.seqWithValue($.seq,U.uniforms)}return U.uniformsList}function qh(U,$){let st=kt.get(U);st.outputColorSpace=$.outputColorSpace,st.batching=$.batching,st.batchingColor=$.batchingColor,st.instancing=$.instancing,st.instancingColor=$.instancingColor,st.instancingMorph=$.instancingMorph,st.skinning=$.skinning,st.morphTargets=$.morphTargets,st.morphNormals=$.morphNormals,st.morphColors=$.morphColors,st.morphTargetsCount=$.morphTargetsCount,st.numClippingPlanes=$.numClippingPlanes,st.numIntersection=$.numClipIntersection,st.vertexAlphas=$.vertexAlphas,st.vertexTangents=$.vertexTangents,st.toneMapping=$.toneMapping}function Ip(U,$,st,Q,tt){$.isScene!==!0&&($=gt),Qt.resetTextureUnits();let Dt=$.fog,Wt=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?$.environment:null,Lt=H===null?R.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:de.workingColorSpace,Ot=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,Zt=O.get(Q.envMap||Wt,Ot),oe=Q.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,he=!!st.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Yt=!!st.morphAttributes.position,ue=!!st.morphAttributes.normal,Ne=!!st.morphAttributes.color,be=qn;Q.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(be=R.toneMapping);let Se=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Ze=Se!==void 0?Se.length:0,$t=kt.get(Q),nn=S.state.lights;if(yt===!0&&(Rt===!0||U!==F)){let Re=U===F&&Q.id===I;ut.setState(Q,U,Re)}let _e=!1,Oi=!1;Q.version===$t.__version?$t.needsLights&&$t.lightsStateVersion!==nn.state.version||tt.isBatchedMesh&&$t.batching===!1||!tt.isBatchedMesh&&$t.batching===!0||tt.isBatchedMesh&&$t.batchingColor===!0&&tt._colorsTexture===null||tt.isBatchedMesh&&$t.batchingColor===!1&&tt._colorsTexture!==null||tt.isInstancedMesh&&$t.instancing===!1||!tt.isInstancedMesh&&$t.instancing===!0||tt.isSkinnedMesh&&$t.skinning===!1||!tt.isSkinnedMesh&&$t.skinning===!0||tt.isInstancedMesh&&$t.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&$t.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&$t.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&$t.instancingMorph===!1&&tt.morphTexture!==null||$t.envMap!==Zt||Q.fog===!0&&$t.fog!==Dt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==ut.numPlanes||$t.numIntersection!==ut.numIntersection)||$t.vertexAlphas!==oe||$t.vertexTangents!==he||$t.morphTargets!==Yt||$t.morphNormals!==ue||$t.morphColors!==Ne||$t.morphTargetsCount!==Ze||$t.numLightProbeGrids!==Wh(S.state.lightProbeGridArray)?_e=!0:($t.outputColorSpace!==Lt||$t.toneMapping!==be)&&(Oi=!0):(_e=!0,$t.__version=Q.version);let Je=$t.currentProgram;(_e===!0||Oi===!0)&&(Je=Oi===!0?Rp(Q,$,tt,Lt,be):tr(Q,$,tt),E&&Q.isNodeMaterial&&E.onUpdateProgram(Q,Je,$t));let yo=!1,_i=!1,Bi=!1,me=Je.getUniforms(),Xe=$t.uniforms;if(ht.useProgram(Je.program)&&(yo=!0,_i=!0,Bi=!0),Q.id!==I&&(I=Q.id,_i=!0),yo||F!==U){ht.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),me.setValue(G,"projectionMatrix",U.projectionMatrix),me.setValue(G,"viewMatrix",U.matrixWorldInverse);let Ge=me.map.cameraPosition;Ge!==void 0&&Ge.setValue(G,V.setFromMatrixPosition(U.matrixWorld)),Bt.logarithmicDepthBuffer&&me.setValue(G,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&me.setValue(G,"isOrthographic",U.isOrthographicCamera===!0),F!==U&&(F=U,_i=!0,Bi=!0)}if($t.needsLights&&(nn.state.sunShadowMap.length>0&&me.setValue(G,"sunShadowMap",nn.state.sunShadowMap,Qt),nn.state.directionalShadowMap.length>0&&me.setValue(G,"directionalShadowMap",nn.state.directionalShadowMap,Qt),nn.state.spotShadowMap.length>0&&me.setValue(G,"spotShadowMap",nn.state.spotShadowMap,Qt),nn.state.pointShadowMap.length>0&&me.setValue(G,"pointShadowMap",nn.state.pointShadowMap,Qt)),tt.isSkinnedMesh){me.setOptional(G,tt,"bindMatrix"),me.setOptional(G,tt,"bindMatrixInverse");let Re=tt.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),me.setValue(G,"boneTexture",Re.boneTexture,Qt))}tt.isBatchedMesh&&(me.setOptional(G,tt,"batchingTexture"),me.setValue(G,"batchingTexture",tt._matricesTexture,Qt),me.setOptional(G,tt,"batchingIdTexture"),me.setValue(G,"batchingIdTexture",tt._indirectTexture,Qt),me.setOptional(G,tt,"batchingColorTexture"),tt._colorsTexture!==null&&me.setValue(G,"batchingColorTexture",tt._colorsTexture,Qt));let Rn=st.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&ft.update(tt,st,Je),(_i||$t.receiveShadow!==tt.receiveShadow)&&($t.receiveShadow=tt.receiveShadow,me.setValue(G,"receiveShadow",tt.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&$.environment!==null&&(Xe.envMapIntensity.value=$.environmentIntensity),Xe.dfgLUT!==void 0&&(Xe.dfgLUT.value=q_()),_i){if(me.setValue(G,"toneMappingExposure",R.toneMappingExposure),$t.needsLights&&Pp(Xe,Bi),Dt&&Q.fog===!0&&wt.refreshFogUniforms(Xe,Dt),wt.refreshMaterialUniforms(Xe,Q,ct,rt,S.state.transmissionRenderTarget[U.id]),$t.needsLights&&$t.numLightProbeGrids>0){let Re=M,Ge=0;for(let ni of S.state.lightProbeGridArray)ni.texture!==null&&(Re.textures[Ge]=ni.texture,Re.min[Ge]=ni.boundingBox.min,Re.max[Ge]=ni.boundingBox.max,Re.resolution[Ge]=ni.resolution,Ge++);for(let ni in Re)Re[ni].length=Ge;Xe.probesSH.value=Re.textures,Xe.probesMin.value=Re.min,Xe.probesMax.value=Re.max,Xe.probesResolution.value=Re.resolution}ks.upload(G,Xh($t),Xe,Qt)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(ks.upload(G,Xh($t),Xe,Qt),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&me.setValue(G,"center",tt.center),me.setValue(G,"modelViewMatrix",tt.modelViewMatrix),me.setValue(G,"normalMatrix",tt.normalMatrix),me.setValue(G,"modelMatrix",tt.matrixWorld),Q.uniformsGroups!==void 0){let Re=Q.uniformsGroups;for(let Ge=0,ni=Re.length;Ge<ni;Ge++){let $h=Re[Ge];bt.update($h,Je),bt.bind($h,Je)}}return Je}function Pp(U,$){U.ambientLightColor.needsUpdate=$,U.lightProbe.needsUpdate=$,U.sunLights.needsUpdate=$,U.sunLightShadows.needsUpdate=$,U.directionalLights.needsUpdate=$,U.directionalLightShadows.needsUpdate=$,U.pointLights.needsUpdate=$,U.pointLightShadows.needsUpdate=$,U.spotLights.needsUpdate=$,U.spotLightShadows.needsUpdate=$,U.rectAreaLights.needsUpdate=$,U.hemisphereLights.needsUpdate=$}function Lp(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(U,$,st){let Q=kt.get(U);Q.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),kt.get(U.texture).__webglTexture=$,kt.get(U.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:st,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,$){let st=kt.get(U);st.__webglFramebuffer=$,st.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(U,$=0,st=0){H=U,D=$,k=st;let Q=null,tt=!1,Dt=!1;if(U){let Lt=kt.get(U);if(Lt.__useDefaultFramebuffer!==void 0){ht.bindFramebuffer(G.FRAMEBUFFER,Lt.__webglFramebuffer),z.copy(U.viewport),X.copy(U.scissor),j=U.scissorTest,ht.viewport(z),ht.scissor(X),ht.setScissorTest(j),I=-1;return}else if(Lt.__webglFramebuffer===void 0)Qt.setupRenderTarget(U);else if(Lt.__hasExternalTextures)Qt.rebindTextures(U,kt.get(U.texture).__webglTexture,kt.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){let oe=U.depthTexture;if(Lt.__boundDepthTexture!==oe){if(oe!==null&&kt.has(oe)&&(U.width!==oe.image.width||U.height!==oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Qt.setupDepthRenderbuffer(U)}}let Ot=U.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(Dt=!0);let Zt=kt.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(Zt[$])?Q=Zt[$][st]:Q=Zt[$],tt=!0):U.samples>0&&Qt.useMultisampledRTT(U)===!1?Q=kt.get(U).__webglMultisampledFramebuffer:Array.isArray(Zt)?Q=Zt[st]:Q=Zt,z.copy(U.viewport),X.copy(U.scissor),j=U.scissorTest}else z.copy(Pt).multiplyScalar(ct).floor(),X.copy(Nt).multiplyScalar(ct).floor(),j=Ht;if(st!==0&&(Q=C),ht.bindFramebuffer(G.FRAMEBUFFER,Q)&&ht.drawBuffers(U,Q),ht.viewport(z),ht.scissor(X),ht.setScissorTest(j),tt){let Lt=kt.get(U.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+$,Lt.__webglTexture,st)}else if(Dt){let Lt=$;for(let Ot=0;Ot<U.textures.length;Ot++){let Zt=kt.get(U.textures[Ot]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Ot,Zt.__webglTexture,st,Lt)}}else if(U!==null&&st!==0){let Lt=kt.get(U.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Lt.__webglTexture,st)}I=-1};function Yh(U){let $=kt.get(U);return($.__readFormat!==U.format||$.__readType!==U.type)&&($.__readFormat=U.format,$.__readType=U.type,$.__formatReadable=Bt.textureFormatReadable(U.format),$.__typeReadable=Bt.textureTypeReadable(U.type)),$}this.readRenderTargetPixels=function(U,$,st,Q,tt,Dt,Wt,Lt=0){if(!(U&&U.isWebGLRenderTarget)){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=kt.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Wt!==void 0&&(Ot=Ot[Wt],Array.isArray(Ot)&&(Ot=Ot[0])),Ot){ht.bindFramebuffer(G.FRAMEBUFFER,Ot);try{let Zt=U.textures[Lt],oe=Zt.format,he=Zt.type;U.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Lt);let Yt=Yh(Zt);if(Yt.__formatReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Yt.__typeReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=U.width-Q&&st>=0&&st<=U.height-tt&&G.readPixels($,st,Q,tt,it.convert(oe),it.convert(he),Dt)}finally{let Zt=H!==null?kt.get(H).__webglFramebuffer:null;ht.bindFramebuffer(G.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(U,$,st,Q,tt,Dt,Wt,Lt=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=kt.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Wt!==void 0&&(Ot=Ot[Wt],Array.isArray(Ot)&&(Ot=Ot[0])),Ot)if($>=0&&$<=U.width-Q&&st>=0&&st<=U.height-tt){ht.bindFramebuffer(G.FRAMEBUFFER,Ot);let Zt=U.textures[Lt],oe=Zt.format,he=Zt.type;U.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Lt);let Yt=Yh(Zt);if(Yt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Yt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ue=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,ue),G.bufferData(G.PIXEL_PACK_BUFFER,Dt.byteLength,G.STREAM_READ),G.readPixels($,st,Q,tt,it.convert(oe),it.convert(he),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let Ne=H!==null?kt.get(H).__webglFramebuffer:null;ht.bindFramebuffer(G.FRAMEBUFFER,Ne);let be=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await ud(G,be,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,ue),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Dt),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(ue),G.deleteSync(be),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,$=null,st=0){let Q=Math.pow(2,-st),tt=Math.floor(U.image.width*Q),Dt=Math.floor(U.image.height*Q),Wt=$!==null?$.x:0,Lt=$!==null?$.y:0;Qt.setTexture2D(U,0),G.copyTexSubImage2D(G.TEXTURE_2D,st,0,0,Wt,Lt,tt,Dt),ht.unbindTexture()},this.copyTextureToTexture=function(U,$,st=null,Q=null,tt=0,Dt=0){let Wt,Lt,Ot,Zt,oe,he,Yt,ue,Ne,be=U.isCompressedTexture?U.mipmaps[Dt]:U.image;if(st!==null)Wt=st.max.x-st.min.x,Lt=st.max.y-st.min.y,Ot=st.isBox3?st.max.z-st.min.z:1,Zt=st.min.x,oe=st.min.y,he=st.isBox3?st.min.z:0;else{let me=Math.pow(2,-tt);Wt=Math.floor(be.width*me),Lt=Math.floor(be.height*me),U.isDataArrayTexture?Ot=be.depth:U.isData3DTexture?Ot=Math.floor(be.depth*me):Ot=1,Zt=0,oe=0,he=0}Q!==null?(Yt=Q.x,ue=Q.y,Ne=Q.z):(Yt=0,ue=0,Ne=0);let Se=it.convert($.format),Ze=it.convert($.type),$t;$.isData3DTexture?(Qt.setTexture3D($,0),$t=G.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(Qt.setTexture2DArray($,0),$t=G.TEXTURE_2D_ARRAY):(Qt.setTexture2D($,0),$t=G.TEXTURE_2D),ht.activeTexture(G.TEXTURE0),ht.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,$.flipY),ht.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),ht.pixelStorei(G.UNPACK_ALIGNMENT,$.unpackAlignment);let nn=ht.getParameter(G.UNPACK_ROW_LENGTH),_e=ht.getParameter(G.UNPACK_IMAGE_HEIGHT),Oi=ht.getParameter(G.UNPACK_SKIP_PIXELS),Je=ht.getParameter(G.UNPACK_SKIP_ROWS),yo=ht.getParameter(G.UNPACK_SKIP_IMAGES);ht.pixelStorei(G.UNPACK_ROW_LENGTH,be.width),ht.pixelStorei(G.UNPACK_IMAGE_HEIGHT,be.height),ht.pixelStorei(G.UNPACK_SKIP_PIXELS,Zt),ht.pixelStorei(G.UNPACK_SKIP_ROWS,oe),ht.pixelStorei(G.UNPACK_SKIP_IMAGES,he);let _i=U.isDataArrayTexture||U.isData3DTexture,Bi=$.isDataArrayTexture||$.isData3DTexture;if(U.isDepthTexture){let me=kt.get(U),Xe=kt.get($),Rn=kt.get(me.__renderTarget),Re=kt.get(Xe.__renderTarget);ht.bindFramebuffer(G.READ_FRAMEBUFFER,Rn.__webglFramebuffer),ht.bindFramebuffer(G.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ge=0;Ge<Ot;Ge++)_i&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,kt.get(U).__webglTexture,tt,he+Ge),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,kt.get($).__webglTexture,Dt,Ne+Ge)),G.blitFramebuffer(Zt,oe,Zt+Wt,oe+Lt,Yt,ue,Yt+Wt,ue+Lt,G.DEPTH_BUFFER_BIT,G.NEAREST);ht.bindFramebuffer(G.READ_FRAMEBUFFER,null),ht.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(tt!==0||U.isRenderTargetTexture||kt.has(U)){let me=kt.get(U),Xe=kt.get($);ht.bindFramebuffer(G.READ_FRAMEBUFFER,T),ht.bindFramebuffer(G.DRAW_FRAMEBUFFER,N);for(let Rn=0;Rn<Ot;Rn++)_i?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,me.__webglTexture,tt,he+Rn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,me.__webglTexture,tt),Bi?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Xe.__webglTexture,Dt,Ne+Rn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Xe.__webglTexture,Dt),tt!==0?G.blitFramebuffer(Zt,oe,Zt+Wt,oe+Lt,Yt,ue,Yt+Wt,ue+Lt,G.COLOR_BUFFER_BIT,G.NEAREST):Bi?G.copyTexSubImage3D($t,Dt,Yt,ue,Ne+Rn,Zt,oe,Wt,Lt):G.copyTexSubImage2D($t,Dt,Yt,ue,Zt,oe,Wt,Lt);ht.bindFramebuffer(G.READ_FRAMEBUFFER,null),ht.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Bi?U.isDataTexture||U.isData3DTexture?G.texSubImage3D($t,Dt,Yt,ue,Ne,Wt,Lt,Ot,Se,Ze,be.data):$.isCompressedArrayTexture?G.compressedTexSubImage3D($t,Dt,Yt,ue,Ne,Wt,Lt,Ot,Se,be.data):G.texSubImage3D($t,Dt,Yt,ue,Ne,Wt,Lt,Ot,Se,Ze,be):U.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Dt,Yt,ue,Wt,Lt,Se,Ze,be.data):U.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Dt,Yt,ue,be.width,be.height,Se,be.data):G.texSubImage2D(G.TEXTURE_2D,Dt,Yt,ue,Wt,Lt,Se,Ze,be);ht.pixelStorei(G.UNPACK_ROW_LENGTH,nn),ht.pixelStorei(G.UNPACK_IMAGE_HEIGHT,_e),ht.pixelStorei(G.UNPACK_SKIP_PIXELS,Oi),ht.pixelStorei(G.UNPACK_SKIP_ROWS,Je),ht.pixelStorei(G.UNPACK_SKIP_IMAGES,yo),Dt===0&&$.generateMipmaps===!0&&$.mipmapsAutoUpdate===!0&&G.generateMipmap($t),ht.unbindTexture()},this.initRenderTarget=function(U){kt.get(U).__webglFramebuffer===void 0&&Qt.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?Qt.setTextureCube(U,0):U.isData3DTexture?Qt.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?Qt.setTexture2DArray(U,0):Qt.setTexture2D(U,0),ht.unbindTexture()},this.resetState=function(){D=0,k=0,H=null,ht.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=de._getDrawingBufferColorSpace(t),e.unpackColorSpace=de._getUnpackColorSpace()}};function xc(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new ae;c.morphTargetsRelative=a;let l=0;for(let d=0;d<i.length;++d){let h=i[d],f=0,u=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in h.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(h.attributes[g]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in h.morphAttributes){if(!s.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;if(h.morphAttributes[g].length!==i[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;o[g]===void 0&&(o[g]=[]),o[g].push(h.morphAttributes[g]),u++}if(u!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of morph attributes."),null;if(t){let g;if(e)g=h.index.count;else if(h.attributes.position!==void 0)g=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,g,d),l+=g}}if(e){let d=0,h=[];for(let f=0;f<i.length;++f){let u=i[f].index;for(let g=0;g<u.count;++g)h.push(u.getX(g)+d);d+=i[f].attributes.position.count}c.setIndex(h)}for(let d in r){let h=ef(r[d]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;c.setAttribute(d,h)}for(let d in o){let h=o[d][0].length;if(h!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[d]=[];for(let f=0;f<h;++f){let u=[];for(let v=0;v<o[d].length;++v)u.push(o[d][v][f]);let g=ef(u);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;c.morphAttributes[d].push(g)}}}return c}function ef(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let d=i[l];if(t===void 0&&(t=d.array.constructor),t!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=d.itemSize),e!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=d.normalized),n!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=d.gpuType),s!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=d.count*e}let o=new t(r),a=new Me(o,e,n),c=0;for(let l=0;l<i.length;++l){let d=i[l];if(d.isInterleavedBufferAttribute){let h=c/e;for(let f=0,u=d.count;f<u;f++)for(let g=0;g<e;g++){let v=d.getComponent(f,g);a.setComponent(f+h,g,v)}}else o.set(d.array,c);c+=d.count*e}return s!==void 0&&(a.gpuType=s),a}var no=new B;function En(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;no.copy(t),no[n]=0,no.normalize();let l=.5*o/(o+a),d=1-no.angleTo(i)/c;return Math.sign(no[e])===1?d*l:a/(o+a)+l+l*(1-d)}var _c=class i extends wn{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new B,l=new B,d=new B(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,f=this.attributes.normal.array,u=this.attributes.uv.array,g=h.length/6,v=new B,m=.5/o;for(let p=0,x=0;p<h.length;p+=3,x+=2)switch(c.fromArray(h,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),h[p+0]=d.x*Math.sign(c.x)+l.x*r,h[p+1]=d.y*Math.sign(c.y)+l.y*r,h[p+2]=d.z*Math.sign(c.z)+l.z*r,f[p+0]=l.x,f[p+1]=l.y,f[p+2]=l.z,Math.floor(p/g)){case 0:v.set(1,0,0),u[x+0]=En(v,l,"z","y",r,n),u[x+1]=1-En(v,l,"y","z",r,e);break;case 1:v.set(-1,0,0),u[x+0]=1-En(v,l,"z","y",r,n),u[x+1]=1-En(v,l,"y","z",r,e);break;case 2:v.set(0,1,0),u[x+0]=1-En(v,l,"x","z",r,t),u[x+1]=En(v,l,"z","x",r,n);break;case 3:v.set(0,-1,0),u[x+0]=1-En(v,l,"x","z",r,t),u[x+1]=1-En(v,l,"z","x",r,n);break;case 4:v.set(0,0,1),u[x+0]=1-En(v,l,"x","y",r,t),u[x+1]=1-En(v,l,"y","x",r,e);break;case 5:v.set(0,0,-1),u[x+0]=En(v,l,"x","y",r,t),u[x+1]=1-En(v,l,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var{clamp:Y_,smoothstep:xh}=Tt,$_=[[1,-.21],[.71,.61],[.18,.88],[-.62,.7],[-.99,.16],[-.72,-.64],[-.17,-.86],[.62,-.69]],Z_=[[1,-.36],[.78,.53],[.16,.82],[-.61,.67],[-1,.19],[-.78,-.66],[.12,-.83]],nf=[[.91,-.3],[.78,.55],[.15,.88],[-.59,.72],[-.93,.14],[-.69,-.63],[.09,-.88]],J_=[[.93,-.14],[.61,.66],[-.1,.83],[-.75,.47],[-.83,-.29],[-.31,-.78],[.46,-.73]];function io(i,t,e,n,s=3){let r=[],o=(g,v,m)=>g.map((p,x)=>Tt.lerp(p,v[x],m));for(let g=0;g<i.length;g++){let v=i[g],m=o(v,i[(g+i.length-1)%i.length],e),p=o(v,i[(g+1)%i.length],e);for(let x=0;x<=s;x++){let _=x/s;r.push(o(o(m,v,_),o(v,p,_),_))}}let a=[],c=[],l=r.length;for(let[g,v,m]of t)for(let[p,x]of r)a.push(p*v+m,g+(p*.74-x*.38)*n,x*v);for(let g=0;g<t.length-1;g++)for(let v=0;v<l;v++){let m=g*l+v,p=g*l+(v+1)%l;c.push(m,m+l,p,p,m+l,p+l)}let d=(t.length-1)*l,h=a.length/3,f=t.at(-1);a.push(t[0][2],t[0][0],0,f[2],f[0]+.018,0);for(let g=0;g<l;g++){let v=(g+1)%l;c.push(h,g,v,h+1,d+v,d+g)}let u=new ae;return u.setAttribute("position",new Gt(a,3)),u.setIndex(c),u.computeVertexNormals(),u}function so(i,t){let e=i.toNonIndexed(),{position:n,normal:s}=e.attributes,r=new B,o=new B,a=new B,c=new B,l=new B;for(let d=0;d<n.count;d+=3){r.fromBufferAttribute(n,d),o.fromBufferAttribute(n,d+1).sub(r),a.fromBufferAttribute(n,d+2).sub(r),c.crossVectors(o,a).normalize();for(let h=d;h<d+3;h++)l.fromBufferAttribute(s,h).lerp(c,t).normalize(),s.setXYZ(h,l.x,l.y,l.z)}return i.dispose(),e}var sf=so(io($_,[[-.93,.63,.04],[-.49,.98,0],[.05,1,-.015],[.47,.79,-.12],[.66,.55,-.23]],.09,.24,2),.72),rf=so(io(Z_,[[-1.7,.81,.07],[-.71,1,.03],[.3,.99,-.02],[.37,.98,-.035],[.58,.78,-.14],[.66,.64,-.16]],.08,.19,2),.66),of=so(io(nf,[[-.49,.66,.02],[-.35,.98,0],[-.08,1.02,.04],[.29,.82,-.02],[.48,.42,-.11]],.14,.11,2),.63),af=so(io(J_,[[-.72,.48,0],[-.41,.92,0],[.05,1,.05],[.5,.76,.01],[.74,.36,-.13]],.13,.13,2),.59),cf=so(io(nf,[[-.56,.62,0],[-.28,.97,0],[.16,1,.04],[.52,.56,-.09]],.13,.11,1),.56),K_=new Ae({vertexColors:!0}),lf=new Ae({vertexColors:!0}),hf={value:0};lf.onBeforeCompile=i=>{i.uniforms.canopyTime=hf,i.vertexShader=`uniform float canopyTime;
 attribute vec3 leafSway;
`+i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      float breezePhase = canopyTime * 1.02 - dot(leafSway.xy, vec2(.63, .44));
      float lean = .029 * sin(breezePhase) + .008 * sin(breezePhase * 1.84 + leafSway.x * .12);
      transformed.xz += leafSway.z * vec2(lean, lean * .48 + .009 * cos(breezePhase * .86));
    `),i.fragmentShader=i.fragmentShader.replace("#include <opaque_fragment>",`outgoingLight = mix(outgoingLight, diffuseColor.rgb, .32);
#include <opaque_fragment>`)};function uf(i){hf.value=i}function df(i,[t,e,n,s]){let r=[],o=i.attributes.position;for(let a=0;a<o.count;a++){let c=(o.getY(a)-e)/s;r.push(t,n,s*xh(c,.6,1.69))}i.setAttribute("leafSway",new Gt(r,3))}function Li(i,t,e,n=!1){return{colors:[new vt(i),new vt(t),new vt(e)],material:n?lf:K_}}function ro(i,t,e,n,s,r,o,a,c){let l=new se(t,e.material);return l.position.set(n,s,r),l.scale.set(o,a,c),l.castShadow=!0,l.userData.tint=e.colors,i.add(l),l}function ff(i,t){if(!t)return;let e=i.attributes.position,[n,s,r]=t,o=[],a=new vt;for(let c=0;c<e.count;c++){let l=Y_((e.getY(c)+.76)/1.52,0,1),d=xh(l,.49,.97);a.copy(n).lerp(s,xh(l,.06,.51)).lerp(r,d),o.push(a.r,a.g,a.b)}i.setAttribute("color",new Gt(o,3))}function pf(i,t,e){let n=document.createElement("canvas");n.width=n.height=64;let s=n.getContext("2d"),r=s.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,"#fff"),r.addColorStop(.33,"#c4c4c4"),r.addColorStop(.71,"#494949"),r.addColorStop(1,"#000"),s.fillStyle=r,s.fillRect(0,0,64,64);let o=[],a=[],c=[],l=8;for(let[f,u,g,v]of t){let m=o.length/3;for(let p=0;p<=l;p++)for(let x=0;x<=l;x++){let _=x/l,M=p/l,b=f+(2*_-1)*g,S=u+(2*M-1)*v;if(o.push(b,e(b,S)+.019,S),a.push(_,M),p===l||x===l)continue;let y=m+p*(l+1)+x,w=y+1,L=y+l+1,R=L+1;c.push(y,L,w,w,L,R)}}let d=new ae;d.setAttribute("position",new Gt(o,3)),d.setAttribute("uv",new Gt(a,2)),d.setIndex(c);let h=new $e({color:"#556b44",alphaMap:new qi(n),transparent:!0,opacity:.35,depthWrite:!1});i.add(new se(d,h))}var _h=[new Ae({color:"#806548"}),new Ae({color:"#8a6e4e"}),new Ae({color:"#795d42"})],mf=[Li("#546f3e","#819d50","#b0c576",!0),Li("#50704a","#789650","#a5be73",!0),Li("#647a42","#8da753","#bac877",!0)],Q_=Li("#8a7837","#c1a54f","#e6ce78",!0),j_=[of,af],gf=[{trunk:[[0,-.075,0,.106],[-.09,.26,.01,.083],[-.16,.51,0,.061],[-.3,.81,-.07,.047],[-.43,1.09,-.1,.027],[-.44,1.34,-.09,.013]],limbs:[[[-.18,.54,-.02,.057],[.08,.69,.025,.039],[.42,.73,.09,.023],[.65,.91,.16,.012]],[[-.31,.82,-.06,.042],[-.07,.96,-.19,.027],[.24,1.15,-.25,.012]],[[-.41,1.02,-.09,.028],[-.58,1.1,.1,.012]]],crowns:[[-.45,1.39,-.13,.4,.44,.38,1],[.65,1.03,.16,.38,.4,.34,1],[.22,1.25,-.25,.38,.37,.37,0],[-.62,1.19,.12,.25,.29,.23,1],[.47,1.21,.1,.23,.26,.25,1]]},{trunk:[[0,-.075,0,.089],[-.04,.32,.01,.068],[-.095,.59,-.03,.049],[-.055,.89,-.05,.036],[-.06,1.2,-.045,.021],[-.1,1.49,-.055,.012]],limbs:[[[-.07,.49,-.02,.048],[.13,.73,.028,.03],[.38,.94,.09,.014]],[[-.09,.7,-.03,.036],[-.3,.85,.08,.023],[-.52,.96,.16,.011]],[[-.06,1.06,-.043,.022],[-.32,1.13,-.21,.011]]],crowns:[[-.1,1.54,-.055,.67,.55,.49,0],[.38,1.1,.09,.43,.43,.37,0],[-.51,1.05,.16,.21,.23,.2,0],[-.32,1.24,-.21,.27,.28,.23,1]]},{trunk:[[0,-.095,0,.159],[.018,.18,-.01,.122],[-.022,.44,0,.098],[.04,.75,-.02,.072],[.09,1.02,-.05,.046],[.07,1.38,-.09,.017]],limbs:[[[.01,.55,0,.078],[-.24,.75,.08,.053],[-.52,.95,.12,.022]],[[.04,.73,-.02,.072],[.3,.97,-.02,.043],[.54,1.16,.015,.018]],[[-.01,.51,.055,.047],[.24,.69,.27,.016]]],crowns:[[.01,1.48,-.11,.58,.53,.51,1],[-.51,1.13,.14,.43,.4,.36,0],[.52,1.29,.015,.43,.46,.37,0],[.22,.82,.29,.25,.27,.24,1],[.27,1.54,-.16,.39,.35,.4,1]]}];function yh(i,t,e){let n=i.map(([h,f,u])=>new B(h,f,u)),s=[],r=[],o=new B,a=new B(1,0,0),c=new B;for(let h=0;h<n.length;h++){o.subVectors(n[Math.min(h+1,n.length-1)],n[Math.max(0,h-1)]).normalize(),a.addScaledVector(o,-a.dot(o)),a.lengthSq()<.001&&a.set(0,0,1).addScaledVector(o,-o.z),a.normalize(),c.crossVectors(o,a).normalize();for(let f=0;f<e;f++){let u=(f+.23)*Math.PI*2/e,g=i[h][3]*(1+.095*Math.sin(f*1.98)),v=n[h].clone().addScaledVector(a,g*Math.cos(u)).addScaledVector(c,g*Math.sin(u));if(s.push(v.x,v.y,v.z),h===n.length-1)continue;let m=h*e+f,p=h*e+(f+1)%e;r.push(m,p,m+e,p,p+e,m+e)}}let l=new ae;l.setAttribute("position",new Gt(s,3)),l.setIndex(r),l.computeVertexNormals();let d=new se(l,t);return d.castShadow=!0,d}var ty=i=>i-Math.floor(i);function xf(i,t,[e,n,s,r],o=!1){let a=ty(Math.sin(e*31.12+n*71.76)*8123.93),c=Math.floor(a*gf.length),l=gf[c],d=t(e,n),h=a*Math.PI*2,f=new Jt;f.position.set(e,d,n),f.rotation.y=h,f.scale.setScalar(s),i.add(f);let u=o?5:7;f.add(yh(l.trunk,_h[c],u));for(let g of l.limbs.slice(0,o?2:l.limbs.length))f.add(yh(g,_h[c],u));for(let[g,[v,m,p,x,_,M,b]]of l.crowns.entries()){if(o&&g>2)break;let S=r&&g%4!==3?Q_:mf[(c+ +(g%3===1))%mf.length],y=ro(f,o?cf:j_[b],S,v,m,p,x,_,M);y.userData.canopyRoot=[e,d,n,s],y.rotation.set(.13*Math.sin(g+a),g*1.81,.13*Math.cos(g*2+a))}if(!o&&c!==1){let g=c===2?4:3;for(let v=0;v<g;v++){let m=v*Math.PI*2/g+a,p=(c===2?.39:.25)*(.8+.32*Math.sin(v*2.31+a)),x=Math.cos(m)*p,_=Math.sin(m)*p,M=b=>{let S=x*s*b,y=_*s*b;return(t(e+S*Math.cos(h)+y*Math.sin(h),n-S*Math.sin(h)+y*Math.cos(h))-d)/s};f.add(yh([[0,.105,0,.078],[x*.47,M(.47)+.037,_*.47,.052],[x,M(1)-.013,_,.008]],_h[c],5))}}return f}var ey=new vt("#637a43"),ny=new vt("#829a51"),iy=new vt("#b1bf72"),sy=new vt("#e6e7c9"),ry=new vt("#fffdee"),oy=new vt("#dbb95b"),ay=new vt("#d6a435"),cy=new vt("#f6d962"),ly=new vt("#ad771e"),_f=[[0,.22,0],[.3,.72,.09],[.61,1,.32],[.9,.73,.66],[1,.09,1]];function yf(i,{grass:t,tussocks:e,yellow:n},s){let r=[],o=[],a=[],c=[],l=new vt,d=43278,h=()=>(d=Math.imul(d,1664525)+1013904223>>>0,d/4294967296);function f(b,S,y,w,L,R,A){r.push(b,S,y),o.push(w.r,w.g,w.b),a.push(L,R,A)}function u(b,S,y,w,L,R,A,E=!1){let C=Math.cos(w),T=Math.sin(w),N=r.length/3,D=Math.min(1.22,L/.205);for(let[k,H,I]of _f){let F=b+C*A*I,z=y+T*A*I,X=S+L*(E?k:k-.1*k**5),j=D*k**2;l.copy(ey).lerp(ny,k).lerp(iy,k*(E?.28:.57)),f(F-T*R*H,X,z+C*R*H,l,b,y,j),f(F+T*R*H,X,z-C*R*H,l,b,y,j)}for(let k=0;k<_f.length-1;k++){let H=N+k*2;c.push(H,H+1,H+2,H+1,H+3,H+2)}}function g(b,S,y,w,L,R,A=!1){let E=A?.008+h()*.013:.025+h()*.028;u(b,S,y,w,L,.009,E,!0),u(b,S,y,w+Math.PI,L*.57,A?.019:.022,.062);let C=b+Math.cos(w)*E,T=S+L,N=y+Math.sin(w)*E,D=Math.min(1.22,L/.205),k=[[.16,-.18,0],[.49,-.37,.035],[.91,-.24,.14],[1,0,.19],[.88,.24,.12],[.48,.37,.035],[.16,.18,0]];for(let F=0;F<5;F++){let z=w+F*Math.PI*2/5,X=Math.cos(z),j=Math.sin(z),q=r.length/3,Z=R*(.9+h()*.17);for(let[nt,rt,ct]of k)l.copy(A?ay:sy).lerp(A?cy:ry,Math.min(1,nt*1.4)),f(C+(X*nt-j*rt)*Z,T+ct*Z,N+(j*nt+X*rt)*Z,l,b,y,D);for(let nt=1;nt<k.length-1;nt++)c.push(q,q+nt,q+nt+1)}let H=r.length/3,I=A?ly:oy;f(C,T+.007,N,I,b,y,D);for(let F=0;F<6;F++){let z=F*Math.PI/3;f(C+Math.cos(z)*R*.24,T+.003,N+Math.sin(z)*R*.24,I,b,y,D),c.push(H,H+1+(F+1)%6,H+1+F)}}function v(b,S,y,w,L){for(let R=0;R<w;R++){let A=h()*Math.PI*2,E=Math.sqrt(h()),C=y*E,T=b+Math.cos(A)*C,N=S+Math.sin(A)*C*.76,D=s(T,N);D!==null&&L(T,D,N,A,(.75+h()*.39)*(1-.27*E),R)}}function m(b,S,y,w,L,R=!1){let A=(R?10:5)+Math.floor(h()*4),E=R?.057:.028;for(let C=0;C<A;C++){let T=w+(C+h()*.58)*Math.PI*2/A,N=R?.135+h()*.17:.055+h()*.1,D=(R?.25+h()*.29:.116+h()*.139)*L,k=(R?.032+h()*.026:.02+h()*.018)*L;u(b+Math.cos(T)*E,S-.014,y+Math.sin(T)*E,T,D,k,N*L)}}for(let[b,S,y,w]of t)v(b,S,y,11,(L,R,A,E,C,T)=>{if(m(L,R,A,E,C),T<w){let N=s(L+.082,A-.055);if(N!==null&&g(L+.082,N,A-.055,E,(.175+h()*.08)*C,(.048+h()*.024)*C),T%2===0){let D=s(L-.095,A+.064);D!==null&&g(L-.095,D,A+.064,E+2,(.143+h()*.072)*C,.057*C)}}});for(let[b,S,y]of e){let w=s(b,S);w!==null&&m(b,w,S,h()*Math.PI*2,1.08+h()*.23,!0),v(b,S,y,6,(L,R,A,E,C,T)=>{m(L,R,A,E,C,T<3)})}for(let[b,S,y,w]of n)v(b,S,y,w,(L,R,A,E,C)=>{g(L,R-.008,A,E,(.035+h()*.05)*C,(.052+h()*.032)*C,!0)});let p=new ae;p.setAttribute("position",new Gt(r,3)),p.setAttribute("color",new Gt(o,3)),p.setAttribute("breeze",new Gt(a,3)),p.setIndex(c),p.computeVertexNormals(),p.computeBoundingSphere(),p.boundingSphere.radius+=.14;let x={value:0},_=new Ae({vertexColors:!0,side:ln});_.onBeforeCompile=b=>{b.uniforms.meadowTime=x,b.vertexShader=`uniform float meadowTime;
 attribute vec3 breeze;
`+b.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        float phase = meadowTime * 2.45 - dot(breeze.xy, vec2(.91, .64));
        float ripple = sin(phase) * .084 + sin(phase * 1.82 + breeze.x) * .019;
        transformed.xz += vec2(.85, .53) * breeze.z * ripple;
        transformed.y -= breeze.z * (ripple * ripple * 2.65);
      `)};let M=new se(p,_);return M.receiveShadow=!0,i.add(M),b=>{x.value=b}}function vf(i,t,e,n,s){function r(v,m,p){let x=0;for(let _=.08;_<=2.36;_+=.08){if(t(v,m+p*_)<n){x=_;continue}for(let M=0;M<7;M++){let b=(x+_)*.5;t(v,m+p*b)<n?x=b:_=b}return(x+_)*.5}return x}let o=[],a=[],c=[],l=Math.ceil(2*s/.205),d=.16;for(let v of[-1,1]){let m=o.length/3;for(let p=0;p<=l;p++){let x=Tt.lerp(-s,s,p/l),_=e(x),M=r(x,_,v);if(o.push(x,n,_+v*(M+d),x,n,_),a.push(-d,v,M,v),p===l)continue;let b=m+p*2,S=b+1,y=b+2,w=b+3;v<0?c.push(b,S,y,S,w,y):c.push(b,y,S,S,y,w)}}let h=new ae;h.setAttribute("position",new Gt(o,3)),h.setAttribute("shore",new Gt(a,2)),h.setIndex(c),h.computeVertexNormals();let f={value:0},u=new Ae;u.onBeforeCompile=v=>{v.uniforms.flowTime=f,v.uniforms.deepWater={value:new vt("#6c9fa4")},v.uniforms.shallowWater={value:new vt("#99c3b8")},v.uniforms.whiteWater={value:new vt("#f7fcef")},v.vertexShader=`attribute vec2 shore;
 varying vec4 vRiver;
`+v.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vRiver = vec4(position.xz, shore);`),v.fragmentShader=`uniform float flowTime;
 uniform vec3 deepWater, shallowWater, whiteWater;
 varying vec4 vRiver;
`+v.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        float along = vRiver.x;
        float bankDist = vRiver.z;
        float side = vRiver.w;
        float phase = along * 1.18 - flowTime * 1.32 + side * 1.8;
        float aa = min(.038, fwidth(bankDist) * .56);
        float shoreWave = .039 + .013 * sin(phase * 1.33) + .006 * sin(phase * 3.0);
        float brightRim = 1.0 - smoothstep(.015, .029 + aa, abs(bankDist - shoreWave));
        float cycle = fract(flowTime * .42 + side * .21 + .105 * sin(along * .69 + side));
        float advance = .091 + .165 * cycle + .016 * sin(phase * 1.68);
        float crest = 1.0 - smoothstep(.012, .026 + aa, abs(bankDist - advance));
        float fade = smoothstep(0.0, .20, cycle) * (1.0 - smoothstep(.61, 1.0, cycle));
        float broken = .29 + .71 * smoothstep(-.44, .55, sin(along * 1.85 - flowTime * 1.14 + side));
        float foam = max(brightRim * (.84 + .11 * sin(phase)), crest * fade * broken * .67);
        float shallows = 1.0 - smoothstep(.03, .54, bankDist);
        float glint = .014 * sin(along * 3.1 - flowTime * 1.64 + vRiver.y * 4.7)
          + .009 * sin(along * 5.4 + vRiver.y * 3.3 - flowTime * 2.3);
        vec3 channel = mix(deepWater, shallowWater, shallows) * (1.0 + glint);
        diffuseColor.rgb = mix(channel, whiteWater, foam);
      `)};let g=new se(h,u);return g.receiveShadow=!0,i.add(g),v=>{f.value=v}}var hy=[[0,-1],[1,0],[0,1],[-1,0]],uy=new wn,vh=new Map,Mf=[Li("#696d71","#929798","#c9c8b7"),Li("#73706d","#9a9789","#cbc1a9")];function dy(i){return vh.has(i)||vh.set(i,new Ae({color:i})),vh.get(i)}function Oe(i,t,e,n,s,r,o=1,a=1,c=1,l=!0){let d=new se(t,dy(e));return d.position.set(n,s,r),d.scale.set(o,a,c),d.castShadow=l,d.receiveShadow=!0,i.add(d),d}function ve(i,t,e,n,s,r,o,a,c=!0){return Oe(i,uy,t,e,n,s,r,o,a,c)}function Fn(i,t,e,n,s,r,o,a,c){return Oe(i,new _c(r,o,a,1,c),t,e,n,s)}function Zn(i,t){let e=Math.sin(i*127.1+t*311.7)*43758.5453123;return e-Math.floor(e)}var Fe=(i,t)=>`${i},${t}`,Pe=1.25,qs=i=>Math.round(i/Pe),On=Tt.smoothstep,lo=Tt.lerp,vc=.115,Jn=3.65,Di=6.35,Xs=1.56,Mc=i=>5+.75*Math.sin(i*.28)+.24*Math.sin(i*.77)+.55*Math.sin(i*.096),Sc=i=>.58+.17*(.5+.5*Math.sin(i*.49+1)),fy=[[-6.5,-4.9,5.2,4,3.45],[-9.1,-1.2,4.1,5,2.25],[4.6,-6.6,6.7,4.9,2.75],[8,-1.1,4.2,4.2,1.55],[-14,-13,9,6.5,6.2],[1,-17,12,7,5.4],[15,-10,9,6,6.9],[17,10,9,6,4.5],[-13,12.5,8,6,4.1],[2,19,12,6.5,4.3],[-24,-16,11,12,8.2],[22,-22,10,8,7.5],[-21,21,12,7,6.4],[29,12,11,9,7.8],[-33,-3,12,9,8.2],[0,-35,15,8,8.9]];function Th(i,t){let e=.49+.13*Math.sin(i*.34+t*.28)+.12*Math.cos(i*.57-t*.36);for(let[s,r,o,a,c]of fy){let l=((i-s)/o)**2+((t-r)/a)**2;e+=c*Math.exp(-l*1.5)}let n=Math.abs(t-Mc(i));return lo(-.2,e,On(n,Sc(i)*.48,Sc(i)+.63))}var Tf=[Jn,Di].map(i=>({z:i,y:Th(0,i)}));function bc(i,t,e){let n=t-i.x,s=e-i.z,r=Math.cos(i.angle),o=Math.sin(i.angle),a=r*n-o*s,c=o*n+r*s;return Math.max(Math.abs(a)-i.w/2,Math.abs(c)-i.d/2)}function Ws(i,t){let e=Th(i,t)+.031*Math.sin(i*1.45+t*.55)*Math.sin(t*1.33);for(let n of co){let s=1-On(bc(n,i,t),.56,1.27);e=lo(e,n.floor,s)}for(let n of Tf){let s=(1-On(Math.abs(i),Xs/2+.1,Xs/2+.57))*(1-On(Math.abs(t-n.z),.23,.71));e=lo(e,n.y,s)}return e}var Tc=.375,Ah=.72,ho=32,Sf=Tc*ho,oo=72,Mh=new Map;function wh(i){let t=Math.abs(i);return Math.sign(i)*(Math.min(t,ho)*Tc+Math.max(0,t-ho)*Ah)}function bf(i){let t=Math.abs(i),e=t<=Sf?t/Tc:ho+(t-Sf)/Ah;return Math.floor(Math.sign(i)*e)}function yc(i,t){let e=Fe(i,t);if(!Mh.has(e)){let n=o=>Math.abs(o)<=ho?Tc:Ah,s=wh(i)+(Zn(i,t+17)-.5)*n(i)*.44,r=wh(t)+(Zn(i-12,t)-.5)*n(t)*.44;Mh.set(e,[s,Ws(s,r),r])}return Mh.get(e)}function Af(i,t){let e=yc(i,t),n=yc(i+1,t),s=yc(i+1,t+1),r=yc(i,t+1);return(i+t)%2===0?[[e,r,n],[n,r,s]]:[[e,r,s],[e,s,n]]}function Kn(i,t){let e=bf(i),n=bf(t);for(let s=-1;s<=1;s++)for(let r=-1;r<=1;r++)for(let[o,a,c]of Af(e+s,n+r)){let l=a[0]-o[0],d=a[2]-o[2],h=c[0]-o[0],f=c[2]-o[2],u=i-o[0],g=t-o[2],v=l*f-d*h,m=(u*f-g*h)/v,p=(l*g-d*u)/v;if(m>=-1e-7&&p>=-1e-7&&m+p<=1+1e-7)return o[1]+m*(a[1]-o[1])+p*(c[1]-o[1])}return Ws(i,t)}function ao(i){let t=(i-Jn)/(Di-Jn);return lo(Ef,Cf,t)+Math.sin(t*Math.PI)*.29}function pe(i,t){let e=Kn(i,t);return Math.abs(i)<=Xs/2&&t>=Jn&&t<=Di?Math.max(e,ao(t)):e}function py(i){let t=new ae;return t.setAttribute("position",new Gt(i.flat(),3)),t.computeVertexNormals(),t}function Hs(i,t,e,n,s){i.push(t,e,s,e,n,s)}function Sh(i,t,e,n=!0){if(t.length)return Oe(i,py(t),e,0,0,0,1,1,1,n)}var my=[[1.1,[[-16.5,43],[-10.6,34],[-9.6,27],[-5.8,20],[-2,13],[-.65,9],[-.16,7.2],[0,6.52],[0,6.3],[0,3.68],[.07,3.44],[.65,2.8],[.33,1.15],[-.5,-.15],[-1.08,-1.7],[-1.17,-3.35],[-1.54,-5.6],[-3.35,-7.8],[-3.05,-13],[-3.8,-17],[-1.1,-23],[-1.9,-30],[-6.2,-37],[-6.8,-43]]],[.77,[[.25,1.14],[1.4,.79],[2.32,-.02],[3.04,-1.05],[3.94,-1.52]]],[.7,[[2.16,.13],[2.74,.78],[3.62,1],[4.2,.89]]],[.67,[[-.99,-1.52],[.3,-1.38],[1.06,-1.31]]],[.64,[[.04,.7],[-1.08,.95],[-2.15,1.05],[-2.72,.91]]],[.56,[[-1.03,-1.61],[-1.63,-1.53],[-2.65,-1.72]]],[.57,[[-1.27,-4.02],[.17,-4.27],[1.52,-3.93]]]],wc={x:48,z:86},Eh=my.map(([i,t],e)=>{let n=new Yi(t.map(([o,a])=>new B(o,0,a))),s=n.getLength(),r=Math.ceil(s*15);return Array.from({length:r+1},(o,a)=>{let c=a/r,l=n.getPointAt(c),d=n.getTangentAt(c),h=c*s,f=.57+.43*On(c,0,.05)*(1-On(c,.94,1)),u=e===0?Math.max(...Tf.map(m=>1-On(Math.abs(l.z-m.z),.22,.8))):0,g=i*.5*f*(1+u*.24),v=m=>g*(1+.094*Math.sin(h*1.47+e+m)+.024*Math.sin(h*3.1+m*2));return{x:l.x,z:l.z,dx:d.z,dz:-d.x,left:v(1),right:v(-1)}})}),Ch=Eh[0];function wf(i,t,e){return Eh.some(n=>n.some(s=>{let r=i-s.x,o=t-s.z,a=(r*s.dx+o*s.dz>0?s.left:s.right)+e;return r*r+o*o<a*a}))}function gy(){let t=document.createElement("canvas");t.width=t.height=2048;let e=t.getContext("2d"),n=(a,c)=>[(a/wc.x+.5)*2048,(c/wc.z+.5)*2048];e.fillStyle="#ddd";for(let a of Eh){let c=a.map(({x:h,z:f,dx:u,dz:g,left:v})=>n(h+u*v,f+g*v)),l=a.map(({x:h,z:f,dx:u,dz:g,right:v})=>n(h-u*v,f-g*v)),d=[...c,...l.reverse()];e.beginPath(),d.forEach(([h,f],u)=>u===0?e.moveTo(h,f):e.lineTo(h,f)),e.closePath(),e.fill()}let s=document.createElement("canvas");s.width=s.height=2048;let r=s.getContext("2d");r.fillStyle="#000",r.fillRect(0,0,2048,2048),r.filter="blur(1.65px)",r.drawImage(t,0,0);let o=new qi(s);return o.anisotropy=4,o}function xy(i){let t=new Ae({vertexColors:!0,map:gy()});t.onBeforeCompile=h=>{h.uniforms.trackColor={value:new vt("#cbb686")},h.fragmentShader=`uniform vec3 trackColor;
`+h.fragmentShader.replace(`#include <map_fragment>
	#include <color_fragment>`,`#include <color_fragment>
 diffuseColor.rgb = mix(diffuseColor.rgb, trackColor, texture2D(map, vMapUv).r);`)};let e=new vt("#a8bf7c"),n=new vt("#7f9e6c"),s=new vt("#b9b3a2"),r=new vt("#c9bf96"),o=new vt("#a9bdb3"),a=new WeakMap;function c(h){if(a.has(h))return a.get(h);let[f,u,g]=h,v=.23,m=new B(Ws(f-v,g)-Ws(f+v,g),2*v,Ws(f,g-v)-Ws(f,g+v)).normalize(),p=.42+.27*Math.sin(f*.33+g*.22)+.09*Math.cos(g*.62-f*.27),x=e.clone().lerp(n,p).lerp(s,On(1-m.y,.12,.34)*On(u,1.2,2.9)*.78).lerp(r,1-On(Math.abs(g-Mc(f)),Sc(f)*.87,Sc(f)+.36)).lerp(o,On(Math.hypot(f,g),11,31)*.73),_={normal:m,color:x};return a.set(h,_),_}let l=[],d=16;for(let h=-oo;h<oo;h+=d)for(let f=-oo;f<oo;f+=d){let u=[],g=[],v=[],m=[];for(let _=0;_<d;_++)for(let M=0;M<d;M++)for(let b of Af(f+M,h+_))for(let S of b){let{normal:y,color:w}=c(S);u.push(...S),g.push(y.x,y.y,y.z),v.push(w.r,w.g,w.b),m.push(S[0]/wc.x+.5,.5-S[2]/wc.z)}let p=new ae;p.setAttribute("position",new Gt(u,3)),p.setAttribute("normal",new Gt(g,3)),p.setAttribute("color",new Gt(v,3)),p.setAttribute("uv",new Gt(m,2)),p.computeBoundingBox();let x=new se(p,t);x.receiveShadow=!0,i.add(x),l.push(x)}return l}function _y(i,t,e,n,s,r,o=!1){let a=e/2+.215,c=t/2+.205,l=16,d=12,h=x=>c*(.965+.035*x),f=(x,_,M)=>[x*h(_),n+s*(1-_)**1.64+.044*_**7+.116*Math.abs(x)**7*(.46+.54*_),M*_*a],u=([x,_,M])=>[x,_-.067,M],g=[];for(let x of[-1,1]){let _=o?4:1,M=l/_;for(let b=0;b<_;b++){let S=[],y=[];for(let R=0;R<=d;R++)for(let A=0;A<=M;A++){if(S.push(...f((b*M+A)*2/l-1,R/d,x)),R===d||A===M)continue;let E=R*(M+1)+A,C=E+1,T=E+M+1,N=T+1;x>0?y.push(E,T,C,C,T,N):y.push(E,C,T,C,N,T)}if(o){let R=S.length/3,A=y.slice(),E=new Map;for(let C=0;C<R;C++)S.push(S[C*3],S[C*3+1]-.067,S[C*3+2]);for(let C=0;C<A.length;C+=3){let T=A.slice(C,C+3);y.push(T[2]+R,T[1]+R,T[0]+R);for(let N=0;N<3;N++){let D=T[N],k=T[(N+1)%3],H=`${Math.min(D,k)},${Math.max(D,k)}`;E.has(H)?E.delete(H):E.set(H,[D,k])}}for(let[C,T]of E.values())y.push(T,C,C+R,T,C+R,T+R)}let w=new ae;w.setAttribute("position",new Gt(S,3)),w.setIndex(y),w.computeVertexNormals();let L=Oe(i,w,r,0,0,0);o&&(L.userData.breakStage=(x>0?[1,2,3,3]:[3,2,4,4])[b],L.userData.roofPanel={side:x,panel:b})}for(let b=0;b<l;b++){let S=f(b*2/l-1,1,x),y=f((b+1)*2/l-1,1,x);x>0?Hs(g,y,S,u(S),u(y)):Hs(g,S,y,u(y),u(S))}for(let b of[-1,1])for(let S=0;S<d;S++){let y=f(b,S/d,x),w=f(b,(S+1)/d,x);x===b?Hs(g,y,w,u(w),u(y)):Hs(g,w,y,u(y),u(w))}}o||Sh(i,g,"#4d6265");let v=[];for(let x of[-1,1]){let _=x*t/2,M=b=>f(_/h(Math.abs(b)/a),Math.abs(b)/a,Math.sign(b))[1]-.035;for(let b=0;b<16;b++){let S=e*(b/16-.5),y=S+e/16,w=[_,n-.095,S],L=[_,n-.095,y],R=[_,M(y),y],A=[_,M(S),S];x>0?Hs(v,w,A,R,L):Hs(v,w,L,R,A)}if(o){let b=Sh(i,v,"#f0e7d0");b.userData.breakStage=x<0?3:4,v=[]}}o||Sh(i,v,"#f0e7d0");let m="#4c6064",p=Fn(i,m,0,n+s+.029,0,t+.42,.113,.115,.047);o&&(p.userData.breakStage=3);for(let x of[-1,1]){let _=Fn(i,m,x*(c-.019),n+s+.079,0,.225,.087,.11,.032);_.rotation.z=x*.24,o&&(_.userData.breakStage=3)}}var co=[{x:1.07,z:-2.35,w:2.52,d:1.47,h:.98,angle:-.11,hall:!0},{x:-2.79,z:-2.56,w:1.48,d:1.12,h:.78,angle:.18},{x:4.05,z:-2.42,w:1.68,d:1.12,h:.83,angle:-.24},{x:4.36,z:.18,w:1.4,d:.92,h:.67,angle:-.42},{x:1.54,z:-4.79,w:1.48,d:1.02,h:.72,angle:.04},{x:-2.89,z:.19,w:1.43,d:.93,h:.73,angle:.32}].map(i=>({...i,w:i.w*1.08,d:i.d*1.08,h:i.h*1.08,floor:Th(i.x,i.z)})),Ef=Kn(0,Jn)+.014,Cf=Kn(0,Di)+.014;function yy(i,{x:t,z:e,w:n,d:s,h:r,hall:o,angle:a,floor:c}){let l=new Jt;l.position.set(t,c,e),l.rotation.y=a,i.add(l);let d=o?"#f7eedb":"#f0e7d0";Fn(l,"#ada58e",0,-.038,0,n+.12,.235,s+.13,.045);let h=new Jt;if(l.add(h),o){let M=function(S,y,w,L,R){ve(h,d,S,.073+.14,y,w,.28,L);let A=Fn(h,d,S,.073+.28+(r-.28)/2,y,w,r-.28,L,.022);A.userData.breakStage=R},_=(n-.62)/2;for(let S=0;S<3;S++)M((S-1)*n/3,-s/2+.15/2,n/3,.15,S===0?3:4);for(let S of[-1,1]){for(let y=0;y<3;y++)M(S*(n/2-.15/2),(y-1)*s/3,.15,s/3,S<0?[2,3,4][y]:[3,4,4][y]);M(S*(.31+_/2),s/2-.15/2,_,.15,S<0?2:3)}let b=ve(h,d,0,.081+.6+(r-.6)/2,s/2-.15/2,.63,r-.6,.15);b.userData.breakStage=3,ve(h,"#333c30",0,.13,0,n-.3,.035,s-.25,!1)}else Fn(h,d,0,r/2+.073,0,n,r,s,.052);if(o)for(let x of[-1,1]){let _=ve(l,"#a27c60",0,r+.037,x*s/2,n+.055,.1,.1),M=ve(l,"#a27c60",x*n/2,r+.037,0,.1,.1,s);_.userData.breakStage=x<0?4:3,M.userData.breakStage=x<0?3:4}else Fn(l,"#a27c60",0,r+.037,0,n+.055,.1,s+.045,.021);let f=new Jt;if(l.add(f),_y(f,n,s,r+.13,o?.6:.44,o?"#566c71":"#617578",o),o){let b=function(S,y){let w=Math.abs(y)/_,L=S/(M*(.965+.035*w));return r+.13+.6*(1-w)**1.64+.044*w**7+.116*Math.abs(L)**7*(.46+.54*w)-.12},x=new Jt;x.name="\u57FA\u5730\u6728\u5C4B\u67B6",l.add(x);let _=s/2+.215,M=n/2+.205;for(let S of[-n*.37,0,n*.37]){for(let w of[-1,1])for(let L=0;L<4;L++){let R=w*s*.48*L/4,A=w*s*.48*(L+1)/4,E=new B(S,b(S,R),R),C=new B(S,b(S,A),A),T=C.clone().sub(E),N=ve(x,"#76583e",S,(E.y+C.y)/2,(R+A)/2,.055,T.length(),.055);N.name="\u5C4B\u5185\u66F2\u7EBF\u693D\u6728",N.quaternion.setFromUnitVectors(new B(0,1,0),T.normalize()),N.userData.breakStage=S<0?3:4}let y=ve(x,"#76583e",S,r+.04,0,.065,.055,s*.95);y.userData.breakStage=S<0?3:4}for(let S of[-n*.44,n*.44])for(let y of[-s*.4,s*.4]){let w=ve(x,"#76583e",S,r/2+.06,y,.075,r,.075);w.userData.breakStage=4}}let u=o?.6:.49,g=new Jt,v=[],m=o?.56:.32;g.position.set(-m/2,.081,s/2+.053),l.add(g);for(let x=0;x<5;x++)v.push(ve(g,x%2?"#835438":"#8f6141",(x+.5)*m/5,u/2,0,m/5-.006,u,.052));for(let x of[.12,u-.12])ve(g,"#66513b",m/2,x,.035,m,.035,.025);let p=ve(l,"#b4855b",0,.081+u,s/2+.053,o?.65:.4,.075,.11);o&&(p.userData.breakStage=3);for(let x of[-1,1]){let _=ve(l,"#725b47",x*n*.3,r*.57,s/2+.021,.19,.24,.045),M=ve(l,"#b19572",x*n*.3,r*.57,s/2+.048,.026,.21,.022);if(o){_.userData.breakStage=x<0?2:3,M.userData.breakStage=x<0?2:3;let b=ve(l,"#906246",x*n*.44,r*.51+.05,s/2+.106,.075,r,.075);b.userData.breakStage=4}}return Fn(l,"#c6bba3",0,.016,s/2+.15,o?.95:.54,.135,.36,.025),o&&Fn(l,"#c8bda4",0,-.007,s/2+.34,.9,.092,.23,.023),{group:l,walls:h,roof:f,door:g,planks:v,spec:{x:t,z:e,w:n,d:s,h:r,angle:a,floor:c}}}var Rf=[[-4.15,-5.73,1.36,!0],[-5.88,-6.54,.74],[-4.81,-7.36,.68],[-8.77,-5.03,.8],[.29,-7,.97],[3.39,-4.72,.74],[5.62,-4.17,.68],[6.31,-1.79,.79],[6.93,.38,1.43],[8.3,1.67,.67],[5.98,2.43,.75],[-5.94,1.87,1.47],[-4.62,3.43,.69],[3.75,7.29,.89],[-3.92,6.67,1.24],[-8.13,-1.91,.79]],vy=[[-4.82,2.95,.71,7],[-3.87,2.01,.53,3],[-4.38,.32,.58,0],[-2.61,3.59,.68,6],[-1.66,3.83,.48,4],[1.76,3.68,.49,5],[3.12,4.12,.5,2],[4.36,3.65,.66,6],[5.71,3.22,.76,3],[6.63,2.05,.6,0],[-4.78,-1.94,.75,2],[-3.72,-1.28,.48,4],[-2.94,-.65,.5,5],[1.38,-.56,.42,4],[2.21,-.22,.52,3],[5.53,-.11,.63,6],[5.27,-3.6,.68,0],[-5.05,-2.7,.54,3],[-6.37,-2.45,.8,0],[-3.42,6.63,.62,5],[-2.51,7.14,.61,5],[1.36,6.9,.56,4],[2.33,7.34,.64,7],[4.23,7.48,.68,2],[-5.13,7.87,.85,0],[6.91,5,.76,0],[-8.16,1.46,.95,1],[-7.31,.56,.78,0],[-5.84,-.56,.82,2],[-5.24,.81,.66,2],[-5.01,5.64,.73,0],[-3.02,5.81,.66,2],[2.87,6.53,.67,0],[4.38,5.96,.68,2],[6.44,4.31,.79,1],[7.31,2.96,.88,0],[8.22,2.49,.84,2],[8.77,-.27,.9,0],[4.39,-5.6,.79,0],[-4.36,-7.94,.78,1],[-2.55,8.76,.97,2],[3.31,8.63,.83,1],[-11.7,7.63,1.08,2],[-13.28,9.92,1.14,0],[-14.6,8.37,.88,0],[-15.12,1.55,.94,1],[-13.98,3.32,1.05,0],[-11.29,11.66,.97,3],[-5.87,13.53,1.1,0],[-4.2,15.1,.89,1],[7.65,11.78,1.14,2],[9.41,13.68,.92,0],[12.66,6.87,1.06,0],[14.33,7.91,.91,2],[15.71,5.31,.97,0],[13.92,2.31,1.04,1],[15.22,-1.46,1.08,0],[16.28,-4.17,.93,0],[13.92,-5.83,.98,2],[8.22,-11.71,.92,0],[5.76,-13.19,1.04,1],[-10.64,-10.83,.89,0],[-12.82,-8.77,1.08,2]],My=[[-6.71,-1.48,.75],[-5.46,-2.47,.66],[-7.76,-2.86,.62],[-6.77,2.55,.76],[-4.12,2.98,.57],[-3.86,5.98,.53],[-1.77,6.26,.48],[2.59,6.25,.48],[4.87,4.64,.61],[6.01,3.16,.66],[7.31,1.18,.8],[6.92,-1.94,.69],[4.92,-5.65,.8],[8.63,-3.4,.79],[-3.84,-8.36,.72],[4.56,8.57,.81],[-12.6,8.85,.78],[-14.75,2.56,.69],[-10.76,12.3,.73],[-5.18,14.62,.76],[8.42,12.61,.72],[13.51,7.15,.78],[15.36,3.61,.68],[15.81,-2.63,.74],[6.62,-12.48,.69],[-11.81,-9.59,.71]],Sy=[[-5.26,2.18,.59,24],[-4.72,1.71,.39,11],[-3.16,.07,.56,21],[-2.87,-3.88,.59,18],[-2.26,3.48,.49,19],[-2.22,6.76,.69,25],[1.29,6.48,.47,19],[2.63,2.81,.6,22],[3.19,3.39,.37,10],[5.18,.95,.55,20],[6.66,2.47,.66,22],[7.93,-1.75,.58,16],[-7.08,1.23,.56,16]];function by(i){let e=(Di-Jn)/20,n=[-1,1].map(s=>s*(Xs/2-.06));for(let s=0;s<20;s++){let r=Jn+e*s,o=r+e,a=(r+o)/2,c=ao(a),l=Math.atan2(ao(r)-ao(o),e);if(Fn(i,s%3?"#b79a73":"#c2a47e",0,c-.034,a,Xs,.068,e*1.015,.009).rotation.x=l,s%5===0||s===19)for(let d of n)Fn(i,"#907453",d,c+.108,a,.084,.3,.085,.019)}for(let s of n){let r=new Yi(Array.from({length:13},(o,a)=>{let c=lo(Jn,Di,a/12);return new B(s,ao(c)+.239,c)}));Oe(i,new Fr(r,24,.029,8,!1),"#a1815d",0,0,0)}for(let[s,r,o]of[[Jn,Ef,-1],[Di,Cf,1]])Fn(i,"#b8ae92",0,r-.063,s+.064*o,Xs+.11,.138,.258,.024)}function wy(i,t){let e=[];function n(o,a){let c=new rn().setFromObject(o,!0).expandByScalar(.035);if(e.some(l=>l.intersectsBox(c))){o.removeFromParent();return}e.push(c),t.push(a)}let s=[[-7.71,-3.76,1.32,1.17,.84,.25],[-5.42,-3.6,.94,1.35,.78,.07],[-6.56,-2.18,.82,.78,.49,-.31],[7.4,-2.91,.74,.76,.62,-.08],[8.23,-4.36,.94,1,.64,-.33]];for(let[o,[a,c,l,d,h,f]]of s.entries()){let u=Kn(a,c),g=ro(i,rf,Mf[o%2],a,u+d*.18,c,l,d,h);g.rotation.y=f,n(g,[a,c+.16,l*1.17,h*1.35])}let r=[[-6.25,-4.14,.73],[-4.93,-2.82,.52],[-7.29,-2.6,.68],[-7.62,-1.44,.56],[6.24,-5.52,.72],[5.82,-4.64,.59],[7.87,3.01,.59],[-6.27,7.73,.64],[4.87,7.31,.46],[10.35,2.27,.61],[-10.27,.63,.64],[6.1,9.87,.67]];for(let[o,a,c]of r)for(let l=0;l<4;l++){let d=(Zn(l,o)-.5)*c*1.8,h=(Zn(l,a)-.5)*c*1.55,f=c*(.22+Zn(l+6,o)*.43),u=ro(i,sf,Mf[l%2],o+d,Kn(o+d,a+h)+f*.095,a+h,f,f*(.52+Zn(l,a)*.37),f*.82);u.rotation.set(l*.14,l*1.42,-.2),n(u,[o+d,a+h+.04,f*1.18,f*.96])}return e}function bh(i,t){i.updateMatrixWorld(!0);let e=new Map;i.traverse(s=>{if(!s.isMesh)return;let r=`${s.material.id}-${s.castShadow}`;e.has(r)||e.set(r,{material:s.material,shadow:s.castShadow,parts:[]});let o=s.geometry.index?s.geometry.toNonIndexed():s.geometry.clone();o.deleteAttribute("uv"),ff(o,s.userData.tint),o.applyMatrix4(s.matrixWorld),s.userData.canopyRoot&&df(o,s.userData.canopyRoot),e.get(r).parts.push(o)});let n=[];for(let{material:s,shadow:r,parts:o}of e.values()){let a=new se(xc(o),s);a.castShadow=r,a.receiveShadow=!0,t.add(a),n.push(a),o.forEach(c=>c.dispose())}return n}function Ty(i=Rf){let t=new Map,e=.33*Pe,n=[[-1,1],[-3,3],[-4,4],[-4,4],[-4,4],[-4,4],[-4,4],[-3,4],[-2,2],[-1,1],[-2,2],[-1,1]];for(let r=-5;r<=6;r++){let o=r*Pe,[a,c]=n[r+5];for(let l=a;l<=c;l++){let d=l*Pe;if(!co.some(h=>bc(h,d,o)<.51)&&!i.some(([h,f])=>Math.hypot(d-h,o-f)<.6)){if(!(l===0&&o>=Jn&&o<=Di)){let h=[[0,0],[-e,-e],[-e,e],[e,-e],[e,e]].map(([f,u])=>Kn(d+f,o+u));if(Math.min(...h)<=vc+.025||Math.max(...h)-Math.min(...h)>.59*Pe)continue}t.set(Fe(l,r),{x:d,z:o,column:l,row:r,neighbors:[]})}}}for(let r of t.values())r.neighbors=hy.map(([o,a])=>t.get(Fe(r.column+o,r.row+a))).filter(o=>o&&Math.abs(pe(r.x,r.z)-pe(o.x,o.z))<.65*Pe);let s=t.get(Fe(1,0))??t.get(Fe(0,0));if(s){let r=new Set([s]),o=[s];for(let a=0;a<o.length;a++)for(let c of o[a].neighbors)r.has(c)||(r.add(c),o.push(c));for(let[a,c]of t)r.has(c)||t.delete(a)}return t}function If(i){let t=new Jt;i.add(t);let e=xy(t),n=vf(t,Kn,Mc,vc,wh(oo)-.16),s=[],r=new Jt,o=wy(r,s),a=new Jt,c;for(let _ of co){let M=yy(a,_);_.hall&&(c=M)}let l=[...o,...a.children.map(_=>new rn().setFromObject(_,!0))],d=[];function h(_,M,b=!1){let[S,y,w]=M;if(b&&(wf(S,y,w*.39)||d.some(([E,C,T])=>Math.hypot(S-E,y-C)<(w+T)*.48)))return!1;let L=xf(_,Kn,M,b),R=new rn().setFromObject(L),A=l.filter(E=>E.intersectsBox(R));if(A.length){let E=new rn;if(L.children.some(C=>(E.setFromObject(C,!0),A.some(T=>T.intersectsBox(E)))))return L.removeFromParent(),!1}return d.push(M),s.push([S+.08*w,y,.79*w,.63*w]),!0}let f=Rf.filter(_=>h(a,_));c.group.removeFromParent(),t.add(c.group);let u=bh(a,t);c.group.traverse(_=>{_.isMesh&&u.push(_)});let g=new Jt;by(g);let v=bh(g,t),m=19;for(let[_,M,b,S]of[[-9.3,-5.9,2.9,22],[7.3,-7.4,3.7,26],[-11.5,3.8,3.4,20],[9.5,6.4,3,22],[-6.3,11,3.8,20],[3.1,12.4,3.1,17],[-15,-11.9,4.5,27],[-3.6,-15,4.2,20],[12.8,-12.4,4.5,24],[11.15,-.55,2.35,11],[-10.46,.61,1.88,8],[1.2,-10.8,2.45,8],[6.67,10.57,2.04,8],[-12.9,9.6,2.6,12],[-15.9,2.1,2.5,10],[-5.5,15,2,9],[8.9,12.8,2.4,10],[14.2,5.4,2.6,12],[16,-2.7,2.3,11],[6.8,-13.3,2.5,8],[-11.9,-10.1,2.4,7]])for(let y=0;y<S;y++){let w=_+(Zn(y,_)-.5)*2*b,L=M+(Zn(y,M)-.5)*1.5*b;if(Math.hypot(w,L)>m||Math.abs(w)<7&&L>-7.5&&L<8.5||Math.abs(L-Mc(w))<1.25)continue;let R=.54+Zn(w,L)**1.36*.83;h(r,[w,L,R,Zn(L,w)<.06],!0)}bh(r,t),pf(t,s,Kn);let p=yf(t,{grass:vy,tussocks:My,yellow:Sy},(_,M)=>{let b=Kn(_,M),S=o.some(y=>_>=y.min.x&&_<=y.max.x&&M>=y.min.z&&M<=y.max.z);return b>vc+.057&&!S&&!wf(_,M,.045)&&!co.some(y=>bc(y,_,M)<.39)?b:null}),x=(_,M)=>pe(_,M)>vc+.05&&!co.some(b=>bc(b,_,M)<.2)&&!f.some(([b,S,y])=>Math.hypot(_-b,M-S)<.19*y+.12)&&!o.some(b=>_>b.min.x-.12&&_<b.max.x+.12&&M>b.min.z-.12&&M<b.max.z+.12);return{terrain:e,blockers:u,deck:v,home:c,tiles:Ty(f),canServiceWalk:x,animateWater:n,animateMeadow:p,animateCanopy:uf}}function Pf(i){let t=new Map(Array.from(i.values(),c=>[c,new et(c.x,c.z)])),e=c=>i.get(Fe(qs(c.x),qs(c.y))),n=(c,l)=>!!c&&c.neighbors.includes(l);function s(c,l,d,h){let f=(c.x+d)/Pe,u=(c.y+h)/Pe,g=(l.x+d)/Pe,v=(l.y+h)/Pe,m=Math.floor(f+.5),p=Math.floor(u+.5),x=Math.floor(g+.5),_=Math.floor(v+.5),M=g-f,b=v-u,S=Math.sign(M),y=Math.sign(b),w=i.get(Fe(m,p));if(!w)return!1;for(;m!==x||p!==_;){let L=m===x?1/0:(m+S*.5-f)/M,R=p===_?1/0:(p+y*.5-u)/b;if(Math.abs(L-R)<1e-9){let A=i.get(Fe(m+S,p)),E=i.get(Fe(m,p+y)),C=i.get(Fe(m+S,p+y));if(!n(w,A)||!n(w,E)||!n(A,C)||!n(E,C))return!1;m+=S,p+=y,w=C}else{L<R?m+=S:p+=y;let A=i.get(Fe(m,p));if(!n(w,A))return!1;w=A}}return!0}function r(c,l,d=0){if(!s(c,l,0,0))return!1;let h=l.x-c.x,f=l.y-c.y,u=Math.hypot(h,f);if(!d||u<1e-8)return!0;let g=f*d/u,v=-h*d/u;return s(c,l,g,v)&&s(c,l,-g,-v)}function o(c,l,d){let h=[];for(let f=0;f<l.length-1;f++){let u=l[f],g=l[f-1]??c,v=l[f+1],m=Math.min(.27*Pe,g.distanceTo(u)*.23,v.distanceTo(u)*.23),p=u.clone().lerp(g,m/g.distanceTo(u)),x=u.clone().lerp(v,m/v.distanceTo(u)),_=Array.from({length:5},(M,b)=>{let S=b/4;return p.clone().lerp(u,S).lerp(u.clone().lerp(x,S),S)});_.every((M,b)=>r(_[b-1]??h.at(-1)??c,M,d))?h.push(..._):h.push(u)}return h.push(l.at(-1)),h}function a(c,l,d=.23*Pe,h=!0){if(r(c,l,d))return[l.clone()];let f=t.get(e(c));if(!f||!e(l))return null;let u=c.clone(),g=l.clone(),v=[...t.values()].filter(M=>M.distanceToSquared(g)>1e-8);v.push(g);let m=new Set([u]),p=new Set,x=new Map([[u,0]]),_=new Map;for(;m.size;){let M,b=1/0;for(let S of m){let y=x.get(S)+S.distanceTo(g);y<b&&(M=S,b=y)}if(M===g){let S=[];for(let y=g;y!==u;y=_.get(y))S.unshift(y);return h?o(u,S,d):S}m.delete(M),p.add(M);for(let S of v){if(p.has(S)||M.distanceToSquared(S)<1e-8)continue;let y=x.get(M)+M.distanceTo(S);if(y>=(x.get(S)??1/0))continue;let w=M===u&&S===f;!r(M,S,d)&&!(w&&r(M,S))||(x.set(S,y),_.set(S,M),m.add(S))}}return null}return{tileAt:e,clear:r,route:a}}var ge=128,Ys=40,un=ge*Ys,Lf=(i,t,e)=>Tt.smoothstep(e,i,t);function Ay(i,t){let e=(a,c)=>Tt.euclideanModulo(Math.sin(a*127.1+c*311.7)*43758.5453,1),n=Math.floor(i),s=Math.floor(t),r=Lf(0,1,i-n),o=Lf(0,1,t-s);return Tt.lerp(Tt.lerp(e(n,s),e(n+1,s),r),Tt.lerp(e(n,s+1),e(n+1,s+1),r),o)}function Df(){let i=new Uint8Array(un).fill(255),t=new Float32Array(un),e=new Uint8Array(un),n=new Uint8Array(un),s=new Uint16Array(un),r=new Float32Array(un),o=[[.23,.32,.1,.2],[.4,.69,.12,.21],[.65,.4,.12,.22]],a=new Xi(i,ge,Ys,zs);a.minFilter=a.magFilter=qe,a.generateMipmaps=!1,a.needsUpdate=!0;let c=-1;for(let d=0;d<Ys;d++)for(let h=0;h<ge;h++){let f=h/(ge-1),u=d/(Ys-1),g=Ay(f*13+1.7,u*6+3.1),v=.66*(1-f)+.22*Math.sin(u*Math.PI)+.075*g+.07*Math.exp(-f*22);for(let[m,p,x,_]of o){let M=Math.hypot((f-m)/x,(u-p)/_);v=Math.min(v,.24+M*.19+g*.045)}t[d*ge+h]=v}function l(d){let h=Math.round(Math.max(0,d)*768);if(c===h)return;if(c=h,h===0){i.fill(255),e.fill(1),n.fill(1),a.needsUpdate=!0;return}let f=-.035+h/768*.75;n.fill(0);for(let m=0;m<un;m++)e[m]=+(t[m]>f);let u=0,g=0;for(let m=0;m<Ys;m++){let p=m*ge;e[p]&&(n[p]=1,s[g++]=p)}function v(m){e[m]&&!n[m]&&(n[m]=1,s[g++]=m)}for(;u<g;){let m=s[u++],p=m%ge;p>0&&v(m-1),p<ge-1&&v(m+1),m>=ge&&v(m-ge),m<un-ge&&v(m+ge)}for(let m=0;m<un;m++){let p=m%ge,x=n[m];r[m]=p&&n[m-1]!==x||p<ge-1&&n[m+1]!==x||m>=ge&&n[m-ge]!==x||m<un-ge&&n[m+ge]!==x?.5:1e3}for(let m=0;m<un;m++)m%ge&&(r[m]=Math.min(r[m],r[m-1]+1)),m>=ge&&(r[m]=Math.min(r[m],r[m-ge]+1)),m>=ge&&m%ge&&(r[m]=Math.min(r[m],r[m-ge-1]+1.414));for(let m=un-1;m>=0;m--)m%ge<ge-1&&(r[m]=Math.min(r[m],r[m+1]+1)),m<un-ge&&(r[m]=Math.min(r[m],r[m+ge]+1)),m<un-ge&&m%ge<ge-1&&(r[m]=Math.min(r[m],r[m+ge+1]+1.414)),i[m]=Math.round(Tt.clamp(.5+(n[m]?1:-1)*r[m]/24,0,1)*255);a.needsUpdate=!0}return l(0),{texture:a,setBurn:l,attached:n,width:ge,height:Ys}}var Mn=14,ke=4,Ce=Mn+1,en=Ce*(ke+1),$s=.01;function Ey(i,t,e,n){let s=new Ae({color:n?"#387cac":"#bb593c"});s.onBeforeCompile=o=>{o.uniforms.clothBurn=i,o.uniforms.clothHeat=t,o.uniforms.clothMask={value:e.texture},o.vertexShader=`varying vec2 vCloth;
`+o.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
 vCloth = uv;`),o.fragmentShader=`varying vec2 vCloth;
      uniform float clothBurn;
      uniform float clothHeat;
      uniform sampler2D clothMask;
    `+o.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        ${n?`
          bool notch = (vCloth.y > .18 && vCloth.y < .42) || (vCloth.y > .58 && vCloth.y < .82);
          if (vCloth.x > .86 && notch) discard;
          vec2 emblem = vec2((vCloth.x - .44) * 1.96, .5 - vCloth.y);
          emblem = mat2(.819, -.574, .574, .819) * emblem;
          vec2 handle = abs(emblem - vec2(.0, -.035)) - vec2(.027, .205);
          vec2 head = abs(emblem - vec2(.0, .165)) - vec2(.145, .063);
          float hammer = 1.0 - smoothstep(-.004, .007, min(max(handle.x, handle.y), max(head.x, head.y)));
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.94, .94, .88), hammer);
        `:`
          float crest = 1.0 - smoothstep(.129, .153, abs(vCloth.x - .29) * 1.8 + abs(vCloth.y - .5));
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.77, .56, .24), crest);
        `}
        float edgeDistance = (texture2D(clothMask, vCloth).r - .5) * .20;
        if (edgeDistance < 0.0) discard;
        float enabled = step(.01, clothBurn);
        float charred = (1.0 - smoothstep(.008, .048, edgeDistance)) * enabled;
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.035, .055, .025), charred);
      `).replace("#include <tonemapping_fragment>",`
        float ember = (1.0 - smoothstep(.0, .013, edgeDistance)) * enabled * clothHeat;
        float halo = (1.0 - smoothstep(.008, .026, edgeDistance)) * enabled * clothHeat;
        gl_FragColor.rgb += vec3(.22, 1.65, .13) * ember + vec3(.02, .19, .015) * halo;
        #include <tonemapping_fragment>`)},s.customProgramCacheKey=()=>n?"engineer-three-tab-banner-v1":"attached-cloth-dissolve-v3";let r=s.clone();return r.color.set(n?"#2c5e86":"#98503a"),r.onBeforeCompile=s.onBeforeCompile,[s,r]}function Ac({engineer:i=!1}={}){let t={value:0},e={value:0},n=Df(),s=[],r=[],o=[];for(let I=0;I<=ke;I++){let F=I/ke,z=i?.94:1.13-.254*(1-Math.abs(F*2-1));for(let X=0;X<=Mn;X++){let j=X/Mn;if(s.push(new B(.009+j*z,.075-F*((i?.48:.326)-j*.044)-j*.03,0)),r.push(j,F),I===ke||X===Mn)continue;let q=I*Ce+X,Z=q+1,nt=q+Ce,rt=nt+1;o.push(q,nt,Z,Z,nt,rt),o.push(q+en,Z+en,nt+en,Z+en,rt+en,nt+en)}}let a=o.length,c=[];for(let I=0;I<Mn;I++)c.push(I);for(let I=0;I<ke;I++)c.push(I*Ce+Mn);for(let I=Mn;I>0;I--)c.push(ke*Ce+I);for(let I=ke;I>0;I--)c.push(I*Ce);for(let I=0;I<c.length;I++){let F=c[I],z=c[(I+1)%c.length];o.push(F,z,F+en,z,z+en,F+en)}let l=new ae,d=new Me(new Float32Array(en*6),3).setUsage(je);l.setAttribute("position",d),l.setAttribute("uv",new Gt([...r,...r],2)),l.setIndex(o),l.addGroup(0,a,0),l.addGroup(a,o.length-a,1),l.boundingSphere=new an(new B,1.46);let h=new se(l,Ey(t,e,n,i));h.name=i?"\u84DD\u8272\u4E09\u9F7F\u9524\u7EB9\u65D7":"\u5B88\u6751\u961F\u71D5\u5C3E\u65D7";let f=s.map(I=>I.clone()),u=s.map(I=>I.clone()),g=s.map(()=>new B),v=s.map(()=>new B),m=[],p=Array.from({length:ke+1},()=>new B),x=p.map(I=>I.clone()),_=p.map(I=>I.clone()),M=x.map(I=>I.clone()),b=x.map(I=>I.clone()),S=new B,y=new B,w=new B,L=new B,R=new B,A=new fe,E=!1;function C(I,F,z){m.push({a:I,b:F,strength:z,rest:s[I].distanceTo(s[F]),weightA:I%Ce===0?0:1,weightB:F%Ce===0?0:1})}for(let I=0;I<=ke;I++)for(let F=0;F<=Mn;F++){let z=I*Ce+F;F<Mn&&C(z,z+1,.97),I<ke&&F&&C(z,z+Ce,.96),I<ke&&F<Mn&&(C(z,z+Ce+1,.7),C(z+1,z+Ce,.7)),F<Mn-1&&C(z,z+2,.18),I<ke-1&&F&&C(z,z+Ce*2,.24)}function T(I,F){let z=F%Ce,X=Math.floor(F/Ce);return S.subVectors(I[F+ +(z<Mn)],I[F-+(z>0)]),y.subVectors(I[F-(X>0?Ce:0)],I[F+(X<ke?Ce:0)]),w.crossVectors(S,y).normalize()}function N(){for(let I=0;I<en;I++){let F=u[I],z=T(u,I);d.setXYZ(I,F.x+z.x*$s,F.y+z.y*$s,F.z+z.z*$s),d.setXYZ(I+en,F.x-z.x*$s,F.y-z.y*$s,F.z-z.z*$s)}d.needsUpdate=!0,l.computeVertexNormals()}function D({a:I,b:F,rest:z,strength:X,weightA:j,weightB:q},Z){R.subVectors(f[F],f[I]);let nt=R.length();if(nt<1e-6)return;let rt=(nt-z*Z)*X/(nt*(j+q));f[I].addScaledVector(R,rt*j),f[F].addScaledVector(R,-rt*q)}function k(I,F,z,X){for(let Z=0;Z<=ke;Z++)f[Z*Ce].lerpVectors(_[Z],p[Z],z),b[Z].lerpVectors(M[Z],x[Z],z);let j=Math.exp(-1.62*F),q=4.05+.51*Math.sin(I*.92);for(let Z=0;Z<en;Z++){if(Z%Ce===0)continue;let nt=f[Z],rt=g[Z],ct=Z%Ce/Mn,_t=Math.floor(Z/Ce)/ke,Xt=Math.sin(I*5.65-ct*8.9+_t*.87),Pt=Math.sin(I*8.3-ct*13.6+_t*1.38);L.set(q+.2*Xt,.32+.28*Pt,-.46+.99*Xt+.41*Pt).sub(rt);let Nt=T(f,Z),Ht=L.dot(Nt);v[Z].copy(nt),rt.multiplyScalar(j).addScaledVector(L,1.72*F).addScaledVector(Nt,Ht*Math.abs(Ht)*.41*F),rt.y-=1.85*F,nt.addScaledVector(rt,F)}for(let Z=0;Z<7;Z++){for(let nt=0;nt<=ke;nt++)f[nt*Ce+1].lerp(b[nt],.092);if(Z%2===0)for(let nt of m)D(nt,X);else for(let nt=m.length-1;nt>=0;nt--)D(m[nt],X)}for(let Z=0;Z<en;Z++)Z%Ce!==0&&g[Z].subVectors(f[Z],v[Z]).multiplyScalar(1/F).clampLength(0,8.5)}function H(I,F,z){for(let Z=0;Z<=ke;Z++)p[Z].copy(s[Z*Ce]).applyMatrix4(z),x[Z].copy(s[Z*Ce+1]).applyMatrix4(z);if(!E||p[0].distanceToSquared(_[0])>1.2){for(let Z=0;Z<en;Z++)f[Z].copy(s[Z]).applyMatrix4(z),g[Z].set(0,0,0);for(let Z=0;Z<=ke;Z++)_[Z].copy(p[Z]),M[Z].copy(x[Z]);E=!0}let X=Math.min(Math.max(F,0),.1),j=Math.ceil(X*120),q=Math.hypot(z.elements[0],z.elements[1],z.elements[2]);for(let Z=1;Z<=j;Z++)k(I-X+X*Z/j,X/j,Z/j,q);for(let Z=0;Z<=ke;Z++)_[Z].copy(p[Z]),M[Z].copy(x[Z]);A.copy(z).invert();for(let Z=0;Z<en;Z++)u[Z].copy(f[Z]).applyMatrix4(A);N()}return N(),{mesh:h,animate:H,setBurn:(I,F=1)=>{t.value=I,e.value=F,n.setBurn(I)},reset:()=>{E=!1,t.value=0,e.value=0,n.setBurn(0)}}}var Nf="#b9beb0",Cy="#e0dfc7",Uf="#8e6a45";function Ff(i){let t=new Jt;if(t.name=["\u9570\u5200","\u9504\u5934","\u5E72\u8349\u53C9"][i],i===1?Oe(t,new Wn(.014,.018,.66,7),Uf,0,.115,0,1,1,1,!1):ve(t,Uf,0,.13,0,.028,.53,.028,!1),i===0){let e=new Xn().moveTo(0,.38).quadraticCurveTo(.27,.49,.23,.23).quadraticCurveTo(.19,.4,.005,.335),n=new Ls(e,{depth:.018,bevelEnabled:!1,curveSegments:12});Oe(t,n,Nf,0,0,-.009,1,1,1,!1),ve(t,"#b3a17a",0,.335,0,.052,.055,.043,!1)}else if(i===1){let n=function(s,r,o,a){let c=f=>.09+(f+.045)/.25*.015,l=new Xn().moveTo(-c(s),s).lineTo(c(s),s).lineTo(c(r),r).lineTo(-c(r),r).closePath(),d=new Ls(l,{depth:.012,bevelEnabled:!0,bevelThickness:.0015,bevelSize:.0015,bevelSegments:1,steps:1});d.rotateX(Math.PI/2-.12);let h=Oe(t,d,o,0,.477,0,1,1,1,!1);h.name=a},e=Oe(t,new Wn(.027,.024,.065,6),"#46534e",0,.447,0,1,1,1,!1);e.name="\u9504\u5934\u94C1\u7B8D",n(-.045,.175,"#53605b","\u5BBD\u8584\u94C1\u9504\u677F"),n(.175,.205,"#859084","\u9504\u677F\u5203\u53E3")}else{ve(t,Nf,0,.37,0,.22,.035,.032,!1);for(let e of[-.09,0,.09])Oe(t,new wr(.017,.18,6),Cy,e,.455,0,1,1,1,!1)}return t.position.set(.125,i===1?.225:.19,.065),t.rotation.set(.22,0,-.22),t}function Of(){let i=new Jt;return i.name="\u5DE5\u7A0B\u5E08\u5C0F\u9524",Oe(i,new Wn(.012,.014,.27,7),"#9b764b",0,.105,0,1,1,1,!1),ve(i,"#78877e",0,.245,0,.17,.072,.07,!1),ve(i,"#9ba69a",-.08,.245,0,.019,.077,.074,!1),ve(i,"#63746b",.08,.245,0,.017,.07,.068,!1),i.position.set(.125,.2,.065),i.rotation.set(.22,0,-.22),i}var Kt={squadSize:6,villagerHp:100,villagerDamage:26,villagerAttack:.82,villagerReach:.76,recoveryDelay:4.5,recoveryRate:4,replenishSeconds:2,indoorRecoveryRate:22,engineerSize:3,engineerHp:35,engineerDamage:5,engineerAttack:1.35,engineerReach:.72,engineerRecoveryDelay:3,engineerRecoveryRate:6,extinguishSeconds:3,enemyHp:42,enemyDamage:18,enemyAttack:1.18,enemyReach:.7,baseHp:300,doorHits:3,burnPerInvader:2.4,burnSpeedCap:10,victoryDelay:3,defeatDelay:4.8,waves:[{count:6,interval:1.6},{count:10,interval:1.05},{count:16,interval:.62}]};var Bf=[[0,0],[-.27,-.11],[.26,-.08],[-.29,.23],[-.01,.29],[.27,.25]],Ry=[12.8,13.5,12.1,14,12.6,13.2],Iy=[0,.08,.13,.19,.24,.31],Py=[0,.25,.34,.49,.62,.73].map(i=>i*Pe),Ly=[0,-.17,.19,-.21,.02,.23].map(i=>i*Pe),Dy=1.19,zf=2.83,Ny=Ec([[0,.043],[.084,.048],[.117,.065],[.127,.105],[.115,.211],[.088,.294],[.065,.329],[.049,.344],[0,.345]],18,22),kf=new Ai(.116,16,12),Uy=Ec([[0,-.05],[.117,-.05],[.151,-.043],[.145,-.032],[.113,-.006],[.077,.027],[.046,.051],[.027,.058],[0,.059]],20,22),Fy=Ec([[.131,-.009],[.149,-.009],[.158,-.004],[.16,.002],[.152,.009],[.134,.01],[.131,-.009]],20,13),Oy=new Ai(1,10,7);function Ec(i,t,e){let s=new $i(i.map(([r,o])=>new et(r,o))).getPoints(e);for(let r of s)r.x=Math.max(0,r.x);return new Ji(s,t)}function Vf(i){let t=[],e=[],n=0,s=0,r=new et,o=new et,a=new et;function c(d){t=d,n=0,e=t.map(()=>0);for(let h=t.length-2;h>=0;h--)e[h]=e[h+1]+t[h].distanceTo(t[h+1]);t.length?s>.1&&(o.subVectors(t[0],i).normalize(),s*=Tt.clamp(.72+r.dot(o)*.32,.45,1)):s=0}function l(d){for(;n<t.length&&i.distanceToSquared(t[n])<1e-10;)n++;if(n>=t.length)return!1;let h=t[n],f=i.distanceTo(h),u=f+e[n];o.subVectors(h,i).normalize();let g=Math.min(zf,Math.sqrt(14.5*u));if(n+1<t.length){a.subVectors(t[n+1],h).normalize();let p=zf-(1-o.dot(a))*.88;g=Math.min(g,Math.sqrt(p**2+13*f))}let v=s;s+=Tt.clamp(g-s,-9.2*d,7.5*d);let m=(v+s)*.5*d;for(;n<t.length&&m>0;){o.subVectors(t[n],i);let p=o.length();if(p>1e-5&&r.copy(o).multiplyScalar(1/p),m<p){i.addScaledVector(r,m);break}i.copy(t[n++]),m-=p}return n<t.length?!0:(s=0,!1)}return{setRoute:c,advance:l,pause:d=>{s=Math.max(0,s-d*9.2)}}}function Rh(i,{engineer:t=!1}={}){let e=new Jt;e.name=t?"\u5DE5\u7A0B\u5E08\u5C0F\u961F":"\u5B88\u6751\u961F";let n=t?{maxHp:Kt.engineerHp,damage:Kt.engineerDamage,attackInterval:Kt.engineerAttack,attackReach:Kt.engineerReach,recoveryDelay:Kt.engineerRecoveryDelay,recoveryRate:Kt.engineerRecoveryRate}:{maxHp:Kt.villagerHp,damage:Kt.villagerDamage,attackInterval:Kt.villagerAttack,attackReach:Kt.villagerReach,recoveryDelay:Kt.recoveryDelay,recoveryRate:Kt.recoveryRate},s=t?["#d47732","#e18a3d","#c96e31"]:["#3b5970","#426881","#41657d"],r=Bf.slice(0,t?Kt.engineerSize:Kt.squadSize).map((A,E)=>{let C=new Jt,T=new Jt;if(C.scale.setScalar(Dy),e.add(C),C.add(T),Oe(T,Ny,s[E%3],0,0,0,1,1,.87),Oe(T,kf,"#dfa978",0,.385,.012,.94,.93,.91),t){let I=Ec([[0,-.025],[.108,-.025],[.125,0],[.12,.045],[.08,.074],[0,.078]],14,14);Oe(T,I,"#f2edd9",0,.437,0),Oe(T,kf,"#dedbc8",0,.455,-.107,.28,.23,.24);for(let F of[-1,1]){let z=ve(T,"#e8e3cf",F*.024,.412,-.112,.029,.096,.019);z.rotation.z=F*.26}}else Oe(T,Uy,"#cda569",0,.49,0),Oe(T,Fy,"#e2c18a",0,.438,0);let N=[-1,1].map(I=>Oe(C,Oy,"#4f4942",I*.051,.03,.023,.046,.043,.062,!1));for(let I of[-1,1])ve(T,"#4d4035",I*.033,.383,.11,.016,.023,.012,!1);let D=t?Of():Ff(Math.floor(Math.random()*3));T.add(D);let k=new Jt;T.add(k);let H=new se(new Wn(.18,.18,.56,8));return H.visible=!1,H.position.y=.29,C.add(H),{unit:C,group:C,body:T,feet:N,weapon:D,stains:k,target:H,kind:"villager",team:t?"engineers":"militia",...n,p:new et,velocity:new et,detour:null,hp:n.maxHp,inside:!1,stowed:!1,ready:0,swing:-1,hit:!1,cooldown:E*.07,lastHurt:-100,recoil:0,combatFace:new et(0,1),moving:!1,combatHold:!1,canEngage:!1,battleStep:new et,lastFight:-100,working:!1,workTime:0,workProgress:0,gait:0,index:E,slot:E,stride:E*1.21}}),o=new Jt;o.position.set(.07,1.13,-.05),o.rotation.y=.22,r[0].unit.add(o),ve(o,"#b8996d",0,-.51,0,.032,1.19,.032);let a=Ac({engineer:t});o.add(a.mesh);let c=[],l=new et(0,1),d=new et,h=new et,f=new et,u=new et,g=new et,v=new et,m=new et,p=new et,x=new et,_=0;function M(A,E){let[C,T]=Bf[E];return d.set(A.x+(C*l.y-T*l.x)*Pe,A.y-(C*l.x+T*l.y)*Pe)}function b(A,E,C,T){let{unit:N,body:D,feet:k,p:H}=A;if(!A.working&&A.ready>.1&&!A.moving&&(T=A.combatFace),T.lengthSq()>1e-5){let q=Math.atan2(T.x,T.y),Z=Math.atan2(Math.sin(q-N.rotation.y),Math.cos(q-N.rotation.y));N.rotation.y+=Z*(1-Math.exp(-C*13))}A.gait=Tt.damp(A.gait,Math.min(1,E/2.2),16,C),A.stride+=C*Ry[A.index]*Math.min(1.25,E*.52);let I=Math.sin(A.stride)*A.gait;D.position.y=(.5-Math.cos(A.stride*2)*.5)*.03*A.gait,D.rotation.z=I*.068,D.rotation.x=A.gait*.052,D.rotation.x+=A.ready*.075,D.position.z=-A.recoil*.17;let F=A.swing<0?0:Tt.smoothstep(A.swing,0,.24),z=A.swing<0?0:Tt.smoothstep(A.swing,.24,.38),X=A.swing<0?0:Tt.smoothstep(A.swing,.4,.68),j=F*-.85+z*2.05-X*1.2;if(A.weapon.rotation.x=.22+A.ready*.65+j,A.weapon.rotation.z=-.22-A.ready*.17+z*(1-X)*.3,A.stowed&&(A.weapon.rotation.x=1.25,A.weapon.rotation.z=-.05),A.working){let q=A.workTime%1,Z=Tt.smoothstep(q,.05,.44),nt=Tt.smoothstep(q,.44,.6),rt=Tt.smoothstep(q,.68,.98);A.weapon.rotation.x=.45-Z*1.2+nt*1.75-rt*.55,A.weapon.rotation.z=-.32+Math.sin(q*Math.PI)*.1,D.rotation.x+=nt*(1-rt)*.11}D.rotation.z+=Math.sin(Math.max(0,A.swing)*8)*.1*(1-X)*+(A.swing>=0),k[0].position.z=.023+I*.043,k[1].position.z=.023-I*.043,k[0].position.y=.03+Math.max(0,Math.cos(A.stride))*.029*A.gait,k[1].position.y=.03+Math.max(0,-Math.cos(A.stride))*.029*A.gait,N.position.set(H.x,pe(H.x,H.y),H.y)}function S(A){_=0,c.length=0,c.push({p:A.clone(),distance:0})}function y(A){S(A),a.reset(),l.set(.42,.91).normalize(),r.forEach((E,C)=>{E.hp=E.maxHp,E.inside=!1,E.stowed=!1,E.ready=0,E.swing=-1,E.hit=!1,E.cooldown=C*.07,E.lastHurt=-100,E.recoil=0,E.battleStep.set(0,0),E.lastFight=-100,E.unit.visible=!0,E.stains.clear(),E.p.copy(M(A,C)),E.unit.rotation.y=Math.atan2(l.x,l.y),E.stride=C*1.21,E.velocity.set(0,0),E.detour=null,E.gait=0,E.combatHold=!1,E.canEngage=!1,E.working=!1,E.workTime=0,E.workProgress=0,b(E,0,0,l)})}function w(A){let E=c.length-1;for(;E>1&&c[E-1].distance>A;)E--;let C=c[Math.max(0,E-1)],T=c[E];if(u.copy(C.p),h.set(l.y,-l.x),C===T)return;let N=Tt.clamp((A-C.distance)/(T.distance-C.distance),0,1);u.lerp(T.p,N);let D=c[Math.max(0,E-3)].p,k=c[Math.min(c.length-1,E+2)].p;h.set(k.y-D.y,D.x-k.x).normalize()}function L(A,E,C){_+=C;let T=r[0];if(T.hp<=0||T.inside)return!0;let N=0;for(let H of r)H.hp>0&&(H.slot=N++),H.moving=E&&!H.combatHold,H.stowed=!1;f.subVectors(A,T.p);let D=f.length();if(D>1e-5)for(l.copy(f).normalize(),c.push({p:A.clone(),distance:c.at(-1).distance+D});c.length>2&&c[1].distance<c.at(-1).distance-1.7;)c.shift();T.p.copy(A),b(T,C>0?D/C:0,C,l);let k=!E;for(let H=1;H<r.length;H++){let I=r[H];if(I.hp<=0||I.inside)continue;if(_<Iy[H]){k=!1;continue}if(I.combatHold)d.copy(I.p);else if(E){let X=c.at(-1).distance-Py[I.slot]*(1+.1*Math.sin(_*3.5+H));w(X),d.copy(u).addScaledVector(h,Ly[I.slot]+Math.sin(_*4.7+H*2)*.04);for(let j of r){if(j===I||j.hp<=0||j.inside)continue;v.subVectors(d,j.p);let q=v.length();q>0&&q<.25&&d.addScaledVector(v,(.25-q)*.39/q)}i.tileAt(d)||d.copy(u)}else M(A,I.slot).add(I.battleStep),i.clear(I.p,d)||M(A,I.slot);if(i.clear(I.p,d))I.detour=null,m.copy(d);else{let X=I.detour;(!X||I.p.distanceToSquared(X)<.02||!i.clear(I.p,X))&&(I.detour=i.route(I.p,d,.075,!1)?.[0]??null),m.copy(I.detour??I.p)}f.subVectors(m,I.p);let F=E?3.48+.16*Math.sin(_*4.4+H*1.77):1.66+H*.11;if(p.copy(f).setLength(Math.min(F,f.length()*(E?9.4:6.2))),x.subVectors(p,I.velocity).clampLength(0,C*(E?12.8:10.6)),I.velocity.add(x),g.copy(I.p).addScaledVector(I.velocity,C),i.clear(I.p,g)||(I.velocity.copy(p),g.copy(I.p).addScaledVector(I.velocity,C),i.clear(I.p,g)||(I.velocity.set(0,0),g.copy(I.p))),!E&&I.ready>.2)for(let X of r){if(X===I||X.hp<=0||X.inside)continue;v.subVectors(g,X.p);let j=v.length();if(j>1e-4&&j<.29){let q=X.p.clone().addScaledVector(v,.29/j);i.clear(I.p,q)&&g.copy(q)}}let z=C>0?I.p.distanceTo(g)/C:0;I.p.copy(g),b(I,z,C,z>.11?I.velocity:l),(I.p.distanceToSquared(d)>.014**2||I.gait>.028)&&(k=!1)}return k&&T.gait<=.028}function R(A,E){o.visible=r[0].hp>0&&!r[0].inside&&!r[0].stowed,o.updateWorldMatrix(!0,!1),a.animate(A,E,o.matrixWorld)}return{group:e,members:r,reset:y,beginOrder:S,follow:L,animateFlag:R,poseMember:b,standPoint(A,E,C){return C.copy(M(A,E))},get targets(){let A=r.filter(E=>E.hp>0&&!E.inside&&E.unit.visible).map(E=>E.target);return r[0].hp>0&&!r[0].inside&&r[0].unit.visible&&o.visible&&A.push(a.mesh),A},faceThreat(A){l.lerp(A,.18).normalize()}}}var By=20,Ph=.97,Lc=[[.16,.22],[.24,.31],[.43,.32],[.66,.29],[.83,.24],[.94,.15],[.99,.055],[1,0]],Lh=new Ji(Lc.map(([i,t])=>new et(t,i)),By),Gf=[],Cc=new vt,zy=new vt("#153e30"),ky=new vt("#46714a"),Rc=Lh.attributes.position;for(let i=0;i<Rc.count;i++){let t=Rc.getY(i),e=.055*Math.sin(Math.atan2(Rc.getX(i),Rc.getZ(i))*5+t*4);Cc.copy(zy).lerp(ky,Tt.clamp(t*.86+e,0,1)),Gf.push(Cc.r,Cc.g,Cc.b)}Lh.setAttribute("color",new Gt(Gf,3));var Vy=[0,.47,.19,.71,.39,.9],jn=2/3,uo=13,fo=16,Cn=8,Qn=new B,rs=new B,Ic=new B,dn=new B,Ks=new B,Hf=new B,Wf=new B,os=new B,Pc=new B;function Zs(i,t,e,n=0,s=0){let r=[],o=[];for(let d=0;d<=4;d++)for(let h=0;h<=32;h++){let f=h*Math.PI*2/32,u=d/4,g=Math.cos(f)*i*u+n,v=Math.sin(f)*t*u+s,m=.64+v,p=Lc.findIndex(([A])=>A>=m),[x,_]=Lc[p-1],[M,b]=Lc[p],S=Tt.lerp(_,b,(m-x)/(M-x)),y=Math.sqrt(Math.max(1e-4,S**2-g**2))*Ph;if(r.push(g,v,y+e),d===4||h===32)continue;let w=d*33+h,L=w+1,R=w+32+1;o.push(w,R,L,L,R,R+1)}let l=new ae;return l.setAttribute("position",new Gt(r,3)),l.setIndex(o),l.computeVertexNormals(),l}var Js={lid:Zs(.268,.177,.008),white:Zs(.241,.147,.015),iris:Zs(.106,.119,.024,.008,-.003),pupil:Zs(.046,.08,.03,.008,-.003),glint:Zs(.025,.027,.035,-.022,.037),smallGlint:Zs(.009,.011,.035,.054,-.04)};function Xf(i){let t={value:new we(i.normal.x,i.normal.y,i.normal.z,i.constant)};function e(n){let s=new Ae({...n,clippingPlanes:[i],clipShadows:!0});return s.onBeforeCompile=r=>{r.uniforms.riftPlane=t,r.vertexShader=`varying vec3 enemyWorld;
`+r.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
 enemyWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;`),r.fragmentShader=`varying vec3 enemyWorld; uniform vec4 riftPlane;
`+r.fragmentShader.replace("#include <tonemapping_fragment>",`float contact = 1.0 - smoothstep(0.006, 0.062, dot(vec4(enemyWorld, 1.0), riftPlane));
         gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.12, 1.7, 0.27), contact);
         #include <tonemapping_fragment>`)},s.customProgramCacheKey=()=>"rift-contact-v1",s}return{skin:e({color:"#ffffff",vertexColors:!0}),limb:e({color:"#28543b"}),lid:e({color:"#214333"}),white:e({color:"#d5dfb1"}),iris:e({color:"#779444"}),pupil:e({color:"#152c24"}),glint:e({color:"#f1f4d3",emissive:"#617a39",emissiveIntensity:.25})}}function Gy(){let i=new ae;i.setAttribute("position",new Me(new Float32Array(fo*Cn*3),3).setUsage(je)),i.setAttribute("normal",new Me(new Float32Array(fo*Cn*3),3).setUsage(je));let t=[];for(let e=0;e<fo-1;e++)for(let n=0;n<Cn;n++){let s=e*Cn+n,r=e*Cn+(n+1)%Cn;t.push(s,r,s+Cn,r,r+Cn,s+Cn)}return i.setIndex(t),i.boundingSphere=new an(new B(0,.25,0),1.5),i}function Ih(i,t,e,n){let s=1-t;i.copy(dn).multiplyScalar(s**3).addScaledVector(Ks,3*s*s*t).addScaledVector(Hf,3*s*t*t).addScaledVector(Wf,t**3);let r=Math.sin(t*7.2-e)*Math.sin(t*Math.PI)*.045*jn;return i.x+=Math.cos(n)*r,i.z-=Math.sin(n)*r,i}function qf(i,t){let e=new Jt,n=new Jt;e.name="\u72EC\u773C\u89E6\u624B\u602A",e.add(n);function s(p,x,_){let M=new se(x,_);return M.castShadow=!0,p.add(M),M}let r=new se(Lh,i.skin);r.scale.z=Ph,r.castShadow=!0,n.add(r);let o=s(n,Js.lid,i.lid);o.position.y=.64;let a=new Jt;a.position.y=.64,n.add(a),s(a,Js.white,i.white);let c=new Jt;a.add(c),s(c,Js.iris,i.iris),s(c,Js.pupil,i.pupil),s(c,Js.glint,i.glint),s(c,Js.smallGlint,i.glint);let l=new Jt;n.add(l);let d=Vy.map((p,x)=>{let _=(x+.5)*Math.PI/3,M=Gy(),b=new se(M,i.limb);return b.castShadow=!0,e.add(b),{phase:p,turn:_,mesh:b,planted:new B,takeoff:new B,landing:new B,tip:new B,swinging:!1}}),h=.72+Math.sin(t*5.17)*.025;e.scale.setScalar(h);let f=0,u=0;function g(p,x,_){let M=e.rotation.y,b=Math.sin(p.turn)*(.22+(.44-.22)*jn),S=Math.cos(p.turn)*(.2+(.38-.2)*jn)+x*jn,y=e.position.x+(b*Math.cos(M)+S*Math.sin(M))*h,w=e.position.z+(S*Math.cos(M)-b*Math.sin(M))*h;return _.set(y,pe(y,w)+.018,w)}function v(p,x,_){e.scale.setScalar(h),e.position.set(p,pe(p,x),x),e.rotation.y=_,f=0,u=0;for(let M of d)g(M,0,M.planted),M.takeoff.copy(M.planted),M.landing.copy(M.planted),M.swinging=!1;m(0,0)}function m(p,x,_=-1){f+=p,u+=x;let M=f/(.58*jn),b=M*Math.PI*2+t*1.7;n.position.y=.013+Math.sin(b)*.012,n.scale.set(1+Math.sin(b)*.025,1-Math.sin(b)*.036,1),n.rotation.set(.035+Math.cos(b)*.025,0,Math.sin(b)*.035);let S=_<0?0:Tt.smoothstep(_,0,.27)*(1-Tt.smoothstep(_,.43,.74)),y=_<0?0:Tt.smoothstep(_,.27,.4)*(1-Tt.smoothstep(_,.43,.74));n.rotation.x+=-S*.1+y*.19;let w=(u+t*.74)%4.7/4.7;a.scale.y=1-.94*Math.exp(-(((w-.93)/.023)**2)),c.position.x=.01*Math.sin(u*1.7+t);let L=e.rotation.y,R=Math.cos(L),A=Math.sin(L);for(let E of d){let C=(M+E.phase)%1,T=C>=.6;T&&!E.swinging&&(E.takeoff.copy(E.planted),g(E,.34,E.landing)),!T&&E.swinging&&E.planted.copy(E.landing),E.swinging=T;let N=Tt.clamp((C-.6)/.4,0,1),D=T?Math.sin(N*Math.PI)*.12*jn:0;E.tip.copy(E.planted),T&&E.tip.lerpVectors(E.takeoff,E.landing,Tt.smoothstep(N,0,1));let k=(E.tip.x-e.position.x)/h,H=(E.tip.z-e.position.z)/h,I=k*R-H*A,F=H*R+k*A,z=(E.tip.y-e.position.y)/h+D;(E===d[0]||E===d[5])&&(I=Tt.lerp(I,Math.sign(Math.sin(E.turn))*(.26-y*.08),S),F=Tt.lerp(F,.18+y*.67,S),z=Tt.lerp(z,.64-y*.43,S)),dn.set(Math.sin(E.turn)*.22,.215+n.position.y,Math.cos(E.turn)*.2),Ks.set(Math.sin(E.turn)*.64+Math.cos(E.turn)*.07,.14+D*.7,Math.cos(E.turn)*.57-Math.sin(E.turn)*.07),Ks.x=dn.x+(Ks.x-dn.x)*jn,Ks.z=dn.z+(Ks.z-dn.z)*jn,Hf.set(dn.x+(I-dn.x)*1.1-Math.cos(E.turn)*.025*jn,z+.01+D*.45,dn.z+(F-dn.z)*1.1+Math.sin(E.turn)*.025*jn),Wf.set(dn.x+(I-dn.x)*.98,z+.026,dn.z+(F-dn.z)*.98);let X=E.mesh.geometry.attributes.position,j=E.mesh.geometry.attributes.normal,q=b-E.phase*5;for(let Z=0;Z<fo;Z++){let nt=Math.min(1,Z/(uo-1));Ih(os,nt,q,E.turn),Ih(Pc,Math.min(1,nt+.01),q,E.turn),Z>=uo-1?(Ih(Pc,nt-.01,q,E.turn),Qn.subVectors(os,Pc)):Qn.subVectors(Pc,os),Qn.normalize(),rs.set(Qn.z,0,-Qn.x).normalize(),rs.lengthSq()<.001&&rs.set(1,0,0),Ic.crossVectors(Qn,rs).normalize();let rt=Math.max(0,Z-uo+1)/(fo-uo)*Math.PI/2,ct=Z<uo?.069*(1-nt)+.014:.014*Math.cos(rt);os.addScaledVector(Qn,.014*Math.sin(rt));for(let _t=0;_t<Cn;_t++){let Xt=_t*Math.PI*2/Cn,Pt=rs.x*Math.cos(Xt)+Ic.x*Math.sin(Xt),Nt=rs.y*Math.cos(Xt)+Ic.y*Math.sin(Xt),Ht=rs.z*Math.cos(Xt)+Ic.z*Math.sin(Xt),dt=Z*Cn+_t;X.setXYZ(dt,os.x+Pt*ct,os.y+Nt*ct,os.z+Ht*ct),j.setXYZ(dt,Pt*Math.cos(rt)+Qn.x*Math.sin(rt),Nt*Math.cos(rt)+Qn.y*Math.sin(rt),Ht*Math.cos(rt)+Qn.z*Math.sin(rt))}}X.needsUpdate=!0,j.needsUpdate=!0}}return{group:e,body:n,stains:l,kind:"enemy",bodyDepth:Ph,reset:v,pose:m,radius:.65*h}}function Yf(i,t){let e=new Jt;e.name="\u7EFF\u8272\u7A7A\u95F4\u88C2\u7F1D",e.position.copy(i),e.rotation.y=Math.atan2(t.x,t.z);let n={value:0},s={value:0},r=new Tn({transparent:!0,depthWrite:!1,side:ln,forceSinglePass:!0,uniforms:{time:n,aperture:s},vertexShader:`
      varying vec2 riftUv;
      void main() {
        riftUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform float time;
      uniform float aperture;
      varying vec2 riftUv;
      float hash(float n) {
        return fract(sin(n * 127.1) * 43758.5453);
      }
      float noise(float x) {
        return mix(hash(floor(x)), hash(floor(x) + 1.0), fract(x));
      }
      float tornEdge(float y, float side) {
        float base = .26 + noise(y * 6.0 + side * 17.0) * .10;
        float peaks = pow(noise(y * 12.0 + time * 2.4 + side * 31.0), 3.0) * .20;
        float teeth = pow(max(0.0, sin(y * 19.0 + side * 4.0 + sin(time * 1.7) * .8)), 14.0) * .15;
        return base + peaks + teeth + noise(y * 32.0 + time * 7.0 + side * 7.0) * .025;
      }
      float stars(vec2 p) {
        float light = 0.0;
        for (int i = 0; i < 28; i++) {
          float id = float(i) + 1.0;
          float seed = hash(id * 41.0);
          float phase = seed * 6.28318;
          vec2 center = vec2((hash(id * 79.0) - .5) * .72, (hash(id * 113.0) - .5) * 1.92);
          center += vec2(sin(time * .45 + phase), cos(time * .36 + phase * 1.7)) * vec2(.025, .045);
          vec2 q = p - center;
          float radius = .006 + seed * .005;
          float point = exp(-dot(q, q) / (radius * radius));
          float cross = exp(-abs(q.x) / (radius * .24) - abs(q.y) / (radius * 3.3))
            + exp(-abs(q.y) / (radius * .24) - abs(q.x) / (radius * 3.3));
          float twinkle = .30 + .70 * pow(.5 + .5 * sin(time * (2.5 + seed * 4.5) + phase), 3.0);
          light += (point * .8 + cross * step(.72, seed)) * twinkle;
        }
        return light;
      }
      void main() {
        vec2 p = (riftUv - .5) * 2.8;
        float taper = pow(max(0.0, 1.0 - abs(p.y) / 1.06), .58);
        float left = -tornEdge(p.y, 1.0) * taper * aperture;
        float right = tornEdge(p.y, 2.0) * taper * aperture;
        float distance = max(max(p.x - right, left - p.x), abs(p.y) - 1.06);
        float edge = 1.0 - smoothstep(.009, .009 + max(.008, fwidth(distance)), abs(distance));
        float halo = exp(-abs(distance) * 22.0) * .50 + exp(-abs(distance) * 9.0) * .09;
        float inside = 1.0 - smoothstep(-.018, .0, distance);
        vec3 glow = vec3(.05, 1.0, .20);
        vec3 voidColor = vec3(.004, .016, .011);
        vec3 color = mix(glow * .22, voidColor, inside);
        color += vec3(.52, 1.0, .68) * edge * 1.9 + glow * halo * .5;
        color += vec3(.42, 1.0, .66) * stars(p) * inside * smoothstep(.018, .085, -distance);
        float alpha = max(inside * .97, max(edge, halo));
        alpha *= smoothstep(.0, .018, aperture);
        if (alpha < .008) discard;
        gl_FragColor = vec4(color, alpha);
        #include <colorspace_fragment>
      }
    `}),o=new se(new Ki(2.8,2.8),r);o.position.y=1.06,e.add(o);let a=new $e({color:"#7dffa0",transparent:!0,depthWrite:!1}),c=new cn(new Nr(.028),a,18);c.frustumCulled=!1,e.add(c);let l=new Te;function d(h,f,u){n.value=h,s.value=Math.max(f,u*.026),e.visible=u>.001,o.scale.y=u,o.position.y=1.06*u,a.opacity=Math.min(1,f*1.6);for(let g=0;g<c.count;g++){let v=(h*(.23+g*.003)+g*.618)%1,m=g%2?1:-1,p=.1+v*2.1,x=Math.sin(v*Math.PI)**.68;l.position.set(m*(.35*x*f+.1*Math.sin(v*Math.PI)),p*u,Math.sin(g*2.39+h)*.09),l.rotation.set(h+g,g*1.3,h*.8),l.scale.setScalar(Math.sin(v*Math.PI)*(.55+g%3*.32)*f),l.updateMatrix(),c.setMatrixAt(g,l.matrix)}c.instanceMatrix.needsUpdate=!0}return d(0,0,0),{group:e,update:d}}var Hy=[Ch.slice().reverse().filter(i=>i.z>=-6.65),Ch.filter(i=>i.z<=8.7)],Wy=Hy.map((i,t)=>{let e=[0];for(let n=1;n<i.length;n++)e.push(e[n-1]+Math.hypot(i[n].x-i[n-1].x,i[n].z-i[n-1].z));return{road:i,distances:e,sign:t?-1:1}});function Dc(i,t,e,n=0){let{road:s,distances:r,sign:o}=Wy[i],a=0,c=s.length-1;for(;c-a>1;){let u=a+c>>1;r[u]>t?c=u:a=u}let l=s[a],d=s[c],h=Tt.clamp((t-r[a])/(r[c]-r[a]),0,1);e.x=Tt.lerp(l.x,d.x,h),e.z=Tt.lerp(l.z,d.z,h),e.dx=Tt.lerp(l.dz,d.dz,h)*o,e.dz=-Tt.lerp(l.dx,d.dx,h)*o;let f=Math.hypot(e.dx,e.dz);return e.dx/=f,e.dz/=f,t<0&&(e.x+=e.dx*t,e.z+=e.dz*t),e.x+=e.dz*n,e.z-=e.dx*n,e}function $f(){let i=new Jt;i.name="\u6751\u9053\u5165\u4FB5\u6CE2\u6B21";let t={},e=[0,1].map(u=>{Dc(u,0,t);let g=new B(t.x,pe(t.x,t.z),t.z),v=new B(t.dx,0,t.dz),m=new gn().setFromNormalAndCoplanarPoint(v,g),p=Yf(g,v);return i.add(p.group),{rift:p,origin:g,paints:Xf(m),used:!1}}),n=Array.from({length:24},(u,g)=>{let v=+(g>=12),m=qf(e[v].paints,g);return i.add(m.group),{...m,side:v,index:g,active:!1,inside:!1,hp:Kt.enemyHp,p:new et,roadDistance:-.76,mode:"road",route:[],routeIndex:0,velocity:new et,age:0,swing:-1,hit:!1,target:null,cooldown:.4,repathTimer:0,speed:1.65+.17*Math.sin(g*2.3),lane:Math.sin(g*2.77)*.05}}),s={wave:1,waves:Kt.waves.length,total:Kt.waves[0].count,emitted:0,active:0,killed:0,phase:"opening",countdown:0,complete:!1},r=0,o=5.5,a=1/0,c=0;function l(){Object.assign(s,{wave:1,total:Kt.waves[0].count,emitted:0,active:0,killed:0,phase:"opening",countdown:0,complete:!1}),r=0,o=5.5,a=1/0,c=0;for(let u of n)u.active=!1,u.inside=!1,u.consumed=!1,u.group.visible=!1,u.stains.clear();e.forEach(u=>{u.used=!1,u.rift.update(0,0,0)})}function d(u){u.active&&(u.active=!1,u.hp=0,u.group.visible=!1,s.killed++)}function h(u){let g=n.find(v=>!v.active&&v.side===u);return!g||(Dc(u,-.76,t,g.lane),n.some(v=>v.active&&!v.inside&&Math.hypot(v.p.x-t.x,v.p.y-t.z)<.94))?!1:(Object.assign(g,{active:!0,inside:!1,consumed:!1,hp:Kt.enemyHp,mode:"road",roadDistance:-.76,routeIndex:0,age:0,swing:-1,hit:!1,target:null,strikeTarget:null,lastAttacker:null,stun:0,repathTimer:0,cooldown:.5}),g.route.length=0,g.velocity.set(0,0),g.p.set(t.x,t.z),g.reset(t.x,t.z,Math.atan2(t.dx,t.dz)),g.stains.clear(),g.group.visible=!0,e[u].used=!0,s.emitted++,s.active++,o=r+Kt.waves[s.wave-1].interval,s.emitted===s.total&&(a=r+1.75),!0)}function f(u){if(s.complete)return;if(r+=u,s.active=n.filter(x=>x.active).length,s.emitted<s.total&&r>=o){let x=s.wave===3?s.emitted%2:0;h(x)}let g=Tt.smoothstep(r,.28,1.4),v=Tt.smoothstep(r-a,0,.72),m=g*(1-v)*(1+.025*Math.sin(r*3.4)),p=Tt.smoothstep(r,.03,.44)*(1-Tt.smoothstep(r-a,.4,.95));if(e.forEach((x,_)=>{let M=_===0||s.wave===3;x.rift.update(r,M?m:0,M?p:0)}),s.phase=r<5.5?"opening":r<a?"spawning":r<a+.95?"closing":s.active?"marching":"waiting",s.countdown=s.phase==="opening"?Math.max(0,Math.ceil(5.5-r)):0,s.phase==="waiting"){if(s.wave===Kt.waves.length){s.complete=!0,s.phase="complete";return}c+=u,s.countdown=Math.max(0,Math.ceil(8-c)),c>=8&&(s.wave++,s.total=Kt.waves[s.wave-1].count,s.emitted=0,r=0,o=5.5,a=1/0,c=0)}}return l(),{group:i,state:s,actors:n,update:f,reset:l,kill:d}}var Uc=class extends se{constructor(t,e,n=!1,s=!1,r=1e4){let o=new ae;super(o,e),this.isMarchingCubes=!0;let a=this,c=new Float32Array(36),l=new Float32Array(36),d=new Float32Array(36);this.enableUvs=n,this.enableColors=s,this.init=function(x){this.resolution=x,this.isolation=80,this.size=x,this.size2=this.size*this.size,this.size3=this.size2*this.size,this.halfsize=this.size/2,this.delta=2/this.size,this.yd=this.size,this.zd=this.size2,this.field=new Float32Array(this.size3),this.normal_cache=new Float32Array(this.size3*3),this.palette=new Float32Array(this.size3*3),this.count=0;let _=r*3;this.positionArray=new Float32Array(_*3);let M=new Me(this.positionArray,3);M.setUsage(je),o.setAttribute("position",M),this.normalArray=new Float32Array(_*3);let b=new Me(this.normalArray,3);if(b.setUsage(je),o.setAttribute("normal",b),this.enableUvs){this.uvArray=new Float32Array(_*2);let S=new Me(this.uvArray,2);S.setUsage(je),o.setAttribute("uv",S)}if(this.enableColors){this.colorArray=new Float32Array(_*3);let S=new Me(this.colorArray,3);S.setUsage(je),o.setAttribute("color",S)}o.boundingSphere=new an(new B,1)};function h(x,_,M){return x+(_-x)*M}function f(x,_,M,b,S,y,w,L,R,A){let E=(M-w)/(L-w),C=a.normal_cache;c[_+0]=b+E*a.delta,c[_+1]=S,c[_+2]=y,l[_+0]=h(C[x+0],C[x+3],E),l[_+1]=h(C[x+1],C[x+4],E),l[_+2]=h(C[x+2],C[x+5],E),d[_+0]=h(a.palette[R*3+0],a.palette[A*3+0],E),d[_+1]=h(a.palette[R*3+1],a.palette[A*3+1],E),d[_+2]=h(a.palette[R*3+2],a.palette[A*3+2],E)}function u(x,_,M,b,S,y,w,L,R,A){let E=(M-w)/(L-w),C=a.normal_cache;c[_+0]=b,c[_+1]=S+E*a.delta,c[_+2]=y;let T=x+a.yd*3;l[_+0]=h(C[x+0],C[T+0],E),l[_+1]=h(C[x+1],C[T+1],E),l[_+2]=h(C[x+2],C[T+2],E),d[_+0]=h(a.palette[R*3+0],a.palette[A*3+0],E),d[_+1]=h(a.palette[R*3+1],a.palette[A*3+1],E),d[_+2]=h(a.palette[R*3+2],a.palette[A*3+2],E)}function g(x,_,M,b,S,y,w,L,R,A){let E=(M-w)/(L-w),C=a.normal_cache;c[_+0]=b,c[_+1]=S,c[_+2]=y+E*a.delta;let T=x+a.zd*3;l[_+0]=h(C[x+0],C[T+0],E),l[_+1]=h(C[x+1],C[T+1],E),l[_+2]=h(C[x+2],C[T+2],E),d[_+0]=h(a.palette[R*3+0],a.palette[A*3+0],E),d[_+1]=h(a.palette[R*3+1],a.palette[A*3+1],E),d[_+2]=h(a.palette[R*3+2],a.palette[A*3+2],E)}function v(x){let _=x*3;a.normal_cache[_]===0&&(a.normal_cache[_+0]=a.field[x-1]-a.field[x+1],a.normal_cache[_+1]=a.field[x-a.yd]-a.field[x+a.yd],a.normal_cache[_+2]=a.field[x-a.zd]-a.field[x+a.zd])}function m(x,_,M,b,S){let y=b+1,w=b+a.yd,L=b+a.zd,R=y+a.yd,A=y+a.zd,E=b+a.yd+a.zd,C=y+a.yd+a.zd,T=0,N=a.field[b],D=a.field[y],k=a.field[w],H=a.field[R],I=a.field[L],F=a.field[A],z=a.field[E],X=a.field[C];N<S&&(T|=1),D<S&&(T|=2),k<S&&(T|=8),H<S&&(T|=4),I<S&&(T|=16),F<S&&(T|=32),z<S&&(T|=128),X<S&&(T|=64);let j=Xy[T];if(j===0)return 0;let q=a.delta,Z=x+q,nt=_+q,rt=M+q;j&1&&(v(b),v(y),f(b*3,0,S,x,_,M,N,D,b,y)),j&2&&(v(y),v(R),u(y*3,3,S,Z,_,M,D,H,y,R)),j&4&&(v(w),v(R),f(w*3,6,S,x,nt,M,k,H,w,R)),j&8&&(v(b),v(w),u(b*3,9,S,x,_,M,N,k,b,w)),j&16&&(v(L),v(A),f(L*3,12,S,x,_,rt,I,F,L,A)),j&32&&(v(A),v(C),u(A*3,15,S,Z,_,rt,F,X,A,C)),j&64&&(v(E),v(C),f(E*3,18,S,x,nt,rt,z,X,E,C)),j&128&&(v(L),v(E),u(L*3,21,S,x,_,rt,I,z,L,E)),j&256&&(v(b),v(L),g(b*3,24,S,x,_,M,N,I,b,L)),j&512&&(v(y),v(A),g(y*3,27,S,Z,_,M,D,F,y,A)),j&1024&&(v(R),v(C),g(R*3,30,S,Z,nt,M,H,X,R,C)),j&2048&&(v(w),v(E),g(w*3,33,S,x,nt,M,k,z,w,E)),T<<=4;let ct,_t,Xt,Pt=0,Nt=0;for(;Nc[T+Nt]!=-1;)ct=T+Nt,_t=ct+1,Xt=ct+2,p(c,l,d,3*Nc[ct],3*Nc[_t],3*Nc[Xt]),Nt+=3,Pt++;return Pt}function p(x,_,M,b,S,y){let w=a.count*3;if(a.positionArray[w+0]=x[b],a.positionArray[w+1]=x[b+1],a.positionArray[w+2]=x[b+2],a.positionArray[w+3]=x[S],a.positionArray[w+4]=x[S+1],a.positionArray[w+5]=x[S+2],a.positionArray[w+6]=x[y],a.positionArray[w+7]=x[y+1],a.positionArray[w+8]=x[y+2],a.material.flatShading===!0){let L=(_[b+0]+_[S+0]+_[y+0])/3,R=(_[b+1]+_[S+1]+_[y+1])/3,A=(_[b+2]+_[S+2]+_[y+2])/3;a.normalArray[w+0]=L,a.normalArray[w+1]=R,a.normalArray[w+2]=A,a.normalArray[w+3]=L,a.normalArray[w+4]=R,a.normalArray[w+5]=A,a.normalArray[w+6]=L,a.normalArray[w+7]=R,a.normalArray[w+8]=A}else a.normalArray[w+0]=_[b+0],a.normalArray[w+1]=_[b+1],a.normalArray[w+2]=_[b+2],a.normalArray[w+3]=_[S+0],a.normalArray[w+4]=_[S+1],a.normalArray[w+5]=_[S+2],a.normalArray[w+6]=_[y+0],a.normalArray[w+7]=_[y+1],a.normalArray[w+8]=_[y+2];if(a.enableUvs){let L=a.count*2;a.uvArray[L+0]=x[b+0],a.uvArray[L+1]=x[b+2],a.uvArray[L+2]=x[S+0],a.uvArray[L+3]=x[S+2],a.uvArray[L+4]=x[y+0],a.uvArray[L+5]=x[y+2]}a.enableColors&&(a.colorArray[w+0]=M[b+0],a.colorArray[w+1]=M[b+1],a.colorArray[w+2]=M[b+2],a.colorArray[w+3]=M[S+0],a.colorArray[w+4]=M[S+1],a.colorArray[w+5]=M[S+2],a.colorArray[w+6]=M[y+0],a.colorArray[w+7]=M[y+1],a.colorArray[w+8]=M[y+2]),a.count+=3}this.addBall=function(x,_,M,b,S,y){let w=Math.sign(b);b=Math.abs(b);let L=y!=null,R=new vt(x,_,M);if(L)try{R=y instanceof vt?y:Array.isArray(y)?new vt(Math.min(Math.abs(y[0]),1),Math.min(Math.abs(y[1]),1),Math.min(Math.abs(y[2]),1)):new vt(y)}catch{R=new vt(x,_,M)}let A=this.size*Math.sqrt(b/S),E=M*this.size,C=_*this.size,T=x*this.size,N=Math.floor(E-A);N<1&&(N=1);let D=Math.floor(E+A);D>this.size-1&&(D=this.size-1);let k=Math.floor(C-A);k<1&&(k=1);let H=Math.floor(C+A);H>this.size-1&&(H=this.size-1);let I=Math.floor(T-A);I<1&&(I=1);let F=Math.floor(T+A);F>this.size-1&&(F=this.size-1);let z,X,j,q,Z,nt,rt,ct,_t,Xt,Pt;for(j=N;j<D;j++)for(Z=this.size2*j,ct=j/this.size-M,_t=ct*ct,X=k;X<H;X++)for(q=Z+this.size*X,rt=X/this.size-_,Xt=rt*rt,z=I;z<F;z++)if(nt=z/this.size-x,Pt=b/(1e-6+nt*nt+Xt+_t)-S,Pt>0){this.field[q+z]+=Pt*w;let Nt=Math.sqrt((z-T)*(z-T)+(X-C)*(X-C)+(j-E)*(j-E))/A,Ht=1-Nt*Nt*Nt*(Nt*(Nt*6-15)+10);this.palette[(q+z)*3+0]+=R.r*Ht,this.palette[(q+z)*3+1]+=R.g*Ht,this.palette[(q+z)*3+2]+=R.b*Ht}},this.addPlaneX=function(x,_){let M=this.size,b=this.yd,S=this.zd,y=this.field,w,L,R,A,E,C,T,N=M*Math.sqrt(x/_);for(N>M&&(N=M),w=0;w<N;w++)if(C=w/M,A=C*C,E=x/(1e-4+A)-_,E>0)for(L=0;L<M;L++)for(T=w+L*b,R=0;R<M;R++)y[S*R+T]+=E},this.addPlaneY=function(x,_){let M=this.size,b=this.yd,S=this.zd,y=this.field,w,L,R,A,E,C,T,N,D=M*Math.sqrt(x/_);for(D>M&&(D=M),L=0;L<D;L++)if(C=L/M,A=C*C,E=x/(1e-4+A)-_,E>0)for(T=L*b,w=0;w<M;w++)for(N=T+w,R=0;R<M;R++)y[S*R+N]+=E},this.addPlaneZ=function(x,_){let M=this.size,b=this.yd,S=this.zd,y=this.field,w,L,R,A,E,C,T,N,D=M*Math.sqrt(x/_);for(D>M&&(D=M),R=0;R<D;R++)if(C=R/M,A=C*C,E=x/(1e-4+A)-_,E>0)for(T=S*R,L=0;L<M;L++)for(N=T+L*b,w=0;w<M;w++)y[N+w]+=E},this.setCell=function(x,_,M,b){let S=this.size2*M+this.size*_+x;this.field[S]=b},this.getCell=function(x,_,M){let b=this.size2*M+this.size*_+x;return this.field[b]},this.blur=function(x=1){let _=this.field,M=_.slice(),b=this.size,S=this.size2;for(let y=0;y<b;y++)for(let w=0;w<b;w++)for(let L=0;L<b;L++){let R=S*L+b*w+y,A=M[R],E=1;for(let C=-1;C<=1;C+=2){let T=C+y;if(!(T<0||T>=b))for(let N=-1;N<=1;N+=2){let D=N+w;if(!(D<0||D>=b))for(let k=-1;k<=1;k+=2){let H=k+L;if(H<0||H>=b)continue;let I=S*H+b*D+T,F=M[I];E++,A+=x*(F-A)/E}}}_[R]=A}},this.reset=function(){for(let x=0;x<this.size3;x++)this.normal_cache[x*3]=0,this.field[x]=0,this.palette[x*3]=this.palette[x*3+1]=this.palette[x*3+2]=0},this.update=function(){this.count=0;let x=this.size-2;for(let _=1;_<x;_++){let M=this.size2*_,b=(_-this.halfsize)/this.halfsize;for(let S=1;S<x;S++){let y=M+this.size*S,w=(S-this.halfsize)/this.halfsize;for(let L=1;L<x;L++){let R=(L-this.halfsize)/this.halfsize,A=y+L;m(R,w,b,A,this.isolation)}}}this.geometry.setDrawRange(0,this.count),o.getAttribute("position").needsUpdate=!0,o.getAttribute("normal").needsUpdate=!0,this.enableUvs&&(o.getAttribute("uv").needsUpdate=!0),this.enableColors&&(o.getAttribute("color").needsUpdate=!0),this.count/3>r&&console.warn("THREE.MarchingCubes: Geometry buffers too small for rendering. Please create an instance with a higher poly count.")},this.init(t)}},Xy=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),Nc=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);var Oc=["#98382b","#2d7845"],qy=new B(0,1,0),Bn=new B,Zf=new fe,Yy=new Ai(1,8,5),Fc=Oc.map(i=>new Ds({color:i,roughness:.62,metalness:0,clearcoat:.08,clearcoatRoughness:.58})),Ve=30,Jf=Ve*Ve*12;function Kf(i){let t=new Jt,e=new Jt;t.name="\u9ECF\u7A20\u878D\u5408\u8840\u6D46",e.name="\u8FDE\u7247\u5730\u8868\u8840\u6DB2",e.renderOrder=-1,i.add(t,e);let n=Array.from({length:10},()=>{let A=new Uc(28,Fc[0],!1,!1,2500);return A.isolation=36,A.visible=!1,A.frustumCulled=!1,t.add(A),{mesh:A,active:!1,age:0,nodes:[],alien:!1,heavy:!1}}),s=new cn(Yy,Fc[0].clone(),128);s.material.color.set("#ffffff"),s.name="\u65AD\u5F00\u7684\u7EC6\u5C0F\u8840\u6EF4",s.frustumCulled=!1;for(let A=0;A<s.count;A++)s.setColorAt(A,new vt(Oc[0]));t.add(s);let r=Array.from({length:s.count},()=>({active:!1,p:new B,v:new B,radius:0,alien:!1})),o=Array.from({length:24},()=>{let A=new ae;for(let N of["position","normal","color"])A.setAttribute(N,new Me(new Float32Array(Jf*3),3).setUsage(je));A.setDrawRange(0,0);let E=new Ds({vertexColors:!0,roughness:.68,clearcoat:.06,clearcoatRoughness:.6,metalness:0,transparent:!0,depthWrite:!1}),C={value:new et};A.setAttribute("liquidDepth",new Me(new Float32Array(Jf),1).setUsage(je)),E.onBeforeCompile=N=>{N.uniforms.liquidOrigin=C,N.vertexShader=`attribute float liquidDepth; varying float bloodDepth; varying vec2 bloodWorld;
`+N.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 bloodDepth = liquidDepth; bloodWorld = (modelMatrix * vec4(position, 1.0)).xz;`),N.fragmentShader=`varying float bloodDepth; varying vec2 bloodWorld; uniform vec2 liquidOrigin;
`+N.fragmentShader.replace("#include <tonemapping_fragment>",`
          vec2 flow = bloodWorld - liquidOrigin;
          float arc = abs(flow.y + .11 * sin(flow.x * 7.0) + .16);
          float sheen = (1.0 - smoothstep(.009, .026, arc)) * exp(-flow.x * flow.x * 14.0)
            * smoothstep(.05, .13, bloodDepth);
          gl_FragColor.rgb += vec3(.025, .032, .021) * sheen;
          #include <tonemapping_fragment>`)},E.customProgramCacheKey=()=>"wet-pooled-blood-v1";let T=new se(A,E);return T.visible=!1,T.frustumCulled=!1,T.receiveShadow=!0,e.add(T),{mesh:T,origin:C,active:!1,alien:!1,age:0,born:0,layer:0,sinkAt:0,goneAt:0,bounds:new Hr,refresh:0,dirty:!1,blobs:[]}}),a=new Te,c=new B,l=new B,d=new B,h=new vt,f=new vt,u=new vt,g=0,v=0,m=0,p=0;function x(){let A=o.filter(E=>E.active).sort((E,C)=>E.layer-C.layer);for(let E=0;E<A.length;E++){let C=A[E],T=Math.max(C.sinkAt,C.born+44);for(let N=0;N<E;N++)C.bounds.intersectsBox(A[N].bounds)&&(T=Math.max(T,A[N].goneAt+.08));C.sinkAt=T,C.goneAt=T+1.4}}function _(A,E,C,T){let N=0;for(let I of o)I.active&&I.alien!==T&&I.blobs.some(F=>Math.hypot(F.x-A,F.z-E)<F.r+C+.18)&&(N=Math.max(N,I.layer));let D=o.find(I=>I.active&&I.alien===T&&I.layer>=N&&m-I.born<=1.2&&I.blobs.some(F=>Math.hypot(F.x-A,F.z-E)<F.r+C+.28)&&I.blobs.every(F=>Math.abs(F.x-A)<2&&Math.abs(F.z-E)<2));D||(D=o.find(I=>!I.active)??o.reduce((I,F)=>F.layer<I.layer?F:I),D.blobs.length=0,D.alien=T,D.active=!0,D.mesh.visible=!0,D.born=m,D.age=0,D.layer=++p,D.mesh.renderOrder=D.layer,D.sinkAt=m+44,D.goneAt=D.sinkAt+1.4,D.mesh.position.y=0,D.bounds.makeEmpty(),D.mesh.geometry.setDrawRange(0,0),D.mesh.material.opacity=1,D.refresh=1/24);function k(I,F){let z=I.r*(I.start+(1-I.start)*Tt.smoothstep(I.age,0,.48));I.r=Math.min(.62,Math.sqrt(I.r**2+F)),I.start=Math.min(1,z/I.r),I.age=0}let H=D.blobs.find(I=>Math.hypot(I.x-A,I.z-E)<.1);if(H)k(H,C**2*.7);else if(D.blobs.length<22)D.blobs.push({x:A,z:E,r:C,start:.38,age:0,seed:Math.random()*7});else{let I=D.blobs.reduce((F,z)=>Math.hypot(F.x-A,F.z-E)<Math.hypot(z.x-A,z.z-E)?F:z);k(I,C**2*.35)}for(let I of D.blobs)D.bounds.min.x=Math.min(D.bounds.min.x,I.x-I.r-.15),D.bounds.min.y=Math.min(D.bounds.min.y,I.z-I.r-.15),D.bounds.max.x=Math.max(D.bounds.max.x,I.x+I.r+.15),D.bounds.max.y=Math.max(D.bounds.max.y,I.z+I.r+.15);D.dirty=!0,x()}function M(A,E){if(!A.stains)return;let C=A.kind==="enemy";A.group.updateWorldMatrix(!0,!1),Zf.copy(A.group.matrixWorld).invert(),Bn.set(-E.x,0,-E.y).transformDirection(Zf);let T=Math.atan2(Bn.x,Bn.z),N=[],D=[],k=C?.078:.047,H=C?.38:.21;for(let z=0;z<=3;z++)for(let X=0;X<=16;X++){let j=X/16*Math.PI*2,q=z/3*k*(1+.13*Math.sin(j*3+T)),Z=T+Math.cos(j)*q/(C?.3:.115);if(N.push(Math.sin(Z)*(C?.307:.116),H+Math.sin(j)*q,Math.cos(Z)*(C?.31*(A.bodyDepth??.79):.102)),z<3&&X<16){let nt=z*17+X;D.push(nt,nt+17,nt+1,nt+1,nt+17,nt+18)}}let I=new ae;I.setAttribute("position",new Gt(N,3)),I.setIndex(D),I.computeVertexNormals();let F=new se(I,Fc[Number(C)]);for(A.stains.add(F);A.stains.children.length>5;){let z=A.stains.children[0];A.stains.remove(z),z.geometry.dispose()}}function b(A,E,C=!1){let T=A.kind==="enemy",N=A.group.position,D=n[g++%n.length];D.active=!0,D.age=0,D.nodes.length=0,D.alien=T,D.heavy=C,D.mesh.material=Fc[Number(T)],D.mesh.visible=!0;let k=N.clone().add(new B(-E.x*(C?0:.17),T?.34:.28,-E.y*(C?0:.17)));D.nodes.push({p:k.clone(),v:new B(0,.65,0),r:C?.145:.087,active:!0,branch:-1,segment:0});let H=Math.atan2(-E.x,-E.y),I=C?4:3;for(let F=0;F<I;F++){let z=C?F/I*Math.PI*2+Math.random()*.75:H+(F-1)*.67,X=C?1.65+Math.random()*1.15:1.65+Math.random()*.65,j=C?1.55+Math.random()*.8:1.2+Math.random()*.65;for(let q=1;q<=2;q++){let Z=q/2;D.nodes.push({p:k.clone().add(new B(Math.sin(z)*.055*Z,.015*Z,Math.cos(z)*.055*Z)),v:new B(Math.sin(z)*X*Z,j*(.7+Z*.3),Math.cos(z)*X*Z),r:(C?.095:.062)*(q===1?1:.76),active:!0,branch:F,segment:q})}}for(let F=0;F<(C?10:5);F++){let z=v++%r.length,X=r[z],j=C?Math.random()*Math.PI*2:H+(Math.random()-.5)*1.9,q=1.7+Math.random()*1.2;X.p.copy(k),X.v.set(Math.sin(j)*q,1.2+Math.random()*1.8,Math.cos(j)*q),X.radius=.012+Math.random()*.013,X.active=!0,X.alien=T,s.setColorAt(z,new vt(Oc[Number(T)]))}C||M(A,E),S(D)}function S(A){let E=A.mesh;l.setScalar(1/0),d.setScalar(-1/0);let C=A.nodes.filter(H=>H.active);if(!C.length){A.active=!1,E.visible=!1;return}for(let H of C)l.min(H.p),d.max(H.p);c.addVectors(l,d).multiplyScalar(.5);let T=.68,N=Math.max(.4,(d.x-l.x)*.5+.3,(d.z-l.z)*.5+.3,(d.y-l.y)*.5/T+.3);E.position.copy(c),E.scale.set(N,N*T,N),E.reset();let D=(H,I)=>{let F=I/(N*2);E.addBall(.5+(H.x-c.x)/(N*2),.5+(H.y-c.y)/(N*2*T),.5+(H.z-c.z)/(N*2),F**2*(E.isolation+12),12)};for(let H of C)D(H.p,H.r);let k=1-Tt.smoothstep(A.age,.14,A.heavy?.42:.34);if(k>.04)for(let H of C){if(H.segment!==2)continue;let I=A.nodes.find(X=>X.branch===H.branch&&X.segment===1);if(!I?.active)continue;let F=I.p.distanceTo(H.p),z=Math.min(5,Math.ceil(F/.07));for(let X=1;X<z;X++)Bn.lerpVectors(I.p,H.p,X/z),D(Bn,Math.min(H.r,I.r)*(.45+k*.38))}E.update()}function y(A,E,C){let T=100;for(let N of A.blobs){let D=Math.atan2(C-N.z,E-N.x),k=N.r*(N.start+(1-N.start)*Tt.smoothstep(N.age,0,.48))*(1+.055*Math.sin(D*3+N.seed)+.035*Math.cos(D*5-N.seed)),H=Math.hypot(E-N.x,C-N.z)-k,I=Math.max(.13-Math.abs(T-H),0)/.13;T=Math.min(T,H)-I*I*.0325}return T}function w(A){let E=1/0,C=-1/0,T=1/0,N=-1/0;for(let rt of A.blobs)E=Math.min(E,rt.x-rt.r-.14),C=Math.max(C,rt.x+rt.r+.14),T=Math.min(T,rt.z-rt.r-.14),N=Math.max(N,rt.z+rt.r+.14);let D=[],k=(C-E)/Ve,H=(N-T)/Ve;for(let rt=0;rt<=Ve;rt++)for(let ct=0;ct<=Ve;ct++){let _t=E+ct*k,Xt=T+rt*H,Pt=y(A,_t,Xt),Nt=Tt.smoothstep(-Pt,0,.13);D.push({x:_t,z:Xt,d:Pt,y:pe(_t,Xt)+.009+Nt*.006,nx:0,ny:1,nz:0})}for(let rt=0;rt<=Ve;rt++)for(let ct=0;ct<=Ve;ct++){let _t=D[rt*(Ve+1)+ct],Xt=D[rt*(Ve+1)+Math.max(0,ct-1)],Pt=D[rt*(Ve+1)+Math.min(Ve,ct+1)],Nt=D[Math.max(0,rt-1)*(Ve+1)+ct],Ht=D[Math.min(Ve,rt+1)*(Ve+1)+ct];Bn.set((Xt.y-Pt.y)/(Pt.x-Xt.x),1,(Nt.y-Ht.y)/(Ht.z-Nt.z)).normalize(),_t.nx=Bn.x,_t.ny=Bn.y,_t.nz=Bn.z}A.origin.value.set((E+C)/2,(T+N)/2);let I=A.mesh.geometry,F=I.attributes.position,z=I.attributes.normal,X=I.attributes.color,j=I.attributes.liquidDepth;h.set(Oc[Number(A.alien)]),f.copy(h).multiplyScalar(.72);let q=0;function Z(rt){F.setXYZ(q,rt.x,rt.y,rt.z),z.setXYZ(q,rt.nx,rt.ny,rt.nz),j.setX(q,-rt.d),u.copy(f).lerp(h,.28+.72*Tt.smoothstep(-rt.d,0,.16)),X.setXYZ(q++,u.r,u.g,u.b)}function nt(rt,ct,_t){let Xt=[],Pt=[rt,ct,_t];for(let Nt=0;Nt<3;Nt++){let Ht=Pt[Nt],dt=Pt[(Nt+1)%3];if(Ht.d<=0&&Xt.push(Ht),Ht.d<=0!=dt.d<=0){let Mt=Ht.d/(Ht.d-dt.d),yt={d:0};for(let Rt of["x","y","z","nx","ny","nz"])yt[Rt]=Tt.lerp(Ht[Rt],dt[Rt],Mt);Xt.push(yt)}}for(let Nt=1;Nt<Xt.length-1;Nt++)Z(Xt[0]),Z(Xt[Nt]),Z(Xt[Nt+1])}for(let rt=0;rt<Ve;rt++)for(let ct=0;ct<Ve;ct++){let _t=rt*(Ve+1)+ct,Xt=_t+1,Pt=_t+Ve+1,Nt=Pt+1;nt(D[_t],D[Pt],D[Xt]),nt(D[Xt],D[Pt],D[Nt])}I.setDrawRange(0,q),F.needsUpdate=z.needsUpdate=X.needsUpdate=j.needsUpdate=!0}function L(A){let E=Math.max(1,Math.ceil(A*60)),C=A/E;for(let T=0;T<E;T++){m+=C;for(let N of n)if(N.active){N.age+=C;for(let D of N.nodes)D.active&&(D.v.multiplyScalar(Math.exp(-C*.65)),D.v.y-=9.5*C,D.p.addScaledVector(D.v,C),D.p.y-D.r<=pe(D.p.x,D.p.z)&&(_(D.p.x,D.p.z,D.r*(D.segment===0?3:2.65),N.alien),D.active=!1))}for(let N of r)N.active&&(N.v.y-=9.8*C,N.p.addScaledVector(N.v,C),N.p.y<=pe(N.p.x,N.p.z)&&(_(N.p.x,N.p.z,N.radius*2.3,N.alien),N.active=!1));for(let N of o)if(N.active){N.age=m-N.born,N.refresh+=C;for(let D of N.blobs)D.age<.5&&(N.dirty=!0),D.age+=C}}for(let T of n)T.active&&S(T);for(let T=0;T<r.length;T++){let N=r[T];a.position.copy(N.p),a.quaternion.identity(),N.active?(Bn.copy(N.v).normalize(),a.quaternion.setFromUnitVectors(qy,Bn),a.scale.set(N.radius,N.radius*1.6,N.radius)):a.scale.setScalar(0),a.updateMatrix(),s.setMatrixAt(T,a.matrix)}s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0);for(let T of o)T.active&&(T.dirty&&T.refresh>=1/24&&(w(T),T.dirty=!1,T.refresh=0),T.mesh.position.y=-Tt.smoothstep(m,T.sinkAt,T.goneAt)*.04,m>=T.goneAt&&(T.active=!1,T.mesh.visible=!1))}function R(){m=0,p=0,n.forEach(A=>{A.active=!1,A.mesh.visible=!1}),o.forEach(A=>{A.active=!1,A.mesh.visible=!1,A.blobs.length=0,A.mesh.position.y=0}),r.forEach(A=>{A.active=!1}),L(0)}return R(),{blood:b,update:L,reset:R}}function $y(){let i=[[0,.13],[.08,.24],[.22,.285],[.4,.235],[.58,.17],[.75,.11],[.9,.05],[1,0]],t=12,e=[],n=[],s=[],r=new vt("#c9ff9b"),o=new vt("#59df65"),a=new vt("#087b38"),c=new vt;for(let[h,[f,u]]of i.entries())for(let g=0;g<t;g++){let v=g*Math.PI*2/t,m=u*(1+.075*Math.sin(g*2.3+h));if(e.push(Math.cos(v)*m+f*f*.1,f,Math.sin(v)*m*.86),c.copy(r).lerp(o,Tt.smoothstep(f,.18,.64)).lerp(a,Tt.smoothstep(f,.64,1)),n.push(c.r,c.g,c.b),h===i.length-1)continue;let p=h*t+g,x=h*t+(g+1)%t;s.push(p,p+t,x,x,p+t,x+t)}let l=e.length/3;e.push(0,0,0),n.push(r.r,r.g,r.b);for(let h=0;h<t;h++)s.push(l,h,(h+1)%t);let d=new ae;return d.setAttribute("position",new Gt(e,3)),d.setAttribute("color",new Gt(n,3)),d.setIndex(s),d.computeVertexNormals(),d}var Zy=$y(),Jy=new di(1,1);function Bc(i,t,{smoke:e=!0}={}){let n=new Jt;n.name="\u7ACB\u4F53\u7EFF\u8272\u706B\u7130",i.add(n);let s={value:0},r=new Ae({vertexColors:!0,emissive:"#1b7432",emissiveIntensity:.45,transparent:!0,opacity:.86,depthWrite:!1});r.onBeforeCompile=d=>{d.uniforms.flameTime=s,d.vertexShader=`uniform float flameTime; varying float flameHeight;
`+d.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        float phase = flameTime * 5.2 + dot(instanceMatrix[3].xz, vec2(1.7, 1.1));
        flameHeight = position.y;
        float heightWeight = position.y * position.y;
        transformed.x += sin(phase + position.y * 7.0) * .13 * heightWeight;
        transformed.z += cos(phase * .83 + position.y * 6.0) * .10 * heightWeight;
        transformed.xz *= 1.0 + sin(phase * 1.3 + position.y * 12.0) * .08;
      `),d.fragmentShader=`varying float flameHeight;
`+d.fragmentShader.replace("#include <tonemapping_fragment>",`
      float core = 1.0 - smoothstep(.12, .58, flameHeight);
      gl_FragColor.rgb = gl_FragColor.rgb * .45 + vec3(.48, .85, .20) * core;
      gl_FragColor.a *= mix(.82, .18, smoothstep(.08, 1.0, flameHeight));
      #include <tonemapping_fragment>`)},r.customProgramCacheKey=()=>"translucent-fire-v2";let o=new cn(Zy,r,t.length*3);o.frustumCulled=!1,n.add(o);let a=e?new cn(Jy,new Ae({color:"#71816c",transparent:!0,opacity:.19,depthWrite:!1}),t.length*2):null;a&&(a.frustumCulled=!1,n.add(a));let c=new Te;function l(d,h){s.value=d,n.visible=h>.001;let f=Math.sqrt(Math.min(1,Math.max(0,h)/.12));r.opacity=.86*f;for(let u=0;u<o.count;u++){let g=t[Math.floor(u/3)],v=u%3,m=d*(4.3+v*.6)+u*1.83,p=(d*(1.15+v*.13)+u*.381)%1,x=v===0?1:.25+.75*Math.sin(p*Math.PI),_=(.53+h*.64)*(v===0?1:.73)*x,M=(.35+h*1.65)*(v===0?1:.55+v*.1)*(.82+Math.sin(m)*.18)*x*(.8+Math.sin(u*2.77)*.19);c.position.set(g[0]+(v-1)*.1*h,g[1]+(v===0?0:p*(.16+h*.38)),g[2]+Math.sin(u*2.39)*.08*h),c.rotation.set(.08*Math.sin(m*.7),u*2.399+Math.sin(m*.4)*.25,.06*Math.cos(m)),c.scale.set(_*f,M*f,_*f),c.updateMatrix(),o.setMatrixAt(u,c.matrix)}if(o.instanceMatrix.needsUpdate=!0,a){for(let u=0;u<a.count;u++){let g=t[Math.floor(u/2)],v=(d*.34+u*.618)%1,m=Math.sin(v*Math.PI)*(.09+h*.24+v*.24)*h;c.position.set(g[0]+v*v*.43,g[1]+.35+v*(1+h*2),g[2]+Math.sin(u*1.7)*v*.14),c.rotation.set(u*.7,d*.2+u,u*.17),c.scale.set(m*1.1,m,m),c.updateMatrix(),a.setMatrixAt(u,c.matrix)}a.instanceMatrix.needsUpdate=!0}}return l(0,0),{group:n,update:l}}var Qf=new di(1,0),Ky={enemy:["#2d593b","#406b43","#254a35","#34573a","#d5dfb1"],villager:["#3b5970","#426881","#37566b","#caa366","#d6a578"],engineer:["#d47732","#e18a3d","#c96e31","#f2edd9","#d6a578"]},jf=new B,tp=new Ye;function ep(i){let t=new Jt;t.name="\u8840\u6D46\u4E0E\u7206\u6563\u788E\u7247",i.add(t);let e=Kf(t),n=new Te,s=new cn(Qf,new Ae({flatShading:!0}),480);s.name="\u6B7B\u4EA1\u788E\u7247",s.frustumCulled=!1,s.castShadow=!0,s.receiveShadow=!0;for(let f=0;f<s.count;f++)s.setColorAt(f,new vt("#2d593b"));t.add(s);let r=Array.from({length:s.count},()=>({active:!1,p:new B,q:new Ye,velocity:new B,axis:new B,size:new B,spin:0,settled:!1,restAge:0,hold:0,support:0,bounces:0})),o=0;function a(f,u){e.blood(f,u,!0);let g=f.kind==="enemy",v=f.group.position,m=g?23:19,p=Ky[f.team==="engineers"?"engineer":f.kind];for(let x=0;x<m;x++){let _=o++%r.length,M=r[_],b=Math.random()*Math.PI*2,S=x<4,y=x<11,w=(g?.109:.079)*(S?1:y?.66:.37)*(.85+Math.random()*.3);M.size.set(w*(.72+Math.random()*.6),w*(.7+Math.random()*.6),w*(.65+Math.random()*.7)),M.p.copy(v).add(new B(Math.cos(b)*.1,.13+Math.random()*(g?.39:.29),Math.sin(b)*.1));let L=(S?1.1:1.7)+Math.random()*1.6;M.velocity.set(Math.cos(b)*L+u.x*.6,1.5+Math.random()*(S?1.4:2.1),Math.sin(b)*L+u.y*.6),M.axis.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),M.axis.lengthSq()<.001&&M.axis.set(1,0,0),M.q.setFromAxisAngle(M.axis,Math.random()*Math.PI*2),M.spin=(3+Math.random()*7)*(Math.random()<.5?-1:1),M.active=!0,M.settled=!1,M.restAge=0,M.hold=2.5+Math.random()*1.3,M.bounces=0;let R=S?p[x%3]:p[(x+Math.floor(Math.random()*3))%p.length];s.setColorAt(_,new vt(R))}}function c(f){let u=Qf.attributes.position,g=1/0;for(let v=0;v<u.count;v++)jf.fromBufferAttribute(u,v).multiply(f.size).applyQuaternion(f.q),g=Math.min(g,jf.y);return-g}function l(f){for(let u of r){if(!u.active)continue;let g=pe(u.p.x,u.p.z);if(u.settled){u.restAge+=f;let v=Tt.smoothstep(u.restAge,u.hold,u.hold+1.5);u.p.y=g+u.support-v*(u.support*2+.12),v===1&&(u.active=!1);continue}u.velocity.y-=f*8,u.p.addScaledVector(u.velocity,f),g=pe(u.p.x,u.p.z),tp.setFromAxisAngle(u.axis,u.spin*f),u.q.premultiply(tp),!(u.p.y>g+Math.max(u.size.x,u.size.y,u.size.z)*1.4)&&(u.support=c(u),u.p.y<=g+u.support&&(u.p.y=g+u.support,u.bounces++,u.velocity.y=Math.abs(u.velocity.y)*.2,u.velocity.x*=.42,u.velocity.z*=.42,u.spin*=.4,(u.velocity.y<.65||u.bounces>=2)&&(u.settled=!0)))}}function d(f){e.update(f);let u=Math.max(1,Math.ceil(f*60));for(let g=0;g<u;g++)l(f/u);for(let g=0;g<r.length;g++){let v=r[g];n.position.copy(v.p),n.quaternion.copy(v.q),n.scale.copy(v.size),v.active||n.scale.setScalar(0),n.updateMatrix(),s.setMatrixAt(g,n.matrix)}s.instanceMatrix.needsUpdate=!0,s.instanceColor.needsUpdate=!0}function h(){e.reset(),r.forEach(f=>{f.active=!1}),d(0)}return h(),{blood:e.blood,death:a,update:d,reset:h}}function np(i){let t=i.group,e=new Jt;e.name="\u9636\u6BB5\u6027\u7ED3\u6784\u574D\u584C",t.add(e),t.updateWorldMatrix(!0,!0);let n=t.matrixWorld.clone().invert(),s=[];t.traverse(p=>{p.isMesh&&p.userData.breakStage&&s.push(p)});let r=new B,o=new B(0,1,0),a=new fe,c=new Ye,l=new Ye,d=0,h=s.map((p,x)=>{a.multiplyMatrices(n,p.matrixWorld);let _=p.geometry.clone().applyMatrix4(a);_.computeBoundingBox();let M=_.boundingBox.getCenter(new B),b=_.boundingBox.getSize(new B);_.translate(-M.x,-M.y,-M.z),_.computeBoundingSphere();let S=new B;if(p.userData.roofPanel){let E=_.attributes.position,C=_.index,T=E.count/2,N=new B,D=new B,k=new B;for(let H=0;H<C.count;H+=3){let I=C.getX(H),F=C.getX(H+1),z=C.getX(H+2);I>=T||F>=T||z>=T||(N.fromBufferAttribute(E,I),D.fromBufferAttribute(E,F),k.fromBufferAttribute(E,z),S.add(r.crossVectors(D.sub(N),k.sub(N))))}}else{let E=_.attributes.normal;for(let C=0;C<E.count;C++)S.add(r.fromBufferAttribute(E,C))}S.lengthSq()<.01&&(b.x<b.y&&b.x<b.z?S.set(1,0,0):b.z<b.y?S.set(0,0,1):S.set(0,1,0)),S.normalize(),S.y<0&&S.negate();let y=new Ye().setFromUnitVectors(S,o);c.setFromAxisAngle(o,Math.sin(x*2.39)*.65),y.premultiply(c);let w=_.attributes.position,L=1/0;for(let E=0;E<w.count;E++)r.fromBufferAttribute(w,E).applyQuaternion(y),L=Math.min(L,r.y);let R=new se(_,p.material);R.castShadow=!0,R.receiveShadow=!0,R.visible=!1,e.add(R);let A=p.userData.roofPanel&&p.userData.breakStage===1?{duration:.3,target:new B(M.x-.065,M.y,i.spec.d/2+_.boundingSphere.radius+.18)}:null;return{source:p,mesh:R,origin:M,rest:y,support:-L+.015,exit:A,threshold:p.userData.breakStage,age:0,falling:!1,velocity:new B,active:!1}});function f(p,x){let _=i.spec.x+p*Math.cos(i.spec.angle)+x*Math.sin(i.spec.angle),M=i.spec.z+x*Math.cos(i.spec.angle)-p*Math.sin(i.spec.angle),b=pe(_,M)-i.spec.floor;return Math.abs(p)<i.spec.w/2+.06&&Math.abs(x)<i.spec.d/2+.065?Math.max(.09,b):b}function u(){d=0,h.forEach(p=>{p.source.visible=!0,p.mesh.visible=!1,p.active=!1,p.falling=!1,p.age=0})}function g(p){let x=p.mesh.geometry.attributes.position,_=-1/0;for(let M=0;M<x.count;M++)r.fromBufferAttribute(x,M).applyQuaternion(p.mesh.quaternion),_=Math.max(_,f(p.mesh.position.x+r.x,p.mesh.position.z+r.z)-r.y+.018);return _}function v(p){p<d&&u(),p!==d&&(d=p,h.forEach((x,_)=>{if(x.threshold>d||x.active)return;x.source.visible=!1,x.mesh.position.copy(x.origin),x.mesh.quaternion.identity(),x.mesh.visible=!0,x.active=!0,x.falling=!0,x.age=0;let M=new B(x.origin.x,0,x.origin.z).normalize();x.velocity.copy(M).multiplyScalar(.22+_%3*.1),x.velocity.y=.25+_%4*.08}))}function m(p){let x=Math.max(1,Math.ceil(p*60)),_=p/x*.52;for(let M=0;M<x;M++)for(let b of h){if(!b.falling)continue;let S=b.exit?p/x:_;if(b.age+=S,b.exit&&b.age<=b.exit.duration){let L=Tt.smoothstep(b.age,0,b.exit.duration);b.mesh.position.lerpVectors(b.origin,b.exit.target,L),b.mesh.position.y-=L*.045,b.mesh.quaternion.identity(),b.velocity.set(0,0,.08);continue}let y=b.age-(b.exit?.duration??0);b.velocity.y-=S*(b.exit?9.8:7.5),b.mesh.position.addScaledVector(b.velocity,S),b.mesh.quaternion.slerpQuaternions(l,b.rest,Tt.smoothstep(y,0,b.exit?.35:.48));let w=f(b.mesh.position.x,b.mesh.position.z)+b.support;(b.mesh.position.y<w+.15||y>=1.25)&&(w=g(b)),(b.mesh.position.y<=w||y>=1.25)&&(b.mesh.quaternion.copy(b.rest),w=g(b),b.mesh.position.y=w,b.falling=!1)}}return u(),{setStage:v,update:m,reset:u}}function ip(i){let{group:t,roof:e,door:n,planks:s,spec:r}=i,o={hp:Kt.baseHp,maxHp:Kt.baseHp,doorHp:Kt.doorHits,open:0,destroyed:!1,burnSpeed:0,stage:0,invasions:0,extinguishers:0,replenishmentBlocked:!1},a={value:0},c=[];t.traverse(X=>{X.isMesh&&(X.material=X.material.clone(),X.material.onBeforeCompile=j=>{j.uniforms.houseBurn=a,j.vertexShader=`varying vec3 housePoint;
`+j.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 housePoint = position;`),j.fragmentShader=`varying vec3 housePoint; uniform float houseBurn;
`+j.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
          float scorch = sin(housePoint.x * 3.7 + housePoint.y * 4.1) * .16
            + sin(housePoint.z * 4.3 - housePoint.y * 5.2) * .14;
          float mask = smoothstep(.03, .92, houseBurn + scorch * houseBurn * .9);
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.035, .044, .029), mask * .96);`).replace("#include <tonemapping_fragment>",`
        gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(.026, .030, .018), mask * .75);
        #include <tonemapping_fragment>`)},X.material.customProgramCacheKey=()=>"burnt-house-v1",c.push({mesh:X,p:X.position.clone(),r:X.rotation.clone(),visible:X.visible}))});let l=np(i);t.updateMatrixWorld(!0);function d(X,j){let q=t.localToWorld(new B(X,0,j));return new et(q.x,q.z)}let h=d(0,r.d/2+.82),f=d(0,r.d/2+.17),u=d(0,r.d/2-.28),g=new se(new wn(r.w+.1,r.h+.85,r.d+.12));g.position.y=(r.h+.85)/2,g.visible=!1,t.add(g);let v=new Jt;v.name="\u57FA\u5730\u65D7\u5E1C";let m=new B(.12,r.h+.76,-.01);v.position.copy(m),t.add(v);let p=ve(v,"#927248",0,.66,0,.043,1.37,.043);p.material=p.material.clone();let x=Ac();x.mesh.position.y=1.28,x.mesh.scale.set(1.5,1.65,1.5),v.add(x.mesh);let _=[[-r.w*.4,.15,r.d*.42],[r.w*.39,.13,r.d*.41],[-r.w*.43,.45,-r.d*.2],[r.w*.42,.35,-r.d*.3],[0,.23,r.d/2+.04],[-.74,r.h+.12,.31],[.78,r.h+.08,-.28],[.13,r.h+.44,.06]],M=_.slice(5).map(X=>X[1]),b=Bc(t,_),S=[.32,.72,1.1].map((X,j)=>{let q=Bc(v,[[0,0,0]],{smoke:!1});return q.group.position.set(0,X,0),q.group.scale.setScalar(.2+j*.025),q}),y=["#927248","#74563b","#51422e","#302f23","#171e16"],w=new Jt;n.add(w);for(let X=0;X<4;X++){let j=ve(w,"#342c22",.1+X*.1,.23+X%2*.13,.03,.012,.22+X%2*.12,.008,!1);j.rotation.z=X%2?.42:-.34}let L=new Jt;t.add(L);for(let X=0;X<5;X++){let j=ve(L,"#614a32",-.28+X*.14,.05,r.d/2+.26+X%2*.16,.105,.035,.48);j.rotation.y=(X-2)*.39}let R=[g,x.mesh],A=0,E=0,C=0,T=0;function N(X=.6){A=Math.max(A,X)}function D(){o.destroyed||o.doorHp<=0||(o.doorHp--,E=.18)}function k(X){return o.destroyed||!X.active||X.consumed?!1:(X.consumed=!0,X.active=!1,X.inside=!1,X.mode="consumed",X.group.visible=!1,o.burnSpeed=Math.min(Kt.burnSpeedCap,o.burnSpeed+1),o.invasions++,!0)}function H(X=1){if(o.destroyed)return 0;let j=Math.min(o.burnSpeed,Math.max(0,Math.floor(X)));return o.burnSpeed-=j,j}function I(X){o.destroyed||(o.hp=Math.max(0,o.hp-o.burnSpeed*Kt.burnPerInvader*X),o.hp===0&&(o.destroyed=!0,o.doorHp=0,T=0)),A=Math.max(0,A-X),o.open=Tt.damp(o.open,A>0?1:0,10,X)}function F(X,j){let q=1-o.hp/o.maxHp;o.stage=o.destroyed?4:q>=.75?3:q>=.5?2:q>=.25?1:0,a.value=[0,.16,.32,.52,.9][o.stage],l.setStage(o.stage),l.update(j),E=Math.max(0,E-j),n.rotation.y=-o.open*1.55+Math.sin(E*110)*E*.3,n.visible=o.doorHp>0,w.visible=o.doorHp<Kt.doorHits,w.children.forEach((ct,_t)=>{ct.visible=_t<(Kt.doorHits-o.doorHp)*2}),s.forEach((ct,_t)=>{ct.rotation.z=o.doorHp===1?_t%2?-.08:.11:0,ct.position.y=.3-(o.doorHp===1&&_t===2?.075:0),ct.visible=!(o.doorHp===1&&_t===3)}),L.visible=o.doorHp===0,_.slice(5).forEach((ct,_t)=>{ct[1]=o.stage<2?M[_t]:o.stage===2?r.h*.8:o.stage===3?.3:.12}),C=Tt.damp(C,o.destroyed?1:o.burnSpeed>0?[.3,.42,.6,.84][o.stage]*(.28+.72*Math.sqrt(o.burnSpeed/Kt.burnSpeedCap)):0,2.4,j),b.update(X,C*(o.destroyed?Math.max(.18,1-T/12):1)),o.destroyed&&(T+=j);let Z=Tt.smoothstep(T,.15,1.6),nt=d(.38,r.d/2+.45);v.position.set(Tt.lerp(m.x,.38,Z),Tt.lerp(m.y,pe(nt.x,nt.y)-r.floor+.075,Z),Tt.lerp(m.z,r.d/2+.45,Z)),v.rotation.x=Z*Math.PI/2,p.material.color.set(y[o.stage]);let rt=Math.min(1,C*3);x.setBurn(q*.7+Tt.smoothstep(T,1.7,4.5)*.85,rt),v.visible=T<4.7,S.forEach((ct,_t)=>{ct.group.rotation.x=-v.rotation.x,ct.update(X+_t*.7,o.stage>0?Math.min(.65,q*.5+T*.08)*rt:0)}),x.mesh.updateWorldMatrix(!0,!1),x.animate(X,j,x.mesh.matrixWorld)}function z(){Object.assign(o,{hp:Kt.baseHp,maxHp:Kt.baseHp,doorHp:Kt.doorHits,open:0,destroyed:!1,burnSpeed:0,stage:0,invasions:0,extinguishers:0,replenishmentBlocked:!1}),A=0,E=0,C=0,T=0,a.value=0,l.reset(),c.forEach(({mesh:X,p:j,r:q,visible:Z})=>{X.position.copy(j),X.rotation.copy(q),X.visible=Z}),e.position.set(0,0,0),e.rotation.set(0,0,0),v.position.copy(m),v.rotation.set(0,0,0),v.visible=!0,x.reset(),F(0,0)}return z(),{group:t,state:o,approach:h,entrance:f,inside:u,targets:R,strikeDoor:D,keepDoorOpen:N,enter:k,extinguish:H,advance:I,animate:F,reset:z}}function po(i){let e=(o,a)=>`${o},${a}`;function n(o,a){let c=o.distanceTo(a),l=Math.max(1,Math.ceil(c/.1)),d=pe(o.x,o.y);for(let h=0;h<=l;h++){let f=h/l,u=o.x+(a.x-o.x)*f,g=o.y+(a.y-o.y)*f,v=pe(u,g);if(!i(u,g)||Math.abs(v-d)>.18)return!1;d=v}return!0}function s(o){let a=Math.round(o.x/.25),c=Math.round(o.y/.25),l=[];for(let d=-2;d<=2;d++)for(let h=-2;h<=2;h++){let f=new et((a+d)*.25,(c+h)*.25);i(f.x,f.y)&&n(o,f)&&l.push(f)}return l.sort((d,h)=>d.distanceToSquared(o)-h.distanceToSquared(o))[0]}function r(o,a){if(n(o,a))return[a.clone()];let c=s(o),l=s(a);if(!c||!l)return null;let d=Math.floor((Math.min(o.x,a.x)-3)/.25),h=Math.ceil((Math.max(o.x,a.x)+3)/.25),f=Math.floor((Math.min(o.y,a.y)-3)/.25),u=Math.ceil((Math.max(o.y,a.y)+3)/.25),g=e(Math.round(l.x/.25),Math.round(l.y/.25)),v=e(Math.round(c.x/.25),Math.round(c.y/.25)),m=new Set([v]),p=new Map([[v,{p:c,cost:0,parent:null}]]),x=new Set;for(;m.size;){let _,M=1/0;for(let w of m){let L=p.get(w),R=L.cost+L.p.distanceTo(l);R<M&&(_=w,M=R)}if(_===g){let w=[a.clone()];for(let A=_;A;A=p.get(A).parent)w.unshift(p.get(A).p);let L=[],R=o;for(;w.length;){let A=w.length-1;for(;A>0&&!n(R,w[A]);)A--;R=w[A],L.push(R),w.splice(0,A+1)}return L}m.delete(_),x.add(_);let b=p.get(_),S=Math.round(b.p.x/.25),y=Math.round(b.p.y/.25);for(let w=-1;w<=1;w++)for(let L=-1;L<=1;L++){if(!w&&!L)continue;let R=S+w,A=y+L,E=e(R,A);if(R<d||R>h||A<f||A>u||x.has(E))continue;let C=new et(R*.25,A*.25);if(!n(b.p,C))continue;let T=b.cost+b.p.distanceTo(C);T>=(p.get(E)?.cost??1/0)||(p.set(E,{p:C,cost:T,parent:_}),m.add(E))}}return null}return{clear:n,route:r}}function sp({squad:i,world:t,base:e,spawn:n,defenders:s=[]}){let r=new et(n.x,n.z),o={mode:"field",destination:null,settled:n,revision:0},a=po(t.canServiceWalk),c=po((C,T)=>t.canServiceWalk(C,T)&&!s.some(N=>N.hp>0&&!N.inside&&Math.hypot(C-N.p.x,T-N.p.y)<.34)),l=(C,T)=>c.route(C,T)??a.route(C,T),d=new Map,h=new Map,f=new et,u=new et,g=new et,v=new et,m=new et,p=new et,x=new et,_=new et,M=!1,b=()=>i.members.filter(C=>C.hp>0);function S(){M=!1,d.clear(),h.clear(),e.state.extinguishers=0,e.state.replenishmentBlocked=!1,o.mode="field",o.destination=null,o.revision++;for(let T of i.members)T.working=!1,T.workProgress=0,T.workTime=0;let C=[...t.tiles.values()].sort((T,N)=>Math.hypot(T.x-r.x,T.z-r.y)-Math.hypot(N.x-r.x,N.z-r.y))[0];o.settled=C??n}function y(C){for(let T of i.members)T.working=!1,T.workProgress=0,T.workTime=0,T.swing=-1,T.ready=0,T.combatHold=!1,T.serviceReroute=0;for(let[T,N]of C)d.set(T,N.map(D=>D.clone()))}function w(C){if(!C||!b().length||e.state.destroyed)return!1;let T=new et(C.x-r.x,C.z-r.y).normalize();T.lengthSq()<.01&&T.set(0,1);let N=[];for(let[D,k]of b().entries()){let H=D===0?[0,0]:[D===1?-.31:.31,-.25],I=new et(C.x+H[0]*T.y+H[1]*T.x,C.z-H[0]*T.x+H[1]*T.y),F=l(k.p,I)??l(k.p,new et(C.x,C.z));if(!F)return!1;N.push([k,F])}return S(),y(N),o.mode="moving",o.destination=C,o.revision++,!0}function L(){if(e.state.destroyed||e.state.burnSpeed<=0||!b().length)return!1;if(M)return!0;let{w:C,d:T}=t.home.spec;e.group.updateWorldMatrix(!0,!1);let N=[[-C/2-.32,0],[C/2+.32,0],[0,T/2+.53]].map(([H,I])=>{let F=e.group.localToWorld(new B(H,0,I));return new et(F.x,F.z)}),D=[],k=new Map;for(let H of b()){let I=N.slice().sort((z,X)=>z.distanceToSquared(H.p)-X.distanceToSquared(H.p)),F=null;for(let z of I){let X=l(H.p,z);if(X){F={site:z,route:X};break}}if(!F)return!1;D.push([H,F.route]),k.set(H,F.site),N.splice(N.indexOf(F.site),1)}S(),y(D);for(let[H,I]of k)h.set(H,I);return M=!0,o.mode="approaching",o.destination=null,o.revision++,e.state.replenishmentBlocked=!0,!0}function R(C,T){let N=d.get(C)??[];if(C.serviceReroute=Math.max(0,(C.serviceReroute??0)-T),N.length&&C.serviceReroute===0&&!c.clear(C.p,N[0])){let k=c.route(C.p,N.at(-1));k&&N.splice(0,N.length,...k),C.serviceReroute=.35}for(;N.length&&C.p.distanceTo(N[0])<.045;)N.shift();if(!N.length||C.combatHold)u.set(0,0);else{f.subVectors(N[0],C.p),u.copy(f).setLength(Math.min(2.55,f.length()*7)),m.copy(f).normalize();let k=null,H=1/0;for(let I of[...i.members,...s]){if(I===C||I.hp<=0||I.inside)continue;p.subVectors(I.p,C.p);let F=p.dot(m),z=p.x*m.y-p.y*m.x;F>-.06&&F<.78&&Math.abs(z)<.38&&p.lengthSq()<H&&(H=p.lengthSq(),k={along:F,lateral:z})}if(k){let I=Math.abs(k.lateral)>.02?-Math.sign(k.lateral):C.index%2?1:-1;x.set(m.y,-m.x).multiplyScalar(I),_.copy(C.p).addScaledVector(x,.24),t.canServiceWalk(_.x,_.y)||x.negate(),u.addScaledVector(x,1.2+(.78-k.along)*2).clampLength(0,2.55)}}C.velocity.lerp(u,1-Math.exp(-T*15)),g.copy(C.p).addScaledVector(C.velocity,T);for(let k of b()){if(k===C)continue;v.subVectors(g,k.p);let H=v.length();H>.001&&H<.27&&g.copy(k.p).addScaledVector(v,.27/H)}a.clear(C.p,g)||(g.copy(C.p),C.velocity.set(0,0));let D=T?g.distanceTo(C.p)/T:0;return C.p.copy(g),C.moving=D>.1,{arrived:N.length===0&&C.velocity.length()<.12,speed:D}}function A(C){M&&(e.state.destroyed||e.state.burnSpeed===0||!b().length)&&S();let T=0;for(let D of i.members){if(D.hp<=0){D.working=!1,D.workProgress=0,d.delete(D);continue}let{arrived:k,speed:H}=R(D,C);if(D.working=!!(M&&k&&!D.combatHold&&e.state.burnSpeed>0),D.working)for(T++,D.workTime+=C,D.workProgress+=C;D.workProgress+1e-9>=Kt.extinguishSeconds&&e.state.burnSpeed>0;)e.extinguish(1),D.workProgress-=Kt.extinguishSeconds;let I=h.get(D);D.working&&I?f.set(e.group.position.x-D.p.x,e.group.position.z-D.p.y):D.velocity.lengthSq()>.005?f.copy(D.velocity):f.set(Math.sin(D.unit.rotation.y),Math.cos(D.unit.rotation.y)),i.poseMember(D,H,C,f)}let N=i.members[0];N.hp>0&&r.copy(N.p),M?(e.state.extinguishers=T,e.state.burnSpeed===0?S():o.mode=T?"extinguishing":"approaching"):o.mode==="moving"&&!d.get(N)?.length&&(o.settled=o.destination,o.destination=null,o.mode="field",o.revision++)}function E(){S(),r.set(n.x,n.z),i.reset(r),o.mode="field",o.destination=null,o.settled=n}return E(),{anchor:r,state:o,orderMove:w,orderExtinguish:L,update:A,reset:E,cancel:S,service:a,get working(){return M}}}function rp({world:i,navigation:t,squad:e,waves:n,base:s,effects:r,spawn:o,engineers:a=null,engineerSpawn:c=o}){let l=new et(o.x,o.z),d=Vf(l),h={mode:"field",result:null,resultAge:0,settled:o,destination:null,replenish:0,kills:0,message:"",revision:0},f=a?sp({squad:a,world:i,base:s,spawn:c,defenders:e.members}):null,u=f?.service??po(i.canServiceWalk),g=new Set([o]),v=[o];for(let V=0;V<v.length;V++)for(let J of v[V].neighbors)g.has(J)||(g.add(J),v.push(J));let m=[...g],p=m.reduce((V,J)=>Math.hypot(J.x-s.approach.x,J.z-s.approach.y)<Math.hypot(V.x-s.approach.x,V.z-s.approach.y)?J:V),x=new et(p.x,p.z),_=new et,M=new et,b=new et,S=new et,y=new et,w={},L=0,R=0,A=0,E=0,C=new Map,T=null,N=null,D=()=>e.members.filter(V=>V.hp>0),k=()=>a?.members.filter(V=>V.hp>0)??[],H=()=>[...D(),...k()],I=()=>H().filter(V=>!V.inside),F=()=>n.actors.filter(V=>V.active&&!V.inside);function z(){h.revision++}function X(V){if(h.result||!V||!g.has(V)||!D().length)return!1;if(["entering","recovering","exiting"].includes(h.mode))return N=V,nt();let J=t.route(l,new et(V.x,V.z));if(!J)return!1;e.beginOrder(l),d.setRoute(J),h.destination=V,h.mode="moving";for(let gt of D())gt.swing=-1,gt.ready=0,gt.combatHold=!1,gt.battleStep.set(0,0);return z(),!0}function j(){if(h.result||s.state.destroyed||!D().length)return!1;if(["entering","recovering","exiting"].includes(h.mode))return nt();if(s.state.replenishmentBlocked)return!1;let V=new Map;for(let J of D()){let gt=u.route(J.p,s.approach);if(!gt)return!1;V.set(J,[...gt,s.entrance,s.inside])}return q(V),h.mode="returning",!0}function q(V){h.mode="entering",h.destination=null,h.replenish=0,E=0,C=new Map(D().map((J,gt)=>[J,{stage:0,delay:gt*.16,route:V.get(J)}])),d.setRoute([]);for(let J of D())J.swing=-1,J.ready=0,J.combatHold=!1,J.working=!1;z()}function Z(){let V=F();return m.filter(J=>!V.some(gt=>gt.p.distanceTo(new et(J.x,J.z))<.9)).sort((J,gt)=>Math.hypot(J.x-s.entrance.x,J.z-s.entrance.y)-Math.hypot(gt.x-s.entrance.x,gt.z-s.entrance.y))[0]}function nt(){return h.result||!D().length||s.state.destroyed?!1:(h.mode==="exiting"||(h.replenish=0,h.mode="exiting",T=Z(),E=0,C=new Map(D().map((V,J)=>[V,{stage:V.inside?0:1,delay:J*.23}])),z()),!0)}function rt(V,J,gt){_.subVectors(J,V.p);let Ut=_.length();V.stowed=V.p.distanceTo(s.entrance)<.78,M.copy(_).setLength(Math.min(2.35,Ut*8)),V.velocity.lerp(M,1-Math.exp(-gt*14)),b.copy(V.p).addScaledVector(V.velocity,gt),!V.stowed&&!u.clear(V.p,b)&&(V.velocity.copy(M),b.copy(V.p).addScaledVector(V.velocity,gt));let At=gt?V.p.distanceTo(b)/gt:0;return V.p.copy(b),V.moving=At>.08,e.poseMember(V,At,gt,_),Ut<.055}function ct(V){if(E+=V,h.mode==="exiting"&&!T){if(T=Z(),!T){h.message="\u51FA\u53E3\u88AB\u5835\uFF0C\u6B63\u5728\u5BFB\u627E\u7A7A\u5730";return}h.message=""}let J=D().some(At=>!At.inside&&At.p.distanceTo(s.entrance)<1.1);(J||h.mode==="exiting")&&s.keepDoorOpen(),J&&h.mode==="returning"&&(h.mode="entering",z());let gt=!0,Ut=0;for(let At of D()){let G=C.get(At);if(!G||E<G.delay){gt=!1;continue}let jt=h.mode!=="exiting",qt=T&&new et(T.x,T.z),Bt=!jt&&e.standPoint(qt,Ut++,new et);if(!jt&&!G.exitRoute){let te=u.route(At.inside?s.approach:At.p,Bt)??[Bt];G.route=At.inside?[s.entrance,s.approach,...te]:te,G.stage=0,G.exitRoute=!0}!jt&&G.stage===0&&At.inside&&(At.p.copy(s.inside),At.inside=!1,At.unit.visible=!0);let ht=G.route;G.stage<ht.length&&rt(At,ht[G.stage],V)&&G.stage++,G.stage<ht.length?gt=!1:jt&&(At.inside=!0,At.unit.visible=!1)}if(e.members[0].inside||l.copy(e.members[0].p),!!gt){if(h.message="",h.mode!=="exiting")h.mode="recovering",h.replenish=0;else if(l.set(T.x,T.z),h.settled=T,h.mode="field",e.beginOrder(l),N){let At=N;N=null,X(At)}z()}}function _t(V,J,gt){function Ut(Bt,ht,te=!1){if(Bt.hp<=0||ht<=0)return 0;let kt=Math.min(ht,Math.max(0,Bt.hp-Number(te)));return kt?(Bt.hp-=kt,Bt.lastHurt=L,Bt.lastFight=L,Bt.recoil=.22,Bt.hp<=0?(r.death(Bt,gt),Bt.unit.visible=!1,Bt.swing=-1,Bt.working=!1,z()):r.blood(Bt,gt),kt):0}let At=V.team==="engineers"?k:D;if(V.index!==0||At().length===1){Ut(V,J);return}let G=At(),jt=J/G.length,qt=J;for(let Bt of G.slice(1))qt-=Ut(Bt,jt);for(qt-=Ut(V,jt,At().length>1);qt>.001;){let Bt=At().filter(kt=>kt.index!==0);if(!Bt.length){Ut(V,qt);break}let ht=qt/Bt.length,te=0;for(let kt of Bt)te+=Ut(kt,ht);if(te<.001)break;qt-=te}}function Xt(V,J,gt,Ut=null){V.active&&(V.hp-=J,V.lastAttacker=Ut,V.stun=.09,V.hp<=0?(r.death(V,gt),n.kill(V),h.kills++,z()):r.blood(V,gt))}function Pt(V,J,gt,Ut){let At=J.anchor,G=J.state,jt=V.members.filter(O=>O.hp>0),qt=F(),Bt=qt.slice().sort((O,P)=>O.p.distanceToSquared(At)-P.p.distanceToSquared(At))[0],ht=O=>{let P=G.destination,K=Pe*.5+(O.combatHold?.08:0);return G.mode==="moving"&&P&&Math.abs(O.p.x-P.x)<=K&&Math.abs(O.p.y-P.z)<=K},te=G.mode==="moving"&&jt.some(ht),kt=G.mode==="approaching"||G.mode==="extinguishing",Qt=Bt&&Bt.p.distanceTo(At)<3.1&&(G.mode==="field"||te||kt);Ut=Qt?Ut+gt:0,Qt&&V.faceThreat(_.subVectors(Bt.p,At).normalize());for(let O of jt){O.cooldown=Math.max(0,O.cooldown-gt),O.recoil=Math.max(0,O.recoil-gt),O.battleStep.set(0,0);let P=O.inside?null:qt.slice().sort((ut,St)=>ut.p.distanceToSquared(O.p)-St.p.distanceToSquared(O.p))[0];O.targetEnemy=P;let K=!O.inside&&(G.mode==="field"||ht(O)||kt),xt=P?P.p.distanceTo(O.p):1/0,pt=xt<O.attackReach,wt=K&&P&&(pt||Qt&&Ut>O.slot*.075);O.ready=Tt.damp(O.ready,wt?1:0,9,gt),O.combatHold=!!(K&&!O.inside&&P?.active&&O.ready>.1&&(pt||O.swing>=0&&xt<O.attackReach+.12)),O.canEngage=!!K,wt&&P&&(O.lastFight=L,O.combatFace.subVectors(P.p,O.p).normalize(),!O.inside&&xt<1.18&&O.battleStep.copy(O.combatFace).multiplyScalar(Math.min(.22,Math.max(0,xt-.58))));let Et=P&&(O.inside||P.p.distanceTo(O.p)<2.2),lt=O.team!=="engineers"||G.mode==="field"&&!O.moving;!Et&&lt&&L-Math.max(O.lastFight,O.lastHurt)>O.recoveryDelay&&(O.hp=Math.min(O.maxHp,O.hp+O.recoveryRate*gt))}return Ut}function Nt(V){R=Pt(e,{anchor:l,state:h},V,R),a&&(A=Pt(a,f,V,A))}function Ht(V){for(let J of H()){let gt=J.targetEnemy,Ut=J.canEngage;if(J.swing<0&&gt?.active&&Ut&&J.ready>.45&&J.cooldown===0&&gt.p.distanceTo(J.p)<J.attackReach&&(J.swing=0,J.hit=!1,J.cooldown=J.attackInterval,J.strikeTarget=gt),!(J.swing<0)){if(J.swing+=V,!J.hit&&J.swing>=.29){J.hit=!0;let At=J.strikeTarget;At?.active&&At.p.distanceTo(J.p)<J.attackReach+.12&&(y.subVectors(At.p,J.p).normalize(),y.lengthSq()===0&&y.set(0,1),Xt(At,J.damage,y,J))}J.swing>=.7&&(J.swing=-1)}}}function dt(V,J,gt){if(_.subVectors(J,V.p),_.lengthSq()<1e-4)return 0;_.normalize(),M.copy(_).multiplyScalar(V.speed*Tt.smoothstep(V.age,0,.42));for(let At of n.actors){if(At===V||!At.active||At.inside)continue;S.subVectors(V.p,At.p);let G=S.length(),jt=(V.radius+At.radius)*.9+.02;G>0&&G<jt+.16&&(M.addScaledVector(S,(jt+.16-G)*2.5/G),S.dot(_)<0&&G<jt+.2&&(M.x+=_.y*(V.index%2?-.55:.55),M.y-=_.x*(V.index%2?-.55:.55)))}M.clampLength(0,V.speed),V.velocity.lerp(M,1-Math.exp(-gt*10)),b.copy(V.p).addScaledVector(V.velocity,gt);for(let At=0;At<3;At++){for(let G of n.actors){if(G===V||!G.active||G.inside)continue;let jt=(V.radius+G.radius)*.9+.02;S.subVectors(b,G.p);let qt=S.length();qt>1e-4&&qt<jt&&b.copy(G.p).addScaledVector(S,jt/qt)}for(let G of I()){S.subVectors(b,G.p);let jt=S.length();jt>1e-4&&jt<.51&&b.copy(G.p).addScaledVector(S,.51/jt)}}if(V.mode==="base"&&!t.clear(V.p,b))return 0;let Ut=V.p.distanceTo(b);return V.p.copy(b),Ut}function Mt(V,J){if(!V.active||(V.age+=J,V.cooldown=Math.max(0,V.cooldown-J),V.repathTimer=Math.max(0,V.repathTimer-J),V.stun=Math.max(0,(V.stun??0)-J),V.inside))return;if(V.mode==="enter"){V.group.scale.y=V.group.scale.x*.88,_.subVectors(s.inside,V.p);let ht=_.length(),te=Math.min(ht,J*2);ht>.001&&V.p.addScaledVector(_,te/ht),V.group.rotation.y=Math.atan2(_.x,_.y),V.group.position.set(V.p.x,pe(V.p.x,V.p.y)+.015,V.p.y),V.pose(te,J),ht<.075&&s.enter(V);return}if(V.mode==="road"&&(Dc(V.side,V.roadDistance+.35,w,V.lane),M.set(w.x,w.z),g.has(t.tileAt(V.p)))){let ht=t.route(V.p,x,.1,!1);ht&&(V.mode="base",V.route=ht,V.routeIndex=0)}if(V.mode==="base"){let ht=V.route[V.routeIndex];if(ht&&V.repathTimer===0&&!t.clear(V.p,ht)){let te=t.route(V.p,x,.08,!1);te&&(V.route=te,V.routeIndex=0),V.repathTimer=.35}for(;V.routeIndex<V.route.length;){let te=V.p.distanceTo(V.route[V.routeIndex]),Qt=V.routeIndex===V.route.length-1?te<.5:te<.28&&t.clear(V.p,V.route[V.routeIndex+1]);if(te>=.1&&!Qt)break;V.routeIndex++}M.copy(V.route[V.routeIndex]??s.approach),V.routeIndex>=V.route.length&&(V.mode="door")}V.mode==="door"&&M.copy(s.entrance);let gt=M.clone();_.subVectors(gt,V.p).normalize();let Ut=null,At=1/0;for(let ht of I()){S.subVectors(ht.p,V.p);let te=S.length(),kt=S.dot(_),Qt=Math.abs(S.x*_.y-S.y*_.x),O=V.lastAttacker===ht&&te<1.1;te<1.25&&te<At&&(kt>-.12&&Qt<.52||O)&&(Ut=ht,At=te)}V.target=Ut;let G=0,jt=V.mode==="door"&&V.p.distanceTo(s.entrance)<.78,qt=s.state.doorHp>0&&s.state.open<.7;if(V.swing<0&&V.cooldown===0&&V.stun===0&&(Ut&&At<Kt.enemyReach||!Ut&&jt&&qt)&&(V.swing=0,V.hit=!1,V.cooldown=Kt.enemyAttack,V.strikeTarget=Ut??"door"),V.swing>=0){if(V.swing+=J,!V.hit&&V.swing>=.34){V.hit=!0;let ht=V.strikeTarget;ht==="door"?!s.state.destroyed&&s.state.open<.7&&s.strikeDoor():ht?.hp>0&&!ht.inside&&V.p.distanceTo(ht.p)<Kt.enemyReach+.14&&_t(ht,Kt.enemyDamage,y.subVectors(ht.p,V.p).normalize())}V.swing>=.76&&(V.swing=-1)}else if(V.stun===0){let ht=Ut?Ut.p:gt;(!Ut||At>Kt.enemyReach*.95)&&!(jt&&qt&&!Ut)&&(G=dt(V,ht,J)),V.mode==="road"&&(V.roadDistance+=G)}if(V.mode==="door"&&!Ut)if(qt){S.subVectors(s.approach,s.inside).normalize();let ht=_.subVectors(V.p,s.entrance).dot(S);ht<.4&&V.p.addScaledVector(S,.4-ht)}else V.p.distanceTo(s.entrance)<.85&&!n.actors.some(ht=>ht.active&&!ht.inside&&ht.mode==="enter")&&(V.mode="enter",V.swing=-1);let Bt=Ut?y.subVectors(Ut.p,V.p):_.subVectors(gt,V.p);if(Bt.lengthSq()>1e-4){let ht=Math.atan2(Bt.x,Bt.y),te=Math.atan2(Math.sin(ht-V.group.rotation.y),Math.cos(ht-V.group.rotation.y));V.group.rotation.y+=te*(1-Math.exp(-J*12))}V.group.position.set(V.p.x,pe(V.p.x,V.p.y)+.015,V.p.y),V.pose(G,J,V.swing)}function yt(V){if(L+=V,!h.result){if(n.update(V),Nt(V),h.mode==="moving"){let J=e.members[0].combatHold;J&&d.pause(V);let gt=J?!1:d.advance(V);e.follow(l,gt,V),!J&&!gt&&(h.settled=h.destination,h.destination=null,h.mode="field",z())}else h.mode==="field"?e.follow(l,!1,V):(h.mode==="returning"||h.mode==="entering"||h.mode==="exiting")&&ct(V);if(f?.update(V),a)for(let J of k())for(let gt of D()){if(gt.inside)continue;S.subVectors(J.p,gt.p);let Ut=S.length();Ut<.27&&Ut>.001&&(b.copy(gt.p).addScaledVector(S,.27/Ut),f.service.clear(J.p,b)&&(J.p.copy(b),J.unit.position.set(b.x,pe(b.x,b.y),b.y)))}for(let J of n.actors)Mt(J,V);if(Ht(V),s.advance(V),h.mode==="recovering"&&D().length>0&&!s.state.destroyed&&!s.state.replenishmentBlocked){for(let J of D())J.hp=Math.min(Kt.villagerHp,J.hp+Kt.indoorRecoveryRate*V);if(D().length<Kt.squadSize){if(h.replenish+=V,h.replenish>=Kt.replenishSeconds){let J=e.members.find(gt=>gt.hp<=0);J.hp=Kt.villagerHp,J.inside=!0,J.unit.visible=!1,J.p.copy(s.inside),J.unit.position.set(s.inside.x,pe(s.inside.x,s.inside.y),s.inside.y),J.swing=-1,J.ready=0,J.stains.clear(),h.replenish-=Kt.replenishSeconds,z()}}else h.replenish=0;D().length===Kt.squadSize&&D().every(J=>J.hp>=Kt.villagerHp-.01)&&nt()}if(s.state.destroyed){for(let J of D().filter(gt=>gt.inside&&gt.index!==0))_t(J,Kt.villagerHp,y.set(0,1));e.members[0].inside&&e.members[0].hp>0&&_t(e.members[0],1e3,y.set(0,1)),f?.cancel(),h.result="lost",z()}else n.state.complete&&(f?.cancel(),h.result="won",z())}}function Rt(V){if(V<=0){s.animate(L,0),r.update(0),e.animateFlag(L,0),a?.animateFlag(L,0);return}let J=Math.max(1,Math.ceil(V*60));for(let gt=0;gt<J;gt++)yt(V/J);h.result&&(h.resultAge+=V),s.animate(L,V),r.update(V),e.animateFlag(L,V),a?.animateFlag(L,V)}function It(){L=0,R=0,A=0,E=0,N=null,T=null,C.clear(),Object.assign(h,{mode:"field",result:null,resultAge:0,settled:o,destination:null,replenish:0,kills:0,message:""}),l.set(o.x,o.z),d.setRoute([]),e.reset(l),s.reset(),n.reset(),r.reset(),f?.reset(),z()}return It(),{anchor:l,state:h,reachable:g,orderMove:X,orderReturn:j,leaveBase:nt,update:Rt,reset:It,hurtVillager:_t,hurtEnemy:Xt,engineerOrders:f}}function op({reducedMotion:i=!1}={}){let t={active:!1,progress:0,focus:0,timeScale:1,elapsed:0},e={value:0},n={value:new et},s=new et,r={value:Number(i)},o=.12;function a(h,f){t.active=h,h&&f&&(s.copy(f),t.progress===0&&n.value.copy(f))}function c(h,f=!1){let u=i?.12:t.active?.26:.25;t.progress=Tt.clamp(t.progress+(t.active?1:-1)*h/u,0,1),e.value=t.progress,n.value.lerp(s,1-Math.exp(-h*16));let g=t.active?o:1,v=t.active?20:16,m=Math.exp(-v*h),p=t.timeScale,x=g*h+(p-g)*(1-m)/v;return t.timeScale=g+(p-g)*m,Math.abs(t.timeScale-g)<5e-5&&(t.timeScale=g),t.focus=Tt.clamp((1-t.timeScale)/(1-o),0,1),t.elapsed+=f?0:x,f?0:x}function l(h){return h.onBeforeCompile=f=>{Object.assign(f.uniforms,{deployProgress:e,deployOrigin:n,deployReduced:r}),f.vertexShader=`attribute vec3 deployCenter;
        uniform float deployProgress;
        uniform vec2 deployOrigin;
        uniform float deployReduced;
        varying float deployAlpha;
      `+f.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        float delay = min(length(deployCenter.xz - deployOrigin) / 12.0, 1.0) * .28;
        delay *= 1.0 - deployReduced;
        float reveal = clamp((deployProgress - delay) / (1.0 - .28 * (1.0 - deployReduced)), 0.0, 1.0);
        deployAlpha = reveal * reveal * (3.0 - 2.0 * reveal);
        float size = mix(.24, 1.0, deployAlpha);
        size = mix(size, 1.0, deployReduced);
        transformed = deployCenter + (transformed - deployCenter) * size;
        transformed.y -= (1.0 - deployAlpha) * .012 * (1.0 - deployReduced);
      `),f.fragmentShader=`varying float deployAlpha;
`+f.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
          diffuseColor.a *= deployAlpha;
          if (diffuseColor.a < .003) discard;`)},h.customProgramCacheKey=()=>"deploy-grid-transition-v1",h}function d(){Object.assign(t,{active:!1,progress:0,focus:0,timeScale:1,elapsed:0}),e.value=0}return{state:t,setActive:a,update:c,tileMaterial:l,reset:d}}var zc=(i,t,e,n)=>`<svg class="${n}" viewBox="0 0 ${t} ${e}" preserveAspectRatio="none" aria-hidden="true">${i}</svg>`,ti=i=>i.map(([t,e],n)=>`${n?"L":"M"}${t.toFixed(2)} ${e.toFixed(2)}`).join(" ")+"Z";function Ni(i,t=1.6){let e=i.map(([n,s],r)=>{let o=i[(r+i.length-1)%i.length],a=i[(r+1)%i.length],c=[n-o[0],s-o[1]],l=[a[0]-n,a[1]-s],d=Math.hypot(...c),h=Math.hypot(...l),f=[-c[1]/d-l[1]/h,c[0]/d+l[0]/h],u=Math.hypot(...f),g=f[0]/u,v=f[1]/u,p=t*(.82+.2*Math.sin(r*1.9)+.12*Math.cos(r*.7))/Math.max(.38,g*-l[1]/h+v*l[0]/h);return[n+g*p,s+v*p]});return`<path d="${ti(i)} ${ti(e.reverse())}" fill="var(--ink)" fill-rule="evenodd"/>`}function Qy(i,t){let e=[[8,1.8],[i*.38,.7],[i-9,1.9],[i-1.5,9],[i-.8,t*.54],[i-1.8,t-9],[i-8.5,t-1.3],[i*.4,t-.6],[8,t-1.9],[1.2,t-8],[.7,t*.4],[1.7,8]];return zc(`<path d="${ti(e)}" fill="var(--paper)"/>${Ni(e)}
    <path d="M${i*.3} 1.6l8 .08-4 .48Z M${i*.65} ${t-1.5}l6 -.1-2 .5Z" fill="var(--paper)" opacity=".8"/>`,i,t,"ink-frame")}function ap(i=!1){let t=[[9,11],[27,10],[70,11],[81,20],[80,76],[70,86],[10,85],[2,77],[2,21]],e=[[13,17],[68,16],[75,23],[75,73],[67,79],[14,79],[8,73],[8,24]];return i?zc(`<path d="${ti(t)} ${ti([...e].reverse())}" fill-rule="evenodd" fill="var(--paper)"/>
    ${Ni(t,2)}${Ni(e,1.2)}`,84,90,"portrait-rim"):zc(`<path d="${ti(t)}" fill="var(--paper)"/>${Ni(t,2)}
    <path d="${ti(e)}" fill="var(--portrait-field)"/>${Ni(e,1.2)}`,84,90,"portrait-frame")}function jy(i){let t=i?[[164,17],[192,15],[218,16],[219,33],[207,33],[207,42],[219,42],[219,57],[207,57],[207,67],[219,67],[219,82],[164,83]]:[[164,17],[190,15],[219,16],[185,47],[220,81],[164,83]],e=[[1,6],[81,4],[176,7],[177,30],[175,54],[176,73],[89,74],[1,72]],n=[[163,62],[176,62],[176,73],[164,83]],s=i?`<g transform="translate(155 42) rotate(-33) scale(.86)" fill="#fffdf5" opacity=".9">
    <path d="M-2-3 2-3 2 14-2 15Z M-9-9 9-9 10-1-9-1Z"/>
    <path d="M-7-8 6-8 6-6-7-6Z" fill="var(--banner)" opacity=".28"/></g>`:"";return zc(`<g class="flag-tail"><path d="${ti(t)}" fill="var(--banner-tail)"/>${Ni(t,1.2)}</g>
    <g class="flag-return"><path d="${ti(n)}" fill="var(--banner-fold)"/>${Ni(n,1)}</g>
    <g class="flag-face"><path d="${ti(e)}" fill="var(--banner)"/>${Ni(e,1.5)}
      <path d="M6 11Q85 8 170 12" fill="none" stroke="#fff6dd" stroke-width=".8" opacity=".23"/>
      <path d="M173 14Q172 42 173 69" fill="none" stroke="var(--banner-fold)" stroke-width="2.4" opacity=".40"/>
    </g>
    ${s}`,222,84,"squad-banner")}function cp(){for(let r of document.querySelectorAll("[data-ink-frame]")){let o=r.dataset.inkFrame,[a,c]=o==="pause"?[54,54]:o==="panel"?[360,238]:o==="wave"?[156,42]:[160,54];r.insertAdjacentHTML("afterbegin",Qy(a,c))}let i=document.querySelector(".command"),t=[...i.querySelectorAll(".squad-card")];for(let r of t)r.insertAdjacentHTML("afterbegin",jy(r.id==="engineer-card")),r.querySelector(".portrait-window").insertAdjacentHTML("afterbegin",ap()),r.querySelector(".portrait-window").insertAdjacentHTML("beforeend",ap(!0));let e=matchMedia("(prefers-reduced-motion: reduce)"),n=matchMedia("(hover: hover) and (pointer: fine)");for(let r of document.querySelectorAll("button")){let o;r.addEventListener("click",()=>{if(r.disabled||e.matches)return;o?.cancel();let a=n.matches&&r.matches(":hover")?-2:0;o=r.animate([{transform:"translateY(1.5px) scale(.985)"},{transform:`translateY(${a}px) scale(1)`}],{duration:180,easing:"cubic-bezier(.16, 1, .3, 1)"})})}let s="";return{setSelection(r,o){let a=r?o:"";if(!(a===s&&i.dataset.open!==void 0)&&(s=a,i.dataset.open=String(!!a),i.setAttribute("aria-hidden",String(!a)),i.inert=!a,a))for(let c of t)c.hidden=c.id==="engineer-card"!=(o==="engineers")},setPaused(r){let o=document.querySelector("#pause-game");o.setAttribute("aria-pressed",String(r)),o.setAttribute("aria-expanded",String(r)),o.setAttribute("aria-label",r?"\u5173\u95ED\u6682\u505C\u83DC\u5355":"\u6253\u5F00\u6682\u505C\u83DC\u5355"),o.title=r?"\u5173\u95ED\u6682\u505C\u83DC\u5355\uFF08\u7A7A\u683C\uFF09":"\u6253\u5F00\u6682\u505C\u83DC\u5355\uFF08\u7A7A\u683C\uFF09"}}}var kc=i=>Math.max(0,Math.min(1,i)),lp=i=>{let t=kc(i);return t*t*(3-2*t)};function hp(i,{reducedMotion:t=!1}={}){let e=new Vs({canvas:i,alpha:!0,antialias:!0,powerPreference:"low-power"});e.setClearColor(0,0);let n=new Wi,s=new fi(-1,1,1,-1,.1,50);s.position.z=20;let r=new di(1,2),o=r.attributes.position;for(let b=0;b<o.count;b++){let S=o.getX(b),y=o.getY(b),w=o.getZ(b),L=1+.045*Math.sin(S*4+y*2.7)*Math.cos(w*3.3-y*2);o.setXYZ(b,S*L,y*L,w*L)}o.needsUpdate=!0;let a=new Te,c=b=>{let S=Math.sin(b*127.1+311.7)*43758.5453;return S-Math.floor(S)},l=Math.SQRT1_2,d=[0,1].map(b=>{let S=new Jt;n.add(S);let y=T=>.63+.1*Math.sin(T*6.1+b*2.2)+.055*Math.cos(T*13.7+b),w=[],L=[],R=[];function A(T,N,D,k,H,I){T.push({x:(D+N)*l,y:(D-N)*l,z:I,size:k,wide:.9+c(H+5)*.28,tall:.82+c(H+13)*.34,turn:c(H+19)*Math.PI*2,phase:c(H+23)*Math.PI*2,lag:c(H+31)*.032})}for(let T=0;T<17;T++){let N=(T-8)*.22,D=y(N);for(let I=0;I<9;I++){let F=b*911+T*37+I*101;A(w,N+(I%2?.105:0)+(c(F+7)-.5)*.045,D-.11-I*.215+(c(F+11)-.5)*.055,.24+c(F+3)*.08,F,-.9+c(F+29)*1.15)}let k=b*977+T*61,H=.14+c(k+43)*.115;A(L,N,D+.02,H,k,.55+c(k+47)*.45),A(L,N+.08,D+H*.64,H*.52,k+71,.85+c(k+53)*.4),T%2===b&&A(R,N-.06,D+H*1.15,.07+c(k+59)*.055,k+131,1.15)}let C=[{puffs:w.map(T=>({...T,x:T.x-.055,y:T.y-.055,z:T.z-1.5,size:T.size*1.04})),opacity:.95,order:0,rim:.84,shade:.94},{puffs:w,opacity:.56,order:1,rim:.88,shade:.73},{puffs:L,opacity:.38,order:2,rim:.94,shade:.8},{puffs:R,opacity:.18,order:3,rim:.96,shade:.88}].map(({puffs:T,opacity:N,order:D,rim:k,shade:H})=>{T.sort((z,X)=>z.z-X.z);let I=new $e({color:16777215,transparent:!0,opacity:N,depthWrite:!1,depthTest:!1});I.onBeforeCompile=z=>{z.uniforms.cloudRimEnd={value:k},z.uniforms.cloudShadeFloor={value:H},z.vertexShader=`varying vec3 cloudNormal; varying vec3 cloudViewPosition;
`+z.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
            mat3 puffBasis = mat3(instanceMatrix);
            vec3 puffNormal = normal / vec3(dot(puffBasis[0], puffBasis[0]), dot(puffBasis[1], puffBasis[1]), dot(puffBasis[2], puffBasis[2]));
            cloudNormal = normalMatrix * puffBasis * puffNormal;
          `).replace("#include <project_vertex>",`#include <project_vertex>
cloudViewPosition = mvPosition.xyz;`),z.fragmentShader=`uniform float cloudRimEnd; uniform float cloudShadeFloor; varying vec3 cloudNormal; varying vec3 cloudViewPosition;
`+z.fragmentShader.replace("#include <alphamap_fragment>",`#include <alphamap_fragment>
            vec3 roundedNormal = normalize(cloudNormal);
            vec3 faceNormal = normalize(cross(dFdx(cloudViewPosition), dFdy(cloudViewPosition)));
            vec3 volumeNormal = normalize(mix(roundedNormal, faceNormal, .16));
            float light = dot(volumeNormal, normalize(vec3(-.48, .64, .80)));
            // Neutral white highlights and restrained pearl-white folds reveal the actual 3D faces.
            float whiteVolume = mix(cloudShadeFloor, 1.0, smoothstep(-.18, .83, light));
            diffuseColor.rgb *= whiteVolume;
            diffuseColor.a *= smoothstep(.16, cloudRimEnd, abs(roundedNormal.z));
          `)},I.customProgramCacheKey=()=>"white-billow-volume-v4";let F=new cn(r,I,T.length);return F.frustumCulled=!1,F.renderOrder=D,F.instanceMatrix.setUsage(je),S.add(F),{mesh:F,puffs:T,opacity:N}});return{group:S,layers:C}}),h={phase:"idle",progress:0,age:0,busy:!1,swapped:!1,waiting:!1},f=t?.1:.62,u=t?.04:.12,g=1,v,m;function p(){let b=i.parentElement.getBoundingClientRect(),S=Math.max(1,b.width),y=Math.max(1,b.height);g=S/y,e.setPixelRatio(Math.min(window.devicePixelRatio||1,1.25,1400/Math.max(S,y))),e.setSize(S,y,!1),s.left=-g,s.right=g,s.updateProjectionMatrix(),h.busy&&x()}function x(){for(let[b,{group:S,layers:y}]of d.entries()){let w=t?1:lp(b?(h.progress-.035)/.965:h.progress),L=-.9+1.24*w,R=b?1-L:L,A=b?-1:1;S.position.set((R-.5)*g*2,(.5-R)*2,0);for(let{mesh:E,puffs:C,opacity:T}of y){E.material.opacity=T*(t?h.progress:1);for(let[N,D]of C.entries()){let k=lp(kc((w-D.lag)/(1-D.lag))),H=Math.sin(k*2.5+D.phase)*.018,I=(k-w)*.13;a.position.set(A*(D.x+H+I)*g*2,-A*(D.y-H*.6+I)*2,D.z),a.rotation.set(D.turn*.43,D.turn+k*.09,D.phase*.4);let F=D.size*(1+Math.sin(k*2.1+D.phase)*.045);a.scale.set(F*g*2*D.wide,F*2*D.tall,F*2.2),a.updateMatrix(),E.setMatrixAt(N,a.matrix)}E.instanceMatrix.needsUpdate=!0}}e.render(n,s)}function _(b,S=()=>{}){return h.busy?!1:(v=b,m=S,Object.assign(h,{phase:"closing",progress:0,age:0,busy:!0,swapped:!1,waiting:!1}),i.hidden=!1,p(),x(),!0)}function M(b){if(h.busy){if(h.phase==="closing")h.age+=b,h.progress=kc(h.age/f),h.progress===1&&(h.phase="covered",h.age=0);else if(h.phase==="covered"){if(!h.swapped){h.swapped=!0;try{let S=v?.();S?.then&&(h.waiting=!0,Promise.resolve(S).catch(y=>console.error(y)).finally(()=>{h.waiting=!1}))}catch(S){console.error(S)}}h.age+=b,!h.waiting&&h.age>=u&&(h.phase="opening",h.age=0)}else if(h.phase==="opening"&&(h.age+=b,h.progress=1-kc(h.age/f),h.progress===0)){let S=m;v=m=null,h.phase="idle",h.busy=!1,i.hidden=!0,S?.();return}x()}}return new ResizeObserver(p).observe(i.parentElement),{state:h,play:_,update:M,get busy(){return h.busy}}}function up(i,{reducedMotion:t=!1,onPauseChange:e,returnFocus:n}){let s={status:"closed",progress:0,target:0},r,o=!0,a=i.querySelector(".pause-panel");function c(){let v=s.progress,m=1-(1-v)**3;i.style.setProperty("--pause-opacity",String(m)),a.style.transform=t?"none":`translateY(${(1-m)*12}px) scale(${.965+.035*m})`}function l(){s.status="closed",s.progress=0,i.hidden=!0,i.inert=!0,i.setAttribute("aria-hidden","true"),e(!1);let v=n?.()??r;o&&v?.isConnected&&!v.disabled&&v.focus({preventScroll:!0})}function d(){return s.status==="open"||s.status==="opening"?!1:(s.status==="closed"&&(r=document.activeElement),o=!0,s.status="opening",s.target=1,i.hidden=!1,i.inert=!1,i.setAttribute("aria-hidden","false"),e(!0),c(),i.querySelector("#resume-game").focus({preventScroll:!0}),t&&(s.progress=1,s.status="open",c()),!0)}function h({restore:v=!0}={}){return s.status==="closed"?!1:(o=v,s.status="closing",s.target=0,t&&l(),!0)}function f(){o=!1,s.target=0,l(),c()}function u(v){if(s.status==="closed"||s.status==="open")return;let m=s.target?.24:.18;s.progress=Math.max(0,Math.min(1,s.progress+(s.target?1:-1)*v/m)),c(),s.target&&s.progress===1?s.status="open":!s.target&&s.progress===0&&l()}function g(v){if(s.status==="closed")return!1;if(v.key==="Escape"||v.code==="Space"&&!(v.target instanceof HTMLButtonElement))v.preventDefault(),h();else if(v.key==="Tab"){let m=[...i.querySelectorAll("button:not(:disabled)")],p=m[0],x=m.at(-1);v.shiftKey&&(document.activeElement===p||!i.contains(document.activeElement))?(v.preventDefault(),x.focus()):!v.shiftKey&&(document.activeElement===x||!i.contains(document.activeElement))&&(v.preventDefault(),p.focus())}return!0}return i.querySelector("#resume-game").addEventListener("click",()=>h()),i.querySelector("#close-pause").addEventListener("click",()=>h()),i.querySelector(".pause-backdrop").addEventListener("click",()=>h()),{state:s,open:d,close:h,dismiss:f,update:u,handleKey:g,get active(){return s.status!=="closed"}}}var dp=[[[.14641,.08564],[.15193,.07735],[.15746,.0732],[.17127,.06906],[.18094,.06906],[.18232,.1105],[.18232,.16298],[.17956,.20856],[.16989,.20856],[.15884,.18785],[.14641,.10497]],[[.17265,.2058],[.1768,.1395],[.17818,.13536],[.18646,.13536],[.18923,.1395],[.19061,.16436],[.19061,.22099],[.18646,.22928],[.17818,.22928],[.17265,.22514]],[[.24448,.66989],[.30525,.64917],[.3384,.64917],[.3384,.66851],[.33564,.67265],[.27901,.72238],[.26934,.72238],[.24448,.68923]],[[.72514,.54558],[.8011,.5],[.81215,.5],[.81215,.52348],[.79006,.55663],[.78591,.56077],[.78039,.56492],[.76105,.56906],[.74171,.56906],[.72514,.56492]],[[.41851,.77762],[.42127,.77348],[.42818,.76519],[.43923,.75691],[.45994,.74448],[.46961,.74448],[.48066,.74862],[.60221,.79834],[.61188,.80249],[.61464,.80663],[.61464,.82597],[.57597,.8384],[.53039,.8384],[.50276,.83425],[.41851,.79696]],[[.20166,.37983],[.20304,.35912],[.20442,.34254],[.20856,.3384],[.21685,.3384],[.21685,.39503],[.21271,.41575],[.20304,.41575],[.20166,.39917]],[[.09254,.46685],[.09807,.35083],[.11326,.35083],[.12017,.35912],[.12155,.36326],[.12293,.37983],[.12293,.43646],[.10221,.52348],[.09392,.52348],[.09254,.48619]],[[.33425,.59116],[.33702,.58702],[.37017,.55387],[.37845,.54972],[.4047,.54144],[.42265,.54144],[.43646,.58702],[.43646,.60635],[.43508,.6105],[.43232,.61464],[.42127,.62293],[.41298,.62707],[.35912,.62707],[.34392,.61878],[.3384,.61464],[.33425,.6105]],[[.7721,.09392],[.79006,.08564],[.8011,.08149],[.83287,.0732],[.84945,.0732],[.87293,.07735],[.87569,.08149],[.87569,.10083],[.80249,.1174],[.7942,.1174],[.7721,.11326]],[[.54972,.40055],[.55387,.39641],[.56492,.38812],[.57459,.38398],[.58425,.38398],[.60221,.39227],[.60912,.39641],[.6105,.40055],[.6105,.41989],[.60083,.42403],[.55663,.42403],[.54972,.41989]],[[.65746,.57459],[.66575,.5663],[.6768,.55801],[.6837,.55387],[.70304,.54972],[.71547,.54972],[.72928,.55387],[.75138,.56215],[.75691,.5663],[.75691,.58564],[.72928,.59807],[.68923,.59807],[.65746,.59392]],[[.35359,.38812],[.38812,.35912],[.40884,.34669],[.42127,.34254],[.45994,.34254],[.45994,.36188],[.45718,.36602],[.45166,.37017],[.3826,.41989],[.3674,.41989],[.35635,.4116],[.35359,.40746]],[[.73619,.40884],[.77072,.40884],[.77072,.42818],[.76657,.43232],[.75138,.43232],[.73619,.42818]],[[.24862,.18094],[.25138,.14779],[.25967,.14779],[.26105,.15193],[.26243,.19751],[.26243,.21685],[.26105,.22514],[.25276,.22514],[.25138,.22099],[.24862,.20028]],[[.12569,.68646],[.12845,.67818],[.13398,.67403],[.14227,.67403],[.14365,.68232],[.14365,.70166],[.13812,.7058],[.12569,.7058]],[[.10497,.15608],[.10912,.15193],[.12155,.15193],[.12431,.17265],[.12431,.19199],[.11188,.19199],[.10635,.1837],[.10497,.17956]],[[.63674,.19751],[.64088,.19337],[.64917,.18923],[.76243,.16022],[.77762,.16022],[.79834,.16436],[.80663,.16851],[.80939,.17265],[.80939,.19199],[.80525,.19613],[.73895,.21271],[.65193,.21685],[.63674,.21685]],[[-.00414,.86878],[-.00276,.8605],[-.00138,.85635],[.01105,.85221],[.02624,.85221],[.0511,.85635],[.06906,.87293],[.0732,.87707],[.0732,.89641],[.05525,.90055],[.02486,.90055],[-.00276,.89227],[-.00414,.88812]],[[.32459,.91851],[.33011,.91022],[.34116,.91022],[.36326,.9268],[.36326,.94613],[.33287,.94613],[.32459,.93785]],[[.07597,.33011],[.07735,.32597],[.08702,.32597],[.0884,.33011],[.09254,.35083],[.09254,.37017],[.09116,.41575],[.08978,.4489],[.08011,.4489],[.07873,.44061],[.07597,.40746]],[[.56077,.64503],[.57044,.64088],[.58425,.63674],[.5953,.63674],[.64365,.64503],[.65884,.64917],[.66851,.65331],[.6768,.65746],[.6768,.6768],[.64641,.68094],[.62983,.68094],[.57459,.67265],[.56077,.66436]],[[.31906,.41298],[.32044,.40884],[.33564,.40884],[.33702,.41298],[.33702,.45304],[.32182,.45304],[.31906,.43232]],[[.76796,.6616],[.76934,.65746],[.78039,.6326],[.78453,.62845],[.79282,.62845],[.7942,.6326],[.7942,.69337],[.78177,.69337],[.77348,.68923],[.76796,.68508]],[[.53591,.23481],[.55249,.22238],[.56077,.21823],[.58011,.20994],[.60359,.2058],[.64641,.2058],[.71685,.22652],[.73066,.23066],[.73066,.25],[.72928,.25414],[.53591,.25414]],[[.02486,.65331],[.03039,.60359],[.03315,.5953],[.03729,.59116],[.04558,.59116],[.04834,.59945],[.04834,.6395],[.0442,.68508],[.04144,.69337],[.02624,.69337],[.02486,.68094]],[[.83425,.12293],[.83978,.11878],[.85497,.11878],[.89503,.1395],[.89503,.15884],[.85497,.15884],[.83425,.14641]],[[.1547,.67403],[.1616,.66575],[.18232,.64917],[.21547,.64917],[.21547,.67265],[.16575,.69751],[.1547,.69751]],[[.34254,.94751],[.35083,.91436],[.35359,.91022],[.36188,.91022],[.38674,.9268],[.39227,.94337],[.39227,.96271],[.39088,.96685],[.3826,.97099],[.34254,.97099]],[[.64365,.66575],[.65884,.66575],[.68785,.66989],[.6989,.67403],[.7058,.67818],[.71685,.68646],[.7279,.6989],[.72928,.70304],[.72928,.72238],[.71547,.73895],[.70994,.74309],[.69061,.75138],[.67127,.75552],[.65746,.75552],[.64365,.68923]],[[.83564,.60773],[.8384,.60359],[.85497,.60359],[.85497,.62293],[.85359,.63122],[.84669,.63536],[.8384,.63536],[.83564,.62707]],[[.1395,.48343],[.14088,.47099],[.14917,.47099],[.15193,.47928],[.15193,.51519],[.14365,.51519],[.1395,.51105]],[[.3163,.48757],[.31768,.47928],[.32182,.47514],[.33011,.47099],[.3384,.47099],[.36188,.48343],[.36188,.50276],[.3384,.51519],[.33011,.51519],[.3163,.50691]],[[.15746,.19337],[.15884,.18094],[.16851,.18094],[.16989,.18923],[.17127,.21823],[.17127,.23757],[.16989,.28315],[.1616,.28315],[.16022,.27486],[.15746,.25414]],[[.79144,.67403],[.7942,.66989],[.79972,.66575],[.83425,.64917],[.84669,.64917],[.84669,.66851],[.84392,.6768],[.83149,.69751],[.82873,.70166],[.81768,.70166],[.7942,.69751],[.79144,.69337]],[[.46547,.71961],[.47514,.70718],[.48619,.69475],[.49033,.69061],[.49586,.68646],[.50414,.68232],[.54834,.68232],[.54834,.70166],[.54558,.7058],[.51105,.73066],[.48757,.74724],[.47652,.74724],[.46685,.74309],[.46547,.73895]],[[.12431,.52901],[.12707,.44199],[.13536,.44199],[.13812,.46271],[.14227,.52901],[.14227,.56077],[.13674,.58149],[.12845,.58149],[.12431,.54834]],[[.01381,.52901],[.01657,.52072],[.02486,.50414],[.02762,.5],[.03729,.5],[.03867,.50414],[.03867,.52348],[.03177,.54006],[.02762,.54834],[.01381,.54834]],[[.5884,.78177],[.59116,.77762],[.63122,.75276],[.64503,.74448],[.65331,.74033],[.6616,.74033],[.67956,.74448],[.67956,.76381],[.6768,.76796],[.67127,.7721],[.63674,.79696],[.60359,.8011],[.5884,.8011]],[[.77486,.2721],[.78729,.25138],[.79834,.24309],[.81215,.23481],[.82044,.23066],[.83564,.23066],[.83564,.25],[.82873,.29558],[.78729,.29558],[.77486,.29144]],[[.77901,.6616],[.78315,.65746],[.80525,.65746],[.80525,.6768],[.80387,.68094],[.77901,.68094]],[[.16989,.33011],[.17541,.24309],[.17818,.21823],[.18094,.21409],[.18923,.21409],[.19061,.21823],[.19613,.25138],[.19613,.27072],[.19475,.30387],[.18508,.36602],[.18094,.37017],[.17127,.37017],[.16989,.34945]],[[.51934,.67403],[.52348,.66989],[.53591,.6616],[.55249,.65331],[.56906,.65331],[.5732,.65746],[.5732,.6768],[.55525,.68508],[.5442,.68923],[.53177,.69337],[.51934,.69337]],[[.40193,.5],[.50552,.49171],[.51381,.49171],[.51796,.5],[.51934,.50414],[.51934,.52348],[.51519,.52762],[.50967,.53177],[.49448,.54006],[.45304,.54834],[.42818,.55249],[.40608,.55249],[.40193,.52348]],[[.11464,.48757],[.12431,.48757],[.12569,.50414],[.12569,.58978],[.1174,.58978],[.11602,.58564],[.11464,.57735]],[[.64227,.51243],[.64503,.50414],[.65608,.48343],[.66298,.47099],[.67127,.47099],[.68646,.53315],[.68646,.55249],[.66436,.55249],[.65193,.54834],[.64779,.5442],[.64227,.53177]],[[.29282,.51243],[.30939,.51243],[.32182,.52072],[.32182,.5442],[.3011,.5442],[.29282,.53177]],[[.40055,.79834],[.4116,.78177],[.41989,.78177],[.44199,.7942],[.4489,.79834],[.46133,.80663],[.46133,.83011],[.42818,.83011],[.41851,.82597],[.40055,.81768]],[[.0884,.83149],[.09392,.76934],[.09807,.76105],[.12155,.7279],[.13536,.7279],[.15884,.79834],[.15884,.82182],[.12983,.84669],[.11878,.85497],[.11188,.85912],[.09669,.85912],[.08978,.85497],[.0884,.85083]],[[.22652,.16851],[.23757,.08149],[.23895,.07735],[.25138,.07735],[.25414,.08978],[.25414,.10912],[.24309,.1837],[.24033,.19199],[.23757,.19613],[.22928,.19613],[.22652,.19199]],[[.10497,.0732],[.10912,.06492],[.11878,.06492],[.12017,.0732],[.12017,.09254],[.11878,.10497],[.11464,.11326],[.10497,.11326]],[[.23757,.77348],[.27072,.71133],[.27901,.71133],[.28315,.71547],[.28453,.71961],[.28591,.7279],[.28591,.75138],[.27486,.77624],[.2721,.78039],[.26381,.78867],[.25829,.79282],[.23757,.79282]],[[.82459,.7279],[.83149,.69475],[.84807,.69475],[.93232,.74033],[.93232,.75967],[.92265,.76381],[.90608,.76796],[.87431,.7721],[.85773,.7721],[.8453,.76796],[.83564,.76381],[.82597,.75138],[.82459,.74724]],[[-.00138,.55387],[0,.54972],[.01243,.54972],[.01243,.57735],[.00967,.58564],[.00691,.58978],[-.00138,.58978]],[[.05663,.56215],[.05801,.55801],[.07459,.55801],[.07597,.57044],[.07735,.62017],[.07735,.6395],[.0732,.66022],[.06492,.66022],[.05939,.64365],[.05801,.62707],[.05663,.59392]],[[.00552,.53729],[.00691,.52072],[.00829,.51657],[.01381,.50414],[.01796,.49586],[.02762,.49586],[.02762,.51519],[.02624,.52762],[.01934,.55249],[.01519,.56492],[.00691,.56492],[.00552,.55663]],[[.58287,.37155],[.5884,.36326],[.59669,.35912],[.61188,.35497],[.6395,.35497],[.6395,.37431],[.63536,.37845],[.59254,.39088],[.58287,.39088]],[[.1326,.14779],[.13536,.13536],[.13674,.13122],[.14503,.11878],[.15608,.11878],[.16022,.12707],[.16022,.15055],[.15746,.15884],[.15193,.16713],[.14503,.17127],[.1326,.17127]],[[.74586,.62017],[.75138,.61188],[.77624,.61188],[.78177,.61602],[.78177,.63536],[.77348,.64365],[.76243,.64365],[.74586,.6395]],[[.89917,.60359],[.90746,.59945],[.93094,.59945],[.94199,.60359],[.94199,.62707],[.93923,.63122],[.92265,.63122],[.89917,.62293]],[[.35497,.42956],[.36464,.41298],[.37017,.40884],[.37983,.40884],[.37983,.43232],[.37845,.43646],[.36878,.45718],[.3605,.45718],[.35497,.4489]],[[.32735,.34254],[.33011,.33425],[.34392,.33425],[.35083,.3384],[.35359,.34254],[.35359,.36188],[.34669,.37017],[.34254,.37431],[.33425,.37431],[.33011,.37017],[.32735,.36188]],[[.23481,.42127],[.24171,.41298],[.25276,.41298],[.25414,.41713],[.25691,.44199],[.25691,.51519],[.24862,.51519],[.24448,.51105],[.23481,.4489]],[[.00967,.74862],[.01519,.72376],[.01657,.71961],[.02486,.71961],[.02486,.74724],[.0221,.7721],[.01243,.7721],[.00967,.76796]],[[.35221,.49586],[.35497,.49171],[.36326,.48757],[.37293,.48757],[.40331,.49586],[.40331,.51519],[.37983,.51934],[.37155,.51934],[.35221,.51519]],[[.43094,.54558],[.43646,.54144],[.45028,.53315],[.47099,.53315],[.47928,.53729],[.47928,.55663],[.4779,.56077],[.46823,.56492],[.4558,.56906],[.43232,.56906],[.43094,.56492]],[[.10221,.2721],[.10359,.24724],[.11602,.24724],[.1174,.26381],[.1174,.28315],[.11326,.29558],[.1105,.29972],[.10221,.29972]],[[.20718,.7942],[.21271,.79006],[.23204,.77762],[.24033,.77762],[.25,.78177],[.25,.8011],[.24448,.80525],[.22514,.81354],[.20718,.81354]],[[.33425,.56215],[.34669,.56215],[.35497,.5663],[.35497,.58564],[.35083,.59392],[.34254,.59392],[.33564,.58564],[.33425,.58149]],[[.15608,.80249],[.16022,.79834],[.19199,.79834],[.19199,.81768],[.17541,.82182],[.15608,.82182]],[[.20304,.44613],[.20442,.4047],[.21409,.4047],[.21409,.46133],[.21271,.46547],[.20304,.46547]],[[.01796,.69475],[.02072,.69061],[.04144,.69061],[.04282,.70304],[.04282,.72238],[.03729,.73066],[.02901,.73066],[.0221,.72652],[.01796,.71823]],[[.25414,.53729],[.26381,.53729],[.26934,.54558],[.27072,.54972],[.27072,.56906],[.26934,.57735],[.26105,.57735],[.25691,.5732],[.25414,.56492]],[[.79834,.45028],[.81215,.45028],[.81768,.46271],[.82044,.47928],[.82044,.50276],[.81906,.50691],[.8163,.51105],[.80525,.51105],[.79834,.46961]],[[.05525,.84807],[.06354,.84807],[.08287,.85221],[.08564,.8605],[.08564,.87983],[.0732,.87983],[.06354,.87569],[.05663,.87155],[.05525,.8674]],[[.16989,.37983],[.17127,.35912],[.17956,.35912],[.18094,.3674],[.18094,.4116],[.17818,.46961],[.16989,.46961]],[[.17403,.62431],[.18785,.62431],[.19061,.62845],[.19337,.63674],[.19337,.65608],[.17956,.65608],[.1768,.65193],[.17403,.64365]],[[.9268,.74033],[.93508,.73204],[.94337,.73204],[.9489,.73619],[.95304,.74033],[.95304,.75967],[.9268,.75967]],[[.20028,.59116],[.20166,.58702],[.21547,.58702],[.21823,.5953],[.21823,.61878],[.20856,.61878],[.20028,.61464]],[[.08978,.06492],[.09116,.05663],[.09807,.05249],[.10635,.05249],[.10912,.06077],[.10912,.08011],[.10635,.10912],[.10359,.12155],[.09116,.12155],[.08978,.08425]],[[.05939,.27624],[.06492,.2721],[.0732,.2721],[.07735,.28039],[.07873,.28453],[.07873,.30801],[.06492,.30801],[.05939,.29972]],[[.1837,.31354],[.18923,.30525],[.1989,.30525],[.1989,.32873],[.19751,.3453],[.18923,.3453],[.1837,.33287]],[[.11326,.43785],[.11878,.42541],[.12707,.42541],[.12845,.4337],[.12845,.45304],[.12707,.49862],[.11878,.49862],[.1174,.49033],[.11326,.45718]],[[.04144,.73204],[.04282,.7279],[.0511,.71961],[.06077,.71961],[.06077,.74724],[.05387,.75552],[.04558,.75552],[.04144,.75138]],[[.24033,.14365],[.24309,.13122],[.25138,.13122],[.25552,.13536],[.25552,.16713],[.25414,.17127],[.24586,.17127],[.24033,.16298]],[[.1616,.3674],[.16436,.34254],[.17265,.34254],[.17541,.35083],[.17541,.37017],[.17265,.39503],[.16298,.39503],[.1616,.38674]],[[.0442,.49586],[.04558,.49171],[.05663,.49171],[.05801,.49586],[.05939,.50829],[.05939,.52762],[.05663,.53177],[.04834,.53177],[.04696,.52762],[.0442,.51519]]];var Vc=2172,Gc=724,fp={island:[[.391,.825],[.406,.788],[.434,.741],[.46,.707],[.484,.682],[.515,.66],[.55,.65],[.576,.643],[.603,.655],[.628,.669],[.657,.681],[.687,.697],[.716,.72],[.718,.74],[.694,.761],[.663,.784],[.629,.805],[.59,.819],[.55,.83],[.506,.829],[.466,.835],[.428,.838],[.406,.841]],channels:[{points:[[.8,.13],[.782,.177],[.758,.231],[.735,.282],[.706,.335],[.672,.388],[.641,.44],[.618,.49],[.598,.535],[.58,.57]],lines:7,spacing:3,speed:3.2},{points:[[.625,.5],[.6,.54],[.56,.58],[.52,.615],[.48,.65],[.44,.7],[.4,.755],[.35,.81],[.29,.86],[.22,.905],[.13,.94],[.02,.98]],lines:7,spacing:3.3,speed:3.6},{points:[[.74,.665],[.738,.69],[.73,.725],[.71,.765],[.67,.805],[.625,.835],[.59,.845],[.54,.85],[.49,.855],[.44,.85],[.4,.856],[.36,.87],[.32,.9],[.28,.93]],lines:5,spacing:2.7,speed:2.8}]};function tv(i,t){t.forEach(([e,n],s)=>s?i.lineTo(e*Vc,n*Gc):i.moveTo(e*Vc,n*Gc)),i.closePath()}function ev(i){let t=[];for(let e=0;e<i.length-1;e++){let n=i[Math.max(0,e-1)],s=i[e],r=i[e+1],o=i[Math.min(i.length-1,e+2)];for(let a=0;a<12;a++){let c=a/12,l=c*c,d=l*c,h=f=>.5*(2*s[f]+(-n[f]+r[f])*c+(2*n[f]-5*s[f]+4*r[f]-o[f])*l+(-n[f]+3*s[f]-3*r[f]+o[f])*d);t.push([h(0)*Vc,h(1)*Gc])}}return t.push([i.at(-1)[0]*Vc,i.at(-1)[1]*Gc]),t}function pp(){let i=new Path2D,t=new Path2D,e=r=>{let o=0;r.forEach(([a,c],l)=>{let d=r[(l+1)%r.length];o+=a*d[1]-d[0]*c}),tv(t,o<0?[...r].reverse():r)};e(fp.island),dp.forEach(e);let n=fp.channels.flatMap((r,o)=>{let a=ev(r.points),c=(r.lines-1)*r.spacing/2+5,l=a.map(([f,u],g)=>{let v=a[Math.max(0,g-1)],m=a[Math.min(a.length-1,g+1)],p=m[0]-v[0],x=m[1]-v[1],_=Math.hypot(p,x)||1;return[-x/_,p/_]}),d=f=>a.map(([u,g],v)=>[u+l[v][0]*c*f,g+l[v][1]*c*f]);return[...d(1),...d(-1).reverse()].forEach(([f,u],g)=>g?i.lineTo(f,u):i.moveTo(f,u)),i.closePath(),Array.from({length:r.lines},(f,u)=>{let g=new Path2D,v=(u-(r.lines-1)/2)*r.spacing,m=0;return a.forEach(([p,x],_)=>{let M=a[Math.max(0,_-1)],b=a[Math.min(a.length-1,_+1)],S=b[0]-M[0],y=b[1]-M[1],w=Math.hypot(S,y)||1;_&&(m+=Math.hypot(p-M[0],x-M[1]));let L=Math.sin(m*.055+u*.4)*1.5,R=p-y/w*(v+L),A=x+S/w*(v+L);_?g.lineTo(R,A):g.moveTo(R,A)}),{path:g,speed:r.speed,phase:u*29+o*57,opacity:.095+u%3*.016}})});function s(r,o){r.save(),r.clip(i),r.strokeStyle="#78745f",r.lineWidth=.72,r.lineCap="round";for(let a of n)r.setLineDash([]),r.globalAlpha=.035,r.stroke(a.path),r.setLineDash([53,17,87,25,119,23]),r.lineDashOffset=-(o*a.speed+a.phase),r.globalAlpha=a.opacity,r.stroke(a.path);r.globalCompositeOperation="destination-out",r.globalAlpha=1,r.fill(t),r.restore()}return{render:s,mask:i,land:t,streams:n}}var gp=(i,t=0,e=1)=>Math.max(t,Math.min(e,i)),mp=i=>{let t=gp(i);return t*t*(3-2*t)},Qs=2172,Hc=724;function nv(){let i=document.createElement("canvas");i.width=640,i.height=150;let t=i.getContext("2d");for(let e=0;e<15;e++){let n=42+e*39,s=78+Math.sin(e*1.8)*13,r=40+Math.sin(e*2.1)*11,o=t.createRadialGradient(n,s,0,n,s,r);o.addColorStop(0,"rgba(255,250,233,.6)"),o.addColorStop(.5,"rgba(255,250,233,.3)"),o.addColorStop(1,"rgba(255,250,233,0)"),t.fillStyle=o,t.save(),t.translate(n,s),t.scale(1.6,.64),t.translate(-n,-s),t.fillRect(n-r,s-r,r*2,r*2),t.restore()}return i}var iv=[{x:.105,y:.28,w:.23,h:.15,cycle:29,phase:.21},{x:.245,y:.37,w:.18,h:.12,cycle:33,phase:.64},{x:.43,y:.28,w:.23,h:.13,cycle:31,phase:.43},{x:.59,y:.19,w:.2,h:.12,cycle:38,phase:.81},{x:.835,y:.3,w:.24,h:.15,cycle:35,phase:.34},{x:.91,y:.48,w:.17,h:.12,cycle:30,phase:.76}];function xp(i,{reducedMotion:t=!1}={}){let e=i.getContext("2d",{alpha:!0}),n=nv(),s=pp(),r={elapsed:0,nextFlock:.7,flocks:[],spawned:0,frameAge:0,rendered:0},o=405267,a=1,c=()=>(o=Math.imul(o,1664525)+1013904223>>>0,o/4294967296);i.hidden=t;function l(u){let g=Math.round(Math.min(2400,u.mapWidth*Math.min(window.devicePixelRatio||1,1.25)));g<=0||g===i.width||(i.width=g,i.height=Math.round(g*Hc/Qs),a=g/Qs,h())}function d(u){let g=u.mapWidth/Qs,v=(-u.offset-u.artLeft)/g,m=u.width/g,x=c()<.5?v-65:v+m+65,_=v+m*(.43+c()*.13),M=(u.height*(.16+c()*.46)-u.top-u.artTop)/g,b=Array.from({length:5+Math.floor(c()*4)},(S,y)=>({dx:-(y%2?1:-1)*(14+y*8),dy:(y-3)*(6+c()*3),size:6.5+c()*3,flap:.85+c()*.38,phase:c()*Math.PI*2}));r.flocks.push({id:++r.spawned,fromX:x,toX:_,baseY:M,x,y:M,age:0,duration:19+c()*7,opacity:0,birds:b}),r.nextFlock=12+c()*8}function h(){if(!t){e.setTransform(a,0,0,a,0,0),e.clearRect(0,0,Qs,Hc),e.lineCap="round",e.lineJoin="round",s.render(e,r.elapsed);for(let u of iv){let g=(r.elapsed/u.cycle+u.phase)%1,v=Math.sin(g*Math.PI)**2*.46,m=(u.x-u.w/2)*Qs+(g-.5)*66,p=(u.y-u.h/2)*Hc+Math.sin(g*Math.PI)*4;e.globalAlpha=v,e.drawImage(n,m,p,u.w*Qs,u.h*Hc*1.2)}e.strokeStyle="#504f40",e.fillStyle="#504f40";for(let u of r.flocks){let g=Math.sign(u.toX-u.fromX);e.globalAlpha=u.opacity*.62;for(let v of u.birds){let m=u.x+v.dx*g,p=u.y+v.dy,x=Math.sin(r.elapsed*v.flap*Math.PI*2+v.phase)*v.size*.62;e.lineWidth=1.15,e.beginPath(),e.moveTo(m-v.size,p+x),e.quadraticCurveTo(m-v.size*.4,p-1,m,p+.8),e.quadraticCurveTo(m+v.size*.4,p-1,m+v.size,p+x),e.stroke(),e.globalAlpha*=.75,e.fillRect(m-.5,p+.2,1,2.6),e.globalAlpha=u.opacity*.62}}e.globalAlpha=1,r.rendered++}}function f(u,g){if(!t){r.elapsed+=u,r.frameAge+=u,r.nextFlock-=u,r.nextFlock<=0&&g.mapWidth&&d(g);for(let v of r.flocks){v.age+=u;let m=gp(v.age/v.duration);v.x=v.fromX+(v.toX-v.fromX)*m,v.y=v.baseY+Math.sin(m*Math.PI)*10,v.opacity=mp(m/.09)*(1-mp((m-.4)/.6))}r.flocks=r.flocks.filter(v=>v.age<v.duration),r.frameAge>=1/30&&(r.frameAge%=1/30,h())}}return{state:r,water:s,resize:l,update:f,render:h}}var yp="http://www.w3.org/2000/svg",ei=i=>Number(i.toFixed(3)),_p=i=>i.map(([t,e],n)=>`${n?"L":"M"}${ei(t)} ${ei(e)}`).join(" "),go=(i,t)=>{let e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)};function vp(i,t,e,n){let s=t[0]-i[0],r=t[1]-i[1],o=Math.hypot(s,r),a=[-r/o,s/o],c=Math.max(20,Math.ceil(o/10));return Array.from({length:c+1},(l,d)=>{let h=d/c,f=Math.sin(h*19+n)*e*.18+(go(d,n)-.5)*e*.28,u=.44+Math.sin(Math.PI*h)**.24*.52+Math.sin(h*31+n)*.17;return{x:i[0]+s*h+a[0]*f,y:i[1]+r*h+a[1]*f,half:e*u*.5,t:h}})}function mo(i,t,e,n){let s=t[0]-i[0],r=t[1]-i[1],o=Math.hypot(s,r),a=[-r/o,s/o],c=vp(i,t,e,n),l=f=>c.map(u=>[u.x+a[0]*u.half*f,u.y+a[1]*u.half*f]),d=_p([...l(1),...l(-1).reverse()])+"Z",h=[[.1,.17],[.32,.37],[.56,.64],[.81,.87]].map(([f,u],g)=>{let v=c.filter(_=>_.t>=f&&_.t<=u);if(v.length<2)return"";let m=g%2?-.32:.29,p=v.map(_=>[_.x+a[0]*_.half*m,_.y+a[1]*_.half*m]),x=[...v].reverse().map(_=>[_.x+a[0]*(_.half*m+e*.13),_.y+a[1]*(_.half*m+e*.13)]);return _p([...p,...x])+"Z"}).join("");return`<path d="${d}${h}" fill-rule="evenodd"/>`}function sv(i,t){let e=[],n=[[0,0],[i,0],[i,t],[0,t],[0,0]];for(let s=0;s<4;s++){let r=n[s],o=n[s+1],a=Math.ceil(Math.hypot(o[0]-r[0],o[1]-r[1])/4);for(let c=0;c<a;c++){let l=c/a,d=go(c,s+9)>.96?1.4:0,h=.7+go(c,s+1)*.8+Math.sin(c*.7)*.35+d,f=r[0]+(o[0]-r[0])*l+(s===1?-h:s===3?h:0),u=r[1]+(o[1]-r[1])*l+(s===0?h:s===2?-h:0);e.push([f/i,u/t])}}return e.map(([s,r],o)=>`${o?"L":"M"}${s.toFixed(6)} ${r.toFixed(6)}`).join(" ")+"Z"}function Dh(i,t,e){let n=i.matches("svg")?i:document.createElementNS(yp,"svg");return n.setAttribute("viewBox",t),n.setAttribute("preserveAspectRatio","none"),n.setAttribute("aria-hidden","true"),n.innerHTML=e,n!==i&&i.append(n),n}function Mp(i){let o=[[[10,12],[2161,10],4.1,2],[[2161,9],[2159,714],3.8,6],[[2164,713],[10,712],4.3,4],[[12,716],[10,11],4,9]],a=o.flatMap(f=>vp(...f)).map((f,u)=>`${u?"L":"M"}${(f.x/2172).toFixed(6)} ${(f.y/724).toFixed(6)}`).join(" ")+"Z",c=Array.from({length:110},(f,u)=>{let g=u%4,v=go(u,4),m=go(u,8),p=g===1?2222-m*25:g===3?m*25:v*2222,x=g===0?m*25:g===2?774-m*25:v*774;return`<path d="M${ei(p)} ${ei(x)}q${ei(5+m*16)} ${ei((v-.5)*4)} ${ei(14+v*31)} ${ei((m-.5)*3)}" fill="none" stroke="${u%3?"#d0c9a6":"#536553"}" stroke-width="${ei(.6+m*1.8)}" opacity="${ei(.08+v*.16)}"/>`}).join("");Dh(i.querySelector(".map-mount"),"0 0 2222 774",`<defs>
    <filter id="map-cloth-grain"><feTurbulence type="fractalNoise" baseFrequency=".045 .21" numOctaves="2" seed="8"/><feColorMatrix type="saturate" values="0"/></filter>
    <clipPath id="map-paper-edge" clipPathUnits="objectBoundingBox"><path d="${sv(2172,724)}"/></clipPath>
    <clipPath id="map-picture-edge" clipPathUnits="objectBoundingBox"><path d="${a}"/></clipPath>
    <linearGradient id="map-cloth-tone"><stop stop-color="#879580"/><stop offset=".48" stop-color="#9ba38c"/><stop offset="1" stop-color="#7f907a"/></linearGradient>
  </defs><rect width="100%" height="100%" fill="url(#map-cloth-tone)"/><rect width="100%" height="100%" filter="url(#map-cloth-grain)" opacity=".10"/>${c}`);let l=i.querySelector(".map-ink-border");Dh(l,"0 0 2172 724",`<g fill="#4d493a" opacity=".76">
    ${o.map(f=>mo(...f)).join("")}
  </g>`);let d=i.querySelector(".map-title"),h=document.createElementNS(yp,"svg");return h.classList.add("map-title-paper"),d.prepend(h),Dh(h,"0 0 72 230",`<path d="M5 5 35 3 66 6 67 91 65 159 67 224 34 226 5 223 6 146 4 70Z" fill="#efe4c5" fill-opacity=".88"/><g fill="#4b4839" opacity=".88">${mo([5,5],[67,6],2.5,12)}${mo([66,4],[66,225],2.6,14)}${mo([68,224],[4,224],2.5,17)}${mo([5,226],[5,4],2.8,19)}</g>`),{gutter:25,width:2172,height:724}}var js=(i,t,e)=>Math.max(t,Math.min(e,i)),Sp=i=>{let t=js(i,0,1);return t*t*(3-2*t)},rv="http://www.w3.org/2000/svg",ov=[{id:"wujiacun",x:.195,y:.73,playable:!0},{id:"reserved-pass",x:.44,y:.42,playable:!1},{id:"reserved-island",x:.56,y:.73,playable:!1},{id:"reserved-town",x:.76,y:.48,playable:!1},{id:"reserved-foothill",x:.91,y:.73,playable:!1}];function av(i){let e=[];for(let h=0;h<=180;h++){let f=h/180,u=.48+f*5.47,g=1+Math.sin(u*3.1+.7)*.04+Math.cos(u*5.2)*.018,v=198+Math.cos(u)*174*g,m=150+Math.sin(u)*111*g+Math.sin(u*2)*3,x=.65+Math.pow(Math.sin(Math.PI*f),.48)*(11.6+Math.sin(f*13+.4)*3);e.push({t:f,x:v,y:m,angle:u,width:x})}let n=h=>h.map((f,u)=>`${u?"L":"M"}${f[0].toFixed(2)} ${f[1].toFixed(2)}`).join(" "),s=(h,f,u=1)=>[h.x+Math.cos(h.angle)*h.width*f*u,h.y+Math.sin(h.angle)*h.width*f*u],r=n(e.map(h=>s(h,1)))+" "+n([...e].reverse().map(h=>s(h,-1))).replace(/^M/,"L")+" Z",o=[[.2,.28],[.4,.46],[.66,.77],[.84,.91]].map(([h,f],u)=>{let g=e.filter(v=>v.t>=h&&v.t<=f);return`<path d="${n(g.map(v=>s(v,u%2?-.24:.26,.75)))}" fill="none" stroke="#000" stroke-width="${u%2?.9:1.3}" stroke-linecap="round"/>`}).join(""),a=document.createElementNS(rv,"svg");a.setAttribute("viewBox","0 0 400 300"),a.setAttribute("preserveAspectRatio","none"),a.setAttribute("aria-hidden","true"),a.classList.add("level-brush-ring"),a.innerHTML=`<defs>
    <mask id="level-ring-reveal" maskUnits="userSpaceOnUse" x="0" y="0" width="400" height="300">
      <path class="brush-reveal" d="${n(e.map(h=>[h.x,h.y]))}" pathLength="1" fill="none" stroke="white" stroke-width="38" stroke-linecap="round" stroke-dasharray="1" stroke-dashoffset="1"/>
    </mask>
    <mask id="level-ring-dry" maskUnits="userSpaceOnUse" x="0" y="0" width="400" height="300"><rect width="400" height="300" fill="white"/>${o}</mask>
  </defs>
  <g mask="url(#level-ring-reveal)"><path d="${r}" fill="#b43c28" opacity=".91" mask="url(#level-ring-dry)"/></g>
  <ellipse class="brush-tip" cx="0" cy="0" rx="6" ry="3.6" fill="#ad3928" opacity="0"/>`,i.append(a);let c=a.querySelector(".brush-reveal"),l=a.querySelector(".brush-tip");function d(h){let f=js(h,0,1),u=e[Math.round(f*180)];c.setAttribute("stroke-dashoffset",String(1-f)),l.setAttribute("transform",`translate(${u.x} ${u.y}) rotate(${u.angle*180/Math.PI+30}) scale(${.32+u.width/8})`),l.setAttribute("opacity",f>0&&f<1?".8":"0")}return{setProgress:d}}function bp(i,{reducedMotion:t=!1,onEnter:e,onBack:n,canInteract:s=()=>!0}={}){let r=i.querySelector(".map-scroll"),o=i.querySelector(".map-track"),a=i.querySelector(".map-painting"),c=i.querySelector(".map-sheet"),l=i.querySelector(".map-art"),d=i.querySelector(".map-title"),h=i.querySelector(".map-location"),f=i.querySelector("#level-one"),u=i.querySelector("#map-back"),g=Mp(i),v=av(h),m=xp(i.querySelector(".map-atmosphere"),{reducedMotion:t}),p={active:!1,loaded:!1,selecting:!1,handedOff:!1,age:0,progress:0,offset:0,velocity:0,width:0,height:0,mapWidth:0,mapHeight:0,outerWidth:0,outerHeight:0,artLeft:0,artTop:0,unitScale:1,top:0,viewed:!1,interacted:!1},x=ov[0],_=null,M=0,b=null,S=Promise.all([...i.querySelectorAll("img")].map(F=>F.decode())).then(()=>{p.loaded=!0});S.catch(()=>{});let y=()=>p.active&&!p.selecting&&s(),w=()=>Math.min(0,p.width-p.outerWidth),L=()=>p.artLeft+x.x*p.mapWidth;function R(){o.style.transform=`translate3d(${p.offset}px, ${p.top}px, 0)`}function A(){let F=r.getBoundingClientRect();if(!F.width||!F.height)return;let z=p.mapWidth?(p.width*.5-p.offset-p.artLeft)/p.mapWidth:x.x;p.width=F.width,p.height=F.height;let X=a.naturalWidth||2172,j=a.naturalHeight||724,q=X+g.gutter*2,Z=j+g.gutter*2,nt=Math.max(F.height/Z,F.width*1.04/q);p.unitScale=nt,p.mapWidth=X*nt,p.mapHeight=j*nt,p.outerWidth=q*nt,p.outerHeight=Z*nt,p.artLeft=g.gutter*nt,p.artTop=g.gutter*nt,p.top=(F.height-p.outerHeight)/2,o.style.width=`${p.outerWidth}px`,o.style.height=`${p.outerHeight}px`,Object.assign(c.style,{left:`${p.artLeft}px`,top:`${p.artTop}px`,width:`${p.mapWidth}px`,height:`${p.mapHeight}px`}),Object.assign(l.style,{left:"0px",top:"0px",width:`${p.mapWidth}px`,height:`${p.mapHeight}px`}),Object.assign(d.style,{left:`${78*nt}px`,top:`${47*nt}px`,width:`${72*nt}px`,height:`${184*nt}px`,fontSize:`${Math.max(16,32*nt)}px`});let rt=F.height<=540?10:16;i.style.setProperty("--map-back-top",`${Math.max(rt,p.top+p.artTop+16*nt+rt)}px`),i.style.setProperty("--map-back-right",`${(g.gutter+16)*nt+rt}px`),h.style.setProperty("--village-size",`${232*nt}px`),h.style.left=`${x.x*100}%`,h.style.top=`${x.y*100}%`,p.offset=js(p.width*.5-z*p.mapWidth-p.artLeft,w(),0),p.velocity=0,b=null,R(),m.resize(p)}function E(){p.interacted=!0,i.classList.add("has-browsed")}function C(F){p.offset=js(F,w(),0),R()}function T(){if(!y()||performance.now()<M)return;p.selecting=!0,p.handedOff=!1,p.age=0,p.progress=0,p.velocity=0,i.classList.add("is-choosing"),i.setAttribute("aria-busy","true"),f.disabled=u.disabled=!0,E(),v.setProgress(0);let F=js(p.width*.5-L(),w(),0);Math.abs(F-p.offset)>2&&(b={from:p.offset,to:F,age:0})}f.addEventListener("click",T),u.addEventListener("click",()=>{y()&&n?.()}),r.addEventListener("pointerdown",F=>{!y()||!F.isPrimary||F.button!==0||(p.velocity=0,b=null,_={id:F.pointerId,x:F.clientX,offset:p.offset,lastX:F.clientX,lastTime:F.timeStamp,velocity:0,moved:!1})}),r.addEventListener("pointermove",F=>{if(!_||_.id!==F.pointerId)return;let z=F.clientX-_.x;if(!_.moved&&Math.abs(z)>7&&(_.moved=!0,r.setPointerCapture(F.pointerId),i.classList.add("is-dragging"),E()),!_.moved)return;F.preventDefault();let X=Math.max(.008,(F.timeStamp-_.lastTime)/1e3);_.velocity=_.velocity*.35+js((F.clientX-_.lastX)/X,-1800,1800)*.65,_.lastX=F.clientX,_.lastTime=F.timeStamp,C(_.offset+z)});function N(F){if(!_||_.id!==F.pointerId)return;let z=_.moved;p.velocity=z&&!t&&F.type!=="pointercancel"&&F.timeStamp-_.lastTime<90?_.velocity:0,z&&(M=performance.now()+320),_=null,i.classList.remove("is-dragging"),r.hasPointerCapture(F.pointerId)&&r.releasePointerCapture(F.pointerId)}r.addEventListener("pointerup",N),r.addEventListener("pointercancel",N),r.addEventListener("lostpointercapture",F=>{F.target!==r||r.hasPointerCapture(F.pointerId)||_?.id===F.pointerId&&(_=null,i.classList.remove("is-dragging"))}),r.addEventListener("wheel",F=>{if(!p.active||(F.preventDefault(),!y()))return;E(),p.velocity=0,b=null;let z=F.deltaMode===1?20:F.deltaMode===2?p.width:1;C(p.offset-(Math.abs(F.deltaX)>Math.abs(F.deltaY)?F.deltaX:F.deltaY)*z)},{passive:!1});function D(){i.hidden=!1,i.inert=!1,i.setAttribute("aria-hidden","false"),i.removeAttribute("aria-busy"),p.active=!0,p.selecting=!1,p.handedOff=!1,p.age=0,p.progress=0,p.velocity=0,f.disabled=u.disabled=!1,i.classList.remove("is-choosing","is-dragging"),v.setProgress(0),A(),p.viewed||(C(p.width*.5-L()),p.viewed=!0)}function k(){i.hidden=!0,i.inert=!0,i.setAttribute("aria-hidden","true"),i.removeAttribute("aria-busy"),p.active=!1,p.selecting=!1,p.velocity=0,_=null,b=null}function H(F){if(!p.active)return;if(m.update(F,p),b){b.age+=F;let X=t?1:Sp(b.age/.24);C(b.from+(b.to-b.from)*X),X===1&&(b=null)}else if(!_&&Math.abs(p.velocity)>2&&!p.selecting){let X=Math.exp(-9*F),j=p.offset;C(p.offset+p.velocity*(1-X)/9),p.velocity*=X,(p.offset===j||p.offset===w()||p.offset===0)&&(p.velocity=0)}if(!p.selecting||p.handedOff)return;p.age+=F;let z=t?.12:.52;p.progress=Sp(p.age/z),v.setProgress(p.progress),p.age>=z+.12&&(p.handedOff=!0,e?.()===!1&&(p.selecting=!1,i.classList.remove("is-choosing"),i.removeAttribute("aria-busy"),f.disabled=u.disabled=!1))}function I(F){return p.active?p.selecting&&["Escape","Enter","Space","ArrowLeft","ArrowRight"].includes(F.code)?(F.preventDefault(),!0):y()?F.key==="Escape"?(F.preventDefault(),n?.(),!0):["ArrowLeft","ArrowRight","Home","End"].includes(F.key)?(F.preventDefault(),p.velocity=0,b=null,E(),C(F.key==="Home"?0:F.key==="End"?w():p.offset+p.width*(F.key==="ArrowLeft"?.18:-.18)),!0):!1:!1:!1}return new ResizeObserver(A).observe(r),S.then(A).catch(()=>{}),{state:p,atmosphere:m,ready:S,show:D,hide:k,update:H,handleKey:I,focus:()=>f.focus({preventScroll:!0})}}var xo=document.querySelector("#viewport"),Oh=document.querySelector("#error"),Nh=document.querySelector("#squad-card"),Wc=document.querySelector("#engineer-card"),cv=document.querySelector("#wave-status"),Xc=document.querySelector("#pause-game"),lv=document.querySelector("#game"),Uh=document.querySelector("#start-screen"),Ui=document.querySelector("#start-game"),Fh=cp(),wp=.66,Tp=.925,hv=1.3;function uv(){try{return new Vs({alpha:!0,antialias:!0})}catch{Oh.hidden=!1}}var Ap=uv();Ap&&dv(Ap);function dv(i){i.setClearColor(15068644,1),i.shadowMap.enabled=!0,i.shadowMap.type=Qi,i.shadowMap.autoUpdate=!1,i.localClippingEnabled=!0,i.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),xo.append(i.domElement);let t=new Wi;t.fog=new xr(15068644,36,63);let e=new fi(-10,10,8,-8,.1,100),n=new B(0,.85,.5),s=If(t),r=Pf(s.tiles),o=Rh(r),a=Rh(r,{engineer:!0}),c=ip(s.home),l=$f();t.add(l.group);let d=ep(t),h=[...s.terrain,...s.deck],f=new Gr,u=new et,g=s.tiles.get(Fe(1,0))??s.tiles.get(Fe(0,0)),v=s.tiles.get(Fe(-1,1))??s.tiles.get(Fe(0,1))??g,m=rp({world:s,navigation:r,squad:o,waves:l,base:c,effects:d,spawn:g,engineers:a,engineerSpawn:v}),p=wp,x=1,_=!1,M="militia",b=!1,S="menu",y=0,w=window.matchMedia("(prefers-reduced-motion: reduce)").matches,L=hp(document.querySelector("#scene-transition"),{reducedMotion:w}),R=up(document.querySelector("#pause-menu"),{reducedMotion:w,onPauseChange(Y){b=Y,Fh.setPaused(Y),document.querySelector("#play-ui").inert=Y,xo.inert=Y,Y&&(I=null,z=null,F.clear(),i.domElement.classList.remove("is-dragging"))},returnFocus:()=>Xc}),A=()=>S==="playing"&&!b&&!L.busy,E=bp(document.querySelector("#level-screen"),{reducedMotion:w,canInteract:()=>S==="map"&&!L.busy&&j,onEnter:()=>St("playing"),onBack:()=>St("menu")}),C=()=>M==="engineers"?a:o,T=()=>M==="engineers"?m.engineerOrders:m,N=op({reducedMotion:w}),D=1,k=new Set,H=null,I=null,F=new Map,z=null,X=0,j=!0,q=0,Z=0,nt="";t.add(new zr(16120821,13360346,2.36));let rt=new Vr(16773078,1.6);rt.position.set(-7.8,22,9.3),rt.castShadow=!0,rt.shadow.mapSize.set(2048,2048),Object.assign(rt.shadow.camera,{left:-15,right:15,top:14,bottom:-14,near:.5,far:48}),rt.shadow.bias=-3e-4,rt.shadow.normalBias=.022,rt.shadow.radius=4.5,t.add(rt),t.add(o.group),t.add(a.group);let ct=new Jt;ct.name="\u90E8\u7F72\u79FB\u52A8\u683C";let _t=N.tileMaterial(new $e({color:"#596641",transparent:!0,opacity:.21,depthWrite:!1,toneMapped:!1})),Xt=N.tileMaterial(new $e({color:"#f1f1c2",transparent:!0,opacity:.32,depthWrite:!1,toneMapped:!1})),Pt=N.tileMaterial(new $e({color:"#dcf6c7",transparent:!0,opacity:.89,depthWrite:!1,toneMapped:!1})),Nt=N.tileMaterial(new $e({color:"#f0bc76",transparent:!0,opacity:.72,depthWrite:!1,toneMapped:!1})),Ht=new $e({color:"#fff4d4",transparent:!0,depthWrite:!1,toneMapped:!1});t.add(ct);let dt=new Jt,Mt=new Jt,yt=new Jt;dt.name="\u6307\u5411\u79FB\u52A8\u683C",Mt.name="\u90E8\u7F72\u786E\u8BA4\u843D\u70B9",yt.name="\u5F53\u524D\u90E8\u7F72\u683C",t.add(dt,Mt,yt);let Rt=new Jt;Rt.name="\u90E8\u7F72\u786E\u8BA4\u6807\u8BB0";let It=new Xn().moveTo(0,-.15).quadraticCurveTo(-.12,0,-.12,.06).quadraticCurveTo(-.12,.18,0,.18).quadraticCurveTo(.12,.18,.12,.06).quadraticCurveTo(.12,0,0,-.15),V=new se(new Ur(It),new $e({color:"#645848",transparent:!0,depthWrite:!1})),J=new se(V.geometry,Ht);V.renderOrder=6,J.renderOrder=7,J.position.set(0,.003,.006),J.scale.setScalar(.82),Rt.add(V,J),t.add(Rt),Rt.visible=!1,i.domElement.addEventListener("webglcontextlost",Y=>{Y.preventDefault(),j=!1,S==="menu"&&(Ui.disabled=!0),Oh.hidden=!1}),i.domElement.addEventListener("webglcontextrestored",()=>{Oh.hidden=!0,j=!0,S==="menu"&&(Ui.disabled=!1),i.shadowMap.needsUpdate=!0});function gt(){let{width:Y,height:it}=xo.getBoundingClientRect();if(!Y||!it)return;let at=Y/it,bt=Y<=620?14.8:20.1,zt=Tt.clamp(32.8/at,16.4,17.9),mt=Math.max(zt,bt/at)/x;e.left=-mt*at/2,e.right=mt*at/2,e.top=mt/2,e.bottom=-mt/2,e.position.copy(n).add(new B(Math.sin(p)*25,21,Math.cos(p)*25)),e.lookAt(n),e.updateProjectionMatrix(),e.updateMatrixWorld(),(Y!==q||it!==Z)&&(q=Y,Z=it,i.setSize(Y,it,!1)),Rt.quaternion.copy(e.quaternion)}function Ut(Y){for(let it of Y.children)it.geometry.dispose();Y.clear()}function At(Y,it,at,bt,zt){Ut(Y),it&&Y.add(fv(it,at,.475,bt,zt))}function G(){let Y=[g];k.add(g);for(let it=0;it<Y.length;it++){let at=Y[it];for(let bt of at.neighbors)k.has(bt)||(k.add(bt),Y.push(bt))}for(let[it,at,bt,zt]of[[_t,.481,.02,1],[Xt,.468,.033,2]]){let mt=Y.map(ne=>Ep(ne,at,bt)),Vt=new se(xc(mt),it);Vt.renderOrder=zt,ct.add(Vt);for(let ne of mt)ne.dispose()}}function jt(Y,it=!1){H!==Y&&(H=Y,At(dt,Y,Pt,.045,3)),i.domElement.classList.toggle("is-target",!!Y||it)}function qt(){let{mode:Y}=T().state,{result:it}=m.state;Nh.setAttribute("aria-pressed",String(_&&M==="militia")),Wc.setAttribute("aria-pressed",String(_&&M==="engineers")),Fh.setSelection(_&&!it,M);let at=C().members.filter(zt=>zt.hp>0).length,bt=_&&at>0&&!it&&["field","moving","returning","approaching","extinguishing"].includes(Y);N.setActive(bt,T().anchor),ct.visible=N.state.progress>0,yt.visible=ct.visible,dt.visible=ct.visible}function Bt(Y,it=M){if(!(Y&&!A())){if(M=it,_=!!Y&&!m.state.result&&C().members.some(at=>at.hp>0&&!at.inside),_){let at=T(),bt=r.tileAt(at.anchor)??at.state.settled;At(yt,bt,Nt,.051,4),jt(null)}else H=null,i.domElement.classList.remove("is-target");qt()}}function ht(){let{destination:Y}=T().state;At(Mt,Y,Ht,.054,5),D=Y?0:1,Rt.visible=!!Y,Mt.visible=!!Y,Y&&(Ht.opacity=V.material.opacity=1,Rt.position.set(Y.x,pe(Y.x,Y.z)+.39,Y.z))}function te(Y){!_||!k.has(Y)||!T().orderMove(Y)||(ht(),Bt(!1))}function kt(Y){let it=i.domElement.getBoundingClientRect();u.set((Y.clientX-it.left)/it.width*2-1,1-(Y.clientY-it.top)/it.height*2),f.setFromCamera(u,e),o.group.updateMatrixWorld(!0),a.group.updateMatrixWorld(!0);let at=f.intersectObjects(o.targets,!1)[0],bt=f.intersectObjects(a.targets,!1)[0],zt=bt&&(!at||bt.distance<at.distance)?{...bt,team:"engineers"}:at?{...at,team:"militia"}:null;c.group.updateMatrixWorld(!0);let mt=!c.state.destroyed&&f.intersectObjects(c.targets,!1)[0];if(mt&&(!zt||mt.distance<zt.distance))return{home:!0};if(!zt&&!_)return{};let Vt=f.intersectObjects(h,!1)[0],Ct=f.intersectObjects(s.blockers,!1)[0]?.distance??1/0;if(zt&&zt.distance<=(Vt?.distance??1/0)&&zt.distance<Ct)return{unit:zt.team};if(!Vt||Ct<Vt.distance-.045)return{};let xe=s.deck.includes(Vt.object)?0:qs(Vt.point.x),De=s.tiles.get(Fe(xe,qs(Vt.point.z)));return k.has(De)?{tile:De}:{}}function Qt(Y){if(!A())return;let{unit:it,tile:at,home:bt}=kt(Y);bt?(_?(M==="engineers"?m.engineerOrders.orderExtinguish():m.orderReturn())&&Bt(!1):["entering","recovering","exiting"].includes(m.state.mode)?m.orderReturn()&&Bt(!1):c.state.replenishmentBlocked||Bt(!0,"militia"),qt()):it?Bt(!(_&&M===it),it):at&&_?te(at):_&&Bt(!1)}let O=i.domElement;function P(){let[Y,it]=F.values();return Y&&it?Y.distanceTo(it):0}O.addEventListener("contextmenu",Y=>{Y.preventDefault(),Bt(!1)}),O.addEventListener("pointerdown",Y=>{if(A()){if(Y.pointerType==="touch"&&(F.set(Y.pointerId,new et(Y.clientX,Y.clientY)),O.setPointerCapture(Y.pointerId),F.size>=2)){z={distance:Math.max(1,P()),zoom:x},I=null,O.classList.remove("is-dragging"),jt(null);return}I||Y.button!==0||(I={id:Y.pointerId,x:Y.clientX,y:Y.clientY,angle:p,moved:!1},O.setPointerCapture(Y.pointerId))}}),O.addEventListener("pointermove",Y=>{if(!A())return;if(F.get(Y.pointerId)?.set(Y.clientX,Y.clientY),z){let zt=P();zt&&(x=Tt.clamp(z.zoom*zt/z.distance,Tp,1.85),gt());return}if(I&&I.id!==Y.pointerId)return;if(I){let zt=Y.clientX-I.x;(I.moved||Math.hypot(zt,Y.clientY-I.y)>5)&&(I.moved=!0,p=I.angle-zt*.009,O.classList.add("is-dragging"),jt(null),gt());return}let{unit:it,tile:at,home:bt}=kt(Y);jt(_?at??null:null,it||bt)});function K(Y,it){if(F.delete(Y.pointerId),z){F.size||(z=null);return}if(I?.id!==Y.pointerId)return;let{moved:at}=I;I=null,O.classList.remove("is-dragging"),it&&!at&&Qt(Y)}O.addEventListener("pointerup",Y=>K(Y,!0)),O.addEventListener("lostpointercapture",Y=>K(Y,!1)),O.addEventListener("pointerleave",()=>jt(null)),O.addEventListener("wheel",Y=>{Y.preventDefault(),A()&&(x=Tt.clamp(x*Math.exp(-Y.deltaY*.001),Tp,1.85),jt(null),gt())},{passive:!1}),Nh.addEventListener("click",()=>Bt(!(_&&M==="militia"),"militia")),Wc.addEventListener("click",()=>Bt(!(_&&M==="engineers"),"engineers")),document.querySelector("#pause-restart").addEventListener("click",()=>St("playing")),document.querySelector("#return-to-menu").addEventListener("click",()=>St("menu")),document.querySelector("#restart-battle").addEventListener("click",()=>St("playing"));function xt(){if(R.active){R.close();return}!A()||m.state.result||R.open()}Xc.addEventListener("click",xt);function pt(){let{wave:Y,waves:it}=l.state,at=`\u7B2C ${Y} / ${it} \u6CE2`;at!==nt&&(nt=at,cv.textContent=at)}function wt(){Xc.disabled=!!m.state.result;for(let[at,bt,zt]of[[o,Nh,"#squad-state"],[a,Wc,"#engineer-state"]]){let mt=at.members.filter(Vt=>Vt.hp>0);document.querySelector(zt).textContent=`${mt.length} / ${at.members.length}`,bt.disabled=mt.length===0||!!m.state.result,bt.querySelectorAll(".pips i").forEach((Vt,ne)=>{let Ct=at.members[ne];Vt.classList.toggle("is-dead",Ct.hp<=0),Vt.style.opacity=Ct.hp>0?String(.35+.65*Ct.hp/Ct.maxHp):"",Vt.title=Ct.hp>0?`${ne===0?"\u9886\u961F":"\u961F\u5458"} \xB7 ${Math.ceil(Ct.hp)} / ${Ct.maxHp}`:"\u5DF2\u9635\u4EA1"})}let Y=document.querySelector("#engineer-work");Y.hidden=!m.engineerOrders.working,Wc.classList.toggle("is-working",m.engineerOrders.working),Y.querySelectorAll("i").forEach((at,bt)=>{let zt=a.members[bt];at.style.transform=`scaleX(${zt.hp>0?Tt.clamp(zt.workProgress/Kt.extinguishSeconds,0,1):0})`,at.parentElement.classList.toggle("is-dead",zt.hp<=0)});let it=document.querySelector("#battle-result");it.hidden=!m.state.result||m.state.resultAge<(m.state.result==="won"?Kt.victoryDelay:Kt.defeatDelay),m.state.result&&(document.querySelector("#result-title").textContent=m.state.result==="won"?"\u6751\u5E84\u5B88\u4F4F\u4E86":"\u65D7\u5E1C\u843D\u4E0B\u4E86",document.querySelector("#result-detail").textContent=m.state.result==="won"?`\u51FB\u9000\u5168\u90E8 ${l.state.waves} \u6CE2\u654C\u4EBA \xB7 \u57FA\u5730\u4F59\u8840 ${Math.ceil(c.state.hp)}`:`\u57FA\u5730\u5DF2\u88AB\u7EFF\u8272\u706B\u7130\u541E\u6CA1 \xB7 \u51FB\u8D25 ${m.state.kills} \u53EA\u5165\u4FB5\u8005`)}function Et(Y){A()&&(p+=Y,jt(null),gt())}let lt=new Map([["ArrowUp",[0,-1]],["ArrowRight",[1,0]],["ArrowDown",[0,1]],["ArrowLeft",[-1,0]]]);window.addEventListener("keydown",Y=>{if(Y.ctrlKey||Y.altKey||Y.metaKey)return;if(L.busy){Y.preventDefault();return}if(S==="map"){E.handleKey(Y);return}if(R.handleKey(Y))return;if(!A()){S==="menu"&&Y.code==="Enter"&&!Y.repeat&&!(Y.target instanceof HTMLButtonElement)&&(Y.preventDefault(),W());return}if(Y.code==="Space"&&!(Y.target instanceof HTMLButtonElement)){Y.preventDefault(),Y.repeat||xt();return}Y.key==="Escape"&&Bt(!1),Y.key.toLowerCase()==="q"&&Et(-Math.PI/4),Y.key.toLowerCase()==="e"&&Et(Math.PI/4),Y.key==="1"&&Bt(!0,"militia"),Y.key==="2"&&Bt(!0,"engineers");let it=lt.get(Y.key);if(!it||!_)return;Y.preventDefault();let at=T(),bt=at.state.destination??at.state.settled;te(s.tiles.get(Fe(bt.column+it[0],bt.row+it[1])))}),new ResizeObserver(gt).observe(xo);function ut(){y=0,b=!1,Fh.setPaused(!1),p=wp,x=S==="playing"?1:hv,M="militia",I=null,z=null,F.clear(),i.domElement.classList.remove("is-dragging"),m.reset(),o.group.visible=a.group.visible=l.group.visible=S==="playing",N.reset(),i.domElement.style.filter="",jt(null),ht(),At(yt,g,Nt,.051,4),Bt(!1),wt(),pt(),i.shadowMap.needsUpdate=!0,gt()}function St(Y){if(L.busy||Y==="playing"&&!j)return!1;R.close({restore:!1}),Ui.disabled=!0;let it=()=>{R.dismiss(),S=Y,lv.dataset.screen=S,Uh.hidden=S!=="menu",Uh.inert=S!=="menu",Uh.setAttribute("aria-hidden",String(S!=="menu")),S==="map"?E.show():E.hide(),xo.inert=S!=="playing",document.querySelector("#play-ui").inert=S!=="playing",ut()};return L.play(()=>Y==="map"&&!E.state.loaded?E.ready.then(it):it(),()=>{if(Ui.disabled=S!=="menu"||!j,S==="map")E.focus();else{let at=S==="menu"?Ui:Xc;at.disabled||at.focus({preventScroll:!0})}})}function W(){S==="menu"&&!Ui.disabled&&St("map")}Ui.addEventListener("click",W);function ft(){s.animateWater(y),s.animateMeadow(y),s.animateCanopy(y)}function ot(Y){let it=X?Math.min((Y-X)/1e3,.12):0;if(X=Y,L.update(it),R.update(it),E.update(it),S==="map"){requestAnimationFrame(ot);return}if(j){if(S==="menu"){let mt=L.busy?0:it;y+=mt,p=(p+(w?0:mt*.028))%(Math.PI*2),gt(),c.animate(y,mt),ft(),i.shadowMap.needsUpdate=!0,i.render(t,e),requestAnimationFrame(ot);return}qt();let at=N.update(it,b||L.busy);y+=at,m.update(at),_&&(m.state.result||!C().members.some(mt=>mt.hp>0&&!mt.inside))&&Bt(!1),i.shadowMap.needsUpdate=!0,qt();let bt=N.state.focus;i.domElement.style.filter=bt>1e-4?`grayscale(${bt*.94}) brightness(${1-bt*.1})`:"",D+=it;let zt=Tt.clamp(D/.44,0,1);Mt.visible=Rt.visible=D<.44,Ht.opacity=V.material.opacity=1-Tt.smoothstep(zt,.22,1),Rt.scale.setScalar(1+Math.sin(zt*Math.PI)*.13),wt(),pt(),ft(),i.render(t,e)}requestAnimationFrame(ot)}G(),ut(),Ui.disabled=!1,requestAnimationFrame(ot)}function Ep(i,t,e){let n=[],s=.17*Pe,r=t*Pe-s,o=[[0,0],[-r,-r],[-r,r],[r,-r],[r,r]].map(([p,x])=>pe(i.x+p,i.z+x)),a=Math.max(...o)-Math.min(...o)>.3?3:2,l=[[r,r],[-r,r],[-r,-r],[r,-r]].flatMap(([p,x],_)=>Array.from({length:4},(M,b)=>{let S=_*Math.PI/2+b*Math.PI/6;return[p+Math.cos(S)*s,x+Math.sin(S)*s]})),d=new Map;function h([p,x]){let _=Fe(p,x);if(!d.has(_)){let M=i.x+p,b=i.z+x;d.set(_,[M,pe(M,b)+e,b])}return d.get(_)}let f=(p,x)=>[(p[0]+x[0])/2,(p[1]+x[1])/2];function u(p,x,_,M){if(!M){n.push(...h(p),...h(x),...h(_));return}let b=f(p,x),S=f(x,_),y=f(_,p);u(p,b,y,M-1),u(b,x,S,M-1),u(y,S,_,M-1),u(b,S,y,M-1)}for(let p=0;p<l.length;p++)u([0,0],l[(p+1)%l.length],l[p],a);let g=new ae;g.setAttribute("position",new Gt(n,3));let v=new Float32Array(n.length),m=pe(i.x,i.z)+e;for(let p=0;p<v.length;p+=3)v.set([i.x,m,i.z],p);return g.setAttribute("deployCenter",new Me(v,3)),g}function fv(i,t,e,n,s){let r=new se(Ep(i,e,n),t);return r.renderOrder=s,r}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
