(()=>{var vu=0,_l=1,Mu=2;var $i=1,Su=2,Ls=3,Ei=0,rn=1,an=2,Ji=0,Ds=1,yl=2,vl=3,Ml=4,bu=5;var Ki=100,Tu=101,wu=102,Au=103,Eu=104,Cu=200,Ru=201,Iu=202,Pu=203,Sl=204,bl=205,Lu=206,Du=207,Nu=208,Uu=209,Fu=210,Ou=211,Bu=212,zu=213,ku=214,zo=0,ko=1,Vo=2,ys=3,Go=4,Ho=5,Wo=6,Xo=7,va=0,Vu=1,Gu=2,Yn=0,Tl=1,wl=2,Al=3,El=4,Cl=5,Rl=6,Il=7;var Pl=300,Qi=301,Ns=302,Ma=303,Sa=304,qo=1e3,Vn=1001,Yo=1002,We=1003,Hu=1004;var Vr=1005;var qe=1006,ba=1007;var di=1008;var cn=1009,Ll=1010,Dl=1011,Us=1012,Ta=1013,Nn=1014,An=1015,Un=1016,wa=1017,Aa=1018,ji=1020,Nl=35902,Ul=35899,Fl=1021,Ol=1022,Fn=1023,li=1026,fi=1027,Fs=1028,Ea=1029,Ci=1030,Ca=1031;var Ra=1033,Gr=33776,Hr=33777,Wr=33778,Xr=33779,Ia=35840,Pa=35841,La=35842,Da=35843,Na=36196,Ua=37492,Fa=37496,Oa=37488,Ba=37489,qr=37490,za=37491,ka=37808,Va=37809,Ga=37810,Ha=37811,Wa=37812,Xa=37813,qa=37814,Ya=37815,Za=37816,$a=37817,Ja=37818,Ka=37819,Qa=37820,ja=37821,tc=36492,ec=36494,nc=36495,ic=36283,sc=36284,Yr=36285,rc=36286;var cr=2300,Zo=2301,Oo=2302,al=2303,cl=2400,ll=2401,hl=2402;var Wu=3200;var Zr=0,Xu=1,pi="",pn="srgb",lr="srgb-linear",hr="linear",ye="srgb";var Bo=7680;var qu=519,Yu=512,Zu=513,$u=514,Bl=515,Ju=516,Ku=517,zl=518,kl=519,Qu=35044,ln=35048;var Vl="300 es",Sn=2e3,vs=2001;function hp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function up(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ju(){let i=ur("canvas");return i.style.display="block",i}var zh={},Ms=null;function Gl(...i){let t="THREE."+i.shift();Ms?Ms("log",t,...i):console.log(t,...i)}function td(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ee(...i){i=td(i);let t="THREE."+i.shift();if(Ms)Ms("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ne(...i){i=td(i);let t="THREE."+i.shift();if(Ms)Ms("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function zi(...i){let t=i.join(" ");t in zh||(zh[t]=!0,ee(...i))}function ed(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var nd={[zo]:zo,[Vo]:Wo,[Go]:Go,[ys]:Ho,[ko]:ko,[Wo]:Vo,[Xo]:Xo,[Ho]:ys},Hn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kh=1234567,sr=Math.PI/180,Ss=180/Math.PI;function ts(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]).toLowerCase()}function le(i,t,e){return Math.max(t,Math.min(e,i))}function Hl(i,t){return(i%t+t)%t}function dp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function fp(i,t,e){return i!==t?(e-i)/(t-i):0}function rr(i,t,e){return(1-e)*i+e*t}function pp(i,t,e,n){return rr(i,t,1-Math.exp(-e*n))}function mp(i,t=1){return t-Math.abs(Hl(i,t*2)-t)}function gp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function xp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function _p(i,t){return i+Math.floor(Math.random()*(t-i+1))}function yp(i,t){return i+Math.random()*(t-i)}function vp(i){return i*(.5-Math.random())}function Mp(i){i!==void 0&&(kh=i);let t=kh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Sp(i){return i*sr}function bp(i){return i*Ss}function Tp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function wp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Wl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ap(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*h,c*f,a*l);break;case"YZY":i.set(c*f,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*f,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*u,a*l);break;default:ee("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Xl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function id(i,t){if(t.constructor===Float32Array)return i;let e=Xl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function sd(i,t){if(t.constructor===Float32Array)return i;let e=Xl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var wt={DEG2RAD:sr,RAD2DEG:Ss,generateUUID:ts,clamp:le,euclideanModulo:Hl,mapLinear:dp,inverseLerp:fp,lerp:rr,damp:pp,pingpong:mp,smoothstep:gp,smootherstep:xp,randInt:_p,randFloat:yp,randFloatSpread:vp,seededRandom:Mp,degToRad:Sp,radToDeg:bp,isPowerOfTwo:Tp,ceilPowerOfTwo:wp,floorPowerOfTwo:Wl,setQuaternionFromProperEuler:Ap,normalize:sd,denormalize:id},tt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ye=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3],f=r[o+0],d=r[o+1],g=r[o+2],M=r[o+3];if(h!==M||c!==f||l!==d||u!==g){let m=c*f+l*d+u*g+h*M;m<0&&(f=-f,d=-d,g=-g,M=-M,m=-m);let p=1-a;if(m<.9995){let x=Math.acos(m),y=Math.sin(x);p=Math.sin(p*x)/y,a=Math.sin(a*x)/y,c=c*p+f*a,l=l*p+d*a,u=u*p+g*a,h=h*p+M*a}else{c=c*p+f*a,l=l*p+d*a,u=u*p+g*a,h=h*p+M*a;let x=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=x,l*=x,u*=x,h*=x}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*h+c*d-l*f,t[e+1]=c*g+u*f+l*h-a*d,t[e+2]=l*g+u*d+a*f-c*h,t[e+3]=u*g-a*h-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:ee("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Bc.copy(this).projectOnVector(t),this.sub(Bc)}reflect(t){return this.sub(Bc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Bc=new O,Vh=new Ye,re=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],M=s[0],m=s[3],p=s[6],x=s[1],y=s[4],v=s[7],b=s[2],S=s[5],_=s[8];return r[0]=o*M+a*x+c*b,r[3]=o*m+a*y+c*S,r[6]=o*p+a*v+c*_,r[1]=l*M+u*x+h*b,r[4]=l*m+u*y+h*S,r[7]=l*p+u*v+h*_,r[2]=f*M+d*x+g*b,r[5]=f*m+d*y+g*S,r[8]=f*p+d*v+g*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,f=a*c-u*r,d=l*r-o*c,g=e*h+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return t[0]=h*M,t[1]=(s*l-u*n)*M,t[2]=(a*n-s*o)*M,t[3]=f*M,t[4]=(u*e-s*c)*M,t[5]=(s*r-a*e)*M,t[6]=d*M,t[7]=(n*c-l*e)*M,t[8]=(o*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return zi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zc.makeScale(t,e)),this}rotate(t){return zi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zc.makeRotation(-t)),this}translate(t,e){return zi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},zc=new re,Gh=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hh=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ep(){let i={enabled:!0,workingColorSpace:lr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ye&&(s.r=ci(s.r),s.g=ci(s.g),s.b=ci(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ye&&(s.r=_s(s.r),s.g=_s(s.g),s.b=_s(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===pi?hr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[lr]:{primaries:t,whitePoint:n,transfer:hr,toXYZ:Gh,fromXYZ:Hh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:t,whitePoint:n,transfer:ye,toXYZ:Gh,fromXYZ:Hh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),i}var fe=Ep();function ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ss,$o=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ss===void 0&&(ss=ur("canvas")),ss.width=t.width,ss.height=t.height;let s=ss.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ss}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ur("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ci(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ci(e[n]/255)*255):e[n]=ci(e[n]);return{data:e,width:t.width,height:t.height}}else return ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Cp=0,bs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=ts(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(kc(s[o].image)):r.push(kc(s[o]))}else r=kc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function kc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$o.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ee("Texture: Unable to serialize Texture."),{})}var Rp=0,Vc=new O,en=class i extends Hn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Vn,s=Vn,r=qe,o=di,a=Fn,c=cn,l=i.DEFAULT_ANISOTROPY,u=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=ts(),this.name="",this.source=new bs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Vc).x}get height(){return this.source.getSize(Vc).y}get depth(){return this.source.getSize(Vc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){ee(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ee(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qo:t.x=t.x-Math.floor(t.x);break;case Vn:t.x=t.x<0?0:1;break;case Yo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qo:t.y=t.y-Math.floor(t.y);break;case Vn:t.y=t.y<0?0:1;break;case Yo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Pl;en.DEFAULT_ANISOTROPY=1;var Te=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],M=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+M)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(l+1)/2,v=(d+1)/2,b=(p+1)/2,S=(u+f)/4,_=(h+M)/4,T=(g+m)/4;return y>v&&y>b?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=S/n,r=_/n):v>b?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=S/s,r=T/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=_/r,s=T/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(h-M)*(h-M)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-M)/x,this.z=(f-u)/x,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Jo=class extends Hn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new en({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new bs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},xn=class extends Jo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},dr=class extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ko=class extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var pe=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,c,l,u,h,f,d,g,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,h,f,d,g,M,m)}set(t,e,n,s,r,o,a,c,l,u,h,f,d,g,M,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/rs.setFromMatrixColumn(t,0).length(),r=1/rs.setFromMatrixColumn(t,1).length(),o=1/rs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let f=o*u,d=o*h,g=a*u,M=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=d+g*l,e[5]=f-M*l,e[9]=-a*c,e[2]=M-f*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*u,d=c*h,g=l*u,M=l*h;e[0]=f+M*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=M+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*u,d=c*h,g=l*u,M=l*h;e[0]=f-M*a,e[4]=-o*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=M-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*u,d=o*h,g=a*u,M=a*h;e[0]=c*u,e[4]=g*l-d,e[8]=f*l+M,e[1]=c*h,e[5]=M*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,d=o*l,g=a*c,M=a*l;e[0]=c*u,e[4]=M-f*h,e[8]=g*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*h+g,e[10]=f-M*h}else if(t.order==="XZY"){let f=o*c,d=o*l,g=a*c,M=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+M,e[5]=o*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*u,e[10]=M*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ip,t,Pp)}lookAt(t,e,n){let s=this.elements;return dn.subVectors(t,e),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),gi.crossVectors(n,dn),gi.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),gi.crossVectors(n,dn)),gi.normalize(),po.crossVectors(dn,gi),s[0]=gi.x,s[4]=po.x,s[8]=dn.x,s[1]=gi.y,s[5]=po.y,s[9]=dn.y,s[2]=gi.z,s[6]=po.z,s[10]=dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],M=n[6],m=n[10],p=n[14],x=n[3],y=n[7],v=n[11],b=n[15],S=s[0],_=s[4],T=s[8],L=s[12],I=s[1],w=s[5],E=s[9],C=s[13],A=s[2],U=s[6],N=s[10],k=s[14],H=s[3],P=s[7],B=s[11],V=s[15];return r[0]=o*S+a*I+c*A+l*H,r[4]=o*_+a*w+c*U+l*P,r[8]=o*T+a*E+c*N+l*B,r[12]=o*L+a*C+c*k+l*V,r[1]=u*S+h*I+f*A+d*H,r[5]=u*_+h*w+f*U+d*P,r[9]=u*T+h*E+f*N+d*B,r[13]=u*L+h*C+f*k+d*V,r[2]=g*S+M*I+m*A+p*H,r[6]=g*_+M*w+m*U+p*P,r[10]=g*T+M*E+m*N+p*B,r[14]=g*L+M*C+m*k+p*V,r[3]=x*S+y*I+v*A+b*H,r[7]=x*_+y*w+v*U+b*P,r[11]=x*T+y*E+v*N+b*B,r[15]=x*L+y*C+v*k+b*V,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],M=t[7],m=t[11],p=t[15],x=c*d-l*f,y=a*d-l*h,v=a*f-c*h,b=o*d-l*u,S=o*f-c*u,_=o*h-a*u;return e*(M*x-m*y+p*v)-n*(g*x-m*b+p*S)+s*(g*y-M*b+p*_)-r*(g*v-M*S+m*_)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],u=t[10];return e*(o*u-a*l)-n*(r*u-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],M=t[13],m=t[14],p=t[15],x=e*a-n*o,y=e*c-s*o,v=e*l-r*o,b=n*c-s*a,S=n*l-r*a,_=s*l-r*c,T=u*M-h*g,L=u*m-f*g,I=u*p-d*g,w=h*m-f*M,E=h*p-d*M,C=f*p-d*m,A=x*C-y*E+v*w+b*I-S*L+_*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/A;return t[0]=(a*C-c*E+l*w)*U,t[1]=(s*E-n*C-r*w)*U,t[2]=(M*_-m*S+p*b)*U,t[3]=(f*S-h*_-d*b)*U,t[4]=(c*I-o*C-l*L)*U,t[5]=(e*C-s*I+r*L)*U,t[6]=(m*v-g*_-p*y)*U,t[7]=(u*_-f*v+d*y)*U,t[8]=(o*E-a*I+l*T)*U,t[9]=(n*I-e*E-r*T)*U,t[10]=(g*S-M*v+p*x)*U,t[11]=(h*v-u*S-d*x)*U,t[12]=(a*L-o*w-c*T)*U,t[13]=(e*w-n*L+s*T)*U,t[14]=(M*y-g*b-m*x)*U,t[15]=(u*b-h*y+f*x)*U,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,f=r*l,d=r*u,g=r*h,M=o*u,m=o*h,p=a*h,x=c*l,y=c*u,v=c*h,b=n.x,S=n.y,_=n.z;return s[0]=(1-(M+p))*b,s[1]=(d+v)*b,s[2]=(g-y)*b,s[3]=0,s[4]=(d-v)*S,s[5]=(1-(f+p))*S,s[6]=(m+x)*S,s[7]=0,s[8]=(g+y)*_,s[9]=(m-x)*_,s[10]=(1-(f+M))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=rs.set(s[0],s[1],s[2]).length(),a=rs.set(s[4],s[5],s[6]).length(),c=rs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Pn.copy(this);let l=1/o,u=1/a,h=1/c;return Pn.elements[0]*=l,Pn.elements[1]*=l,Pn.elements[2]*=l,Pn.elements[4]*=u,Pn.elements[5]*=u,Pn.elements[6]*=u,Pn.elements[8]*=h,Pn.elements[9]*=h,Pn.elements[10]*=h,e.setFromRotationMatrix(Pn),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=Sn,c=!1){let l=this.elements,u=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),g,M;if(c)g=r/(o-r),M=o*r/(o-r);else if(a===Sn)g=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===vs)g=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Sn,c=!1){let l=this.elements,u=2/(e-t),h=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),g,M;if(c)g=1/(o-r),M=o/(o-r);else if(a===Sn)g=-2/(o-r),M=-(o+r)/(o-r);else if(a===vs)g=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},rs=new O,Pn=new pe,Ip=new O(0,0,0),Pp=new O(1,1,1),gi=new O,po=new O,dn=new O,Wh=new pe,Xh=new Ye,Wn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(le(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-le(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(le(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xh.setFromEuler(this),this.setFromQuaternion(Xh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wn.DEFAULT_ORDER="XYZ";var Ts=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Lp=0,qh=new O,os=new Ye,ii=new pe,mo=new O,Ks=new O,Dp=new O,Np=new Ye,Yh=new O(1,0,0),Zh=new O(0,1,0),$h=new O(0,0,1),Jh={type:"added"},Up={type:"removed"},as={type:"childadded",child:null},Gc={type:"childremoved",child:null},Ce=class i extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new O,e=new Wn,n=new Ye,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pe},normalMatrix:{value:new re}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ts,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.multiply(os),this}rotateOnWorldAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.premultiply(os),this}rotateX(t){return this.rotateOnAxis(Yh,t)}rotateY(t){return this.rotateOnAxis(Zh,t)}rotateZ(t){return this.rotateOnAxis($h,t)}translateOnAxis(t,e){return qh.copy(t).applyQuaternion(this.quaternion),this.position.add(qh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yh,t)}translateY(t){return this.translateOnAxis(Zh,t)}translateZ(t){return this.translateOnAxis($h,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?mo.copy(t):mo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(Ks,mo,this.up):ii.lookAt(mo,Ks,this.up),this.quaternion.setFromRotationMatrix(ii),s&&(ii.extractRotation(s.matrixWorld),os.setFromRotationMatrix(ii),this.quaternion.premultiply(os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ne("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jh),as.child=t,this.dispatchEvent(as),as.child=null):ne("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Up),Gc.child=t,this.dispatchEvent(Gc),Gc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jh),as.child=t,this.dispatchEvent(as),as.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,t,Dp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,Np,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ce.DEFAULT_UP=new O(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jt=class extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}},Fp={type:"move"},ws=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let M of t.hand.values()){let m=e.getJointPose(M,n),p=this._getHandJoint(l,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Fp)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},go={h:0,s:0,l:0};function Hc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var vt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,fe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=fe.workingColorSpace){if(t=Hl(t,1),e=le(e,0,1),n=le(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Hc(o,r,t+1/3),this.g=Hc(o,r,t),this.b=Hc(o,r,t-1/3)}return fe.colorSpaceToWorking(this,s),this}setStyle(t,e=pn){function n(r){r!==void 0&&parseFloat(r)<1&&ee("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ee("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);ee("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pn){let n=rd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ee("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ci(t.r),this.g=ci(t.g),this.b=ci(t.b),this}copyLinearToSRGB(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pn){return fe.workingToColorSpace(Ke.copy(this),t),Math.round(le(Ke.r*255,0,255))*65536+Math.round(le(Ke.g*255,0,255))*256+Math.round(le(Ke.b*255,0,255))}getHexString(t=pn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.workingToColorSpace(Ke.copy(this),e);let n=Ke.r,s=Ke.g,r=Ke.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=fe.workingColorSpace){return fe.workingToColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=pn){fe.workingToColorSpace(Ke.copy(this),t);let e=Ke.r,n=Ke.g,s=Ke.b;return t!==pn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(xi),this.setHSL(xi.h+t,xi.s+e,xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xi),t.getHSL(go);let n=rr(xi.h,go.h,e),s=rr(xi.s,go.s,e),r=rr(xi.l,go.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ke=new vt;vt.NAMES=rd;var fr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new vt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},pr=class extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ln=new O,si=new O,Wc=new O,ri=new O,cs=new O,ls=new O,Kh=new O,Xc=new O,qc=new O,Yc=new O,Zc=new Te,$c=new Te,Jc=new Te,Mi=class i{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ln.subVectors(t,e),s.cross(Ln);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ln.subVectors(s,e),si.subVectors(n,e),Wc.subVectors(t,e);let o=Ln.dot(Ln),a=Ln.dot(si),c=Ln.dot(Wc),l=si.dot(si),u=si.dot(Wc),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(l*c-a*u)*f,g=(o*u-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,ri)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ri.x),c.addScaledVector(o,ri.y),c.addScaledVector(a,ri.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Zc.setScalar(0),$c.setScalar(0),Jc.setScalar(0),Zc.fromBufferAttribute(t,e),$c.fromBufferAttribute(t,n),Jc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Zc,r.x),o.addScaledVector($c,r.y),o.addScaledVector(Jc,r.z),o}static isFrontFacing(t,e,n,s){return Ln.subVectors(n,e),si.subVectors(t,e),Ln.cross(si).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Ln.cross(si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;cs.subVectors(s,n),ls.subVectors(r,n),Xc.subVectors(t,n);let c=cs.dot(Xc),l=ls.dot(Xc);if(c<=0&&l<=0)return e.copy(n);qc.subVectors(t,s);let u=cs.dot(qc),h=ls.dot(qc);if(u>=0&&h<=u)return e.copy(s);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0&&c-u>0)return o=c/(c-u),e.copy(n).addScaledVector(cs,o);Yc.subVectors(t,r);let d=cs.dot(Yc),g=ls.dot(Yc);if(g>=0&&d<=g)return e.copy(r);let M=d*l-c*g;if(M<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ls,a);let m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Kh.subVectors(r,s),a=(h-u)/(h-u+(d-g)),e.copy(s).addScaledVector(Kh,a);let p=1/(m+M+f);return o=M*p,a=f*p,e.copy(n).addScaledVector(cs,o).addScaledVector(ls,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},nn=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Dn):Dn.fromBufferAttribute(r,o),Dn.applyMatrix4(t.matrixWorld),this.expandByPoint(Dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xo.copy(n.boundingBox)),xo.applyMatrix4(t.matrixWorld),this.union(xo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Dn),Dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qs),_o.subVectors(this.max,Qs),hs.subVectors(t.a,Qs),us.subVectors(t.b,Qs),ds.subVectors(t.c,Qs),_i.subVectors(us,hs),yi.subVectors(ds,us),Ui.subVectors(hs,ds);let e=[0,-_i.z,_i.y,0,-yi.z,yi.y,0,-Ui.z,Ui.y,_i.z,0,-_i.x,yi.z,0,-yi.x,Ui.z,0,-Ui.x,-_i.y,_i.x,0,-yi.y,yi.x,0,-Ui.y,Ui.x,0];return!Kc(e,hs,us,ds,_o)||(e=[1,0,0,0,1,0,0,0,1],!Kc(e,hs,us,ds,_o))?!1:(yo.crossVectors(_i,yi),e=[yo.x,yo.y,yo.z],Kc(e,hs,us,ds,_o))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},oi=[new O,new O,new O,new O,new O,new O,new O,new O],Dn=new O,xo=new nn,hs=new O,us=new O,ds=new O,_i=new O,yi=new O,Ui=new O,Qs=new O,_o=new O,yo=new O,Fi=new O;function Kc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Fi.fromArray(i,r);let a=s.x*Math.abs(Fi.x)+s.y*Math.abs(Fi.y)+s.z*Math.abs(Fi.z),c=t.dot(Fi),l=e.dot(Fi),u=n.dot(Fi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var Ue=new O,vo=new tt,Op=0,Me=class extends Hn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Op++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Qu,this.updateRanges=[],this.gpuType=An,this.version=0,this._normalizationScale=t!==void 0?Xl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)vo.fromBufferAttribute(this,e),vo.applyMatrix3(t),this.setXY(e,vo.x,vo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):id(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):sd(t,this.array)}};var mr=class extends Me{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var gr=class extends Me{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Gt=class extends Me{constructor(t,e,n){super(new Float32Array(t),e,n)}},Bp=new nn,js=new O,Qc=new O,on=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Bp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;js.subVectors(t,this.center);let e=js.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(js,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(js.copy(t.center).add(Qc)),this.expandByPoint(js.copy(t.center).sub(Qc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},zp=0,Mn=new pe,jc=new Ce,fs=new O,fn=new nn,tr=new nn,He=new O,ae=class i extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hp(t)?gr:mr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new re().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Mn.makeRotationFromQuaternion(t),this.applyMatrix4(Mn),this}rotateX(t){return Mn.makeRotationX(t),this.applyMatrix4(Mn),this}rotateY(t){return Mn.makeRotationY(t),this.applyMatrix4(Mn),this}rotateZ(t){return Mn.makeRotationZ(t),this.applyMatrix4(Mn),this}translate(t,e,n){return Mn.makeTranslation(t,e,n),this.applyMatrix4(Mn),this}scale(t,e,n){return Mn.makeScale(t,e,n),this.applyMatrix4(Mn),this}lookAt(t){return jc.lookAt(t),jc.updateMatrix(),this.applyMatrix4(jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Gt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new on);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let n=this.boundingSphere.center;if(fn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];tr.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(fn.min,tr.min),fn.expandByPoint(He),He.addVectors(fn.max,tr.max),fn.expandByPoint(He)):(fn.expandByPoint(tr.min),fn.expandByPoint(tr.max))}fn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)He.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(He));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)He.fromBufferAttribute(a,l),c&&(fs.fromBufferAttribute(t,l),He.add(fs)),s=Math.max(s,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Me(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[],l=new Uint8Array(n.count);for(let L=0;L<n.count;L++)a[L]=new O,c[L]=new O;let u=new O,h=new O,f=new O,d=new tt,g=new tt,M=new tt,m=new O,p=new O;function x(L,I,w){l[L]=l[I]=l[w]=1,u.fromBufferAttribute(n,L),h.fromBufferAttribute(n,I),f.fromBufferAttribute(n,w),d.fromBufferAttribute(r,L),g.fromBufferAttribute(r,I),M.fromBufferAttribute(r,w),h.sub(u),f.sub(u),g.sub(d),M.sub(d);let E=1/(g.x*M.y-M.x*g.y);isFinite(E)&&(m.copy(h).multiplyScalar(M.y).addScaledVector(f,-g.y).multiplyScalar(E),p.copy(f).multiplyScalar(g.x).addScaledVector(h,-M.x).multiplyScalar(E),a[L].add(m),a[I].add(m),a[w].add(m),c[L].add(p),c[I].add(p),c[w].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let L=0,I=y.length;L<I;++L){let w=y[L],E=w.start,C=w.count;for(let A=E,U=E+C;A<U;A+=3)x(t.getX(A+0),t.getX(A+1),t.getX(A+2))}let v=new O,b=new O,S=new O,_=new O;function T(L){S.fromBufferAttribute(s,L),_.copy(S);let I=a[L];v.copy(I),v.sub(S.multiplyScalar(S.dot(I))).normalize(),b.crossVectors(_,I);let E=b.dot(c[L])<0?-1:1;o.setXYZW(L,v.x,v.y,v.z,E)}for(let L=0,I=n.count;L<I;++L)l[L]&&T(L);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Me(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new O,r=new O,o=new O,a=new O,c=new O,l=new O,u=new O,h=new O;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),M=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(a,c){let l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u),d=0,g=0;for(let M=0,m=c.length;M<m;M++){a.isInterleavedBufferAttribute?d=c[M]*a.data.stride+a.offset:d=c[M]*u;for(let p=0;p<u;p++)f[g++]=l[d++]}return new Me(f,u,h)}if(this.index===null)return ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){let f=l[u],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let d=l[h];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var tl=new O,kp=new O,Vp=new re,mn=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=tl.subVectors(n,e).cross(kp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(tl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Vp.getNormalMatrix(t),s=this.coplanarPoint(tl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Gp=0,hi=class extends Hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=ts(),this.name="",this.type="Material",this.blending=Ds,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sl,this.blendDst=bl,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bo,this.stencilZFail=Bo,this.stencilZPass=Bo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){ee(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ee(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new vt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new mn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new tt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new tt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ai=new O,el=new O,Mo=new O,So=new O,xr=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ai.copy(this.origin).addScaledVector(this.direction,e),ai.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){el.copy(t).add(e).multiplyScalar(.5),Mo.copy(e).sub(t).normalize(),So.copy(this.origin).sub(el);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Mo),a=So.dot(this.direction),c=-So.dot(Mo),l=So.lengthSq(),u=Math.abs(1-o*o),h,f,d,g;if(u>0)if(h=o*c-a,f=o*a-c,g=r*u,h>=0)if(f>=-g)if(f<=g){let M=1/u;h*=M,f*=M,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(el).addScaledVector(Mo,f),d}intersectSphere(t,e){if(t.radius<0)return null;ai.subVectors(t.center,this.origin);let n=ai.dot(this.direction),s=ai.dot(ai)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ai)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,h=t.x-o.x,f=t.y-o.y,d=t.z-o.z,g=e.x-o.x,M=e.y-o.y,m=e.z-o.z,p=n.x-o.x,x=n.y-o.y,y=n.z-o.z,v=Math.abs(c),b=Math.abs(l),S=Math.abs(u),_,T,L,I,w,E,C,A,U,N,k,H;if(v>=b&&v>=S?(L=c,E=h,U=g,H=p,c>=0?(_=l,T=u,I=f,w=d,C=M,A=m,N=x,k=y):(_=u,T=l,I=d,w=f,C=m,A=M,N=y,k=x)):b>=S?(L=l,E=f,U=M,H=x,l>=0?(_=u,T=c,I=d,w=h,C=m,A=g,N=y,k=p):(_=c,T=u,I=h,w=d,C=g,A=m,N=p,k=y)):(L=u,E=d,U=m,H=y,u>=0?(_=c,T=l,I=h,w=f,C=g,A=M,N=p,k=x):(_=l,T=c,I=f,w=h,C=M,A=g,N=x,k=p)),L===0)return null;let P=_/L,B=T/L,V=1/L,X=I-P*E,et=w-B*E,q=C-P*U,Z=A-B*U,rt=N-P*H,ct=k-B*H,at=rt*Z-ct*q,xt=X*ct-et*rt,Wt=q*et-Z*X;if(s){if(at<0||xt<0||Wt<0)return null}else if((at<0||xt<0||Wt<0)&&(at>0||xt>0||Wt>0))return null;let Pt=at+xt+Wt;if(Pt===0)return null;let Ut=V*(at*E+xt*U+Wt*H);return(Pt>0?Ut<0:Ut>0)?null:this.at(Ut/Pt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},sn=class extends hi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=va,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Qh=new pe,Oi=new xr,bo=new on,jh=new O,To=new O,wo=new O,Ao=new O,nl=new O,Eo=new O,tu=new O,Co=new O,ie=class extends Ce{constructor(t=new ae,e=new sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Eo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],h=r[c];u!==0&&(nl.fromBufferAttribute(h,t),o?Eo.addScaledVector(nl,u):Eo.addScaledVector(nl.sub(e),u))}e.add(Eo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),bo.copy(n.boundingSphere),bo.applyMatrix4(r),Oi.copy(t.ray).recast(t.near),!(bo.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(bo,jh)===null||Oi.origin.distanceToSquared(jh)>(t.far-t.near)**2))&&(Qh.copy(r).invert(),Oi.copy(t.ray).applyMatrix4(Qh),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Oi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,M=f.length;g<M;g++){let m=f[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=x,b=y;v<b;v+=3){let S=a.getX(v),_=a.getX(v+1),T=a.getX(v+2);s=Ro(this,p,t,n,l,u,h,S,_,T),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),M=Math.min(a.count,d.start+d.count);for(let m=g,p=M;m<p;m+=3){let x=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);s=Ro(this,o,t,n,l,u,h,x,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,M=f.length;g<M;g++){let m=f[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),y=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let v=x,b=y;v<b;v+=3){let S=v,_=v+1,T=v+2;s=Ro(this,p,t,n,l,u,h,S,_,T),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),M=Math.min(c.count,d.start+d.count);for(let m=g,p=M;m<p;m+=3){let x=m,y=m+1,v=m+2;s=Ro(this,o,t,n,l,u,h,x,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Hp(i,t,e,n,s,r,o,a){let c;if(t.side===rn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Ei,a),c===null)return null;Co.copy(a),Co.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Co);return l<e.near||l>e.far?null:{distance:l,point:Co.clone(),object:i}}function Ro(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,To),i.getVertexPosition(c,wo),i.getVertexPosition(l,Ao);let u=Hp(i,t,e,n,To,wo,Ao,tu);if(u){let h=new O;Mi.getBarycoord(tu,To,wo,Ao,h),s&&(u.uv=Mi.getInterpolatedAttribute(s,a,c,l,h,new tt)),r&&(u.uv1=Mi.getInterpolatedAttribute(r,a,c,l,h,new tt)),o&&(u.normal=Mi.getInterpolatedAttribute(o,a,c,l,h,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new O,materialIndex:0};Mi.getNormal(To,wo,Ao,f.normal),u.face=f,u.barycoord=h}return u}var ki=class extends en{constructor(t=null,e=1,n=1,s,r,o,a,c,l=We,u=We,h,f){super(null,o,a,c,l,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var As=class extends Me{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ps=new pe,eu=new pe,Io=[],nu=new nn,Wp=new pe,er=new ie,nr=new on,bn=class extends ie{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new As(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Wp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new nn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ps),nu.copy(t.boundingBox).applyMatrix4(ps),this.boundingBox.union(nu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new on),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ps),nr.copy(t.boundingSphere).applyMatrix4(ps),this.boundingSphere.union(nr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(er.geometry=this.geometry,er.material=this.material,er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nr.copy(this.boundingSphere),nr.applyMatrix4(n),t.ray.intersectsSphere(nr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ps),eu.multiplyMatrices(n,ps),er.matrixWorld=eu,er.raycast(t,Io);for(let o=0,a=Io.length;o<a;o++){let c=Io[o];c.instanceId=r,c.object=this,e.push(c)}Io.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new As(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ki(new Float32Array(s*this.count),s,this.count,Fs,An));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Bi=new on,Xp=new tt(.5,.5),Po=new O,Si=class{constructor(t=new mn,e=new mn,n=new mn,s=new mn,r=new mn,o=new mn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Sn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],f=r[6],d=r[7],g=r[8],M=r[9],m=r[10],p=r[11],x=r[12],y=r[13],v=r[14],b=r[15];if(s[0].setComponents(l-o,d-u,p-g,b-x).normalize(),s[1].setComponents(l+o,d+u,p+g,b+x).normalize(),s[2].setComponents(l+a,d+h,p+M,b+y).normalize(),s[3].setComponents(l-a,d-h,p-M,b-y).normalize(),n)s[4].setComponents(c,f,m,v).normalize(),s[5].setComponents(l-c,d-f,p-m,b-v).normalize();else if(s[4].setComponents(l-c,d-f,p-m,b-v).normalize(),e===Sn)s[5].setComponents(l+c,d+f,p+m,b+v).normalize();else if(e===vs)s[5].setComponents(c,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(t){Bi.center.set(0,0,0);let e=Xp.distanceTo(t.center);return Bi.radius=.7071067811865476+e,Bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Po.x=s.normal.x>0?t.max.x:t.min.x,Po.y=s.normal.y>0?t.max.y:t.min.y,Po.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Po)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},iu=new pe,Qo=class i{constructor(){this.coordinateSystem=Sn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];iu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Si),n[s].setFromProjectionMatrix(iu,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Si),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var _r=class extends en{constructor(t=[],e=Qi,n,s,r,o,a,c,l,u){super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Vi=class extends en{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ui=class extends en{constructor(t,e,n=Nn,s,r,o,a=We,c=We,l,u=li,h=1){if(u!==li&&u!==fi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:h};super(f,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new bs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},yr=class extends ui{constructor(t,e=Nn,n=Qi,s,r,o=We,a=We,c,l=li){let u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,n,s,r,o,a,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},vr=class extends en{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Tn=class i extends ae{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],h=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Gt(l,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(h,2));function g(M,m,p,x,y,v,b,S,_,T,L){let I=v/_,w=b/T,E=v/2,C=b/2,A=S/2,U=_+1,N=T+1,k=0,H=0,P=new O;for(let B=0;B<N;B++){let V=B*w-C;for(let X=0;X<U;X++){let et=X*I-E;P[M]=et*x,P[m]=V*y,P[p]=A,l.push(P.x,P.y,P.z),P[M]=0,P[m]=0,P[p]=S>0?1:-1,u.push(P.x,P.y,P.z),h.push(X/_),h.push(1-B/T),k+=1}}for(let B=0;B<T;B++)for(let V=0;V<_;V++){let X=f+V+U*B,et=f+V+U*(B+1),q=f+(V+1)+U*(B+1),Z=f+(V+1)+U*B;c.push(X,et,Z),c.push(et,q,Z),H+=6}a.addGroup(d,H,L),d+=H,f+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Xn=class i extends ae{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],d=[],g=0,M=[],m=n/2,p=0;x(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Gt(h,3)),this.setAttribute("normal",new Gt(f,3)),this.setAttribute("uv",new Gt(d,2));function x(){let v=new O,b=new O,S=0,_=(e-t)/n;for(let T=0;T<=r;T++){let L=[],I=T/r,w=I*(e-t)+t;for(let E=0;E<=s;E++){let C=E/s,A=C*c+a,U=Math.sin(A),N=Math.cos(A);b.x=w*U,b.y=-I*n+m,b.z=w*N,h.push(b.x,b.y,b.z),v.set(U,_,N).normalize(),f.push(v.x,v.y,v.z),d.push(C,1-I),L.push(g++)}M.push(L)}for(let T=0;T<s;T++)for(let L=0;L<r;L++){let I=M[L][T],w=M[L+1][T],E=M[L+1][T+1],C=M[L][T+1];(t>0||L!==0)&&(u.push(I,w,C),S+=3),(e>0||L!==r-1)&&(u.push(w,E,C),S+=3)}l.addGroup(p,S,0),p+=S}function y(v){let b=g,S=new tt,_=new O,T=0,L=v===!0?t:e,I=v===!0?1:-1;for(let E=1;E<=s;E++)h.push(0,m*I,0),f.push(0,I,0),d.push(.5,.5),g++;let w=g;for(let E=0;E<=s;E++){let A=E/s*c+a,U=Math.cos(A),N=Math.sin(A);_.x=L*N,_.y=m*I,_.z=L*U,h.push(_.x,_.y,_.z),f.push(0,I,0),S.x=U*.5+.5,S.y=N*.5*I+.5,d.push(S.x,S.y),g++}for(let E=0;E<s;E++){let C=b+E,A=w+E;v===!0?u.push(A,A+1,C):u.push(A+1,A,C),T+=3}l.addGroup(p,T,v===!0?1:2),p+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Mr=class i extends Xn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Sr=class i extends ae{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new Gt(r,3)),this.setAttribute("normal",new Gt(r.slice(),3)),this.setAttribute("uv",new Gt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let y=new O,v=new O,b=new O;for(let S=0;S<e.length;S+=3)d(e[S+0],y),d(e[S+1],v),d(e[S+2],b),c(y,v,b,x)}function c(x,y,v,b){let S=b+1,_=[];for(let T=0;T<=S;T++){_[T]=[];let L=x.clone().lerp(v,T/S),I=y.clone().lerp(v,T/S),w=S-T;for(let E=0;E<=w;E++)E===0&&T===S?_[T][E]=L:_[T][E]=L.clone().lerp(I,E/w)}for(let T=0;T<S;T++)for(let L=0;L<2*(S-T)-1;L++){let I=Math.floor(L/2);L%2===0?(f(_[T][I+1]),f(_[T+1][I]),f(_[T][I])):(f(_[T][I+1]),f(_[T+1][I+1]),f(_[T+1][I]))}}function l(x){let y=new O;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(x),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function u(){let x=new O;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];let v=m(x)/2/Math.PI+.5,b=p(x)/Math.PI+.5;o.push(v,1-b)}g(),h()}function h(){for(let x=0;x<o.length;x+=6){let y=o[x+0],v=o[x+2],b=o[x+4],S=Math.max(y,v,b),_=Math.min(y,v,b);S>.9&&_<.1&&(y<.2&&(o[x+0]+=1),v<.2&&(o[x+2]+=1),b<.2&&(o[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function d(x,y){let v=x*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function g(){let x=new O,y=new O,v=new O,b=new O,S=new tt,_=new tt,T=new tt;for(let L=0,I=0;L<r.length;L+=9,I+=6){x.set(r[L+0],r[L+1],r[L+2]),y.set(r[L+3],r[L+4],r[L+5]),v.set(r[L+6],r[L+7],r[L+8]),S.set(o[I+0],o[I+1]),_.set(o[I+2],o[I+3]),T.set(o[I+4],o[I+5]),b.copy(x).add(y).add(v).divideScalar(3);let w=m(b);M(S,I+0,x,w),M(_,I+2,y,w),M(T,I+4,v,w)}}function M(x,y,v,b){b<0&&x.x===1&&(o[y]=x.x-1),v.x===0&&v.z===0&&(o[y]=b/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var _n=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ee("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let u=n[s],f=n[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new tt:new O);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new O,s=[],r=[],o=[],a=new O,c=new pe;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new O)}r[0]=new O,o[0]=new O;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(le(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(le(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Es=class extends _n{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new tt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},jo=class extends Es{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ql(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let f=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var su=new O,ru=new O,il=new ql,sl=new ql,rl=new ql,Gi=class extends _n{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new O){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(ru.subVectors(s[0],s[1]).add(s[0]),l=ru);let h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(su.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=su),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(h),d),M=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);M<1e-4&&(M=1),g<1e-4&&(g=M),m<1e-4&&(m=M),il.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,M,m),sl.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,M,m),rl.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,M,m)}else this.curveType==="catmullrom"&&(il.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),sl.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),rl.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(il.calc(c),sl.calc(c),rl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ou(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function qp(i,t){let e=1-i;return e*e*t}function Yp(i,t){return 2*(1-i)*i*t}function Zp(i,t){return i*i*t}function or(i,t,e,n){return qp(i,t)+Yp(i,e)+Zp(i,n)}function $p(i,t){let e=1-i;return e*e*e*t}function Jp(i,t){let e=1-i;return 3*e*e*i*t}function Kp(i,t){return 3*(1-i)*i*i*t}function Qp(i,t){return i*i*i*t}function ar(i,t,e,n,s){return $p(i,t)+Jp(i,e)+Kp(i,n)+Qp(i,s)}var br=class extends _n{constructor(t=new tt,e=new tt,n=new tt,s=new tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new tt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ar(t,s.x,r.x,o.x,a.x),ar(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ta=class extends _n{constructor(t=new O,e=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new O){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ar(t,s.x,r.x,o.x,a.x),ar(t,s.y,r.y,o.y,a.y),ar(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Tr=class extends _n{constructor(t=new tt,e=new tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new tt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ea=class extends _n{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wr=class extends _n{constructor(t=new tt,e=new tt,n=new tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new tt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(or(t,s.x,r.x,o.x),or(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ar=class extends _n{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(or(t,s.x,r.x,o.x),or(t,s.y,r.y,o.y),or(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Hi=class extends _n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new tt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(ou(a,c.x,l.x,u.x,h.x),ou(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new tt().fromArray(s))}return this}},na=Object.freeze({__proto__:null,ArcCurve:jo,CatmullRomCurve3:Gi,CubicBezierCurve:br,CubicBezierCurve3:ta,EllipseCurve:Es,LineCurve:Tr,LineCurve3:ea,QuadraticBezierCurve:wr,QuadraticBezierCurve3:Ar,SplineCurve:Hi}),ia=class extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new na[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new na[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Er=class extends ia{constructor(t){super(),this.type="Path",this.currentPoint=new tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Tr(this.currentPoint.clone(),new tt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new wr(this.currentPoint.clone(),new tt(t,e),new tt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new br(this.currentPoint.clone(),new tt(t,e),new tt(n,s),new tt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Hi(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new Es(t,e,n,s,r,o,a,c);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},qn=class extends Er{constructor(t){super(t),this.uuid=ts(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Er().fromJSON(s))}return this}};function jp(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=od(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=sm(i,t,r,e)),i.length>80*e){a=i[0],c=i[1];let u=a,h=c;for(let f=e;f<s;f+=e){let d=i[f],g=i[f+1];d<a&&(a=d),g<c&&(c=g),d>u&&(u=d),g>h&&(h=g)}l=Math.max(u-a,h-c),l=l!==0?32767/l:0}return Cr(r,o,e,a,c,l,0),o}function od(i,t,e,n,s){let r;if(s===mm(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=au(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=au(o/n|0,i[o],i[o+1],r);return r&&Cs(r,r.next)&&(Ir(r),r=r.next),r}function Wi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Cs(e,e.next)||Ie(e.prev,e,e.next)===0)){if(Ir(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Cr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&lm(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?em(i,n,s,r):tm(i)){t.push(c.i,i.i,l.i),Ir(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=nm(Wi(i),t),Cr(i,t,e,n,s,r,2)):o===2&&im(i,t,e,n,s,r):Cr(Wi(i),t,e,n,s,r,1);break}}}function tm(i){let t=i.prev,e=i,n=i.next;if(Ie(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=Math.min(s,r,o),h=Math.min(a,c,l),f=Math.max(s,r,o),d=Math.max(a,c,l),g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&ir(s,a,r,c,o,l,g.x,g.y)&&Ie(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function em(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ie(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,f=o.y,d=Math.min(a,c,l),g=Math.min(u,h,f),M=Math.max(a,c,l),m=Math.max(u,h,f),p=ul(d,g,t,e,n),x=ul(M,m,t,e,n),y=i.prevZ,v=i.nextZ;for(;y&&y.z>=p&&v&&v.z<=x;){if(y.x>=d&&y.x<=M&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&ir(a,u,c,h,l,f,y.x,y.y)&&Ie(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=d&&v.x<=M&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ir(a,u,c,h,l,f,v.x,v.y)&&Ie(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=M&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&ir(a,u,c,h,l,f,y.x,y.y)&&Ie(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=x;){if(v.x>=d&&v.x<=M&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ir(a,u,c,h,l,f,v.x,v.y)&&Ie(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function nm(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Cs(n,s)&&cd(n,e,e.next,s)&&Rr(n,s)&&Rr(s,n)&&(t.push(n.i,e.i,s.i),Ir(e),Ir(e.next),e=i=s),e=e.next}while(e!==i);return Wi(e)}function im(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&dm(o,a)){let c=ld(o,a);o=Wi(o,o.next),c=Wi(c,c.next),Cr(o,t,e,n,s,r,0),Cr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function sm(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=od(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(um(l))}s.sort(rm);for(let r=0;r<s.length;r++)e=om(s[r],e);return e}function rm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function om(i,t){let e=am(i,t);if(!e)return t;let n=ld(e,i);return Wi(n,n.next),Wi(e,e.next)}function am(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Cs(i,e))return e;do{if(Cs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let h=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>r&&(r=h,o=e.x<e.next.x?e:e.next,h===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&ad(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let h=Math.abs(s-e.y)/(n-e.x);Rr(e,i)&&(h<u||h===u&&(e.x>o.x||e.x===o.x&&cm(o,e)))&&(o=e,u=h)}e=e.next}while(e!==a);return o}function cm(i,t){return Ie(i.prev,i,t.prev)<0&&Ie(t.next,i,i.next)<0}function lm(i,t,e,n){let s=i;do s.z===0&&(s.z=ul(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,hm(s)}function hm(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function ul(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function um(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ad(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function ir(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&ad(i,t,e,n,s,r,o,a)}function dm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!fm(i,t)&&(Rr(i,t)&&Rr(t,i)&&pm(i,t)&&(Ie(i.prev,i,t.prev)||Ie(i,t.prev,t))||Cs(i,t)&&Ie(i.prev,i,i.next)>0&&Ie(t.prev,t,t.next)>0)}function Ie(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Cs(i,t){return i.x===t.x&&i.y===t.y}function cd(i,t,e,n){let s=Do(Ie(i,t,e)),r=Do(Ie(i,t,n)),o=Do(Ie(e,n,i)),a=Do(Ie(e,n,t));return!!(s!==r&&o!==a||s===0&&Lo(i,e,t)||r===0&&Lo(i,n,t)||o===0&&Lo(e,i,n)||a===0&&Lo(e,t,n))}function Lo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Do(i){return i>0?1:i<0?-1:0}function fm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&cd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Rr(i,t){return Ie(i.prev,i,i.next)<0?Ie(i,t,i.next)>=0&&Ie(i,i.prev,t)>=0:Ie(i,t,i.prev)<0||Ie(i,i.next,t)<0}function pm(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ld(i,t){let e=dl(i.i,i.x,i.y),n=dl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function au(i,t,e,n){let s=dl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ir(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function dl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function mm(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var fl=class{static triangulate(t,e,n=2){return jp(t,e,n)}},Gn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];cu(t),lu(n,t);let o=t.length;e.forEach(cu);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,lu(n,e[c]);let a=fl.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function cu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function lu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Rs=class i extends ae{constructor(t=new qn([new tt(.5,.5),new tt(-.5,.5),new tt(-.5,-.5),new tt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new Gt(s,3)),this.setAttribute("uv",new Gt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:gm,y,v=!1,b,S,_,T;if(p){y=p.getSpacedPoints(u),v=!0,f=!1;let ht=p.isCatmullRomCurve3?p.closed:!1;b=p.computeFrenetFrames(u,ht),S=new O,_=new O,T=new O}f||(m=0,d=0,g=0,M=0);let L=a.extractPoints(l),I=L.shape,w=L.holes;if(!Gn.isClockWise(I)){I=I.reverse();for(let ht=0,Mt=w.length;ht<Mt;ht++){let yt=w[ht];Gn.isClockWise(yt)&&(w[ht]=yt.reverse())}}function C(ht){let yt=10000000000000001e-36,Nt=ht[0];for(let St=1;St<=ht.length;St++){let z=St%ht.length,J=ht[z],gt=J.x-Nt.x,Et=J.y-Nt.y,Rt=gt*gt+Et*Et,G=Math.max(Math.abs(J.x),Math.abs(J.y),Math.abs(Nt.x),Math.abs(Nt.y)),se=yt*G*G;if(Rt<=se){ht.splice(z,1),St--;continue}Nt=J}}C(I),w.forEach(C);let A=w.length,U=I;for(let ht=0;ht<A;ht++){let Mt=w[ht];I=I.concat(Mt)}function N(ht,Mt,yt){return Mt||ne("ExtrudeGeometry: vec does not exist"),ht.clone().addScaledVector(Mt,yt)}let k=I.length;function H(ht,Mt,yt){let Nt,St,z,J=ht.x-Mt.x,gt=ht.y-Mt.y,Et=yt.x-ht.x,Rt=yt.y-ht.y,G=J*J+gt*gt,se=J*Rt-gt*Et;if(Math.abs(se)>Number.EPSILON){let Vt=Math.sqrt(G),Zt=Math.sqrt(Et*Et+Rt*Rt),st=Mt.x-gt/Vt,te=Mt.y+J/Vt,kt=yt.x-Rt/Zt,Jt=yt.y+Et/Zt,F=((kt-st)*Rt-(Jt-te)*Et)/(J*Rt-gt*Et);Nt=st+J*F-ht.x,St=te+gt*F-ht.y;let R=Nt*Nt+St*St;if(R<=2)return new tt(Nt,St);z=Math.sqrt(R/2)}else{let Vt=!1;J>Number.EPSILON?Et>Number.EPSILON&&(Vt=!0):J<-Number.EPSILON?Et<-Number.EPSILON&&(Vt=!0):Math.sign(gt)===Math.sign(Rt)&&(Vt=!0),Vt?(Nt=-gt,St=J,z=Math.sqrt(G)):(Nt=J,St=gt,z=Math.sqrt(G/2))}return new tt(Nt/z,St/z)}let P=[];for(let ht=0,Mt=U.length,yt=Mt-1,Nt=ht+1;ht<Mt;ht++,yt++,Nt++)yt===Mt&&(yt=0),Nt===Mt&&(Nt=0),P[ht]=H(U[ht],U[yt],U[Nt]);let B=[],V,X=P.concat();for(let ht=0,Mt=A;ht<Mt;ht++){let yt=w[ht];V=[];for(let Nt=0,St=yt.length,z=St-1,J=Nt+1;Nt<St;Nt++,z++,J++)z===St&&(z=0),J===St&&(J=0),V[Nt]=H(yt[Nt],yt[z],yt[J]);B.push(V),X=X.concat(V)}let et;if(m===0)et=Gn.triangulateShape(U,w);else{let ht=[],Mt=[];for(let yt=0;yt<m;yt++){let Nt=yt/m,St=d*Math.cos(Nt*Math.PI/2),z=g*Math.sin(Nt*Math.PI/2)+M;for(let J=0,gt=U.length;J<gt;J++){let Et=N(U[J],P[J],z);xt(Et.x,Et.y,-St),Nt===0&&ht.push(Et)}for(let J=0,gt=A;J<gt;J++){let Et=w[J];V=B[J];let Rt=[];for(let G=0,se=Et.length;G<se;G++){let Vt=N(Et[G],V[G],z);xt(Vt.x,Vt.y,-St),Nt===0&&Rt.push(Vt)}Nt===0&&Mt.push(Rt)}}et=Gn.triangulateShape(ht,Mt)}let q=et.length,Z=g+M;for(let ht=0;ht<k;ht++){let Mt=f?N(I[ht],X[ht],Z):I[ht];v?(_.copy(b.normals[0]).multiplyScalar(Mt.x),S.copy(b.binormals[0]).multiplyScalar(Mt.y),T.copy(y[0]).add(_).add(S),xt(T.x,T.y,T.z)):xt(Mt.x,Mt.y,0)}for(let ht=1;ht<=u;ht++)for(let Mt=0;Mt<k;Mt++){let yt=f?N(I[Mt],X[Mt],Z):I[Mt];v?(_.copy(b.normals[ht]).multiplyScalar(yt.x),S.copy(b.binormals[ht]).multiplyScalar(yt.y),T.copy(y[ht]).add(_).add(S),xt(T.x,T.y,T.z)):xt(yt.x,yt.y,h/u*ht)}for(let ht=m-1;ht>=0;ht--){let Mt=ht/m,yt=d*Math.cos(Mt*Math.PI/2),Nt=g*Math.sin(Mt*Math.PI/2)+M;for(let St=0,z=U.length;St<z;St++){let J=N(U[St],P[St],Nt);xt(J.x,J.y,h+yt)}for(let St=0,z=w.length;St<z;St++){let J=w[St];V=B[St];for(let gt=0,Et=J.length;gt<Et;gt++){let Rt=N(J[gt],V[gt],Nt);v?xt(Rt.x,Rt.y+y[u-1].y,y[u-1].x+yt):xt(Rt.x,Rt.y,h+yt)}}}rt(),ct();function rt(){let ht=s.length/3;if(f){let Mt=0,yt=k*Mt;for(let Nt=0;Nt<q;Nt++){let St=et[Nt];Wt(St[2]+yt,St[1]+yt,St[0]+yt)}Mt=u+m*2,yt=k*Mt;for(let Nt=0;Nt<q;Nt++){let St=et[Nt];Wt(St[0]+yt,St[1]+yt,St[2]+yt)}}else{for(let Mt=0;Mt<q;Mt++){let yt=et[Mt];Wt(yt[2],yt[1],yt[0])}for(let Mt=0;Mt<q;Mt++){let yt=et[Mt];Wt(yt[0]+k*u,yt[1]+k*u,yt[2]+k*u)}}n.addGroup(ht,s.length/3-ht,0)}function ct(){let ht=s.length/3,Mt=0;at(U,Mt),Mt+=U.length;for(let yt=0,Nt=w.length;yt<Nt;yt++){let St=w[yt];at(St,Mt),Mt+=St.length}n.addGroup(ht,s.length/3-ht,1)}function at(ht,Mt){let yt=ht.length;for(;--yt>=0;){let Nt=yt,St=yt-1;St<0&&(St=ht.length-1);for(let z=0,J=u+m*2;z<J;z++){let gt=k*z,Et=k*(z+1),Rt=Mt+Nt+gt,G=Mt+St+gt,se=Mt+St+Et,Vt=Mt+Nt+Et;Pt(Rt,G,se,Vt)}}}function xt(ht,Mt,yt){c.push(ht),c.push(Mt),c.push(yt)}function Wt(ht,Mt,yt){Ut(ht),Ut(Mt),Ut(yt);let Nt=s.length/3,St=x.generateTopUV(n,s,Nt-3,Nt-2,Nt-1);Yt(St[0]),Yt(St[1]),Yt(St[2])}function Pt(ht,Mt,yt,Nt){Ut(ht),Ut(Mt),Ut(Nt),Ut(Mt),Ut(yt),Ut(Nt);let St=s.length/3,z=x.generateSideWallUV(n,s,St-6,St-3,St-2,St-1);Yt(z[0]),Yt(z[1]),Yt(z[3]),Yt(z[1]),Yt(z[2]),Yt(z[3])}function Ut(ht){s.push(c[ht*3+0]),s.push(c[ht*3+1]),s.push(c[ht*3+2])}function Yt(ht){r.push(ht.x),r.push(ht.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return xm(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new na[s.type]().fromJSON(s)),new i(n,t.options)}},gm={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new tt(r,o),new tt(a,c),new tt(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],M=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new tt(o,1-c),new tt(l,1-h),new tt(f,1-g),new tt(M,1-p)]:[new tt(a,1-c),new tt(u,1-h),new tt(d,1-g),new tt(m,1-p)]}};function xm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Xi=class i extends Sr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},qi=class i extends ae{constructor(t=[new tt(0,-.5),new tt(.5,0),new tt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=le(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],u=1/e,h=new O,f=new tt,d=new O,g=new O,M=new O,m=0,p=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,d.x=p*1,d.y=-m,d.z=p*0,M.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:M.normalize(),c.push(M.x,M.y,M.z);break;default:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=M.x,d.y+=M.y,d.z+=M.z,d.normalize(),c.push(d.x,d.y,d.z),M.copy(g)}for(let x=0;x<=e;x++){let y=n+x*u*s,v=Math.sin(y),b=Math.cos(y);for(let S=0;S<=t.length-1;S++){h.x=t[S].x*v,h.y=t[S].y,h.z=t[S].x*b,o.push(h.x,h.y,h.z),f.x=x/e,f.y=S/(t.length-1),a.push(f.x,f.y);let _=c[3*S+0]*v,T=c[3*S+1],L=c[3*S+0]*b;l.push(_,T,L)}}for(let x=0;x<e;x++)for(let y=0;y<t.length-1;y++){let v=y+x*t.length,b=v,S=v+t.length,_=v+t.length+1,T=v+1;r.push(b,S,T),r.push(_,T,S)}this.setIndex(r),this.setAttribute("position",new Gt(o,3)),this.setAttribute("uv",new Gt(a,2)),this.setAttribute("normal",new Gt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Pr=class i extends Sr{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Yi=class i extends ae{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=t/a,f=e/c,d=[],g=[],M=[],m=[];for(let p=0;p<u;p++){let x=p*f-o;for(let y=0;y<l;y++){let v=y*h-r;g.push(v,-x,0),M.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<a;x++){let y=x+l*p,v=x+l*(p+1),b=x+1+l*(p+1),S=x+1+l*p;d.push(y,v,S),d.push(v,b,S)}this.setIndex(d),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(M,3)),this.setAttribute("uv",new Gt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Lr=class i extends ae{constructor(t=new qn([new tt(0,.5),new tt(-.5,-.5),new tt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Gt(s,3)),this.setAttribute("normal",new Gt(r,3)),this.setAttribute("uv",new Gt(o,2));function l(u){let h=s.length/3,f=u.extractPoints(e),d=f.shape,g=f.holes;Gn.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){let x=g[m];Gn.isClockWise(x)===!0&&(g[m]=x.reverse())}let M=Gn.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){let x=g[m];d=d.concat(x)}for(let m=0,p=d.length;m<p;m++){let x=d[m];s.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let m=0,p=M.length;m<p;m++){let x=M[m],y=x[0]+h,v=x[1]+h,b=x[2]+h;n.push(y,v,b),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return _m(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function _m(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var bi=class i extends ae{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new O,f=new O,d=[],g=[],M=[],m=[];for(let p=0;p<=n;p++){let x=[],y=p/n,v=o+y*a,b=t*Math.cos(v),S=Math.sqrt(t*t-b*b),_=0;p===0&&o===0?_=.5/e:p===n&&c===Math.PI&&(_=-.5/e);for(let T=0;T<=e;T++){let L=T/e,I=s+L*r;h.x=-S*Math.cos(I),h.y=b,h.z=S*Math.sin(I),g.push(h.x,h.y,h.z),f.copy(h).normalize(),M.push(f.x,f.y,f.z),m.push(L+_,1-y),x.push(l++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){let y=u[p][x+1],v=u[p][x],b=u[p+1][x],S=u[p+1][x+1];(p!==0||o>0)&&d.push(y,v,S),(p!==n-1||c<Math.PI)&&d.push(v,b,S)}this.setIndex(d),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(M,3)),this.setAttribute("uv",new Gt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Dr=class i extends ae{constructor(t=new Ar(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new O,c=new O,l=new tt,u=new O,h=[],f=[],d=[],g=[];M(),this.setIndex(g),this.setAttribute("position",new Gt(h,3)),this.setAttribute("normal",new Gt(f,3)),this.setAttribute("uv",new Gt(d,2));function M(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),x(),p()}function m(y){u=t.getPointAt(y/e,u);let v=o.normals[y],b=o.binormals[y];for(let S=0;S<=s;S++){let _=S/s*Math.PI*2,T=Math.sin(_),L=-Math.cos(_);c.x=L*v.x+T*b.x,c.y=L*v.y+T*b.y,c.z=L*v.z+T*b.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,h.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=e;y++)for(let v=1;v<=s;v++){let b=(s+1)*(y-1)+(v-1),S=(s+1)*y+(v-1),_=(s+1)*y+v,T=(s+1)*(y-1)+v;g.push(b,S,T),g.push(S,_,T)}}function x(){for(let y=0;y<=e;y++)for(let v=0;v<=s;v++)l.x=y/e,l.y=v/s,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new na[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function es(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(hu(s))s.isRenderTargetTexture?(ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(hu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Qe(i){let t={};for(let e=0;e<i.length;e++){let n=es(i[e]);for(let s in n)t[s]=n[s]}return t}function hu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ym(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Yl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}var hd={clone:es,merge:Qe},vm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wn=class extends hi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vm,this.fragmentShader=Mm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=es(t.uniforms),this.uniformsGroups=ym(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new vt().setHex(s.value);break;case"v2":this.uniforms[n].value=new tt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new O().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Te().fromArray(s.value);break;case"m3":this.uniforms[n].value=new re().fromArray(s.value);break;case"m4":this.uniforms[n].value=new pe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},sa=class extends wn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ra=class extends hi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zr,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Is=class extends ra{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new tt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return le(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new vt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new vt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new vt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return zi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){zi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var we=class extends hi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zr,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=va,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},oa=class extends hi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},aa=class extends hi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ms(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function No(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ti=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ca=class extends Ti{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cl,endingEnd:cl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ll:r=t,a=2*e-n;break;case hl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ll:o=t,c=2*n-e;break;case hl:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),M=g*g,m=M*g,p=-f*m+2*f*M-f*g,x=(1+f)*m+(-1.5-2*f)*M+(-.5+f)*g+1,y=(-1-d)*m+(1.5+d)*M+.5*g,v=d*m-d*M;for(let b=0;b!==a;++b)r[b]=p*o[u+b]+x*o[l+b]+y*o[c+b]+v*o[h+b];return r}},la=class extends Ti{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(n-e)/(s-e),h=1-u;for(let f=0;f!==a;++f)r[f]=o[l+f]*h+o[c+f]*u;return r}},ha=class extends Ti{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ua=class extends Ti{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let g=(n-e)/(s-e),M=1-g;for(let m=0;m!==a;++m)r[m]=o[l+m]*M+o[c+m]*g;return r}let f=a*2,d=t-1;for(let g=0;g!==a;++g){let M=o[l+g],m=o[c+g],p=d*f+g*2,x=h[p],y=h[p+1],v=t*f+g*2,b=u[v],S=u[v+1],_=bm(n,e,x,b,s);r[g]=ud(_,M,y,S,m)}return r}};function ud(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Sm(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function bm(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=ud(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let c=Sm(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var yn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ms(e,this.TimeBufferType),this.values=ms(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ms(t.times,Array),values:ms(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),No(t.settings)&&(n.settings={inTangents:ms(t.settings.inTangents,Array),outTangents:ms(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ha(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new la(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ca(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ua(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case cr:e=this.InterpolantFactoryMethodDiscrete;break;case Zo:e=this.InterpolantFactoryMethodLinear;break;case Oo:e=this.InterpolantFactoryMethodSmooth;break;case al:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ee("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return cr;case this.InterpolantFactoryMethodLinear:return Zo;case this.InterpolantFactoryMethodSmooth:return Oo;case this.InterpolantFactoryMethodBezier:return al}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;No(this.settings)&&(uu(this.settings.inTangents,t),uu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;No(this.settings)&&(du(this.settings.inTangents,t),du(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ne("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ne("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){ne("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){ne("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&up(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){ne("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Oo,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(s)c=!0;else{let h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){let M=e[h+g];if(M!==e[f+g]||M!==e[d+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[h+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,No(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function uu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function du(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=Zo;var wi=class extends yn{constructor(t,e,n){super(t,e,n)}};wi.prototype.ValueTypeName="bool";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=cr;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var da=class extends yn{constructor(t,e,n,s){super(t,e,n,s)}};da.prototype.ValueTypeName="color";var fa=class extends yn{constructor(t,e,n,s){super(t,e,n,s)}};fa.prototype.ValueTypeName="number";var pa=class extends Ti{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let u=l+a;l!==u;l+=4)Ye.slerpFlat(r,0,o,l-a,o,l,c);return r}},Nr=class extends yn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new pa(this.times,this.values,this.getValueSize(),t)}};Nr.prototype.ValueTypeName="quaternion";Nr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ai=class extends yn{constructor(t,e,n){super(t,e,n)}};Ai.prototype.ValueTypeName="string";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=cr;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var ma=class extends yn{constructor(t,e,n,s){super(t,e,n,s)}};ma.prototype.ValueTypeName="vector";var ga=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let d=l[h],g=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},dd=new ga,xa=class{constructor(t){this.manager=t!==void 0?t:dd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};xa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ur=class extends Ce{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Fr=class extends Ur{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},ol=new pe,fu=new O,pu=new O,_a=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.mapType=cn,this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Si,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;fu.setFromMatrixPosition(t.matrixWorld),e.position.copy(fu),pu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(pu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){ol.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ol,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===vs||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(ol)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Uo=new O,Fo=new Ye,kn=new O,Or=class extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Uo,Fo,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uo,Fo,kn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Uo,Fo,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uo,Fo,kn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},vi=new O,mu=new tt,gu=new tt,gn=class extends Or{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ss*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(sr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vi.x,vi.y).multiplyScalar(-t/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-t/vi.z)}getViewSize(t,e){return this.getViewBounds(t,mu,gu),e.subVectors(gu,mu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(sr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Zi=class extends Or{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},pl=class extends _a{constructor(){super(new Zi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Br=class extends Ur{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new pl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var gs=-90,xs=1,Ps=class extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new gn(gs,xs,t,e);s.layers=this.layers,this.add(s);let r=new gn(gs,xs,t,e);r.layers=this.layers,this.add(r);let o=new gn(gs,xs,t,e);o.layers=this.layers,this.add(o);let a=new gn(gs,xs,t,e);a.layers=this.layers,this.add(a);let c=new gn(gs,xs,t,e);c.layers=this.layers,this.add(c);let l=new gn(gs,xs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===vs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.mipmapsAutoUpdate=M,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ya=class extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Zl="\\[\\]\\.:\\/",Tm=new RegExp("["+Zl+"]","g"),$l="[^"+Zl+"]",wm="[^"+Zl.replace("\\.","")+"]",Am=/((?:WC+[\/:])*)/.source.replace("WC",$l),Em=/(WCOD+)?/.source.replace("WCOD",wm),Cm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$l),Rm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$l),Im=new RegExp("^"+Am+Em+Cm+Rm+"$"),Pm=["material","materials","bones","map"],ml=class{constructor(t,e,n){let s=n||Ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ae=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Tm,"")}static parseTrackName(t){let e=Im.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Pm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ee("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;ne("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ae.Composite=ml;Ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ae.prototype.GetterByBindingType=[Ae.prototype._getValue_direct,Ae.prototype._getValue_array,Ae.prototype._getValue_arrayElement,Ae.prototype._getValue_toArray];Ae.prototype.SetterByBindingTypeAndVersioning=[[Ae.prototype._setValue_direct,Ae.prototype._setValue_direct_setNeedsUpdate,Ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_array,Ae.prototype._setValue_array_setNeedsUpdate,Ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_arrayElement,Ae.prototype._setValue_arrayElement_setNeedsUpdate,Ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_fromArray,Ae.prototype._setValue_fromArray_setNeedsUpdate,Ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Uy=new Float32Array(1);var xu=new pe,zr=class{constructor(t,e,n=0,s=1/0){this.ray=new xr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ts,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ne("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return xu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xu),this}intersectObject(t,e=!0,n=[]){return gl(t,this,n,e),n.sort(_u),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)gl(t[s],this,n,e);return n.sort(_u),n}};function _u(i,t){return i.distance-t.distance}function gl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)gl(r[o],t,e,!0)}}var xl=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}},yu=new tt,kr=class{constructor(t=new tt(1/0,1/0),e=new tt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=yu.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yu).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}};function Jl(i,t,e,n){let s=Lm(n);switch(e){case Fl:return i*t;case Fs:return i*t/s.components*s.byteLength;case Ea:return i*t/s.components*s.byteLength;case Ci:return i*t*2/s.components*s.byteLength;case Ca:return i*t*2/s.components*s.byteLength;case Ol:return i*t*3/s.components*s.byteLength;case Fn:return i*t*4/s.components*s.byteLength;case Ra:return i*t*4/s.components*s.byteLength;case Gr:case Hr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wr:case Xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pa:case Da:return Math.max(i,16)*Math.max(t,8)/4;case Ia:case La:return Math.max(i,8)*Math.max(t,8)/2;case Na:case Ua:case Oa:case Ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fa:case qr:case za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Va:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ga:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Xa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case qa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ya:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Za:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case $a:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Qa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ja:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case tc:case ec:case nc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ic:case sc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Yr:case rc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Lm(i){switch(i){case cn:case Ll:return{byteLength:1,components:1};case Us:case Dl:case Un:return{byteLength:2,components:1};case wa:case Aa:return{byteLength:2,components:4};case Nn:case Ta:case An:return{byteLength:4,components:1};case Nl:case Ul:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Nd(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function zm(i){let t=new WeakMap;function e(a,c){let l=a.array,u=a.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){let u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){let g=h[f],M=h[d];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++f,h[f]=M)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){let M=h[d];i.bufferSubData(l,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var km=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vm=`#ifdef USE_ALPHAHASH
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
#endif`,Gm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qm=`#ifdef USE_AOMAP
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
#endif`,Ym=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zm=`#ifdef USE_BATCHING
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
#endif`,$m=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Km=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jm=`#ifdef USE_IRIDESCENCE
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
#endif`,t0=`#ifdef USE_BUMPMAP
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
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,r0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,o0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,a0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,c0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,l0=`#define PI 3.141592653589793
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
} // validated`,h0=`vec3 transformedNormal = objectNormal;
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
#endif`,u0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,d0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,f0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,p0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,m0="gl_FragColor = linearToOutputTexel( gl_FragColor );",g0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,x0=`#ifdef USE_ENVMAP
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
#endif`,_0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,y0=`#ifdef USE_ENVMAP
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
#endif`,v0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,M0=`#ifdef USE_ENVMAP
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
#endif`,S0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,b0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,w0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,A0=`#ifdef USE_GRADIENTMAP
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
}`,E0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,C0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,R0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,I0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,P0=`#ifdef USE_ENVMAP
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
#endif`,L0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,D0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,N0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,U0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,F0=`PhysicalMaterial material;
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
#endif`,O0=`uniform sampler2D dfgLUT;
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
}`,B0=`
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
#endif`,z0=`#if defined( RE_IndirectDiffuse )
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
#endif`,k0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,V0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,G0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,H0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,q0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Y0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Z0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$0=`#if defined( USE_POINTS_UV )
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
#endif`,J0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,K0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Q0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,j0=`#if defined( USE_MORPHCOLORS )
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
#endif`,tg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eg=`#ifdef USE_MORPHTARGETS
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
#endif`,ng=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ig=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ag=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,cg=`#ifdef USE_NORMALMAP
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
#endif`,lg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ug=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_g=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tg=`float getShadowMask() {
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
}`,wg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ag=`#ifdef USE_SKINNING
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
#endif`,Eg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cg=`#ifdef USE_SKINNING
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
#endif`,Rg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ig=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dg=`#ifdef USE_TRANSMISSION
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
#endif`,Ng=`#ifdef USE_TRANSMISSION
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
#endif`,Ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,zg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kg=`uniform sampler2D t2D;
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
}`,Vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gg=`uniform float backgroundBlurriness;
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
}`,Hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xg=`#include <common>
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
}`,qg=`#if DEPTH_PACKING == 3200
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
}`,Yg=`#define DISTANCE
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
}`,Zg=`#define DISTANCE
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
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`uniform float scale;
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
}`,Qg=`uniform vec3 diffuse;
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
}`,jg=`#include <common>
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
}`,t1=`uniform vec3 diffuse;
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
}`,e1=`#define LAMBERT
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
}`,n1=`#define LAMBERT
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
}`,i1=`#define MATCAP
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
}`,s1=`#define MATCAP
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
}`,r1=`#define NORMAL
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
}`,o1=`#define NORMAL
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
}`,a1=`#define PHONG
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
}`,c1=`#define PHONG
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
}`,l1=`#define STANDARD
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
}`,h1=`#define STANDARD
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
}`,u1=`#define TOON
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
}`,d1=`#define TOON
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
}`,f1=`uniform float size;
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
}`,p1=`uniform vec3 diffuse;
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
}`,m1=`#include <common>
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
}`,g1=`uniform vec3 color;
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
}`,x1=`uniform float rotation;
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
}`,_1=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:km,alphahash_pars_fragment:Vm,alphamap_fragment:Gm,alphamap_pars_fragment:Hm,alphatest_fragment:Wm,alphatest_pars_fragment:Xm,aomap_fragment:qm,aomap_pars_fragment:Ym,batching_pars_vertex:Zm,batching_vertex:$m,begin_vertex:Jm,beginnormal_vertex:Km,bsdfs:Qm,iridescence_fragment:jm,bumpmap_pars_fragment:t0,clipping_planes_fragment:e0,clipping_planes_pars_fragment:n0,clipping_planes_pars_vertex:i0,clipping_planes_vertex:s0,color_fragment:r0,color_pars_fragment:o0,color_pars_vertex:a0,color_vertex:c0,common:l0,defaultnormal_vertex:h0,displacementmap_pars_vertex:u0,displacementmap_vertex:d0,emissivemap_fragment:f0,emissivemap_pars_fragment:p0,colorspace_fragment:m0,colorspace_pars_fragment:g0,envmap_fragment:x0,envmap_common_pars_fragment:_0,envmap_pars_fragment:y0,envmap_pars_vertex:v0,envmap_physical_pars_fragment:P0,envmap_vertex:M0,fog_vertex:S0,fog_pars_vertex:b0,fog_fragment:T0,fog_pars_fragment:w0,gradientmap_pars_fragment:A0,lightmap_pars_fragment:E0,lights_lambert_fragment:C0,lights_lambert_pars_fragment:R0,lights_pars_begin:I0,lights_toon_fragment:L0,lights_toon_pars_fragment:D0,lights_phong_fragment:N0,lights_phong_pars_fragment:U0,lights_physical_fragment:F0,lights_physical_pars_fragment:O0,lights_fragment_begin:B0,lights_fragment_maps:z0,lights_fragment_end:k0,lightprobes_pars_fragment:V0,logdepthbuf_fragment:G0,logdepthbuf_pars_fragment:H0,logdepthbuf_pars_vertex:W0,logdepthbuf_vertex:X0,map_fragment:q0,map_pars_fragment:Y0,map_particle_fragment:Z0,map_particle_pars_fragment:$0,metalnessmap_fragment:J0,metalnessmap_pars_fragment:K0,morphinstance_vertex:Q0,morphcolor_vertex:j0,morphnormal_vertex:tg,morphtarget_pars_vertex:eg,morphtarget_vertex:ng,normal_fragment_begin:ig,normal_fragment_maps:sg,normal_pars_fragment:rg,normal_pars_vertex:og,normal_vertex:ag,normalmap_pars_fragment:cg,clearcoat_normal_fragment_begin:lg,clearcoat_normal_fragment_maps:hg,clearcoat_pars_fragment:ug,iridescence_pars_fragment:dg,opaque_fragment:fg,packing:pg,premultiplied_alpha_fragment:mg,project_vertex:gg,dithering_fragment:xg,dithering_pars_fragment:_g,roughnessmap_fragment:yg,roughnessmap_pars_fragment:vg,shadowmap_pars_fragment:Mg,shadowmap_pars_vertex:Sg,shadowmap_vertex:bg,shadowmask_pars_fragment:Tg,skinbase_vertex:wg,skinning_pars_vertex:Ag,skinning_vertex:Eg,skinnormal_vertex:Cg,specularmap_fragment:Rg,specularmap_pars_fragment:Ig,tonemapping_fragment:Pg,tonemapping_pars_fragment:Lg,transmission_fragment:Dg,transmission_pars_fragment:Ng,uv_pars_fragment:Ug,uv_pars_vertex:Fg,uv_vertex:Og,worldpos_vertex:Bg,background_vert:zg,background_frag:kg,backgroundCube_vert:Vg,backgroundCube_frag:Gg,cube_vert:Hg,cube_frag:Wg,depth_vert:Xg,depth_frag:qg,distance_vert:Yg,distance_frag:Zg,equirect_vert:$g,equirect_frag:Jg,linedashed_vert:Kg,linedashed_frag:Qg,meshbasic_vert:jg,meshbasic_frag:t1,meshlambert_vert:e1,meshlambert_frag:n1,meshmatcap_vert:i1,meshmatcap_frag:s1,meshnormal_vert:r1,meshnormal_frag:o1,meshphong_vert:a1,meshphong_frag:c1,meshphysical_vert:l1,meshphysical_frag:h1,meshtoon_vert:u1,meshtoon_frag:d1,points_vert:f1,points_frag:p1,shadow_vert:m1,shadow_frag:g1,sprite_vert:x1,sprite_frag:_1},Ft={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},$n={basic:{uniforms:Qe([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:Qe([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new vt(0)},envMapIntensity:{value:1}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:Qe([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:Qe([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:Qe([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new vt(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:Qe([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:Qe([Ft.points,Ft.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:Qe([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:Qe([Ft.common,Ft.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:Qe([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:Qe([Ft.sprite,Ft.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distance:{uniforms:Qe([Ft.common,Ft.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distance_vert,fragmentShader:he.distance_frag},shadow:{uniforms:Qe([Ft.lights,Ft.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};$n.physical={uniforms:Qe([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new re},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};var oc={r:0,b:0,g:0},y1=new pe,Ud=new re;Ud.set(-1,0,0,0,1,0,0,0,1);function v1(i,t,e,n,s,r){let o=new vt(0),a=s===!0?0:1,c,l,u=null,h=0,f=null;function d(x){let y=x.isScene===!0?x.background:null;if(y&&y.isTexture){let v=x.backgroundBlurriness>0;y=t.get(y,v)}return y}function g(x){let y=!1,v=d(x);v===null?m(o,a):v&&v.isColor&&(m(v,1),y=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(x,y){let v=d(y);v&&v.isCubeTexture?(l===void 0&&(l=new ie(new Tn(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:es($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,S,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(y1.makeRotationFromEuler(y.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ud),l.material.toneMapped=fe.getTransfer(v.colorSpace)!==ye,(u!==v||h!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,f=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ie(new Yi(2,2),new wn({name:"BackgroundMaterial",uniforms:es($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=fe.getTransfer(v.colorSpace)!==ye,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,y){x.getRGB(oc,Yl(i)),e.buffers.color.setClear(oc.r,oc.g,oc.b,y,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),a=y,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,m(o,a)},render:g,addToRenderList:M,dispose:p}}function M1(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(w,E,C,A,U){let N=!1,k=h(w,A,C,E);r!==k&&(r=k,l(r.object)),N=d(w,A,C,U),N&&g(w,A,C,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,v(w,E,C,A),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function c(){return i.createVertexArray()}function l(w){return i.bindVertexArray(w)}function u(w){return i.deleteVertexArray(w)}function h(w,E,C,A){let U=A.wireframe===!0,N=n[E.id];N===void 0&&(N={},n[E.id]=N);let k=w.isInstancedMesh===!0?w.id:0,H=N[k];H===void 0&&(H={},N[k]=H);let P=H[C.id];P===void 0&&(P={},H[C.id]=P);let B=P[U];return B===void 0&&(B=f(c()),P[U]=B),B}function f(w){let E=[],C=[],A=[];for(let U=0;U<e;U++)E[U]=0,C[U]=0,A[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:C,attributeDivisors:A,object:w,attributes:{},index:null}}function d(w,E,C,A){let U=r.attributes,N=E.attributes,k=0,H=C.getAttributes();for(let P in H)if(H[P].location>=0){let V=U[P],X=N[P];if(X===void 0&&(P==="instanceMatrix"&&w.instanceMatrix&&(X=w.instanceMatrix),P==="instanceColor"&&w.instanceColor&&(X=w.instanceColor)),V===void 0||V.attribute!==X||X&&V.data!==X.data)return!0;k++}return r.attributesNum!==k||r.index!==A}function g(w,E,C,A){let U={},N=E.attributes,k=0,H=C.getAttributes();for(let P in H)if(H[P].location>=0){let V=N[P];V===void 0&&(P==="instanceMatrix"&&w.instanceMatrix&&(V=w.instanceMatrix),P==="instanceColor"&&w.instanceColor&&(V=w.instanceColor));let X={};X.attribute=V,V&&V.data&&(X.data=V.data),U[P]=X,k++}r.attributes=U,r.attributesNum=k,r.index=A}function M(){let w=r.newAttributes;for(let E=0,C=w.length;E<C;E++)w[E]=0}function m(w){p(w,0)}function p(w,E){let C=r.newAttributes,A=r.enabledAttributes,U=r.attributeDivisors;C[w]=1,A[w]===0&&(i.enableVertexAttribArray(w),A[w]=1),U[w]!==E&&(i.vertexAttribDivisor(w,E),U[w]=E)}function x(){let w=r.newAttributes,E=r.enabledAttributes;for(let C=0,A=E.length;C<A;C++)E[C]!==w[C]&&(i.disableVertexAttribArray(C),E[C]=0)}function y(w,E,C,A,U,N,k){k===!0?i.vertexAttribIPointer(w,E,C,U,N):i.vertexAttribPointer(w,E,C,A,U,N)}function v(w,E,C,A){M();let U=A.attributes,N=C.getAttributes(),k=E.defaultAttributeValues;for(let H in N){let P=N[H];if(P.location>=0){let B=U[H];if(B===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(B=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(B=w.instanceColor)),B!==void 0){let V=B.normalized,X=B.itemSize,et=t.get(B);if(et===void 0)continue;let q=et.buffer,Z=et.type,rt=et.bytesPerElement,ct=Z===i.INT||Z===i.UNSIGNED_INT||B.gpuType===Ta;if(B.isInterleavedBufferAttribute){let at=B.data,xt=at.isInterleavedBuffer===!0?at.stride:at.itemSize,Wt=B.offset;if(at.isInstancedInterleavedBuffer||at.isInstancedBufferAttribute){for(let Pt=0;Pt<P.locationSize;Pt++)p(P.location+Pt,at.meshPerAttribute);w.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Pt=0;Pt<P.locationSize;Pt++)m(P.location+Pt);i.bindBuffer(i.ARRAY_BUFFER,q);for(let Pt=0;Pt<P.locationSize;Pt++)y(P.location+Pt,X/P.locationSize,Z,V,xt*rt,(Wt+X/P.locationSize*Pt)*rt,ct)}else{if(B.isInstancedBufferAttribute){for(let at=0;at<P.locationSize;at++)p(P.location+at,B.meshPerAttribute);w.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let at=0;at<P.locationSize;at++)m(P.location+at);i.bindBuffer(i.ARRAY_BUFFER,q);for(let at=0;at<P.locationSize;at++)y(P.location+at,X/P.locationSize,Z,V,X*rt,X/P.locationSize*at*rt,ct)}}else if(k!==void 0){let V=k[H];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(P.location,V);break;case 3:i.vertexAttrib3fv(P.location,V);break;case 4:i.vertexAttrib4fv(P.location,V);break;default:i.vertexAttrib1fv(P.location,V)}}}}x()}function b(){L();for(let w in n){let E=n[w];for(let C in E){let A=E[C];for(let U in A){let N=A[U];for(let k in N)u(N[k].object),delete N[k];delete A[U]}}delete n[w]}}function S(w){if(n[w.id]===void 0)return;let E=n[w.id];for(let C in E){let A=E[C];for(let U in A){let N=A[U];for(let k in N)u(N[k].object),delete N[k];delete A[U]}}delete n[w.id]}function _(w){for(let E in n){let C=n[E];for(let A in C){let U=C[A];if(U[w.id]===void 0)continue;let N=U[w.id];for(let k in N)u(N[k].object),delete N[k];delete U[w.id]}}}function T(w){for(let E in n){let C=n[E],A=w.isInstancedMesh===!0?w.id:0,U=C[A];if(U!==void 0){for(let N in U){let k=U[N];for(let H in k)u(k[H].object),delete k[H];delete U[N]}delete C[A],Object.keys(C).length===0&&delete n[E]}}}function L(){I(),o=!0,r!==s&&(r=s,l(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:I,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfObject:T,releaseStatesOfProgram:_,initAttributes:M,enableAttribute:m,disableUnusedAttributes:x}}function S1(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function a(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let f=0;for(let d=0;d<u;d++)f+=l[d];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function b1(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==Fn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let T=_===Un&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==cn&&_!==An&&!T&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(ee("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&h===!1;e.reversedDepthBuffer===!0&&h===!1&&ee("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&h===!0&&ee("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,maxSamples:b,samples:S}}function T1(i){let t=this,e=null,n=0,s=!1,r=!1,o=new mn,a=new re,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){let g=h.clippingPlanes,M=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{let x=r?0:n,y=x*4,v=p.clippingState||null;c.value=v,v=u(g,f,y,d);for(let b=0;b!==y;++b)v[b]=e[b];p.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,g){let M=h!==null?h.length:0,m=null;if(M!==0){if(m=c.value,g!==!0||m===null){let p=d+M*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=d;y!==M;++y,v+=4)o.copy(h[y]).applyMatrix4(x,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}var Kr=class extends xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new _r(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Tn(5,5,5),r=new wn({name:"CubemapFromEquirect",uniforms:es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:Ji});r.uniforms.tEquirect.value=e;let o=new ie(s,r),a=e.minFilter;return e.minFilter===di&&(e.minFilter=qe),new Ps(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},fd=256,w1=3,A1=20,Fd=256,Od=16,E1=3,C1=new O,R1=new vt,cc=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ps(1,10,null),this._boxMesh=new ie(new Tn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=C1}=r,c=this._renderer;this._setSize(o);let l=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let h=c.autoClear,f=c.autoClearColor,d=c.autoClearDepth,g=c.autoClearStencil,M=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,M===null&&(t.background=c.getClearColor(R1));let m=new Ps(n,s,u);return m.position.copy(a),m.update(c,t),c.autoClear=h,c.autoClearColor=f,c.autoClearDepth=d,c.autoClearStencil=g,t.background=M,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(l,e)),this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=md(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(fd,Wl(t))}_fromTexture(t,e){t.mapping===Qi||t.mapping===Ns?this._setSize(t.image.length===0?fd:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=pd(t,!1,!1),n=Math.log2(t)-w1;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=pd(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Qi||t.mapping===Ns?(this._cubemapMaterial===null&&(this._cubemapMaterial=gd()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=md()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=I1(),this._integrationMaterial=P1());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Od);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-E1)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let c=a>0?Math.log2(e)+.5*Math.log2(6/(Fd*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=c,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=L1());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function pd(i,t,e){return new Kr(i,{minFilter:di,generateMipmaps:t,type:Un,colorSpace:lr,depthBuffer:e})}function Qr(i,t,e){return new wn({name:i,uniforms:t,vertexShader:he.cube_vert,fragmentShader:e,side:rn,blending:Ji,depthTest:!1,depthWrite:!1})}function I1(){return Qr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Fd}u

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
	`)}function P1(){return Qr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Od}},`

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
	`)}function L1(){return Qr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${A1}
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
	`)}function md(){return Qr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function gd(){return Qr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function D1(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Ma||d===Sa)if(t.has(f)){let g=t.get(f).texture;return a(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let M=new Kr(g.height);return M.fromEquirectangularTexture(i,f),t.set(f,M),f.addEventListener("dispose",l),a(M.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,g=d===Ma||d===Sa,M=d===Qi||d===Ns;if(g||M){let m=e.get(f),p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new cc(i)),m=g?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let x=f.image;return g&&x&&x.height>0||M&&x&&c(x)?(n===null&&(n=new cc(i)),m=g?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function a(f,d){return d===Ma?f.mapping=Qi:d===Sa&&(f.mapping=Ns),f}function c(f){let d=0,g=6;for(let M=0;M<g;M++)f[M]!==void 0&&d++;return d===g}function l(f){let d=f.target;d.removeEventListener("dispose",l);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function h(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function N1(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&zi("WebGLRenderer: "+n+" extension not supported."),s}}}function U1(i,t,e,n){let s={},r=new WeakMap,o=new FinalizationRegistry(g=>delete s[g]);function a(g){c(g.target)}function c(g){g.index!==null&&t.remove(g.index);for(let m in g.attributes)t.remove(g.attributes[m]);g.removeEventListener("dispose",a),delete s[g.id],o.unregister(g);let M=r.get(g);M&&(t.remove(M),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function l(g,M){return s[M.id]!==void 0||(M.addEventListener("dispose",a),s[M.id]=new WeakRef(M),o.register(M,M.id,M),e.memory.geometries++),M}function u(g){let M=g.attributes;for(let m in M)t.update(M[m],i.ARRAY_BUFFER)}function h(g){let M=g.index,m=g.attributes.position,p=0;if(m===void 0)return;let x=M!==null?M.array.length:m.array.length/3-1,y=m.count>=65535?gr:mr,v=new y(Math.ceil(x/3)*6,1),b=v.array;if(M!==null){let _=M.array;p=M.version;for(let T=0,L=0;T<x;T+=3){let I=_[T+0],w=_[T+1],E=_[T+2];b[L++]=I,b[L++]=w,b[L++]=w,b[L++]=E,b[L++]=E,b[L++]=I}}else{p=m.version;for(let _=0,T=0;_<x;_+=3){let L=_+0,I=_+1,w=_+2;b[T++]=L,b[T++]=I,b[T++]=I,b[T++]=w,b[T++]=w,b[T++]=L}}v.version=p;let S=r.get(g);S&&t.remove(S),r.set(g,v)}function f(g){let M=r.get(g);if(M){let m=g.index;m!==null&&M.version<m.version&&h(g)}else h(g);return r.get(g)}function d(){for(let g in s){let M=s[g].deref();M!==void 0&&c(M)}}return{get:l,update:u,getWireframeAttribute:f,dispose:d}}function F1(i,t,e){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function c(h,f){i.drawElements(n,f,r,h*o),e.update(f,n,1)}function l(h,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,h*o,d),e.update(f,n,d))}function u(h,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,d);let M=0;for(let m=0;m<d;m++)M+=f[m];e.update(M,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function O1(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:ne("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function B1(i,t,e){let n=new WeakMap,s=new Te;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let L=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",L)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],y=0;d===!0&&(y=1),g===!0&&(y=2),M===!0&&(y=3);let v=a.attributes.position.count*y,b=1;v>t.maxTextureSize&&(b=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let S=new Float32Array(v*b*4*h),_=new dr(S,v,b,h);_.type=An,_.needsUpdate=!0;let T=y*4;for(let I=0;I<h;I++){let w=m[I],E=p[I],C=x[I],A=v*b*4*I;for(let U=0;U<w.count;U++){let N=U*T;d===!0&&(s.fromBufferAttribute(w,U),S[A+N+0]=s.x,S[A+N+1]=s.y,S[A+N+2]=s.z,S[A+N+3]=0),g===!0&&(s.fromBufferAttribute(E,U),S[A+N+4]=s.x,S[A+N+5]=s.y,S[A+N+6]=s.z,S[A+N+7]=0),M===!0&&(s.fromBufferAttribute(C,U),S[A+N+8]=s.x,S[A+N+9]=s.y,S[A+N+10]=s.z,S[A+N+11]=C.itemSize===4?s.w:1)}}f={count:h,texture:_,size:new tt(v,b)},n.set(a,f),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let M=0;M<l.length;M++)d+=l[M];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function z1(i,t,e,n,s){let r=new WeakMap;function o(l){let u=s.render.frame,h=l.geometry,f=t.get(l,h);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function a(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var k1={[Tl]:"LINEAR_TONE_MAPPING",[wl]:"REINHARD_TONE_MAPPING",[Al]:"CINEON_TONE_MAPPING",[El]:"ACES_FILMIC_TONE_MAPPING",[Rl]:"AGX_TONE_MAPPING",[Il]:"NEUTRAL_TONE_MAPPING",[Cl]:"CUSTOM_TONE_MAPPING"};function V1(i,t,e,n,s,r){let o=new xn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=null,u=new ae;u.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Gt([0,2,0,0,2,0],2));let h=new sa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new ie(u,h),d=new Zi(-1,1,1,-1,0,1),g=null,M=null,m=!1,p,x=null,y=[],v=!1;this.setSize=function(b,S){o.setSize(b,S),a!==null&&a.setSize(b,S),c!==null&&c.setSize(b,S);for(let _=0;_<y.length;_++){let T=y[_];T.setSize&&T.setSize(b,S)}},this.setEffects=function(b){y=b,v=y.length>0&&y[0].isRenderPass===!0;let S=o.width,_=o.height;y.length>0&&a===null&&(a=new xn(S,_,{type:Un,depthBuffer:!1,stencilBuffer:!1}),c=new xn(S,_,{type:Un,depthBuffer:!1,stencilBuffer:!1}));let T=s===!0&&y.some(L=>L.needsDepthTexture===!0);T!==(o.depthTexture!==null)&&(T===!0&&l===null&&(l=new ui(S,_),r===!0&&(l.format=fi,l.type=ji)),o.dispose(),o.depthTexture=T?l:null,o.resolveDepthBuffer=T,o.storeMultisampledDepthBuffer=T);for(let L=0;L<y.length;L++){let I=y[L];I.setSize&&I.setSize(S,_),T&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(l)}},this.begin=function(b,S){if(m||b.toneMapping===Yn&&y.length===0)return!1;if(x=S,S!==null){let _=S.width,T=S.height;(o.width!==_||o.height!==T)&&this.setSize(_,T)}return v===!1&&b.setRenderTarget(o),p=b.toneMapping,b.toneMapping=Yn,!0},this.hasRenderPass=function(){return v},this.end=function(b,S){b.toneMapping=p,m=!0;let _=o,T=a;for(let L=0;L<y.length;L++){let I=y[L];I.enabled!==!1&&(I.render(b,T,_,S),I.needsSwap!==!1&&(_=T,T=T===a?c:a))}if(g!==b.outputColorSpace||M!==b.toneMapping){g=b.outputColorSpace,M=b.toneMapping,h.defines={},fe.getTransfer(g)===ye&&(h.defines.SRGB_TRANSFER="");let L=k1[M];L&&(h.defines[L]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=_.texture,b.setRenderTarget(x),b.render(f,d),x=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),u.dispose(),h.dispose()}}var Bd=new en,zd=new ui(1,1),kd=new yr(1),Vd=new dr,Gd=new Ko,Hd=new _r,xd=[],_d=[],yd=new Float32Array(16),vd=new Float32Array(9),Md=new Float32Array(4);function Bs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=xd[s];if(r===void 0&&(r=new Float32Array(s),xd[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function hc(i,t){let e=_d[t];e===void 0&&(e=new Int32Array(t),_d[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function G1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function H1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2fv(this.addr,t),ze(e,t)}}function W1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;i.uniform3fv(this.addr,t),ze(e,t)}}function X1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4fv(this.addr,t),ze(e,t)}}function q1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;Md.set(n),i.uniformMatrix2fv(this.addr,!1,Md),ze(e,n)}}function Y1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;vd.set(n),i.uniformMatrix3fv(this.addr,!1,vd),ze(e,n)}}function Z1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;yd.set(n),i.uniformMatrix4fv(this.addr,!1,yd),ze(e,n)}}function $1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function J1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2iv(this.addr,t),ze(e,t)}}function K1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3iv(this.addr,t),ze(e,t)}}function Q1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4iv(this.addr,t),ze(e,t)}}function j1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function tx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2uiv(this.addr,t),ze(e,t)}}function ex(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3uiv(this.addr,t),ze(e,t)}}function nx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4uiv(this.addr,t),ze(e,t)}}function uc(i){return i.version===0&&(i.compareFunction=kl,i.needsUpdate=!0),i}function ix(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=uc(zd):r=Bd,e.setTexture2D(t||r,s)}function sx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Gd,s)}function rx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=uc(kd):r=Hd,e.setTextureCube(t||r,s)}function ox(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Vd,s)}function ax(i){switch(i){case 5126:return G1;case 35664:return H1;case 35665:return W1;case 35666:return X1;case 35674:return q1;case 35675:return Y1;case 35676:return Z1;case 5124:case 35670:return $1;case 35667:case 35671:return J1;case 35668:case 35672:return K1;case 35669:case 35673:return Q1;case 5125:return j1;case 36294:return tx;case 36295:return ex;case 36296:return nx;case 35678:case 36198:case 36298:case 36306:case 35682:return ix;case 35679:case 36299:case 36307:return sx;case 35680:case 36300:case 36308:case 36293:return rx;case 36289:case 36303:case 36311:case 36292:return ox}}function cx(i,t){i.uniform1fv(this.addr,t)}function lx(i,t){let e=Bs(t,this.size,2);i.uniform2fv(this.addr,e)}function hx(i,t){let e=Bs(t,this.size,3);i.uniform3fv(this.addr,e)}function ux(i,t){let e=Bs(t,this.size,4);i.uniform4fv(this.addr,e)}function dx(i,t){let e=Bs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function fx(i,t){let e=Bs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function px(i,t){let e=Bs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function mx(i,t){i.uniform1iv(this.addr,t)}function gx(i,t){i.uniform2iv(this.addr,t)}function xx(i,t){i.uniform3iv(this.addr,t)}function _x(i,t){i.uniform4iv(this.addr,t)}function yx(i,t){i.uniform1uiv(this.addr,t)}function vx(i,t){i.uniform2uiv(this.addr,t)}function Mx(i,t){i.uniform3uiv(this.addr,t)}function Sx(i,t){i.uniform4uiv(this.addr,t)}function bx(i,t,e){let n=this.cache,s=t.length,r=hc(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=uc(zd):o=Bd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Tx(i,t,e){let n=this.cache,s=t.length,r=hc(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Gd,r[o])}function wx(i,t,e){let n=this.cache,s=t.length,r=hc(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=uc(kd):o=Hd;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function Ax(i,t,e){let n=this.cache,s=t.length,r=hc(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Vd,r[o])}function Ex(i){switch(i){case 5126:return cx;case 35664:return lx;case 35665:return hx;case 35666:return ux;case 35674:return dx;case 35675:return fx;case 35676:return px;case 5124:case 35670:return mx;case 35667:case 35671:return gx;case 35668:case 35672:return xx;case 35669:case 35673:return _x;case 5125:return yx;case 36294:return vx;case 36295:return Mx;case 36296:return Sx;case 35678:case 36198:case 36298:case 36306:case 35682:return bx;case 35679:case 36299:case 36307:return Tx;case 35680:case 36300:case 36308:case 36293:return wx;case 36289:case 36303:case 36311:case 36292:return Ax}}var jl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ax(e.type)}},th=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ex(e.type)}},eh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Kl=/(\w+)(\])?(\[|\.)?/g;function Sd(i,t){i.seq.push(t),i.map[t.id]=t}function Cx(i,t,e){let n=i.name,s=n.length;for(Kl.lastIndex=0;;){let r=Kl.exec(n),o=Kl.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Sd(e,l===void 0?new jl(a,i,t):new th(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new eh(a),Sd(e,h)),e=h}}}var Os=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);Cx(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function bd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Rx=37297,Ix=0;function Px(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Td=new re;function Lx(i){fe._getMatrix(Td,fe.workingColorSpace,i);let t=`mat3( ${Td.elements.map(e=>e.toFixed(4))} )`;switch(fe.getTransfer(i)){case hr:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return ee("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function wd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Px(i.getShaderSource(t),a)}else return r}function Dx(i,t){let e=Lx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Nx={[Tl]:"Linear",[wl]:"Reinhard",[Al]:"Cineon",[El]:"ACESFilmic",[Rl]:"AgX",[Il]:"Neutral",[Cl]:"Custom"};function Ux(i,t){let e=Nx[t];return e===void 0?(ee("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ac=new O;function Fx(){fe.getLuminanceCoefficients(ac);let i=ac.x.toFixed(4),t=ac.y.toFixed(4),e=ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ox(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jr).join(`
`)}function Bx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function zx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Jr(i){return i!==""}function Ad(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Ed(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var kx=/^[ \t]*#include +<([\w\d./]+)>/gm;function nh(i){return i.replace(kx,Vx)}function Vx(i,t){let e=he[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return nh(e)}var Gx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cd(i){return i.replace(Gx,Hx)}function Hx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Rd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Wx={[$i]:"SHADOWMAP_TYPE_PCF",[Ls]:"SHADOWMAP_TYPE_VSM"};function Xx(i){return Wx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var qx={[Ns]:"ENVMAP_MODE_REFRACTION"};function Yx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":qx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Zx={[va]:"ENVMAP_BLENDING_MULTIPLY",[Vu]:"ENVMAP_BLENDING_MIX",[Gu]:"ENVMAP_BLENDING_ADD"};function $x(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Zx[i.combine]||"ENVMAP_BLENDING_NONE"}function Jx(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Xx(e),l=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Yx(e),h=$x(e),f=Ox(e),d=Bx(r),g=s.createProgram(),M,m,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(M=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Jr).join(`
`),M.length>0&&(M+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Jr).join(`
`),m.length>0&&(m+=`
`)):(M=[Rd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jr).join(`
`),m=[Rd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yn?"#define TONE_MAPPING":"",e.toneMapping!==Yn?he.tonemapping_pars_fragment:"",e.toneMapping!==Yn?Ux("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,Dx("linearToOutputTexel",e.outputColorSpace),Fx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Jr).join(`
`)),o=nh(o),o=Ad(o,e),o=Ed(o,e),a=nh(a),a=Ad(a,e),a=Ed(a,e),o=Cd(o),a=Cd(a),e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,M=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,m=["#define varying in",e.glslVersion===Vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let x=p+M+o,y=p+m+a,v=bd(s,s.VERTEX_SHADER,x),b=bd(s,s.FRAGMENT_SHADER,y);s.attachShader(g,v),s.attachShader(g,b),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function S(I){if(i.debug.checkShaderErrors){let w=s.getProgramInfoLog(g)||"",E=s.getShaderInfoLog(v)||"",C=s.getShaderInfoLog(b)||"",A=w.trim(),U=E.trim(),N=C.trim(),k=!0,H=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,v,b);else{let P=wd(s,v,"vertex"),B=wd(s,b,"fragment");ne("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+A+`
`+P+`
`+B)}else A!==""?ee("WebGLProgram: Program Info Log:",A):(U===""||N==="")&&(H=!1);H&&(I.diagnostics={runnable:k,programLog:A,vertexShader:{log:U,prefix:M},fragmentShader:{log:N,prefix:m}})}s.deleteShader(v),s.deleteShader(b),_=new Os(s,g),T=zx(s,g)}let _;this.getUniforms=function(){return _===void 0&&S(this),_};let T;this.getAttributes=function(){return T===void 0&&S(this),T};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(g,Rx)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ix++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=v,this.fragmentShader=b,this}var Kx=0,ih=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new sh(t),e.set(t,n)),n}},sh=class{constructor(t){this.id=Kx++,this.code=t,this.usedTimes=0}};function Qx(i){return i===Ci||i===qr||i===Yr}function jx(i,t,e,n,s,r){let o=new Ts,a=new ih,c=new Set,l=[],u=new Map,h=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,T,L,I,w,E){let C=I.fog,A=w.geometry,U=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,N=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,k=t.get(_.envMap||U,N),H=f[_.type],P=n.precision;_.precision!==null&&(P=n.getMaxPrecision(_.precision),P!==_.precision&&ee("WebGLProgram.getParameters:",_.precision,"not supported, using",P,"instead."));let B=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,V=B!==void 0?B.length:0,X=0;A.morphAttributes.position!==void 0&&(X=1),A.morphAttributes.normal!==void 0&&(X=2),A.morphAttributes.color!==void 0&&(X=3);let et,q,Z,rt;if(H){let It=$n[H];et=It.vertexShader,q=It.fragmentShader}else{et=_.vertexShader,q=_.fragmentShader;let It=a.getVertexShaderStage(_),ce=a.getFragmentShaderStage(_);a.update(_,It,ce),Z=It.id,rt=ce.id}let ct=i.getRenderTarget(),at=i.state.buffers.depth.getReversed(),xt=w.isInstancedMesh===!0,Wt=w.isBatchedMesh===!0,Pt=!!_.map,Ut=!!_.matcap,Yt=!!k,ht=Yt&&k.isPMREMTexture===!0,Mt=!!_.aoMap,yt=!!_.lightMap,Nt=!!_.bumpMap&&_.wireframe===!1,St=!!_.normalMap,z=!!_.displacementMap,J=!!_.emissiveMap,gt=!!_.metalnessMap,Et=!!_.roughnessMap,Rt=_.anisotropy>0,G=_.clearcoat>0,se=_.diffuseRoughness>0,Vt=_.dispersion>0,Zt=_.retroreflectivity>0,st=_.iridescence>0,te=_.sheen>0,kt=_.transmission>0,Jt=Rt&&!!_.anisotropyMap,F=G&&!!_.clearcoatMap,R=G&&!!_.clearcoatNormalMap,K=G&&!!_.clearcoatRoughnessMap,_t=se&&!!_.diffuseRoughnessMap,pt=st&&!!_.iridescenceMap,bt=st&&!!_.iridescenceThicknessMap,Ct=te&&!!_.sheenColorMap,lt=te&&!!_.sheenRoughnessMap,ut=!!_.specularMap,Tt=!!_.specularColorMap,W=!!_.specularIntensityMap,dt=kt&&!!_.transmissionMap,ot=kt&&!!_.thicknessMap,At=!!_.gradientMap,$=!!_.alphaMap,it=_.alphaTest>0,mt=!!_.alphaHash,Ot=!!_.extensions,ft=Yn;_.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(ft=i.toneMapping);let Bt=ht?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,Qt={shaderID:H,shaderType:_.type,shaderName:_.name,vertexShader:et,fragmentShader:q,defines:_.defines,customVertexShaderID:Z,customFragmentShaderID:rt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:P,batching:Wt,batchingColor:Wt&&w._colorsTexture!==null,instancing:xt,instancingColor:xt&&w.instanceColor!==null,instancingMorph:xt&&w.morphTexture!==null,outputColorSpace:ct===null?i.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:fe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Pt,matcap:Ut,envMap:Yt,envMapMode:Yt&&k.mapping,envMapPMREM:ht,envMapMaxLod:ht?Bt.length-1:null,envMapSize:ht?Bt[0].width:null,aoMap:Mt,lightMap:yt,bumpMap:Nt,normalMap:St,displacementMap:z,emissiveMap:J,normalMapObjectSpace:St&&_.normalMapType===Xu,normalMapTangentSpace:St&&_.normalMapType===Zr,packedNormalMap:St&&_.normalMapType===Zr&&Qx(_.normalMap.format),metalnessMap:gt,roughnessMap:Et,anisotropy:Rt,anisotropyMap:Jt,clearcoat:G,clearcoatMap:F,clearcoatNormalMap:R,clearcoatRoughnessMap:K,diffuseRoughness:se,diffuseRoughnessMap:_t,dispersion:Vt,retroreflection:Zt,iridescence:st,iridescenceMap:pt,iridescenceThicknessMap:bt,sheen:te,sheenColorMap:Ct,sheenRoughnessMap:lt,specularMap:ut,specularColorMap:Tt,specularIntensityMap:W,transmission:kt,transmissionMap:dt,thicknessMap:ot,gradientMap:At,opaque:_.transparent===!1&&_.blending===Ds&&_.alphaToCoverage===!1,alphaMap:$,alphaTest:it,alphaHash:mt,combine:_.combine,mapUv:Pt&&d(_.map.channel),aoMapUv:Mt&&d(_.aoMap.channel),lightMapUv:yt&&d(_.lightMap.channel),bumpMapUv:Nt&&d(_.bumpMap.channel),normalMapUv:St&&d(_.normalMap.channel),displacementMapUv:z&&d(_.displacementMap.channel),emissiveMapUv:J&&d(_.emissiveMap.channel),metalnessMapUv:gt&&d(_.metalnessMap.channel),roughnessMapUv:Et&&d(_.roughnessMap.channel),anisotropyMapUv:Jt&&d(_.anisotropyMap.channel),clearcoatMapUv:F&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:R&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&d(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:_t&&d(_.diffuseRoughnessMap.channel),iridescenceMapUv:pt&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:lt&&d(_.sheenRoughnessMap.channel),specularMapUv:ut&&d(_.specularMap.channel),specularColorMapUv:Tt&&d(_.specularColorMap.channel),specularIntensityMapUv:W&&d(_.specularIntensityMap.channel),transmissionMapUv:dt&&d(_.transmissionMap.channel),thicknessMapUv:ot&&d(_.thicknessMap.channel),alphaMapUv:$&&d(_.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(St||Rt),vertexNormals:!!A.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:w.isPoints===!0&&!!A.attributes.uv&&(Pt||$),fog:!!C,useFog:_.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||A.attributes.normal===void 0&&St===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:at,skinning:w.isSkinnedMesh===!0,hasPositionAttribute:A.attributes.position!==void 0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:X,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:E.filter(It=>It.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:ft,decodeVideoTexture:Pt&&_.map.isVideoTexture===!0&&fe.getTransfer(_.map.colorSpace)===ye,decodeVideoTextureEmissive:J&&_.emissiveMap.isVideoTexture===!0&&fe.getTransfer(_.emissiveMap.colorSpace)===ye,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===an,flipSided:_.side===rn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ot&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&_.extensions.multiDraw===!0||Wt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Qt.vertexUv1s=c.has(1),Qt.vertexUv2s=c.has(2),Qt.vertexUv3s=c.has(3),c.clear(),Qt}function M(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let L in _.defines)T.push(L),T.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(m(T,_),p(T,_),T.push(i.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function m(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapPMREM),_.push(T.envMapMaxLod),_.push(T.envMapSize),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.diffuseRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.numLightProbeGrids),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function p(_,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.diffuseRoughness&&o.enable(25),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function x(_){let T=f[_.type],L;if(T){let I=$n[T];L=hd.clone(I.uniforms)}else L=_.uniforms;return L}function y(_,T){let L=u.get(T);return L!==void 0?++L.usedTimes:(L=new Jx(i,T,_,s),l.push(L),u.set(T,L)),L}function v(_){if(--_.usedTimes===0){let T=l.indexOf(_);l[T]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function b(_){a.remove(_)}function S(){a.dispose()}return{getParameters:g,getProgramCacheKey:M,getUniforms:x,acquireProgram:y,releaseProgram:v,releaseShaderCache:b,programs:l,dispose:S}}function t_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function e_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Id(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Pd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,g,M,m,p){let x=i[t];return x===void 0?(x={id:f.id,object:f,geometry:d,material:g,materialVariant:o(f),groupOrder:M,renderOrder:f.renderOrder,z:m,group:p},i[t]=x):(x.id=f.id,x.object=f,x.geometry=d,x.material=g,x.materialVariant=o(f),x.groupOrder=M,x.renderOrder=f.renderOrder,x.z=m,x.group=p),t++,x}function c(f,d,g,M,m,p,x){x.reversedDepth===!0&&(m=-m);let y=a(f,d,g,M,m,p);g.transmission>0?n.push(y):g.transparent===!0?s.push(y):e.push(y)}function l(f,d,g,M,m,p){let x=a(f,d,g,M,m,p);g.transmission>0?n.unshift(x):g.transparent===!0?s.unshift(x):e.unshift(x)}function u(f,d){e.length>1&&e.sort(f||e_),n.length>1&&n.sort(d||Id),s.length>1&&s.sort(d||Id)}function h(){for(let f=t,d=i.length;f<d;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:h,sort:u}}function n_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Pd,i.set(n,[o])):s>=r.length?(o=new Pd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function i_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new O,color:new vt};break;case"SpotLight":e={position:new O,direction:new O,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":e={color:new vt,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function s_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var r_=0;function o_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function a_(i){let t=new i_,e=s_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new O);let s=new O,r=new pe,o=new pe;function a(l){let u=0,h=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,g=0,M=0,m=0,p=0,x=0,y=0,v=0,b=0,S=0,_=0,T=0,L=0,I=0;l.sort(o_);for(let E=0,C=l.length;E<C;E++){let A=l[E],U=A.color,N=A.intensity,k=A.distance,H=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===Ci?H=A.shadow.map.texture:H=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)u+=U.r*N,h+=U.g*N,f+=U.b*N;else if(A.isLightProbe){for(let P=0;P<9;P++)n.probe[P].addScaledVector(A.sh.coefficients[P],N);I++}else if(A.isSunLight){let P=t.get(A);if(P.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let B=A.shadow,V=e.get(A);V.shadowIntensity=B.intensity,V.shadowBias=B.bias,V.shadowNormalBias=B.normalBias,V.shadowRadius=B.radius,V.shadowMapSize.copy(B.mapSize).multiply(B.getFrameExtents()),n.sunShadow[g]=V,n.sunShadowMap[g]=H;let X=B.getViewportCount();for(let et=0;et<X;et++)n.sunShadowMatrix[M+et]=B.getMatrix(et),n.sunShadowCascade[M+et]=B._cascadeData[et];M+=X,g++}n.sun[d]=P,d++}else if(A.isDirectionalLight){let P=t.get(A);if(P.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let B=A.shadow,V=e.get(A);V.shadowIntensity=B.intensity,V.shadowBias=B.bias,V.shadowNormalBias=B.normalBias,V.shadowRadius=B.radius,V.shadowMapSize=B.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=H,n.directionalShadowMatrix[m]=A.shadow.matrix,b++}n.directional[m]=P,m++}else if(A.isSpotLight){let P=t.get(A);P.position.setFromMatrixPosition(A.matrixWorld),P.color.copy(U).multiplyScalar(N),P.distance=k,P.coneCos=Math.cos(A.angle),P.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),P.decay=A.decay,n.spot[x]=P;let B=A.shadow;if(A.map&&(n.spotLightMap[T]=A.map,T++,B.updateMatrices(A),A.castShadow&&L++),n.spotLightMatrix[x]=B.matrix,A.castShadow){let V=e.get(A);V.shadowIntensity=B.intensity,V.shadowBias=B.bias,V.shadowNormalBias=B.normalBias,V.shadowRadius=B.radius,V.shadowMapSize=B.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=H,_++}x++}else if(A.isRectAreaLight){let P=t.get(A);P.color.copy(U).multiplyScalar(N),P.halfWidth.set(A.width*.5,0,0),P.halfHeight.set(0,A.height*.5,0),n.rectArea[y]=P,y++}else if(A.isPointLight){let P=t.get(A);if(P.color.copy(A.color).multiplyScalar(A.intensity),P.distance=A.distance,P.decay=A.decay,A.castShadow){let B=A.shadow,V=e.get(A);V.shadowIntensity=B.intensity,V.shadowBias=B.bias,V.shadowNormalBias=B.normalBias,V.shadowRadius=B.radius,V.shadowMapSize=B.mapSize,V.shadowCameraNear=B.camera.near,V.shadowCameraFar=B.camera.far,n.pointShadow[p]=V,n.pointShadowMap[p]=H,n.pointShadowMatrix[p]=A.shadow.matrix,S++}n.point[p]=P,p++}else if(A.isHemisphereLight){let P=t.get(A);P.skyColor.copy(A.color).multiplyScalar(N),P.groundColor.copy(A.groundColor).multiplyScalar(N),n.hemi[v]=P,v++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ft.LTC_FLOAT_1,n.rectAreaLTC2=Ft.LTC_FLOAT_2):(n.rectAreaLTC1=Ft.LTC_HALF_1,n.rectAreaLTC2=Ft.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let w=n.hash;(w.sunLength!==d||w.directionalLength!==m||w.pointLength!==p||w.spotLength!==x||w.rectAreaLength!==y||w.hemiLength!==v||w.numSunShadows!==g||w.numDirectionalShadows!==b||w.numPointShadows!==S||w.numSpotShadows!==_||w.numSpotMaps!==T||w.numLightProbes!==I)&&(n.sun.length=d,n.directional.length=m,n.spot.length=x,n.rectArea.length=y,n.point.length=p,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+T-L,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=I,w.sunLength=d,w.directionalLength=m,w.pointLength=p,w.spotLength=x,w.rectAreaLength=y,w.hemiLength=v,w.numSunShadows=g,w.numDirectionalShadows=b,w.numPointShadows=S,w.numSpotShadows=_,w.numSpotMaps=T,w.numLightProbes=I,n.version=r_++)}function c(l,u){let h=0,f=0,d=0,g=0,M=0,m=0,p=u.matrixWorldInverse;for(let x=0,y=l.length;x<y;x++){let v=l[x];if(v.isSunLight){let b=n.sun[h];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(p),h++}else if(v.isDirectionalLight){let b=n.directional[f];b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),f++}else if(v.isSpotLight){let b=n.spot[g];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let b=n.rectArea[M];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),M++}else if(v.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:a,setupView:c,state:n}}function Ld(i){let t=new a_(i),e=[],n=[],s=[];function r(h){u.camera=h,e.length=0,n.length=0,s.length=0}function o(h){h.isLightProbeGrid?s.push(h):e.push(h)}function a(h){n.push(h)}function c(){t.setup(e),s.sort((h,f)=>h.priority-f.priority||h.id-f.id)}function l(h){t.setupView(e,h)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function c_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Ld(i),t.set(s,[a])):r>=o.length?(a=new Ld(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var l_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,h_=`uniform sampler2D shadow_pass;
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
}`,u_=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],d_=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Dd=new pe,$r=new O,Ql=new O;function f_(i,t,e){let n=new Si,s=new tt,r=new tt,o=new Te,a=new oa,c=new aa,l={},u=e.maxTextureSize,h={[Ei]:rn,[rn]:Ei,[an]:an},f=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:l_,fragmentShader:h_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new ae;g.setAttribute("position",new Me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new ie(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$i;let p=this.type;this.render=function(S,_,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Su&&(ee("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=$i);let L=i.getRenderTarget(),I=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),E=i.state;E.setBlending(Ji),E.buffers.depth.getReversed()===!0?E.buffers.color.setClear(0,0,0,0):E.buffers.color.setClear(1,1,1,1),E.buffers.depth.setTest(!0),E.setScissorTest(!1);let C=p!==this.type;C&&_.traverse(function(A){A.material&&(Array.isArray(A.material)?A.material.forEach(U=>U.needsUpdate=!0):A.material.needsUpdate=!0)});for(let A=0,U=S.length;A<U;A++){let N=S[A],k=N.shadow;if(k===void 0){ee("WebGLShadowMap:",N,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let H=k.getFrameExtents();s.multiply(H),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/H.x),s.x=r.x*H.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/H.y),s.y=r.y*H.y,k.mapSize.y=r.y));let P=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=P,k.map===null||C===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Ls){if(N.isPointLight){ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new xn(s.x,s.y,{format:Ci,type:Un,minFilter:qe,magFilter:qe,generateMipmaps:!1}),k.map.texture.name=N.name+".shadowMap",k.map.depthTexture=new ui(s.x,s.y,An),k.map.depthTexture.name=N.name+".shadowMapDepth",k.map.depthTexture.format=li,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=We,k.map.depthTexture.magFilter=We}else N.isPointLight?(k.map=new Kr(s.x),k.map.depthTexture=new yr(s.x,Nn)):(k.map=new xn(s.x,s.y),k.map.depthTexture=new ui(s.x,s.y,Nn)),k.map.depthTexture.name=N.name+".shadowMap",k.map.depthTexture.format=li,this.type===$i?(k.map.depthTexture.compareFunction=P?zl:Bl,k.map.depthTexture.minFilter=qe,k.map.depthTexture.magFilter=qe):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=We,k.map.depthTexture.magFilter=We);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);let B=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();N.isPointLight!==!0&&k.updateMatrices(N,T);let V=(k.camera.layers.mask&4294967294)!==0?k.camera.layers:T.layers;for(let X=0;X<B;X++){let et=k.getCamera(X);if(N.isPointLight){let q=k.camera,Z=k.matrix,rt=N.distance||q.far;rt!==q.far&&(q.far=rt,q.updateProjectionMatrix()),$r.setFromMatrixPosition(N.matrixWorld),q.position.copy($r),Ql.copy(q.position),Ql.add(u_[X]),q.up.copy(d_[X]),q.lookAt(Ql),q.updateMatrixWorld(),Z.makeTranslation(-$r.x,-$r.y,-$r.z),Dd.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Dd,q.coordinateSystem,q.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,X),i.clear();else{X===0&&(i.setRenderTarget(k.map),i.clear());let q=k.getViewport(X);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),E.viewport(o)}n=k.getFrustum(X),v(_,T,et,N,V,this.type)}k.isPointLightShadow!==!0&&this.type===Ls&&x(k,T),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(L,I,w)};function x(S,_){let T=t.update(M);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null?S.mapPass=new xn(s.x,s.y,{format:Ci,type:Un}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(_,null,T,f,M,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(_,null,T,d,M,null)}function y(S,_,T,L){let I=null,w=T.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(w!==void 0)I=w;else if(I=T.isPointLight===!0?c:a,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let E=I.uuid,C=_.uuid,A=l[E];A===void 0&&(A={},l[E]=A);let U=A[C];U===void 0&&(U=I.clone(),A[C]=U,_.addEventListener("dispose",b)),I=U}if(I.visible=_.visible,I.wireframe=_.wireframe,L===Ls?I.side=_.shadowSide!==null?_.shadowSide:_.side:I.side=_.shadowSide!==null?_.shadowSide:h[_.side],I.alphaMap=_.alphaMap,I.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,I.map=_.map,I.clipShadows=_.clipShadows,I.clippingPlanes=_.clippingPlanes,I.clipIntersection=_.clipIntersection,I.displacementMap=_.displacementMap,I.displacementScale=_.displacementScale,I.displacementBias=_.displacementBias,I.wireframeLinewidth=_.wireframeLinewidth,I.linewidth=_.linewidth,T.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let E=i.properties.get(I);E.light=T}return I}function v(S,_,T,L,I,w){if(S.visible===!1)return;if(S.layers.test(I)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&w===Ls)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,S.matrixWorld);let A=t.update(S),U=S.material;if(Array.isArray(U)){let N=A.groups;for(let k=0,H=N.length;k<H;k++){let P=N[k],B=U[P.materialIndex];if(B&&B.visible){let V=y(S,B,L,w);S.onBeforeShadow(i,S,_,T,A,V,P),i.renderBufferDirect(T,null,A,V,S,P),S.onAfterShadow(i,S,_,T,A,V,P)}}}else if(U.visible){let N=y(S,U,L,w);S.onBeforeShadow(i,S,_,T,A,N,null),i.renderBufferDirect(T,null,A,N,S,null),S.onAfterShadow(i,S,_,T,A,N,null)}}let C=S.children;for(let A=0,U=C.length;A<U;A++)v(C[A],_,T,L,I,w)}function b(S){S.target.removeEventListener("dispose",b);for(let T in l){let L=l[T],I=S.target.uuid;I in L&&(L[I].dispose(),delete L[I])}}}function p_(i,t){function e(){let W=!1,dt=new Te,ot=null,At=new Te(0,0,0,0);return{setMask:function($){ot!==$&&!W&&(i.colorMask($,$,$,$),ot=$)},setLocked:function($){W=$},setClear:function($,it,mt,Ot,ft){ft===!0&&($*=Ot,it*=Ot,mt*=Ot),dt.set($,it,mt,Ot),At.equals(dt)===!1&&(i.clearColor($,it,mt,Ot),At.copy(dt))},reset:function(){W=!1,ot=null,At.set(-1,0,0,0)}}}function n(){let W=!1,dt=!1,ot=null,At=null,$=null;return{setReversed:function(it){if(dt!==it){let mt=t.get("EXT_clip_control");it?mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.ZERO_TO_ONE_EXT):mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.NEGATIVE_ONE_TO_ONE_EXT),dt=it;let Ot=$;$=null,this.setClear(Ot)}},getReversed:function(){return dt},setTest:function(it){it?at(i.DEPTH_TEST):xt(i.DEPTH_TEST)},setMask:function(it){ot!==it&&!W&&(i.depthMask(it),ot=it)},setFunc:function(it){if(dt&&(it=nd[it]),At!==it){switch(it){case zo:i.depthFunc(i.NEVER);break;case ko:i.depthFunc(i.ALWAYS);break;case Vo:i.depthFunc(i.LESS);break;case ys:i.depthFunc(i.LEQUAL);break;case Go:i.depthFunc(i.EQUAL);break;case Ho:i.depthFunc(i.GEQUAL);break;case Wo:i.depthFunc(i.GREATER);break;case Xo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}At=it}},setLocked:function(it){W=it},setClear:function(it){$!==it&&($=it,dt&&(it=1-it),i.clearDepth(it))},reset:function(){W=!1,ot=null,At=null,$=null,dt=!1}}}function s(){let W=!1,dt=null,ot=null,At=null,$=null,it=null,mt=null,Ot=null,ft=null;return{setTest:function(Bt){W||(Bt?at(i.STENCIL_TEST):xt(i.STENCIL_TEST))},setMask:function(Bt){dt!==Bt&&!W&&(i.stencilMask(Bt),dt=Bt)},setFunc:function(Bt,Qt,It){(ot!==Bt||At!==Qt||$!==It)&&(i.stencilFunc(Bt,Qt,It),ot=Bt,At=Qt,$=It)},setOp:function(Bt,Qt,It){(it!==Bt||mt!==Qt||Ot!==It)&&(i.stencilOp(Bt,Qt,It),it=Bt,mt=Qt,Ot=It)},setLocked:function(Bt){W=Bt},setClear:function(Bt){ft!==Bt&&(i.clearStencil(Bt),ft=Bt)},reset:function(){W=!1,dt=null,ot=null,At=null,$=null,it=null,mt=null,Ot=null,ft=null}}}let r=new e,o=new n,a=new s,c={},l=new WeakMap,u={},h={},f={},d=new WeakMap,g=[],M=null,m=!1,p=null,x=null,y=null,v=null,b=null,S=null,_=null,T=new vt(0,0,0),L=0,I=!1,w=null,E=null,C=null,A=null,U=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,H=0,P=i.getParameter(i.VERSION);P.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(P)[1]),k=H>=1):P.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),k=H>=2);let B=null,V={},X=i.getParameter(i.SCISSOR_BOX),et=i.getParameter(i.VIEWPORT),q=new Te().fromArray(X),Z=new Te().fromArray(et);function rt(W,dt,ot,At){let $=new Uint8Array(4),it=i.createTexture();i.bindTexture(W,it),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let mt=0;mt<ot;mt++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(dt,0,i.RGBA,1,1,At,0,i.RGBA,i.UNSIGNED_BYTE,$):i.texImage2D(dt+mt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,$);return it}let ct={};ct[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),ct[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ct[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(i.DEPTH_TEST),o.setFunc(ys),Nt(!1),St(_l),at(i.CULL_FACE),Mt(Ji);function at(W){u[W]!==!0&&(i.enable(W),u[W]=!0)}function xt(W){u[W]!==!1&&(i.disable(W),u[W]=!1)}function Wt(W,dt){return f[W]!==dt?(i.bindFramebuffer(W,dt),f[W]=dt,W===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=dt),W===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=dt),!0):!1}function Pt(W,dt){let ot=g,At=!1;if(W){ot=d.get(dt),ot===void 0&&(ot=[],d.set(dt,ot));let $=W.textures;if(ot.length!==$.length||ot[0]!==i.COLOR_ATTACHMENT0){for(let it=0,mt=$.length;it<mt;it++)ot[it]=i.COLOR_ATTACHMENT0+it;ot.length=$.length,At=!0}}else ot[0]!==i.BACK&&(ot[0]=i.BACK,At=!0);At&&i.drawBuffers(ot)}function Ut(W){return M!==W?(i.useProgram(W),M=W,!0):!1}let Yt={[Ki]:i.FUNC_ADD,[Tu]:i.FUNC_SUBTRACT,[wu]:i.FUNC_REVERSE_SUBTRACT};Yt[Au]=i.MIN,Yt[Eu]=i.MAX;let ht={[Cu]:i.ZERO,[Ru]:i.ONE,[Iu]:i.SRC_COLOR,[Sl]:i.SRC_ALPHA,[Fu]:i.SRC_ALPHA_SATURATE,[Nu]:i.DST_COLOR,[Lu]:i.DST_ALPHA,[Pu]:i.ONE_MINUS_SRC_COLOR,[bl]:i.ONE_MINUS_SRC_ALPHA,[Uu]:i.ONE_MINUS_DST_COLOR,[Du]:i.ONE_MINUS_DST_ALPHA,[Ou]:i.CONSTANT_COLOR,[Bu]:i.ONE_MINUS_CONSTANT_COLOR,[zu]:i.CONSTANT_ALPHA,[ku]:i.ONE_MINUS_CONSTANT_ALPHA};function Mt(W,dt,ot,At,$,it,mt,Ot,ft,Bt){if(W===Ji){m===!0&&(xt(i.BLEND),m=!1);return}if(m===!1&&(at(i.BLEND),m=!0),W!==bu){if(W!==p||Bt!==I){if((x!==Ki||b!==Ki)&&(i.blendEquation(i.FUNC_ADD),x=Ki,b=Ki),Bt)switch(W){case Ds:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yl:i.blendFunc(i.ONE,i.ONE);break;case vl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ml:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ne("WebGLState: Invalid blending: ",W);break}else switch(W){case Ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case vl:ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ml:ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ne("WebGLState: Invalid blending: ",W);break}y=null,v=null,S=null,_=null,T.set(0,0,0),L=0,p=W,I=Bt}return}$=$||dt,it=it||ot,mt=mt||At,(dt!==x||$!==b)&&(i.blendEquationSeparate(Yt[dt],Yt[$]),x=dt,b=$),(ot!==y||At!==v||it!==S||mt!==_)&&(i.blendFuncSeparate(ht[ot],ht[At],ht[it],ht[mt]),y=ot,v=At,S=it,_=mt),(Ot.equals(T)===!1||ft!==L)&&(i.blendColor(Ot.r,Ot.g,Ot.b,ft),T.copy(Ot),L=ft),p=W,I=!1}function yt(W,dt){W.side===an?xt(i.CULL_FACE):at(i.CULL_FACE);let ot=W.side===rn;dt&&(ot=!ot),Nt(ot),W.blending===Ds&&W.transparent===!1?Mt(Ji):Mt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);let At=W.stencilWrite;a.setTest(At),At&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),J(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(W){w!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),w=W)}function St(W){W!==vu?(at(i.CULL_FACE),W!==E&&(W===_l?i.cullFace(i.BACK):W===Mu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xt(i.CULL_FACE),E=W}function z(W){W!==C&&(k&&i.lineWidth(W),C=W)}function J(W,dt,ot){W?(at(i.POLYGON_OFFSET_FILL),(A!==dt||U!==ot)&&(A=dt,U=ot,o.getReversed()&&(dt=-dt,ot=-ot),i.polygonOffset(dt,ot))):xt(i.POLYGON_OFFSET_FILL)}function gt(W){W?at(i.SCISSOR_TEST):xt(i.SCISSOR_TEST)}function Et(W){W===void 0&&(W=i.TEXTURE0+N-1),B!==W&&(i.activeTexture(W),B=W)}function Rt(W,dt,ot){ot===void 0&&(B===null?ot=i.TEXTURE0+N-1:ot=B);let At=V[ot];At===void 0&&(At={type:void 0,texture:void 0},V[ot]=At),(At.type!==W||At.texture!==dt)&&(B!==ot&&(i.activeTexture(ot),B=ot),i.bindTexture(W,dt||ct[W]),At.type=W,At.texture=dt)}function G(){let W=V[B];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function se(){try{i.compressedTexImage2D(...arguments)}catch(W){ne("WebGLState:",W)}}function Vt(){try{i.compressedTexImage3D(...arguments)}catch(W){ne("WebGLState:",W)}}function Zt(){try{i.texSubImage2D(...arguments)}catch(W){ne("WebGLState:",W)}}function st(){try{i.texSubImage3D(...arguments)}catch(W){ne("WebGLState:",W)}}function te(){try{i.compressedTexSubImage2D(...arguments)}catch(W){ne("WebGLState:",W)}}function kt(){try{i.compressedTexSubImage3D(...arguments)}catch(W){ne("WebGLState:",W)}}function Jt(){try{i.texStorage2D(...arguments)}catch(W){ne("WebGLState:",W)}}function F(){try{i.texStorage3D(...arguments)}catch(W){ne("WebGLState:",W)}}function R(){try{i.texImage2D(...arguments)}catch(W){ne("WebGLState:",W)}}function K(){try{i.texImage3D(...arguments)}catch(W){ne("WebGLState:",W)}}function _t(W){return h[W]!==void 0?h[W]:i.getParameter(W)}function pt(W,dt){h[W]!==dt&&(i.pixelStorei(W,dt),h[W]=dt)}function bt(W){q.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),q.copy(W))}function Ct(W){Z.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),Z.copy(W))}function lt(W,dt){let ot=l.get(dt);ot===void 0&&(ot=new WeakMap,l.set(dt,ot));let At=ot.get(W);At===void 0&&(At=i.getUniformBlockIndex(dt,W.name),i.uniformBlockBinding(dt,At,At),ot.set(W,At))}function ut(W,dt,ot){let $=l.get(dt).get(W);c[$]!==ot&&(i.bindBufferBase(i.UNIFORM_BUFFER,$,ot),c[$]=ot)}function Tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},B=null,V={},f={},c={},d=new WeakMap,g=[],M=null,m=!1,p=null,x=null,y=null,v=null,b=null,S=null,_=null,T=new vt(0,0,0),L=0,I=!1,w=null,E=null,C=null,A=null,U=null,q.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:at,disable:xt,bindFramebuffer:Wt,drawBuffers:Pt,useProgram:Ut,setBlending:Mt,setMaterial:yt,setFlipSided:Nt,setCullFace:St,setLineWidth:z,setPolygonOffset:J,setScissorTest:gt,activeTexture:Et,bindTexture:Rt,unbindTexture:G,compressedTexImage2D:se,compressedTexImage3D:Vt,texImage2D:R,texImage3D:K,pixelStorei:pt,getParameter:_t,updateUBOMapping:lt,uniformBlockBinding:ut,texStorage2D:Jt,texStorage3D:F,texSubImage2D:Zt,texSubImage3D:st,compressedTexSubImage2D:te,compressedTexSubImage3D:kt,scissor:bt,viewport:Ct,reset:Tt}}function m_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new tt,u=new WeakMap,h=new Set,f,d=new WeakMap,g=new Set,M=new FinalizationRegistry(F=>g.delete(F)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(F,R){return m?new OffscreenCanvas(F,R):ur("canvas")}function x(F,R,K){let _t=1,pt=Jt(F);if((pt.width>K||pt.height>K)&&(_t=K/Math.max(pt.width,pt.height)),_t<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){let bt=Math.floor(_t*pt.width),Ct=Math.floor(_t*pt.height);f===void 0&&(f=p(bt,Ct));let lt=R?p(bt,Ct):f;return lt.width=bt,lt.height=Ct,lt.getContext("2d").drawImage(F,0,0,bt,Ct),ee("WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+bt+"x"+Ct+")."),lt}else return"data"in F&&ee("WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),F;return F}function y(F){return F.generateMipmaps}function v(F){i.generateMipmap(F)}function b(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(F,R,K,_t,pt,bt=!1){if(F!==null){if(i[F]!==void 0)return i[F];ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Ct;_t&&(Ct=t.get("EXT_texture_norm16"),Ct||ee("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let lt=R;if(R===i.RED&&(K===i.FLOAT&&(lt=i.R32F),K===i.HALF_FLOAT&&(lt=i.R16F),K===i.UNSIGNED_BYTE&&(lt=i.R8),K===i.UNSIGNED_SHORT&&Ct&&(lt=Ct.R16_EXT),K===i.SHORT&&Ct&&(lt=Ct.R16_SNORM_EXT)),R===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(lt=i.R8UI),K===i.UNSIGNED_SHORT&&(lt=i.R16UI),K===i.UNSIGNED_INT&&(lt=i.R32UI),K===i.BYTE&&(lt=i.R8I),K===i.SHORT&&(lt=i.R16I),K===i.INT&&(lt=i.R32I)),R===i.RG&&(K===i.FLOAT&&(lt=i.RG32F),K===i.HALF_FLOAT&&(lt=i.RG16F),K===i.UNSIGNED_BYTE&&(lt=i.RG8),K===i.UNSIGNED_SHORT&&Ct&&(lt=Ct.RG16_EXT),K===i.SHORT&&Ct&&(lt=Ct.RG16_SNORM_EXT)),R===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(lt=i.RG8UI),K===i.UNSIGNED_SHORT&&(lt=i.RG16UI),K===i.UNSIGNED_INT&&(lt=i.RG32UI),K===i.BYTE&&(lt=i.RG8I),K===i.SHORT&&(lt=i.RG16I),K===i.INT&&(lt=i.RG32I)),R===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(lt=i.RGB8UI),K===i.UNSIGNED_SHORT&&(lt=i.RGB16UI),K===i.UNSIGNED_INT&&(lt=i.RGB32UI),K===i.BYTE&&(lt=i.RGB8I),K===i.SHORT&&(lt=i.RGB16I),K===i.INT&&(lt=i.RGB32I)),R===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(lt=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(lt=i.RGBA16UI),K===i.UNSIGNED_INT&&(lt=i.RGBA32UI),K===i.BYTE&&(lt=i.RGBA8I),K===i.SHORT&&(lt=i.RGBA16I),K===i.INT&&(lt=i.RGBA32I)),R===i.RGB&&(K===i.UNSIGNED_SHORT&&Ct&&(lt=Ct.RGB16_EXT),K===i.SHORT&&Ct&&(lt=Ct.RGB16_SNORM_EXT),K===i.UNSIGNED_INT_5_9_9_9_REV&&(lt=i.RGB9_E5),K===i.UNSIGNED_INT_10F_11F_11F_REV&&(lt=i.R11F_G11F_B10F)),R===i.RGBA){let ut=bt?hr:fe.getTransfer(pt);K===i.FLOAT&&(lt=i.RGBA32F),K===i.HALF_FLOAT&&(lt=i.RGBA16F),K===i.UNSIGNED_BYTE&&(lt=ut===ye?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT&&Ct&&(lt=Ct.RGBA16_EXT),K===i.SHORT&&Ct&&(lt=Ct.RGBA16_SNORM_EXT),K===i.UNSIGNED_SHORT_4_4_4_4&&(lt=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(lt=i.RGB5_A1)}return(lt===i.R16F||lt===i.R32F||lt===i.RG16F||lt===i.RG32F||lt===i.RGBA16F||lt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function _(F,R){let K;return F?R===null||R===Nn||R===ji?K=i.DEPTH24_STENCIL8:R===An?K=i.DEPTH32F_STENCIL8:R===Us&&(K=i.DEPTH24_STENCIL8,ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Nn||R===ji?K=i.DEPTH_COMPONENT24:R===An?K=i.DEPTH_COMPONENT32F:R===Us&&(K=i.DEPTH_COMPONENT16),K}function T(F,R){return y(F)===!0||F.isFramebufferTexture&&F.minFilter!==We&&F.minFilter!==qe?Math.log2(Math.max(R.width,R.height))+1:F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?R.mipmaps.length:1}function L(F){let R=new WeakRef(F);n.get(F).__ref=R,g.add(R),M.register(F,R,R)}function I(F){let R=n.get(F).__ref;R!==void 0&&(g.delete(R),M.unregister(R))}function w(F){C(F.target)}function E(F){A(F.target)}function C(F){F.removeEventListener("dispose",w),I(F),N(F),F.isVideoTexture&&u.delete(F),F.isHTMLTexture&&h.delete(F)}function A(F){F.removeEventListener("dispose",E),I(F),H(F)}function U(){for(let F of g){let R=F.deref();R!==void 0&&(R.isRenderTarget===!0?A(R):C(R))}g.clear(),h.clear()}function N(F){let R=n.get(F);if(R.__webglInit===void 0)return;let K=F.source,_t=d.get(K);if(_t){let pt=_t[R.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&k(F),Object.keys(_t).length===0&&d.delete(K)}n.remove(F)}function k(F){let R=n.get(F);i.deleteTexture(R.__webglTexture);let K=F.source,_t=d.get(K);delete _t[R.__cacheKey],o.memory.textures--}function H(F){let R=n.get(F);R.__depthDisposeCallback&&R.__depthDisposeCallback();let K=F.depthTexture;if(K&&K.renderTarget===F&&C(K),F.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(R.__webglFramebuffer[pt]))for(let bt=0;bt<R.__webglFramebuffer[pt].length;bt++)i.deleteFramebuffer(R.__webglFramebuffer[pt][bt]);else i.deleteFramebuffer(R.__webglFramebuffer[pt]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[pt])}else{if(Array.isArray(R.__webglFramebuffer))for(let pt=0;pt<R.__webglFramebuffer.length;pt++)i.deleteFramebuffer(R.__webglFramebuffer[pt]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let pt=0;pt<R.__webglColorRenderbuffer.length;pt++)R.__webglColorRenderbuffer[pt]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[pt]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let _t=F.textures;for(let pt=0,bt=_t.length;pt<bt;pt++){let Ct=n.get(_t[pt]);Ct.__webglTexture&&(i.deleteTexture(Ct.__webglTexture),o.memory.textures--),n.remove(_t[pt])}n.remove(F)}let P=0;function B(){P=0}function V(){return P}function X(F){P=F}function et(){let F=P;return F>=s.maxTextures&&ee("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+s.maxTextures),P+=1,F}function q(F){let R=[];return R.push(F.wrapS),R.push(F.wrapT),R.push(F.wrapR||0),R.push(F.magFilter),R.push(F.minFilter),R.push(F.anisotropy),R.push(F.internalFormat),R.push(F.format),R.push(F.type),R.push(F.generateMipmaps),R.push(F.mipmapsAutoUpdate),R.push(F.premultiplyAlpha),R.push(F.flipY),R.push(F.unpackAlignment),R.push(F.colorSpace),R.join()}function Z(F,R){let K=n.get(F);if(F.isVideoTexture&&te(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&K.__version!==F.version){let _t=F.image;if(_t===null)ee("WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)ee("WebGLRenderer: Texture marked for update but image is incomplete");else{yt(K,F,R);return}}else F.isExternalTexture&&(K.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+R)}function rt(F,R){let K=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&K.__version!==F.version){yt(K,F,R);return}else F.isExternalTexture&&(K.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+R)}function ct(F,R){let K=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&K.__version!==F.version){yt(K,F,R);return}e.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+R)}function at(F,R){let K=n.get(F);if(F.version>0&&K.__version!==F.version){Nt(K,F,R);return}e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+R)}let xt={[qo]:i.REPEAT,[Vn]:i.CLAMP_TO_EDGE,[Yo]:i.MIRRORED_REPEAT},Wt={[We]:i.NEAREST,[Hu]:i.NEAREST_MIPMAP_NEAREST,[Vr]:i.NEAREST_MIPMAP_LINEAR,[qe]:i.LINEAR,[ba]:i.LINEAR_MIPMAP_NEAREST,[di]:i.LINEAR_MIPMAP_LINEAR},Pt={[Yu]:i.NEVER,[kl]:i.ALWAYS,[Zu]:i.LESS,[Bl]:i.LEQUAL,[$u]:i.EQUAL,[zl]:i.GEQUAL,[Ju]:i.GREATER,[Ku]:i.NOTEQUAL};function Ut(F,R){if(R.type===An&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===qe||R.magFilter===ba||R.magFilter===Vr||R.magFilter===di||R.minFilter===qe||R.minFilter===ba||R.minFilter===Vr||R.minFilter===di)&&ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,xt[R.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,xt[R.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,xt[R.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,Wt[R.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,Wt[R.minFilter]),R.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,Pt[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===We||R.minFilter!==Vr&&R.minFilter!==di||R.type===An&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){let K=t.get("EXT_texture_filter_anisotropic");i.texParameterf(F,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function Yt(F,R){let K=!1;F.__webglInit===void 0&&(F.__webglInit=!0,R.addEventListener("dispose",w),L(R));let _t=R.source,pt=d.get(_t);pt===void 0&&(pt={},d.set(_t,pt));let bt=q(R);if(bt!==F.__cacheKey){pt[bt]===void 0&&(pt[bt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,K=!0),pt[bt].usedTimes++;let Ct=pt[F.__cacheKey];Ct!==void 0&&(pt[F.__cacheKey].usedTimes--,Ct.usedTimes===0&&k(R)),F.__cacheKey=bt,F.__webglTexture=pt[bt].texture}return K}function ht(F,R,K){return Math.floor(Math.floor(F/K)/R)}function Mt(F,R,K,_t){let bt=F.updateRanges;if(bt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,R.width,R.height,K,_t,R.data);else{bt.sort((W,dt)=>W.start-dt.start);let Ct=0;for(let W=1;W<bt.length;W++){let dt=bt[Ct],ot=bt[W],At=dt.start+dt.count,$=ht(ot.start,R.width,4),it=ht(dt.start,R.width,4);ot.start<=At+1&&$===it&&ht(ot.start+ot.count-1,R.width,4)===$?dt.count=Math.max(dt.count,ot.start+ot.count-dt.start):(++Ct,bt[Ct]=ot)}bt.length=Ct+1;let lt=e.getParameter(i.UNPACK_ROW_LENGTH),ut=e.getParameter(i.UNPACK_SKIP_PIXELS),Tt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,R.width);for(let W=0,dt=bt.length;W<dt;W++){let ot=bt[W],At=Math.floor(ot.start/4),$=Math.ceil(ot.count/4),it=At%R.width,mt=Math.floor(At/R.width),Ot=$,ft=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,it),e.pixelStorei(i.UNPACK_SKIP_ROWS,mt),e.texSubImage2D(i.TEXTURE_2D,0,it,mt,Ot,ft,K,_t,R.data)}F.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,lt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ut),e.pixelStorei(i.UNPACK_SKIP_ROWS,Tt)}}function yt(F,R,K){let _t=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(_t=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(_t=i.TEXTURE_3D);let pt=Yt(F,R),bt=R.source;e.bindTexture(_t,F.__webglTexture,i.TEXTURE0+K);let Ct=n.get(bt);if(bt.version!==Ct.__version||pt===!0){if(e.activeTexture(i.TEXTURE0+K),(typeof ImageBitmap<"u"&&R.image instanceof ImageBitmap)===!1){let ft=fe.getPrimaries(fe.workingColorSpace),Bt=R.colorSpace===pi?null:fe.getPrimaries(R.colorSpace),Qt=R.colorSpace===pi||ft===Bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt)}e.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment);let ut=x(R.image,!1,s.maxTextureSize);ut=kt(R,ut);let Tt=r.convert(R.format,R.colorSpace),W=r.convert(R.type),dt=S(R.internalFormat,Tt,W,R.normalized,R.colorSpace,R.isVideoTexture);Ut(_t,R);let ot,At=R.mipmaps,$=R.isVideoTexture!==!0,it=Ct.__version===void 0||pt===!0,mt=bt.dataReady,Ot=T(R,ut);if(R.isDepthTexture)dt=_(R.format===fi,R.type),it&&($?e.texStorage2D(i.TEXTURE_2D,1,dt,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,dt,ut.width,ut.height,0,Tt,W,null));else if(R.isDataTexture)if(At.length>0){$&&it&&e.texStorage2D(i.TEXTURE_2D,Ot,dt,At[0].width,At[0].height);for(let ft=0,Bt=At.length;ft<Bt;ft++)ot=At[ft],$?mt&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,ot.width,ot.height,Tt,W,ot.data):e.texImage2D(i.TEXTURE_2D,ft,dt,ot.width,ot.height,0,Tt,W,ot.data);R.generateMipmaps=!1}else $?(it&&e.texStorage2D(i.TEXTURE_2D,Ot,dt,ut.width,ut.height),mt&&Mt(R,ut,Tt,W)):e.texImage2D(i.TEXTURE_2D,0,dt,ut.width,ut.height,0,Tt,W,ut.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){$&&it&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ot,dt,At[0].width,At[0].height,ut.depth);for(let ft=0,Bt=At.length;ft<Bt;ft++)if(ot=At[ft],R.format!==Fn)if(Tt!==null)if($){if(mt)if(R.layerUpdates.size>0){let Qt=Jl(ot.width,ot.height,R.format,R.type);for(let It of R.layerUpdates){let ce=ot.data.subarray(It*Qt/ot.data.BYTES_PER_ELEMENT,(It+1)*Qt/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,It,ot.width,ot.height,1,Tt,ce)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,ot.width,ot.height,ut.depth,Tt,ot.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,dt,ot.width,ot.height,ut.depth,0,ot.data,0,0);else ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $?mt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,ot.width,ot.height,ut.depth,Tt,W,ot.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ft,dt,ot.width,ot.height,ut.depth,0,Tt,W,ot.data);R.layerUpdates.size>0&&R.clearLayerUpdates()}else{$&&it&&e.texStorage2D(i.TEXTURE_2D,Ot,dt,At[0].width,At[0].height);for(let ft=0,Bt=At.length;ft<Bt;ft++)ot=At[ft],R.format!==Fn?Tt!==null?$?mt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,ot.width,ot.height,Tt,ot.data):e.compressedTexImage2D(i.TEXTURE_2D,ft,dt,ot.width,ot.height,0,ot.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$?mt&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,ot.width,ot.height,Tt,W,ot.data):e.texImage2D(i.TEXTURE_2D,ft,dt,ot.width,ot.height,0,Tt,W,ot.data)}else if(R.isDataArrayTexture)if($){if(it&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ot,dt,ut.width,ut.height,ut.depth),mt)if(R.layerUpdates.size>0){let ft=Jl(ut.width,ut.height,R.format,R.type);for(let Bt of R.layerUpdates){let Qt=ut.data.subarray(Bt*ft/ut.data.BYTES_PER_ELEMENT,(Bt+1)*ft/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Bt,ut.width,ut.height,1,Tt,W,Qt)}R.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,Tt,W,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,dt,ut.width,ut.height,ut.depth,0,Tt,W,ut.data);else if(R.isData3DTexture)$?(it&&e.texStorage3D(i.TEXTURE_3D,Ot,dt,ut.width,ut.height,ut.depth),mt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,Tt,W,ut.data)):e.texImage3D(i.TEXTURE_3D,0,dt,ut.width,ut.height,ut.depth,0,Tt,W,ut.data);else if(R.isFramebufferTexture){if(it)if($)e.texStorage2D(i.TEXTURE_2D,Ot,dt,ut.width,ut.height);else{let ft=ut.width,Bt=ut.height;for(let Qt=0;Qt<Ot;Qt++)e.texImage2D(i.TEXTURE_2D,Qt,dt,ft,Bt,0,Tt,W,null),ft>>=1,Bt>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in i){let ft=i.canvas;if(ft.hasAttribute("layoutsubtree")||ft.setAttribute("layoutsubtree","true"),ut.parentNode!==ft){ft.appendChild(ut),h.add(R),ft.onpaint=Bt=>{let Qt=Bt.changedElements;for(let It of h)Qt.includes(It.image)&&(It.needsUpdate=!0)},ft.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ut);else{let Qt=i.RGBA,It=i.RGBA,ce=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Qt,It,ce,ut)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(At.length>0){if($&&it){let ft=Jt(At[0]);e.texStorage2D(i.TEXTURE_2D,Ot,dt,ft.width,ft.height)}for(let ft=0,Bt=At.length;ft<Bt;ft++)ot=At[ft],$?mt&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Tt,W,ot):e.texImage2D(i.TEXTURE_2D,ft,dt,Tt,W,ot);R.generateMipmaps=!1}else if($){if(it){let ft=Jt(ut);e.texStorage2D(i.TEXTURE_2D,Ot,dt,ft.width,ft.height)}mt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,W,ut)}else e.texImage2D(i.TEXTURE_2D,0,dt,Tt,W,ut);y(R)&&R.mipmapsAutoUpdate===!0&&v(_t),Ct.__version=bt.version,R.onUpdate&&R.onUpdate(R)}F.__version=R.version}function Nt(F,R,K){if(R.image.length!==6)return;let _t=Yt(F,R),pt=R.source;e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+K);let bt=n.get(pt);if(pt.version!==bt.__version||_t===!0){e.activeTexture(i.TEXTURE0+K);let Ct=fe.getPrimaries(fe.workingColorSpace),lt=R.colorSpace===pi?null:fe.getPrimaries(R.colorSpace),ut=R.colorSpace===pi||Ct===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Tt=R.isCompressedTexture||R.image[0].isCompressedTexture,W=R.image[0]&&R.image[0].isDataTexture,dt=[];for(let It=0;It<6;It++)!Tt&&!W?dt[It]=x(R.image[It],!0,s.maxCubemapSize):dt[It]=W?R.image[It].image:R.image[It],dt[It]=kt(R,dt[It]);let ot=dt[0],At=r.convert(R.format,R.colorSpace),$=r.convert(R.type),it=S(R.internalFormat,At,$,R.normalized,R.colorSpace),mt=R.isVideoTexture!==!0,Ot=bt.__version===void 0||_t===!0,ft=pt.dataReady,Bt=T(R,ot);Ut(i.TEXTURE_CUBE_MAP,R);let Qt;if(R.isDepthTexture){if(it=_(R.format===fi,R.type),Ot)if(mt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,it,ot.width,ot.height);else for(let It=0;It<6;It++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,it,ot.width,ot.height,0,At,$,null)}else if(Tt){mt&&Ot&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Bt,it,ot.width,ot.height);for(let It=0;It<6;It++){Qt=dt[It].mipmaps;for(let ce=0;ce<Qt.length;ce++){let De=Qt[ce];R.format!==Fn?At!==null?mt?ft&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,ce,0,0,De.width,De.height,At,De.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,ce,it,De.width,De.height,0,De.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):mt?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,ce,0,0,De.width,De.height,At,$,De.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,ce,it,De.width,De.height,0,At,$,De.data)}}}else{if(Qt=R.mipmaps,mt&&Ot){Qt.length>0&&Bt++;let It=Jt(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Bt,it,It.width,It.height)}for(let It=0;It<6;It++)if(W){mt?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,0,0,dt[It].width,dt[It].height,At,$,dt[It].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,it,dt[It].width,dt[It].height,0,At,$,dt[It].data);for(let ce=0;ce<Qt.length;ce++){let Rn=Qt[ce].image[It].image;mt?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,ce+1,0,0,Rn.width,Rn.height,At,$,Rn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,ce+1,it,Rn.width,Rn.height,0,At,$,Rn.data)}}else{mt?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,0,0,At,$,dt[It]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,it,At,$,dt[It]);for(let ce=0;ce<Qt.length;ce++){let De=Qt[ce];mt?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,ce+1,0,0,At,$,De.image[It]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,ce+1,it,At,$,De.image[It])}}}y(R)&&R.mipmapsAutoUpdate===!0&&v(i.TEXTURE_CUBE_MAP),bt.__version=pt.version,R.onUpdate&&R.onUpdate(R)}F.__version=R.version}function St(F,R,K,_t,pt,bt){let Ct=r.convert(K.format,K.colorSpace),lt=r.convert(K.type),ut=S(K.internalFormat,Ct,lt,K.normalized,K.colorSpace),Tt=n.get(R),W=n.get(K);if(W.__renderTarget=R,!Tt.__hasExternalTextures){let dt=Math.max(1,R.width>>bt),ot=Math.max(1,R.height>>bt);pt===i.TEXTURE_3D||pt===i.TEXTURE_2D_ARRAY?e.texImage3D(pt,bt,ut,dt,ot,R.depth,0,Ct,lt,null):e.texImage2D(pt,bt,ut,dt,ot,0,Ct,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,F),st(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_t,pt,W.__webglTexture,0,Zt(R)):(pt===i.TEXTURE_2D||pt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,_t,pt,W.__webglTexture,bt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function z(F,R,K){if(i.bindRenderbuffer(i.RENDERBUFFER,F),R.depthBuffer){let _t=R.depthTexture,pt=_t&&_t.isDepthTexture?_t.type:null,bt=_(R.stencilBuffer,pt),Ct=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;st(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Zt(R),bt,R.width,R.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Zt(R),bt,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,bt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,F)}else{let _t=R.textures;for(let pt=0;pt<_t.length;pt++){let bt=_t[pt],Ct=r.convert(bt.format,bt.colorSpace),lt=r.convert(bt.type),ut=S(bt.internalFormat,Ct,lt,bt.normalized,bt.colorSpace);st(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Zt(R),ut,R.width,R.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Zt(R),ut,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,ut,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function J(F,R,K){let _t=R.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,F),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let pt=n.get(R.depthTexture);pt.__renderTarget=R;let bt=_t?R.depthTexture.image[0]:R.depthTexture.image;(!pt.__webglTexture||bt.width!==R.width||bt.height!==R.height)&&(bt.width=R.width,bt.height=R.height,R.depthTexture.needsUpdate=!0),_t?at(R.depthTexture,0):Z(R.depthTexture,0);let Ct=pt.__webglTexture,lt=Zt(R),ut=_t?i.TEXTURE_CUBE_MAP_POSITIVE_X+K:i.TEXTURE_2D,Tt=R.depthTexture.format===fi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(R.depthTexture.format===li)st(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Tt,ut,Ct,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,Tt,ut,Ct,0);else if(R.depthTexture.format===fi)st(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Tt,ut,Ct,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,Tt,ut,Ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function gt(F){let R=n.get(F),K=F.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==F.depthTexture){let _t=F.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),_t){let pt=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,_t.removeEventListener("dispose",pt)};_t.addEventListener("dispose",pt),R.__depthDisposeCallback=pt}R.__boundDepthTexture=_t}if(F.depthTexture&&!R.__autoAllocateDepthBuffer)if(K)for(let _t=0;_t<6;_t++)J(R.__webglFramebuffer[_t],F,_t);else F.texture.mipmaps.length>0?J(R.__webglFramebuffer[0],F,0):J(R.__webglFramebuffer,F,0);else if(K){R.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[_t]),R.__webglDepthbuffer[_t]===void 0)R.__webglDepthbuffer[_t]=i.createRenderbuffer(),z(R.__webglDepthbuffer[_t],F,!1);else{let pt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=R.__webglDepthbuffer[_t];i.bindRenderbuffer(i.RENDERBUFFER,bt),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,bt)}}else if(F.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),z(R.__webglDepthbuffer,F,!1);else{let pt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,bt),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,bt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(F,R,K){let _t=n.get(F);R!==void 0&&St(_t.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&gt(F)}function Rt(F){let R=F.texture,K=n.get(F),_t=n.get(R);F.addEventListener("dispose",E),L(F);let pt=F.textures,bt=F.isWebGLCubeRenderTarget===!0,Ct=pt.length>1;if(Ct||(_t.__webglTexture===void 0&&(_t.__webglTexture=i.createTexture()),_t.__version=R.version,o.memory.textures++),bt){K.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(R.mipmaps.length>0){K.__webglFramebuffer[lt]=[];for(let ut=0;ut<R.mipmaps.length;ut++)K.__webglFramebuffer[lt][ut]=i.createFramebuffer()}else K.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(R.mipmaps.length>0){K.__webglFramebuffer=[];for(let lt=0;lt<R.mipmaps.length;lt++)K.__webglFramebuffer[lt]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let lt=0,ut=pt.length;lt<ut;lt++){let Tt=n.get(pt[lt]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=i.createTexture(),o.memory.textures++)}if(F.samples>0&&st(F)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let lt=0;lt<pt.length;lt++){let ut=pt[lt];K.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[lt]);let Tt=r.convert(ut.format,ut.colorSpace),W=r.convert(ut.type),dt=S(ut.internalFormat,Tt,W,ut.normalized,ut.colorSpace,F.isXRRenderTarget===!0),ot=Zt(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,dt,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,K.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),z(K.__webglDepthRenderbuffer,F,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(bt){e.bindTexture(i.TEXTURE_CUBE_MAP,_t.__webglTexture),Ut(i.TEXTURE_CUBE_MAP,R);for(let lt=0;lt<6;lt++)if(R.mipmaps.length>0)for(let ut=0;ut<R.mipmaps.length;ut++)St(K.__webglFramebuffer[lt][ut],F,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ut);else St(K.__webglFramebuffer[lt],F,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);y(R)?v(i.TEXTURE_CUBE_MAP):R.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,R.mipmaps.length-1),e.unbindTexture()}else if(Ct){for(let lt=0,ut=pt.length;lt<ut;lt++){let Tt=pt[lt],W=n.get(Tt),dt=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(dt=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,W.__webglTexture),Ut(dt,Tt),St(K.__webglFramebuffer,F,Tt,i.COLOR_ATTACHMENT0+lt,dt,0),y(Tt)&&v(dt)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(lt=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,_t.__webglTexture),Ut(lt,R),R.mipmaps.length>0)for(let ut=0;ut<R.mipmaps.length;ut++)St(K.__webglFramebuffer[ut],F,R,i.COLOR_ATTACHMENT0,lt,ut);else St(K.__webglFramebuffer,F,R,i.COLOR_ATTACHMENT0,lt,0);y(R)?v(lt):R.mipmaps.length>0&&i.texParameteri(lt,i.TEXTURE_MAX_LEVEL,R.mipmaps.length-1),e.unbindTexture()}F.depthBuffer&&gt(F)}function G(F){let R=F.textures;for(let K=0,_t=R.length;K<_t;K++){let pt=R[K];if(y(pt)&&pt.mipmapsAutoUpdate===!0){let bt=b(F),Ct=n.get(pt).__webglTexture;e.bindTexture(bt,Ct),v(bt),e.unbindTexture()}}}let se=[];function Vt(F){if(F.samples>0){if(st(F)===!1){let R=F.textures,K=F.width,_t=F.height,pt=i.COLOR_BUFFER_BIT,bt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(F),lt=R.length>1;if(lt)for(let Tt=0;Tt<R.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),F.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Tt=0;Tt<R.length;Tt++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(pt|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(pt|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[Tt]);let W=n.get(R[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,W,0)}i.blitFramebuffer(0,0,K,_t,0,0,K,_t,pt,i.NEAREST),c===!0&&(se.length=0,se.push(i.COLOR_ATTACHMENT0+Tt),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&se.push(bt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,se))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let Tt=0;Tt<R.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[Tt]);let W=n.get(R[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,W,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&c){let R=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function Zt(F){return Math.min(s.maxSamples,F.samples)}function st(F){let R=n.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function te(F){let R=o.render.frame;u.get(F)!==R&&(u.set(F,R),F.update())}function kt(F,R){let K=F.colorSpace,_t=F.format,pt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||K!==lr&&K!==pi&&(fe.getTransfer(K)===ye?(_t!==Fn||pt!==cn)&&ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ne("WebGLTextures: Unsupported texture color space:",K)),R}function Jt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(l.width=F.naturalWidth||F.width,l.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(l.width=F.displayWidth,l.height=F.displayHeight):(l.width=F.width,l.height=F.height),l}this.allocateTextureUnit=et,this.resetTextureUnits=B,this.getTextureUnits=V,this.setTextureUnits=X,this.setTexture2D=Z,this.setTexture2DArray=rt,this.setTexture3D=ct,this.setTextureCube=at,this.rebindTextures=Et,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=st,this.dispose=U}function g_(i,t){function e(n,s=pi){let r,o=fe.getTransfer(s);if(n===cn)return i.UNSIGNED_BYTE;if(n===wa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Aa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Nl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ul)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ll)return i.BYTE;if(n===Dl)return i.SHORT;if(n===Us)return i.UNSIGNED_SHORT;if(n===Ta)return i.INT;if(n===Nn)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===Un)return i.HALF_FLOAT;if(n===Fl)return i.ALPHA;if(n===Ol)return i.RGB;if(n===Fn)return i.RGBA;if(n===li)return i.DEPTH_COMPONENT;if(n===fi)return i.DEPTH_STENCIL;if(n===Fs)return i.RED;if(n===Ea)return i.RED_INTEGER;if(n===Ci)return i.RG;if(n===Ca)return i.RG_INTEGER;if(n===Ra)return i.RGBA_INTEGER;if(n===Gr||n===Hr||n===Wr||n===Xr)if(o===ye)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Gr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Gr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ia||n===Pa||n===La||n===Da)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ia)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===La)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Da)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Na||n===Ua||n===Fa||n===Oa||n===Ba||n===qr||n===za)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Na||n===Ua)return o===ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fa)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Oa)return r.COMPRESSED_R11_EAC;if(n===Ba)return r.COMPRESSED_SIGNED_R11_EAC;if(n===qr)return r.COMPRESSED_RG11_EAC;if(n===za)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ka||n===Va||n===Ga||n===Ha||n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===$a||n===Ja||n===Ka||n===Qa||n===ja)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ka)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Va)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ga)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ha)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wa)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xa)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qa)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ya)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Za)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$a)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ja)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ka)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qa)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ja)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===tc||n===ec||n===nc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===tc)return o===ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ec)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ic||n===sc||n===Yr||n===rc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ic)return r.COMPRESSED_RED_RGTC1_EXT;if(n===sc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ji?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var x_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,__=`
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

}`,rh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new vr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new wn({vertexShader:x_,fragmentShader:__,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ie(new Yi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},oh=class extends Hn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null,M=typeof XRWebGLBinding<"u",m=new rh,p={},x=e.getContextAttributes(),y=null,v=null,b=[],S=[],_=new tt,T=null,L=null,I=new gn;I.viewport=new Te;let w=new gn;w.viewport=new Te;let E=[I,w],C=new ya,A=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Z=b[q];return Z===void 0&&(Z=new ws,b[q]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(q){let Z=b[q];return Z===void 0&&(Z=new ws,b[q]=Z),Z.getGripSpace()},this.getHand=function(q){let Z=b[q];return Z===void 0&&(Z=new ws,b[q]=Z),Z.getHandSpace()};function N(q){let Z=S.indexOf(q.inputSource);if(Z===-1)return;let rt=b[Z];rt!==void 0&&(rt.update(q.inputSource,q.frame,l||o),rt.dispatchEvent({type:q.type,data:q.inputSource}))}function k(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",H);for(let q=0;q<b.length;q++){let Z=S[q];Z!==null&&(S[q]=null,b[q].disconnect(Z))}A=null,U=null,m.reset();for(let q in p)delete p[q];if(t.setRenderTarget(y),d=null,f=null,h=null,s=null,v=null,et.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(_.width,_.height,!1),L!==null){let q=L.camera;q.fov=L.fov,q.zoom=L.zoom,q.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&M&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",k),s.addEventListener("inputsourceschange",H),x.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(_),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let rt=null,ct=null,at=null;x.depth&&(at=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=x.stencil?fi:li,ct=x.stencil?ji:Nn);let xt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(xt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new xn(f.textureWidth,f.textureHeight,{format:Fn,type:cn,depthTexture:new ui(f.textureWidth,f.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let rt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new xn(d.framebufferWidth,d.framebufferHeight,{format:Fn,type:cn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),et.setContext(s),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(q){for(let Z=0;Z<q.removed.length;Z++){let rt=q.removed[Z],ct=S.indexOf(rt);ct>=0&&(S[ct]=null,b[ct].disconnect(rt))}for(let Z=0;Z<q.added.length;Z++){let rt=q.added[Z],ct=S.indexOf(rt);if(ct===-1){for(let xt=0;xt<b.length;xt++)if(xt>=S.length){S.push(rt),ct=xt;break}else if(S[xt]===null){S[xt]=rt,ct=xt;break}if(ct===-1)break}let at=b[ct];at&&at.connect(rt)}}function P(q,Z){Z===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Z.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let Z=q.near,rt=q.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(rt=m.depthFar)),C.near=w.near=I.near=Z,C.far=w.far=I.far=rt,(A!==C.near||U!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),A=C.near,U=C.far),C.layers.mask=q.layers.mask|6,I.layers.mask=C.layers.mask&-5,w.layers.mask=C.layers.mask&-3;let ct=q.parent,at=C.cameras;P(C,ct);for(let xt=0;xt<at.length;xt++)P(at[xt],ct);C.projectionMatrix.copy(I.projectionMatrix),C.projectionMatrixInverse.copy(I.projectionMatrixInverse),L===null&&q.isPerspectiveCamera&&(L={camera:q,fov:q.fov,zoom:q.zoom}),B(q,C,ct)};function B(q,Z,rt){rt===null?q.matrix.copy(Z.matrixWorld):(q.matrix.copy(rt.matrixWorld),q.matrix.invert(),q.matrix.multiply(Z.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ss*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(C)},this.getCameraTexture=function(q){return p[q]};let V=null;function X(q,Z){if(u=Z.getViewerPose(l||o),g=Z,u!==null){let rt=u.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let ct=!1;rt.length!==C.cameras.length&&(C.cameras.length=0,ct=!0);for(let Pt=0;Pt<rt.length;Pt++){let Ut=rt[Pt],Yt=null;if(d!==null)Yt=d.getViewport(Ut);else{let Mt=h.getViewSubImage(f,Ut);Yt=Mt.viewport,Pt===0&&(t.setRenderTargetTextures(v,Mt.colorTexture,Mt.depthStencilTexture),t.setRenderTarget(v))}let ht=E[Pt];ht===void 0&&(ht=new gn,ht.layers.enable(Pt),ht.viewport=new Te,E[Pt]=ht),ht.matrix.fromArray(Ut.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Ut.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),Pt===0&&(C.matrix.copy(ht.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ct===!0&&C.cameras.push(ht)}let at=s.enabledFeatures;if(at&&at.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){h=n.getBinding();let Pt=h.getDepthInformation(rt[0]);Pt&&Pt.isValid&&Pt.texture&&m.init(Pt,s.renderState)}if(at&&at.includes("camera-access")&&M){t.state.unbindTexture(),h=n.getBinding();for(let Pt=0;Pt<rt.length;Pt++){let Ut=rt[Pt].camera;if(Ut){let Yt=p[Ut];Yt||(Yt=new vr,p[Ut]=Yt);let ht=h.getCameraImage(Ut);Yt.sourceTexture=ht}}}}for(let rt=0;rt<b.length;rt++){let ct=S[rt],at=b[rt];ct!==null&&at!==void 0&&at.update(ct,Z,l||o)}V&&V(q,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}let et=new Nd;et.setAnimationLoop(X),this.setAnimationLoop=function(q){V=q},this.dispose=function(){}}},y_=new pe,Wd=new re;Wd.set(-1,0,0,0,1,0,0,0,1);function v_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Yl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,y,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,x,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x=t.get(p),y=x.envMap,v=x.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(y_.makeRotationFromEuler(v)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Wd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,e(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){let x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function M_(i,t,e,n){let s={},r={};function o(x,y){let v=y.program;n.uniformBlockBinding(x,v,s[x.id])}function a(x,y){let v=s[x.id];v===void 0&&(g(x),v=c(x),s[x.id]=v,x.addEventListener("dispose",m));let b=y.program;n.updateUBOMapping(x,b);let S=t.render.frame;r[x.id]!==S&&(l(x),r[x.id]=S)}function c(x){let y=i.createBuffer(),v=x.__size,b=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,v,b),i.bindBuffer(i.UNIFORM_BUFFER,null),y}function l(x){let y=s[x.id],v=x.uniforms,b=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let S=0,_=v.length;S<_;S++){let T=v[S];if(Array.isArray(T))for(let L=0,I=T.length;L<I;L++)u(T[L],S,L,b);else u(T,S,0,b)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(x,y,v,b){if(f(x,y,v,b)===!0){let S=x.__offset,_=x.value;if(Array.isArray(_)){let T=0;for(let L=0;L<_.length;L++){let I=_[L],w=M(I,!0);h(I,x.__data,T),T+=w.storage/Float32Array.BYTES_PER_ELEMENT}}else h(_,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,x.__data)}}function h(x,y,v){typeof x=="number"||typeof x=="boolean"?y[v]=x:x.isMatrix3?(y[v]=x.elements[0],y[v+1]=x.elements[1],y[v+2]=x.elements[2],y[v+3]=0,y[v+4]=x.elements[3],y[v+5]=x.elements[4],y[v+6]=x.elements[5],y[v+7]=0,y[v+8]=x.elements[6],y[v+9]=x.elements[7],y[v+10]=x.elements[8],y[v+11]=0):ArrayBuffer.isView(x)?y.set(x.subarray(0,y.length-v),v):x.toArray(y,v)}function f(x,y,v,b){let S=x.value,_=y+"_"+v;if(Array.isArray(S)){b[_]===void 0&&(b[_]=[]);let T=b[_],L=!1;for(let I=0;I<S.length;I++)d(S[I],T,I)===!0&&(L=!0);return L}return d(S,b,_)}function d(x,y,v){if(y[v]===void 0)return typeof x=="number"||typeof x=="boolean"?y[v]=x:ArrayBuffer.isView(x)?y[v]=x.slice():y[v]=x.clone(),!0;{let b=y[v];if(typeof x=="number"||typeof x=="boolean"){if(b!==x)return y[v]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(b.equals(x)===!1)return b.copy(x),!0}}return!1}function g(x){let y=x.uniforms,v=0,b=16;for(let _=0,T=y.length;_<T;_++){let L=Array.isArray(y[_])?y[_]:[y[_]];for(let I=0,w=L.length;I<w;I++){let E=L[I],C=Array.isArray(E.value)?E.value:[E.value],A=Array.isArray(y[_])||Array.isArray(E.value),U=v;for(let k=0,H=C.length;k<H;k++){let P=C[k],B=M(P,A),V=v%b,X=V%B.boundary,et=V+X;v+=X,et!==0&&b-et<B.storage&&(v+=b-et),k===0&&(U=v),v+=B.storage}let N=E.type==="int"?Int32Array:E.type==="uint"?Uint32Array:Float32Array;E.__data=new N((v-U)/Float32Array.BYTES_PER_ELEMENT),E.__offset=U}}let S=v%b;return S>0&&(v+=b-S),x.__size=v,x.__cache={},this}function M(x,y){let v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=16,v.storage=48):x.isMatrix4?(v.boundary=16,v.storage=64):x.isTexture?ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(v.boundary=16,v.storage=x.byteLength):ee("WebGLRenderer: Unsupported uniform value type.",x),y===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(x){let y=x.target;y.removeEventListener("dispose",m),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let x in s)i.deleteBuffer(s[x]);s={},r={}}return{bind:o,update:a,dispose:p}}var S_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Zn=null;function b_(){return Zn===null&&(Zn=new ki(S_,16,16,Ci,Un),Zn.name="DFG_LUT",Zn.minFilter=qe,Zn.magFilter=qe,Zn.wrapS=Vn,Zn.wrapT=Vn,Zn.generateMipmaps=!1,Zn.needsUpdate=!0),Zn}var lc=class{constructor(t={}){let{canvas:e=ju(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=cn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let M=d,m=new Set([Ra,Ca,Ea]),p=new Set([cn,Nn,Us,ji,wa,Aa]),x=new Uint32Array(4),y=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},b=null,S=null,_=[],T=[],L=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,w=!1,E=null,C=null,A=null,U=null;this._outputColorSpace=pn;let N=0,k=0,H=null,P=-1,B=null,V=new Te,X=new Te,et=null,q=new vt(0),Z=0,rt=e.width,ct=e.height,at=1,xt=null,Wt=null,Pt=new Te(0,0,rt,ct),Ut=new Te(0,0,rt,ct),Yt=!1,ht=new Si,Mt=new Qo,yt=!1,Nt=!1,St=new pe,z=new O,J=new Te,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Et=!1;function Rt(){return H===null?at:1}let G=n;function se(D,Y){return e.getContext(D,Y)}let Vt,Zt,st,te,kt,Jt,F,R,K,_t,pt,bt,Ct,lt,ut,Tt,W,dt,ot,At,$,it,mt;try{let D={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Bt,!1),e.addEventListener("webglcontextrestored",Qt,!1),e.addEventListener("webglcontextcreationerror",It,!1),G===null){let Y="webgl2";if(G=se(Y,D),G===null)throw se(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ot()}catch(D){throw e.removeEventListener("webglcontextlost",Bt,!1),e.removeEventListener("webglcontextrestored",Qt,!1),e.removeEventListener("webglcontextcreationerror",It,!1),ne("WebGLRenderer: "+D.message),D}function Ot(){Vt=new N1(G),Vt.init(),$=new g_(G,Vt),Zt=new b1(G,Vt,t,$),st=new p_(G,Vt),Zt.reversedDepthBuffer&&f&&st.buffers.depth.setReversed(!0),C=G.createFramebuffer(),A=G.createFramebuffer(),U=G.createFramebuffer(),te=new O1(G),kt=new t_,Jt=new m_(G,Vt,st,kt,Zt,$,te),F=new D1(I),R=new zm(G),it=new M1(G,R),K=new U1(G,R,te,it),_t=new z1(G,K,R,it,te),dt=new B1(G,Zt,Jt),ut=new T1(kt),pt=new jx(I,F,Vt,Zt,it,ut),bt=new v_(I,kt),Ct=new n_,lt=new c_(Vt),W=new v1(I,F,st,_t,g,c),Tt=new f_(I,_t,Zt),mt=new M_(G,te,Zt,st),ot=new S1(G,Vt,te),At=new F1(G,Vt,te),te.programs=pt.programs,I.capabilities=Zt,I.extensions=Vt,I.properties=kt,I.renderLists=Ct,I.shadowMap=Tt,I.state=st,I.info=te}M!==cn&&(L=new V1(M,e.width,e.height,a,s,r));let ft=new oh(I,G);this.xr=ft,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let D=Vt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){let D=Vt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return at},this.setPixelRatio=function(D){D!==void 0&&(at=D,this.setSize(rt,ct,!1))},this.getSize=function(D){return D.set(rt,ct)},this.setSize=function(D,Y,nt=!0){if(ft.isPresenting){ee("WebGLRenderer: Can't change size while VR device is presenting.");return}rt=D,ct=Y,e.width=Math.floor(D*at),e.height=Math.floor(Y*at),nt===!0&&(e.style.width=D+"px",e.style.height=Y+"px"),L!==null&&L.setSize(e.width,e.height),this.setViewport(0,0,D,Y)},this.getDrawingBufferSize=function(D){return D.set(rt*at,ct*at).floor()},this.setDrawingBufferSize=function(D,Y,nt){rt=D,ct=Y,at=nt,e.width=Math.floor(D*nt),e.height=Math.floor(Y*nt),this.setViewport(0,0,D,Y)},this.setEffects=function(D){if(M===cn){ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let Y=0;Y<D.length;Y++)if(D[Y].isOutputPass===!0){ee("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(V)},this.getViewport=function(D){return D.copy(Pt)},this.setViewport=function(D,Y,nt,Q){D.isVector4?Pt.set(D.x,D.y,D.z,D.w):Pt.set(D,Y,nt,Q),st.viewport(V.copy(Pt).multiplyScalar(Rt()).round())},this.getScissor=function(D){return D.copy(Ut)},this.setScissor=function(D,Y,nt,Q){D.isVector4?Ut.set(D.x,D.y,D.z,D.w):Ut.set(D,Y,nt,Q),st.scissor(X.copy(Ut).multiplyScalar(Rt()).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(D){st.setScissorTest(Yt=D)},this.setOpaqueSort=function(D){xt=D},this.setTransparentSort=function(D){Wt=D},this.getClearColor=function(D){return D.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor(...arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha(...arguments)},this.clear=function(D=!0,Y=!0,nt=!0){let Q=0;if(D){let j=!1;if(H!==null){let Dt=H.texture.format;j=m.has(Dt)}if(j){let Dt=H.texture.type,Ht=p.has(Dt),Lt=W.getClearColor(),zt=W.getClearAlpha(),$t=Lt.r,oe=Lt.g,ue=Lt.b;Ht?(x[0]=$t,x[1]=oe,x[2]=ue,x[3]=zt,G.clearBufferuiv(G.COLOR,0,x)):(y[0]=$t,y[1]=oe,y[2]=ue,y[3]=zt,G.clearBufferiv(G.COLOR,0,y))}else Q|=G.COLOR_BUFFER_BIT}Y&&(Q|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),nt&&(Q|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&G.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(D){D.setRenderer(this),E=D},this.dispose=function(){e.removeEventListener("webglcontextlost",Bt,!1),e.removeEventListener("webglcontextrestored",Qt,!1),e.removeEventListener("webglcontextcreationerror",It,!1),W.dispose(),Ct.dispose(),lt.dispose(),Jt.dispose(),kt.dispose(),F.dispose(),_t.dispose(),K.dispose(),it.dispose(),mt.dispose(),pt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",Rh),ft.removeEventListener("sessionend",Ih),Li.stop()};function Bt(D){D.preventDefault(),Gl("WebGLRenderer: Context Lost."),w=!0}function Qt(){Gl("WebGLRenderer: Context Restored."),w=!1;let D=te.autoReset,Y=Tt.enabled,nt=Tt.autoUpdate,Q=Tt.needsUpdate,j=Tt.type;Ot(),te.autoReset=D,Tt.enabled=Y,Tt.autoUpdate=nt,Tt.needsUpdate=Q,Tt.type=j}function It(D){ne("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function ce(D){let Y=D.target;Y.removeEventListener("dispose",ce),De(Y)}function De(D){Rn(D),kt.remove(D)}function Rn(D){let Y=kt.get(D).programs;Y!==void 0&&(Y.forEach(function(nt){pt.releaseProgram(nt)}),D.isShaderMaterial&&pt.releaseShaderCache(D))}this.renderBufferDirect=function(D,Y,nt,Q,j,Dt){Y===null&&(Y=gt);let Ht=j.isMesh&&j.matrixWorld.determinantAffine()<0,Lt=ap(D,Y,nt,Q,j);st.setMaterial(Q,Ht);let zt=nt.index,$t=1;if(Q.wireframe===!0){if(zt=K.getWireframeAttribute(nt),zt===void 0)return;$t=2}let oe=nt.drawRange,ue=nt.attributes.position,Xt=oe.start*$t,de=(oe.start+oe.count)*$t;Dt!==null&&(Xt=Math.max(Xt,Dt.start*$t),de=Math.min(de,(Dt.start+Dt.count)*$t)),zt!==null?(Xt=Math.max(Xt,0),de=Math.min(de,zt.count)):ue!=null&&(Xt=Math.max(Xt,0),de=Math.min(de,ue.count));let Ne=de-Xt;if(Ne<0||Ne===1/0)return;it.setup(j,Q,Lt,nt,zt);let be,Se=ot;if(zt!==null&&(be=R.get(zt),Se=At,Se.setIndex(be)),j.isMesh)Q.wireframe===!0?(st.setLineWidth(Q.wireframeLinewidth*Rt()),Se.setMode(G.LINES)):Se.setMode(G.TRIANGLES);else if(j.isLine){let Ze=Q.linewidth;Ze===void 0&&(Ze=1),st.setLineWidth(Ze*Rt()),j.isLineSegments?Se.setMode(G.LINES):j.isLineLoop?Se.setMode(G.LINE_LOOP):Se.setMode(G.LINE_STRIP)}else j.isPoints?Se.setMode(G.POINTS):j.isSprite&&Se.setMode(G.TRIANGLES);if(j.isBatchedMesh)if(Vt.get("WEBGL_multi_draw"))Se.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let Ze=j._multiDrawStarts,qt=j._multiDrawCounts,tn=j._multiDrawCount,_e=zt?R.get(zt).bytesPerElement:1,Di=kt.get(Q).currentProgram.getUniforms();for(let $e=0;$e<tn;$e++)Di.setValue(G,"_gl_DrawID",$e),Se.render(Ze[$e]/_e,qt[$e])}else if(j.isInstancedMesh)Se.renderInstances(Xt,Ne,j.count);else if(nt.isInstancedBufferGeometry){let Ze=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,qt=Math.min(nt.instanceCount,Ze);Se.renderInstances(Xt,Ne,qt)}else Se.render(Xt,Ne)};function Ch(D,Y,nt,Q){E!==null&&D.isNodeMaterial&&E.setObject(Q,D),yt===!0&&ut.setState(D,nt,!1),D.transparent===!0&&D.side===an&&D.forceSinglePass===!1?(D.side=rn,D.needsUpdate=!0,Js(D,Y,Q),D.side=Ei,D.needsUpdate=!0,Js(D,Y,Q),D.side=an):Js(D,Y,Q)}this.compile=function(D,Y,nt=null){nt===null&&(nt=D),E!==null&&E.renderStart(D,Y,nt),S=lt.get(nt),S.init(Y),T.push(S),nt.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(S.pushLight(j),j.castShadow&&S.pushShadow(j))}),D!==nt&&D.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(S.pushLight(j),j.castShadow&&S.pushShadow(j))}),S.setupLights(),E!==null&&E.updateLights(S.state.lightsArray),Nt=this.localClippingEnabled,yt=ut.init(this.clippingPlanes,Nt),yt===!0&&ut.setGlobalState(this.clippingPlanes,Y),E!==null&&Tt.render(S.state.shadowsArray,nt,Y);let Q=new Set;return D.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let Dt=j.material;if(Dt)if(Array.isArray(Dt))for(let Ht=0;Ht<Dt.length;Ht++){let Lt=Dt[Ht];Ch(Lt,nt,Y,j),Q.add(Lt)}else Ch(Dt,nt,Y,j),Q.add(Dt)}),S=T.pop(),E!==null&&E.renderEnd(),Q},this.compileAsync=function(D,Y,nt=null){let Q=this.compile(D,Y,nt);return new Promise(j=>{function Dt(){if(Q.forEach(function(Ht){let zt=kt.get(Ht).currentProgram;(zt===void 0||zt.isReady())&&Q.delete(Ht)}),Q.size===0){j(D);return}setTimeout(Dt,10)}Vt.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let Fc=null;function rp(D){Fc&&Fc(D)}function Rh(){Li.stop()}function Ih(){Li.start()}let Li=new Nd;Li.setAnimationLoop(rp),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(D){Fc=D,ft.setAnimationLoop(D),D===null?Li.stop():Li.start()},ft.addEventListener("sessionstart",Rh),ft.addEventListener("sessionend",Ih),this.render=function(D,Y){if(Y!==void 0&&Y.isCamera!==!0){ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;E!==null&&E.renderStart(D,Y);let nt=ft.enabled===!0&&ft.isPresenting===!0,Q=L!==null&&(H===null||nt)&&L.begin(I,H);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(Y),Y=ft.getCamera()),D.isScene===!0&&D.onBeforeRender(I,D,Y,H),S=lt.get(D,T.length),S.init(Y),S.state.textureUnits=Jt.getTextureUnits(),T.push(S),St.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Y.isArrayCamera?Mt.setFromArrayCamera(Y):ht.setFromProjectionMatrix(St,Sn,Y.reversedDepth),Nt=this.localClippingEnabled,yt=ut.init(this.clippingPlanes,Nt),b=Ct.get(D,_.length),b.init(),_.push(b),this.info.render.frame++,ft.enabled===!0&&ft.isPresenting===!0){let Ht=I.xr.getDepthSensingMesh();Ht!==null&&Oc(Ht,Y,-1/0,I.sortObjects)}Oc(D,Y,0,I.sortObjects),b.finish(),E!==null&&E.updateLights(S.state.lightsArray),I.sortObjects===!0&&b.sort(xt,Wt),Et=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,Et&&W.addToRenderList(b,D),this.info.autoReset===!0&&this.info.reset(),yt===!0&&ut.beginShadows();let j=S.state.shadowsArray;if(Tt.render(j,D,Y),yt===!0&&ut.endShadows(),(Q&&L.hasRenderPass())===!1){let Ht=b.opaque,Lt=b.transmissive;if(S.setupLights(),Y.isArrayCamera){let zt=Y.cameras;if(Lt.length>0)for(let $t=0,oe=zt.length;$t<oe;$t++){let ue=zt[$t];Lh(Ht,Lt,D,ue)}Et&&W.render(D);for(let $t=0,oe=zt.length;$t<oe;$t++){let ue=zt[$t];Ph(b,D,ue,ue.viewport)}}else Lt.length>0&&Lh(Ht,Lt,D,Y),Et&&W.render(D),Ph(b,D,Y)}H!==null&&k===0&&(Jt.updateMultisampleRenderTarget(H),Jt.updateRenderTargetMipmap(H)),Q&&L.end(I),D.isScene===!0&&D.onAfterRender(I,D,Y),it.resetDefaultState(),P=-1,B=null,T.pop(),T.length>0?(S=T[T.length-1],Jt.setTextureUnits(S.state.textureUnits),yt===!0&&ut.setGlobalState(I.clippingPlanes,S.state.camera)):S=null,_.pop(),_.length>0?b=_[_.length-1]:b=null,E!==null&&E.renderEnd()};function Oc(D,Y,nt,Q){if(D.visible===!1)return;if(D.layers.test(Y.layers)){if(D.isGroup)nt=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Y);else if(D.isLight)S.pushLight(D),D.castShadow&&S.pushShadow(D);else if(D.isSprite){let Ht=Y.isArrayCamera?Mt:ht;if(!D.frustumCulled||D.intersectsFrustum(Ht)){Q&&J.setFromMatrixPosition(D.matrixWorld).applyMatrix4(St);let Lt=_t.update(D),zt=D.material;zt.visible&&b.push(D,Lt,zt,nt,J.z,null,Y)}}else if(D.isMesh||D.isLine||D.isPoints){let Ht=Y.isArrayCamera?Mt:ht;if(!D.frustumCulled||D.intersectsFrustum(Ht)){let Lt=_t.update(D),zt=D.material;if(Q&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),J.copy(D.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),J.copy(Lt.boundingSphere.center)),J.applyMatrix4(D.matrixWorld).applyMatrix4(St)),Array.isArray(zt)){let $t=Lt.groups;for(let oe=0,ue=$t.length;oe<ue;oe++){let Xt=$t[oe],de=zt[Xt.materialIndex];de&&de.visible&&b.push(D,Lt,de,nt,J.z,Xt,Y)}}else zt.visible&&b.push(D,Lt,zt,nt,J.z,null,Y)}}}let Dt=D.children;for(let Ht=0,Lt=Dt.length;Ht<Lt;Ht++)Oc(Dt[Ht],Y,nt,Q)}function Ph(D,Y,nt,Q){let{opaque:j,transmissive:Dt,transparent:Ht}=D;S.setupLightsView(nt),yt===!0&&ut.setGlobalState(I.clippingPlanes,nt),Q&&st.viewport(V.copy(Q)),j.length>0&&uo(j,Y,nt),Dt.length>0&&uo(Dt,Y,nt),Ht.length>0&&uo(Ht,Y,nt),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function Lh(D,Y,nt,Q){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[Q.id]===void 0){let Xt=Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[Q.id]=new xn(1,1,{generateMipmaps:!0,type:Xt?Un:cn,minFilter:di,samples:Math.max(4,Zt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:fe.workingColorSpace})}let Dt=S.state.transmissionRenderTarget[Q.id],Ht=Q.viewport||V;Dt.setSize(Ht.z*I.transmissionResolutionScale,Ht.w*I.transmissionResolutionScale);let Lt=I.getRenderTarget(),zt=I.getActiveCubeFace(),$t=I.getActiveMipmapLevel();I.setRenderTarget(Dt),I.getClearColor(q),Z=I.getClearAlpha(),Z<1&&I.setClearColor(16777215,.5),I.clear(),Et&&W.render(nt);let oe=I.toneMapping;I.toneMapping=Yn;let ue=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),S.setupLightsView(Q),yt===!0&&ut.setGlobalState(I.clippingPlanes,Q),uo(D,nt,Q),Jt.updateMultisampleRenderTarget(Dt),Jt.updateRenderTargetMipmap(Dt),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let de=0,Ne=Y.length;de<Ne;de++){let be=Y[de],{object:Se,geometry:Ze,material:qt,group:tn}=be;if(qt.side===an&&Se.layers.test(Q.layers)){let _e=qt.side;qt.side=rn,qt.needsUpdate=!0,Dh(Se,nt,Q,Ze,qt,tn),qt.side=_e,qt.needsUpdate=!0,Xt=!0}}Xt===!0&&(Jt.updateMultisampleRenderTarget(Dt),Jt.updateRenderTargetMipmap(Dt))}I.setRenderTarget(Lt,zt,$t),I.setClearColor(q,Z),ue!==void 0&&(Q.viewport=ue),I.toneMapping=oe}function uo(D,Y,nt){let Q=Y.isScene===!0?Y.overrideMaterial:null;for(let j=0,Dt=D.length;j<Dt;j++){let Ht=D[j],{object:Lt,geometry:zt,group:$t}=Ht,oe=Ht.material;oe.allowOverride===!0&&Q!==null&&(oe=Q),Lt.layers.test(nt.layers)&&Dh(Lt,Y,nt,zt,oe,$t)}}function Dh(D,Y,nt,Q,j,Dt){E!==null&&j.isNodeMaterial&&E.setObject(D,j),D.onBeforeRender(I,Y,nt,Q,j,Dt),D.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),j.onBeforeRender(I,Y,nt,Q,D,Dt),j.transparent===!0&&j.side===an&&j.forceSinglePass===!1?(j.side=rn,j.needsUpdate=!0,I.renderBufferDirect(nt,Y,Q,j,D,Dt),j.side=Ei,j.needsUpdate=!0,I.renderBufferDirect(nt,Y,Q,j,D,Dt),j.side=an):I.renderBufferDirect(nt,Y,Q,j,D,Dt),D.onAfterRender(I,Y,nt,Q,j,Dt)}function Nh(D){let Y=0;for(let nt of D)nt.texture!==null&&Y++;return Y}function Js(D,Y,nt){Y.isScene!==!0&&(Y=gt);let Q=kt.get(D),j=S.state.lights,Dt=S.state.shadowsArray,Ht=j.state.version,Lt=pt.getParameters(D,j.state,Dt,Y,nt,S.state.lightProbeGridArray),zt=pt.getProgramCacheKey(Lt),$t=Q.programs;Q.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?Y.environment:null,Q.fog=Y.fog;let oe=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;Q.envMap=F.get(D.envMap||Q.environment,oe),Q.envMapRotation=Q.environment!==null&&D.envMap===null?Y.environmentRotation:D.envMapRotation,$t===void 0&&(D.addEventListener("dispose",ce),$t=new Map,Q.programs=$t,Q.programVariants=new Map);let ue=$t.get(zt);if(ue!==void 0){if(Q.currentProgram===ue&&Q.lightsStateVersion===Ht)return Fh(D,Lt),ue}else Lt.uniforms=pt.getUniforms(D),E!==null&&D.isNodeMaterial&&E.build(D,nt,Lt),D.onBeforeCompile(Lt,I),ue=pt.acquireProgram(Lt,zt),$t.set(zt,ue),Q.uniforms=Lt.uniforms;let Xt=Q.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Xt.clippingPlanes=ut.uniform),Fh(D,Lt),Q.needsLights=lp(D),Q.lightsStateVersion=Ht,Q.needsLights&&(Xt.ambientLightColor.value=j.state.ambient,Xt.lightProbe.value=j.state.probe,Xt.sunLights.value=j.state.sun,Xt.sunLightShadows.value=j.state.sunShadow,Xt.directionalLights.value=j.state.directional,Xt.directionalLightShadows.value=j.state.directionalShadow,Xt.spotLights.value=j.state.spot,Xt.spotLightShadows.value=j.state.spotShadow,Xt.rectAreaLights.value=j.state.rectArea,Xt.ltc_1.value=j.state.rectAreaLTC1,Xt.ltc_2.value=j.state.rectAreaLTC2,Xt.pointLights.value=j.state.point,Xt.pointLightShadows.value=j.state.pointShadow,Xt.hemisphereLights.value=j.state.hemi,Xt.sunShadowMatrix.value=j.state.sunShadowMatrix,Xt.sunShadowCascade.value=j.state.sunShadowCascade,Xt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Xt.spotLightMatrix.value=j.state.spotLightMatrix,Xt.spotLightMap.value=j.state.spotLightMap,Xt.pointShadowMatrix.value=j.state.pointShadowMatrix),Q.numLightProbeGrids=Nh(S.state.lightProbeGridArray),Q.currentProgram=ue,Q.uniformsList=null,ue}function op(D,Y,nt,Q,j){let Dt=kt.get(D),Ht=Dt.currentProgram.id+","+Q+","+j,Lt=Dt.programVariants.get(Ht);return Lt===void 0?(Lt=Js(D,Y,nt),Dt.programVariants.set(Ht,Lt)):(Dt.currentProgram=Lt,Dt.uniformsList=null,Dt.outputColorSpace=Q,Dt.toneMapping=j),Lt}function Uh(D){if(D.uniformsList===null){let Y=D.currentProgram.getUniforms();D.uniformsList=Os.seqWithValue(Y.seq,D.uniforms)}return D.uniformsList}function Fh(D,Y){let nt=kt.get(D);nt.outputColorSpace=Y.outputColorSpace,nt.batching=Y.batching,nt.batchingColor=Y.batchingColor,nt.instancing=Y.instancing,nt.instancingColor=Y.instancingColor,nt.instancingMorph=Y.instancingMorph,nt.skinning=Y.skinning,nt.morphTargets=Y.morphTargets,nt.morphNormals=Y.morphNormals,nt.morphColors=Y.morphColors,nt.morphTargetsCount=Y.morphTargetsCount,nt.numClippingPlanes=Y.numClippingPlanes,nt.numIntersection=Y.numClipIntersection,nt.vertexAlphas=Y.vertexAlphas,nt.vertexTangents=Y.vertexTangents,nt.toneMapping=Y.toneMapping}function ap(D,Y,nt,Q,j){Y.isScene!==!0&&(Y=gt),Jt.resetTextureUnits();let Dt=Y.fog,Ht=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?Y.environment:null,Lt=H===null?I.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:fe.workingColorSpace,zt=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,$t=F.get(Q.envMap||Ht,zt),oe=Q.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,ue=!!nt.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Xt=!!nt.morphAttributes.position,de=!!nt.morphAttributes.normal,Ne=!!nt.morphAttributes.color,be=Yn;Q.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(be=I.toneMapping);let Se=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,Ze=Se!==void 0?Se.length:0,qt=kt.get(Q),tn=S.state.lights;if(yt===!0&&(Nt===!0||D!==B)){let Re=D===B&&Q.id===P;ut.setState(Q,D,Re)}let _e=!1,Di=!1;Q.version===qt.__version?qt.needsLights&&qt.lightsStateVersion!==tn.state.version||j.isBatchedMesh&&qt.batching===!1||!j.isBatchedMesh&&qt.batching===!0||j.isBatchedMesh&&qt.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&qt.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&qt.instancing===!1||!j.isInstancedMesh&&qt.instancing===!0||j.isSkinnedMesh&&qt.skinning===!1||!j.isSkinnedMesh&&qt.skinning===!0||j.isInstancedMesh&&qt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&qt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&qt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&qt.instancingMorph===!1&&j.morphTexture!==null||qt.envMap!==$t||Q.fog===!0&&qt.fog!==Dt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==ut.numPlanes||qt.numIntersection!==ut.numIntersection)||qt.vertexAlphas!==oe||qt.vertexTangents!==ue||qt.morphTargets!==Xt||qt.morphNormals!==de||qt.morphColors!==Ne||qt.morphTargetsCount!==Ze||qt.numLightProbeGrids!==Nh(S.state.lightProbeGridArray)?_e=!0:(qt.outputColorSpace!==Lt||qt.toneMapping!==be)&&(Di=!0):(_e=!0,qt.__version=Q.version);let $e=qt.currentProgram;(_e===!0||Di===!0)&&($e=Di===!0?op(Q,Y,j,Lt,be):Js(Q,Y,j),E&&Q.isNodeMaterial&&E.onUpdateProgram(Q,$e,qt));let fo=!1,mi=!1,Ni=!1,ge=$e.getUniforms(),Xe=qt.uniforms;if(st.useProgram($e.program)&&(fo=!0,mi=!0,Ni=!0),Q.id!==P&&(P=Q.id,mi=!0),fo||B!==D){st.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),ge.setValue(G,"projectionMatrix",D.projectionMatrix),ge.setValue(G,"viewMatrix",D.matrixWorldInverse);let Ge=ge.map.cameraPosition;Ge!==void 0&&Ge.setValue(G,z.setFromMatrixPosition(D.matrixWorld)),Zt.logarithmicDepthBuffer&&ge.setValue(G,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&ge.setValue(G,"isOrthographic",D.isOrthographicCamera===!0),B!==D&&(B=D,mi=!0,Ni=!0)}if(qt.needsLights&&(tn.state.sunShadowMap.length>0&&ge.setValue(G,"sunShadowMap",tn.state.sunShadowMap,Jt),tn.state.directionalShadowMap.length>0&&ge.setValue(G,"directionalShadowMap",tn.state.directionalShadowMap,Jt),tn.state.spotShadowMap.length>0&&ge.setValue(G,"spotShadowMap",tn.state.spotShadowMap,Jt),tn.state.pointShadowMap.length>0&&ge.setValue(G,"pointShadowMap",tn.state.pointShadowMap,Jt)),j.isSkinnedMesh){ge.setOptional(G,j,"bindMatrix"),ge.setOptional(G,j,"bindMatrixInverse");let Re=j.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),ge.setValue(G,"boneTexture",Re.boneTexture,Jt))}j.isBatchedMesh&&(ge.setOptional(G,j,"batchingTexture"),ge.setValue(G,"batchingTexture",j._matricesTexture,Jt),ge.setOptional(G,j,"batchingIdTexture"),ge.setValue(G,"batchingIdTexture",j._indirectTexture,Jt),ge.setOptional(G,j,"batchingColorTexture"),j._colorsTexture!==null&&ge.setValue(G,"batchingColorTexture",j._colorsTexture,Jt));let In=nt.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&dt.update(j,nt,$e),(mi||qt.receiveShadow!==j.receiveShadow)&&(qt.receiveShadow=j.receiveShadow,ge.setValue(G,"receiveShadow",j.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&Y.environment!==null&&(Xe.envMapIntensity.value=Y.environmentIntensity),Xe.dfgLUT!==void 0&&(Xe.dfgLUT.value=b_()),mi){if(ge.setValue(G,"toneMappingExposure",I.toneMappingExposure),qt.needsLights&&cp(Xe,Ni),Dt&&Q.fog===!0&&bt.refreshFogUniforms(Xe,Dt),bt.refreshMaterialUniforms(Xe,Q,at,ct,S.state.transmissionRenderTarget[D.id]),qt.needsLights&&qt.numLightProbeGrids>0){let Re=v,Ge=0;for(let ni of S.state.lightProbeGridArray)ni.texture!==null&&(Re.textures[Ge]=ni.texture,Re.min[Ge]=ni.boundingBox.min,Re.max[Ge]=ni.boundingBox.max,Re.resolution[Ge]=ni.resolution,Ge++);for(let ni in Re)Re[ni].length=Ge;Xe.probesSH.value=Re.textures,Xe.probesMin.value=Re.min,Xe.probesMax.value=Re.max,Xe.probesResolution.value=Re.resolution}Os.upload(G,Uh(qt),Xe,Jt)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Os.upload(G,Uh(qt),Xe,Jt),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&ge.setValue(G,"center",j.center),ge.setValue(G,"modelViewMatrix",j.modelViewMatrix),ge.setValue(G,"normalMatrix",j.normalMatrix),ge.setValue(G,"modelMatrix",j.matrixWorld),Q.uniformsGroups!==void 0){let Re=Q.uniformsGroups;for(let Ge=0,ni=Re.length;Ge<ni;Ge++){let Bh=Re[Ge];mt.update(Bh,$e),mt.bind(Bh,$e)}}return $e}function cp(D,Y){D.ambientLightColor.needsUpdate=Y,D.lightProbe.needsUpdate=Y,D.sunLights.needsUpdate=Y,D.sunLightShadows.needsUpdate=Y,D.directionalLights.needsUpdate=Y,D.directionalLightShadows.needsUpdate=Y,D.pointLights.needsUpdate=Y,D.pointLightShadows.needsUpdate=Y,D.spotLights.needsUpdate=Y,D.spotLightShadows.needsUpdate=Y,D.rectAreaLights.needsUpdate=Y,D.hemisphereLights.needsUpdate=Y}function lp(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(D,Y,nt){let Q=kt.get(D);Q.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),kt.get(D.texture).__webglTexture=Y,kt.get(D.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:nt,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,Y){let nt=kt.get(D);nt.__webglFramebuffer=Y,nt.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(D,Y=0,nt=0){H=D,N=Y,k=nt;let Q=null,j=!1,Dt=!1;if(D){let Lt=kt.get(D);if(Lt.__useDefaultFramebuffer!==void 0){st.bindFramebuffer(G.FRAMEBUFFER,Lt.__webglFramebuffer),V.copy(D.viewport),X.copy(D.scissor),et=D.scissorTest,st.viewport(V),st.scissor(X),st.setScissorTest(et),P=-1;return}else if(Lt.__webglFramebuffer===void 0)Jt.setupRenderTarget(D);else if(Lt.__hasExternalTextures)Jt.rebindTextures(D,kt.get(D.texture).__webglTexture,kt.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){let oe=D.depthTexture;if(Lt.__boundDepthTexture!==oe){if(oe!==null&&kt.has(oe)&&(D.width!==oe.image.width||D.height!==oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Jt.setupDepthRenderbuffer(D)}}let zt=D.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Dt=!0);let $t=kt.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray($t[Y])?Q=$t[Y][nt]:Q=$t[Y],j=!0):D.samples>0&&Jt.useMultisampledRTT(D)===!1?Q=kt.get(D).__webglMultisampledFramebuffer:Array.isArray($t)?Q=$t[nt]:Q=$t,V.copy(D.viewport),X.copy(D.scissor),et=D.scissorTest}else V.copy(Pt).multiplyScalar(at).floor(),X.copy(Ut).multiplyScalar(at).floor(),et=Yt;if(nt!==0&&(Q=C),st.bindFramebuffer(G.FRAMEBUFFER,Q)&&st.drawBuffers(D,Q),st.viewport(V),st.scissor(X),st.setScissorTest(et),j){let Lt=kt.get(D.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Lt.__webglTexture,nt)}else if(Dt){let Lt=Y;for(let zt=0;zt<D.textures.length;zt++){let $t=kt.get(D.textures[zt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+zt,$t.__webglTexture,nt,Lt)}}else if(D!==null&&nt!==0){let Lt=kt.get(D.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Lt.__webglTexture,nt)}P=-1};function Oh(D){let Y=kt.get(D);return(Y.__readFormat!==D.format||Y.__readType!==D.type)&&(Y.__readFormat=D.format,Y.__readType=D.type,Y.__formatReadable=Zt.textureFormatReadable(D.format),Y.__typeReadable=Zt.textureTypeReadable(D.type)),Y}this.readRenderTargetPixels=function(D,Y,nt,Q,j,Dt,Ht,Lt=0){if(!(D&&D.isWebGLRenderTarget)){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=kt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ht!==void 0&&(zt=zt[Ht],Array.isArray(zt)&&(zt=zt[0])),zt){st.bindFramebuffer(G.FRAMEBUFFER,zt);try{let $t=D.textures[Lt],oe=$t.format,ue=$t.type;D.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Lt);let Xt=Oh($t);if(Xt.__formatReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Xt.__typeReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=D.width-Q&&nt>=0&&nt<=D.height-j&&G.readPixels(Y,nt,Q,j,$.convert(oe),$.convert(ue),Dt)}finally{let $t=H!==null?kt.get(H).__webglFramebuffer:null;st.bindFramebuffer(G.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(D,Y,nt,Q,j,Dt,Ht,Lt=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=kt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ht!==void 0&&(zt=zt[Ht],Array.isArray(zt)&&(zt=zt[0])),zt)if(Y>=0&&Y<=D.width-Q&&nt>=0&&nt<=D.height-j){st.bindFramebuffer(G.FRAMEBUFFER,zt);let $t=D.textures[Lt],oe=$t.format,ue=$t.type;D.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Lt);let Xt=Oh($t);if(Xt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Xt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let de=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,de),G.bufferData(G.PIXEL_PACK_BUFFER,Dt.byteLength,G.STREAM_READ),G.readPixels(Y,nt,Q,j,$.convert(oe),$.convert(ue),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let Ne=H!==null?kt.get(H).__webglFramebuffer:null;st.bindFramebuffer(G.FRAMEBUFFER,Ne);let be=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await ed(G,be,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,de),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Dt),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(de),G.deleteSync(be),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,Y=null,nt=0){let Q=Math.pow(2,-nt),j=Math.floor(D.image.width*Q),Dt=Math.floor(D.image.height*Q),Ht=Y!==null?Y.x:0,Lt=Y!==null?Y.y:0;Jt.setTexture2D(D,0),G.copyTexSubImage2D(G.TEXTURE_2D,nt,0,0,Ht,Lt,j,Dt),st.unbindTexture()},this.copyTextureToTexture=function(D,Y,nt=null,Q=null,j=0,Dt=0){let Ht,Lt,zt,$t,oe,ue,Xt,de,Ne,be=D.isCompressedTexture?D.mipmaps[Dt]:D.image;if(nt!==null)Ht=nt.max.x-nt.min.x,Lt=nt.max.y-nt.min.y,zt=nt.isBox3?nt.max.z-nt.min.z:1,$t=nt.min.x,oe=nt.min.y,ue=nt.isBox3?nt.min.z:0;else{let ge=Math.pow(2,-j);Ht=Math.floor(be.width*ge),Lt=Math.floor(be.height*ge),D.isDataArrayTexture?zt=be.depth:D.isData3DTexture?zt=Math.floor(be.depth*ge):zt=1,$t=0,oe=0,ue=0}Q!==null?(Xt=Q.x,de=Q.y,Ne=Q.z):(Xt=0,de=0,Ne=0);let Se=$.convert(Y.format),Ze=$.convert(Y.type),qt;Y.isData3DTexture?(Jt.setTexture3D(Y,0),qt=G.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(Jt.setTexture2DArray(Y,0),qt=G.TEXTURE_2D_ARRAY):(Jt.setTexture2D(Y,0),qt=G.TEXTURE_2D),st.activeTexture(G.TEXTURE0),st.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),st.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),st.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);let tn=st.getParameter(G.UNPACK_ROW_LENGTH),_e=st.getParameter(G.UNPACK_IMAGE_HEIGHT),Di=st.getParameter(G.UNPACK_SKIP_PIXELS),$e=st.getParameter(G.UNPACK_SKIP_ROWS),fo=st.getParameter(G.UNPACK_SKIP_IMAGES);st.pixelStorei(G.UNPACK_ROW_LENGTH,be.width),st.pixelStorei(G.UNPACK_IMAGE_HEIGHT,be.height),st.pixelStorei(G.UNPACK_SKIP_PIXELS,$t),st.pixelStorei(G.UNPACK_SKIP_ROWS,oe),st.pixelStorei(G.UNPACK_SKIP_IMAGES,ue);let mi=D.isDataArrayTexture||D.isData3DTexture,Ni=Y.isDataArrayTexture||Y.isData3DTexture;if(D.isDepthTexture){let ge=kt.get(D),Xe=kt.get(Y),In=kt.get(ge.__renderTarget),Re=kt.get(Xe.__renderTarget);st.bindFramebuffer(G.READ_FRAMEBUFFER,In.__webglFramebuffer),st.bindFramebuffer(G.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ge=0;Ge<zt;Ge++)mi&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,kt.get(D).__webglTexture,j,ue+Ge),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,kt.get(Y).__webglTexture,Dt,Ne+Ge)),G.blitFramebuffer($t,oe,$t+Ht,oe+Lt,Xt,de,Xt+Ht,de+Lt,G.DEPTH_BUFFER_BIT,G.NEAREST);st.bindFramebuffer(G.READ_FRAMEBUFFER,null),st.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(j!==0||D.isRenderTargetTexture||kt.has(D)){let ge=kt.get(D),Xe=kt.get(Y);st.bindFramebuffer(G.READ_FRAMEBUFFER,A),st.bindFramebuffer(G.DRAW_FRAMEBUFFER,U);for(let In=0;In<zt;In++)mi?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ge.__webglTexture,j,ue+In):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,ge.__webglTexture,j),Ni?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Xe.__webglTexture,Dt,Ne+In):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Xe.__webglTexture,Dt),j!==0?G.blitFramebuffer($t,oe,$t+Ht,oe+Lt,Xt,de,Xt+Ht,de+Lt,G.COLOR_BUFFER_BIT,G.NEAREST):Ni?G.copyTexSubImage3D(qt,Dt,Xt,de,Ne+In,$t,oe,Ht,Lt):G.copyTexSubImage2D(qt,Dt,Xt,de,$t,oe,Ht,Lt);st.bindFramebuffer(G.READ_FRAMEBUFFER,null),st.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Ni?D.isDataTexture||D.isData3DTexture?G.texSubImage3D(qt,Dt,Xt,de,Ne,Ht,Lt,zt,Se,Ze,be.data):Y.isCompressedArrayTexture?G.compressedTexSubImage3D(qt,Dt,Xt,de,Ne,Ht,Lt,zt,Se,be.data):G.texSubImage3D(qt,Dt,Xt,de,Ne,Ht,Lt,zt,Se,Ze,be):D.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Dt,Xt,de,Ht,Lt,Se,Ze,be.data):D.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Dt,Xt,de,be.width,be.height,Se,be.data):G.texSubImage2D(G.TEXTURE_2D,Dt,Xt,de,Ht,Lt,Se,Ze,be);st.pixelStorei(G.UNPACK_ROW_LENGTH,tn),st.pixelStorei(G.UNPACK_IMAGE_HEIGHT,_e),st.pixelStorei(G.UNPACK_SKIP_PIXELS,Di),st.pixelStorei(G.UNPACK_SKIP_ROWS,$e),st.pixelStorei(G.UNPACK_SKIP_IMAGES,fo),Dt===0&&Y.generateMipmaps===!0&&Y.mipmapsAutoUpdate===!0&&G.generateMipmap(qt),st.unbindTexture()},this.initRenderTarget=function(D){kt.get(D).__webglFramebuffer===void 0&&Jt.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?Jt.setTextureCube(D,0):D.isData3DTexture?Jt.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?Jt.setTexture2DArray(D,0):Jt.setTexture2D(D,0),st.unbindTexture()},this.resetState=function(){N=0,k=0,H=null,st.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=fe._getDrawingBufferColorSpace(t),e.unpackColorSpace=fe._getUnpackColorSpace()}};function dc(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new ae;c.morphTargetsRelative=a;let l=0;for(let u=0;u<i.length;++u){let h=i[u],f=0,d=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in h.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(h.attributes[g]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in h.morphAttributes){if(!s.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(h.morphAttributes[g].length!==i[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;o[g]===void 0&&(o[g]=[]),o[g].push(h.morphAttributes[g]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(t){let g;if(e)g=h.index.count;else if(h.attributes.position!==void 0)g=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,g,u),l+=g}}if(e){let u=0,h=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=i[f].attributes.position.count}c.setIndex(h)}for(let u in r){let h=Xd(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let M=0;M<o[u].length;++M)d.push(o[u][M][f]);let g=Xd(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}}return c}function Xd(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let u=i[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new Me(o,e,n),c=0;for(let l=0;l<i.length;++l){let u=i[l];if(u.isInterleavedBufferAttribute){let h=c/e;for(let f=0,d=u.count;f<d;f++)for(let g=0;g<e;g++){let M=u.getComponent(f,g);a.setComponent(f+h,g,M)}}else o.set(u.array,c);c+=u.count*e}return s!==void 0&&(a.gpuType=s),a}var jr=new O;function En(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;jr.copy(t),jr[n]=0,jr.normalize();let l=.5*o/(o+a),u=1-jr.angleTo(i)/c;return Math.sign(jr[e])===1?u*l:a/(o+a)+l+l*(1-u)}var fc=class i extends Tn{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new O,l=new O,u=new O(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,g=h.length/6,M=new O,m=.5/o;for(let p=0,x=0;p<h.length;p+=3,x+=2)switch(c.fromArray(h,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),h[p+0]=u.x*Math.sign(c.x)+l.x*r,h[p+1]=u.y*Math.sign(c.y)+l.y*r,h[p+2]=u.z*Math.sign(c.z)+l.z*r,f[p+0]=l.x,f[p+1]=l.y,f[p+2]=l.z,Math.floor(p/g)){case 0:M.set(1,0,0),d[x+0]=En(M,l,"z","y",r,n),d[x+1]=1-En(M,l,"y","z",r,e);break;case 1:M.set(-1,0,0),d[x+0]=1-En(M,l,"z","y",r,n),d[x+1]=1-En(M,l,"y","z",r,e);break;case 2:M.set(0,1,0),d[x+0]=1-En(M,l,"x","z",r,t),d[x+1]=En(M,l,"z","x",r,n);break;case 3:M.set(0,-1,0),d[x+0]=1-En(M,l,"x","z",r,t),d[x+1]=1-En(M,l,"z","x",r,n);break;case 4:M.set(0,0,1),d[x+0]=1-En(M,l,"x","y",r,t),d[x+1]=1-En(M,l,"y","x",r,e);break;case 5:M.set(0,0,-1),d[x+0]=En(M,l,"x","y",r,t),d[x+1]=1-En(M,l,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var{clamp:T_,smoothstep:ah}=wt,w_=[[1,-.21],[.71,.61],[.18,.88],[-.62,.7],[-.99,.16],[-.72,-.64],[-.17,-.86],[.62,-.69]],A_=[[1,-.36],[.78,.53],[.16,.82],[-.61,.67],[-1,.19],[-.78,-.66],[.12,-.83]],qd=[[.91,-.3],[.78,.55],[.15,.88],[-.59,.72],[-.93,.14],[-.69,-.63],[.09,-.88]],E_=[[.93,-.14],[.61,.66],[-.1,.83],[-.75,.47],[-.83,-.29],[-.31,-.78],[.46,-.73]];function to(i,t,e,n,s=3){let r=[],o=(g,M,m)=>g.map((p,x)=>wt.lerp(p,M[x],m));for(let g=0;g<i.length;g++){let M=i[g],m=o(M,i[(g+i.length-1)%i.length],e),p=o(M,i[(g+1)%i.length],e);for(let x=0;x<=s;x++){let y=x/s;r.push(o(o(m,M,y),o(M,p,y),y))}}let a=[],c=[],l=r.length;for(let[g,M,m]of t)for(let[p,x]of r)a.push(p*M+m,g+(p*.74-x*.38)*n,x*M);for(let g=0;g<t.length-1;g++)for(let M=0;M<l;M++){let m=g*l+M,p=g*l+(M+1)%l;c.push(m,m+l,p,p,m+l,p+l)}let u=(t.length-1)*l,h=a.length/3,f=t.at(-1);a.push(t[0][2],t[0][0],0,f[2],f[0]+.018,0);for(let g=0;g<l;g++){let M=(g+1)%l;c.push(h,g,M,h+1,u+M,u+g)}let d=new ae;return d.setAttribute("position",new Gt(a,3)),d.setIndex(c),d.computeVertexNormals(),d}function eo(i,t){let e=i.toNonIndexed(),{position:n,normal:s}=e.attributes,r=new O,o=new O,a=new O,c=new O,l=new O;for(let u=0;u<n.count;u+=3){r.fromBufferAttribute(n,u),o.fromBufferAttribute(n,u+1).sub(r),a.fromBufferAttribute(n,u+2).sub(r),c.crossVectors(o,a).normalize();for(let h=u;h<u+3;h++)l.fromBufferAttribute(s,h).lerp(c,t).normalize(),s.setXYZ(h,l.x,l.y,l.z)}return i.dispose(),e}var Yd=eo(to(w_,[[-.93,.63,.04],[-.49,.98,0],[.05,1,-.015],[.47,.79,-.12],[.66,.55,-.23]],.09,.24,2),.72),Zd=eo(to(A_,[[-1.7,.81,.07],[-.71,1,.03],[.3,.99,-.02],[.37,.98,-.035],[.58,.78,-.14],[.66,.64,-.16]],.08,.19,2),.66),$d=eo(to(qd,[[-.49,.66,.02],[-.35,.98,0],[-.08,1.02,.04],[.29,.82,-.02],[.48,.42,-.11]],.14,.11,2),.63),Jd=eo(to(E_,[[-.72,.48,0],[-.41,.92,0],[.05,1,.05],[.5,.76,.01],[.74,.36,-.13]],.13,.13,2),.59),Kd=eo(to(qd,[[-.56,.62,0],[-.28,.97,0],[.16,1,.04],[.52,.56,-.09]],.13,.11,1),.56),C_=new we({vertexColors:!0}),Qd=new we({vertexColors:!0}),jd={value:0};Qd.onBeforeCompile=i=>{i.uniforms.canopyTime=jd,i.vertexShader=`uniform float canopyTime;
 attribute vec3 leafSway;
`+i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      float breezePhase = canopyTime * 1.02 - dot(leafSway.xy, vec2(.63, .44));
      float lean = .029 * sin(breezePhase) + .008 * sin(breezePhase * 1.84 + leafSway.x * .12);
      transformed.xz += leafSway.z * vec2(lean, lean * .48 + .009 * cos(breezePhase * .86));
    `),i.fragmentShader=i.fragmentShader.replace("#include <opaque_fragment>",`outgoingLight = mix(outgoingLight, diffuseColor.rgb, .32);
#include <opaque_fragment>`)};function tf(i){jd.value=i}function ef(i,[t,e,n,s]){let r=[],o=i.attributes.position;for(let a=0;a<o.count;a++){let c=(o.getY(a)-e)/s;r.push(t,n,s*ah(c,.6,1.69))}i.setAttribute("leafSway",new Gt(r,3))}function Ri(i,t,e,n=!1){return{colors:[new vt(i),new vt(t),new vt(e)],material:n?Qd:C_}}function no(i,t,e,n,s,r,o,a,c){let l=new ie(t,e.material);return l.position.set(n,s,r),l.scale.set(o,a,c),l.castShadow=!0,l.userData.tint=e.colors,i.add(l),l}function nf(i,t){if(!t)return;let e=i.attributes.position,[n,s,r]=t,o=[],a=new vt;for(let c=0;c<e.count;c++){let l=T_((e.getY(c)+.76)/1.52,0,1),u=ah(l,.49,.97);a.copy(n).lerp(s,ah(l,.06,.51)).lerp(r,u),o.push(a.r,a.g,a.b)}i.setAttribute("color",new Gt(o,3))}function sf(i,t,e){let n=document.createElement("canvas");n.width=n.height=64;let s=n.getContext("2d"),r=s.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,"#fff"),r.addColorStop(.33,"#c4c4c4"),r.addColorStop(.71,"#494949"),r.addColorStop(1,"#000"),s.fillStyle=r,s.fillRect(0,0,64,64);let o=[],a=[],c=[],l=8;for(let[f,d,g,M]of t){let m=o.length/3;for(let p=0;p<=l;p++)for(let x=0;x<=l;x++){let y=x/l,v=p/l,b=f+(2*y-1)*g,S=d+(2*v-1)*M;if(o.push(b,e(b,S)+.019,S),a.push(y,v),p===l||x===l)continue;let _=m+p*(l+1)+x,T=_+1,L=_+l+1,I=L+1;c.push(_,L,T,T,L,I)}}let u=new ae;u.setAttribute("position",new Gt(o,3)),u.setAttribute("uv",new Gt(a,2)),u.setIndex(c);let h=new sn({color:"#556b44",alphaMap:new Vi(n),transparent:!0,opacity:.35,depthWrite:!1});i.add(new ie(u,h))}var ch=[new we({color:"#806548"}),new we({color:"#8a6e4e"}),new we({color:"#795d42"})],rf=[Ri("#546f3e","#819d50","#b0c576",!0),Ri("#50704a","#789650","#a5be73",!0),Ri("#647a42","#8da753","#bac877",!0)],R_=Ri("#8a7837","#c1a54f","#e6ce78",!0),I_=[$d,Jd],of=[{trunk:[[0,-.075,0,.106],[-.09,.26,.01,.083],[-.16,.51,0,.061],[-.3,.81,-.07,.047],[-.43,1.09,-.1,.027],[-.44,1.34,-.09,.013]],limbs:[[[-.18,.54,-.02,.057],[.08,.69,.025,.039],[.42,.73,.09,.023],[.65,.91,.16,.012]],[[-.31,.82,-.06,.042],[-.07,.96,-.19,.027],[.24,1.15,-.25,.012]],[[-.41,1.02,-.09,.028],[-.58,1.1,.1,.012]]],crowns:[[-.45,1.39,-.13,.4,.44,.38,1],[.65,1.03,.16,.38,.4,.34,1],[.22,1.25,-.25,.38,.37,.37,0],[-.62,1.19,.12,.25,.29,.23,1],[.47,1.21,.1,.23,.26,.25,1]]},{trunk:[[0,-.075,0,.089],[-.04,.32,.01,.068],[-.095,.59,-.03,.049],[-.055,.89,-.05,.036],[-.06,1.2,-.045,.021],[-.1,1.49,-.055,.012]],limbs:[[[-.07,.49,-.02,.048],[.13,.73,.028,.03],[.38,.94,.09,.014]],[[-.09,.7,-.03,.036],[-.3,.85,.08,.023],[-.52,.96,.16,.011]],[[-.06,1.06,-.043,.022],[-.32,1.13,-.21,.011]]],crowns:[[-.1,1.54,-.055,.67,.55,.49,0],[.38,1.1,.09,.43,.43,.37,0],[-.51,1.05,.16,.21,.23,.2,0],[-.32,1.24,-.21,.27,.28,.23,1]]},{trunk:[[0,-.095,0,.159],[.018,.18,-.01,.122],[-.022,.44,0,.098],[.04,.75,-.02,.072],[.09,1.02,-.05,.046],[.07,1.38,-.09,.017]],limbs:[[[.01,.55,0,.078],[-.24,.75,.08,.053],[-.52,.95,.12,.022]],[[.04,.73,-.02,.072],[.3,.97,-.02,.043],[.54,1.16,.015,.018]],[[-.01,.51,.055,.047],[.24,.69,.27,.016]]],crowns:[[.01,1.48,-.11,.58,.53,.51,1],[-.51,1.13,.14,.43,.4,.36,0],[.52,1.29,.015,.43,.46,.37,0],[.22,.82,.29,.25,.27,.24,1],[.27,1.54,-.16,.39,.35,.4,1]]}];function lh(i,t,e){let n=i.map(([h,f,d])=>new O(h,f,d)),s=[],r=[],o=new O,a=new O(1,0,0),c=new O;for(let h=0;h<n.length;h++){o.subVectors(n[Math.min(h+1,n.length-1)],n[Math.max(0,h-1)]).normalize(),a.addScaledVector(o,-a.dot(o)),a.lengthSq()<.001&&a.set(0,0,1).addScaledVector(o,-o.z),a.normalize(),c.crossVectors(o,a).normalize();for(let f=0;f<e;f++){let d=(f+.23)*Math.PI*2/e,g=i[h][3]*(1+.095*Math.sin(f*1.98)),M=n[h].clone().addScaledVector(a,g*Math.cos(d)).addScaledVector(c,g*Math.sin(d));if(s.push(M.x,M.y,M.z),h===n.length-1)continue;let m=h*e+f,p=h*e+(f+1)%e;r.push(m,p,m+e,p,p+e,m+e)}}let l=new ae;l.setAttribute("position",new Gt(s,3)),l.setIndex(r),l.computeVertexNormals();let u=new ie(l,t);return u.castShadow=!0,u}var P_=i=>i-Math.floor(i);function af(i,t,[e,n,s,r],o=!1){let a=P_(Math.sin(e*31.12+n*71.76)*8123.93),c=Math.floor(a*of.length),l=of[c],u=t(e,n),h=a*Math.PI*2,f=new jt;f.position.set(e,u,n),f.rotation.y=h,f.scale.setScalar(s),i.add(f);let d=o?5:7;f.add(lh(l.trunk,ch[c],d));for(let g of l.limbs.slice(0,o?2:l.limbs.length))f.add(lh(g,ch[c],d));for(let[g,[M,m,p,x,y,v,b]]of l.crowns.entries()){if(o&&g>2)break;let S=r&&g%4!==3?R_:rf[(c+ +(g%3===1))%rf.length],_=no(f,o?Kd:I_[b],S,M,m,p,x,y,v);_.userData.canopyRoot=[e,u,n,s],_.rotation.set(.13*Math.sin(g+a),g*1.81,.13*Math.cos(g*2+a))}if(!o&&c!==1){let g=c===2?4:3;for(let M=0;M<g;M++){let m=M*Math.PI*2/g+a,p=(c===2?.39:.25)*(.8+.32*Math.sin(M*2.31+a)),x=Math.cos(m)*p,y=Math.sin(m)*p,v=b=>{let S=x*s*b,_=y*s*b;return(t(e+S*Math.cos(h)+_*Math.sin(h),n-S*Math.sin(h)+_*Math.cos(h))-u)/s};f.add(lh([[0,.105,0,.078],[x*.47,v(.47)+.037,y*.47,.052],[x,v(1)-.013,y,.008]],ch[c],5))}}return f}var L_=new vt("#637a43"),D_=new vt("#829a51"),N_=new vt("#b1bf72"),U_=new vt("#e6e7c9"),F_=new vt("#fffdee"),O_=new vt("#dbb95b"),B_=new vt("#d6a435"),z_=new vt("#f6d962"),k_=new vt("#ad771e"),cf=[[0,.22,0],[.3,.72,.09],[.61,1,.32],[.9,.73,.66],[1,.09,1]];function lf(i,{grass:t,tussocks:e,yellow:n},s){let r=[],o=[],a=[],c=[],l=new vt,u=43278,h=()=>(u=Math.imul(u,1664525)+1013904223>>>0,u/4294967296);function f(b,S,_,T,L,I,w){r.push(b,S,_),o.push(T.r,T.g,T.b),a.push(L,I,w)}function d(b,S,_,T,L,I,w,E=!1){let C=Math.cos(T),A=Math.sin(T),U=r.length/3,N=Math.min(1.22,L/.205);for(let[k,H,P]of cf){let B=b+C*w*P,V=_+A*w*P,X=S+L*(E?k:k-.1*k**5),et=N*k**2;l.copy(L_).lerp(D_,k).lerp(N_,k*(E?.28:.57)),f(B-A*I*H,X,V+C*I*H,l,b,_,et),f(B+A*I*H,X,V-C*I*H,l,b,_,et)}for(let k=0;k<cf.length-1;k++){let H=U+k*2;c.push(H,H+1,H+2,H+1,H+3,H+2)}}function g(b,S,_,T,L,I,w=!1){let E=w?.008+h()*.013:.025+h()*.028;d(b,S,_,T,L,.009,E,!0),d(b,S,_,T+Math.PI,L*.57,w?.019:.022,.062);let C=b+Math.cos(T)*E,A=S+L,U=_+Math.sin(T)*E,N=Math.min(1.22,L/.205),k=[[.16,-.18,0],[.49,-.37,.035],[.91,-.24,.14],[1,0,.19],[.88,.24,.12],[.48,.37,.035],[.16,.18,0]];for(let B=0;B<5;B++){let V=T+B*Math.PI*2/5,X=Math.cos(V),et=Math.sin(V),q=r.length/3,Z=I*(.9+h()*.17);for(let[rt,ct,at]of k)l.copy(w?B_:U_).lerp(w?z_:F_,Math.min(1,rt*1.4)),f(C+(X*rt-et*ct)*Z,A+at*Z,U+(et*rt+X*ct)*Z,l,b,_,N);for(let rt=1;rt<k.length-1;rt++)c.push(q,q+rt,q+rt+1)}let H=r.length/3,P=w?k_:O_;f(C,A+.007,U,P,b,_,N);for(let B=0;B<6;B++){let V=B*Math.PI/3;f(C+Math.cos(V)*I*.24,A+.003,U+Math.sin(V)*I*.24,P,b,_,N),c.push(H,H+1+(B+1)%6,H+1+B)}}function M(b,S,_,T,L){for(let I=0;I<T;I++){let w=h()*Math.PI*2,E=Math.sqrt(h()),C=_*E,A=b+Math.cos(w)*C,U=S+Math.sin(w)*C*.76,N=s(A,U);N!==null&&L(A,N,U,w,(.75+h()*.39)*(1-.27*E),I)}}function m(b,S,_,T,L,I=!1){let w=(I?10:5)+Math.floor(h()*4),E=I?.057:.028;for(let C=0;C<w;C++){let A=T+(C+h()*.58)*Math.PI*2/w,U=I?.135+h()*.17:.055+h()*.1,N=(I?.25+h()*.29:.116+h()*.139)*L,k=(I?.032+h()*.026:.02+h()*.018)*L;d(b+Math.cos(A)*E,S-.014,_+Math.sin(A)*E,A,N,k,U*L)}}for(let[b,S,_,T]of t)M(b,S,_,11,(L,I,w,E,C,A)=>{if(m(L,I,w,E,C),A<T){let U=s(L+.082,w-.055);if(U!==null&&g(L+.082,U,w-.055,E,(.175+h()*.08)*C,(.048+h()*.024)*C),A%2===0){let N=s(L-.095,w+.064);N!==null&&g(L-.095,N,w+.064,E+2,(.143+h()*.072)*C,.057*C)}}});for(let[b,S,_]of e){let T=s(b,S);T!==null&&m(b,T,S,h()*Math.PI*2,1.08+h()*.23,!0),M(b,S,_,6,(L,I,w,E,C,A)=>{m(L,I,w,E,C,A<3)})}for(let[b,S,_,T]of n)M(b,S,_,T,(L,I,w,E,C)=>{g(L,I-.008,w,E,(.035+h()*.05)*C,(.052+h()*.032)*C,!0)});let p=new ae;p.setAttribute("position",new Gt(r,3)),p.setAttribute("color",new Gt(o,3)),p.setAttribute("breeze",new Gt(a,3)),p.setIndex(c),p.computeVertexNormals(),p.computeBoundingSphere(),p.boundingSphere.radius+=.14;let x={value:0},y=new we({vertexColors:!0,side:an});y.onBeforeCompile=b=>{b.uniforms.meadowTime=x,b.vertexShader=`uniform float meadowTime;
 attribute vec3 breeze;
`+b.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        float phase = meadowTime * 2.45 - dot(breeze.xy, vec2(.91, .64));
        float ripple = sin(phase) * .084 + sin(phase * 1.82 + breeze.x) * .019;
        transformed.xz += vec2(.85, .53) * breeze.z * ripple;
        transformed.y -= breeze.z * (ripple * ripple * 2.65);
      `)};let v=new ie(p,y);return v.receiveShadow=!0,i.add(v),b=>{x.value=b}}function hf(i,t,e,n,s){function r(M,m,p){let x=0;for(let y=.08;y<=2.36;y+=.08){if(t(M,m+p*y)<n){x=y;continue}for(let v=0;v<7;v++){let b=(x+y)*.5;t(M,m+p*b)<n?x=b:y=b}return(x+y)*.5}return x}let o=[],a=[],c=[],l=Math.ceil(2*s/.205),u=.16;for(let M of[-1,1]){let m=o.length/3;for(let p=0;p<=l;p++){let x=wt.lerp(-s,s,p/l),y=e(x),v=r(x,y,M);if(o.push(x,n,y+M*(v+u),x,n,y),a.push(-u,M,v,M),p===l)continue;let b=m+p*2,S=b+1,_=b+2,T=b+3;M<0?c.push(b,S,_,S,T,_):c.push(b,_,S,S,_,T)}}let h=new ae;h.setAttribute("position",new Gt(o,3)),h.setAttribute("shore",new Gt(a,2)),h.setIndex(c),h.computeVertexNormals();let f={value:0},d=new we;d.onBeforeCompile=M=>{M.uniforms.flowTime=f,M.uniforms.deepWater={value:new vt("#6c9fa4")},M.uniforms.shallowWater={value:new vt("#99c3b8")},M.uniforms.whiteWater={value:new vt("#f7fcef")},M.vertexShader=`attribute vec2 shore;
 varying vec4 vRiver;
`+M.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vRiver = vec4(position.xz, shore);`),M.fragmentShader=`uniform float flowTime;
 uniform vec3 deepWater, shallowWater, whiteWater;
 varying vec4 vRiver;
`+M.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
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
      `)};let g=new ie(h,d);return g.receiveShadow=!0,i.add(g),M=>{f.value=M}}var V_=[[0,-1],[1,0],[0,1],[-1,0]],G_=new Tn,hh=new Map,uf=[Ri("#696d71","#929798","#c9c8b7"),Ri("#73706d","#9a9789","#cbc1a9")];function H_(i){return hh.has(i)||hh.set(i,new we({color:i})),hh.get(i)}function Oe(i,t,e,n,s,r,o=1,a=1,c=1,l=!0){let u=new ie(t,H_(e));return u.position.set(n,s,r),u.scale.set(o,a,c),u.castShadow=l,u.receiveShadow=!0,i.add(u),u}function ve(i,t,e,n,s,r,o,a,c=!0){return Oe(i,G_,t,e,n,s,r,o,a,c)}function On(i,t,e,n,s,r,o,a,c){return Oe(i,new fc(r,o,a,1,c),t,e,n,s)}function Jn(i,t){let e=Math.sin(i*127.1+t*311.7)*43758.5453123;return e-Math.floor(e)}var Fe=(i,t)=>`${i},${t}`,Pe=1.25,Gs=i=>Math.round(i/Pe),Bn=wt.smoothstep,oo=wt.lerp,mc=.115,Kn=3.65,Ii=6.35,Vs=1.56,gc=i=>5+.75*Math.sin(i*.28)+.24*Math.sin(i*.77)+.55*Math.sin(i*.096),xc=i=>.58+.17*(.5+.5*Math.sin(i*.49+1)),W_=[[-6.5,-4.9,5.2,4,3.45],[-9.1,-1.2,4.1,5,2.25],[4.6,-6.6,6.7,4.9,2.75],[8,-1.1,4.2,4.2,1.55],[-14,-13,9,6.5,6.2],[1,-17,12,7,5.4],[15,-10,9,6,6.9],[17,10,9,6,4.5],[-13,12.5,8,6,4.1],[2,19,12,6.5,4.3],[-24,-16,11,12,8.2],[22,-22,10,8,7.5],[-21,21,12,7,6.4],[29,12,11,9,7.8],[-33,-3,12,9,8.2],[0,-35,15,8,8.9]];function mh(i,t){let e=.49+.13*Math.sin(i*.34+t*.28)+.12*Math.cos(i*.57-t*.36);for(let[s,r,o,a,c]of W_){let l=((i-s)/o)**2+((t-r)/a)**2;e+=c*Math.exp(-l*1.5)}let n=Math.abs(t-gc(i));return oo(-.2,e,Bn(n,xc(i)*.48,xc(i)+.63))}var mf=[Kn,Ii].map(i=>({z:i,y:mh(0,i)}));function _c(i,t,e){let n=t-i.x,s=e-i.z,r=Math.cos(i.angle),o=Math.sin(i.angle),a=r*n-o*s,c=o*n+r*s;return Math.max(Math.abs(a)-i.w/2,Math.abs(c)-i.d/2)}function ks(i,t){let e=mh(i,t)+.031*Math.sin(i*1.45+t*.55)*Math.sin(t*1.33);for(let n of ro){let s=1-Bn(_c(n,i,t),.56,1.27);e=oo(e,n.floor,s)}for(let n of mf){let s=(1-Bn(Math.abs(i),Vs/2+.1,Vs/2+.57))*(1-Bn(Math.abs(t-n.z),.23,.71));e=oo(e,n.y,s)}return e}var vc=.375,gh=.72,ao=32,df=vc*ao,io=72,uh=new Map;function ph(i){let t=Math.abs(i);return Math.sign(i)*(Math.min(t,ao)*vc+Math.max(0,t-ao)*gh)}function ff(i){let t=Math.abs(i),e=t<=df?t/vc:ao+(t-df)/gh;return Math.floor(Math.sign(i)*e)}function pc(i,t){let e=Fe(i,t);if(!uh.has(e)){let n=o=>Math.abs(o)<=ao?vc:gh,s=ph(i)+(Jn(i,t+17)-.5)*n(i)*.44,r=ph(t)+(Jn(i-12,t)-.5)*n(t)*.44;uh.set(e,[s,ks(s,r),r])}return uh.get(e)}function gf(i,t){let e=pc(i,t),n=pc(i+1,t),s=pc(i+1,t+1),r=pc(i,t+1);return(i+t)%2===0?[[e,r,n],[n,r,s]]:[[e,r,s],[e,s,n]]}function Qn(i,t){let e=ff(i),n=ff(t);for(let s=-1;s<=1;s++)for(let r=-1;r<=1;r++)for(let[o,a,c]of gf(e+s,n+r)){let l=a[0]-o[0],u=a[2]-o[2],h=c[0]-o[0],f=c[2]-o[2],d=i-o[0],g=t-o[2],M=l*f-u*h,m=(d*f-g*h)/M,p=(l*g-u*d)/M;if(m>=-1e-7&&p>=-1e-7&&m+p<=1+1e-7)return o[1]+m*(a[1]-o[1])+p*(c[1]-o[1])}return ks(i,t)}function so(i){let t=(i-Kn)/(Ii-Kn);return oo(xf,_f,t)+Math.sin(t*Math.PI)*.29}function me(i,t){let e=Qn(i,t);return Math.abs(i)<=Vs/2&&t>=Kn&&t<=Ii?Math.max(e,so(t)):e}function X_(i){let t=new ae;return t.setAttribute("position",new Gt(i.flat(),3)),t.computeVertexNormals(),t}function zs(i,t,e,n,s){i.push(t,e,s,e,n,s)}function dh(i,t,e,n=!0){if(t.length)return Oe(i,X_(t),e,0,0,0,1,1,1,n)}var q_=[[1.1,[[-16.5,43],[-10.6,34],[-9.6,27],[-5.8,20],[-2,13],[-.65,9],[-.16,7.2],[0,6.52],[0,6.3],[0,3.68],[.07,3.44],[.65,2.8],[.33,1.15],[-.5,-.15],[-1.08,-1.7],[-1.17,-3.35],[-1.54,-5.6],[-3.35,-7.8],[-3.05,-13],[-3.8,-17],[-1.1,-23],[-1.9,-30],[-6.2,-37],[-6.8,-43]]],[.77,[[.25,1.14],[1.4,.79],[2.32,-.02],[3.04,-1.05],[3.94,-1.52]]],[.7,[[2.16,.13],[2.74,.78],[3.62,1],[4.2,.89]]],[.67,[[-.99,-1.52],[.3,-1.38],[1.06,-1.31]]],[.64,[[.04,.7],[-1.08,.95],[-2.15,1.05],[-2.72,.91]]],[.56,[[-1.03,-1.61],[-1.63,-1.53],[-2.65,-1.72]]],[.57,[[-1.27,-4.02],[.17,-4.27],[1.52,-3.93]]]],yc={x:48,z:86},xh=q_.map(([i,t],e)=>{let n=new Gi(t.map(([o,a])=>new O(o,0,a))),s=n.getLength(),r=Math.ceil(s*15);return Array.from({length:r+1},(o,a)=>{let c=a/r,l=n.getPointAt(c),u=n.getTangentAt(c),h=c*s,f=.57+.43*Bn(c,0,.05)*(1-Bn(c,.94,1)),d=e===0?Math.max(...mf.map(m=>1-Bn(Math.abs(l.z-m.z),.22,.8))):0,g=i*.5*f*(1+d*.24),M=m=>g*(1+.094*Math.sin(h*1.47+e+m)+.024*Math.sin(h*3.1+m*2));return{x:l.x,z:l.z,dx:u.z,dz:-u.x,left:M(1),right:M(-1)}})}),_h=xh[0];function pf(i,t,e){return xh.some(n=>n.some(s=>{let r=i-s.x,o=t-s.z,a=(r*s.dx+o*s.dz>0?s.left:s.right)+e;return r*r+o*o<a*a}))}function Y_(){let t=document.createElement("canvas");t.width=t.height=2048;let e=t.getContext("2d"),n=(a,c)=>[(a/yc.x+.5)*2048,(c/yc.z+.5)*2048];e.fillStyle="#ddd";for(let a of xh){let c=a.map(({x:h,z:f,dx:d,dz:g,left:M})=>n(h+d*M,f+g*M)),l=a.map(({x:h,z:f,dx:d,dz:g,right:M})=>n(h-d*M,f-g*M)),u=[...c,...l.reverse()];e.beginPath(),u.forEach(([h,f],d)=>d===0?e.moveTo(h,f):e.lineTo(h,f)),e.closePath(),e.fill()}let s=document.createElement("canvas");s.width=s.height=2048;let r=s.getContext("2d");r.fillStyle="#000",r.fillRect(0,0,2048,2048),r.filter="blur(1.65px)",r.drawImage(t,0,0);let o=new Vi(s);return o.anisotropy=4,o}function Z_(i){let t=new we({vertexColors:!0,map:Y_()});t.onBeforeCompile=h=>{h.uniforms.trackColor={value:new vt("#cbb686")},h.fragmentShader=`uniform vec3 trackColor;
`+h.fragmentShader.replace(`#include <map_fragment>
	#include <color_fragment>`,`#include <color_fragment>
 diffuseColor.rgb = mix(diffuseColor.rgb, trackColor, texture2D(map, vMapUv).r);`)};let e=new vt("#a8bf7c"),n=new vt("#7f9e6c"),s=new vt("#b9b3a2"),r=new vt("#c9bf96"),o=new vt("#a9bdb3"),a=new WeakMap;function c(h){if(a.has(h))return a.get(h);let[f,d,g]=h,M=.23,m=new O(ks(f-M,g)-ks(f+M,g),2*M,ks(f,g-M)-ks(f,g+M)).normalize(),p=.42+.27*Math.sin(f*.33+g*.22)+.09*Math.cos(g*.62-f*.27),x=e.clone().lerp(n,p).lerp(s,Bn(1-m.y,.12,.34)*Bn(d,1.2,2.9)*.78).lerp(r,1-Bn(Math.abs(g-gc(f)),xc(f)*.87,xc(f)+.36)).lerp(o,Bn(Math.hypot(f,g),11,31)*.73),y={normal:m,color:x};return a.set(h,y),y}let l=[],u=16;for(let h=-io;h<io;h+=u)for(let f=-io;f<io;f+=u){let d=[],g=[],M=[],m=[];for(let y=0;y<u;y++)for(let v=0;v<u;v++)for(let b of gf(f+v,h+y))for(let S of b){let{normal:_,color:T}=c(S);d.push(...S),g.push(_.x,_.y,_.z),M.push(T.r,T.g,T.b),m.push(S[0]/yc.x+.5,.5-S[2]/yc.z)}let p=new ae;p.setAttribute("position",new Gt(d,3)),p.setAttribute("normal",new Gt(g,3)),p.setAttribute("color",new Gt(M,3)),p.setAttribute("uv",new Gt(m,2)),p.computeBoundingBox();let x=new ie(p,t);x.receiveShadow=!0,i.add(x),l.push(x)}return l}function $_(i,t,e,n,s,r,o=!1){let a=e/2+.215,c=t/2+.205,l=16,u=12,h=x=>c*(.965+.035*x),f=(x,y,v)=>[x*h(y),n+s*(1-y)**1.64+.044*y**7+.116*Math.abs(x)**7*(.46+.54*y),v*y*a],d=([x,y,v])=>[x,y-.067,v],g=[];for(let x of[-1,1]){let y=o?4:1,v=l/y;for(let b=0;b<y;b++){let S=[],_=[];for(let I=0;I<=u;I++)for(let w=0;w<=v;w++){if(S.push(...f((b*v+w)*2/l-1,I/u,x)),I===u||w===v)continue;let E=I*(v+1)+w,C=E+1,A=E+v+1,U=A+1;x>0?_.push(E,A,C,C,A,U):_.push(E,C,A,C,U,A)}if(o){let I=S.length/3,w=_.slice(),E=new Map;for(let C=0;C<I;C++)S.push(S[C*3],S[C*3+1]-.067,S[C*3+2]);for(let C=0;C<w.length;C+=3){let A=w.slice(C,C+3);_.push(A[2]+I,A[1]+I,A[0]+I);for(let U=0;U<3;U++){let N=A[U],k=A[(U+1)%3],H=`${Math.min(N,k)},${Math.max(N,k)}`;E.has(H)?E.delete(H):E.set(H,[N,k])}}for(let[C,A]of E.values())_.push(A,C,C+I,A,C+I,A+I)}let T=new ae;T.setAttribute("position",new Gt(S,3)),T.setIndex(_),T.computeVertexNormals();let L=Oe(i,T,r,0,0,0);o&&(L.userData.breakStage=(x>0?[1,2,3,3]:[3,2,4,4])[b],L.userData.roofPanel={side:x,panel:b})}for(let b=0;b<l;b++){let S=f(b*2/l-1,1,x),_=f((b+1)*2/l-1,1,x);x>0?zs(g,_,S,d(S),d(_)):zs(g,S,_,d(_),d(S))}for(let b of[-1,1])for(let S=0;S<u;S++){let _=f(b,S/u,x),T=f(b,(S+1)/u,x);x===b?zs(g,_,T,d(T),d(_)):zs(g,T,_,d(_),d(T))}}o||dh(i,g,"#4d6265");let M=[];for(let x of[-1,1]){let y=x*t/2,v=b=>f(y/h(Math.abs(b)/a),Math.abs(b)/a,Math.sign(b))[1]-.035;for(let b=0;b<16;b++){let S=e*(b/16-.5),_=S+e/16,T=[y,n-.095,S],L=[y,n-.095,_],I=[y,v(_),_],w=[y,v(S),S];x>0?zs(M,T,w,I,L):zs(M,T,L,I,w)}if(o){let b=dh(i,M,"#f0e7d0");b.userData.breakStage=x<0?3:4,M=[]}}o||dh(i,M,"#f0e7d0");let m="#4c6064",p=On(i,m,0,n+s+.029,0,t+.42,.113,.115,.047);o&&(p.userData.breakStage=3);for(let x of[-1,1]){let y=On(i,m,x*(c-.019),n+s+.079,0,.225,.087,.11,.032);y.rotation.z=x*.24,o&&(y.userData.breakStage=3)}}var ro=[{x:1.07,z:-2.35,w:2.52,d:1.47,h:.98,angle:-.11,hall:!0},{x:-2.79,z:-2.56,w:1.48,d:1.12,h:.78,angle:.18},{x:4.05,z:-2.42,w:1.68,d:1.12,h:.83,angle:-.24},{x:4.36,z:.18,w:1.4,d:.92,h:.67,angle:-.42},{x:1.54,z:-4.79,w:1.48,d:1.02,h:.72,angle:.04},{x:-2.89,z:.19,w:1.43,d:.93,h:.73,angle:.32}].map(i=>({...i,w:i.w*1.08,d:i.d*1.08,h:i.h*1.08,floor:mh(i.x,i.z)})),xf=Qn(0,Kn)+.014,_f=Qn(0,Ii)+.014;function J_(i,{x:t,z:e,w:n,d:s,h:r,hall:o,angle:a,floor:c}){let l=new jt;l.position.set(t,c,e),l.rotation.y=a,i.add(l);let u=o?"#f7eedb":"#f0e7d0";On(l,"#ada58e",0,-.038,0,n+.12,.235,s+.13,.045);let h=new jt;if(l.add(h),o){let v=function(S,_,T,L,I){ve(h,u,S,.073+.14,_,T,.28,L);let w=On(h,u,S,.073+.28+(r-.28)/2,_,T,r-.28,L,.022);w.userData.breakStage=I},y=(n-.62)/2;for(let S=0;S<3;S++)v((S-1)*n/3,-s/2+.15/2,n/3,.15,S===0?3:4);for(let S of[-1,1]){for(let _=0;_<3;_++)v(S*(n/2-.15/2),(_-1)*s/3,.15,s/3,S<0?[2,3,4][_]:[3,4,4][_]);v(S*(.31+y/2),s/2-.15/2,y,.15,S<0?2:3)}let b=ve(h,u,0,.081+.6+(r-.6)/2,s/2-.15/2,.63,r-.6,.15);b.userData.breakStage=3,ve(h,"#333c30",0,.13,0,n-.3,.035,s-.25,!1)}else On(h,u,0,r/2+.073,0,n,r,s,.052);if(o)for(let x of[-1,1]){let y=ve(l,"#a27c60",0,r+.037,x*s/2,n+.055,.1,.1),v=ve(l,"#a27c60",x*n/2,r+.037,0,.1,.1,s);y.userData.breakStage=x<0?4:3,v.userData.breakStage=x<0?3:4}else On(l,"#a27c60",0,r+.037,0,n+.055,.1,s+.045,.021);let f=new jt;if(l.add(f),$_(f,n,s,r+.13,o?.6:.44,o?"#566c71":"#617578",o),o){let b=function(S,_){let T=Math.abs(_)/y,L=S/(v*(.965+.035*T));return r+.13+.6*(1-T)**1.64+.044*T**7+.116*Math.abs(L)**7*(.46+.54*T)-.12},x=new jt;x.name="\u57FA\u5730\u6728\u5C4B\u67B6",l.add(x);let y=s/2+.215,v=n/2+.205;for(let S of[-n*.37,0,n*.37]){for(let T of[-1,1])for(let L=0;L<4;L++){let I=T*s*.48*L/4,w=T*s*.48*(L+1)/4,E=new O(S,b(S,I),I),C=new O(S,b(S,w),w),A=C.clone().sub(E),U=ve(x,"#76583e",S,(E.y+C.y)/2,(I+w)/2,.055,A.length(),.055);U.name="\u5C4B\u5185\u66F2\u7EBF\u693D\u6728",U.quaternion.setFromUnitVectors(new O(0,1,0),A.normalize()),U.userData.breakStage=S<0?3:4}let _=ve(x,"#76583e",S,r+.04,0,.065,.055,s*.95);_.userData.breakStage=S<0?3:4}for(let S of[-n*.44,n*.44])for(let _ of[-s*.4,s*.4]){let T=ve(x,"#76583e",S,r/2+.06,_,.075,r,.075);T.userData.breakStage=4}}let d=o?.6:.49,g=new jt,M=[],m=o?.56:.32;g.position.set(-m/2,.081,s/2+.053),l.add(g);for(let x=0;x<5;x++)M.push(ve(g,x%2?"#835438":"#8f6141",(x+.5)*m/5,d/2,0,m/5-.006,d,.052));for(let x of[.12,d-.12])ve(g,"#66513b",m/2,x,.035,m,.035,.025);let p=ve(l,"#b4855b",0,.081+d,s/2+.053,o?.65:.4,.075,.11);o&&(p.userData.breakStage=3);for(let x of[-1,1]){let y=ve(l,"#725b47",x*n*.3,r*.57,s/2+.021,.19,.24,.045),v=ve(l,"#b19572",x*n*.3,r*.57,s/2+.048,.026,.21,.022);if(o){y.userData.breakStage=x<0?2:3,v.userData.breakStage=x<0?2:3;let b=ve(l,"#906246",x*n*.44,r*.51+.05,s/2+.106,.075,r,.075);b.userData.breakStage=4}}return On(l,"#c6bba3",0,.016,s/2+.15,o?.95:.54,.135,.36,.025),o&&On(l,"#c8bda4",0,-.007,s/2+.34,.9,.092,.23,.023),{group:l,walls:h,roof:f,door:g,planks:M,spec:{x:t,z:e,w:n,d:s,h:r,angle:a,floor:c}}}var yf=[[-4.15,-5.73,1.36,!0],[-5.88,-6.54,.74],[-4.81,-7.36,.68],[-8.77,-5.03,.8],[.29,-7,.97],[3.39,-4.72,.74],[5.62,-4.17,.68],[6.31,-1.79,.79],[6.93,.38,1.43],[8.3,1.67,.67],[5.98,2.43,.75],[-5.94,1.87,1.47],[-4.62,3.43,.69],[3.75,7.29,.89],[-3.92,6.67,1.24],[-8.13,-1.91,.79]],K_=[[-4.82,2.95,.71,7],[-3.87,2.01,.53,3],[-4.38,.32,.58,0],[-2.61,3.59,.68,6],[-1.66,3.83,.48,4],[1.76,3.68,.49,5],[3.12,4.12,.5,2],[4.36,3.65,.66,6],[5.71,3.22,.76,3],[6.63,2.05,.6,0],[-4.78,-1.94,.75,2],[-3.72,-1.28,.48,4],[-2.94,-.65,.5,5],[1.38,-.56,.42,4],[2.21,-.22,.52,3],[5.53,-.11,.63,6],[5.27,-3.6,.68,0],[-5.05,-2.7,.54,3],[-6.37,-2.45,.8,0],[-3.42,6.63,.62,5],[-2.51,7.14,.61,5],[1.36,6.9,.56,4],[2.33,7.34,.64,7],[4.23,7.48,.68,2],[-5.13,7.87,.85,0],[6.91,5,.76,0],[-8.16,1.46,.95,1],[-7.31,.56,.78,0],[-5.84,-.56,.82,2],[-5.24,.81,.66,2],[-5.01,5.64,.73,0],[-3.02,5.81,.66,2],[2.87,6.53,.67,0],[4.38,5.96,.68,2],[6.44,4.31,.79,1],[7.31,2.96,.88,0],[8.22,2.49,.84,2],[8.77,-.27,.9,0],[4.39,-5.6,.79,0],[-4.36,-7.94,.78,1],[-2.55,8.76,.97,2],[3.31,8.63,.83,1],[-11.7,7.63,1.08,2],[-13.28,9.92,1.14,0],[-14.6,8.37,.88,0],[-15.12,1.55,.94,1],[-13.98,3.32,1.05,0],[-11.29,11.66,.97,3],[-5.87,13.53,1.1,0],[-4.2,15.1,.89,1],[7.65,11.78,1.14,2],[9.41,13.68,.92,0],[12.66,6.87,1.06,0],[14.33,7.91,.91,2],[15.71,5.31,.97,0],[13.92,2.31,1.04,1],[15.22,-1.46,1.08,0],[16.28,-4.17,.93,0],[13.92,-5.83,.98,2],[8.22,-11.71,.92,0],[5.76,-13.19,1.04,1],[-10.64,-10.83,.89,0],[-12.82,-8.77,1.08,2]],Q_=[[-6.71,-1.48,.75],[-5.46,-2.47,.66],[-7.76,-2.86,.62],[-6.77,2.55,.76],[-4.12,2.98,.57],[-3.86,5.98,.53],[-1.77,6.26,.48],[2.59,6.25,.48],[4.87,4.64,.61],[6.01,3.16,.66],[7.31,1.18,.8],[6.92,-1.94,.69],[4.92,-5.65,.8],[8.63,-3.4,.79],[-3.84,-8.36,.72],[4.56,8.57,.81],[-12.6,8.85,.78],[-14.75,2.56,.69],[-10.76,12.3,.73],[-5.18,14.62,.76],[8.42,12.61,.72],[13.51,7.15,.78],[15.36,3.61,.68],[15.81,-2.63,.74],[6.62,-12.48,.69],[-11.81,-9.59,.71]],j_=[[-5.26,2.18,.59,24],[-4.72,1.71,.39,11],[-3.16,.07,.56,21],[-2.87,-3.88,.59,18],[-2.26,3.48,.49,19],[-2.22,6.76,.69,25],[1.29,6.48,.47,19],[2.63,2.81,.6,22],[3.19,3.39,.37,10],[5.18,.95,.55,20],[6.66,2.47,.66,22],[7.93,-1.75,.58,16],[-7.08,1.23,.56,16]];function ty(i){let e=(Ii-Kn)/20,n=[-1,1].map(s=>s*(Vs/2-.06));for(let s=0;s<20;s++){let r=Kn+e*s,o=r+e,a=(r+o)/2,c=so(a),l=Math.atan2(so(r)-so(o),e);if(On(i,s%3?"#b79a73":"#c2a47e",0,c-.034,a,Vs,.068,e*1.015,.009).rotation.x=l,s%5===0||s===19)for(let u of n)On(i,"#907453",u,c+.108,a,.084,.3,.085,.019)}for(let s of n){let r=new Gi(Array.from({length:13},(o,a)=>{let c=oo(Kn,Ii,a/12);return new O(s,so(c)+.239,c)}));Oe(i,new Dr(r,24,.029,8,!1),"#a1815d",0,0,0)}for(let[s,r,o]of[[Kn,xf,-1],[Ii,_f,1]])On(i,"#b8ae92",0,r-.063,s+.064*o,Vs+.11,.138,.258,.024)}function ey(i,t){let e=[];function n(o,a){let c=new nn().setFromObject(o,!0).expandByScalar(.035);if(e.some(l=>l.intersectsBox(c))){o.removeFromParent();return}e.push(c),t.push(a)}let s=[[-7.71,-3.76,1.32,1.17,.84,.25],[-5.42,-3.6,.94,1.35,.78,.07],[-6.56,-2.18,.82,.78,.49,-.31],[7.4,-2.91,.74,.76,.62,-.08],[8.23,-4.36,.94,1,.64,-.33]];for(let[o,[a,c,l,u,h,f]]of s.entries()){let d=Qn(a,c),g=no(i,Zd,uf[o%2],a,d+u*.18,c,l,u,h);g.rotation.y=f,n(g,[a,c+.16,l*1.17,h*1.35])}let r=[[-6.25,-4.14,.73],[-4.93,-2.82,.52],[-7.29,-2.6,.68],[-7.62,-1.44,.56],[6.24,-5.52,.72],[5.82,-4.64,.59],[7.87,3.01,.59],[-6.27,7.73,.64],[4.87,7.31,.46],[10.35,2.27,.61],[-10.27,.63,.64],[6.1,9.87,.67]];for(let[o,a,c]of r)for(let l=0;l<4;l++){let u=(Jn(l,o)-.5)*c*1.8,h=(Jn(l,a)-.5)*c*1.55,f=c*(.22+Jn(l+6,o)*.43),d=no(i,Yd,uf[l%2],o+u,Qn(o+u,a+h)+f*.095,a+h,f,f*(.52+Jn(l,a)*.37),f*.82);d.rotation.set(l*.14,l*1.42,-.2),n(d,[o+u,a+h+.04,f*1.18,f*.96])}return e}function fh(i,t){i.updateMatrixWorld(!0);let e=new Map;i.traverse(s=>{if(!s.isMesh)return;let r=`${s.material.id}-${s.castShadow}`;e.has(r)||e.set(r,{material:s.material,shadow:s.castShadow,parts:[]});let o=s.geometry.index?s.geometry.toNonIndexed():s.geometry.clone();o.deleteAttribute("uv"),nf(o,s.userData.tint),o.applyMatrix4(s.matrixWorld),s.userData.canopyRoot&&ef(o,s.userData.canopyRoot),e.get(r).parts.push(o)});let n=[];for(let{material:s,shadow:r,parts:o}of e.values()){let a=new ie(dc(o),s);a.castShadow=r,a.receiveShadow=!0,t.add(a),n.push(a),o.forEach(c=>c.dispose())}return n}function ny(i=yf){let t=new Map,e=.33*Pe,n=[[-1,1],[-3,3],[-4,4],[-4,4],[-4,4],[-4,4],[-4,4],[-3,4],[-2,2],[-1,1],[-2,2],[-1,1]];for(let r=-5;r<=6;r++){let o=r*Pe,[a,c]=n[r+5];for(let l=a;l<=c;l++){let u=l*Pe;if(!ro.some(h=>_c(h,u,o)<.51)&&!i.some(([h,f])=>Math.hypot(u-h,o-f)<.6)){if(!(l===0&&o>=Kn&&o<=Ii)){let h=[[0,0],[-e,-e],[-e,e],[e,-e],[e,e]].map(([f,d])=>Qn(u+f,o+d));if(Math.min(...h)<=mc+.025||Math.max(...h)-Math.min(...h)>.59*Pe)continue}t.set(Fe(l,r),{x:u,z:o,column:l,row:r,neighbors:[]})}}}for(let r of t.values())r.neighbors=V_.map(([o,a])=>t.get(Fe(r.column+o,r.row+a))).filter(o=>o&&Math.abs(me(r.x,r.z)-me(o.x,o.z))<.65*Pe);let s=t.get(Fe(1,0))??t.get(Fe(0,0));if(s){let r=new Set([s]),o=[s];for(let a=0;a<o.length;a++)for(let c of o[a].neighbors)r.has(c)||(r.add(c),o.push(c));for(let[a,c]of t)r.has(c)||t.delete(a)}return t}function vf(i){let t=new jt;i.add(t);let e=Z_(t),n=hf(t,Qn,gc,mc,ph(io)-.16),s=[],r=new jt,o=ey(r,s),a=new jt,c;for(let y of ro){let v=J_(a,y);y.hall&&(c=v)}let l=[...o,...a.children.map(y=>new nn().setFromObject(y,!0))],u=[];function h(y,v,b=!1){let[S,_,T]=v;if(b&&(pf(S,_,T*.39)||u.some(([E,C,A])=>Math.hypot(S-E,_-C)<(T+A)*.48)))return!1;let L=af(y,Qn,v,b),I=new nn().setFromObject(L),w=l.filter(E=>E.intersectsBox(I));if(w.length){let E=new nn;if(L.children.some(C=>(E.setFromObject(C,!0),w.some(A=>A.intersectsBox(E)))))return L.removeFromParent(),!1}return u.push(v),s.push([S+.08*T,_,.79*T,.63*T]),!0}let f=yf.filter(y=>h(a,y));c.group.removeFromParent(),t.add(c.group);let d=fh(a,t);c.group.traverse(y=>{y.isMesh&&d.push(y)});let g=new jt;ty(g);let M=fh(g,t),m=19;for(let[y,v,b,S]of[[-9.3,-5.9,2.9,22],[7.3,-7.4,3.7,26],[-11.5,3.8,3.4,20],[9.5,6.4,3,22],[-6.3,11,3.8,20],[3.1,12.4,3.1,17],[-15,-11.9,4.5,27],[-3.6,-15,4.2,20],[12.8,-12.4,4.5,24],[11.15,-.55,2.35,11],[-10.46,.61,1.88,8],[1.2,-10.8,2.45,8],[6.67,10.57,2.04,8],[-12.9,9.6,2.6,12],[-15.9,2.1,2.5,10],[-5.5,15,2,9],[8.9,12.8,2.4,10],[14.2,5.4,2.6,12],[16,-2.7,2.3,11],[6.8,-13.3,2.5,8],[-11.9,-10.1,2.4,7]])for(let _=0;_<S;_++){let T=y+(Jn(_,y)-.5)*2*b,L=v+(Jn(_,v)-.5)*1.5*b;if(Math.hypot(T,L)>m||Math.abs(T)<7&&L>-7.5&&L<8.5||Math.abs(L-gc(T))<1.25)continue;let I=.54+Jn(T,L)**1.36*.83;h(r,[T,L,I,Jn(L,T)<.06],!0)}fh(r,t),sf(t,s,Qn);let p=lf(t,{grass:K_,tussocks:Q_,yellow:j_},(y,v)=>{let b=Qn(y,v),S=o.some(_=>y>=_.min.x&&y<=_.max.x&&v>=_.min.z&&v<=_.max.z);return b>mc+.057&&!S&&!pf(y,v,.045)&&!ro.some(_=>_c(_,y,v)<.39)?b:null}),x=(y,v)=>me(y,v)>mc+.05&&!ro.some(b=>_c(b,y,v)<.2)&&!f.some(([b,S,_])=>Math.hypot(y-b,v-S)<.19*_+.12)&&!o.some(b=>y>b.min.x-.12&&y<b.max.x+.12&&v>b.min.z-.12&&v<b.max.z+.12);return{terrain:e,blockers:d,deck:M,home:c,tiles:ny(f),canServiceWalk:x,animateWater:n,animateMeadow:p,animateCanopy:tf}}function Mf(i){let t=new Map(Array.from(i.values(),c=>[c,new tt(c.x,c.z)])),e=c=>i.get(Fe(Gs(c.x),Gs(c.y))),n=(c,l)=>!!c&&c.neighbors.includes(l);function s(c,l,u,h){let f=(c.x+u)/Pe,d=(c.y+h)/Pe,g=(l.x+u)/Pe,M=(l.y+h)/Pe,m=Math.floor(f+.5),p=Math.floor(d+.5),x=Math.floor(g+.5),y=Math.floor(M+.5),v=g-f,b=M-d,S=Math.sign(v),_=Math.sign(b),T=i.get(Fe(m,p));if(!T)return!1;for(;m!==x||p!==y;){let L=m===x?1/0:(m+S*.5-f)/v,I=p===y?1/0:(p+_*.5-d)/b;if(Math.abs(L-I)<1e-9){let w=i.get(Fe(m+S,p)),E=i.get(Fe(m,p+_)),C=i.get(Fe(m+S,p+_));if(!n(T,w)||!n(T,E)||!n(w,C)||!n(E,C))return!1;m+=S,p+=_,T=C}else{L<I?m+=S:p+=_;let w=i.get(Fe(m,p));if(!n(T,w))return!1;T=w}}return!0}function r(c,l,u=0){if(!s(c,l,0,0))return!1;let h=l.x-c.x,f=l.y-c.y,d=Math.hypot(h,f);if(!u||d<1e-8)return!0;let g=f*u/d,M=-h*u/d;return s(c,l,g,M)&&s(c,l,-g,-M)}function o(c,l,u){let h=[];for(let f=0;f<l.length-1;f++){let d=l[f],g=l[f-1]??c,M=l[f+1],m=Math.min(.27*Pe,g.distanceTo(d)*.23,M.distanceTo(d)*.23),p=d.clone().lerp(g,m/g.distanceTo(d)),x=d.clone().lerp(M,m/M.distanceTo(d)),y=Array.from({length:5},(v,b)=>{let S=b/4;return p.clone().lerp(d,S).lerp(d.clone().lerp(x,S),S)});y.every((v,b)=>r(y[b-1]??h.at(-1)??c,v,u))?h.push(...y):h.push(d)}return h.push(l.at(-1)),h}function a(c,l,u=.23*Pe,h=!0){if(r(c,l,u))return[l.clone()];let f=t.get(e(c));if(!f||!e(l))return null;let d=c.clone(),g=l.clone(),M=[...t.values()].filter(v=>v.distanceToSquared(g)>1e-8);M.push(g);let m=new Set([d]),p=new Set,x=new Map([[d,0]]),y=new Map;for(;m.size;){let v,b=1/0;for(let S of m){let _=x.get(S)+S.distanceTo(g);_<b&&(v=S,b=_)}if(v===g){let S=[];for(let _=g;_!==d;_=y.get(_))S.unshift(_);return h?o(d,S,u):S}m.delete(v),p.add(v);for(let S of M){if(p.has(S)||v.distanceToSquared(S)<1e-8)continue;let _=x.get(v)+v.distanceTo(S);if(_>=(x.get(S)??1/0))continue;let T=v===d&&S===f;!r(v,S,u)&&!(T&&r(v,S))||(x.set(S,_),y.set(S,v),m.add(S))}}return null}return{tileAt:e,clear:r,route:a}}var xe=128,Hs=40,hn=xe*Hs,Sf=(i,t,e)=>wt.smoothstep(e,i,t);function iy(i,t){let e=(a,c)=>wt.euclideanModulo(Math.sin(a*127.1+c*311.7)*43758.5453,1),n=Math.floor(i),s=Math.floor(t),r=Sf(0,1,i-n),o=Sf(0,1,t-s);return wt.lerp(wt.lerp(e(n,s),e(n+1,s),r),wt.lerp(e(n,s+1),e(n+1,s+1),r),o)}function bf(){let i=new Uint8Array(hn).fill(255),t=new Float32Array(hn),e=new Uint8Array(hn),n=new Uint8Array(hn),s=new Uint16Array(hn),r=new Float32Array(hn),o=[[.23,.32,.1,.2],[.4,.69,.12,.21],[.65,.4,.12,.22]],a=new ki(i,xe,Hs,Fs);a.minFilter=a.magFilter=qe,a.generateMipmaps=!1,a.needsUpdate=!0;let c=-1;for(let u=0;u<Hs;u++)for(let h=0;h<xe;h++){let f=h/(xe-1),d=u/(Hs-1),g=iy(f*13+1.7,d*6+3.1),M=.66*(1-f)+.22*Math.sin(d*Math.PI)+.075*g+.07*Math.exp(-f*22);for(let[m,p,x,y]of o){let v=Math.hypot((f-m)/x,(d-p)/y);M=Math.min(M,.24+v*.19+g*.045)}t[u*xe+h]=M}function l(u){let h=Math.round(Math.max(0,u)*768);if(c===h)return;if(c=h,h===0){i.fill(255),e.fill(1),n.fill(1),a.needsUpdate=!0;return}let f=-.035+h/768*.75;n.fill(0);for(let m=0;m<hn;m++)e[m]=+(t[m]>f);let d=0,g=0;for(let m=0;m<Hs;m++){let p=m*xe;e[p]&&(n[p]=1,s[g++]=p)}function M(m){e[m]&&!n[m]&&(n[m]=1,s[g++]=m)}for(;d<g;){let m=s[d++],p=m%xe;p>0&&M(m-1),p<xe-1&&M(m+1),m>=xe&&M(m-xe),m<hn-xe&&M(m+xe)}for(let m=0;m<hn;m++){let p=m%xe,x=n[m];r[m]=p&&n[m-1]!==x||p<xe-1&&n[m+1]!==x||m>=xe&&n[m-xe]!==x||m<hn-xe&&n[m+xe]!==x?.5:1e3}for(let m=0;m<hn;m++)m%xe&&(r[m]=Math.min(r[m],r[m-1]+1)),m>=xe&&(r[m]=Math.min(r[m],r[m-xe]+1)),m>=xe&&m%xe&&(r[m]=Math.min(r[m],r[m-xe-1]+1.414));for(let m=hn-1;m>=0;m--)m%xe<xe-1&&(r[m]=Math.min(r[m],r[m+1]+1)),m<hn-xe&&(r[m]=Math.min(r[m],r[m+xe]+1)),m<hn-xe&&m%xe<xe-1&&(r[m]=Math.min(r[m],r[m+xe+1]+1.414)),i[m]=Math.round(wt.clamp(.5+(n[m]?1:-1)*r[m]/24,0,1)*255);a.needsUpdate=!0}return l(0),{texture:a,setBurn:l,attached:n,width:xe,height:Hs}}var vn=14,ke=4,Ee=vn+1,je=Ee*(ke+1),Ws=.01;function sy(i,t,e,n){let s=new we({color:n?"#387cac":"#bb593c"});s.onBeforeCompile=o=>{o.uniforms.clothBurn=i,o.uniforms.clothHeat=t,o.uniforms.clothMask={value:e.texture},o.vertexShader=`varying vec2 vCloth;
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
        #include <tonemapping_fragment>`)},s.customProgramCacheKey=()=>n?"engineer-three-tab-banner-v1":"attached-cloth-dissolve-v3";let r=s.clone();return r.color.set(n?"#2c5e86":"#98503a"),r.onBeforeCompile=s.onBeforeCompile,[s,r]}function Mc({engineer:i=!1}={}){let t={value:0},e={value:0},n=bf(),s=[],r=[],o=[];for(let P=0;P<=ke;P++){let B=P/ke,V=i?.94:1.13-.254*(1-Math.abs(B*2-1));for(let X=0;X<=vn;X++){let et=X/vn;if(s.push(new O(.009+et*V,.075-B*((i?.48:.326)-et*.044)-et*.03,0)),r.push(et,B),P===ke||X===vn)continue;let q=P*Ee+X,Z=q+1,rt=q+Ee,ct=rt+1;o.push(q,rt,Z,Z,rt,ct),o.push(q+je,Z+je,rt+je,Z+je,ct+je,rt+je)}}let a=o.length,c=[];for(let P=0;P<vn;P++)c.push(P);for(let P=0;P<ke;P++)c.push(P*Ee+vn);for(let P=vn;P>0;P--)c.push(ke*Ee+P);for(let P=ke;P>0;P--)c.push(P*Ee);for(let P=0;P<c.length;P++){let B=c[P],V=c[(P+1)%c.length];o.push(B,V,B+je,V,V+je,B+je)}let l=new ae,u=new Me(new Float32Array(je*6),3).setUsage(ln);l.setAttribute("position",u),l.setAttribute("uv",new Gt([...r,...r],2)),l.setIndex(o),l.addGroup(0,a,0),l.addGroup(a,o.length-a,1),l.boundingSphere=new on(new O,1.46);let h=new ie(l,sy(t,e,n,i));h.name=i?"\u84DD\u8272\u4E09\u9F7F\u9524\u7EB9\u65D7":"\u5B88\u6751\u961F\u71D5\u5C3E\u65D7";let f=s.map(P=>P.clone()),d=s.map(P=>P.clone()),g=s.map(()=>new O),M=s.map(()=>new O),m=[],p=Array.from({length:ke+1},()=>new O),x=p.map(P=>P.clone()),y=p.map(P=>P.clone()),v=x.map(P=>P.clone()),b=x.map(P=>P.clone()),S=new O,_=new O,T=new O,L=new O,I=new O,w=new pe,E=!1;function C(P,B,V){m.push({a:P,b:B,strength:V,rest:s[P].distanceTo(s[B]),weightA:P%Ee===0?0:1,weightB:B%Ee===0?0:1})}for(let P=0;P<=ke;P++)for(let B=0;B<=vn;B++){let V=P*Ee+B;B<vn&&C(V,V+1,.97),P<ke&&B&&C(V,V+Ee,.96),P<ke&&B<vn&&(C(V,V+Ee+1,.7),C(V+1,V+Ee,.7)),B<vn-1&&C(V,V+2,.18),P<ke-1&&B&&C(V,V+Ee*2,.24)}function A(P,B){let V=B%Ee,X=Math.floor(B/Ee);return S.subVectors(P[B+ +(V<vn)],P[B-+(V>0)]),_.subVectors(P[B-(X>0?Ee:0)],P[B+(X<ke?Ee:0)]),T.crossVectors(S,_).normalize()}function U(){for(let P=0;P<je;P++){let B=d[P],V=A(d,P);u.setXYZ(P,B.x+V.x*Ws,B.y+V.y*Ws,B.z+V.z*Ws),u.setXYZ(P+je,B.x-V.x*Ws,B.y-V.y*Ws,B.z-V.z*Ws)}u.needsUpdate=!0,l.computeVertexNormals()}function N({a:P,b:B,rest:V,strength:X,weightA:et,weightB:q},Z){I.subVectors(f[B],f[P]);let rt=I.length();if(rt<1e-6)return;let ct=(rt-V*Z)*X/(rt*(et+q));f[P].addScaledVector(I,ct*et),f[B].addScaledVector(I,-ct*q)}function k(P,B,V,X){for(let Z=0;Z<=ke;Z++)f[Z*Ee].lerpVectors(y[Z],p[Z],V),b[Z].lerpVectors(v[Z],x[Z],V);let et=Math.exp(-1.62*B),q=4.05+.51*Math.sin(P*.92);for(let Z=0;Z<je;Z++){if(Z%Ee===0)continue;let rt=f[Z],ct=g[Z],at=Z%Ee/vn,xt=Math.floor(Z/Ee)/ke,Wt=Math.sin(P*5.65-at*8.9+xt*.87),Pt=Math.sin(P*8.3-at*13.6+xt*1.38);L.set(q+.2*Wt,.32+.28*Pt,-.46+.99*Wt+.41*Pt).sub(ct);let Ut=A(f,Z),Yt=L.dot(Ut);M[Z].copy(rt),ct.multiplyScalar(et).addScaledVector(L,1.72*B).addScaledVector(Ut,Yt*Math.abs(Yt)*.41*B),ct.y-=1.85*B,rt.addScaledVector(ct,B)}for(let Z=0;Z<7;Z++){for(let rt=0;rt<=ke;rt++)f[rt*Ee+1].lerp(b[rt],.092);if(Z%2===0)for(let rt of m)N(rt,X);else for(let rt=m.length-1;rt>=0;rt--)N(m[rt],X)}for(let Z=0;Z<je;Z++)Z%Ee!==0&&g[Z].subVectors(f[Z],M[Z]).multiplyScalar(1/B).clampLength(0,8.5)}function H(P,B,V){for(let Z=0;Z<=ke;Z++)p[Z].copy(s[Z*Ee]).applyMatrix4(V),x[Z].copy(s[Z*Ee+1]).applyMatrix4(V);if(!E||p[0].distanceToSquared(y[0])>1.2){for(let Z=0;Z<je;Z++)f[Z].copy(s[Z]).applyMatrix4(V),g[Z].set(0,0,0);for(let Z=0;Z<=ke;Z++)y[Z].copy(p[Z]),v[Z].copy(x[Z]);E=!0}let X=Math.min(Math.max(B,0),.1),et=Math.ceil(X*120),q=Math.hypot(V.elements[0],V.elements[1],V.elements[2]);for(let Z=1;Z<=et;Z++)k(P-X+X*Z/et,X/et,Z/et,q);for(let Z=0;Z<=ke;Z++)y[Z].copy(p[Z]),v[Z].copy(x[Z]);w.copy(V).invert();for(let Z=0;Z<je;Z++)d[Z].copy(f[Z]).applyMatrix4(w);U()}return U(),{mesh:h,animate:H,setBurn:(P,B=1)=>{t.value=P,e.value=B,n.setBurn(P)},reset:()=>{E=!1,t.value=0,e.value=0,n.setBurn(0)}}}var Tf="#b9beb0",ry="#e0dfc7",wf="#8e6a45";function Af(i){let t=new jt;if(t.name=["\u9570\u5200","\u9504\u5934","\u5E72\u8349\u53C9"][i],i===1?Oe(t,new Xn(.014,.018,.66,7),wf,0,.115,0,1,1,1,!1):ve(t,wf,0,.13,0,.028,.53,.028,!1),i===0){let e=new qn().moveTo(0,.38).quadraticCurveTo(.27,.49,.23,.23).quadraticCurveTo(.19,.4,.005,.335),n=new Rs(e,{depth:.018,bevelEnabled:!1,curveSegments:12});Oe(t,n,Tf,0,0,-.009,1,1,1,!1),ve(t,"#b3a17a",0,.335,0,.052,.055,.043,!1)}else if(i===1){let n=function(s,r,o,a){let c=f=>.09+(f+.045)/.25*.015,l=new qn().moveTo(-c(s),s).lineTo(c(s),s).lineTo(c(r),r).lineTo(-c(r),r).closePath(),u=new Rs(l,{depth:.012,bevelEnabled:!0,bevelThickness:.0015,bevelSize:.0015,bevelSegments:1,steps:1});u.rotateX(Math.PI/2-.12);let h=Oe(t,u,o,0,.477,0,1,1,1,!1);h.name=a},e=Oe(t,new Xn(.027,.024,.065,6),"#46534e",0,.447,0,1,1,1,!1);e.name="\u9504\u5934\u94C1\u7B8D",n(-.045,.175,"#53605b","\u5BBD\u8584\u94C1\u9504\u677F"),n(.175,.205,"#859084","\u9504\u677F\u5203\u53E3")}else{ve(t,Tf,0,.37,0,.22,.035,.032,!1);for(let e of[-.09,0,.09])Oe(t,new Mr(.017,.18,6),ry,e,.455,0,1,1,1,!1)}return t.position.set(.125,i===1?.225:.19,.065),t.rotation.set(.22,0,-.22),t}function Ef(){let i=new jt;return i.name="\u5DE5\u7A0B\u5E08\u5C0F\u9524",Oe(i,new Xn(.012,.014,.27,7),"#9b764b",0,.105,0,1,1,1,!1),ve(i,"#78877e",0,.245,0,.17,.072,.07,!1),ve(i,"#9ba69a",-.08,.245,0,.019,.077,.074,!1),ve(i,"#63746b",.08,.245,0,.017,.07,.068,!1),i.position.set(.125,.2,.065),i.rotation.set(.22,0,-.22),i}var Kt={squadSize:6,villagerHp:100,villagerDamage:26,villagerAttack:.82,villagerReach:.76,recoveryDelay:4.5,recoveryRate:4,replenishSeconds:2,indoorRecoveryRate:22,engineerSize:3,engineerHp:35,engineerDamage:5,engineerAttack:1.35,engineerReach:.72,engineerRecoveryDelay:3,engineerRecoveryRate:6,extinguishSeconds:3,enemyHp:42,enemyDamage:18,enemyAttack:1.18,enemyReach:.7,baseHp:300,doorHits:3,burnPerInvader:2.4,burnSpeedCap:10,victoryDelay:3,defeatDelay:4.8,waves:[{count:6,interval:1.6},{count:10,interval:1.05},{count:16,interval:.62}]};var Cf=[[0,0],[-.27,-.11],[.26,-.08],[-.29,.23],[-.01,.29],[.27,.25]],oy=[12.8,13.5,12.1,14,12.6,13.2],ay=[0,.08,.13,.19,.24,.31],cy=[0,.25,.34,.49,.62,.73].map(i=>i*Pe),ly=[0,-.17,.19,-.21,.02,.23].map(i=>i*Pe),hy=1.19,Rf=2.83,uy=Sc([[0,.043],[.084,.048],[.117,.065],[.127,.105],[.115,.211],[.088,.294],[.065,.329],[.049,.344],[0,.345]],18,22),If=new bi(.116,16,12),dy=Sc([[0,-.05],[.117,-.05],[.151,-.043],[.145,-.032],[.113,-.006],[.077,.027],[.046,.051],[.027,.058],[0,.059]],20,22),fy=Sc([[.131,-.009],[.149,-.009],[.158,-.004],[.16,.002],[.152,.009],[.134,.01],[.131,-.009]],20,13),py=new bi(1,10,7);function Sc(i,t,e){let s=new Hi(i.map(([r,o])=>new tt(r,o))).getPoints(e);for(let r of s)r.x=Math.max(0,r.x);return new qi(s,t)}function Pf(i){let t=[],e=[],n=0,s=0,r=new tt,o=new tt,a=new tt;function c(u){t=u,n=0,e=t.map(()=>0);for(let h=t.length-2;h>=0;h--)e[h]=e[h+1]+t[h].distanceTo(t[h+1]);t.length?s>.1&&(o.subVectors(t[0],i).normalize(),s*=wt.clamp(.72+r.dot(o)*.32,.45,1)):s=0}function l(u){for(;n<t.length&&i.distanceToSquared(t[n])<1e-10;)n++;if(n>=t.length)return!1;let h=t[n],f=i.distanceTo(h),d=f+e[n];o.subVectors(h,i).normalize();let g=Math.min(Rf,Math.sqrt(14.5*d));if(n+1<t.length){a.subVectors(t[n+1],h).normalize();let p=Rf-(1-o.dot(a))*.88;g=Math.min(g,Math.sqrt(p**2+13*f))}let M=s;s+=wt.clamp(g-s,-9.2*u,7.5*u);let m=(M+s)*.5*u;for(;n<t.length&&m>0;){o.subVectors(t[n],i);let p=o.length();if(p>1e-5&&r.copy(o).multiplyScalar(1/p),m<p){i.addScaledVector(r,m);break}i.copy(t[n++]),m-=p}return n<t.length?!0:(s=0,!1)}return{setRoute:c,advance:l,pause:u=>{s=Math.max(0,s-u*9.2)}}}function yh(i,{engineer:t=!1}={}){let e=new jt;e.name=t?"\u5DE5\u7A0B\u5E08\u5C0F\u961F":"\u5B88\u6751\u961F";let n=t?{maxHp:Kt.engineerHp,damage:Kt.engineerDamage,attackInterval:Kt.engineerAttack,attackReach:Kt.engineerReach,recoveryDelay:Kt.engineerRecoveryDelay,recoveryRate:Kt.engineerRecoveryRate}:{maxHp:Kt.villagerHp,damage:Kt.villagerDamage,attackInterval:Kt.villagerAttack,attackReach:Kt.villagerReach,recoveryDelay:Kt.recoveryDelay,recoveryRate:Kt.recoveryRate},s=t?["#d47732","#e18a3d","#c96e31"]:["#3b5970","#426881","#41657d"],r=Cf.slice(0,t?Kt.engineerSize:Kt.squadSize).map((w,E)=>{let C=new jt,A=new jt;if(C.scale.setScalar(hy),e.add(C),C.add(A),Oe(A,uy,s[E%3],0,0,0,1,1,.87),Oe(A,If,"#dfa978",0,.385,.012,.94,.93,.91),t){let P=Sc([[0,-.025],[.108,-.025],[.125,0],[.12,.045],[.08,.074],[0,.078]],14,14);Oe(A,P,"#f2edd9",0,.437,0),Oe(A,If,"#dedbc8",0,.455,-.107,.28,.23,.24);for(let B of[-1,1]){let V=ve(A,"#e8e3cf",B*.024,.412,-.112,.029,.096,.019);V.rotation.z=B*.26}}else Oe(A,dy,"#cda569",0,.49,0),Oe(A,fy,"#e2c18a",0,.438,0);let U=[-1,1].map(P=>Oe(C,py,"#4f4942",P*.051,.03,.023,.046,.043,.062,!1));for(let P of[-1,1])ve(A,"#4d4035",P*.033,.383,.11,.016,.023,.012,!1);let N=t?Ef():Af(Math.floor(Math.random()*3));A.add(N);let k=new jt;A.add(k);let H=new ie(new Xn(.18,.18,.56,8));return H.visible=!1,H.position.y=.29,C.add(H),{unit:C,group:C,body:A,feet:U,weapon:N,stains:k,target:H,kind:"villager",team:t?"engineers":"militia",...n,p:new tt,velocity:new tt,detour:null,hp:n.maxHp,inside:!1,stowed:!1,ready:0,swing:-1,hit:!1,cooldown:E*.07,lastHurt:-100,recoil:0,combatFace:new tt(0,1),moving:!1,combatHold:!1,canEngage:!1,battleStep:new tt,lastFight:-100,working:!1,workTime:0,workProgress:0,gait:0,index:E,slot:E,stride:E*1.21}}),o=new jt;o.position.set(.07,1.13,-.05),o.rotation.y=.22,r[0].unit.add(o),ve(o,"#b8996d",0,-.51,0,.032,1.19,.032);let a=Mc({engineer:t});o.add(a.mesh);let c=[],l=new tt(0,1),u=new tt,h=new tt,f=new tt,d=new tt,g=new tt,M=new tt,m=new tt,p=new tt,x=new tt,y=0;function v(w,E){let[C,A]=Cf[E];return u.set(w.x+(C*l.y-A*l.x)*Pe,w.y-(C*l.x+A*l.y)*Pe)}function b(w,E,C,A){let{unit:U,body:N,feet:k,p:H}=w;if(!w.working&&w.ready>.1&&!w.moving&&(A=w.combatFace),A.lengthSq()>1e-5){let q=Math.atan2(A.x,A.y),Z=Math.atan2(Math.sin(q-U.rotation.y),Math.cos(q-U.rotation.y));U.rotation.y+=Z*(1-Math.exp(-C*13))}w.gait=wt.damp(w.gait,Math.min(1,E/2.2),16,C),w.stride+=C*oy[w.index]*Math.min(1.25,E*.52);let P=Math.sin(w.stride)*w.gait;N.position.y=(.5-Math.cos(w.stride*2)*.5)*.03*w.gait,N.rotation.z=P*.068,N.rotation.x=w.gait*.052,N.rotation.x+=w.ready*.075,N.position.z=-w.recoil*.17;let B=w.swing<0?0:wt.smoothstep(w.swing,0,.24),V=w.swing<0?0:wt.smoothstep(w.swing,.24,.38),X=w.swing<0?0:wt.smoothstep(w.swing,.4,.68),et=B*-.85+V*2.05-X*1.2;if(w.weapon.rotation.x=.22+w.ready*.65+et,w.weapon.rotation.z=-.22-w.ready*.17+V*(1-X)*.3,w.stowed&&(w.weapon.rotation.x=1.25,w.weapon.rotation.z=-.05),w.working){let q=w.workTime%1,Z=wt.smoothstep(q,.05,.44),rt=wt.smoothstep(q,.44,.6),ct=wt.smoothstep(q,.68,.98);w.weapon.rotation.x=.45-Z*1.2+rt*1.75-ct*.55,w.weapon.rotation.z=-.32+Math.sin(q*Math.PI)*.1,N.rotation.x+=rt*(1-ct)*.11}N.rotation.z+=Math.sin(Math.max(0,w.swing)*8)*.1*(1-X)*+(w.swing>=0),k[0].position.z=.023+P*.043,k[1].position.z=.023-P*.043,k[0].position.y=.03+Math.max(0,Math.cos(w.stride))*.029*w.gait,k[1].position.y=.03+Math.max(0,-Math.cos(w.stride))*.029*w.gait,U.position.set(H.x,me(H.x,H.y),H.y)}function S(w){y=0,c.length=0,c.push({p:w.clone(),distance:0})}function _(w){S(w),a.reset(),l.set(.42,.91).normalize(),r.forEach((E,C)=>{E.hp=E.maxHp,E.inside=!1,E.stowed=!1,E.ready=0,E.swing=-1,E.hit=!1,E.cooldown=C*.07,E.lastHurt=-100,E.recoil=0,E.battleStep.set(0,0),E.lastFight=-100,E.unit.visible=!0,E.stains.clear(),E.p.copy(v(w,C)),E.unit.rotation.y=Math.atan2(l.x,l.y),E.stride=C*1.21,E.velocity.set(0,0),E.detour=null,E.gait=0,E.combatHold=!1,E.canEngage=!1,E.working=!1,E.workTime=0,E.workProgress=0,b(E,0,0,l)})}function T(w){let E=c.length-1;for(;E>1&&c[E-1].distance>w;)E--;let C=c[Math.max(0,E-1)],A=c[E];if(d.copy(C.p),h.set(l.y,-l.x),C===A)return;let U=wt.clamp((w-C.distance)/(A.distance-C.distance),0,1);d.lerp(A.p,U);let N=c[Math.max(0,E-3)].p,k=c[Math.min(c.length-1,E+2)].p;h.set(k.y-N.y,N.x-k.x).normalize()}function L(w,E,C){y+=C;let A=r[0];if(A.hp<=0||A.inside)return!0;let U=0;for(let H of r)H.hp>0&&(H.slot=U++),H.moving=E&&!H.combatHold,H.stowed=!1;f.subVectors(w,A.p);let N=f.length();if(N>1e-5)for(l.copy(f).normalize(),c.push({p:w.clone(),distance:c.at(-1).distance+N});c.length>2&&c[1].distance<c.at(-1).distance-1.7;)c.shift();A.p.copy(w),b(A,C>0?N/C:0,C,l);let k=!E;for(let H=1;H<r.length;H++){let P=r[H];if(P.hp<=0||P.inside)continue;if(y<ay[H]){k=!1;continue}if(P.combatHold)u.copy(P.p);else if(E){let X=c.at(-1).distance-cy[P.slot]*(1+.1*Math.sin(y*3.5+H));T(X),u.copy(d).addScaledVector(h,ly[P.slot]+Math.sin(y*4.7+H*2)*.04);for(let et of r){if(et===P||et.hp<=0||et.inside)continue;M.subVectors(u,et.p);let q=M.length();q>0&&q<.25&&u.addScaledVector(M,(.25-q)*.39/q)}i.tileAt(u)||u.copy(d)}else v(w,P.slot).add(P.battleStep),i.clear(P.p,u)||v(w,P.slot);if(i.clear(P.p,u))P.detour=null,m.copy(u);else{let X=P.detour;(!X||P.p.distanceToSquared(X)<.02||!i.clear(P.p,X))&&(P.detour=i.route(P.p,u,.075,!1)?.[0]??null),m.copy(P.detour??P.p)}f.subVectors(m,P.p);let B=E?3.48+.16*Math.sin(y*4.4+H*1.77):1.66+H*.11;if(p.copy(f).setLength(Math.min(B,f.length()*(E?9.4:6.2))),x.subVectors(p,P.velocity).clampLength(0,C*(E?12.8:10.6)),P.velocity.add(x),g.copy(P.p).addScaledVector(P.velocity,C),i.clear(P.p,g)||(P.velocity.copy(p),g.copy(P.p).addScaledVector(P.velocity,C),i.clear(P.p,g)||(P.velocity.set(0,0),g.copy(P.p))),!E&&P.ready>.2)for(let X of r){if(X===P||X.hp<=0||X.inside)continue;M.subVectors(g,X.p);let et=M.length();if(et>1e-4&&et<.29){let q=X.p.clone().addScaledVector(M,.29/et);i.clear(P.p,q)&&g.copy(q)}}let V=C>0?P.p.distanceTo(g)/C:0;P.p.copy(g),b(P,V,C,V>.11?P.velocity:l),(P.p.distanceToSquared(u)>.014**2||P.gait>.028)&&(k=!1)}return k&&A.gait<=.028}function I(w,E){o.visible=r[0].hp>0&&!r[0].inside&&!r[0].stowed,o.updateWorldMatrix(!0,!1),a.animate(w,E,o.matrixWorld)}return{group:e,members:r,reset:_,beginOrder:S,follow:L,animateFlag:I,poseMember:b,standPoint(w,E,C){return C.copy(v(w,E))},get targets(){let w=r.filter(E=>E.hp>0&&!E.inside&&E.unit.visible).map(E=>E.target);return r[0].hp>0&&!r[0].inside&&r[0].unit.visible&&o.visible&&w.push(a.mesh),w},faceThreat(w){l.lerp(w,.18).normalize()}}}var my=20,Mh=.97,Ec=[[.16,.22],[.24,.31],[.43,.32],[.66,.29],[.83,.24],[.94,.15],[.99,.055],[1,0]],Sh=new qi(Ec.map(([i,t])=>new tt(t,i)),my),Lf=[],bc=new vt,gy=new vt("#153e30"),xy=new vt("#46714a"),Tc=Sh.attributes.position;for(let i=0;i<Tc.count;i++){let t=Tc.getY(i),e=.055*Math.sin(Math.atan2(Tc.getX(i),Tc.getZ(i))*5+t*4);bc.copy(gy).lerp(xy,wt.clamp(t*.86+e,0,1)),Lf.push(bc.r,bc.g,bc.b)}Sh.setAttribute("color",new Gt(Lf,3));var _y=[0,.47,.19,.71,.39,.9],ti=2/3,co=13,lo=16,Cn=8,jn=new O,ns=new O,wc=new O,un=new O,Ys=new O,Df=new O,Nf=new O,is=new O,Ac=new O;function Xs(i,t,e,n=0,s=0){let r=[],o=[];for(let u=0;u<=4;u++)for(let h=0;h<=32;h++){let f=h*Math.PI*2/32,d=u/4,g=Math.cos(f)*i*d+n,M=Math.sin(f)*t*d+s,m=.64+M,p=Ec.findIndex(([w])=>w>=m),[x,y]=Ec[p-1],[v,b]=Ec[p],S=wt.lerp(y,b,(m-x)/(v-x)),_=Math.sqrt(Math.max(1e-4,S**2-g**2))*Mh;if(r.push(g,M,_+e),u===4||h===32)continue;let T=u*33+h,L=T+1,I=T+32+1;o.push(T,I,L,L,I,I+1)}let l=new ae;return l.setAttribute("position",new Gt(r,3)),l.setIndex(o),l.computeVertexNormals(),l}var qs={lid:Xs(.268,.177,.008),white:Xs(.241,.147,.015),iris:Xs(.106,.119,.024,.008,-.003),pupil:Xs(.046,.08,.03,.008,-.003),glint:Xs(.025,.027,.035,-.022,.037),smallGlint:Xs(.009,.011,.035,.054,-.04)};function Uf(i){let t={value:new Te(i.normal.x,i.normal.y,i.normal.z,i.constant)};function e(n){let s=new we({...n,clippingPlanes:[i],clipShadows:!0});return s.onBeforeCompile=r=>{r.uniforms.riftPlane=t,r.vertexShader=`varying vec3 enemyWorld;
`+r.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
 enemyWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;`),r.fragmentShader=`varying vec3 enemyWorld; uniform vec4 riftPlane;
`+r.fragmentShader.replace("#include <tonemapping_fragment>",`float contact = 1.0 - smoothstep(0.006, 0.062, dot(vec4(enemyWorld, 1.0), riftPlane));
         gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.12, 1.7, 0.27), contact);
         #include <tonemapping_fragment>`)},s.customProgramCacheKey=()=>"rift-contact-v1",s}return{skin:e({color:"#ffffff",vertexColors:!0}),limb:e({color:"#28543b"}),lid:e({color:"#214333"}),white:e({color:"#d5dfb1"}),iris:e({color:"#779444"}),pupil:e({color:"#152c24"}),glint:e({color:"#f1f4d3",emissive:"#617a39",emissiveIntensity:.25})}}function yy(){let i=new ae;i.setAttribute("position",new Me(new Float32Array(lo*Cn*3),3).setUsage(ln)),i.setAttribute("normal",new Me(new Float32Array(lo*Cn*3),3).setUsage(ln));let t=[];for(let e=0;e<lo-1;e++)for(let n=0;n<Cn;n++){let s=e*Cn+n,r=e*Cn+(n+1)%Cn;t.push(s,r,s+Cn,r,r+Cn,s+Cn)}return i.setIndex(t),i.boundingSphere=new on(new O(0,.25,0),1.5),i}function vh(i,t,e,n){let s=1-t;i.copy(un).multiplyScalar(s**3).addScaledVector(Ys,3*s*s*t).addScaledVector(Df,3*s*t*t).addScaledVector(Nf,t**3);let r=Math.sin(t*7.2-e)*Math.sin(t*Math.PI)*.045*ti;return i.x+=Math.cos(n)*r,i.z-=Math.sin(n)*r,i}function Ff(i,t){let e=new jt,n=new jt;e.name="\u72EC\u773C\u89E6\u624B\u602A",e.add(n);function s(p,x,y){let v=new ie(x,y);return v.castShadow=!0,p.add(v),v}let r=new ie(Sh,i.skin);r.scale.z=Mh,r.castShadow=!0,n.add(r);let o=s(n,qs.lid,i.lid);o.position.y=.64;let a=new jt;a.position.y=.64,n.add(a),s(a,qs.white,i.white);let c=new jt;a.add(c),s(c,qs.iris,i.iris),s(c,qs.pupil,i.pupil),s(c,qs.glint,i.glint),s(c,qs.smallGlint,i.glint);let l=new jt;n.add(l);let u=_y.map((p,x)=>{let y=(x+.5)*Math.PI/3,v=yy(),b=new ie(v,i.limb);return b.castShadow=!0,e.add(b),{phase:p,turn:y,mesh:b,planted:new O,takeoff:new O,landing:new O,tip:new O,swinging:!1}}),h=.72+Math.sin(t*5.17)*.025;e.scale.setScalar(h);let f=0,d=0;function g(p,x,y){let v=e.rotation.y,b=Math.sin(p.turn)*(.22+(.44-.22)*ti),S=Math.cos(p.turn)*(.2+(.38-.2)*ti)+x*ti,_=e.position.x+(b*Math.cos(v)+S*Math.sin(v))*h,T=e.position.z+(S*Math.cos(v)-b*Math.sin(v))*h;return y.set(_,me(_,T)+.018,T)}function M(p,x,y){e.scale.setScalar(h),e.position.set(p,me(p,x),x),e.rotation.y=y,f=0,d=0;for(let v of u)g(v,0,v.planted),v.takeoff.copy(v.planted),v.landing.copy(v.planted),v.swinging=!1;m(0,0)}function m(p,x,y=-1){f+=p,d+=x;let v=f/(.58*ti),b=v*Math.PI*2+t*1.7;n.position.y=.013+Math.sin(b)*.012,n.scale.set(1+Math.sin(b)*.025,1-Math.sin(b)*.036,1),n.rotation.set(.035+Math.cos(b)*.025,0,Math.sin(b)*.035);let S=y<0?0:wt.smoothstep(y,0,.27)*(1-wt.smoothstep(y,.43,.74)),_=y<0?0:wt.smoothstep(y,.27,.4)*(1-wt.smoothstep(y,.43,.74));n.rotation.x+=-S*.1+_*.19;let T=(d+t*.74)%4.7/4.7;a.scale.y=1-.94*Math.exp(-(((T-.93)/.023)**2)),c.position.x=.01*Math.sin(d*1.7+t);let L=e.rotation.y,I=Math.cos(L),w=Math.sin(L);for(let E of u){let C=(v+E.phase)%1,A=C>=.6;A&&!E.swinging&&(E.takeoff.copy(E.planted),g(E,.34,E.landing)),!A&&E.swinging&&E.planted.copy(E.landing),E.swinging=A;let U=wt.clamp((C-.6)/.4,0,1),N=A?Math.sin(U*Math.PI)*.12*ti:0;E.tip.copy(E.planted),A&&E.tip.lerpVectors(E.takeoff,E.landing,wt.smoothstep(U,0,1));let k=(E.tip.x-e.position.x)/h,H=(E.tip.z-e.position.z)/h,P=k*I-H*w,B=H*I+k*w,V=(E.tip.y-e.position.y)/h+N;(E===u[0]||E===u[5])&&(P=wt.lerp(P,Math.sign(Math.sin(E.turn))*(.26-_*.08),S),B=wt.lerp(B,.18+_*.67,S),V=wt.lerp(V,.64-_*.43,S)),un.set(Math.sin(E.turn)*.22,.215+n.position.y,Math.cos(E.turn)*.2),Ys.set(Math.sin(E.turn)*.64+Math.cos(E.turn)*.07,.14+N*.7,Math.cos(E.turn)*.57-Math.sin(E.turn)*.07),Ys.x=un.x+(Ys.x-un.x)*ti,Ys.z=un.z+(Ys.z-un.z)*ti,Df.set(un.x+(P-un.x)*1.1-Math.cos(E.turn)*.025*ti,V+.01+N*.45,un.z+(B-un.z)*1.1+Math.sin(E.turn)*.025*ti),Nf.set(un.x+(P-un.x)*.98,V+.026,un.z+(B-un.z)*.98);let X=E.mesh.geometry.attributes.position,et=E.mesh.geometry.attributes.normal,q=b-E.phase*5;for(let Z=0;Z<lo;Z++){let rt=Math.min(1,Z/(co-1));vh(is,rt,q,E.turn),vh(Ac,Math.min(1,rt+.01),q,E.turn),Z>=co-1?(vh(Ac,rt-.01,q,E.turn),jn.subVectors(is,Ac)):jn.subVectors(Ac,is),jn.normalize(),ns.set(jn.z,0,-jn.x).normalize(),ns.lengthSq()<.001&&ns.set(1,0,0),wc.crossVectors(jn,ns).normalize();let ct=Math.max(0,Z-co+1)/(lo-co)*Math.PI/2,at=Z<co?.069*(1-rt)+.014:.014*Math.cos(ct);is.addScaledVector(jn,.014*Math.sin(ct));for(let xt=0;xt<Cn;xt++){let Wt=xt*Math.PI*2/Cn,Pt=ns.x*Math.cos(Wt)+wc.x*Math.sin(Wt),Ut=ns.y*Math.cos(Wt)+wc.y*Math.sin(Wt),Yt=ns.z*Math.cos(Wt)+wc.z*Math.sin(Wt),ht=Z*Cn+xt;X.setXYZ(ht,is.x+Pt*at,is.y+Ut*at,is.z+Yt*at),et.setXYZ(ht,Pt*Math.cos(ct)+jn.x*Math.sin(ct),Ut*Math.cos(ct)+jn.y*Math.sin(ct),Yt*Math.cos(ct)+jn.z*Math.sin(ct))}}X.needsUpdate=!0,et.needsUpdate=!0}}return{group:e,body:n,stains:l,kind:"enemy",bodyDepth:Mh,reset:M,pose:m,radius:.65*h}}function Of(i,t){let e=new jt;e.name="\u7EFF\u8272\u7A7A\u95F4\u88C2\u7F1D",e.position.copy(i),e.rotation.y=Math.atan2(t.x,t.z);let n={value:0},s={value:0},r=new wn({transparent:!0,depthWrite:!1,side:an,forceSinglePass:!0,uniforms:{time:n,aperture:s},vertexShader:`
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
    `}),o=new ie(new Yi(2.8,2.8),r);o.position.y=1.06,e.add(o);let a=new sn({color:"#7dffa0",transparent:!0,depthWrite:!1}),c=new bn(new Pr(.028),a,18);c.frustumCulled=!1,e.add(c);let l=new Ce;function u(h,f,d){n.value=h,s.value=Math.max(f,d*.026),e.visible=d>.001,o.scale.y=d,o.position.y=1.06*d,a.opacity=Math.min(1,f*1.6);for(let g=0;g<c.count;g++){let M=(h*(.23+g*.003)+g*.618)%1,m=g%2?1:-1,p=.1+M*2.1,x=Math.sin(M*Math.PI)**.68;l.position.set(m*(.35*x*f+.1*Math.sin(M*Math.PI)),p*d,Math.sin(g*2.39+h)*.09),l.rotation.set(h+g,g*1.3,h*.8),l.scale.setScalar(Math.sin(M*Math.PI)*(.55+g%3*.32)*f),l.updateMatrix(),c.setMatrixAt(g,l.matrix)}c.instanceMatrix.needsUpdate=!0}return u(0,0,0),{group:e,update:u}}var vy=[_h.slice().reverse().filter(i=>i.z>=-6.65),_h.filter(i=>i.z<=8.7)],My=vy.map((i,t)=>{let e=[0];for(let n=1;n<i.length;n++)e.push(e[n-1]+Math.hypot(i[n].x-i[n-1].x,i[n].z-i[n-1].z));return{road:i,distances:e,sign:t?-1:1}});function Cc(i,t,e,n=0){let{road:s,distances:r,sign:o}=My[i],a=0,c=s.length-1;for(;c-a>1;){let d=a+c>>1;r[d]>t?c=d:a=d}let l=s[a],u=s[c],h=wt.clamp((t-r[a])/(r[c]-r[a]),0,1);e.x=wt.lerp(l.x,u.x,h),e.z=wt.lerp(l.z,u.z,h),e.dx=wt.lerp(l.dz,u.dz,h)*o,e.dz=-wt.lerp(l.dx,u.dx,h)*o;let f=Math.hypot(e.dx,e.dz);return e.dx/=f,e.dz/=f,t<0&&(e.x+=e.dx*t,e.z+=e.dz*t),e.x+=e.dz*n,e.z-=e.dx*n,e}function Bf(){let i=new jt;i.name="\u6751\u9053\u5165\u4FB5\u6CE2\u6B21";let t={},e=[0,1].map(d=>{Cc(d,0,t);let g=new O(t.x,me(t.x,t.z),t.z),M=new O(t.dx,0,t.dz),m=new mn().setFromNormalAndCoplanarPoint(M,g),p=Of(g,M);return i.add(p.group),{rift:p,origin:g,paints:Uf(m),used:!1}}),n=Array.from({length:24},(d,g)=>{let M=+(g>=12),m=Ff(e[M].paints,g);return i.add(m.group),{...m,side:M,index:g,active:!1,inside:!1,hp:Kt.enemyHp,p:new tt,roadDistance:-.76,mode:"road",route:[],routeIndex:0,velocity:new tt,age:0,swing:-1,hit:!1,target:null,cooldown:.4,repathTimer:0,speed:1.65+.17*Math.sin(g*2.3),lane:Math.sin(g*2.77)*.05}}),s={wave:1,waves:Kt.waves.length,total:Kt.waves[0].count,emitted:0,active:0,killed:0,phase:"opening",countdown:0,complete:!1},r=0,o=5.5,a=1/0,c=0;function l(){Object.assign(s,{wave:1,total:Kt.waves[0].count,emitted:0,active:0,killed:0,phase:"opening",countdown:0,complete:!1}),r=0,o=5.5,a=1/0,c=0;for(let d of n)d.active=!1,d.inside=!1,d.consumed=!1,d.group.visible=!1,d.stains.clear();e.forEach(d=>{d.used=!1,d.rift.update(0,0,0)})}function u(d){d.active&&(d.active=!1,d.hp=0,d.group.visible=!1,s.killed++)}function h(d){let g=n.find(M=>!M.active&&M.side===d);return!g||(Cc(d,-.76,t,g.lane),n.some(M=>M.active&&!M.inside&&Math.hypot(M.p.x-t.x,M.p.y-t.z)<.94))?!1:(Object.assign(g,{active:!0,inside:!1,consumed:!1,hp:Kt.enemyHp,mode:"road",roadDistance:-.76,routeIndex:0,age:0,swing:-1,hit:!1,target:null,strikeTarget:null,lastAttacker:null,stun:0,repathTimer:0,cooldown:.5}),g.route.length=0,g.velocity.set(0,0),g.p.set(t.x,t.z),g.reset(t.x,t.z,Math.atan2(t.dx,t.dz)),g.stains.clear(),g.group.visible=!0,e[d].used=!0,s.emitted++,s.active++,o=r+Kt.waves[s.wave-1].interval,s.emitted===s.total&&(a=r+1.75),!0)}function f(d){if(s.complete)return;if(r+=d,s.active=n.filter(x=>x.active).length,s.emitted<s.total&&r>=o){let x=s.wave===3?s.emitted%2:0;h(x)}let g=wt.smoothstep(r,.28,1.4),M=wt.smoothstep(r-a,0,.72),m=g*(1-M)*(1+.025*Math.sin(r*3.4)),p=wt.smoothstep(r,.03,.44)*(1-wt.smoothstep(r-a,.4,.95));if(e.forEach((x,y)=>{let v=y===0||s.wave===3;x.rift.update(r,v?m:0,v?p:0)}),s.phase=r<5.5?"opening":r<a?"spawning":r<a+.95?"closing":s.active?"marching":"waiting",s.countdown=s.phase==="opening"?Math.max(0,Math.ceil(5.5-r)):0,s.phase==="waiting"){if(s.wave===Kt.waves.length){s.complete=!0,s.phase="complete";return}c+=d,s.countdown=Math.max(0,Math.ceil(8-c)),c>=8&&(s.wave++,s.total=Kt.waves[s.wave-1].count,s.emitted=0,r=0,o=5.5,a=1/0,c=0)}}return l(),{group:i,state:s,actors:n,update:f,reset:l,kill:u}}var Ic=class extends ie{constructor(t,e,n=!1,s=!1,r=1e4){let o=new ae;super(o,e),this.isMarchingCubes=!0;let a=this,c=new Float32Array(36),l=new Float32Array(36),u=new Float32Array(36);this.enableUvs=n,this.enableColors=s,this.init=function(x){this.resolution=x,this.isolation=80,this.size=x,this.size2=this.size*this.size,this.size3=this.size2*this.size,this.halfsize=this.size/2,this.delta=2/this.size,this.yd=this.size,this.zd=this.size2,this.field=new Float32Array(this.size3),this.normal_cache=new Float32Array(this.size3*3),this.palette=new Float32Array(this.size3*3),this.count=0;let y=r*3;this.positionArray=new Float32Array(y*3);let v=new Me(this.positionArray,3);v.setUsage(ln),o.setAttribute("position",v),this.normalArray=new Float32Array(y*3);let b=new Me(this.normalArray,3);if(b.setUsage(ln),o.setAttribute("normal",b),this.enableUvs){this.uvArray=new Float32Array(y*2);let S=new Me(this.uvArray,2);S.setUsage(ln),o.setAttribute("uv",S)}if(this.enableColors){this.colorArray=new Float32Array(y*3);let S=new Me(this.colorArray,3);S.setUsage(ln),o.setAttribute("color",S)}o.boundingSphere=new on(new O,1)};function h(x,y,v){return x+(y-x)*v}function f(x,y,v,b,S,_,T,L,I,w){let E=(v-T)/(L-T),C=a.normal_cache;c[y+0]=b+E*a.delta,c[y+1]=S,c[y+2]=_,l[y+0]=h(C[x+0],C[x+3],E),l[y+1]=h(C[x+1],C[x+4],E),l[y+2]=h(C[x+2],C[x+5],E),u[y+0]=h(a.palette[I*3+0],a.palette[w*3+0],E),u[y+1]=h(a.palette[I*3+1],a.palette[w*3+1],E),u[y+2]=h(a.palette[I*3+2],a.palette[w*3+2],E)}function d(x,y,v,b,S,_,T,L,I,w){let E=(v-T)/(L-T),C=a.normal_cache;c[y+0]=b,c[y+1]=S+E*a.delta,c[y+2]=_;let A=x+a.yd*3;l[y+0]=h(C[x+0],C[A+0],E),l[y+1]=h(C[x+1],C[A+1],E),l[y+2]=h(C[x+2],C[A+2],E),u[y+0]=h(a.palette[I*3+0],a.palette[w*3+0],E),u[y+1]=h(a.palette[I*3+1],a.palette[w*3+1],E),u[y+2]=h(a.palette[I*3+2],a.palette[w*3+2],E)}function g(x,y,v,b,S,_,T,L,I,w){let E=(v-T)/(L-T),C=a.normal_cache;c[y+0]=b,c[y+1]=S,c[y+2]=_+E*a.delta;let A=x+a.zd*3;l[y+0]=h(C[x+0],C[A+0],E),l[y+1]=h(C[x+1],C[A+1],E),l[y+2]=h(C[x+2],C[A+2],E),u[y+0]=h(a.palette[I*3+0],a.palette[w*3+0],E),u[y+1]=h(a.palette[I*3+1],a.palette[w*3+1],E),u[y+2]=h(a.palette[I*3+2],a.palette[w*3+2],E)}function M(x){let y=x*3;a.normal_cache[y]===0&&(a.normal_cache[y+0]=a.field[x-1]-a.field[x+1],a.normal_cache[y+1]=a.field[x-a.yd]-a.field[x+a.yd],a.normal_cache[y+2]=a.field[x-a.zd]-a.field[x+a.zd])}function m(x,y,v,b,S){let _=b+1,T=b+a.yd,L=b+a.zd,I=_+a.yd,w=_+a.zd,E=b+a.yd+a.zd,C=_+a.yd+a.zd,A=0,U=a.field[b],N=a.field[_],k=a.field[T],H=a.field[I],P=a.field[L],B=a.field[w],V=a.field[E],X=a.field[C];U<S&&(A|=1),N<S&&(A|=2),k<S&&(A|=8),H<S&&(A|=4),P<S&&(A|=16),B<S&&(A|=32),V<S&&(A|=128),X<S&&(A|=64);let et=Sy[A];if(et===0)return 0;let q=a.delta,Z=x+q,rt=y+q,ct=v+q;et&1&&(M(b),M(_),f(b*3,0,S,x,y,v,U,N,b,_)),et&2&&(M(_),M(I),d(_*3,3,S,Z,y,v,N,H,_,I)),et&4&&(M(T),M(I),f(T*3,6,S,x,rt,v,k,H,T,I)),et&8&&(M(b),M(T),d(b*3,9,S,x,y,v,U,k,b,T)),et&16&&(M(L),M(w),f(L*3,12,S,x,y,ct,P,B,L,w)),et&32&&(M(w),M(C),d(w*3,15,S,Z,y,ct,B,X,w,C)),et&64&&(M(E),M(C),f(E*3,18,S,x,rt,ct,V,X,E,C)),et&128&&(M(L),M(E),d(L*3,21,S,x,y,ct,P,V,L,E)),et&256&&(M(b),M(L),g(b*3,24,S,x,y,v,U,P,b,L)),et&512&&(M(_),M(w),g(_*3,27,S,Z,y,v,N,B,_,w)),et&1024&&(M(I),M(C),g(I*3,30,S,Z,rt,v,H,X,I,C)),et&2048&&(M(T),M(E),g(T*3,33,S,x,rt,v,k,V,T,E)),A<<=4;let at,xt,Wt,Pt=0,Ut=0;for(;Rc[A+Ut]!=-1;)at=A+Ut,xt=at+1,Wt=at+2,p(c,l,u,3*Rc[at],3*Rc[xt],3*Rc[Wt]),Ut+=3,Pt++;return Pt}function p(x,y,v,b,S,_){let T=a.count*3;if(a.positionArray[T+0]=x[b],a.positionArray[T+1]=x[b+1],a.positionArray[T+2]=x[b+2],a.positionArray[T+3]=x[S],a.positionArray[T+4]=x[S+1],a.positionArray[T+5]=x[S+2],a.positionArray[T+6]=x[_],a.positionArray[T+7]=x[_+1],a.positionArray[T+8]=x[_+2],a.material.flatShading===!0){let L=(y[b+0]+y[S+0]+y[_+0])/3,I=(y[b+1]+y[S+1]+y[_+1])/3,w=(y[b+2]+y[S+2]+y[_+2])/3;a.normalArray[T+0]=L,a.normalArray[T+1]=I,a.normalArray[T+2]=w,a.normalArray[T+3]=L,a.normalArray[T+4]=I,a.normalArray[T+5]=w,a.normalArray[T+6]=L,a.normalArray[T+7]=I,a.normalArray[T+8]=w}else a.normalArray[T+0]=y[b+0],a.normalArray[T+1]=y[b+1],a.normalArray[T+2]=y[b+2],a.normalArray[T+3]=y[S+0],a.normalArray[T+4]=y[S+1],a.normalArray[T+5]=y[S+2],a.normalArray[T+6]=y[_+0],a.normalArray[T+7]=y[_+1],a.normalArray[T+8]=y[_+2];if(a.enableUvs){let L=a.count*2;a.uvArray[L+0]=x[b+0],a.uvArray[L+1]=x[b+2],a.uvArray[L+2]=x[S+0],a.uvArray[L+3]=x[S+2],a.uvArray[L+4]=x[_+0],a.uvArray[L+5]=x[_+2]}a.enableColors&&(a.colorArray[T+0]=v[b+0],a.colorArray[T+1]=v[b+1],a.colorArray[T+2]=v[b+2],a.colorArray[T+3]=v[S+0],a.colorArray[T+4]=v[S+1],a.colorArray[T+5]=v[S+2],a.colorArray[T+6]=v[_+0],a.colorArray[T+7]=v[_+1],a.colorArray[T+8]=v[_+2]),a.count+=3}this.addBall=function(x,y,v,b,S,_){let T=Math.sign(b);b=Math.abs(b);let L=_!=null,I=new vt(x,y,v);if(L)try{I=_ instanceof vt?_:Array.isArray(_)?new vt(Math.min(Math.abs(_[0]),1),Math.min(Math.abs(_[1]),1),Math.min(Math.abs(_[2]),1)):new vt(_)}catch{I=new vt(x,y,v)}let w=this.size*Math.sqrt(b/S),E=v*this.size,C=y*this.size,A=x*this.size,U=Math.floor(E-w);U<1&&(U=1);let N=Math.floor(E+w);N>this.size-1&&(N=this.size-1);let k=Math.floor(C-w);k<1&&(k=1);let H=Math.floor(C+w);H>this.size-1&&(H=this.size-1);let P=Math.floor(A-w);P<1&&(P=1);let B=Math.floor(A+w);B>this.size-1&&(B=this.size-1);let V,X,et,q,Z,rt,ct,at,xt,Wt,Pt;for(et=U;et<N;et++)for(Z=this.size2*et,at=et/this.size-v,xt=at*at,X=k;X<H;X++)for(q=Z+this.size*X,ct=X/this.size-y,Wt=ct*ct,V=P;V<B;V++)if(rt=V/this.size-x,Pt=b/(1e-6+rt*rt+Wt+xt)-S,Pt>0){this.field[q+V]+=Pt*T;let Ut=Math.sqrt((V-A)*(V-A)+(X-C)*(X-C)+(et-E)*(et-E))/w,Yt=1-Ut*Ut*Ut*(Ut*(Ut*6-15)+10);this.palette[(q+V)*3+0]+=I.r*Yt,this.palette[(q+V)*3+1]+=I.g*Yt,this.palette[(q+V)*3+2]+=I.b*Yt}},this.addPlaneX=function(x,y){let v=this.size,b=this.yd,S=this.zd,_=this.field,T,L,I,w,E,C,A,U=v*Math.sqrt(x/y);for(U>v&&(U=v),T=0;T<U;T++)if(C=T/v,w=C*C,E=x/(1e-4+w)-y,E>0)for(L=0;L<v;L++)for(A=T+L*b,I=0;I<v;I++)_[S*I+A]+=E},this.addPlaneY=function(x,y){let v=this.size,b=this.yd,S=this.zd,_=this.field,T,L,I,w,E,C,A,U,N=v*Math.sqrt(x/y);for(N>v&&(N=v),L=0;L<N;L++)if(C=L/v,w=C*C,E=x/(1e-4+w)-y,E>0)for(A=L*b,T=0;T<v;T++)for(U=A+T,I=0;I<v;I++)_[S*I+U]+=E},this.addPlaneZ=function(x,y){let v=this.size,b=this.yd,S=this.zd,_=this.field,T,L,I,w,E,C,A,U,N=v*Math.sqrt(x/y);for(N>v&&(N=v),I=0;I<N;I++)if(C=I/v,w=C*C,E=x/(1e-4+w)-y,E>0)for(A=S*I,L=0;L<v;L++)for(U=A+L*b,T=0;T<v;T++)_[U+T]+=E},this.setCell=function(x,y,v,b){let S=this.size2*v+this.size*y+x;this.field[S]=b},this.getCell=function(x,y,v){let b=this.size2*v+this.size*y+x;return this.field[b]},this.blur=function(x=1){let y=this.field,v=y.slice(),b=this.size,S=this.size2;for(let _=0;_<b;_++)for(let T=0;T<b;T++)for(let L=0;L<b;L++){let I=S*L+b*T+_,w=v[I],E=1;for(let C=-1;C<=1;C+=2){let A=C+_;if(!(A<0||A>=b))for(let U=-1;U<=1;U+=2){let N=U+T;if(!(N<0||N>=b))for(let k=-1;k<=1;k+=2){let H=k+L;if(H<0||H>=b)continue;let P=S*H+b*N+A,B=v[P];E++,w+=x*(B-w)/E}}}y[I]=w}},this.reset=function(){for(let x=0;x<this.size3;x++)this.normal_cache[x*3]=0,this.field[x]=0,this.palette[x*3]=this.palette[x*3+1]=this.palette[x*3+2]=0},this.update=function(){this.count=0;let x=this.size-2;for(let y=1;y<x;y++){let v=this.size2*y,b=(y-this.halfsize)/this.halfsize;for(let S=1;S<x;S++){let _=v+this.size*S,T=(S-this.halfsize)/this.halfsize;for(let L=1;L<x;L++){let I=(L-this.halfsize)/this.halfsize,w=_+L;m(I,T,b,w,this.isolation)}}}this.geometry.setDrawRange(0,this.count),o.getAttribute("position").needsUpdate=!0,o.getAttribute("normal").needsUpdate=!0,this.enableUvs&&(o.getAttribute("uv").needsUpdate=!0),this.enableColors&&(o.getAttribute("color").needsUpdate=!0),this.count/3>r&&console.warn("THREE.MarchingCubes: Geometry buffers too small for rendering. Please create an instance with a higher poly count.")},this.init(t)}},Sy=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),Rc=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);var Lc=["#98382b","#2d7845"],by=new O(0,1,0),zn=new O,zf=new pe,Ty=new bi(1,8,5),Pc=Lc.map(i=>new Is({color:i,roughness:.62,metalness:0,clearcoat:.08,clearcoatRoughness:.58})),Ve=30,kf=Ve*Ve*12;function Vf(i){let t=new jt,e=new jt;t.name="\u9ECF\u7A20\u878D\u5408\u8840\u6D46",e.name="\u8FDE\u7247\u5730\u8868\u8840\u6DB2",e.renderOrder=-1,i.add(t,e);let n=Array.from({length:10},()=>{let w=new Ic(28,Pc[0],!1,!1,2500);return w.isolation=36,w.visible=!1,w.frustumCulled=!1,t.add(w),{mesh:w,active:!1,age:0,nodes:[],alien:!1,heavy:!1}}),s=new bn(Ty,Pc[0].clone(),128);s.material.color.set("#ffffff"),s.name="\u65AD\u5F00\u7684\u7EC6\u5C0F\u8840\u6EF4",s.frustumCulled=!1;for(let w=0;w<s.count;w++)s.setColorAt(w,new vt(Lc[0]));t.add(s);let r=Array.from({length:s.count},()=>({active:!1,p:new O,v:new O,radius:0,alien:!1})),o=Array.from({length:24},()=>{let w=new ae;for(let U of["position","normal","color"])w.setAttribute(U,new Me(new Float32Array(kf*3),3).setUsage(ln));w.setDrawRange(0,0);let E=new Is({vertexColors:!0,roughness:.68,clearcoat:.06,clearcoatRoughness:.6,metalness:0,transparent:!0,depthWrite:!1}),C={value:new tt};w.setAttribute("liquidDepth",new Me(new Float32Array(kf),1).setUsage(ln)),E.onBeforeCompile=U=>{U.uniforms.liquidOrigin=C,U.vertexShader=`attribute float liquidDepth; varying float bloodDepth; varying vec2 bloodWorld;
`+U.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 bloodDepth = liquidDepth; bloodWorld = (modelMatrix * vec4(position, 1.0)).xz;`),U.fragmentShader=`varying float bloodDepth; varying vec2 bloodWorld; uniform vec2 liquidOrigin;
`+U.fragmentShader.replace("#include <tonemapping_fragment>",`
          vec2 flow = bloodWorld - liquidOrigin;
          float arc = abs(flow.y + .11 * sin(flow.x * 7.0) + .16);
          float sheen = (1.0 - smoothstep(.009, .026, arc)) * exp(-flow.x * flow.x * 14.0)
            * smoothstep(.05, .13, bloodDepth);
          gl_FragColor.rgb += vec3(.025, .032, .021) * sheen;
          #include <tonemapping_fragment>`)},E.customProgramCacheKey=()=>"wet-pooled-blood-v1";let A=new ie(w,E);return A.visible=!1,A.frustumCulled=!1,A.receiveShadow=!0,e.add(A),{mesh:A,origin:C,active:!1,alien:!1,age:0,born:0,layer:0,sinkAt:0,goneAt:0,bounds:new kr,refresh:0,dirty:!1,blobs:[]}}),a=new Ce,c=new O,l=new O,u=new O,h=new vt,f=new vt,d=new vt,g=0,M=0,m=0,p=0;function x(){let w=o.filter(E=>E.active).sort((E,C)=>E.layer-C.layer);for(let E=0;E<w.length;E++){let C=w[E],A=Math.max(C.sinkAt,C.born+44);for(let U=0;U<E;U++)C.bounds.intersectsBox(w[U].bounds)&&(A=Math.max(A,w[U].goneAt+.08));C.sinkAt=A,C.goneAt=A+1.4}}function y(w,E,C,A){let U=0;for(let P of o)P.active&&P.alien!==A&&P.blobs.some(B=>Math.hypot(B.x-w,B.z-E)<B.r+C+.18)&&(U=Math.max(U,P.layer));let N=o.find(P=>P.active&&P.alien===A&&P.layer>=U&&m-P.born<=1.2&&P.blobs.some(B=>Math.hypot(B.x-w,B.z-E)<B.r+C+.28)&&P.blobs.every(B=>Math.abs(B.x-w)<2&&Math.abs(B.z-E)<2));N||(N=o.find(P=>!P.active)??o.reduce((P,B)=>B.layer<P.layer?B:P),N.blobs.length=0,N.alien=A,N.active=!0,N.mesh.visible=!0,N.born=m,N.age=0,N.layer=++p,N.mesh.renderOrder=N.layer,N.sinkAt=m+44,N.goneAt=N.sinkAt+1.4,N.mesh.position.y=0,N.bounds.makeEmpty(),N.mesh.geometry.setDrawRange(0,0),N.mesh.material.opacity=1,N.refresh=1/24);function k(P,B){let V=P.r*(P.start+(1-P.start)*wt.smoothstep(P.age,0,.48));P.r=Math.min(.62,Math.sqrt(P.r**2+B)),P.start=Math.min(1,V/P.r),P.age=0}let H=N.blobs.find(P=>Math.hypot(P.x-w,P.z-E)<.1);if(H)k(H,C**2*.7);else if(N.blobs.length<22)N.blobs.push({x:w,z:E,r:C,start:.38,age:0,seed:Math.random()*7});else{let P=N.blobs.reduce((B,V)=>Math.hypot(B.x-w,B.z-E)<Math.hypot(V.x-w,V.z-E)?B:V);k(P,C**2*.35)}for(let P of N.blobs)N.bounds.min.x=Math.min(N.bounds.min.x,P.x-P.r-.15),N.bounds.min.y=Math.min(N.bounds.min.y,P.z-P.r-.15),N.bounds.max.x=Math.max(N.bounds.max.x,P.x+P.r+.15),N.bounds.max.y=Math.max(N.bounds.max.y,P.z+P.r+.15);N.dirty=!0,x()}function v(w,E){if(!w.stains)return;let C=w.kind==="enemy";w.group.updateWorldMatrix(!0,!1),zf.copy(w.group.matrixWorld).invert(),zn.set(-E.x,0,-E.y).transformDirection(zf);let A=Math.atan2(zn.x,zn.z),U=[],N=[],k=C?.078:.047,H=C?.38:.21;for(let V=0;V<=3;V++)for(let X=0;X<=16;X++){let et=X/16*Math.PI*2,q=V/3*k*(1+.13*Math.sin(et*3+A)),Z=A+Math.cos(et)*q/(C?.3:.115);if(U.push(Math.sin(Z)*(C?.307:.116),H+Math.sin(et)*q,Math.cos(Z)*(C?.31*(w.bodyDepth??.79):.102)),V<3&&X<16){let rt=V*17+X;N.push(rt,rt+17,rt+1,rt+1,rt+17,rt+18)}}let P=new ae;P.setAttribute("position",new Gt(U,3)),P.setIndex(N),P.computeVertexNormals();let B=new ie(P,Pc[Number(C)]);for(w.stains.add(B);w.stains.children.length>5;){let V=w.stains.children[0];w.stains.remove(V),V.geometry.dispose()}}function b(w,E,C=!1){let A=w.kind==="enemy",U=w.group.position,N=n[g++%n.length];N.active=!0,N.age=0,N.nodes.length=0,N.alien=A,N.heavy=C,N.mesh.material=Pc[Number(A)],N.mesh.visible=!0;let k=U.clone().add(new O(-E.x*(C?0:.17),A?.34:.28,-E.y*(C?0:.17)));N.nodes.push({p:k.clone(),v:new O(0,.65,0),r:C?.145:.087,active:!0,branch:-1,segment:0});let H=Math.atan2(-E.x,-E.y),P=C?4:3;for(let B=0;B<P;B++){let V=C?B/P*Math.PI*2+Math.random()*.75:H+(B-1)*.67,X=C?1.65+Math.random()*1.15:1.65+Math.random()*.65,et=C?1.55+Math.random()*.8:1.2+Math.random()*.65;for(let q=1;q<=2;q++){let Z=q/2;N.nodes.push({p:k.clone().add(new O(Math.sin(V)*.055*Z,.015*Z,Math.cos(V)*.055*Z)),v:new O(Math.sin(V)*X*Z,et*(.7+Z*.3),Math.cos(V)*X*Z),r:(C?.095:.062)*(q===1?1:.76),active:!0,branch:B,segment:q})}}for(let B=0;B<(C?10:5);B++){let V=M++%r.length,X=r[V],et=C?Math.random()*Math.PI*2:H+(Math.random()-.5)*1.9,q=1.7+Math.random()*1.2;X.p.copy(k),X.v.set(Math.sin(et)*q,1.2+Math.random()*1.8,Math.cos(et)*q),X.radius=.012+Math.random()*.013,X.active=!0,X.alien=A,s.setColorAt(V,new vt(Lc[Number(A)]))}C||v(w,E),S(N)}function S(w){let E=w.mesh;l.setScalar(1/0),u.setScalar(-1/0);let C=w.nodes.filter(H=>H.active);if(!C.length){w.active=!1,E.visible=!1;return}for(let H of C)l.min(H.p),u.max(H.p);c.addVectors(l,u).multiplyScalar(.5);let A=.68,U=Math.max(.4,(u.x-l.x)*.5+.3,(u.z-l.z)*.5+.3,(u.y-l.y)*.5/A+.3);E.position.copy(c),E.scale.set(U,U*A,U),E.reset();let N=(H,P)=>{let B=P/(U*2);E.addBall(.5+(H.x-c.x)/(U*2),.5+(H.y-c.y)/(U*2*A),.5+(H.z-c.z)/(U*2),B**2*(E.isolation+12),12)};for(let H of C)N(H.p,H.r);let k=1-wt.smoothstep(w.age,.14,w.heavy?.42:.34);if(k>.04)for(let H of C){if(H.segment!==2)continue;let P=w.nodes.find(X=>X.branch===H.branch&&X.segment===1);if(!P?.active)continue;let B=P.p.distanceTo(H.p),V=Math.min(5,Math.ceil(B/.07));for(let X=1;X<V;X++)zn.lerpVectors(P.p,H.p,X/V),N(zn,Math.min(H.r,P.r)*(.45+k*.38))}E.update()}function _(w,E,C){let A=100;for(let U of w.blobs){let N=Math.atan2(C-U.z,E-U.x),k=U.r*(U.start+(1-U.start)*wt.smoothstep(U.age,0,.48))*(1+.055*Math.sin(N*3+U.seed)+.035*Math.cos(N*5-U.seed)),H=Math.hypot(E-U.x,C-U.z)-k,P=Math.max(.13-Math.abs(A-H),0)/.13;A=Math.min(A,H)-P*P*.0325}return A}function T(w){let E=1/0,C=-1/0,A=1/0,U=-1/0;for(let ct of w.blobs)E=Math.min(E,ct.x-ct.r-.14),C=Math.max(C,ct.x+ct.r+.14),A=Math.min(A,ct.z-ct.r-.14),U=Math.max(U,ct.z+ct.r+.14);let N=[],k=(C-E)/Ve,H=(U-A)/Ve;for(let ct=0;ct<=Ve;ct++)for(let at=0;at<=Ve;at++){let xt=E+at*k,Wt=A+ct*H,Pt=_(w,xt,Wt),Ut=wt.smoothstep(-Pt,0,.13);N.push({x:xt,z:Wt,d:Pt,y:me(xt,Wt)+.009+Ut*.006,nx:0,ny:1,nz:0})}for(let ct=0;ct<=Ve;ct++)for(let at=0;at<=Ve;at++){let xt=N[ct*(Ve+1)+at],Wt=N[ct*(Ve+1)+Math.max(0,at-1)],Pt=N[ct*(Ve+1)+Math.min(Ve,at+1)],Ut=N[Math.max(0,ct-1)*(Ve+1)+at],Yt=N[Math.min(Ve,ct+1)*(Ve+1)+at];zn.set((Wt.y-Pt.y)/(Pt.x-Wt.x),1,(Ut.y-Yt.y)/(Yt.z-Ut.z)).normalize(),xt.nx=zn.x,xt.ny=zn.y,xt.nz=zn.z}w.origin.value.set((E+C)/2,(A+U)/2);let P=w.mesh.geometry,B=P.attributes.position,V=P.attributes.normal,X=P.attributes.color,et=P.attributes.liquidDepth;h.set(Lc[Number(w.alien)]),f.copy(h).multiplyScalar(.72);let q=0;function Z(ct){B.setXYZ(q,ct.x,ct.y,ct.z),V.setXYZ(q,ct.nx,ct.ny,ct.nz),et.setX(q,-ct.d),d.copy(f).lerp(h,.28+.72*wt.smoothstep(-ct.d,0,.16)),X.setXYZ(q++,d.r,d.g,d.b)}function rt(ct,at,xt){let Wt=[],Pt=[ct,at,xt];for(let Ut=0;Ut<3;Ut++){let Yt=Pt[Ut],ht=Pt[(Ut+1)%3];if(Yt.d<=0&&Wt.push(Yt),Yt.d<=0!=ht.d<=0){let Mt=Yt.d/(Yt.d-ht.d),yt={d:0};for(let Nt of["x","y","z","nx","ny","nz"])yt[Nt]=wt.lerp(Yt[Nt],ht[Nt],Mt);Wt.push(yt)}}for(let Ut=1;Ut<Wt.length-1;Ut++)Z(Wt[0]),Z(Wt[Ut]),Z(Wt[Ut+1])}for(let ct=0;ct<Ve;ct++)for(let at=0;at<Ve;at++){let xt=ct*(Ve+1)+at,Wt=xt+1,Pt=xt+Ve+1,Ut=Pt+1;rt(N[xt],N[Pt],N[Wt]),rt(N[Wt],N[Pt],N[Ut])}P.setDrawRange(0,q),B.needsUpdate=V.needsUpdate=X.needsUpdate=et.needsUpdate=!0}function L(w){let E=Math.max(1,Math.ceil(w*60)),C=w/E;for(let A=0;A<E;A++){m+=C;for(let U of n)if(U.active){U.age+=C;for(let N of U.nodes)N.active&&(N.v.multiplyScalar(Math.exp(-C*.65)),N.v.y-=9.5*C,N.p.addScaledVector(N.v,C),N.p.y-N.r<=me(N.p.x,N.p.z)&&(y(N.p.x,N.p.z,N.r*(N.segment===0?3:2.65),U.alien),N.active=!1))}for(let U of r)U.active&&(U.v.y-=9.8*C,U.p.addScaledVector(U.v,C),U.p.y<=me(U.p.x,U.p.z)&&(y(U.p.x,U.p.z,U.radius*2.3,U.alien),U.active=!1));for(let U of o)if(U.active){U.age=m-U.born,U.refresh+=C;for(let N of U.blobs)N.age<.5&&(U.dirty=!0),N.age+=C}}for(let A of n)A.active&&S(A);for(let A=0;A<r.length;A++){let U=r[A];a.position.copy(U.p),a.quaternion.identity(),U.active?(zn.copy(U.v).normalize(),a.quaternion.setFromUnitVectors(by,zn),a.scale.set(U.radius,U.radius*1.6,U.radius)):a.scale.setScalar(0),a.updateMatrix(),s.setMatrixAt(A,a.matrix)}s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0);for(let A of o)A.active&&(A.dirty&&A.refresh>=1/24&&(T(A),A.dirty=!1,A.refresh=0),A.mesh.position.y=-wt.smoothstep(m,A.sinkAt,A.goneAt)*.04,m>=A.goneAt&&(A.active=!1,A.mesh.visible=!1))}function I(){m=0,p=0,n.forEach(w=>{w.active=!1,w.mesh.visible=!1}),o.forEach(w=>{w.active=!1,w.mesh.visible=!1,w.blobs.length=0,w.mesh.position.y=0}),r.forEach(w=>{w.active=!1}),L(0)}return I(),{blood:b,update:L,reset:I}}function wy(){let i=[[0,.13],[.08,.24],[.22,.285],[.4,.235],[.58,.17],[.75,.11],[.9,.05],[1,0]],t=12,e=[],n=[],s=[],r=new vt("#c9ff9b"),o=new vt("#59df65"),a=new vt("#087b38"),c=new vt;for(let[h,[f,d]]of i.entries())for(let g=0;g<t;g++){let M=g*Math.PI*2/t,m=d*(1+.075*Math.sin(g*2.3+h));if(e.push(Math.cos(M)*m+f*f*.1,f,Math.sin(M)*m*.86),c.copy(r).lerp(o,wt.smoothstep(f,.18,.64)).lerp(a,wt.smoothstep(f,.64,1)),n.push(c.r,c.g,c.b),h===i.length-1)continue;let p=h*t+g,x=h*t+(g+1)%t;s.push(p,p+t,x,x,p+t,x+t)}let l=e.length/3;e.push(0,0,0),n.push(r.r,r.g,r.b);for(let h=0;h<t;h++)s.push(l,h,(h+1)%t);let u=new ae;return u.setAttribute("position",new Gt(e,3)),u.setAttribute("color",new Gt(n,3)),u.setIndex(s),u.computeVertexNormals(),u}var Ay=wy(),Ey=new Xi(1,1);function Dc(i,t,{smoke:e=!0}={}){let n=new jt;n.name="\u7ACB\u4F53\u7EFF\u8272\u706B\u7130",i.add(n);let s={value:0},r=new we({vertexColors:!0,emissive:"#1b7432",emissiveIntensity:.45,transparent:!0,opacity:.86,depthWrite:!1});r.onBeforeCompile=u=>{u.uniforms.flameTime=s,u.vertexShader=`uniform float flameTime; varying float flameHeight;
`+u.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        float phase = flameTime * 5.2 + dot(instanceMatrix[3].xz, vec2(1.7, 1.1));
        flameHeight = position.y;
        float heightWeight = position.y * position.y;
        transformed.x += sin(phase + position.y * 7.0) * .13 * heightWeight;
        transformed.z += cos(phase * .83 + position.y * 6.0) * .10 * heightWeight;
        transformed.xz *= 1.0 + sin(phase * 1.3 + position.y * 12.0) * .08;
      `),u.fragmentShader=`varying float flameHeight;
`+u.fragmentShader.replace("#include <tonemapping_fragment>",`
      float core = 1.0 - smoothstep(.12, .58, flameHeight);
      gl_FragColor.rgb = gl_FragColor.rgb * .45 + vec3(.48, .85, .20) * core;
      gl_FragColor.a *= mix(.82, .18, smoothstep(.08, 1.0, flameHeight));
      #include <tonemapping_fragment>`)},r.customProgramCacheKey=()=>"translucent-fire-v2";let o=new bn(Ay,r,t.length*3);o.frustumCulled=!1,n.add(o);let a=e?new bn(Ey,new we({color:"#71816c",transparent:!0,opacity:.19,depthWrite:!1}),t.length*2):null;a&&(a.frustumCulled=!1,n.add(a));let c=new Ce;function l(u,h){s.value=u,n.visible=h>.001;let f=Math.sqrt(Math.min(1,Math.max(0,h)/.12));r.opacity=.86*f;for(let d=0;d<o.count;d++){let g=t[Math.floor(d/3)],M=d%3,m=u*(4.3+M*.6)+d*1.83,p=(u*(1.15+M*.13)+d*.381)%1,x=M===0?1:.25+.75*Math.sin(p*Math.PI),y=(.53+h*.64)*(M===0?1:.73)*x,v=(.35+h*1.65)*(M===0?1:.55+M*.1)*(.82+Math.sin(m)*.18)*x*(.8+Math.sin(d*2.77)*.19);c.position.set(g[0]+(M-1)*.1*h,g[1]+(M===0?0:p*(.16+h*.38)),g[2]+Math.sin(d*2.39)*.08*h),c.rotation.set(.08*Math.sin(m*.7),d*2.399+Math.sin(m*.4)*.25,.06*Math.cos(m)),c.scale.set(y*f,v*f,y*f),c.updateMatrix(),o.setMatrixAt(d,c.matrix)}if(o.instanceMatrix.needsUpdate=!0,a){for(let d=0;d<a.count;d++){let g=t[Math.floor(d/2)],M=(u*.34+d*.618)%1,m=Math.sin(M*Math.PI)*(.09+h*.24+M*.24)*h;c.position.set(g[0]+M*M*.43,g[1]+.35+M*(1+h*2),g[2]+Math.sin(d*1.7)*M*.14),c.rotation.set(d*.7,u*.2+d,d*.17),c.scale.set(m*1.1,m,m),c.updateMatrix(),a.setMatrixAt(d,c.matrix)}a.instanceMatrix.needsUpdate=!0}}return l(0,0),{group:n,update:l}}var Gf=new Xi(1,0),Cy={enemy:["#2d593b","#406b43","#254a35","#34573a","#d5dfb1"],villager:["#3b5970","#426881","#37566b","#caa366","#d6a578"],engineer:["#d47732","#e18a3d","#c96e31","#f2edd9","#d6a578"]},Hf=new O,Wf=new Ye;function Xf(i){let t=new jt;t.name="\u8840\u6D46\u4E0E\u7206\u6563\u788E\u7247",i.add(t);let e=Vf(t),n=new Ce,s=new bn(Gf,new we({flatShading:!0}),480);s.name="\u6B7B\u4EA1\u788E\u7247",s.frustumCulled=!1,s.castShadow=!0,s.receiveShadow=!0;for(let f=0;f<s.count;f++)s.setColorAt(f,new vt("#2d593b"));t.add(s);let r=Array.from({length:s.count},()=>({active:!1,p:new O,q:new Ye,velocity:new O,axis:new O,size:new O,spin:0,settled:!1,restAge:0,hold:0,support:0,bounces:0})),o=0;function a(f,d){e.blood(f,d,!0);let g=f.kind==="enemy",M=f.group.position,m=g?23:19,p=Cy[f.team==="engineers"?"engineer":f.kind];for(let x=0;x<m;x++){let y=o++%r.length,v=r[y],b=Math.random()*Math.PI*2,S=x<4,_=x<11,T=(g?.109:.079)*(S?1:_?.66:.37)*(.85+Math.random()*.3);v.size.set(T*(.72+Math.random()*.6),T*(.7+Math.random()*.6),T*(.65+Math.random()*.7)),v.p.copy(M).add(new O(Math.cos(b)*.1,.13+Math.random()*(g?.39:.29),Math.sin(b)*.1));let L=(S?1.1:1.7)+Math.random()*1.6;v.velocity.set(Math.cos(b)*L+d.x*.6,1.5+Math.random()*(S?1.4:2.1),Math.sin(b)*L+d.y*.6),v.axis.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),v.axis.lengthSq()<.001&&v.axis.set(1,0,0),v.q.setFromAxisAngle(v.axis,Math.random()*Math.PI*2),v.spin=(3+Math.random()*7)*(Math.random()<.5?-1:1),v.active=!0,v.settled=!1,v.restAge=0,v.hold=2.5+Math.random()*1.3,v.bounces=0;let I=S?p[x%3]:p[(x+Math.floor(Math.random()*3))%p.length];s.setColorAt(y,new vt(I))}}function c(f){let d=Gf.attributes.position,g=1/0;for(let M=0;M<d.count;M++)Hf.fromBufferAttribute(d,M).multiply(f.size).applyQuaternion(f.q),g=Math.min(g,Hf.y);return-g}function l(f){for(let d of r){if(!d.active)continue;let g=me(d.p.x,d.p.z);if(d.settled){d.restAge+=f;let M=wt.smoothstep(d.restAge,d.hold,d.hold+1.5);d.p.y=g+d.support-M*(d.support*2+.12),M===1&&(d.active=!1);continue}d.velocity.y-=f*8,d.p.addScaledVector(d.velocity,f),g=me(d.p.x,d.p.z),Wf.setFromAxisAngle(d.axis,d.spin*f),d.q.premultiply(Wf),!(d.p.y>g+Math.max(d.size.x,d.size.y,d.size.z)*1.4)&&(d.support=c(d),d.p.y<=g+d.support&&(d.p.y=g+d.support,d.bounces++,d.velocity.y=Math.abs(d.velocity.y)*.2,d.velocity.x*=.42,d.velocity.z*=.42,d.spin*=.4,(d.velocity.y<.65||d.bounces>=2)&&(d.settled=!0)))}}function u(f){e.update(f);let d=Math.max(1,Math.ceil(f*60));for(let g=0;g<d;g++)l(f/d);for(let g=0;g<r.length;g++){let M=r[g];n.position.copy(M.p),n.quaternion.copy(M.q),n.scale.copy(M.size),M.active||n.scale.setScalar(0),n.updateMatrix(),s.setMatrixAt(g,n.matrix)}s.instanceMatrix.needsUpdate=!0,s.instanceColor.needsUpdate=!0}function h(){e.reset(),r.forEach(f=>{f.active=!1}),u(0)}return h(),{blood:e.blood,death:a,update:u,reset:h}}function qf(i){let t=i.group,e=new jt;e.name="\u9636\u6BB5\u6027\u7ED3\u6784\u574D\u584C",t.add(e),t.updateWorldMatrix(!0,!0);let n=t.matrixWorld.clone().invert(),s=[];t.traverse(p=>{p.isMesh&&p.userData.breakStage&&s.push(p)});let r=new O,o=new O(0,1,0),a=new pe,c=new Ye,l=new Ye,u=0,h=s.map((p,x)=>{a.multiplyMatrices(n,p.matrixWorld);let y=p.geometry.clone().applyMatrix4(a);y.computeBoundingBox();let v=y.boundingBox.getCenter(new O),b=y.boundingBox.getSize(new O);y.translate(-v.x,-v.y,-v.z),y.computeBoundingSphere();let S=new O;if(p.userData.roofPanel){let E=y.attributes.position,C=y.index,A=E.count/2,U=new O,N=new O,k=new O;for(let H=0;H<C.count;H+=3){let P=C.getX(H),B=C.getX(H+1),V=C.getX(H+2);P>=A||B>=A||V>=A||(U.fromBufferAttribute(E,P),N.fromBufferAttribute(E,B),k.fromBufferAttribute(E,V),S.add(r.crossVectors(N.sub(U),k.sub(U))))}}else{let E=y.attributes.normal;for(let C=0;C<E.count;C++)S.add(r.fromBufferAttribute(E,C))}S.lengthSq()<.01&&(b.x<b.y&&b.x<b.z?S.set(1,0,0):b.z<b.y?S.set(0,0,1):S.set(0,1,0)),S.normalize(),S.y<0&&S.negate();let _=new Ye().setFromUnitVectors(S,o);c.setFromAxisAngle(o,Math.sin(x*2.39)*.65),_.premultiply(c);let T=y.attributes.position,L=1/0;for(let E=0;E<T.count;E++)r.fromBufferAttribute(T,E).applyQuaternion(_),L=Math.min(L,r.y);let I=new ie(y,p.material);I.castShadow=!0,I.receiveShadow=!0,I.visible=!1,e.add(I);let w=p.userData.roofPanel&&p.userData.breakStage===1?{duration:.3,target:new O(v.x-.065,v.y,i.spec.d/2+y.boundingSphere.radius+.18)}:null;return{source:p,mesh:I,origin:v,rest:_,support:-L+.015,exit:w,threshold:p.userData.breakStage,age:0,falling:!1,velocity:new O,active:!1}});function f(p,x){let y=i.spec.x+p*Math.cos(i.spec.angle)+x*Math.sin(i.spec.angle),v=i.spec.z+x*Math.cos(i.spec.angle)-p*Math.sin(i.spec.angle),b=me(y,v)-i.spec.floor;return Math.abs(p)<i.spec.w/2+.06&&Math.abs(x)<i.spec.d/2+.065?Math.max(.09,b):b}function d(){u=0,h.forEach(p=>{p.source.visible=!0,p.mesh.visible=!1,p.active=!1,p.falling=!1,p.age=0})}function g(p){let x=p.mesh.geometry.attributes.position,y=-1/0;for(let v=0;v<x.count;v++)r.fromBufferAttribute(x,v).applyQuaternion(p.mesh.quaternion),y=Math.max(y,f(p.mesh.position.x+r.x,p.mesh.position.z+r.z)-r.y+.018);return y}function M(p){p<u&&d(),p!==u&&(u=p,h.forEach((x,y)=>{if(x.threshold>u||x.active)return;x.source.visible=!1,x.mesh.position.copy(x.origin),x.mesh.quaternion.identity(),x.mesh.visible=!0,x.active=!0,x.falling=!0,x.age=0;let v=new O(x.origin.x,0,x.origin.z).normalize();x.velocity.copy(v).multiplyScalar(.22+y%3*.1),x.velocity.y=.25+y%4*.08}))}function m(p){let x=Math.max(1,Math.ceil(p*60)),y=p/x*.52;for(let v=0;v<x;v++)for(let b of h){if(!b.falling)continue;let S=b.exit?p/x:y;if(b.age+=S,b.exit&&b.age<=b.exit.duration){let L=wt.smoothstep(b.age,0,b.exit.duration);b.mesh.position.lerpVectors(b.origin,b.exit.target,L),b.mesh.position.y-=L*.045,b.mesh.quaternion.identity(),b.velocity.set(0,0,.08);continue}let _=b.age-(b.exit?.duration??0);b.velocity.y-=S*(b.exit?9.8:7.5),b.mesh.position.addScaledVector(b.velocity,S),b.mesh.quaternion.slerpQuaternions(l,b.rest,wt.smoothstep(_,0,b.exit?.35:.48));let T=f(b.mesh.position.x,b.mesh.position.z)+b.support;(b.mesh.position.y<T+.15||_>=1.25)&&(T=g(b)),(b.mesh.position.y<=T||_>=1.25)&&(b.mesh.quaternion.copy(b.rest),T=g(b),b.mesh.position.y=T,b.falling=!1)}}return d(),{setStage:M,update:m,reset:d}}function Yf(i){let{group:t,roof:e,door:n,planks:s,spec:r}=i,o={hp:Kt.baseHp,maxHp:Kt.baseHp,doorHp:Kt.doorHits,open:0,destroyed:!1,burnSpeed:0,stage:0,invasions:0,extinguishers:0,replenishmentBlocked:!1},a={value:0},c=[];t.traverse(X=>{X.isMesh&&(X.material=X.material.clone(),X.material.onBeforeCompile=et=>{et.uniforms.houseBurn=a,et.vertexShader=`varying vec3 housePoint;
`+et.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 housePoint = position;`),et.fragmentShader=`varying vec3 housePoint; uniform float houseBurn;
`+et.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
          float scorch = sin(housePoint.x * 3.7 + housePoint.y * 4.1) * .16
            + sin(housePoint.z * 4.3 - housePoint.y * 5.2) * .14;
          float mask = smoothstep(.03, .92, houseBurn + scorch * houseBurn * .9);
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.035, .044, .029), mask * .96);`).replace("#include <tonemapping_fragment>",`
        gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(.026, .030, .018), mask * .75);
        #include <tonemapping_fragment>`)},X.material.customProgramCacheKey=()=>"burnt-house-v1",c.push({mesh:X,p:X.position.clone(),r:X.rotation.clone(),visible:X.visible}))});let l=qf(i);t.updateMatrixWorld(!0);function u(X,et){let q=t.localToWorld(new O(X,0,et));return new tt(q.x,q.z)}let h=u(0,r.d/2+.82),f=u(0,r.d/2+.17),d=u(0,r.d/2-.28),g=new ie(new Tn(r.w+.1,r.h+.85,r.d+.12));g.position.y=(r.h+.85)/2,g.visible=!1,t.add(g);let M=new jt;M.name="\u57FA\u5730\u65D7\u5E1C";let m=new O(.12,r.h+.76,-.01);M.position.copy(m),t.add(M);let p=ve(M,"#927248",0,.66,0,.043,1.37,.043);p.material=p.material.clone();let x=Mc();x.mesh.position.y=1.28,x.mesh.scale.set(1.5,1.65,1.5),M.add(x.mesh);let y=[[-r.w*.4,.15,r.d*.42],[r.w*.39,.13,r.d*.41],[-r.w*.43,.45,-r.d*.2],[r.w*.42,.35,-r.d*.3],[0,.23,r.d/2+.04],[-.74,r.h+.12,.31],[.78,r.h+.08,-.28],[.13,r.h+.44,.06]],v=y.slice(5).map(X=>X[1]),b=Dc(t,y),S=[.32,.72,1.1].map((X,et)=>{let q=Dc(M,[[0,0,0]],{smoke:!1});return q.group.position.set(0,X,0),q.group.scale.setScalar(.2+et*.025),q}),_=["#927248","#74563b","#51422e","#302f23","#171e16"],T=new jt;n.add(T);for(let X=0;X<4;X++){let et=ve(T,"#342c22",.1+X*.1,.23+X%2*.13,.03,.012,.22+X%2*.12,.008,!1);et.rotation.z=X%2?.42:-.34}let L=new jt;t.add(L);for(let X=0;X<5;X++){let et=ve(L,"#614a32",-.28+X*.14,.05,r.d/2+.26+X%2*.16,.105,.035,.48);et.rotation.y=(X-2)*.39}let I=[g,x.mesh],w=0,E=0,C=0,A=0;function U(X=.6){w=Math.max(w,X)}function N(){o.destroyed||o.doorHp<=0||(o.doorHp--,E=.18)}function k(X){return o.destroyed||!X.active||X.consumed?!1:(X.consumed=!0,X.active=!1,X.inside=!1,X.mode="consumed",X.group.visible=!1,o.burnSpeed=Math.min(Kt.burnSpeedCap,o.burnSpeed+1),o.invasions++,!0)}function H(X=1){if(o.destroyed)return 0;let et=Math.min(o.burnSpeed,Math.max(0,Math.floor(X)));return o.burnSpeed-=et,et}function P(X){o.destroyed||(o.hp=Math.max(0,o.hp-o.burnSpeed*Kt.burnPerInvader*X),o.hp===0&&(o.destroyed=!0,o.doorHp=0,A=0)),w=Math.max(0,w-X),o.open=wt.damp(o.open,w>0?1:0,10,X)}function B(X,et){let q=1-o.hp/o.maxHp;o.stage=o.destroyed?4:q>=.75?3:q>=.5?2:q>=.25?1:0,a.value=[0,.16,.32,.52,.9][o.stage],l.setStage(o.stage),l.update(et),E=Math.max(0,E-et),n.rotation.y=-o.open*1.55+Math.sin(E*110)*E*.3,n.visible=o.doorHp>0,T.visible=o.doorHp<Kt.doorHits,T.children.forEach((at,xt)=>{at.visible=xt<(Kt.doorHits-o.doorHp)*2}),s.forEach((at,xt)=>{at.rotation.z=o.doorHp===1?xt%2?-.08:.11:0,at.position.y=.3-(o.doorHp===1&&xt===2?.075:0),at.visible=!(o.doorHp===1&&xt===3)}),L.visible=o.doorHp===0,y.slice(5).forEach((at,xt)=>{at[1]=o.stage<2?v[xt]:o.stage===2?r.h*.8:o.stage===3?.3:.12}),C=wt.damp(C,o.destroyed?1:o.burnSpeed>0?[.3,.42,.6,.84][o.stage]*(.28+.72*Math.sqrt(o.burnSpeed/Kt.burnSpeedCap)):0,2.4,et),b.update(X,C*(o.destroyed?Math.max(.18,1-A/12):1)),o.destroyed&&(A+=et);let Z=wt.smoothstep(A,.15,1.6),rt=u(.38,r.d/2+.45);M.position.set(wt.lerp(m.x,.38,Z),wt.lerp(m.y,me(rt.x,rt.y)-r.floor+.075,Z),wt.lerp(m.z,r.d/2+.45,Z)),M.rotation.x=Z*Math.PI/2,p.material.color.set(_[o.stage]);let ct=Math.min(1,C*3);x.setBurn(q*.7+wt.smoothstep(A,1.7,4.5)*.85,ct),M.visible=A<4.7,S.forEach((at,xt)=>{at.group.rotation.x=-M.rotation.x,at.update(X+xt*.7,o.stage>0?Math.min(.65,q*.5+A*.08)*ct:0)}),x.mesh.updateWorldMatrix(!0,!1),x.animate(X,et,x.mesh.matrixWorld)}function V(){Object.assign(o,{hp:Kt.baseHp,maxHp:Kt.baseHp,doorHp:Kt.doorHits,open:0,destroyed:!1,burnSpeed:0,stage:0,invasions:0,extinguishers:0,replenishmentBlocked:!1}),w=0,E=0,C=0,A=0,a.value=0,l.reset(),c.forEach(({mesh:X,p:et,r:q,visible:Z})=>{X.position.copy(et),X.rotation.copy(q),X.visible=Z}),e.position.set(0,0,0),e.rotation.set(0,0,0),M.position.copy(m),M.rotation.set(0,0,0),M.visible=!0,x.reset(),B(0,0)}return V(),{group:t,state:o,approach:h,entrance:f,inside:d,targets:I,strikeDoor:N,keepDoorOpen:U,enter:k,extinguish:H,advance:P,animate:B,reset:V}}function ho(i){let e=(o,a)=>`${o},${a}`;function n(o,a){let c=o.distanceTo(a),l=Math.max(1,Math.ceil(c/.1)),u=me(o.x,o.y);for(let h=0;h<=l;h++){let f=h/l,d=o.x+(a.x-o.x)*f,g=o.y+(a.y-o.y)*f,M=me(d,g);if(!i(d,g)||Math.abs(M-u)>.18)return!1;u=M}return!0}function s(o){let a=Math.round(o.x/.25),c=Math.round(o.y/.25),l=[];for(let u=-2;u<=2;u++)for(let h=-2;h<=2;h++){let f=new tt((a+u)*.25,(c+h)*.25);i(f.x,f.y)&&n(o,f)&&l.push(f)}return l.sort((u,h)=>u.distanceToSquared(o)-h.distanceToSquared(o))[0]}function r(o,a){if(n(o,a))return[a.clone()];let c=s(o),l=s(a);if(!c||!l)return null;let u=Math.floor((Math.min(o.x,a.x)-3)/.25),h=Math.ceil((Math.max(o.x,a.x)+3)/.25),f=Math.floor((Math.min(o.y,a.y)-3)/.25),d=Math.ceil((Math.max(o.y,a.y)+3)/.25),g=e(Math.round(l.x/.25),Math.round(l.y/.25)),M=e(Math.round(c.x/.25),Math.round(c.y/.25)),m=new Set([M]),p=new Map([[M,{p:c,cost:0,parent:null}]]),x=new Set;for(;m.size;){let y,v=1/0;for(let T of m){let L=p.get(T),I=L.cost+L.p.distanceTo(l);I<v&&(y=T,v=I)}if(y===g){let T=[a.clone()];for(let w=y;w;w=p.get(w).parent)T.unshift(p.get(w).p);let L=[],I=o;for(;T.length;){let w=T.length-1;for(;w>0&&!n(I,T[w]);)w--;I=T[w],L.push(I),T.splice(0,w+1)}return L}m.delete(y),x.add(y);let b=p.get(y),S=Math.round(b.p.x/.25),_=Math.round(b.p.y/.25);for(let T=-1;T<=1;T++)for(let L=-1;L<=1;L++){if(!T&&!L)continue;let I=S+T,w=_+L,E=e(I,w);if(I<u||I>h||w<f||w>d||x.has(E))continue;let C=new tt(I*.25,w*.25);if(!n(b.p,C))continue;let A=b.cost+b.p.distanceTo(C);A>=(p.get(E)?.cost??1/0)||(p.set(E,{p:C,cost:A,parent:y}),m.add(E))}}return null}return{clear:n,route:r}}function Zf({squad:i,world:t,base:e,spawn:n,defenders:s=[]}){let r=new tt(n.x,n.z),o={mode:"field",destination:null,settled:n,revision:0},a=ho(t.canServiceWalk),c=ho((C,A)=>t.canServiceWalk(C,A)&&!s.some(U=>U.hp>0&&!U.inside&&Math.hypot(C-U.p.x,A-U.p.y)<.34)),l=(C,A)=>c.route(C,A)??a.route(C,A),u=new Map,h=new Map,f=new tt,d=new tt,g=new tt,M=new tt,m=new tt,p=new tt,x=new tt,y=new tt,v=!1,b=()=>i.members.filter(C=>C.hp>0);function S(){v=!1,u.clear(),h.clear(),e.state.extinguishers=0,e.state.replenishmentBlocked=!1,o.mode="field",o.destination=null,o.revision++;for(let A of i.members)A.working=!1,A.workProgress=0,A.workTime=0;let C=[...t.tiles.values()].sort((A,U)=>Math.hypot(A.x-r.x,A.z-r.y)-Math.hypot(U.x-r.x,U.z-r.y))[0];o.settled=C??n}function _(C){for(let A of i.members)A.working=!1,A.workProgress=0,A.workTime=0,A.swing=-1,A.ready=0,A.combatHold=!1,A.serviceReroute=0;for(let[A,U]of C)u.set(A,U.map(N=>N.clone()))}function T(C){if(!C||!b().length||e.state.destroyed)return!1;let A=new tt(C.x-r.x,C.z-r.y).normalize();A.lengthSq()<.01&&A.set(0,1);let U=[];for(let[N,k]of b().entries()){let H=N===0?[0,0]:[N===1?-.31:.31,-.25],P=new tt(C.x+H[0]*A.y+H[1]*A.x,C.z-H[0]*A.x+H[1]*A.y),B=l(k.p,P)??l(k.p,new tt(C.x,C.z));if(!B)return!1;U.push([k,B])}return S(),_(U),o.mode="moving",o.destination=C,o.revision++,!0}function L(){if(e.state.destroyed||e.state.burnSpeed<=0||!b().length)return!1;if(v)return!0;let{w:C,d:A}=t.home.spec;e.group.updateWorldMatrix(!0,!1);let U=[[-C/2-.32,0],[C/2+.32,0],[0,A/2+.53]].map(([H,P])=>{let B=e.group.localToWorld(new O(H,0,P));return new tt(B.x,B.z)}),N=[],k=new Map;for(let H of b()){let P=U.slice().sort((V,X)=>V.distanceToSquared(H.p)-X.distanceToSquared(H.p)),B=null;for(let V of P){let X=l(H.p,V);if(X){B={site:V,route:X};break}}if(!B)return!1;N.push([H,B.route]),k.set(H,B.site),U.splice(U.indexOf(B.site),1)}S(),_(N);for(let[H,P]of k)h.set(H,P);return v=!0,o.mode="approaching",o.destination=null,o.revision++,e.state.replenishmentBlocked=!0,!0}function I(C,A){let U=u.get(C)??[];if(C.serviceReroute=Math.max(0,(C.serviceReroute??0)-A),U.length&&C.serviceReroute===0&&!c.clear(C.p,U[0])){let k=c.route(C.p,U.at(-1));k&&U.splice(0,U.length,...k),C.serviceReroute=.35}for(;U.length&&C.p.distanceTo(U[0])<.045;)U.shift();if(!U.length||C.combatHold)d.set(0,0);else{f.subVectors(U[0],C.p),d.copy(f).setLength(Math.min(2.55,f.length()*7)),m.copy(f).normalize();let k=null,H=1/0;for(let P of[...i.members,...s]){if(P===C||P.hp<=0||P.inside)continue;p.subVectors(P.p,C.p);let B=p.dot(m),V=p.x*m.y-p.y*m.x;B>-.06&&B<.78&&Math.abs(V)<.38&&p.lengthSq()<H&&(H=p.lengthSq(),k={along:B,lateral:V})}if(k){let P=Math.abs(k.lateral)>.02?-Math.sign(k.lateral):C.index%2?1:-1;x.set(m.y,-m.x).multiplyScalar(P),y.copy(C.p).addScaledVector(x,.24),t.canServiceWalk(y.x,y.y)||x.negate(),d.addScaledVector(x,1.2+(.78-k.along)*2).clampLength(0,2.55)}}C.velocity.lerp(d,1-Math.exp(-A*15)),g.copy(C.p).addScaledVector(C.velocity,A);for(let k of b()){if(k===C)continue;M.subVectors(g,k.p);let H=M.length();H>.001&&H<.27&&g.copy(k.p).addScaledVector(M,.27/H)}a.clear(C.p,g)||(g.copy(C.p),C.velocity.set(0,0));let N=A?g.distanceTo(C.p)/A:0;return C.p.copy(g),C.moving=N>.1,{arrived:U.length===0&&C.velocity.length()<.12,speed:N}}function w(C){v&&(e.state.destroyed||e.state.burnSpeed===0||!b().length)&&S();let A=0;for(let N of i.members){if(N.hp<=0){N.working=!1,N.workProgress=0,u.delete(N);continue}let{arrived:k,speed:H}=I(N,C);if(N.working=!!(v&&k&&!N.combatHold&&e.state.burnSpeed>0),N.working)for(A++,N.workTime+=C,N.workProgress+=C;N.workProgress+1e-9>=Kt.extinguishSeconds&&e.state.burnSpeed>0;)e.extinguish(1),N.workProgress-=Kt.extinguishSeconds;let P=h.get(N);N.working&&P?f.set(e.group.position.x-N.p.x,e.group.position.z-N.p.y):N.velocity.lengthSq()>.005?f.copy(N.velocity):f.set(Math.sin(N.unit.rotation.y),Math.cos(N.unit.rotation.y)),i.poseMember(N,H,C,f)}let U=i.members[0];U.hp>0&&r.copy(U.p),v?(e.state.extinguishers=A,e.state.burnSpeed===0?S():o.mode=A?"extinguishing":"approaching"):o.mode==="moving"&&!u.get(U)?.length&&(o.settled=o.destination,o.destination=null,o.mode="field",o.revision++)}function E(){S(),r.set(n.x,n.z),i.reset(r),o.mode="field",o.destination=null,o.settled=n}return E(),{anchor:r,state:o,orderMove:T,orderExtinguish:L,update:w,reset:E,cancel:S,service:a,get working(){return v}}}function $f({world:i,navigation:t,squad:e,waves:n,base:s,effects:r,spawn:o,engineers:a=null,engineerSpawn:c=o}){let l=new tt(o.x,o.z),u=Pf(l),h={mode:"field",result:null,resultAge:0,settled:o,destination:null,replenish:0,kills:0,message:"",revision:0},f=a?Zf({squad:a,world:i,base:s,spawn:c,defenders:e.members}):null,d=f?.service??ho(i.canServiceWalk),g=new Set([o]),M=[o];for(let z=0;z<M.length;z++)for(let J of M[z].neighbors)g.has(J)||(g.add(J),M.push(J));let m=[...g],p=m.reduce((z,J)=>Math.hypot(J.x-s.approach.x,J.z-s.approach.y)<Math.hypot(z.x-s.approach.x,z.z-s.approach.y)?J:z),x=new tt(p.x,p.z),y=new tt,v=new tt,b=new tt,S=new tt,_=new tt,T={},L=0,I=0,w=0,E=0,C=new Map,A=null,U=null,N=()=>e.members.filter(z=>z.hp>0),k=()=>a?.members.filter(z=>z.hp>0)??[],H=()=>[...N(),...k()],P=()=>H().filter(z=>!z.inside),B=()=>n.actors.filter(z=>z.active&&!z.inside);function V(){h.revision++}function X(z){if(h.result||!z||!g.has(z)||!N().length)return!1;if(["entering","recovering","exiting"].includes(h.mode))return U=z,rt();let J=t.route(l,new tt(z.x,z.z));if(!J)return!1;e.beginOrder(l),u.setRoute(J),h.destination=z,h.mode="moving";for(let gt of N())gt.swing=-1,gt.ready=0,gt.combatHold=!1,gt.battleStep.set(0,0);return V(),!0}function et(){if(h.result||s.state.destroyed||!N().length)return!1;if(["entering","recovering","exiting"].includes(h.mode))return rt();if(s.state.replenishmentBlocked)return!1;let z=new Map;for(let J of N()){let gt=d.route(J.p,s.approach);if(!gt)return!1;z.set(J,[...gt,s.entrance,s.inside])}return q(z),h.mode="returning",!0}function q(z){h.mode="entering",h.destination=null,h.replenish=0,E=0,C=new Map(N().map((J,gt)=>[J,{stage:0,delay:gt*.16,route:z.get(J)}])),u.setRoute([]);for(let J of N())J.swing=-1,J.ready=0,J.combatHold=!1,J.working=!1;V()}function Z(){let z=B();return m.filter(J=>!z.some(gt=>gt.p.distanceTo(new tt(J.x,J.z))<.9)).sort((J,gt)=>Math.hypot(J.x-s.entrance.x,J.z-s.entrance.y)-Math.hypot(gt.x-s.entrance.x,gt.z-s.entrance.y))[0]}function rt(){return h.result||!N().length||s.state.destroyed?!1:(h.mode==="exiting"||(h.replenish=0,h.mode="exiting",A=Z(),E=0,C=new Map(N().map((z,J)=>[z,{stage:z.inside?0:1,delay:J*.23}])),V()),!0)}function ct(z,J,gt){y.subVectors(J,z.p);let Et=y.length();z.stowed=z.p.distanceTo(s.entrance)<.78,v.copy(y).setLength(Math.min(2.35,Et*8)),z.velocity.lerp(v,1-Math.exp(-gt*14)),b.copy(z.p).addScaledVector(z.velocity,gt),!z.stowed&&!d.clear(z.p,b)&&(z.velocity.copy(v),b.copy(z.p).addScaledVector(z.velocity,gt));let Rt=gt?z.p.distanceTo(b)/gt:0;return z.p.copy(b),z.moving=Rt>.08,e.poseMember(z,Rt,gt,y),Et<.055}function at(z){if(E+=z,h.mode==="exiting"&&!A){if(A=Z(),!A){h.message="\u51FA\u53E3\u88AB\u5835\uFF0C\u6B63\u5728\u5BFB\u627E\u7A7A\u5730";return}h.message=""}let J=N().some(Rt=>!Rt.inside&&Rt.p.distanceTo(s.entrance)<1.1);(J||h.mode==="exiting")&&s.keepDoorOpen(),J&&h.mode==="returning"&&(h.mode="entering",V());let gt=!0,Et=0;for(let Rt of N()){let G=C.get(Rt);if(!G||E<G.delay){gt=!1;continue}let se=h.mode!=="exiting",Vt=A&&new tt(A.x,A.z),Zt=!se&&e.standPoint(Vt,Et++,new tt);if(!se&&!G.exitRoute){let te=d.route(Rt.inside?s.approach:Rt.p,Zt)??[Zt];G.route=Rt.inside?[s.entrance,s.approach,...te]:te,G.stage=0,G.exitRoute=!0}!se&&G.stage===0&&Rt.inside&&(Rt.p.copy(s.inside),Rt.inside=!1,Rt.unit.visible=!0);let st=G.route;G.stage<st.length&&ct(Rt,st[G.stage],z)&&G.stage++,G.stage<st.length?gt=!1:se&&(Rt.inside=!0,Rt.unit.visible=!1)}if(e.members[0].inside||l.copy(e.members[0].p),!!gt){if(h.message="",h.mode!=="exiting")h.mode="recovering",h.replenish=0;else if(l.set(A.x,A.z),h.settled=A,h.mode="field",e.beginOrder(l),U){let Rt=U;U=null,X(Rt)}V()}}function xt(z,J,gt){function Et(Zt,st,te=!1){if(Zt.hp<=0||st<=0)return 0;let kt=Math.min(st,Math.max(0,Zt.hp-Number(te)));return kt?(Zt.hp-=kt,Zt.lastHurt=L,Zt.lastFight=L,Zt.recoil=.22,Zt.hp<=0?(r.death(Zt,gt),Zt.unit.visible=!1,Zt.swing=-1,Zt.working=!1,V()):r.blood(Zt,gt),kt):0}let Rt=z.team==="engineers"?k:N;if(z.index!==0||Rt().length===1){Et(z,J);return}let G=Rt(),se=J/G.length,Vt=J;for(let Zt of G.slice(1))Vt-=Et(Zt,se);for(Vt-=Et(z,se,Rt().length>1);Vt>.001;){let Zt=Rt().filter(kt=>kt.index!==0);if(!Zt.length){Et(z,Vt);break}let st=Vt/Zt.length,te=0;for(let kt of Zt)te+=Et(kt,st);if(te<.001)break;Vt-=te}}function Wt(z,J,gt,Et=null){z.active&&(z.hp-=J,z.lastAttacker=Et,z.stun=.09,z.hp<=0?(r.death(z,gt),n.kill(z),h.kills++,V()):r.blood(z,gt))}function Pt(z,J,gt,Et){let Rt=J.anchor,G=J.state,se=z.members.filter(F=>F.hp>0),Vt=B(),Zt=Vt.slice().sort((F,R)=>F.p.distanceToSquared(Rt)-R.p.distanceToSquared(Rt))[0],st=F=>{let R=G.destination,K=Pe*.5+(F.combatHold?.08:0);return G.mode==="moving"&&R&&Math.abs(F.p.x-R.x)<=K&&Math.abs(F.p.y-R.z)<=K},te=G.mode==="moving"&&se.some(st),kt=G.mode==="approaching"||G.mode==="extinguishing",Jt=Zt&&Zt.p.distanceTo(Rt)<3.1&&(G.mode==="field"||te||kt);Et=Jt?Et+gt:0,Jt&&z.faceThreat(y.subVectors(Zt.p,Rt).normalize());for(let F of se){F.cooldown=Math.max(0,F.cooldown-gt),F.recoil=Math.max(0,F.recoil-gt),F.battleStep.set(0,0);let R=F.inside?null:Vt.slice().sort((ut,Tt)=>ut.p.distanceToSquared(F.p)-Tt.p.distanceToSquared(F.p))[0];F.targetEnemy=R;let K=!F.inside&&(G.mode==="field"||st(F)||kt),_t=R?R.p.distanceTo(F.p):1/0,pt=_t<F.attackReach,bt=K&&R&&(pt||Jt&&Et>F.slot*.075);F.ready=wt.damp(F.ready,bt?1:0,9,gt),F.combatHold=!!(K&&!F.inside&&R?.active&&F.ready>.1&&(pt||F.swing>=0&&_t<F.attackReach+.12)),F.canEngage=!!K,bt&&R&&(F.lastFight=L,F.combatFace.subVectors(R.p,F.p).normalize(),!F.inside&&_t<1.18&&F.battleStep.copy(F.combatFace).multiplyScalar(Math.min(.22,Math.max(0,_t-.58))));let Ct=R&&(F.inside||R.p.distanceTo(F.p)<2.2),lt=F.team!=="engineers"||G.mode==="field"&&!F.moving;!Ct&&lt&&L-Math.max(F.lastFight,F.lastHurt)>F.recoveryDelay&&(F.hp=Math.min(F.maxHp,F.hp+F.recoveryRate*gt))}return Et}function Ut(z){I=Pt(e,{anchor:l,state:h},z,I),a&&(w=Pt(a,f,z,w))}function Yt(z){for(let J of H()){let gt=J.targetEnemy,Et=J.canEngage;if(J.swing<0&&gt?.active&&Et&&J.ready>.45&&J.cooldown===0&&gt.p.distanceTo(J.p)<J.attackReach&&(J.swing=0,J.hit=!1,J.cooldown=J.attackInterval,J.strikeTarget=gt),!(J.swing<0)){if(J.swing+=z,!J.hit&&J.swing>=.29){J.hit=!0;let Rt=J.strikeTarget;Rt?.active&&Rt.p.distanceTo(J.p)<J.attackReach+.12&&(_.subVectors(Rt.p,J.p).normalize(),_.lengthSq()===0&&_.set(0,1),Wt(Rt,J.damage,_,J))}J.swing>=.7&&(J.swing=-1)}}}function ht(z,J,gt){if(y.subVectors(J,z.p),y.lengthSq()<1e-4)return 0;y.normalize(),v.copy(y).multiplyScalar(z.speed*wt.smoothstep(z.age,0,.42));for(let Rt of n.actors){if(Rt===z||!Rt.active||Rt.inside)continue;S.subVectors(z.p,Rt.p);let G=S.length(),se=(z.radius+Rt.radius)*.9+.02;G>0&&G<se+.16&&(v.addScaledVector(S,(se+.16-G)*2.5/G),S.dot(y)<0&&G<se+.2&&(v.x+=y.y*(z.index%2?-.55:.55),v.y-=y.x*(z.index%2?-.55:.55)))}v.clampLength(0,z.speed),z.velocity.lerp(v,1-Math.exp(-gt*10)),b.copy(z.p).addScaledVector(z.velocity,gt);for(let Rt=0;Rt<3;Rt++){for(let G of n.actors){if(G===z||!G.active||G.inside)continue;let se=(z.radius+G.radius)*.9+.02;S.subVectors(b,G.p);let Vt=S.length();Vt>1e-4&&Vt<se&&b.copy(G.p).addScaledVector(S,se/Vt)}for(let G of P()){S.subVectors(b,G.p);let se=S.length();se>1e-4&&se<.51&&b.copy(G.p).addScaledVector(S,.51/se)}}if(z.mode==="base"&&!t.clear(z.p,b))return 0;let Et=z.p.distanceTo(b);return z.p.copy(b),Et}function Mt(z,J){if(!z.active||(z.age+=J,z.cooldown=Math.max(0,z.cooldown-J),z.repathTimer=Math.max(0,z.repathTimer-J),z.stun=Math.max(0,(z.stun??0)-J),z.inside))return;if(z.mode==="enter"){z.group.scale.y=z.group.scale.x*.88,y.subVectors(s.inside,z.p);let st=y.length(),te=Math.min(st,J*2);st>.001&&z.p.addScaledVector(y,te/st),z.group.rotation.y=Math.atan2(y.x,y.y),z.group.position.set(z.p.x,me(z.p.x,z.p.y)+.015,z.p.y),z.pose(te,J),st<.075&&s.enter(z);return}if(z.mode==="road"&&(Cc(z.side,z.roadDistance+.35,T,z.lane),v.set(T.x,T.z),g.has(t.tileAt(z.p)))){let st=t.route(z.p,x,.1,!1);st&&(z.mode="base",z.route=st,z.routeIndex=0)}if(z.mode==="base"){let st=z.route[z.routeIndex];if(st&&z.repathTimer===0&&!t.clear(z.p,st)){let te=t.route(z.p,x,.08,!1);te&&(z.route=te,z.routeIndex=0),z.repathTimer=.35}for(;z.routeIndex<z.route.length;){let te=z.p.distanceTo(z.route[z.routeIndex]),Jt=z.routeIndex===z.route.length-1?te<.5:te<.28&&t.clear(z.p,z.route[z.routeIndex+1]);if(te>=.1&&!Jt)break;z.routeIndex++}v.copy(z.route[z.routeIndex]??s.approach),z.routeIndex>=z.route.length&&(z.mode="door")}z.mode==="door"&&v.copy(s.entrance);let gt=v.clone();y.subVectors(gt,z.p).normalize();let Et=null,Rt=1/0;for(let st of P()){S.subVectors(st.p,z.p);let te=S.length(),kt=S.dot(y),Jt=Math.abs(S.x*y.y-S.y*y.x),F=z.lastAttacker===st&&te<1.1;te<1.25&&te<Rt&&(kt>-.12&&Jt<.52||F)&&(Et=st,Rt=te)}z.target=Et;let G=0,se=z.mode==="door"&&z.p.distanceTo(s.entrance)<.78,Vt=s.state.doorHp>0&&s.state.open<.7;if(z.swing<0&&z.cooldown===0&&z.stun===0&&(Et&&Rt<Kt.enemyReach||!Et&&se&&Vt)&&(z.swing=0,z.hit=!1,z.cooldown=Kt.enemyAttack,z.strikeTarget=Et??"door"),z.swing>=0){if(z.swing+=J,!z.hit&&z.swing>=.34){z.hit=!0;let st=z.strikeTarget;st==="door"?!s.state.destroyed&&s.state.open<.7&&s.strikeDoor():st?.hp>0&&!st.inside&&z.p.distanceTo(st.p)<Kt.enemyReach+.14&&xt(st,Kt.enemyDamage,_.subVectors(st.p,z.p).normalize())}z.swing>=.76&&(z.swing=-1)}else if(z.stun===0){let st=Et?Et.p:gt;(!Et||Rt>Kt.enemyReach*.95)&&!(se&&Vt&&!Et)&&(G=ht(z,st,J)),z.mode==="road"&&(z.roadDistance+=G)}if(z.mode==="door"&&!Et)if(Vt){S.subVectors(s.approach,s.inside).normalize();let st=y.subVectors(z.p,s.entrance).dot(S);st<.4&&z.p.addScaledVector(S,.4-st)}else z.p.distanceTo(s.entrance)<.85&&!n.actors.some(st=>st.active&&!st.inside&&st.mode==="enter")&&(z.mode="enter",z.swing=-1);let Zt=Et?_.subVectors(Et.p,z.p):y.subVectors(gt,z.p);if(Zt.lengthSq()>1e-4){let st=Math.atan2(Zt.x,Zt.y),te=Math.atan2(Math.sin(st-z.group.rotation.y),Math.cos(st-z.group.rotation.y));z.group.rotation.y+=te*(1-Math.exp(-J*12))}z.group.position.set(z.p.x,me(z.p.x,z.p.y)+.015,z.p.y),z.pose(G,J,z.swing)}function yt(z){if(L+=z,!h.result){if(n.update(z),Ut(z),h.mode==="moving"){let J=e.members[0].combatHold;J&&u.pause(z);let gt=J?!1:u.advance(z);e.follow(l,gt,z),!J&&!gt&&(h.settled=h.destination,h.destination=null,h.mode="field",V())}else h.mode==="field"?e.follow(l,!1,z):(h.mode==="returning"||h.mode==="entering"||h.mode==="exiting")&&at(z);if(f?.update(z),a)for(let J of k())for(let gt of N()){if(gt.inside)continue;S.subVectors(J.p,gt.p);let Et=S.length();Et<.27&&Et>.001&&(b.copy(gt.p).addScaledVector(S,.27/Et),f.service.clear(J.p,b)&&(J.p.copy(b),J.unit.position.set(b.x,me(b.x,b.y),b.y)))}for(let J of n.actors)Mt(J,z);if(Yt(z),s.advance(z),h.mode==="recovering"&&N().length>0&&!s.state.destroyed&&!s.state.replenishmentBlocked){for(let J of N())J.hp=Math.min(Kt.villagerHp,J.hp+Kt.indoorRecoveryRate*z);if(N().length<Kt.squadSize){if(h.replenish+=z,h.replenish>=Kt.replenishSeconds){let J=e.members.find(gt=>gt.hp<=0);J.hp=Kt.villagerHp,J.inside=!0,J.unit.visible=!1,J.p.copy(s.inside),J.unit.position.set(s.inside.x,me(s.inside.x,s.inside.y),s.inside.y),J.swing=-1,J.ready=0,J.stains.clear(),h.replenish-=Kt.replenishSeconds,V()}}else h.replenish=0;N().length===Kt.squadSize&&N().every(J=>J.hp>=Kt.villagerHp-.01)&&rt()}if(s.state.destroyed){for(let J of N().filter(gt=>gt.inside&&gt.index!==0))xt(J,Kt.villagerHp,_.set(0,1));e.members[0].inside&&e.members[0].hp>0&&xt(e.members[0],1e3,_.set(0,1)),f?.cancel(),h.result="lost",V()}else n.state.complete&&(f?.cancel(),h.result="won",V())}}function Nt(z){if(z<=0){s.animate(L,0),r.update(0),e.animateFlag(L,0),a?.animateFlag(L,0);return}let J=Math.max(1,Math.ceil(z*60));for(let gt=0;gt<J;gt++)yt(z/J);h.result&&(h.resultAge+=z),s.animate(L,z),r.update(z),e.animateFlag(L,z),a?.animateFlag(L,z)}function St(){L=0,I=0,w=0,E=0,U=null,A=null,C.clear(),Object.assign(h,{mode:"field",result:null,resultAge:0,settled:o,destination:null,replenish:0,kills:0,message:""}),l.set(o.x,o.z),u.setRoute([]),e.reset(l),s.reset(),n.reset(),r.reset(),f?.reset(),V()}return St(),{anchor:l,state:h,reachable:g,orderMove:X,orderReturn:et,leaveBase:rt,update:Nt,reset:St,hurtVillager:xt,hurtEnemy:Wt,engineerOrders:f}}function Jf({reducedMotion:i=!1}={}){let t={active:!1,progress:0,focus:0,timeScale:1,elapsed:0},e={value:0},n={value:new tt},s=new tt,r={value:Number(i)},o=.12;function a(h,f){t.active=h,h&&f&&(s.copy(f),t.progress===0&&n.value.copy(f))}function c(h,f=!1){let d=i?.12:t.active?.26:.25;t.progress=wt.clamp(t.progress+(t.active?1:-1)*h/d,0,1),e.value=t.progress,n.value.lerp(s,1-Math.exp(-h*16));let g=t.active?o:1,M=t.active?20:16,m=Math.exp(-M*h),p=t.timeScale,x=g*h+(p-g)*(1-m)/M;return t.timeScale=g+(p-g)*m,Math.abs(t.timeScale-g)<5e-5&&(t.timeScale=g),t.focus=wt.clamp((1-t.timeScale)/(1-o),0,1),t.elapsed+=f?0:x,f?0:x}function l(h){return h.onBeforeCompile=f=>{Object.assign(f.uniforms,{deployProgress:e,deployOrigin:n,deployReduced:r}),f.vertexShader=`attribute vec3 deployCenter;
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
          if (diffuseColor.a < .003) discard;`)},h.customProgramCacheKey=()=>"deploy-grid-transition-v1",h}function u(){Object.assign(t,{active:!1,progress:0,focus:0,timeScale:1,elapsed:0}),e.value=0}return{state:t,setActive:a,update:c,tileMaterial:l,reset:u}}var Nc=(i,t,e,n)=>`<svg class="${n}" viewBox="0 0 ${t} ${e}" preserveAspectRatio="none" aria-hidden="true">${i}</svg>`,ei=i=>i.map(([t,e],n)=>`${n?"L":"M"}${t.toFixed(2)} ${e.toFixed(2)}`).join(" ")+"Z";function Pi(i,t=1.6){let e=i.map(([n,s],r)=>{let o=i[(r+i.length-1)%i.length],a=i[(r+1)%i.length],c=[n-o[0],s-o[1]],l=[a[0]-n,a[1]-s],u=Math.hypot(...c),h=Math.hypot(...l),f=[-c[1]/u-l[1]/h,c[0]/u+l[0]/h],d=Math.hypot(...f),g=f[0]/d,M=f[1]/d,p=t*(.82+.2*Math.sin(r*1.9)+.12*Math.cos(r*.7))/Math.max(.38,g*-l[1]/h+M*l[0]/h);return[n+g*p,s+M*p]});return`<path d="${ei(i)} ${ei(e.reverse())}" fill="var(--ink)" fill-rule="evenodd"/>`}function Ry(i,t){let e=[[8,1.8],[i*.38,.7],[i-9,1.9],[i-1.5,9],[i-.8,t*.54],[i-1.8,t-9],[i-8.5,t-1.3],[i*.4,t-.6],[8,t-1.9],[1.2,t-8],[.7,t*.4],[1.7,8]];return Nc(`<path d="${ei(e)}" fill="var(--paper)"/>${Pi(e)}
    <path d="M${i*.3} 1.6l8 .08-4 .48Z M${i*.65} ${t-1.5}l6 -.1-2 .5Z" fill="var(--paper)" opacity=".8"/>`,i,t,"ink-frame")}function Kf(i=!1){let t=[[9,11],[27,10],[70,11],[81,20],[80,76],[70,86],[10,85],[2,77],[2,21]],e=[[13,17],[68,16],[75,23],[75,73],[67,79],[14,79],[8,73],[8,24]];return i?Nc(`<path d="${ei(t)} ${ei([...e].reverse())}" fill-rule="evenodd" fill="var(--paper)"/>
    ${Pi(t,2)}${Pi(e,1.2)}`,84,90,"portrait-rim"):Nc(`<path d="${ei(t)}" fill="var(--paper)"/>${Pi(t,2)}
    <path d="${ei(e)}" fill="var(--portrait-field)"/>${Pi(e,1.2)}`,84,90,"portrait-frame")}function Iy(i){let t=i?[[164,17],[192,15],[218,16],[219,33],[207,33],[207,42],[219,42],[219,57],[207,57],[207,67],[219,67],[219,82],[164,83]]:[[164,17],[190,15],[219,16],[185,47],[220,81],[164,83]],e=[[1,6],[81,4],[176,7],[177,30],[175,54],[176,73],[89,74],[1,72]],n=[[163,62],[176,62],[176,73],[164,83]],s=i?`<g transform="translate(155 42) rotate(-33) scale(.86)" fill="#fffdf5" opacity=".9">
    <path d="M-2-3 2-3 2 14-2 15Z M-9-9 9-9 10-1-9-1Z"/>
    <path d="M-7-8 6-8 6-6-7-6Z" fill="var(--banner)" opacity=".28"/></g>`:"";return Nc(`<g class="flag-tail"><path d="${ei(t)}" fill="var(--banner-tail)"/>${Pi(t,1.2)}</g>
    <g class="flag-return"><path d="${ei(n)}" fill="var(--banner-fold)"/>${Pi(n,1)}</g>
    <g class="flag-face"><path d="${ei(e)}" fill="var(--banner)"/>${Pi(e,1.5)}
      <path d="M6 11Q85 8 170 12" fill="none" stroke="#fff6dd" stroke-width=".8" opacity=".23"/>
      <path d="M173 14Q172 42 173 69" fill="none" stroke="var(--banner-fold)" stroke-width="2.4" opacity=".40"/>
    </g>
    ${s}`,222,84,"squad-banner")}function Qf(){for(let r of document.querySelectorAll("[data-ink-frame]")){let o=r.dataset.inkFrame,[a,c]=o==="pause"?[54,54]:o==="panel"?[360,238]:o==="wave"?[156,42]:[160,54];r.insertAdjacentHTML("afterbegin",Ry(a,c))}let i=document.querySelector(".command"),t=[...i.querySelectorAll(".squad-card")];for(let r of t)r.insertAdjacentHTML("afterbegin",Iy(r.id==="engineer-card")),r.querySelector(".portrait-window").insertAdjacentHTML("afterbegin",Kf()),r.querySelector(".portrait-window").insertAdjacentHTML("beforeend",Kf(!0));let e=matchMedia("(prefers-reduced-motion: reduce)"),n=matchMedia("(hover: hover) and (pointer: fine)");for(let r of document.querySelectorAll("button")){let o;r.addEventListener("click",()=>{if(r.disabled||e.matches)return;o?.cancel();let a=n.matches&&r.matches(":hover")?-2:0;o=r.animate([{transform:"translateY(1.5px) scale(.985)"},{transform:`translateY(${a}px) scale(1)`}],{duration:180,easing:"cubic-bezier(.16, 1, .3, 1)"})})}let s="";return{setSelection(r,o){let a=r?o:"";if(!(a===s&&i.dataset.open!==void 0)&&(s=a,i.dataset.open=String(!!a),i.setAttribute("aria-hidden",String(!a)),i.inert=!a,a))for(let c of t)c.hidden=c.id==="engineer-card"!=(o==="engineers")},setPaused(r){let o=document.querySelector("#pause-game");o.setAttribute("aria-pressed",String(r)),o.setAttribute("aria-label",r?"\u7EE7\u7EED\u6E38\u620F":"\u6682\u505C\u6E38\u620F"),o.title=r?"\u7EE7\u7EED\u6E38\u620F\uFF08\u7A7A\u683C\uFF09":"\u6682\u505C\u6E38\u620F\uFF08\u7A7A\u683C\uFF09"}}}var bh=document.querySelector("#viewport"),Eh=document.querySelector("#error"),Th=document.querySelector("#squad-card"),Uc=document.querySelector("#engineer-card"),Py=document.querySelector("#wave-status"),jf=document.querySelector("#pause-game"),tp=document.querySelector("#game"),wh=document.querySelector("#start-screen"),Zs=document.querySelector("#start-game"),Ah=Qf(),$s=.66,ep=.925,np=1.3;function Ly(){try{return new lc({alpha:!0,antialias:!0})}catch{Eh.hidden=!1}}var ip=Ly();ip&&Dy(ip);function Dy(i){i.setClearColor(15068644,1),i.shadowMap.enabled=!0,i.shadowMap.type=$i,i.shadowMap.autoUpdate=!1,i.localClippingEnabled=!0,i.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),bh.append(i.domElement);let t=new pr;t.fog=new fr(15068644,36,63);let e=new Zi(-10,10,8,-8,.1,100),n=new O(0,.85,.5),s=vf(t),r=Mf(s.tiles),o=yh(r),a=yh(r,{engineer:!0}),c=Yf(s.home),l=Bf();t.add(l.group);let u=Xf(t),h=[...s.terrain,...s.deck],f=new zr,d=new tt,g=s.tiles.get(Fe(1,0))??s.tiles.get(Fe(0,0)),M=s.tiles.get(Fe(-1,1))??s.tiles.get(Fe(0,1))??g,m=$f({world:s,navigation:r,squad:o,waves:l,base:c,effects:u,spawn:g,engineers:a,engineerSpawn:M}),p=$s,x=1,y=!1,v="militia",b=!1,S="menu",_=0,T=0,L=$s,I=0,w=np,E=window.matchMedia("(prefers-reduced-motion: reduce)").matches,C=()=>S==="playing",A=()=>v==="engineers"?a:o,U=()=>v==="engineers"?m.engineerOrders:m,N=Jf({reducedMotion:E}),k=1,H=new Set,P=null,B=null,V=new Map,X=null,et=0,q=!0,Z=0,rt=0,ct="";t.add(new Fr(16120821,13360346,2.36));let at=new Br(16773078,1.6);at.position.set(-7.8,22,9.3),at.castShadow=!0,at.shadow.mapSize.set(2048,2048),Object.assign(at.shadow.camera,{left:-15,right:15,top:14,bottom:-14,near:.5,far:48}),at.shadow.bias=-3e-4,at.shadow.normalBias=.022,at.shadow.radius=4.5,t.add(at),t.add(o.group),t.add(a.group);let xt=new jt;xt.name="\u90E8\u7F72\u79FB\u52A8\u683C";let Wt=N.tileMaterial(new sn({color:"#596641",transparent:!0,opacity:.21,depthWrite:!1,toneMapped:!1})),Pt=N.tileMaterial(new sn({color:"#f1f1c2",transparent:!0,opacity:.32,depthWrite:!1,toneMapped:!1})),Ut=N.tileMaterial(new sn({color:"#dcf6c7",transparent:!0,opacity:.89,depthWrite:!1,toneMapped:!1})),Yt=N.tileMaterial(new sn({color:"#f0bc76",transparent:!0,opacity:.72,depthWrite:!1,toneMapped:!1})),ht=new sn({color:"#fff4d4",transparent:!0,depthWrite:!1,toneMapped:!1});t.add(xt);let Mt=new jt,yt=new jt,Nt=new jt;Mt.name="\u6307\u5411\u79FB\u52A8\u683C",yt.name="\u90E8\u7F72\u786E\u8BA4\u843D\u70B9",Nt.name="\u5F53\u524D\u90E8\u7F72\u683C",t.add(Mt,yt,Nt);let St=new jt;St.name="\u90E8\u7F72\u786E\u8BA4\u6807\u8BB0";let z=new qn().moveTo(0,-.15).quadraticCurveTo(-.12,0,-.12,.06).quadraticCurveTo(-.12,.18,0,.18).quadraticCurveTo(.12,.18,.12,.06).quadraticCurveTo(.12,0,0,-.15),J=new ie(new Lr(z),new sn({color:"#645848",transparent:!0,depthWrite:!1})),gt=new ie(J.geometry,ht);J.renderOrder=6,gt.renderOrder=7,gt.position.set(0,.003,.006),gt.scale.setScalar(.82),St.add(J,gt),t.add(St),St.visible=!1,i.domElement.addEventListener("webglcontextlost",$=>{$.preventDefault(),q=!1,S==="menu"&&(Zs.disabled=!0),Eh.hidden=!1}),i.domElement.addEventListener("webglcontextrestored",()=>{Eh.hidden=!0,q=!0,S==="menu"&&(Zs.disabled=!1),i.shadowMap.needsUpdate=!0});function Et(){let{width:$,height:it}=bh.getBoundingClientRect();if(!$||!it)return;let mt=$/it,Ot=$<=620?14.8:20.1,ft=wt.clamp(32.8/mt,16.4,17.9),Bt=Math.max(ft,Ot/mt)/x;e.left=-Bt*mt/2,e.right=Bt*mt/2,e.top=Bt/2,e.bottom=-Bt/2,e.position.copy(n).add(new O(Math.sin(p)*25,21,Math.cos(p)*25)),e.lookAt(n),e.updateProjectionMatrix(),e.updateMatrixWorld(),($!==Z||it!==rt)&&(Z=$,rt=it,i.setSize($,it,!1)),St.quaternion.copy(e.quaternion)}function Rt($){for(let it of $.children)it.geometry.dispose();$.clear()}function G($,it,mt,Ot,ft){Rt($),it&&$.add(Ny(it,mt,.475,Ot,ft))}function se(){let $=[g];H.add(g);for(let it=0;it<$.length;it++){let mt=$[it];for(let Ot of mt.neighbors)H.has(Ot)||(H.add(Ot),$.push(Ot))}for(let[it,mt,Ot,ft]of[[Wt,.481,.02,1],[Pt,.468,.033,2]]){let Bt=$.map(It=>sp(It,mt,Ot)),Qt=new ie(dc(Bt),it);Qt.renderOrder=ft,xt.add(Qt);for(let It of Bt)It.dispose()}}function Vt($,it=!1){P!==$&&(P=$,G(Mt,$,Ut,.045,3)),i.domElement.classList.toggle("is-target",!!$||it)}function Zt(){let{mode:$}=U().state,{result:it}=m.state;Th.setAttribute("aria-pressed",String(y&&v==="militia")),Uc.setAttribute("aria-pressed",String(y&&v==="engineers")),Ah.setSelection(y&&!it,v);let mt=A().members.filter(ft=>ft.hp>0).length,Ot=y&&mt>0&&!it&&["field","moving","returning","approaching","extinguishing"].includes($);N.setActive(Ot,U().anchor),xt.visible=N.state.progress>0,Nt.visible=xt.visible,Mt.visible=xt.visible}function st($,it=v){if(!($&&!C())){if(v=it,y=!!$&&!m.state.result&&A().members.some(mt=>mt.hp>0&&!mt.inside),y){let mt=U(),Ot=r.tileAt(mt.anchor)??mt.state.settled;G(Nt,Ot,Yt,.051,4),Vt(null)}else P=null,i.domElement.classList.remove("is-target");Zt()}}function te(){let{destination:$}=U().state;G(yt,$,ht,.054,5),k=$?0:1,St.visible=!!$,yt.visible=!!$,$&&(ht.opacity=J.material.opacity=1,St.position.set($.x,me($.x,$.z)+.39,$.z))}function kt($){!y||!H.has($)||!U().orderMove($)||(te(),st(!1))}function Jt($){let it=i.domElement.getBoundingClientRect();d.set(($.clientX-it.left)/it.width*2-1,1-($.clientY-it.top)/it.height*2),f.setFromCamera(d,e),o.group.updateMatrixWorld(!0),a.group.updateMatrixWorld(!0);let mt=f.intersectObjects(o.targets,!1)[0],Ot=f.intersectObjects(a.targets,!1)[0],ft=Ot&&(!mt||Ot.distance<mt.distance)?{...Ot,team:"engineers"}:mt?{...mt,team:"militia"}:null;c.group.updateMatrixWorld(!0);let Bt=!c.state.destroyed&&f.intersectObjects(c.targets,!1)[0];if(Bt&&(!ft||Bt.distance<ft.distance))return{home:!0};if(!ft&&!y)return{};let Qt=f.intersectObjects(h,!1)[0],ce=f.intersectObjects(s.blockers,!1)[0]?.distance??1/0;if(ft&&ft.distance<=(Qt?.distance??1/0)&&ft.distance<ce)return{unit:ft.team};if(!Qt||ce<Qt.distance-.045)return{};let De=s.deck.includes(Qt.object)?0:Gs(Qt.point.x),Rn=s.tiles.get(Fe(De,Gs(Qt.point.z)));return H.has(Rn)?{tile:Rn}:{}}function F($){if(!C())return;let{unit:it,tile:mt,home:Ot}=Jt($);Ot?(y?(v==="engineers"?m.engineerOrders.orderExtinguish():m.orderReturn())&&st(!1):["entering","recovering","exiting"].includes(m.state.mode)?m.orderReturn()&&st(!1):c.state.replenishmentBlocked||st(!0,"militia"),Zt()):it?st(!(y&&v===it),it):mt&&y?kt(mt):y&&st(!1)}let R=i.domElement;function K(){let[$,it]=V.values();return $&&it?$.distanceTo(it):0}R.addEventListener("contextmenu",$=>{$.preventDefault(),st(!1)}),R.addEventListener("pointerdown",$=>{if(C()){if($.pointerType==="touch"&&(V.set($.pointerId,new tt($.clientX,$.clientY)),R.setPointerCapture($.pointerId),V.size>=2)){X={distance:Math.max(1,K()),zoom:x},B=null,R.classList.remove("is-dragging"),Vt(null);return}B||$.button!==0||(B={id:$.pointerId,x:$.clientX,y:$.clientY,angle:p,moved:!1},R.setPointerCapture($.pointerId))}}),R.addEventListener("pointermove",$=>{if(!C())return;if(V.get($.pointerId)?.set($.clientX,$.clientY),X){let ft=K();ft&&(x=wt.clamp(X.zoom*ft/X.distance,ep,1.85),Et());return}if(B&&B.id!==$.pointerId)return;if(B){let ft=$.clientX-B.x;(B.moved||Math.hypot(ft,$.clientY-B.y)>5)&&(B.moved=!0,p=B.angle-ft*.009,R.classList.add("is-dragging"),Vt(null),Et());return}let{unit:it,tile:mt,home:Ot}=Jt($);Vt(y?mt??null:null,it||Ot)});function _t($,it){if(V.delete($.pointerId),X){V.size||(X=null);return}if(B?.id!==$.pointerId)return;let{moved:mt}=B;B=null,R.classList.remove("is-dragging"),it&&!mt&&F($)}R.addEventListener("pointerup",$=>_t($,!0)),R.addEventListener("lostpointercapture",$=>_t($,!1)),R.addEventListener("pointerleave",()=>Vt(null)),R.addEventListener("wheel",$=>{$.preventDefault(),C()&&(x=wt.clamp(x*Math.exp(-$.deltaY*.001),ep,1.85),Vt(null),Et())},{passive:!1}),Th.addEventListener("click",()=>st(!(y&&v==="militia"),"militia")),Uc.addEventListener("click",()=>st(!(y&&v==="engineers"),"engineers")),document.querySelector("#wave-replay").addEventListener("click",()=>{Tt()}),document.querySelector("#restart-battle").addEventListener("click",Tt);function pt(){!C()||m.state.result||(b=!b,Ah.setPaused(b))}jf.addEventListener("click",pt);function bt(){let{wave:$,waves:it}=l.state,mt=`\u7B2C ${$} / ${it} \u6CE2`;mt!==ct&&(ct=mt,Py.textContent=mt)}function Ct(){jf.disabled=!!m.state.result;for(let[mt,Ot,ft]of[[o,Th,"#squad-state"],[a,Uc,"#engineer-state"]]){let Bt=mt.members.filter(Qt=>Qt.hp>0);document.querySelector(ft).textContent=`${Bt.length} / ${mt.members.length}`,Ot.disabled=Bt.length===0||!!m.state.result,Ot.querySelectorAll(".pips i").forEach((Qt,It)=>{let ce=mt.members[It];Qt.classList.toggle("is-dead",ce.hp<=0),Qt.style.opacity=ce.hp>0?String(.35+.65*ce.hp/ce.maxHp):"",Qt.title=ce.hp>0?`${It===0?"\u9886\u961F":"\u961F\u5458"} \xB7 ${Math.ceil(ce.hp)} / ${ce.maxHp}`:"\u5DF2\u9635\u4EA1"})}let $=document.querySelector("#engineer-work");$.hidden=!m.engineerOrders.working,Uc.classList.toggle("is-working",m.engineerOrders.working),$.querySelectorAll("i").forEach((mt,Ot)=>{let ft=a.members[Ot];mt.style.transform=`scaleX(${ft.hp>0?wt.clamp(ft.workProgress/Kt.extinguishSeconds,0,1):0})`,mt.parentElement.classList.toggle("is-dead",ft.hp<=0)});let it=document.querySelector("#battle-result");it.hidden=!m.state.result||m.state.resultAge<(m.state.result==="won"?Kt.victoryDelay:Kt.defeatDelay),m.state.result&&(document.querySelector("#result-title").textContent=m.state.result==="won"?"\u6751\u5E84\u5B88\u4F4F\u4E86":"\u65D7\u5E1C\u843D\u4E0B\u4E86",document.querySelector("#result-detail").textContent=m.state.result==="won"?`\u51FB\u9000\u5168\u90E8 ${l.state.waves} \u6CE2\u654C\u4EBA \xB7 \u57FA\u5730\u4F59\u8840 ${Math.ceil(c.state.hp)}`:`\u57FA\u5730\u5DF2\u88AB\u7EFF\u8272\u706B\u7130\u541E\u6CA1 \xB7 \u51FB\u8D25 ${m.state.kills} \u53EA\u5165\u4FB5\u8005`)}function lt($){C()&&(p+=$,Vt(null),Et())}let ut=new Map([["ArrowUp",[0,-1]],["ArrowRight",[1,0]],["ArrowDown",[0,1]],["ArrowLeft",[-1,0]]]);window.addEventListener("keydown",$=>{if($.ctrlKey||$.altKey||$.metaKey)return;if(!C()){S==="menu"&&$.code==="Enter"&&!$.repeat&&!($.target instanceof HTMLButtonElement)&&($.preventDefault(),dt());return}if($.code==="Space"&&!($.target instanceof HTMLButtonElement)){$.preventDefault(),$.repeat||pt();return}$.key==="Escape"&&st(!1),$.key.toLowerCase()==="q"&&lt(-Math.PI/4),$.key.toLowerCase()==="e"&&lt(Math.PI/4),$.key==="1"&&st(!0,"militia"),$.key==="2"&&st(!0,"engineers");let it=ut.get($.key);if(!it||!y)return;$.preventDefault();let mt=U(),Ot=mt.state.destination??mt.state.settled;kt(s.tiles.get(Fe(Ot.column+it[0],Ot.row+it[1])))}),new ResizeObserver(Et).observe(bh);function Tt(){_=0,b=!1,Ah.setPaused(!1),p=$s,x=S==="menu"?np:1,v="militia",m.reset(),o.group.visible=a.group.visible=l.group.visible=S!=="menu",N.reset(),i.domElement.style.filter="",Vt(null),te(),G(Nt,g,Yt,.051,4),st(!1),bt(),i.shadowMap.needsUpdate=!0,Et()}function W(){S="playing",tp.dataset.screen=S,wh.hidden=!0,p=$s,x=1,Et()}function dt(){if(S!=="menu"||Zs.disabled)return;let $=_,it=p,mt=x;S="entering",Zs.disabled=!0,wh.inert=!0,wh.setAttribute("aria-hidden","true"),tp.dataset.screen=S,Tt(),_=$,L=p=it,w=x=mt,I=Math.atan2(Math.sin($s-p),Math.cos($s-p)),T=0,Et(),E&&W()}Zs.addEventListener("click",dt);function ot(){s.animateWater(_),s.animateMeadow(_),s.animateCanopy(_)}function At($){let it=et?Math.min(($-et)/1e3,.12):0;if(et=$,q){if(!C()){if(_+=it,S==="menu")p=(p+(E?0:it*.028))%(Math.PI*2);else{T=Math.min(1,T+it/.65);let Bt=1-(1-T)**3;p=L+I*Bt,x=wt.lerp(w,1,Bt),T===1&&W()}Et(),c.animate(_,it),S!=="menu"&&(o.animateFlag(_,it),a.animateFlag(_,it)),ot(),i.shadowMap.needsUpdate=!0,i.render(t,e),requestAnimationFrame(At);return}Zt();let mt=N.update(it,b);_+=mt,m.update(mt),y&&(m.state.result||!A().members.some(Bt=>Bt.hp>0&&!Bt.inside))&&st(!1),i.shadowMap.needsUpdate=!0,Zt();let Ot=N.state.focus;i.domElement.style.filter=Ot>1e-4?`grayscale(${Ot*.94}) brightness(${1-Ot*.1})`:"",k+=it;let ft=wt.clamp(k/.44,0,1);yt.visible=St.visible=k<.44,ht.opacity=J.material.opacity=1-wt.smoothstep(ft,.22,1),St.scale.setScalar(1+Math.sin(ft*Math.PI)*.13),Ct(),bt(),ot(),i.render(t,e)}requestAnimationFrame(At)}se(),Tt(),Zs.disabled=!1,requestAnimationFrame(At)}function sp(i,t,e){let n=[],s=.17*Pe,r=t*Pe-s,o=[[0,0],[-r,-r],[-r,r],[r,-r],[r,r]].map(([p,x])=>me(i.x+p,i.z+x)),a=Math.max(...o)-Math.min(...o)>.3?3:2,l=[[r,r],[-r,r],[-r,-r],[r,-r]].flatMap(([p,x],y)=>Array.from({length:4},(v,b)=>{let S=y*Math.PI/2+b*Math.PI/6;return[p+Math.cos(S)*s,x+Math.sin(S)*s]})),u=new Map;function h([p,x]){let y=Fe(p,x);if(!u.has(y)){let v=i.x+p,b=i.z+x;u.set(y,[v,me(v,b)+e,b])}return u.get(y)}let f=(p,x)=>[(p[0]+x[0])/2,(p[1]+x[1])/2];function d(p,x,y,v){if(!v){n.push(...h(p),...h(x),...h(y));return}let b=f(p,x),S=f(x,y),_=f(y,p);d(p,b,_,v-1),d(b,x,S,v-1),d(_,S,y,v-1),d(b,S,_,v-1)}for(let p=0;p<l.length;p++)d([0,0],l[(p+1)%l.length],l[p],a);let g=new ae;g.setAttribute("position",new Gt(n,3));let M=new Float32Array(n.length),m=me(i.x,i.z)+e;for(let p=0;p<M.length;p+=3)M.set([i.x,m,i.z],p);return g.setAttribute("deployCenter",new Me(M,3)),g}function Ny(i,t,e,n,s){let r=new ie(sp(i,e,n),t);return r.renderOrder=s,r}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
