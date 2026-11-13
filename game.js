(()=>{var xu=0,gl=1,_u=2;var $i=1,yu=2,Ls=3,Ei=0,rn=1,an=2,Ji=0,Ds=1,xl=2,_l=3,yl=4,vu=5;var Ki=100,Mu=101,Su=102,bu=103,Tu=104,wu=200,Au=201,Eu=202,Cu=203,vl=204,Ml=205,Ru=206,Iu=207,Pu=208,Lu=209,Du=210,Nu=211,Uu=212,Fu=213,Ou=214,Oo=0,Bo=1,zo=2,ys=3,ko=4,Vo=5,Go=6,Ho=7,_a=0,Bu=1,zu=2,qn=0,Sl=1,bl=2,Tl=3,wl=4,Al=5,El=6,Cl=7;var Rl=300,Qi=301,Ns=302,ya=303,va=304,Wo=1e3,kn=1001,Xo=1002,We=1003,ku=1004;var zr=1005;var qe=1006,Ma=1007;var ui=1008;var cn=1009,Il=1010,Pl=1011,Us=1012,Sa=1013,Dn=1014,An=1015,Nn=1016,ba=1017,Ta=1018,ji=1020,Ll=35902,Dl=35899,Nl=1021,Ul=1022,Un=1023,ci=1026,di=1027,Fs=1028,wa=1029,Ci=1030,Aa=1031;var Ea=1033,kr=33776,Vr=33777,Gr=33778,Hr=33779,Ca=35840,Ra=35841,Ia=35842,Pa=35843,La=36196,Da=37492,Na=37496,Ua=37488,Fa=37489,Wr=37490,Oa=37491,Ba=37808,za=37809,ka=37810,Va=37811,Ga=37812,Ha=37813,Wa=37814,Xa=37815,qa=37816,Ya=37817,Za=37818,$a=37819,Ja=37820,Ka=37821,Qa=36492,ja=36494,tc=36495,ec=36283,nc=36284,Xr=36285,ic=36286;var or=2300,qo=2301,Uo=2302,rl=2303,ol=2400,al=2401,cl=2402;var Vu=3200;var qr=0,Gu=1,fi="",pn="srgb",ar="srgb-linear",cr="linear",_e="srgb";var Fo=7680;var Hu=519,Wu=512,Xu=513,qu=514,Fl=515,Yu=516,Zu=517,Ol=518,Bl=519,$u=35044,ln=35048;var zl="300 es",Sn=2e3,vs=2001;function op(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ap(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function lr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ju(){let i=lr("canvas");return i.style.display="block",i}var Fh={},Ms=null;function kl(...i){let t="THREE."+i.shift();Ms?Ms("log",t,...i):console.log(t,...i)}function Ku(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function te(...i){i=Ku(i);let t="THREE."+i.shift();if(Ms)Ms("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ee(...i){i=Ku(i);let t="THREE."+i.shift();if(Ms)Ms("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function zi(...i){let t=i.join(" ");t in Fh||(Fh[t]=!0,te(...i))}function Qu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var ju={[Oo]:Oo,[zo]:Go,[ko]:ko,[ys]:Vo,[Bo]:Bo,[Go]:zo,[Ho]:Ho,[Vo]:ys},Gn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oh=1234567,nr=Math.PI/180,Ss=180/Math.PI;function ts(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]).toLowerCase()}function ce(i,t,e){return Math.max(t,Math.min(e,i))}function Vl(i,t){return(i%t+t)%t}function cp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function lp(i,t,e){return i!==t?(e-i)/(t-i):0}function ir(i,t,e){return(1-e)*i+e*t}function hp(i,t,e,n){return ir(i,t,1-Math.exp(-e*n))}function up(i,t=1){return t-Math.abs(Vl(i,t*2)-t)}function dp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function fp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function pp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function mp(i,t){return i+Math.random()*(t-i)}function gp(i){return i*(.5-Math.random())}function xp(i){i!==void 0&&(Oh=i);let t=Oh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _p(i){return i*nr}function yp(i){return i*Ss}function vp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Mp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Gl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Sp(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*h,c*f,a*l);break;case"YZY":i.set(c*f,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*f,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*u,a*l);break;default:te("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Hl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function td(i,t){if(t.constructor===Float32Array)return i;let e=Hl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function ed(i,t){if(t.constructor===Float32Array)return i;let e=Hl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var Tt={DEG2RAD:nr,RAD2DEG:Ss,generateUUID:ts,clamp:ce,euclideanModulo:Vl,mapLinear:cp,inverseLerp:lp,lerp:ir,damp:hp,pingpong:up,smoothstep:dp,smootherstep:fp,randInt:pp,randFloat:mp,randFloatSpread:gp,seededRandom:xp,degToRad:_p,radToDeg:yp,isPowerOfTwo:vp,ceilPowerOfTwo:Mp,floorPowerOfTwo:Gl,setQuaternionFromProperEuler:Sp,normalize:ed,denormalize:td},nt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ye=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3],f=r[o+0],d=r[o+1],g=r[o+2],M=r[o+3];if(h!==M||c!==f||l!==d||u!==g){let p=c*f+l*d+u*g+h*M;p<0&&(f=-f,d=-d,g=-g,M=-M,p=-p);let m=1-a;if(p<.9995){let x=Math.acos(p),y=Math.sin(x);m=Math.sin(m*x)/y,a=Math.sin(a*x)/y,c=c*m+f*a,l=l*m+d*a,u=u*m+g*a,h=h*m+M*a}else{c=c*m+f*a,l=l*m+d*a,u=u*m+g*a,h=h*m+M*a;let x=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=x,l*=x,u*=x,h*=x}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*h+c*d-l*f,t[e+1]=c*g+u*f+l*h-a*d,t[e+2]=l*g+u*d+a*f-c*h,t[e+3]=u*g-a*h-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:te("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ce(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Fc.copy(this).projectOnVector(t),this.sub(Fc)}reflect(t){return this.sub(Fc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Fc=new O,Bh=new Ye,ie=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],M=s[0],p=s[3],m=s[6],x=s[1],y=s[4],v=s[7],S=s[2],b=s[5],_=s[8];return r[0]=o*M+a*x+c*S,r[3]=o*p+a*y+c*b,r[6]=o*m+a*v+c*_,r[1]=l*M+u*x+h*S,r[4]=l*p+u*y+h*b,r[7]=l*m+u*v+h*_,r[2]=f*M+d*x+g*S,r[5]=f*p+d*y+g*b,r[8]=f*m+d*v+g*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,f=a*c-u*r,d=l*r-o*c,g=e*h+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return t[0]=h*M,t[1]=(s*l-u*n)*M,t[2]=(a*n-s*o)*M,t[3]=f*M,t[4]=(u*e-s*c)*M,t[5]=(s*r-a*e)*M,t[6]=d*M,t[7]=(n*c-l*e)*M,t[8]=(o*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return zi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Oc.makeScale(t,e)),this}rotate(t){return zi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Oc.makeRotation(-t)),this}translate(t,e){return zi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Oc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Oc=new ie,zh=new ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kh=new ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bp(){let i={enabled:!0,workingColorSpace:ar,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_e&&(s.r=ai(s.r),s.g=ai(s.g),s.b=ai(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_e&&(s.r=_s(s.r),s.g=_s(s.g),s.b=_s(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fi?cr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ar]:{primaries:t,whitePoint:n,transfer:cr,toXYZ:zh,fromXYZ:kh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:zh,fromXYZ:kh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),i}var de=bp();function ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ss,Yo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ss===void 0&&(ss=lr("canvas")),ss.width=t.width,ss.height=t.height;let s=ss.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ss}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=lr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ai(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ai(e[n]/255)*255):e[n]=ai(e[n]);return{data:e,width:t.width,height:t.height}}else return te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Tp=0,bs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=ts(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Bc(s[o].image)):r.push(Bc(s[o]))}else r=Bc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Bc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Yo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(te("Texture: Unable to serialize Texture."),{})}var wp=0,zc=new O,en=class i extends Gn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=kn,s=kn,r=qe,o=ui,a=Un,c=cn,l=i.DEFAULT_ANISOTROPY,u=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=ts(),this.name="",this.source=new bs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(zc).x}get height(){return this.source.getSize(zc).y}get depth(){return this.source.getSize(zc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){te(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){te(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wo:t.x=t.x-Math.floor(t.x);break;case kn:t.x=t.x<0?0:1;break;case Xo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wo:t.y=t.y-Math.floor(t.y);break;case kn:t.y=t.y<0?0:1;break;case Xo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Rl;en.DEFAULT_ANISOTROPY=1;var Te=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],M=c[2],p=c[6],m=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-M)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+M)<.1&&Math.abs(g+p)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(l+1)/2,v=(d+1)/2,S=(m+1)/2,b=(u+f)/4,_=(h+M)/4,T=(g+p)/4;return y>v&&y>S?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=b/n,r=_/n):v>S?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=b/s,r=T/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=_/r,s=T/r),this.set(n,s,r,e),this}let x=Math.sqrt((p-g)*(p-g)+(h-M)*(h-M)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(h-M)/x,this.z=(f-u)/x,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this.w=ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this.w=ce(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zo=class extends Gn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new en({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new bs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},xn=class extends Zo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},hr=class extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var $o=class extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var fe=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,c,l,u,h,f,d,g,M,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,h,f,d,g,M,p)}set(t,e,n,s,r,o,a,c,l,u,h,f,d,g,M,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=g,m[11]=M,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/rs.setFromMatrixColumn(t,0).length(),r=1/rs.setFromMatrixColumn(t,1).length(),o=1/rs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let f=o*u,d=o*h,g=a*u,M=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=d+g*l,e[5]=f-M*l,e[9]=-a*c,e[2]=M-f*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*u,d=c*h,g=l*u,M=l*h;e[0]=f+M*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=M+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*u,d=c*h,g=l*u,M=l*h;e[0]=f-M*a,e[4]=-o*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=M-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*u,d=o*h,g=a*u,M=a*h;e[0]=c*u,e[4]=g*l-d,e[8]=f*l+M,e[1]=c*h,e[5]=M*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,d=o*l,g=a*c,M=a*l;e[0]=c*u,e[4]=M-f*h,e[8]=g*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*h+g,e[10]=f-M*h}else if(t.order==="XZY"){let f=o*c,d=o*l,g=a*c,M=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+M,e[5]=o*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*u,e[10]=M*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ap,t,Ep)}lookAt(t,e,n){let s=this.elements;return dn.subVectors(t,e),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),gi.crossVectors(n,dn),gi.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),gi.crossVectors(n,dn)),gi.normalize(),uo.crossVectors(dn,gi),s[0]=gi.x,s[4]=uo.x,s[8]=dn.x,s[1]=gi.y,s[5]=uo.y,s[9]=dn.y,s[2]=gi.z,s[6]=uo.z,s[10]=dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],M=n[6],p=n[10],m=n[14],x=n[3],y=n[7],v=n[11],S=n[15],b=s[0],_=s[4],T=s[8],L=s[12],I=s[1],w=s[5],E=s[9],C=s[13],A=s[2],U=s[6],N=s[10],V=s[14],W=s[3],P=s[7],B=s[11],k=s[15];return r[0]=o*b+a*I+c*A+l*W,r[4]=o*_+a*w+c*U+l*P,r[8]=o*T+a*E+c*N+l*B,r[12]=o*L+a*C+c*V+l*k,r[1]=u*b+h*I+f*A+d*W,r[5]=u*_+h*w+f*U+d*P,r[9]=u*T+h*E+f*N+d*B,r[13]=u*L+h*C+f*V+d*k,r[2]=g*b+M*I+p*A+m*W,r[6]=g*_+M*w+p*U+m*P,r[10]=g*T+M*E+p*N+m*B,r[14]=g*L+M*C+p*V+m*k,r[3]=x*b+y*I+v*A+S*W,r[7]=x*_+y*w+v*U+S*P,r[11]=x*T+y*E+v*N+S*B,r[15]=x*L+y*C+v*V+S*k,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],M=t[7],p=t[11],m=t[15],x=c*d-l*f,y=a*d-l*h,v=a*f-c*h,S=o*d-l*u,b=o*f-c*u,_=o*h-a*u;return e*(M*x-p*y+m*v)-n*(g*x-p*S+m*b)+s*(g*y-M*S+m*_)-r*(g*v-M*b+p*_)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],u=t[10];return e*(o*u-a*l)-n*(r*u-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],M=t[13],p=t[14],m=t[15],x=e*a-n*o,y=e*c-s*o,v=e*l-r*o,S=n*c-s*a,b=n*l-r*a,_=s*l-r*c,T=u*M-h*g,L=u*p-f*g,I=u*m-d*g,w=h*p-f*M,E=h*m-d*M,C=f*m-d*p,A=x*C-y*E+v*w+S*I-b*L+_*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/A;return t[0]=(a*C-c*E+l*w)*U,t[1]=(s*E-n*C-r*w)*U,t[2]=(M*_-p*b+m*S)*U,t[3]=(f*b-h*_-d*S)*U,t[4]=(c*I-o*C-l*L)*U,t[5]=(e*C-s*I+r*L)*U,t[6]=(p*v-g*_-m*y)*U,t[7]=(u*_-f*v+d*y)*U,t[8]=(o*E-a*I+l*T)*U,t[9]=(n*I-e*E-r*T)*U,t[10]=(g*b-M*v+m*x)*U,t[11]=(h*v-u*b-d*x)*U,t[12]=(a*L-o*w-c*T)*U,t[13]=(e*w-n*L+s*T)*U,t[14]=(M*y-g*S-p*x)*U,t[15]=(u*S-h*y+f*x)*U,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,f=r*l,d=r*u,g=r*h,M=o*u,p=o*h,m=a*h,x=c*l,y=c*u,v=c*h,S=n.x,b=n.y,_=n.z;return s[0]=(1-(M+m))*S,s[1]=(d+v)*S,s[2]=(g-y)*S,s[3]=0,s[4]=(d-v)*b,s[5]=(1-(f+m))*b,s[6]=(p+x)*b,s[7]=0,s[8]=(g+y)*_,s[9]=(p-x)*_,s[10]=(1-(f+M))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=rs.set(s[0],s[1],s[2]).length(),a=rs.set(s[4],s[5],s[6]).length(),c=rs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),In.copy(this);let l=1/o,u=1/a,h=1/c;return In.elements[0]*=l,In.elements[1]*=l,In.elements[2]*=l,In.elements[4]*=u,In.elements[5]*=u,In.elements[6]*=u,In.elements[8]*=h,In.elements[9]*=h,In.elements[10]*=h,e.setFromRotationMatrix(In),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=Sn,c=!1){let l=this.elements,u=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),g,M;if(c)g=r/(o-r),M=o*r/(o-r);else if(a===Sn)g=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===vs)g=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Sn,c=!1){let l=this.elements,u=2/(e-t),h=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),g,M;if(c)g=1/(o-r),M=o/(o-r);else if(a===Sn)g=-2/(o-r),M=-(o+r)/(o-r);else if(a===vs)g=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},rs=new O,In=new fe,Ap=new O(0,0,0),Ep=new O(1,1,1),gi=new O,uo=new O,dn=new O,Vh=new fe,Gh=new Ye,Hn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ce(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ce(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ce(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:te("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Vh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gh.setFromEuler(this),this.setFromQuaternion(Gh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Hn.DEFAULT_ORDER="XYZ";var Ts=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Cp=0,Hh=new O,os=new Ye,ni=new fe,fo=new O,$s=new O,Rp=new O,Ip=new Ye,Wh=new O(1,0,0),Xh=new O(0,1,0),qh=new O(0,0,1),Yh={type:"added"},Pp={type:"removed"},as={type:"childadded",child:null},kc={type:"childremoved",child:null},Ce=class i extends Gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new O,e=new Hn,n=new Ye,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new ie}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ts,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.multiply(os),this}rotateOnWorldAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.premultiply(os),this}rotateX(t){return this.rotateOnAxis(Wh,t)}rotateY(t){return this.rotateOnAxis(Xh,t)}rotateZ(t){return this.rotateOnAxis(qh,t)}translateOnAxis(t,e){return Hh.copy(t).applyQuaternion(this.quaternion),this.position.add(Hh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wh,t)}translateY(t){return this.translateOnAxis(Xh,t)}translateZ(t){return this.translateOnAxis(qh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fo.copy(t):fo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt($s,fo,this.up):ni.lookAt(fo,$s,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),os.setFromRotationMatrix(ni),this.quaternion.premultiply(os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yh),as.child=t,this.dispatchEvent(as),as.child=null):ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Pp),kc.child=t,this.dispatchEvent(kc),kc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yh),as.child=t,this.dispatchEvent(as),as.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,t,Rp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,Ip,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ce.DEFAULT_UP=new O(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Kt=class extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}},Lp={type:"move"},ws=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let M of t.hand.values()){let p=e.getJointPose(M,n),m=this._getHandJoint(l,M);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lp)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Kt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},po={h:0,s:0,l:0};function Vc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=de.workingColorSpace){if(t=Vl(t,1),e=ce(e,0,1),n=ce(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Vc(o,r,t+1/3),this.g=Vc(o,r,t),this.b=Vc(o,r,t-1/3)}return de.colorSpaceToWorking(this,s),this}setStyle(t,e=pn){function n(r){r!==void 0&&parseFloat(r)<1&&te("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:te("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);te("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pn){let n=nd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):te("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ai(t.r),this.g=ai(t.g),this.b=ai(t.b),this}copyLinearToSRGB(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pn){return de.workingToColorSpace(Ke.copy(this),t),Math.round(ce(Ke.r*255,0,255))*65536+Math.round(ce(Ke.g*255,0,255))*256+Math.round(ce(Ke.b*255,0,255))}getHexString(t=pn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.workingToColorSpace(Ke.copy(this),e);let n=Ke.r,s=Ke.g,r=Ke.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=de.workingColorSpace){return de.workingToColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=pn){de.workingToColorSpace(Ke.copy(this),t);let e=Ke.r,n=Ke.g,s=Ke.b;return t!==pn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(xi),this.setHSL(xi.h+t,xi.s+e,xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xi),t.getHSL(po);let n=ir(xi.h,po.h,e),s=ir(xi.s,po.s,e),r=ir(xi.l,po.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ke=new yt;yt.NAMES=nd;var ur=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new yt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},dr=class extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Pn=new O,ii=new O,Gc=new O,si=new O,cs=new O,ls=new O,Zh=new O,Hc=new O,Wc=new O,Xc=new O,qc=new Te,Yc=new Te,Zc=new Te,Mi=class i{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Pn.subVectors(t,e),s.cross(Pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Pn.subVectors(s,e),ii.subVectors(n,e),Gc.subVectors(t,e);let o=Pn.dot(Pn),a=Pn.dot(ii),c=Pn.dot(Gc),l=ii.dot(ii),u=ii.dot(Gc),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(l*c-a*u)*f,g=(o*u-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,si.x),c.addScaledVector(o,si.y),c.addScaledVector(a,si.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return qc.setScalar(0),Yc.setScalar(0),Zc.setScalar(0),qc.fromBufferAttribute(t,e),Yc.fromBufferAttribute(t,n),Zc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(qc,r.x),o.addScaledVector(Yc,r.y),o.addScaledVector(Zc,r.z),o}static isFrontFacing(t,e,n,s){return Pn.subVectors(n,e),ii.subVectors(t,e),Pn.cross(ii).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Pn.cross(ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;cs.subVectors(s,n),ls.subVectors(r,n),Hc.subVectors(t,n);let c=cs.dot(Hc),l=ls.dot(Hc);if(c<=0&&l<=0)return e.copy(n);Wc.subVectors(t,s);let u=cs.dot(Wc),h=ls.dot(Wc);if(u>=0&&h<=u)return e.copy(s);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0&&c-u>0)return o=c/(c-u),e.copy(n).addScaledVector(cs,o);Xc.subVectors(t,r);let d=cs.dot(Xc),g=ls.dot(Xc);if(g>=0&&d<=g)return e.copy(r);let M=d*l-c*g;if(M<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ls,a);let p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return Zh.subVectors(r,s),a=(h-u)/(h-u+(d-g)),e.copy(s).addScaledVector(Zh,a);let m=1/(p+M+f);return o=M*m,a=f*m,e.copy(n).addScaledVector(cs,o).addScaledVector(ls,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},nn=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ln):Ln.fromBufferAttribute(r,o),Ln.applyMatrix4(t.matrixWorld),this.expandByPoint(Ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),mo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),mo.copy(n.boundingBox)),mo.applyMatrix4(t.matrixWorld),this.union(mo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ln),Ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Js),go.subVectors(this.max,Js),hs.subVectors(t.a,Js),us.subVectors(t.b,Js),ds.subVectors(t.c,Js),_i.subVectors(us,hs),yi.subVectors(ds,us),Ui.subVectors(hs,ds);let e=[0,-_i.z,_i.y,0,-yi.z,yi.y,0,-Ui.z,Ui.y,_i.z,0,-_i.x,yi.z,0,-yi.x,Ui.z,0,-Ui.x,-_i.y,_i.x,0,-yi.y,yi.x,0,-Ui.y,Ui.x,0];return!$c(e,hs,us,ds,go)||(e=[1,0,0,0,1,0,0,0,1],!$c(e,hs,us,ds,go))?!1:(xo.crossVectors(_i,yi),e=[xo.x,xo.y,xo.z],$c(e,hs,us,ds,go))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ri=[new O,new O,new O,new O,new O,new O,new O,new O],Ln=new O,mo=new nn,hs=new O,us=new O,ds=new O,_i=new O,yi=new O,Ui=new O,Js=new O,go=new O,xo=new O,Fi=new O;function $c(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Fi.fromArray(i,r);let a=s.x*Math.abs(Fi.x)+s.y*Math.abs(Fi.y)+s.z*Math.abs(Fi.z),c=t.dot(Fi),l=e.dot(Fi),u=n.dot(Fi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var Ne=new O,_o=new nt,Dp=0,Me=class extends Gn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$u,this.updateRanges=[],this.gpuType=An,this.version=0,this._normalizationScale=t!==void 0?Hl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)_o.fromBufferAttribute(this,e),_o.applyMatrix3(t),this.setXY(e,_o.x,_o.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):td(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):ed(t,this.array)}};var fr=class extends Me{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var pr=class extends Me{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var zt=class extends Me{constructor(t,e,n){super(new Float32Array(t),e,n)}},Np=new nn,Ks=new O,Jc=new O,on=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Np.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ks.subVectors(t,this.center);let e=Ks.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ks,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Jc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ks.copy(t.center).add(Jc)),this.expandByPoint(Ks.copy(t.center).sub(Jc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Up=0,Mn=new fe,Kc=new Ce,fs=new O,fn=new nn,Qs=new nn,He=new O,re=class i extends Gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(op(t)?pr:fr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ie().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Mn.makeRotationFromQuaternion(t),this.applyMatrix4(Mn),this}rotateX(t){return Mn.makeRotationX(t),this.applyMatrix4(Mn),this}rotateY(t){return Mn.makeRotationY(t),this.applyMatrix4(Mn),this}rotateZ(t){return Mn.makeRotationZ(t),this.applyMatrix4(Mn),this}translate(t,e,n){return Mn.makeTranslation(t,e,n),this.applyMatrix4(Mn),this}scale(t,e,n){return Mn.makeScale(t,e,n),this.applyMatrix4(Mn),this}lookAt(t){return Kc.lookAt(t),Kc.updateMatrix(),this.applyMatrix4(Kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new zt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new on);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let n=this.boundingSphere.center;if(fn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Qs.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(fn.min,Qs.min),fn.expandByPoint(He),He.addVectors(fn.max,Qs.max),fn.expandByPoint(He)):(fn.expandByPoint(Qs.min),fn.expandByPoint(Qs.max))}fn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)He.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(He));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)He.fromBufferAttribute(a,l),c&&(fs.fromBufferAttribute(t,l),He.add(fs)),s=Math.max(s,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Me(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[],l=new Uint8Array(n.count);for(let L=0;L<n.count;L++)a[L]=new O,c[L]=new O;let u=new O,h=new O,f=new O,d=new nt,g=new nt,M=new nt,p=new O,m=new O;function x(L,I,w){l[L]=l[I]=l[w]=1,u.fromBufferAttribute(n,L),h.fromBufferAttribute(n,I),f.fromBufferAttribute(n,w),d.fromBufferAttribute(r,L),g.fromBufferAttribute(r,I),M.fromBufferAttribute(r,w),h.sub(u),f.sub(u),g.sub(d),M.sub(d);let E=1/(g.x*M.y-M.x*g.y);isFinite(E)&&(p.copy(h).multiplyScalar(M.y).addScaledVector(f,-g.y).multiplyScalar(E),m.copy(f).multiplyScalar(g.x).addScaledVector(h,-M.x).multiplyScalar(E),a[L].add(p),a[I].add(p),a[w].add(p),c[L].add(m),c[I].add(m),c[w].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let L=0,I=y.length;L<I;++L){let w=y[L],E=w.start,C=w.count;for(let A=E,U=E+C;A<U;A+=3)x(t.getX(A+0),t.getX(A+1),t.getX(A+2))}let v=new O,S=new O,b=new O,_=new O;function T(L){b.fromBufferAttribute(s,L),_.copy(b);let I=a[L];v.copy(I),v.sub(b.multiplyScalar(b.dot(I))).normalize(),S.crossVectors(_,I);let E=S.dot(c[L])<0?-1:1;o.setXYZW(L,v.x,v.y,v.z,E)}for(let L=0,I=n.count;L<I;++L)l[L]&&T(L);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Me(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new O,r=new O,o=new O,a=new O,c=new O,l=new O,u=new O,h=new O;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),M=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(a,c){let l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u),d=0,g=0;for(let M=0,p=c.length;M<p;M++){a.isInterleavedBufferAttribute?d=c[M]*a.data.stride+a.offset:d=c[M]*u;for(let m=0;m<u;m++)f[g++]=l[d++]}return new Me(f,u,h)}if(this.index===null)return te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){let f=l[u],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let d=l[h];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Qc=new O,Fp=new O,Op=new ie,mn=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Qc.subVectors(n,e).cross(Fp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Qc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Op.getNormalMatrix(t),s=this.coplanarPoint(Qc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Bp=0,li=class extends Gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=ts(),this.name="",this.type="Material",this.blending=Ds,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vl,this.blendDst=Ml,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fo,this.stencilZFail=Fo,this.stencilZPass=Fo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){te(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){te(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new yt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new mn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new nt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new nt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var oi=new O,jc=new O,yo=new O,vo=new O,mr=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,oi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=oi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(oi.copy(this.origin).addScaledVector(this.direction,e),oi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){jc.copy(t).add(e).multiplyScalar(.5),yo.copy(e).sub(t).normalize(),vo.copy(this.origin).sub(jc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(yo),a=vo.dot(this.direction),c=-vo.dot(yo),l=vo.lengthSq(),u=Math.abs(1-o*o),h,f,d,g;if(u>0)if(h=o*c-a,f=o*a-c,g=r*u,h>=0)if(f>=-g)if(f<=g){let M=1/u;h*=M,f*=M,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(jc).addScaledVector(yo,f),d}intersectSphere(t,e){if(t.radius<0)return null;oi.subVectors(t.center,this.origin);let n=oi.dot(this.direction),s=oi.dot(oi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,oi)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,h=t.x-o.x,f=t.y-o.y,d=t.z-o.z,g=e.x-o.x,M=e.y-o.y,p=e.z-o.z,m=n.x-o.x,x=n.y-o.y,y=n.z-o.z,v=Math.abs(c),S=Math.abs(l),b=Math.abs(u),_,T,L,I,w,E,C,A,U,N,V,W;if(v>=S&&v>=b?(L=c,E=h,U=g,W=m,c>=0?(_=l,T=u,I=f,w=d,C=M,A=p,N=x,V=y):(_=u,T=l,I=d,w=f,C=p,A=M,N=y,V=x)):S>=b?(L=l,E=f,U=M,W=x,l>=0?(_=u,T=c,I=d,w=h,C=p,A=g,N=y,V=m):(_=c,T=u,I=h,w=d,C=g,A=p,N=m,V=y)):(L=u,E=d,U=p,W=y,u>=0?(_=c,T=l,I=h,w=f,C=g,A=M,N=m,V=x):(_=l,T=c,I=f,w=h,C=M,A=g,N=x,V=m)),L===0)return null;let P=_/L,B=T/L,k=1/L,X=I-P*E,it=w-B*E,q=C-P*U,$=A-B*U,ot=N-P*W,ct=V-B*W,ut=ot*$-ct*q,gt=X*ct-it*ot,Ot=q*it-$*X;if(s){if(ut<0||gt<0||Ot<0)return null}else if((ut<0||gt<0||Ot<0)&&(ut>0||gt>0||Ot>0))return null;let Ct=ut+gt+Ot;if(Ct===0)return null;let It=k*(ut*E+gt*U+Ot*W);return(Ct>0?It<0:It>0)?null:this.at(It/Ct,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},sn=class extends li{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=_a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},$h=new fe,Oi=new mr,Mo=new on,Jh=new O,So=new O,bo=new O,To=new O,tl=new O,wo=new O,Kh=new O,Ao=new O,ne=class extends Ce{constructor(t=new re,e=new sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){wo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],h=r[c];u!==0&&(tl.fromBufferAttribute(h,t),o?wo.addScaledVector(tl,u):wo.addScaledVector(tl.sub(e),u))}e.add(wo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(r),Oi.copy(t.ray).recast(t.near),!(Mo.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(Mo,Jh)===null||Oi.origin.distanceToSquared(Jh)>(t.far-t.near)**2))&&($h.copy(r).invert(),Oi.copy(t.ray).applyMatrix4($h),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Oi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,M=f.length;g<M;g++){let p=f[g],m=o[p.materialIndex],x=Math.max(p.start,d.start),y=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let v=x,S=y;v<S;v+=3){let b=a.getX(v),_=a.getX(v+1),T=a.getX(v+2);s=Eo(this,m,t,n,l,u,h,b,_,T),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),M=Math.min(a.count,d.start+d.count);for(let p=g,m=M;p<m;p+=3){let x=a.getX(p),y=a.getX(p+1),v=a.getX(p+2);s=Eo(this,o,t,n,l,u,h,x,y,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,M=f.length;g<M;g++){let p=f[g],m=o[p.materialIndex],x=Math.max(p.start,d.start),y=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let v=x,S=y;v<S;v+=3){let b=v,_=v+1,T=v+2;s=Eo(this,m,t,n,l,u,h,b,_,T),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),M=Math.min(c.count,d.start+d.count);for(let p=g,m=M;p<m;p+=3){let x=p,y=p+1,v=p+2;s=Eo(this,o,t,n,l,u,h,x,y,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function zp(i,t,e,n,s,r,o,a){let c;if(t.side===rn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Ei,a),c===null)return null;Ao.copy(a),Ao.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Ao);return l<e.near||l>e.far?null:{distance:l,point:Ao.clone(),object:i}}function Eo(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,So),i.getVertexPosition(c,bo),i.getVertexPosition(l,To);let u=zp(i,t,e,n,So,bo,To,Kh);if(u){let h=new O;Mi.getBarycoord(Kh,So,bo,To,h),s&&(u.uv=Mi.getInterpolatedAttribute(s,a,c,l,h,new nt)),r&&(u.uv1=Mi.getInterpolatedAttribute(r,a,c,l,h,new nt)),o&&(u.normal=Mi.getInterpolatedAttribute(o,a,c,l,h,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new O,materialIndex:0};Mi.getNormal(So,bo,To,f.normal),u.face=f,u.barycoord=h}return u}var ki=class extends en{constructor(t=null,e=1,n=1,s,r,o,a,c,l=We,u=We,h,f){super(null,o,a,c,l,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var As=class extends Me{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ps=new fe,Qh=new fe,Co=[],jh=new nn,kp=new fe,js=new ne,tr=new on,bn=class extends ne{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new As(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,kp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new nn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ps),jh.copy(t.boundingBox).applyMatrix4(ps),this.boundingBox.union(jh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new on),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ps),tr.copy(t.boundingSphere).applyMatrix4(ps),this.boundingSphere.union(tr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(js.geometry=this.geometry,js.material=this.material,js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tr.copy(this.boundingSphere),tr.applyMatrix4(n),t.ray.intersectsSphere(tr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ps),Qh.multiplyMatrices(n,ps),js.matrixWorld=Qh,js.raycast(t,Co);for(let o=0,a=Co.length;o<a;o++){let c=Co[o];c.instanceId=r,c.object=this,e.push(c)}Co.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new As(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ki(new Float32Array(s*this.count),s,this.count,Fs,An));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Bi=new on,Vp=new nt(.5,.5),Ro=new O,Si=class{constructor(t=new mn,e=new mn,n=new mn,s=new mn,r=new mn,o=new mn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Sn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],f=r[6],d=r[7],g=r[8],M=r[9],p=r[10],m=r[11],x=r[12],y=r[13],v=r[14],S=r[15];if(s[0].setComponents(l-o,d-u,m-g,S-x).normalize(),s[1].setComponents(l+o,d+u,m+g,S+x).normalize(),s[2].setComponents(l+a,d+h,m+M,S+y).normalize(),s[3].setComponents(l-a,d-h,m-M,S-y).normalize(),n)s[4].setComponents(c,f,p,v).normalize(),s[5].setComponents(l-c,d-f,m-p,S-v).normalize();else if(s[4].setComponents(l-c,d-f,m-p,S-v).normalize(),e===Sn)s[5].setComponents(l+c,d+f,m+p,S+v).normalize();else if(e===vs)s[5].setComponents(c,f,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(t){Bi.center.set(0,0,0);let e=Vp.distanceTo(t.center);return Bi.radius=.7071067811865476+e,Bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ro.x=s.normal.x>0?t.max.x:t.min.x,Ro.y=s.normal.y>0?t.max.y:t.min.y,Ro.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ro)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},tu=new fe,Jo=class i{constructor(){this.coordinateSystem=Sn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];tu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Si),n[s].setFromProjectionMatrix(tu,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Si),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var gr=class extends en{constructor(t=[],e=Qi,n,s,r,o,a,c,l,u){super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Vi=class extends en{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var hi=class extends en{constructor(t,e,n=Dn,s,r,o,a=We,c=We,l,u=ci,h=1){if(u!==ci&&u!==di)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:h};super(f,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new bs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},xr=class extends hi{constructor(t,e=Dn,n=Qi,s,r,o=We,a=We,c,l=ci){let u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,n,s,r,o,a,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},_r=class extends en{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Tn=class i extends re{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],h=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new zt(l,3)),this.setAttribute("normal",new zt(u,3)),this.setAttribute("uv",new zt(h,2));function g(M,p,m,x,y,v,S,b,_,T,L){let I=v/_,w=S/T,E=v/2,C=S/2,A=b/2,U=_+1,N=T+1,V=0,W=0,P=new O;for(let B=0;B<N;B++){let k=B*w-C;for(let X=0;X<U;X++){let it=X*I-E;P[M]=it*x,P[p]=k*y,P[m]=A,l.push(P.x,P.y,P.z),P[M]=0,P[p]=0,P[m]=b>0?1:-1,u.push(P.x,P.y,P.z),h.push(X/_),h.push(1-B/T),V+=1}}for(let B=0;B<T;B++)for(let k=0;k<_;k++){let X=f+k+U*B,it=f+k+U*(B+1),q=f+(k+1)+U*(B+1),$=f+(k+1)+U*B;c.push(X,it,$),c.push(it,q,$),W+=6}a.addGroup(d,W,L),d+=W,f+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Wn=class i extends re{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],d=[],g=0,M=[],p=n/2,m=0;x(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new zt(h,3)),this.setAttribute("normal",new zt(f,3)),this.setAttribute("uv",new zt(d,2));function x(){let v=new O,S=new O,b=0,_=(e-t)/n;for(let T=0;T<=r;T++){let L=[],I=T/r,w=I*(e-t)+t;for(let E=0;E<=s;E++){let C=E/s,A=C*c+a,U=Math.sin(A),N=Math.cos(A);S.x=w*U,S.y=-I*n+p,S.z=w*N,h.push(S.x,S.y,S.z),v.set(U,_,N).normalize(),f.push(v.x,v.y,v.z),d.push(C,1-I),L.push(g++)}M.push(L)}for(let T=0;T<s;T++)for(let L=0;L<r;L++){let I=M[L][T],w=M[L+1][T],E=M[L+1][T+1],C=M[L][T+1];(t>0||L!==0)&&(u.push(I,w,C),b+=3),(e>0||L!==r-1)&&(u.push(w,E,C),b+=3)}l.addGroup(m,b,0),m+=b}function y(v){let S=g,b=new nt,_=new O,T=0,L=v===!0?t:e,I=v===!0?1:-1;for(let E=1;E<=s;E++)h.push(0,p*I,0),f.push(0,I,0),d.push(.5,.5),g++;let w=g;for(let E=0;E<=s;E++){let A=E/s*c+a,U=Math.cos(A),N=Math.sin(A);_.x=L*N,_.y=p*I,_.z=L*U,h.push(_.x,_.y,_.z),f.push(0,I,0),b.x=U*.5+.5,b.y=N*.5*I+.5,d.push(b.x,b.y),g++}for(let E=0;E<s;E++){let C=S+E,A=w+E;v===!0?u.push(A,A+1,C):u.push(A+1,A,C),T+=3}l.addGroup(m,T,v===!0?1:2),m+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},yr=class i extends Wn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},vr=class i extends re{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new zt(r,3)),this.setAttribute("normal",new zt(r.slice(),3)),this.setAttribute("uv",new zt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let y=new O,v=new O,S=new O;for(let b=0;b<e.length;b+=3)d(e[b+0],y),d(e[b+1],v),d(e[b+2],S),c(y,v,S,x)}function c(x,y,v,S){let b=S+1,_=[];for(let T=0;T<=b;T++){_[T]=[];let L=x.clone().lerp(v,T/b),I=y.clone().lerp(v,T/b),w=b-T;for(let E=0;E<=w;E++)E===0&&T===b?_[T][E]=L:_[T][E]=L.clone().lerp(I,E/w)}for(let T=0;T<b;T++)for(let L=0;L<2*(b-T)-1;L++){let I=Math.floor(L/2);L%2===0?(f(_[T][I+1]),f(_[T+1][I]),f(_[T][I])):(f(_[T][I+1]),f(_[T+1][I+1]),f(_[T+1][I]))}}function l(x){let y=new O;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(x),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function u(){let x=new O;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];let v=p(x)/2/Math.PI+.5,S=m(x)/Math.PI+.5;o.push(v,1-S)}g(),h()}function h(){for(let x=0;x<o.length;x+=6){let y=o[x+0],v=o[x+2],S=o[x+4],b=Math.max(y,v,S),_=Math.min(y,v,S);b>.9&&_<.1&&(y<.2&&(o[x+0]+=1),v<.2&&(o[x+2]+=1),S<.2&&(o[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function d(x,y){let v=x*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function g(){let x=new O,y=new O,v=new O,S=new O,b=new nt,_=new nt,T=new nt;for(let L=0,I=0;L<r.length;L+=9,I+=6){x.set(r[L+0],r[L+1],r[L+2]),y.set(r[L+3],r[L+4],r[L+5]),v.set(r[L+6],r[L+7],r[L+8]),b.set(o[I+0],o[I+1]),_.set(o[I+2],o[I+3]),T.set(o[I+4],o[I+5]),S.copy(x).add(y).add(v).divideScalar(3);let w=p(S);M(b,I+0,x,w),M(_,I+2,y,w),M(T,I+4,v,w)}}function M(x,y,v,S){S<0&&x.x===1&&(o[y]=x.x-1),v.x===0&&v.z===0&&(o[y]=S/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var _n=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){te("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let u=n[s],f=n[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new nt:new O);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new O,s=[],r=[],o=[],a=new O,c=new fe;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new O)}r[0]=new O,o[0]=new O;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ce(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ce(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Es=class extends _n{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new nt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ko=class extends Es{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Wl(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let f=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var eu=new O,nu=new O,el=new Wl,nl=new Wl,il=new Wl,Gi=class extends _n{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new O){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(nu.subVectors(s[0],s[1]).add(s[0]),l=nu);let h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(eu.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=eu),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(h),d),M=Math.pow(h.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(u),d);M<1e-4&&(M=1),g<1e-4&&(g=M),p<1e-4&&(p=M),el.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,M,p),nl.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,M,p),il.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,M,p)}else this.curveType==="catmullrom"&&(el.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),nl.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),il.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(el.calc(c),nl.calc(c),il.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function iu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Gp(i,t){let e=1-i;return e*e*t}function Hp(i,t){return 2*(1-i)*i*t}function Wp(i,t){return i*i*t}function sr(i,t,e,n){return Gp(i,t)+Hp(i,e)+Wp(i,n)}function Xp(i,t){let e=1-i;return e*e*e*t}function qp(i,t){let e=1-i;return 3*e*e*i*t}function Yp(i,t){return 3*(1-i)*i*i*t}function Zp(i,t){return i*i*i*t}function rr(i,t,e,n,s){return Xp(i,t)+qp(i,e)+Yp(i,n)+Zp(i,s)}var Mr=class extends _n{constructor(t=new nt,e=new nt,n=new nt,s=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new nt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(rr(t,s.x,r.x,o.x,a.x),rr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Qo=class extends _n{constructor(t=new O,e=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new O){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(rr(t,s.x,r.x,o.x,a.x),rr(t,s.y,r.y,o.y,a.y),rr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Sr=class extends _n{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jo=class extends _n{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},br=class extends _n{constructor(t=new nt,e=new nt,n=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(sr(t,s.x,r.x,o.x),sr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Tr=class extends _n{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(sr(t,s.x,r.x,o.x),sr(t,s.y,r.y,o.y),sr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Hi=class extends _n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(iu(a,c.x,l.x,u.x,h.x),iu(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new nt().fromArray(s))}return this}},ta=Object.freeze({__proto__:null,ArcCurve:Ko,CatmullRomCurve3:Gi,CubicBezierCurve:Mr,CubicBezierCurve3:Qo,EllipseCurve:Es,LineCurve:Sr,LineCurve3:jo,QuadraticBezierCurve:br,QuadraticBezierCurve3:Tr,SplineCurve:Hi}),ea=class extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ta[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new ta[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},wr=class extends ea{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Sr(this.currentPoint.clone(),new nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new br(this.currentPoint.clone(),new nt(t,e),new nt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Mr(this.currentPoint.clone(),new nt(t,e),new nt(n,s),new nt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Hi(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new Es(t,e,n,s,r,o,a,c);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Xn=class extends wr{constructor(t){super(t),this.uuid=ts(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new wr().fromJSON(s))}return this}};function $p(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=id(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=tm(i,t,r,e)),i.length>80*e){a=i[0],c=i[1];let u=a,h=c;for(let f=e;f<s;f+=e){let d=i[f],g=i[f+1];d<a&&(a=d),g<c&&(c=g),d>u&&(u=d),g>h&&(h=g)}l=Math.max(u-a,h-c),l=l!==0?32767/l:0}return Ar(r,o,e,a,c,l,0),o}function id(i,t,e,n,s){let r;if(s===um(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=su(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=su(o/n|0,i[o],i[o+1],r);return r&&Cs(r,r.next)&&(Cr(r),r=r.next),r}function Wi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Cs(e,e.next)||Ie(e.prev,e,e.next)===0)){if(Cr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ar(i,t,e,n,s,r,o){if(!i)return;!o&&r&&rm(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Kp(i,n,s,r):Jp(i)){t.push(c.i,i.i,l.i),Cr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Qp(Wi(i),t),Ar(i,t,e,n,s,r,2)):o===2&&jp(i,t,e,n,s,r):Ar(Wi(i),t,e,n,s,r,1);break}}}function Jp(i){let t=i.prev,e=i,n=i.next;if(Ie(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=Math.min(s,r,o),h=Math.min(a,c,l),f=Math.max(s,r,o),d=Math.max(a,c,l),g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&er(s,a,r,c,o,l,g.x,g.y)&&Ie(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Kp(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ie(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,f=o.y,d=Math.min(a,c,l),g=Math.min(u,h,f),M=Math.max(a,c,l),p=Math.max(u,h,f),m=ll(d,g,t,e,n),x=ll(M,p,t,e,n),y=i.prevZ,v=i.nextZ;for(;y&&y.z>=m&&v&&v.z<=x;){if(y.x>=d&&y.x<=M&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&er(a,u,c,h,l,f,y.x,y.y)&&Ie(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=d&&v.x<=M&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&er(a,u,c,h,l,f,v.x,v.y)&&Ie(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=m;){if(y.x>=d&&y.x<=M&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&er(a,u,c,h,l,f,y.x,y.y)&&Ie(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=x;){if(v.x>=d&&v.x<=M&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&er(a,u,c,h,l,f,v.x,v.y)&&Ie(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Qp(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Cs(n,s)&&rd(n,e,e.next,s)&&Er(n,s)&&Er(s,n)&&(t.push(n.i,e.i,s.i),Cr(e),Cr(e.next),e=i=s),e=e.next}while(e!==i);return Wi(e)}function jp(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&cm(o,a)){let c=od(o,a);o=Wi(o,o.next),c=Wi(c,c.next),Ar(o,t,e,n,s,r,0),Ar(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function tm(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=id(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(am(l))}s.sort(em);for(let r=0;r<s.length;r++)e=nm(s[r],e);return e}function em(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function nm(i,t){let e=im(i,t);if(!e)return t;let n=od(e,i);return Wi(n,n.next),Wi(e,e.next)}function im(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Cs(i,e))return e;do{if(Cs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let h=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>r&&(r=h,o=e.x<e.next.x?e:e.next,h===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&sd(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let h=Math.abs(s-e.y)/(n-e.x);Er(e,i)&&(h<u||h===u&&(e.x>o.x||e.x===o.x&&sm(o,e)))&&(o=e,u=h)}e=e.next}while(e!==a);return o}function sm(i,t){return Ie(i.prev,i,t.prev)<0&&Ie(t.next,i,i.next)<0}function rm(i,t,e,n){let s=i;do s.z===0&&(s.z=ll(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,om(s)}function om(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function ll(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function am(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function sd(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function er(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&sd(i,t,e,n,s,r,o,a)}function cm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!lm(i,t)&&(Er(i,t)&&Er(t,i)&&hm(i,t)&&(Ie(i.prev,i,t.prev)||Ie(i,t.prev,t))||Cs(i,t)&&Ie(i.prev,i,i.next)>0&&Ie(t.prev,t,t.next)>0)}function Ie(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Cs(i,t){return i.x===t.x&&i.y===t.y}function rd(i,t,e,n){let s=Po(Ie(i,t,e)),r=Po(Ie(i,t,n)),o=Po(Ie(e,n,i)),a=Po(Ie(e,n,t));return!!(s!==r&&o!==a||s===0&&Io(i,e,t)||r===0&&Io(i,n,t)||o===0&&Io(e,i,n)||a===0&&Io(e,t,n))}function Io(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Po(i){return i>0?1:i<0?-1:0}function lm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&rd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Er(i,t){return Ie(i.prev,i,i.next)<0?Ie(i,t,i.next)>=0&&Ie(i,i.prev,t)>=0:Ie(i,t,i.prev)<0||Ie(i,i.next,t)<0}function hm(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function od(i,t){let e=hl(i.i,i.x,i.y),n=hl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function su(i,t,e,n){let s=hl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Cr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function hl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function um(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var ul=class{static triangulate(t,e,n=2){return $p(t,e,n)}},Vn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];ru(t),ou(n,t);let o=t.length;e.forEach(ru);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,ou(n,e[c]);let a=ul.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function ru(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ou(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Rs=class i extends re{constructor(t=new Xn([new nt(.5,.5),new nt(-.5,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new zt(s,3)),this.setAttribute("uv",new zt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:dm,y,v=!1,S,b,_,T;if(m){y=m.getSpacedPoints(u),v=!0,f=!1;let dt=m.isCatmullRomCurve3?m.closed:!1;S=m.computeFrenetFrames(u,dt),b=new O,_=new O,T=new O}f||(p=0,d=0,g=0,M=0);let L=a.extractPoints(l),I=L.shape,w=L.holes;if(!Vn.isClockWise(I)){I=I.reverse();for(let dt=0,St=w.length;dt<St;dt++){let _t=w[dt];Vn.isClockWise(_t)&&(w[dt]=_t.reverse())}}function C(dt){let _t=10000000000000001e-36,Dt=dt[0];for(let Mt=1;Mt<=dt.length;Mt++){let z=Mt%dt.length,J=dt[z],mt=J.x-Dt.x,Lt=J.y-Dt.y,At=mt*mt+Lt*Lt,G=Math.max(Math.abs(J.x),Math.abs(J.y),Math.abs(Dt.x),Math.abs(Dt.y)),Yt=_t*G*G;if(At<=Yt){dt.splice(z,1),Mt--;continue}Dt=J}}C(I),w.forEach(C);let A=w.length,U=I;for(let dt=0;dt<A;dt++){let St=w[dt];I=I.concat(St)}function N(dt,St,_t){return St||ee("ExtrudeGeometry: vec does not exist"),dt.clone().addScaledVector(St,_t)}let V=I.length;function W(dt,St,_t){let Dt,Mt,z,J=dt.x-St.x,mt=dt.y-St.y,Lt=_t.x-dt.x,At=_t.y-dt.y,G=J*J+mt*mt,Yt=J*At-mt*Lt;if(Math.abs(Yt)>Number.EPSILON){let Wt=Math.sqrt(G),Xt=Math.sqrt(Lt*Lt+At*At),ft=St.x-mt/Wt,jt=St.y+J/Wt,Bt=_t.x-At/Xt,Zt=_t.y+Lt/Xt,F=((Bt-ft)*At-(Zt-jt)*Lt)/(J*At-mt*Lt);Dt=ft+J*F-dt.x,Mt=jt+mt*F-dt.y;let R=Dt*Dt+Mt*Mt;if(R<=2)return new nt(Dt,Mt);z=Math.sqrt(R/2)}else{let Wt=!1;J>Number.EPSILON?Lt>Number.EPSILON&&(Wt=!0):J<-Number.EPSILON?Lt<-Number.EPSILON&&(Wt=!0):Math.sign(mt)===Math.sign(At)&&(Wt=!0),Wt?(Dt=-mt,Mt=J,z=Math.sqrt(G)):(Dt=J,Mt=mt,z=Math.sqrt(G/2))}return new nt(Dt/z,Mt/z)}let P=[];for(let dt=0,St=U.length,_t=St-1,Dt=dt+1;dt<St;dt++,_t++,Dt++)_t===St&&(_t=0),Dt===St&&(Dt=0),P[dt]=W(U[dt],U[_t],U[Dt]);let B=[],k,X=P.concat();for(let dt=0,St=A;dt<St;dt++){let _t=w[dt];k=[];for(let Dt=0,Mt=_t.length,z=Mt-1,J=Dt+1;Dt<Mt;Dt++,z++,J++)z===Mt&&(z=0),J===Mt&&(J=0),k[Dt]=W(_t[Dt],_t[z],_t[J]);B.push(k),X=X.concat(k)}let it;if(p===0)it=Vn.triangulateShape(U,w);else{let dt=[],St=[];for(let _t=0;_t<p;_t++){let Dt=_t/p,Mt=d*Math.cos(Dt*Math.PI/2),z=g*Math.sin(Dt*Math.PI/2)+M;for(let J=0,mt=U.length;J<mt;J++){let Lt=N(U[J],P[J],z);gt(Lt.x,Lt.y,-Mt),Dt===0&&dt.push(Lt)}for(let J=0,mt=A;J<mt;J++){let Lt=w[J];k=B[J];let At=[];for(let G=0,Yt=Lt.length;G<Yt;G++){let Wt=N(Lt[G],k[G],z);gt(Wt.x,Wt.y,-Mt),Dt===0&&At.push(Wt)}Dt===0&&St.push(At)}}it=Vn.triangulateShape(dt,St)}let q=it.length,$=g+M;for(let dt=0;dt<V;dt++){let St=f?N(I[dt],X[dt],$):I[dt];v?(_.copy(S.normals[0]).multiplyScalar(St.x),b.copy(S.binormals[0]).multiplyScalar(St.y),T.copy(y[0]).add(_).add(b),gt(T.x,T.y,T.z)):gt(St.x,St.y,0)}for(let dt=1;dt<=u;dt++)for(let St=0;St<V;St++){let _t=f?N(I[St],X[St],$):I[St];v?(_.copy(S.normals[dt]).multiplyScalar(_t.x),b.copy(S.binormals[dt]).multiplyScalar(_t.y),T.copy(y[dt]).add(_).add(b),gt(T.x,T.y,T.z)):gt(_t.x,_t.y,h/u*dt)}for(let dt=p-1;dt>=0;dt--){let St=dt/p,_t=d*Math.cos(St*Math.PI/2),Dt=g*Math.sin(St*Math.PI/2)+M;for(let Mt=0,z=U.length;Mt<z;Mt++){let J=N(U[Mt],P[Mt],Dt);gt(J.x,J.y,h+_t)}for(let Mt=0,z=w.length;Mt<z;Mt++){let J=w[Mt];k=B[Mt];for(let mt=0,Lt=J.length;mt<Lt;mt++){let At=N(J[mt],k[mt],Dt);v?gt(At.x,At.y+y[u-1].y,y[u-1].x+_t):gt(At.x,At.y,h+_t)}}}ot(),ct();function ot(){let dt=s.length/3;if(f){let St=0,_t=V*St;for(let Dt=0;Dt<q;Dt++){let Mt=it[Dt];Ot(Mt[2]+_t,Mt[1]+_t,Mt[0]+_t)}St=u+p*2,_t=V*St;for(let Dt=0;Dt<q;Dt++){let Mt=it[Dt];Ot(Mt[0]+_t,Mt[1]+_t,Mt[2]+_t)}}else{for(let St=0;St<q;St++){let _t=it[St];Ot(_t[2],_t[1],_t[0])}for(let St=0;St<q;St++){let _t=it[St];Ot(_t[0]+V*u,_t[1]+V*u,_t[2]+V*u)}}n.addGroup(dt,s.length/3-dt,0)}function ct(){let dt=s.length/3,St=0;ut(U,St),St+=U.length;for(let _t=0,Dt=w.length;_t<Dt;_t++){let Mt=w[_t];ut(Mt,St),St+=Mt.length}n.addGroup(dt,s.length/3-dt,1)}function ut(dt,St){let _t=dt.length;for(;--_t>=0;){let Dt=_t,Mt=_t-1;Mt<0&&(Mt=dt.length-1);for(let z=0,J=u+p*2;z<J;z++){let mt=V*z,Lt=V*(z+1),At=St+Dt+mt,G=St+Mt+mt,Yt=St+Mt+Lt,Wt=St+Dt+Lt;Ct(At,G,Yt,Wt)}}}function gt(dt,St,_t){c.push(dt),c.push(St),c.push(_t)}function Ot(dt,St,_t){It(dt),It(St),It(_t);let Dt=s.length/3,Mt=x.generateTopUV(n,s,Dt-3,Dt-2,Dt-1);kt(Mt[0]),kt(Mt[1]),kt(Mt[2])}function Ct(dt,St,_t,Dt){It(dt),It(St),It(Dt),It(St),It(_t),It(Dt);let Mt=s.length/3,z=x.generateSideWallUV(n,s,Mt-6,Mt-3,Mt-2,Mt-1);kt(z[0]),kt(z[1]),kt(z[3]),kt(z[1]),kt(z[2]),kt(z[3])}function It(dt){s.push(c[dt*3+0]),s.push(c[dt*3+1]),s.push(c[dt*3+2])}function kt(dt){r.push(dt.x),r.push(dt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return fm(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ta[s.type]().fromJSON(s)),new i(n,t.options)}},dm={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new nt(r,o),new nt(a,c),new nt(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],M=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new nt(o,1-c),new nt(l,1-h),new nt(f,1-g),new nt(M,1-m)]:[new nt(a,1-c),new nt(u,1-h),new nt(d,1-g),new nt(p,1-m)]}};function fm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Xi=class i extends vr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},qi=class i extends re{constructor(t=[new nt(0,-.5),new nt(.5,0),new nt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ce(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],u=1/e,h=new O,f=new nt,d=new O,g=new O,M=new O,p=0,m=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:p=t[x+1].x-t[x].x,m=t[x+1].y-t[x].y,d.x=m*1,d.y=-p,d.z=m*0,M.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:M.normalize(),c.push(M.x,M.y,M.z);break;default:p=t[x+1].x-t[x].x,m=t[x+1].y-t[x].y,d.x=m*1,d.y=-p,d.z=m*0,g.copy(d),d.x+=M.x,d.y+=M.y,d.z+=M.z,d.normalize(),c.push(d.x,d.y,d.z),M.copy(g)}for(let x=0;x<=e;x++){let y=n+x*u*s,v=Math.sin(y),S=Math.cos(y);for(let b=0;b<=t.length-1;b++){h.x=t[b].x*v,h.y=t[b].y,h.z=t[b].x*S,o.push(h.x,h.y,h.z),f.x=x/e,f.y=b/(t.length-1),a.push(f.x,f.y);let _=c[3*b+0]*v,T=c[3*b+1],L=c[3*b+0]*S;l.push(_,T,L)}}for(let x=0;x<e;x++)for(let y=0;y<t.length-1;y++){let v=y+x*t.length,S=v,b=v+t.length,_=v+t.length+1,T=v+1;r.push(S,b,T),r.push(_,T,b)}this.setIndex(r),this.setAttribute("position",new zt(o,3)),this.setAttribute("uv",new zt(a,2)),this.setAttribute("normal",new zt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Rr=class i extends vr{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Yi=class i extends re{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=t/a,f=e/c,d=[],g=[],M=[],p=[];for(let m=0;m<u;m++){let x=m*f-o;for(let y=0;y<l;y++){let v=y*h-r;g.push(v,-x,0),M.push(0,0,1),p.push(y/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let x=0;x<a;x++){let y=x+l*m,v=x+l*(m+1),S=x+1+l*(m+1),b=x+1+l*m;d.push(y,v,b),d.push(v,S,b)}this.setIndex(d),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(M,3)),this.setAttribute("uv",new zt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ir=class i extends re{constructor(t=new Xn([new nt(0,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new zt(s,3)),this.setAttribute("normal",new zt(r,3)),this.setAttribute("uv",new zt(o,2));function l(u){let h=s.length/3,f=u.extractPoints(e),d=f.shape,g=f.holes;Vn.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=g.length;p<m;p++){let x=g[p];Vn.isClockWise(x)===!0&&(g[p]=x.reverse())}let M=Vn.triangulateShape(d,g);for(let p=0,m=g.length;p<m;p++){let x=g[p];d=d.concat(x)}for(let p=0,m=d.length;p<m;p++){let x=d[p];s.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let p=0,m=M.length;p<m;p++){let x=M[p],y=x[0]+h,v=x[1]+h,S=x[2]+h;n.push(y,v,S),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return pm(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function pm(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var bi=class i extends re{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new O,f=new O,d=[],g=[],M=[],p=[];for(let m=0;m<=n;m++){let x=[],y=m/n,v=o+y*a,S=t*Math.cos(v),b=Math.sqrt(t*t-S*S),_=0;m===0&&o===0?_=.5/e:m===n&&c===Math.PI&&(_=-.5/e);for(let T=0;T<=e;T++){let L=T/e,I=s+L*r;h.x=-b*Math.cos(I),h.y=S,h.z=b*Math.sin(I),g.push(h.x,h.y,h.z),f.copy(h).normalize(),M.push(f.x,f.y,f.z),p.push(L+_,1-y),x.push(l++)}u.push(x)}for(let m=0;m<n;m++)for(let x=0;x<e;x++){let y=u[m][x+1],v=u[m][x],S=u[m+1][x],b=u[m+1][x+1];(m!==0||o>0)&&d.push(y,v,b),(m!==n-1||c<Math.PI)&&d.push(v,S,b)}this.setIndex(d),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(M,3)),this.setAttribute("uv",new zt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Pr=class i extends re{constructor(t=new Tr(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new O,c=new O,l=new nt,u=new O,h=[],f=[],d=[],g=[];M(),this.setIndex(g),this.setAttribute("position",new zt(h,3)),this.setAttribute("normal",new zt(f,3)),this.setAttribute("uv",new zt(d,2));function M(){for(let y=0;y<e;y++)p(y);p(r===!1?e:0),x(),m()}function p(y){u=t.getPointAt(y/e,u);let v=o.normals[y],S=o.binormals[y];for(let b=0;b<=s;b++){let _=b/s*Math.PI*2,T=Math.sin(_),L=-Math.cos(_);c.x=L*v.x+T*S.x,c.y=L*v.y+T*S.y,c.z=L*v.z+T*S.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,h.push(a.x,a.y,a.z)}}function m(){for(let y=1;y<=e;y++)for(let v=1;v<=s;v++){let S=(s+1)*(y-1)+(v-1),b=(s+1)*y+(v-1),_=(s+1)*y+v,T=(s+1)*(y-1)+v;g.push(S,b,T),g.push(b,_,T)}}function x(){for(let y=0;y<=e;y++)for(let v=0;v<=s;v++)l.x=y/e,l.y=v/s,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new ta[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function es(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(au(s))s.isRenderTargetTexture?(te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(au(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Qe(i){let t={};for(let e=0;e<i.length;e++){let n=es(i[e]);for(let s in n)t[s]=n[s]}return t}function au(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function mm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Xl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}var ad={clone:es,merge:Qe},gm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wn=class extends li{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gm,this.fragmentShader=xm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=es(t.uniforms),this.uniformsGroups=mm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new yt().setHex(s.value);break;case"v2":this.uniforms[n].value=new nt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new O().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Te().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ie().fromArray(s.value);break;case"m4":this.uniforms[n].value=new fe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},na=class extends wn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ia=class extends li{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qr,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Is=class extends ia{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ce(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new yt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new yt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new yt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return zi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){zi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var we=class extends li{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qr,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=_a,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},sa=class extends li{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ra=class extends li{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ms(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Lo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ti=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},oa=class extends Ti{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ol,endingEnd:ol}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case al:r=t,a=2*e-n;break;case cl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case al:o=t,c=2*n-e;break;case cl:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),M=g*g,p=M*g,m=-f*p+2*f*M-f*g,x=(1+f)*p+(-1.5-2*f)*M+(-.5+f)*g+1,y=(-1-d)*p+(1.5+d)*M+.5*g,v=d*p-d*M;for(let S=0;S!==a;++S)r[S]=m*o[u+S]+x*o[l+S]+y*o[c+S]+v*o[h+S];return r}},aa=class extends Ti{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(n-e)/(s-e),h=1-u;for(let f=0;f!==a;++f)r[f]=o[l+f]*h+o[c+f]*u;return r}},ca=class extends Ti{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},la=class extends Ti{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let g=(n-e)/(s-e),M=1-g;for(let p=0;p!==a;++p)r[p]=o[l+p]*M+o[c+p]*g;return r}let f=a*2,d=t-1;for(let g=0;g!==a;++g){let M=o[l+g],p=o[c+g],m=d*f+g*2,x=h[m],y=h[m+1],v=t*f+g*2,S=u[v],b=u[v+1],_=ym(n,e,x,S,s);r[g]=cd(_,M,y,b,p)}return r}};function cd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function _m(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function ym(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=cd(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let c=_m(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var yn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ms(e,this.TimeBufferType),this.values=ms(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ms(t.times,Array),values:ms(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Lo(t.settings)&&(n.settings={inTangents:ms(t.settings.inTangents,Array),outTangents:ms(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ca(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new aa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new oa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new la(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case or:e=this.InterpolantFactoryMethodDiscrete;break;case qo:e=this.InterpolantFactoryMethodLinear;break;case Uo:e=this.InterpolantFactoryMethodSmooth;break;case rl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return te("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return or;case this.InterpolantFactoryMethodLinear:return qo;case this.InterpolantFactoryMethodSmooth:return Uo;case this.InterpolantFactoryMethodBezier:return rl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Lo(this.settings)&&(cu(this.settings.inTangents,t),cu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Lo(this.settings)&&(lu(this.settings.inTangents,t),lu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ee("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ee("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){ee("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){ee("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&ap(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){ee("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Uo,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(s)c=!0;else{let h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){let M=e[h+g];if(M!==e[f+g]||M!==e[d+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[h+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Lo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function cu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function lu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=qo;var wi=class extends yn{constructor(t,e,n){super(t,e,n)}};wi.prototype.ValueTypeName="bool";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=or;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var ha=class extends yn{constructor(t,e,n,s){super(t,e,n,s)}};ha.prototype.ValueTypeName="color";var ua=class extends yn{constructor(t,e,n,s){super(t,e,n,s)}};ua.prototype.ValueTypeName="number";var da=class extends Ti{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let u=l+a;l!==u;l+=4)Ye.slerpFlat(r,0,o,l-a,o,l,c);return r}},Lr=class extends yn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new da(this.times,this.values,this.getValueSize(),t)}};Lr.prototype.ValueTypeName="quaternion";Lr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ai=class extends yn{constructor(t,e,n){super(t,e,n)}};Ai.prototype.ValueTypeName="string";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=or;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var fa=class extends yn{constructor(t,e,n,s){super(t,e,n,s)}};fa.prototype.ValueTypeName="vector";var pa=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let d=l[h],g=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ld=new pa,ma=class{constructor(t){this.manager=t!==void 0?t:ld,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};ma.DEFAULT_MATERIAL_NAME="__DEFAULT";var Dr=class extends Ce{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Nr=class extends Dr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},sl=new fe,hu=new O,uu=new O,ga=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=cn,this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Si,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;hu.setFromMatrixPosition(t.matrixWorld),e.position.copy(hu),uu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(uu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){sl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(sl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===vs||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(sl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Do=new O,No=new Ye,zn=new O,Ur=class extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Do,No,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Do,No,zn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Do,No,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Do,No,zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},vi=new O,du=new nt,fu=new nt,gn=class extends Ur{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ss*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(nr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vi.x,vi.y).multiplyScalar(-t/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-t/vi.z)}getViewSize(t,e){return this.getViewBounds(t,du,fu),e.subVectors(fu,du)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(nr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Zi=class extends Ur{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},dl=class extends ga{constructor(){super(new Zi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fr=class extends Dr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new dl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var gs=-90,xs=1,Ps=class extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new gn(gs,xs,t,e);s.layers=this.layers,this.add(s);let r=new gn(gs,xs,t,e);r.layers=this.layers,this.add(r);let o=new gn(gs,xs,t,e);o.layers=this.layers,this.add(o);let a=new gn(gs,xs,t,e);a.layers=this.layers,this.add(a);let c=new gn(gs,xs,t,e);c.layers=this.layers,this.add(c);let l=new gn(gs,xs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===vs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.mipmapsAutoUpdate=M,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},xa=class extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var ql="\\[\\]\\.:\\/",vm=new RegExp("["+ql+"]","g"),Yl="[^"+ql+"]",Mm="[^"+ql.replace("\\.","")+"]",Sm=/((?:WC+[\/:])*)/.source.replace("WC",Yl),bm=/(WCOD+)?/.source.replace("WCOD",Mm),Tm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yl),wm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yl),Am=new RegExp("^"+Sm+bm+Tm+wm+"$"),Em=["material","materials","bones","map"],fl=class{constructor(t,e,n){let s=n||Ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ae=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(vm,"")}static parseTrackName(t){let e=Am.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Em.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){te("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ee("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ee("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ee("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ee("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){ee("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;ee("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ae.Composite=fl;Ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ae.prototype.GetterByBindingType=[Ae.prototype._getValue_direct,Ae.prototype._getValue_array,Ae.prototype._getValue_arrayElement,Ae.prototype._getValue_toArray];Ae.prototype.SetterByBindingTypeAndVersioning=[[Ae.prototype._setValue_direct,Ae.prototype._setValue_direct_setNeedsUpdate,Ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_array,Ae.prototype._setValue_array_setNeedsUpdate,Ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_arrayElement,Ae.prototype._setValue_arrayElement_setNeedsUpdate,Ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_fromArray,Ae.prototype._setValue_fromArray_setNeedsUpdate,Ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Py=new Float32Array(1);var pu=new fe,Or=class{constructor(t,e,n=0,s=1/0){this.ray=new mr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ts,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ee("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return pu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pu),this}intersectObject(t,e=!0,n=[]){return pl(t,this,n,e),n.sort(mu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)pl(t[s],this,n,e);return n.sort(mu),n}};function mu(i,t){return i.distance-t.distance}function pl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)pl(r[o],t,e,!0)}}var ml=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}},gu=new nt,Br=class{constructor(t=new nt(1/0,1/0),e=new nt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=gu.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gu).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}};function Zl(i,t,e,n){let s=Cm(n);switch(e){case Nl:return i*t;case Fs:return i*t/s.components*s.byteLength;case wa:return i*t/s.components*s.byteLength;case Ci:return i*t*2/s.components*s.byteLength;case Aa:return i*t*2/s.components*s.byteLength;case Ul:return i*t*3/s.components*s.byteLength;case Un:return i*t*4/s.components*s.byteLength;case Ea:return i*t*4/s.components*s.byteLength;case kr:case Vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Gr:case Hr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ra:case Pa:return Math.max(i,16)*Math.max(t,8)/4;case Ca:case Ia:return Math.max(i,8)*Math.max(t,8)/2;case La:case Da:case Ua:case Fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Na:case Wr:case Oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case za:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ka:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Va:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Xa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case qa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Za:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case $a:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ja:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ka:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Qa:case ja:case tc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ec:case nc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Xr:case ic:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Cm(i){switch(i){case cn:case Il:return{byteLength:1,components:1};case Us:case Pl:case Nn:return{byteLength:2,components:1};case ba:case Ta:return{byteLength:2,components:4};case Dn:case Sa:case An:return{byteLength:4,components:1};case Ll:case Dl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?te("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Pd(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Um(i){let t=new WeakMap;function e(a,c){let l=a.array,u=a.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){let u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){let g=h[f],M=h[d];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++f,h[f]=M)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){let M=h[d];i.bufferSubData(l,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Fm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Om=`#ifdef USE_ALPHAHASH
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
#endif`,Bm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,km=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gm=`#ifdef USE_AOMAP
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
#endif`,Hm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wm=`#ifdef USE_BATCHING
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
#endif`,Xm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ym=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$m=`#ifdef USE_IRIDESCENCE
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
#endif`,Jm=`#ifdef USE_BUMPMAP
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
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,e0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,n0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,i0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,s0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,r0=`#define PI 3.141592653589793
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
} // validated`,o0=`vec3 transformedNormal = objectNormal;
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
#endif`,a0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,c0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,l0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,h0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,u0="gl_FragColor = linearToOutputTexel( gl_FragColor );",d0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,f0=`#ifdef USE_ENVMAP
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
#endif`,p0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,m0=`#ifdef USE_ENVMAP
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
#endif`,g0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,x0=`#ifdef USE_ENVMAP
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
#endif`,_0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,y0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,v0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,M0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,S0=`#ifdef USE_GRADIENTMAP
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
}`,b0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,T0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,w0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,A0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,E0=`#ifdef USE_ENVMAP
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
#endif`,C0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,R0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,I0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,P0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,L0=`PhysicalMaterial material;
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
#endif`,D0=`uniform sampler2D dfgLUT;
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
}`,N0=`
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
#endif`,U0=`#if defined( RE_IndirectDiffuse )
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
#endif`,F0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,O0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,B0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,z0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,G0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,H0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,W0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,X0=`#if defined( USE_POINTS_UV )
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
#endif`,q0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Y0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Z0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$0=`#if defined( USE_MORPHCOLORS )
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
#endif`,J0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K0=`#ifdef USE_MORPHTARGETS
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
#endif`,Q0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ig=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,sg=`#ifdef USE_NORMALMAP
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
#endif`,rg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,og=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ag=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ug=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_g=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vg=`float getShadowMask() {
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
}`,Mg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sg=`#ifdef USE_SKINNING
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
#endif`,bg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tg=`#ifdef USE_SKINNING
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
#endif`,wg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ag=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Eg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rg=`#ifdef USE_TRANSMISSION
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
#endif`,Ig=`#ifdef USE_TRANSMISSION
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
#endif`,Pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ng=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ug=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fg=`uniform sampler2D t2D;
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
}`,Og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bg=`uniform float backgroundBlurriness;
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
}`,zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vg=`#include <common>
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
}`,Gg=`#if DEPTH_PACKING == 3200
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
}`,Hg=`#define DISTANCE
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
}`,Wg=`#define DISTANCE
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
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yg=`uniform float scale;
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
}`,Zg=`uniform vec3 diffuse;
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
}`,$g=`#include <common>
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
}`,Jg=`uniform vec3 diffuse;
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
}`,Kg=`#define LAMBERT
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
}`,Qg=`#define LAMBERT
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
}`,jg=`#define MATCAP
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
}`,t1=`#define MATCAP
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
}`,e1=`#define NORMAL
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
}`,n1=`#define NORMAL
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
}`,i1=`#define PHONG
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
}`,s1=`#define PHONG
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
}`,r1=`#define STANDARD
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
}`,o1=`#define STANDARD
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
}`,a1=`#define TOON
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
}`,c1=`#define TOON
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
}`,l1=`uniform float size;
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
}`,h1=`uniform vec3 diffuse;
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
}`,u1=`#include <common>
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
}`,d1=`uniform vec3 color;
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
}`,f1=`uniform float rotation;
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
}`,p1=`uniform vec3 diffuse;
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
}`,le={alphahash_fragment:Fm,alphahash_pars_fragment:Om,alphamap_fragment:Bm,alphamap_pars_fragment:zm,alphatest_fragment:km,alphatest_pars_fragment:Vm,aomap_fragment:Gm,aomap_pars_fragment:Hm,batching_pars_vertex:Wm,batching_vertex:Xm,begin_vertex:qm,beginnormal_vertex:Ym,bsdfs:Zm,iridescence_fragment:$m,bumpmap_pars_fragment:Jm,clipping_planes_fragment:Km,clipping_planes_pars_fragment:Qm,clipping_planes_pars_vertex:jm,clipping_planes_vertex:t0,color_fragment:e0,color_pars_fragment:n0,color_pars_vertex:i0,color_vertex:s0,common:r0,defaultnormal_vertex:o0,displacementmap_pars_vertex:a0,displacementmap_vertex:c0,emissivemap_fragment:l0,emissivemap_pars_fragment:h0,colorspace_fragment:u0,colorspace_pars_fragment:d0,envmap_fragment:f0,envmap_common_pars_fragment:p0,envmap_pars_fragment:m0,envmap_pars_vertex:g0,envmap_physical_pars_fragment:E0,envmap_vertex:x0,fog_vertex:_0,fog_pars_vertex:y0,fog_fragment:v0,fog_pars_fragment:M0,gradientmap_pars_fragment:S0,lightmap_pars_fragment:b0,lights_lambert_fragment:T0,lights_lambert_pars_fragment:w0,lights_pars_begin:A0,lights_toon_fragment:C0,lights_toon_pars_fragment:R0,lights_phong_fragment:I0,lights_phong_pars_fragment:P0,lights_physical_fragment:L0,lights_physical_pars_fragment:D0,lights_fragment_begin:N0,lights_fragment_maps:U0,lights_fragment_end:F0,lightprobes_pars_fragment:O0,logdepthbuf_fragment:B0,logdepthbuf_pars_fragment:z0,logdepthbuf_pars_vertex:k0,logdepthbuf_vertex:V0,map_fragment:G0,map_pars_fragment:H0,map_particle_fragment:W0,map_particle_pars_fragment:X0,metalnessmap_fragment:q0,metalnessmap_pars_fragment:Y0,morphinstance_vertex:Z0,morphcolor_vertex:$0,morphnormal_vertex:J0,morphtarget_pars_vertex:K0,morphtarget_vertex:Q0,normal_fragment_begin:j0,normal_fragment_maps:tg,normal_pars_fragment:eg,normal_pars_vertex:ng,normal_vertex:ig,normalmap_pars_fragment:sg,clearcoat_normal_fragment_begin:rg,clearcoat_normal_fragment_maps:og,clearcoat_pars_fragment:ag,iridescence_pars_fragment:cg,opaque_fragment:lg,packing:hg,premultiplied_alpha_fragment:ug,project_vertex:dg,dithering_fragment:fg,dithering_pars_fragment:pg,roughnessmap_fragment:mg,roughnessmap_pars_fragment:gg,shadowmap_pars_fragment:xg,shadowmap_pars_vertex:_g,shadowmap_vertex:yg,shadowmask_pars_fragment:vg,skinbase_vertex:Mg,skinning_pars_vertex:Sg,skinning_vertex:bg,skinnormal_vertex:Tg,specularmap_fragment:wg,specularmap_pars_fragment:Ag,tonemapping_fragment:Eg,tonemapping_pars_fragment:Cg,transmission_fragment:Rg,transmission_pars_fragment:Ig,uv_pars_fragment:Pg,uv_pars_vertex:Lg,uv_vertex:Dg,worldpos_vertex:Ng,background_vert:Ug,background_frag:Fg,backgroundCube_vert:Og,backgroundCube_frag:Bg,cube_vert:zg,cube_frag:kg,depth_vert:Vg,depth_frag:Gg,distance_vert:Hg,distance_frag:Wg,equirect_vert:Xg,equirect_frag:qg,linedashed_vert:Yg,linedashed_frag:Zg,meshbasic_vert:$g,meshbasic_frag:Jg,meshlambert_vert:Kg,meshlambert_frag:Qg,meshmatcap_vert:jg,meshmatcap_frag:t1,meshnormal_vert:e1,meshnormal_frag:n1,meshphong_vert:i1,meshphong_frag:s1,meshphysical_vert:r1,meshphysical_frag:o1,meshtoon_vert:a1,meshtoon_frag:c1,points_vert:l1,points_frag:h1,shadow_vert:u1,shadow_frag:d1,sprite_vert:f1,sprite_frag:p1},Ut={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},Zn={basic:{uniforms:Qe([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:Qe([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new yt(0)},envMapIntensity:{value:1}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:Qe([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:Qe([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:Qe([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new yt(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:Qe([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:Qe([Ut.points,Ut.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:Qe([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:Qe([Ut.common,Ut.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:Qe([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:Qe([Ut.sprite,Ut.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distance:{uniforms:Qe([Ut.common,Ut.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distance_vert,fragmentShader:le.distance_frag},shadow:{uniforms:Qe([Ut.lights,Ut.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};Zn.physical={uniforms:Qe([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ie},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};var sc={r:0,b:0,g:0},m1=new fe,Ld=new ie;Ld.set(-1,0,0,0,1,0,0,0,1);function g1(i,t,e,n,s,r){let o=new yt(0),a=s===!0?0:1,c,l,u=null,h=0,f=null;function d(x){let y=x.isScene===!0?x.background:null;if(y&&y.isTexture){let v=x.backgroundBlurriness>0;y=t.get(y,v)}return y}function g(x){let y=!1,v=d(x);v===null?p(o,a):v&&v.isColor&&(p(v,1),y=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(x,y){let v=d(y);v&&v.isCubeTexture?(l===void 0&&(l=new ne(new Tn(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:es(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,b,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(m1.makeRotationFromEuler(y.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ld),l.material.toneMapped=de.getTransfer(v.colorSpace)!==_e,(u!==v||h!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,f=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ne(new Yi(2,2),new wn({name:"BackgroundMaterial",uniforms:es(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=de.getTransfer(v.colorSpace)!==_e,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,y){x.getRGB(sc,Xl(i)),e.buffers.color.setClear(sc.r,sc.g,sc.b,y,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),a=y,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,p(o,a)},render:g,addToRenderList:M,dispose:m}}function x1(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(w,E,C,A,U){let N=!1,V=h(w,A,C,E);r!==V&&(r=V,l(r.object)),N=d(w,A,C,U),N&&g(w,A,C,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,v(w,E,C,A),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function c(){return i.createVertexArray()}function l(w){return i.bindVertexArray(w)}function u(w){return i.deleteVertexArray(w)}function h(w,E,C,A){let U=A.wireframe===!0,N=n[E.id];N===void 0&&(N={},n[E.id]=N);let V=w.isInstancedMesh===!0?w.id:0,W=N[V];W===void 0&&(W={},N[V]=W);let P=W[C.id];P===void 0&&(P={},W[C.id]=P);let B=P[U];return B===void 0&&(B=f(c()),P[U]=B),B}function f(w){let E=[],C=[],A=[];for(let U=0;U<e;U++)E[U]=0,C[U]=0,A[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:C,attributeDivisors:A,object:w,attributes:{},index:null}}function d(w,E,C,A){let U=r.attributes,N=E.attributes,V=0,W=C.getAttributes();for(let P in W)if(W[P].location>=0){let k=U[P],X=N[P];if(X===void 0&&(P==="instanceMatrix"&&w.instanceMatrix&&(X=w.instanceMatrix),P==="instanceColor"&&w.instanceColor&&(X=w.instanceColor)),k===void 0||k.attribute!==X||X&&k.data!==X.data)return!0;V++}return r.attributesNum!==V||r.index!==A}function g(w,E,C,A){let U={},N=E.attributes,V=0,W=C.getAttributes();for(let P in W)if(W[P].location>=0){let k=N[P];k===void 0&&(P==="instanceMatrix"&&w.instanceMatrix&&(k=w.instanceMatrix),P==="instanceColor"&&w.instanceColor&&(k=w.instanceColor));let X={};X.attribute=k,k&&k.data&&(X.data=k.data),U[P]=X,V++}r.attributes=U,r.attributesNum=V,r.index=A}function M(){let w=r.newAttributes;for(let E=0,C=w.length;E<C;E++)w[E]=0}function p(w){m(w,0)}function m(w,E){let C=r.newAttributes,A=r.enabledAttributes,U=r.attributeDivisors;C[w]=1,A[w]===0&&(i.enableVertexAttribArray(w),A[w]=1),U[w]!==E&&(i.vertexAttribDivisor(w,E),U[w]=E)}function x(){let w=r.newAttributes,E=r.enabledAttributes;for(let C=0,A=E.length;C<A;C++)E[C]!==w[C]&&(i.disableVertexAttribArray(C),E[C]=0)}function y(w,E,C,A,U,N,V){V===!0?i.vertexAttribIPointer(w,E,C,U,N):i.vertexAttribPointer(w,E,C,A,U,N)}function v(w,E,C,A){M();let U=A.attributes,N=C.getAttributes(),V=E.defaultAttributeValues;for(let W in N){let P=N[W];if(P.location>=0){let B=U[W];if(B===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(B=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(B=w.instanceColor)),B!==void 0){let k=B.normalized,X=B.itemSize,it=t.get(B);if(it===void 0)continue;let q=it.buffer,$=it.type,ot=it.bytesPerElement,ct=$===i.INT||$===i.UNSIGNED_INT||B.gpuType===Sa;if(B.isInterleavedBufferAttribute){let ut=B.data,gt=ut.isInterleavedBuffer===!0?ut.stride:ut.itemSize,Ot=B.offset;if(ut.isInstancedInterleavedBuffer||ut.isInstancedBufferAttribute){for(let Ct=0;Ct<P.locationSize;Ct++)m(P.location+Ct,ut.meshPerAttribute);w.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Ct=0;Ct<P.locationSize;Ct++)p(P.location+Ct);i.bindBuffer(i.ARRAY_BUFFER,q);for(let Ct=0;Ct<P.locationSize;Ct++)y(P.location+Ct,X/P.locationSize,$,k,gt*ot,(Ot+X/P.locationSize*Ct)*ot,ct)}else{if(B.isInstancedBufferAttribute){for(let ut=0;ut<P.locationSize;ut++)m(P.location+ut,B.meshPerAttribute);w.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let ut=0;ut<P.locationSize;ut++)p(P.location+ut);i.bindBuffer(i.ARRAY_BUFFER,q);for(let ut=0;ut<P.locationSize;ut++)y(P.location+ut,X/P.locationSize,$,k,X*ot,X/P.locationSize*ut*ot,ct)}}else if(V!==void 0){let k=V[W];if(k!==void 0)switch(k.length){case 2:i.vertexAttrib2fv(P.location,k);break;case 3:i.vertexAttrib3fv(P.location,k);break;case 4:i.vertexAttrib4fv(P.location,k);break;default:i.vertexAttrib1fv(P.location,k)}}}}x()}function S(){L();for(let w in n){let E=n[w];for(let C in E){let A=E[C];for(let U in A){let N=A[U];for(let V in N)u(N[V].object),delete N[V];delete A[U]}}delete n[w]}}function b(w){if(n[w.id]===void 0)return;let E=n[w.id];for(let C in E){let A=E[C];for(let U in A){let N=A[U];for(let V in N)u(N[V].object),delete N[V];delete A[U]}}delete n[w.id]}function _(w){for(let E in n){let C=n[E];for(let A in C){let U=C[A];if(U[w.id]===void 0)continue;let N=U[w.id];for(let V in N)u(N[V].object),delete N[V];delete U[w.id]}}}function T(w){for(let E in n){let C=n[E],A=w.isInstancedMesh===!0?w.id:0,U=C[A];if(U!==void 0){for(let N in U){let V=U[N];for(let W in V)u(V[W].object),delete V[W];delete U[N]}delete C[A],Object.keys(C).length===0&&delete n[E]}}}function L(){I(),o=!0,r!==s&&(r=s,l(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:I,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:T,releaseStatesOfProgram:_,initAttributes:M,enableAttribute:p,disableUnusedAttributes:x}}function _1(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function a(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let f=0;for(let d=0;d<u;d++)f+=l[d];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function y1(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==Un&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let T=_===Nn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==cn&&_!==An&&!T&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(te("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&h===!1;e.reversedDepthBuffer===!0&&h===!1&&te("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&h===!0&&te("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,maxSamples:S,samples:b}}function v1(i){let t=this,e=null,n=0,s=!1,r=!1,o=new mn,a=new ie,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){let g=h.clippingPlanes,M=h.clipIntersection,p=h.clipShadows,m=i.get(h);if(!s||g===null||g.length===0||r&&!p)r?u(null):l();else{let x=r?0:n,y=x*4,v=m.clippingState||null;c.value=v,v=u(g,f,y,d);for(let S=0;S!==y;++S)v[S]=e[S];m.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,g){let M=h!==null?h.length:0,p=null;if(M!==0){if(p=c.value,g!==!0||p===null){let m=d+M*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,v=d;y!==M;++y,v+=4)o.copy(h[y]).applyMatrix4(x,a),o.normal.toArray(p,v),p[v+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,p}}var $r=class extends xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new gr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Tn(5,5,5),r=new wn({name:"CubemapFromEquirect",uniforms:es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:Ji});r.uniforms.tEquirect.value=e;let o=new ne(s,r),a=e.minFilter;return e.minFilter===ui&&(e.minFilter=qe),new Ps(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},hd=256,M1=3,S1=20,Dd=256,Nd=16,b1=3,T1=new O,w1=new yt,oc=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ps(1,10,null),this._boxMesh=new ne(new Tn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=T1}=r,c=this._renderer;this._setSize(o);let l=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let h=c.autoClear,f=c.autoClearColor,d=c.autoClearDepth,g=c.autoClearStencil,M=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,M===null&&(t.background=c.getClearColor(w1));let p=new Ps(n,s,u);return p.position.copy(a),p.update(c,t),c.autoClear=h,c.autoClearColor=f,c.autoClearDepth=d,c.autoClearStencil=g,t.background=M,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(l,e)),this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(hd,Gl(t))}_fromTexture(t,e){t.mapping===Qi||t.mapping===Ns?this._setSize(t.image.length===0?hd:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=ud(t,!1,!1),n=Math.log2(t)-M1;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=ud(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Qi||t.mapping===Ns?(this._cubemapMaterial===null&&(this._cubemapMaterial=fd()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=dd()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=A1(),this._integrationMaterial=E1());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Nd);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-b1)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let c=a>0?Math.log2(e)+.5*Math.log2(6/(Dd*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=c,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=C1());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function ud(i,t,e){return new $r(i,{minFilter:ui,generateMipmaps:t,type:Nn,colorSpace:ar,depthBuffer:e})}function Jr(i,t,e){return new wn({name:i,uniforms:t,vertexShader:le.cube_vert,fragmentShader:e,side:rn,blending:Ji,depthTest:!1,depthWrite:!1})}function A1(){return Jr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Dd}u

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
	`)}function E1(){return Jr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Nd}},`

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
	`)}function C1(){return Jr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${S1}
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
	`)}function dd(){return Jr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function fd(){return Jr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function R1(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===ya||d===va)if(t.has(f)){let g=t.get(f).texture;return a(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let M=new $r(g.height);return M.fromEquirectangularTexture(i,f),t.set(f,M),f.addEventListener("dispose",l),a(M.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,g=d===ya||d===va,M=d===Qi||d===Ns;if(g||M){let p=e.get(f),m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new oc(i)),p=g?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),p.texture;if(p!==void 0)return p.texture;{let x=f.image;return g&&x&&x.height>0||M&&x&&c(x)?(n===null&&(n=new oc(i)),p=g?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function a(f,d){return d===ya?f.mapping=Qi:d===va&&(f.mapping=Ns),f}function c(f){let d=0,g=6;for(let M=0;M<g;M++)f[M]!==void 0&&d++;return d===g}function l(f){let d=f.target;d.removeEventListener("dispose",l);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function h(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function I1(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&zi("WebGLRenderer: "+n+" extension not supported."),s}}}function P1(i,t,e,n){let s={},r=new WeakMap,o=new FinalizationRegistry(g=>delete s[g]);function a(g){c(g.target)}function c(g){g.index!==null&&t.remove(g.index);for(let p in g.attributes)t.remove(g.attributes[p]);g.removeEventListener("dispose",a),delete s[g.id],o.unregister(g);let M=r.get(g);M&&(t.remove(M),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function l(g,M){return s[M.id]!==void 0||(M.addEventListener("dispose",a),s[M.id]=new WeakRef(M),o.register(M,M.id,M),e.memory.geometries++),M}function u(g){let M=g.attributes;for(let p in M)t.update(M[p],i.ARRAY_BUFFER)}function h(g){let M=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let x=M!==null?M.array.length:p.array.length/3-1,y=p.count>=65535?pr:fr,v=new y(Math.ceil(x/3)*6,1),S=v.array;if(M!==null){let _=M.array;m=M.version;for(let T=0,L=0;T<x;T+=3){let I=_[T+0],w=_[T+1],E=_[T+2];S[L++]=I,S[L++]=w,S[L++]=w,S[L++]=E,S[L++]=E,S[L++]=I}}else{m=p.version;for(let _=0,T=0;_<x;_+=3){let L=_+0,I=_+1,w=_+2;S[T++]=L,S[T++]=I,S[T++]=I,S[T++]=w,S[T++]=w,S[T++]=L}}v.version=m;let b=r.get(g);b&&t.remove(b),r.set(g,v)}function f(g){let M=r.get(g);if(M){let p=g.index;p!==null&&M.version<p.version&&h(g)}else h(g);return r.get(g)}function d(){for(let g in s){let M=s[g].deref();M!==void 0&&c(M)}}return{get:l,update:u,getWireframeAttribute:f,dispose:d}}function L1(i,t,e){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function c(h,f){i.drawElements(n,f,r,h*o),e.update(f,n,1)}function l(h,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,h*o,d),e.update(f,n,d))}function u(h,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,d);let M=0;for(let p=0;p<d;p++)M+=f[p];e.update(M,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function D1(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:ee("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function N1(i,t,e){let n=new WeakMap,s=new Te;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let L=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",L)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],y=0;d===!0&&(y=1),g===!0&&(y=2),M===!0&&(y=3);let v=a.attributes.position.count*y,S=1;v>t.maxTextureSize&&(S=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let b=new Float32Array(v*S*4*h),_=new hr(b,v,S,h);_.type=An,_.needsUpdate=!0;let T=y*4;for(let I=0;I<h;I++){let w=p[I],E=m[I],C=x[I],A=v*S*4*I;for(let U=0;U<w.count;U++){let N=U*T;d===!0&&(s.fromBufferAttribute(w,U),b[A+N+0]=s.x,b[A+N+1]=s.y,b[A+N+2]=s.z,b[A+N+3]=0),g===!0&&(s.fromBufferAttribute(E,U),b[A+N+4]=s.x,b[A+N+5]=s.y,b[A+N+6]=s.z,b[A+N+7]=0),M===!0&&(s.fromBufferAttribute(C,U),b[A+N+8]=s.x,b[A+N+9]=s.y,b[A+N+10]=s.z,b[A+N+11]=C.itemSize===4?s.w:1)}}f={count:h,texture:_,size:new nt(v,S)},n.set(a,f),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let M=0;M<l.length;M++)d+=l[M];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function U1(i,t,e,n,s){let r=new WeakMap;function o(l){let u=s.render.frame,h=l.geometry,f=t.get(l,h);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function a(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var F1={[Sl]:"LINEAR_TONE_MAPPING",[bl]:"REINHARD_TONE_MAPPING",[Tl]:"CINEON_TONE_MAPPING",[wl]:"ACES_FILMIC_TONE_MAPPING",[El]:"AGX_TONE_MAPPING",[Cl]:"NEUTRAL_TONE_MAPPING",[Al]:"CUSTOM_TONE_MAPPING"};function O1(i,t,e,n,s,r){let o=new xn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=null,u=new re;u.setAttribute("position",new zt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new zt([0,2,0,0,2,0],2));let h=new na({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new ne(u,h),d=new Zi(-1,1,1,-1,0,1),g=null,M=null,p=!1,m,x=null,y=[],v=!1;this.setSize=function(S,b){o.setSize(S,b),a!==null&&a.setSize(S,b),c!==null&&c.setSize(S,b);for(let _=0;_<y.length;_++){let T=y[_];T.setSize&&T.setSize(S,b)}},this.setEffects=function(S){y=S,v=y.length>0&&y[0].isRenderPass===!0;let b=o.width,_=o.height;y.length>0&&a===null&&(a=new xn(b,_,{type:Nn,depthBuffer:!1,stencilBuffer:!1}),c=new xn(b,_,{type:Nn,depthBuffer:!1,stencilBuffer:!1}));let T=s===!0&&y.some(L=>L.needsDepthTexture===!0);T!==(o.depthTexture!==null)&&(T===!0&&l===null&&(l=new hi(b,_),r===!0&&(l.format=di,l.type=ji)),o.dispose(),o.depthTexture=T?l:null,o.resolveDepthBuffer=T,o.storeMultisampledDepthBuffer=T);for(let L=0;L<y.length;L++){let I=y[L];I.setSize&&I.setSize(b,_),T&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(l)}},this.begin=function(S,b){if(p||S.toneMapping===qn&&y.length===0)return!1;if(x=b,b!==null){let _=b.width,T=b.height;(o.width!==_||o.height!==T)&&this.setSize(_,T)}return v===!1&&S.setRenderTarget(o),m=S.toneMapping,S.toneMapping=qn,!0},this.hasRenderPass=function(){return v},this.end=function(S,b){S.toneMapping=m,p=!0;let _=o,T=a;for(let L=0;L<y.length;L++){let I=y[L];I.enabled!==!1&&(I.render(S,T,_,b),I.needsSwap!==!1&&(_=T,T=T===a?c:a))}if(g!==S.outputColorSpace||M!==S.toneMapping){g=S.outputColorSpace,M=S.toneMapping,h.defines={},de.getTransfer(g)===_e&&(h.defines.SRGB_TRANSFER="");let L=F1[M];L&&(h.defines[L]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=_.texture,S.setRenderTarget(x),S.render(f,d),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),u.dispose(),h.dispose()}}var Ud=new en,Fd=new hi(1,1),Od=new xr(1),Bd=new hr,zd=new $o,kd=new gr,pd=[],md=[],gd=new Float32Array(16),xd=new Float32Array(9),_d=new Float32Array(4);function Bs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=pd[s];if(r===void 0&&(r=new Float32Array(s),pd[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function cc(i,t){let e=md[t];e===void 0&&(e=new Int32Array(t),md[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function B1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function z1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function k1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function V1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function G1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;_d.set(n),i.uniformMatrix2fv(this.addr,!1,_d),Be(e,n)}}function H1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;xd.set(n),i.uniformMatrix3fv(this.addr,!1,xd),Be(e,n)}}function W1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;gd.set(n),i.uniformMatrix4fv(this.addr,!1,gd),Be(e,n)}}function X1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function q1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function Y1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function Z1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function $1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function J1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function K1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function Q1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function lc(i){return i.version===0&&(i.compareFunction=Bl,i.needsUpdate=!0),i}function j1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=lc(Fd):r=Ud,e.setTexture2D(t||r,s)}function tx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||zd,s)}function ex(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=lc(Od):r=kd,e.setTextureCube(t||r,s)}function nx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Bd,s)}function ix(i){switch(i){case 5126:return B1;case 35664:return z1;case 35665:return k1;case 35666:return V1;case 35674:return G1;case 35675:return H1;case 35676:return W1;case 5124:case 35670:return X1;case 35667:case 35671:return q1;case 35668:case 35672:return Y1;case 35669:case 35673:return Z1;case 5125:return $1;case 36294:return J1;case 36295:return K1;case 36296:return Q1;case 35678:case 36198:case 36298:case 36306:case 35682:return j1;case 35679:case 36299:case 36307:return tx;case 35680:case 36300:case 36308:case 36293:return ex;case 36289:case 36303:case 36311:case 36292:return nx}}function sx(i,t){i.uniform1fv(this.addr,t)}function rx(i,t){let e=Bs(t,this.size,2);i.uniform2fv(this.addr,e)}function ox(i,t){let e=Bs(t,this.size,3);i.uniform3fv(this.addr,e)}function ax(i,t){let e=Bs(t,this.size,4);i.uniform4fv(this.addr,e)}function cx(i,t){let e=Bs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function lx(i,t){let e=Bs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function hx(i,t){let e=Bs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ux(i,t){i.uniform1iv(this.addr,t)}function dx(i,t){i.uniform2iv(this.addr,t)}function fx(i,t){i.uniform3iv(this.addr,t)}function px(i,t){i.uniform4iv(this.addr,t)}function mx(i,t){i.uniform1uiv(this.addr,t)}function gx(i,t){i.uniform2uiv(this.addr,t)}function xx(i,t){i.uniform3uiv(this.addr,t)}function _x(i,t){i.uniform4uiv(this.addr,t)}function yx(i,t,e){let n=this.cache,s=t.length,r=cc(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=lc(Fd):o=Ud;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function vx(i,t,e){let n=this.cache,s=t.length,r=cc(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||zd,r[o])}function Mx(i,t,e){let n=this.cache,s=t.length,r=cc(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=lc(Od):o=kd;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function Sx(i,t,e){let n=this.cache,s=t.length,r=cc(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Bd,r[o])}function bx(i){switch(i){case 5126:return sx;case 35664:return rx;case 35665:return ox;case 35666:return ax;case 35674:return cx;case 35675:return lx;case 35676:return hx;case 5124:case 35670:return ux;case 35667:case 35671:return dx;case 35668:case 35672:return fx;case 35669:case 35673:return px;case 5125:return mx;case 36294:return gx;case 36295:return xx;case 36296:return _x;case 35678:case 36198:case 36298:case 36306:case 35682:return yx;case 35679:case 36299:case 36307:return vx;case 35680:case 36300:case 36308:case 36293:return Mx;case 36289:case 36303:case 36311:case 36292:return Sx}}var Kl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ix(e.type)}},Ql=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=bx(e.type)}},jl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},$l=/(\w+)(\])?(\[|\.)?/g;function yd(i,t){i.seq.push(t),i.map[t.id]=t}function Tx(i,t,e){let n=i.name,s=n.length;for($l.lastIndex=0;;){let r=$l.exec(n),o=$l.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){yd(e,l===void 0?new Kl(a,i,t):new Ql(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new jl(a),yd(e,h)),e=h}}}var Os=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);Tx(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function vd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var wx=37297,Ax=0;function Ex(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Md=new ie;function Cx(i){de._getMatrix(Md,de.workingColorSpace,i);let t=`mat3( ${Md.elements.map(e=>e.toFixed(4))} )`;switch(de.getTransfer(i)){case cr:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return te("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Sd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Ex(i.getShaderSource(t),a)}else return r}function Rx(i,t){let e=Cx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Ix={[Sl]:"Linear",[bl]:"Reinhard",[Tl]:"Cineon",[wl]:"ACESFilmic",[El]:"AgX",[Cl]:"Neutral",[Al]:"Custom"};function Px(i,t){let e=Ix[t];return e===void 0?(te("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var rc=new O;function Lx(){de.getLuminanceCoefficients(rc);let i=rc.x.toFixed(4),t=rc.y.toFixed(4),e=rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zr).join(`
`)}function Nx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ux(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Zr(i){return i!==""}function bd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Td(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Fx=/^[ \t]*#include +<([\w\d./]+)>/gm;function th(i){return i.replace(Fx,Ox)}function Ox(i,t){let e=le[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return th(e)}var Bx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wd(i){return i.replace(Bx,zx)}function zx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ad(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var kx={[$i]:"SHADOWMAP_TYPE_PCF",[Ls]:"SHADOWMAP_TYPE_VSM"};function Vx(i){return kx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Gx={[Ns]:"ENVMAP_MODE_REFRACTION"};function Hx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Gx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Wx={[_a]:"ENVMAP_BLENDING_MULTIPLY",[Bu]:"ENVMAP_BLENDING_MIX",[zu]:"ENVMAP_BLENDING_ADD"};function Xx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Wx[i.combine]||"ENVMAP_BLENDING_NONE"}function qx(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Vx(e),l=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Hx(e),h=Xx(e),f=Dx(e),d=Nx(r),g=s.createProgram(),M,p,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(M=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Zr).join(`
`),M.length>0&&(M+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Zr).join(`
`),p.length>0&&(p+=`
`)):(M=[Ad(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zr).join(`
`),p=[Ad(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qn?"#define TONE_MAPPING":"",e.toneMapping!==qn?le.tonemapping_pars_fragment:"",e.toneMapping!==qn?Px("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,Rx("linearToOutputTexel",e.outputColorSpace),Lx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zr).join(`
`)),o=th(o),o=bd(o,e),o=Td(o,e),a=th(a),a=bd(a,e),a=Td(a,e),o=wd(o),a=wd(a),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,M=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,p=["#define varying in",e.glslVersion===zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let x=m+M+o,y=m+p+a,v=vd(s,s.VERTEX_SHADER,x),S=vd(s,s.FRAGMENT_SHADER,y);s.attachShader(g,v),s.attachShader(g,S),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function b(I){if(i.debug.checkShaderErrors){let w=s.getProgramInfoLog(g)||"",E=s.getShaderInfoLog(v)||"",C=s.getShaderInfoLog(S)||"",A=w.trim(),U=E.trim(),N=C.trim(),V=!0,W=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,v,S);else{let P=Sd(s,v,"vertex"),B=Sd(s,S,"fragment");ee("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+A+`
`+P+`
`+B)}else A!==""?te("WebGLProgram: Program Info Log:",A):(U===""||N==="")&&(W=!1);W&&(I.diagnostics={runnable:V,programLog:A,vertexShader:{log:U,prefix:M},fragmentShader:{log:N,prefix:p}})}s.deleteShader(v),s.deleteShader(S),_=new Os(s,g),T=Ux(s,g)}let _;this.getUniforms=function(){return _===void 0&&b(this),_};let T;this.getAttributes=function(){return T===void 0&&b(this),T};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(g,wx)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ax++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=v,this.fragmentShader=S,this}var Yx=0,eh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new nh(t),e.set(t,n)),n}},nh=class{constructor(t){this.id=Yx++,this.code=t,this.usedTimes=0}};function Zx(i){return i===Ci||i===Wr||i===Xr}function $x(i,t,e,n,s,r){let o=new Ts,a=new eh,c=new Set,l=[],u=new Map,h=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,T,L,I,w,E){let C=I.fog,A=w.geometry,U=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,N=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,V=t.get(_.envMap||U,N),W=f[_.type],P=n.precision;_.precision!==null&&(P=n.getMaxPrecision(_.precision),P!==_.precision&&te("WebGLProgram.getParameters:",_.precision,"not supported, using",P,"instead."));let B=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,k=B!==void 0?B.length:0,X=0;A.morphAttributes.position!==void 0&&(X=1),A.morphAttributes.normal!==void 0&&(X=2),A.morphAttributes.color!==void 0&&(X=3);let it,q,$,ot;if(W){let Nt=Zn[W];it=Nt.vertexShader,q=Nt.fragmentShader}else{it=_.vertexShader,q=_.fragmentShader;let Nt=a.getVertexShaderStage(_),ye=a.getFragmentShaderStage(_);a.update(_,Nt,ye),$=Nt.id,ot=ye.id}let ct=i.getRenderTarget(),ut=i.state.buffers.depth.getReversed(),gt=w.isInstancedMesh===!0,Ot=w.isBatchedMesh===!0,Ct=!!_.map,It=!!_.matcap,kt=!!V,dt=kt&&V.isPMREMTexture===!0,St=!!_.aoMap,_t=!!_.lightMap,Dt=!!_.bumpMap&&_.wireframe===!1,Mt=!!_.normalMap,z=!!_.displacementMap,J=!!_.emissiveMap,mt=!!_.metalnessMap,Lt=!!_.roughnessMap,At=_.anisotropy>0,G=_.clearcoat>0,Yt=_.diffuseRoughness>0,Wt=_.dispersion>0,Xt=_.retroreflectivity>0,ft=_.iridescence>0,jt=_.sheen>0,Bt=_.transmission>0,Zt=At&&!!_.anisotropyMap,F=G&&!!_.clearcoatMap,R=G&&!!_.clearcoatNormalMap,K=G&&!!_.clearcoatRoughnessMap,Y=Yt&&!!_.diffuseRoughnessMap,Q=ft&&!!_.iridescenceMap,lt=ft&&!!_.iridescenceThicknessMap,pt=jt&&!!_.sheenColorMap,tt=jt&&!!_.sheenRoughnessMap,rt=!!_.specularMap,xt=!!_.specularColorMap,H=!!_.specularIntensityMap,ht=Bt&&!!_.transmissionMap,at=Bt&&!!_.thicknessMap,wt=!!_.gradientMap,bt=!!_.alphaMap,Et=_.alphaTest>0,Jt=!!_.alphaHash,ae=!!_.extensions,vt=qn;_.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(vt=i.toneMapping);let Qt=dt?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,oe={shaderID:W,shaderType:_.type,shaderName:_.name,vertexShader:it,fragmentShader:q,defines:_.defines,customVertexShaderID:$,customFragmentShaderID:ot,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:P,batching:Ot,batchingColor:Ot&&w._colorsTexture!==null,instancing:gt,instancingColor:gt&&w.instanceColor!==null,instancingMorph:gt&&w.morphTexture!==null,outputColorSpace:ct===null?i.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:de.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ct,matcap:It,envMap:kt,envMapMode:kt&&V.mapping,envMapPMREM:dt,envMapMaxLod:dt?Qt.length-1:null,envMapSize:dt?Qt[0].width:null,aoMap:St,lightMap:_t,bumpMap:Dt,normalMap:Mt,displacementMap:z,emissiveMap:J,normalMapObjectSpace:Mt&&_.normalMapType===Gu,normalMapTangentSpace:Mt&&_.normalMapType===qr,packedNormalMap:Mt&&_.normalMapType===qr&&Zx(_.normalMap.format),metalnessMap:mt,roughnessMap:Lt,anisotropy:At,anisotropyMap:Zt,clearcoat:G,clearcoatMap:F,clearcoatNormalMap:R,clearcoatRoughnessMap:K,diffuseRoughness:Yt,diffuseRoughnessMap:Y,dispersion:Wt,retroreflection:Xt,iridescence:ft,iridescenceMap:Q,iridescenceThicknessMap:lt,sheen:jt,sheenColorMap:pt,sheenRoughnessMap:tt,specularMap:rt,specularColorMap:xt,specularIntensityMap:H,transmission:Bt,transmissionMap:ht,thicknessMap:at,gradientMap:wt,opaque:_.transparent===!1&&_.blending===Ds&&_.alphaToCoverage===!1,alphaMap:bt,alphaTest:Et,alphaHash:Jt,combine:_.combine,mapUv:Ct&&d(_.map.channel),aoMapUv:St&&d(_.aoMap.channel),lightMapUv:_t&&d(_.lightMap.channel),bumpMapUv:Dt&&d(_.bumpMap.channel),normalMapUv:Mt&&d(_.normalMap.channel),displacementMapUv:z&&d(_.displacementMap.channel),emissiveMapUv:J&&d(_.emissiveMap.channel),metalnessMapUv:mt&&d(_.metalnessMap.channel),roughnessMapUv:Lt&&d(_.roughnessMap.channel),anisotropyMapUv:Zt&&d(_.anisotropyMap.channel),clearcoatMapUv:F&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:R&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&d(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Y&&d(_.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:tt&&d(_.sheenRoughnessMap.channel),specularMapUv:rt&&d(_.specularMap.channel),specularColorMapUv:xt&&d(_.specularColorMap.channel),specularIntensityMapUv:H&&d(_.specularIntensityMap.channel),transmissionMapUv:ht&&d(_.transmissionMap.channel),thicknessMapUv:at&&d(_.thicknessMap.channel),alphaMapUv:bt&&d(_.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(Mt||At),vertexNormals:!!A.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:w.isPoints===!0&&!!A.attributes.uv&&(Ct||bt),fog:!!C,useFog:_.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||A.attributes.normal===void 0&&Mt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ut,skinning:w.isSkinnedMesh===!0,hasPositionAttribute:A.attributes.position!==void 0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:X,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:E.filter(Nt=>Nt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:vt,decodeVideoTexture:Ct&&_.map.isVideoTexture===!0&&de.getTransfer(_.map.colorSpace)===_e,decodeVideoTextureEmissive:J&&_.emissiveMap.isVideoTexture===!0&&de.getTransfer(_.emissiveMap.colorSpace)===_e,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===an,flipSided:_.side===rn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ae&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&_.extensions.multiDraw===!0||Ot)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return oe.vertexUv1s=c.has(1),oe.vertexUv2s=c.has(2),oe.vertexUv3s=c.has(3),c.clear(),oe}function M(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let L in _.defines)T.push(L),T.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(p(T,_),m(T,_),T.push(i.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function p(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapPMREM),_.push(T.envMapMaxLod),_.push(T.envMapSize),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.diffuseRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.numLightProbeGrids),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function m(_,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.diffuseRoughness&&o.enable(25),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function x(_){let T=f[_.type],L;if(T){let I=Zn[T];L=ad.clone(I.uniforms)}else L=_.uniforms;return L}function y(_,T){let L=u.get(T);return L!==void 0?++L.usedTimes:(L=new qx(i,T,_,s),l.push(L),u.set(T,L)),L}function v(_){if(--_.usedTimes===0){let T=l.indexOf(_);l[T]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function S(_){a.remove(_)}function b(){a.dispose()}return{getParameters:g,getProgramCacheKey:M,getUniforms:x,acquireProgram:y,releaseProgram:v,releaseShaderCache:S,programs:l,dispose:b}}function Jx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Kx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Ed(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Cd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,g,M,p,m){let x=i[t];return x===void 0?(x={id:f.id,object:f,geometry:d,material:g,materialVariant:o(f),groupOrder:M,renderOrder:f.renderOrder,z:p,group:m},i[t]=x):(x.id=f.id,x.object=f,x.geometry=d,x.material=g,x.materialVariant=o(f),x.groupOrder=M,x.renderOrder=f.renderOrder,x.z=p,x.group=m),t++,x}function c(f,d,g,M,p,m,x){x.reversedDepth===!0&&(p=-p);let y=a(f,d,g,M,p,m);g.transmission>0?n.push(y):g.transparent===!0?s.push(y):e.push(y)}function l(f,d,g,M,p,m){let x=a(f,d,g,M,p,m);g.transmission>0?n.unshift(x):g.transparent===!0?s.unshift(x):e.unshift(x)}function u(f,d){e.length>1&&e.sort(f||Kx),n.length>1&&n.sort(d||Ed),s.length>1&&s.sort(d||Ed)}function h(){for(let f=t,d=i.length;f<d;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:h,sort:u}}function Qx(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Cd,i.set(n,[o])):s>=r.length?(o=new Cd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function jx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new O,color:new yt};break;case"SpotLight":e={position:new O,direction:new O,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":e={color:new yt,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function t_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var e_=0;function n_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function i_(i){let t=new jx,e=t_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new O);let s=new O,r=new fe,o=new fe;function a(l){let u=0,h=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,g=0,M=0,p=0,m=0,x=0,y=0,v=0,S=0,b=0,_=0,T=0,L=0,I=0;l.sort(n_);for(let E=0,C=l.length;E<C;E++){let A=l[E],U=A.color,N=A.intensity,V=A.distance,W=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===Ci?W=A.shadow.map.texture:W=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)u+=U.r*N,h+=U.g*N,f+=U.b*N;else if(A.isLightProbe){for(let P=0;P<9;P++)n.probe[P].addScaledVector(A.sh.coefficients[P],N);I++}else if(A.isSunLight){let P=t.get(A);if(P.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let B=A.shadow,k=e.get(A);k.shadowIntensity=B.intensity,k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize.copy(B.mapSize).multiply(B.getFrameExtents()),n.sunShadow[g]=k,n.sunShadowMap[g]=W;let X=B.getViewportCount();for(let it=0;it<X;it++)n.sunShadowMatrix[M+it]=B.getMatrix(it),n.sunShadowCascade[M+it]=B._cascadeData[it];M+=X,g++}n.sun[d]=P,d++}else if(A.isDirectionalLight){let P=t.get(A);if(P.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let B=A.shadow,k=e.get(A);k.shadowIntensity=B.intensity,k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,n.directionalShadow[p]=k,n.directionalShadowMap[p]=W,n.directionalShadowMatrix[p]=A.shadow.matrix,S++}n.directional[p]=P,p++}else if(A.isSpotLight){let P=t.get(A);P.position.setFromMatrixPosition(A.matrixWorld),P.color.copy(U).multiplyScalar(N),P.distance=V,P.coneCos=Math.cos(A.angle),P.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),P.decay=A.decay,n.spot[x]=P;let B=A.shadow;if(A.map&&(n.spotLightMap[T]=A.map,T++,B.updateMatrices(A),A.castShadow&&L++),n.spotLightMatrix[x]=B.matrix,A.castShadow){let k=e.get(A);k.shadowIntensity=B.intensity,k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,n.spotShadow[x]=k,n.spotShadowMap[x]=W,_++}x++}else if(A.isRectAreaLight){let P=t.get(A);P.color.copy(U).multiplyScalar(N),P.halfWidth.set(A.width*.5,0,0),P.halfHeight.set(0,A.height*.5,0),n.rectArea[y]=P,y++}else if(A.isPointLight){let P=t.get(A);if(P.color.copy(A.color).multiplyScalar(A.intensity),P.distance=A.distance,P.decay=A.decay,A.castShadow){let B=A.shadow,k=e.get(A);k.shadowIntensity=B.intensity,k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,k.shadowCameraNear=B.camera.near,k.shadowCameraFar=B.camera.far,n.pointShadow[m]=k,n.pointShadowMap[m]=W,n.pointShadowMatrix[m]=A.shadow.matrix,b++}n.point[m]=P,m++}else if(A.isHemisphereLight){let P=t.get(A);P.skyColor.copy(A.color).multiplyScalar(N),P.groundColor.copy(A.groundColor).multiplyScalar(N),n.hemi[v]=P,v++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ut.LTC_FLOAT_1,n.rectAreaLTC2=Ut.LTC_FLOAT_2):(n.rectAreaLTC1=Ut.LTC_HALF_1,n.rectAreaLTC2=Ut.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let w=n.hash;(w.sunLength!==d||w.directionalLength!==p||w.pointLength!==m||w.spotLength!==x||w.rectAreaLength!==y||w.hemiLength!==v||w.numSunShadows!==g||w.numDirectionalShadows!==S||w.numPointShadows!==b||w.numSpotShadows!==_||w.numSpotMaps!==T||w.numLightProbes!==I)&&(n.sun.length=d,n.directional.length=p,n.spot.length=x,n.rectArea.length=y,n.point.length=m,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+T-L,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=I,w.sunLength=d,w.directionalLength=p,w.pointLength=m,w.spotLength=x,w.rectAreaLength=y,w.hemiLength=v,w.numSunShadows=g,w.numDirectionalShadows=S,w.numPointShadows=b,w.numSpotShadows=_,w.numSpotMaps=T,w.numLightProbes=I,n.version=e_++)}function c(l,u){let h=0,f=0,d=0,g=0,M=0,p=0,m=u.matrixWorldInverse;for(let x=0,y=l.length;x<y;x++){let v=l[x];if(v.isSunLight){let S=n.sun[h];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),h++}else if(v.isDirectionalLight){let S=n.directional[f];S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(v.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),g++}else if(v.isRectAreaLight){let S=n.rectArea[M];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),M++}else if(v.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let S=n.hemi[p];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),p++}}}return{setup:a,setupView:c,state:n}}function Rd(i){let t=new i_(i),e=[],n=[],s=[];function r(h){u.camera=h,e.length=0,n.length=0,s.length=0}function o(h){h.isLightProbeGrid?s.push(h):e.push(h)}function a(h){n.push(h)}function c(){t.setup(e),s.sort((h,f)=>h.priority-f.priority||h.id-f.id)}function l(h){t.setupView(e,h)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function s_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Rd(i),t.set(s,[a])):r>=o.length?(a=new Rd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var r_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o_=`uniform sampler2D shadow_pass;
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
}`,a_=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],c_=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Id=new fe,Yr=new O,Jl=new O;function l_(i,t,e){let n=new Si,s=new nt,r=new nt,o=new Te,a=new sa,c=new ra,l={},u=e.maxTextureSize,h={[Ei]:rn,[rn]:Ei,[an]:an},f=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:r_,fragmentShader:o_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new re;g.setAttribute("position",new Me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new ne(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$i;let m=this.type;this.render=function(b,_,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;this.type===yu&&(te("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=$i);let L=i.getRenderTarget(),I=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),E=i.state;E.setBlending(Ji),E.buffers.depth.getReversed()===!0?E.buffers.color.setClear(0,0,0,0):E.buffers.color.setClear(1,1,1,1),E.buffers.depth.setTest(!0),E.setScissorTest(!1);let C=m!==this.type;C&&_.traverse(function(A){A.material&&(Array.isArray(A.material)?A.material.forEach(U=>U.needsUpdate=!0):A.material.needsUpdate=!0)});for(let A=0,U=b.length;A<U;A++){let N=b[A],V=N.shadow;if(V===void 0){te("WebGLShadowMap:",N,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let W=V.getFrameExtents();s.multiply(W),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/W.x),s.x=r.x*W.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/W.y),s.y=r.y*W.y,V.mapSize.y=r.y));let P=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=P,V.map===null||C===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Ls){if(N.isPointLight){te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new xn(s.x,s.y,{format:Ci,type:Nn,minFilter:qe,magFilter:qe,generateMipmaps:!1}),V.map.texture.name=N.name+".shadowMap",V.map.depthTexture=new hi(s.x,s.y,An),V.map.depthTexture.name=N.name+".shadowMapDepth",V.map.depthTexture.format=ci,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=We,V.map.depthTexture.magFilter=We}else N.isPointLight?(V.map=new $r(s.x),V.map.depthTexture=new xr(s.x,Dn)):(V.map=new xn(s.x,s.y),V.map.depthTexture=new hi(s.x,s.y,Dn)),V.map.depthTexture.name=N.name+".shadowMap",V.map.depthTexture.format=ci,this.type===$i?(V.map.depthTexture.compareFunction=P?Ol:Fl,V.map.depthTexture.minFilter=qe,V.map.depthTexture.magFilter=qe):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=We,V.map.depthTexture.magFilter=We);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let B=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();N.isPointLight!==!0&&V.updateMatrices(N,T);let k=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:T.layers;for(let X=0;X<B;X++){let it=V.getCamera(X);if(N.isPointLight){let q=V.camera,$=V.matrix,ot=N.distance||q.far;ot!==q.far&&(q.far=ot,q.updateProjectionMatrix()),Yr.setFromMatrixPosition(N.matrixWorld),q.position.copy(Yr),Jl.copy(q.position),Jl.add(a_[X]),q.up.copy(c_[X]),q.lookAt(Jl),q.updateMatrixWorld(),$.makeTranslation(-Yr.x,-Yr.y,-Yr.z),Id.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Id,q.coordinateSystem,q.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,X),i.clear();else{X===0&&(i.setRenderTarget(V.map),i.clear());let q=V.getViewport(X);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),E.viewport(o)}n=V.getFrustum(X),v(_,T,it,N,k,this.type)}V.isPointLightShadow!==!0&&this.type===Ls&&x(V,T),V.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(L,I,w)};function x(b,_){let T=t.update(M);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new xn(s.x,s.y,{format:Ci,type:Nn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(_,null,T,f,M,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(_,null,T,d,M,null)}function y(b,_,T,L){let I=null,w=T.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(w!==void 0)I=w;else if(I=T.isPointLight===!0?c:a,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let E=I.uuid,C=_.uuid,A=l[E];A===void 0&&(A={},l[E]=A);let U=A[C];U===void 0&&(U=I.clone(),A[C]=U,_.addEventListener("dispose",S)),I=U}if(I.visible=_.visible,I.wireframe=_.wireframe,L===Ls?I.side=_.shadowSide!==null?_.shadowSide:_.side:I.side=_.shadowSide!==null?_.shadowSide:h[_.side],I.alphaMap=_.alphaMap,I.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,I.map=_.map,I.clipShadows=_.clipShadows,I.clippingPlanes=_.clippingPlanes,I.clipIntersection=_.clipIntersection,I.displacementMap=_.displacementMap,I.displacementScale=_.displacementScale,I.displacementBias=_.displacementBias,I.wireframeLinewidth=_.wireframeLinewidth,I.linewidth=_.linewidth,T.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let E=i.properties.get(I);E.light=T}return I}function v(b,_,T,L,I,w){if(b.visible===!1)return;if(b.layers.test(I)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&w===Ls)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,b.matrixWorld);let A=t.update(b),U=b.material;if(Array.isArray(U)){let N=A.groups;for(let V=0,W=N.length;V<W;V++){let P=N[V],B=U[P.materialIndex];if(B&&B.visible){let k=y(b,B,L,w);b.onBeforeShadow(i,b,_,T,A,k,P),i.renderBufferDirect(T,null,A,k,b,P),b.onAfterShadow(i,b,_,T,A,k,P)}}}else if(U.visible){let N=y(b,U,L,w);b.onBeforeShadow(i,b,_,T,A,N,null),i.renderBufferDirect(T,null,A,N,b,null),b.onAfterShadow(i,b,_,T,A,N,null)}}let C=b.children;for(let A=0,U=C.length;A<U;A++)v(C[A],_,T,L,I,w)}function S(b){b.target.removeEventListener("dispose",S);for(let T in l){let L=l[T],I=b.target.uuid;I in L&&(L[I].dispose(),delete L[I])}}}function h_(i,t){function e(){let H=!1,ht=new Te,at=null,wt=new Te(0,0,0,0);return{setMask:function(bt){at!==bt&&!H&&(i.colorMask(bt,bt,bt,bt),at=bt)},setLocked:function(bt){H=bt},setClear:function(bt,Et,Jt,ae,vt){vt===!0&&(bt*=ae,Et*=ae,Jt*=ae),ht.set(bt,Et,Jt,ae),wt.equals(ht)===!1&&(i.clearColor(bt,Et,Jt,ae),wt.copy(ht))},reset:function(){H=!1,at=null,wt.set(-1,0,0,0)}}}function n(){let H=!1,ht=!1,at=null,wt=null,bt=null;return{setReversed:function(Et){if(ht!==Et){let Jt=t.get("EXT_clip_control");Et?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT),ht=Et;let ae=bt;bt=null,this.setClear(ae)}},getReversed:function(){return ht},setTest:function(Et){Et?ut(i.DEPTH_TEST):gt(i.DEPTH_TEST)},setMask:function(Et){at!==Et&&!H&&(i.depthMask(Et),at=Et)},setFunc:function(Et){if(ht&&(Et=ju[Et]),wt!==Et){switch(Et){case Oo:i.depthFunc(i.NEVER);break;case Bo:i.depthFunc(i.ALWAYS);break;case zo:i.depthFunc(i.LESS);break;case ys:i.depthFunc(i.LEQUAL);break;case ko:i.depthFunc(i.EQUAL);break;case Vo:i.depthFunc(i.GEQUAL);break;case Go:i.depthFunc(i.GREATER);break;case Ho:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}wt=Et}},setLocked:function(Et){H=Et},setClear:function(Et){bt!==Et&&(bt=Et,ht&&(Et=1-Et),i.clearDepth(Et))},reset:function(){H=!1,at=null,wt=null,bt=null,ht=!1}}}function s(){let H=!1,ht=null,at=null,wt=null,bt=null,Et=null,Jt=null,ae=null,vt=null;return{setTest:function(Qt){H||(Qt?ut(i.STENCIL_TEST):gt(i.STENCIL_TEST))},setMask:function(Qt){ht!==Qt&&!H&&(i.stencilMask(Qt),ht=Qt)},setFunc:function(Qt,oe,Nt){(at!==Qt||wt!==oe||bt!==Nt)&&(i.stencilFunc(Qt,oe,Nt),at=Qt,wt=oe,bt=Nt)},setOp:function(Qt,oe,Nt){(Et!==Qt||Jt!==oe||ae!==Nt)&&(i.stencilOp(Qt,oe,Nt),Et=Qt,Jt=oe,ae=Nt)},setLocked:function(Qt){H=Qt},setClear:function(Qt){vt!==Qt&&(i.clearStencil(Qt),vt=Qt)},reset:function(){H=!1,ht=null,at=null,wt=null,bt=null,Et=null,Jt=null,ae=null,vt=null}}}let r=new e,o=new n,a=new s,c={},l=new WeakMap,u={},h={},f={},d=new WeakMap,g=[],M=null,p=!1,m=null,x=null,y=null,v=null,S=null,b=null,_=null,T=new yt(0,0,0),L=0,I=!1,w=null,E=null,C=null,A=null,U=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,W=0,P=i.getParameter(i.VERSION);P.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(P)[1]),V=W>=1):P.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),V=W>=2);let B=null,k={},X=i.getParameter(i.SCISSOR_BOX),it=i.getParameter(i.VIEWPORT),q=new Te().fromArray(X),$=new Te().fromArray(it);function ot(H,ht,at,wt){let bt=new Uint8Array(4),Et=i.createTexture();i.bindTexture(H,Et),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Jt=0;Jt<at;Jt++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,wt,0,i.RGBA,i.UNSIGNED_BYTE,bt):i.texImage2D(ht+Jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,bt);return Et}let ct={};ct[i.TEXTURE_2D]=ot(i.TEXTURE_2D,i.TEXTURE_2D,1),ct[i.TEXTURE_CUBE_MAP]=ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[i.TEXTURE_2D_ARRAY]=ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ct[i.TEXTURE_3D]=ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ut(i.DEPTH_TEST),o.setFunc(ys),Dt(!1),Mt(gl),ut(i.CULL_FACE),St(Ji);function ut(H){u[H]!==!0&&(i.enable(H),u[H]=!0)}function gt(H){u[H]!==!1&&(i.disable(H),u[H]=!1)}function Ot(H,ht){return f[H]!==ht?(i.bindFramebuffer(H,ht),f[H]=ht,H===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ht),H===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function Ct(H,ht){let at=g,wt=!1;if(H){at=d.get(ht),at===void 0&&(at=[],d.set(ht,at));let bt=H.textures;if(at.length!==bt.length||at[0]!==i.COLOR_ATTACHMENT0){for(let Et=0,Jt=bt.length;Et<Jt;Et++)at[Et]=i.COLOR_ATTACHMENT0+Et;at.length=bt.length,wt=!0}}else at[0]!==i.BACK&&(at[0]=i.BACK,wt=!0);wt&&i.drawBuffers(at)}function It(H){return M!==H?(i.useProgram(H),M=H,!0):!1}let kt={[Ki]:i.FUNC_ADD,[Mu]:i.FUNC_SUBTRACT,[Su]:i.FUNC_REVERSE_SUBTRACT};kt[bu]=i.MIN,kt[Tu]=i.MAX;let dt={[wu]:i.ZERO,[Au]:i.ONE,[Eu]:i.SRC_COLOR,[vl]:i.SRC_ALPHA,[Du]:i.SRC_ALPHA_SATURATE,[Pu]:i.DST_COLOR,[Ru]:i.DST_ALPHA,[Cu]:i.ONE_MINUS_SRC_COLOR,[Ml]:i.ONE_MINUS_SRC_ALPHA,[Lu]:i.ONE_MINUS_DST_COLOR,[Iu]:i.ONE_MINUS_DST_ALPHA,[Nu]:i.CONSTANT_COLOR,[Uu]:i.ONE_MINUS_CONSTANT_COLOR,[Fu]:i.CONSTANT_ALPHA,[Ou]:i.ONE_MINUS_CONSTANT_ALPHA};function St(H,ht,at,wt,bt,Et,Jt,ae,vt,Qt){if(H===Ji){p===!0&&(gt(i.BLEND),p=!1);return}if(p===!1&&(ut(i.BLEND),p=!0),H!==vu){if(H!==m||Qt!==I){if((x!==Ki||S!==Ki)&&(i.blendEquation(i.FUNC_ADD),x=Ki,S=Ki),Qt)switch(H){case Ds:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xl:i.blendFunc(i.ONE,i.ONE);break;case _l:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ee("WebGLState: Invalid blending: ",H);break}else switch(H){case Ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case _l:ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yl:ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ee("WebGLState: Invalid blending: ",H);break}y=null,v=null,b=null,_=null,T.set(0,0,0),L=0,m=H,I=Qt}return}bt=bt||ht,Et=Et||at,Jt=Jt||wt,(ht!==x||bt!==S)&&(i.blendEquationSeparate(kt[ht],kt[bt]),x=ht,S=bt),(at!==y||wt!==v||Et!==b||Jt!==_)&&(i.blendFuncSeparate(dt[at],dt[wt],dt[Et],dt[Jt]),y=at,v=wt,b=Et,_=Jt),(ae.equals(T)===!1||vt!==L)&&(i.blendColor(ae.r,ae.g,ae.b,vt),T.copy(ae),L=vt),m=H,I=!1}function _t(H,ht){H.side===an?gt(i.CULL_FACE):ut(i.CULL_FACE);let at=H.side===rn;ht&&(at=!at),Dt(at),H.blending===Ds&&H.transparent===!1?St(Ji):St(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let wt=H.stencilWrite;a.setTest(wt),wt&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),J(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(H){w!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),w=H)}function Mt(H){H!==xu?(ut(i.CULL_FACE),H!==E&&(H===gl?i.cullFace(i.BACK):H===_u?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):gt(i.CULL_FACE),E=H}function z(H){H!==C&&(V&&i.lineWidth(H),C=H)}function J(H,ht,at){H?(ut(i.POLYGON_OFFSET_FILL),(A!==ht||U!==at)&&(A=ht,U=at,o.getReversed()&&(ht=-ht,at=-at),i.polygonOffset(ht,at))):gt(i.POLYGON_OFFSET_FILL)}function mt(H){H?ut(i.SCISSOR_TEST):gt(i.SCISSOR_TEST)}function Lt(H){H===void 0&&(H=i.TEXTURE0+N-1),B!==H&&(i.activeTexture(H),B=H)}function At(H,ht,at){at===void 0&&(B===null?at=i.TEXTURE0+N-1:at=B);let wt=k[at];wt===void 0&&(wt={type:void 0,texture:void 0},k[at]=wt),(wt.type!==H||wt.texture!==ht)&&(B!==at&&(i.activeTexture(at),B=at),i.bindTexture(H,ht||ct[H]),wt.type=H,wt.texture=ht)}function G(){let H=k[B];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Yt(){try{i.compressedTexImage2D(...arguments)}catch(H){ee("WebGLState:",H)}}function Wt(){try{i.compressedTexImage3D(...arguments)}catch(H){ee("WebGLState:",H)}}function Xt(){try{i.texSubImage2D(...arguments)}catch(H){ee("WebGLState:",H)}}function ft(){try{i.texSubImage3D(...arguments)}catch(H){ee("WebGLState:",H)}}function jt(){try{i.compressedTexSubImage2D(...arguments)}catch(H){ee("WebGLState:",H)}}function Bt(){try{i.compressedTexSubImage3D(...arguments)}catch(H){ee("WebGLState:",H)}}function Zt(){try{i.texStorage2D(...arguments)}catch(H){ee("WebGLState:",H)}}function F(){try{i.texStorage3D(...arguments)}catch(H){ee("WebGLState:",H)}}function R(){try{i.texImage2D(...arguments)}catch(H){ee("WebGLState:",H)}}function K(){try{i.texImage3D(...arguments)}catch(H){ee("WebGLState:",H)}}function Y(H){return h[H]!==void 0?h[H]:i.getParameter(H)}function Q(H,ht){h[H]!==ht&&(i.pixelStorei(H,ht),h[H]=ht)}function lt(H){q.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),q.copy(H))}function pt(H){$.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),$.copy(H))}function tt(H,ht){let at=l.get(ht);at===void 0&&(at=new WeakMap,l.set(ht,at));let wt=at.get(H);wt===void 0&&(wt=i.getUniformBlockIndex(ht,H.name),i.uniformBlockBinding(ht,wt,wt),at.set(H,wt))}function rt(H,ht,at){let bt=l.get(ht).get(H);c[bt]!==at&&(i.bindBufferBase(i.UNIFORM_BUFFER,bt,at),c[bt]=at)}function xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},B=null,k={},f={},c={},d=new WeakMap,g=[],M=null,p=!1,m=null,x=null,y=null,v=null,S=null,b=null,_=null,T=new yt(0,0,0),L=0,I=!1,w=null,E=null,C=null,A=null,U=null,q.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ut,disable:gt,bindFramebuffer:Ot,drawBuffers:Ct,useProgram:It,setBlending:St,setMaterial:_t,setFlipSided:Dt,setCullFace:Mt,setLineWidth:z,setPolygonOffset:J,setScissorTest:mt,activeTexture:Lt,bindTexture:At,unbindTexture:G,compressedTexImage2D:Yt,compressedTexImage3D:Wt,texImage2D:R,texImage3D:K,pixelStorei:Q,getParameter:Y,updateUBOMapping:tt,uniformBlockBinding:rt,texStorage2D:Zt,texStorage3D:F,texSubImage2D:Xt,texSubImage3D:ft,compressedTexSubImage2D:jt,compressedTexSubImage3D:Bt,scissor:lt,viewport:pt,reset:xt}}function u_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new nt,u=new WeakMap,h=new Set,f,d=new WeakMap,g=new Set,M=new FinalizationRegistry(F=>g.delete(F)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(F,R){return p?new OffscreenCanvas(F,R):lr("canvas")}function x(F,R,K){let Y=1,Q=Zt(F);if((Q.width>K||Q.height>K)&&(Y=K/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){let lt=Math.floor(Y*Q.width),pt=Math.floor(Y*Q.height);f===void 0&&(f=m(lt,pt));let tt=R?m(lt,pt):f;return tt.width=lt,tt.height=pt,tt.getContext("2d").drawImage(F,0,0,lt,pt),te("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+lt+"x"+pt+")."),tt}else return"data"in F&&te("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),F;return F}function y(F){return F.generateMipmaps}function v(F){i.generateMipmap(F)}function S(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(F,R,K,Y,Q,lt=!1){if(F!==null){if(i[F]!==void 0)return i[F];te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let pt;Y&&(pt=t.get("EXT_texture_norm16"),pt||te("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=R;if(R===i.RED&&(K===i.FLOAT&&(tt=i.R32F),K===i.HALF_FLOAT&&(tt=i.R16F),K===i.UNSIGNED_BYTE&&(tt=i.R8),K===i.UNSIGNED_SHORT&&pt&&(tt=pt.R16_EXT),K===i.SHORT&&pt&&(tt=pt.R16_SNORM_EXT)),R===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(tt=i.R8UI),K===i.UNSIGNED_SHORT&&(tt=i.R16UI),K===i.UNSIGNED_INT&&(tt=i.R32UI),K===i.BYTE&&(tt=i.R8I),K===i.SHORT&&(tt=i.R16I),K===i.INT&&(tt=i.R32I)),R===i.RG&&(K===i.FLOAT&&(tt=i.RG32F),K===i.HALF_FLOAT&&(tt=i.RG16F),K===i.UNSIGNED_BYTE&&(tt=i.RG8),K===i.UNSIGNED_SHORT&&pt&&(tt=pt.RG16_EXT),K===i.SHORT&&pt&&(tt=pt.RG16_SNORM_EXT)),R===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(tt=i.RG8UI),K===i.UNSIGNED_SHORT&&(tt=i.RG16UI),K===i.UNSIGNED_INT&&(tt=i.RG32UI),K===i.BYTE&&(tt=i.RG8I),K===i.SHORT&&(tt=i.RG16I),K===i.INT&&(tt=i.RG32I)),R===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),K===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),K===i.UNSIGNED_INT&&(tt=i.RGB32UI),K===i.BYTE&&(tt=i.RGB8I),K===i.SHORT&&(tt=i.RGB16I),K===i.INT&&(tt=i.RGB32I)),R===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),K===i.UNSIGNED_INT&&(tt=i.RGBA32UI),K===i.BYTE&&(tt=i.RGBA8I),K===i.SHORT&&(tt=i.RGBA16I),K===i.INT&&(tt=i.RGBA32I)),R===i.RGB&&(K===i.UNSIGNED_SHORT&&pt&&(tt=pt.RGB16_EXT),K===i.SHORT&&pt&&(tt=pt.RGB16_SNORM_EXT),K===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),K===i.UNSIGNED_INT_10F_11F_11F_REV&&(tt=i.R11F_G11F_B10F)),R===i.RGBA){let rt=lt?cr:de.getTransfer(Q);K===i.FLOAT&&(tt=i.RGBA32F),K===i.HALF_FLOAT&&(tt=i.RGBA16F),K===i.UNSIGNED_BYTE&&(tt=rt===_e?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT&&pt&&(tt=pt.RGBA16_EXT),K===i.SHORT&&pt&&(tt=pt.RGBA16_SNORM_EXT),K===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function _(F,R){let K;return F?R===null||R===Dn||R===ji?K=i.DEPTH24_STENCIL8:R===An?K=i.DEPTH32F_STENCIL8:R===Us&&(K=i.DEPTH24_STENCIL8,te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Dn||R===ji?K=i.DEPTH_COMPONENT24:R===An?K=i.DEPTH_COMPONENT32F:R===Us&&(K=i.DEPTH_COMPONENT16),K}function T(F,R){return y(F)===!0||F.isFramebufferTexture&&F.minFilter!==We&&F.minFilter!==qe?Math.log2(Math.max(R.width,R.height))+1:F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?R.mipmaps.length:1}function L(F){let R=new WeakRef(F);n.get(F).__ref=R,g.add(R),M.register(F,R,R)}function I(F){let R=n.get(F).__ref;R!==void 0&&(g.delete(R),M.unregister(R))}function w(F){C(F.target)}function E(F){A(F.target)}function C(F){F.removeEventListener("dispose",w),I(F),N(F),F.isVideoTexture&&u.delete(F),F.isHTMLTexture&&h.delete(F)}function A(F){F.removeEventListener("dispose",E),I(F),W(F)}function U(){for(let F of g){let R=F.deref();R!==void 0&&(R.isRenderTarget===!0?A(R):C(R))}g.clear(),h.clear()}function N(F){let R=n.get(F);if(R.__webglInit===void 0)return;let K=F.source,Y=d.get(K);if(Y){let Q=Y[R.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&V(F),Object.keys(Y).length===0&&d.delete(K)}n.remove(F)}function V(F){let R=n.get(F);i.deleteTexture(R.__webglTexture);let K=F.source,Y=d.get(K);delete Y[R.__cacheKey],o.memory.textures--}function W(F){let R=n.get(F);R.__depthDisposeCallback&&R.__depthDisposeCallback();let K=F.depthTexture;if(K&&K.renderTarget===F&&C(K),F.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(R.__webglFramebuffer[Q]))for(let lt=0;lt<R.__webglFramebuffer[Q].length;lt++)i.deleteFramebuffer(R.__webglFramebuffer[Q][lt]);else i.deleteFramebuffer(R.__webglFramebuffer[Q]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[Q])}else{if(Array.isArray(R.__webglFramebuffer))for(let Q=0;Q<R.__webglFramebuffer.length;Q++)i.deleteFramebuffer(R.__webglFramebuffer[Q]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let Q=0;Q<R.__webglColorRenderbuffer.length;Q++)R.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[Q]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let Y=F.textures;for(let Q=0,lt=Y.length;Q<lt;Q++){let pt=n.get(Y[Q]);pt.__webglTexture&&(i.deleteTexture(pt.__webglTexture),o.memory.textures--),n.remove(Y[Q])}n.remove(F)}let P=0;function B(){P=0}function k(){return P}function X(F){P=F}function it(){let F=P;return F>=s.maxTextures&&te("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+s.maxTextures),P+=1,F}function q(F){let R=[];return R.push(F.wrapS),R.push(F.wrapT),R.push(F.wrapR||0),R.push(F.magFilter),R.push(F.minFilter),R.push(F.anisotropy),R.push(F.internalFormat),R.push(F.format),R.push(F.type),R.push(F.generateMipmaps),R.push(F.mipmapsAutoUpdate),R.push(F.premultiplyAlpha),R.push(F.flipY),R.push(F.unpackAlignment),R.push(F.colorSpace),R.join()}function $(F,R){let K=n.get(F);if(F.isVideoTexture&&jt(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&K.__version!==F.version){let Y=F.image;if(Y===null)te("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)te("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(K,F,R);return}}else F.isExternalTexture&&(K.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+R)}function ot(F,R){let K=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&K.__version!==F.version){_t(K,F,R);return}else F.isExternalTexture&&(K.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+R)}function ct(F,R){let K=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&K.__version!==F.version){_t(K,F,R);return}e.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+R)}function ut(F,R){let K=n.get(F);if(F.version>0&&K.__version!==F.version){Dt(K,F,R);return}e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+R)}let gt={[Wo]:i.REPEAT,[kn]:i.CLAMP_TO_EDGE,[Xo]:i.MIRRORED_REPEAT},Ot={[We]:i.NEAREST,[ku]:i.NEAREST_MIPMAP_NEAREST,[zr]:i.NEAREST_MIPMAP_LINEAR,[qe]:i.LINEAR,[Ma]:i.LINEAR_MIPMAP_NEAREST,[ui]:i.LINEAR_MIPMAP_LINEAR},Ct={[Wu]:i.NEVER,[Bl]:i.ALWAYS,[Xu]:i.LESS,[Fl]:i.LEQUAL,[qu]:i.EQUAL,[Ol]:i.GEQUAL,[Yu]:i.GREATER,[Zu]:i.NOTEQUAL};function It(F,R){if(R.type===An&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===qe||R.magFilter===Ma||R.magFilter===zr||R.magFilter===ui||R.minFilter===qe||R.minFilter===Ma||R.minFilter===zr||R.minFilter===ui)&&te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,gt[R.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,gt[R.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,gt[R.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,Ot[R.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,Ot[R.minFilter]),R.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,Ct[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===We||R.minFilter!==zr&&R.minFilter!==ui||R.type===An&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){let K=t.get("EXT_texture_filter_anisotropic");i.texParameterf(F,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function kt(F,R){let K=!1;F.__webglInit===void 0&&(F.__webglInit=!0,R.addEventListener("dispose",w),L(R));let Y=R.source,Q=d.get(Y);Q===void 0&&(Q={},d.set(Y,Q));let lt=q(R);if(lt!==F.__cacheKey){Q[lt]===void 0&&(Q[lt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,K=!0),Q[lt].usedTimes++;let pt=Q[F.__cacheKey];pt!==void 0&&(Q[F.__cacheKey].usedTimes--,pt.usedTimes===0&&V(R)),F.__cacheKey=lt,F.__webglTexture=Q[lt].texture}return K}function dt(F,R,K){return Math.floor(Math.floor(F/K)/R)}function St(F,R,K,Y){let lt=F.updateRanges;if(lt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,R.width,R.height,K,Y,R.data);else{lt.sort((H,ht)=>H.start-ht.start);let pt=0;for(let H=1;H<lt.length;H++){let ht=lt[pt],at=lt[H],wt=ht.start+ht.count,bt=dt(at.start,R.width,4),Et=dt(ht.start,R.width,4);at.start<=wt+1&&bt===Et&&dt(at.start+at.count-1,R.width,4)===bt?ht.count=Math.max(ht.count,at.start+at.count-ht.start):(++pt,lt[pt]=at)}lt.length=pt+1;let tt=e.getParameter(i.UNPACK_ROW_LENGTH),rt=e.getParameter(i.UNPACK_SKIP_PIXELS),xt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,R.width);for(let H=0,ht=lt.length;H<ht;H++){let at=lt[H],wt=Math.floor(at.start/4),bt=Math.ceil(at.count/4),Et=wt%R.width,Jt=Math.floor(wt/R.width),ae=bt,vt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Et),e.pixelStorei(i.UNPACK_SKIP_ROWS,Jt),e.texSubImage2D(i.TEXTURE_2D,0,Et,Jt,ae,vt,K,Y,R.data)}F.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,tt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,rt),e.pixelStorei(i.UNPACK_SKIP_ROWS,xt)}}function _t(F,R,K){let Y=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(Y=i.TEXTURE_3D);let Q=kt(F,R),lt=R.source;e.bindTexture(Y,F.__webglTexture,i.TEXTURE0+K);let pt=n.get(lt);if(lt.version!==pt.__version||Q===!0){if(e.activeTexture(i.TEXTURE0+K),(typeof ImageBitmap<"u"&&R.image instanceof ImageBitmap)===!1){let vt=de.getPrimaries(de.workingColorSpace),Qt=R.colorSpace===fi?null:de.getPrimaries(R.colorSpace),oe=R.colorSpace===fi||vt===Qt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe)}e.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment);let rt=x(R.image,!1,s.maxTextureSize);rt=Bt(R,rt);let xt=r.convert(R.format,R.colorSpace),H=r.convert(R.type),ht=b(R.internalFormat,xt,H,R.normalized,R.colorSpace,R.isVideoTexture);It(Y,R);let at,wt=R.mipmaps,bt=R.isVideoTexture!==!0,Et=pt.__version===void 0||Q===!0,Jt=lt.dataReady,ae=T(R,rt);if(R.isDepthTexture)ht=_(R.format===di,R.type),Et&&(bt?e.texStorage2D(i.TEXTURE_2D,1,ht,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,ht,rt.width,rt.height,0,xt,H,null));else if(R.isDataTexture)if(wt.length>0){bt&&Et&&e.texStorage2D(i.TEXTURE_2D,ae,ht,wt[0].width,wt[0].height);for(let vt=0,Qt=wt.length;vt<Qt;vt++)at=wt[vt],bt?Jt&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,at.width,at.height,xt,H,at.data):e.texImage2D(i.TEXTURE_2D,vt,ht,at.width,at.height,0,xt,H,at.data);R.generateMipmaps=!1}else bt?(Et&&e.texStorage2D(i.TEXTURE_2D,ae,ht,rt.width,rt.height),Jt&&St(R,rt,xt,H)):e.texImage2D(i.TEXTURE_2D,0,ht,rt.width,rt.height,0,xt,H,rt.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){bt&&Et&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ae,ht,wt[0].width,wt[0].height,rt.depth);for(let vt=0,Qt=wt.length;vt<Qt;vt++)if(at=wt[vt],R.format!==Un)if(xt!==null)if(bt){if(Jt)if(R.layerUpdates.size>0){let oe=Zl(at.width,at.height,R.format,R.type);for(let Nt of R.layerUpdates){let ye=at.data.subarray(Nt*oe/at.data.BYTES_PER_ELEMENT,(Nt+1)*oe/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,Nt,at.width,at.height,1,xt,ye)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,0,at.width,at.height,rt.depth,xt,at.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,vt,ht,at.width,at.height,rt.depth,0,at.data,0,0);else te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else bt?Jt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,0,at.width,at.height,rt.depth,xt,H,at.data):e.texImage3D(i.TEXTURE_2D_ARRAY,vt,ht,at.width,at.height,rt.depth,0,xt,H,at.data);R.layerUpdates.size>0&&R.clearLayerUpdates()}else{bt&&Et&&e.texStorage2D(i.TEXTURE_2D,ae,ht,wt[0].width,wt[0].height);for(let vt=0,Qt=wt.length;vt<Qt;vt++)at=wt[vt],R.format!==Un?xt!==null?bt?Jt&&e.compressedTexSubImage2D(i.TEXTURE_2D,vt,0,0,at.width,at.height,xt,at.data):e.compressedTexImage2D(i.TEXTURE_2D,vt,ht,at.width,at.height,0,at.data):te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):bt?Jt&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,at.width,at.height,xt,H,at.data):e.texImage2D(i.TEXTURE_2D,vt,ht,at.width,at.height,0,xt,H,at.data)}else if(R.isDataArrayTexture)if(bt){if(Et&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ae,ht,rt.width,rt.height,rt.depth),Jt)if(R.layerUpdates.size>0){let vt=Zl(rt.width,rt.height,R.format,R.type);for(let Qt of R.layerUpdates){let oe=rt.data.subarray(Qt*vt/rt.data.BYTES_PER_ELEMENT,(Qt+1)*vt/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Qt,rt.width,rt.height,1,xt,H,oe)}R.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,xt,H,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ht,rt.width,rt.height,rt.depth,0,xt,H,rt.data);else if(R.isData3DTexture)bt?(Et&&e.texStorage3D(i.TEXTURE_3D,ae,ht,rt.width,rt.height,rt.depth),Jt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,xt,H,rt.data)):e.texImage3D(i.TEXTURE_3D,0,ht,rt.width,rt.height,rt.depth,0,xt,H,rt.data);else if(R.isFramebufferTexture){if(Et)if(bt)e.texStorage2D(i.TEXTURE_2D,ae,ht,rt.width,rt.height);else{let vt=rt.width,Qt=rt.height;for(let oe=0;oe<ae;oe++)e.texImage2D(i.TEXTURE_2D,oe,ht,vt,Qt,0,xt,H,null),vt>>=1,Qt>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in i){let vt=i.canvas;if(vt.hasAttribute("layoutsubtree")||vt.setAttribute("layoutsubtree","true"),rt.parentNode!==vt){vt.appendChild(rt),h.add(R),vt.onpaint=Qt=>{let oe=Qt.changedElements;for(let Nt of h)oe.includes(Nt.image)&&(Nt.needsUpdate=!0)},vt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,rt);else{let oe=i.RGBA,Nt=i.RGBA,ye=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,oe,Nt,ye,rt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(wt.length>0){if(bt&&Et){let vt=Zt(wt[0]);e.texStorage2D(i.TEXTURE_2D,ae,ht,vt.width,vt.height)}for(let vt=0,Qt=wt.length;vt<Qt;vt++)at=wt[vt],bt?Jt&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,xt,H,at):e.texImage2D(i.TEXTURE_2D,vt,ht,xt,H,at);R.generateMipmaps=!1}else if(bt){if(Et){let vt=Zt(rt);e.texStorage2D(i.TEXTURE_2D,ae,ht,vt.width,vt.height)}Jt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,H,rt)}else e.texImage2D(i.TEXTURE_2D,0,ht,xt,H,rt);y(R)&&R.mipmapsAutoUpdate===!0&&v(Y),pt.__version=lt.version,R.onUpdate&&R.onUpdate(R)}F.__version=R.version}function Dt(F,R,K){if(R.image.length!==6)return;let Y=kt(F,R),Q=R.source;e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+K);let lt=n.get(Q);if(Q.version!==lt.__version||Y===!0){e.activeTexture(i.TEXTURE0+K);let pt=de.getPrimaries(de.workingColorSpace),tt=R.colorSpace===fi?null:de.getPrimaries(R.colorSpace),rt=R.colorSpace===fi||pt===tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let xt=R.isCompressedTexture||R.image[0].isCompressedTexture,H=R.image[0]&&R.image[0].isDataTexture,ht=[];for(let Nt=0;Nt<6;Nt++)!xt&&!H?ht[Nt]=x(R.image[Nt],!0,s.maxCubemapSize):ht[Nt]=H?R.image[Nt].image:R.image[Nt],ht[Nt]=Bt(R,ht[Nt]);let at=ht[0],wt=r.convert(R.format,R.colorSpace),bt=r.convert(R.type),Et=b(R.internalFormat,wt,bt,R.normalized,R.colorSpace),Jt=R.isVideoTexture!==!0,ae=lt.__version===void 0||Y===!0,vt=Q.dataReady,Qt=T(R,at);It(i.TEXTURE_CUBE_MAP,R);let oe;if(R.isDepthTexture){if(Et=_(R.format===di,R.type),ae)if(Jt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,Et,at.width,at.height);else for(let Nt=0;Nt<6;Nt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,Et,at.width,at.height,0,wt,bt,null)}else if(xt){Jt&&ae&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Qt,Et,at.width,at.height);for(let Nt=0;Nt<6;Nt++){oe=ht[Nt].mipmaps;for(let ye=0;ye<oe.length;ye++){let Ve=oe[ye];R.format!==Un?wt!==null?Jt?vt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,ye,0,0,Ve.width,Ve.height,wt,Ve.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,ye,Et,Ve.width,Ve.height,0,Ve.data):te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Jt?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,ye,0,0,Ve.width,Ve.height,wt,bt,Ve.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,ye,Et,Ve.width,Ve.height,0,wt,bt,Ve.data)}}}else{if(oe=R.mipmaps,Jt&&ae){oe.length>0&&Qt++;let Nt=Zt(ht[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Qt,Et,Nt.width,Nt.height)}for(let Nt=0;Nt<6;Nt++)if(H){Jt?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,0,0,ht[Nt].width,ht[Nt].height,wt,bt,ht[Nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,Et,ht[Nt].width,ht[Nt].height,0,wt,bt,ht[Nt].data);for(let ye=0;ye<oe.length;ye++){let pi=oe[ye].image[Nt].image;Jt?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,ye+1,0,0,pi.width,pi.height,wt,bt,pi.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,ye+1,Et,pi.width,pi.height,0,wt,bt,pi.data)}}else{Jt?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,0,0,wt,bt,ht[Nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,Et,wt,bt,ht[Nt]);for(let ye=0;ye<oe.length;ye++){let Ve=oe[ye];Jt?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,ye+1,0,0,wt,bt,Ve.image[Nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,ye+1,Et,wt,bt,Ve.image[Nt])}}}y(R)&&R.mipmapsAutoUpdate===!0&&v(i.TEXTURE_CUBE_MAP),lt.__version=Q.version,R.onUpdate&&R.onUpdate(R)}F.__version=R.version}function Mt(F,R,K,Y,Q,lt){let pt=r.convert(K.format,K.colorSpace),tt=r.convert(K.type),rt=b(K.internalFormat,pt,tt,K.normalized,K.colorSpace),xt=n.get(R),H=n.get(K);if(H.__renderTarget=R,!xt.__hasExternalTextures){let ht=Math.max(1,R.width>>lt),at=Math.max(1,R.height>>lt);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,lt,rt,ht,at,R.depth,0,pt,tt,null):e.texImage2D(Q,lt,rt,ht,at,0,pt,tt,null)}e.bindFramebuffer(i.FRAMEBUFFER,F),ft(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Q,H.__webglTexture,0,Xt(R)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Q,H.__webglTexture,lt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function z(F,R,K){if(i.bindRenderbuffer(i.RENDERBUFFER,F),R.depthBuffer){let Y=R.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,lt=_(R.stencilBuffer,Q),pt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ft(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xt(R),lt,R.width,R.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt(R),lt,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,lt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,F)}else{let Y=R.textures;for(let Q=0;Q<Y.length;Q++){let lt=Y[Q],pt=r.convert(lt.format,lt.colorSpace),tt=r.convert(lt.type),rt=b(lt.internalFormat,pt,tt,lt.normalized,lt.colorSpace);ft(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xt(R),rt,R.width,R.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt(R),rt,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,rt,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function J(F,R,K){let Y=R.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,F),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(R.depthTexture);Q.__renderTarget=R;let lt=Y?R.depthTexture.image[0]:R.depthTexture.image;(!Q.__webglTexture||lt.width!==R.width||lt.height!==R.height)&&(lt.width=R.width,lt.height=R.height,R.depthTexture.needsUpdate=!0),Y?ut(R.depthTexture,0):$(R.depthTexture,0);let pt=Q.__webglTexture,tt=Xt(R),rt=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+K:i.TEXTURE_2D,xt=R.depthTexture.format===di?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(R.depthTexture.format===ci)ft(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xt,rt,pt,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,xt,rt,pt,0);else if(R.depthTexture.format===di)ft(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xt,rt,pt,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,xt,rt,pt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function mt(F){let R=n.get(F),K=F.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==F.depthTexture){let Y=F.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),Y){let Q=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),R.__depthDisposeCallback=Q}R.__boundDepthTexture=Y}if(F.depthTexture&&!R.__autoAllocateDepthBuffer)if(K)for(let Y=0;Y<6;Y++)J(R.__webglFramebuffer[Y],F,Y);else F.texture.mipmaps.length>0?J(R.__webglFramebuffer[0],F,0):J(R.__webglFramebuffer,F,0);else if(K){R.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[Y]),R.__webglDepthbuffer[Y]===void 0)R.__webglDepthbuffer[Y]=i.createRenderbuffer(),z(R.__webglDepthbuffer[Y],F,!1);else{let Q=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=R.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,lt)}}else if(F.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),z(R.__webglDepthbuffer,F,!1);else{let Q=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,lt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(F,R,K){let Y=n.get(F);R!==void 0&&Mt(Y.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&mt(F)}function At(F){let R=F.texture,K=n.get(F),Y=n.get(R);F.addEventListener("dispose",E),L(F);let Q=F.textures,lt=F.isWebGLCubeRenderTarget===!0,pt=Q.length>1;if(pt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=R.version,o.memory.textures++),lt){K.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(R.mipmaps.length>0){K.__webglFramebuffer[tt]=[];for(let rt=0;rt<R.mipmaps.length;rt++)K.__webglFramebuffer[tt][rt]=i.createFramebuffer()}else K.__webglFramebuffer[tt]=i.createFramebuffer()}else{if(R.mipmaps.length>0){K.__webglFramebuffer=[];for(let tt=0;tt<R.mipmaps.length;tt++)K.__webglFramebuffer[tt]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(pt)for(let tt=0,rt=Q.length;tt<rt;tt++){let xt=n.get(Q[tt]);xt.__webglTexture===void 0&&(xt.__webglTexture=i.createTexture(),o.memory.textures++)}if(F.samples>0&&ft(F)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let tt=0;tt<Q.length;tt++){let rt=Q[tt];K.__webglColorRenderbuffer[tt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[tt]);let xt=r.convert(rt.format,rt.colorSpace),H=r.convert(rt.type),ht=b(rt.internalFormat,xt,H,rt.normalized,rt.colorSpace,F.isXRRenderTarget===!0),at=Xt(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,at,ht,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+tt,i.RENDERBUFFER,K.__webglColorRenderbuffer[tt])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),z(K.__webglDepthRenderbuffer,F,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(lt){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),It(i.TEXTURE_CUBE_MAP,R);for(let tt=0;tt<6;tt++)if(R.mipmaps.length>0)for(let rt=0;rt<R.mipmaps.length;rt++)Mt(K.__webglFramebuffer[tt][rt],F,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,rt);else Mt(K.__webglFramebuffer[tt],F,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);y(R)?v(i.TEXTURE_CUBE_MAP):R.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,R.mipmaps.length-1),e.unbindTexture()}else if(pt){for(let tt=0,rt=Q.length;tt<rt;tt++){let xt=Q[tt],H=n.get(xt),ht=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(ht=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,H.__webglTexture),It(ht,xt),Mt(K.__webglFramebuffer,F,xt,i.COLOR_ATTACHMENT0+tt,ht,0),y(xt)&&v(ht)}e.unbindTexture()}else{let tt=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(tt=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(tt,Y.__webglTexture),It(tt,R),R.mipmaps.length>0)for(let rt=0;rt<R.mipmaps.length;rt++)Mt(K.__webglFramebuffer[rt],F,R,i.COLOR_ATTACHMENT0,tt,rt);else Mt(K.__webglFramebuffer,F,R,i.COLOR_ATTACHMENT0,tt,0);y(R)?v(tt):R.mipmaps.length>0&&i.texParameteri(tt,i.TEXTURE_MAX_LEVEL,R.mipmaps.length-1),e.unbindTexture()}F.depthBuffer&&mt(F)}function G(F){let R=F.textures;for(let K=0,Y=R.length;K<Y;K++){let Q=R[K];if(y(Q)&&Q.mipmapsAutoUpdate===!0){let lt=S(F),pt=n.get(Q).__webglTexture;e.bindTexture(lt,pt),v(lt),e.unbindTexture()}}}let Yt=[];function Wt(F){if(F.samples>0){if(ft(F)===!1){let R=F.textures,K=F.width,Y=F.height,Q=i.COLOR_BUFFER_BIT,lt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=n.get(F),tt=R.length>1;if(tt)for(let xt=0;xt<R.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer),F.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let xt=0;xt<R.length;xt++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),tt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pt.__webglColorRenderbuffer[xt]);let H=n.get(R[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,H,0)}i.blitFramebuffer(0,0,K,Y,0,0,K,Y,Q,i.NEAREST),c===!0&&(Yt.length=0,Yt.push(i.COLOR_ATTACHMENT0+xt),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&Yt.push(lt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Yt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),tt)for(let xt=0;xt<R.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,pt.__webglColorRenderbuffer[xt]);let H=n.get(R[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,H,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&c){let R=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function Xt(F){return Math.min(s.maxSamples,F.samples)}function ft(F){let R=n.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function jt(F){let R=o.render.frame;u.get(F)!==R&&(u.set(F,R),F.update())}function Bt(F,R){let K=F.colorSpace,Y=F.format,Q=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||K!==ar&&K!==fi&&(de.getTransfer(K)===_e?(Y!==Un||Q!==cn)&&te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ee("WebGLTextures: Unsupported texture color space:",K)),R}function Zt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(l.width=F.naturalWidth||F.width,l.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(l.width=F.displayWidth,l.height=F.displayHeight):(l.width=F.width,l.height=F.height),l}this.allocateTextureUnit=it,this.resetTextureUnits=B,this.getTextureUnits=k,this.setTextureUnits=X,this.setTexture2D=$,this.setTexture2DArray=ot,this.setTexture3D=ct,this.setTextureCube=ut,this.rebindTextures=Lt,this.setupRenderTarget=At,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=ft,this.dispose=U}function d_(i,t){function e(n,s=fi){let r,o=de.getTransfer(s);if(n===cn)return i.UNSIGNED_BYTE;if(n===ba)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ta)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ll)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Dl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Il)return i.BYTE;if(n===Pl)return i.SHORT;if(n===Us)return i.UNSIGNED_SHORT;if(n===Sa)return i.INT;if(n===Dn)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===Nn)return i.HALF_FLOAT;if(n===Nl)return i.ALPHA;if(n===Ul)return i.RGB;if(n===Un)return i.RGBA;if(n===ci)return i.DEPTH_COMPONENT;if(n===di)return i.DEPTH_STENCIL;if(n===Fs)return i.RED;if(n===wa)return i.RED_INTEGER;if(n===Ci)return i.RG;if(n===Aa)return i.RG_INTEGER;if(n===Ea)return i.RGBA_INTEGER;if(n===kr||n===Vr||n===Gr||n===Hr)if(o===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ca||n===Ra||n===Ia||n===Pa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ca)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ra)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ia)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===La||n===Da||n===Na||n===Ua||n===Fa||n===Wr||n===Oa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===La||n===Da)return o===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Na)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ua)return r.COMPRESSED_R11_EAC;if(n===Fa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Wr)return r.COMPRESSED_RG11_EAC;if(n===Oa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ba||n===za||n===ka||n===Va||n===Ga||n===Ha||n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===$a||n===Ja||n===Ka)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ba)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===za)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ka)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Va)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ga)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ha)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wa)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xa)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qa)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ya)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Za)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$a)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ja)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ka)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qa||n===ja||n===tc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Qa)return o===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ja)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ec||n===nc||n===Xr||n===ic)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ec)return r.COMPRESSED_RED_RGTC1_EXT;if(n===nc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ic)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ji?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var f_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p_=`
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

}`,ih=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new _r(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new wn({vertexShader:f_,fragmentShader:p_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ne(new Yi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},sh=class extends Gn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null,M=typeof XRWebGLBinding<"u",p=new ih,m={},x=e.getContextAttributes(),y=null,v=null,S=[],b=[],_=new nt,T=null,L=null,I=new gn;I.viewport=new Te;let w=new gn;w.viewport=new Te;let E=[I,w],C=new xa,A=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let $=S[q];return $===void 0&&($=new ws,S[q]=$),$.getTargetRaySpace()},this.getControllerGrip=function(q){let $=S[q];return $===void 0&&($=new ws,S[q]=$),$.getGripSpace()},this.getHand=function(q){let $=S[q];return $===void 0&&($=new ws,S[q]=$),$.getHandSpace()};function N(q){let $=b.indexOf(q.inputSource);if($===-1)return;let ot=S[$];ot!==void 0&&(ot.update(q.inputSource,q.frame,l||o),ot.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",W);for(let q=0;q<S.length;q++){let $=b[q];$!==null&&(b[q]=null,S[q].disconnect($))}A=null,U=null,p.reset();for(let q in m)delete m[q];if(t.setRenderTarget(y),d=null,f=null,h=null,s=null,v=null,it.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(_.width,_.height,!1),L!==null){let q=L.camera;q.fov=L.fov,q.zoom=L.zoom,q.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&M&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",V),s.addEventListener("inputsourceschange",W),x.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(_),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ot=null,ct=null,ut=null;x.depth&&(ut=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=x.stencil?di:ci,ct=x.stencil?ji:Dn);let gt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(gt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new xn(f.textureWidth,f.textureHeight,{format:Un,type:cn,depthTexture:new hi(f.textureWidth,f.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ot={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new xn(d.framebufferWidth,d.framebufferHeight,{format:Un,type:cn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),it.setContext(s),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function W(q){for(let $=0;$<q.removed.length;$++){let ot=q.removed[$],ct=b.indexOf(ot);ct>=0&&(b[ct]=null,S[ct].disconnect(ot))}for(let $=0;$<q.added.length;$++){let ot=q.added[$],ct=b.indexOf(ot);if(ct===-1){for(let gt=0;gt<S.length;gt++)if(gt>=b.length){b.push(ot),ct=gt;break}else if(b[gt]===null){b[gt]=ot,ct=gt;break}if(ct===-1)break}let ut=S[ct];ut&&ut.connect(ot)}}function P(q,$){$===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices($.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let $=q.near,ot=q.far;p.texture!==null&&(p.depthNear>0&&($=p.depthNear),p.depthFar>0&&(ot=p.depthFar)),C.near=w.near=I.near=$,C.far=w.far=I.far=ot,(A!==C.near||U!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),A=C.near,U=C.far),C.layers.mask=q.layers.mask|6,I.layers.mask=C.layers.mask&-5,w.layers.mask=C.layers.mask&-3;let ct=q.parent,ut=C.cameras;P(C,ct);for(let gt=0;gt<ut.length;gt++)P(ut[gt],ct);C.projectionMatrix.copy(I.projectionMatrix),C.projectionMatrixInverse.copy(I.projectionMatrixInverse),L===null&&q.isPerspectiveCamera&&(L={camera:q,fov:q.fov,zoom:q.zoom}),B(q,C,ct)};function B(q,$,ot){ot===null?q.matrix.copy($.matrixWorld):(q.matrix.copy(ot.matrixWorld),q.matrix.invert(),q.matrix.multiply($.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy($.projectionMatrix),q.projectionMatrixInverse.copy($.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ss*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(C)},this.getCameraTexture=function(q){return m[q]};let k=null;function X(q,$){if(u=$.getViewerPose(l||o),g=$,u!==null){let ot=u.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let ct=!1;ot.length!==C.cameras.length&&(C.cameras.length=0,ct=!0);for(let Ct=0;Ct<ot.length;Ct++){let It=ot[Ct],kt=null;if(d!==null)kt=d.getViewport(It);else{let St=h.getViewSubImage(f,It);kt=St.viewport,Ct===0&&(t.setRenderTargetTextures(v,St.colorTexture,St.depthStencilTexture),t.setRenderTarget(v))}let dt=E[Ct];dt===void 0&&(dt=new gn,dt.layers.enable(Ct),dt.viewport=new Te,E[Ct]=dt),dt.matrix.fromArray(It.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(It.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(kt.x,kt.y,kt.width,kt.height),Ct===0&&(C.matrix.copy(dt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ct===!0&&C.cameras.push(dt)}let ut=s.enabledFeatures;if(ut&&ut.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){h=n.getBinding();let Ct=h.getDepthInformation(ot[0]);Ct&&Ct.isValid&&Ct.texture&&p.init(Ct,s.renderState)}if(ut&&ut.includes("camera-access")&&M){t.state.unbindTexture(),h=n.getBinding();for(let Ct=0;Ct<ot.length;Ct++){let It=ot[Ct].camera;if(It){let kt=m[It];kt||(kt=new _r,m[It]=kt);let dt=h.getCameraImage(It);kt.sourceTexture=dt}}}}for(let ot=0;ot<S.length;ot++){let ct=b[ot],ut=S[ot];ct!==null&&ut!==void 0&&ut.update(ct,$,l||o)}k&&k(q,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}let it=new Pd;it.setAnimationLoop(X),this.setAnimationLoop=function(q){k=q},this.dispose=function(){}}},m_=new fe,Vd=new ie;Vd.set(-1,0,0,0,1,0,0,0,1);function g_(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Xl(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,x,y,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),M(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,x,y):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===rn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===rn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let x=t.get(m),y=x.envMap,v=x.envMapRotation;y&&(p.envMap.value=y,p.envMapRotation.value.setFromMatrix4(m_.makeRotationFromEuler(v)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Vd),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,x,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=y*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,x){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===rn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function M(p,m){let x=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function x_(i,t,e,n){let s={},r={};function o(x,y){let v=y.program;n.uniformBlockBinding(x,v,s[x.id])}function a(x,y){let v=s[x.id];v===void 0&&(g(x),v=c(x),s[x.id]=v,x.addEventListener("dispose",p));let S=y.program;n.updateUBOMapping(x,S);let b=t.render.frame;r[x.id]!==b&&(l(x),r[x.id]=b)}function c(x){let y=i.createBuffer(),v=x.__size,S=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,v,S),i.bindBuffer(i.UNIFORM_BUFFER,null),y}function l(x){let y=s[x.id],v=x.uniforms,S=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let b=0,_=v.length;b<_;b++){let T=v[b];if(Array.isArray(T))for(let L=0,I=T.length;L<I;L++)u(T[L],b,L,S);else u(T,b,0,S)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(x,y,v,S){if(f(x,y,v,S)===!0){let b=x.__offset,_=x.value;if(Array.isArray(_)){let T=0;for(let L=0;L<_.length;L++){let I=_[L],w=M(I,!0);h(I,x.__data,T),T+=w.storage/Float32Array.BYTES_PER_ELEMENT}}else h(_,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,x.__data)}}function h(x,y,v){typeof x=="number"||typeof x=="boolean"?y[v]=x:x.isMatrix3?(y[v]=x.elements[0],y[v+1]=x.elements[1],y[v+2]=x.elements[2],y[v+3]=0,y[v+4]=x.elements[3],y[v+5]=x.elements[4],y[v+6]=x.elements[5],y[v+7]=0,y[v+8]=x.elements[6],y[v+9]=x.elements[7],y[v+10]=x.elements[8],y[v+11]=0):ArrayBuffer.isView(x)?y.set(x.subarray(0,y.length-v),v):x.toArray(y,v)}function f(x,y,v,S){let b=x.value,_=y+"_"+v;if(Array.isArray(b)){S[_]===void 0&&(S[_]=[]);let T=S[_],L=!1;for(let I=0;I<b.length;I++)d(b[I],T,I)===!0&&(L=!0);return L}return d(b,S,_)}function d(x,y,v){if(y[v]===void 0)return typeof x=="number"||typeof x=="boolean"?y[v]=x:ArrayBuffer.isView(x)?y[v]=x.slice():y[v]=x.clone(),!0;{let S=y[v];if(typeof x=="number"||typeof x=="boolean"){if(S!==x)return y[v]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(S.equals(x)===!1)return S.copy(x),!0}}return!1}function g(x){let y=x.uniforms,v=0,S=16;for(let _=0,T=y.length;_<T;_++){let L=Array.isArray(y[_])?y[_]:[y[_]];for(let I=0,w=L.length;I<w;I++){let E=L[I],C=Array.isArray(E.value)?E.value:[E.value],A=Array.isArray(y[_])||Array.isArray(E.value),U=v;for(let V=0,W=C.length;V<W;V++){let P=C[V],B=M(P,A),k=v%S,X=k%B.boundary,it=k+X;v+=X,it!==0&&S-it<B.storage&&(v+=S-it),V===0&&(U=v),v+=B.storage}let N=E.type==="int"?Int32Array:E.type==="uint"?Uint32Array:Float32Array;E.__data=new N((v-U)/Float32Array.BYTES_PER_ELEMENT),E.__offset=U}}let b=v%S;return b>0&&(v+=S-b),x.__size=v,x.__cache={},this}function M(x,y){let v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=16,v.storage=48):x.isMatrix4?(v.boundary=16,v.storage=64):x.isTexture?te("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(v.boundary=16,v.storage=x.byteLength):te("WebGLRenderer: Unsupported uniform value type.",x),y===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function p(x){let y=x.target;y.removeEventListener("dispose",p),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(let x in s)i.deleteBuffer(s[x]);s={},r={}}return{bind:o,update:a,dispose:m}}var __=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Yn=null;function y_(){return Yn===null&&(Yn=new ki(__,16,16,Ci,Nn),Yn.name="DFG_LUT",Yn.minFilter=qe,Yn.magFilter=qe,Yn.wrapS=kn,Yn.wrapT=kn,Yn.generateMipmaps=!1,Yn.needsUpdate=!0),Yn}var ac=class{constructor(t={}){let{canvas:e=Ju(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=cn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let M=d,p=new Set([Ea,Aa,wa]),m=new Set([cn,Dn,Us,ji,ba,Ta]),x=new Uint32Array(4),y=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},S=null,b=null,_=[],T=[],L=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,w=!1,E=null,C=null,A=null,U=null;this._outputColorSpace=pn;let N=0,V=0,W=null,P=-1,B=null,k=new Te,X=new Te,it=null,q=new yt(0),$=0,ot=e.width,ct=e.height,ut=1,gt=null,Ot=null,Ct=new Te(0,0,ot,ct),It=new Te(0,0,ot,ct),kt=!1,dt=new Si,St=new Jo,_t=!1,Dt=!1,Mt=new fe,z=new O,J=new Te,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Lt=!1;function At(){return W===null?ut:1}let G=n;function Yt(D,Z){return e.getContext(D,Z)}let Wt,Xt,ft,jt,Bt,Zt,F,R,K,Y,Q,lt,pt,tt,rt,xt,H,ht,at,wt,bt,Et,Jt;try{let D={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Qt,!1),e.addEventListener("webglcontextrestored",oe,!1),e.addEventListener("webglcontextcreationerror",Nt,!1),G===null){let Z="webgl2";if(G=Yt(Z,D),G===null)throw Yt(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ae()}catch(D){throw e.removeEventListener("webglcontextlost",Qt,!1),e.removeEventListener("webglcontextrestored",oe,!1),e.removeEventListener("webglcontextcreationerror",Nt,!1),ee("WebGLRenderer: "+D.message),D}function ae(){Wt=new I1(G),Wt.init(),bt=new d_(G,Wt),Xt=new y1(G,Wt,t,bt),ft=new h_(G,Wt),Xt.reversedDepthBuffer&&f&&ft.buffers.depth.setReversed(!0),C=G.createFramebuffer(),A=G.createFramebuffer(),U=G.createFramebuffer(),jt=new D1(G),Bt=new Jx,Zt=new u_(G,Wt,ft,Bt,Xt,bt,jt),F=new R1(I),R=new Um(G),Et=new x1(G,R),K=new P1(G,R,jt,Et),Y=new U1(G,K,R,Et,jt),ht=new N1(G,Xt,Zt),rt=new v1(Bt),Q=new $x(I,F,Wt,Xt,Et,rt),lt=new g_(I,Bt),pt=new Qx,tt=new s_(Wt),H=new g1(I,F,ft,Y,g,c),xt=new l_(I,Y,Xt),Jt=new x_(G,jt,Xt,ft),at=new _1(G,Wt,jt),wt=new L1(G,Wt,jt),jt.programs=Q.programs,I.capabilities=Xt,I.extensions=Wt,I.properties=Bt,I.renderLists=pt,I.shadowMap=xt,I.state=ft,I.info=jt}M!==cn&&(L=new O1(M,e.width,e.height,a,s,r));let vt=new sh(I,G);this.xr=vt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let D=Wt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){let D=Wt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return ut},this.setPixelRatio=function(D){D!==void 0&&(ut=D,this.setSize(ot,ct,!1))},this.getSize=function(D){return D.set(ot,ct)},this.setSize=function(D,Z,st=!0){if(vt.isPresenting){te("WebGLRenderer: Can't change size while VR device is presenting.");return}ot=D,ct=Z,e.width=Math.floor(D*ut),e.height=Math.floor(Z*ut),st===!0&&(e.style.width=D+"px",e.style.height=Z+"px"),L!==null&&L.setSize(e.width,e.height),this.setViewport(0,0,D,Z)},this.getDrawingBufferSize=function(D){return D.set(ot*ut,ct*ut).floor()},this.setDrawingBufferSize=function(D,Z,st){ot=D,ct=Z,ut=st,e.width=Math.floor(D*st),e.height=Math.floor(Z*st),this.setViewport(0,0,D,Z)},this.setEffects=function(D){if(M===cn){ee("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let Z=0;Z<D.length;Z++)if(D[Z].isOutputPass===!0){te("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(k)},this.getViewport=function(D){return D.copy(Ct)},this.setViewport=function(D,Z,st,j){D.isVector4?Ct.set(D.x,D.y,D.z,D.w):Ct.set(D,Z,st,j),ft.viewport(k.copy(Ct).multiplyScalar(At()).round())},this.getScissor=function(D){return D.copy(It)},this.setScissor=function(D,Z,st,j){D.isVector4?It.set(D.x,D.y,D.z,D.w):It.set(D,Z,st,j),ft.scissor(X.copy(It).multiplyScalar(At()).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(D){ft.setScissorTest(kt=D)},this.setOpaqueSort=function(D){gt=D},this.setTransparentSort=function(D){Ot=D},this.getClearColor=function(D){return D.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor(...arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha(...arguments)},this.clear=function(D=!0,Z=!0,st=!0){let j=0;if(D){let et=!1;if(W!==null){let Pt=W.texture.format;et=p.has(Pt)}if(et){let Pt=W.texture.type,Vt=m.has(Pt),Rt=H.getClearColor(),Ft=H.getClearAlpha(),qt=Rt.r,se=Rt.g,he=Rt.b;Vt?(x[0]=qt,x[1]=se,x[2]=he,x[3]=Ft,G.clearBufferuiv(G.COLOR,0,x)):(y[0]=qt,y[1]=se,y[2]=he,y[3]=Ft,G.clearBufferiv(G.COLOR,0,y))}else j|=G.COLOR_BUFFER_BIT}Z&&(j|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),st&&(j|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&G.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(D){D.setRenderer(this),E=D},this.dispose=function(){e.removeEventListener("webglcontextlost",Qt,!1),e.removeEventListener("webglcontextrestored",oe,!1),e.removeEventListener("webglcontextcreationerror",Nt,!1),H.dispose(),pt.dispose(),tt.dispose(),Zt.dispose(),Bt.dispose(),F.dispose(),Y.dispose(),K.dispose(),Et.dispose(),Jt.dispose(),Q.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",Ah),vt.removeEventListener("sessionend",Eh),Li.stop()};function Qt(D){D.preventDefault(),kl("WebGLRenderer: Context Lost."),w=!0}function oe(){kl("WebGLRenderer: Context Restored."),w=!1;let D=jt.autoReset,Z=xt.enabled,st=xt.autoUpdate,j=xt.needsUpdate,et=xt.type;ae(),jt.autoReset=D,xt.enabled=Z,xt.autoUpdate=st,xt.needsUpdate=j,xt.type=et}function Nt(D){ee("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function ye(D){let Z=D.target;Z.removeEventListener("dispose",ye),Ve(Z)}function Ve(D){pi(D),Bt.remove(D)}function pi(D){let Z=Bt.get(D).programs;Z!==void 0&&(Z.forEach(function(st){Q.releaseProgram(st)}),D.isShaderMaterial&&Q.releaseShaderCache(D))}this.renderBufferDirect=function(D,Z,st,j,et,Pt){Z===null&&(Z=mt);let Vt=et.isMesh&&et.matrixWorld.determinantAffine()<0,Rt=ip(D,Z,st,j,et);ft.setMaterial(j,Vt);let Ft=st.index,qt=1;if(j.wireframe===!0){if(Ft=K.getWireframeAttribute(st),Ft===void 0)return;qt=2}let se=st.drawRange,he=st.attributes.position,Gt=se.start*qt,ue=(se.start+se.count)*qt;Pt!==null&&(Gt=Math.max(Gt,Pt.start*qt),ue=Math.min(ue,(Pt.start+Pt.count)*qt)),Ft!==null?(Gt=Math.max(Gt,0),ue=Math.min(ue,Ft.count)):he!=null&&(Gt=Math.max(Gt,0),ue=Math.min(ue,he.count));let De=ue-Gt;if(De<0||De===1/0)return;Et.setup(et,j,Rt,st,Ft);let be,Se=at;if(Ft!==null&&(be=R.get(Ft),Se=wt,Se.setIndex(be)),et.isMesh)j.wireframe===!0?(ft.setLineWidth(j.wireframeLinewidth*At()),Se.setMode(G.LINES)):Se.setMode(G.TRIANGLES);else if(et.isLine){let Ze=j.linewidth;Ze===void 0&&(Ze=1),ft.setLineWidth(Ze*At()),et.isLineSegments?Se.setMode(G.LINES):et.isLineLoop?Se.setMode(G.LINE_LOOP):Se.setMode(G.LINE_STRIP)}else et.isPoints?Se.setMode(G.POINTS):et.isSprite&&Se.setMode(G.TRIANGLES);if(et.isBatchedMesh)if(Wt.get("WEBGL_multi_draw"))Se.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else{let Ze=et._multiDrawStarts,Ht=et._multiDrawCounts,tn=et._multiDrawCount,xe=Ft?R.get(Ft).bytesPerElement:1,Di=Bt.get(j).currentProgram.getUniforms();for(let $e=0;$e<tn;$e++)Di.setValue(G,"_gl_DrawID",$e),Se.render(Ze[$e]/xe,Ht[$e])}else if(et.isInstancedMesh)Se.renderInstances(Gt,De,et.count);else if(st.isInstancedBufferGeometry){let Ze=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Ht=Math.min(st.instanceCount,Ze);Se.renderInstances(Gt,De,Ht)}else Se.render(Gt,De)};function wh(D,Z,st,j){E!==null&&D.isNodeMaterial&&E.setObject(j,D),_t===!0&&rt.setState(D,st,!1),D.transparent===!0&&D.side===an&&D.forceSinglePass===!1?(D.side=rn,D.needsUpdate=!0,Zs(D,Z,j),D.side=Ei,D.needsUpdate=!0,Zs(D,Z,j),D.side=an):Zs(D,Z,j)}this.compile=function(D,Z,st=null){st===null&&(st=D),E!==null&&E.renderStart(D,Z,st),b=tt.get(st),b.init(Z),T.push(b),st.traverseVisible(function(et){et.isLight&&et.layers.test(Z.layers)&&(b.pushLight(et),et.castShadow&&b.pushShadow(et))}),D!==st&&D.traverseVisible(function(et){et.isLight&&et.layers.test(Z.layers)&&(b.pushLight(et),et.castShadow&&b.pushShadow(et))}),b.setupLights(),E!==null&&E.updateLights(b.state.lightsArray),Dt=this.localClippingEnabled,_t=rt.init(this.clippingPlanes,Dt),_t===!0&&rt.setGlobalState(this.clippingPlanes,Z),E!==null&&xt.render(b.state.shadowsArray,st,Z);let j=new Set;return D.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;let Pt=et.material;if(Pt)if(Array.isArray(Pt))for(let Vt=0;Vt<Pt.length;Vt++){let Rt=Pt[Vt];wh(Rt,st,Z,et),j.add(Rt)}else wh(Pt,st,Z,et),j.add(Pt)}),b=T.pop(),E!==null&&E.renderEnd(),j},this.compileAsync=function(D,Z,st=null){let j=this.compile(D,Z,st);return new Promise(et=>{function Pt(){if(j.forEach(function(Vt){let Ft=Bt.get(Vt).currentProgram;(Ft===void 0||Ft.isReady())&&j.delete(Vt)}),j.size===0){et(D);return}setTimeout(Pt,10)}Wt.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let Nc=null;function ep(D){Nc&&Nc(D)}function Ah(){Li.stop()}function Eh(){Li.start()}let Li=new Pd;Li.setAnimationLoop(ep),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(D){Nc=D,vt.setAnimationLoop(D),D===null?Li.stop():Li.start()},vt.addEventListener("sessionstart",Ah),vt.addEventListener("sessionend",Eh),this.render=function(D,Z){if(Z!==void 0&&Z.isCamera!==!0){ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;E!==null&&E.renderStart(D,Z);let st=vt.enabled===!0&&vt.isPresenting===!0,j=L!==null&&(W===null||st)&&L.begin(I,W);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(Z),Z=vt.getCamera()),D.isScene===!0&&D.onBeforeRender(I,D,Z,W),b=tt.get(D,T.length),b.init(Z),b.state.textureUnits=Zt.getTextureUnits(),T.push(b),Mt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Z.isArrayCamera?St.setFromArrayCamera(Z):dt.setFromProjectionMatrix(Mt,Sn,Z.reversedDepth),Dt=this.localClippingEnabled,_t=rt.init(this.clippingPlanes,Dt),S=pt.get(D,_.length),S.init(),_.push(S),this.info.render.frame++,vt.enabled===!0&&vt.isPresenting===!0){let Vt=I.xr.getDepthSensingMesh();Vt!==null&&Uc(Vt,Z,-1/0,I.sortObjects)}Uc(D,Z,0,I.sortObjects),S.finish(),E!==null&&E.updateLights(b.state.lightsArray),I.sortObjects===!0&&S.sort(gt,Ot),Lt=vt.enabled===!1||vt.isPresenting===!1||vt.hasDepthSensing()===!1,Lt&&H.addToRenderList(S,D),this.info.autoReset===!0&&this.info.reset(),_t===!0&&rt.beginShadows();let et=b.state.shadowsArray;if(xt.render(et,D,Z),_t===!0&&rt.endShadows(),(j&&L.hasRenderPass())===!1){let Vt=S.opaque,Rt=S.transmissive;if(b.setupLights(),Z.isArrayCamera){let Ft=Z.cameras;if(Rt.length>0)for(let qt=0,se=Ft.length;qt<se;qt++){let he=Ft[qt];Rh(Vt,Rt,D,he)}Lt&&H.render(D);for(let qt=0,se=Ft.length;qt<se;qt++){let he=Ft[qt];Ch(S,D,he,he.viewport)}}else Rt.length>0&&Rh(Vt,Rt,D,Z),Lt&&H.render(D),Ch(S,D,Z)}W!==null&&V===0&&(Zt.updateMultisampleRenderTarget(W),Zt.updateRenderTargetMipmap(W)),j&&L.end(I),D.isScene===!0&&D.onAfterRender(I,D,Z),Et.resetDefaultState(),P=-1,B=null,T.pop(),T.length>0?(b=T[T.length-1],Zt.setTextureUnits(b.state.textureUnits),_t===!0&&rt.setGlobalState(I.clippingPlanes,b.state.camera)):b=null,_.pop(),_.length>0?S=_[_.length-1]:S=null,E!==null&&E.renderEnd()};function Uc(D,Z,st,j){if(D.visible===!1)return;if(D.layers.test(Z.layers)){if(D.isGroup)st=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Z);else if(D.isLight)b.pushLight(D),D.castShadow&&b.pushShadow(D);else if(D.isSprite){let Vt=Z.isArrayCamera?St:dt;if(!D.frustumCulled||D.intersectsFrustum(Vt)){j&&J.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Mt);let Rt=Y.update(D),Ft=D.material;Ft.visible&&S.push(D,Rt,Ft,st,J.z,null,Z)}}else if(D.isMesh||D.isLine||D.isPoints){let Vt=Z.isArrayCamera?St:dt;if(!D.frustumCulled||D.intersectsFrustum(Vt)){let Rt=Y.update(D),Ft=D.material;if(j&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),J.copy(D.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),J.copy(Rt.boundingSphere.center)),J.applyMatrix4(D.matrixWorld).applyMatrix4(Mt)),Array.isArray(Ft)){let qt=Rt.groups;for(let se=0,he=qt.length;se<he;se++){let Gt=qt[se],ue=Ft[Gt.materialIndex];ue&&ue.visible&&S.push(D,Rt,ue,st,J.z,Gt,Z)}}else Ft.visible&&S.push(D,Rt,Ft,st,J.z,null,Z)}}}let Pt=D.children;for(let Vt=0,Rt=Pt.length;Vt<Rt;Vt++)Uc(Pt[Vt],Z,st,j)}function Ch(D,Z,st,j){let{opaque:et,transmissive:Pt,transparent:Vt}=D;b.setupLightsView(st),_t===!0&&rt.setGlobalState(I.clippingPlanes,st),j&&ft.viewport(k.copy(j)),et.length>0&&lo(et,Z,st),Pt.length>0&&lo(Pt,Z,st),Vt.length>0&&lo(Vt,Z,st),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function Rh(D,Z,st,j){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[j.id]===void 0){let Gt=Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[j.id]=new xn(1,1,{generateMipmaps:!0,type:Gt?Nn:cn,minFilter:ui,samples:Math.max(4,Xt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:de.workingColorSpace})}let Pt=b.state.transmissionRenderTarget[j.id],Vt=j.viewport||k;Pt.setSize(Vt.z*I.transmissionResolutionScale,Vt.w*I.transmissionResolutionScale);let Rt=I.getRenderTarget(),Ft=I.getActiveCubeFace(),qt=I.getActiveMipmapLevel();I.setRenderTarget(Pt),I.getClearColor(q),$=I.getClearAlpha(),$<1&&I.setClearColor(16777215,.5),I.clear(),Lt&&H.render(st);let se=I.toneMapping;I.toneMapping=qn;let he=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),b.setupLightsView(j),_t===!0&&rt.setGlobalState(I.clippingPlanes,j),lo(D,st,j),Zt.updateMultisampleRenderTarget(Pt),Zt.updateRenderTargetMipmap(Pt),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let ue=0,De=Z.length;ue<De;ue++){let be=Z[ue],{object:Se,geometry:Ze,material:Ht,group:tn}=be;if(Ht.side===an&&Se.layers.test(j.layers)){let xe=Ht.side;Ht.side=rn,Ht.needsUpdate=!0,Ih(Se,st,j,Ze,Ht,tn),Ht.side=xe,Ht.needsUpdate=!0,Gt=!0}}Gt===!0&&(Zt.updateMultisampleRenderTarget(Pt),Zt.updateRenderTargetMipmap(Pt))}I.setRenderTarget(Rt,Ft,qt),I.setClearColor(q,$),he!==void 0&&(j.viewport=he),I.toneMapping=se}function lo(D,Z,st){let j=Z.isScene===!0?Z.overrideMaterial:null;for(let et=0,Pt=D.length;et<Pt;et++){let Vt=D[et],{object:Rt,geometry:Ft,group:qt}=Vt,se=Vt.material;se.allowOverride===!0&&j!==null&&(se=j),Rt.layers.test(st.layers)&&Ih(Rt,Z,st,Ft,se,qt)}}function Ih(D,Z,st,j,et,Pt){E!==null&&et.isNodeMaterial&&E.setObject(D,et),D.onBeforeRender(I,Z,st,j,et,Pt),D.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),et.onBeforeRender(I,Z,st,j,D,Pt),et.transparent===!0&&et.side===an&&et.forceSinglePass===!1?(et.side=rn,et.needsUpdate=!0,I.renderBufferDirect(st,Z,j,et,D,Pt),et.side=Ei,et.needsUpdate=!0,I.renderBufferDirect(st,Z,j,et,D,Pt),et.side=an):I.renderBufferDirect(st,Z,j,et,D,Pt),D.onAfterRender(I,Z,st,j,et,Pt)}function Ph(D){let Z=0;for(let st of D)st.texture!==null&&Z++;return Z}function Zs(D,Z,st){Z.isScene!==!0&&(Z=mt);let j=Bt.get(D),et=b.state.lights,Pt=b.state.shadowsArray,Vt=et.state.version,Rt=Q.getParameters(D,et.state,Pt,Z,st,b.state.lightProbeGridArray),Ft=Q.getProgramCacheKey(Rt),qt=j.programs;j.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?Z.environment:null,j.fog=Z.fog;let se=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;j.envMap=F.get(D.envMap||j.environment,se),j.envMapRotation=j.environment!==null&&D.envMap===null?Z.environmentRotation:D.envMapRotation,qt===void 0&&(D.addEventListener("dispose",ye),qt=new Map,j.programs=qt,j.programVariants=new Map);let he=qt.get(Ft);if(he!==void 0){if(j.currentProgram===he&&j.lightsStateVersion===Vt)return Dh(D,Rt),he}else Rt.uniforms=Q.getUniforms(D),E!==null&&D.isNodeMaterial&&E.build(D,st,Rt),D.onBeforeCompile(Rt,I),he=Q.acquireProgram(Rt,Ft),qt.set(Ft,he),j.uniforms=Rt.uniforms;let Gt=j.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Gt.clippingPlanes=rt.uniform),Dh(D,Rt),j.needsLights=rp(D),j.lightsStateVersion=Vt,j.needsLights&&(Gt.ambientLightColor.value=et.state.ambient,Gt.lightProbe.value=et.state.probe,Gt.sunLights.value=et.state.sun,Gt.sunLightShadows.value=et.state.sunShadow,Gt.directionalLights.value=et.state.directional,Gt.directionalLightShadows.value=et.state.directionalShadow,Gt.spotLights.value=et.state.spot,Gt.spotLightShadows.value=et.state.spotShadow,Gt.rectAreaLights.value=et.state.rectArea,Gt.ltc_1.value=et.state.rectAreaLTC1,Gt.ltc_2.value=et.state.rectAreaLTC2,Gt.pointLights.value=et.state.point,Gt.pointLightShadows.value=et.state.pointShadow,Gt.hemisphereLights.value=et.state.hemi,Gt.sunShadowMatrix.value=et.state.sunShadowMatrix,Gt.sunShadowCascade.value=et.state.sunShadowCascade,Gt.directionalShadowMatrix.value=et.state.directionalShadowMatrix,Gt.spotLightMatrix.value=et.state.spotLightMatrix,Gt.spotLightMap.value=et.state.spotLightMap,Gt.pointShadowMatrix.value=et.state.pointShadowMatrix),j.numLightProbeGrids=Ph(b.state.lightProbeGridArray),j.currentProgram=he,j.uniformsList=null,he}function np(D,Z,st,j,et){let Pt=Bt.get(D),Vt=Pt.currentProgram.id+","+j+","+et,Rt=Pt.programVariants.get(Vt);return Rt===void 0?(Rt=Zs(D,Z,st),Pt.programVariants.set(Vt,Rt)):(Pt.currentProgram=Rt,Pt.uniformsList=null,Pt.outputColorSpace=j,Pt.toneMapping=et),Rt}function Lh(D){if(D.uniformsList===null){let Z=D.currentProgram.getUniforms();D.uniformsList=Os.seqWithValue(Z.seq,D.uniforms)}return D.uniformsList}function Dh(D,Z){let st=Bt.get(D);st.outputColorSpace=Z.outputColorSpace,st.batching=Z.batching,st.batchingColor=Z.batchingColor,st.instancing=Z.instancing,st.instancingColor=Z.instancingColor,st.instancingMorph=Z.instancingMorph,st.skinning=Z.skinning,st.morphTargets=Z.morphTargets,st.morphNormals=Z.morphNormals,st.morphColors=Z.morphColors,st.morphTargetsCount=Z.morphTargetsCount,st.numClippingPlanes=Z.numClippingPlanes,st.numIntersection=Z.numClipIntersection,st.vertexAlphas=Z.vertexAlphas,st.vertexTangents=Z.vertexTangents,st.toneMapping=Z.toneMapping}function ip(D,Z,st,j,et){Z.isScene!==!0&&(Z=mt),Zt.resetTextureUnits();let Pt=Z.fog,Vt=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?Z.environment:null,Rt=W===null?I.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:de.workingColorSpace,Ft=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,qt=F.get(j.envMap||Vt,Ft),se=j.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,he=!!st.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Gt=!!st.morphAttributes.position,ue=!!st.morphAttributes.normal,De=!!st.morphAttributes.color,be=qn;j.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(be=I.toneMapping);let Se=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Ze=Se!==void 0?Se.length:0,Ht=Bt.get(j),tn=b.state.lights;if(_t===!0&&(Dt===!0||D!==B)){let Re=D===B&&j.id===P;rt.setState(j,D,Re)}let xe=!1,Di=!1;j.version===Ht.__version?Ht.needsLights&&Ht.lightsStateVersion!==tn.state.version||et.isBatchedMesh&&Ht.batching===!1||!et.isBatchedMesh&&Ht.batching===!0||et.isBatchedMesh&&Ht.batchingColor===!0&&et._colorsTexture===null||et.isBatchedMesh&&Ht.batchingColor===!1&&et._colorsTexture!==null||et.isInstancedMesh&&Ht.instancing===!1||!et.isInstancedMesh&&Ht.instancing===!0||et.isSkinnedMesh&&Ht.skinning===!1||!et.isSkinnedMesh&&Ht.skinning===!0||et.isInstancedMesh&&Ht.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&Ht.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&Ht.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&Ht.instancingMorph===!1&&et.morphTexture!==null||Ht.envMap!==qt||j.fog===!0&&Ht.fog!==Pt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==rt.numPlanes||Ht.numIntersection!==rt.numIntersection)||Ht.vertexAlphas!==se||Ht.vertexTangents!==he||Ht.morphTargets!==Gt||Ht.morphNormals!==ue||Ht.morphColors!==De||Ht.morphTargetsCount!==Ze||Ht.numLightProbeGrids!==Ph(b.state.lightProbeGridArray)?xe=!0:(Ht.outputColorSpace!==Rt||Ht.toneMapping!==be)&&(Di=!0):(xe=!0,Ht.__version=j.version);let $e=Ht.currentProgram;(xe===!0||Di===!0)&&($e=Di===!0?np(j,Z,et,Rt,be):Zs(j,Z,et),E&&j.isNodeMaterial&&E.onUpdateProgram(j,$e,Ht));let ho=!1,mi=!1,Ni=!1,me=$e.getUniforms(),Xe=Ht.uniforms;if(ft.useProgram($e.program)&&(ho=!0,mi=!0,Ni=!0),j.id!==P&&(P=j.id,mi=!0),ho||B!==D){ft.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),me.setValue(G,"projectionMatrix",D.projectionMatrix),me.setValue(G,"viewMatrix",D.matrixWorldInverse);let Ge=me.map.cameraPosition;Ge!==void 0&&Ge.setValue(G,z.setFromMatrixPosition(D.matrixWorld)),Xt.logarithmicDepthBuffer&&me.setValue(G,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&me.setValue(G,"isOrthographic",D.isOrthographicCamera===!0),B!==D&&(B=D,mi=!0,Ni=!0)}if(Ht.needsLights&&(tn.state.sunShadowMap.length>0&&me.setValue(G,"sunShadowMap",tn.state.sunShadowMap,Zt),tn.state.directionalShadowMap.length>0&&me.setValue(G,"directionalShadowMap",tn.state.directionalShadowMap,Zt),tn.state.spotShadowMap.length>0&&me.setValue(G,"spotShadowMap",tn.state.spotShadowMap,Zt),tn.state.pointShadowMap.length>0&&me.setValue(G,"pointShadowMap",tn.state.pointShadowMap,Zt)),et.isSkinnedMesh){me.setOptional(G,et,"bindMatrix"),me.setOptional(G,et,"bindMatrixInverse");let Re=et.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),me.setValue(G,"boneTexture",Re.boneTexture,Zt))}et.isBatchedMesh&&(me.setOptional(G,et,"batchingTexture"),me.setValue(G,"batchingTexture",et._matricesTexture,Zt),me.setOptional(G,et,"batchingIdTexture"),me.setValue(G,"batchingIdTexture",et._indirectTexture,Zt),me.setOptional(G,et,"batchingColorTexture"),et._colorsTexture!==null&&me.setValue(G,"batchingColorTexture",et._colorsTexture,Zt));let Rn=st.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&ht.update(et,st,$e),(mi||Ht.receiveShadow!==et.receiveShadow)&&(Ht.receiveShadow=et.receiveShadow,me.setValue(G,"receiveShadow",et.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&Z.environment!==null&&(Xe.envMapIntensity.value=Z.environmentIntensity),Xe.dfgLUT!==void 0&&(Xe.dfgLUT.value=y_()),mi){if(me.setValue(G,"toneMappingExposure",I.toneMappingExposure),Ht.needsLights&&sp(Xe,Ni),Pt&&j.fog===!0&&lt.refreshFogUniforms(Xe,Pt),lt.refreshMaterialUniforms(Xe,j,ut,ct,b.state.transmissionRenderTarget[D.id]),Ht.needsLights&&Ht.numLightProbeGrids>0){let Re=v,Ge=0;for(let ei of b.state.lightProbeGridArray)ei.texture!==null&&(Re.textures[Ge]=ei.texture,Re.min[Ge]=ei.boundingBox.min,Re.max[Ge]=ei.boundingBox.max,Re.resolution[Ge]=ei.resolution,Ge++);for(let ei in Re)Re[ei].length=Ge;Xe.probesSH.value=Re.textures,Xe.probesMin.value=Re.min,Xe.probesMax.value=Re.max,Xe.probesResolution.value=Re.resolution}Os.upload(G,Lh(Ht),Xe,Zt)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Os.upload(G,Lh(Ht),Xe,Zt),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&me.setValue(G,"center",et.center),me.setValue(G,"modelViewMatrix",et.modelViewMatrix),me.setValue(G,"normalMatrix",et.normalMatrix),me.setValue(G,"modelMatrix",et.matrixWorld),j.uniformsGroups!==void 0){let Re=j.uniformsGroups;for(let Ge=0,ei=Re.length;Ge<ei;Ge++){let Uh=Re[Ge];Jt.update(Uh,$e),Jt.bind(Uh,$e)}}return $e}function sp(D,Z){D.ambientLightColor.needsUpdate=Z,D.lightProbe.needsUpdate=Z,D.sunLights.needsUpdate=Z,D.sunLightShadows.needsUpdate=Z,D.directionalLights.needsUpdate=Z,D.directionalLightShadows.needsUpdate=Z,D.pointLights.needsUpdate=Z,D.pointLightShadows.needsUpdate=Z,D.spotLights.needsUpdate=Z,D.spotLightShadows.needsUpdate=Z,D.rectAreaLights.needsUpdate=Z,D.hemisphereLights.needsUpdate=Z}function rp(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(D,Z,st){let j=Bt.get(D);j.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),Bt.get(D.texture).__webglTexture=Z,Bt.get(D.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:st,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,Z){let st=Bt.get(D);st.__webglFramebuffer=Z,st.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(D,Z=0,st=0){W=D,N=Z,V=st;let j=null,et=!1,Pt=!1;if(D){let Rt=Bt.get(D);if(Rt.__useDefaultFramebuffer!==void 0){ft.bindFramebuffer(G.FRAMEBUFFER,Rt.__webglFramebuffer),k.copy(D.viewport),X.copy(D.scissor),it=D.scissorTest,ft.viewport(k),ft.scissor(X),ft.setScissorTest(it),P=-1;return}else if(Rt.__webglFramebuffer===void 0)Zt.setupRenderTarget(D);else if(Rt.__hasExternalTextures)Zt.rebindTextures(D,Bt.get(D.texture).__webglTexture,Bt.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){let se=D.depthTexture;if(Rt.__boundDepthTexture!==se){if(se!==null&&Bt.has(se)&&(D.width!==se.image.width||D.height!==se.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Zt.setupDepthRenderbuffer(D)}}let Ft=D.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(Pt=!0);let qt=Bt.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(qt[Z])?j=qt[Z][st]:j=qt[Z],et=!0):D.samples>0&&Zt.useMultisampledRTT(D)===!1?j=Bt.get(D).__webglMultisampledFramebuffer:Array.isArray(qt)?j=qt[st]:j=qt,k.copy(D.viewport),X.copy(D.scissor),it=D.scissorTest}else k.copy(Ct).multiplyScalar(ut).floor(),X.copy(It).multiplyScalar(ut).floor(),it=kt;if(st!==0&&(j=C),ft.bindFramebuffer(G.FRAMEBUFFER,j)&&ft.drawBuffers(D,j),ft.viewport(k),ft.scissor(X),ft.setScissorTest(it),et){let Rt=Bt.get(D.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Rt.__webglTexture,st)}else if(Pt){let Rt=Z;for(let Ft=0;Ft<D.textures.length;Ft++){let qt=Bt.get(D.textures[Ft]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Ft,qt.__webglTexture,st,Rt)}}else if(D!==null&&st!==0){let Rt=Bt.get(D.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Rt.__webglTexture,st)}P=-1};function Nh(D){let Z=Bt.get(D);return(Z.__readFormat!==D.format||Z.__readType!==D.type)&&(Z.__readFormat=D.format,Z.__readType=D.type,Z.__formatReadable=Xt.textureFormatReadable(D.format),Z.__typeReadable=Xt.textureTypeReadable(D.type)),Z}this.readRenderTargetPixels=function(D,Z,st,j,et,Pt,Vt,Rt=0){if(!(D&&D.isWebGLRenderTarget)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=Bt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Vt!==void 0&&(Ft=Ft[Vt],Array.isArray(Ft)&&(Ft=Ft[0])),Ft){ft.bindFramebuffer(G.FRAMEBUFFER,Ft);try{let qt=D.textures[Rt],se=qt.format,he=qt.type;D.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Rt);let Gt=Nh(qt);if(Gt.__formatReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Gt.__typeReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=D.width-j&&st>=0&&st<=D.height-et&&G.readPixels(Z,st,j,et,bt.convert(se),bt.convert(he),Pt)}finally{let qt=W!==null?Bt.get(W).__webglFramebuffer:null;ft.bindFramebuffer(G.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(D,Z,st,j,et,Pt,Vt,Rt=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=Bt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Vt!==void 0&&(Ft=Ft[Vt],Array.isArray(Ft)&&(Ft=Ft[0])),Ft)if(Z>=0&&Z<=D.width-j&&st>=0&&st<=D.height-et){ft.bindFramebuffer(G.FRAMEBUFFER,Ft);let qt=D.textures[Rt],se=qt.format,he=qt.type;D.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Rt);let Gt=Nh(qt);if(Gt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Gt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ue=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,ue),G.bufferData(G.PIXEL_PACK_BUFFER,Pt.byteLength,G.STREAM_READ),G.readPixels(Z,st,j,et,bt.convert(se),bt.convert(he),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let De=W!==null?Bt.get(W).__webglFramebuffer:null;ft.bindFramebuffer(G.FRAMEBUFFER,De);let be=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Qu(G,be,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,ue),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Pt),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(ue),G.deleteSync(be),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,Z=null,st=0){let j=Math.pow(2,-st),et=Math.floor(D.image.width*j),Pt=Math.floor(D.image.height*j),Vt=Z!==null?Z.x:0,Rt=Z!==null?Z.y:0;Zt.setTexture2D(D,0),G.copyTexSubImage2D(G.TEXTURE_2D,st,0,0,Vt,Rt,et,Pt),ft.unbindTexture()},this.copyTextureToTexture=function(D,Z,st=null,j=null,et=0,Pt=0){let Vt,Rt,Ft,qt,se,he,Gt,ue,De,be=D.isCompressedTexture?D.mipmaps[Pt]:D.image;if(st!==null)Vt=st.max.x-st.min.x,Rt=st.max.y-st.min.y,Ft=st.isBox3?st.max.z-st.min.z:1,qt=st.min.x,se=st.min.y,he=st.isBox3?st.min.z:0;else{let me=Math.pow(2,-et);Vt=Math.floor(be.width*me),Rt=Math.floor(be.height*me),D.isDataArrayTexture?Ft=be.depth:D.isData3DTexture?Ft=Math.floor(be.depth*me):Ft=1,qt=0,se=0,he=0}j!==null?(Gt=j.x,ue=j.y,De=j.z):(Gt=0,ue=0,De=0);let Se=bt.convert(Z.format),Ze=bt.convert(Z.type),Ht;Z.isData3DTexture?(Zt.setTexture3D(Z,0),Ht=G.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(Zt.setTexture2DArray(Z,0),Ht=G.TEXTURE_2D_ARRAY):(Zt.setTexture2D(Z,0),Ht=G.TEXTURE_2D),ft.activeTexture(G.TEXTURE0),ft.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Z.flipY),ft.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),ft.pixelStorei(G.UNPACK_ALIGNMENT,Z.unpackAlignment);let tn=ft.getParameter(G.UNPACK_ROW_LENGTH),xe=ft.getParameter(G.UNPACK_IMAGE_HEIGHT),Di=ft.getParameter(G.UNPACK_SKIP_PIXELS),$e=ft.getParameter(G.UNPACK_SKIP_ROWS),ho=ft.getParameter(G.UNPACK_SKIP_IMAGES);ft.pixelStorei(G.UNPACK_ROW_LENGTH,be.width),ft.pixelStorei(G.UNPACK_IMAGE_HEIGHT,be.height),ft.pixelStorei(G.UNPACK_SKIP_PIXELS,qt),ft.pixelStorei(G.UNPACK_SKIP_ROWS,se),ft.pixelStorei(G.UNPACK_SKIP_IMAGES,he);let mi=D.isDataArrayTexture||D.isData3DTexture,Ni=Z.isDataArrayTexture||Z.isData3DTexture;if(D.isDepthTexture){let me=Bt.get(D),Xe=Bt.get(Z),Rn=Bt.get(me.__renderTarget),Re=Bt.get(Xe.__renderTarget);ft.bindFramebuffer(G.READ_FRAMEBUFFER,Rn.__webglFramebuffer),ft.bindFramebuffer(G.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ge=0;Ge<Ft;Ge++)mi&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Bt.get(D).__webglTexture,et,he+Ge),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Bt.get(Z).__webglTexture,Pt,De+Ge)),G.blitFramebuffer(qt,se,qt+Vt,se+Rt,Gt,ue,Gt+Vt,ue+Rt,G.DEPTH_BUFFER_BIT,G.NEAREST);ft.bindFramebuffer(G.READ_FRAMEBUFFER,null),ft.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(et!==0||D.isRenderTargetTexture||Bt.has(D)){let me=Bt.get(D),Xe=Bt.get(Z);ft.bindFramebuffer(G.READ_FRAMEBUFFER,A),ft.bindFramebuffer(G.DRAW_FRAMEBUFFER,U);for(let Rn=0;Rn<Ft;Rn++)mi?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,me.__webglTexture,et,he+Rn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,me.__webglTexture,et),Ni?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Xe.__webglTexture,Pt,De+Rn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Xe.__webglTexture,Pt),et!==0?G.blitFramebuffer(qt,se,qt+Vt,se+Rt,Gt,ue,Gt+Vt,ue+Rt,G.COLOR_BUFFER_BIT,G.NEAREST):Ni?G.copyTexSubImage3D(Ht,Pt,Gt,ue,De+Rn,qt,se,Vt,Rt):G.copyTexSubImage2D(Ht,Pt,Gt,ue,qt,se,Vt,Rt);ft.bindFramebuffer(G.READ_FRAMEBUFFER,null),ft.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Ni?D.isDataTexture||D.isData3DTexture?G.texSubImage3D(Ht,Pt,Gt,ue,De,Vt,Rt,Ft,Se,Ze,be.data):Z.isCompressedArrayTexture?G.compressedTexSubImage3D(Ht,Pt,Gt,ue,De,Vt,Rt,Ft,Se,be.data):G.texSubImage3D(Ht,Pt,Gt,ue,De,Vt,Rt,Ft,Se,Ze,be):D.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Pt,Gt,ue,Vt,Rt,Se,Ze,be.data):D.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Pt,Gt,ue,be.width,be.height,Se,be.data):G.texSubImage2D(G.TEXTURE_2D,Pt,Gt,ue,Vt,Rt,Se,Ze,be);ft.pixelStorei(G.UNPACK_ROW_LENGTH,tn),ft.pixelStorei(G.UNPACK_IMAGE_HEIGHT,xe),ft.pixelStorei(G.UNPACK_SKIP_PIXELS,Di),ft.pixelStorei(G.UNPACK_SKIP_ROWS,$e),ft.pixelStorei(G.UNPACK_SKIP_IMAGES,ho),Pt===0&&Z.generateMipmaps===!0&&Z.mipmapsAutoUpdate===!0&&G.generateMipmap(Ht),ft.unbindTexture()},this.initRenderTarget=function(D){Bt.get(D).__webglFramebuffer===void 0&&Zt.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?Zt.setTextureCube(D,0):D.isData3DTexture?Zt.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?Zt.setTexture2DArray(D,0):Zt.setTexture2D(D,0),ft.unbindTexture()},this.resetState=function(){N=0,V=0,W=null,ft.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=de._getDrawingBufferColorSpace(t),e.unpackColorSpace=de._getUnpackColorSpace()}};function hc(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new re;c.morphTargetsRelative=a;let l=0;for(let u=0;u<i.length;++u){let h=i[u],f=0,d=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in h.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(h.attributes[g]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in h.morphAttributes){if(!s.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(h.morphAttributes[g].length!==i[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;o[g]===void 0&&(o[g]=[]),o[g].push(h.morphAttributes[g]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(t){let g;if(e)g=h.index.count;else if(h.attributes.position!==void 0)g=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,g,u),l+=g}}if(e){let u=0,h=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=i[f].attributes.position.count}c.setIndex(h)}for(let u in r){let h=Gd(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let M=0;M<o[u].length;++M)d.push(o[u][M][f]);let g=Gd(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}}return c}function Gd(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let u=i[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new Me(o,e,n),c=0;for(let l=0;l<i.length;++l){let u=i[l];if(u.isInterleavedBufferAttribute){let h=c/e;for(let f=0,d=u.count;f<d;f++)for(let g=0;g<e;g++){let M=u.getComponent(f,g);a.setComponent(f+h,g,M)}}else o.set(u.array,c);c+=u.count*e}return s!==void 0&&(a.gpuType=s),a}var Kr=new O;function En(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Kr.copy(t),Kr[n]=0,Kr.normalize();let l=.5*o/(o+a),u=1-Kr.angleTo(i)/c;return Math.sign(Kr[e])===1?u*l:a/(o+a)+l+l*(1-u)}var uc=class i extends Tn{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new O,l=new O,u=new O(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,g=h.length/6,M=new O,p=.5/o;for(let m=0,x=0;m<h.length;m+=3,x+=2)switch(c.fromArray(h,m),l.copy(c),l.x-=Math.sign(l.x)*p,l.y-=Math.sign(l.y)*p,l.z-=Math.sign(l.z)*p,l.normalize(),h[m+0]=u.x*Math.sign(c.x)+l.x*r,h[m+1]=u.y*Math.sign(c.y)+l.y*r,h[m+2]=u.z*Math.sign(c.z)+l.z*r,f[m+0]=l.x,f[m+1]=l.y,f[m+2]=l.z,Math.floor(m/g)){case 0:M.set(1,0,0),d[x+0]=En(M,l,"z","y",r,n),d[x+1]=1-En(M,l,"y","z",r,e);break;case 1:M.set(-1,0,0),d[x+0]=1-En(M,l,"z","y",r,n),d[x+1]=1-En(M,l,"y","z",r,e);break;case 2:M.set(0,1,0),d[x+0]=1-En(M,l,"x","z",r,t),d[x+1]=En(M,l,"z","x",r,n);break;case 3:M.set(0,-1,0),d[x+0]=1-En(M,l,"x","z",r,t),d[x+1]=1-En(M,l,"z","x",r,n);break;case 4:M.set(0,0,1),d[x+0]=1-En(M,l,"x","y",r,t),d[x+1]=1-En(M,l,"y","x",r,e);break;case 5:M.set(0,0,-1),d[x+0]=En(M,l,"x","y",r,t),d[x+1]=1-En(M,l,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var{clamp:v_,smoothstep:rh}=Tt,M_=[[1,-.21],[.71,.61],[.18,.88],[-.62,.7],[-.99,.16],[-.72,-.64],[-.17,-.86],[.62,-.69]],S_=[[1,-.36],[.78,.53],[.16,.82],[-.61,.67],[-1,.19],[-.78,-.66],[.12,-.83]],Hd=[[.91,-.3],[.78,.55],[.15,.88],[-.59,.72],[-.93,.14],[-.69,-.63],[.09,-.88]],b_=[[.93,-.14],[.61,.66],[-.1,.83],[-.75,.47],[-.83,-.29],[-.31,-.78],[.46,-.73]];function Qr(i,t,e,n,s=3){let r=[],o=(g,M,p)=>g.map((m,x)=>Tt.lerp(m,M[x],p));for(let g=0;g<i.length;g++){let M=i[g],p=o(M,i[(g+i.length-1)%i.length],e),m=o(M,i[(g+1)%i.length],e);for(let x=0;x<=s;x++){let y=x/s;r.push(o(o(p,M,y),o(M,m,y),y))}}let a=[],c=[],l=r.length;for(let[g,M,p]of t)for(let[m,x]of r)a.push(m*M+p,g+(m*.74-x*.38)*n,x*M);for(let g=0;g<t.length-1;g++)for(let M=0;M<l;M++){let p=g*l+M,m=g*l+(M+1)%l;c.push(p,p+l,m,m,p+l,m+l)}let u=(t.length-1)*l,h=a.length/3,f=t.at(-1);a.push(t[0][2],t[0][0],0,f[2],f[0]+.018,0);for(let g=0;g<l;g++){let M=(g+1)%l;c.push(h,g,M,h+1,u+M,u+g)}let d=new re;return d.setAttribute("position",new zt(a,3)),d.setIndex(c),d.computeVertexNormals(),d}function jr(i,t){let e=i.toNonIndexed(),{position:n,normal:s}=e.attributes,r=new O,o=new O,a=new O,c=new O,l=new O;for(let u=0;u<n.count;u+=3){r.fromBufferAttribute(n,u),o.fromBufferAttribute(n,u+1).sub(r),a.fromBufferAttribute(n,u+2).sub(r),c.crossVectors(o,a).normalize();for(let h=u;h<u+3;h++)l.fromBufferAttribute(s,h).lerp(c,t).normalize(),s.setXYZ(h,l.x,l.y,l.z)}return i.dispose(),e}var Wd=jr(Qr(M_,[[-.93,.63,.04],[-.49,.98,0],[.05,1,-.015],[.47,.79,-.12],[.66,.55,-.23]],.09,.24,2),.72),Xd=jr(Qr(S_,[[-1.7,.81,.07],[-.71,1,.03],[.3,.99,-.02],[.37,.98,-.035],[.58,.78,-.14],[.66,.64,-.16]],.08,.19,2),.66),qd=jr(Qr(Hd,[[-.49,.66,.02],[-.35,.98,0],[-.08,1.02,.04],[.29,.82,-.02],[.48,.42,-.11]],.14,.11,2),.63),Yd=jr(Qr(b_,[[-.72,.48,0],[-.41,.92,0],[.05,1,.05],[.5,.76,.01],[.74,.36,-.13]],.13,.13,2),.59),Zd=jr(Qr(Hd,[[-.56,.62,0],[-.28,.97,0],[.16,1,.04],[.52,.56,-.09]],.13,.11,1),.56),T_=new we({vertexColors:!0}),$d=new we({vertexColors:!0}),Jd={value:0};$d.onBeforeCompile=i=>{i.uniforms.canopyTime=Jd,i.vertexShader=`uniform float canopyTime;
 attribute vec3 leafSway;
`+i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      float breezePhase = canopyTime * 1.02 - dot(leafSway.xy, vec2(.63, .44));
      float lean = .029 * sin(breezePhase) + .008 * sin(breezePhase * 1.84 + leafSway.x * .12);
      transformed.xz += leafSway.z * vec2(lean, lean * .48 + .009 * cos(breezePhase * .86));
    `),i.fragmentShader=i.fragmentShader.replace("#include <opaque_fragment>",`outgoingLight = mix(outgoingLight, diffuseColor.rgb, .32);
#include <opaque_fragment>`)};function Kd(i){Jd.value=i}function Qd(i,[t,e,n,s]){let r=[],o=i.attributes.position;for(let a=0;a<o.count;a++){let c=(o.getY(a)-e)/s;r.push(t,n,s*rh(c,.6,1.69))}i.setAttribute("leafSway",new zt(r,3))}function Ri(i,t,e,n=!1){return{colors:[new yt(i),new yt(t),new yt(e)],material:n?$d:T_}}function to(i,t,e,n,s,r,o,a,c){let l=new ne(t,e.material);return l.position.set(n,s,r),l.scale.set(o,a,c),l.castShadow=!0,l.userData.tint=e.colors,i.add(l),l}function jd(i,t){if(!t)return;let e=i.attributes.position,[n,s,r]=t,o=[],a=new yt;for(let c=0;c<e.count;c++){let l=v_((e.getY(c)+.76)/1.52,0,1),u=rh(l,.49,.97);a.copy(n).lerp(s,rh(l,.06,.51)).lerp(r,u),o.push(a.r,a.g,a.b)}i.setAttribute("color",new zt(o,3))}function tf(i,t,e){let n=document.createElement("canvas");n.width=n.height=64;let s=n.getContext("2d"),r=s.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,"#fff"),r.addColorStop(.33,"#c4c4c4"),r.addColorStop(.71,"#494949"),r.addColorStop(1,"#000"),s.fillStyle=r,s.fillRect(0,0,64,64);let o=[],a=[],c=[],l=8;for(let[f,d,g,M]of t){let p=o.length/3;for(let m=0;m<=l;m++)for(let x=0;x<=l;x++){let y=x/l,v=m/l,S=f+(2*y-1)*g,b=d+(2*v-1)*M;if(o.push(S,e(S,b)+.019,b),a.push(y,v),m===l||x===l)continue;let _=p+m*(l+1)+x,T=_+1,L=_+l+1,I=L+1;c.push(_,L,T,T,L,I)}}let u=new re;u.setAttribute("position",new zt(o,3)),u.setAttribute("uv",new zt(a,2)),u.setIndex(c);let h=new sn({color:"#556b44",alphaMap:new Vi(n),transparent:!0,opacity:.35,depthWrite:!1});i.add(new ne(u,h))}var oh=[new we({color:"#806548"}),new we({color:"#8a6e4e"}),new we({color:"#795d42"})],ef=[Ri("#546f3e","#819d50","#b0c576",!0),Ri("#50704a","#789650","#a5be73",!0),Ri("#647a42","#8da753","#bac877",!0)],w_=Ri("#8a7837","#c1a54f","#e6ce78",!0),A_=[qd,Yd],nf=[{trunk:[[0,-.075,0,.106],[-.09,.26,.01,.083],[-.16,.51,0,.061],[-.3,.81,-.07,.047],[-.43,1.09,-.1,.027],[-.44,1.34,-.09,.013]],limbs:[[[-.18,.54,-.02,.057],[.08,.69,.025,.039],[.42,.73,.09,.023],[.65,.91,.16,.012]],[[-.31,.82,-.06,.042],[-.07,.96,-.19,.027],[.24,1.15,-.25,.012]],[[-.41,1.02,-.09,.028],[-.58,1.1,.1,.012]]],crowns:[[-.45,1.39,-.13,.4,.44,.38,1],[.65,1.03,.16,.38,.4,.34,1],[.22,1.25,-.25,.38,.37,.37,0],[-.62,1.19,.12,.25,.29,.23,1],[.47,1.21,.1,.23,.26,.25,1]]},{trunk:[[0,-.075,0,.089],[-.04,.32,.01,.068],[-.095,.59,-.03,.049],[-.055,.89,-.05,.036],[-.06,1.2,-.045,.021],[-.1,1.49,-.055,.012]],limbs:[[[-.07,.49,-.02,.048],[.13,.73,.028,.03],[.38,.94,.09,.014]],[[-.09,.7,-.03,.036],[-.3,.85,.08,.023],[-.52,.96,.16,.011]],[[-.06,1.06,-.043,.022],[-.32,1.13,-.21,.011]]],crowns:[[-.1,1.54,-.055,.67,.55,.49,0],[.38,1.1,.09,.43,.43,.37,0],[-.51,1.05,.16,.21,.23,.2,0],[-.32,1.24,-.21,.27,.28,.23,1]]},{trunk:[[0,-.095,0,.159],[.018,.18,-.01,.122],[-.022,.44,0,.098],[.04,.75,-.02,.072],[.09,1.02,-.05,.046],[.07,1.38,-.09,.017]],limbs:[[[.01,.55,0,.078],[-.24,.75,.08,.053],[-.52,.95,.12,.022]],[[.04,.73,-.02,.072],[.3,.97,-.02,.043],[.54,1.16,.015,.018]],[[-.01,.51,.055,.047],[.24,.69,.27,.016]]],crowns:[[.01,1.48,-.11,.58,.53,.51,1],[-.51,1.13,.14,.43,.4,.36,0],[.52,1.29,.015,.43,.46,.37,0],[.22,.82,.29,.25,.27,.24,1],[.27,1.54,-.16,.39,.35,.4,1]]}];function ah(i,t,e){let n=i.map(([h,f,d])=>new O(h,f,d)),s=[],r=[],o=new O,a=new O(1,0,0),c=new O;for(let h=0;h<n.length;h++){o.subVectors(n[Math.min(h+1,n.length-1)],n[Math.max(0,h-1)]).normalize(),a.addScaledVector(o,-a.dot(o)),a.lengthSq()<.001&&a.set(0,0,1).addScaledVector(o,-o.z),a.normalize(),c.crossVectors(o,a).normalize();for(let f=0;f<e;f++){let d=(f+.23)*Math.PI*2/e,g=i[h][3]*(1+.095*Math.sin(f*1.98)),M=n[h].clone().addScaledVector(a,g*Math.cos(d)).addScaledVector(c,g*Math.sin(d));if(s.push(M.x,M.y,M.z),h===n.length-1)continue;let p=h*e+f,m=h*e+(f+1)%e;r.push(p,m,p+e,m,m+e,p+e)}}let l=new re;l.setAttribute("position",new zt(s,3)),l.setIndex(r),l.computeVertexNormals();let u=new ne(l,t);return u.castShadow=!0,u}var E_=i=>i-Math.floor(i);function sf(i,t,[e,n,s,r],o=!1){let a=E_(Math.sin(e*31.12+n*71.76)*8123.93),c=Math.floor(a*nf.length),l=nf[c],u=t(e,n),h=a*Math.PI*2,f=new Kt;f.position.set(e,u,n),f.rotation.y=h,f.scale.setScalar(s),i.add(f);let d=o?5:7;f.add(ah(l.trunk,oh[c],d));for(let g of l.limbs.slice(0,o?2:l.limbs.length))f.add(ah(g,oh[c],d));for(let[g,[M,p,m,x,y,v,S]]of l.crowns.entries()){if(o&&g>2)break;let b=r&&g%4!==3?w_:ef[(c+ +(g%3===1))%ef.length],_=to(f,o?Zd:A_[S],b,M,p,m,x,y,v);_.userData.canopyRoot=[e,u,n,s],_.rotation.set(.13*Math.sin(g+a),g*1.81,.13*Math.cos(g*2+a))}if(!o&&c!==1){let g=c===2?4:3;for(let M=0;M<g;M++){let p=M*Math.PI*2/g+a,m=(c===2?.39:.25)*(.8+.32*Math.sin(M*2.31+a)),x=Math.cos(p)*m,y=Math.sin(p)*m,v=S=>{let b=x*s*S,_=y*s*S;return(t(e+b*Math.cos(h)+_*Math.sin(h),n-b*Math.sin(h)+_*Math.cos(h))-u)/s};f.add(ah([[0,.105,0,.078],[x*.47,v(.47)+.037,y*.47,.052],[x,v(1)-.013,y,.008]],oh[c],5))}}return f}var C_=new yt("#637a43"),R_=new yt("#829a51"),I_=new yt("#b1bf72"),P_=new yt("#e6e7c9"),L_=new yt("#fffdee"),D_=new yt("#dbb95b"),N_=new yt("#d6a435"),U_=new yt("#f6d962"),F_=new yt("#ad771e"),rf=[[0,.22,0],[.3,.72,.09],[.61,1,.32],[.9,.73,.66],[1,.09,1]];function of(i,{grass:t,tussocks:e,yellow:n},s){let r=[],o=[],a=[],c=[],l=new yt,u=43278,h=()=>(u=Math.imul(u,1664525)+1013904223>>>0,u/4294967296);function f(S,b,_,T,L,I,w){r.push(S,b,_),o.push(T.r,T.g,T.b),a.push(L,I,w)}function d(S,b,_,T,L,I,w,E=!1){let C=Math.cos(T),A=Math.sin(T),U=r.length/3,N=Math.min(1.22,L/.205);for(let[V,W,P]of rf){let B=S+C*w*P,k=_+A*w*P,X=b+L*(E?V:V-.1*V**5),it=N*V**2;l.copy(C_).lerp(R_,V).lerp(I_,V*(E?.28:.57)),f(B-A*I*W,X,k+C*I*W,l,S,_,it),f(B+A*I*W,X,k-C*I*W,l,S,_,it)}for(let V=0;V<rf.length-1;V++){let W=U+V*2;c.push(W,W+1,W+2,W+1,W+3,W+2)}}function g(S,b,_,T,L,I,w=!1){let E=w?.008+h()*.013:.025+h()*.028;d(S,b,_,T,L,.009,E,!0),d(S,b,_,T+Math.PI,L*.57,w?.019:.022,.062);let C=S+Math.cos(T)*E,A=b+L,U=_+Math.sin(T)*E,N=Math.min(1.22,L/.205),V=[[.16,-.18,0],[.49,-.37,.035],[.91,-.24,.14],[1,0,.19],[.88,.24,.12],[.48,.37,.035],[.16,.18,0]];for(let B=0;B<5;B++){let k=T+B*Math.PI*2/5,X=Math.cos(k),it=Math.sin(k),q=r.length/3,$=I*(.9+h()*.17);for(let[ot,ct,ut]of V)l.copy(w?N_:P_).lerp(w?U_:L_,Math.min(1,ot*1.4)),f(C+(X*ot-it*ct)*$,A+ut*$,U+(it*ot+X*ct)*$,l,S,_,N);for(let ot=1;ot<V.length-1;ot++)c.push(q,q+ot,q+ot+1)}let W=r.length/3,P=w?F_:D_;f(C,A+.007,U,P,S,_,N);for(let B=0;B<6;B++){let k=B*Math.PI/3;f(C+Math.cos(k)*I*.24,A+.003,U+Math.sin(k)*I*.24,P,S,_,N),c.push(W,W+1+(B+1)%6,W+1+B)}}function M(S,b,_,T,L){for(let I=0;I<T;I++){let w=h()*Math.PI*2,E=Math.sqrt(h()),C=_*E,A=S+Math.cos(w)*C,U=b+Math.sin(w)*C*.76,N=s(A,U);N!==null&&L(A,N,U,w,(.75+h()*.39)*(1-.27*E),I)}}function p(S,b,_,T,L,I=!1){let w=(I?10:5)+Math.floor(h()*4),E=I?.057:.028;for(let C=0;C<w;C++){let A=T+(C+h()*.58)*Math.PI*2/w,U=I?.135+h()*.17:.055+h()*.1,N=(I?.25+h()*.29:.116+h()*.139)*L,V=(I?.032+h()*.026:.02+h()*.018)*L;d(S+Math.cos(A)*E,b-.014,_+Math.sin(A)*E,A,N,V,U*L)}}for(let[S,b,_,T]of t)M(S,b,_,11,(L,I,w,E,C,A)=>{if(p(L,I,w,E,C),A<T){let U=s(L+.082,w-.055);if(U!==null&&g(L+.082,U,w-.055,E,(.175+h()*.08)*C,(.048+h()*.024)*C),A%2===0){let N=s(L-.095,w+.064);N!==null&&g(L-.095,N,w+.064,E+2,(.143+h()*.072)*C,.057*C)}}});for(let[S,b,_]of e){let T=s(S,b);T!==null&&p(S,T,b,h()*Math.PI*2,1.08+h()*.23,!0),M(S,b,_,6,(L,I,w,E,C,A)=>{p(L,I,w,E,C,A<3)})}for(let[S,b,_,T]of n)M(S,b,_,T,(L,I,w,E,C)=>{g(L,I-.008,w,E,(.035+h()*.05)*C,(.052+h()*.032)*C,!0)});let m=new re;m.setAttribute("position",new zt(r,3)),m.setAttribute("color",new zt(o,3)),m.setAttribute("breeze",new zt(a,3)),m.setIndex(c),m.computeVertexNormals(),m.computeBoundingSphere(),m.boundingSphere.radius+=.14;let x={value:0},y=new we({vertexColors:!0,side:an});y.onBeforeCompile=S=>{S.uniforms.meadowTime=x,S.vertexShader=`uniform float meadowTime;
 attribute vec3 breeze;
`+S.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        float phase = meadowTime * 2.45 - dot(breeze.xy, vec2(.91, .64));
        float ripple = sin(phase) * .084 + sin(phase * 1.82 + breeze.x) * .019;
        transformed.xz += vec2(.85, .53) * breeze.z * ripple;
        transformed.y -= breeze.z * (ripple * ripple * 2.65);
      `)};let v=new ne(m,y);return v.receiveShadow=!0,i.add(v),S=>{x.value=S}}function af(i,t,e,n,s){function r(M,p,m){let x=0;for(let y=.08;y<=2.36;y+=.08){if(t(M,p+m*y)<n){x=y;continue}for(let v=0;v<7;v++){let S=(x+y)*.5;t(M,p+m*S)<n?x=S:y=S}return(x+y)*.5}return x}let o=[],a=[],c=[],l=Math.ceil(2*s/.205),u=.16;for(let M of[-1,1]){let p=o.length/3;for(let m=0;m<=l;m++){let x=Tt.lerp(-s,s,m/l),y=e(x),v=r(x,y,M);if(o.push(x,n,y+M*(v+u),x,n,y),a.push(-u,M,v,M),m===l)continue;let S=p+m*2,b=S+1,_=S+2,T=S+3;M<0?c.push(S,b,_,b,T,_):c.push(S,_,b,b,_,T)}}let h=new re;h.setAttribute("position",new zt(o,3)),h.setAttribute("shore",new zt(a,2)),h.setIndex(c),h.computeVertexNormals();let f={value:0},d=new we;d.onBeforeCompile=M=>{M.uniforms.flowTime=f,M.uniforms.deepWater={value:new yt("#6c9fa4")},M.uniforms.shallowWater={value:new yt("#99c3b8")},M.uniforms.whiteWater={value:new yt("#f7fcef")},M.vertexShader=`attribute vec2 shore;
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
      `)};let g=new ne(h,d);return g.receiveShadow=!0,i.add(g),M=>{f.value=M}}var O_=[[0,-1],[1,0],[0,1],[-1,0]],B_=new Tn,ch=new Map,cf=[Ri("#696d71","#929798","#c9c8b7"),Ri("#73706d","#9a9789","#cbc1a9")];function z_(i){return ch.has(i)||ch.set(i,new we({color:i})),ch.get(i)}function Fe(i,t,e,n,s,r,o=1,a=1,c=1,l=!0){let u=new ne(t,z_(e));return u.position.set(n,s,r),u.scale.set(o,a,c),u.castShadow=l,u.receiveShadow=!0,i.add(u),u}function ve(i,t,e,n,s,r,o,a,c=!0){return Fe(i,B_,t,e,n,s,r,o,a,c)}function Fn(i,t,e,n,s,r,o,a,c){return Fe(i,new uc(r,o,a,1,c),t,e,n,s)}function $n(i,t){let e=Math.sin(i*127.1+t*311.7)*43758.5453123;return e-Math.floor(e)}var Ue=(i,t)=>`${i},${t}`,Pe=1.25,Gs=i=>Math.round(i/Pe),On=Tt.smoothstep,so=Tt.lerp,fc=.115,Jn=3.65,Ii=6.35,Vs=1.56,pc=i=>5+.75*Math.sin(i*.28)+.24*Math.sin(i*.77)+.55*Math.sin(i*.096),mc=i=>.58+.17*(.5+.5*Math.sin(i*.49+1)),k_=[[-6.5,-4.9,5.2,4,3.45],[-9.1,-1.2,4.1,5,2.25],[4.6,-6.6,6.7,4.9,2.75],[8,-1.1,4.2,4.2,1.55],[-14,-13,9,6.5,6.2],[1,-17,12,7,5.4],[15,-10,9,6,6.9],[17,10,9,6,4.5],[-13,12.5,8,6,4.1],[2,19,12,6.5,4.3],[-24,-16,11,12,8.2],[22,-22,10,8,7.5],[-21,21,12,7,6.4],[29,12,11,9,7.8],[-33,-3,12,9,8.2],[0,-35,15,8,8.9]];function fh(i,t){let e=.49+.13*Math.sin(i*.34+t*.28)+.12*Math.cos(i*.57-t*.36);for(let[s,r,o,a,c]of k_){let l=((i-s)/o)**2+((t-r)/a)**2;e+=c*Math.exp(-l*1.5)}let n=Math.abs(t-pc(i));return so(-.2,e,On(n,mc(i)*.48,mc(i)+.63))}var df=[Jn,Ii].map(i=>({z:i,y:fh(0,i)}));function gc(i,t,e){let n=t-i.x,s=e-i.z,r=Math.cos(i.angle),o=Math.sin(i.angle),a=r*n-o*s,c=o*n+r*s;return Math.max(Math.abs(a)-i.w/2,Math.abs(c)-i.d/2)}function ks(i,t){let e=fh(i,t)+.031*Math.sin(i*1.45+t*.55)*Math.sin(t*1.33);for(let n of io){let s=1-On(gc(n,i,t),.56,1.27);e=so(e,n.floor,s)}for(let n of df){let s=(1-On(Math.abs(i),Vs/2+.1,Vs/2+.57))*(1-On(Math.abs(t-n.z),.23,.71));e=so(e,n.y,s)}return e}var _c=.375,ph=.72,ro=32,lf=_c*ro,eo=72,lh=new Map;function dh(i){let t=Math.abs(i);return Math.sign(i)*(Math.min(t,ro)*_c+Math.max(0,t-ro)*ph)}function hf(i){let t=Math.abs(i),e=t<=lf?t/_c:ro+(t-lf)/ph;return Math.floor(Math.sign(i)*e)}function dc(i,t){let e=Ue(i,t);if(!lh.has(e)){let n=o=>Math.abs(o)<=ro?_c:ph,s=dh(i)+($n(i,t+17)-.5)*n(i)*.44,r=dh(t)+($n(i-12,t)-.5)*n(t)*.44;lh.set(e,[s,ks(s,r),r])}return lh.get(e)}function ff(i,t){let e=dc(i,t),n=dc(i+1,t),s=dc(i+1,t+1),r=dc(i,t+1);return(i+t)%2===0?[[e,r,n],[n,r,s]]:[[e,r,s],[e,s,n]]}function Kn(i,t){let e=hf(i),n=hf(t);for(let s=-1;s<=1;s++)for(let r=-1;r<=1;r++)for(let[o,a,c]of ff(e+s,n+r)){let l=a[0]-o[0],u=a[2]-o[2],h=c[0]-o[0],f=c[2]-o[2],d=i-o[0],g=t-o[2],M=l*f-u*h,p=(d*f-g*h)/M,m=(l*g-u*d)/M;if(p>=-1e-7&&m>=-1e-7&&p+m<=1+1e-7)return o[1]+p*(a[1]-o[1])+m*(c[1]-o[1])}return ks(i,t)}function no(i){let t=(i-Jn)/(Ii-Jn);return so(pf,mf,t)+Math.sin(t*Math.PI)*.29}function pe(i,t){let e=Kn(i,t);return Math.abs(i)<=Vs/2&&t>=Jn&&t<=Ii?Math.max(e,no(t)):e}function V_(i){let t=new re;return t.setAttribute("position",new zt(i.flat(),3)),t.computeVertexNormals(),t}function zs(i,t,e,n,s){i.push(t,e,s,e,n,s)}function hh(i,t,e,n=!0){if(t.length)return Fe(i,V_(t),e,0,0,0,1,1,1,n)}var G_=[[1.1,[[-16.5,43],[-10.6,34],[-9.6,27],[-5.8,20],[-2,13],[-.65,9],[-.16,7.2],[0,6.52],[0,6.3],[0,3.68],[.07,3.44],[.65,2.8],[.33,1.15],[-.5,-.15],[-1.08,-1.7],[-1.17,-3.35],[-1.54,-5.6],[-3.35,-7.8],[-3.05,-13],[-3.8,-17],[-1.1,-23],[-1.9,-30],[-6.2,-37],[-6.8,-43]]],[.77,[[.25,1.14],[1.4,.79],[2.32,-.02],[3.04,-1.05],[3.94,-1.52]]],[.7,[[2.16,.13],[2.74,.78],[3.62,1],[4.2,.89]]],[.67,[[-.99,-1.52],[.3,-1.38],[1.06,-1.31]]],[.64,[[.04,.7],[-1.08,.95],[-2.15,1.05],[-2.72,.91]]],[.56,[[-1.03,-1.61],[-1.63,-1.53],[-2.65,-1.72]]],[.57,[[-1.27,-4.02],[.17,-4.27],[1.52,-3.93]]]],xc={x:48,z:86},mh=G_.map(([i,t],e)=>{let n=new Gi(t.map(([o,a])=>new O(o,0,a))),s=n.getLength(),r=Math.ceil(s*15);return Array.from({length:r+1},(o,a)=>{let c=a/r,l=n.getPointAt(c),u=n.getTangentAt(c),h=c*s,f=.57+.43*On(c,0,.05)*(1-On(c,.94,1)),d=e===0?Math.max(...df.map(p=>1-On(Math.abs(l.z-p.z),.22,.8))):0,g=i*.5*f*(1+d*.24),M=p=>g*(1+.094*Math.sin(h*1.47+e+p)+.024*Math.sin(h*3.1+p*2));return{x:l.x,z:l.z,dx:u.z,dz:-u.x,left:M(1),right:M(-1)}})}),gh=mh[0];function uf(i,t,e){return mh.some(n=>n.some(s=>{let r=i-s.x,o=t-s.z,a=(r*s.dx+o*s.dz>0?s.left:s.right)+e;return r*r+o*o<a*a}))}function H_(){let t=document.createElement("canvas");t.width=t.height=2048;let e=t.getContext("2d"),n=(a,c)=>[(a/xc.x+.5)*2048,(c/xc.z+.5)*2048];e.fillStyle="#ddd";for(let a of mh){let c=a.map(({x:h,z:f,dx:d,dz:g,left:M})=>n(h+d*M,f+g*M)),l=a.map(({x:h,z:f,dx:d,dz:g,right:M})=>n(h-d*M,f-g*M)),u=[...c,...l.reverse()];e.beginPath(),u.forEach(([h,f],d)=>d===0?e.moveTo(h,f):e.lineTo(h,f)),e.closePath(),e.fill()}let s=document.createElement("canvas");s.width=s.height=2048;let r=s.getContext("2d");r.fillStyle="#000",r.fillRect(0,0,2048,2048),r.filter="blur(1.65px)",r.drawImage(t,0,0);let o=new Vi(s);return o.anisotropy=4,o}function W_(i){let t=new we({vertexColors:!0,map:H_()});t.onBeforeCompile=h=>{h.uniforms.trackColor={value:new yt("#cbb686")},h.fragmentShader=`uniform vec3 trackColor;
`+h.fragmentShader.replace(`#include <map_fragment>
	#include <color_fragment>`,`#include <color_fragment>
 diffuseColor.rgb = mix(diffuseColor.rgb, trackColor, texture2D(map, vMapUv).r);`)};let e=new yt("#a8bf7c"),n=new yt("#7f9e6c"),s=new yt("#b9b3a2"),r=new yt("#c9bf96"),o=new yt("#a9bdb3"),a=new WeakMap;function c(h){if(a.has(h))return a.get(h);let[f,d,g]=h,M=.23,p=new O(ks(f-M,g)-ks(f+M,g),2*M,ks(f,g-M)-ks(f,g+M)).normalize(),m=.42+.27*Math.sin(f*.33+g*.22)+.09*Math.cos(g*.62-f*.27),x=e.clone().lerp(n,m).lerp(s,On(1-p.y,.12,.34)*On(d,1.2,2.9)*.78).lerp(r,1-On(Math.abs(g-pc(f)),mc(f)*.87,mc(f)+.36)).lerp(o,On(Math.hypot(f,g),11,31)*.73),y={normal:p,color:x};return a.set(h,y),y}let l=[],u=16;for(let h=-eo;h<eo;h+=u)for(let f=-eo;f<eo;f+=u){let d=[],g=[],M=[],p=[];for(let y=0;y<u;y++)for(let v=0;v<u;v++)for(let S of ff(f+v,h+y))for(let b of S){let{normal:_,color:T}=c(b);d.push(...b),g.push(_.x,_.y,_.z),M.push(T.r,T.g,T.b),p.push(b[0]/xc.x+.5,.5-b[2]/xc.z)}let m=new re;m.setAttribute("position",new zt(d,3)),m.setAttribute("normal",new zt(g,3)),m.setAttribute("color",new zt(M,3)),m.setAttribute("uv",new zt(p,2)),m.computeBoundingBox();let x=new ne(m,t);x.receiveShadow=!0,i.add(x),l.push(x)}return l}function X_(i,t,e,n,s,r,o=!1){let a=e/2+.215,c=t/2+.205,l=16,u=12,h=x=>c*(.965+.035*x),f=(x,y,v)=>[x*h(y),n+s*(1-y)**1.64+.044*y**7+.116*Math.abs(x)**7*(.46+.54*y),v*y*a],d=([x,y,v])=>[x,y-.067,v],g=[];for(let x of[-1,1]){let y=o?4:1,v=l/y;for(let S=0;S<y;S++){let b=[],_=[];for(let I=0;I<=u;I++)for(let w=0;w<=v;w++){if(b.push(...f((S*v+w)*2/l-1,I/u,x)),I===u||w===v)continue;let E=I*(v+1)+w,C=E+1,A=E+v+1,U=A+1;x>0?_.push(E,A,C,C,A,U):_.push(E,C,A,C,U,A)}if(o){let I=b.length/3,w=_.slice(),E=new Map;for(let C=0;C<I;C++)b.push(b[C*3],b[C*3+1]-.067,b[C*3+2]);for(let C=0;C<w.length;C+=3){let A=w.slice(C,C+3);_.push(A[2]+I,A[1]+I,A[0]+I);for(let U=0;U<3;U++){let N=A[U],V=A[(U+1)%3],W=`${Math.min(N,V)},${Math.max(N,V)}`;E.has(W)?E.delete(W):E.set(W,[N,V])}}for(let[C,A]of E.values())_.push(A,C,C+I,A,C+I,A+I)}let T=new re;T.setAttribute("position",new zt(b,3)),T.setIndex(_),T.computeVertexNormals();let L=Fe(i,T,r,0,0,0);o&&(L.userData.breakStage=(x>0?[1,2,3,3]:[3,2,4,4])[S],L.userData.roofPanel={side:x,panel:S})}for(let S=0;S<l;S++){let b=f(S*2/l-1,1,x),_=f((S+1)*2/l-1,1,x);x>0?zs(g,_,b,d(b),d(_)):zs(g,b,_,d(_),d(b))}for(let S of[-1,1])for(let b=0;b<u;b++){let _=f(S,b/u,x),T=f(S,(b+1)/u,x);x===S?zs(g,_,T,d(T),d(_)):zs(g,T,_,d(_),d(T))}}o||hh(i,g,"#4d6265");let M=[];for(let x of[-1,1]){let y=x*t/2,v=S=>f(y/h(Math.abs(S)/a),Math.abs(S)/a,Math.sign(S))[1]-.035;for(let S=0;S<16;S++){let b=e*(S/16-.5),_=b+e/16,T=[y,n-.095,b],L=[y,n-.095,_],I=[y,v(_),_],w=[y,v(b),b];x>0?zs(M,T,w,I,L):zs(M,T,L,I,w)}if(o){let S=hh(i,M,"#f0e7d0");S.userData.breakStage=x<0?3:4,M=[]}}o||hh(i,M,"#f0e7d0");let p="#4c6064",m=Fn(i,p,0,n+s+.029,0,t+.42,.113,.115,.047);o&&(m.userData.breakStage=3);for(let x of[-1,1]){let y=Fn(i,p,x*(c-.019),n+s+.079,0,.225,.087,.11,.032);y.rotation.z=x*.24,o&&(y.userData.breakStage=3)}}var io=[{x:1.07,z:-2.35,w:2.52,d:1.47,h:.98,angle:-.11,hall:!0},{x:-2.79,z:-2.56,w:1.48,d:1.12,h:.78,angle:.18},{x:4.05,z:-2.42,w:1.68,d:1.12,h:.83,angle:-.24},{x:4.36,z:.18,w:1.4,d:.92,h:.67,angle:-.42},{x:1.54,z:-4.79,w:1.48,d:1.02,h:.72,angle:.04},{x:-2.89,z:.19,w:1.43,d:.93,h:.73,angle:.32}].map(i=>({...i,w:i.w*1.08,d:i.d*1.08,h:i.h*1.08,floor:fh(i.x,i.z)})),pf=Kn(0,Jn)+.014,mf=Kn(0,Ii)+.014;function q_(i,{x:t,z:e,w:n,d:s,h:r,hall:o,angle:a,floor:c}){let l=new Kt;l.position.set(t,c,e),l.rotation.y=a,i.add(l);let u=o?"#f7eedb":"#f0e7d0";Fn(l,"#ada58e",0,-.038,0,n+.12,.235,s+.13,.045);let h=new Kt;if(l.add(h),o){let v=function(b,_,T,L,I){ve(h,u,b,.073+.14,_,T,.28,L);let w=Fn(h,u,b,.073+.28+(r-.28)/2,_,T,r-.28,L,.022);w.userData.breakStage=I},y=(n-.62)/2;for(let b=0;b<3;b++)v((b-1)*n/3,-s/2+.15/2,n/3,.15,b===0?3:4);for(let b of[-1,1]){for(let _=0;_<3;_++)v(b*(n/2-.15/2),(_-1)*s/3,.15,s/3,b<0?[2,3,4][_]:[3,4,4][_]);v(b*(.31+y/2),s/2-.15/2,y,.15,b<0?2:3)}let S=ve(h,u,0,.081+.6+(r-.6)/2,s/2-.15/2,.63,r-.6,.15);S.userData.breakStage=3,ve(h,"#333c30",0,.13,0,n-.3,.035,s-.25,!1)}else Fn(h,u,0,r/2+.073,0,n,r,s,.052);if(o)for(let x of[-1,1]){let y=ve(l,"#a27c60",0,r+.037,x*s/2,n+.055,.1,.1),v=ve(l,"#a27c60",x*n/2,r+.037,0,.1,.1,s);y.userData.breakStage=x<0?4:3,v.userData.breakStage=x<0?3:4}else Fn(l,"#a27c60",0,r+.037,0,n+.055,.1,s+.045,.021);let f=new Kt;if(l.add(f),X_(f,n,s,r+.13,o?.6:.44,o?"#566c71":"#617578",o),o){let S=function(b,_){let T=Math.abs(_)/y,L=b/(v*(.965+.035*T));return r+.13+.6*(1-T)**1.64+.044*T**7+.116*Math.abs(L)**7*(.46+.54*T)-.12},x=new Kt;x.name="\u57FA\u5730\u6728\u5C4B\u67B6",l.add(x);let y=s/2+.215,v=n/2+.205;for(let b of[-n*.37,0,n*.37]){for(let T of[-1,1])for(let L=0;L<4;L++){let I=T*s*.48*L/4,w=T*s*.48*(L+1)/4,E=new O(b,S(b,I),I),C=new O(b,S(b,w),w),A=C.clone().sub(E),U=ve(x,"#76583e",b,(E.y+C.y)/2,(I+w)/2,.055,A.length(),.055);U.name="\u5C4B\u5185\u66F2\u7EBF\u693D\u6728",U.quaternion.setFromUnitVectors(new O(0,1,0),A.normalize()),U.userData.breakStage=b<0?3:4}let _=ve(x,"#76583e",b,r+.04,0,.065,.055,s*.95);_.userData.breakStage=b<0?3:4}for(let b of[-n*.44,n*.44])for(let _ of[-s*.4,s*.4]){let T=ve(x,"#76583e",b,r/2+.06,_,.075,r,.075);T.userData.breakStage=4}}let d=o?.6:.49,g=new Kt,M=[],p=o?.56:.32;g.position.set(-p/2,.081,s/2+.053),l.add(g);for(let x=0;x<5;x++)M.push(ve(g,x%2?"#835438":"#8f6141",(x+.5)*p/5,d/2,0,p/5-.006,d,.052));for(let x of[.12,d-.12])ve(g,"#66513b",p/2,x,.035,p,.035,.025);let m=ve(l,"#b4855b",0,.081+d,s/2+.053,o?.65:.4,.075,.11);o&&(m.userData.breakStage=3);for(let x of[-1,1]){let y=ve(l,"#725b47",x*n*.3,r*.57,s/2+.021,.19,.24,.045),v=ve(l,"#b19572",x*n*.3,r*.57,s/2+.048,.026,.21,.022);if(o){y.userData.breakStage=x<0?2:3,v.userData.breakStage=x<0?2:3;let S=ve(l,"#906246",x*n*.44,r*.51+.05,s/2+.106,.075,r,.075);S.userData.breakStage=4}}return Fn(l,"#c6bba3",0,.016,s/2+.15,o?.95:.54,.135,.36,.025),o&&Fn(l,"#c8bda4",0,-.007,s/2+.34,.9,.092,.23,.023),{group:l,walls:h,roof:f,door:g,planks:M,spec:{x:t,z:e,w:n,d:s,h:r,angle:a,floor:c}}}var gf=[[-4.15,-5.73,1.36,!0],[-5.88,-6.54,.74],[-4.81,-7.36,.68],[-8.77,-5.03,.8],[.29,-7,.97],[3.39,-4.72,.74],[5.62,-4.17,.68],[6.31,-1.79,.79],[6.93,.38,1.43],[8.3,1.67,.67],[5.98,2.43,.75],[-5.94,1.87,1.47],[-4.62,3.43,.69],[3.75,7.29,.89],[-3.92,6.67,1.24],[-8.13,-1.91,.79]],Y_=[[-4.82,2.95,.71,7],[-3.87,2.01,.53,3],[-4.38,.32,.58,0],[-2.61,3.59,.68,6],[-1.66,3.83,.48,4],[1.76,3.68,.49,5],[3.12,4.12,.5,2],[4.36,3.65,.66,6],[5.71,3.22,.76,3],[6.63,2.05,.6,0],[-4.78,-1.94,.75,2],[-3.72,-1.28,.48,4],[-2.94,-.65,.5,5],[1.38,-.56,.42,4],[2.21,-.22,.52,3],[5.53,-.11,.63,6],[5.27,-3.6,.68,0],[-5.05,-2.7,.54,3],[-6.37,-2.45,.8,0],[-3.42,6.63,.62,5],[-2.51,7.14,.61,5],[1.36,6.9,.56,4],[2.33,7.34,.64,7],[4.23,7.48,.68,2],[-5.13,7.87,.85,0],[6.91,5,.76,0],[-8.16,1.46,.95,1],[-7.31,.56,.78,0],[-5.84,-.56,.82,2],[-5.24,.81,.66,2],[-5.01,5.64,.73,0],[-3.02,5.81,.66,2],[2.87,6.53,.67,0],[4.38,5.96,.68,2],[6.44,4.31,.79,1],[7.31,2.96,.88,0],[8.22,2.49,.84,2],[8.77,-.27,.9,0],[4.39,-5.6,.79,0],[-4.36,-7.94,.78,1],[-2.55,8.76,.97,2],[3.31,8.63,.83,1],[-11.7,7.63,1.08,2],[-13.28,9.92,1.14,0],[-14.6,8.37,.88,0],[-15.12,1.55,.94,1],[-13.98,3.32,1.05,0],[-11.29,11.66,.97,3],[-5.87,13.53,1.1,0],[-4.2,15.1,.89,1],[7.65,11.78,1.14,2],[9.41,13.68,.92,0],[12.66,6.87,1.06,0],[14.33,7.91,.91,2],[15.71,5.31,.97,0],[13.92,2.31,1.04,1],[15.22,-1.46,1.08,0],[16.28,-4.17,.93,0],[13.92,-5.83,.98,2],[8.22,-11.71,.92,0],[5.76,-13.19,1.04,1],[-10.64,-10.83,.89,0],[-12.82,-8.77,1.08,2]],Z_=[[-6.71,-1.48,.75],[-5.46,-2.47,.66],[-7.76,-2.86,.62],[-6.77,2.55,.76],[-4.12,2.98,.57],[-3.86,5.98,.53],[-1.77,6.26,.48],[2.59,6.25,.48],[4.87,4.64,.61],[6.01,3.16,.66],[7.31,1.18,.8],[6.92,-1.94,.69],[4.92,-5.65,.8],[8.63,-3.4,.79],[-3.84,-8.36,.72],[4.56,8.57,.81],[-12.6,8.85,.78],[-14.75,2.56,.69],[-10.76,12.3,.73],[-5.18,14.62,.76],[8.42,12.61,.72],[13.51,7.15,.78],[15.36,3.61,.68],[15.81,-2.63,.74],[6.62,-12.48,.69],[-11.81,-9.59,.71]],$_=[[-5.26,2.18,.59,24],[-4.72,1.71,.39,11],[-3.16,.07,.56,21],[-2.87,-3.88,.59,18],[-2.26,3.48,.49,19],[-2.22,6.76,.69,25],[1.29,6.48,.47,19],[2.63,2.81,.6,22],[3.19,3.39,.37,10],[5.18,.95,.55,20],[6.66,2.47,.66,22],[7.93,-1.75,.58,16],[-7.08,1.23,.56,16]];function J_(i){let e=(Ii-Jn)/20,n=[-1,1].map(s=>s*(Vs/2-.06));for(let s=0;s<20;s++){let r=Jn+e*s,o=r+e,a=(r+o)/2,c=no(a),l=Math.atan2(no(r)-no(o),e);if(Fn(i,s%3?"#b79a73":"#c2a47e",0,c-.034,a,Vs,.068,e*1.015,.009).rotation.x=l,s%5===0||s===19)for(let u of n)Fn(i,"#907453",u,c+.108,a,.084,.3,.085,.019)}for(let s of n){let r=new Gi(Array.from({length:13},(o,a)=>{let c=so(Jn,Ii,a/12);return new O(s,no(c)+.239,c)}));Fe(i,new Pr(r,24,.029,8,!1),"#a1815d",0,0,0)}for(let[s,r,o]of[[Jn,pf,-1],[Ii,mf,1]])Fn(i,"#b8ae92",0,r-.063,s+.064*o,Vs+.11,.138,.258,.024)}function K_(i,t){let e=[];function n(o,a){let c=new nn().setFromObject(o,!0).expandByScalar(.035);if(e.some(l=>l.intersectsBox(c))){o.removeFromParent();return}e.push(c),t.push(a)}let s=[[-7.71,-3.76,1.32,1.17,.84,.25],[-5.42,-3.6,.94,1.35,.78,.07],[-6.56,-2.18,.82,.78,.49,-.31],[7.4,-2.91,.74,.76,.62,-.08],[8.23,-4.36,.94,1,.64,-.33]];for(let[o,[a,c,l,u,h,f]]of s.entries()){let d=Kn(a,c),g=to(i,Xd,cf[o%2],a,d+u*.18,c,l,u,h);g.rotation.y=f,n(g,[a,c+.16,l*1.17,h*1.35])}let r=[[-6.25,-4.14,.73],[-4.93,-2.82,.52],[-7.29,-2.6,.68],[-7.62,-1.44,.56],[6.24,-5.52,.72],[5.82,-4.64,.59],[7.87,3.01,.59],[-6.27,7.73,.64],[4.87,7.31,.46],[10.35,2.27,.61],[-10.27,.63,.64],[6.1,9.87,.67]];for(let[o,a,c]of r)for(let l=0;l<4;l++){let u=($n(l,o)-.5)*c*1.8,h=($n(l,a)-.5)*c*1.55,f=c*(.22+$n(l+6,o)*.43),d=to(i,Wd,cf[l%2],o+u,Kn(o+u,a+h)+f*.095,a+h,f,f*(.52+$n(l,a)*.37),f*.82);d.rotation.set(l*.14,l*1.42,-.2),n(d,[o+u,a+h+.04,f*1.18,f*.96])}return e}function uh(i,t){i.updateMatrixWorld(!0);let e=new Map;i.traverse(s=>{if(!s.isMesh)return;let r=`${s.material.id}-${s.castShadow}`;e.has(r)||e.set(r,{material:s.material,shadow:s.castShadow,parts:[]});let o=s.geometry.index?s.geometry.toNonIndexed():s.geometry.clone();o.deleteAttribute("uv"),jd(o,s.userData.tint),o.applyMatrix4(s.matrixWorld),s.userData.canopyRoot&&Qd(o,s.userData.canopyRoot),e.get(r).parts.push(o)});let n=[];for(let{material:s,shadow:r,parts:o}of e.values()){let a=new ne(hc(o),s);a.castShadow=r,a.receiveShadow=!0,t.add(a),n.push(a),o.forEach(c=>c.dispose())}return n}function Q_(i=gf){let t=new Map,e=.33*Pe,n=[[-1,1],[-3,3],[-4,4],[-4,4],[-4,4],[-4,4],[-4,4],[-3,4],[-2,2],[-1,1],[-2,2],[-1,1]];for(let r=-5;r<=6;r++){let o=r*Pe,[a,c]=n[r+5];for(let l=a;l<=c;l++){let u=l*Pe;if(!io.some(h=>gc(h,u,o)<.51)&&!i.some(([h,f])=>Math.hypot(u-h,o-f)<.6)){if(!(l===0&&o>=Jn&&o<=Ii)){let h=[[0,0],[-e,-e],[-e,e],[e,-e],[e,e]].map(([f,d])=>Kn(u+f,o+d));if(Math.min(...h)<=fc+.025||Math.max(...h)-Math.min(...h)>.59*Pe)continue}t.set(Ue(l,r),{x:u,z:o,column:l,row:r,neighbors:[]})}}}for(let r of t.values())r.neighbors=O_.map(([o,a])=>t.get(Ue(r.column+o,r.row+a))).filter(o=>o&&Math.abs(pe(r.x,r.z)-pe(o.x,o.z))<.65*Pe);let s=t.get(Ue(1,0))??t.get(Ue(0,0));if(s){let r=new Set([s]),o=[s];for(let a=0;a<o.length;a++)for(let c of o[a].neighbors)r.has(c)||(r.add(c),o.push(c));for(let[a,c]of t)r.has(c)||t.delete(a)}return t}function xf(i){let t=new Kt;i.add(t);let e=W_(t),n=af(t,Kn,pc,fc,dh(eo)-.16),s=[],r=new Kt,o=K_(r,s),a=new Kt,c;for(let y of io){let v=q_(a,y);y.hall&&(c=v)}let l=[...o,...a.children.map(y=>new nn().setFromObject(y,!0))],u=[];function h(y,v,S=!1){let[b,_,T]=v;if(S&&(uf(b,_,T*.39)||u.some(([E,C,A])=>Math.hypot(b-E,_-C)<(T+A)*.48)))return!1;let L=sf(y,Kn,v,S),I=new nn().setFromObject(L),w=l.filter(E=>E.intersectsBox(I));if(w.length){let E=new nn;if(L.children.some(C=>(E.setFromObject(C,!0),w.some(A=>A.intersectsBox(E)))))return L.removeFromParent(),!1}return u.push(v),s.push([b+.08*T,_,.79*T,.63*T]),!0}let f=gf.filter(y=>h(a,y));c.group.removeFromParent(),t.add(c.group);let d=uh(a,t);c.group.traverse(y=>{y.isMesh&&d.push(y)});let g=new Kt;J_(g);let M=uh(g,t),p=19;for(let[y,v,S,b]of[[-9.3,-5.9,2.9,22],[7.3,-7.4,3.7,26],[-11.5,3.8,3.4,20],[9.5,6.4,3,22],[-6.3,11,3.8,20],[3.1,12.4,3.1,17],[-15,-11.9,4.5,27],[-3.6,-15,4.2,20],[12.8,-12.4,4.5,24],[11.15,-.55,2.35,11],[-10.46,.61,1.88,8],[1.2,-10.8,2.45,8],[6.67,10.57,2.04,8],[-12.9,9.6,2.6,12],[-15.9,2.1,2.5,10],[-5.5,15,2,9],[8.9,12.8,2.4,10],[14.2,5.4,2.6,12],[16,-2.7,2.3,11],[6.8,-13.3,2.5,8],[-11.9,-10.1,2.4,7]])for(let _=0;_<b;_++){let T=y+($n(_,y)-.5)*2*S,L=v+($n(_,v)-.5)*1.5*S;if(Math.hypot(T,L)>p||Math.abs(T)<7&&L>-7.5&&L<8.5||Math.abs(L-pc(T))<1.25)continue;let I=.54+$n(T,L)**1.36*.83;h(r,[T,L,I,$n(L,T)<.06],!0)}uh(r,t),tf(t,s,Kn);let m=of(t,{grass:Y_,tussocks:Z_,yellow:$_},(y,v)=>{let S=Kn(y,v),b=o.some(_=>y>=_.min.x&&y<=_.max.x&&v>=_.min.z&&v<=_.max.z);return S>fc+.057&&!b&&!uf(y,v,.045)&&!io.some(_=>gc(_,y,v)<.39)?S:null}),x=(y,v)=>pe(y,v)>fc+.05&&!io.some(S=>gc(S,y,v)<.2)&&!f.some(([S,b,_])=>Math.hypot(y-S,v-b)<.19*_+.12)&&!o.some(S=>y>S.min.x-.12&&y<S.max.x+.12&&v>S.min.z-.12&&v<S.max.z+.12);return{terrain:e,blockers:d,deck:M,home:c,tiles:Q_(f),canServiceWalk:x,animateWater:n,animateMeadow:m,animateCanopy:Kd}}function _f(i){let t=new Map(Array.from(i.values(),c=>[c,new nt(c.x,c.z)])),e=c=>i.get(Ue(Gs(c.x),Gs(c.y))),n=(c,l)=>!!c&&c.neighbors.includes(l);function s(c,l,u,h){let f=(c.x+u)/Pe,d=(c.y+h)/Pe,g=(l.x+u)/Pe,M=(l.y+h)/Pe,p=Math.floor(f+.5),m=Math.floor(d+.5),x=Math.floor(g+.5),y=Math.floor(M+.5),v=g-f,S=M-d,b=Math.sign(v),_=Math.sign(S),T=i.get(Ue(p,m));if(!T)return!1;for(;p!==x||m!==y;){let L=p===x?1/0:(p+b*.5-f)/v,I=m===y?1/0:(m+_*.5-d)/S;if(Math.abs(L-I)<1e-9){let w=i.get(Ue(p+b,m)),E=i.get(Ue(p,m+_)),C=i.get(Ue(p+b,m+_));if(!n(T,w)||!n(T,E)||!n(w,C)||!n(E,C))return!1;p+=b,m+=_,T=C}else{L<I?p+=b:m+=_;let w=i.get(Ue(p,m));if(!n(T,w))return!1;T=w}}return!0}function r(c,l,u=0){if(!s(c,l,0,0))return!1;let h=l.x-c.x,f=l.y-c.y,d=Math.hypot(h,f);if(!u||d<1e-8)return!0;let g=f*u/d,M=-h*u/d;return s(c,l,g,M)&&s(c,l,-g,-M)}function o(c,l,u){let h=[];for(let f=0;f<l.length-1;f++){let d=l[f],g=l[f-1]??c,M=l[f+1],p=Math.min(.27*Pe,g.distanceTo(d)*.23,M.distanceTo(d)*.23),m=d.clone().lerp(g,p/g.distanceTo(d)),x=d.clone().lerp(M,p/M.distanceTo(d)),y=Array.from({length:5},(v,S)=>{let b=S/4;return m.clone().lerp(d,b).lerp(d.clone().lerp(x,b),b)});y.every((v,S)=>r(y[S-1]??h.at(-1)??c,v,u))?h.push(...y):h.push(d)}return h.push(l.at(-1)),h}function a(c,l,u=.23*Pe,h=!0){if(r(c,l,u))return[l.clone()];let f=t.get(e(c));if(!f||!e(l))return null;let d=c.clone(),g=l.clone(),M=[...t.values()].filter(v=>v.distanceToSquared(g)>1e-8);M.push(g);let p=new Set([d]),m=new Set,x=new Map([[d,0]]),y=new Map;for(;p.size;){let v,S=1/0;for(let b of p){let _=x.get(b)+b.distanceTo(g);_<S&&(v=b,S=_)}if(v===g){let b=[];for(let _=g;_!==d;_=y.get(_))b.unshift(_);return h?o(d,b,u):b}p.delete(v),m.add(v);for(let b of M){if(m.has(b)||v.distanceToSquared(b)<1e-8)continue;let _=x.get(v)+v.distanceTo(b);if(_>=(x.get(b)??1/0))continue;let T=v===d&&b===f;!r(v,b,u)&&!(T&&r(v,b))||(x.set(b,_),y.set(b,v),p.add(b))}}return null}return{tileAt:e,clear:r,route:a}}var ge=128,Hs=40,hn=ge*Hs,yf=(i,t,e)=>Tt.smoothstep(e,i,t);function j_(i,t){let e=(a,c)=>Tt.euclideanModulo(Math.sin(a*127.1+c*311.7)*43758.5453,1),n=Math.floor(i),s=Math.floor(t),r=yf(0,1,i-n),o=yf(0,1,t-s);return Tt.lerp(Tt.lerp(e(n,s),e(n+1,s),r),Tt.lerp(e(n,s+1),e(n+1,s+1),r),o)}function vf(){let i=new Uint8Array(hn).fill(255),t=new Float32Array(hn),e=new Uint8Array(hn),n=new Uint8Array(hn),s=new Uint16Array(hn),r=new Float32Array(hn),o=[[.23,.32,.1,.2],[.4,.69,.12,.21],[.65,.4,.12,.22]],a=new ki(i,ge,Hs,Fs);a.minFilter=a.magFilter=qe,a.generateMipmaps=!1,a.needsUpdate=!0;let c=-1;for(let u=0;u<Hs;u++)for(let h=0;h<ge;h++){let f=h/(ge-1),d=u/(Hs-1),g=j_(f*13+1.7,d*6+3.1),M=.66*(1-f)+.22*Math.sin(d*Math.PI)+.075*g+.07*Math.exp(-f*22);for(let[p,m,x,y]of o){let v=Math.hypot((f-p)/x,(d-m)/y);M=Math.min(M,.24+v*.19+g*.045)}t[u*ge+h]=M}function l(u){let h=Math.round(Math.max(0,u)*768);if(c===h)return;if(c=h,h===0){i.fill(255),e.fill(1),n.fill(1),a.needsUpdate=!0;return}let f=-.035+h/768*.75;n.fill(0);for(let p=0;p<hn;p++)e[p]=+(t[p]>f);let d=0,g=0;for(let p=0;p<Hs;p++){let m=p*ge;e[m]&&(n[m]=1,s[g++]=m)}function M(p){e[p]&&!n[p]&&(n[p]=1,s[g++]=p)}for(;d<g;){let p=s[d++],m=p%ge;m>0&&M(p-1),m<ge-1&&M(p+1),p>=ge&&M(p-ge),p<hn-ge&&M(p+ge)}for(let p=0;p<hn;p++){let m=p%ge,x=n[p];r[p]=m&&n[p-1]!==x||m<ge-1&&n[p+1]!==x||p>=ge&&n[p-ge]!==x||p<hn-ge&&n[p+ge]!==x?.5:1e3}for(let p=0;p<hn;p++)p%ge&&(r[p]=Math.min(r[p],r[p-1]+1)),p>=ge&&(r[p]=Math.min(r[p],r[p-ge]+1)),p>=ge&&p%ge&&(r[p]=Math.min(r[p],r[p-ge-1]+1.414));for(let p=hn-1;p>=0;p--)p%ge<ge-1&&(r[p]=Math.min(r[p],r[p+1]+1)),p<hn-ge&&(r[p]=Math.min(r[p],r[p+ge]+1)),p<hn-ge&&p%ge<ge-1&&(r[p]=Math.min(r[p],r[p+ge+1]+1.414)),i[p]=Math.round(Tt.clamp(.5+(n[p]?1:-1)*r[p]/24,0,1)*255);a.needsUpdate=!0}return l(0),{texture:a,setBurn:l,attached:n,width:ge,height:Hs}}var vn=14,ze=4,Ee=vn+1,je=Ee*(ze+1),Ws=.01;function ty(i,t,e,n){let s=new we({color:n?"#387cac":"#bb593c"});s.onBeforeCompile=o=>{o.uniforms.clothBurn=i,o.uniforms.clothHeat=t,o.uniforms.clothMask={value:e.texture},o.vertexShader=`varying vec2 vCloth;
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
        #include <tonemapping_fragment>`)},s.customProgramCacheKey=()=>n?"engineer-three-tab-banner-v1":"attached-cloth-dissolve-v3";let r=s.clone();return r.color.set(n?"#2c5e86":"#98503a"),r.onBeforeCompile=s.onBeforeCompile,[s,r]}function yc({engineer:i=!1}={}){let t={value:0},e={value:0},n=vf(),s=[],r=[],o=[];for(let P=0;P<=ze;P++){let B=P/ze,k=i?.94:1.13-.254*(1-Math.abs(B*2-1));for(let X=0;X<=vn;X++){let it=X/vn;if(s.push(new O(.009+it*k,.075-B*((i?.48:.326)-it*.044)-it*.03,0)),r.push(it,B),P===ze||X===vn)continue;let q=P*Ee+X,$=q+1,ot=q+Ee,ct=ot+1;o.push(q,ot,$,$,ot,ct),o.push(q+je,$+je,ot+je,$+je,ct+je,ot+je)}}let a=o.length,c=[];for(let P=0;P<vn;P++)c.push(P);for(let P=0;P<ze;P++)c.push(P*Ee+vn);for(let P=vn;P>0;P--)c.push(ze*Ee+P);for(let P=ze;P>0;P--)c.push(P*Ee);for(let P=0;P<c.length;P++){let B=c[P],k=c[(P+1)%c.length];o.push(B,k,B+je,k,k+je,B+je)}let l=new re,u=new Me(new Float32Array(je*6),3).setUsage(ln);l.setAttribute("position",u),l.setAttribute("uv",new zt([...r,...r],2)),l.setIndex(o),l.addGroup(0,a,0),l.addGroup(a,o.length-a,1),l.boundingSphere=new on(new O,1.46);let h=new ne(l,ty(t,e,n,i));h.name=i?"\u84DD\u8272\u4E09\u9F7F\u9524\u7EB9\u65D7":"\u5B88\u6751\u961F\u71D5\u5C3E\u65D7";let f=s.map(P=>P.clone()),d=s.map(P=>P.clone()),g=s.map(()=>new O),M=s.map(()=>new O),p=[],m=Array.from({length:ze+1},()=>new O),x=m.map(P=>P.clone()),y=m.map(P=>P.clone()),v=x.map(P=>P.clone()),S=x.map(P=>P.clone()),b=new O,_=new O,T=new O,L=new O,I=new O,w=new fe,E=!1;function C(P,B,k){p.push({a:P,b:B,strength:k,rest:s[P].distanceTo(s[B]),weightA:P%Ee===0?0:1,weightB:B%Ee===0?0:1})}for(let P=0;P<=ze;P++)for(let B=0;B<=vn;B++){let k=P*Ee+B;B<vn&&C(k,k+1,.97),P<ze&&B&&C(k,k+Ee,.96),P<ze&&B<vn&&(C(k,k+Ee+1,.7),C(k+1,k+Ee,.7)),B<vn-1&&C(k,k+2,.18),P<ze-1&&B&&C(k,k+Ee*2,.24)}function A(P,B){let k=B%Ee,X=Math.floor(B/Ee);return b.subVectors(P[B+ +(k<vn)],P[B-+(k>0)]),_.subVectors(P[B-(X>0?Ee:0)],P[B+(X<ze?Ee:0)]),T.crossVectors(b,_).normalize()}function U(){for(let P=0;P<je;P++){let B=d[P],k=A(d,P);u.setXYZ(P,B.x+k.x*Ws,B.y+k.y*Ws,B.z+k.z*Ws),u.setXYZ(P+je,B.x-k.x*Ws,B.y-k.y*Ws,B.z-k.z*Ws)}u.needsUpdate=!0,l.computeVertexNormals()}function N({a:P,b:B,rest:k,strength:X,weightA:it,weightB:q},$){I.subVectors(f[B],f[P]);let ot=I.length();if(ot<1e-6)return;let ct=(ot-k*$)*X/(ot*(it+q));f[P].addScaledVector(I,ct*it),f[B].addScaledVector(I,-ct*q)}function V(P,B,k,X){for(let $=0;$<=ze;$++)f[$*Ee].lerpVectors(y[$],m[$],k),S[$].lerpVectors(v[$],x[$],k);let it=Math.exp(-1.62*B),q=4.05+.51*Math.sin(P*.92);for(let $=0;$<je;$++){if($%Ee===0)continue;let ot=f[$],ct=g[$],ut=$%Ee/vn,gt=Math.floor($/Ee)/ze,Ot=Math.sin(P*5.65-ut*8.9+gt*.87),Ct=Math.sin(P*8.3-ut*13.6+gt*1.38);L.set(q+.2*Ot,.32+.28*Ct,-.46+.99*Ot+.41*Ct).sub(ct);let It=A(f,$),kt=L.dot(It);M[$].copy(ot),ct.multiplyScalar(it).addScaledVector(L,1.72*B).addScaledVector(It,kt*Math.abs(kt)*.41*B),ct.y-=1.85*B,ot.addScaledVector(ct,B)}for(let $=0;$<7;$++){for(let ot=0;ot<=ze;ot++)f[ot*Ee+1].lerp(S[ot],.092);if($%2===0)for(let ot of p)N(ot,X);else for(let ot=p.length-1;ot>=0;ot--)N(p[ot],X)}for(let $=0;$<je;$++)$%Ee!==0&&g[$].subVectors(f[$],M[$]).multiplyScalar(1/B).clampLength(0,8.5)}function W(P,B,k){for(let $=0;$<=ze;$++)m[$].copy(s[$*Ee]).applyMatrix4(k),x[$].copy(s[$*Ee+1]).applyMatrix4(k);if(!E||m[0].distanceToSquared(y[0])>1.2){for(let $=0;$<je;$++)f[$].copy(s[$]).applyMatrix4(k),g[$].set(0,0,0);for(let $=0;$<=ze;$++)y[$].copy(m[$]),v[$].copy(x[$]);E=!0}let X=Math.min(Math.max(B,0),.1),it=Math.ceil(X*120),q=Math.hypot(k.elements[0],k.elements[1],k.elements[2]);for(let $=1;$<=it;$++)V(P-X+X*$/it,X/it,$/it,q);for(let $=0;$<=ze;$++)y[$].copy(m[$]),v[$].copy(x[$]);w.copy(k).invert();for(let $=0;$<je;$++)d[$].copy(f[$]).applyMatrix4(w);U()}return U(),{mesh:h,animate:W,setBurn:(P,B=1)=>{t.value=P,e.value=B,n.setBurn(P)},reset:()=>{E=!1,t.value=0,e.value=0,n.setBurn(0)}}}var Mf="#b9beb0",ey="#e0dfc7",Sf="#8e6a45";function bf(i){let t=new Kt;if(t.name=["\u9570\u5200","\u9504\u5934","\u5E72\u8349\u53C9"][i],i===1?Fe(t,new Wn(.014,.018,.66,7),Sf,0,.115,0,1,1,1,!1):ve(t,Sf,0,.13,0,.028,.53,.028,!1),i===0){let e=new Xn().moveTo(0,.38).quadraticCurveTo(.27,.49,.23,.23).quadraticCurveTo(.19,.4,.005,.335),n=new Rs(e,{depth:.018,bevelEnabled:!1,curveSegments:12});Fe(t,n,Mf,0,0,-.009,1,1,1,!1),ve(t,"#b3a17a",0,.335,0,.052,.055,.043,!1)}else if(i===1){let n=function(s,r,o,a){let c=f=>.09+(f+.045)/.25*.015,l=new Xn().moveTo(-c(s),s).lineTo(c(s),s).lineTo(c(r),r).lineTo(-c(r),r).closePath(),u=new Rs(l,{depth:.012,bevelEnabled:!0,bevelThickness:.0015,bevelSize:.0015,bevelSegments:1,steps:1});u.rotateX(Math.PI/2-.12);let h=Fe(t,u,o,0,.477,0,1,1,1,!1);h.name=a},e=Fe(t,new Wn(.027,.024,.065,6),"#46534e",0,.447,0,1,1,1,!1);e.name="\u9504\u5934\u94C1\u7B8D",n(-.045,.175,"#53605b","\u5BBD\u8584\u94C1\u9504\u677F"),n(.175,.205,"#859084","\u9504\u677F\u5203\u53E3")}else{ve(t,Mf,0,.37,0,.22,.035,.032,!1);for(let e of[-.09,0,.09])Fe(t,new yr(.017,.18,6),ey,e,.455,0,1,1,1,!1)}return t.position.set(.125,i===1?.225:.19,.065),t.rotation.set(.22,0,-.22),t}function Tf(){let i=new Kt;return i.name="\u5DE5\u7A0B\u5E08\u5C0F\u9524",Fe(i,new Wn(.012,.014,.27,7),"#9b764b",0,.105,0,1,1,1,!1),ve(i,"#78877e",0,.245,0,.17,.072,.07,!1),ve(i,"#9ba69a",-.08,.245,0,.019,.077,.074,!1),ve(i,"#63746b",.08,.245,0,.017,.07,.068,!1),i.position.set(.125,.2,.065),i.rotation.set(.22,0,-.22),i}var $t={squadSize:6,villagerHp:100,villagerDamage:26,villagerAttack:.82,villagerReach:.76,recoveryDelay:4.5,recoveryRate:4,replenishSeconds:2,indoorRecoveryRate:22,engineerSize:3,engineerHp:35,engineerDamage:5,engineerAttack:1.35,engineerReach:.72,engineerRecoveryDelay:3,engineerRecoveryRate:6,extinguishSeconds:3,enemyHp:42,enemyDamage:18,enemyAttack:1.18,enemyReach:.7,baseHp:300,doorHits:3,burnPerInvader:2.4,burnSpeedCap:10,victoryDelay:3,defeatDelay:4.8,waves:[{count:6,interval:1.6},{count:10,interval:1.05},{count:16,interval:.62}]};var wf=[[0,0],[-.27,-.11],[.26,-.08],[-.29,.23],[-.01,.29],[.27,.25]],ny=[12.8,13.5,12.1,14,12.6,13.2],iy=[0,.08,.13,.19,.24,.31],sy=[0,.25,.34,.49,.62,.73].map(i=>i*Pe),ry=[0,-.17,.19,-.21,.02,.23].map(i=>i*Pe),oy=1.19,Af=2.83,ay=vc([[0,.043],[.084,.048],[.117,.065],[.127,.105],[.115,.211],[.088,.294],[.065,.329],[.049,.344],[0,.345]],18,22),Ef=new bi(.116,16,12),cy=vc([[0,-.05],[.117,-.05],[.151,-.043],[.145,-.032],[.113,-.006],[.077,.027],[.046,.051],[.027,.058],[0,.059]],20,22),ly=vc([[.131,-.009],[.149,-.009],[.158,-.004],[.16,.002],[.152,.009],[.134,.01],[.131,-.009]],20,13),hy=new bi(1,10,7);function vc(i,t,e){let s=new Hi(i.map(([r,o])=>new nt(r,o))).getPoints(e);for(let r of s)r.x=Math.max(0,r.x);return new qi(s,t)}function Cf(i){let t=[],e=[],n=0,s=0,r=new nt,o=new nt,a=new nt;function c(u){t=u,n=0,e=t.map(()=>0);for(let h=t.length-2;h>=0;h--)e[h]=e[h+1]+t[h].distanceTo(t[h+1]);t.length?s>.1&&(o.subVectors(t[0],i).normalize(),s*=Tt.clamp(.72+r.dot(o)*.32,.45,1)):s=0}function l(u){for(;n<t.length&&i.distanceToSquared(t[n])<1e-10;)n++;if(n>=t.length)return!1;let h=t[n],f=i.distanceTo(h),d=f+e[n];o.subVectors(h,i).normalize();let g=Math.min(Af,Math.sqrt(14.5*d));if(n+1<t.length){a.subVectors(t[n+1],h).normalize();let m=Af-(1-o.dot(a))*.88;g=Math.min(g,Math.sqrt(m**2+13*f))}let M=s;s+=Tt.clamp(g-s,-9.2*u,7.5*u);let p=(M+s)*.5*u;for(;n<t.length&&p>0;){o.subVectors(t[n],i);let m=o.length();if(m>1e-5&&r.copy(o).multiplyScalar(1/m),p<m){i.addScaledVector(r,p);break}i.copy(t[n++]),p-=m}return n<t.length?!0:(s=0,!1)}return{setRoute:c,advance:l,pause:u=>{s=Math.max(0,s-u*9.2)}}}function xh(i,{engineer:t=!1}={}){let e=new Kt;e.name=t?"\u5DE5\u7A0B\u5E08\u5C0F\u961F":"\u5B88\u6751\u961F";let n=t?{maxHp:$t.engineerHp,damage:$t.engineerDamage,attackInterval:$t.engineerAttack,attackReach:$t.engineerReach,recoveryDelay:$t.engineerRecoveryDelay,recoveryRate:$t.engineerRecoveryRate}:{maxHp:$t.villagerHp,damage:$t.villagerDamage,attackInterval:$t.villagerAttack,attackReach:$t.villagerReach,recoveryDelay:$t.recoveryDelay,recoveryRate:$t.recoveryRate},s=t?["#d47732","#e18a3d","#c96e31"]:["#3b5970","#426881","#41657d"],r=wf.slice(0,t?$t.engineerSize:$t.squadSize).map((w,E)=>{let C=new Kt,A=new Kt;if(C.scale.setScalar(oy),e.add(C),C.add(A),Fe(A,ay,s[E%3],0,0,0,1,1,.87),Fe(A,Ef,"#dfa978",0,.385,.012,.94,.93,.91),t){let P=vc([[0,-.025],[.108,-.025],[.125,0],[.12,.045],[.08,.074],[0,.078]],14,14);Fe(A,P,"#f2edd9",0,.437,0),Fe(A,Ef,"#dedbc8",0,.455,-.107,.28,.23,.24);for(let B of[-1,1]){let k=ve(A,"#e8e3cf",B*.024,.412,-.112,.029,.096,.019);k.rotation.z=B*.26}}else Fe(A,cy,"#cda569",0,.49,0),Fe(A,ly,"#e2c18a",0,.438,0);let U=[-1,1].map(P=>Fe(C,hy,"#4f4942",P*.051,.03,.023,.046,.043,.062,!1));for(let P of[-1,1])ve(A,"#4d4035",P*.033,.383,.11,.016,.023,.012,!1);let N=t?Tf():bf(Math.floor(Math.random()*3));A.add(N);let V=new Kt;A.add(V);let W=new ne(new Wn(.18,.18,.56,8));return W.visible=!1,W.position.y=.29,C.add(W),{unit:C,group:C,body:A,feet:U,weapon:N,stains:V,target:W,kind:"villager",team:t?"engineers":"militia",...n,p:new nt,velocity:new nt,detour:null,hp:n.maxHp,inside:!1,stowed:!1,ready:0,swing:-1,hit:!1,cooldown:E*.07,lastHurt:-100,recoil:0,combatFace:new nt(0,1),moving:!1,combatHold:!1,canEngage:!1,battleStep:new nt,lastFight:-100,working:!1,workTime:0,workProgress:0,gait:0,index:E,slot:E,stride:E*1.21}}),o=new Kt;o.position.set(.07,1.13,-.05),o.rotation.y=.22,r[0].unit.add(o),ve(o,"#b8996d",0,-.51,0,.032,1.19,.032);let a=yc({engineer:t});o.add(a.mesh);let c=[],l=new nt(0,1),u=new nt,h=new nt,f=new nt,d=new nt,g=new nt,M=new nt,p=new nt,m=new nt,x=new nt,y=0;function v(w,E){let[C,A]=wf[E];return u.set(w.x+(C*l.y-A*l.x)*Pe,w.y-(C*l.x+A*l.y)*Pe)}function S(w,E,C,A){let{unit:U,body:N,feet:V,p:W}=w;if(!w.working&&w.ready>.1&&!w.moving&&(A=w.combatFace),A.lengthSq()>1e-5){let q=Math.atan2(A.x,A.y),$=Math.atan2(Math.sin(q-U.rotation.y),Math.cos(q-U.rotation.y));U.rotation.y+=$*(1-Math.exp(-C*13))}w.gait=Tt.damp(w.gait,Math.min(1,E/2.2),16,C),w.stride+=C*ny[w.index]*Math.min(1.25,E*.52);let P=Math.sin(w.stride)*w.gait;N.position.y=(.5-Math.cos(w.stride*2)*.5)*.03*w.gait,N.rotation.z=P*.068,N.rotation.x=w.gait*.052,N.rotation.x+=w.ready*.075,N.position.z=-w.recoil*.17;let B=w.swing<0?0:Tt.smoothstep(w.swing,0,.24),k=w.swing<0?0:Tt.smoothstep(w.swing,.24,.38),X=w.swing<0?0:Tt.smoothstep(w.swing,.4,.68),it=B*-.85+k*2.05-X*1.2;if(w.weapon.rotation.x=.22+w.ready*.65+it,w.weapon.rotation.z=-.22-w.ready*.17+k*(1-X)*.3,w.stowed&&(w.weapon.rotation.x=1.25,w.weapon.rotation.z=-.05),w.working){let q=w.workTime%1,$=Tt.smoothstep(q,.05,.44),ot=Tt.smoothstep(q,.44,.6),ct=Tt.smoothstep(q,.68,.98);w.weapon.rotation.x=.45-$*1.2+ot*1.75-ct*.55,w.weapon.rotation.z=-.32+Math.sin(q*Math.PI)*.1,N.rotation.x+=ot*(1-ct)*.11}N.rotation.z+=Math.sin(Math.max(0,w.swing)*8)*.1*(1-X)*+(w.swing>=0),V[0].position.z=.023+P*.043,V[1].position.z=.023-P*.043,V[0].position.y=.03+Math.max(0,Math.cos(w.stride))*.029*w.gait,V[1].position.y=.03+Math.max(0,-Math.cos(w.stride))*.029*w.gait,U.position.set(W.x,pe(W.x,W.y),W.y)}function b(w){y=0,c.length=0,c.push({p:w.clone(),distance:0})}function _(w){b(w),a.reset(),l.set(.42,.91).normalize(),r.forEach((E,C)=>{E.hp=E.maxHp,E.inside=!1,E.stowed=!1,E.ready=0,E.swing=-1,E.hit=!1,E.cooldown=C*.07,E.lastHurt=-100,E.recoil=0,E.battleStep.set(0,0),E.lastFight=-100,E.unit.visible=!0,E.stains.clear(),E.p.copy(v(w,C)),E.unit.rotation.y=Math.atan2(l.x,l.y),E.stride=C*1.21,E.velocity.set(0,0),E.detour=null,E.gait=0,E.combatHold=!1,E.canEngage=!1,E.working=!1,E.workTime=0,E.workProgress=0,S(E,0,0,l)})}function T(w){let E=c.length-1;for(;E>1&&c[E-1].distance>w;)E--;let C=c[Math.max(0,E-1)],A=c[E];if(d.copy(C.p),h.set(l.y,-l.x),C===A)return;let U=Tt.clamp((w-C.distance)/(A.distance-C.distance),0,1);d.lerp(A.p,U);let N=c[Math.max(0,E-3)].p,V=c[Math.min(c.length-1,E+2)].p;h.set(V.y-N.y,N.x-V.x).normalize()}function L(w,E,C){y+=C;let A=r[0];if(A.hp<=0||A.inside)return!0;let U=0;for(let W of r)W.hp>0&&(W.slot=U++),W.moving=E&&!W.combatHold,W.stowed=!1;f.subVectors(w,A.p);let N=f.length();if(N>1e-5)for(l.copy(f).normalize(),c.push({p:w.clone(),distance:c.at(-1).distance+N});c.length>2&&c[1].distance<c.at(-1).distance-1.7;)c.shift();A.p.copy(w),S(A,C>0?N/C:0,C,l);let V=!E;for(let W=1;W<r.length;W++){let P=r[W];if(P.hp<=0||P.inside)continue;if(y<iy[W]){V=!1;continue}if(P.combatHold)u.copy(P.p);else if(E){let X=c.at(-1).distance-sy[P.slot]*(1+.1*Math.sin(y*3.5+W));T(X),u.copy(d).addScaledVector(h,ry[P.slot]+Math.sin(y*4.7+W*2)*.04);for(let it of r){if(it===P||it.hp<=0||it.inside)continue;M.subVectors(u,it.p);let q=M.length();q>0&&q<.25&&u.addScaledVector(M,(.25-q)*.39/q)}i.tileAt(u)||u.copy(d)}else v(w,P.slot).add(P.battleStep),i.clear(P.p,u)||v(w,P.slot);if(i.clear(P.p,u))P.detour=null,p.copy(u);else{let X=P.detour;(!X||P.p.distanceToSquared(X)<.02||!i.clear(P.p,X))&&(P.detour=i.route(P.p,u,.075,!1)?.[0]??null),p.copy(P.detour??P.p)}f.subVectors(p,P.p);let B=E?3.48+.16*Math.sin(y*4.4+W*1.77):1.66+W*.11;if(m.copy(f).setLength(Math.min(B,f.length()*(E?9.4:6.2))),x.subVectors(m,P.velocity).clampLength(0,C*(E?12.8:10.6)),P.velocity.add(x),g.copy(P.p).addScaledVector(P.velocity,C),i.clear(P.p,g)||(P.velocity.copy(m),g.copy(P.p).addScaledVector(P.velocity,C),i.clear(P.p,g)||(P.velocity.set(0,0),g.copy(P.p))),!E&&P.ready>.2)for(let X of r){if(X===P||X.hp<=0||X.inside)continue;M.subVectors(g,X.p);let it=M.length();if(it>1e-4&&it<.29){let q=X.p.clone().addScaledVector(M,.29/it);i.clear(P.p,q)&&g.copy(q)}}let k=C>0?P.p.distanceTo(g)/C:0;P.p.copy(g),S(P,k,C,k>.11?P.velocity:l),(P.p.distanceToSquared(u)>.014**2||P.gait>.028)&&(V=!1)}return V&&A.gait<=.028}function I(w,E){o.visible=r[0].hp>0&&!r[0].inside&&!r[0].stowed,o.updateWorldMatrix(!0,!1),a.animate(w,E,o.matrixWorld)}return{group:e,members:r,reset:_,beginOrder:b,follow:L,animateFlag:I,poseMember:S,standPoint(w,E,C){return C.copy(v(w,E))},get targets(){let w=r.filter(E=>E.hp>0&&!E.inside&&E.unit.visible).map(E=>E.target);return r[0].hp>0&&!r[0].inside&&r[0].unit.visible&&o.visible&&w.push(a.mesh),w},faceThreat(w){l.lerp(w,.18).normalize()}}}var uy=20,yh=.97,wc=[[.16,.22],[.24,.31],[.43,.32],[.66,.29],[.83,.24],[.94,.15],[.99,.055],[1,0]],vh=new qi(wc.map(([i,t])=>new nt(t,i)),uy),Rf=[],Mc=new yt,dy=new yt("#153e30"),fy=new yt("#46714a"),Sc=vh.attributes.position;for(let i=0;i<Sc.count;i++){let t=Sc.getY(i),e=.055*Math.sin(Math.atan2(Sc.getX(i),Sc.getZ(i))*5+t*4);Mc.copy(dy).lerp(fy,Tt.clamp(t*.86+e,0,1)),Rf.push(Mc.r,Mc.g,Mc.b)}vh.setAttribute("color",new zt(Rf,3));var py=[0,.47,.19,.71,.39,.9],jn=2/3,oo=13,ao=16,Cn=8,Qn=new O,ns=new O,bc=new O,un=new O,Ys=new O,If=new O,Pf=new O,is=new O,Tc=new O;function Xs(i,t,e,n=0,s=0){let r=[],o=[];for(let u=0;u<=4;u++)for(let h=0;h<=32;h++){let f=h*Math.PI*2/32,d=u/4,g=Math.cos(f)*i*d+n,M=Math.sin(f)*t*d+s,p=.64+M,m=wc.findIndex(([w])=>w>=p),[x,y]=wc[m-1],[v,S]=wc[m],b=Tt.lerp(y,S,(p-x)/(v-x)),_=Math.sqrt(Math.max(1e-4,b**2-g**2))*yh;if(r.push(g,M,_+e),u===4||h===32)continue;let T=u*33+h,L=T+1,I=T+32+1;o.push(T,I,L,L,I,I+1)}let l=new re;return l.setAttribute("position",new zt(r,3)),l.setIndex(o),l.computeVertexNormals(),l}var qs={lid:Xs(.268,.177,.008),white:Xs(.241,.147,.015),iris:Xs(.106,.119,.024,.008,-.003),pupil:Xs(.046,.08,.03,.008,-.003),glint:Xs(.025,.027,.035,-.022,.037),smallGlint:Xs(.009,.011,.035,.054,-.04)};function Lf(i){let t={value:new Te(i.normal.x,i.normal.y,i.normal.z,i.constant)};function e(n){let s=new we({...n,clippingPlanes:[i],clipShadows:!0});return s.onBeforeCompile=r=>{r.uniforms.riftPlane=t,r.vertexShader=`varying vec3 enemyWorld;
`+r.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
 enemyWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;`),r.fragmentShader=`varying vec3 enemyWorld; uniform vec4 riftPlane;
`+r.fragmentShader.replace("#include <tonemapping_fragment>",`float contact = 1.0 - smoothstep(0.006, 0.062, dot(vec4(enemyWorld, 1.0), riftPlane));
         gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.12, 1.7, 0.27), contact);
         #include <tonemapping_fragment>`)},s.customProgramCacheKey=()=>"rift-contact-v1",s}return{skin:e({color:"#ffffff",vertexColors:!0}),limb:e({color:"#28543b"}),lid:e({color:"#214333"}),white:e({color:"#d5dfb1"}),iris:e({color:"#779444"}),pupil:e({color:"#152c24"}),glint:e({color:"#f1f4d3",emissive:"#617a39",emissiveIntensity:.25})}}function my(){let i=new re;i.setAttribute("position",new Me(new Float32Array(ao*Cn*3),3).setUsage(ln)),i.setAttribute("normal",new Me(new Float32Array(ao*Cn*3),3).setUsage(ln));let t=[];for(let e=0;e<ao-1;e++)for(let n=0;n<Cn;n++){let s=e*Cn+n,r=e*Cn+(n+1)%Cn;t.push(s,r,s+Cn,r,r+Cn,s+Cn)}return i.setIndex(t),i.boundingSphere=new on(new O(0,.25,0),1.5),i}function _h(i,t,e,n){let s=1-t;i.copy(un).multiplyScalar(s**3).addScaledVector(Ys,3*s*s*t).addScaledVector(If,3*s*t*t).addScaledVector(Pf,t**3);let r=Math.sin(t*7.2-e)*Math.sin(t*Math.PI)*.045*jn;return i.x+=Math.cos(n)*r,i.z-=Math.sin(n)*r,i}function Df(i,t){let e=new Kt,n=new Kt;e.name="\u72EC\u773C\u89E6\u624B\u602A",e.add(n);function s(m,x,y){let v=new ne(x,y);return v.castShadow=!0,m.add(v),v}let r=new ne(vh,i.skin);r.scale.z=yh,r.castShadow=!0,n.add(r);let o=s(n,qs.lid,i.lid);o.position.y=.64;let a=new Kt;a.position.y=.64,n.add(a),s(a,qs.white,i.white);let c=new Kt;a.add(c),s(c,qs.iris,i.iris),s(c,qs.pupil,i.pupil),s(c,qs.glint,i.glint),s(c,qs.smallGlint,i.glint);let l=new Kt;n.add(l);let u=py.map((m,x)=>{let y=(x+.5)*Math.PI/3,v=my(),S=new ne(v,i.limb);return S.castShadow=!0,e.add(S),{phase:m,turn:y,mesh:S,planted:new O,takeoff:new O,landing:new O,tip:new O,swinging:!1}}),h=.72+Math.sin(t*5.17)*.025;e.scale.setScalar(h);let f=0,d=0;function g(m,x,y){let v=e.rotation.y,S=Math.sin(m.turn)*(.22+(.44-.22)*jn),b=Math.cos(m.turn)*(.2+(.38-.2)*jn)+x*jn,_=e.position.x+(S*Math.cos(v)+b*Math.sin(v))*h,T=e.position.z+(b*Math.cos(v)-S*Math.sin(v))*h;return y.set(_,pe(_,T)+.018,T)}function M(m,x,y){e.scale.setScalar(h),e.position.set(m,pe(m,x),x),e.rotation.y=y,f=0,d=0;for(let v of u)g(v,0,v.planted),v.takeoff.copy(v.planted),v.landing.copy(v.planted),v.swinging=!1;p(0,0)}function p(m,x,y=-1){f+=m,d+=x;let v=f/(.58*jn),S=v*Math.PI*2+t*1.7;n.position.y=.013+Math.sin(S)*.012,n.scale.set(1+Math.sin(S)*.025,1-Math.sin(S)*.036,1),n.rotation.set(.035+Math.cos(S)*.025,0,Math.sin(S)*.035);let b=y<0?0:Tt.smoothstep(y,0,.27)*(1-Tt.smoothstep(y,.43,.74)),_=y<0?0:Tt.smoothstep(y,.27,.4)*(1-Tt.smoothstep(y,.43,.74));n.rotation.x+=-b*.1+_*.19;let T=(d+t*.74)%4.7/4.7;a.scale.y=1-.94*Math.exp(-(((T-.93)/.023)**2)),c.position.x=.01*Math.sin(d*1.7+t);let L=e.rotation.y,I=Math.cos(L),w=Math.sin(L);for(let E of u){let C=(v+E.phase)%1,A=C>=.6;A&&!E.swinging&&(E.takeoff.copy(E.planted),g(E,.34,E.landing)),!A&&E.swinging&&E.planted.copy(E.landing),E.swinging=A;let U=Tt.clamp((C-.6)/.4,0,1),N=A?Math.sin(U*Math.PI)*.12*jn:0;E.tip.copy(E.planted),A&&E.tip.lerpVectors(E.takeoff,E.landing,Tt.smoothstep(U,0,1));let V=(E.tip.x-e.position.x)/h,W=(E.tip.z-e.position.z)/h,P=V*I-W*w,B=W*I+V*w,k=(E.tip.y-e.position.y)/h+N;(E===u[0]||E===u[5])&&(P=Tt.lerp(P,Math.sign(Math.sin(E.turn))*(.26-_*.08),b),B=Tt.lerp(B,.18+_*.67,b),k=Tt.lerp(k,.64-_*.43,b)),un.set(Math.sin(E.turn)*.22,.215+n.position.y,Math.cos(E.turn)*.2),Ys.set(Math.sin(E.turn)*.64+Math.cos(E.turn)*.07,.14+N*.7,Math.cos(E.turn)*.57-Math.sin(E.turn)*.07),Ys.x=un.x+(Ys.x-un.x)*jn,Ys.z=un.z+(Ys.z-un.z)*jn,If.set(un.x+(P-un.x)*1.1-Math.cos(E.turn)*.025*jn,k+.01+N*.45,un.z+(B-un.z)*1.1+Math.sin(E.turn)*.025*jn),Pf.set(un.x+(P-un.x)*.98,k+.026,un.z+(B-un.z)*.98);let X=E.mesh.geometry.attributes.position,it=E.mesh.geometry.attributes.normal,q=S-E.phase*5;for(let $=0;$<ao;$++){let ot=Math.min(1,$/(oo-1));_h(is,ot,q,E.turn),_h(Tc,Math.min(1,ot+.01),q,E.turn),$>=oo-1?(_h(Tc,ot-.01,q,E.turn),Qn.subVectors(is,Tc)):Qn.subVectors(Tc,is),Qn.normalize(),ns.set(Qn.z,0,-Qn.x).normalize(),ns.lengthSq()<.001&&ns.set(1,0,0),bc.crossVectors(Qn,ns).normalize();let ct=Math.max(0,$-oo+1)/(ao-oo)*Math.PI/2,ut=$<oo?.069*(1-ot)+.014:.014*Math.cos(ct);is.addScaledVector(Qn,.014*Math.sin(ct));for(let gt=0;gt<Cn;gt++){let Ot=gt*Math.PI*2/Cn,Ct=ns.x*Math.cos(Ot)+bc.x*Math.sin(Ot),It=ns.y*Math.cos(Ot)+bc.y*Math.sin(Ot),kt=ns.z*Math.cos(Ot)+bc.z*Math.sin(Ot),dt=$*Cn+gt;X.setXYZ(dt,is.x+Ct*ut,is.y+It*ut,is.z+kt*ut),it.setXYZ(dt,Ct*Math.cos(ct)+Qn.x*Math.sin(ct),It*Math.cos(ct)+Qn.y*Math.sin(ct),kt*Math.cos(ct)+Qn.z*Math.sin(ct))}}X.needsUpdate=!0,it.needsUpdate=!0}}return{group:e,body:n,stains:l,kind:"enemy",bodyDepth:yh,reset:M,pose:p,radius:.65*h}}function Nf(i,t){let e=new Kt;e.name="\u7EFF\u8272\u7A7A\u95F4\u88C2\u7F1D",e.position.copy(i),e.rotation.y=Math.atan2(t.x,t.z);let n={value:0},s={value:0},r=new wn({transparent:!0,depthWrite:!1,side:an,forceSinglePass:!0,uniforms:{time:n,aperture:s},vertexShader:`
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
    `}),o=new ne(new Yi(2.8,2.8),r);o.position.y=1.06,e.add(o);let a=new sn({color:"#7dffa0",transparent:!0,depthWrite:!1}),c=new bn(new Rr(.028),a,18);c.frustumCulled=!1,e.add(c);let l=new Ce;function u(h,f,d){n.value=h,s.value=Math.max(f,d*.026),e.visible=d>.001,o.scale.y=d,o.position.y=1.06*d,a.opacity=Math.min(1,f*1.6);for(let g=0;g<c.count;g++){let M=(h*(.23+g*.003)+g*.618)%1,p=g%2?1:-1,m=.1+M*2.1,x=Math.sin(M*Math.PI)**.68;l.position.set(p*(.35*x*f+.1*Math.sin(M*Math.PI)),m*d,Math.sin(g*2.39+h)*.09),l.rotation.set(h+g,g*1.3,h*.8),l.scale.setScalar(Math.sin(M*Math.PI)*(.55+g%3*.32)*f),l.updateMatrix(),c.setMatrixAt(g,l.matrix)}c.instanceMatrix.needsUpdate=!0}return u(0,0,0),{group:e,update:u}}var gy=[gh.slice().reverse().filter(i=>i.z>=-6.65),gh.filter(i=>i.z<=8.7)],xy=gy.map((i,t)=>{let e=[0];for(let n=1;n<i.length;n++)e.push(e[n-1]+Math.hypot(i[n].x-i[n-1].x,i[n].z-i[n-1].z));return{road:i,distances:e,sign:t?-1:1}});function Ac(i,t,e,n=0){let{road:s,distances:r,sign:o}=xy[i],a=0,c=s.length-1;for(;c-a>1;){let d=a+c>>1;r[d]>t?c=d:a=d}let l=s[a],u=s[c],h=Tt.clamp((t-r[a])/(r[c]-r[a]),0,1);e.x=Tt.lerp(l.x,u.x,h),e.z=Tt.lerp(l.z,u.z,h),e.dx=Tt.lerp(l.dz,u.dz,h)*o,e.dz=-Tt.lerp(l.dx,u.dx,h)*o;let f=Math.hypot(e.dx,e.dz);return e.dx/=f,e.dz/=f,t<0&&(e.x+=e.dx*t,e.z+=e.dz*t),e.x+=e.dz*n,e.z-=e.dx*n,e}function Uf(){let i=new Kt;i.name="\u6751\u9053\u5165\u4FB5\u6CE2\u6B21";let t={},e=[0,1].map(d=>{Ac(d,0,t);let g=new O(t.x,pe(t.x,t.z),t.z),M=new O(t.dx,0,t.dz),p=new mn().setFromNormalAndCoplanarPoint(M,g),m=Nf(g,M);return i.add(m.group),{rift:m,origin:g,paints:Lf(p),used:!1}}),n=Array.from({length:24},(d,g)=>{let M=+(g>=12),p=Df(e[M].paints,g);return i.add(p.group),{...p,side:M,index:g,active:!1,inside:!1,hp:$t.enemyHp,p:new nt,roadDistance:-.76,mode:"road",route:[],routeIndex:0,velocity:new nt,age:0,swing:-1,hit:!1,target:null,cooldown:.4,repathTimer:0,speed:1.65+.17*Math.sin(g*2.3),lane:Math.sin(g*2.77)*.05}}),s={wave:1,waves:$t.waves.length,total:$t.waves[0].count,emitted:0,active:0,killed:0,phase:"opening",countdown:0,complete:!1},r=0,o=5.5,a=1/0,c=0;function l(){Object.assign(s,{wave:1,total:$t.waves[0].count,emitted:0,active:0,killed:0,phase:"opening",countdown:0,complete:!1}),r=0,o=5.5,a=1/0,c=0;for(let d of n)d.active=!1,d.inside=!1,d.consumed=!1,d.group.visible=!1,d.stains.clear();e.forEach(d=>{d.used=!1,d.rift.update(0,0,0)})}function u(d){d.active&&(d.active=!1,d.hp=0,d.group.visible=!1,s.killed++)}function h(d){let g=n.find(M=>!M.active&&M.side===d);return!g||(Ac(d,-.76,t,g.lane),n.some(M=>M.active&&!M.inside&&Math.hypot(M.p.x-t.x,M.p.y-t.z)<.94))?!1:(Object.assign(g,{active:!0,inside:!1,consumed:!1,hp:$t.enemyHp,mode:"road",roadDistance:-.76,routeIndex:0,age:0,swing:-1,hit:!1,target:null,strikeTarget:null,lastAttacker:null,stun:0,repathTimer:0,cooldown:.5}),g.route.length=0,g.velocity.set(0,0),g.p.set(t.x,t.z),g.reset(t.x,t.z,Math.atan2(t.dx,t.dz)),g.stains.clear(),g.group.visible=!0,e[d].used=!0,s.emitted++,s.active++,o=r+$t.waves[s.wave-1].interval,s.emitted===s.total&&(a=r+1.75),!0)}function f(d){if(s.complete)return;if(r+=d,s.active=n.filter(x=>x.active).length,s.emitted<s.total&&r>=o){let x=s.wave===3?s.emitted%2:0;h(x)}let g=Tt.smoothstep(r,.28,1.4),M=Tt.smoothstep(r-a,0,.72),p=g*(1-M)*(1+.025*Math.sin(r*3.4)),m=Tt.smoothstep(r,.03,.44)*(1-Tt.smoothstep(r-a,.4,.95));if(e.forEach((x,y)=>{let v=y===0||s.wave===3;x.rift.update(r,v?p:0,v?m:0)}),s.phase=r<5.5?"opening":r<a?"spawning":r<a+.95?"closing":s.active?"marching":"waiting",s.countdown=s.phase==="opening"?Math.max(0,Math.ceil(5.5-r)):0,s.phase==="waiting"){if(s.wave===$t.waves.length){s.complete=!0,s.phase="complete";return}c+=d,s.countdown=Math.max(0,Math.ceil(8-c)),c>=8&&(s.wave++,s.total=$t.waves[s.wave-1].count,s.emitted=0,r=0,o=5.5,a=1/0,c=0)}}return l(),{group:i,state:s,actors:n,update:f,reset:l,kill:u}}var Cc=class extends ne{constructor(t,e,n=!1,s=!1,r=1e4){let o=new re;super(o,e),this.isMarchingCubes=!0;let a=this,c=new Float32Array(36),l=new Float32Array(36),u=new Float32Array(36);this.enableUvs=n,this.enableColors=s,this.init=function(x){this.resolution=x,this.isolation=80,this.size=x,this.size2=this.size*this.size,this.size3=this.size2*this.size,this.halfsize=this.size/2,this.delta=2/this.size,this.yd=this.size,this.zd=this.size2,this.field=new Float32Array(this.size3),this.normal_cache=new Float32Array(this.size3*3),this.palette=new Float32Array(this.size3*3),this.count=0;let y=r*3;this.positionArray=new Float32Array(y*3);let v=new Me(this.positionArray,3);v.setUsage(ln),o.setAttribute("position",v),this.normalArray=new Float32Array(y*3);let S=new Me(this.normalArray,3);if(S.setUsage(ln),o.setAttribute("normal",S),this.enableUvs){this.uvArray=new Float32Array(y*2);let b=new Me(this.uvArray,2);b.setUsage(ln),o.setAttribute("uv",b)}if(this.enableColors){this.colorArray=new Float32Array(y*3);let b=new Me(this.colorArray,3);b.setUsage(ln),o.setAttribute("color",b)}o.boundingSphere=new on(new O,1)};function h(x,y,v){return x+(y-x)*v}function f(x,y,v,S,b,_,T,L,I,w){let E=(v-T)/(L-T),C=a.normal_cache;c[y+0]=S+E*a.delta,c[y+1]=b,c[y+2]=_,l[y+0]=h(C[x+0],C[x+3],E),l[y+1]=h(C[x+1],C[x+4],E),l[y+2]=h(C[x+2],C[x+5],E),u[y+0]=h(a.palette[I*3+0],a.palette[w*3+0],E),u[y+1]=h(a.palette[I*3+1],a.palette[w*3+1],E),u[y+2]=h(a.palette[I*3+2],a.palette[w*3+2],E)}function d(x,y,v,S,b,_,T,L,I,w){let E=(v-T)/(L-T),C=a.normal_cache;c[y+0]=S,c[y+1]=b+E*a.delta,c[y+2]=_;let A=x+a.yd*3;l[y+0]=h(C[x+0],C[A+0],E),l[y+1]=h(C[x+1],C[A+1],E),l[y+2]=h(C[x+2],C[A+2],E),u[y+0]=h(a.palette[I*3+0],a.palette[w*3+0],E),u[y+1]=h(a.palette[I*3+1],a.palette[w*3+1],E),u[y+2]=h(a.palette[I*3+2],a.palette[w*3+2],E)}function g(x,y,v,S,b,_,T,L,I,w){let E=(v-T)/(L-T),C=a.normal_cache;c[y+0]=S,c[y+1]=b,c[y+2]=_+E*a.delta;let A=x+a.zd*3;l[y+0]=h(C[x+0],C[A+0],E),l[y+1]=h(C[x+1],C[A+1],E),l[y+2]=h(C[x+2],C[A+2],E),u[y+0]=h(a.palette[I*3+0],a.palette[w*3+0],E),u[y+1]=h(a.palette[I*3+1],a.palette[w*3+1],E),u[y+2]=h(a.palette[I*3+2],a.palette[w*3+2],E)}function M(x){let y=x*3;a.normal_cache[y]===0&&(a.normal_cache[y+0]=a.field[x-1]-a.field[x+1],a.normal_cache[y+1]=a.field[x-a.yd]-a.field[x+a.yd],a.normal_cache[y+2]=a.field[x-a.zd]-a.field[x+a.zd])}function p(x,y,v,S,b){let _=S+1,T=S+a.yd,L=S+a.zd,I=_+a.yd,w=_+a.zd,E=S+a.yd+a.zd,C=_+a.yd+a.zd,A=0,U=a.field[S],N=a.field[_],V=a.field[T],W=a.field[I],P=a.field[L],B=a.field[w],k=a.field[E],X=a.field[C];U<b&&(A|=1),N<b&&(A|=2),V<b&&(A|=8),W<b&&(A|=4),P<b&&(A|=16),B<b&&(A|=32),k<b&&(A|=128),X<b&&(A|=64);let it=_y[A];if(it===0)return 0;let q=a.delta,$=x+q,ot=y+q,ct=v+q;it&1&&(M(S),M(_),f(S*3,0,b,x,y,v,U,N,S,_)),it&2&&(M(_),M(I),d(_*3,3,b,$,y,v,N,W,_,I)),it&4&&(M(T),M(I),f(T*3,6,b,x,ot,v,V,W,T,I)),it&8&&(M(S),M(T),d(S*3,9,b,x,y,v,U,V,S,T)),it&16&&(M(L),M(w),f(L*3,12,b,x,y,ct,P,B,L,w)),it&32&&(M(w),M(C),d(w*3,15,b,$,y,ct,B,X,w,C)),it&64&&(M(E),M(C),f(E*3,18,b,x,ot,ct,k,X,E,C)),it&128&&(M(L),M(E),d(L*3,21,b,x,y,ct,P,k,L,E)),it&256&&(M(S),M(L),g(S*3,24,b,x,y,v,U,P,S,L)),it&512&&(M(_),M(w),g(_*3,27,b,$,y,v,N,B,_,w)),it&1024&&(M(I),M(C),g(I*3,30,b,$,ot,v,W,X,I,C)),it&2048&&(M(T),M(E),g(T*3,33,b,x,ot,v,V,k,T,E)),A<<=4;let ut,gt,Ot,Ct=0,It=0;for(;Ec[A+It]!=-1;)ut=A+It,gt=ut+1,Ot=ut+2,m(c,l,u,3*Ec[ut],3*Ec[gt],3*Ec[Ot]),It+=3,Ct++;return Ct}function m(x,y,v,S,b,_){let T=a.count*3;if(a.positionArray[T+0]=x[S],a.positionArray[T+1]=x[S+1],a.positionArray[T+2]=x[S+2],a.positionArray[T+3]=x[b],a.positionArray[T+4]=x[b+1],a.positionArray[T+5]=x[b+2],a.positionArray[T+6]=x[_],a.positionArray[T+7]=x[_+1],a.positionArray[T+8]=x[_+2],a.material.flatShading===!0){let L=(y[S+0]+y[b+0]+y[_+0])/3,I=(y[S+1]+y[b+1]+y[_+1])/3,w=(y[S+2]+y[b+2]+y[_+2])/3;a.normalArray[T+0]=L,a.normalArray[T+1]=I,a.normalArray[T+2]=w,a.normalArray[T+3]=L,a.normalArray[T+4]=I,a.normalArray[T+5]=w,a.normalArray[T+6]=L,a.normalArray[T+7]=I,a.normalArray[T+8]=w}else a.normalArray[T+0]=y[S+0],a.normalArray[T+1]=y[S+1],a.normalArray[T+2]=y[S+2],a.normalArray[T+3]=y[b+0],a.normalArray[T+4]=y[b+1],a.normalArray[T+5]=y[b+2],a.normalArray[T+6]=y[_+0],a.normalArray[T+7]=y[_+1],a.normalArray[T+8]=y[_+2];if(a.enableUvs){let L=a.count*2;a.uvArray[L+0]=x[S+0],a.uvArray[L+1]=x[S+2],a.uvArray[L+2]=x[b+0],a.uvArray[L+3]=x[b+2],a.uvArray[L+4]=x[_+0],a.uvArray[L+5]=x[_+2]}a.enableColors&&(a.colorArray[T+0]=v[S+0],a.colorArray[T+1]=v[S+1],a.colorArray[T+2]=v[S+2],a.colorArray[T+3]=v[b+0],a.colorArray[T+4]=v[b+1],a.colorArray[T+5]=v[b+2],a.colorArray[T+6]=v[_+0],a.colorArray[T+7]=v[_+1],a.colorArray[T+8]=v[_+2]),a.count+=3}this.addBall=function(x,y,v,S,b,_){let T=Math.sign(S);S=Math.abs(S);let L=_!=null,I=new yt(x,y,v);if(L)try{I=_ instanceof yt?_:Array.isArray(_)?new yt(Math.min(Math.abs(_[0]),1),Math.min(Math.abs(_[1]),1),Math.min(Math.abs(_[2]),1)):new yt(_)}catch{I=new yt(x,y,v)}let w=this.size*Math.sqrt(S/b),E=v*this.size,C=y*this.size,A=x*this.size,U=Math.floor(E-w);U<1&&(U=1);let N=Math.floor(E+w);N>this.size-1&&(N=this.size-1);let V=Math.floor(C-w);V<1&&(V=1);let W=Math.floor(C+w);W>this.size-1&&(W=this.size-1);let P=Math.floor(A-w);P<1&&(P=1);let B=Math.floor(A+w);B>this.size-1&&(B=this.size-1);let k,X,it,q,$,ot,ct,ut,gt,Ot,Ct;for(it=U;it<N;it++)for($=this.size2*it,ut=it/this.size-v,gt=ut*ut,X=V;X<W;X++)for(q=$+this.size*X,ct=X/this.size-y,Ot=ct*ct,k=P;k<B;k++)if(ot=k/this.size-x,Ct=S/(1e-6+ot*ot+Ot+gt)-b,Ct>0){this.field[q+k]+=Ct*T;let It=Math.sqrt((k-A)*(k-A)+(X-C)*(X-C)+(it-E)*(it-E))/w,kt=1-It*It*It*(It*(It*6-15)+10);this.palette[(q+k)*3+0]+=I.r*kt,this.palette[(q+k)*3+1]+=I.g*kt,this.palette[(q+k)*3+2]+=I.b*kt}},this.addPlaneX=function(x,y){let v=this.size,S=this.yd,b=this.zd,_=this.field,T,L,I,w,E,C,A,U=v*Math.sqrt(x/y);for(U>v&&(U=v),T=0;T<U;T++)if(C=T/v,w=C*C,E=x/(1e-4+w)-y,E>0)for(L=0;L<v;L++)for(A=T+L*S,I=0;I<v;I++)_[b*I+A]+=E},this.addPlaneY=function(x,y){let v=this.size,S=this.yd,b=this.zd,_=this.field,T,L,I,w,E,C,A,U,N=v*Math.sqrt(x/y);for(N>v&&(N=v),L=0;L<N;L++)if(C=L/v,w=C*C,E=x/(1e-4+w)-y,E>0)for(A=L*S,T=0;T<v;T++)for(U=A+T,I=0;I<v;I++)_[b*I+U]+=E},this.addPlaneZ=function(x,y){let v=this.size,S=this.yd,b=this.zd,_=this.field,T,L,I,w,E,C,A,U,N=v*Math.sqrt(x/y);for(N>v&&(N=v),I=0;I<N;I++)if(C=I/v,w=C*C,E=x/(1e-4+w)-y,E>0)for(A=b*I,L=0;L<v;L++)for(U=A+L*S,T=0;T<v;T++)_[U+T]+=E},this.setCell=function(x,y,v,S){let b=this.size2*v+this.size*y+x;this.field[b]=S},this.getCell=function(x,y,v){let S=this.size2*v+this.size*y+x;return this.field[S]},this.blur=function(x=1){let y=this.field,v=y.slice(),S=this.size,b=this.size2;for(let _=0;_<S;_++)for(let T=0;T<S;T++)for(let L=0;L<S;L++){let I=b*L+S*T+_,w=v[I],E=1;for(let C=-1;C<=1;C+=2){let A=C+_;if(!(A<0||A>=S))for(let U=-1;U<=1;U+=2){let N=U+T;if(!(N<0||N>=S))for(let V=-1;V<=1;V+=2){let W=V+L;if(W<0||W>=S)continue;let P=b*W+S*N+A,B=v[P];E++,w+=x*(B-w)/E}}}y[I]=w}},this.reset=function(){for(let x=0;x<this.size3;x++)this.normal_cache[x*3]=0,this.field[x]=0,this.palette[x*3]=this.palette[x*3+1]=this.palette[x*3+2]=0},this.update=function(){this.count=0;let x=this.size-2;for(let y=1;y<x;y++){let v=this.size2*y,S=(y-this.halfsize)/this.halfsize;for(let b=1;b<x;b++){let _=v+this.size*b,T=(b-this.halfsize)/this.halfsize;for(let L=1;L<x;L++){let I=(L-this.halfsize)/this.halfsize,w=_+L;p(I,T,S,w,this.isolation)}}}this.geometry.setDrawRange(0,this.count),o.getAttribute("position").needsUpdate=!0,o.getAttribute("normal").needsUpdate=!0,this.enableUvs&&(o.getAttribute("uv").needsUpdate=!0),this.enableColors&&(o.getAttribute("color").needsUpdate=!0),this.count/3>r&&console.warn("THREE.MarchingCubes: Geometry buffers too small for rendering. Please create an instance with a higher poly count.")},this.init(t)}},_y=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),Ec=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);var Ic=["#98382b","#2d7845"],yy=new O(0,1,0),Bn=new O,Ff=new fe,vy=new bi(1,8,5),Rc=Ic.map(i=>new Is({color:i,roughness:.62,metalness:0,clearcoat:.08,clearcoatRoughness:.58})),ke=30,Of=ke*ke*12;function Bf(i){let t=new Kt,e=new Kt;t.name="\u9ECF\u7A20\u878D\u5408\u8840\u6D46",e.name="\u8FDE\u7247\u5730\u8868\u8840\u6DB2",e.renderOrder=-1,i.add(t,e);let n=Array.from({length:10},()=>{let w=new Cc(28,Rc[0],!1,!1,2500);return w.isolation=36,w.visible=!1,w.frustumCulled=!1,t.add(w),{mesh:w,active:!1,age:0,nodes:[],alien:!1,heavy:!1}}),s=new bn(vy,Rc[0].clone(),128);s.material.color.set("#ffffff"),s.name="\u65AD\u5F00\u7684\u7EC6\u5C0F\u8840\u6EF4",s.frustumCulled=!1;for(let w=0;w<s.count;w++)s.setColorAt(w,new yt(Ic[0]));t.add(s);let r=Array.from({length:s.count},()=>({active:!1,p:new O,v:new O,radius:0,alien:!1})),o=Array.from({length:24},()=>{let w=new re;for(let U of["position","normal","color"])w.setAttribute(U,new Me(new Float32Array(Of*3),3).setUsage(ln));w.setDrawRange(0,0);let E=new Is({vertexColors:!0,roughness:.68,clearcoat:.06,clearcoatRoughness:.6,metalness:0,transparent:!0,depthWrite:!1}),C={value:new nt};w.setAttribute("liquidDepth",new Me(new Float32Array(Of),1).setUsage(ln)),E.onBeforeCompile=U=>{U.uniforms.liquidOrigin=C,U.vertexShader=`attribute float liquidDepth; varying float bloodDepth; varying vec2 bloodWorld;
`+U.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 bloodDepth = liquidDepth; bloodWorld = (modelMatrix * vec4(position, 1.0)).xz;`),U.fragmentShader=`varying float bloodDepth; varying vec2 bloodWorld; uniform vec2 liquidOrigin;
`+U.fragmentShader.replace("#include <tonemapping_fragment>",`
          vec2 flow = bloodWorld - liquidOrigin;
          float arc = abs(flow.y + .11 * sin(flow.x * 7.0) + .16);
          float sheen = (1.0 - smoothstep(.009, .026, arc)) * exp(-flow.x * flow.x * 14.0)
            * smoothstep(.05, .13, bloodDepth);
          gl_FragColor.rgb += vec3(.025, .032, .021) * sheen;
          #include <tonemapping_fragment>`)},E.customProgramCacheKey=()=>"wet-pooled-blood-v1";let A=new ne(w,E);return A.visible=!1,A.frustumCulled=!1,A.receiveShadow=!0,e.add(A),{mesh:A,origin:C,active:!1,alien:!1,age:0,born:0,layer:0,sinkAt:0,goneAt:0,bounds:new Br,refresh:0,dirty:!1,blobs:[]}}),a=new Ce,c=new O,l=new O,u=new O,h=new yt,f=new yt,d=new yt,g=0,M=0,p=0,m=0;function x(){let w=o.filter(E=>E.active).sort((E,C)=>E.layer-C.layer);for(let E=0;E<w.length;E++){let C=w[E],A=Math.max(C.sinkAt,C.born+44);for(let U=0;U<E;U++)C.bounds.intersectsBox(w[U].bounds)&&(A=Math.max(A,w[U].goneAt+.08));C.sinkAt=A,C.goneAt=A+1.4}}function y(w,E,C,A){let U=0;for(let P of o)P.active&&P.alien!==A&&P.blobs.some(B=>Math.hypot(B.x-w,B.z-E)<B.r+C+.18)&&(U=Math.max(U,P.layer));let N=o.find(P=>P.active&&P.alien===A&&P.layer>=U&&p-P.born<=1.2&&P.blobs.some(B=>Math.hypot(B.x-w,B.z-E)<B.r+C+.28)&&P.blobs.every(B=>Math.abs(B.x-w)<2&&Math.abs(B.z-E)<2));N||(N=o.find(P=>!P.active)??o.reduce((P,B)=>B.layer<P.layer?B:P),N.blobs.length=0,N.alien=A,N.active=!0,N.mesh.visible=!0,N.born=p,N.age=0,N.layer=++m,N.mesh.renderOrder=N.layer,N.sinkAt=p+44,N.goneAt=N.sinkAt+1.4,N.mesh.position.y=0,N.bounds.makeEmpty(),N.mesh.geometry.setDrawRange(0,0),N.mesh.material.opacity=1,N.refresh=1/24);function V(P,B){let k=P.r*(P.start+(1-P.start)*Tt.smoothstep(P.age,0,.48));P.r=Math.min(.62,Math.sqrt(P.r**2+B)),P.start=Math.min(1,k/P.r),P.age=0}let W=N.blobs.find(P=>Math.hypot(P.x-w,P.z-E)<.1);if(W)V(W,C**2*.7);else if(N.blobs.length<22)N.blobs.push({x:w,z:E,r:C,start:.38,age:0,seed:Math.random()*7});else{let P=N.blobs.reduce((B,k)=>Math.hypot(B.x-w,B.z-E)<Math.hypot(k.x-w,k.z-E)?B:k);V(P,C**2*.35)}for(let P of N.blobs)N.bounds.min.x=Math.min(N.bounds.min.x,P.x-P.r-.15),N.bounds.min.y=Math.min(N.bounds.min.y,P.z-P.r-.15),N.bounds.max.x=Math.max(N.bounds.max.x,P.x+P.r+.15),N.bounds.max.y=Math.max(N.bounds.max.y,P.z+P.r+.15);N.dirty=!0,x()}function v(w,E){if(!w.stains)return;let C=w.kind==="enemy";w.group.updateWorldMatrix(!0,!1),Ff.copy(w.group.matrixWorld).invert(),Bn.set(-E.x,0,-E.y).transformDirection(Ff);let A=Math.atan2(Bn.x,Bn.z),U=[],N=[],V=C?.078:.047,W=C?.38:.21;for(let k=0;k<=3;k++)for(let X=0;X<=16;X++){let it=X/16*Math.PI*2,q=k/3*V*(1+.13*Math.sin(it*3+A)),$=A+Math.cos(it)*q/(C?.3:.115);if(U.push(Math.sin($)*(C?.307:.116),W+Math.sin(it)*q,Math.cos($)*(C?.31*(w.bodyDepth??.79):.102)),k<3&&X<16){let ot=k*17+X;N.push(ot,ot+17,ot+1,ot+1,ot+17,ot+18)}}let P=new re;P.setAttribute("position",new zt(U,3)),P.setIndex(N),P.computeVertexNormals();let B=new ne(P,Rc[Number(C)]);for(w.stains.add(B);w.stains.children.length>5;){let k=w.stains.children[0];w.stains.remove(k),k.geometry.dispose()}}function S(w,E,C=!1){let A=w.kind==="enemy",U=w.group.position,N=n[g++%n.length];N.active=!0,N.age=0,N.nodes.length=0,N.alien=A,N.heavy=C,N.mesh.material=Rc[Number(A)],N.mesh.visible=!0;let V=U.clone().add(new O(-E.x*(C?0:.17),A?.34:.28,-E.y*(C?0:.17)));N.nodes.push({p:V.clone(),v:new O(0,.65,0),r:C?.145:.087,active:!0,branch:-1,segment:0});let W=Math.atan2(-E.x,-E.y),P=C?4:3;for(let B=0;B<P;B++){let k=C?B/P*Math.PI*2+Math.random()*.75:W+(B-1)*.67,X=C?1.65+Math.random()*1.15:1.65+Math.random()*.65,it=C?1.55+Math.random()*.8:1.2+Math.random()*.65;for(let q=1;q<=2;q++){let $=q/2;N.nodes.push({p:V.clone().add(new O(Math.sin(k)*.055*$,.015*$,Math.cos(k)*.055*$)),v:new O(Math.sin(k)*X*$,it*(.7+$*.3),Math.cos(k)*X*$),r:(C?.095:.062)*(q===1?1:.76),active:!0,branch:B,segment:q})}}for(let B=0;B<(C?10:5);B++){let k=M++%r.length,X=r[k],it=C?Math.random()*Math.PI*2:W+(Math.random()-.5)*1.9,q=1.7+Math.random()*1.2;X.p.copy(V),X.v.set(Math.sin(it)*q,1.2+Math.random()*1.8,Math.cos(it)*q),X.radius=.012+Math.random()*.013,X.active=!0,X.alien=A,s.setColorAt(k,new yt(Ic[Number(A)]))}C||v(w,E),b(N)}function b(w){let E=w.mesh;l.setScalar(1/0),u.setScalar(-1/0);let C=w.nodes.filter(W=>W.active);if(!C.length){w.active=!1,E.visible=!1;return}for(let W of C)l.min(W.p),u.max(W.p);c.addVectors(l,u).multiplyScalar(.5);let A=.68,U=Math.max(.4,(u.x-l.x)*.5+.3,(u.z-l.z)*.5+.3,(u.y-l.y)*.5/A+.3);E.position.copy(c),E.scale.set(U,U*A,U),E.reset();let N=(W,P)=>{let B=P/(U*2);E.addBall(.5+(W.x-c.x)/(U*2),.5+(W.y-c.y)/(U*2*A),.5+(W.z-c.z)/(U*2),B**2*(E.isolation+12),12)};for(let W of C)N(W.p,W.r);let V=1-Tt.smoothstep(w.age,.14,w.heavy?.42:.34);if(V>.04)for(let W of C){if(W.segment!==2)continue;let P=w.nodes.find(X=>X.branch===W.branch&&X.segment===1);if(!P?.active)continue;let B=P.p.distanceTo(W.p),k=Math.min(5,Math.ceil(B/.07));for(let X=1;X<k;X++)Bn.lerpVectors(P.p,W.p,X/k),N(Bn,Math.min(W.r,P.r)*(.45+V*.38))}E.update()}function _(w,E,C){let A=100;for(let U of w.blobs){let N=Math.atan2(C-U.z,E-U.x),V=U.r*(U.start+(1-U.start)*Tt.smoothstep(U.age,0,.48))*(1+.055*Math.sin(N*3+U.seed)+.035*Math.cos(N*5-U.seed)),W=Math.hypot(E-U.x,C-U.z)-V,P=Math.max(.13-Math.abs(A-W),0)/.13;A=Math.min(A,W)-P*P*.0325}return A}function T(w){let E=1/0,C=-1/0,A=1/0,U=-1/0;for(let ct of w.blobs)E=Math.min(E,ct.x-ct.r-.14),C=Math.max(C,ct.x+ct.r+.14),A=Math.min(A,ct.z-ct.r-.14),U=Math.max(U,ct.z+ct.r+.14);let N=[],V=(C-E)/ke,W=(U-A)/ke;for(let ct=0;ct<=ke;ct++)for(let ut=0;ut<=ke;ut++){let gt=E+ut*V,Ot=A+ct*W,Ct=_(w,gt,Ot),It=Tt.smoothstep(-Ct,0,.13);N.push({x:gt,z:Ot,d:Ct,y:pe(gt,Ot)+.009+It*.006,nx:0,ny:1,nz:0})}for(let ct=0;ct<=ke;ct++)for(let ut=0;ut<=ke;ut++){let gt=N[ct*(ke+1)+ut],Ot=N[ct*(ke+1)+Math.max(0,ut-1)],Ct=N[ct*(ke+1)+Math.min(ke,ut+1)],It=N[Math.max(0,ct-1)*(ke+1)+ut],kt=N[Math.min(ke,ct+1)*(ke+1)+ut];Bn.set((Ot.y-Ct.y)/(Ct.x-Ot.x),1,(It.y-kt.y)/(kt.z-It.z)).normalize(),gt.nx=Bn.x,gt.ny=Bn.y,gt.nz=Bn.z}w.origin.value.set((E+C)/2,(A+U)/2);let P=w.mesh.geometry,B=P.attributes.position,k=P.attributes.normal,X=P.attributes.color,it=P.attributes.liquidDepth;h.set(Ic[Number(w.alien)]),f.copy(h).multiplyScalar(.72);let q=0;function $(ct){B.setXYZ(q,ct.x,ct.y,ct.z),k.setXYZ(q,ct.nx,ct.ny,ct.nz),it.setX(q,-ct.d),d.copy(f).lerp(h,.28+.72*Tt.smoothstep(-ct.d,0,.16)),X.setXYZ(q++,d.r,d.g,d.b)}function ot(ct,ut,gt){let Ot=[],Ct=[ct,ut,gt];for(let It=0;It<3;It++){let kt=Ct[It],dt=Ct[(It+1)%3];if(kt.d<=0&&Ot.push(kt),kt.d<=0!=dt.d<=0){let St=kt.d/(kt.d-dt.d),_t={d:0};for(let Dt of["x","y","z","nx","ny","nz"])_t[Dt]=Tt.lerp(kt[Dt],dt[Dt],St);Ot.push(_t)}}for(let It=1;It<Ot.length-1;It++)$(Ot[0]),$(Ot[It]),$(Ot[It+1])}for(let ct=0;ct<ke;ct++)for(let ut=0;ut<ke;ut++){let gt=ct*(ke+1)+ut,Ot=gt+1,Ct=gt+ke+1,It=Ct+1;ot(N[gt],N[Ct],N[Ot]),ot(N[Ot],N[Ct],N[It])}P.setDrawRange(0,q),B.needsUpdate=k.needsUpdate=X.needsUpdate=it.needsUpdate=!0}function L(w){let E=Math.max(1,Math.ceil(w*60)),C=w/E;for(let A=0;A<E;A++){p+=C;for(let U of n)if(U.active){U.age+=C;for(let N of U.nodes)N.active&&(N.v.multiplyScalar(Math.exp(-C*.65)),N.v.y-=9.5*C,N.p.addScaledVector(N.v,C),N.p.y-N.r<=pe(N.p.x,N.p.z)&&(y(N.p.x,N.p.z,N.r*(N.segment===0?3:2.65),U.alien),N.active=!1))}for(let U of r)U.active&&(U.v.y-=9.8*C,U.p.addScaledVector(U.v,C),U.p.y<=pe(U.p.x,U.p.z)&&(y(U.p.x,U.p.z,U.radius*2.3,U.alien),U.active=!1));for(let U of o)if(U.active){U.age=p-U.born,U.refresh+=C;for(let N of U.blobs)N.age<.5&&(U.dirty=!0),N.age+=C}}for(let A of n)A.active&&b(A);for(let A=0;A<r.length;A++){let U=r[A];a.position.copy(U.p),a.quaternion.identity(),U.active?(Bn.copy(U.v).normalize(),a.quaternion.setFromUnitVectors(yy,Bn),a.scale.set(U.radius,U.radius*1.6,U.radius)):a.scale.setScalar(0),a.updateMatrix(),s.setMatrixAt(A,a.matrix)}s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0);for(let A of o)A.active&&(A.dirty&&A.refresh>=1/24&&(T(A),A.dirty=!1,A.refresh=0),A.mesh.position.y=-Tt.smoothstep(p,A.sinkAt,A.goneAt)*.04,p>=A.goneAt&&(A.active=!1,A.mesh.visible=!1))}function I(){p=0,m=0,n.forEach(w=>{w.active=!1,w.mesh.visible=!1}),o.forEach(w=>{w.active=!1,w.mesh.visible=!1,w.blobs.length=0,w.mesh.position.y=0}),r.forEach(w=>{w.active=!1}),L(0)}return I(),{blood:S,update:L,reset:I}}function My(){let i=[[0,.13],[.08,.24],[.22,.285],[.4,.235],[.58,.17],[.75,.11],[.9,.05],[1,0]],t=12,e=[],n=[],s=[],r=new yt("#c9ff9b"),o=new yt("#59df65"),a=new yt("#087b38"),c=new yt;for(let[h,[f,d]]of i.entries())for(let g=0;g<t;g++){let M=g*Math.PI*2/t,p=d*(1+.075*Math.sin(g*2.3+h));if(e.push(Math.cos(M)*p+f*f*.1,f,Math.sin(M)*p*.86),c.copy(r).lerp(o,Tt.smoothstep(f,.18,.64)).lerp(a,Tt.smoothstep(f,.64,1)),n.push(c.r,c.g,c.b),h===i.length-1)continue;let m=h*t+g,x=h*t+(g+1)%t;s.push(m,m+t,x,x,m+t,x+t)}let l=e.length/3;e.push(0,0,0),n.push(r.r,r.g,r.b);for(let h=0;h<t;h++)s.push(l,h,(h+1)%t);let u=new re;return u.setAttribute("position",new zt(e,3)),u.setAttribute("color",new zt(n,3)),u.setIndex(s),u.computeVertexNormals(),u}var Sy=My(),by=new Xi(1,1);function Pc(i,t,{smoke:e=!0}={}){let n=new Kt;n.name="\u7ACB\u4F53\u7EFF\u8272\u706B\u7130",i.add(n);let s={value:0},r=new we({vertexColors:!0,emissive:"#1b7432",emissiveIntensity:.45,transparent:!0,opacity:.86,depthWrite:!1});r.onBeforeCompile=u=>{u.uniforms.flameTime=s,u.vertexShader=`uniform float flameTime; varying float flameHeight;
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
      #include <tonemapping_fragment>`)},r.customProgramCacheKey=()=>"translucent-fire-v2";let o=new bn(Sy,r,t.length*3);o.frustumCulled=!1,n.add(o);let a=e?new bn(by,new we({color:"#71816c",transparent:!0,opacity:.19,depthWrite:!1}),t.length*2):null;a&&(a.frustumCulled=!1,n.add(a));let c=new Ce;function l(u,h){s.value=u,n.visible=h>.001;let f=Math.sqrt(Math.min(1,Math.max(0,h)/.12));r.opacity=.86*f;for(let d=0;d<o.count;d++){let g=t[Math.floor(d/3)],M=d%3,p=u*(4.3+M*.6)+d*1.83,m=(u*(1.15+M*.13)+d*.381)%1,x=M===0?1:.25+.75*Math.sin(m*Math.PI),y=(.53+h*.64)*(M===0?1:.73)*x,v=(.35+h*1.65)*(M===0?1:.55+M*.1)*(.82+Math.sin(p)*.18)*x*(.8+Math.sin(d*2.77)*.19);c.position.set(g[0]+(M-1)*.1*h,g[1]+(M===0?0:m*(.16+h*.38)),g[2]+Math.sin(d*2.39)*.08*h),c.rotation.set(.08*Math.sin(p*.7),d*2.399+Math.sin(p*.4)*.25,.06*Math.cos(p)),c.scale.set(y*f,v*f,y*f),c.updateMatrix(),o.setMatrixAt(d,c.matrix)}if(o.instanceMatrix.needsUpdate=!0,a){for(let d=0;d<a.count;d++){let g=t[Math.floor(d/2)],M=(u*.34+d*.618)%1,p=Math.sin(M*Math.PI)*(.09+h*.24+M*.24)*h;c.position.set(g[0]+M*M*.43,g[1]+.35+M*(1+h*2),g[2]+Math.sin(d*1.7)*M*.14),c.rotation.set(d*.7,u*.2+d,d*.17),c.scale.set(p*1.1,p,p),c.updateMatrix(),a.setMatrixAt(d,c.matrix)}a.instanceMatrix.needsUpdate=!0}}return l(0,0),{group:n,update:l}}var zf=new Xi(1,0),Ty={enemy:["#2d593b","#406b43","#254a35","#34573a","#d5dfb1"],villager:["#3b5970","#426881","#37566b","#caa366","#d6a578"],engineer:["#d47732","#e18a3d","#c96e31","#f2edd9","#d6a578"]},kf=new O,Vf=new Ye;function Gf(i){let t=new Kt;t.name="\u8840\u6D46\u4E0E\u7206\u6563\u788E\u7247",i.add(t);let e=Bf(t),n=new Ce,s=new bn(zf,new we({flatShading:!0}),480);s.name="\u6B7B\u4EA1\u788E\u7247",s.frustumCulled=!1,s.castShadow=!0,s.receiveShadow=!0;for(let f=0;f<s.count;f++)s.setColorAt(f,new yt("#2d593b"));t.add(s);let r=Array.from({length:s.count},()=>({active:!1,p:new O,q:new Ye,velocity:new O,axis:new O,size:new O,spin:0,settled:!1,restAge:0,hold:0,support:0,bounces:0})),o=0;function a(f,d){e.blood(f,d,!0);let g=f.kind==="enemy",M=f.group.position,p=g?23:19,m=Ty[f.team==="engineers"?"engineer":f.kind];for(let x=0;x<p;x++){let y=o++%r.length,v=r[y],S=Math.random()*Math.PI*2,b=x<4,_=x<11,T=(g?.109:.079)*(b?1:_?.66:.37)*(.85+Math.random()*.3);v.size.set(T*(.72+Math.random()*.6),T*(.7+Math.random()*.6),T*(.65+Math.random()*.7)),v.p.copy(M).add(new O(Math.cos(S)*.1,.13+Math.random()*(g?.39:.29),Math.sin(S)*.1));let L=(b?1.1:1.7)+Math.random()*1.6;v.velocity.set(Math.cos(S)*L+d.x*.6,1.5+Math.random()*(b?1.4:2.1),Math.sin(S)*L+d.y*.6),v.axis.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),v.axis.lengthSq()<.001&&v.axis.set(1,0,0),v.q.setFromAxisAngle(v.axis,Math.random()*Math.PI*2),v.spin=(3+Math.random()*7)*(Math.random()<.5?-1:1),v.active=!0,v.settled=!1,v.restAge=0,v.hold=2.5+Math.random()*1.3,v.bounces=0;let I=b?m[x%3]:m[(x+Math.floor(Math.random()*3))%m.length];s.setColorAt(y,new yt(I))}}function c(f){let d=zf.attributes.position,g=1/0;for(let M=0;M<d.count;M++)kf.fromBufferAttribute(d,M).multiply(f.size).applyQuaternion(f.q),g=Math.min(g,kf.y);return-g}function l(f){for(let d of r){if(!d.active)continue;let g=pe(d.p.x,d.p.z);if(d.settled){d.restAge+=f;let M=Tt.smoothstep(d.restAge,d.hold,d.hold+1.5);d.p.y=g+d.support-M*(d.support*2+.12),M===1&&(d.active=!1);continue}d.velocity.y-=f*8,d.p.addScaledVector(d.velocity,f),g=pe(d.p.x,d.p.z),Vf.setFromAxisAngle(d.axis,d.spin*f),d.q.premultiply(Vf),!(d.p.y>g+Math.max(d.size.x,d.size.y,d.size.z)*1.4)&&(d.support=c(d),d.p.y<=g+d.support&&(d.p.y=g+d.support,d.bounces++,d.velocity.y=Math.abs(d.velocity.y)*.2,d.velocity.x*=.42,d.velocity.z*=.42,d.spin*=.4,(d.velocity.y<.65||d.bounces>=2)&&(d.settled=!0)))}}function u(f){e.update(f);let d=Math.max(1,Math.ceil(f*60));for(let g=0;g<d;g++)l(f/d);for(let g=0;g<r.length;g++){let M=r[g];n.position.copy(M.p),n.quaternion.copy(M.q),n.scale.copy(M.size),M.active||n.scale.setScalar(0),n.updateMatrix(),s.setMatrixAt(g,n.matrix)}s.instanceMatrix.needsUpdate=!0,s.instanceColor.needsUpdate=!0}function h(){e.reset(),r.forEach(f=>{f.active=!1}),u(0)}return h(),{blood:e.blood,death:a,update:u,reset:h}}function Hf(i){let t=i.group,e=new Kt;e.name="\u9636\u6BB5\u6027\u7ED3\u6784\u574D\u584C",t.add(e),t.updateWorldMatrix(!0,!0);let n=t.matrixWorld.clone().invert(),s=[];t.traverse(m=>{m.isMesh&&m.userData.breakStage&&s.push(m)});let r=new O,o=new O(0,1,0),a=new fe,c=new Ye,l=new Ye,u=0,h=s.map((m,x)=>{a.multiplyMatrices(n,m.matrixWorld);let y=m.geometry.clone().applyMatrix4(a);y.computeBoundingBox();let v=y.boundingBox.getCenter(new O),S=y.boundingBox.getSize(new O);y.translate(-v.x,-v.y,-v.z),y.computeBoundingSphere();let b=new O;if(m.userData.roofPanel){let E=y.attributes.position,C=y.index,A=E.count/2,U=new O,N=new O,V=new O;for(let W=0;W<C.count;W+=3){let P=C.getX(W),B=C.getX(W+1),k=C.getX(W+2);P>=A||B>=A||k>=A||(U.fromBufferAttribute(E,P),N.fromBufferAttribute(E,B),V.fromBufferAttribute(E,k),b.add(r.crossVectors(N.sub(U),V.sub(U))))}}else{let E=y.attributes.normal;for(let C=0;C<E.count;C++)b.add(r.fromBufferAttribute(E,C))}b.lengthSq()<.01&&(S.x<S.y&&S.x<S.z?b.set(1,0,0):S.z<S.y?b.set(0,0,1):b.set(0,1,0)),b.normalize(),b.y<0&&b.negate();let _=new Ye().setFromUnitVectors(b,o);c.setFromAxisAngle(o,Math.sin(x*2.39)*.65),_.premultiply(c);let T=y.attributes.position,L=1/0;for(let E=0;E<T.count;E++)r.fromBufferAttribute(T,E).applyQuaternion(_),L=Math.min(L,r.y);let I=new ne(y,m.material);I.castShadow=!0,I.receiveShadow=!0,I.visible=!1,e.add(I);let w=m.userData.roofPanel&&m.userData.breakStage===1?{duration:.3,target:new O(v.x-.065,v.y,i.spec.d/2+y.boundingSphere.radius+.18)}:null;return{source:m,mesh:I,origin:v,rest:_,support:-L+.015,exit:w,threshold:m.userData.breakStage,age:0,falling:!1,velocity:new O,active:!1}});function f(m,x){let y=i.spec.x+m*Math.cos(i.spec.angle)+x*Math.sin(i.spec.angle),v=i.spec.z+x*Math.cos(i.spec.angle)-m*Math.sin(i.spec.angle),S=pe(y,v)-i.spec.floor;return Math.abs(m)<i.spec.w/2+.06&&Math.abs(x)<i.spec.d/2+.065?Math.max(.09,S):S}function d(){u=0,h.forEach(m=>{m.source.visible=!0,m.mesh.visible=!1,m.active=!1,m.falling=!1,m.age=0})}function g(m){let x=m.mesh.geometry.attributes.position,y=-1/0;for(let v=0;v<x.count;v++)r.fromBufferAttribute(x,v).applyQuaternion(m.mesh.quaternion),y=Math.max(y,f(m.mesh.position.x+r.x,m.mesh.position.z+r.z)-r.y+.018);return y}function M(m){m<u&&d(),m!==u&&(u=m,h.forEach((x,y)=>{if(x.threshold>u||x.active)return;x.source.visible=!1,x.mesh.position.copy(x.origin),x.mesh.quaternion.identity(),x.mesh.visible=!0,x.active=!0,x.falling=!0,x.age=0;let v=new O(x.origin.x,0,x.origin.z).normalize();x.velocity.copy(v).multiplyScalar(.22+y%3*.1),x.velocity.y=.25+y%4*.08}))}function p(m){let x=Math.max(1,Math.ceil(m*60)),y=m/x*.52;for(let v=0;v<x;v++)for(let S of h){if(!S.falling)continue;let b=S.exit?m/x:y;if(S.age+=b,S.exit&&S.age<=S.exit.duration){let L=Tt.smoothstep(S.age,0,S.exit.duration);S.mesh.position.lerpVectors(S.origin,S.exit.target,L),S.mesh.position.y-=L*.045,S.mesh.quaternion.identity(),S.velocity.set(0,0,.08);continue}let _=S.age-(S.exit?.duration??0);S.velocity.y-=b*(S.exit?9.8:7.5),S.mesh.position.addScaledVector(S.velocity,b),S.mesh.quaternion.slerpQuaternions(l,S.rest,Tt.smoothstep(_,0,S.exit?.35:.48));let T=f(S.mesh.position.x,S.mesh.position.z)+S.support;(S.mesh.position.y<T+.15||_>=1.25)&&(T=g(S)),(S.mesh.position.y<=T||_>=1.25)&&(S.mesh.quaternion.copy(S.rest),T=g(S),S.mesh.position.y=T,S.falling=!1)}}return d(),{setStage:M,update:p,reset:d}}function Wf(i){let{group:t,roof:e,door:n,planks:s,spec:r}=i,o={hp:$t.baseHp,maxHp:$t.baseHp,doorHp:$t.doorHits,open:0,destroyed:!1,burnSpeed:0,stage:0,invasions:0,extinguishers:0,replenishmentBlocked:!1},a={value:0},c=[];t.traverse(X=>{X.isMesh&&(X.material=X.material.clone(),X.material.onBeforeCompile=it=>{it.uniforms.houseBurn=a,it.vertexShader=`varying vec3 housePoint;
`+it.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 housePoint = position;`),it.fragmentShader=`varying vec3 housePoint; uniform float houseBurn;
`+it.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
          float scorch = sin(housePoint.x * 3.7 + housePoint.y * 4.1) * .16
            + sin(housePoint.z * 4.3 - housePoint.y * 5.2) * .14;
          float mask = smoothstep(.03, .92, houseBurn + scorch * houseBurn * .9);
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.035, .044, .029), mask * .96);`).replace("#include <tonemapping_fragment>",`
        gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(.026, .030, .018), mask * .75);
        #include <tonemapping_fragment>`)},X.material.customProgramCacheKey=()=>"burnt-house-v1",c.push({mesh:X,p:X.position.clone(),r:X.rotation.clone(),visible:X.visible}))});let l=Hf(i);t.updateMatrixWorld(!0);function u(X,it){let q=t.localToWorld(new O(X,0,it));return new nt(q.x,q.z)}let h=u(0,r.d/2+.82),f=u(0,r.d/2+.17),d=u(0,r.d/2-.28),g=new ne(new Tn(r.w+.1,r.h+.85,r.d+.12));g.position.y=(r.h+.85)/2,g.visible=!1,t.add(g);let M=new Kt;M.name="\u57FA\u5730\u65D7\u5E1C";let p=new O(.12,r.h+.76,-.01);M.position.copy(p),t.add(M);let m=ve(M,"#927248",0,.66,0,.043,1.37,.043);m.material=m.material.clone();let x=yc();x.mesh.position.y=1.28,x.mesh.scale.set(1.5,1.65,1.5),M.add(x.mesh);let y=[[-r.w*.4,.15,r.d*.42],[r.w*.39,.13,r.d*.41],[-r.w*.43,.45,-r.d*.2],[r.w*.42,.35,-r.d*.3],[0,.23,r.d/2+.04],[-.74,r.h+.12,.31],[.78,r.h+.08,-.28],[.13,r.h+.44,.06]],v=y.slice(5).map(X=>X[1]),S=Pc(t,y),b=[.32,.72,1.1].map((X,it)=>{let q=Pc(M,[[0,0,0]],{smoke:!1});return q.group.position.set(0,X,0),q.group.scale.setScalar(.2+it*.025),q}),_=["#927248","#74563b","#51422e","#302f23","#171e16"],T=new Kt;n.add(T);for(let X=0;X<4;X++){let it=ve(T,"#342c22",.1+X*.1,.23+X%2*.13,.03,.012,.22+X%2*.12,.008,!1);it.rotation.z=X%2?.42:-.34}let L=new Kt;t.add(L);for(let X=0;X<5;X++){let it=ve(L,"#614a32",-.28+X*.14,.05,r.d/2+.26+X%2*.16,.105,.035,.48);it.rotation.y=(X-2)*.39}let I=[g,x.mesh],w=0,E=0,C=0,A=0;function U(X=.6){w=Math.max(w,X)}function N(){o.destroyed||o.doorHp<=0||(o.doorHp--,E=.18)}function V(X){return o.destroyed||!X.active||X.consumed?!1:(X.consumed=!0,X.active=!1,X.inside=!1,X.mode="consumed",X.group.visible=!1,o.burnSpeed=Math.min($t.burnSpeedCap,o.burnSpeed+1),o.invasions++,!0)}function W(X=1){if(o.destroyed)return 0;let it=Math.min(o.burnSpeed,Math.max(0,Math.floor(X)));return o.burnSpeed-=it,it}function P(X){o.destroyed||(o.hp=Math.max(0,o.hp-o.burnSpeed*$t.burnPerInvader*X),o.hp===0&&(o.destroyed=!0,o.doorHp=0,A=0)),w=Math.max(0,w-X),o.open=Tt.damp(o.open,w>0?1:0,10,X)}function B(X,it){let q=1-o.hp/o.maxHp;o.stage=o.destroyed?4:q>=.75?3:q>=.5?2:q>=.25?1:0,a.value=[0,.16,.32,.52,.9][o.stage],l.setStage(o.stage),l.update(it),E=Math.max(0,E-it),n.rotation.y=-o.open*1.55+Math.sin(E*110)*E*.3,n.visible=o.doorHp>0,T.visible=o.doorHp<$t.doorHits,T.children.forEach((ut,gt)=>{ut.visible=gt<($t.doorHits-o.doorHp)*2}),s.forEach((ut,gt)=>{ut.rotation.z=o.doorHp===1?gt%2?-.08:.11:0,ut.position.y=.3-(o.doorHp===1&&gt===2?.075:0),ut.visible=!(o.doorHp===1&&gt===3)}),L.visible=o.doorHp===0,y.slice(5).forEach((ut,gt)=>{ut[1]=o.stage<2?v[gt]:o.stage===2?r.h*.8:o.stage===3?.3:.12}),C=Tt.damp(C,o.destroyed?1:o.burnSpeed>0?[.3,.42,.6,.84][o.stage]*(.28+.72*Math.sqrt(o.burnSpeed/$t.burnSpeedCap)):0,2.4,it),S.update(X,C*(o.destroyed?Math.max(.18,1-A/12):1)),o.destroyed&&(A+=it);let $=Tt.smoothstep(A,.15,1.6),ot=u(.38,r.d/2+.45);M.position.set(Tt.lerp(p.x,.38,$),Tt.lerp(p.y,pe(ot.x,ot.y)-r.floor+.075,$),Tt.lerp(p.z,r.d/2+.45,$)),M.rotation.x=$*Math.PI/2,m.material.color.set(_[o.stage]);let ct=Math.min(1,C*3);x.setBurn(q*.7+Tt.smoothstep(A,1.7,4.5)*.85,ct),M.visible=A<4.7,b.forEach((ut,gt)=>{ut.group.rotation.x=-M.rotation.x,ut.update(X+gt*.7,o.stage>0?Math.min(.65,q*.5+A*.08)*ct:0)}),x.mesh.updateWorldMatrix(!0,!1),x.animate(X,it,x.mesh.matrixWorld)}function k(){Object.assign(o,{hp:$t.baseHp,maxHp:$t.baseHp,doorHp:$t.doorHits,open:0,destroyed:!1,burnSpeed:0,stage:0,invasions:0,extinguishers:0,replenishmentBlocked:!1}),w=0,E=0,C=0,A=0,a.value=0,l.reset(),c.forEach(({mesh:X,p:it,r:q,visible:$})=>{X.position.copy(it),X.rotation.copy(q),X.visible=$}),e.position.set(0,0,0),e.rotation.set(0,0,0),M.position.copy(p),M.rotation.set(0,0,0),M.visible=!0,x.reset(),B(0,0)}return k(),{group:t,state:o,approach:h,entrance:f,inside:d,targets:I,strikeDoor:N,keepDoorOpen:U,enter:V,extinguish:W,advance:P,animate:B,reset:k}}function co(i){let e=(o,a)=>`${o},${a}`;function n(o,a){let c=o.distanceTo(a),l=Math.max(1,Math.ceil(c/.1)),u=pe(o.x,o.y);for(let h=0;h<=l;h++){let f=h/l,d=o.x+(a.x-o.x)*f,g=o.y+(a.y-o.y)*f,M=pe(d,g);if(!i(d,g)||Math.abs(M-u)>.18)return!1;u=M}return!0}function s(o){let a=Math.round(o.x/.25),c=Math.round(o.y/.25),l=[];for(let u=-2;u<=2;u++)for(let h=-2;h<=2;h++){let f=new nt((a+u)*.25,(c+h)*.25);i(f.x,f.y)&&n(o,f)&&l.push(f)}return l.sort((u,h)=>u.distanceToSquared(o)-h.distanceToSquared(o))[0]}function r(o,a){if(n(o,a))return[a.clone()];let c=s(o),l=s(a);if(!c||!l)return null;let u=Math.floor((Math.min(o.x,a.x)-3)/.25),h=Math.ceil((Math.max(o.x,a.x)+3)/.25),f=Math.floor((Math.min(o.y,a.y)-3)/.25),d=Math.ceil((Math.max(o.y,a.y)+3)/.25),g=e(Math.round(l.x/.25),Math.round(l.y/.25)),M=e(Math.round(c.x/.25),Math.round(c.y/.25)),p=new Set([M]),m=new Map([[M,{p:c,cost:0,parent:null}]]),x=new Set;for(;p.size;){let y,v=1/0;for(let T of p){let L=m.get(T),I=L.cost+L.p.distanceTo(l);I<v&&(y=T,v=I)}if(y===g){let T=[a.clone()];for(let w=y;w;w=m.get(w).parent)T.unshift(m.get(w).p);let L=[],I=o;for(;T.length;){let w=T.length-1;for(;w>0&&!n(I,T[w]);)w--;I=T[w],L.push(I),T.splice(0,w+1)}return L}p.delete(y),x.add(y);let S=m.get(y),b=Math.round(S.p.x/.25),_=Math.round(S.p.y/.25);for(let T=-1;T<=1;T++)for(let L=-1;L<=1;L++){if(!T&&!L)continue;let I=b+T,w=_+L,E=e(I,w);if(I<u||I>h||w<f||w>d||x.has(E))continue;let C=new nt(I*.25,w*.25);if(!n(S.p,C))continue;let A=S.cost+S.p.distanceTo(C);A>=(m.get(E)?.cost??1/0)||(m.set(E,{p:C,cost:A,parent:y}),p.add(E))}}return null}return{clear:n,route:r}}function Xf({squad:i,world:t,base:e,spawn:n,defenders:s=[]}){let r=new nt(n.x,n.z),o={mode:"field",destination:null,settled:n,revision:0},a=co(t.canServiceWalk),c=co((C,A)=>t.canServiceWalk(C,A)&&!s.some(U=>U.hp>0&&!U.inside&&Math.hypot(C-U.p.x,A-U.p.y)<.34)),l=(C,A)=>c.route(C,A)??a.route(C,A),u=new Map,h=new Map,f=new nt,d=new nt,g=new nt,M=new nt,p=new nt,m=new nt,x=new nt,y=new nt,v=!1,S=()=>i.members.filter(C=>C.hp>0);function b(){v=!1,u.clear(),h.clear(),e.state.extinguishers=0,e.state.replenishmentBlocked=!1,o.mode="field",o.destination=null,o.revision++;for(let A of i.members)A.working=!1,A.workProgress=0,A.workTime=0;let C=[...t.tiles.values()].sort((A,U)=>Math.hypot(A.x-r.x,A.z-r.y)-Math.hypot(U.x-r.x,U.z-r.y))[0];o.settled=C??n}function _(C){for(let A of i.members)A.working=!1,A.workProgress=0,A.workTime=0,A.swing=-1,A.ready=0,A.combatHold=!1,A.serviceReroute=0;for(let[A,U]of C)u.set(A,U.map(N=>N.clone()))}function T(C){if(!C||!S().length||e.state.destroyed)return!1;let A=new nt(C.x-r.x,C.z-r.y).normalize();A.lengthSq()<.01&&A.set(0,1);let U=[];for(let[N,V]of S().entries()){let W=N===0?[0,0]:[N===1?-.31:.31,-.25],P=new nt(C.x+W[0]*A.y+W[1]*A.x,C.z-W[0]*A.x+W[1]*A.y),B=l(V.p,P)??l(V.p,new nt(C.x,C.z));if(!B)return!1;U.push([V,B])}return b(),_(U),o.mode="moving",o.destination=C,o.revision++,!0}function L(){if(e.state.destroyed||e.state.burnSpeed<=0||!S().length)return!1;if(v)return!0;let{w:C,d:A}=t.home.spec;e.group.updateWorldMatrix(!0,!1);let U=[[-C/2-.32,0],[C/2+.32,0],[0,A/2+.53]].map(([W,P])=>{let B=e.group.localToWorld(new O(W,0,P));return new nt(B.x,B.z)}),N=[],V=new Map;for(let W of S()){let P=U.slice().sort((k,X)=>k.distanceToSquared(W.p)-X.distanceToSquared(W.p)),B=null;for(let k of P){let X=l(W.p,k);if(X){B={site:k,route:X};break}}if(!B)return!1;N.push([W,B.route]),V.set(W,B.site),U.splice(U.indexOf(B.site),1)}b(),_(N);for(let[W,P]of V)h.set(W,P);return v=!0,o.mode="approaching",o.destination=null,o.revision++,e.state.replenishmentBlocked=!0,!0}function I(C,A){let U=u.get(C)??[];if(C.serviceReroute=Math.max(0,(C.serviceReroute??0)-A),U.length&&C.serviceReroute===0&&!c.clear(C.p,U[0])){let V=c.route(C.p,U.at(-1));V&&U.splice(0,U.length,...V),C.serviceReroute=.35}for(;U.length&&C.p.distanceTo(U[0])<.045;)U.shift();if(!U.length||C.combatHold)d.set(0,0);else{f.subVectors(U[0],C.p),d.copy(f).setLength(Math.min(2.55,f.length()*7)),p.copy(f).normalize();let V=null,W=1/0;for(let P of[...i.members,...s]){if(P===C||P.hp<=0||P.inside)continue;m.subVectors(P.p,C.p);let B=m.dot(p),k=m.x*p.y-m.y*p.x;B>-.06&&B<.78&&Math.abs(k)<.38&&m.lengthSq()<W&&(W=m.lengthSq(),V={along:B,lateral:k})}if(V){let P=Math.abs(V.lateral)>.02?-Math.sign(V.lateral):C.index%2?1:-1;x.set(p.y,-p.x).multiplyScalar(P),y.copy(C.p).addScaledVector(x,.24),t.canServiceWalk(y.x,y.y)||x.negate(),d.addScaledVector(x,1.2+(.78-V.along)*2).clampLength(0,2.55)}}C.velocity.lerp(d,1-Math.exp(-A*15)),g.copy(C.p).addScaledVector(C.velocity,A);for(let V of S()){if(V===C)continue;M.subVectors(g,V.p);let W=M.length();W>.001&&W<.27&&g.copy(V.p).addScaledVector(M,.27/W)}a.clear(C.p,g)||(g.copy(C.p),C.velocity.set(0,0));let N=A?g.distanceTo(C.p)/A:0;return C.p.copy(g),C.moving=N>.1,{arrived:U.length===0&&C.velocity.length()<.12,speed:N}}function w(C){v&&(e.state.destroyed||e.state.burnSpeed===0||!S().length)&&b();let A=0;for(let N of i.members){if(N.hp<=0){N.working=!1,N.workProgress=0,u.delete(N);continue}let{arrived:V,speed:W}=I(N,C);if(N.working=!!(v&&V&&!N.combatHold&&e.state.burnSpeed>0),N.working)for(A++,N.workTime+=C,N.workProgress+=C;N.workProgress+1e-9>=$t.extinguishSeconds&&e.state.burnSpeed>0;)e.extinguish(1),N.workProgress-=$t.extinguishSeconds;let P=h.get(N);N.working&&P?f.set(e.group.position.x-N.p.x,e.group.position.z-N.p.y):N.velocity.lengthSq()>.005?f.copy(N.velocity):f.set(Math.sin(N.unit.rotation.y),Math.cos(N.unit.rotation.y)),i.poseMember(N,W,C,f)}let U=i.members[0];U.hp>0&&r.copy(U.p),v?(e.state.extinguishers=A,e.state.burnSpeed===0?b():o.mode=A?"extinguishing":"approaching"):o.mode==="moving"&&!u.get(U)?.length&&(o.settled=o.destination,o.destination=null,o.mode="field",o.revision++)}function E(){b(),r.set(n.x,n.z),i.reset(r),o.mode="field",o.destination=null,o.settled=n}return E(),{anchor:r,state:o,orderMove:T,orderExtinguish:L,update:w,reset:E,cancel:b,service:a,get working(){return v}}}function qf({world:i,navigation:t,squad:e,waves:n,base:s,effects:r,spawn:o,engineers:a=null,engineerSpawn:c=o}){let l=new nt(o.x,o.z),u=Cf(l),h={mode:"field",result:null,resultAge:0,settled:o,destination:null,replenish:0,kills:0,message:"",revision:0},f=a?Xf({squad:a,world:i,base:s,spawn:c,defenders:e.members}):null,d=f?.service??co(i.canServiceWalk),g=new Set([o]),M=[o];for(let z=0;z<M.length;z++)for(let J of M[z].neighbors)g.has(J)||(g.add(J),M.push(J));let p=[...g],m=p.reduce((z,J)=>Math.hypot(J.x-s.approach.x,J.z-s.approach.y)<Math.hypot(z.x-s.approach.x,z.z-s.approach.y)?J:z),x=new nt(m.x,m.z),y=new nt,v=new nt,S=new nt,b=new nt,_=new nt,T={},L=0,I=0,w=0,E=0,C=new Map,A=null,U=null,N=()=>e.members.filter(z=>z.hp>0),V=()=>a?.members.filter(z=>z.hp>0)??[],W=()=>[...N(),...V()],P=()=>W().filter(z=>!z.inside),B=()=>n.actors.filter(z=>z.active&&!z.inside);function k(){h.revision++}function X(z){if(h.result||!z||!g.has(z)||!N().length)return!1;if(["entering","recovering","exiting"].includes(h.mode))return U=z,ot();let J=t.route(l,new nt(z.x,z.z));if(!J)return!1;e.beginOrder(l),u.setRoute(J),h.destination=z,h.mode="moving";for(let mt of N())mt.swing=-1,mt.ready=0,mt.combatHold=!1,mt.battleStep.set(0,0);return k(),!0}function it(){if(h.result||s.state.destroyed||!N().length)return!1;if(["entering","recovering","exiting"].includes(h.mode))return ot();if(s.state.replenishmentBlocked)return!1;let z=new Map;for(let J of N()){let mt=d.route(J.p,s.approach);if(!mt)return!1;z.set(J,[...mt,s.entrance,s.inside])}return q(z),h.mode="returning",!0}function q(z){h.mode="entering",h.destination=null,h.replenish=0,E=0,C=new Map(N().map((J,mt)=>[J,{stage:0,delay:mt*.16,route:z.get(J)}])),u.setRoute([]);for(let J of N())J.swing=-1,J.ready=0,J.combatHold=!1,J.working=!1;k()}function $(){let z=B();return p.filter(J=>!z.some(mt=>mt.p.distanceTo(new nt(J.x,J.z))<.9)).sort((J,mt)=>Math.hypot(J.x-s.entrance.x,J.z-s.entrance.y)-Math.hypot(mt.x-s.entrance.x,mt.z-s.entrance.y))[0]}function ot(){return h.result||!N().length||s.state.destroyed?!1:(h.mode==="exiting"||(h.replenish=0,h.mode="exiting",A=$(),E=0,C=new Map(N().map((z,J)=>[z,{stage:z.inside?0:1,delay:J*.23}])),k()),!0)}function ct(z,J,mt){y.subVectors(J,z.p);let Lt=y.length();z.stowed=z.p.distanceTo(s.entrance)<.78,v.copy(y).setLength(Math.min(2.35,Lt*8)),z.velocity.lerp(v,1-Math.exp(-mt*14)),S.copy(z.p).addScaledVector(z.velocity,mt),!z.stowed&&!d.clear(z.p,S)&&(z.velocity.copy(v),S.copy(z.p).addScaledVector(z.velocity,mt));let At=mt?z.p.distanceTo(S)/mt:0;return z.p.copy(S),z.moving=At>.08,e.poseMember(z,At,mt,y),Lt<.055}function ut(z){if(E+=z,h.mode==="exiting"&&!A){if(A=$(),!A){h.message="\u51FA\u53E3\u88AB\u5835\uFF0C\u6B63\u5728\u5BFB\u627E\u7A7A\u5730";return}h.message=""}let J=N().some(At=>!At.inside&&At.p.distanceTo(s.entrance)<1.1);(J||h.mode==="exiting")&&s.keepDoorOpen(),J&&h.mode==="returning"&&(h.mode="entering",k());let mt=!0,Lt=0;for(let At of N()){let G=C.get(At);if(!G||E<G.delay){mt=!1;continue}let Yt=h.mode!=="exiting",Wt=A&&new nt(A.x,A.z),Xt=!Yt&&e.standPoint(Wt,Lt++,new nt);if(!Yt&&!G.exitRoute){let jt=d.route(At.inside?s.approach:At.p,Xt)??[Xt];G.route=At.inside?[s.entrance,s.approach,...jt]:jt,G.stage=0,G.exitRoute=!0}!Yt&&G.stage===0&&At.inside&&(At.p.copy(s.inside),At.inside=!1,At.unit.visible=!0);let ft=G.route;G.stage<ft.length&&ct(At,ft[G.stage],z)&&G.stage++,G.stage<ft.length?mt=!1:Yt&&(At.inside=!0,At.unit.visible=!1)}if(e.members[0].inside||l.copy(e.members[0].p),!!mt){if(h.message="",h.mode!=="exiting")h.mode="recovering",h.replenish=0;else if(l.set(A.x,A.z),h.settled=A,h.mode="field",e.beginOrder(l),U){let At=U;U=null,X(At)}k()}}function gt(z,J,mt){function Lt(Xt,ft,jt=!1){if(Xt.hp<=0||ft<=0)return 0;let Bt=Math.min(ft,Math.max(0,Xt.hp-Number(jt)));return Bt?(Xt.hp-=Bt,Xt.lastHurt=L,Xt.lastFight=L,Xt.recoil=.22,Xt.hp<=0?(r.death(Xt,mt),Xt.unit.visible=!1,Xt.swing=-1,Xt.working=!1,k()):r.blood(Xt,mt),Bt):0}let At=z.team==="engineers"?V:N;if(z.index!==0||At().length===1){Lt(z,J);return}let G=At(),Yt=J/G.length,Wt=J;for(let Xt of G.slice(1))Wt-=Lt(Xt,Yt);for(Wt-=Lt(z,Yt,At().length>1);Wt>.001;){let Xt=At().filter(Bt=>Bt.index!==0);if(!Xt.length){Lt(z,Wt);break}let ft=Wt/Xt.length,jt=0;for(let Bt of Xt)jt+=Lt(Bt,ft);if(jt<.001)break;Wt-=jt}}function Ot(z,J,mt,Lt=null){z.active&&(z.hp-=J,z.lastAttacker=Lt,z.stun=.09,z.hp<=0?(r.death(z,mt),n.kill(z),h.kills++,k()):r.blood(z,mt))}function Ct(z,J,mt,Lt){let At=J.anchor,G=J.state,Yt=z.members.filter(F=>F.hp>0),Wt=B(),Xt=Wt.slice().sort((F,R)=>F.p.distanceToSquared(At)-R.p.distanceToSquared(At))[0],ft=F=>{let R=G.destination,K=Pe*.5+(F.combatHold?.08:0);return G.mode==="moving"&&R&&Math.abs(F.p.x-R.x)<=K&&Math.abs(F.p.y-R.z)<=K},jt=G.mode==="moving"&&Yt.some(ft),Bt=G.mode==="approaching"||G.mode==="extinguishing",Zt=Xt&&Xt.p.distanceTo(At)<3.1&&(G.mode==="field"||jt||Bt);Lt=Zt?Lt+mt:0,Zt&&z.faceThreat(y.subVectors(Xt.p,At).normalize());for(let F of Yt){F.cooldown=Math.max(0,F.cooldown-mt),F.recoil=Math.max(0,F.recoil-mt),F.battleStep.set(0,0);let R=F.inside?null:Wt.slice().sort((rt,xt)=>rt.p.distanceToSquared(F.p)-xt.p.distanceToSquared(F.p))[0];F.targetEnemy=R;let K=!F.inside&&(G.mode==="field"||ft(F)||Bt),Y=R?R.p.distanceTo(F.p):1/0,Q=Y<F.attackReach,lt=K&&R&&(Q||Zt&&Lt>F.slot*.075);F.ready=Tt.damp(F.ready,lt?1:0,9,mt),F.combatHold=!!(K&&!F.inside&&R?.active&&F.ready>.1&&(Q||F.swing>=0&&Y<F.attackReach+.12)),F.canEngage=!!K,lt&&R&&(F.lastFight=L,F.combatFace.subVectors(R.p,F.p).normalize(),!F.inside&&Y<1.18&&F.battleStep.copy(F.combatFace).multiplyScalar(Math.min(.22,Math.max(0,Y-.58))));let pt=R&&(F.inside||R.p.distanceTo(F.p)<2.2),tt=F.team!=="engineers"||G.mode==="field"&&!F.moving;!pt&&tt&&L-Math.max(F.lastFight,F.lastHurt)>F.recoveryDelay&&(F.hp=Math.min(F.maxHp,F.hp+F.recoveryRate*mt))}return Lt}function It(z){I=Ct(e,{anchor:l,state:h},z,I),a&&(w=Ct(a,f,z,w))}function kt(z){for(let J of W()){let mt=J.targetEnemy,Lt=J.canEngage;if(J.swing<0&&mt?.active&&Lt&&J.ready>.45&&J.cooldown===0&&mt.p.distanceTo(J.p)<J.attackReach&&(J.swing=0,J.hit=!1,J.cooldown=J.attackInterval,J.strikeTarget=mt),!(J.swing<0)){if(J.swing+=z,!J.hit&&J.swing>=.29){J.hit=!0;let At=J.strikeTarget;At?.active&&At.p.distanceTo(J.p)<J.attackReach+.12&&(_.subVectors(At.p,J.p).normalize(),_.lengthSq()===0&&_.set(0,1),Ot(At,J.damage,_,J))}J.swing>=.7&&(J.swing=-1)}}}function dt(z,J,mt){if(y.subVectors(J,z.p),y.lengthSq()<1e-4)return 0;y.normalize(),v.copy(y).multiplyScalar(z.speed*Tt.smoothstep(z.age,0,.42));for(let At of n.actors){if(At===z||!At.active||At.inside)continue;b.subVectors(z.p,At.p);let G=b.length(),Yt=(z.radius+At.radius)*.9+.02;G>0&&G<Yt+.16&&(v.addScaledVector(b,(Yt+.16-G)*2.5/G),b.dot(y)<0&&G<Yt+.2&&(v.x+=y.y*(z.index%2?-.55:.55),v.y-=y.x*(z.index%2?-.55:.55)))}v.clampLength(0,z.speed),z.velocity.lerp(v,1-Math.exp(-mt*10)),S.copy(z.p).addScaledVector(z.velocity,mt);for(let At=0;At<3;At++){for(let G of n.actors){if(G===z||!G.active||G.inside)continue;let Yt=(z.radius+G.radius)*.9+.02;b.subVectors(S,G.p);let Wt=b.length();Wt>1e-4&&Wt<Yt&&S.copy(G.p).addScaledVector(b,Yt/Wt)}for(let G of P()){b.subVectors(S,G.p);let Yt=b.length();Yt>1e-4&&Yt<.51&&S.copy(G.p).addScaledVector(b,.51/Yt)}}if(z.mode==="base"&&!t.clear(z.p,S))return 0;let Lt=z.p.distanceTo(S);return z.p.copy(S),Lt}function St(z,J){if(!z.active||(z.age+=J,z.cooldown=Math.max(0,z.cooldown-J),z.repathTimer=Math.max(0,z.repathTimer-J),z.stun=Math.max(0,(z.stun??0)-J),z.inside))return;if(z.mode==="enter"){z.group.scale.y=z.group.scale.x*.88,y.subVectors(s.inside,z.p);let ft=y.length(),jt=Math.min(ft,J*2);ft>.001&&z.p.addScaledVector(y,jt/ft),z.group.rotation.y=Math.atan2(y.x,y.y),z.group.position.set(z.p.x,pe(z.p.x,z.p.y)+.015,z.p.y),z.pose(jt,J),ft<.075&&s.enter(z);return}if(z.mode==="road"&&(Ac(z.side,z.roadDistance+.35,T,z.lane),v.set(T.x,T.z),g.has(t.tileAt(z.p)))){let ft=t.route(z.p,x,.1,!1);ft&&(z.mode="base",z.route=ft,z.routeIndex=0)}if(z.mode==="base"){let ft=z.route[z.routeIndex];if(ft&&z.repathTimer===0&&!t.clear(z.p,ft)){let jt=t.route(z.p,x,.08,!1);jt&&(z.route=jt,z.routeIndex=0),z.repathTimer=.35}for(;z.routeIndex<z.route.length;){let jt=z.p.distanceTo(z.route[z.routeIndex]),Zt=z.routeIndex===z.route.length-1?jt<.5:jt<.28&&t.clear(z.p,z.route[z.routeIndex+1]);if(jt>=.1&&!Zt)break;z.routeIndex++}v.copy(z.route[z.routeIndex]??s.approach),z.routeIndex>=z.route.length&&(z.mode="door")}z.mode==="door"&&v.copy(s.entrance);let mt=v.clone();y.subVectors(mt,z.p).normalize();let Lt=null,At=1/0;for(let ft of P()){b.subVectors(ft.p,z.p);let jt=b.length(),Bt=b.dot(y),Zt=Math.abs(b.x*y.y-b.y*y.x),F=z.lastAttacker===ft&&jt<1.1;jt<1.25&&jt<At&&(Bt>-.12&&Zt<.52||F)&&(Lt=ft,At=jt)}z.target=Lt;let G=0,Yt=z.mode==="door"&&z.p.distanceTo(s.entrance)<.78,Wt=s.state.doorHp>0&&s.state.open<.7;if(z.swing<0&&z.cooldown===0&&z.stun===0&&(Lt&&At<$t.enemyReach||!Lt&&Yt&&Wt)&&(z.swing=0,z.hit=!1,z.cooldown=$t.enemyAttack,z.strikeTarget=Lt??"door"),z.swing>=0){if(z.swing+=J,!z.hit&&z.swing>=.34){z.hit=!0;let ft=z.strikeTarget;ft==="door"?!s.state.destroyed&&s.state.open<.7&&s.strikeDoor():ft?.hp>0&&!ft.inside&&z.p.distanceTo(ft.p)<$t.enemyReach+.14&&gt(ft,$t.enemyDamage,_.subVectors(ft.p,z.p).normalize())}z.swing>=.76&&(z.swing=-1)}else if(z.stun===0){let ft=Lt?Lt.p:mt;(!Lt||At>$t.enemyReach*.95)&&!(Yt&&Wt&&!Lt)&&(G=dt(z,ft,J)),z.mode==="road"&&(z.roadDistance+=G)}if(z.mode==="door"&&!Lt)if(Wt){b.subVectors(s.approach,s.inside).normalize();let ft=y.subVectors(z.p,s.entrance).dot(b);ft<.4&&z.p.addScaledVector(b,.4-ft)}else z.p.distanceTo(s.entrance)<.85&&!n.actors.some(ft=>ft.active&&!ft.inside&&ft.mode==="enter")&&(z.mode="enter",z.swing=-1);let Xt=Lt?_.subVectors(Lt.p,z.p):y.subVectors(mt,z.p);if(Xt.lengthSq()>1e-4){let ft=Math.atan2(Xt.x,Xt.y),jt=Math.atan2(Math.sin(ft-z.group.rotation.y),Math.cos(ft-z.group.rotation.y));z.group.rotation.y+=jt*(1-Math.exp(-J*12))}z.group.position.set(z.p.x,pe(z.p.x,z.p.y)+.015,z.p.y),z.pose(G,J,z.swing)}function _t(z){if(L+=z,!h.result){if(n.update(z),It(z),h.mode==="moving"){let J=e.members[0].combatHold;J&&u.pause(z);let mt=J?!1:u.advance(z);e.follow(l,mt,z),!J&&!mt&&(h.settled=h.destination,h.destination=null,h.mode="field",k())}else h.mode==="field"?e.follow(l,!1,z):(h.mode==="returning"||h.mode==="entering"||h.mode==="exiting")&&ut(z);if(f?.update(z),a)for(let J of V())for(let mt of N()){if(mt.inside)continue;b.subVectors(J.p,mt.p);let Lt=b.length();Lt<.27&&Lt>.001&&(S.copy(mt.p).addScaledVector(b,.27/Lt),f.service.clear(J.p,S)&&(J.p.copy(S),J.unit.position.set(S.x,pe(S.x,S.y),S.y)))}for(let J of n.actors)St(J,z);if(kt(z),s.advance(z),h.mode==="recovering"&&N().length>0&&!s.state.destroyed&&!s.state.replenishmentBlocked){for(let J of N())J.hp=Math.min($t.villagerHp,J.hp+$t.indoorRecoveryRate*z);if(N().length<$t.squadSize){if(h.replenish+=z,h.replenish>=$t.replenishSeconds){let J=e.members.find(mt=>mt.hp<=0);J.hp=$t.villagerHp,J.inside=!0,J.unit.visible=!1,J.p.copy(s.inside),J.unit.position.set(s.inside.x,pe(s.inside.x,s.inside.y),s.inside.y),J.swing=-1,J.ready=0,J.stains.clear(),h.replenish-=$t.replenishSeconds,k()}}else h.replenish=0;N().length===$t.squadSize&&N().every(J=>J.hp>=$t.villagerHp-.01)&&ot()}if(s.state.destroyed){for(let J of N().filter(mt=>mt.inside&&mt.index!==0))gt(J,$t.villagerHp,_.set(0,1));e.members[0].inside&&e.members[0].hp>0&&gt(e.members[0],1e3,_.set(0,1)),f?.cancel(),h.result="lost",k()}else n.state.complete&&(f?.cancel(),h.result="won",k())}}function Dt(z){if(z<=0){s.animate(L,0),r.update(0),e.animateFlag(L,0),a?.animateFlag(L,0);return}let J=Math.max(1,Math.ceil(z*60));for(let mt=0;mt<J;mt++)_t(z/J);h.result&&(h.resultAge+=z),s.animate(L,z),r.update(z),e.animateFlag(L,z),a?.animateFlag(L,z)}function Mt(){L=0,I=0,w=0,E=0,U=null,A=null,C.clear(),Object.assign(h,{mode:"field",result:null,resultAge:0,settled:o,destination:null,replenish:0,kills:0,message:""}),l.set(o.x,o.z),u.setRoute([]),e.reset(l),s.reset(),n.reset(),r.reset(),f?.reset(),k()}return Mt(),{anchor:l,state:h,reachable:g,orderMove:X,orderReturn:it,leaveBase:ot,update:Dt,reset:Mt,hurtVillager:gt,hurtEnemy:Ot,engineerOrders:f}}function Yf({reducedMotion:i=!1}={}){let t={active:!1,progress:0,focus:0,timeScale:1,elapsed:0},e={value:0},n={value:new nt},s=new nt,r={value:Number(i)},o=.12;function a(h,f){t.active=h,h&&f&&(s.copy(f),t.progress===0&&n.value.copy(f))}function c(h,f=!1){let d=i?.12:t.active?.26:.25;t.progress=Tt.clamp(t.progress+(t.active?1:-1)*h/d,0,1),e.value=t.progress,n.value.lerp(s,1-Math.exp(-h*16));let g=t.active?o:1,M=t.active?20:16,p=Math.exp(-M*h),m=t.timeScale,x=g*h+(m-g)*(1-p)/M;return t.timeScale=g+(m-g)*p,Math.abs(t.timeScale-g)<5e-5&&(t.timeScale=g),t.focus=Tt.clamp((1-t.timeScale)/(1-o),0,1),t.elapsed+=f?0:x,f?0:x}function l(h){return h.onBeforeCompile=f=>{Object.assign(f.uniforms,{deployProgress:e,deployOrigin:n,deployReduced:r}),f.vertexShader=`attribute vec3 deployCenter;
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
          if (diffuseColor.a < .003) discard;`)},h.customProgramCacheKey=()=>"deploy-grid-transition-v1",h}function u(){Object.assign(t,{active:!1,progress:0,focus:0,timeScale:1,elapsed:0}),e.value=0}return{state:t,setActive:a,update:c,tileMaterial:l,reset:u}}var Lc=(i,t,e,n)=>`<svg class="${n}" viewBox="0 0 ${t} ${e}" preserveAspectRatio="none" aria-hidden="true">${i}</svg>`,ti=i=>i.map(([t,e],n)=>`${n?"L":"M"}${t.toFixed(2)} ${e.toFixed(2)}`).join(" ")+"Z";function Pi(i,t=1.6){let e=i.map(([n,s],r)=>{let o=i[(r+i.length-1)%i.length],a=i[(r+1)%i.length],c=[n-o[0],s-o[1]],l=[a[0]-n,a[1]-s],u=Math.hypot(...c),h=Math.hypot(...l),f=[-c[1]/u-l[1]/h,c[0]/u+l[0]/h],d=Math.hypot(...f),g=f[0]/d,M=f[1]/d,m=t*(.82+.2*Math.sin(r*1.9)+.12*Math.cos(r*.7))/Math.max(.38,g*-l[1]/h+M*l[0]/h);return[n+g*m,s+M*m]});return`<path d="${ti(i)} ${ti(e.reverse())}" fill="var(--ink)" fill-rule="evenodd"/>`}function wy(i,t){let e=[[8,1.8],[i*.38,.7],[i-9,1.9],[i-1.5,9],[i-.8,t*.54],[i-1.8,t-9],[i-8.5,t-1.3],[i*.4,t-.6],[8,t-1.9],[1.2,t-8],[.7,t*.4],[1.7,8]];return Lc(`<path d="${ti(e)}" fill="var(--paper)"/>${Pi(e)}
    <path d="M${i*.3} 1.6l8 .08-4 .48Z M${i*.65} ${t-1.5}l6 -.1-2 .5Z" fill="var(--paper)" opacity=".8"/>`,i,t,"ink-frame")}function Zf(i=!1){let t=[[9,11],[27,10],[70,11],[81,20],[80,76],[70,86],[10,85],[2,77],[2,21]],e=[[13,17],[68,16],[75,23],[75,73],[67,79],[14,79],[8,73],[8,24]];return i?Lc(`<path d="${ti(t)} ${ti([...e].reverse())}" fill-rule="evenodd" fill="var(--paper)"/>
    ${Pi(t,2)}${Pi(e,1.2)}`,84,90,"portrait-rim"):Lc(`<path d="${ti(t)}" fill="var(--paper)"/>${Pi(t,2)}
    <path d="${ti(e)}" fill="var(--portrait-field)"/>${Pi(e,1.2)}`,84,90,"portrait-frame")}function Ay(i){let t=i?[[164,17],[192,15],[218,16],[219,33],[207,33],[207,42],[219,42],[219,57],[207,57],[207,67],[219,67],[219,82],[164,83]]:[[164,17],[190,15],[219,16],[185,47],[220,81],[164,83]],e=[[1,6],[81,4],[176,7],[177,30],[175,54],[176,73],[89,74],[1,72]],n=[[163,62],[176,62],[176,73],[164,83]],s=i?`<g transform="translate(155 42) rotate(-33) scale(.86)" fill="#fffdf5" opacity=".9">
    <path d="M-2-3 2-3 2 14-2 15Z M-9-9 9-9 10-1-9-1Z"/>
    <path d="M-7-8 6-8 6-6-7-6Z" fill="var(--banner)" opacity=".28"/></g>`:"";return Lc(`<g class="flag-tail"><path d="${ti(t)}" fill="var(--banner-tail)"/>${Pi(t,1.2)}</g>
    <g class="flag-return"><path d="${ti(n)}" fill="var(--banner-fold)"/>${Pi(n,1)}</g>
    <g class="flag-face"><path d="${ti(e)}" fill="var(--banner)"/>${Pi(e,1.5)}
      <path d="M6 11Q85 8 170 12" fill="none" stroke="#fff6dd" stroke-width=".8" opacity=".23"/>
      <path d="M173 14Q172 42 173 69" fill="none" stroke="var(--banner-fold)" stroke-width="2.4" opacity=".40"/>
    </g>
    ${s}`,222,84,"squad-banner")}function $f(){for(let r of document.querySelectorAll("[data-ink-frame]")){let o=r.dataset.inkFrame,[a,c]=o==="pause"?[54,54]:o==="panel"?[360,238]:o==="wave"?[156,42]:[160,54];r.insertAdjacentHTML("afterbegin",wy(a,c))}let i=document.querySelector(".command"),t=[...i.querySelectorAll(".squad-card")];for(let r of t)r.insertAdjacentHTML("afterbegin",Ay(r.id==="engineer-card")),r.querySelector(".portrait-window").insertAdjacentHTML("afterbegin",Zf()),r.querySelector(".portrait-window").insertAdjacentHTML("beforeend",Zf(!0));let e=matchMedia("(prefers-reduced-motion: reduce)"),n=matchMedia("(hover: hover) and (pointer: fine)");for(let r of document.querySelectorAll("button")){let o;r.addEventListener("click",()=>{if(r.disabled||e.matches)return;o?.cancel();let a=n.matches&&r.matches(":hover")?-2:0;o=r.animate([{transform:"translateY(1.5px) scale(.985)"},{transform:`translateY(${a}px) scale(1)`}],{duration:180,easing:"cubic-bezier(.16, 1, .3, 1)"})})}let s="";return{setSelection(r,o){let a=r?o:"";if(!(a===s&&i.dataset.open!==void 0)&&(s=a,i.dataset.open=String(!!a),i.setAttribute("aria-hidden",String(!a)),i.inert=!a,a))for(let c of t)c.hidden=c.id==="engineer-card"!=(o==="engineers")},setPaused(r){let o=document.querySelector("#pause-game");o.setAttribute("aria-pressed",String(r)),o.setAttribute("aria-label",r?"\u7EE7\u7EED\u6E38\u620F":"\u6682\u505C\u6E38\u620F"),o.title=r?"\u7EE7\u7EED\u6E38\u620F\uFF08\u7A7A\u683C\uFF09":"\u6682\u505C\u6E38\u620F\uFF08\u7A7A\u683C\uFF09"}}}var Mh=document.querySelector("#viewport"),Th=document.querySelector("#error"),Sh=document.querySelector("#squad-card"),Dc=document.querySelector("#engineer-card"),Ey=document.querySelector("#wave-status"),Jf=document.querySelector("#pause-game"),bh=$f(),Kf=.66,Qf=.925;function Cy(){try{return new ac({alpha:!0,antialias:!0})}catch{Th.hidden=!1}}var jf=Cy();jf&&Ry(jf);function Ry(i){i.setClearColor(15068644,1),i.shadowMap.enabled=!0,i.shadowMap.type=$i,i.shadowMap.autoUpdate=!1,i.localClippingEnabled=!0,i.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),Mh.append(i.domElement);let t=new dr;t.fog=new ur(15068644,36,63);let e=new Zi(-10,10,8,-8,.1,100),n=new O(0,.85,.5),s=xf(t),r=_f(s.tiles),o=xh(r),a=xh(r,{engineer:!0}),c=Wf(s.home),l=Uf();t.add(l.group);let u=Gf(t),h=[...s.terrain,...s.deck],f=new Or,d=new nt,g=s.tiles.get(Ue(1,0))??s.tiles.get(Ue(0,0)),M=s.tiles.get(Ue(-1,1))??s.tiles.get(Ue(0,1))??g,p=qf({world:s,navigation:r,squad:o,waves:l,base:c,effects:u,spawn:g,engineers:a,engineerSpawn:M}),m=Kf,x=1,y=!1,v="militia",S=!1,b=()=>v==="engineers"?a:o,_=()=>v==="engineers"?p.engineerOrders:p,T=Yf({reducedMotion:window.matchMedia("(prefers-reduced-motion: reduce)").matches}),L=1,I=new Set,w=null,E=null,C=new Map,A=null,U=0,N=!0,V=0,W=0,P="";t.add(new Nr(16120821,13360346,2.36));let B=new Fr(16773078,1.6);B.position.set(-7.8,22,9.3),B.castShadow=!0,B.shadow.mapSize.set(2048,2048),Object.assign(B.shadow.camera,{left:-15,right:15,top:14,bottom:-14,near:.5,far:48}),B.shadow.bias=-3e-4,B.shadow.normalBias=.022,B.shadow.radius=4.5,t.add(B),t.add(o.group),t.add(a.group);let k=new Kt;k.name="\u90E8\u7F72\u79FB\u52A8\u683C";let X=T.tileMaterial(new sn({color:"#596641",transparent:!0,opacity:.21,depthWrite:!1,toneMapped:!1})),it=T.tileMaterial(new sn({color:"#f1f1c2",transparent:!0,opacity:.32,depthWrite:!1,toneMapped:!1})),q=T.tileMaterial(new sn({color:"#dcf6c7",transparent:!0,opacity:.89,depthWrite:!1,toneMapped:!1})),$=T.tileMaterial(new sn({color:"#f0bc76",transparent:!0,opacity:.72,depthWrite:!1,toneMapped:!1})),ot=new sn({color:"#fff4d4",transparent:!0,depthWrite:!1,toneMapped:!1});t.add(k);let ct=new Kt,ut=new Kt,gt=new Kt;ct.name="\u6307\u5411\u79FB\u52A8\u683C",ut.name="\u90E8\u7F72\u786E\u8BA4\u843D\u70B9",gt.name="\u5F53\u524D\u90E8\u7F72\u683C",t.add(ct,ut,gt);let Ot=new Kt;Ot.name="\u90E8\u7F72\u786E\u8BA4\u6807\u8BB0";let Ct=new Xn().moveTo(0,-.15).quadraticCurveTo(-.12,0,-.12,.06).quadraticCurveTo(-.12,.18,0,.18).quadraticCurveTo(.12,.18,.12,.06).quadraticCurveTo(.12,0,0,-.15),It=new ne(new Ir(Ct),new sn({color:"#645848",transparent:!0,depthWrite:!1})),kt=new ne(It.geometry,ot);It.renderOrder=6,kt.renderOrder=7,kt.position.set(0,.003,.006),kt.scale.setScalar(.82),Ot.add(It,kt),t.add(Ot),Ot.visible=!1,i.domElement.addEventListener("webglcontextlost",Y=>{Y.preventDefault(),N=!1,Th.hidden=!1}),i.domElement.addEventListener("webglcontextrestored",()=>{Th.hidden=!0,N=!0,i.shadowMap.needsUpdate=!0});function dt(){let{width:Y,height:Q}=Mh.getBoundingClientRect();if(!Y||!Q)return;let lt=Y/Q,pt=Y<=620?14.8:20.1,tt=Tt.clamp(32.8/lt,16.4,17.9),rt=Math.max(tt,pt/lt)/x;e.left=-rt*lt/2,e.right=rt*lt/2,e.top=rt/2,e.bottom=-rt/2,e.position.copy(n).add(new O(Math.sin(m)*25,21,Math.cos(m)*25)),e.lookAt(n),e.updateProjectionMatrix(),e.updateMatrixWorld(),(Y!==V||Q!==W)&&(V=Y,W=Q,i.setSize(Y,Q,!1)),Ot.quaternion.copy(e.quaternion)}function St(Y){for(let Q of Y.children)Q.geometry.dispose();Y.clear()}function _t(Y,Q,lt,pt,tt){St(Y),Q&&Y.add(Iy(Q,lt,.475,pt,tt))}function Dt(){let Y=[g];I.add(g);for(let Q=0;Q<Y.length;Q++){let lt=Y[Q];for(let pt of lt.neighbors)I.has(pt)||(I.add(pt),Y.push(pt))}for(let[Q,lt,pt,tt]of[[X,.481,.02,1],[it,.468,.033,2]]){let rt=Y.map(H=>tp(H,lt,pt)),xt=new ne(hc(rt),Q);xt.renderOrder=tt,k.add(xt);for(let H of rt)H.dispose()}}function Mt(Y,Q=!1){w!==Y&&(w=Y,_t(ct,Y,q,.045,3)),i.domElement.classList.toggle("is-target",!!Y||Q)}function z(){let{mode:Y}=_().state,{result:Q}=p.state;Sh.setAttribute("aria-pressed",String(y&&v==="militia")),Dc.setAttribute("aria-pressed",String(y&&v==="engineers")),bh.setSelection(y&&!Q,v);let lt=b().members.filter(tt=>tt.hp>0).length,pt=y&&lt>0&&!Q&&["field","moving","returning","approaching","extinguishing"].includes(Y);T.setActive(pt,_().anchor),k.visible=T.state.progress>0,gt.visible=k.visible,ct.visible=k.visible}function J(Y,Q=v){if(v=Q,y=!!Y&&!p.state.result&&b().members.some(lt=>lt.hp>0&&!lt.inside),y){let lt=_(),pt=r.tileAt(lt.anchor)??lt.state.settled;_t(gt,pt,$,.051,4),Mt(null)}else w=null,i.domElement.classList.remove("is-target");z()}function mt(){let{destination:Y}=_().state;_t(ut,Y,ot,.054,5),L=Y?0:1,Ot.visible=!!Y,ut.visible=!!Y,Y&&(ot.opacity=It.material.opacity=1,Ot.position.set(Y.x,pe(Y.x,Y.z)+.39,Y.z))}function Lt(Y){!y||!I.has(Y)||!_().orderMove(Y)||(mt(),J(!1))}function At(Y){let Q=i.domElement.getBoundingClientRect();d.set((Y.clientX-Q.left)/Q.width*2-1,1-(Y.clientY-Q.top)/Q.height*2),f.setFromCamera(d,e),o.group.updateMatrixWorld(!0),a.group.updateMatrixWorld(!0);let lt=f.intersectObjects(o.targets,!1)[0],pt=f.intersectObjects(a.targets,!1)[0],tt=pt&&(!lt||pt.distance<lt.distance)?{...pt,team:"engineers"}:lt?{...lt,team:"militia"}:null;c.group.updateMatrixWorld(!0);let rt=!c.state.destroyed&&f.intersectObjects(c.targets,!1)[0];if(rt&&(!tt||rt.distance<tt.distance))return{home:!0};if(!tt&&!y)return{};let xt=f.intersectObjects(h,!1)[0],ht=f.intersectObjects(s.blockers,!1)[0]?.distance??1/0;if(tt&&tt.distance<=(xt?.distance??1/0)&&tt.distance<ht)return{unit:tt.team};if(!xt||ht<xt.distance-.045)return{};let at=s.deck.includes(xt.object)?0:Gs(xt.point.x),wt=s.tiles.get(Ue(at,Gs(xt.point.z)));return I.has(wt)?{tile:wt}:{}}function G(Y){let{unit:Q,tile:lt,home:pt}=At(Y);pt?(y?(v==="engineers"?p.engineerOrders.orderExtinguish():p.orderReturn())&&J(!1):["entering","recovering","exiting"].includes(p.state.mode)?p.orderReturn()&&J(!1):c.state.replenishmentBlocked||J(!0,"militia"),z()):Q?J(!(y&&v===Q),Q):lt&&y?Lt(lt):y&&J(!1)}let Yt=i.domElement;function Wt(){let[Y,Q]=C.values();return Y&&Q?Y.distanceTo(Q):0}Yt.addEventListener("contextmenu",Y=>{Y.preventDefault(),J(!1)}),Yt.addEventListener("pointerdown",Y=>{if(Y.pointerType==="touch"&&(C.set(Y.pointerId,new nt(Y.clientX,Y.clientY)),Yt.setPointerCapture(Y.pointerId),C.size>=2)){A={distance:Math.max(1,Wt()),zoom:x},E=null,Yt.classList.remove("is-dragging"),Mt(null);return}E||Y.button!==0||(E={id:Y.pointerId,x:Y.clientX,y:Y.clientY,angle:m,moved:!1},Yt.setPointerCapture(Y.pointerId))}),Yt.addEventListener("pointermove",Y=>{if(C.get(Y.pointerId)?.set(Y.clientX,Y.clientY),A){let tt=Wt();tt&&(x=Tt.clamp(A.zoom*tt/A.distance,Qf,1.85),dt());return}if(E&&E.id!==Y.pointerId)return;if(E){let tt=Y.clientX-E.x;(E.moved||Math.hypot(tt,Y.clientY-E.y)>5)&&(E.moved=!0,m=E.angle-tt*.009,Yt.classList.add("is-dragging"),Mt(null),dt());return}let{unit:Q,tile:lt,home:pt}=At(Y);Mt(y?lt??null:null,Q||pt)});function Xt(Y,Q){if(C.delete(Y.pointerId),A){C.size||(A=null);return}if(E?.id!==Y.pointerId)return;let{moved:lt}=E;E=null,Yt.classList.remove("is-dragging"),Q&&!lt&&G(Y)}Yt.addEventListener("pointerup",Y=>Xt(Y,!0)),Yt.addEventListener("lostpointercapture",Y=>Xt(Y,!1)),Yt.addEventListener("pointerleave",()=>Mt(null)),Yt.addEventListener("wheel",Y=>{Y.preventDefault(),x=Tt.clamp(x*Math.exp(-Y.deltaY*.001),Qf,1.85),Mt(null),dt()},{passive:!1}),Sh.addEventListener("click",()=>J(!(y&&v==="militia"),"militia")),Dc.addEventListener("click",()=>J(!(y&&v==="engineers"),"engineers")),document.querySelector("#wave-replay").addEventListener("click",()=>{R()}),document.querySelector("#restart-battle").addEventListener("click",R);function ft(){p.state.result||(S=!S,bh.setPaused(S))}Jf.addEventListener("click",ft);function jt(){let{wave:Y,waves:Q}=l.state,lt=`\u7B2C ${Y} / ${Q} \u6CE2`;lt!==P&&(P=lt,Ey.textContent=lt)}function Bt(){Jf.disabled=!!p.state.result;for(let[lt,pt,tt]of[[o,Sh,"#squad-state"],[a,Dc,"#engineer-state"]]){let rt=lt.members.filter(xt=>xt.hp>0);document.querySelector(tt).textContent=`${rt.length} / ${lt.members.length}`,pt.disabled=rt.length===0||!!p.state.result,pt.querySelectorAll(".pips i").forEach((xt,H)=>{let ht=lt.members[H];xt.classList.toggle("is-dead",ht.hp<=0),xt.style.opacity=ht.hp>0?String(.35+.65*ht.hp/ht.maxHp):"",xt.title=ht.hp>0?`${H===0?"\u9886\u961F":"\u961F\u5458"} \xB7 ${Math.ceil(ht.hp)} / ${ht.maxHp}`:"\u5DF2\u9635\u4EA1"})}let Y=document.querySelector("#engineer-work");Y.hidden=!p.engineerOrders.working,Dc.classList.toggle("is-working",p.engineerOrders.working),Y.querySelectorAll("i").forEach((lt,pt)=>{let tt=a.members[pt];lt.style.transform=`scaleX(${tt.hp>0?Tt.clamp(tt.workProgress/$t.extinguishSeconds,0,1):0})`,lt.parentElement.classList.toggle("is-dead",tt.hp<=0)});let Q=document.querySelector("#battle-result");Q.hidden=!p.state.result||p.state.resultAge<(p.state.result==="won"?$t.victoryDelay:$t.defeatDelay),p.state.result&&(document.querySelector("#result-title").textContent=p.state.result==="won"?"\u6751\u5E84\u5B88\u4F4F\u4E86":"\u65D7\u5E1C\u843D\u4E0B\u4E86",document.querySelector("#result-detail").textContent=p.state.result==="won"?`\u51FB\u9000\u5168\u90E8 ${l.state.waves} \u6CE2\u654C\u4EBA \xB7 \u57FA\u5730\u4F59\u8840 ${Math.ceil(c.state.hp)}`:`\u57FA\u5730\u5DF2\u88AB\u7EFF\u8272\u706B\u7130\u541E\u6CA1 \xB7 \u51FB\u8D25 ${p.state.kills} \u53EA\u5165\u4FB5\u8005`)}function Zt(Y){m+=Y,Mt(null),dt()}let F=new Map([["ArrowUp",[0,-1]],["ArrowRight",[1,0]],["ArrowDown",[0,1]],["ArrowLeft",[-1,0]]]);window.addEventListener("keydown",Y=>{if(Y.ctrlKey||Y.altKey||Y.metaKey)return;if(Y.code==="Space"&&!(Y.target instanceof HTMLButtonElement)){Y.preventDefault(),Y.repeat||ft();return}Y.key==="Escape"&&J(!1),Y.key.toLowerCase()==="q"&&Zt(-Math.PI/4),Y.key.toLowerCase()==="e"&&Zt(Math.PI/4),Y.key==="1"&&J(!0,"militia"),Y.key==="2"&&J(!0,"engineers");let Q=F.get(Y.key);if(!Q||!y)return;Y.preventDefault();let lt=_(),pt=lt.state.destination??lt.state.settled;Lt(s.tiles.get(Ue(pt.column+Q[0],pt.row+Q[1])))}),new ResizeObserver(dt).observe(Mh);function R(){S=!1,bh.setPaused(!1),m=Kf,x=1,v="militia",p.reset(),T.reset(),i.domElement.style.filter="",Mt(null),mt(),_t(gt,g,$,.051,4),J(!1),jt(),i.shadowMap.needsUpdate=!0,dt()}function K(Y){let Q=U?Math.min((Y-U)/1e3,.12):0;if(U=Y,N){z();let lt=T.update(Q,S);p.update(lt),y&&(p.state.result||!b().members.some(rt=>rt.hp>0&&!rt.inside))&&J(!1),i.shadowMap.needsUpdate=!0,z();let pt=T.state.focus;i.domElement.style.filter=pt>1e-4?`grayscale(${pt*.94}) brightness(${1-pt*.1})`:"",L+=Q;let tt=Tt.clamp(L/.44,0,1);ut.visible=Ot.visible=L<.44,ot.opacity=It.material.opacity=1-Tt.smoothstep(tt,.22,1),Ot.scale.setScalar(1+Math.sin(tt*Math.PI)*.13),Bt(),jt(),s.animateWater(T.state.elapsed),s.animateMeadow(T.state.elapsed),s.animateCanopy(T.state.elapsed),i.render(t,e)}requestAnimationFrame(K)}Dt(),R(),requestAnimationFrame(K)}function tp(i,t,e){let n=[],s=.17*Pe,r=t*Pe-s,o=[[0,0],[-r,-r],[-r,r],[r,-r],[r,r]].map(([m,x])=>pe(i.x+m,i.z+x)),a=Math.max(...o)-Math.min(...o)>.3?3:2,l=[[r,r],[-r,r],[-r,-r],[r,-r]].flatMap(([m,x],y)=>Array.from({length:4},(v,S)=>{let b=y*Math.PI/2+S*Math.PI/6;return[m+Math.cos(b)*s,x+Math.sin(b)*s]})),u=new Map;function h([m,x]){let y=Ue(m,x);if(!u.has(y)){let v=i.x+m,S=i.z+x;u.set(y,[v,pe(v,S)+e,S])}return u.get(y)}let f=(m,x)=>[(m[0]+x[0])/2,(m[1]+x[1])/2];function d(m,x,y,v){if(!v){n.push(...h(m),...h(x),...h(y));return}let S=f(m,x),b=f(x,y),_=f(y,m);d(m,S,_,v-1),d(S,x,b,v-1),d(_,b,y,v-1),d(S,b,_,v-1)}for(let m=0;m<l.length;m++)d([0,0],l[(m+1)%l.length],l[m],a);let g=new re;g.setAttribute("position",new zt(n,3));let M=new Float32Array(n.length),p=pe(i.x,i.z)+e;for(let m=0;m<M.length;m+=3)M.set([i.x,p,i.z],m);return g.setAttribute("deployCenter",new Me(M,3)),g}function Iy(i,t,e,n,s){let r=new ne(tp(i,e,n),t);return r.renderOrder=s,r}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
