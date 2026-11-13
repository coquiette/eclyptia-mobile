(()=>{var _u=0,kl=1,yu=2;var va=1,vu=2,hr=3,ei=0,jt=1,Lt=2,Ms=0,Ri=1,$t=2,Bl=3,zl=4,Mu=5;var Ss=100,Su=101,Tu=102,wu=103,Au=104,Eu=200,Ru=201,Cu=202,Pu=203,Gl=204,Hl=205,Iu=206,Lu=207,Du=208,Nu=209,Fu=210,Uu=211,Ou=212,ku=213,Bu=214,_o=0,yo=1,vo=2,Js=3,Mo=4,So=5,To=6,wo=7,Vl=0,zu=1,Gu=2,ti=0,Wl=1,ql=2,Xl=3,jl=4,Kl=5,Jl=6,Yl=7,Cl="attached",Hu="detached",Zl=300,Ts=301,fr=302,Wo=303,qo=304,Gn=1e3,Pn=1001,Ys=1002,Rt=1003,Xo=1004;var ws=1005;var It=1006,ur=1007;var bn=1008;var xn=1009,$l=1010,Ql=1011,dr=1012,jo=1013,qn=1014,Sn=1015,Xn=1016,Ko=1017,Jo=1018,As=1020,eh=35902,th=35899,nh=1021,ih=1022,Nn=1023,bi=1026,Ci=1027,pr=1028,Yo=1029,Ji=1030,Zo=1031;var $o=1033,Ma=33776,Sa=33777,Ta=33778,wa=33779,Qo=35840,ec=35841,tc=35842,nc=35843,ic=36196,sc=37492,rc=37496,ac=37488,oc=37489,Aa=37490,cc=37491,lc=37808,hc=37809,fc=37810,uc=37811,dc=37812,pc=37813,mc=37814,gc=37815,bc=37816,xc=37817,_c=37818,yc=37819,vc=37820,Mc=37821,Sc=36492,Tc=36494,wc=36495,Ac=36283,Ec=36284,Ea=36285,Rc=36286,Cc=2200,Vu=2201,Wu=2202,hs=2300,fs=2301,bo=2302,Pl=2303,os=2400,cs=2401,Kr=2402,Pc=2500,qu=2501,sh=0,Ra=1,mr=2,Xu=3200;var Ca=0,ju=1,Pi="",St="srgb",ln="srgb-linear",Jr="linear",ht="srgb";var xo=7680;var Ku=519,Ju=512,Yu=513,Zu=514,rh=515,$u=516,Qu=517,ah=518,oh=519,ch=35044;var lh="300 es",In=2e3,Zs=2001;function yp(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function vp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function $s(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ed(){let s=$s("canvas");return s.style.display="block",s}var Df={},Qs=null;function Yr(...s){let e="THREE."+s.shift();Qs?Qs("log",e,...s):console.log(e,...s)}function td(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Le(...s){s=td(s);let e="THREE."+s.shift();if(Qs)Qs("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Be(...s){s=td(s);let e="THREE."+s.shift();if(Qs)Qs("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function ls(...s){let e=s.join(" ");e in Df||(Df[e]=!0,Le(...s))}function nd(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var id={[_o]:_o,[vo]:To,[Mo]:Mo,[Js]:So,[yo]:yo,[To]:vo,[wo]:wo,[So]:Js},Hn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nf=1234567,Xr=Math.PI/180,us=180/Math.PI;function ni(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[s&255]+tn[s>>8&255]+tn[s>>16&255]+tn[s>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function et(s,e,t){return Math.max(e,Math.min(t,s))}function hh(s,e){return(s%e+e)%e}function Mp(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Sp(s,e,t){return s!==e?(t-s)/(e-s):0}function jr(s,e,t){return(1-t)*s+t*e}function Tp(s,e,t,n){return jr(s,e,1-Math.exp(-t*n))}function wp(s,e=1){return e-Math.abs(hh(s,e*2)-e)}function Ap(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Ep(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Rp(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Cp(s,e){return s+Math.random()*(e-s)}function Pp(s){return s*(.5-Math.random())}function Ip(s){s!==void 0&&(Nf=s);let e=Nf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Lp(s){return s*Xr}function Dp(s){return s*us}function Np(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Fp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function fh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Up(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),f=a((e+n)/2),m=r((e-n)/2),d=a((e-n)/2),u=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*f,l*m,l*d,o*c);break;case"YZY":s.set(l*d,o*f,l*m,o*c);break;case"ZXZ":s.set(l*m,l*d,o*f,o*c);break;case"XZX":s.set(o*f,l*g,l*u,o*c);break;case"YXY":s.set(l*u,o*f,l*g,o*c);break;case"ZYZ":s.set(l*g,l*u,o*f,o*c);break;default:Le("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ic(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function uh(s,e){if(e.constructor===Float32Array)return s;let t=Ic(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function dh(s,e){if(e.constructor===Float32Array)return s;let t=Ic(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}var Lc={DEG2RAD:Xr,RAD2DEG:us,generateUUID:ni,clamp:et,euclideanModulo:hh,mapLinear:Mp,inverseLerp:Sp,lerp:jr,damp:Tp,pingpong:wp,smoothstep:Ap,smootherstep:Ep,randInt:Rp,randFloat:Cp,randFloatSpread:Pp,seededRandom:Ip,degToRad:Lp,radToDeg:Dp,isPowerOfTwo:Np,ceilPowerOfTwo:Fp,floorPowerOfTwo:fh,setQuaternionFromProperEuler:Up,normalize:dh,denormalize:uh},ze=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ft=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],f=n[i+2],m=n[i+3],d=r[a+0],u=r[a+1],g=r[a+2],b=r[a+3];if(m!==b||l!==d||c!==u||f!==g){let h=l*d+c*u+f*g+m*b;h<0&&(d=-d,u=-u,g=-g,b=-b,h=-h);let p=1-o;if(h<.9995){let _=Math.acos(h),T=Math.sin(_);p=Math.sin(p*_)/T,o=Math.sin(o*_)/T,l=l*p+d*o,c=c*p+u*o,f=f*p+g*o,m=m*p+b*o}else{l=l*p+d*o,c=c*p+u*o,f=f*p+g*o,m=m*p+b*o;let _=1/Math.sqrt(l*l+c*c+f*f+m*m);l*=_,c*=_,f*=_,m*=_}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],f=n[i+3],m=r[a],d=r[a+1],u=r[a+2],g=r[a+3];return e[t]=o*g+f*m+l*u-c*d,e[t+1]=l*g+f*d+c*m-o*u,e[t+2]=c*g+f*u+o*d-l*m,e[t+3]=f*g-o*m-l*d-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),f=o(i/2),m=o(r/2),d=l(n/2),u=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*f*m+c*u*g,this._y=c*u*m-d*f*g,this._z=c*f*g+d*u*m,this._w=c*f*m-d*u*g;break;case"YXZ":this._x=d*f*m+c*u*g,this._y=c*u*m-d*f*g,this._z=c*f*g-d*u*m,this._w=c*f*m+d*u*g;break;case"ZXY":this._x=d*f*m-c*u*g,this._y=c*u*m+d*f*g,this._z=c*f*g+d*u*m,this._w=c*f*m-d*u*g;break;case"ZYX":this._x=d*f*m-c*u*g,this._y=c*u*m+d*f*g,this._z=c*f*g-d*u*m,this._w=c*f*m+d*u*g;break;case"YZX":this._x=d*f*m+c*u*g,this._y=c*u*m+d*f*g,this._z=c*f*g-d*u*m,this._w=c*f*m-d*u*g;break;case"XZY":this._x=d*f*m-c*u*g,this._y=c*u*m-d*f*g,this._z=c*f*g+d*u*m,this._w=c*f*m+d*u*g;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],f=t[6],m=t[10],d=n+o+m;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(f-l)*u,this._y=(r-c)*u,this._z=(a-i)*u}else if(n>o&&n>m){let u=2*Math.sqrt(1+n-o-m);this._w=(f-l)/u,this._x=.25*u,this._y=(i+a)/u,this._z=(r+c)/u}else if(o>m){let u=2*Math.sqrt(1+o-n-m);this._w=(r-c)/u,this._x=(i+a)/u,this._y=.25*u,this._z=(l+f)/u}else{let u=2*Math.sqrt(1+m-n-o);this._w=(a-i)/u,this._x=(r+c)/u,this._y=(l+f)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,f=t._w;return this._x=n*f+a*o+i*c-r*l,this._y=i*f+a*l+r*o-n*c,this._z=r*f+a*c+n*l-i*o,this._w=a*f-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,t=Math.sin(t*c)/f,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ff.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ff.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),f=2*(o*t-r*i),m=2*(r*n-a*t);return this.x=t+l*c+a*m-o*f,this.y=n+l*f+o*c-r*m,this.z=i+l*m+r*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return rl.copy(this).projectOnVector(e),this.sub(rl)}reflect(e){return this.sub(rl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},rl=new O,Ff=new ft,He=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){let f=this.elements;return f[0]=e,f[1]=i,f[2]=o,f[3]=t,f[4]=r,f[5]=l,f[6]=n,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],f=n[4],m=n[7],d=n[2],u=n[5],g=n[8],b=i[0],h=i[3],p=i[6],_=i[1],T=i[4],w=i[7],v=i[2],y=i[5],x=i[8];return r[0]=a*b+o*_+l*v,r[3]=a*h+o*T+l*y,r[6]=a*p+o*w+l*x,r[1]=c*b+f*_+m*v,r[4]=c*h+f*T+m*y,r[7]=c*p+f*w+m*x,r[2]=d*b+u*_+g*v,r[5]=d*h+u*T+g*y,r[8]=d*p+u*w+g*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return t*a*f-t*o*c-n*r*f+n*o*l+i*r*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],m=f*a-o*c,d=o*l-f*r,u=c*r-a*l,g=t*m+n*d+i*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return e[0]=m*b,e[1]=(i*c-f*n)*b,e[2]=(o*n-i*a)*b,e[3]=d*b,e[4]=(f*t-i*l)*b,e[5]=(i*r-o*t)*b,e[6]=u*b,e[7]=(n*l-c*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ls("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(al.makeScale(e,t)),this}rotate(e){return ls("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(al.makeRotation(-e)),this}translate(e,t){return ls("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(al.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},al=new He,Uf=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Of=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Op(){let s={enabled:!0,workingColorSpace:ln,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ht&&(i.r=gi(i.r),i.g=gi(i.g),i.b=gi(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ht&&(i.r=Ks(i.r),i.g=Ks(i.g),i.b=Ks(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Pi?Jr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[ln]:{primaries:e,whitePoint:n,transfer:Jr,toXYZ:Uf,fromXYZ:Of,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:St},outputColorSpaceConfig:{drawingBufferColorSpace:St}},[St]:{primaries:e,whitePoint:n,transfer:ht,toXYZ:Uf,fromXYZ:Of,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:St}}}),s}var Ze=Op();function gi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ks(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ns,Ao=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ns===void 0&&(Ns=$s("canvas")),Ns.width=e.width,Ns.height=e.height;let i=Ns.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ns}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=$s("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=gi(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(gi(t[n]/255)*255):t[n]=gi(t[n]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},kp=0,er=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=ni(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(ol(i[a].image)):r.push(ol(i[a]))}else r=ol(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function ol(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ao.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}var Bp=0,cl=new O,zt=class s extends Hn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Pn,i=Pn,r=It,a=bn,o=Nn,l=xn,c=s.DEFAULT_ANISOTROPY,f=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=ni(),this.name="",this.source=new er(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(cl).x}get height(){return this.source.getSize(cl).y}get depth(){return this.source.getSize(cl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gn:e.x=e.x-Math.floor(e.x);break;case Pn:e.x=e.x<0?0:1;break;case Ys:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gn:e.y=e.y-Math.floor(e.y);break;case Pn:e.y=e.y<0?0:1;break;case Ys:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Zl;zt.DEFAULT_ANISOTROPY=1;var mt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],f=l[4],m=l[8],d=l[1],u=l[5],g=l[9],b=l[2],h=l[6],p=l[10];if(Math.abs(f-d)<.01&&Math.abs(m-b)<.01&&Math.abs(g-h)<.01){if(Math.abs(f+d)<.1&&Math.abs(m+b)<.1&&Math.abs(g+h)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,w=(u+1)/2,v=(p+1)/2,y=(f+d)/4,x=(m+b)/4,M=(g+h)/4;return T>w&&T>v?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=y/n,r=x/n):w>v?w<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=y/i,r=M/i):v<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(v),n=x/r,i=M/r),this.set(n,i,r,t),this}let _=Math.sqrt((h-g)*(h-g)+(m-b)*(m-b)+(d-f)*(d-f));return Math.abs(_)<.001&&(_=1),this.x=(h-g)/_,this.y=(m-b)/_,this.z=(d-f)/_,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Eo=class extends Hn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new zt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:It,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new er(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mn=class extends Eo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Zr=class extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ro=class extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ge=class s{static{this.prototype.isMatrix4=!0}constructor(e,t,n,i,r,a,o,l,c,f,m,d,u,g,b,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,f,m,d,u,g,b,h)}set(e,t,n,i,r,a,o,l,c,f,m,d,u,g,b,h){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=f,p[10]=m,p[14]=d,p[3]=u,p[7]=g,p[11]=b,p[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Fs.setFromMatrixColumn(e,0).length(),r=1/Fs.setFromMatrixColumn(e,1).length(),a=1/Fs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),f=Math.cos(r),m=Math.sin(r);if(e.order==="XYZ"){let d=a*f,u=a*m,g=o*f,b=o*m;t[0]=l*f,t[4]=-l*m,t[8]=c,t[1]=u+g*c,t[5]=d-b*c,t[9]=-o*l,t[2]=b-d*c,t[6]=g+u*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*f,u=l*m,g=c*f,b=c*m;t[0]=d+b*o,t[4]=g*o-u,t[8]=a*c,t[1]=a*m,t[5]=a*f,t[9]=-o,t[2]=u*o-g,t[6]=b+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*f,u=l*m,g=c*f,b=c*m;t[0]=d-b*o,t[4]=-a*m,t[8]=g+u*o,t[1]=u+g*o,t[5]=a*f,t[9]=b-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*f,u=a*m,g=o*f,b=o*m;t[0]=l*f,t[4]=g*c-u,t[8]=d*c+b,t[1]=l*m,t[5]=b*c+d,t[9]=u*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,u=a*c,g=o*l,b=o*c;t[0]=l*f,t[4]=b-d*m,t[8]=g*m+u,t[1]=m,t[5]=a*f,t[9]=-o*f,t[2]=-c*f,t[6]=u*m+g,t[10]=d-b*m}else if(e.order==="XZY"){let d=a*l,u=a*c,g=o*l,b=o*c;t[0]=l*f,t[4]=-m,t[8]=c*f,t[1]=d*m+b,t[5]=a*f,t[9]=u*m-g,t[2]=g*m-u,t[6]=o*f,t[10]=b*m+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zp,e,Gp)}lookAt(e,t,n){let i=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Ui.crossVectors(n,yn),Ui.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Ui.crossVectors(n,yn)),Ui.normalize(),qa.crossVectors(yn,Ui),i[0]=Ui.x,i[4]=qa.x,i[8]=yn.x,i[1]=Ui.y,i[5]=qa.y,i[9]=yn.y,i[2]=Ui.z,i[6]=qa.z,i[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],f=n[1],m=n[5],d=n[9],u=n[13],g=n[2],b=n[6],h=n[10],p=n[14],_=n[3],T=n[7],w=n[11],v=n[15],y=i[0],x=i[4],M=i[8],C=i[12],R=i[1],I=i[5],F=i[9],B=i[13],D=i[2],j=i[6],Z=i[10],K=i[14],oe=i[3],Y=i[7],ie=i[11],se=i[15];return r[0]=a*y+o*R+l*D+c*oe,r[4]=a*x+o*I+l*j+c*Y,r[8]=a*M+o*F+l*Z+c*ie,r[12]=a*C+o*B+l*K+c*se,r[1]=f*y+m*R+d*D+u*oe,r[5]=f*x+m*I+d*j+u*Y,r[9]=f*M+m*F+d*Z+u*ie,r[13]=f*C+m*B+d*K+u*se,r[2]=g*y+b*R+h*D+p*oe,r[6]=g*x+b*I+h*j+p*Y,r[10]=g*M+b*F+h*Z+p*ie,r[14]=g*C+b*B+h*K+p*se,r[3]=_*y+T*R+w*D+v*oe,r[7]=_*x+T*I+w*j+v*Y,r[11]=_*M+T*F+w*Z+v*ie,r[15]=_*C+T*B+w*K+v*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],m=e[6],d=e[10],u=e[14],g=e[3],b=e[7],h=e[11],p=e[15],_=l*u-c*d,T=o*u-c*m,w=o*d-l*m,v=a*u-c*f,y=a*d-l*f,x=a*m-o*f;return t*(b*_-h*T+p*w)-n*(g*_-h*v+p*y)+i*(g*T-b*v+p*x)-r*(g*w-b*y+h*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],f=e[10];return t*(a*f-o*c)-n*(r*f-o*l)+i*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],m=e[9],d=e[10],u=e[11],g=e[12],b=e[13],h=e[14],p=e[15],_=t*o-n*a,T=t*l-i*a,w=t*c-r*a,v=n*l-i*o,y=n*c-r*o,x=i*c-r*l,M=f*b-m*g,C=f*h-d*g,R=f*p-u*g,I=m*h-d*b,F=m*p-u*b,B=d*p-u*h,D=_*B-T*F+w*I+v*R-y*C+x*M;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let j=1/D;return e[0]=(o*B-l*F+c*I)*j,e[1]=(i*F-n*B-r*I)*j,e[2]=(b*x-h*y+p*v)*j,e[3]=(d*y-m*x-u*v)*j,e[4]=(l*R-a*B-c*C)*j,e[5]=(t*B-i*R+r*C)*j,e[6]=(h*w-g*x-p*T)*j,e[7]=(f*x-d*w+u*T)*j,e[8]=(a*F-o*R+c*M)*j,e[9]=(n*R-t*F-r*M)*j,e[10]=(g*y-b*w+p*_)*j,e[11]=(m*w-f*y-u*_)*j,e[12]=(o*C-a*I-l*M)*j,e[13]=(t*I-n*C+i*M)*j,e[14]=(b*T-g*v-h*_)*j,e[15]=(f*v-m*T+d*_)*j,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,f=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,f*o+n,f*l-i*a,0,c*l-i*o,f*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,f=a+a,m=o+o,d=r*c,u=r*f,g=r*m,b=a*f,h=a*m,p=o*m,_=l*c,T=l*f,w=l*m,v=n.x,y=n.y,x=n.z;return i[0]=(1-(b+p))*v,i[1]=(u+w)*v,i[2]=(g-T)*v,i[3]=0,i[4]=(u-w)*y,i[5]=(1-(d+p))*y,i[6]=(h+_)*y,i[7]=0,i[8]=(g+T)*x,i[9]=(h-_)*x,i[10]=(1-(d+b))*x,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Fs.set(i[0],i[1],i[2]).length(),o=Fs.set(i[4],i[5],i[6]).length(),l=Fs.set(i[8],i[9],i[10]).length();r<0&&(a=-a),On.copy(this);let c=1/a,f=1/o,m=1/l;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=f,On.elements[5]*=f,On.elements[6]*=f,On.elements[8]*=m,On.elements[9]*=m,On.elements[10]*=m,t.setFromRotationMatrix(On),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,a,o=In,l=!1){let c=this.elements,f=2*r/(t-e),m=2*r/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i),g,b;if(l)g=r/(a-r),b=a*r/(a-r);else if(o===In)g=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===Zs)g=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=m,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=In,l=!1){let c=this.elements,f=2/(t-e),m=2/(n-i),d=-(t+e)/(t-e),u=-(n+i)/(n-i),g,b;if(l)g=1/(a-r),b=a/(a-r);else if(o===In)g=-2/(a-r),b=-(a+r)/(a-r);else if(o===Zs)g=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=m,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Fs=new O,On=new Ge,zp=new O(0,0,0),Gp=new O(1,1,1),Ui=new O,qa=new O,yn=new O,kf=new Ge,Bf=new ft,Vn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],f=i[9],m=i[2],d=i[6],u=i[10];switch(t){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-m,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-et(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,u),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return kf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bf.setFromEuler(this),this.setFromQuaternion(Bf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vn.DEFAULT_ORDER="XYZ";var $r=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Hp=0,zf=new O,Us=new ft,hi=new Ge,Xa=new O,Or=new O,Vp=new O,Wp=new ft,Gf=new O(1,0,0),Hf=new O(0,1,0),Vf=new O(0,0,1),Wf={type:"added"},qp={type:"removed"},Os={type:"childadded",child:null},ll={type:"childremoved",child:null},vt=class s extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new O,t=new Vn,n=new ft,i=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ge},normalMatrix:{value:new He}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(Gf,e)}rotateY(e){return this.rotateOnAxis(Hf,e)}rotateZ(e){return this.rotateOnAxis(Vf,e)}translateOnAxis(e,t){return zf.copy(e).applyQuaternion(this.quaternion),this.position.add(zf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gf,e)}translateY(e){return this.translateOnAxis(Hf,e)}translateZ(e){return this.translateOnAxis(Vf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xa.copy(e):Xa.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(Or,Xa,this.up):hi.lookAt(Xa,Or,this.up),this.quaternion.setFromRotationMatrix(hi),i&&(hi.extractRotation(i.matrixWorld),Us.setFromRotationMatrix(hi),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Be("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wf),Os.child=e,this.dispatchEvent(Os),Os.child=null):Be("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qp),ll.child=e,this.dispatchEvent(ll),ll.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wf),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,e,Vp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,Wp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let m=l[c];r(e.shapes,m)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),m=a(e.shapes),d=a(e.skeletons),u=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),m.length>0&&(n.shapes=m),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};vt.DEFAULT_UP=new O(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pt=class extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Xp={type:"move"},tr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let b of e.hand.values()){let h=t.getJointPose(b,n),p=this._getHandJoint(c,b);h!==null&&(p.matrix.fromArray(h.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=h.radius),p.visible=h!==null}let f=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],d=f.position.distanceTo(m.position),u=.02,g=.005;c.inputState.pinching&&d>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xp)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Pt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},sd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},ja={h:0,s:0,l:0};function hl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var _e=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ze.workingColorSpace){if(e=hh(e,1),t=et(t,0,1),n=et(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=hl(a,r,e+1/3),this.g=hl(a,r,e),this.b=hl(a,r,e-1/3)}return Ze.colorSpaceToWorking(this,i),this}setStyle(e,t=St){function n(r){r!==void 0&&parseFloat(r)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){let n=sd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=Ks(e.r),this.g=Ks(e.g),this.b=Ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return Ze.workingToColorSpace(nn.copy(this),e),Math.round(et(nn.r*255,0,255))*65536+Math.round(et(nn.g*255,0,255))*256+Math.round(et(nn.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(nn.copy(this),t);let n=nn.r,i=nn.g,r=nn.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,f=(o+a)/2;if(o===a)l=0,c=0;else{let m=a-o;switch(c=f<=.5?m/(a+o):m/(2-a-o),a){case n:l=(i-r)/m+(i<r?6:0);break;case i:l=(r-n)/m+2;break;case r:l=(n-i)/m+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=St){Ze.workingToColorSpace(nn.copy(this),e);let t=nn.r,n=nn.g,i=nn.b;return e!==St?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Oi),this.setHSL(Oi.h+e,Oi.s+t,Oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Oi),e.getHSL(ja);let n=jr(Oi.h,ja.h,t),i=jr(Oi.s,ja.s,t),r=jr(Oi.l,ja.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new _e;_e.NAMES=sd;var Qr=class extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},kn=new O,fi=new O,fl=new O,ui=new O,ks=new O,Bs=new O,qf=new O,ul=new O,dl=new O,pl=new O,ml=new mt,gl=new mt,bl=new mt,Hi=class s{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),kn.subVectors(e,t),i.cross(kn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){kn.subVectors(i,t),fi.subVectors(n,t),fl.subVectors(e,t);let a=kn.dot(kn),o=kn.dot(fi),l=kn.dot(fl),c=fi.dot(fi),f=fi.dot(fl),m=a*c-o*o;if(m===0)return r.set(0,0,0),null;let d=1/m,u=(c*l-o*f)*d,g=(a*f-o*l)*d;return r.set(1-u-g,g,u)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ui.x),l.addScaledVector(a,ui.y),l.addScaledVector(o,ui.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return ml.setScalar(0),gl.setScalar(0),bl.setScalar(0),ml.fromBufferAttribute(e,t),gl.fromBufferAttribute(e,n),bl.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(ml,r.x),a.addScaledVector(gl,r.y),a.addScaledVector(bl,r.z),a}static isFrontFacing(e,t,n,i){return kn.subVectors(n,t),fi.subVectors(e,t),kn.cross(fi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),kn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;ks.subVectors(i,n),Bs.subVectors(r,n),ul.subVectors(e,n);let l=ks.dot(ul),c=Bs.dot(ul);if(l<=0&&c<=0)return t.copy(n);dl.subVectors(e,i);let f=ks.dot(dl),m=Bs.dot(dl);if(f>=0&&m<=f)return t.copy(i);let d=l*m-f*c;if(d<=0&&l>=0&&f<=0&&l-f>0)return a=l/(l-f),t.copy(n).addScaledVector(ks,a);pl.subVectors(e,r);let u=ks.dot(pl),g=Bs.dot(pl);if(g>=0&&u<=g)return t.copy(r);let b=u*c-l*g;if(b<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Bs,o);let h=f*g-u*m;if(h<=0&&m-f>=0&&u-g>=0)return qf.subVectors(r,i),o=(m-f)/(m-f+(u-g)),t.copy(i).addScaledVector(qf,o);let p=1/(h+b+d);return a=b*p,o=d*p,t.copy(n).addScaledVector(ks,a).addScaledVector(Bs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},hn=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Bn):Bn.fromBufferAttribute(r,a),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ka.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ka.copy(n.boundingBox)),Ka.applyMatrix4(e.matrixWorld),this.union(Ka)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(kr),Ja.subVectors(this.max,kr),zs.subVectors(e.a,kr),Gs.subVectors(e.b,kr),Hs.subVectors(e.c,kr),ki.subVectors(Gs,zs),Bi.subVectors(Hs,Gs),is.subVectors(zs,Hs);let t=[0,-ki.z,ki.y,0,-Bi.z,Bi.y,0,-is.z,is.y,ki.z,0,-ki.x,Bi.z,0,-Bi.x,is.z,0,-is.x,-ki.y,ki.x,0,-Bi.y,Bi.x,0,-is.y,is.x,0];return!xl(t,zs,Gs,Hs,Ja)||(t=[1,0,0,0,1,0,0,0,1],!xl(t,zs,Gs,Hs,Ja))?!1:(Ya.crossVectors(ki,Bi),t=[Ya.x,Ya.y,Ya.z],xl(t,zs,Gs,Hs,Ja))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},di=[new O,new O,new O,new O,new O,new O,new O,new O],Bn=new O,Ka=new hn,zs=new O,Gs=new O,Hs=new O,ki=new O,Bi=new O,is=new O,kr=new O,Ja=new O,Ya=new O,ss=new O;function xl(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ss.fromArray(s,r);let o=i.x*Math.abs(ss.x)+i.y*Math.abs(ss.y)+i.z*Math.abs(ss.z),l=e.dot(ss),c=t.dot(ss),f=n.dot(ss);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}var Ut=new O,Za=new ze,jp=0,Zt=class extends Hn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ch,this.updateRanges=[],this.gpuType=Sn,this.version=0,this._normalizationScale=e!==void 0?Ic(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Za.fromBufferAttribute(this,t),Za.applyMatrix3(e),this.setXY(t,Za.x,Za.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):uh(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):dh(e,this.array)}};var ea=class extends Zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ta=class extends Zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ct=class extends Zt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Kp=new hn,Br=new O,_l=new O,mn=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Kp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Br.subVectors(e,this.center);let t=Br.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Br,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_l.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Br.copy(e.center).add(_l)),this.expandByPoint(Br.copy(e.center).sub(_l))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Jp=0,Cn=new Ge,yl=new vt,Vs=new O,vn=new hn,zr=new hn,Xt=new O,Ot=class s extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yp(e)?ta:ea)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new He().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,t,n){return Cn.makeTranslation(e,t,n),this.applyMatrix4(Cn),this}scale(e,t,n){return Cn.makeScale(e,t,n),this.applyMatrix4(Cn),this}lookAt(e){return yl.lookAt(e),yl.updateMatrix(),this.applyMatrix4(yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ct(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];zr.setFromBufferAttribute(o),this.morphTargetsRelative?(Xt.addVectors(vn.min,zr.min),vn.expandByPoint(Xt),Xt.addVectors(vn.max,zr.max),vn.expandByPoint(Xt)):(vn.expandByPoint(zr.min),vn.expandByPoint(zr.max))}vn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Xt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Xt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Xt.fromBufferAttribute(o,c),l&&(Vs.fromBufferAttribute(e,c),Xt.add(Vs)),i=Math.max(i,n.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Zt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let C=0;C<n.count;C++)o[C]=new O,l[C]=new O;let f=new O,m=new O,d=new O,u=new ze,g=new ze,b=new ze,h=new O,p=new O;function _(C,R,I){c[C]=c[R]=c[I]=1,f.fromBufferAttribute(n,C),m.fromBufferAttribute(n,R),d.fromBufferAttribute(n,I),u.fromBufferAttribute(r,C),g.fromBufferAttribute(r,R),b.fromBufferAttribute(r,I),m.sub(f),d.sub(f),g.sub(u),b.sub(u);let F=1/(g.x*b.y-b.x*g.y);isFinite(F)&&(h.copy(m).multiplyScalar(b.y).addScaledVector(d,-g.y).multiplyScalar(F),p.copy(d).multiplyScalar(g.x).addScaledVector(m,-b.x).multiplyScalar(F),o[C].add(h),o[R].add(h),o[I].add(h),l[C].add(p),l[R].add(p),l[I].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let C=0,R=T.length;C<R;++C){let I=T[C],F=I.start,B=I.count;for(let D=F,j=F+B;D<j;D+=3)_(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let w=new O,v=new O,y=new O,x=new O;function M(C){y.fromBufferAttribute(i,C),x.copy(y);let R=o[C];w.copy(R),w.sub(y.multiplyScalar(y.dot(R))).normalize(),v.crossVectors(x,R);let F=v.dot(l[C])<0?-1:1;a.setXYZW(C,w.x,w.y,w.z,F)}for(let C=0,R=n.count;C<R;++C)c[C]&&M(C);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let i=new O,r=new O,a=new O,o=new O,l=new O,c=new O,f=new O,m=new O;if(e)for(let d=0,u=e.count;d<u;d+=3){let g=e.getX(d+0),b=e.getX(d+1),h=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,h),f.subVectors(a,r),m.subVectors(i,r),f.cross(m),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,h),o.add(f),l.add(f),c.add(f),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(h,c.x,c.y,c.z)}else for(let d=0,u=t.count;d<u;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),f.subVectors(a,r),m.subVectors(i,r),f.cross(m),n.setXYZ(d+0,f.x,f.y,f.z),n.setXYZ(d+1,f.x,f.y,f.z),n.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(o,l){let c=o.array,f=o.itemSize,m=o.normalized,d=new c.constructor(l.length*f),u=0,g=0;for(let b=0,h=l.length;b<h;b++){o.isInterleavedBufferAttribute?u=l[b]*o.data.stride+o.offset:u=l[b]*f;for(let p=0;p<f;p++)d[g++]=c[u++]}return new Zt(d,f,m)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let f=0,m=c.length;f<m;f++){let d=c[f],u=e(d,n);l.push(u)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let m=0,d=c.length;m<d;m++){let u=c[m];f.push(u.toJSON(e.data))}f.length>0&&(i[l]=f,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let f=i[c];this.setAttribute(c,f.clone(t))}let r=e.morphAttributes;for(let c in r){let f=[],m=r[c];for(let d=0,u=m.length;d<u;d++)f.push(m[d].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,f=a.length;c<f;c++){let m=a[c];this.addGroup(m.start,m.count,m.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},nr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ch,this.updateRanges=[],this.version=0,this.uuid=ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Xf(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Xf(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Xf(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=ni()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var cn=new O,ir=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?Ic(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Yr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Yr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):uh(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):dh(e,this.data.array)}},vl=new O,Yp=new O,Zp=new He,zn=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=vl.subVectors(n,t).cross(Yp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(vl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Zp.getNormalMatrix(e),i=this.coplanarPoint(vl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},$p=0,fn=class extends Hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=ni(),this.name="",this.type="Material",this.blending=Ri,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gl,this.blendDst=Hl,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ku,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xo,this.stencilZFail=xo,this.stencilZPass=xo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new _e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new zn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ze().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ze().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var pi=new O,Ml=new O,$a=new O,Qa=new O,ds=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ml.copy(e).add(t).multiplyScalar(.5),$a.copy(t).sub(e).normalize(),Qa.copy(this.origin).sub(Ml);let r=e.distanceTo(t)*.5,a=-this.direction.dot($a),o=Qa.dot(this.direction),l=-Qa.dot($a),c=Qa.lengthSq(),f=Math.abs(1-a*a),m,d,u,g;if(f>0)if(m=a*l-o,d=a*o-l,g=r*f,m>=0)if(d>=-g)if(d<=g){let b=1/f;m*=b,d*=b,u=m*(m+a*d+2*o)+d*(a*m+d+2*l)+c}else d=r,m=Math.max(0,-(a*d+o)),u=-m*m+d*(d+2*l)+c;else d=-r,m=Math.max(0,-(a*d+o)),u=-m*m+d*(d+2*l)+c;else d<=-g?(m=Math.max(0,-(-a*r+o)),d=m>0?-r:Math.min(Math.max(-r,-l),r),u=-m*m+d*(d+2*l)+c):d<=g?(m=0,d=Math.min(Math.max(-r,-l),r),u=d*(d+2*l)+c):(m=Math.max(0,-(a*r+o)),d=m>0?r:Math.min(Math.max(-r,-l),r),u=-m*m+d*(d+2*l)+c);else d=a>0?-r:r,m=Math.max(0,-(a*d+o)),u=-m*m+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,m),i&&i.copy(Ml).addScaledVector($a,d),u}intersectSphere(e,t){if(e.radius<0)return null;pi.subVectors(e.center,this.origin);let n=pi.dot(this.direction),i=pi.dot(pi)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l,c=1/this.direction.x,f=1/this.direction.y,m=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),f>=0?(r=(e.min.y-d.y)*f,a=(e.max.y-d.y)*f):(r=(e.max.y-d.y)*f,a=(e.min.y-d.y)*f),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),m>=0?(o=(e.min.z-d.z)*m,l=(e.max.z-d.z)*m):(o=(e.max.z-d.z)*m,l=(e.min.z-d.z)*m),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,n,i,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,f=o.z,m=e.x-a.x,d=e.y-a.y,u=e.z-a.z,g=t.x-a.x,b=t.y-a.y,h=t.z-a.z,p=n.x-a.x,_=n.y-a.y,T=n.z-a.z,w=Math.abs(l),v=Math.abs(c),y=Math.abs(f),x,M,C,R,I,F,B,D,j,Z,K,oe;if(w>=v&&w>=y?(C=l,F=m,j=g,oe=p,l>=0?(x=c,M=f,R=d,I=u,B=b,D=h,Z=_,K=T):(x=f,M=c,R=u,I=d,B=h,D=b,Z=T,K=_)):v>=y?(C=c,F=d,j=b,oe=_,c>=0?(x=f,M=l,R=u,I=m,B=h,D=g,Z=T,K=p):(x=l,M=f,R=m,I=u,B=g,D=h,Z=p,K=T)):(C=f,F=u,j=h,oe=T,f>=0?(x=l,M=c,R=m,I=d,B=g,D=b,Z=p,K=_):(x=c,M=l,R=d,I=m,B=b,D=g,Z=_,K=p)),C===0)return null;let Y=x/C,ie=M/C,se=1/C,Pe=R-Y*F,We=I-ie*F,ee=B-Y*j,Me=D-ie*j,Ee=Z-Y*oe,Ue=K-ie*oe,Se=Ee*Me-Ue*ee,Xe=Pe*Ue-We*Ee,Nt=ee*We-Me*Pe;if(i){if(Se<0||Xe<0||Nt<0)return null}else if((Se<0||Xe<0||Nt<0)&&(Se>0||Xe>0||Nt>0))return null;let ke=Se+Xe+Nt;if(ke===0)return null;let dt=se*(Se*F+Xe*j+Nt*oe);return(ke>0?dt<0:dt>0)?null:this.at(dt/ke,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},tt=class extends fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=Vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},jf=new Ge,rs=new ds,eo=new mn,Kf=new O,to=new O,no=new O,io=new O,Sl=new O,so=new O,Jf=new O,ro=new O,$e=class extends vt{constructor(e=new Ot,t=new tt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){so.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let f=o[l],m=r[l];f!==0&&(Sl.fromBufferAttribute(m,e),a?so.addScaledVector(Sl,f):so.addScaledVector(Sl.sub(t),f))}t.add(so)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(r),rs.copy(e.ray).recast(e.near),!(eo.containsPoint(rs.origin)===!1&&(rs.intersectSphere(eo,Kf)===null||rs.origin.distanceToSquared(Kf)>(e.far-e.near)**2))&&(jf.copy(r).invert(),rs.copy(e.ray).applyMatrix4(jf),!(n.boundingBox!==null&&rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,rs)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,m=r.attributes.normal,d=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let h=d[g],p=a[h.materialIndex],_=Math.max(h.start,u.start),T=Math.min(o.count,Math.min(h.start+h.count,u.start+u.count));for(let w=_,v=T;w<v;w+=3){let y=o.getX(w),x=o.getX(w+1),M=o.getX(w+2);i=ao(this,p,e,n,c,f,m,y,x,M),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=h.materialIndex,t.push(i))}}else{let g=Math.max(0,u.start),b=Math.min(o.count,u.start+u.count);for(let h=g,p=b;h<p;h+=3){let _=o.getX(h),T=o.getX(h+1),w=o.getX(h+2);i=ao(this,a,e,n,c,f,m,_,T,w),i&&(i.faceIndex=Math.floor(h/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let h=d[g],p=a[h.materialIndex],_=Math.max(h.start,u.start),T=Math.min(l.count,Math.min(h.start+h.count,u.start+u.count));for(let w=_,v=T;w<v;w+=3){let y=w,x=w+1,M=w+2;i=ao(this,p,e,n,c,f,m,y,x,M),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=h.materialIndex,t.push(i))}}else{let g=Math.max(0,u.start),b=Math.min(l.count,u.start+u.count);for(let h=g,p=b;h<p;h+=3){let _=h,T=h+1,w=h+2;i=ao(this,a,e,n,c,f,m,_,T,w),i&&(i.faceIndex=Math.floor(h/3),t.push(i))}}}};function Qp(s,e,t,n,i,r,a,o){let l;if(e.side===jt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===ei,o),l===null)return null;ro.copy(o),ro.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(ro);return c<t.near||c>t.far?null:{distance:c,point:ro.clone(),object:s}}function ao(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,to),s.getVertexPosition(l,no),s.getVertexPosition(c,io);let f=Qp(s,e,t,n,to,no,io,Jf);if(f){let m=new O;Hi.getBarycoord(Jf,to,no,io,m),i&&(f.uv=Hi.getInterpolatedAttribute(i,o,l,c,m,new ze)),r&&(f.uv1=Hi.getInterpolatedAttribute(r,o,l,c,m,new ze)),a&&(f.normal=Hi.getInterpolatedAttribute(a,o,l,c,m,new O),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new O,materialIndex:0};Hi.getNormal(to,no,io,d.normal),f.face=d,f.barycoord=m}return f}var Gr=new mt,Yf=new mt,Zf=new mt,em=new mt,$f=new Ge,oo=new O,Tl=new mn,Qf=new Ge,wl=new ds,ps=class extends $e{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Cl,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new hn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,oo),this.boundingBox.expandByPoint(oo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new mn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,oo),this.boundingSphere.expandByPoint(oo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tl.copy(this.boundingSphere),Tl.applyMatrix4(i),e.ray.intersectsSphere(Tl)!==!1&&(Qf.copy(i).invert(),wl.copy(e.ray).applyMatrix4(Qf),!(this.boundingBox!==null&&wl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,wl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new mt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Cl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Hu?this.bindMatrixInverse.copy(this.bindMatrix).invert():Le("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Yf.fromBufferAttribute(i.attributes.skinIndex,e),Zf.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Gr.copy(t),t.set(0,0,0,0)):(Gr.set(t.x,t.y,t.z,1),t.set(0,0,0)),Gr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Zf.getComponent(r);if(a!==0){let o=Yf.getComponent(r);$f.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(em.copy(Gr).applyMatrix4($f),a)}}return t.isVector4&&(t.w=Gr.w),t.applyMatrix4(this.bindMatrixInverse)}},sr=class extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Vi=class extends zt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Rt,f=Rt,m,d){super(null,a,o,l,c,f,i,r,m,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},eu=new Ge,tm=new Ge,na=class s{constructor(e=[],t=[]){this.uuid=ni(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Le("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ge;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:tm;eu.multiplyMatrices(o,t[r]),eu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Vi(t,e,e,Nn,Sn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(Le("Skeleton: No bone found with UUID:",r),a=new sr),this.bones.push(a),this.boneInverses.push(new Ge().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},xi=class extends Zt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ws=new Ge,tu=new Ge,co=[],nu=new hn,nm=new Ge,Hr=new $e,Vr=new mn,Wi=class extends $e{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,nm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new hn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ws),nu.copy(e.boundingBox).applyMatrix4(Ws),this.boundingBox.union(nu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ws),Vr.copy(e.boundingSphere).applyMatrix4(Ws),this.boundingSphere.union(Vr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Hr.geometry=this.geometry,Hr.material=this.material,Hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vr.copy(this.boundingSphere),Vr.applyMatrix4(n),e.ray.intersectsSphere(Vr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ws),tu.multiplyMatrices(n,Ws),Hr.matrixWorld=tu,Hr.raycast(e,co);for(let a=0,o=co.length;a<o;a++){let l=co[a];l.instanceId=r,l.object=this,t.push(l)}co.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new xi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Vi(new Float32Array(i*this.count),i,this.count,pr,Sn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},as=new mn,im=new ze(.5,.5),lo=new O,qi=class{constructor(e=new zn,t=new zn,n=new zn,i=new zn,r=new zn,a=new zn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=In,n=!1){let i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],f=r[4],m=r[5],d=r[6],u=r[7],g=r[8],b=r[9],h=r[10],p=r[11],_=r[12],T=r[13],w=r[14],v=r[15];if(i[0].setComponents(c-a,u-f,p-g,v-_).normalize(),i[1].setComponents(c+a,u+f,p+g,v+_).normalize(),i[2].setComponents(c+o,u+m,p+b,v+T).normalize(),i[3].setComponents(c-o,u-m,p-b,v-T).normalize(),n)i[4].setComponents(l,d,h,w).normalize(),i[5].setComponents(c-l,u-d,p-h,v-w).normalize();else if(i[4].setComponents(c-l,u-d,p-h,v-w).normalize(),t===In)i[5].setComponents(c+l,u+d,p+h,v+w).normalize();else if(t===Zs)i[5].setComponents(l,d,h,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){as.center.set(0,0,0);let t=im.distanceTo(e.center);return as.radius=.7071067811865476+t,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(lo.x=i.normal.x>0?e.max.x:e.min.x,lo.y=i.normal.y>0?e.max.y:e.min.y,lo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(lo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},iu=new Ge,Co=class s{constructor(){this.coordinateSystem=In,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let r=t[i];iu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new qi),n[i].setFromProjectionMatrix(iu,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new qi),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new s().copy(this)}};var rr=class extends fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Po=new O,Io=new O,su=new Ge,Wr=new ds,ho=new mn,Al=new O,ru=new O,ms=class extends vt{constructor(e=new Ot,t=new rr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Po.fromBufferAttribute(t,i-1),Io.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Po.distanceTo(Io);e.setAttribute("lineDistance",new ct(n,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere),ho.applyMatrix4(i),ho.radius+=r,e.ray.intersectsSphere(ho)===!1)return;su.copy(i).invert(),Wr.copy(e.ray).applyMatrix4(su);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,f=n.index,d=n.attributes.position;if(f!==null){let u=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let b=u,h=g-1;b<h;b+=c){let p=f.getX(b),_=f.getX(b+1),T=fo(this,e,Wr,l,p,_,b);T&&t.push(T)}if(this.isLineLoop){let b=f.getX(g-1),h=f.getX(u),p=fo(this,e,Wr,l,b,h,g-1);p&&t.push(p)}}else{let u=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let b=u,h=g-1;b<h;b+=c){let p=fo(this,e,Wr,l,b,b+1,b);p&&t.push(p)}if(this.isLineLoop){let b=fo(this,e,Wr,l,g-1,u,g-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function fo(s,e,t,n,i,r,a){let o=s.geometry.attributes.position;if(Po.fromBufferAttribute(o,i),Io.fromBufferAttribute(o,r),t.distanceSqToSegment(Po,Io,Al,ru)>n)return;Al.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Al);if(!(c<e.near||c>e.far))return{distance:c,point:ru.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var au=new O,ou=new O,ia=class extends ms{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)au.fromBufferAttribute(t,i),ou.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+au.distanceTo(ou);e.setAttribute("lineDistance",new ct(n,1))}else Le("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},sa=class extends ms{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ar=class extends fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},cu=new Ge,Il=new ds,uo=new mn,po=new O,ra=class extends vt{constructor(e=new Ot,t=new ar){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),uo.copy(n.boundingSphere),uo.applyMatrix4(i),uo.radius+=r,e.ray.intersectsSphere(uo)===!1)return;cu.copy(i).invert(),Il.copy(e.ray).applyMatrix4(cu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,m=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),u=Math.min(c.count,a.start+a.count);for(let g=d,b=u;g<b;g++){let h=c.getX(g);po.fromBufferAttribute(m,h),lu(po,h,l,i,e,t,this)}}else{let d=Math.max(0,a.start),u=Math.min(m.count,a.start+a.count);for(let g=d,b=u;g<b;g++)po.fromBufferAttribute(m,g),lu(po,g,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function lu(s,e,t,n,i,r,a){let o=Il.distanceSqToPoint(s);if(o<t){let l=new O;Il.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var aa=class extends zt{constructor(e=[],t=Ts,n,i,r,a,o,l,c,f){super(e,t,n,i,r,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ln=class extends zt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var _i=class extends zt{constructor(e,t,n=qn,i,r,a,o=Rt,l=Rt,c,f=bi,m=1){if(f!==bi&&f!==Ci)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:m};super(d,i,r,a,o,l,f,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new er(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},oa=class extends _i{constructor(e,t=qn,n=Ts,i,r,a=Rt,o=Rt,l,c=bi){let f={width:e,height:e,depth:1},m=[f,f,f,f,f,f];super(e,e,t,n,i,r,a,o,l,c),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ca=class extends zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Xi=class s extends Ot{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],f=[],m=[],d=0,u=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(f,3)),this.setAttribute("uv",new ct(m,2));function g(b,h,p,_,T,w,v,y,x,M,C){let R=w/x,I=v/M,F=w/2,B=v/2,D=y/2,j=x+1,Z=M+1,K=0,oe=0,Y=new O;for(let ie=0;ie<Z;ie++){let se=ie*I-B;for(let Pe=0;Pe<j;Pe++){let We=Pe*R-F;Y[b]=We*_,Y[h]=se*T,Y[p]=D,c.push(Y.x,Y.y,Y.z),Y[b]=0,Y[h]=0,Y[p]=y>0?1:-1,f.push(Y.x,Y.y,Y.z),m.push(Pe/x),m.push(1-ie/M),K+=1}}for(let ie=0;ie<M;ie++)for(let se=0;se<x;se++){let Pe=d+se+j*ie,We=d+se+j*(ie+1),ee=d+(se+1)+j*(ie+1),Me=d+(se+1)+j*ie;l.push(Pe,We,Me),l.push(We,ee,Me),oe+=6}o.addGroup(u,oe,C),u+=oe,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ji=class s extends Ot{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new O,f=new ze;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let m=0,d=3;m<=t;m++,d+=3){let u=n+m/t*i;c.x=e*Math.cos(u),c.y=e*Math.sin(u),a.push(c.x,c.y,c.z),o.push(0,0,1),f.x=(a[d]/e+1)/2,f.y=(a[d+1]/e+1)/2,l.push(f.x,f.y)}for(let m=1;m<=t;m++)r.push(m,m+1,0);this.setIndex(r),this.setAttribute("position",new ct(a,3)),this.setAttribute("normal",new ct(o,3)),this.setAttribute("uv",new ct(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Dn=class s extends Ot{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let f=[],m=[],d=[],u=[],g=0,b=[],h=n/2,p=0;_(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(f),this.setAttribute("position",new ct(m,3)),this.setAttribute("normal",new ct(d,3)),this.setAttribute("uv",new ct(u,2));function _(){let w=new O,v=new O,y=0,x=(t-e)/n;for(let M=0;M<=r;M++){let C=[],R=M/r,I=R*(t-e)+e;for(let F=0;F<=i;F++){let B=F/i,D=B*l+o,j=Math.sin(D),Z=Math.cos(D);v.x=I*j,v.y=-R*n+h,v.z=I*Z,m.push(v.x,v.y,v.z),w.set(j,x,Z).normalize(),d.push(w.x,w.y,w.z),u.push(B,1-R),C.push(g++)}b.push(C)}for(let M=0;M<i;M++)for(let C=0;C<r;C++){let R=b[C][M],I=b[C+1][M],F=b[C+1][M+1],B=b[C][M+1];(e>0||C!==0)&&(f.push(R,I,B),y+=3),(t>0||C!==r-1)&&(f.push(I,F,B),y+=3)}c.addGroup(p,y,0),p+=y}function T(w){let v=g,y=new ze,x=new O,M=0,C=w===!0?e:t,R=w===!0?1:-1;for(let F=1;F<=i;F++)m.push(0,h*R,0),d.push(0,R,0),u.push(.5,.5),g++;let I=g;for(let F=0;F<=i;F++){let D=F/i*l+o,j=Math.cos(D),Z=Math.sin(D);x.x=C*Z,x.y=h*R,x.z=C*j,m.push(x.x,x.y,x.z),d.push(0,R,0),y.x=j*.5+.5,y.y=Z*.5*R+.5,u.push(y.x,y.y),g++}for(let F=0;F<i;F++){let B=v+F,D=I+F;w===!0?f.push(D,D+1,B):f.push(D+1,D,B),M+=3}c.addGroup(p,M,w===!0?1:2),p+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},yi=class s extends Dn{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},la=class s extends Ot{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];o(i),c(n),f(),this.setAttribute("position",new ct(r,3)),this.setAttribute("normal",new ct(r.slice(),3)),this.setAttribute("uv",new ct(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let T=new O,w=new O,v=new O;for(let y=0;y<t.length;y+=3)u(t[y+0],T),u(t[y+1],w),u(t[y+2],v),l(T,w,v,_)}function l(_,T,w,v){let y=v+1,x=[];for(let M=0;M<=y;M++){x[M]=[];let C=_.clone().lerp(w,M/y),R=T.clone().lerp(w,M/y),I=y-M;for(let F=0;F<=I;F++)F===0&&M===y?x[M][F]=C:x[M][F]=C.clone().lerp(R,F/I)}for(let M=0;M<y;M++)for(let C=0;C<2*(y-M)-1;C++){let R=Math.floor(C/2);C%2===0?(d(x[M][R+1]),d(x[M+1][R]),d(x[M][R])):(d(x[M][R+1]),d(x[M+1][R+1]),d(x[M+1][R]))}}function c(_){let T=new O;for(let w=0;w<r.length;w+=3)T.x=r[w+0],T.y=r[w+1],T.z=r[w+2],T.normalize().multiplyScalar(_),r[w+0]=T.x,r[w+1]=T.y,r[w+2]=T.z}function f(){let _=new O;for(let T=0;T<r.length;T+=3){_.x=r[T+0],_.y=r[T+1],_.z=r[T+2];let w=h(_)/2/Math.PI+.5,v=p(_)/Math.PI+.5;a.push(w,1-v)}g(),m()}function m(){for(let _=0;_<a.length;_+=6){let T=a[_+0],w=a[_+2],v=a[_+4],y=Math.max(T,w,v),x=Math.min(T,w,v);y>.9&&x<.1&&(T<.2&&(a[_+0]+=1),w<.2&&(a[_+2]+=1),v<.2&&(a[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function u(_,T){let w=_*3;T.x=e[w+0],T.y=e[w+1],T.z=e[w+2]}function g(){let _=new O,T=new O,w=new O,v=new O,y=new ze,x=new ze,M=new ze;for(let C=0,R=0;C<r.length;C+=9,R+=6){_.set(r[C+0],r[C+1],r[C+2]),T.set(r[C+3],r[C+4],r[C+5]),w.set(r[C+6],r[C+7],r[C+8]),y.set(a[R+0],a[R+1]),x.set(a[R+2],a[R+3]),M.set(a[R+4],a[R+5]),v.copy(_).add(T).add(w).divideScalar(3);let I=h(v);b(y,R+0,_,I),b(x,R+2,T,I),b(M,R+4,w,I)}}function b(_,T,w,v){v<0&&_.x===1&&(a[T]=_.x-1),w.x===0&&w.z===0&&(a[T]=v/2/Math.PI+.5)}function h(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}};var ha=class s extends la{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var fa=class s extends la{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},gs=class s extends Ot{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,f=l+1,m=e/o,d=t/l,u=[],g=[],b=[],h=[];for(let p=0;p<f;p++){let _=p*d-a;for(let T=0;T<c;T++){let w=T*m-r;g.push(w,-_,0),b.push(0,0,1),h.push(T/o),h.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<o;_++){let T=_+c*p,w=_+c*(p+1),v=_+1+c*(p+1),y=_+1+c*p;u.push(T,w,y),u.push(w,v,y)}this.setIndex(u),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(b,3)),this.setAttribute("uv",new ct(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},bs=class s extends Ot{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],f=[],m=e,d=(t-e)/i,u=new O,g=new ze;for(let b=0;b<=i;b++){for(let h=0;h<=n;h++){let p=r+h/n*a;u.x=m*Math.cos(p),u.y=m*Math.sin(p),l.push(u.x,u.y,u.z),c.push(0,0,1),g.x=(u.x/t+1)/2,g.y=(u.y/t+1)/2,f.push(g.x,g.y)}m+=d}for(let b=0;b<i;b++){let h=b*(n+1);for(let p=0;p<n;p++){let _=p+h,T=_,w=_+n+1,v=_+n+2,y=_+1;o.push(T,w,y),o.push(w,v,y)}}this.setIndex(o),this.setAttribute("position",new ct(l,3)),this.setAttribute("normal",new ct(c,3)),this.setAttribute("uv",new ct(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var ua=class s extends Ot{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,f=[],m=new O,d=new O,u=[],g=[],b=[],h=[];for(let p=0;p<=n;p++){let _=[],T=p/n,w=a+T*o,v=e*Math.cos(w),y=Math.sqrt(e*e-v*v),x=0;p===0&&a===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let M=0;M<=t;M++){let C=M/t,R=i+C*r;m.x=-y*Math.cos(R),m.y=v,m.z=y*Math.sin(R),g.push(m.x,m.y,m.z),d.copy(m).normalize(),b.push(d.x,d.y,d.z),h.push(C+x,1-T),_.push(c++)}f.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){let T=f[p][_+1],w=f[p][_],v=f[p+1][_],y=f[p+1][_+1];(p!==0||a>0)&&u.push(T,w,y),(p!==n-1||l<Math.PI)&&u.push(w,v,y)}this.setIndex(u),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(b,3)),this.setAttribute("uv",new ct(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var un=class s extends Ot{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],f=[],m=[],d=new O,u=new O,g=new O;for(let b=0;b<=n;b++){let h=a+b/n*o;for(let p=0;p<=i;p++){let _=p/i*r;u.x=(e+t*Math.cos(h))*Math.cos(_),u.y=(e+t*Math.cos(h))*Math.sin(_),u.z=t*Math.sin(h),c.push(u.x,u.y,u.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),g.subVectors(u,d).normalize(),f.push(g.x,g.y,g.z),m.push(p/i),m.push(b/n)}}for(let b=1;b<=n;b++)for(let h=1;h<=i;h++){let p=(i+1)*b+h-1,_=(i+1)*(b-1)+h-1,T=(i+1)*(b-1)+h,w=(i+1)*b+h;l.push(p,_,w),l.push(_,T,w)}this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(f,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Es(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(hu(i))i.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(hu(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function sn(s){let e={};for(let t=0;t<s.length;t++){let n=Es(s[t]);for(let i in n)e[i]=n[i]}return e}function hu(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function sm(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ph(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}var rd={clone:Es,merge:sn},rm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,am=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Zn=class extends fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rm,this.fragmentShader=am,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Es(e.uniforms),this.uniformsGroups=sm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new _e().setHex(i.value);break;case"v2":this.uniforms[n].value=new ze().fromArray(i.value);break;case"v3":this.uniforms[n].value=new O().fromArray(i.value);break;case"v4":this.uniforms[n].value=new mt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new He().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ge().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Lo=class extends Zn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},xs=class extends fn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ca,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},dn=class extends xs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ze(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new _e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return ls('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){ls('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var vi=class extends fn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new _e(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ca,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Do=class extends fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},No=class extends fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Gi(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function qr(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function om(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function fu(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function cm(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var $n=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Fo=class extends $n{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:os,endingEnd:os}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case cs:r=e,o=2*t-n;break;case Kr:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case cs:a=e,l=2*n-t;break;case Kr:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,f=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*f,this._offsetNext=a*f}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,f=this._offsetPrev,m=this._offsetNext,d=this._weightPrev,u=this._weightNext,g=(n-t)/(i-t),b=g*g,h=b*g,p=-d*h+2*d*b-d*g,_=(1+d)*h+(-1.5-2*d)*b+(-.5+d)*g+1,T=(-1-u)*h+(1.5+u)*b+.5*g,w=u*h-u*b;for(let v=0;v!==o;++v)r[v]=p*a[f+v]+_*a[c+v]+T*a[l+v]+w*a[m+v];return r}},da=class extends $n{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,f=(n-t)/(i-t),m=1-f;for(let d=0;d!==o;++d)r[d]=a[c+d]*m+a[l+d]*f;return r}},Uo=class extends $n{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Oo=class extends $n{interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,f=this.inTangents,m=this.outTangents;if(!f||!m){let g=(n-t)/(i-t),b=1-g;for(let h=0;h!==o;++h)r[h]=a[c+h]*b+a[l+h]*g;return r}let d=o*2,u=e-1;for(let g=0;g!==o;++g){let b=a[c+g],h=a[l+g],p=u*d+g*2,_=m[p],T=m[p+1],w=e*d+g*2,v=f[w],y=f[w+1],x=hm(n,t,_,v,i);r[g]=ad(x,b,T,y,h)}return r}};function ad(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function lm(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function hm(s,e,t,n,i){let r=(s-e)/(i-e);for(let a=0;a<8;a++){let o=ad(r,e,t,n,i)-s;if(Math.abs(o)<1e-10)break;let l=lm(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var gn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Gi(t,this.TimeBufferType),this.values=Gi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Gi(e.times,Array),values:Gi(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),qr(e.settings)&&(n.settings={inTangents:Gi(e.settings.inTangents,Array),outTangents:Gi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Uo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new da(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Oo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case hs:t=this.InterpolantFactoryMethodDiscrete;break;case fs:t=this.InterpolantFactoryMethodLinear;break;case bo:t=this.InterpolantFactoryMethodSmooth;break;case Pl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Le("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hs;case this.InterpolantFactoryMethodLinear:return fs;case this.InterpolantFactoryMethodSmooth:return bo;case this.InterpolantFactoryMethodBezier:return Pl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;qr(this.settings)&&(uu(this.settings.inTangents,e),uu(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;qr(this.settings)&&(du(this.settings.inTangents,e),du(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Be("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Be("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Be("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Be("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&vp(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){Be("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===bo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],f=e[o+1];if(c!==f&&(o!==1||c!==e[0]))if(i)l=!0;else{let m=o*n,d=m-n,u=m+n;for(let g=0;g!==n;++g){let b=t[m+g];if(b!==t[d+g]||b!==t[u+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let m=o*n,d=a*n;for(let u=0;u!==n;++u)t[d+u]=t[m+u]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,qr(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function uu(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]+=e}function du(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}gn.prototype.ValueTypeName="";gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=fs;var Mi=class extends gn{constructor(e,t,n){super(e,t,n)}};Mi.prototype.ValueTypeName="bool";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=hs;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var pa=class extends gn{constructor(e,t,n,i){super(e,t,n,i)}};pa.prototype.ValueTypeName="color";var Si=class extends gn{constructor(e,t,n,i){super(e,t,n,i)}};Si.prototype.ValueTypeName="number";var ko=class extends $n{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let f=c+o;c!==f;c+=4)ft.slerpFlat(r,0,a,c-o,a,c,l);return r}},Wn=class extends gn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new ko(this.times,this.values,this.getValueSize(),e)}};Wn.prototype.ValueTypeName="quaternion";Wn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ti=class extends gn{constructor(e,t,n){super(e,t,n)}};Ti.prototype.ValueTypeName="string";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=hs;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var Ki=class extends gn{constructor(e,t,n,i){super(e,t,n,i)}};Ki.prototype.ValueTypeName="vector";var wi=class{constructor(e="",t=-1,n=[],i=Pc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ni(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(um(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(gn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let f=om(l);l=fu(l,1,f),c=fu(c,1,f),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Si(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],f=c.name.match(r);if(f&&f.length>1){let m=f[1],d=i[m];d||(i[m]=d=[]),d.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function fm(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Si;case"vector":case"vector2":case"vector3":case"vector4":return Ki;case"color":return pa;case"quaternion":return Wn;case"bool":case"boolean":return Mi;case"string":return Ti}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function um(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=fm(s.type);if(s.times===void 0){let n=[],i=[];cm(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),qr(s.settings)&&(t.settings={inTangents:Gi(s.settings.inTangents,Float32Array),outTangents:Gi(s.settings.outTangents,Float32Array)}),t}var Yn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(pu(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!pu(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function pu(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Bo=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(f){o++,r===!1&&i.onStart!==void 0&&i.onStart(f,a,o),r=!0},this.itemEnd=function(f){a++,i.onProgress!==void 0&&i.onProgress(f,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,m){return c.push(f,m),this},this.removeHandler=function(f){let m=c.indexOf(f);return m!==-1&&c.splice(m,2),this},this.getHandler=function(f){for(let m=0,d=c.length;m<d;m+=2){let u=c[m],g=c[m+1];if(u.global&&(u.lastIndex=0),u.test(f))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},od=new Bo,Qn=class{constructor(e){this.manager=e!==void 0?e:od,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Qn.DEFAULT_MATERIAL_NAME="__DEFAULT";var mi={},Ll=class extends Error{constructor(e,t){super(e),this.response=t}},or=class extends Qn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Yn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(mi[e]!==void 0){mi[e].push({onLoad:t,onProgress:n,onError:i});return}mi[e]=[],mi[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Le("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let f=mi[e],m=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),u=d?parseInt(d):0,g=u!==0,b=0,h=new ReadableStream({start(p){_();function _(){m.read().then(({done:T,value:w})=>{if(T)p.close();else{b+=w.byteLength;let v=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:u});for(let y=0,x=f.length;y<x;y++){let M=f[y];M.onProgress&&M.onProgress(v)}p.enqueue(w),_()}},T=>{p.error(T)})}}});return new Response(h)}else throw new Ll(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(f=>new DOMParser().parseFromString(f,o));case"json":return c.json();default:if(o==="")return c.text();{let m=/charset="?([^;"\s]*)"?/i.exec(o),d=m&&m[1]?m[1].toLowerCase():void 0,u=new TextDecoder(d);return c.arrayBuffer().then(g=>u.decode(g))}}}).then(c=>{Yn.add(`file:${e}`,c);let f=mi[e];delete mi[e];for(let m=0,d=f.length;m<d;m++){let u=f[m];u.onLoad&&u.onLoad(c)}}).catch(c=>{let f=mi[e];if(f===void 0)throw this.manager.itemError(e),c;delete mi[e];for(let m=0,d=f.length;m<d;m++){let u=f[m];u.onError&&u.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var qs=new WeakMap,zo=class extends Qn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Yn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let m=qs.get(a);m===void 0&&(m=[],qs.set(a,m)),m.push({onLoad:t,onError:i})}return a}let o=$s("img");function l(){f(),t&&t(this);let m=qs.get(this)||[];for(let d=0;d<m.length;d++){let u=m[d];u.onLoad&&u.onLoad(this)}qs.delete(this),r.manager.itemEnd(e)}function c(m){f(),i&&i(m),Yn.remove(`image:${e}`);let d=qs.get(this)||[];for(let u=0;u<d.length;u++){let g=d[u];g.onError&&g.onError(m)}qs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function f(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Yn.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var _s=class extends Qn{constructor(e){super(e)}load(e,t,n,i){let r=new zt,a=new zo(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},ys=class extends vt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ma=class extends ys{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},El=new Ge,mu=new O,gu=new O,cr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=xn,this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qi,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;mu.setFromMatrixPosition(e.matrixWorld),t.position.copy(mu),gu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){El.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(El,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===Zs||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(El)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},mo=new O,go=new ft,Jn=new O,ga=class extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(mo,go,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mo,go,Jn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(mo,go,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mo,go,Jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},zi=new O,bu=new ze,xu=new ze,Yt=class extends ga{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=us*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Xr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return us*2*Math.atan(Math.tan(Xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,t){return this.getViewBounds(e,bu,xu),t.subVectors(xu,bu)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Xr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Dl=class extends cr{constructor(){super(new Yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=us*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},ba=class extends ys{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Dl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Nl=class extends cr{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0}},xa=class extends ys{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Nl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ai=class extends ga{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Fl=class extends cr{constructor(){super(new Ai(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},vs=class extends ys{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Fl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ei=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Rl=new WeakMap,_a=class extends Qn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Le("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Le("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Yn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{Rl.has(a)===!0?(i&&i(Rl.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Yn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Rl.set(l,c),Yn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Yn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Xs=-90,js=1,lr=class extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Yt(Xs,js,e,t);i.layers=this.layers,this.add(i);let r=new Yt(Xs,js,e,t);r.layers=this.layers,this.add(r);let a=new Yt(Xs,js,e,t);a.layers=this.layers,this.add(a);let o=new Yt(Xs,js,e,t);o.layers=this.layers,this.add(o);let l=new Yt(Xs,js,e,t);l.layers=this.layers,this.add(l);let c=new Yt(Xs,js,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===In)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,f]=this.children,m=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;e.isWebGLRenderer===!0?h=e.state.buffers.depth.getReversed():h=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=b,e.setRenderTarget(n,5,i),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(m,d,u),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Go=class extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Ho=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){ft.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let a=this._workIndex*r;ft.multiplyQuaternionsFlat(e,a,e,t,e,n),ft.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){let a=1-i;for(let o=0;o!==r;++o){let l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},mh="\\[\\]\\.:\\/",dm=new RegExp("["+mh+"]","g"),gh="[^"+mh+"]",pm="[^"+mh.replace("\\.","")+"]",mm=/((?:WC+[\/:])*)/.source.replace("WC",gh),gm=/(WCOD+)?/.source.replace("WCOD",pm),bm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gh),xm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gh),_m=new RegExp("^"+mm+gm+bm+xm+"$"),ym=["material","materials","bones","map"],Ul=class{constructor(e,t,n){let i=n||gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},gt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(dm,"")}static parseTrackName(e){let t=_m.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);ym.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Le("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Be("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Be("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===c){c=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Be("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Be("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Be("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;Be("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};gt.Composite=Ul;gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gt.prototype.GetterByBindingType=[gt.prototype._getValue_direct,gt.prototype._getValue_array,gt.prototype._getValue_arrayElement,gt.prototype._getValue_toArray];gt.prototype.SetterByBindingTypeAndVersioning=[[gt.prototype._setValue_direct,gt.prototype._setValue_direct_setNeedsUpdate,gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_array,gt.prototype._setValue_array_setNeedsUpdate,gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_arrayElement,gt.prototype._setValue_arrayElement_setNeedsUpdate,gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_fromArray,gt.prototype._setValue_fromArray_setNeedsUpdate,gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Vo=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,a=r.length,o=new Array(a),l={endingStart:os,endingEnd:os};for(let c=0;c!==a;++c){let f=r[c].createInterpolant(null);o[c]=f,f.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Vu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case qu:for(let f=0,m=l.length;f!==m;++f)l[f].evaluate(a),c[f].accumulateAdditive(o);break;case Pc:default:for(let f=0,m=l.length;f!==m;++f)l[f].evaluate(a),c[f].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,a=n===Wu;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===Cc){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=cs,i.endingEnd=cs):(e?i.endingStart=this.zeroSlopeAtStart?cs:os:i.endingStart=Kr,t?i.endingEnd=this.zeroSlopeAtEnd?cs:os:i.endingEnd=Kr)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}},vm=new Float32Array(1),ya=class extends Hn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,f=c[l];f===void 0&&(f={},c[l]=f);for(let m=0;m!==r;++m){let d=i[m],u=d.name,g=f[u];if(g!==void 0)++g.referenceCount,a[m]=g;else{if(g=a[m],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,u));continue}let b=t&&t._propertyBindings[m].binding.parsedPath;g=new Ho(gt.create(n,u,b),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,u),a[m]=g}o[m].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],f=e._byClipCacheIndex;c._byClipCacheIndex=f,l[f]=c,l.pop(),e._byClipCacheIndex=null;let m=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete m[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new da(new Float32Array(2),new Float32Array(2),1,vm),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,a=typeof e=="string"?wi.findByName(i,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Pc),l!==void 0){let m=l.actionByRoot[r];if(m!==void 0&&m.blendMode===n)return m;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let f=new Vo(this,a,t,n);return this._bindAction(f,c),this._addInactiveAction(f,o,r),f}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?wi.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let f=c._cacheIndex,m=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,m._cacheIndex=f,t[f]=m,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Ol=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};function bh(s,e,t,n){let i=Mm(n);switch(t){case nh:return s*e;case pr:return s*e/i.components*i.byteLength;case Yo:return s*e/i.components*i.byteLength;case Ji:return s*e*2/i.components*i.byteLength;case Zo:return s*e*2/i.components*i.byteLength;case ih:return s*e*3/i.components*i.byteLength;case Nn:return s*e*4/i.components*i.byteLength;case $o:return s*e*4/i.components*i.byteLength;case Ma:case Sa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ta:case wa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ec:case nc:return Math.max(s,16)*Math.max(e,8)/4;case Qo:case tc:return Math.max(s,8)*Math.max(e,8)/2;case ic:case sc:case ac:case oc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case rc:case Aa:case cc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case lc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case hc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case fc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case uc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case dc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case pc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case mc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case gc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case bc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case xc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case _c:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case yc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case vc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Mc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Sc:case Tc:case wc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ac:case Ec:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ea:case Rc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Mm(s){switch(s){case xn:case $l:return{byteLength:1,components:1};case dr:case Ql:case Xn:return{byteLength:2,components:1};case Ko:case Jo:return{byteLength:2,components:4};case qn:case jo:case Sn:return{byteLength:4,components:1};case eh:case th:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Cd(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Tm(s){let e=new WeakMap;function t(o,l){let c=o.array,f=o.usage,m=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,f),o.onUploadCallback();let u;if(c instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=s.SHORT;else if(c instanceof Uint32Array)u=s.UNSIGNED_INT;else if(c instanceof Int32Array)u=s.INT;else if(c instanceof Int8Array)u=s.BYTE;else if(c instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:m}}function n(o,l,c){let f=l.array,m=l.updateRanges;if(s.bindBuffer(c,o),m.length===0)s.bufferSubData(c,0,f);else{m.sort((u,g)=>u.start-g.start);let d=0;for(let u=1;u<m.length;u++){let g=m[d],b=m[u];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++d,m[d]=b)}m.length=d+1;for(let u=0,g=m.length;u<g;u++){let b=m[u];s.bufferSubData(c,b.start*f.BYTES_PER_ELEMENT,f,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var wm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Am=`#ifdef USE_ALPHAHASH
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
#endif`,Em=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Im=`#ifdef USE_AOMAP
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
#endif`,Lm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dm=`#ifdef USE_BATCHING
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
#endif`,Nm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Um=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Om=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,km=`#ifdef USE_IRIDESCENCE
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
#endif`,Bm=`#ifdef USE_BUMPMAP
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
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Xm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Km=`#define PI 3.141592653589793
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
} // validated`,Jm=`vec3 transformedNormal = objectNormal;
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
#endif`,Ym=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$m=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,e0="gl_FragColor = linearToOutputTexel( gl_FragColor );",t0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,n0=`#ifdef USE_ENVMAP
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
#endif`,i0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,s0=`#ifdef USE_ENVMAP
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
#endif`,r0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,a0=`#ifdef USE_ENVMAP
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
#endif`,o0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,c0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,l0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,h0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,f0=`#ifdef USE_GRADIENTMAP
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
}`,u0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,d0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,p0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,m0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,g0=`#ifdef USE_ENVMAP
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
#endif`,b0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,x0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,v0=`PhysicalMaterial material;
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
#endif`,M0=`uniform sampler2D dfgLUT;
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
}`,S0=`
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
#endif`,T0=`#if defined( RE_IndirectDiffuse )
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
#endif`,w0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,A0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,E0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,R0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,I0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,L0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,D0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,N0=`#if defined( USE_POINTS_UV )
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
#endif`,F0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,U0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,O0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,k0=`#if defined( USE_MORPHCOLORS )
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
#endif`,B0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z0=`#ifdef USE_MORPHTARGETS
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
#endif`,G0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,V0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,W0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,j0=`#ifdef USE_NORMALMAP
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
#endif`,K0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,J0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Y0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Z0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Q0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,eg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ng=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ig=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ag=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,og=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lg=`float getShadowMask() {
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
}`,hg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fg=`#ifdef USE_SKINNING
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
#endif`,ug=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dg=`#ifdef USE_SKINNING
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
#endif`,pg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xg=`#ifdef USE_TRANSMISSION
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
#endif`,_g=`#ifdef USE_TRANSMISSION
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
#endif`,yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Tg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wg=`uniform sampler2D t2D;
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
}`,Ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eg=`uniform float backgroundBlurriness;
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
}`,Rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pg=`#include <common>
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
}`,Ig=`#if DEPTH_PACKING == 3200
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
}`,Lg=`#define DISTANCE
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
}`,Dg=`#define DISTANCE
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
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ug=`uniform float scale;
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
}`,Og=`uniform vec3 diffuse;
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
}`,kg=`#include <common>
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
}`,Bg=`uniform vec3 diffuse;
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
}`,zg=`#define LAMBERT
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
}`,Gg=`#define LAMBERT
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
}`,Hg=`#define MATCAP
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
}`,Vg=`#define MATCAP
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
}`,Wg=`#define NORMAL
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
}`,qg=`#define NORMAL
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
}`,Xg=`#define PHONG
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
}`,jg=`#define PHONG
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
}`,Kg=`#define STANDARD
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
}`,Jg=`#define STANDARD
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
}`,Yg=`#define TOON
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
}`,Zg=`#define TOON
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
}`,$g=`uniform float size;
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
}`,Qg=`uniform vec3 diffuse;
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
}`,eb=`#include <common>
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
}`,tb=`uniform vec3 color;
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
}`,nb=`uniform float rotation;
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
}`,ib=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:wm,alphahash_pars_fragment:Am,alphamap_fragment:Em,alphamap_pars_fragment:Rm,alphatest_fragment:Cm,alphatest_pars_fragment:Pm,aomap_fragment:Im,aomap_pars_fragment:Lm,batching_pars_vertex:Dm,batching_vertex:Nm,begin_vertex:Fm,beginnormal_vertex:Um,bsdfs:Om,iridescence_fragment:km,bumpmap_pars_fragment:Bm,clipping_planes_fragment:zm,clipping_planes_pars_fragment:Gm,clipping_planes_pars_vertex:Hm,clipping_planes_vertex:Vm,color_fragment:Wm,color_pars_fragment:qm,color_pars_vertex:Xm,color_vertex:jm,common:Km,defaultnormal_vertex:Jm,displacementmap_pars_vertex:Ym,displacementmap_vertex:Zm,emissivemap_fragment:$m,emissivemap_pars_fragment:Qm,colorspace_fragment:e0,colorspace_pars_fragment:t0,envmap_fragment:n0,envmap_common_pars_fragment:i0,envmap_pars_fragment:s0,envmap_pars_vertex:r0,envmap_physical_pars_fragment:g0,envmap_vertex:a0,fog_vertex:o0,fog_pars_vertex:c0,fog_fragment:l0,fog_pars_fragment:h0,gradientmap_pars_fragment:f0,lightmap_pars_fragment:u0,lights_lambert_fragment:d0,lights_lambert_pars_fragment:p0,lights_pars_begin:m0,lights_toon_fragment:b0,lights_toon_pars_fragment:x0,lights_phong_fragment:_0,lights_phong_pars_fragment:y0,lights_physical_fragment:v0,lights_physical_pars_fragment:M0,lights_fragment_begin:S0,lights_fragment_maps:T0,lights_fragment_end:w0,lightprobes_pars_fragment:A0,logdepthbuf_fragment:E0,logdepthbuf_pars_fragment:R0,logdepthbuf_pars_vertex:C0,logdepthbuf_vertex:P0,map_fragment:I0,map_pars_fragment:L0,map_particle_fragment:D0,map_particle_pars_fragment:N0,metalnessmap_fragment:F0,metalnessmap_pars_fragment:U0,morphinstance_vertex:O0,morphcolor_vertex:k0,morphnormal_vertex:B0,morphtarget_pars_vertex:z0,morphtarget_vertex:G0,normal_fragment_begin:H0,normal_fragment_maps:V0,normal_pars_fragment:W0,normal_pars_vertex:q0,normal_vertex:X0,normalmap_pars_fragment:j0,clearcoat_normal_fragment_begin:K0,clearcoat_normal_fragment_maps:J0,clearcoat_pars_fragment:Y0,iridescence_pars_fragment:Z0,opaque_fragment:$0,packing:Q0,premultiplied_alpha_fragment:eg,project_vertex:tg,dithering_fragment:ng,dithering_pars_fragment:ig,roughnessmap_fragment:sg,roughnessmap_pars_fragment:rg,shadowmap_pars_fragment:ag,shadowmap_pars_vertex:og,shadowmap_vertex:cg,shadowmask_pars_fragment:lg,skinbase_vertex:hg,skinning_pars_vertex:fg,skinning_vertex:ug,skinnormal_vertex:dg,specularmap_fragment:pg,specularmap_pars_fragment:mg,tonemapping_fragment:gg,tonemapping_pars_fragment:bg,transmission_fragment:xg,transmission_pars_fragment:_g,uv_pars_fragment:yg,uv_pars_vertex:vg,uv_vertex:Mg,worldpos_vertex:Sg,background_vert:Tg,background_frag:wg,backgroundCube_vert:Ag,backgroundCube_frag:Eg,cube_vert:Rg,cube_frag:Cg,depth_vert:Pg,depth_frag:Ig,distance_vert:Lg,distance_frag:Dg,equirect_vert:Ng,equirect_frag:Fg,linedashed_vert:Ug,linedashed_frag:Og,meshbasic_vert:kg,meshbasic_frag:Bg,meshlambert_vert:zg,meshlambert_frag:Gg,meshmatcap_vert:Hg,meshmatcap_frag:Vg,meshnormal_vert:Wg,meshnormal_frag:qg,meshphong_vert:Xg,meshphong_frag:jg,meshphysical_vert:Kg,meshphysical_frag:Jg,meshtoon_vert:Yg,meshtoon_frag:Zg,points_vert:$g,points_frag:Qg,shadow_vert:eb,shadow_frag:tb,sprite_vert:nb,sprite_frag:ib},ve={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},si={basic:{uniforms:sn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:sn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new _e(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:sn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:sn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:sn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new _e(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:sn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:sn([ve.points,ve.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:sn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:sn([ve.common,ve.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:sn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:sn([ve.sprite,ve.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:sn([ve.common,ve.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:sn([ve.lights,ve.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};si.physical={uniforms:sn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new He},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var Dc={r:0,b:0,g:0},sb=new Ge,Pd=new He;Pd.set(-1,0,0,0,1,0,0,0,1);function rb(s,e,t,n,i,r){let a=new _e(0),o=i===!0?0:1,l,c,f=null,m=0,d=null;function u(_){let T=_.isScene===!0?_.background:null;if(T&&T.isTexture){let w=_.backgroundBlurriness>0;T=e.get(T,w)}return T}function g(_){let T=!1,w=u(_);w===null?h(a,o):w&&w.isColor&&(h(w,1),T=!0);let v=s.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function b(_,T){let w=u(T);w&&w.isCubeTexture?(c===void 0&&(c=new $e(new Xi(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:Es(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,y,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=w,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(sb.makeRotationFromEuler(T.backgroundRotation)).transpose(),w.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Pd),c.material.toneMapped=Ze.getTransfer(w.colorSpace)!==ht,(f!==w||m!==w.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,f=w,m=w.version,d=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new $e(new gs(2,2),new Zn({name:"BackgroundMaterial",uniforms:Es(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(w.colorSpace)!==ht,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||m!==w.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,f=w,m=w.version,d=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function h(_,T){_.getRGB(Dc,ph(s)),t.buffers.color.setClear(Dc.r,Dc.g,Dc.b,T,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,T=1){a.set(_),o=T,h(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,h(a,o)},render:g,addToRenderList:b,dispose:p}}function ab(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(I,F,B,D,j){let Z=!1,K=m(I,D,B,F);r!==K&&(r=K,c(r.object)),Z=u(I,D,B,j),Z&&g(I,D,B,j),j!==null&&e.update(j,s.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,w(I,F,B,D),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return s.createVertexArray()}function c(I){return s.bindVertexArray(I)}function f(I){return s.deleteVertexArray(I)}function m(I,F,B,D){let j=D.wireframe===!0,Z=n[F.id];Z===void 0&&(Z={},n[F.id]=Z);let K=I.isInstancedMesh===!0?I.id:0,oe=Z[K];oe===void 0&&(oe={},Z[K]=oe);let Y=oe[B.id];Y===void 0&&(Y={},oe[B.id]=Y);let ie=Y[j];return ie===void 0&&(ie=d(l()),Y[j]=ie),ie}function d(I){let F=[],B=[],D=[];for(let j=0;j<t;j++)F[j]=0,B[j]=0,D[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:B,attributeDivisors:D,object:I,attributes:{},index:null}}function u(I,F,B,D){let j=r.attributes,Z=F.attributes,K=0,oe=B.getAttributes();for(let Y in oe)if(oe[Y].location>=0){let se=j[Y],Pe=Z[Y];if(Pe===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(Pe=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(Pe=I.instanceColor)),se===void 0||se.attribute!==Pe||Pe&&se.data!==Pe.data)return!0;K++}return r.attributesNum!==K||r.index!==D}function g(I,F,B,D){let j={},Z=F.attributes,K=0,oe=B.getAttributes();for(let Y in oe)if(oe[Y].location>=0){let se=Z[Y];se===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(se=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(se=I.instanceColor));let Pe={};Pe.attribute=se,se&&se.data&&(Pe.data=se.data),j[Y]=Pe,K++}r.attributes=j,r.attributesNum=K,r.index=D}function b(){let I=r.newAttributes;for(let F=0,B=I.length;F<B;F++)I[F]=0}function h(I){p(I,0)}function p(I,F){let B=r.newAttributes,D=r.enabledAttributes,j=r.attributeDivisors;B[I]=1,D[I]===0&&(s.enableVertexAttribArray(I),D[I]=1),j[I]!==F&&(s.vertexAttribDivisor(I,F),j[I]=F)}function _(){let I=r.newAttributes,F=r.enabledAttributes;for(let B=0,D=F.length;B<D;B++)F[B]!==I[B]&&(s.disableVertexAttribArray(B),F[B]=0)}function T(I,F,B,D,j,Z,K){K===!0?s.vertexAttribIPointer(I,F,B,j,Z):s.vertexAttribPointer(I,F,B,D,j,Z)}function w(I,F,B,D){b();let j=D.attributes,Z=B.getAttributes(),K=F.defaultAttributeValues;for(let oe in Z){let Y=Z[oe];if(Y.location>=0){let ie=j[oe];if(ie===void 0&&(oe==="instanceMatrix"&&I.instanceMatrix&&(ie=I.instanceMatrix),oe==="instanceColor"&&I.instanceColor&&(ie=I.instanceColor)),ie!==void 0){let se=ie.normalized,Pe=ie.itemSize,We=e.get(ie);if(We===void 0)continue;let ee=We.buffer,Me=We.type,Ee=We.bytesPerElement,Ue=Me===s.INT||Me===s.UNSIGNED_INT||ie.gpuType===jo;if(ie.isInterleavedBufferAttribute){let Se=ie.data,Xe=Se.isInterleavedBuffer===!0?Se.stride:Se.itemSize,Nt=ie.offset;if(Se.isInstancedInterleavedBuffer||Se.isInstancedBufferAttribute){for(let ke=0;ke<Y.locationSize;ke++)p(Y.location+ke,Se.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let ke=0;ke<Y.locationSize;ke++)h(Y.location+ke);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let ke=0;ke<Y.locationSize;ke++)T(Y.location+ke,Pe/Y.locationSize,Me,se,Xe*Ee,(Nt+Pe/Y.locationSize*ke)*Ee,Ue)}else{if(ie.isInstancedBufferAttribute){for(let Se=0;Se<Y.locationSize;Se++)p(Y.location+Se,ie.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Se=0;Se<Y.locationSize;Se++)h(Y.location+Se);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let Se=0;Se<Y.locationSize;Se++)T(Y.location+Se,Pe/Y.locationSize,Me,se,Pe*Ee,Pe/Y.locationSize*Se*Ee,Ue)}}else if(K!==void 0){let se=K[oe];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(Y.location,se);break;case 3:s.vertexAttrib3fv(Y.location,se);break;case 4:s.vertexAttrib4fv(Y.location,se);break;default:s.vertexAttrib1fv(Y.location,se)}}}}_()}function v(){C();for(let I in n){let F=n[I];for(let B in F){let D=F[B];for(let j in D){let Z=D[j];for(let K in Z)f(Z[K].object),delete Z[K];delete D[j]}}delete n[I]}}function y(I){if(n[I.id]===void 0)return;let F=n[I.id];for(let B in F){let D=F[B];for(let j in D){let Z=D[j];for(let K in Z)f(Z[K].object),delete Z[K];delete D[j]}}delete n[I.id]}function x(I){for(let F in n){let B=n[F];for(let D in B){let j=B[D];if(j[I.id]===void 0)continue;let Z=j[I.id];for(let K in Z)f(Z[K].object),delete Z[K];delete j[I.id]}}}function M(I){for(let F in n){let B=n[F],D=I.isInstancedMesh===!0?I.id:0,j=B[D];if(j!==void 0){for(let Z in j){let K=j[Z];for(let oe in K)f(K[oe].object),delete K[oe];delete j[Z]}delete B[D],Object.keys(B).length===0&&delete n[F]}}}function C(){R(),a=!0,r!==i&&(r=i,c(r.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:R,dispose:v,releaseStatesOfGeometry:y,releaseStatesOfObject:M,releaseStatesOfProgram:x,initAttributes:b,enableAttribute:h,disableUnusedAttributes:_}}function ob(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,f){f!==0&&(s.drawArraysInstanced(n,l,c,f),t.update(c,n,f))}function o(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,f);let d=0;for(let u=0;u<f;u++)d+=c[u];t.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function cb(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(x){return!(x!==Nn&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let M=x===Xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==xn&&x!==Sn&&!M&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",f=l(c);f!==c&&(Le("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&m===!1;t.reversedDepthBuffer===!0&&m===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&m===!0&&Le("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),h=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=s.getParameter(s.MAX_SAMPLES),y=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:m,maxTextures:u,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:h,maxAttributes:p,maxVertexUniforms:_,maxVaryings:T,maxFragmentUniforms:w,maxSamples:v,samples:y}}function lb(s){let e=this,t=null,n=0,i=!1,r=!1,a=new zn,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,d){let u=m.length!==0||d||n!==0||i;return i=d,n=m.length,u},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,d){t=f(m,d,0)},this.setState=function(m,d,u){let g=m.clippingPlanes,b=m.clipIntersection,h=m.clipShadows,p=s.get(m);if(!i||g===null||g.length===0||r&&!h)r?f(null):c();else{let _=r?0:n,T=_*4,w=p.clippingState||null;l.value=w,w=f(g,d,T,u);for(let v=0;v!==T;++v)w[v]=t[v];p.clippingState=w,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(m,d,u,g){let b=m!==null?m.length:0,h=null;if(b!==0){if(h=l.value,g!==!0||h===null){let p=u+b*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(h===null||h.length<p)&&(h=new Float32Array(p));for(let T=0,w=u;T!==b;++T,w+=4)a.copy(m[T]).applyMatrix4(_,o),a.normal.toArray(h,w),h[w+3]=a.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,h}}var La=class extends Mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new aa(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Xi(5,5,5),r=new Zn({name:"CubemapFromEquirect",uniforms:Es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:Ms});r.uniforms.tEquirect.value=t;let a=new $e(i,r),o=t.minFilter;return t.minFilter===bn&&(t.minFilter=It),new lr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},cd=256,hb=3,fb=20,Id=256,Ld=16,ub=3,db=new O,pb=new _e,Fc=class s{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new lr(1,10,null),this._boxMesh=new $e(new Xi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=db}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),f=this._getSourceTarget(!0);t>0&&(f.texture.mipmapsAutoUpdate=!1);let m=l.autoClear,d=l.autoClearColor,u=l.autoClearDepth,g=l.autoClearStencil,b=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,b===null&&(e.background=l.getClearColor(pb));let h=new lr(n,i,f);return h.position.copy(o),h.update(l,e),l.autoClear=m,l.autoClearColor=d,l.autoClearDepth=u,l.autoClearStencil=g,e.background=b,t>0&&(f.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(cd,fh(e))}_fromTexture(e,t){e.mapping===Ts||e.mapping===fr?this._setSize(e.image.length===0?cd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=ld(e,!1,!1),n=Math.log2(e)-hb;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=ld(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ts||e.mapping===fr?(this._cubemapMaterial===null&&(this._cubemapMaterial=fd()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=hd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=mb(),this._integrationMaterial=gb());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Ld);for(let a=0;a<=n;a++){let o=s.lodToRoughness(a,n);if(a>n-ub)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(Id*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=bb());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}};function ld(s,e,t){return new La(s,{minFilter:bn,generateMipmaps:e,type:Xn,colorSpace:ln,depthBuffer:t})}function Da(s,e,t){return new Zn({name:s,uniforms:e,vertexShader:Je.cube_vert,fragmentShader:t,side:jt,blending:Ms,depthTest:!1,depthWrite:!1})}function mb(){return Da("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Id}u

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
	`)}function gb(){return Da("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ld}},`

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
	`)}function bb(){return Da("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${fb}
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
	`)}function hd(){return Da("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function fd(){return Da("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function xb(s){let e=new WeakMap,t=new WeakMap,n=null;function i(d,u=!1){return d==null?null:u?a(d):r(d)}function r(d){if(d&&d.isTexture){let u=d.mapping;if(u===Wo||u===qo)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let b=new La(g.height);return b.fromEquirectangularTexture(s,d),e.set(d,b),d.addEventListener("dispose",c),o(b.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let u=d.mapping,g=u===Wo||u===qo,b=u===Ts||u===fr;if(g||b){let h=t.get(d),p=h!==void 0?h.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Fc(s)),h=g?n.fromEquirectangular(d,h):n.fromCubemap(d,h),h.texture.pmremVersion=d.pmremVersion,t.set(d,h),h.texture;if(h!==void 0)return h.texture;{let _=d.image;return g&&_&&_.height>0||b&&_&&l(_)?(n===null&&(n=new Fc(s)),h=g?n.fromEquirectangular(d):n.fromCubemap(d),h.texture.pmremVersion=d.pmremVersion,t.set(d,h),d.addEventListener("dispose",f),h.texture):null}}}return d}function o(d,u){return u===Wo?d.mapping=Ts:u===qo&&(d.mapping=fr),d}function l(d){let u=0,g=6;for(let b=0;b<g;b++)d[b]!==void 0&&u++;return u===g}function c(d){let u=d.target;u.removeEventListener("dispose",c);let g=e.get(u);g!==void 0&&(e.delete(u),g.dispose())}function f(d){let u=d.target;u.removeEventListener("dispose",f);let g=t.get(u);g!==void 0&&(t.delete(u),g.dispose())}function m(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:m}}function _b(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&ls("WebGLRenderer: "+n+" extension not supported."),i}}}function yb(s,e,t,n){let i={},r=new WeakMap,a=new FinalizationRegistry(g=>delete i[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(let h in g.attributes)e.remove(g.attributes[h]);g.removeEventListener("dispose",o),delete i[g.id],a.unregister(g);let b=r.get(g);b&&(e.remove(b),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,b){return i[b.id]!==void 0||(b.addEventListener("dispose",o),i[b.id]=new WeakRef(b),a.register(b,b.id,b),t.memory.geometries++),b}function f(g){let b=g.attributes;for(let h in b)e.update(b[h],s.ARRAY_BUFFER)}function m(g){let b=g.index,h=g.attributes.position,p=0;if(h===void 0)return;let _=b!==null?b.array.length:h.array.length/3-1,T=h.count>=65535?ta:ea,w=new T(Math.ceil(_/3)*6,1),v=w.array;if(b!==null){let x=b.array;p=b.version;for(let M=0,C=0;M<_;M+=3){let R=x[M+0],I=x[M+1],F=x[M+2];v[C++]=R,v[C++]=I,v[C++]=I,v[C++]=F,v[C++]=F,v[C++]=R}}else{p=h.version;for(let x=0,M=0;x<_;x+=3){let C=x+0,R=x+1,I=x+2;v[M++]=C,v[M++]=R,v[M++]=R,v[M++]=I,v[M++]=I,v[M++]=C}}w.version=p;let y=r.get(g);y&&e.remove(y),r.set(g,w)}function d(g){let b=r.get(g);if(b){let h=g.index;h!==null&&b.version<h.version&&m(g)}else m(g);return r.get(g)}function u(){for(let g in i){let b=i[g].deref();b!==void 0&&l(b)}}return{get:c,update:f,getWireframeAttribute:d,dispose:u}}function vb(s,e,t){let n;function i(m){n=m}let r,a;function o(m){r=m.type,a=m.bytesPerElement}function l(m,d){s.drawElements(n,d,r,m*a),t.update(d,n,1)}function c(m,d,u){u!==0&&(s.drawElementsInstanced(n,d,r,m*a,u),t.update(d,n,u))}function f(m,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,m,0,u);let b=0;for(let h=0;h<u;h++)b+=d[h];t.update(b,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function Mb(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Be("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Sb(s,e,t){let n=new WeakMap,i=new mt;function r(a,o,l){let c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=f!==void 0?f.length:0,d=n.get(o);if(d===void 0||d.count!==m){let C=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",C)};d!==void 0&&d.texture.dispose();let u=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],T=0;u===!0&&(T=1),g===!0&&(T=2),b===!0&&(T=3);let w=o.attributes.position.count*T,v=1;w>e.maxTextureSize&&(v=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);let y=new Float32Array(w*v*4*m),x=new Zr(y,w,v,m);x.type=Sn,x.needsUpdate=!0;let M=T*4;for(let R=0;R<m;R++){let I=h[R],F=p[R],B=_[R],D=w*v*4*R;for(let j=0;j<I.count;j++){let Z=j*M;u===!0&&(i.fromBufferAttribute(I,j),y[D+Z+0]=i.x,y[D+Z+1]=i.y,y[D+Z+2]=i.z,y[D+Z+3]=0),g===!0&&(i.fromBufferAttribute(F,j),y[D+Z+4]=i.x,y[D+Z+5]=i.y,y[D+Z+6]=i.z,y[D+Z+7]=0),b===!0&&(i.fromBufferAttribute(B,j),y[D+Z+8]=i.x,y[D+Z+9]=i.y,y[D+Z+10]=i.z,y[D+Z+11]=B.itemSize===4?i.w:1)}}d={count:m,texture:x,size:new ze(w,v)},n.set(o,d),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let u=0;for(let b=0;b<c.length;b++)u+=c[b];let g=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Tb(s,e,t,n,i){let r=new WeakMap;function a(c){let f=i.render.frame,m=c.geometry,d=e.get(c,m);if(r.get(d)!==f&&(e.update(d),r.set(d,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==f&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,f))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==f&&(u.update(),r.set(u,f))}return d}function o(){r=new WeakMap}function l(c){let f=c.target;f.removeEventListener("dispose",l),n.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:o}}var wb={[Wl]:"LINEAR_TONE_MAPPING",[ql]:"REINHARD_TONE_MAPPING",[Xl]:"CINEON_TONE_MAPPING",[jl]:"ACES_FILMIC_TONE_MAPPING",[Jl]:"AGX_TONE_MAPPING",[Yl]:"NEUTRAL_TONE_MAPPING",[Kl]:"CUSTOM_TONE_MAPPING"};function Ab(s,e,t,n,i,r){let a=new Mn(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,f=new Ot;f.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new ct([0,2,0,0,2,0],2));let m=new Lo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new $e(f,m),u=new Ai(-1,1,1,-1,0,1),g=null,b=null,h=!1,p,_=null,T=[],w=!1;this.setSize=function(v,y){a.setSize(v,y),o!==null&&o.setSize(v,y),l!==null&&l.setSize(v,y);for(let x=0;x<T.length;x++){let M=T[x];M.setSize&&M.setSize(v,y)}},this.setEffects=function(v){T=v,w=T.length>0&&T[0].isRenderPass===!0;let y=a.width,x=a.height;T.length>0&&o===null&&(o=new Mn(y,x,{type:Xn,depthBuffer:!1,stencilBuffer:!1}),l=new Mn(y,x,{type:Xn,depthBuffer:!1,stencilBuffer:!1}));let M=i===!0&&T.some(C=>C.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new _i(y,x),r===!0&&(c.format=Ci,c.type=As)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let C=0;C<T.length;C++){let R=T[C];R.setSize&&R.setSize(y,x),M&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(v,y){if(h||v.toneMapping===ti&&T.length===0)return!1;if(_=y,y!==null){let x=y.width,M=y.height;(a.width!==x||a.height!==M)&&this.setSize(x,M)}return w===!1&&v.setRenderTarget(a),p=v.toneMapping,v.toneMapping=ti,!0},this.hasRenderPass=function(){return w},this.end=function(v,y){v.toneMapping=p,h=!0;let x=a,M=o;for(let C=0;C<T.length;C++){let R=T[C];R.enabled!==!1&&(R.render(v,M,x,y),R.needsSwap!==!1&&(x=M,M=M===o?l:o))}if(g!==v.outputColorSpace||b!==v.toneMapping){g=v.outputColorSpace,b=v.toneMapping,m.defines={},Ze.getTransfer(g)===ht&&(m.defines.SRGB_TRANSFER="");let C=wb[b];C&&(m.defines[C]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=x.texture,v.setRenderTarget(_),v.render(d,u),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),f.dispose(),m.dispose()}}var Dd=new zt,Nd=new _i(1,1),Fd=new oa(1),Ud=new Zr,Od=new Ro,kd=new aa,ud=[],dd=[],pd=new Float32Array(16),md=new Float32Array(9),gd=new Float32Array(4);function br(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=ud[i];if(r===void 0&&(r=new Float32Array(i),ud[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Gt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ht(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Oc(s,e){let t=dd[e];t===void 0&&(t=new Int32Array(e),dd[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Eb(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Rb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;s.uniform2fv(this.addr,e),Ht(t,e)}}function Cb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;s.uniform3fv(this.addr,e),Ht(t,e)}}function Pb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;s.uniform4fv(this.addr,e),Ht(t,e)}}function Ib(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;gd.set(n),s.uniformMatrix2fv(this.addr,!1,gd),Ht(t,n)}}function Lb(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;md.set(n),s.uniformMatrix3fv(this.addr,!1,md),Ht(t,n)}}function Db(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;pd.set(n),s.uniformMatrix4fv(this.addr,!1,pd),Ht(t,n)}}function Nb(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Fb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;s.uniform2iv(this.addr,e),Ht(t,e)}}function Ub(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;s.uniform3iv(this.addr,e),Ht(t,e)}}function Ob(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;s.uniform4iv(this.addr,e),Ht(t,e)}}function kb(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Bb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;s.uniform2uiv(this.addr,e),Ht(t,e)}}function zb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;s.uniform3uiv(this.addr,e),Ht(t,e)}}function Gb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;s.uniform4uiv(this.addr,e),Ht(t,e)}}function kc(s){return s.version===0&&(s.compareFunction=oh,s.needsUpdate=!0),s}function Hb(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=kc(Nd):r=Dd,t.setTexture2D(e||r,i)}function Vb(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Od,i)}function Wb(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=kc(Fd):r=kd,t.setTextureCube(e||r,i)}function qb(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ud,i)}function Xb(s){switch(s){case 5126:return Eb;case 35664:return Rb;case 35665:return Cb;case 35666:return Pb;case 35674:return Ib;case 35675:return Lb;case 35676:return Db;case 5124:case 35670:return Nb;case 35667:case 35671:return Fb;case 35668:case 35672:return Ub;case 35669:case 35673:return Ob;case 5125:return kb;case 36294:return Bb;case 36295:return zb;case 36296:return Gb;case 35678:case 36198:case 36298:case 36306:case 35682:return Hb;case 35679:case 36299:case 36307:return Vb;case 35680:case 36300:case 36308:case 36293:return Wb;case 36289:case 36303:case 36311:case 36292:return qb}}function jb(s,e){s.uniform1fv(this.addr,e)}function Kb(s,e){let t=br(e,this.size,2);s.uniform2fv(this.addr,t)}function Jb(s,e){let t=br(e,this.size,3);s.uniform3fv(this.addr,t)}function Yb(s,e){let t=br(e,this.size,4);s.uniform4fv(this.addr,t)}function Zb(s,e){let t=br(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function $b(s,e){let t=br(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Qb(s,e){let t=br(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function ex(s,e){s.uniform1iv(this.addr,e)}function tx(s,e){s.uniform2iv(this.addr,e)}function nx(s,e){s.uniform3iv(this.addr,e)}function ix(s,e){s.uniform4iv(this.addr,e)}function sx(s,e){s.uniform1uiv(this.addr,e)}function rx(s,e){s.uniform2uiv(this.addr,e)}function ax(s,e){s.uniform3uiv(this.addr,e)}function ox(s,e){s.uniform4uiv(this.addr,e)}function cx(s,e,t){let n=this.cache,i=e.length,r=Oc(t,i);Gt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=kc(Nd):a=Dd;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function lx(s,e,t){let n=this.cache,i=e.length,r=Oc(t,i);Gt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Od,r[a])}function hx(s,e,t){let n=this.cache,i=e.length,r=Oc(t,i);Gt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=kc(Fd):a=kd;for(let o=0;o!==i;++o)t.setTextureCube(e[o]||a,r[o])}function fx(s,e,t){let n=this.cache,i=e.length,r=Oc(t,i);Gt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Ud,r[a])}function ux(s){switch(s){case 5126:return jb;case 35664:return Kb;case 35665:return Jb;case 35666:return Yb;case 35674:return Zb;case 35675:return $b;case 35676:return Qb;case 5124:case 35670:return ex;case 35667:case 35671:return tx;case 35668:case 35672:return nx;case 35669:case 35673:return ix;case 5125:return sx;case 36294:return rx;case 36295:return ax;case 36296:return ox;case 35678:case 36198:case 36298:case 36306:case 35682:return cx;case 35679:case 36299:case 36307:return lx;case 35680:case 36300:case 36308:case 36293:return hx;case 36289:case 36303:case 36311:case 36292:return fx}}var yh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Xb(t.type)}},vh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ux(t.type)}},Mh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},xh=/(\w+)(\])?(\[|\.)?/g;function bd(s,e){s.seq.push(e),s.map[e.id]=e}function dx(s,e,t){let n=s.name,i=n.length;for(xh.lastIndex=0;;){let r=xh.exec(n),a=xh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){bd(t,c===void 0?new yh(o,s,e):new vh(o,s,e));break}else{let m=t.map[o];m===void 0&&(m=new Mh(o),bd(t,m)),t=m}}}var gr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);dx(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function xd(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var px=37297,mx=0;function gx(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var _d=new He;function bx(s){Ze._getMatrix(_d,Ze.workingColorSpace,s);let e=`mat3( ${_d.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(s)){case Jr:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function yd(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+gx(s.getShaderSource(e),o)}else return r}function xx(s,e){let t=bx(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var _x={[Wl]:"Linear",[ql]:"Reinhard",[Xl]:"Cineon",[jl]:"ACESFilmic",[Jl]:"AgX",[Yl]:"Neutral",[Kl]:"Custom"};function yx(s,e){let t=_x[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Nc=new O;function vx(){Ze.getLuminanceCoefficients(Nc);let s=Nc.x.toFixed(4),e=Nc.y.toFixed(4),t=Nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ia).join(`
`)}function Sx(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Tx(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ia(s){return s!==""}function vd(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Md(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var wx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sh(s){return s.replace(wx,Ax)}function Ax(s,e){let t=Je[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Sh(t)}var Ex=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sd(s){return s.replace(Ex,Rx)}function Rx(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Td(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Cx={[va]:"SHADOWMAP_TYPE_PCF",[hr]:"SHADOWMAP_TYPE_VSM"};function Px(s){return Cx[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ix={[fr]:"ENVMAP_MODE_REFRACTION"};function Lx(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Ix[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Dx={[Vl]:"ENVMAP_BLENDING_MULTIPLY",[zu]:"ENVMAP_BLENDING_MIX",[Gu]:"ENVMAP_BLENDING_ADD"};function Nx(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Dx[s.combine]||"ENVMAP_BLENDING_NONE"}function Fx(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Px(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",f=Lx(t),m=Nx(t),d=Mx(t),u=Sx(r),g=i.createProgram(),b,h,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(Ia).join(`
`),b.length>0&&(b+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(Ia).join(`
`),h.length>0&&(h+=`
`)):(b=[Td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ia).join(`
`),h=[Td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+m:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ti?"#define TONE_MAPPING":"",t.toneMapping!==ti?Je.tonemapping_pars_fragment:"",t.toneMapping!==ti?yx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,xx("linearToOutputTexel",t.outputColorSpace),vx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ia).join(`
`)),a=Sh(a),a=vd(a,t),a=Md(a,t),o=Sh(o),o=vd(o,t),o=Md(o,t),a=Sd(a),o=Sd(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,b=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,h=["#define varying in",t.glslVersion===lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let _=p+b+a,T=p+h+o,w=xd(i,i.VERTEX_SHADER,_),v=xd(i,i.FRAGMENT_SHADER,T);i.attachShader(g,w),i.attachShader(g,v),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function y(R){if(s.debug.checkShaderErrors){let I=i.getProgramInfoLog(g)||"",F=i.getShaderInfoLog(w)||"",B=i.getShaderInfoLog(v)||"",D=I.trim(),j=F.trim(),Z=B.trim(),K=!0,oe=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,w,v);else{let Y=yd(i,w,"vertex"),ie=yd(i,v,"fragment");Be("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+D+`
`+Y+`
`+ie)}else D!==""?Le("WebGLProgram: Program Info Log:",D):(j===""||Z==="")&&(oe=!1);oe&&(R.diagnostics={runnable:K,programLog:D,vertexShader:{log:j,prefix:b},fragmentShader:{log:Z,prefix:h}})}i.deleteShader(w),i.deleteShader(v),x=new gr(i,g),M=Tx(i,g)}let x;this.getUniforms=function(){return x===void 0&&y(this),x};let M;this.getAttributes=function(){return M===void 0&&y(this),M};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(g,px)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mx++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=v,this}var Ux=0,Th=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new wh(e),t.set(e,n)),n}},wh=class{constructor(e){this.id=Ux++,this.code=e,this.usedTimes=0}};function Ox(s){return s===Ji||s===Aa||s===Ea}function kx(s,e,t,n,i,r){let a=new $r,o=new Th,l=new Set,c=[],f=new Map,m=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,M,C,R,I,F){let B=R.fog,D=I.geometry,j=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,K=e.get(x.envMap||j,Z),oe=d[x.type],Y=n.precision;x.precision!==null&&(Y=n.getMaxPrecision(x.precision),Y!==x.precision&&Le("WebGLProgram.getParameters:",x.precision,"not supported, using",Y,"instead."));let ie=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,se=ie!==void 0?ie.length:0,Pe=0;D.morphAttributes.position!==void 0&&(Pe=1),D.morphAttributes.normal!==void 0&&(Pe=2),D.morphAttributes.color!==void 0&&(Pe=3);let We,ee,Me,Ee;if(oe){let ye=si[oe];We=ye.vertexShader,ee=ye.fragmentShader}else{We=x.vertexShader,ee=x.fragmentShader;let ye=o.getVertexShaderStage(x),pt=o.getFragmentShaderStage(x);o.update(x,ye,pt),Me=ye.id,Ee=pt.id}let Ue=s.getRenderTarget(),Se=s.state.buffers.depth.getReversed(),Xe=I.isInstancedMesh===!0,Nt=I.isBatchedMesh===!0,ke=!!x.map,dt=!!x.matcap,_t=!!K,nt=_t&&K.isPMREMTexture===!0,Kt=!!x.aoMap,kt=!!x.lightMap,pn=!!x.bumpMap&&x.wireframe===!1,At=!!x.normalMap,Kn=!!x.displacementMap,Vt=!!x.emissiveMap,wn=!!x.metalnessMap,An=!!x.roughnessMap,En=x.anisotropy>0,k=x.clearcoat>0,Rn=x.diffuseRoughness>0,Tt=x.dispersion>0,wt=x.retroreflectivity>0,xe=x.iridescence>0,Bt=x.sheen>0,Oe=x.transmission>0,Ve=En&&!!x.anisotropyMap,P=k&&!!x.clearcoatMap,A=k&&!!x.clearcoatNormalMap,V=k&&!!x.clearcoatRoughnessMap,ae=Rn&&!!x.diffuseRoughnessMap,ne=xe&&!!x.iridescenceMap,he=xe&&!!x.iridescenceThicknessMap,me=Bt&&!!x.sheenColorMap,$=Bt&&!!x.sheenRoughnessMap,Q=!!x.specularMap,ue=!!x.specularColorMap,L=!!x.specularIntensityMap,te=Oe&&!!x.transmissionMap,J=Oe&&!!x.thicknessMap,de=!!x.gradientMap,le=!!x.alphaMap,fe=x.alphaTest>0,Ne=!!x.alphaHash,Ke=!!x.extensions,ce=ti;x.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(ce=s.toneMapping);let Fe=nt?K.isCompressedCubeTexture?K.image[0].mipmaps:K.mipmaps:null,je={shaderID:oe,shaderType:x.type,shaderName:x.name,vertexShader:We,fragmentShader:ee,defines:x.defines,customVertexShaderID:Me,customFragmentShaderID:Ee,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:Y,batching:Nt,batchingColor:Nt&&I._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&I.instanceColor!==null,instancingMorph:Xe&&I.morphTexture!==null,outputColorSpace:Ue===null?s.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ke,matcap:dt,envMap:_t,envMapMode:_t&&K.mapping,envMapPMREM:nt,envMapMaxLod:nt?Fe.length-1:null,envMapSize:nt?Fe[0].width:null,aoMap:Kt,lightMap:kt,bumpMap:pn,normalMap:At,displacementMap:Kn,emissiveMap:Vt,normalMapObjectSpace:At&&x.normalMapType===ju,normalMapTangentSpace:At&&x.normalMapType===Ca,packedNormalMap:At&&x.normalMapType===Ca&&Ox(x.normalMap.format),metalnessMap:wn,roughnessMap:An,anisotropy:En,anisotropyMap:Ve,clearcoat:k,clearcoatMap:P,clearcoatNormalMap:A,clearcoatRoughnessMap:V,diffuseRoughness:Rn,diffuseRoughnessMap:ae,dispersion:Tt,retroreflection:wt,iridescence:xe,iridescenceMap:ne,iridescenceThicknessMap:he,sheen:Bt,sheenColorMap:me,sheenRoughnessMap:$,specularMap:Q,specularColorMap:ue,specularIntensityMap:L,transmission:Oe,transmissionMap:te,thicknessMap:J,gradientMap:de,opaque:x.transparent===!1&&x.blending===Ri&&x.alphaToCoverage===!1,alphaMap:le,alphaTest:fe,alphaHash:Ne,combine:x.combine,mapUv:ke&&u(x.map.channel),aoMapUv:Kt&&u(x.aoMap.channel),lightMapUv:kt&&u(x.lightMap.channel),bumpMapUv:pn&&u(x.bumpMap.channel),normalMapUv:At&&u(x.normalMap.channel),displacementMapUv:Kn&&u(x.displacementMap.channel),emissiveMapUv:Vt&&u(x.emissiveMap.channel),metalnessMapUv:wn&&u(x.metalnessMap.channel),roughnessMapUv:An&&u(x.roughnessMap.channel),anisotropyMapUv:Ve&&u(x.anisotropyMap.channel),clearcoatMapUv:P&&u(x.clearcoatMap.channel),clearcoatNormalMapUv:A&&u(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&u(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ae&&u(x.diffuseRoughnessMap.channel),iridescenceMapUv:ne&&u(x.iridescenceMap.channel),iridescenceThicknessMapUv:he&&u(x.iridescenceThicknessMap.channel),sheenColorMapUv:me&&u(x.sheenColorMap.channel),sheenRoughnessMapUv:$&&u(x.sheenRoughnessMap.channel),specularMapUv:Q&&u(x.specularMap.channel),specularColorMapUv:ue&&u(x.specularColorMap.channel),specularIntensityMapUv:L&&u(x.specularIntensityMap.channel),transmissionMapUv:te&&u(x.transmissionMap.channel),thicknessMapUv:J&&u(x.thicknessMap.channel),alphaMapUv:le&&u(x.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(At||En),vertexNormals:!!D.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!D.attributes.uv&&(ke||le),fog:!!B,useFog:x.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||D.attributes.normal===void 0&&At===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Se,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Pe,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:F.filter(ye=>ye.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:ce,decodeVideoTexture:ke&&x.map.isVideoTexture===!0&&Ze.getTransfer(x.map.colorSpace)===ht,decodeVideoTextureEmissive:Vt&&x.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(x.emissiveMap.colorSpace)===ht,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Lt,flipSided:x.side===jt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ke&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&x.extensions.multiDraw===!0||Nt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return je.vertexUv1s=l.has(1),je.vertexUv2s=l.has(2),je.vertexUv3s=l.has(3),l.clear(),je}function b(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)M.push(C),M.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(h(M,x),p(M,x),M.push(s.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function h(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapPMREM),x.push(M.envMapMaxLod),x.push(M.envMapSize),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.diffuseRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.numLightProbeGrids),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function p(x,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function _(x){let M=d[x.type],C;if(M){let R=si[M];C=rd.clone(R.uniforms)}else C=x.uniforms;return C}function T(x,M){let C=f.get(M);return C!==void 0?++C.usedTimes:(C=new Fx(s,M,x,i),c.push(C),f.set(M,C)),C}function w(x){if(--x.usedTimes===0){let M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),f.delete(x.cacheKey),x.destroy()}}function v(x){o.remove(x)}function y(){o.dispose()}return{getParameters:g,getProgramCacheKey:b,getUniforms:_,acquireProgram:T,releaseProgram:w,releaseShaderCache:v,programs:c,dispose:y}}function Bx(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function zx(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function wd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ad(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function o(d,u,g,b,h,p){let _=s[e];return _===void 0?(_={id:d.id,object:d,geometry:u,material:g,materialVariant:a(d),groupOrder:b,renderOrder:d.renderOrder,z:h,group:p},s[e]=_):(_.id=d.id,_.object=d,_.geometry=u,_.material=g,_.materialVariant=a(d),_.groupOrder=b,_.renderOrder=d.renderOrder,_.z=h,_.group=p),e++,_}function l(d,u,g,b,h,p,_){_.reversedDepth===!0&&(h=-h);let T=o(d,u,g,b,h,p);g.transmission>0?n.push(T):g.transparent===!0?i.push(T):t.push(T)}function c(d,u,g,b,h,p){let _=o(d,u,g,b,h,p);g.transmission>0?n.unshift(_):g.transparent===!0?i.unshift(_):t.unshift(_)}function f(d,u){t.length>1&&t.sort(d||zx),n.length>1&&n.sort(u||wd),i.length>1&&i.sort(u||wd)}function m(){for(let d=e,u=s.length;d<u;d++){let g=s[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:m,sort:f}}function Gx(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new Ad,s.set(n,[a])):i>=r.length?(a=new Ad,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Hx(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new O,color:new _e};break;case"SpotLight":t={position:new O,direction:new O,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new _e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":t={color:new _e,position:new O,halfWidth:new O,halfHeight:new O};break}return s[e.id]=t,t}}}function Vx(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var Wx=0;function qx(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Xx(s){let e=new Hx,t=Vx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let i=new O,r=new Ge,a=new Ge;function o(c){let f=0,m=0,d=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let u=0,g=0,b=0,h=0,p=0,_=0,T=0,w=0,v=0,y=0,x=0,M=0,C=0,R=0;c.sort(qx);for(let F=0,B=c.length;F<B;F++){let D=c[F],j=D.color,Z=D.intensity,K=D.distance,oe=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ji?oe=D.shadow.map.texture:oe=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)f+=j.r*Z,m+=j.g*Z,d+=j.b*Z;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(D.sh.coefficients[Y],Z);R++}else if(D.isSunLight){let Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let ie=D.shadow,se=t.get(D);se.shadowIntensity=ie.intensity,se.shadowBias=ie.bias,se.shadowNormalBias=ie.normalBias,se.shadowRadius=ie.radius,se.shadowMapSize.copy(ie.mapSize).multiply(ie.getFrameExtents()),n.sunShadow[g]=se,n.sunShadowMap[g]=oe;let Pe=ie.getViewportCount();for(let We=0;We<Pe;We++)n.sunShadowMatrix[b+We]=ie.getMatrix(We),n.sunShadowCascade[b+We]=ie._cascadeData[We];b+=Pe,g++}n.sun[u]=Y,u++}else if(D.isDirectionalLight){let Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let ie=D.shadow,se=t.get(D);se.shadowIntensity=ie.intensity,se.shadowBias=ie.bias,se.shadowNormalBias=ie.normalBias,se.shadowRadius=ie.radius,se.shadowMapSize=ie.mapSize,n.directionalShadow[h]=se,n.directionalShadowMap[h]=oe,n.directionalShadowMatrix[h]=D.shadow.matrix,v++}n.directional[h]=Y,h++}else if(D.isSpotLight){let Y=e.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(j).multiplyScalar(Z),Y.distance=K,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,n.spot[_]=Y;let ie=D.shadow;if(D.map&&(n.spotLightMap[M]=D.map,M++,ie.updateMatrices(D),D.castShadow&&C++),n.spotLightMatrix[_]=ie.matrix,D.castShadow){let se=t.get(D);se.shadowIntensity=ie.intensity,se.shadowBias=ie.bias,se.shadowNormalBias=ie.normalBias,se.shadowRadius=ie.radius,se.shadowMapSize=ie.mapSize,n.spotShadow[_]=se,n.spotShadowMap[_]=oe,x++}_++}else if(D.isRectAreaLight){let Y=e.get(D);Y.color.copy(j).multiplyScalar(Z),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),n.rectArea[T]=Y,T++}else if(D.isPointLight){let Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){let ie=D.shadow,se=t.get(D);se.shadowIntensity=ie.intensity,se.shadowBias=ie.bias,se.shadowNormalBias=ie.normalBias,se.shadowRadius=ie.radius,se.shadowMapSize=ie.mapSize,se.shadowCameraNear=ie.camera.near,se.shadowCameraFar=ie.camera.far,n.pointShadow[p]=se,n.pointShadowMap[p]=oe,n.pointShadowMatrix[p]=D.shadow.matrix,y++}n.point[p]=Y,p++}else if(D.isHemisphereLight){let Y=e.get(D);Y.skyColor.copy(D.color).multiplyScalar(Z),Y.groundColor.copy(D.groundColor).multiplyScalar(Z),n.hemi[w]=Y,w++}}T>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=m,n.ambient[2]=d;let I=n.hash;(I.sunLength!==u||I.directionalLength!==h||I.pointLength!==p||I.spotLength!==_||I.rectAreaLength!==T||I.hemiLength!==w||I.numSunShadows!==g||I.numDirectionalShadows!==v||I.numPointShadows!==y||I.numSpotShadows!==x||I.numSpotMaps!==M||I.numLightProbes!==R)&&(n.sun.length=u,n.directional.length=h,n.spot.length=_,n.rectArea.length=T,n.point.length=p,n.hemi.length=w,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.directionalShadowMatrix.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.pointShadowMatrix.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+M-C,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=R,I.sunLength=u,I.directionalLength=h,I.pointLength=p,I.spotLength=_,I.rectAreaLength=T,I.hemiLength=w,I.numSunShadows=g,I.numDirectionalShadows=v,I.numPointShadows=y,I.numSpotShadows=x,I.numSpotMaps=M,I.numLightProbes=R,n.version=Wx++)}function l(c,f){let m=0,d=0,u=0,g=0,b=0,h=0,p=f.matrixWorldInverse;for(let _=0,T=c.length;_<T;_++){let w=c[_];if(w.isSunLight){let v=n.sun[m];v.direction.setFromMatrixPosition(w.matrixWorld),v.direction.transformDirection(p),m++}else if(w.isDirectionalLight){let v=n.directional[d];v.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(p),d++}else if(w.isSpotLight){let v=n.spot[g];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(p),g++}else if(w.isRectAreaLight){let v=n.rectArea[b];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(p),a.identity(),r.copy(w.matrixWorld),r.premultiply(p),a.extractRotation(r),v.halfWidth.set(w.width*.5,0,0),v.halfHeight.set(0,w.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),b++}else if(w.isPointLight){let v=n.point[u];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(p),u++}else if(w.isHemisphereLight){let v=n.hemi[h];v.direction.setFromMatrixPosition(w.matrixWorld),v.direction.transformDirection(p),h++}}}return{setup:o,setupView:l,state:n}}function Ed(s){let e=new Xx(s),t=[],n=[],i=[];function r(m){f.camera=m,t.length=0,n.length=0,i.length=0}function a(m){m.isLightProbeGrid?i.push(m):t.push(m)}function o(m){n.push(m)}function l(){e.setup(t),i.sort((m,d)=>m.priority-d.priority||m.id-d.id)}function c(m){e.setupView(t,m)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function jx(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new Ed(s),e.set(i,[o])):r>=a.length?(o=new Ed(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Kx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jx=`uniform sampler2D shadow_pass;
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
}`,Yx=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],Zx=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Rd=new Ge,Pa=new O,_h=new O;function $x(s,e,t){let n=new qi,i=new ze,r=new ze,a=new mt,o=new Do,l=new No,c={},f=t.maxTextureSize,m={[ei]:jt,[jt]:ei,[Lt]:Lt},d=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:Kx,fragmentShader:Jx}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let g=new Ot;g.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new $e(g,d),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=va;let p=this.type;this.render=function(y,x,M){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||y.length===0)return;this.type===vu&&(Le("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=va);let C=s.getRenderTarget(),R=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),F=s.state;F.setBlending(Ms),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let B=p!==this.type;B&&x.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(j=>j.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,j=y.length;D<j;D++){let Z=y[D],K=Z.shadow;if(K===void 0){Le("WebGLShadowMap:",Z,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;i.copy(K.mapSize);let oe=K.getFrameExtents();i.multiply(oe),r.copy(K.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(r.x=Math.floor(f/oe.x),i.x=r.x*oe.x,K.mapSize.x=r.x),i.y>f&&(r.y=Math.floor(f/oe.y),i.y=r.y*oe.y,K.mapSize.y=r.y));let Y=s.state.buffers.depth.getReversed();if(K.camera._reversedDepth=Y,K.map===null||B===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===hr){if(Z.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new Mn(i.x,i.y,{format:Ji,type:Xn,minFilter:It,magFilter:It,generateMipmaps:!1}),K.map.texture.name=Z.name+".shadowMap",K.map.depthTexture=new _i(i.x,i.y,Sn),K.map.depthTexture.name=Z.name+".shadowMapDepth",K.map.depthTexture.format=bi,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Rt,K.map.depthTexture.magFilter=Rt}else Z.isPointLight?(K.map=new La(i.x),K.map.depthTexture=new oa(i.x,qn)):(K.map=new Mn(i.x,i.y),K.map.depthTexture=new _i(i.x,i.y,qn)),K.map.depthTexture.name=Z.name+".shadowMap",K.map.depthTexture.format=bi,this.type===va?(K.map.depthTexture.compareFunction=Y?ah:rh,K.map.depthTexture.minFilter=It,K.map.depthTexture.magFilter=It):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Rt,K.map.depthTexture.magFilter=Rt);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==i.x||K.map.height!==i.y)&&K.map.setSize(i.x,i.y);let ie=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();Z.isPointLight!==!0&&K.updateMatrices(Z,M);let se=(K.camera.layers.mask&4294967294)!==0?K.camera.layers:M.layers;for(let Pe=0;Pe<ie;Pe++){let We=K.getCamera(Pe);if(Z.isPointLight){let ee=K.camera,Me=K.matrix,Ee=Z.distance||ee.far;Ee!==ee.far&&(ee.far=Ee,ee.updateProjectionMatrix()),Pa.setFromMatrixPosition(Z.matrixWorld),ee.position.copy(Pa),_h.copy(ee.position),_h.add(Yx[Pe]),ee.up.copy(Zx[Pe]),ee.lookAt(_h),ee.updateMatrixWorld(),Me.makeTranslation(-Pa.x,-Pa.y,-Pa.z),Rd.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),K._frustum.setFromProjectionMatrix(Rd,ee.coordinateSystem,ee.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)s.setRenderTarget(K.map,Pe),s.clear();else{Pe===0&&(s.setRenderTarget(K.map),s.clear());let ee=K.getViewport(Pe);a.set(r.x*ee.x,r.y*ee.y,r.x*ee.z,r.y*ee.w),F.viewport(a)}n=K.getFrustum(Pe),w(x,M,We,Z,se,this.type)}K.isPointLightShadow!==!0&&this.type===hr&&_(K,M),K.needsUpdate=!1}p=this.type,h.needsUpdate=!1,s.setRenderTarget(C,R,I)};function _(y,x){let M=e.update(b);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,u.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),y.mapPass===null?y.mapPass=new Mn(i.x,i.y,{format:Ji,type:Xn}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),d.uniforms.shadow_pass.value=y.map.depthTexture,d.uniforms.resolution.value.set(y.map.width,y.map.height),d.uniforms.radius.value=y.radius,s.setRenderTarget(y.mapPass),s.clear(),s.renderBufferDirect(x,null,M,d,b,null),u.uniforms.shadow_pass.value=y.mapPass.texture,u.uniforms.resolution.value.set(y.map.width,y.map.height),u.uniforms.radius.value=y.radius,s.setRenderTarget(y.map),s.clear(),s.renderBufferDirect(x,null,M,u,b,null)}function T(y,x,M,C){let R=null,I=M.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(I!==void 0)R=I;else if(R=M.isPointLight===!0?l:o,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let F=R.uuid,B=x.uuid,D=c[F];D===void 0&&(D={},c[F]=D);let j=D[B];j===void 0&&(j=R.clone(),D[B]=j,x.addEventListener("dispose",v)),R=j}if(R.visible=x.visible,R.wireframe=x.wireframe,C===hr?R.side=x.shadowSide!==null?x.shadowSide:x.side:R.side=x.shadowSide!==null?x.shadowSide:m[x.side],R.alphaMap=x.alphaMap,R.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,R.map=x.map,R.clipShadows=x.clipShadows,R.clippingPlanes=x.clippingPlanes,R.clipIntersection=x.clipIntersection,R.displacementMap=x.displacementMap,R.displacementScale=x.displacementScale,R.displacementBias=x.displacementBias,R.wireframeLinewidth=x.wireframeLinewidth,R.linewidth=x.linewidth,M.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let F=s.properties.get(R);F.light=M}return R}function w(y,x,M,C,R,I){if(y.visible===!1)return;if(y.layers.test(R)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&I===hr)&&(!y.frustumCulled||y.intersectsFrustum(n))){y.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,y.matrixWorld);let D=e.update(y),j=y.material;if(Array.isArray(j)){let Z=D.groups;for(let K=0,oe=Z.length;K<oe;K++){let Y=Z[K],ie=j[Y.materialIndex];if(ie&&ie.visible){let se=T(y,ie,C,I);y.onBeforeShadow(s,y,x,M,D,se,Y),s.renderBufferDirect(M,null,D,se,y,Y),y.onAfterShadow(s,y,x,M,D,se,Y)}}}else if(j.visible){let Z=T(y,j,C,I);y.onBeforeShadow(s,y,x,M,D,Z,null),s.renderBufferDirect(M,null,D,Z,y,null),y.onAfterShadow(s,y,x,M,D,Z,null)}}let B=y.children;for(let D=0,j=B.length;D<j;D++)w(B[D],x,M,C,R,I)}function v(y){y.target.removeEventListener("dispose",v);for(let M in c){let C=c[M],R=y.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}function Qx(s,e){function t(){let L=!1,te=new mt,J=null,de=new mt(0,0,0,0);return{setMask:function(le){J!==le&&!L&&(s.colorMask(le,le,le,le),J=le)},setLocked:function(le){L=le},setClear:function(le,fe,Ne,Ke,ce){ce===!0&&(le*=Ke,fe*=Ke,Ne*=Ke),te.set(le,fe,Ne,Ke),de.equals(te)===!1&&(s.clearColor(le,fe,Ne,Ke),de.copy(te))},reset:function(){L=!1,J=null,de.set(-1,0,0,0)}}}function n(){let L=!1,te=!1,J=null,de=null,le=null;return{setReversed:function(fe){if(te!==fe){let Ne=e.get("EXT_clip_control");fe?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),te=fe;let Ke=le;le=null,this.setClear(Ke)}},getReversed:function(){return te},setTest:function(fe){fe?Se(s.DEPTH_TEST):Xe(s.DEPTH_TEST)},setMask:function(fe){J!==fe&&!L&&(s.depthMask(fe),J=fe)},setFunc:function(fe){if(te&&(fe=id[fe]),de!==fe){switch(fe){case _o:s.depthFunc(s.NEVER);break;case yo:s.depthFunc(s.ALWAYS);break;case vo:s.depthFunc(s.LESS);break;case Js:s.depthFunc(s.LEQUAL);break;case Mo:s.depthFunc(s.EQUAL);break;case So:s.depthFunc(s.GEQUAL);break;case To:s.depthFunc(s.GREATER);break;case wo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}de=fe}},setLocked:function(fe){L=fe},setClear:function(fe){le!==fe&&(le=fe,te&&(fe=1-fe),s.clearDepth(fe))},reset:function(){L=!1,J=null,de=null,le=null,te=!1}}}function i(){let L=!1,te=null,J=null,de=null,le=null,fe=null,Ne=null,Ke=null,ce=null;return{setTest:function(Fe){L||(Fe?Se(s.STENCIL_TEST):Xe(s.STENCIL_TEST))},setMask:function(Fe){te!==Fe&&!L&&(s.stencilMask(Fe),te=Fe)},setFunc:function(Fe,je,ye){(J!==Fe||de!==je||le!==ye)&&(s.stencilFunc(Fe,je,ye),J=Fe,de=je,le=ye)},setOp:function(Fe,je,ye){(fe!==Fe||Ne!==je||Ke!==ye)&&(s.stencilOp(Fe,je,ye),fe=Fe,Ne=je,Ke=ye)},setLocked:function(Fe){L=Fe},setClear:function(Fe){ce!==Fe&&(s.clearStencil(Fe),ce=Fe)},reset:function(){L=!1,te=null,J=null,de=null,le=null,fe=null,Ne=null,Ke=null,ce=null}}}let r=new t,a=new n,o=new i,l={},c=new WeakMap,f={},m={},d={},u=new WeakMap,g=[],b=null,h=!1,p=null,_=null,T=null,w=null,v=null,y=null,x=null,M=new _e(0,0,0),C=0,R=!1,I=null,F=null,B=null,D=null,j=null,Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,oe=0,Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(Y)[1]),K=oe>=1):Y.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),K=oe>=2);let ie=null,se={},Pe=s.getParameter(s.SCISSOR_BOX),We=s.getParameter(s.VIEWPORT),ee=new mt().fromArray(Pe),Me=new mt().fromArray(We);function Ee(L,te,J,de){let le=new Uint8Array(4),fe=s.createTexture();s.bindTexture(L,fe),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ne=0;Ne<J;Ne++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(te,0,s.RGBA,1,1,de,0,s.RGBA,s.UNSIGNED_BYTE,le):s.texImage2D(te+Ne,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,le);return fe}let Ue={};Ue[s.TEXTURE_2D]=Ee(s.TEXTURE_2D,s.TEXTURE_2D,1),Ue[s.TEXTURE_CUBE_MAP]=Ee(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ue[s.TEXTURE_2D_ARRAY]=Ee(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ue[s.TEXTURE_3D]=Ee(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Se(s.DEPTH_TEST),a.setFunc(Js),pn(!1),At(kl),Se(s.CULL_FACE),Kt(Ms);function Se(L){f[L]!==!0&&(s.enable(L),f[L]=!0)}function Xe(L){f[L]!==!1&&(s.disable(L),f[L]=!1)}function Nt(L,te){return d[L]!==te?(s.bindFramebuffer(L,te),d[L]=te,L===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=te),L===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=te),!0):!1}function ke(L,te){let J=g,de=!1;if(L){J=u.get(te),J===void 0&&(J=[],u.set(te,J));let le=L.textures;if(J.length!==le.length||J[0]!==s.COLOR_ATTACHMENT0){for(let fe=0,Ne=le.length;fe<Ne;fe++)J[fe]=s.COLOR_ATTACHMENT0+fe;J.length=le.length,de=!0}}else J[0]!==s.BACK&&(J[0]=s.BACK,de=!0);de&&s.drawBuffers(J)}function dt(L){return b!==L?(s.useProgram(L),b=L,!0):!1}let _t={[Ss]:s.FUNC_ADD,[Su]:s.FUNC_SUBTRACT,[Tu]:s.FUNC_REVERSE_SUBTRACT};_t[wu]=s.MIN,_t[Au]=s.MAX;let nt={[Eu]:s.ZERO,[Ru]:s.ONE,[Cu]:s.SRC_COLOR,[Gl]:s.SRC_ALPHA,[Fu]:s.SRC_ALPHA_SATURATE,[Du]:s.DST_COLOR,[Iu]:s.DST_ALPHA,[Pu]:s.ONE_MINUS_SRC_COLOR,[Hl]:s.ONE_MINUS_SRC_ALPHA,[Nu]:s.ONE_MINUS_DST_COLOR,[Lu]:s.ONE_MINUS_DST_ALPHA,[Uu]:s.CONSTANT_COLOR,[Ou]:s.ONE_MINUS_CONSTANT_COLOR,[ku]:s.CONSTANT_ALPHA,[Bu]:s.ONE_MINUS_CONSTANT_ALPHA};function Kt(L,te,J,de,le,fe,Ne,Ke,ce,Fe){if(L===Ms){h===!0&&(Xe(s.BLEND),h=!1);return}if(h===!1&&(Se(s.BLEND),h=!0),L!==Mu){if(L!==p||Fe!==R){if((_!==Ss||v!==Ss)&&(s.blendEquation(s.FUNC_ADD),_=Ss,v=Ss),Fe)switch(L){case Ri:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $t:s.blendFunc(s.ONE,s.ONE);break;case Bl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Be("WebGLState: Invalid blending: ",L);break}else switch(L){case Ri:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $t:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Bl:Be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zl:Be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Be("WebGLState: Invalid blending: ",L);break}T=null,w=null,y=null,x=null,M.set(0,0,0),C=0,p=L,R=Fe}return}le=le||te,fe=fe||J,Ne=Ne||de,(te!==_||le!==v)&&(s.blendEquationSeparate(_t[te],_t[le]),_=te,v=le),(J!==T||de!==w||fe!==y||Ne!==x)&&(s.blendFuncSeparate(nt[J],nt[de],nt[fe],nt[Ne]),T=J,w=de,y=fe,x=Ne),(Ke.equals(M)===!1||ce!==C)&&(s.blendColor(Ke.r,Ke.g,Ke.b,ce),M.copy(Ke),C=ce),p=L,R=!1}function kt(L,te){L.side===Lt?Xe(s.CULL_FACE):Se(s.CULL_FACE);let J=L.side===jt;te&&(J=!J),pn(J),L.blending===Ri&&L.transparent===!1?Kt(Ms):Kt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let de=L.stencilWrite;o.setTest(de),de&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Vt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Se(s.SAMPLE_ALPHA_TO_COVERAGE):Xe(s.SAMPLE_ALPHA_TO_COVERAGE)}function pn(L){I!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),I=L)}function At(L){L!==_u?(Se(s.CULL_FACE),L!==F&&(L===kl?s.cullFace(s.BACK):L===yu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Xe(s.CULL_FACE),F=L}function Kn(L){L!==B&&(K&&s.lineWidth(L),B=L)}function Vt(L,te,J){L?(Se(s.POLYGON_OFFSET_FILL),(D!==te||j!==J)&&(D=te,j=J,a.getReversed()&&(te=-te,J=-J),s.polygonOffset(te,J))):Xe(s.POLYGON_OFFSET_FILL)}function wn(L){L?Se(s.SCISSOR_TEST):Xe(s.SCISSOR_TEST)}function An(L){L===void 0&&(L=s.TEXTURE0+Z-1),ie!==L&&(s.activeTexture(L),ie=L)}function En(L,te,J){J===void 0&&(ie===null?J=s.TEXTURE0+Z-1:J=ie);let de=se[J];de===void 0&&(de={type:void 0,texture:void 0},se[J]=de),(de.type!==L||de.texture!==te)&&(ie!==J&&(s.activeTexture(J),ie=J),s.bindTexture(L,te||Ue[L]),de.type=L,de.texture=te)}function k(){let L=se[ie];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Rn(){try{s.compressedTexImage2D(...arguments)}catch(L){Be("WebGLState:",L)}}function Tt(){try{s.compressedTexImage3D(...arguments)}catch(L){Be("WebGLState:",L)}}function wt(){try{s.texSubImage2D(...arguments)}catch(L){Be("WebGLState:",L)}}function xe(){try{s.texSubImage3D(...arguments)}catch(L){Be("WebGLState:",L)}}function Bt(){try{s.compressedTexSubImage2D(...arguments)}catch(L){Be("WebGLState:",L)}}function Oe(){try{s.compressedTexSubImage3D(...arguments)}catch(L){Be("WebGLState:",L)}}function Ve(){try{s.texStorage2D(...arguments)}catch(L){Be("WebGLState:",L)}}function P(){try{s.texStorage3D(...arguments)}catch(L){Be("WebGLState:",L)}}function A(){try{s.texImage2D(...arguments)}catch(L){Be("WebGLState:",L)}}function V(){try{s.texImage3D(...arguments)}catch(L){Be("WebGLState:",L)}}function ae(L){return m[L]!==void 0?m[L]:s.getParameter(L)}function ne(L,te){m[L]!==te&&(s.pixelStorei(L,te),m[L]=te)}function he(L){ee.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),ee.copy(L))}function me(L){Me.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),Me.copy(L))}function $(L,te){let J=c.get(te);J===void 0&&(J=new WeakMap,c.set(te,J));let de=J.get(L);de===void 0&&(de=s.getUniformBlockIndex(te,L.name),s.uniformBlockBinding(te,de,de),J.set(L,de))}function Q(L,te,J){let le=c.get(te).get(L);l[le]!==J&&(s.bindBufferBase(s.UNIFORM_BUFFER,le,J),l[le]=J)}function ue(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),f={},m={},ie=null,se={},d={},l={},u=new WeakMap,g=[],b=null,h=!1,p=null,_=null,T=null,w=null,v=null,y=null,x=null,M=new _e(0,0,0),C=0,R=!1,I=null,F=null,B=null,D=null,j=null,ee.set(0,0,s.canvas.width,s.canvas.height),Me.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Se,disable:Xe,bindFramebuffer:Nt,drawBuffers:ke,useProgram:dt,setBlending:Kt,setMaterial:kt,setFlipSided:pn,setCullFace:At,setLineWidth:Kn,setPolygonOffset:Vt,setScissorTest:wn,activeTexture:An,bindTexture:En,unbindTexture:k,compressedTexImage2D:Rn,compressedTexImage3D:Tt,texImage2D:A,texImage3D:V,pixelStorei:ne,getParameter:ae,updateUBOMapping:$,uniformBlockBinding:Q,texStorage2D:Ve,texStorage3D:P,texSubImage2D:wt,texSubImage3D:xe,compressedTexSubImage2D:Bt,compressedTexSubImage3D:Oe,scissor:he,viewport:me,reset:ue}}function e_(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ze,f=new WeakMap,m=new Set,d,u=new WeakMap,g=new Set,b=new FinalizationRegistry(P=>g.delete(P)),h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(P,A){return h?new OffscreenCanvas(P,A):$s("canvas")}function _(P,A,V){let ae=1,ne=Ve(P);if((ne.width>V||ne.height>V)&&(ae=V/Math.max(ne.width,ne.height)),ae<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let he=Math.floor(ae*ne.width),me=Math.floor(ae*ne.height);d===void 0&&(d=p(he,me));let $=A?p(he,me):d;return $.width=he,$.height=me,$.getContext("2d").drawImage(P,0,0,he,me),Le("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+he+"x"+me+")."),$}else return"data"in P&&Le("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),P;return P}function T(P){return P.generateMipmaps}function w(P){s.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(P,A,V,ae,ne,he=!1){if(P!==null){if(s[P]!==void 0)return s[P];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let me;ae&&(me=e.get("EXT_texture_norm16"),me||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=A;if(A===s.RED&&(V===s.FLOAT&&($=s.R32F),V===s.HALF_FLOAT&&($=s.R16F),V===s.UNSIGNED_BYTE&&($=s.R8),V===s.UNSIGNED_SHORT&&me&&($=me.R16_EXT),V===s.SHORT&&me&&($=me.R16_SNORM_EXT)),A===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&($=s.R8UI),V===s.UNSIGNED_SHORT&&($=s.R16UI),V===s.UNSIGNED_INT&&($=s.R32UI),V===s.BYTE&&($=s.R8I),V===s.SHORT&&($=s.R16I),V===s.INT&&($=s.R32I)),A===s.RG&&(V===s.FLOAT&&($=s.RG32F),V===s.HALF_FLOAT&&($=s.RG16F),V===s.UNSIGNED_BYTE&&($=s.RG8),V===s.UNSIGNED_SHORT&&me&&($=me.RG16_EXT),V===s.SHORT&&me&&($=me.RG16_SNORM_EXT)),A===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&($=s.RG8UI),V===s.UNSIGNED_SHORT&&($=s.RG16UI),V===s.UNSIGNED_INT&&($=s.RG32UI),V===s.BYTE&&($=s.RG8I),V===s.SHORT&&($=s.RG16I),V===s.INT&&($=s.RG32I)),A===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&($=s.RGB8UI),V===s.UNSIGNED_SHORT&&($=s.RGB16UI),V===s.UNSIGNED_INT&&($=s.RGB32UI),V===s.BYTE&&($=s.RGB8I),V===s.SHORT&&($=s.RGB16I),V===s.INT&&($=s.RGB32I)),A===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&($=s.RGBA8UI),V===s.UNSIGNED_SHORT&&($=s.RGBA16UI),V===s.UNSIGNED_INT&&($=s.RGBA32UI),V===s.BYTE&&($=s.RGBA8I),V===s.SHORT&&($=s.RGBA16I),V===s.INT&&($=s.RGBA32I)),A===s.RGB&&(V===s.UNSIGNED_SHORT&&me&&($=me.RGB16_EXT),V===s.SHORT&&me&&($=me.RGB16_SNORM_EXT),V===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),V===s.UNSIGNED_INT_10F_11F_11F_REV&&($=s.R11F_G11F_B10F)),A===s.RGBA){let Q=he?Jr:Ze.getTransfer(ne);V===s.FLOAT&&($=s.RGBA32F),V===s.HALF_FLOAT&&($=s.RGBA16F),V===s.UNSIGNED_BYTE&&($=Q===ht?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT&&me&&($=me.RGBA16_EXT),V===s.SHORT&&me&&($=me.RGBA16_SNORM_EXT),V===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function x(P,A){let V;return P?A===null||A===qn||A===As?V=s.DEPTH24_STENCIL8:A===Sn?V=s.DEPTH32F_STENCIL8:A===dr&&(V=s.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===qn||A===As?V=s.DEPTH_COMPONENT24:A===Sn?V=s.DEPTH_COMPONENT32F:A===dr&&(V=s.DEPTH_COMPONENT16),V}function M(P,A){return T(P)===!0||P.isFramebufferTexture&&P.minFilter!==Rt&&P.minFilter!==It?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function C(P){let A=new WeakRef(P);n.get(P).__ref=A,g.add(A),b.register(P,A,A)}function R(P){let A=n.get(P).__ref;A!==void 0&&(g.delete(A),b.unregister(A))}function I(P){B(P.target)}function F(P){D(P.target)}function B(P){P.removeEventListener("dispose",I),R(P),Z(P),P.isVideoTexture&&f.delete(P),P.isHTMLTexture&&m.delete(P)}function D(P){P.removeEventListener("dispose",F),R(P),oe(P)}function j(){for(let P of g){let A=P.deref();A!==void 0&&(A.isRenderTarget===!0?D(A):B(A))}g.clear(),m.clear()}function Z(P){let A=n.get(P);if(A.__webglInit===void 0)return;let V=P.source,ae=u.get(V);if(ae){let ne=ae[A.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&K(P),Object.keys(ae).length===0&&u.delete(V)}n.remove(P)}function K(P){let A=n.get(P);s.deleteTexture(A.__webglTexture);let V=P.source,ae=u.get(V);delete ae[A.__cacheKey],a.memory.textures--}function oe(P){let A=n.get(P);A.__depthDisposeCallback&&A.__depthDisposeCallback();let V=P.depthTexture;if(V&&V.renderTarget===P&&B(V),P.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(A.__webglFramebuffer[ne]))for(let he=0;he<A.__webglFramebuffer[ne].length;he++)s.deleteFramebuffer(A.__webglFramebuffer[ne][he]);else s.deleteFramebuffer(A.__webglFramebuffer[ne]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[ne])}else{if(Array.isArray(A.__webglFramebuffer))for(let ne=0;ne<A.__webglFramebuffer.length;ne++)s.deleteFramebuffer(A.__webglFramebuffer[ne]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ne=0;ne<A.__webglColorRenderbuffer.length;ne++)A.__webglColorRenderbuffer[ne]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[ne]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let ae=P.textures;for(let ne=0,he=ae.length;ne<he;ne++){let me=n.get(ae[ne]);me.__webglTexture&&(s.deleteTexture(me.__webglTexture),a.memory.textures--),n.remove(ae[ne])}n.remove(P)}let Y=0;function ie(){Y=0}function se(){return Y}function Pe(P){Y=P}function We(){let P=Y;return P>=i.maxTextures&&Le("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),Y+=1,P}function ee(P){let A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.mipmapsAutoUpdate),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function Me(P,A){let V=n.get(P);if(P.isVideoTexture&&Bt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&V.__version!==P.version){let ae=P.image;if(ae===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{kt(V,P,A);return}}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+A)}function Ee(P,A){let V=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){kt(V,P,A);return}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+A)}function Ue(P,A){let V=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){kt(V,P,A);return}t.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+A)}function Se(P,A){let V=n.get(P);if(P.version>0&&V.__version!==P.version){pn(V,P,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+A)}let Xe={[Gn]:s.REPEAT,[Pn]:s.CLAMP_TO_EDGE,[Ys]:s.MIRRORED_REPEAT},Nt={[Rt]:s.NEAREST,[Xo]:s.NEAREST_MIPMAP_NEAREST,[ws]:s.NEAREST_MIPMAP_LINEAR,[It]:s.LINEAR,[ur]:s.LINEAR_MIPMAP_NEAREST,[bn]:s.LINEAR_MIPMAP_LINEAR},ke={[Ju]:s.NEVER,[oh]:s.ALWAYS,[Yu]:s.LESS,[rh]:s.LEQUAL,[Zu]:s.EQUAL,[ah]:s.GEQUAL,[$u]:s.GREATER,[Qu]:s.NOTEQUAL};function dt(P,A){if(A.type===Sn&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===It||A.magFilter===ur||A.magFilter===ws||A.magFilter===bn||A.minFilter===It||A.minFilter===ur||A.minFilter===ws||A.minFilter===bn)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,Xe[A.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,Xe[A.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,Xe[A.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,Nt[A.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,Nt[A.minFilter]),A.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,ke[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Rt||A.minFilter!==ws&&A.minFilter!==bn||A.type===Sn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function _t(P,A){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",I),C(A));let ae=A.source,ne=u.get(ae);ne===void 0&&(ne={},u.set(ae,ne));let he=ee(A);if(he!==P.__cacheKey){ne[he]===void 0&&(ne[he]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ne[he].usedTimes++;let me=ne[P.__cacheKey];me!==void 0&&(ne[P.__cacheKey].usedTimes--,me.usedTimes===0&&K(A)),P.__cacheKey=he,P.__webglTexture=ne[he].texture}return V}function nt(P,A,V){return Math.floor(Math.floor(P/V)/A)}function Kt(P,A,V,ae){let he=P.updateRanges;if(he.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,V,ae,A.data);else{he.sort((L,te)=>L.start-te.start);let me=0;for(let L=1;L<he.length;L++){let te=he[me],J=he[L],de=te.start+te.count,le=nt(J.start,A.width,4),fe=nt(te.start,A.width,4);J.start<=de+1&&le===fe&&nt(J.start+J.count-1,A.width,4)===le?te.count=Math.max(te.count,J.start+J.count-te.start):(++me,he[me]=J)}he.length=me+1;let $=t.getParameter(s.UNPACK_ROW_LENGTH),Q=t.getParameter(s.UNPACK_SKIP_PIXELS),ue=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let L=0,te=he.length;L<te;L++){let J=he[L],de=Math.floor(J.start/4),le=Math.ceil(J.count/4),fe=de%A.width,Ne=Math.floor(de/A.width),Ke=le,ce=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ne),t.texSubImage2D(s.TEXTURE_2D,0,fe,Ne,Ke,ce,V,ae,A.data)}P.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,$),t.pixelStorei(s.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(s.UNPACK_SKIP_ROWS,ue)}}function kt(P,A,V){let ae=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ae=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ae=s.TEXTURE_3D);let ne=_t(P,A),he=A.source;t.bindTexture(ae,P.__webglTexture,s.TEXTURE0+V);let me=n.get(he);if(he.version!==me.__version||ne===!0){if(t.activeTexture(s.TEXTURE0+V),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){let ce=Ze.getPrimaries(Ze.workingColorSpace),Fe=A.colorSpace===Pi?null:Ze.getPrimaries(A.colorSpace),je=A.colorSpace===Pi||ce===Fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,je)}t.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment);let Q=_(A.image,!1,i.maxTextureSize);Q=Oe(A,Q);let ue=r.convert(A.format,A.colorSpace),L=r.convert(A.type),te=y(A.internalFormat,ue,L,A.normalized,A.colorSpace,A.isVideoTexture);dt(ae,A);let J,de=A.mipmaps,le=A.isVideoTexture!==!0,fe=me.__version===void 0||ne===!0,Ne=he.dataReady,Ke=M(A,Q);if(A.isDepthTexture)te=x(A.format===Ci,A.type),fe&&(le?t.texStorage2D(s.TEXTURE_2D,1,te,Q.width,Q.height):t.texImage2D(s.TEXTURE_2D,0,te,Q.width,Q.height,0,ue,L,null));else if(A.isDataTexture)if(de.length>0){le&&fe&&t.texStorage2D(s.TEXTURE_2D,Ke,te,de[0].width,de[0].height);for(let ce=0,Fe=de.length;ce<Fe;ce++)J=de[ce],le?Ne&&t.texSubImage2D(s.TEXTURE_2D,ce,0,0,J.width,J.height,ue,L,J.data):t.texImage2D(s.TEXTURE_2D,ce,te,J.width,J.height,0,ue,L,J.data);A.generateMipmaps=!1}else le?(fe&&t.texStorage2D(s.TEXTURE_2D,Ke,te,Q.width,Q.height),Ne&&Kt(A,Q,ue,L)):t.texImage2D(s.TEXTURE_2D,0,te,Q.width,Q.height,0,ue,L,Q.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){le&&fe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ke,te,de[0].width,de[0].height,Q.depth);for(let ce=0,Fe=de.length;ce<Fe;ce++)if(J=de[ce],A.format!==Nn)if(ue!==null)if(le){if(Ne)if(A.layerUpdates.size>0){let je=bh(J.width,J.height,A.format,A.type);for(let ye of A.layerUpdates){let pt=J.data.subarray(ye*je/J.data.BYTES_PER_ELEMENT,(ye+1)*je/J.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,ye,J.width,J.height,1,ue,pt)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,0,J.width,J.height,Q.depth,ue,J.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ce,te,J.width,J.height,Q.depth,0,J.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?Ne&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,0,J.width,J.height,Q.depth,ue,L,J.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ce,te,J.width,J.height,Q.depth,0,ue,L,J.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{le&&fe&&t.texStorage2D(s.TEXTURE_2D,Ke,te,de[0].width,de[0].height);for(let ce=0,Fe=de.length;ce<Fe;ce++)J=de[ce],A.format!==Nn?ue!==null?le?Ne&&t.compressedTexSubImage2D(s.TEXTURE_2D,ce,0,0,J.width,J.height,ue,J.data):t.compressedTexImage2D(s.TEXTURE_2D,ce,te,J.width,J.height,0,J.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?Ne&&t.texSubImage2D(s.TEXTURE_2D,ce,0,0,J.width,J.height,ue,L,J.data):t.texImage2D(s.TEXTURE_2D,ce,te,J.width,J.height,0,ue,L,J.data)}else if(A.isDataArrayTexture)if(le){if(fe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ke,te,Q.width,Q.height,Q.depth),Ne)if(A.layerUpdates.size>0){let ce=bh(Q.width,Q.height,A.format,A.type);for(let Fe of A.layerUpdates){let je=Q.data.subarray(Fe*ce/Q.data.BYTES_PER_ELEMENT,(Fe+1)*ce/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Fe,Q.width,Q.height,1,ue,L,je)}A.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ue,L,Q.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,te,Q.width,Q.height,Q.depth,0,ue,L,Q.data);else if(A.isData3DTexture)le?(fe&&t.texStorage3D(s.TEXTURE_3D,Ke,te,Q.width,Q.height,Q.depth),Ne&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ue,L,Q.data)):t.texImage3D(s.TEXTURE_3D,0,te,Q.width,Q.height,Q.depth,0,ue,L,Q.data);else if(A.isFramebufferTexture){if(fe)if(le)t.texStorage2D(s.TEXTURE_2D,Ke,te,Q.width,Q.height);else{let ce=Q.width,Fe=Q.height;for(let je=0;je<Ke;je++)t.texImage2D(s.TEXTURE_2D,je,te,ce,Fe,0,ue,L,null),ce>>=1,Fe>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in s){let ce=s.canvas;if(ce.hasAttribute("layoutsubtree")||ce.setAttribute("layoutsubtree","true"),Q.parentNode!==ce){ce.appendChild(Q),m.add(A),ce.onpaint=Fe=>{let je=Fe.changedElements;for(let ye of m)je.includes(ye.image)&&(ye.needsUpdate=!0)},ce.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,Q);else{let je=s.RGBA,ye=s.RGBA,pt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,je,ye,pt,Q)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(de.length>0){if(le&&fe){let ce=Ve(de[0]);t.texStorage2D(s.TEXTURE_2D,Ke,te,ce.width,ce.height)}for(let ce=0,Fe=de.length;ce<Fe;ce++)J=de[ce],le?Ne&&t.texSubImage2D(s.TEXTURE_2D,ce,0,0,ue,L,J):t.texImage2D(s.TEXTURE_2D,ce,te,ue,L,J);A.generateMipmaps=!1}else if(le){if(fe){let ce=Ve(Q);t.texStorage2D(s.TEXTURE_2D,Ke,te,ce.width,ce.height)}Ne&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ue,L,Q)}else t.texImage2D(s.TEXTURE_2D,0,te,ue,L,Q);T(A)&&A.mipmapsAutoUpdate===!0&&w(ae),me.__version=he.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function pn(P,A,V){if(A.image.length!==6)return;let ae=_t(P,A),ne=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+V);let he=n.get(ne);if(ne.version!==he.__version||ae===!0){t.activeTexture(s.TEXTURE0+V);let me=Ze.getPrimaries(Ze.workingColorSpace),$=A.colorSpace===Pi?null:Ze.getPrimaries(A.colorSpace),Q=A.colorSpace===Pi||me===$?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let ue=A.isCompressedTexture||A.image[0].isCompressedTexture,L=A.image[0]&&A.image[0].isDataTexture,te=[];for(let ye=0;ye<6;ye++)!ue&&!L?te[ye]=_(A.image[ye],!0,i.maxCubemapSize):te[ye]=L?A.image[ye].image:A.image[ye],te[ye]=Oe(A,te[ye]);let J=te[0],de=r.convert(A.format,A.colorSpace),le=r.convert(A.type),fe=y(A.internalFormat,de,le,A.normalized,A.colorSpace),Ne=A.isVideoTexture!==!0,Ke=he.__version===void 0||ae===!0,ce=ne.dataReady,Fe=M(A,J);dt(s.TEXTURE_CUBE_MAP,A);let je;if(A.isDepthTexture){if(fe=x(A.format===Ci,A.type),Ke)if(Ne)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,fe,J.width,J.height);else for(let ye=0;ye<6;ye++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,fe,J.width,J.height,0,de,le,null)}else if(ue){Ne&&Ke&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Fe,fe,J.width,J.height);for(let ye=0;ye<6;ye++){je=te[ye].mipmaps;for(let pt=0;pt<je.length;pt++){let Wt=je[pt];A.format!==Nn?de!==null?Ne?ce&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,pt,0,0,Wt.width,Wt.height,de,Wt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,pt,fe,Wt.width,Wt.height,0,Wt.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,pt,0,0,Wt.width,Wt.height,de,le,Wt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,pt,fe,Wt.width,Wt.height,0,de,le,Wt.data)}}}else{if(je=A.mipmaps,Ne&&Ke){je.length>0&&Fe++;let ye=Ve(te[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Fe,fe,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(L){Ne?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,te[ye].width,te[ye].height,de,le,te[ye].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,fe,te[ye].width,te[ye].height,0,de,le,te[ye].data);for(let pt=0;pt<je.length;pt++){let Ni=je[pt].image[ye].image;Ne?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,pt+1,0,0,Ni.width,Ni.height,de,le,Ni.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,pt+1,fe,Ni.width,Ni.height,0,de,le,Ni.data)}}else{Ne?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,de,le,te[ye]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,fe,de,le,te[ye]);for(let pt=0;pt<je.length;pt++){let Wt=je[pt];Ne?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,pt+1,0,0,de,le,Wt.image[ye]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,pt+1,fe,de,le,Wt.image[ye])}}}T(A)&&A.mipmapsAutoUpdate===!0&&w(s.TEXTURE_CUBE_MAP),he.__version=ne.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function At(P,A,V,ae,ne,he){let me=r.convert(V.format,V.colorSpace),$=r.convert(V.type),Q=y(V.internalFormat,me,$,V.normalized,V.colorSpace),ue=n.get(A),L=n.get(V);if(L.__renderTarget=A,!ue.__hasExternalTextures){let te=Math.max(1,A.width>>he),J=Math.max(1,A.height>>he);ne===s.TEXTURE_3D||ne===s.TEXTURE_2D_ARRAY?t.texImage3D(ne,he,Q,te,J,A.depth,0,me,$,null):t.texImage2D(ne,he,Q,te,J,0,me,$,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),xe(A)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ae,ne,L.__webglTexture,0,wt(A)):(ne===s.TEXTURE_2D||ne>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ae,ne,L.__webglTexture,he),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Kn(P,A,V){if(s.bindRenderbuffer(s.RENDERBUFFER,P),A.depthBuffer){let ae=A.depthTexture,ne=ae&&ae.isDepthTexture?ae.type:null,he=x(A.stencilBuffer,ne),me=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;xe(A)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,wt(A),he,A.width,A.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,wt(A),he,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,he,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,P)}else{let ae=A.textures;for(let ne=0;ne<ae.length;ne++){let he=ae[ne],me=r.convert(he.format,he.colorSpace),$=r.convert(he.type),Q=y(he.internalFormat,me,$,he.normalized,he.colorSpace);xe(A)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,wt(A),Q,A.width,A.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,wt(A),Q,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Q,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Vt(P,A,V){let ae=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ne=n.get(A.depthTexture);ne.__renderTarget=A;let he=ae?A.depthTexture.image[0]:A.depthTexture.image;(!ne.__webglTexture||he.width!==A.width||he.height!==A.height)&&(he.width=A.width,he.height=A.height,A.depthTexture.needsUpdate=!0),ae?Se(A.depthTexture,0):Me(A.depthTexture,0);let me=ne.__webglTexture,$=wt(A),Q=ae?s.TEXTURE_CUBE_MAP_POSITIVE_X+V:s.TEXTURE_2D,ue=A.depthTexture.format===Ci?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(A.depthTexture.format===bi)xe(A)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ue,Q,me,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,ue,Q,me,0);else if(A.depthTexture.format===Ci)xe(A)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ue,Q,me,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,ue,Q,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function wn(P){let A=n.get(P),V=P.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==P.depthTexture){let ae=P.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ae){let ne=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ae.removeEventListener("dispose",ne)};ae.addEventListener("dispose",ne),A.__depthDisposeCallback=ne}A.__boundDepthTexture=ae}if(P.depthTexture&&!A.__autoAllocateDepthBuffer)if(V)for(let ae=0;ae<6;ae++)Vt(A.__webglFramebuffer[ae],P,ae);else P.texture.mipmaps.length>0?Vt(A.__webglFramebuffer[0],P,0):Vt(A.__webglFramebuffer,P,0);else if(V){A.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[ae]),A.__webglDepthbuffer[ae]===void 0)A.__webglDepthbuffer[ae]=s.createRenderbuffer(),Kn(A.__webglDepthbuffer[ae],P,!1);else{let ne=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=A.__webglDepthbuffer[ae];s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,ne,s.RENDERBUFFER,he)}}else if(P.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),Kn(A.__webglDepthbuffer,P,!1);else{let ne=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,ne,s.RENDERBUFFER,he)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function An(P,A,V){let ae=n.get(P);A!==void 0&&At(ae.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&wn(P)}function En(P){let A=P.texture,V=n.get(P),ae=n.get(A);P.addEventListener("dispose",F),C(P);let ne=P.textures,he=P.isWebGLCubeRenderTarget===!0,me=ne.length>1;if(me||(ae.__webglTexture===void 0&&(ae.__webglTexture=s.createTexture()),ae.__version=A.version,a.memory.textures++),he){V.__webglFramebuffer=[];for(let $=0;$<6;$++)if(A.mipmaps.length>0){V.__webglFramebuffer[$]=[];for(let Q=0;Q<A.mipmaps.length;Q++)V.__webglFramebuffer[$][Q]=s.createFramebuffer()}else V.__webglFramebuffer[$]=s.createFramebuffer()}else{if(A.mipmaps.length>0){V.__webglFramebuffer=[];for(let $=0;$<A.mipmaps.length;$++)V.__webglFramebuffer[$]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(me)for(let $=0,Q=ne.length;$<Q;$++){let ue=n.get(ne[$]);ue.__webglTexture===void 0&&(ue.__webglTexture=s.createTexture(),a.memory.textures++)}if(P.samples>0&&xe(P)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let $=0;$<ne.length;$++){let Q=ne[$];V.__webglColorRenderbuffer[$]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[$]);let ue=r.convert(Q.format,Q.colorSpace),L=r.convert(Q.type),te=y(Q.internalFormat,ue,L,Q.normalized,Q.colorSpace,P.isXRRenderTarget===!0),J=wt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,J,te,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$,s.RENDERBUFFER,V.__webglColorRenderbuffer[$])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),Kn(V.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){t.bindTexture(s.TEXTURE_CUBE_MAP,ae.__webglTexture),dt(s.TEXTURE_CUBE_MAP,A);for(let $=0;$<6;$++)if(A.mipmaps.length>0)for(let Q=0;Q<A.mipmaps.length;Q++)At(V.__webglFramebuffer[$][Q],P,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Q);else At(V.__webglFramebuffer[$],P,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);T(A)?w(s.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}else if(me){for(let $=0,Q=ne.length;$<Q;$++){let ue=ne[$],L=n.get(ue),te=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(te=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(te,L.__webglTexture),dt(te,ue),At(V.__webglFramebuffer,P,ue,s.COLOR_ATTACHMENT0+$,te,0),T(ue)&&w(te)}t.unbindTexture()}else{let $=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&($=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture($,ae.__webglTexture),dt($,A),A.mipmaps.length>0)for(let Q=0;Q<A.mipmaps.length;Q++)At(V.__webglFramebuffer[Q],P,A,s.COLOR_ATTACHMENT0,$,Q);else At(V.__webglFramebuffer,P,A,s.COLOR_ATTACHMENT0,$,0);T(A)?w($):A.mipmaps.length>0&&s.texParameteri($,s.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}P.depthBuffer&&wn(P)}function k(P){let A=P.textures;for(let V=0,ae=A.length;V<ae;V++){let ne=A[V];if(T(ne)&&ne.mipmapsAutoUpdate===!0){let he=v(P),me=n.get(ne).__webglTexture;t.bindTexture(he,me),w(he),t.unbindTexture()}}}let Rn=[];function Tt(P){if(P.samples>0){if(xe(P)===!1){let A=P.textures,V=P.width,ae=P.height,ne=s.COLOR_BUFFER_BIT,he=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=n.get(P),$=A.length>1;if($)for(let ue=0;ue<A.length;ue++)t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let ue=0;ue<A.length;ue++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ne|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ne|=s.STENCIL_BUFFER_BIT)),$){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,me.__webglColorRenderbuffer[ue]);let L=n.get(A[ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,L,0)}s.blitFramebuffer(0,0,V,ae,0,0,V,ae,ne,s.NEAREST),l===!0&&(Rn.length=0,Rn.push(s.COLOR_ATTACHMENT0+ue),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&Rn.push(he),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Rn))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),$)for(let ue=0;ue<A.length;ue++){t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,me.__webglColorRenderbuffer[ue]);let L=n.get(A[ue]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,L,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let A=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function wt(P){return Math.min(i.maxSamples,P.samples)}function xe(P){let A=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Bt(P){let A=a.render.frame;f.get(P)!==A&&(f.set(P,A),P.update())}function Oe(P,A){let V=P.colorSpace,ae=P.format,ne=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==ln&&V!==Pi&&(Ze.getTransfer(V)===ht?(ae!==Nn||ne!==xn)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Be("WebGLTextures: Unsupported texture color space:",V)),A}function Ve(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=We,this.resetTextureUnits=ie,this.getTextureUnits=se,this.setTextureUnits=Pe,this.setTexture2D=Me,this.setTexture2DArray=Ee,this.setTexture3D=Ue,this.setTextureCube=Se,this.rebindTextures=An,this.setupRenderTarget=En,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=wn,this.setupFrameBufferTexture=At,this.useMultisampledRTT=xe,this.dispose=j}function t_(s,e){function t(n,i=Pi){let r,a=Ze.getTransfer(i);if(n===xn)return s.UNSIGNED_BYTE;if(n===Ko)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Jo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===eh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===th)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===$l)return s.BYTE;if(n===Ql)return s.SHORT;if(n===dr)return s.UNSIGNED_SHORT;if(n===jo)return s.INT;if(n===qn)return s.UNSIGNED_INT;if(n===Sn)return s.FLOAT;if(n===Xn)return s.HALF_FLOAT;if(n===nh)return s.ALPHA;if(n===ih)return s.RGB;if(n===Nn)return s.RGBA;if(n===bi)return s.DEPTH_COMPONENT;if(n===Ci)return s.DEPTH_STENCIL;if(n===pr)return s.RED;if(n===Yo)return s.RED_INTEGER;if(n===Ji)return s.RG;if(n===Zo)return s.RG_INTEGER;if(n===$o)return s.RGBA_INTEGER;if(n===Ma||n===Sa||n===Ta||n===wa)if(a===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ma)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ma)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qo||n===ec||n===tc||n===nc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Qo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ec)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===tc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ic||n===sc||n===rc||n===ac||n===oc||n===Aa||n===cc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ic||n===sc)return a===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===rc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ac)return r.COMPRESSED_R11_EAC;if(n===oc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Aa)return r.COMPRESSED_RG11_EAC;if(n===cc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===lc||n===hc||n===fc||n===uc||n===dc||n===pc||n===mc||n===gc||n===bc||n===xc||n===_c||n===yc||n===vc||n===Mc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===lc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===uc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===dc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_c)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sc||n===Tc||n===wc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Sc)return a===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Tc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ac||n===Ec||n===Ea||n===Rc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ac)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ec)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ea)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Rc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===As?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var n_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,i_=`
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

}`,Ah=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ca(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Zn({vertexShader:n_,fragmentShader:i_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $e(new gs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Eh=class extends Hn{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,f=null,m=null,d=null,u=null,g=null,b=typeof XRWebGLBinding<"u",h=new Ah,p={},_=t.getContextAttributes(),T=null,w=null,v=[],y=[],x=new ze,M=null,C=null,R=new Yt;R.viewport=new mt;let I=new Yt;I.viewport=new mt;let F=[R,I],B=new Go,D=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let Me=v[ee];return Me===void 0&&(Me=new tr,v[ee]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(ee){let Me=v[ee];return Me===void 0&&(Me=new tr,v[ee]=Me),Me.getGripSpace()},this.getHand=function(ee){let Me=v[ee];return Me===void 0&&(Me=new tr,v[ee]=Me),Me.getHandSpace()};function Z(ee){let Me=y.indexOf(ee.inputSource);if(Me===-1)return;let Ee=v[Me];Ee!==void 0&&(Ee.update(ee.inputSource,ee.frame,c||a),Ee.dispatchEvent({type:ee.type,data:ee.inputSource}))}function K(){i.removeEventListener("select",Z),i.removeEventListener("selectstart",Z),i.removeEventListener("selectend",Z),i.removeEventListener("squeeze",Z),i.removeEventListener("squeezestart",Z),i.removeEventListener("squeezeend",Z),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",oe);for(let ee=0;ee<v.length;ee++){let Me=y[ee];Me!==null&&(y[ee]=null,v[ee].disconnect(Me))}D=null,j=null,h.reset();for(let ee in p)delete p[ee];if(e.setRenderTarget(T),u=null,d=null,m=null,i=null,w=null,We.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(x.width,x.height,!1),C!==null){let ee=C.camera;ee.fov=C.fov,ee.zoom=C.zoom,ee.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,n.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return m===null&&b&&(m=new XRWebGLBinding(i,t)),m},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(ee){if(i=ee,i!==null){if(T=e.getRenderTarget(),i.addEventListener("select",Z),i.addEventListener("selectstart",Z),i.addEventListener("selectend",Z),i.addEventListener("squeeze",Z),i.addEventListener("squeezestart",Z),i.addEventListener("squeezeend",Z),i.addEventListener("end",K),i.addEventListener("inputsourceschange",oe),_.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(x),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Ue=null,Se=null;_.depth&&(Se=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=_.stencil?Ci:bi,Ue=_.stencil?As:qn);let Xe={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};m=this.getBinding(),d=m.createProjectionLayer(Xe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new Mn(d.textureWidth,d.textureHeight,{format:Nn,type:xn,depthTexture:new _i(d.textureWidth,d.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Ee={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,t,Ee),i.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),w=new Mn(u.framebufferWidth,u.framebufferHeight,{format:Nn,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),We.setContext(i),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function oe(ee){for(let Me=0;Me<ee.removed.length;Me++){let Ee=ee.removed[Me],Ue=y.indexOf(Ee);Ue>=0&&(y[Ue]=null,v[Ue].disconnect(Ee))}for(let Me=0;Me<ee.added.length;Me++){let Ee=ee.added[Me],Ue=y.indexOf(Ee);if(Ue===-1){for(let Xe=0;Xe<v.length;Xe++)if(Xe>=y.length){y.push(Ee),Ue=Xe;break}else if(y[Xe]===null){y[Xe]=Ee,Ue=Xe;break}if(Ue===-1)break}let Se=v[Ue];Se&&Se.connect(Ee)}}function Y(ee,Me){Me===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(Me.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(i===null)return;let Me=ee.near,Ee=ee.far;h.texture!==null&&(h.depthNear>0&&(Me=h.depthNear),h.depthFar>0&&(Ee=h.depthFar)),B.near=I.near=R.near=Me,B.far=I.far=R.far=Ee,(D!==B.near||j!==B.far)&&(i.updateRenderState({depthNear:B.near,depthFar:B.far}),D=B.near,j=B.far),B.layers.mask=ee.layers.mask|6,R.layers.mask=B.layers.mask&-5,I.layers.mask=B.layers.mask&-3;let Ue=ee.parent,Se=B.cameras;Y(B,Ue);for(let Xe=0;Xe<Se.length;Xe++)Y(Se[Xe],Ue);B.projectionMatrix.copy(R.projectionMatrix),B.projectionMatrixInverse.copy(R.projectionMatrixInverse),C===null&&ee.isPerspectiveCamera&&(C={camera:ee,fov:ee.fov,zoom:ee.zoom}),ie(ee,B,Ue)};function ie(ee,Me,Ee){Ee===null?ee.matrix.copy(Me.matrixWorld):(ee.matrix.copy(Ee.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(Me.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(Me.projectionMatrix),ee.projectionMatrixInverse.copy(Me.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=us*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(ee){l=ee,d!==null&&(d.fixedFoveation=ee),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=ee)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(B)},this.getCameraTexture=function(ee){return p[ee]};let se=null;function Pe(ee,Me){if(f=Me.getViewerPose(c||a),g=Me,f!==null){let Ee=f.views;u!==null&&(e.setRenderTargetFramebuffer(w,u.framebuffer),e.setRenderTarget(w));let Ue=!1;Ee.length!==B.cameras.length&&(B.cameras.length=0,Ue=!0);for(let ke=0;ke<Ee.length;ke++){let dt=Ee[ke],_t=null;if(u!==null)_t=u.getViewport(dt);else{let Kt=m.getViewSubImage(d,dt);_t=Kt.viewport,ke===0&&(e.setRenderTargetTextures(w,Kt.colorTexture,Kt.depthStencilTexture),e.setRenderTarget(w))}let nt=F[ke];nt===void 0&&(nt=new Yt,nt.layers.enable(ke),nt.viewport=new mt,F[ke]=nt),nt.matrix.fromArray(dt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(dt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(_t.x,_t.y,_t.width,_t.height),ke===0&&(B.matrix.copy(nt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ue===!0&&B.cameras.push(nt)}let Se=i.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&b){m=n.getBinding();let ke=m.getDepthInformation(Ee[0]);ke&&ke.isValid&&ke.texture&&h.init(ke,i.renderState)}if(Se&&Se.includes("camera-access")&&b){e.state.unbindTexture(),m=n.getBinding();for(let ke=0;ke<Ee.length;ke++){let dt=Ee[ke].camera;if(dt){let _t=p[dt];_t||(_t=new ca,p[dt]=_t);let nt=m.getCameraImage(dt);_t.sourceTexture=nt}}}}for(let Ee=0;Ee<v.length;Ee++){let Ue=y[Ee],Se=v[Ee];Ue!==null&&Se!==void 0&&Se.update(Ue,Me,c||a)}se&&se(ee,Me),Me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Me}),g=null}let We=new Cd;We.setAnimationLoop(Pe),this.setAnimationLoop=function(ee){se=ee},this.dispose=function(){}}},s_=new Ge,Bd=new He;Bd.set(-1,0,0,0,1,0,0,0,1);function r_(s,e){function t(h,p){h.matrixAutoUpdate===!0&&h.updateMatrix(),p.value.copy(h.matrix)}function n(h,p){p.color.getRGB(h.fogColor.value,ph(s)),p.isFog?(h.fogNear.value=p.near,h.fogFar.value=p.far):p.isFogExp2&&(h.fogDensity.value=p.density)}function i(h,p,_,T,w){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(h,p):p.isMeshLambertMaterial?(r(h,p),p.envMap&&(h.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(h,p),m(h,p)):p.isMeshPhongMaterial?(r(h,p),f(h,p),p.envMap&&(h.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(h,p),d(h,p),p.isMeshPhysicalMaterial&&u(h,p,w)):p.isMeshMatcapMaterial?(r(h,p),g(h,p)):p.isMeshDepthMaterial?r(h,p):p.isMeshDistanceMaterial?(r(h,p),b(h,p)):p.isMeshNormalMaterial?r(h,p):p.isLineBasicMaterial?(a(h,p),p.isLineDashedMaterial&&o(h,p)):p.isPointsMaterial?l(h,p,_,T):p.isSpriteMaterial?c(h,p):p.isShadowMaterial?(h.color.value.copy(p.color),h.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(h,p){h.opacity.value=p.opacity,p.color&&h.diffuse.value.copy(p.color),p.emissive&&h.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(h.map.value=p.map,t(p.map,h.mapTransform)),p.alphaMap&&(h.alphaMap.value=p.alphaMap,t(p.alphaMap,h.alphaMapTransform)),p.bumpMap&&(h.bumpMap.value=p.bumpMap,t(p.bumpMap,h.bumpMapTransform),h.bumpScale.value=p.bumpScale,p.side===jt&&(h.bumpScale.value*=-1)),p.normalMap&&(h.normalMap.value=p.normalMap,t(p.normalMap,h.normalMapTransform),h.normalScale.value.copy(p.normalScale),p.side===jt&&h.normalScale.value.negate()),p.displacementMap&&(h.displacementMap.value=p.displacementMap,t(p.displacementMap,h.displacementMapTransform),h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias),p.emissiveMap&&(h.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,h.emissiveMapTransform)),p.specularMap&&(h.specularMap.value=p.specularMap,t(p.specularMap,h.specularMapTransform)),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let _=e.get(p),T=_.envMap,w=_.envMapRotation;T&&(h.envMap.value=T,h.envMapRotation.value.setFromMatrix4(s_.makeRotationFromEuler(w)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&h.envMapRotation.value.premultiply(Bd),h.reflectivity.value=p.reflectivity,h.ior.value=p.ior,h.refractionRatio.value=p.refractionRatio),p.lightMap&&(h.lightMap.value=p.lightMap,h.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,h.lightMapTransform)),p.aoMap&&(h.aoMap.value=p.aoMap,h.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,h.aoMapTransform))}function a(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,p.map&&(h.map.value=p.map,t(p.map,h.mapTransform))}function o(h,p){h.dashSize.value=p.dashSize,h.totalSize.value=p.dashSize+p.gapSize,h.scale.value=p.scale}function l(h,p,_,T){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.size.value=p.size*_,h.scale.value=T*.5,p.map&&(h.map.value=p.map,t(p.map,h.uvTransform)),p.alphaMap&&(h.alphaMap.value=p.alphaMap,t(p.alphaMap,h.alphaMapTransform)),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest)}function c(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.rotation.value=p.rotation,p.map&&(h.map.value=p.map,t(p.map,h.mapTransform)),p.alphaMap&&(h.alphaMap.value=p.alphaMap,t(p.alphaMap,h.alphaMapTransform)),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest)}function f(h,p){h.specular.value.copy(p.specular),h.shininess.value=Math.max(p.shininess,1e-4)}function m(h,p){p.gradientMap&&(h.gradientMap.value=p.gradientMap)}function d(h,p){h.metalness.value=p.metalness,p.metalnessMap&&(h.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,h.metalnessMapTransform)),h.roughness.value=p.roughness,p.roughnessMap&&(h.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,h.roughnessMapTransform)),p.envMap&&(h.envMapIntensity.value=p.envMapIntensity)}function u(h,p,_){h.ior.value=p.ior,p.diffuseRoughness>0&&(h.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(h.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,h.diffuseRoughnessMapTransform))),p.sheen>0&&(h.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),h.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(h.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,h.sheenColorMapTransform)),p.sheenRoughnessMap&&(h.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,h.sheenRoughnessMapTransform))),p.clearcoat>0&&(h.clearcoat.value=p.clearcoat,h.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(h.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,h.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(h.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===jt&&h.clearcoatNormalScale.value.negate())),p.dispersion>0&&(h.dispersion.value=p.dispersion),p.retroreflectivity>0&&(h.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(h.iridescence.value=p.iridescence,h.iridescenceIOR.value=p.iridescenceIOR,h.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,h.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(h.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,h.iridescenceMapTransform)),p.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),p.transmission>0&&(h.transmission.value=p.transmission,h.transmissionSamplerMap.value=_.texture,h.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(h.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,h.transmissionMapTransform)),h.thickness.value=p.thickness,p.thicknessMap&&(h.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=p.attenuationDistance,h.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(h.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(h.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=p.specularIntensity,h.specularColor.value.copy(p.specularColor),p.specularColorMap&&(h.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,h.specularColorMapTransform)),p.specularIntensityMap&&(h.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,h.specularIntensityMapTransform))}function g(h,p){p.matcap&&(h.matcap.value=p.matcap)}function b(h,p){let _=e.get(p).light;h.referencePosition.value.setFromMatrixPosition(_.matrixWorld),h.nearDistance.value=_.shadow.camera.near,h.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function a_(s,e,t,n){let i={},r={};function a(_,T){let w=T.program;n.uniformBlockBinding(_,w,i[_.id])}function o(_,T){let w=i[_.id];w===void 0&&(g(_),w=l(_),i[_.id]=w,_.addEventListener("dispose",h));let v=T.program;n.updateUBOMapping(_,v);let y=e.render.frame;r[_.id]!==y&&(c(_),r[_.id]=y)}function l(_){let T=s.createBuffer(),w=_.__size,v=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,w,v),s.bindBuffer(s.UNIFORM_BUFFER,null),T}function c(_){let T=i[_.id],w=_.uniforms,v=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let y=0,x=w.length;y<x;y++){let M=w[y];if(Array.isArray(M))for(let C=0,R=M.length;C<R;C++)f(M[C],y,C,v);else f(M,y,0,v)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(_,T,w,v){if(d(_,T,w,v)===!0){let y=_.__offset,x=_.value;if(Array.isArray(x)){let M=0;for(let C=0;C<x.length;C++){let R=x[C],I=b(R,!0);m(R,_.__data,M),M+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else m(x,_.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,y,_.__data)}}function m(_,T,w){typeof _=="number"||typeof _=="boolean"?T[w]=_:_.isMatrix3?(T[w]=_.elements[0],T[w+1]=_.elements[1],T[w+2]=_.elements[2],T[w+3]=0,T[w+4]=_.elements[3],T[w+5]=_.elements[4],T[w+6]=_.elements[5],T[w+7]=0,T[w+8]=_.elements[6],T[w+9]=_.elements[7],T[w+10]=_.elements[8],T[w+11]=0):ArrayBuffer.isView(_)?T.set(_.subarray(0,T.length-w),w):_.toArray(T,w)}function d(_,T,w,v){let y=_.value,x=T+"_"+w;if(Array.isArray(y)){v[x]===void 0&&(v[x]=[]);let M=v[x],C=!1;for(let R=0;R<y.length;R++)u(y[R],M,R)===!0&&(C=!0);return C}return u(y,v,x)}function u(_,T,w){if(T[w]===void 0)return typeof _=="number"||typeof _=="boolean"?T[w]=_:ArrayBuffer.isView(_)?T[w]=_.slice():T[w]=_.clone(),!0;{let v=T[w];if(typeof _=="number"||typeof _=="boolean"){if(v!==_)return T[w]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(v.equals(_)===!1)return v.copy(_),!0}}return!1}function g(_){let T=_.uniforms,w=0,v=16;for(let x=0,M=T.length;x<M;x++){let C=Array.isArray(T[x])?T[x]:[T[x]];for(let R=0,I=C.length;R<I;R++){let F=C[R],B=Array.isArray(F.value)?F.value:[F.value],D=Array.isArray(T[x])||Array.isArray(F.value),j=w;for(let K=0,oe=B.length;K<oe;K++){let Y=B[K],ie=b(Y,D),se=w%v,Pe=se%ie.boundary,We=se+Pe;w+=Pe,We!==0&&v-We<ie.storage&&(w+=v-We),K===0&&(j=w),w+=ie.storage}let Z=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new Z((w-j)/Float32Array.BYTES_PER_ELEMENT),F.__offset=j}}let y=w%v;return y>0&&(w+=v-y),_.__size=w,_.__cache={},this}function b(_,T){let w={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(w.boundary=4,w.storage=4):_.isVector2?(w.boundary=8,w.storage=8):_.isVector3||_.isColor?(w.boundary=16,w.storage=12):_.isVector4?(w.boundary=16,w.storage=16):_.isMatrix3?(w.boundary=16,w.storage=48):_.isMatrix4?(w.boundary=16,w.storage=64):_.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(w.boundary=16,w.storage=_.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",_),T===!0&&(w.boundary=16,w.storage=Math.ceil(w.storage/16)*16),w}function h(_){let T=_.target;T.removeEventListener("dispose",h),s.deleteBuffer(i[T.id]),delete i[T.id],delete r[T.id]}function p(){for(let _ in i)s.deleteBuffer(i[_]);i={},r={}}return{bind:a,update:o,dispose:p}}var o_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ii=null;function c_(){return ii===null&&(ii=new Vi(o_,16,16,Ji,Xn),ii.name="DFG_LUT",ii.minFilter=It,ii.magFilter=It,ii.wrapS=Pn,ii.wrapT=Pn,ii.generateMipmaps=!1,ii.needsUpdate=!0),ii}var Uc=class{constructor(e={}){let{canvas:t=ed(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:d=!1,outputBufferType:u=xn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let b=u,h=new Set([$o,Zo,Yo]),p=new Set([xn,qn,dr,As,Ko,Jo]),_=new Uint32Array(4),T=new Int32Array(4),w={textures:[],min:[],max:[],resolution:[]},v=null,y=null,x=[],M=[],C=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,F=null,B=null,D=null,j=null;this._outputColorSpace=St;let Z=0,K=0,oe=null,Y=-1,ie=null,se=new mt,Pe=new mt,We=null,ee=new _e(0),Me=0,Ee=t.width,Ue=t.height,Se=1,Xe=null,Nt=null,ke=new mt(0,0,Ee,Ue),dt=new mt(0,0,Ee,Ue),_t=!1,nt=new qi,Kt=new Co,kt=!1,pn=!1,At=new Ge,Kn=new O,Vt=new mt,wn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},An=!1;function En(){return oe===null?Se:1}let k=n;function Rn(E,U){return t.getContext(E,U)}let Tt,wt,xe,Bt,Oe,Ve,P,A,V,ae,ne,he,me,$,Q,ue,L,te,J,de,le,fe,Ne;try{let E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Fe,!1),t.addEventListener("webglcontextrestored",je,!1),t.addEventListener("webglcontextcreationerror",ye,!1),k===null){let U="webgl2";if(k=Rn(U,E),k===null)throw Rn(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ke()}catch(E){throw t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),Be("WebGLRenderer: "+E.message),E}function Ke(){Tt=new _b(k),Tt.init(),le=new t_(k,Tt),wt=new cb(k,Tt,e,le),xe=new Qx(k,Tt),wt.reversedDepthBuffer&&d&&xe.buffers.depth.setReversed(!0),B=k.createFramebuffer(),D=k.createFramebuffer(),j=k.createFramebuffer(),Bt=new Mb(k),Oe=new Bx,Ve=new e_(k,Tt,xe,Oe,wt,le,Bt),P=new xb(R),A=new Tm(k),fe=new ab(k,A),V=new yb(k,A,Bt,fe),ae=new Tb(k,V,A,fe,Bt),te=new Sb(k,wt,Ve),Q=new lb(Oe),ne=new kx(R,P,Tt,wt,fe,Q),he=new r_(R,Oe),me=new Gx,$=new jx(Tt),L=new rb(R,P,xe,ae,g,l),ue=new $x(R,ae,wt),Ne=new a_(k,Bt,wt,xe),J=new ob(k,Tt,Bt),de=new vb(k,Tt,Bt),Bt.programs=ne.programs,R.capabilities=wt,R.extensions=Tt,R.properties=Oe,R.renderLists=me,R.shadowMap=ue,R.state=xe,R.info=Bt}b!==xn&&(C=new Ab(b,t.width,t.height,o,i,r));let ce=new Eh(R,k);this.xr=ce,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let E=Tt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Tt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(E){E!==void 0&&(Se=E,this.setSize(Ee,Ue,!1))},this.getSize=function(E){return E.set(Ee,Ue)},this.setSize=function(E,U,X=!0){if(ce.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=E,Ue=U,t.width=Math.floor(E*Se),t.height=Math.floor(U*Se),X===!0&&(t.style.width=E+"px",t.style.height=U+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(Ee*Se,Ue*Se).floor()},this.setDrawingBufferSize=function(E,U,X){Ee=E,Ue=U,Se=X,t.width=Math.floor(E*X),t.height=Math.floor(U*X),this.setViewport(0,0,E,U)},this.setEffects=function(E){if(b===xn){Be("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let U=0;U<E.length;U++)if(E[U].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(se)},this.getViewport=function(E){return E.copy(ke)},this.setViewport=function(E,U,X,z){E.isVector4?ke.set(E.x,E.y,E.z,E.w):ke.set(E,U,X,z),xe.viewport(se.copy(ke).multiplyScalar(En()).round())},this.getScissor=function(E){return E.copy(dt)},this.setScissor=function(E,U,X,z){E.isVector4?dt.set(E.x,E.y,E.z,E.w):dt.set(E,U,X,z),xe.scissor(Pe.copy(dt).multiplyScalar(En()).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(E){xe.setScissorTest(_t=E)},this.setOpaqueSort=function(E){Xe=E},this.setTransparentSort=function(E){Nt=E},this.getClearColor=function(E){return E.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,X=!0){let z=0;if(E){let q=!1;if(oe!==null){let ge=oe.texture.format;q=h.has(ge)}if(q){let ge=oe.texture.type,Ae=p.has(ge),pe=L.getClearColor(),Te=L.getClearAlpha(),Ie=pe.r,qe=pe.g,it=pe.b;Ae?(_[0]=Ie,_[1]=qe,_[2]=it,_[3]=Te,k.clearBufferuiv(k.COLOR,0,_)):(T[0]=Ie,T[1]=qe,T[2]=it,T[3]=Te,k.clearBufferiv(k.COLOR,0,T))}else z|=k.COLOR_BUFFER_BIT}U&&(z|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(z|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&k.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),F=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),L.dispose(),me.dispose(),$.dispose(),Ve.dispose(),Oe.dispose(),P.dispose(),ae.dispose(),V.dispose(),fe.dispose(),Ne.dispose(),ne.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Sf),ce.removeEventListener("sessionend",Tf),es.stop()};function Fe(E){E.preventDefault(),Yr("WebGLRenderer: Context Lost."),I=!0}function je(){Yr("WebGLRenderer: Context Restored."),I=!1;let E=Bt.autoReset,U=ue.enabled,X=ue.autoUpdate,z=ue.needsUpdate,q=ue.type;Ke(),Bt.autoReset=E,ue.enabled=U,ue.autoUpdate=X,ue.needsUpdate=z,ue.type=q}function ye(E){Be("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function pt(E){let U=E.target;U.removeEventListener("dispose",pt),Wt(U)}function Wt(E){Ni(E),Oe.remove(E)}function Ni(E){let U=Oe.get(E).programs;U!==void 0&&(U.forEach(function(X){ne.releaseProgram(X)}),E.isShaderMaterial&&ne.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,X,z,q,ge){U===null&&(U=wn);let Ae=q.isMesh&&q.matrixWorld.determinantAffine()<0,pe=bp(E,U,X,z,q);xe.setMaterial(z,Ae);let Te=X.index,Ie=1;if(z.wireframe===!0){if(Te=V.getWireframeAttribute(X),Te===void 0)return;Ie=2}let qe=X.drawRange,it=X.attributes.position,Re=qe.start*Ie,st=(qe.start+qe.count)*Ie;ge!==null&&(Re=Math.max(Re,ge.start*Ie),st=Math.min(st,(ge.start+ge.count)*Ie)),Te!==null?(Re=Math.max(Re,0),st=Math.min(st,Te.count)):it!=null&&(Re=Math.max(Re,0),st=Math.min(st,it.count));let Ft=st-Re;if(Ft<0||Ft===1/0)return;fe.setup(q,z,pe,X,Te);let Mt,yt=J;if(Te!==null&&(Mt=A.get(Te),yt=de,yt.setIndex(Mt)),q.isMesh)z.wireframe===!0?(xe.setLineWidth(z.wireframeLinewidth*En()),yt.setMode(k.LINES)):yt.setMode(k.TRIANGLES);else if(q.isLine){let Qt=z.linewidth;Qt===void 0&&(Qt=1),xe.setLineWidth(Qt*En()),q.isLineSegments?yt.setMode(k.LINES):q.isLineLoop?yt.setMode(k.LINE_LOOP):yt.setMode(k.LINE_STRIP)}else q.isPoints?yt.setMode(k.POINTS):q.isSprite&&yt.setMode(k.TRIANGLES);if(q.isBatchedMesh)if(Tt.get("WEBGL_multi_draw"))yt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Qt=q._multiDrawStarts,Ce=q._multiDrawCounts,on=q._multiDrawCount,lt=Te?A.get(Te).bytesPerElement:1,ts=Oe.get(z).currentProgram.getUniforms();for(let en=0;en<on;en++)ts.setValue(k,"_gl_DrawID",en),yt.render(Qt[en]/lt,Ce[en])}else if(q.isInstancedMesh)yt.renderInstances(Re,Ft,q.count);else if(X.isInstancedBufferGeometry){let Qt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ce=Math.min(X.instanceCount,Qt);yt.renderInstances(Re,Ft,Ce)}else yt.render(Re,Ft)};function Mf(E,U,X,z){F!==null&&E.isNodeMaterial&&F.setObject(z,E),kt===!0&&Q.setState(E,X,!1),E.transparent===!0&&E.side===Lt&&E.forceSinglePass===!1?(E.side=jt,E.needsUpdate=!0,Ur(E,U,z),E.side=ei,E.needsUpdate=!0,Ur(E,U,z),E.side=Lt):Ur(E,U,z)}this.compile=function(E,U,X=null){X===null&&(X=E),F!==null&&F.renderStart(E,U,X),y=$.get(X),y.init(U),M.push(y),X.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(y.pushLight(q),q.castShadow&&y.pushShadow(q))}),E!==X&&E.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(y.pushLight(q),q.castShadow&&y.pushShadow(q))}),y.setupLights(),F!==null&&F.updateLights(y.state.lightsArray),pn=this.localClippingEnabled,kt=Q.init(this.clippingPlanes,pn),kt===!0&&Q.setGlobalState(this.clippingPlanes,U),F!==null&&ue.render(y.state.shadowsArray,X,U);let z=new Set;return E.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let ge=q.material;if(ge)if(Array.isArray(ge))for(let Ae=0;Ae<ge.length;Ae++){let pe=ge[Ae];Mf(pe,X,U,q),z.add(pe)}else Mf(ge,X,U,q),z.add(ge)}),y=M.pop(),F!==null&&F.renderEnd(),z},this.compileAsync=function(E,U,X=null){let z=this.compile(E,U,X);return new Promise(q=>{function ge(){if(z.forEach(function(Ae){let Te=Oe.get(Ae).currentProgram;(Te===void 0||Te.isReady())&&z.delete(Ae)}),z.size===0){q(E);return}setTimeout(ge,10)}Tt.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let il=null;function mp(E){il&&il(E)}function Sf(){es.stop()}function Tf(){es.start()}let es=new Cd;es.setAnimationLoop(mp),typeof self<"u"&&es.setContext(self),this.setAnimationLoop=function(E){il=E,ce.setAnimationLoop(E),E===null?es.stop():es.start()},ce.addEventListener("sessionstart",Sf),ce.addEventListener("sessionend",Tf),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){Be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;F!==null&&F.renderStart(E,U);let X=ce.enabled===!0&&ce.isPresenting===!0,z=C!==null&&(oe===null||X)&&C.begin(R,oe);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(U),U=ce.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,U,oe),y=$.get(E,M.length),y.init(U),y.state.textureUnits=Ve.getTextureUnits(),M.push(y),At.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?Kt.setFromArrayCamera(U):nt.setFromProjectionMatrix(At,In,U.reversedDepth),pn=this.localClippingEnabled,kt=Q.init(this.clippingPlanes,pn),v=me.get(E,x.length),v.init(),x.push(v),this.info.render.frame++,ce.enabled===!0&&ce.isPresenting===!0){let Ae=R.xr.getDepthSensingMesh();Ae!==null&&sl(Ae,U,-1/0,R.sortObjects)}sl(E,U,0,R.sortObjects),v.finish(),F!==null&&F.updateLights(y.state.lightsArray),R.sortObjects===!0&&v.sort(Xe,Nt),An=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,An&&L.addToRenderList(v,E),this.info.autoReset===!0&&this.info.reset(),kt===!0&&Q.beginShadows();let q=y.state.shadowsArray;if(ue.render(q,E,U),kt===!0&&Q.endShadows(),(z&&C.hasRenderPass())===!1){let Ae=v.opaque,pe=v.transmissive;if(y.setupLights(),U.isArrayCamera){let Te=U.cameras;if(pe.length>0)for(let Ie=0,qe=Te.length;Ie<qe;Ie++){let it=Te[Ie];Af(Ae,pe,E,it)}An&&L.render(E);for(let Ie=0,qe=Te.length;Ie<qe;Ie++){let it=Te[Ie];wf(v,E,it,it.viewport)}}else pe.length>0&&Af(Ae,pe,E,U),An&&L.render(E),wf(v,E,U)}oe!==null&&K===0&&(Ve.updateMultisampleRenderTarget(oe),Ve.updateRenderTargetMipmap(oe)),z&&C.end(R),E.isScene===!0&&E.onAfterRender(R,E,U),fe.resetDefaultState(),Y=-1,ie=null,M.pop(),M.length>0?(y=M[M.length-1],Ve.setTextureUnits(y.state.textureUnits),kt===!0&&Q.setGlobalState(R.clippingPlanes,y.state.camera)):y=null,x.pop(),x.length>0?v=x[x.length-1]:v=null,F!==null&&F.renderEnd()};function sl(E,U,X,z){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)y.pushLight(E),E.castShadow&&y.pushShadow(E);else if(E.isSprite){let Ae=U.isArrayCamera?Kt:nt;if(!E.frustumCulled||E.intersectsFrustum(Ae)){z&&Vt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(At);let pe=ae.update(E),Te=E.material;Te.visible&&v.push(E,pe,Te,X,Vt.z,null,U)}}else if(E.isMesh||E.isLine||E.isPoints){let Ae=U.isArrayCamera?Kt:nt;if(!E.frustumCulled||E.intersectsFrustum(Ae)){let pe=ae.update(E),Te=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Vt.copy(E.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Vt.copy(pe.boundingSphere.center)),Vt.applyMatrix4(E.matrixWorld).applyMatrix4(At)),Array.isArray(Te)){let Ie=pe.groups;for(let qe=0,it=Ie.length;qe<it;qe++){let Re=Ie[qe],st=Te[Re.materialIndex];st&&st.visible&&v.push(E,pe,st,X,Vt.z,Re,U)}}else Te.visible&&v.push(E,pe,Te,X,Vt.z,null,U)}}}let ge=E.children;for(let Ae=0,pe=ge.length;Ae<pe;Ae++)sl(ge[Ae],U,X,z)}function wf(E,U,X,z){let{opaque:q,transmissive:ge,transparent:Ae}=E;y.setupLightsView(X),kt===!0&&Q.setGlobalState(R.clippingPlanes,X),z&&xe.viewport(se.copy(z)),q.length>0&&Va(q,U,X),ge.length>0&&Va(ge,U,X),Ae.length>0&&Va(Ae,U,X),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Af(E,U,X,z){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[z.id]===void 0){let Re=Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[z.id]=new Mn(1,1,{generateMipmaps:!0,type:Re?Xn:xn,minFilter:bn,samples:Math.max(4,wt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}let ge=y.state.transmissionRenderTarget[z.id],Ae=z.viewport||se;ge.setSize(Ae.z*R.transmissionResolutionScale,Ae.w*R.transmissionResolutionScale);let pe=R.getRenderTarget(),Te=R.getActiveCubeFace(),Ie=R.getActiveMipmapLevel();R.setRenderTarget(ge),R.getClearColor(ee),Me=R.getClearAlpha(),Me<1&&R.setClearColor(16777215,.5),R.clear(),An&&L.render(X);let qe=R.toneMapping;R.toneMapping=ti;let it=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),y.setupLightsView(z),kt===!0&&Q.setGlobalState(R.clippingPlanes,z),Va(E,X,z),Ve.updateMultisampleRenderTarget(ge),Ve.updateRenderTargetMipmap(ge),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let st=0,Ft=U.length;st<Ft;st++){let Mt=U[st],{object:yt,geometry:Qt,material:Ce,group:on}=Mt;if(Ce.side===Lt&&yt.layers.test(z.layers)){let lt=Ce.side;Ce.side=jt,Ce.needsUpdate=!0,Ef(yt,X,z,Qt,Ce,on),Ce.side=lt,Ce.needsUpdate=!0,Re=!0}}Re===!0&&(Ve.updateMultisampleRenderTarget(ge),Ve.updateRenderTargetMipmap(ge))}R.setRenderTarget(pe,Te,Ie),R.setClearColor(ee,Me),it!==void 0&&(z.viewport=it),R.toneMapping=qe}function Va(E,U,X){let z=U.isScene===!0?U.overrideMaterial:null;for(let q=0,ge=E.length;q<ge;q++){let Ae=E[q],{object:pe,geometry:Te,group:Ie}=Ae,qe=Ae.material;qe.allowOverride===!0&&z!==null&&(qe=z),pe.layers.test(X.layers)&&Ef(pe,U,X,Te,qe,Ie)}}function Ef(E,U,X,z,q,ge){F!==null&&q.isNodeMaterial&&F.setObject(E,q),E.onBeforeRender(R,U,X,z,q,ge),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(R,U,X,z,E,ge),q.transparent===!0&&q.side===Lt&&q.forceSinglePass===!1?(q.side=jt,q.needsUpdate=!0,R.renderBufferDirect(X,U,z,q,E,ge),q.side=ei,q.needsUpdate=!0,R.renderBufferDirect(X,U,z,q,E,ge),q.side=Lt):R.renderBufferDirect(X,U,z,q,E,ge),E.onAfterRender(R,U,X,z,q,ge)}function Rf(E){let U=0;for(let X of E)X.texture!==null&&U++;return U}function Ur(E,U,X){U.isScene!==!0&&(U=wn);let z=Oe.get(E),q=y.state.lights,ge=y.state.shadowsArray,Ae=q.state.version,pe=ne.getParameters(E,q.state,ge,U,X,y.state.lightProbeGridArray),Te=ne.getProgramCacheKey(pe),Ie=z.programs;z.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?U.environment:null,z.fog=U.fog;let qe=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;z.envMap=P.get(E.envMap||z.environment,qe),z.envMapRotation=z.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Ie===void 0&&(E.addEventListener("dispose",pt),Ie=new Map,z.programs=Ie,z.programVariants=new Map);let it=Ie.get(Te);if(it!==void 0){if(z.currentProgram===it&&z.lightsStateVersion===Ae)return Pf(E,pe),it}else pe.uniforms=ne.getUniforms(E),F!==null&&E.isNodeMaterial&&F.build(E,X,pe),E.onBeforeCompile(pe,R),it=ne.acquireProgram(pe,Te),Ie.set(Te,it),z.uniforms=pe.uniforms;let Re=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Re.clippingPlanes=Q.uniform),Pf(E,pe),z.needsLights=_p(E),z.lightsStateVersion=Ae,z.needsLights&&(Re.ambientLightColor.value=q.state.ambient,Re.lightProbe.value=q.state.probe,Re.sunLights.value=q.state.sun,Re.sunLightShadows.value=q.state.sunShadow,Re.directionalLights.value=q.state.directional,Re.directionalLightShadows.value=q.state.directionalShadow,Re.spotLights.value=q.state.spot,Re.spotLightShadows.value=q.state.spotShadow,Re.rectAreaLights.value=q.state.rectArea,Re.ltc_1.value=q.state.rectAreaLTC1,Re.ltc_2.value=q.state.rectAreaLTC2,Re.pointLights.value=q.state.point,Re.pointLightShadows.value=q.state.pointShadow,Re.hemisphereLights.value=q.state.hemi,Re.sunShadowMatrix.value=q.state.sunShadowMatrix,Re.sunShadowCascade.value=q.state.sunShadowCascade,Re.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Re.spotLightMatrix.value=q.state.spotLightMatrix,Re.spotLightMap.value=q.state.spotLightMap,Re.pointShadowMatrix.value=q.state.pointShadowMatrix),z.numLightProbeGrids=Rf(y.state.lightProbeGridArray),z.currentProgram=it,z.uniformsList=null,it}function gp(E,U,X,z,q){let ge=Oe.get(E),Ae=ge.currentProgram.id+","+z+","+q,pe=ge.programVariants.get(Ae);return pe===void 0?(pe=Ur(E,U,X),ge.programVariants.set(Ae,pe)):(ge.currentProgram=pe,ge.uniformsList=null,ge.outputColorSpace=z,ge.toneMapping=q),pe}function Cf(E){if(E.uniformsList===null){let U=E.currentProgram.getUniforms();E.uniformsList=gr.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Pf(E,U){let X=Oe.get(E);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function bp(E,U,X,z,q){U.isScene!==!0&&(U=wn),Ve.resetTextureUnits();let ge=U.fog,Ae=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?U.environment:null,pe=oe===null?R.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Ze.workingColorSpace,Te=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Ie=P.get(z.envMap||Ae,Te),qe=z.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,it=!!X.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Re=!!X.morphAttributes.position,st=!!X.morphAttributes.normal,Ft=!!X.morphAttributes.color,Mt=ti;z.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Mt=R.toneMapping);let yt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Qt=yt!==void 0?yt.length:0,Ce=Oe.get(z),on=y.state.lights;if(kt===!0&&(pn===!0||E!==ie)){let Et=E===ie&&z.id===Y;Q.setState(z,E,Et)}let lt=!1,ts=!1;z.version===Ce.__version?Ce.needsLights&&Ce.lightsStateVersion!==on.state.version||q.isBatchedMesh&&Ce.batching===!1||!q.isBatchedMesh&&Ce.batching===!0||q.isBatchedMesh&&Ce.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Ce.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Ce.instancing===!1||!q.isInstancedMesh&&Ce.instancing===!0||q.isSkinnedMesh&&Ce.skinning===!1||!q.isSkinnedMesh&&Ce.skinning===!0||q.isInstancedMesh&&Ce.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ce.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ce.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ce.instancingMorph===!1&&q.morphTexture!==null||Ce.envMap!==Ie||z.fog===!0&&Ce.fog!==ge||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==Q.numPlanes||Ce.numIntersection!==Q.numIntersection)||Ce.vertexAlphas!==qe||Ce.vertexTangents!==it||Ce.morphTargets!==Re||Ce.morphNormals!==st||Ce.morphColors!==Ft||Ce.morphTargetsCount!==Qt||Ce.numLightProbeGrids!==Rf(y.state.lightProbeGridArray)?lt=!0:(Ce.outputColorSpace!==pe||Ce.toneMapping!==Mt)&&(ts=!0):(lt=!0,Ce.__version=z.version);let en=Ce.currentProgram;(lt===!0||ts===!0)&&(en=ts===!0?gp(z,U,q,pe,Mt):Ur(z,U,q),F&&z.isNodeMaterial&&F.onUpdateProgram(z,en,Ce));let Wa=!1,Fi=!1,ns=!1,ot=en.getUniforms(),Jt=Ce.uniforms;if(xe.useProgram(en.program)&&(Wa=!0,Fi=!0,ns=!0),z.id!==Y&&(Y=z.id,Fi=!0),Wa||ie!==E){xe.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ot.setValue(k,"projectionMatrix",E.projectionMatrix),ot.setValue(k,"viewMatrix",E.matrixWorldInverse);let qt=ot.map.cameraPosition;qt!==void 0&&qt.setValue(k,Kn.setFromMatrixPosition(E.matrixWorld)),wt.logarithmicDepthBuffer&&ot.setValue(k,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ot.setValue(k,"isOrthographic",E.isOrthographicCamera===!0),ie!==E&&(ie=E,Fi=!0,ns=!0)}if(Ce.needsLights&&(on.state.sunShadowMap.length>0&&ot.setValue(k,"sunShadowMap",on.state.sunShadowMap,Ve),on.state.directionalShadowMap.length>0&&ot.setValue(k,"directionalShadowMap",on.state.directionalShadowMap,Ve),on.state.spotShadowMap.length>0&&ot.setValue(k,"spotShadowMap",on.state.spotShadowMap,Ve),on.state.pointShadowMap.length>0&&ot.setValue(k,"pointShadowMap",on.state.pointShadowMap,Ve)),q.isSkinnedMesh){ot.setOptional(k,q,"bindMatrix"),ot.setOptional(k,q,"bindMatrixInverse");let Et=q.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),ot.setValue(k,"boneTexture",Et.boneTexture,Ve))}q.isBatchedMesh&&(ot.setOptional(k,q,"batchingTexture"),ot.setValue(k,"batchingTexture",q._matricesTexture,Ve),ot.setOptional(k,q,"batchingIdTexture"),ot.setValue(k,"batchingIdTexture",q._indirectTexture,Ve),ot.setOptional(k,q,"batchingColorTexture"),q._colorsTexture!==null&&ot.setValue(k,"batchingColorTexture",q._colorsTexture,Ve));let Un=X.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&te.update(q,X,en),(Fi||Ce.receiveShadow!==q.receiveShadow)&&(Ce.receiveShadow=q.receiveShadow,ot.setValue(k,"receiveShadow",q.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&U.environment!==null&&(Jt.envMapIntensity.value=U.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=c_()),Fi){if(ot.setValue(k,"toneMappingExposure",R.toneMappingExposure),Ce.needsLights&&xp(Jt,ns),ge&&z.fog===!0&&he.refreshFogUniforms(Jt,ge),he.refreshMaterialUniforms(Jt,z,Se,Ue,y.state.transmissionRenderTarget[E.id]),Ce.needsLights&&Ce.numLightProbeGrids>0){let Et=w,qt=0;for(let li of y.state.lightProbeGridArray)li.texture!==null&&(Et.textures[qt]=li.texture,Et.min[qt]=li.boundingBox.min,Et.max[qt]=li.boundingBox.max,Et.resolution[qt]=li.resolution,qt++);for(let li in Et)Et[li].length=qt;Jt.probesSH.value=Et.textures,Jt.probesMin.value=Et.min,Jt.probesMax.value=Et.max,Jt.probesResolution.value=Et.resolution}gr.upload(k,Cf(Ce),Jt,Ve)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(gr.upload(k,Cf(Ce),Jt,Ve),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ot.setValue(k,"center",q.center),ot.setValue(k,"modelViewMatrix",q.modelViewMatrix),ot.setValue(k,"normalMatrix",q.normalMatrix),ot.setValue(k,"modelMatrix",q.matrixWorld),z.uniformsGroups!==void 0){let Et=z.uniformsGroups;for(let qt=0,li=Et.length;qt<li;qt++){let Lf=Et[qt];Ne.update(Lf,en),Ne.bind(Lf,en)}}return en}function xp(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.sunLights.needsUpdate=U,E.sunLightShadows.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function _p(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(E,U,X){let z=Oe.get(E);z.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Oe.get(E.texture).__webglTexture=U,Oe.get(E.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:X,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){let X=Oe.get(E);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,X=0){oe=E,Z=U,K=X;let z=null,q=!1,ge=!1;if(E){let pe=Oe.get(E);if(pe.__useDefaultFramebuffer!==void 0){xe.bindFramebuffer(k.FRAMEBUFFER,pe.__webglFramebuffer),se.copy(E.viewport),Pe.copy(E.scissor),We=E.scissorTest,xe.viewport(se),xe.scissor(Pe),xe.setScissorTest(We),Y=-1;return}else if(pe.__webglFramebuffer===void 0)Ve.setupRenderTarget(E);else if(pe.__hasExternalTextures)Ve.rebindTextures(E,Oe.get(E.texture).__webglTexture,Oe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let qe=E.depthTexture;if(pe.__boundDepthTexture!==qe){if(qe!==null&&Oe.has(qe)&&(E.width!==qe.image.width||E.height!==qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ve.setupDepthRenderbuffer(E)}}let Te=E.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ge=!0);let Ie=Oe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ie[U])?z=Ie[U][X]:z=Ie[U],q=!0):E.samples>0&&Ve.useMultisampledRTT(E)===!1?z=Oe.get(E).__webglMultisampledFramebuffer:Array.isArray(Ie)?z=Ie[X]:z=Ie,se.copy(E.viewport),Pe.copy(E.scissor),We=E.scissorTest}else se.copy(ke).multiplyScalar(Se).floor(),Pe.copy(dt).multiplyScalar(Se).floor(),We=_t;if(X!==0&&(z=B),xe.bindFramebuffer(k.FRAMEBUFFER,z)&&xe.drawBuffers(E,z),xe.viewport(se),xe.scissor(Pe),xe.setScissorTest(We),q){let pe=Oe.get(E.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+U,pe.__webglTexture,X)}else if(ge){let pe=U;for(let Te=0;Te<E.textures.length;Te++){let Ie=Oe.get(E.textures[Te]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Te,Ie.__webglTexture,X,pe)}}else if(E!==null&&X!==0){let pe=Oe.get(E.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,pe.__webglTexture,X)}Y=-1};function If(E){let U=Oe.get(E);return(U.__readFormat!==E.format||U.__readType!==E.type)&&(U.__readFormat=E.format,U.__readType=E.type,U.__formatReadable=wt.textureFormatReadable(E.format),U.__typeReadable=wt.textureTypeReadable(E.type)),U}this.readRenderTargetPixels=function(E,U,X,z,q,ge,Ae,pe=0){if(!(E&&E.isWebGLRenderTarget)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Oe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(Te=Te[Ae],Array.isArray(Te)&&(Te=Te[0])),Te){xe.bindFramebuffer(k.FRAMEBUFFER,Te);try{let Ie=E.textures[pe],qe=Ie.format,it=Ie.type;E.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+pe);let Re=If(Ie);if(Re.__formatReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Re.__typeReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-z&&X>=0&&X<=E.height-q&&k.readPixels(U,X,z,q,le.convert(qe),le.convert(it),ge)}finally{let Ie=oe!==null?Oe.get(oe).__webglFramebuffer:null;xe.bindFramebuffer(k.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(E,U,X,z,q,ge,Ae,pe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Oe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(Te=Te[Ae],Array.isArray(Te)&&(Te=Te[0])),Te)if(U>=0&&U<=E.width-z&&X>=0&&X<=E.height-q){xe.bindFramebuffer(k.FRAMEBUFFER,Te);let Ie=E.textures[pe],qe=Ie.format,it=Ie.type;E.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+pe);let Re=If(Ie);if(Re.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Re.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let st=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,st),k.bufferData(k.PIXEL_PACK_BUFFER,ge.byteLength,k.STREAM_READ),k.readPixels(U,X,z,q,le.convert(qe),le.convert(it),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let Ft=oe!==null?Oe.get(oe).__webglFramebuffer:null;xe.bindFramebuffer(k.FRAMEBUFFER,Ft);let Mt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await nd(k,Mt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,st),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,ge),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(st),k.deleteSync(Mt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,X=0){let z=Math.pow(2,-X),q=Math.floor(E.image.width*z),ge=Math.floor(E.image.height*z),Ae=U!==null?U.x:0,pe=U!==null?U.y:0;Ve.setTexture2D(E,0),k.copyTexSubImage2D(k.TEXTURE_2D,X,0,0,Ae,pe,q,ge),xe.unbindTexture()},this.copyTextureToTexture=function(E,U,X=null,z=null,q=0,ge=0){let Ae,pe,Te,Ie,qe,it,Re,st,Ft,Mt=E.isCompressedTexture?E.mipmaps[ge]:E.image;if(X!==null)Ae=X.max.x-X.min.x,pe=X.max.y-X.min.y,Te=X.isBox3?X.max.z-X.min.z:1,Ie=X.min.x,qe=X.min.y,it=X.isBox3?X.min.z:0;else{let ot=Math.pow(2,-q);Ae=Math.floor(Mt.width*ot),pe=Math.floor(Mt.height*ot),E.isDataArrayTexture?Te=Mt.depth:E.isData3DTexture?Te=Math.floor(Mt.depth*ot):Te=1,Ie=0,qe=0,it=0}z!==null?(Re=z.x,st=z.y,Ft=z.z):(Re=0,st=0,Ft=0);let yt=le.convert(U.format),Qt=le.convert(U.type),Ce;U.isData3DTexture?(Ve.setTexture3D(U,0),Ce=k.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ve.setTexture2DArray(U,0),Ce=k.TEXTURE_2D_ARRAY):(Ve.setTexture2D(U,0),Ce=k.TEXTURE_2D),xe.activeTexture(k.TEXTURE0),xe.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,U.flipY),xe.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),xe.pixelStorei(k.UNPACK_ALIGNMENT,U.unpackAlignment);let on=xe.getParameter(k.UNPACK_ROW_LENGTH),lt=xe.getParameter(k.UNPACK_IMAGE_HEIGHT),ts=xe.getParameter(k.UNPACK_SKIP_PIXELS),en=xe.getParameter(k.UNPACK_SKIP_ROWS),Wa=xe.getParameter(k.UNPACK_SKIP_IMAGES);xe.pixelStorei(k.UNPACK_ROW_LENGTH,Mt.width),xe.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Mt.height),xe.pixelStorei(k.UNPACK_SKIP_PIXELS,Ie),xe.pixelStorei(k.UNPACK_SKIP_ROWS,qe),xe.pixelStorei(k.UNPACK_SKIP_IMAGES,it);let Fi=E.isDataArrayTexture||E.isData3DTexture,ns=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){let ot=Oe.get(E),Jt=Oe.get(U),Un=Oe.get(ot.__renderTarget),Et=Oe.get(Jt.__renderTarget);xe.bindFramebuffer(k.READ_FRAMEBUFFER,Un.__webglFramebuffer),xe.bindFramebuffer(k.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let qt=0;qt<Te;qt++)Fi&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Oe.get(E).__webglTexture,q,it+qt),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Oe.get(U).__webglTexture,ge,Ft+qt)),k.blitFramebuffer(Ie,qe,Ie+Ae,qe+pe,Re,st,Re+Ae,st+pe,k.DEPTH_BUFFER_BIT,k.NEAREST);xe.bindFramebuffer(k.READ_FRAMEBUFFER,null),xe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(q!==0||E.isRenderTargetTexture||Oe.has(E)){let ot=Oe.get(E),Jt=Oe.get(U);xe.bindFramebuffer(k.READ_FRAMEBUFFER,D),xe.bindFramebuffer(k.DRAW_FRAMEBUFFER,j);for(let Un=0;Un<Te;Un++)Fi?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ot.__webglTexture,q,it+Un):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ot.__webglTexture,q),ns?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Jt.__webglTexture,ge,Ft+Un):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Jt.__webglTexture,ge),q!==0?k.blitFramebuffer(Ie,qe,Ie+Ae,qe+pe,Re,st,Re+Ae,st+pe,k.COLOR_BUFFER_BIT,k.NEAREST):ns?k.copyTexSubImage3D(Ce,ge,Re,st,Ft+Un,Ie,qe,Ae,pe):k.copyTexSubImage2D(Ce,ge,Re,st,Ie,qe,Ae,pe);xe.bindFramebuffer(k.READ_FRAMEBUFFER,null),xe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else ns?E.isDataTexture||E.isData3DTexture?k.texSubImage3D(Ce,ge,Re,st,Ft,Ae,pe,Te,yt,Qt,Mt.data):U.isCompressedArrayTexture?k.compressedTexSubImage3D(Ce,ge,Re,st,Ft,Ae,pe,Te,yt,Mt.data):k.texSubImage3D(Ce,ge,Re,st,Ft,Ae,pe,Te,yt,Qt,Mt):E.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,ge,Re,st,Ae,pe,yt,Qt,Mt.data):E.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,ge,Re,st,Mt.width,Mt.height,yt,Mt.data):k.texSubImage2D(k.TEXTURE_2D,ge,Re,st,Ae,pe,yt,Qt,Mt);xe.pixelStorei(k.UNPACK_ROW_LENGTH,on),xe.pixelStorei(k.UNPACK_IMAGE_HEIGHT,lt),xe.pixelStorei(k.UNPACK_SKIP_PIXELS,ts),xe.pixelStorei(k.UNPACK_SKIP_ROWS,en),xe.pixelStorei(k.UNPACK_SKIP_IMAGES,Wa),ge===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&k.generateMipmap(Ce),xe.unbindTexture()},this.initRenderTarget=function(E){Oe.get(E).__webglFramebuffer===void 0&&Ve.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Ve.setTextureCube(E,0):E.isData3DTexture?Ve.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ve.setTexture2DArray(E,0):Ve.setTexture2D(E,0),xe.unbindTexture()},this.resetState=function(){Z=0,K=0,oe=null,xe.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}};function Rh(s,e){if(e===sh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===mr||e===Ra){let t=s.getIndex();if(t===null){let r=[],a=s.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===mr)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function Bc(s){let e=new Map,t=new Map,n=s.clone();return zd(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function zd(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)zd(s.children[n],e.children[n],t)}var _r=class extends Qn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Fh(t)}),this.register(function(t){return new Uh(t)}),this.register(function(t){return new Oh(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new Bh(t)}),this.register(function(t){return new zh(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new Hh(t)}),this.register(function(t){return new Nh(t)}),this.register(function(t){return new Vh(t)}),this.register(function(t){return new kh(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new Lh(t)}),this.register(function(t){return new zc(t,Qe.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new zc(t,Qe.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Jh(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Ei.extractUrlBase(e);a=Ei.resolveURL(c,this.path)}else a=Ei.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new or(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(f){t(f),r.manager.itemEnd(e)},o)}catch(f){o(f)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===qd){try{a[Qe.KHR_BINARY_GLTF]=new Yh(e)}catch(m){i&&i(m);return}r=JSON.parse(a[Qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new sf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let f=0;f<this.pluginCallbacks.length;f++){let m=this.pluginCallbacks[f](c);m.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[m.name]=m,a[m.name]=!0}if(r.extensionsUsed)for(let f=0;f<r.extensionsUsed.length;++f){let m=r.extensionsUsed[f],d=r.extensionsRequired||[];switch(m){case Qe.KHR_MATERIALS_UNLIT:a[m]=new Dh;break;case Qe.KHR_DRACO_MESH_COMPRESSION:a[m]=new Zh(r,this.dracoLoader);break;case Qe.KHR_TEXTURE_TRANSFORM:a[m]=new $h;break;case Qe.KHR_MESH_QUANTIZATION:a[m]=new Qh;break;default:d.indexOf(m)>=0&&o[m]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+m+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function h_(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Ct(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var Qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Lh=class{constructor(e){this.parser=e,this.name=Qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,f=new _e(16777215);l.color!==void 0&&f.setRGB(l.color[0],l.color[1],l.color[2],ln);let m=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new vs(f),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new xa(f),c.distance=m;break;case"spot":c=new ba(f),c.distance=m,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ri(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Dh=class{constructor(){this.name=Qe.KHR_MATERIALS_UNLIT}getMaterialType(){return tt}extendParams(e,t,n){let i=[];e.color=new _e(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],ln),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,St))}return Promise.all(i)}},Nh=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Fh=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ze(r,r)}return Promise.all(i)}},Uh=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}},Oh=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},kh=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},Bh=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SHEEN}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new _e(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],ln)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,St)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},zh=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},Gh=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_VOLUME}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new _e().setRGB(r[0],r[1],r[2],ln),Promise.all(i)}},Hh=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IOR}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Vh=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new _e().setRGB(r[0],r[1],r[2],ln),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,St)),Promise.all(i)}},Wh=class{constructor(e){this.parser=e,this.name=Qe.EXT_MATERIALS_BUMP}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},qh=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},Xh=class{constructor(e){this.parser=e,this.name=Qe.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},jh=class{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Kh=class{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},zc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=i.byteOffset||0,c=i.byteLength||0,f=i.count,m=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(f,m,d,i.mode,i.filter).then(function(u){return u.buffer}):a.ready.then(function(){let u=new ArrayBuffer(f*m);return a.decodeGltfBuffer(new Uint8Array(u),f,m,d,i.mode,i.filter),u})})}else return null}},Jh=class{constructor(e){this.name=Qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Fn.TRIANGLES&&c.mode!==Fn.TRIANGLE_STRIP&&c.mode!==Fn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(f=>(l[c]=f,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let f=c.pop(),m=f.isGroup?f.children:[f],d=c[0].count,u=[];for(let g of m){let b=new Ge,h=new O,p=new ft,_=new O(1,1,1),T=new Wi(g.geometry,g.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&h.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&_.fromBufferAttribute(l.SCALE,v),T.setMatrixAt(v,b.compose(h,p,_));let w=null;for(let v in l)if(v==="_COLOR_0"){let y=l[v];T.instanceColor=new xi(y.array,y.itemSize,y.normalized)}else if(v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"){if(w===null){let x=T.geometry;w=new Ot,w.name=x.name;for(let M in x.attributes)w.setAttribute(M,x.attributes[M]);for(let M in x.morphAttributes)w.morphAttributes[M]=x.morphAttributes[M];x.index!==null&&w.setIndex(x.index),w.morphTargetsRelative=x.morphTargetsRelative;for(let M of x.groups)w.addGroup(M.start,M.count,M.materialIndex);x.boundingBox!==null&&(w.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(w.boundingSphere=x.boundingSphere.clone()),w.drawRange.start=x.drawRange.start,w.drawRange.count=x.drawRange.count,w.userData=Object.assign({},x.userData),T.geometry=w}let y=l[v];w.setAttribute(v,new xi(y.array,y.itemSize,y.normalized))}vt.prototype.copy.call(T,g),this.parser.assignFinalMaterial(T),u.push(T)}return f.isGroup?(f.clear(),f.add(...u),f):u[0]}))}},qd="glTF",Na=12,Gd={JSON:1313821514,BIN:5130562},Yh=class{constructor(e){this.name=Qe.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Na),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==qd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Na,r=new DataView(e,Na),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Gd.JSON){let c=new Uint8Array(e,Na+a,o);this.content=n.decode(c)}else if(l===Gd.BIN){let c=Na+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Zh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let f in a){let m=tf[f]||f.toLowerCase();o[m]=a[f]}for(let f in e.attributes){let m=tf[f]||f.toLowerCase();if(a[f]!==void 0){let d=n.accessors[e.attributes[f]],u=xr[d.componentType];c[m]=u.name,l[m]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(f){return new Promise(function(m,d){i.decodeDracoFile(f,function(u){for(let g in u.attributes){let b=u.attributes[g],h=l[g];h!==void 0&&(b.normalized=h)}m(u)},o,c,ln,d)})})}},$h=class{constructor(){this.name=Qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Qh=class{constructor(){this.name=Qe.KHR_MESH_QUANTIZATION}},Gc=class extends $n{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,f=i-t,m=(n-t)/f,d=m*m,u=d*m,g=e*c,b=g-c,h=-2*u+3*d,p=u-d,_=1-h,T=p-d+m;for(let w=0;w!==o;w++){let v=a[b+w+o],y=a[b+w+l]*f,x=a[g+w+o],M=a[g+w]*f;r[w]=_*v+T*y+h*x+p*M}return r}},f_=new ft,ef=class extends Gc{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return f_.fromArray(r).normalize().toArray(r),r}},Fn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},xr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Hd={9728:Rt,9729:It,9984:Xo,9985:ur,9986:ws,9987:bn},Vd={33071:Pn,33648:Ys,10497:Gn},Ch={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},tf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Yi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},u_={CUBICSPLINE:void 0,LINEAR:fs,STEP:hs},Ph={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function d_(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new xs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ei})),s.DefaultMaterial}function Rs(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ri(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function p_(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,f=e.length;c<f;c++){let m=e[c];if(m.POSITION!==void 0&&(n=!0),m.NORMAL!==void 0&&(i=!0),m.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],l=[];for(let c=0,f=e.length;c<f;c++){let m=e[c];if(n){let d=m.POSITION!==void 0?t.getDependency("accessor",m.POSITION):s.attributes.position;a.push(d)}if(i){let d=m.NORMAL!==void 0?t.getDependency("accessor",m.NORMAL):s.attributes.normal;o.push(d)}if(r){let d=m.COLOR_0!==void 0?t.getDependency("accessor",m.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let f=c[0],m=c[1],d=c[2];return n&&(s.morphAttributes.position=f),i&&(s.morphAttributes.normal=m),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function m_(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function g_(s){let e,t=s.extensions&&s.extensions[Qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ih(t.attributes):e=s.indices+":"+Ih(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Ih(s.targets[n]);return e}function Ih(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function nf(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function b_(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var x_=new Ge,sf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new h_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?(this.textureLoader=new _s(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new _a(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new or(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Rs(r,o,i),ri(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,f]of a.children.entries())r(f,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Qe.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(Ei.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Ch[i.type],o=xr[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Zt(c,a,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Ch[i.type],c=xr[i.componentType],f=c.BYTES_PER_ELEMENT,m=f*l,d=i.byteOffset||0,u=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,b,h;if(u&&u!==m){let p=Math.floor(d/u),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,T=t.cache.get(_);T||(b=new c(o,p*u,i.count*u/f),T=new nr(b,u/f),t.cache.add(_,T)),h=new ir(T,l,d%u/f,g)}else o===null?b=new c(i.count*l):b=new c(o,d,i.count*l),h=new Zt(b,l,g);if(i.sparse!==void 0){let p=Ch.SCALAR,_=xr[i.sparse.indices.componentType],T=i.sparse.indices.byteOffset||0,w=i.sparse.values.byteOffset||0,v=new _(a[1],T,i.sparse.count*p),y=new c(a[2],w,i.sparse.count*l);o!==null&&(h=new Zt(h.array.slice(),h.itemSize,h.normalized)),h.normalized=!1;for(let x=0,M=v.length;x<M;x++){let C=v[x];if(h.setX(C,y[x*l]),l>=2&&h.setY(C,y[x*l+1]),l>=3&&h.setZ(C,y[x*l+2]),l>=4&&h.setW(C,y[x*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}h.normalized=g}return h})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(f){f.flipY=!1,f.name=a.name||o.name||"",f.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(f.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return f.magFilter=Hd[d.magFilter]||It,f.minFilter=Hd[d.minFilter]||bn,f.wrapS=Vd[d.wrapS]||Gn,f.wrapT=Vd[d.wrapT]||Gn,f.generateMipmaps=!f.isCompressedTexture&&f.minFilter!==Rt&&f.minFilter!==It,i.associations.set(f,{textures:e}),f}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=i.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1,f;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)f=n.getDependency("bufferView",a.bufferView).then(function(d){return new Promise(function(u,g){t.parse(d,u,g)})});else{if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(d){c=!0;let u=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(u),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");f=Promise.resolve(l).then(function(d){return new Promise(function(u,g){let b=u;t.isImageBitmapLoader===!0&&(b=function(h){let p=new zt(h);p.needsUpdate=!0,u(p)}),t.load(Ei.resolveURL(d,r.path),b,void 0,g)})})}let m=f.then(function(d){return c===!0&&o.revokeObjectURL(l),ri(d,a),d.userData.mimeType=a.mimeType||b_(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=m,m}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Qe.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Qe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[Qe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new ar,fn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new rr,fn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return xs}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[Qe.KHR_MATERIALS_UNLIT]){let m=i[Qe.KHR_MATERIALS_UNLIT];a=m.getMaterialType(),c.push(m.extendParams(o,r,t))}else{let m=r.pbrMetallicRoughness||{};if(o.color=new _e(1,1,1),o.opacity=1,Array.isArray(m.baseColorFactor)){let d=m.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],ln),o.opacity=d[3]}m.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",m.baseColorTexture,St)),o.metalness=m.metallicFactor!==void 0?m.metallicFactor:1,o.roughness=m.roughnessFactor!==void 0?m.roughnessFactor:1,m.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",m.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",m.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Lt);let f=r.alphaMode||Ph.OPAQUE;if(f===Ph.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,f===Ph.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==tt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ze(1,1),r.normalTexture.scale!==void 0)){let m=r.normalTexture.scale;o.normalScale.set(m,m)}if(r.occlusionTexture!==void 0&&a!==tt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==tt){let m=r.emissiveFactor;o.emissive=new _e().setRGB(m[0],m[1],m[2],ln)}return r.emissiveTexture!==void 0&&a!==tt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,St)),Promise.all(c).then(function(){let m=new a(o);return r.name&&(m.name=r.name),ri(m,r),t.associations.set(m,{materials:e}),r.extensions&&Rs(i,m,r),m})}createUniqueName(e){let t=gt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Wd(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],f=g_(c),m=i[f];if(m)a.push(m.promise);else{let d;c.extensions&&c.extensions[Qe.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Wd(new Ot,c,t),c.mode===Fn.TRIANGLE_STRIP?d=d.then(u=>Rh(u,Ra)):c.mode===Fn.TRIANGLE_FAN&&(d=d.then(u=>Rh(u,mr))),i[f]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let f=a[l].material===void 0?d_(this.cache):this.getDependency("material",a[l].material);o.push(f)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),f=l[l.length-1],m=[];for(let u=0,g=f.length;u<g;u++){let b=f[u],h=a[u],p,_=c[u];if(h.mode===Fn.TRIANGLES||h.mode===Fn.TRIANGLE_STRIP||h.mode===Fn.TRIANGLE_FAN||h.mode===void 0){let T=r.isSkinnedMesh===!0,w=b.hasAttribute("skinIndex")&&b.hasAttribute("skinWeight");T&&w===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=T&&w?new ps(b,_):new $e(b,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(h.mode===Fn.LINES)p=new ia(b,_);else if(h.mode===Fn.LINE_STRIP)p=new ms(b,_);else if(h.mode===Fn.LINE_LOOP)p=new sa(b,_);else if(h.mode===Fn.POINTS)p=new ra(b,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+h.mode);Object.keys(p.geometry.morphAttributes).length>0&&m_(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ri(p,r),h.extensions&&Rs(i,p,h),t.assignFinalMaterial(p),m.push(p)}for(let u=0,g=m.length;u<g;u++)t.associations.set(m[u],{meshes:e,primitives:u});if(m.length===1)return r.extensions&&Rs(i,m[0],r),m[0];let d=new Pt;r.extensions&&Rs(i,d,r),t.associations.set(d,{meshes:e});for(let u=0,g=m.length;u<g;u++)d.add(m[u]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Yt(Lc.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ai(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ri(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],l=[];for(let c=0,f=a.length;c<f;c++){let m=a[c];if(m){o.push(m);let d=new Ge;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new na(o,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],f=[];for(let m=0,d=i.channels.length;m<d;m++){let u=i.channels[m],g=i.samplers[u.sampler],b=u.target,h=b.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,_=i.parameters!==void 0?i.parameters[g.output]:g.output;b.node!==void 0&&(a.push(this.getDependency("node",h)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",_)),c.push(g),f.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(f)]).then(function(m){let d=m[0],u=m[1],g=m[2],b=m[3],h=m[4],p=[];for(let T=0,w=d.length;T<w;T++){let v=d[T],y=u[T],x=g[T],M=b[T],C=h[T];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let R=n._createAnimationTracks(v,y,x,M,C);if(R)for(let I=0;I<R.length;I++)p.push(R[I])}let _=new wi(r,void 0,p);return ri(_,i),_})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,f=o.length;c<f;c++)a.push(n.getDependency("node",o[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let f=c[0],m=c[1],d=c[2];d!==null&&f.traverse(function(u){u.isSkinnedMesh&&u.bind(d,x_)});for(let u=0,g=m.length;u<g;u++)f.add(m[u]);if(f.userData.pivot!==void 0&&m.length>0){let u=f.userData.pivot,g=m[0];f.pivot=new O().fromArray(u),f.position.x-=u[0],f.position.y-=u[1],f.position.z-=u[2],g.position.set(0,0,0),delete f.userData.pivot}return f})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let f;if(r.isBone===!0?f=new sr:c.length>1?f=new Pt:c.length===1?f=c[0]:f=new vt,f!==c[0])for(let m=0,d=c.length;m<d;m++)f.add(c[m]);if(r.name&&(f.userData.name=r.name,f.name=a),ri(f,r),r.extensions&&Rs(n,f,r),r.matrix!==void 0){let m=new Ge;m.fromArray(r.matrix),f.applyMatrix4(m)}else r.translation!==void 0&&f.position.fromArray(r.translation),r.rotation!==void 0&&f.quaternion.fromArray(r.rotation),r.scale!==void 0&&f.scale.fromArray(r.scale);if(!i.associations.has(f))i.associations.set(f,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let m=i.associations.get(f);i.associations.set(f,{...m})}return i.associations.get(f).nodes=e,f}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Pt;n.name&&(r.name=i.createUniqueName(n.name)),ri(r,n),n.extensions&&Rs(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let f=0,m=l.length;f<m;f++){let d=l[f];d.parent!==null?r.add(Bc(d)):r.add(d)}let c=f=>{let m=new Map;for(let[d,u]of i.associations)(d instanceof fn||d instanceof zt)&&m.set(d,u);return f.traverse(d=>{let u=i.associations.get(d);u!=null&&m.set(d,u)}),m};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}Yi[r.path]===Yi.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let f;switch(Yi[r.path]){case Yi.weights:f=Si;break;case Yi.rotation:f=Wn;break;case Yi.translation:case Yi.scale:f=Ki;break;default:n.itemSize===1?f=Si:f=Ki;break}let m=i.interpolation!==void 0?u_[i.interpolation]:fs,d=this._getArrayFromAccessor(n);for(let u=0,g=l.length;u<g;u++){let b=new f(l[u]+"."+Yi[r.path],t.array,d,m);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),a.push(b)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=nf(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Wn?ef:Gc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function __(s,e,t){let n=e.attributes,i=new hn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new O(l[0],l[1],l[2]),new O(c[0],c[1],c[2])),o.normalized){let f=nf(xr[o.componentType]);i.min.multiplyScalar(f),i.max.multiplyScalar(f)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new O,l=new O;for(let c=0,f=r.length;c<f;c++){let m=r[c];if(m.POSITION!==void 0){let d=t.json.accessors[m.POSITION],u=d.min,g=d.max;if(u!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(u[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(u[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(u[2]),Math.abs(g[2]))),d.normalized){let b=nf(xr[d.componentType]);l.multiplyScalar(b)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new mn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Wd(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(let a in n){let o=tf[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Ze.workingColorSpace!==ln&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),ri(s,e),__(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?p_(s,e.targets,t):s})}var Hc=(function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(s),r,a=WebAssembly.instantiate(i,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var _=new Uint8Array(p.length),T=0;T<p.length;++T){var w=p.charCodeAt(T);_[T]=w>96?w-97:w>64?w-39:w+4}for(var v=0,T=0;T<p.length;++T)_[v++]=_[T]<60?n[_[T]]:(_[T]-60)*64+_[++T];return _.buffer.slice(0,v)}function l(p,_,T,w,v,y,x){var M=p.exports.sbrk,C=w+3&-4,R=M(C*v),I=M(y.length),F=new Uint8Array(p.exports.memory.buffer);F.set(y,I);var B=_(R,w,v,I,y.length);if(B==0&&x&&x(R,C,v),T.set(F.subarray(R,R+w*v)),M(R-M(0)),B!=0)throw new Error("Malformed buffer data: "+B)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},f={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},m=[],d=0;function u(p){var _={object:new Worker(p),pending:0,requests:{}};return _.object.onmessage=function(T){var w=T.data;_.pending-=w.count,_.requests[w.id][w.action](w.value),delete _.requests[w.id]},_}function g(p){for(var _="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+h.name+";"+l.toString()+h.toString(),T=new Blob([_],{type:"text/javascript"}),w=URL.createObjectURL(T),v=m.length;v<p;++v)m[v]=u(w);for(var v=p;v<m.length;++v)m[v].object.postMessage({});m.length=p,URL.revokeObjectURL(w)}function b(p,_,T,w,v){for(var y=m[0],x=1;x<m.length;++x)m[x].pending<y.pending&&(y=m[x]);return new Promise(function(M,C){var R=new Uint8Array(T),I=++d;y.pending+=p,y.requests[I]={resolve:M,reject:C},y.object.postMessage({id:I,count:p,size:_,source:R,mode:w,filter:v},[R.buffer])})}function h(p){var _=p.data;self.ready.then(function(T){if(!_.id)return self.close();try{var w=new Uint8Array(_.count*_.size);l(T,T.exports[_.mode],w,_.count,_.size,_.source,T.exports[_.filter]),self.postMessage({id:_.id,count:_.count,action:"resolve",value:w},[w.buffer])}catch(v){self.postMessage({id:_.id,count:_.count,action:"reject",value:v})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,_,T,w,v){l(r,r.exports.meshopt_decodeVertexBuffer,p,_,T,w,r.exports[c[v]])},decodeIndexBuffer:function(p,_,T,w){l(r,r.exports.meshopt_decodeIndexBuffer,p,_,T,w)},decodeIndexSequence:function(p,_,T,w){l(r,r.exports.meshopt_decodeIndexSequence,p,_,T,w)},decodeGltfBuffer:function(p,_,T,w,v,y){l(r,r.exports[f[v]],p,_,T,w,r.exports[c[y]])},decodeGltfBufferAsync:function(p,_,T,w,v){return m.length>0?b(p,_,T,f[w],c[v]):a.then(function(){var y=new Uint8Array(p*_);return l(r,r.exports[f[w]],y,p,_,T,r.exports[c[v]]),y})}}})();var bt={ok:!1},af=Math.PI/4,Ua=42*Math.PI/180,Vc=840,Qi=new O(Math.sin(af)*Math.cos(Ua),Math.sin(Ua),Math.cos(af)*Math.cos(Ua)),Ls,xt,Tn,Di,yr,y_=null,Er=null,df=0,Ii,Cs,re=0,$i=0,jc=1,Kc=0,of,jn=new O,rf=new O,Ps=new Set,Pr=[],oi=[],Yc=new Map,cf=[],be=new ua(1,22,14),at=new Xi(1,1,1),Ye=new yi(1,1,20),ut=new Dn(1,1,1,24),Dt=new fa(1),Ir=new ji(1,40),Rr=new bs(.82,1,96),Zc=new ha(1,0),Oa={};function we(s,e,t){let n=s+"|"+(e||0)+"|"+(t||1);if(Oa[n])return Oa[n];let i=new vi({color:s,gradientMap:Di});return e&&(i.emissive=new _e(e),i.emissiveIntensity=1),t&&(i.transparent=!0,i.opacity=t),Oa[n]=i}var De=(s,e=1)=>{let t="g"+s+e;return Oa[t]||(Oa[t]=new tt({color:s,transparent:e<1,opacity:e}))};function N(s,e,t,n,i,r){let a=new $e(e,t);return n&&a.position.set(n[0],n[1],n[2]),i!==void 0&&(i.length?a.scale.set(i[0],i[1],i[2]):a.scale.setScalar(i)),r&&a.rotation.set(r[0],r[1],r[2]),s.add(a),a}function rt(s,e){let t=new Pt;return e&&t.position.set(e[0],e[1],e[2]),s.add(t),t}function ip(s){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),n=t.createRadialGradient(64,64,0,64,64,64);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(s,"rgba(255,255,255,.85)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,128,128),new Ln(e)}var v_=ip(.45),M_=ip(.1),sp=new tt({color:0,map:v_,transparent:!0,opacity:.5,depthWrite:!1});function nl(s,e){let t=N(s,Ir,sp,[0,2,0],[e*1.25,e*1.25,1],[-Math.PI/2,0,0]);return t.renderOrder=1,t}var $c={kaelion:{skin:16767416,hair:16184063,cloth:15790335,acc:16763210,cape:12088362,style:"spiky",wp:"sword"},elyra:{skin:16765616,hair:15221034,cloth:11739178,acc:16756794,cape:8000544,style:"long",wp:"staff",orb:16742958},aria:{skin:16769228,hair:4172277,cloth:2781142,acc:12577023,cape:1720218,style:"wavy",wp:"staff",orb:8050943},vesper:{skin:15780008,hair:3810400,cloth:2759242,acc:10116351,cape:5909168,style:"short",wp:"daggers"},brakkor:{skin:15906960,hair:15234858,cloth:8014378,acc:13213786,cape:4860438,style:"dwarf",wp:"hammer"},nyxara:{skin:10119758,hair:5909146,cloth:3807850,acc:13659135,cape:2756688,style:"hood",wp:"staff",orb:13659135}},Xd=new ft;function rp(s,e){let t=new tt({color:s,side:jt});return t.userData.th={value:e},t.onBeforeCompile=n=>{n.uniforms.uOl=t.userData.th,n.vertexShader=`uniform float uOl;
`+n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 transformed += normalize(normal) * uOl;`)},t}var Is={},Wc={h:205,wr:[1.57,0,0],wp:[0,0,0]},pf={kaelion:Wc,elyra:Wc,aria:Wc,vesper:Wc,brakkor:{h:185,wr:[1.57,0,0],wp:[0,0,0]},nyxara:{h:162,wr:[1.57,0,0],wp:[0,0,0],rt:1}},an={};function Qc(s){if(!(!(pf[s]||ci[s.slice(2).split("_")[0]])||an[s]!==void 0)){an[s]=null;try{let e=new _r;e.setMeshoptDecoder(Hc),e.load("mdl/"+s+".glb?v="+(typeof BUILD<"u"?BUILD:0),t=>{an[s]=t},void 0,()=>{an[s]=!1})}catch{}}}var S_={nat:1,mar:1,feu:1},T_={larve:1,chauve:1,esprit:1,bombe:1,mage:1,garde:1},mf=s=>typeof MON<"u"&&MON[s]&&MON[s].base||s;function gf(s){if(ci[s]&&ci[s].own&&an["m_"+s]!==!1)return"m_"+s;let e=mf(s),t=bt.fam();if(S_[t]&&T_[e]){let n="m_"+e+"_"+t;if(an[n]!==!1)return n}return"m_"+e}var Tr={},jd=0;function w_(){if(!jd){jd=1;for(let s of["idle","slash","cast","dead"])try{let e=new _r;e.setMeshoptDecoder(Hc),e.load("mdl/a_"+s+".glb?v="+(typeof BUILD<"u"?BUILD:0),t=>{let n=t.animations[0],i=t.scene.getObjectByName("Hips");n&&(n.tracks=n.tracks.filter(r=>r.name.endsWith(".quaternion")||r.name==="Hips.position"),Tr[s]={c:n,hip:i?i.position.length():0,sc:t.scene})},void 0,()=>{})}catch{}}}function A_(s,e){let t="_rtnyx";if(s[t])return s[t].clone();let n={},i=[];s.sc.traverse(C=>{C.isBone&&(n[C.name]=C,i.push(C.name))});let r=e.skm.skeleton,a={},o=new Ge,l=new O,c=new O;r.bones.forEach((C,R)=>{let I=new ft;o.copy(r.boneInverses[R]).invert().decompose(l,I,c),a[C.name]=I});let f=i.filter(C=>a[C]&&e.bn[C]),m={},d={},u={},g={},b={};for(let C of i){let R=n[C],I=R.parent&&R.parent.isBone?R.parent.name:null;u[C]=I,m[C]=R.quaternion.clone(),d[C]=I?d[I].clone().multiply(m[C]):m[C].clone()}for(let C of f){let R=e.bn[C].parent;g[C]=R&&R.isBone&&a[R.name]?R.name:null}for(let C of s.c.tracks)C.name.endsWith(".quaternion")&&(b[C.name.slice(0,-11)]=C.createInterpolant());let h=s.c.duration,p=Math.max(2,Math.ceil(h*30)+1),_=new Float32Array(p),T={},w={},v={},y=new ft,x=new ft;for(let C of f)T[C]=new Float32Array(p*4);for(let C=0;C<p;C++){let R=_[C]=Math.min(h,C/30);for(let I of i){if(b[I]){let B=b[I].evaluate(R);y.set(B[0],B[1],B[2],B[3]).normalize()}else y.copy(m[I]);let F=w[I]||(w[I]=new ft);u[I]?F.copy(w[u[I]]).multiply(y):F.copy(y)}for(let I of f){x.copy(w[I]).multiply(y.copy(d[I]).invert());let F=v[I]=(v[I]||new ft).copy(x).multiply(a[I]),B=g[I];y.copy(B?v[B]:E_).invert().multiply(F),B||y.copy(F),T[I].set([y.x,y.y,y.z,y.w],C*4)}}let M=f.map(C=>new Wn(C+".quaternion",_,T[C]));for(let C of s.c.tracks)C.name==="Hips.position"&&M.push(C.clone());return s[t]=new wi(s.c.name+"_rt",h,M),s[t].clone()}var E_=new ft;function R_(s){if(s.acts||!Tr.idle||!Tr.dead||!Tr.slash||!Tr.cast)return;let e=(i,r)=>{let a=Tr[i],o=s.rt?A_(a,s):a.c.clone(),l=a.hip>0&&s.hipL>0?s.hipL/a.hip:1;for(let f of o.tracks)if(f.name==="Hips.position")for(let m=0;m<f.values.length;m++)f.values[m]*=l;r&&(o.name+="_up",o.tracks=o.tracks.filter(f=>!/^(Hips|.*(UpLeg|Leg|Foot|Toe))/.test(f.name)));let c=s.mix.clipAction(o);return c.setEffectiveWeight(0),c},t=s.staff?"cast":"slash",n=s.staff?"slash":"cast";s.acts={idle:e("idle"),atk:e(t),atkU:e(t,1),sk:e(n),skU:e(n,1),dead:e("dead")},s.acts.idle.play(),s.acts.atk.play(),s.acts.atkU.play(),s.acts.sk.play(),s.acts.skU.play(),s.ws=0,s.acts.atk.timeScale=s.staff?1.5:1.7,s.acts.dead.setLoop(Cc,1),s.acts.dead.clampWhenFinished=!0,s.wa=0,s.wd=0}function C_(s,e,t,n){let i=typeof skDef=="function"?skDef(t,n).acc:16766046,r=De(i,.9),a=De(i,.35),o=we(new _e(i).multiplyScalar(.35).getHex(),new _e(i).multiplyScalar(.2).getHex()),l=we(new _e(i).lerp(new _e(16777215),.5).getHex(),i),c=(h,p)=>{let _=e[h];if(!_)return null;let T=new O,w=new ft,v=new Pt;return _.getWorldScale(T),_.getWorldQuaternion(w),_.add(v),v.scale.setScalar(1/Math.max(1e-6,T.x)),v.quaternion.copy(w.invert()),p(v),v};s.acc=[];let f=(h,p,_)=>c("Spine02",T=>{for(let w of[-1,1]){let v=rt(T,[w*16,18,-22]);for(let y=0;y<h;y++){let x=N(v,_?Ye:Dt,y%2?l:o,[w*(22+y*20),26-y*13,-8-y*4],_?[10,64-y*8,4]:[9,40-y*4,4],[0,0,w*(-.9-y*.28)]);N(x,Dt,a,[0,0,0],1.25)}s.acc.push({o:v,t:"wing",s:w,k:p})}}),m=h=>c("Head",p=>{let _=N(p,new un(26,3.6,6,22),r,[0,h,0],void 0,[Math.PI/2,0,0]);N(p,new un(26,8,6,22),a,[0,h,0],void 0,[Math.PI/2,0,0]),s.acc.push({o:_,t:"spin"})}),d=()=>c("Head",h=>{for(let p of[-1,1])N(h,Ye,o,[p*22,44,4],[8,34,8],[0,0,p*-.5]),N(h,Ye,r,[p*31,60,4],[4,14,4],[0,0,p*-.9])}),u=()=>c("Head",h=>{N(h,new Dn(20,22,10,8,1,!0),l,[0,50,0]);for(let p=0;p<5;p++){let _=p/5*6.283;N(h,Ye,l,[Math.cos(_)*20,62,Math.sin(_)*20],[5,16,5]),N(h,be,r,[Math.cos(_)*20,72,Math.sin(_)*20],3.4)}}),g=()=>{for(let[h,p]of[["LeftShoulder",1],["RightShoulder",-1]])c(h,_=>{N(_,be,o,[p*10,10,0],[18,12,18]),N(_,Ye,l,[p*16,26,0],[6,24,6],[0,0,p*-.5]),N(_,Dt,r,[p*10,12,14],[5,8,3])})},b=h=>c("Hips",p=>{let _=rt(p,[0,30,0]);for(let T=0;T<h;T++){let w=T/h*6.283,v=N(_,Dt,r,[Math.cos(w)*64,T%2*22,Math.sin(w)*64],[7,13,7]);N(v,Dt,a,[0,0,0],2)}s.acc.push({o:_,t:"orbit"})});n===1?(f(4,1,!1),m(66)):n===2?(d(),g(),b(4)):(u(),f(3,.8,!0),b(6))}var vr={};function P_(s,e,t){let n=s+"_"+t;if(vr[n]!==void 0)return vr[n];vr[n]=null;try{let i=e&&e.image,r=i&&(i.width||i.videoWidth),a=i&&i.height;if(!r||!a)return null;let o=Math.min(1,1024/Math.max(r,a)),l=Math.max(1,Math.round(r*o)),c=Math.max(1,Math.round(a*o)),f=document.createElement("canvas");f.width=l,f.height=c;let m=f.getContext("2d",{willReadFrequently:!0});m.drawImage(i,0,0,l,c);let d=m.getImageData(0,0,l,c),u=d.data,g=((typeof skDef=="function"?skDef(s,t).hue:SKINS[s].hue)||180)/360;for(let h=0;h<u.length;h+=4){let p=u[h]/255,_=u[h+1]/255,T=u[h+2]/255,w=Math.max(p,_,T),v=Math.min(p,_,T),y=(w+v)/2,x=w-v;if(x<.06)continue;let M=y>.5?x/(2-w-v):x/(w+v),C=w===p?((_-T)/x+(_<T?6:0))/6:w===_?((T-p)/x+2)/6:((p-_)/x+4)/6;if(C>.02&&C<.11&&M<.75&&y>.45)continue;C=(C+g)%1;let R=Math.min(1,M*1.12),I=y<.5?y*(1+R):y+R-y*R,F=2*y-I,B=D=>(D=(D+1)%1,D<1/6?F+(I-F)*6*D:D<.5?I:D<2/3?F+(I-F)*(2/3-D)*6:F);u[h]=B(C+1/3)*255,u[h+1]=B(C)*255,u[h+2]=B(C-1/3)*255}m.putImageData(d,0,0);let b=new Ln(f);b.flipY=e.flipY,b.colorSpace=e.colorSpace,b.wrapS=e.wrapS,b.wrapT=e.wrapT,b.magFilter=e.magFilter,b.minFilter=e.minFilter,b.generateMipmaps=e.generateMipmaps,b.needsUpdate=!0,vr[n]=b}catch{vr[n]=null}return vr[n]}function I_(s,e,t){w_();let n=an[e],i=s.userData,r=pf[e];if(!n||i.mdl)return;let a=Bc(n.scene),o={},l=null;if(a.traverse(T=>{if(T.isBone&&(o[T.name]=T),T.isMesh){l=T,T.frustumCulled=!1;let w=new vi({map:T.material.map,gradientMap:Di,side:Lt});if(t&&typeof SKINS<"u"&&SKINS[e]){let v=P_(e,T.material.map,t|0||1);v?w.map=v:w.color=new _e(SKINS[e].pal.cloth).lerp(new _e(16777215),.35)}w.emissive=new _e(16777215),w.emissiveMap=w.map,w.emissiveIntensity=.38,T.material=w}}),!l||!o.head_end)return;if(i.olm=null,l.isSkinnedMesh&&l.geometry.attributes.normal&&!(typeof S<"u"&&S.set.gfx===0)){let T=rp(16777215,1),w=new ps(l.geometry,T);w.name="ol",w.frustumCulled=!1,w.bind(l.skeleton,l.bindMatrix),l.parent.add(w),w.position.copy(l.position),w.quaternion.copy(l.quaternion),w.scale.copy(l.scale),i.olm=T}let c=rt(s);c.add(a),a.updateMatrixWorld(!0);let f=new O,m=new O;o.head_end.getWorldPosition(f),(o.LeftToeBase||o.LeftFoot).getWorldPosition(m);let d=r.h*.86/Math.max(1e-6,f.y-m.y);if(a.scale.multiplyScalar(d),i.olm){let T=new O;a.updateMatrixWorld(!0),l.getWorldScale(T),i.olm.userData.th.value=3.3/Math.max(1e-6,T.y*d)}a.position.y-=m.y*d-4,a.updateMatrixWorld(!0),i.rt=r.rt,i.bn=o,i.skm=l;let u=new ya(a),g=u.clipAction(n.animations[0]);g.play(),g.setEffectiveWeight(0);let b=o.RightHand;if(b&&i.wp){let T=new O;b.getWorldScale(T),b.add(i.wp),i.wp.scale.setScalar(1.15/T.x),i.wp.position.set(r.wp[0],r.wp[1],r.wp[2]),i.wp.rotation.set(r.wr[0],r.wr[1],r.wr[2]),i.hand=b}let h=o.LeftHand;if(h&&i.wp2){let T=new O;h.getWorldScale(T),h.add(i.wp2),i.wp2.scale.setScalar(1.15/T.x),i.wp2.position.set(0,0,0),i.hand2=h}let p=new ft,_=new ft;c.getWorldQuaternion(p).invert(),i.cl=[];for(let[T,w,v]of[["ClothB",0,1],["ClothF",0,-1],["ClothL",2,1],["ClothR",2,-1]]){let y=o[T];y&&(y.parent.getWorldQuaternion(_).premultiply(p),i.cl.push({b:y,q0:y.quaternion.clone(),ax:new O(w===0?1:0,0,w===2?1:0).applyQuaternion(_.invert()).normalize(),sg:v,k:T}))}i.tws=[];for(let T of["Spine02","Spine01","Spine"]){let w=o[T];w&&(w.parent.getWorldQuaternion(_).premultiply(p),i.tws.push({b:w,ax:new O(0,1,0).applyQuaternion(_.invert()).normalize()}))}i.tw=0,i.ft=0,i.hipL=o.Hips?o.Hips.position.length():0,i.staff=!!($c[e]&&$c[e].wp==="staff");try{t&&C_(i,o,e,t|0||1)}catch{}i.body.visible=!1,i.mdl=c,i.mix=u,i.run=g}function L_(s,e,t,n){Qc(s);let i=Object.assign({},$c[s]||$c.kaelion,e&&typeof SKINS<"u"&&SKINS[s]?SKINS[s].pal:null,(e|0)>1&&typeof skDef=="function"?{acc:skDef(s,e|0).acc,orb:skDef(s,e|0).acc}:null),r=new Pt,a=r.userData;nl(r,46);let o=a.body=rt(r),l=we(i.skin),c=we(i.cloth),f=we(i.acc),m=we(i.hair),d=we(1707054);a.legL=rt(o,[-14,34,0]),N(a.legL,ut,d,[0,-16,0],[11,32,11]),N(a.legL,be,f,[0,-32,5],[13,9,17]),a.legR=rt(o,[14,34,0]),N(a.legR,ut,d,[0,-16,0],[11,32,11]),N(a.legR,be,f,[0,-32,5],[13,9,17]);let u=a.up=rt(o,[0,34,0]);N(u,be,c,[0,26,0],[28,30,23]),N(u,ut,f,[0,8,0],[27,8,22]),N(u,be,f,[0,32,21],7),a.cape=rt(u,[0,48,-20]),N(a.cape,at,we(i.cape),[0,-34,-3],[54,70,5]),a.armL=rt(u,[-31,42,0]),N(a.armL,ut,c,[0,-14,0],[9,28,9]),N(a.armL,be,l,[0,-31,0],10),a.armR=rt(u,[31,42,0]),N(a.armR,ut,c,[0,-14,0],[9,28,9]),N(a.armR,be,l,[0,-31,0],10),N(u,be,f,[-31,44,0],12),N(u,be,f,[31,44,0],12);let g=a.head=rt(u,[0,88,2]);N(g,be,l,[0,0,0],44);let b=we(i.style==="hood"?13659135:2363448,i.style==="hood"?13659135:0);if(N(g,be,b,[-16,2,39],[7,11,5]),N(g,be,b,[16,2,39],[7,11,5]),N(g,be,De(16777215),[-14,6,43],2.6),N(g,be,De(16777215),[18,6,43],2.6),N(g,be,we(16748444),[-28,-11,31],[8,5,4]),N(g,be,we(16748444),[28,-11,31],[8,5,4]),N(g,be,we(8006202),[0,-15,40],[9,6,4]),i.style==="spiky"){N(g,be,m,[0,10,-8],46);for(let y=0;y<9;y++){let x=y/9*6.283,M=30;N(g,Ye,m,[Math.cos(x)*M,36+y%2*6,Math.sin(x)*M-6],[14,40,14],[Math.sin(x)*.7,0,-Math.cos(x)*.7])}N(g,Ye,m,[0,52,-4],[15,44,15]),N(g,Ye,m,[-20,26,30],[10,24,10],[.9,0,.5]),N(g,Ye,m,[16,28,32],[10,26,10],[1,0,-.4]);let v=N(r,new un(54,4,6,28),De(16766046),[0,128,-30]);a.halo=v;for(let y=0;y<8;y++){let x=y/8*6.283;N(v,Ye,De(16766046),[Math.cos(x)*66,Math.sin(x)*66,0],[6,18,6],[0,0,x-Math.PI/2])}}else if(i.style==="long"||i.style==="wavy")N(g,be,m,[0,10,-9],47),N(g,be,m,[0,-34,-30],[40,58,24]),N(g,be,m,[-38,-14,2],[15,34,18]),N(g,be,m,[38,-14,2],[15,34,18]),i.style==="wavy"?(N(g,be,m,[-44,-44,-10],18),N(g,be,m,[44,-44,-10],18),N(g,be,m,[0,46,4],[24,14,22])):(N(g,Ye,we(16756794,16742958),[0,60,-6],[16,34,16]),N(g,Ye,we(16756794,16742958),[-22,50,-10],[11,24,11],[0,0,.5]),N(g,Ye,we(16756794,16742958),[22,50,-10],[11,24,11],[0,0,-.5]));else if(i.style==="short"){N(g,be,m,[0,11,-8],46);for(let v=0;v<5;v++)N(g,Ye,m,[-24+v*12,30,30],[10,26,10],[1.3,0,(v-2)*.25]);N(u,new un(26,9,8,16),f,[0,52,2],void 0,[Math.PI/2,0,0]),N(a.cape,at,f,[16,-20,2],[14,46,4])}else i.style==="dwarf"?(N(g,be,m,[0,12,-8],46),N(g,be,m,[0,-30,20],[36,36,26]),N(g,be,m,[-16,-14,38],[16,8,8]),N(g,be,m,[16,-14,38],[16,8,8]),N(g,new un(11,4,6,14),we(13213786),[-16,30,32],void 0,[-.5,0,0]),N(g,new un(11,4,6,14),we(13213786),[16,30,32],void 0,[-.5,0,0]),o.scale.set(1.15,.9,1.15)):(N(g,be,m,[0,6,-8],51),N(g,Ye,m,[0,44,-34],[22,50,22],[-.9,0,0]),N(g,be,m,[0,-36,-6],[46,20,40]));let h=a.wp=rt(a.armR,[0,-32,6]),p=we(15265023),_=we(6961690),T=t&&typeof WEAPONS<"u"&&WEAPONS[s]?WEAPONS[s][1].k:i.wp,w=i.orb||i.acc;if(T==="lance")N(h,ut,_,[0,0,40],[4,150,4],[Math.PI/2,0,0]),N(h,Ye,we(16773824,9071120),[0,0,128],[11,40,11],[Math.PI/2,0,0]),N(h,be,De(16766046,.35),[0,0,124],20);else if(T==="sceptre")N(h,ut,f,[0,30,0],[5,120,5]),a.orb=N(h,Dt,De(16766046),[0,104,0],[16,24,16]),N(h,Ye,De(16742958),[-16,100,0],[7,30,7],[0,0,.7]),N(h,Ye,De(16742958),[16,100,0],[7,30,7],[0,0,-.7]),N(h,be,De(16751150,.3),[0,104,0],30);else if(T==="harp"){N(h,new un(26,5,8,18,Math.PI*1.4),we(16751296),[0,30,6],void 0,[0,Math.PI/2,.3]);for(let v=0;v<4;v++)N(h,ut,De(16777215,.8),[0,30,-10+v*9],[1,40,1]);a.orb=N(h,be,De(16751296),[0,62,6],9)}else if(T==="scythe")N(h,ut,_,[0,34,0],[4,140,4]),N(h,at,p,[0,100,30],[5,14,70],[.35,0,0]),N(h,at,De(11566079,.5),[0,96,34],[3,6,74],[.35,0,0]);else if(T==="cannon")N(h,ut,we(4864554),[0,0,34],[20,76,20],[Math.PI/2,0,0]),N(h,ut,f,[0,0,70],[23,10,23],[Math.PI/2,0,0]),N(h,ut,f,[0,0,6],[23,10,23],[Math.PI/2,0,0]),N(h,be,De(16751150,.7),[0,0,76],12);else if(T==="book")N(h,at,we(2756688),[0,10,18],[44,8,34]),N(h,at,we(15787775),[0,15,18],[40,5,30]),a.orb=N(h,be,De(13659135),[0,44,18],12),N(h,be,De(13659135,.3),[0,44,18],20);else if(i.wp==="sword")N(h,Dt,we(16054015,9075264),[0,0,56],[11,3.6,52]),N(h,at,De(i.acc,.55),[0,0,50],[2.6,5,74]),N(h,at,f,[0,0,6],[40,9,9]),N(h,be,f,[-21,0,6],6),N(h,be,f,[21,0,6],6),N(h,ut,_,[0,0,-6],[4,18,4],[Math.PI/2,0,0]),N(h,be,f,[0,0,-17],6.5);else if(i.wp==="staff")N(h,ut,_,[0,30,0],[4,130,4]),a.orb=N(h,be,De(i.orb),[0,102,0],15),N(h,be,De(i.orb,.3),[0,102,0],24);else if(i.wp==="hammer")N(h,ut,_,[0,0,30],[5,90,5],[Math.PI/2,0,0]),N(h,at,p,[0,0,78],[50,34,34]),N(h,at,f,[0,0,78],[54,12,38]);else{let v=x=>{N(x,Dt,we(15659263,6965936),[0,0,36],[8,3,30]),N(x,at,De(i.acc,.6),[0,0,34],[2.2,4.2,44]),N(x,at,f,[0,0,7],[24,7,7]),N(x,ut,d,[0,0,-3],[3.6,14,3.6],[Math.PI/2,0,0])};v(h);let y=a.wp2=rt(a.armL,[0,-32,6]);v(y)}if(a.wy=/^(staff|sceptre|scythe|harp|book)$/.test(T)?1:0,a.wdg=T==="daggers"?1:0,n&&n.length===2){let v=we(n[0],new _e(n[0]).multiplyScalar(.35).getHex()),y=x=>x&&x.traverse(M=>{M.isMesh&&(M.material=M.material.isMeshBasicMaterial?De(n[1],M.material.transparent?M.material.opacity:1):v)});y(h),y(a.wp2)}return a.shield=N(r,be,new tt({color:9240442,transparent:!0,opacity:.28,depthWrite:!1}),[0,80,0],96),a.shield.visible=!1,a.aura=N(r,Rr,new tt({color:i.acc,transparent:!0,opacity:.5,side:Lt,depthWrite:!1,blending:$t}),[0,3,0],64,[-Math.PI/2,0,0]),a.aura2=N(r,Ir,new tt({color:i.acc,transparent:!0,opacity:.16,depthWrite:!1,blending:$t}),[0,2.5,0],58,[-Math.PI/2,0,0]),a.rot=0,a.hid=s,a.sk=e,r}var Mr=new ft,qc=new ft,Xc=new ft,Kd=new Vn;function D_(s,e,t,n){let i=s.userData,r=e.dash>0,a=re*13;i.m=(i.m||0)+(Math.min(1,e.mv||0)-(i.m||0))*Math.min(1,n*10);let o=i.m;i.dl=(i.dl||0)+((r?1:0)-(i.dl||0))*Math.min(1,n*14);let l=Math.max(0,Math.min(1,(e.blink||0)/.5));if(s.position.set(e.x,0,e.y),!i.mdl&&an[i.hid]&&I_(s,i.hid,i.sk),i.mdl){let u=Math.max(0,e.atk||0)/.2;if(i.bkk=(i.bkk||0)+((i.bk?1:0)-(i.bkk||0))*Math.min(1,n*8),i.run.timeScale=(.75+o*.75+i.dl*.8)*(1-1.7*i.bkk),i.acts||R_(i),i.acts){let b=e.dead||t.state==="end"&&e.hp<=0,h=i.acts;b&&!i.dd?(i.dd=1,h.dead.reset().play()):!b&&i.dd&&(i.dd=0,h.dead.stop());let p=e.skt!==void 0&&e.skk!=="d"&&t.t-e.skt<.6&&t.t>=e.skt;p&&i.skt!==e.skt&&(i.skt=e.skt,h.sk.time=0,h.skU.time=0),i.wd+=((b?1:0)-i.wd)*Math.min(1,n*9),i.wa+=((i.ft>0&&!b?1:0)-i.wa)*Math.min(1,n*9),i.ws+=((p&&!b?1:0)-i.ws)*Math.min(1,n*(p?24:10));let _=i.staff?1.5:1.7;h.atk.timeScale=h.atkU.timeScale=_,h.sk.timeScale=h.skU.timeScale=2.3,h.atkU.time=h.atk.time;let T=Math.min(1,o*1.15)*(1-.55*i.ws),w=1-i.wd,v=i.wa*(1-i.ws);i.run.setEffectiveWeight(T*w),h.idle.setEffectiveWeight((1-T)*(1-v)*(1-i.ws)*w),h.atk.setEffectiveWeight((1-T)*v*w),h.sk.setEffectiveWeight((1-T)*i.ws*w),h.atkU.setEffectiveWeight(T*v*w*1.4),h.skU.setEffectiveWeight(T*i.ws*w*2.2),h.dead.setEffectiveWeight(i.wd)}else i.run.setEffectiveWeight(Math.min(1,o*1.15));i.mix.update(n);for(let b of i.cl){let h;b.k==="ClothB"?h=.05+.2*o+i.dl*.28+Math.sin(re*7)*(.02+.03*o)+Math.sin(re*2.1)*.02:b.k==="ClothF"?h=.02+.07*o+Math.abs(Math.sin(re*9))*.03*o:h=.015+.05*o+Math.sin(re*7+(b.sg>0?1:2.4))*.02*o,b.b.quaternion.copy(b.q0).premultiply(Xd.setFromAxisAngle(b.ax,h*b.sg))}i.mdl.position.y=Math.sin(re*2.6)*2*(1-o)+Math.abs(Math.sin(re*13))*5*o+$i*500,i.mdl.rotation.x=.09*o*(1-2*(i.bkk||0))+i.dl*.5-l*.3,i.mdl.rotation.z=Math.sin(re*6.5)*.03*o+(i.ln||0)*.6,i.mdl.rotation.y=0,i.mdl.position.z=-u*5;{let b=e.skt!==void 0&&t.t>=e.skt?(t.t-e.skt)/(e.skk==="u"?.7:.45):2;if(b<1&&e.skk!=="d"){let h=Math.sin(b*Math.PI),p=1-Math.pow(1-b,3);e.skk==="u"?(i.mdl.position.y+=h*95,i.mdl.rotation.y=p*6.283,i.mdl.rotation.x-=h*.25):e.skk==="a"?(i.mdl.position.z+=h*26,i.mdl.rotation.x+=h*.28):e.skk==="b"?(i.mdl.position.y+=h*34,i.mdl.rotation.y=Math.sin(b*6.283)*.5):(i.mdl.position.y-=h*8,i.mdl.rotation.x-=h*.22)}}let g=1+Math.sin(re*2.6)*.02*(1-o);i.mdl.scale.set(g,(2-g)*(1-i.dl*.12),g)}let c=i.rot;if(i.mdl){e.atk>0?i.ft=.7:i.ft=Math.max(0,(i.ft||0)-n);let u=Math.atan2(e.mvx,e.mvy),g=Math.atan2(e.fx,e.fy);if(i.bk=0,o>.12){if(c=u,i.ft>0){let b=g-u;for(;b>Math.PI;)b-=6.283;for(;b<-Math.PI;)b+=6.283;c=u+b-Math.max(-.5,Math.min(.5,b)),i.bk=Math.abs(b)>1.9?1:0}}else c=i.ft>0||o<.05?g:i.rot}else e.atk>0||o<.1?c=Math.atan2(e.fx,e.fy):c=Math.atan2(e.mvx,e.mvy);let f=c-i.rot;for(;f>Math.PI;)f-=6.283;for(;f<-Math.PI;)f+=6.283;if(i.rot+=f*Math.min(1,n*(i.mdl?11:16)),s.rotation.y=i.rot,i.ln=(i.ln||0)+(Math.max(-.4,Math.min(.4,-f*1.4))*o-(i.ln||0))*Math.min(1,n*8),i.aura){let u=e.skt!==void 0&&t.t-e.skt<.5&&t.t>=e.skt?1-(t.t-e.skt)/.5:0,g=1+Math.sin(re*4)*.06+u*.9+i.dl*.5;i.aura.scale.set(64*g,64*g,1),i.aura.material.opacity=.32+u*.6+(e.ult>=100?.25+Math.sin(re*9)*.15:0),i.aura.rotation.z=re*.9,i.aura2.scale.set(58*g,58*g,1),i.aura2.material.opacity=.12+u*.3}if(o>.5&&!e.dead&&t.state==="play"&&(i.stp=(i.stp||0)-n,i.stp<=0&&(i.stp=.2,Ds(e.x-Math.sin(i.rot)*26,e.y-Math.cos(i.rot)*26,8,"#ffffff",2,90))),e.dash>0&&ai.length<Lr.length&&Ds(e.x,e.y,70,e.h?e.h.col:"#ffffff",3,60),i.mdl){let u=0;if(i.ft>0&&o>.12){for(u=Math.atan2(e.fx,e.fy)-i.rot;u>Math.PI;)u-=6.283;for(;u<-Math.PI;)u+=6.283;u=Math.max(-.5,Math.min(.5,u))}let g=u-i.tw;Math.abs(g)>3.2?i.tw=u:i.tw+=g*Math.min(1,n*8);let b=i.tw/Math.max(1,i.tws.length);for(let h of i.tws)h.b.quaternion.premultiply(Xd.setFromAxisAngle(h.ax,b))}if(i.acc)for(let u of i.acc)u.t==="wing"?(u.o.rotation.y=u.s*(-.35+Math.sin(re*(2.4+o*5))*(.28+o*.2)*u.k),u.o.rotation.z=u.s*Math.sin(re*2.4)*.08):u.t==="spin"?u.o.rotation.z=re*1.6:u.o.rotation.y=re*1.3;if(i.mdl&&i.hand&&i.wp){let u=Math.max(0,Math.min(1,(e.atk||0)/.2)),g=u*u*(3-2*u),b=i.ws||0,h=Math.sin(re*2.6)*.04*(1-o)+Math.sin(a)*.08*o,p=i.wd||0,_=i.wy?.12+h+g*.85-b*.5+p*1.2:i.wdg?-.35+h+g*.55-b*.6:-1.05+h+g*1.35-b*.7+p*.9,T=i.wy?.1-g*.1:-.18+g*.18;i.mdl.getWorldQuaternion(Mr),qc.setFromEuler(Kd.set(_,0,T)),Mr.multiply(qc),i.hand.getWorldQuaternion(Xc).invert(),i.wp.quaternion.copy(Xc).multiply(Mr),i.hand2&&i.wp2&&(i.mdl.getWorldQuaternion(Mr),qc.setFromEuler(Kd.set(-.35-h+(1-g)*0+g*.25-b*.6,0,.18)),Mr.multiply(qc),i.hand2.getWorldQuaternion(Xc).invert(),i.wp2.quaternion.copy(Xc).multiply(Mr))}i.body.position.y=Math.abs(Math.sin(a))*9*o+Math.sin(re*2.6)*2.5*(1-o)+$i*500,i.body.rotation.x=.26*o+i.dl*.75-l*.45;{let u=Math.max(0,e.atk||0)/.2,g=1+Math.sin(re*2.6)*.028*(1-o),b=Math.sin(a*2)*.05*o;i.body.scale.set(g*(1-b*.6)*(1+i.dl*.12),(1+b)*(2-g)*(1-i.dl*.18),g*(1-b*.6)),i.body.rotation.y=-u*.55,i.body.rotation.z=Math.sin(a)*.06*o}i.legL.rotation.x=Math.sin(a)*1*o,i.legR.rotation.x=-Math.sin(a)*1*o,i.armL.rotation.x=-Math.sin(a)*.9*o;let m=Math.max(0,e.atk||0)/.2;i.armR.rotation.x=m>0?-2.4*m:Math.sin(a)*.9*o-.15,i.armR.rotation.z=m>0?-.5*m:0,i.cape.rotation.x=.22+.55*o+i.dl*.9+Math.sin(re*7)*(.06+.08*o),i.head.rotation.z=Math.sin(re*2.1)*.05+Math.sin(a)*.04*o,i.head.rotation.x=-.08*o+l*.3;let d=e.blink>0?1+Math.sin(re*50)*.06:1;s.scale.set(d,2-d,d),s.visible=!(e.blink>0&&(t.t*18|0)%2&&t.state==="play"&&!t.cine),i.shield.visible=e.sh>0,i.shield.visible&&i.shield.scale.setScalar(96+Math.sin(re*10)*4),i.halo&&(i.halo.rotation.z=re*.8,i.halo.position.y=128+Math.sin(re*2)*4),i.orb&&i.orb.scale.setScalar(15+Math.sin(re*8)*2.5),e.dead||t.state==="end"&&e.hp<=0?(s.rotation.x=i.acts?0:Math.min(1.5,(s.rotation.x||0)+Math.max(n,.016)*5),s.visible=!e.gone):s.rotation.x=0}var Cr={larve(s,e){let t=e.b=rt(s),n=we(2889032,1706032);N(t,be,n,[0,30,0],[46,32,46]),N(t,be,De(16739039),[-15,34,38],[8,10,5]),N(t,be,De(16739039),[15,34,38],[8,10,5]);for(let i=0;i<5;i++)N(t,Ye,we(11561983,6957776),[-26+i*13,56+i%2*10,-8-i%3*8],[10,30+i%2*14,10],[-.3,0,(i-2)*.2]);e.f=i=>{let r=Math.sin(re*8+i.bob);t.scale.set(1-r*.12,1+r*.16,1-r*.12)}},chauve(s,e){let t=e.b=rt(s,[0,95,0]),n=we(3807850);N(t,be,n,[0,0,0],22),N(t,Ye,n,[-12,22,0],[7,16,7]),N(t,Ye,n,[12,22,0],[7,16,7]),N(t,be,De(16739039),[-8,3,19],5),N(t,be,De(16739039),[8,3,19],5);let i=rt(t,[-16,4,0]),r=rt(t,[16,4,0]);N(i,at,we(6960576),[-30,0,0],[60,3,34]),N(r,at,we(6960576),[30,0,0],[60,3,34]),e.f=a=>{let o=Math.sin(re*24+a.bob);i.rotation.z=o*.9,r.rotation.z=-o*.9,t.position.y=95+Math.sin(re*5+a.bob)*12}},esprit(s,e){let t=e.b=rt(s,[0,20,0]),n=we(10478847,3844351,.88);N(t,be,n,[0,78,0],30),N(t,Ye,n,[0,34,0],[28,70,28],[Math.PI,0,0]),N(t,be,we(1192026),[-10,82,26],[5,8,4]),N(t,be,we(1192026),[10,82,26],[5,8,4]),N(t,Ye,n,[-8,112,0],[8,26,8],[0,0,.3]),N(t,Ye,n,[10,110,0],[7,20,7],[0,0,-.3]);let i=N(t,be,n,[-36,60,6],[9,16,9]),r=N(t,be,n,[36,60,6],[9,16,9]);e.f=a=>{t.position.y=20+Math.sin(re*3+a.bob)*10,t.rotation.z=Math.sin(re*2.2+a.bob)*.12;let o=a.cd<.5?1.2:0;i.position.y=60+o*30,r.position.y=60+o*30}},bombe(s,e){let t=e.b=rt(s);N(t,be,we(2364448),[0,42,0],38),N(t,at,De(16752670),[-14,48,34],[14,7,4],[0,0,-.4]),N(t,at,De(16752670),[14,48,34],[14,7,4],[0,0,.4]),N(t,at,De(16752670),[0,30,36],[22,6,4]),N(t,ut,we(6965802),[0,84,0],[5,14,5]);let n=N(t,Ye,De(16747038),[0,106,0],[14,34,14]),i=N(t,Ye,De(16769146),[0,100,0],[8,22,8]);N(t,be,we(2364448),[-16,6,4],[12,8,16]),N(t,be,we(2364448),[16,6,4],[12,8,16]),e.f=r=>{let a=1+Math.sin(re*18+r.bob)*.07;t.scale.setScalar(a),t.position.y=Math.abs(Math.sin(re*10+r.bob))*14,n.scale.set(14,30+Math.sin(re*30)*8,14),i.rotation.y=re*9}},mage(s,e){let t=e.b=rt(s),n=we(5909168);N(t,Ye,n,[0,42,0],[38,84,38]),N(t,be,we(1313316),[0,92,4],23),N(t,be,De(15313151),[-8,94,24],4),N(t,be,De(15313151),[8,94,24],4),N(t,ut,n,[0,108,0],[46,5,46]),N(t,Ye,n,[0,138,-4],[28,58,28],[-.2,0,0]),N(t,ut,we(16763210),[0,112,0],[30,6,30]);let i=rt(t,[40,50,10]);N(i,ut,we(6961690),[0,20,0],[4,110,4]);let r=N(i,be,De(15313151),[0,82,0],13);e.f=a=>{t.position.y=6+Math.sin(re*3+a.bob)*5,i.rotation.x=a.cd<.5?-.9:Math.sin(re*2)*.1,r.scale.setScalar(a.cd<.5?22:13+Math.sin(re*6)*2)}},garde(s,e){let t=e.b=rt(s),n=we(10123866),i=we(6967352);N(t,at,n,[0,78,0],[84,74,58]),N(t,at,i,[0,136,4],[48,40,44]),N(t,at,De(16769098),[-11,138,27],[10,6,3]),N(t,at,De(16769098),[11,138,27],[10,6,3]),N(t,be,we(5937722),[-30,118,10],12),N(t,be,we(5937722),[26,112,-16],14);let r=rt(t,[-60,104,0]),a=rt(t,[60,104,0]);N(r,at,i,[0,-38,0],[30,84,34]),N(a,at,i,[0,-38,0],[30,84,34]);let o=rt(t,[-22,42,0]),l=rt(t,[22,42,0]);N(o,at,i,[0,-20,0],[32,42,36]),N(l,at,i,[0,-20,0],[32,42,36]),e.f=c=>{let f=Math.sin(re*5+c.bob);r.rotation.x=f*.7,a.rotation.x=-f*.7,o.rotation.x=-f*.5,l.rotation.x=f*.5,t.rotation.z=f*.06,t.position.y=Math.abs(f)*5}},ver(s,e){let t=e.tint,n=e.b=rt(s),i=we(t!==void 0?new _e(t).lerp(new _e(16777215),.25).getHex():14856266),r=we(t!==void 0?new _e(t).multiplyScalar(.55).getHex():11039786),a=we(16773328),o=t!==void 0?t:16734778;N(n,be,i,[0,92,0],96),N(n,be,we(3806224),[0,86,72],[62,54,30]);for(let c=0;c<10;c++){let f=c/10*6.283;N(n,Ye,we(16774880),[Math.cos(f)*54,86+Math.sin(f)*46,88],[9,26,9],[Math.PI/2+Math.sin(f)*.5,0,-Math.cos(f)*.5])}N(n,be,De(16726586),[-52,150,52],10),N(n,be,De(16726586),[52,150,52],10);for(let c=0;c<5;c++)N(n,Ye,r,[0,180-c*6,-10-c*26],[16,44,16],[-.5,0,0]);let l=11;e.segs=[],e.ch=null;for(let c=0;c<l;c++){let f=new Pt,m=1-c/l,d=26+54*m*m+10*m,u=rt(f,[0,d*.92,0]);if(f.userData.rad=d,f.userData.L=d*1.18+8,f.userData.body=u,N(u,be,c%2?r:i,[0,0,0],[d,d*.84,d*1.08]),N(u,ut,r,[0,0,d*.55],[d*.97,d*.2,d*.97],[Math.PI/2,0,0]),N(u,be,we(15915424),[0,-d*.5,0],[d*.7,d*.4,d*.9]),N(u,Ye,a,[0,d*.95,0],[d*.2,d*.75,d*.2],[-.25,0,0]),c%2===0&&(N(u,Ye,a,[-d*.8,d*.35,0],[d*.14,d*.5,d*.14],[0,0,1.1]),N(u,Ye,a,[d*.8,d*.35,0],[d*.14,d*.5,d*.14],[0,0,-1.1])),c===l-1){let g=f.userData.st=rt(u,[0,0,-d*.7]);N(g,Ye,a,[0,d*.5,-d*1.1],[d*.5,d*2.6,d*.5],[-Math.PI/2+.5,0,0]),N(g,be,De(o),[0,d*1.1,-d*2.1],d*.42),N(g,be,De(o,.3),[0,d*1.1,-d*2.1],d*.8)}nl(f,d*.9),xt.add(f),e.segs.push(f)}e.f=c=>{n.position.y=Math.sin(re*4)*8,n.rotation.x=c.wind>0?-.35:c.chg>0?.25:Math.sin(re*3)*.06;let f=Math.max(.05,s.scale.x),m=c.wind>0?1:0,d=c.chg>0?1:0,u=e.rot||0;e.ch||(e.ch=e.segs.map((h,p)=>({x:c.x-Math.sin(u)*(p+1)*60,z:c.y-Math.cos(u)*(p+1)*60}))),e.kwn=(e.kwn||0)+(m-(e.kwn||0))*.12;let g=c.x,b=c.y;e.segs.forEach((h,p)=>{let _=e.ch[p],T=h.userData.L*f*(p?1:1.35),w=_.x-g,v=_.z-b,y=Math.hypot(w,v);y<1&&(w=-Math.sin(u),v=-Math.cos(u),y=1);let x=.012*(1-d),M=w/y,C=v/y,R=M*Math.cos(x)-C*Math.sin(x),I=M*Math.sin(x)+C*Math.cos(x);_.x=g+R*T,_.z=b+I*T;let F=(p+1)/l,B=Math.sin(re*(d?9:3.6)-p*.8)*(5+30*F*F)*f*(d?.35:1),D=-I,j=R,Z=e.kwn*F*F;h.position.set(_.x+D*B,(Math.max(0,Math.sin(re*3-p*.75))*10+Z*150+(p===l-1?Math.sin(re*6)*6:0))*f,_.z+j*B),h.rotation.y=Math.atan2(g-h.position.x,b-h.position.z),h.scale.setScalar(f),h.userData.body.rotation.x=-Z*.9,h.userData.body.rotation.z=Math.sin(re*3.6-p*.8)*.14,h.userData.st&&(h.userData.st.rotation.x=-.3-e.kwn*.7+Math.sin(re*(m?30:4))*(m?.12:.08),h.userData.st.rotation.y=Math.sin(re*(m?26:2.6))*(m?.25:.3)),g=_.x,b=_.z})}}},ci={larve:{h:78,y:0},chauve:{h:84,y:-42},esprit:{h:130,y:0},bombe:{h:112,y:0},mage:{h:150,y:0},garde:{h:168,y:0},ver:{h:330,y:0},xalven:{h:430,y:0},cyclope:{h:460,y:0},scorch:{h:420,y:0},rampant:{h:60,y:0,own:1},goliath:{h:128,y:0,own:1},vampire:{h:96,y:-30,own:1},spectre:{h:150,y:0,own:1},mine:{h:140,y:0,own:1},archimage:{h:185,y:0,own:1},sentinelle:{h:160,y:0,own:1},colosse:{h:235,y:0,own:1},verlave:{h:440,y:0,own:1},verabysse:{h:480,y:0,own:1},nyxalis:{h:440,y:0,own:1},titan:{h:500,y:0,own:1},azurion:{h:430,y:0,own:1}},Li={},Jd={m_vampire:1.6,m_esprit_feu:2.3,m_chauve:1.35,m_chauve_feu:1.3,m_esprit:1.3};function ap(s,e){let t=gf(e),n=an[t],i=s.userData,r=t==="m_"+e&&ci[e]&&ci[e].own,a=r?ci[e]:ci[mf(e)],o=typeof MON<"u"&&MON[e]||{},l=r?{}:o;if(!n||i.mm||!i.b||!a)return;if(!n.bx&&(n.scene.updateMatrixWorld(!0),n.bx=new hn().setFromObject(n.scene),n.scene.traverse(d=>{d.isMesh&&(d.geometry.userData.shared=1,d.material=Li[t]||(Li[t]=new vi({map:d.material.map,gradientMap:Di,emissive:16777215,emissiveMap:d.material.map,emissiveIntensity:.42})))}),!(typeof S<"u"&&S.set.gfx===0))){let d=[];n.scene.traverse(g=>{g.isMesh&&g.geometry.attributes.normal&&d.push(g)});let u=Is[t]||(Is[t]=rp(656660,3.2*(n.bx.max.y-n.bx.min.y)/(a.h||100)));for(let g of d){let b=new $e(g.geometry,u);b.name="ol",b.matrixAutoUpdate=!1,g.add(b)}}let c=n.scene.clone(!0),f=new Pt,m=a.h*(i.med||1)*(l.sc||1)/(r&&o.sc?o.sc:1)/(n.bx.max.y-n.bx.min.y);if(l.tint!==void 0&&Li[t]){let d=t+"|"+e,u=Li[d]||(Li[d]=(()=>{let g=Li[t].clone();return g.color=new _e(l.tint).lerp(new _e(16777215),.25),g.emissive=new _e(l.tint).lerp(new _e(16777215),.4),g})());c.traverse(g=>{g.isMesh&&g.name!=="ol"&&(g.material=u)})}c.scale.multiplyScalar(m),Jd[t]&&(c.scale.z*=Jd[t]),c.position.y=-n.bx.min.y*m+a.y,f.add(c);for(let d of i.b.children)d.visible=!1;i.b.add(f),i.mm=f}var ka=new Map;function N_(s,e){let t=s.pet,n=ka.get(s);if(n&&n.userData.pid!==t&&(xt.remove(n),ka.delete(s),n=null),!t||!ci[t]||!ci[t].own)return;if(!n){let m="m_"+t;if(Qc(m),!an[m])return;let d=new Pt,u=new Pt;if(d.userData.b=u,d.add(u),ap(d,t),!d.userData.mm)return;{let b=an[m].bx,h=b.max.y-b.min.y,p=Math.max(b.max.x-b.min.x,b.max.z-b.min.z);u.scale.setScalar(72/(ci[t].h*Math.max(1,p/h*1.05)))}let g=nl(d,20);g.material=sp,d.userData.x=s.x-70,d.userData.z=s.y+40,d.userData.r=0,d.userData.pid=t,xt.add(d),ka.set(s,n=d)}let i=n.userData,r=Math.hypot(s.fx||0,s.fy||1)||1,a=s.x-(s.fx||0)/r*96+(s.fy||1)/r*66,o=s.y-(s.fy||1)/r*96-(s.fx||0)/r*66,l=a-i.x,c=o-i.z,f=Math.hypot(l,c);if(f>900)i.x=a,i.z=o;else if(f>14){let m=Math.min(1,e*(f>220?7:3.4));i.x+=l*m,i.z+=c*m;let d=Math.atan2(l,c),u=d-i.r;for(;u>Math.PI;)u-=6.283;for(;u<-Math.PI;)u+=6.283;i.r+=u*Math.min(1,e*8)}n.visible=!s.gone&&!s.dead,n.position.set(i.x,0,i.z),i.b.position.y=26+Math.sin(re*3.2+i.x*.01)*9+(f>14?Math.abs(Math.sin(re*9))*7:0),i.b.rotation.y=i.r,i.b.rotation.z=Math.sin(re*2.1)*.08}function F_(s,e,t,n){let i=e.mm||e.b;if(!i)return;let r=t.ph||1,a=MON[t.id].r*1.45,o=(u,g,b)=>u+(g-u)*Math.min(1,n*b);if(!e.ba){e.ba=1;let u=g=>{let b=new $e(Rr,new tt({color:t.m.col,transparent:!0,opacity:g,depthWrite:!1,blending:$t,side:Lt}));return b.rotation.x=-Math.PI/2,b.position.y=5,s.add(b),b};e.r1=u(.6),e.r2=u(.3),e.kw=e.kc=e.ks=e.kj=e.kt=0,e.by=0}e.mm&&!e.bm&&e.mm.traverse(u=>{u.isMesh&&u.name!=="ol"&&u.material&&u.material.emissive&&(e.bm=u.material)}),e.r1.scale.setScalar(a*(1.45+Math.sin(re*3)*.07)),e.r1.rotation.z=re*.9,e.r2.scale.setScalar(a*(1.85+r*.14+Math.sin(re*2.2+1)*.1)),e.r2.rotation.z=-re*.55,e.r2.material.opacity=.2+.12*r+(t.stun>0?.3:0),e.kw=o(e.kw,t.wind>0?1:0,10),e.kc=o(e.kc,t.chg>0?1:0,14),e.ks=o(e.ks,t.stun>0?1:0,9),e.kt=o(e.kt,t.ai!==void 0&&t.ai<.5&&!(t.stun>0)?1:0,9);let l=t.slamT!==void 0&&t.slamT<.6&&!(t.stun>0)?1-t.slamT/.6:0;e.kj=l>e.kj?o(e.kj,l,12):o(e.kj,0,22);let c=Math.sin(re*2.4),f=1+c*.035-e.kw*.12+e.kc*.1+e.kt*.13+e.ks*Math.sin(re*22)*.07-(e.kj<.15&&e.by>12?.2:0),m=1-c*.02+e.kw*.08-e.kc*.06+e.kt*.05+e.ks*.08;e.by=o(e.by,Math.sin(re*2.2)*5+e.kj*e.kj*150+e.kt*22,e.kj>.05?14:24);{let u=Math.hypot(t.x-(e.lx===void 0?t.x:e.lx),t.y-(e.ly===void 0?t.y:e.ly))/Math.max(.001,n);e.lx=t.x,e.ly=t.y,e.kmv=o(e.kmv||0,Math.min(1,u/90),6),e.spin=t.stun>0?(e.spin||0)+n*9:(e.spin||0)*Math.max(0,1-n*6),!(t.stun>0)&&e.spin>6.283&&(e.spin%=6.283),i.rotation.y=(e.spin||0)+Math.sin(re*1.3)*.08*(1-e.kmv)}let d=Math.abs(Math.sin(re*6.5))*e.kmv*(1-e.kc)*(1-e.kj);e.by+=d*3,i.position.y=(e.by+d*16)/Math.max(.01,s.scale.y),i.rotation.x=-e.kw*.34+e.kc*.38-e.kj*.25+e.kmv*.1,i.rotation.z=Math.sin(re*46)*.035*e.kw+Math.sin(re*38)*.07*e.ks+Math.sin(re*5)*.05*e.kt+Math.sin(re*6.5)*.06*(e.kmv||0),i.scale.set(m,f,m),e.bm&&(e.bm.emissiveIntensity=.42+.13*(r-1)+(t.flash>0?.45:0)+e.ks*(.3+Math.abs(Math.sin(re*18))*.3)+e.kw*.2+e.kt*.22)}Cr.xalven=Cr.cyclope=Cr.scorch=(s,e)=>{Cr.garde(s,e),e.b.scale.setScalar(2.5)};function U_(s){let e=mf(s.id),t=typeof MON<"u"&&MON[s.id]||{};Qc(gf(s.id)),Qc("m_"+e);let n=new Pt,i=n.userData;return i.tint=t.tint,nl(n,s.r*.95),(Cr[e]||Cr.larve)(n,i),t.sc&&i.b&&i.b.scale.multiplyScalar(t.sc),i.med=s.med?.72:1,i.med<1&&i.b&&!an["m_"+e]&&i.b.scale.multiplyScalar(.72),i.born=0,i.rot=0,i.punch=0,n.scale.setScalar(.01),xt.add(n),Ps.add(n),n}function Zi(s,e){let t=[];for(let n=0;n<s;n++){let i=e(n);i.visible=!1,xt.add(i),t.push(i)}return t}var lf,op,hf,cp,ff,Lr,el,ai=[],O_=[be,Dt,be,new un(1,.34,8,18),new Dn(1,1,1,4),at,Ye],Jc={};function k_(){try{["kaelion","elyra","aria","vesper","brakkor","nyxara"].forEach((e,t)=>{if(typeof HEROES<"u"&&HEROES[e]&&(Jc[HEROES[e].col]=t+1),typeof SKINS<"u"&&SKINS[e]&&(Jc["#"+SKINS[e].pal.acc.toString(16).padStart(6,"0")]=t+1),typeof SKX<"u"&&SKX[e])for(let n of SKX[e])Jc["#"+n.acc.toString(16).padStart(6,"0")]=t+1})}catch{}}function Ds(s,e,t,n,i,r=260){for(let a=0;a<i;a++){if(ai.length>=Lr.length)return;let o=Math.random()*6.283,l=r*(.4+Math.random()*.8);ai.push({x:s,y:t,z:e,vx:Math.cos(o)*l,vy:180+Math.random()*320,vz:Math.sin(o)*l,t:.5+Math.random()*.3,col:n,s:6+Math.random()*9})}}var Nr=[{ov:["rune","#d58bff",.012,.006,.5],fam:"arc",fl:["#8a62e0","#5b38b4","#3d2390","#27135e"],tile:"255,220,255",vein:"213,139,255",ring:"255,212,94",dark:"24,8,56",side:2757720,stone:4861080,stone2:6242232,gold:16763210,cry:[11561983,8050943],isl:[3809152,5911984,6965456],sky:["#4a2a9a","#1a0a3c"],hemi:[15128831,3807856],sun:16770752,cols:1,ban:6957776,props:[["crystal",16,.5,1.1,13081599,1],["crystal",10,.4,.8,9429247,1],["rock",8,.5,.9,10127064]]},{ov:["leaf","#d8ff9a",.02,.008,.55],fam:"nat",fl:["#9be07a","#5fb84e","#3a8a3e","#1f5a34"],tile:"230,255,200",vein:"190,255,150",ring:"255,236,150",dark:"20,50,30",side:2771498,stone:6969914,stone2:9075274,gold:16767082,cry:[10157946,16769146],isl:[3107386,4164170,6998106],sky:["#7ad0ff","#2a7a5a"],hemi:[15794144,2775610],sun:16773824,props:[["tree",16,.9,1.5,0,2],["pine",8,.9,1.4,0,2],["bush",16,.7,1.2],["mushroom",10,.6,1.1],["rock",8,.5,1]]},{ov:["sand","#fff2c0",.05,.012,.5],fam:"nat",fl:["#ffe0a0","#eebc6a","#d49648","#a86a30"],tile:"255,245,210",vein:"255,200,120",ring:"255,255,220",dark:"110,60,24",side:10117680,stone:13146714,stone2:14727288,gold:16773296,cry:[16766046,5953791],isl:[11565626,13145162,15253624],sky:["#ffc46a","#e8743a"],hemi:[16774360,10115626],sun:16777215,props:[["cactus",14,.8,1.4,0,2],["palm",9,1,1.5,0,2],["sandrock",14,.6,1.3],["pillarb",6,.8,1.1,15255696],["pillar",4,.8,1,15255696,2],["bones",7,.7,1.2]]},{ov:["spark","#ffffff",.01,.02,.7],fam:"mar",fl:["#e8f8ff","#a8dcf8","#6aaee0","#3a6aa8"],tile:"255,255,255",vein:"200,240,255",ring:"255,255,255",dark:"30,60,110",side:3828378,stone:8038608,stone2:11063536,gold:15268095,cry:[12577023,16777215],isl:[5933760,9091296,15792895],sky:["#bfe4ff","#4a7ac0"],hemi:[16777215,5933768],sun:15267071,props:[["pinesnow",16,.9,1.5,0,2],["icespike",16,.6,1.3,0,1],["snowrock",12,.6,1.1],["snowbush",12,.7,1.1],["icewall",12,.7,1.3,0,1]]},{ov:["lava","#ff7a1e",.008,.004,.5],fam:"feu",fl:["#7a3a2a","#4a2420","#2e1818","#180c10"],tile:"255,150,90",vein:"255,120,30",ring:"255,170,60",dark:"20,6,6",side:1707020,stone:3810344,stone2:5910576,gold:16747054,cry:[16734750,16761402],isl:[2758680,3809312,16738846],sky:["#5a1410","#1a0606"],hemi:[16763040,4853776],sun:16756848,props:[["lavarock",18,.6,1.3,0,1],["darkrock",14,.6,1.2],["deadtree",10,.9,1.4,0,2],["thorn",10,.6,1.1],["spire",14,.7,1.4,0,1]]},{ov:["spark","#7affe8",.012,-.01,.6],fam:"arc",fl:["#3ad0c8","#1a8a94","#125a70","#0a2c44"],tile:"170,255,250",vein:"120,255,240",ring:"160,255,240",dark:"6,30,44",side:666684,stone:1727082,stone2:2785424,gold:8060904,cry:[5959935,11566079],isl:[997962,1727082,3854536],sky:["#0f3a52","#04101c"],hemi:[12648440,667720],sun:10547455,props:[["crystal",22,.7,1.6,7009535,1],["crystal",12,.5,1.2,13081599,1],["glowshroom",14,.7,1.4,0,1],["darkrock",12,.6,1.2,5933722]]},{ov:["mist","#b8ffd8",.02,.006,.45],fam:"arc",fl:["#8a9a8a","#5a6a66","#3a4650","#1e2630"],tile:"220,240,230",vein:"150,255,190",ring:"190,255,210",dark:"16,22,28",side:1975856,stone:4870748,stone2:6976124,gold:11075528,cry:[9109424,11575551],isl:[2765372,3818574,5925478],sky:["#3a4a5a","#0c1016"],hemi:[13691104,1713200],sun:13164799,props:[["tomb",18,.8,1.2],["deadtree",12,.9,1.5,0,2],["lantern",10,.9,1.1,0,1],["darkrock",8,.5,1],["thorn",8,.5,1],["bones",8,.6,1],["statue",5,.9,1.2,10135728,2]]},{ov:["spark","#ffffff",.008,.014,.6],fam:"arc",fl:["#fff0f8","#ffc8e4","#f09ac8","#b86aa8"],tile:"255,255,255",vein:"255,255,255",ring:"255,224,140",dark:"120,50,100",side:12085928,stone:16051448,stone2:16777215,gold:16767082,cry:[16756956,16773280],isl:[15245520,16304356,16777215],sky:["#9ad4ff","#ffc0dc"],hemi:[16777215,15241408],sun:16773344,cols:1,ban:16747200,props:[["sakura",14,.9,1.5,0,2],["cloud",16,.8,1.6],["bush",12,.7,1.1,16763112],["pillar",6,.8,1,0,2],["statue",6,.9,1.2,0,2]]},{ov:["caustic","#aef4ff",.03,.014,.45],fam:"mar",fl:["#5ad8f0","#2a9ad8","#1a5aa8","#0c2a66"],tile:"200,250,255",vein:"140,240,255",ring:"255,240,180",dark:"8,30,70",side:797286,stone:2779802,stone2:4889288,gold:16771488,cry:[5959935,16747184],isl:[1329802,2058928,5953776],sky:["#2a8ad0","#061a44"],hemi:[14219519,801402],sun:13168895,props:[["coral",18,.8,1.5,0,1],["coralb",14,.8,1.5,0,1],["seaweed",20,.8,1.6],["shell",12,.7,1.3],["searock",14,.6,1.3]]},{floor:"nebula",ov:["spark","#ffd8f4",.006,.01,.5],fam:"arc",fl:["#1a1030","#120a24","#0a0618","#05030c"],tile:"200,200,255",vein:"255,140,220",ring:"200,160,255",dark:"8,4,20",side:1313324,stone:3810416,stone2:5913248,gold:16751328,cry:[16743128,8050943],isl:[1707062,2757720,5911984],sky:["#3a1466","#05020c"],hemi:[15784191,1706556],sun:16769268,props:[["crystal",18,.6,1.4,16747224,1],["crystal",14,.5,1.1,9099519,1],["rock",8,.5,.9,6965936]]},{floor:"solar",ov:["spark","#fff2c0",.004,.006,.4],fam:"arc",fl:["#1a1030","#120a24","#0a0618","#05030c"],tile:"200,200,255",vein:"255,200,120",ring:"255,220,150",dark:"6,6,20",side:790576,stone:2765926,stone2:4214924,gold:16766046,cry:[16766046,8050943],isl:[790576,1712720,4214924],sky:["#0f1c4a","#02030a"],hemi:[16773328,791096],sun:16773320,props:[["rock",14,.5,1.1,9080752],["crystal",10,.5,1,16766046,1],["darkrock",10,.5,1]]},{floor:"moon",fam:"arc",fl:["#8a8d98","#6a6d7a","#4a4d5a","#2e3040"],tile:"230,230,240",vein:"200,210,255",ring:"220,225,240",dark:"20,22,32",side:3027008,stone:6974842,stone2:9080216,gold:14673663,cry:[12577023,16777215],isl:[3816778,5922154,9080216],sky:["#0a1030","#000004"],hemi:[16777215,2763834],sun:16777215,props:[["rock",20,.6,1.4,10132904],["darkrock",14,.6,1.3,8027528],["sandrock",12,.6,1.2,11054006],["spire",8,.6,1.1,9080216]]},{floor:"mars",ov:["sand","#ffd0a0",.04,.012,.3],fam:"feu",fl:["#c8663a","#9a4426","#6e2e1a","#421a10"],tile:"255,200,160",vein:"255,150,90",ring:"255,200,140",dark:"50,16,8",side:4332048,stone:9061416,stone2:11033142,gold:16756848,cry:[16747082,16766046],isl:[5907476,8009246,12083770],sky:["#e8946a","#5a2416"],hemi:[16769224,4856848],sun:16769728,props:[["sandrock",20,.7,1.5,12083770],["rock",14,.6,1.2,10111530],["spire",12,.7,1.4,9059362],["bones",6,.7,1.1]]},{floor:"rings",ov:["spark","#fff0d0",.004,.008,.4],fam:"arc",fl:["#1a1030","#120a24","#0a0618","#05030c"],tile:"200,200,255",vein:"255,220,160",ring:"255,230,170",dark:"8,6,16",side:1709096,stone:6969928,stone2:9075296,gold:16769184,cry:[16769184,12572927],isl:[1709096,3813440,9075296],sky:["#241a3c","#030208"],hemi:[16773336,1709104],sun:16773336,props:[["rock",18,.4,1,12101768],["crystal",10,.5,1,16769184,1],["darkrock",12,.4,.9,8022616]]},{floor:"hole",ov:["spark","#ffb060",.01,-.012,.45],fam:"arc",fl:["#1a1030","#120a24","#0a0618","#05030c"],tile:"200,200,255",vein:"255,150,60",ring:"255,190,110",dark:"4,2,8",side:787986,stone:3808304,stone2:5909056,gold:16751162,cry:[16747054,11566079],isl:[787986,2756644,5909056],sky:["#2a0a2c","#000000"],hemi:[16767152,1706016],sun:16763024,props:[["darkrock",16,.6,1.3],["spire",14,.7,1.5,3808304,1],["crystal",10,.5,1.1,16747054,1]]},{floor:"station",fam:"arc",fl:["#2a3246","#1e2536","#151b28","#0c111a"],tile:"160,190,240",vein:"90,240,255",ring:"120,220,255",dark:"8,12,20",side:790810,stone:2766416,stone2:3951726,gold:5959935,cry:[5959935,16766046],isl:[790810,1975606,3951726],sky:["#0c1c3a","#010206"],hemi:[14216447,791588],sun:14216447,props:[["pillar",12,.8,1.1,4873344,2],["pillarb",10,.8,1.1,3951726],["lantern",14,.9,1.2,0,1],["statue",4,.9,1.1,5926032,2]]},{floor:"comet",ov:["spark","#ffffff",.008,.016,.55],fam:"mar",fl:["#3a9ac8","#1f6a9a","#124270","#081f40"],tile:"220,245,255",vein:"170,235,255",ring:"200,245,255",dark:"6,20,44",side:532288,stone:2779802,stone2:4889288,gold:12578559,cry:[12578559,16777215],isl:[797264,2054794,9097456],sky:["#12406a","#020814"],hemi:[15268095,797264],sun:14742783,props:[["icespike",20,.7,1.5,0,1],["icewall",12,.7,1.3,0,1],["snowrock",12,.6,1.2],["crystal",10,.5,1.2,12578559,1]]}],bf=[],B_=new gs(1,1),Fa=null;function z_(){if(!Fa){Fa=new _s().load("img/vfx.webp?v="+(typeof BUILD<"u"?BUILD:0)),Fa.colorSpace=St;for(let s=0;s<64;s++){let e=Fa.clone();e.repeat.set(.25,.25);let t=new $e(B_,new tt({map:e,color:16777215,transparent:!0,depthWrite:!1,depthTest:!1,blending:$t,side:Lt}));t.visible=!1,t.renderOrder=6,xt.add(t),bf.push({m:t,tx:e,t:0})}}}function _n(s,e,t,n,i,r,a,o,l,c,f,m,d){let u=null;for(let g of bf)if(g.t<=0){u=g;break}u&&(u.t=u.max=o,u.d=f||0,u.x=e,u.y=n,u.z=t,u.s0=i,u.s1=r,u.flat=l,u.spin=c||0,u.rise=m||0,u.op=d||1,u.a=Math.random()*6.283,u.tx.offset.set(s%4*.25,.75-(s/4|0)*.25),u.m.material.color.set(a))}function G_(s,e){let t=s.r,n=s.col,i=s.x,r=s.y,a=s.max;if(t<75){e||_n(5,i,r,46,t*.9,t*2.6,n,Math.max(.2,a),0,3);return}if(t<210){_n(4,i,r,52,t*.5,t*1.9,n,.26,0,2),_n(0,i,r,6,t*.6,t*2.3,n,Math.max(.3,a),1),e||_n(7,i,r,50,t*.5,t*1.3,"#ffffff",.2,0,1,0,0,.7);return}if(_n(2,i,r,6,t*.9,t*2.05,n,Math.max(.45,a*1.2),1,1.6,0,0,.8),_n(1,i,r,7,t*.4,t*2.3,n,Math.max(.4,a),1,0,0,0,.45),_n(4,i,r,70,t*.4,Math.min(480,t*.9),"#ffffff",.2,0,2,0,0,.4),!e)if(_n(3,i,r,8,t*.8,t*1.7,n,Math.max(.5,a*1.3),1,-5,0,0,.7),t>=450){_n(9,i,r,9,t*.5,t*2.4,n,a*1.5+.3,1,.6,.05,0,.55);for(let o=0;o<4;o++){let l=Math.random()*6.283,c=t*(.25+Math.random()*.45);_n(10,i+Math.cos(l)*c,r+Math.sin(l)*c,90,t*.3,t*.55,n,.22,0,0,o*.05)}}else for(let o=0;o<3;o++){let l=Math.random()*6.283,c=t*(.2+Math.random()*.4);_n(7,i+Math.cos(l)*c,r+Math.sin(l)*c,50,t*.2,t*.6,n,.3,0,1,o*.04)}}function H_(s,e){_n(11,s.x,s.y,s.r*1.3,s.r*2.2,s.r*3.6,s.col,Math.max(.35,s.max*.6),0,0,0,s.h*.35),_n(0,s.x,s.y,6,s.r*1.5,s.r*4.2,s.col,Math.max(.35,s.max*.5),1),e||_n(8,s.x,s.y,40,s.r*1.5,s.r*3.4,s.col,s.max*.9,0,.8,.08,60,.4)}function V_(s){if(!Fa)return;let e=typeof S<"u"&&S.set.gfx===0,t=0;for(let n of G.fx)n._v||(n._v=1,n.t>n.max*.6&&t++<6&&G_(n,e));t=0;for(let n of G.pil)n._v||(n._v=1,n.t>n.max*.6&&t++<4&&H_(n,e));for(let n of bf){let i=n.m;if(n.t<=0){i.visible&&(i.visible=!1);continue}if(n.d>0){n.d-=s,i.visible=!1;continue}if(n.t-=s,n.t<=0){i.visible=!1;continue}let r=1-n.t/n.max,a=1-(1-r)*(1-r)*(1-r),o=n.s0+(n.s1-n.s0)*a;n.y+=n.rise*s,n.a+=n.spin*s,i.visible=!0,i.position.set(n.x,n.y,n.z),i.scale.set(o,o,1),n.flat?i.rotation.set(-Math.PI/2,0,n.a):(i.quaternion.copy(Tn.quaternion),i.rotateZ(n.a)),i.material.opacity=n.op*Math.min(1,r*12)*(1-r)*(1-r*.4)*1.5}}var tl=[],Ba=null,rn=0,za=null,lp=null,Yd={},Zd={},$d={},Fr={},Ha=[];bt.fam=()=>(Nr[rn]||{}).fam||"arc";function W_(){try{let s=new _r;s.setMeshoptDecoder(Hc),s.load("mdl/props.glb?v="+(typeof BUILD<"u"?BUILD:0),e=>{Ba={},e.scene.updateMatrixWorld(!0),e.scene.traverse(t=>{t.isMesh&&(t.geometry.userData.shared=1,Ba[t.name]={g:t.geometry,m:t.matrixWorld.clone()})}),Er&&hp(Er,df,Nr[rn])},void 0,()=>{})}catch{}}function Qd(s,e){let t=s+"|"+e;return $d[t]||($d[t]=new vi({vertexColors:!0,gradientMap:Di,color:s||16777215,emissive:e?s||16777215:0,emissiveIntensity:e?.45:0}))}function hp(s,e,t){if(!Ba||s.userData.props)return;let n=s.userData.props=rt(s),i=12345+rn*977,r=()=>(i=i*16807%2147483647)/2147483647;for(let[f,m,d,u,g,b]of t.props){let h=Ba[f];if(!h)continue;let p=Math.round(m*1.6);for(let _=0;_<p;_++){let T=r()*6.283,w=Math.cos(T)*Qi.x+Math.sin(T)*Qi.z;if(b===2&&w>.15)continue;let v=f==="cloud",y=v?e+220+r()*700:e+58+r()*62,x=(d+r()*(u-d))*(w>.15?.7:1),M=new Pt,C=new $e(h.g,Qd(g||0,b===1));C.matrixAutoUpdate=!1,C.matrix.copy(h.m),M.add(C),M.position.set(Math.cos(T)*y,v?-200+r()*380:0,Math.sin(T)*y),M.scale.setScalar(x*(v?2.2:1)),M.rotation.y=r()*6.283,n.add(M),v&&oi.push({o:M,y:M.position.y,ph:_*1.3,sp:.4,rot:0,amp:14})}}let a=_f[rn],o=typeof S<"u"&&S.set.gfx===0;if(!a||a.y<=-170)return;let l=new vt,c=new Ge;for(let[f,m,d,u,g,b]of t.props){let h=Ba[f];if(!h||f==="cloud")continue;let p=Math.round(m*(o?1.2:2.6)),_=new Wi(h.g,Qd(g||0,b===1),p),T=0;for(let w=0;w<p*6&&T<p;w++){let v=r()*6.283,y=Math.cos(v)*Qi.x+Math.sin(v)*Qi.z,x=y>.1,M=x?e+330+r()*420:e+250+r()*r()*1250,C=(M-e)/1300,R=(d+r()*(u-d))*(x?.8:1+C*1.1);b===2&&x||(l.position.set(Math.cos(v)*M,a.y,Math.sin(v)*M),l.scale.setScalar(R),l.rotation.set(0,r()*6.283,0),l.updateMatrix(),c.multiplyMatrices(l.matrix,h.m),_.setMatrixAt(T++,c))}_.count=T,_.instanceMatrix.needsUpdate=!0,_.frustumCulled=!1,n.add(_)}}function xf(s,e){let n=document.createElement("canvas");n.width=n.height=512;let i=n.getContext("2d"),r=s.length*7919+13,a=()=>(r=r*16807%2147483647)/2147483647;i.strokeStyle=i.fillStyle=e,i.lineCap="round",i.lineJoin="round";let o=c=>{for(let f of[-512,0,512])for(let m of[-512,0,512])i.save(),i.translate(f,m),c(),i.restore()};if(s==="caustic")for(let c=0;c<26;c++){let f=a()*512,m=a()*512,d=26+a()*60,u=7,g=[];for(let b=0;b<u;b++){let h=b/u*6.283,p=d*(.6+a()*.7);g.push([f+Math.cos(h)*p,m+Math.sin(h)*p])}o(()=>{i.beginPath(),g.forEach((b,h)=>{let p=g[(h+1)%u],_=g[(h+2)%u];h||i.moveTo((b[0]+p[0])/2,(b[1]+p[1])/2),i.quadraticCurveTo(p[0],p[1],(p[0]+_[0])/2,(p[1]+_[1])/2)}),i.globalAlpha=.5,i.lineWidth=5,i.stroke(),i.globalAlpha=.9,i.lineWidth=1.6,i.stroke()})}else if(s==="lava")for(let c=0;c<16;c++){let f=a()*512,m=a()*512,d=a()*6.283,u=[[f,m]];for(let g=0;g<9;g++)d+=(a()-.5)*1.5,f+=Math.cos(d)*34,m+=Math.sin(d)*34,u.push([f,m]);o(()=>{i.beginPath(),u.forEach((g,b)=>b?i.lineTo(g[0],g[1]):i.moveTo(g[0],g[1])),i.globalAlpha=.35,i.lineWidth=12,i.stroke(),i.globalAlpha=1,i.lineWidth=3.5,i.stroke()})}else if(s==="spark"||s==="rune")for(let c=0;c<70;c++){let f=a()*512,m=a()*512,d=2+a()*(s==="rune"?9:6),u=.35+a()*.6;o(()=>{i.globalAlpha=u,i.beginPath();for(let g=0;g<8;g++){let b=g*.785,h=g%2?d*.32:d;i.lineTo(f+Math.cos(b)*h,m+Math.sin(b)*h)}i.fill()})}else if(s==="leaf")for(let c=0;c<46;c++){let f=a()*512,m=a()*512,d=a()*6.283,u=5+a()*7,g=.5+a()*.4;o(()=>{i.globalAlpha=g,i.save(),i.translate(f,m),i.rotate(d),i.beginPath(),i.ellipse(0,0,u,u*.42,0,0,7),i.fill(),i.restore()})}else if(s==="sand")for(let c=0;c<60;c++){let f=a()*512,m=a()*512,d=30+a()*90,u=.2+a()*.4,g=1+a()*2,b=(a()-.5)*16;o(()=>{i.globalAlpha=u,i.lineWidth=g,i.beginPath(),i.moveTo(f,m),i.quadraticCurveTo(f+d/2,m+b,f+d,m),i.stroke()})}else for(let c=0;c<22;c++){let f=a()*512,m=a()*512,d=40+a()*70;o(()=>{let u=i.createRadialGradient(f,m,0,f,m,d);u.addColorStop(0,e),u.addColorStop(1,"rgba(0,0,0,0)"),i.globalAlpha=.35,i.fillStyle=u,i.fillRect(f-d,m-d,d*2,d*2)})}let l=new Ln(n);return l.wrapS=l.wrapT=Gn,l.colorSpace=St,l}var _f=[{y:-230,c:["#3a1c7a","#22104e","#0c0620"],ov:["spark","#e9d8ff",.004,.006,.9,1],mt:2757984,dot:["#b890ff","#ffd45e"]},{y:-8,c:["#4fae40","#2f8636","#1c5a3c"],ov:["leaf","#bfe86a",.006,.003,.5,0],mt:2779722,dot:["#ffe07a","#ff8ab0","#ffffff"]},{y:-8,c:["#f0c468","#d9a04c","#b87a3c"],ov:["sand","#fff0c0",.02,.004,.5,0],mt:12618314,dot:["#c88a3a","#fff2c0"]},{y:-8,c:["#f2faff","#c8e2f8","#8ab4e2"],ov:["spark","#ffffff",.006,.01,.7,1],mt:10141928,dot:["#ffffff","#bfe8ff"]},{y:-14,c:["#4a1a12","#2e100c","#160606"],ov:["lava","#ff7a1e",.01,.006,.85,1],mt:2757136,dot:["#ff7a1e","#ffc23a"]},{y:-8,c:["#156070","#0c3c4e","#061e2e"],ov:["spark","#7affe8",.008,-.006,.7,1],mt:1001046,dot:["#7affe8","#c79bff"]},{y:-8,c:["#46544c","#2e3a40","#161c26"],ov:["mist","#b8ffd8",.018,.006,.55,0],mt:2765886,dot:["#8affb0","#9aa8b0"]},{y:-170,c:["#fff4fb","#ffd2ea","#f0a6d2"],ov:["mist","#ffffff",.02,.008,.8,0],mt:16038108,dot:["#ffffff","#fff0a0"]},{y:-10,c:["#2a8ad8","#17569c","#0a2a60"],ov:["caustic","#aef4ff",.02,.012,.55,1],mt:1198730,dot:["#5af0ff","#ff8ab0"]},{y:-260,c:["#2a0f4a","#150828","#05020c"],ov:["spark","#ffd0f0",.004,.006,.9,1],mt:1706548,dot:["#ff8ad8","#8ad8ff"]},{y:-260,c:["#101c4a","#080e28","#02030a"],ov:["spark","#fff2c0",.003,.005,.9,1],mt:791088,dot:["#ffd45e","#ffffff"]},{y:-8,c:["#7a7d88","#55586a","#2e3040"],mt:4869466,dot:["#ffffff","#9aa0b0"]},{y:-8,c:["#b8623a","#8a4022","#4a1c10"],ov:["sand","#ffd0a0",.02,.006,.4,0],mt:8010274,dot:["#ffb070","#5a2414"]},{y:-260,c:["#241a3c","#120c20","#030208"],ov:["spark","#fff0d0",.003,.006,.9,1],mt:1709096,dot:["#ffe0a0","#bfd8ff"]},{y:-260,c:["#2a0a2c","#120414","#000000"],ov:["spark","#ffb060",.006,-.008,.9,1],mt:1706016,dot:["#ff9a3a","#b07bff"]},{y:-260,c:["#0c1c3a","#060c1c","#010206"],ov:["spark","#bfe8ff",.003,.005,.8,1],mt:791588,dot:["#5af0ff","#ffffff"]},{y:-8,c:["#6ab8e0","#2f7ab0","#123a6a"],ov:["spark","#ffffff",.006,.01,.7,1],mt:3832496,dot:["#ffffff","#bfeeff"]}],ep={};function q_(s,e){let t=_f[s],n=1024,i=document.createElement("canvas");i.width=i.height=n;let r=i.getContext("2d"),a=n/2,o=4242+s*131,l=()=>(o=o*16807%2147483647)/2147483647,c=r.createRadialGradient(a,a,a*.5,a,a,a);c.addColorStop(0,t.c[0]),c.addColorStop(.3,t.c[1]),c.addColorStop(.72,t.c[2]),c.addColorStop(1,e.sky[1]),r.fillStyle=c,r.fillRect(0,0,n,n);for(let m=0;m<260;m++){let d=l()*6.283,u=a*(.5+l()*.46),g=a+Math.cos(d)*u,b=a+Math.sin(d)*u,h=10+l()*46,p=r.createRadialGradient(g,b,0,g,b,h);p.addColorStop(0,l()<.5?"rgba(255,255,255,.10)":"rgba(0,0,0,.14)"),p.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=p,r.fillRect(g-h,b-h,h*2,h*2)}for(let m=0;m<900;m++){let d=l()*6.283,u=a*(.51+l()*.34),g=a+Math.cos(d)*u,b=a+Math.sin(d)*u;r.globalAlpha=.35+l()*.5,r.fillStyle=t.dot[l()*t.dot.length|0],r.beginPath(),r.arc(g,b,.8+l()*1.8,0,7),r.fill()}r.globalAlpha=1;for(let m=0;m<5;m++)r.strokeStyle="rgba(255,255,255,.07)",r.lineWidth=2+m,r.beginPath(),r.arc(a,a,a*(.53+m*.035),0,7),r.stroke();let f=new Ln(i);return f.colorSpace=St,f.anisotropy=4,f}function X_(s,e,t,n){let i=_f[rn];if(!i)return;if(i.y<=-170)return J_(s,e,t,n,i);let r=e+118,a=(e+118)*2,o=ep[rn]||(ep[rn]=q_(rn,t)),l=new $e(new bs(r*1,a,72,1),new tt({map:o}));if(l.rotation.x=-Math.PI/2,l.position.y=i.y,s.add(l),N(s,new Dn(r+6,r+30,Math.abs(i.y)+40,56,1,!0),we(t.side),[0,i.y/2-18,0]),i.ov&&!n){let[p,_,T,w,v,y]=i.ov,x="o"+p+_,M=Fr[x]||(Fr[x]=xf(p,_));M.repeat.set(9,9);let C=new tt({map:M,transparent:!0,opacity:v,depthWrite:!1,blending:y?$t:Ri}),R=new $e(new bs(r,a,72,1),C);R.rotation.x=-Math.PI/2,R.position.y=i.y+1.5,s.add(R),Ha.push({tex:M,m:C,vx:T,vy:w,op:v,pf:1.1})}let c=new yi(1,1,6,1),f=we(i.mt),m=n?14:30,d=new Wi(c,f,m),u=new vt,g=77+rn*31,b=0,h=()=>(g=g*16807%2147483647)/2147483647;for(let p=0;p<400&&b<m;p++){let _=h()*6.283;if(Math.cos(_)*Qi.x+Math.sin(_)*Qi.z>-.05)continue;let w=e+1150+h()*950,v=380+h()*760;u.position.set(Math.cos(_)*w,i.y+v/2-20,Math.sin(_)*w),u.scale.set(260+h()*340,v,260+h()*340),u.rotation.set(0,h()*6.283,0),u.updateMatrix(),d.setMatrixAt(b++,u.matrix)}d.count=b,d.instanceMatrix.needsUpdate=!0,d.frustumCulled=!1,s.add(d)}function j_(s,e,t,n){if(Ha.length=0,!t.ov)return;let[i,r,a,o,l]=t.ov,c=i!=="leaf"&&i!=="sand"&&i!=="mist";for(let f=0;f<(n?1:2);f++){let m=i+r+f,d=Fr[m]||(Fr[m]=xf(i,r));d.repeat.set(f?3.2:4.6,f?3.2:4.6);let u=new tt({map:d,transparent:!0,opacity:l*.55,depthWrite:!1,blending:c?$t:Ri}),g=new $e(new ji(e+44,56),u);g.rotation.x=-Math.PI/2,g.rotation.z=f*1.1,g.position.y=2.5+f*.6,g.renderOrder=1,s.add(g),Ha.push({tex:d,m:u,vx:a*(f?-.7:1),vy:o*(f?1.3:1),op:l*.55*(f?.6:1),pf:1.3+f*.9})}}function K_(s,e,t){let i=e+34,r=6.283*i/56*.9,a=we(t.stone),o=we(t.stone2),l=we(t.gold);for(let c=0;c<56;c++){let f=c/56*6.283,m=Math.cos(f)*Qi.x+Math.sin(f)*Qi.z,d=(c%2?44:64)*(m>.2?.55:1),u=rt(s,[Math.cos(f)*i,0,Math.sin(f)*i]);if(u.rotation.y=-f+Math.PI/2,yf.push({g:u,i:c}),N(u,at,c%2?a:o,[0,d/2,0],[r,d,40]),c%2===0&&N(u,at,l,[0,d+4,0],[r*.86,8,46]),c%7===0&&m<.2){let g=N(u,Dt,De(t.cry[c%2]),[0,d+44,0],[13,24,13]);oi.push({o:g,y:d+44,ph:c,sp:1.8,rot:1.4,amp:6})}}for(let c=0;c<26;c++){let f=N(s,Dt,De(t.cry[c%2],.95),[0,0,0],[9,15,9]);N(f,Dt,De(t.cry[c%2],.22),[0,0,0],2.2),vf.push({o:f,a:c/26*6.283,R:i+2,dir:c%2?1:-1})}if(!wr){let c=document.createElement("canvas");c.width=256,c.height=128;let f=c.getContext("2d");for(let d=0;d<40;d++){let u=Math.random()*256,g=2+Math.random()*10,b=f.createLinearGradient(0,128,0,88-Math.random()*88);b.addColorStop(0,"rgba(255,255,255,"+(.25+Math.random()*.5).toFixed(2)+")"),b.addColorStop(1,"rgba(255,255,255,0)"),f.fillStyle=b,f.fillRect(u,0,g,128)}let m=f.createLinearGradient(0,128,0,60);m.addColorStop(0,"rgba(255,255,255,.5)"),m.addColorStop(1,"rgba(255,255,255,0)"),f.fillStyle=m,f.fillRect(0,0,256,128),wr=new Ln(c),wr.wrapS=Gn,wr.repeat.set(6,1)}Dr=new $e(new Dn(e+58,e+58,260,64,1,!0),new tt({map:wr,color:t.gold,transparent:!0,opacity:.4,depthWrite:!1,blending:$t,side:jt})),Dr.position.y=130,s.add(Dr)}var Dr=null,wr=null,yf=[],vf=[],Ga=[];function J_(s,e,t,n,i){let r=(m,d)=>new _e(m).multiplyScalar(d).getHex();N(s,new yi(e-230,1100,9),we(r(t.side,.55)),[0,-1050,0],void 0,[Math.PI,.4,0]),N(s,new yi(e-420,1500,7),we(r(t.side,.28)),[0,-1700,0],void 0,[Math.PI,.9,0]),[[e+80,-260,.5],[e-30,-640,.32],[e-190,-1100,.2],[e-380,-1650,.12]].forEach(([m,d,u],g)=>{let b=N(s,new un(m,6-g,6,64),De(t.cry[g%2],u),[0,d,0],void 0,[Math.PI/2,0,0]);oi.push({o:b,y:d,ph:g*1.7,sp:.7,rot:0,amp:18})});let a=(m,d,u,g,b,h,p,_,T)=>{let w=rt(s);for(let v=0;v<m;v++){let y=Math.random()*6.283,x=g+Math.random()*(b-g),M=h+Math.random()*(p-h),C=d+Math.random()*(u-d),R=N(w,Zc,we(r(t.isl[v%2],_)),[Math.cos(y)*x,C,Math.sin(y)*x],[M,M*(.5+Math.random()*.5),M],[Math.random()*.5,Math.random()*6,Math.random()*.4]);_>.6&&N(R,ut,we(r(t.isl[2],_)),[0,.6,0],[.8,.16,.8]),v%3===0&&N(R,Dt,De(t.cry[v%2],_),[0,1.15,0],[.2,.55,.2]),oi.push({o:R,y:C,ph:v*1.3,sp:.35+Math.random()*.3,rot:.08,amp:16+Math.random()*20})}Ga.push({o:w,pf:T})};a(n?8:14,-520,-120,e+240,e+1200,70,170,1,.9),a(n?8:16,-1500,-800,e+100,e+1700,60,150,.5,.68),a(n?6:18,-3e3,-1900,e-200,e+2200,50,130,.22,.45);let o=document.createElement("canvas");o.width=o.height=256;let l=o.getContext("2d"),c=l.createRadialGradient(128,128,0,128,128,128);c.addColorStop(0,i.c[0]),c.addColorStop(.45,i.c[1]),c.addColorStop(1,"rgba(0,0,0,0)"),l.fillStyle=c,l.fillRect(0,0,256,256);let f=new $e(new ji(3400,40),new tt({map:new Ln(o),transparent:!0,opacity:.9,depthWrite:!1}));f.rotation.x=-Math.PI/2,f.position.y=-3600,s.add(f),Ga.push({o:f,pf:.3}),[[-2700,9,.95,.4],[-4200,15,.7,.16]].forEach(([m,d,u,g],b)=>{let h="vs"+b+i.dot[0],p=Fr[h]||(Fr[h]=xf("spark",b?"#ffffff":i.dot[0]));p.repeat.set(d,d);let _=new tt({map:p,transparent:!0,opacity:u,depthWrite:!1,blending:$t}),T=new $e(new ji(7e3,32),_);T.rotation.x=-Math.PI/2,T.position.y=m,s.add(T),Ga.push({o:T,pf:g}),Ha.push({tex:p,m:_,vx:.0015*(b?-1:1),vy:.001,op:u,pf:.6+b*.5})})}function Y_(s){let e=document.createElement("canvas");e.width=4,e.height=256;let t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,256);n.addColorStop(0,s.sky[0]),n.addColorStop(1,s.sky[1]),t.fillStyle=n,t.fillRect(0,0,4,256);let i=new Ln(e);return i.colorSpace=St,i}function Z_(s,e,t,n,i){let r=991+e*7717,a=()=>(r=r*16807%2147483647)/2147483647,o=6.283,l=t>1024?1:.55,c=()=>{let u=a()*o,g=Math.sqrt(a())*480*n;return[i+Math.cos(u)*g,i+Math.sin(u)*g]},f=(u,g,b,h)=>{s.fillStyle=h,s.beginPath(),s.arc(u,g,b,0,o),s.fill()},m=(u,g,b,h,p,_,T)=>{s.strokeStyle=_,s.lineWidth=p,s.beginPath(),s.moveTo(u,g);let w=0;for(;h>0&&w++<40;){let v=(10+a()*20)*n;b+=(a()-.5)*.9,u+=Math.cos(b)*v,g+=Math.sin(b)*v,s.lineTo(u,g),h-=v,T>0&&a()<.2&&(s.stroke(),m(u,g,b+(a()>.5?1:-1)*(.5+a()*.6),h*.5,p*.7,_,T-1),s.strokeStyle=_,s.lineWidth=p,s.beginPath(),s.moveTo(u,g))}s.stroke()},d=(u,g,b)=>{s.globalAlpha=b;for(let h=0;h<44;h++){s.strokeStyle=h%2?u:g,s.lineWidth=(3+a()*4)*n,s.beginPath();let p=h*24*n,_=a()*6;for(let T=0;T<=t;T+=24*n)s.lineTo(T,p+Math.sin(T*.007/n+_)*14*n+Math.sin(T*.019/n+h)*5*n);s.stroke()}s.globalAlpha=1};if(s.save(),s.lineCap="round",s.lineJoin="round",e===0)for(let u=0;u<90*l;u++){let[g,b]=c(),h=(3+a()*7)*n;s.globalAlpha=.25+a()*.35,s.fillStyle=a()>.5?"#ffe9a8":"#e9d8ff",s.beginPath();for(let p=0;p<8;p++){let _=p%2?h*.3:h,T=p*Math.PI/4;s.lineTo(g+Math.cos(T)*_,b+Math.sin(T)*_)}s.fill()}else if(e===1){for(let u=0;u<1500*l;u++){let[g,b]=c(),h=-1.57+(a()-.5)*1.2,p=(5+a()*9)*n;s.globalAlpha=.28,s.strokeStyle=a()>.5?"#c8ff9a":"#14401f",s.lineWidth=1.8*n,s.beginPath(),s.moveTo(g,b),s.lineTo(g+Math.cos(h)*p,b+Math.sin(h)*p),s.stroke()}for(let u=0;u<90*l;u++){let[g,b]=c(),h=a()*o;s.globalAlpha=.45,s.fillStyle=["#e8a23a","#ffd45e","#c85a2a"][a()*3|0],s.beginPath(),s.ellipse(g,b,7*n,3.2*n,h,0,o),s.fill()}for(let u=0;u<70*l;u++){let[g,b]=c(),h=["#ffffff","#ff9ac8","#ffe07a","#b8a0ff"][a()*4|0];s.globalAlpha=.7;for(let p=0;p<5;p++)f(g+Math.cos(p*1.257)*4*n,b+Math.sin(p*1.257)*4*n,2.6*n,h);f(g,b,2*n,"#ffd45e")}s.globalAlpha=.5;for(let u=0;u<44;u++){let g=u/44*o+a()*.08,b=(296+a()*16)*n;s.fillStyle="#8a8f7a",s.beginPath(),s.ellipse(i+Math.cos(g)*b,i+Math.sin(g)*b,(11+a()*5)*n,(8+a()*4)*n,g,0,o),s.fill()}}else if(e===2){d("#fff4d0","#7a4418",.13),s.globalAlpha=.4;for(let u=0;u<14;u++){let[g,b]=c();m(g,b,a()*o,(80+a()*150)*n,2.2*n,"#6a3a14",1)}s.globalAlpha=.5;for(let u=0;u<160*l;u++){let[g,b]=c(),h=(1.5+a()*3.5)*n;f(g+h*.5,b+h*.5,h,"#7a4a1e"),f(g,b,h,"#f0d49a")}s.globalAlpha=.22,s.strokeStyle="#fff4c0",s.lineWidth=5*n;for(let u=0;u<16;u++){let g=u/16*o;s.beginPath(),s.moveTo(i+Math.cos(g)*124*n,i+Math.sin(g)*124*n),s.lineTo(i+Math.cos(g)*(u%2?176:214)*n,i+Math.sin(g)*(u%2?176:214)*n),s.stroke()}}else if(e===3){s.globalAlpha=.09;for(let u=0;u<60;u++){let[g,b]=c(),h=3+(a()*3|0),p=a()*o,_=(30+a()*80)*n;s.fillStyle=a()>.5?"#ffffff":"#1a4a8a",s.beginPath();for(let T=0;T<h;T++){let w=p+T/h*o;s.lineTo(g+Math.cos(w)*_,b+Math.sin(w)*_)}s.fill()}s.globalAlpha=.5;for(let u=0;u<14;u++){let g=a()*o;m(i+Math.cos(g)*130*n,i+Math.sin(g)*130*n,g,340*n,(2.4+a()*2)*n,"#ffffff",2)}s.globalAlpha=.7;for(let u=0;u<220*l;u++){let[g,b]=c(),h=(1.5+a()*3)*n;s.fillStyle="#ffffff",s.fillRect(g-h,b-.5*n,h*2,n),s.fillRect(g-.5*n,b-h,n,h*2)}}else if(e===4){for(let u=0;u<20;u++){let g=a()*o,b=i+Math.cos(g)*(130+a()*300)*n,h=i+Math.sin(g)*(130+a()*300)*n,p=a()*o,_=(120+a()*220)*n,T=r;s.globalAlpha=.55,m(b,h,p,_,9*n,"#c0260a",2),r=T,s.globalAlpha=.75,m(b,h,p,_,3.4*n,"#ffb03a",2)}s.globalAlpha=.7;for(let u=0;u<180*l;u++){let[g,b]=c();f(g,b,(1+a()*2.4)*n,a()>.5?"#ffb03a":"#ff5a1e")}s.globalAlpha=.3;for(let u=0;u<80;u++){let[g,b]=c();f(g,b,(6+a()*14)*n,"#0c0406")}}else if(e===5){s.globalAlpha=.1;for(let u=0;u<90;u++){let[g,b]=c(),h=a()*o,p=(26+a()*70)*n;s.fillStyle=["#7affe8","#c79bff","#04202c"][a()*3|0],s.beginPath();for(let _=0;_<3;_++){let T=h+_*2.094+(a()-.5)*.7;s.lineTo(g+Math.cos(T)*p,b+Math.sin(T)*p)}s.fill()}for(let u=0;u<60*l;u++){let[g,b]=c(),h=a()*o,p=(10+a()*16)*n,_=p*.34;s.save(),s.translate(g,b),s.rotate(h),s.globalAlpha=.6,s.fillStyle=a()>.4?"#8afff0":"#d0a8ff",s.beginPath(),s.moveTo(0,-p),s.lineTo(_,0),s.lineTo(0,p),s.lineTo(-_,0),s.closePath(),s.fill(),s.globalAlpha=.7,s.fillStyle="#ffffff",s.beginPath(),s.moveTo(0,-p),s.lineTo(_*.3,0),s.lineTo(0,p*.3),s.closePath(),s.fill(),s.restore()}}else if(e===6){s.globalAlpha=.3,s.lineWidth=2*n;for(let u=0;u<520*l;u++){let[g,b]=c();s.strokeStyle=a()>.5?"#0a0e14":"#aab8b4",s.beginPath(),s.ellipse(g,b,(9+a()*9)*n,(7+a()*6)*n,a()*o,0,o),s.stroke()}s.globalAlpha=.2;for(let u=0;u<46;u++){let[g,b]=c();for(let h=0;h<6;h++)f(g+(a()-.5)*50*n,b+(a()-.5)*50*n,(8+a()*16)*n,"#5ad08a")}s.globalAlpha=.45;for(let u=0;u<12;u++){let[g,b]=c();m(g,b,a()*o,(70+a()*150)*n,2.4*n,"#06080c",1)}}else if(e===7){s.globalAlpha=.2;for(let u=0;u<34;u++){let[g,b]=c();for(let h=0;h<7;h++)f(g+(a()-.5)*90*n,b+(a()-.5)*40*n,(16+a()*22)*n,"#ffffff")}for(let u=0;u<300*l;u++){let[g,b]=c();s.globalAlpha=.55,s.fillStyle=a()>.5?"#ff8ac0":"#ffd0e8",s.beginPath(),s.ellipse(g,b,6*n,3*n,a()*o,0,o),s.fill()}s.globalAlpha=.3,s.strokeStyle="#ffe08a",s.lineWidth=3*n;for(let u=0;u<10;u++){let g=u/10*o;s.beginPath();for(let b=0;b<1;b+=.05){let h=(130+b*200)*n,p=g+b*1.6;s.lineTo(i+Math.cos(p)*h,i+Math.sin(p)*h)}s.stroke()}}else if(e===8){d("#c8f4ff","#04163a",.12);for(let u=0;u<30*l;u++){let[g,b]=c(),h=(9+a()*9)*n,p=a()*o;s.globalAlpha=.6,s.fillStyle=["#ff8a5a","#ff9ac8","#ffd45e"][a()*3|0],s.beginPath();for(let _=0;_<10;_++){let T=_%2?h*.42:h,w=p+_*Math.PI/5;s.lineTo(g+Math.cos(w)*T,b+Math.sin(w)*T)}s.fill()}s.globalAlpha=.4,s.lineWidth=1.6*n,s.strokeStyle="#e8fbff";for(let u=0;u<150*l;u++){let[g,b]=c();s.beginPath(),s.arc(g,b,(2+a()*6)*n,0,o),s.stroke()}s.globalAlpha=.5;for(let u=0;u<26*l;u++){let[g,b]=c(),h=(8+a()*6)*n,p=a()*o;s.fillStyle="#ffe8d0",s.beginPath(),s.moveTo(g,b),s.arc(g,b,h,p,p+2.4),s.closePath(),s.fill(),s.strokeStyle="#c89a7a",s.lineWidth=n;for(let _=0;_<5;_++){let T=p+.2+_*.5;s.beginPath(),s.moveTo(g,b),s.lineTo(g+Math.cos(T)*h,b+Math.sin(T)*h),s.stroke()}}}s.restore(),s.globalAlpha=1}var Sr=null;function fp(s,e,t,n,i){let r=t/2,a=t/1024,o=6.283,l=1234567+t,c=()=>(l=l*16807%2147483647)/2147483647;e.globalAlpha=1,e.globalCompositeOperation="soft-light";for(let d=0;d<26;d++){let u=c()*o,g=Math.sqrt(c())*470*a,b=r+Math.cos(u)*g,h=r+Math.sin(u)*g,p=(90+c()*190)*a,_=e.createRadialGradient(b,h,0,b,h,p),T=d%2?"255,255,255":"0,0,0";_.addColorStop(0,"rgba("+T+","+(.16+c()*.14)+")"),_.addColorStop(1,"rgba("+T+",0)"),e.fillStyle=_,e.fillRect(b-p,h-p,p*2,p*2)}if(!Sr){Sr=document.createElement("canvas"),Sr.width=Sr.height=256;let d=Sr.getContext("2d"),u=d.createImageData(256,256);for(let g=0;g<u.data.length;g+=4){let b=128+(Math.random()-.5)*150;u.data[g]=u.data[g+1]=u.data[g+2]=b,u.data[g+3]=255}d.putImageData(u,0,0)}if(e.globalCompositeOperation="overlay",e.globalAlpha=i?.11:.07,e.fillStyle=e.createPattern(Sr,"repeat"),e.fillRect(0,0,t,t),e.globalCompositeOperation="source-over",e.globalAlpha=1,i){let d=document.createElement("canvas");d.width=d.height=t/8;let u=d.getContext("2d");u.imageSmoothingEnabled=!0,u.drawImage(s,0,0,t/8,t/8),e.globalCompositeOperation="lighter",e.globalAlpha=.16,e.imageSmoothingEnabled=!0,e.imageSmoothingQuality="high",e.drawImage(d,0,0,t,t),e.globalCompositeOperation="source-over",e.globalAlpha=1}let f="#"+new _e(n.gold).getHexString(),m="#"+new _e(n.cry[0]).getHexString();e.strokeStyle="rgba(6,3,16,.55)",e.lineWidth=34*a,e.beginPath(),e.arc(r,r,490*a,0,o),e.stroke(),e.globalAlpha=.75,e.strokeStyle=f,e.lineWidth=2.2*a,e.beginPath(),e.arc(r,r,474*a,0,o),e.stroke(),e.beginPath(),e.arc(r,r,506*a,0,o),e.stroke();for(let d=0;d<72;d++){let u=d/72*o,g=r+Math.cos(u)*490*a,b=r+Math.sin(u)*490*a,h=d%6===0,p=(h?9:4.5)*a;e.save(),e.translate(g,b),e.rotate(u+Math.PI/4),e.globalAlpha=h?.9:.55,e.fillStyle=h?m:f,e.fillRect(-p/2,-p/2,p,p),h&&(e.globalAlpha=.9,e.strokeStyle=f,e.lineWidth=1.6*a,e.strokeRect(-p*.85,-p*.85,p*1.7,p*1.7)),e.restore()}e.globalAlpha=.28,e.strokeStyle=f,e.lineWidth=1.4*a,e.setLineDash([10*a,14*a]),e.beginPath(),e.arc(r,r,462*a,0,o),e.stroke(),e.setLineDash([]),e.globalAlpha=1}function up(s){let e=new Ln(s);return e.colorSpace=St,e.anisotropy=Ls?Math.min(8,Ls.capabilities.getMaxAnisotropy()):4,e.minFilter=bn,e.magFilter=It,e.generateMipmaps=!0,e}function $_(s,e){let t=s?2048:1024,n=document.createElement("canvas");n.width=n.height=t;let i=n.getContext("2d"),r=t/2,a=t/1024,o=e.floor,l=o.length*7919+o.charCodeAt(0)*131+7,c=()=>(l=l*16807%2147483647)/2147483647,f=6.283,m=(v,y,x,M)=>{i.fillStyle=M,i.beginPath(),i.arc(v,y,x,0,f),i.fill()},d=(v,y,x)=>{i.strokeStyle=x,i.lineWidth=y*a,i.beginPath(),i.arc(r,r,v*a,0,f),i.stroke()},u=(v,y,x,M,C)=>{let R=i.createRadialGradient(v,y,0,v,y,x);R.addColorStop(0,M),R.addColorStop(1,C||"rgba(0,0,0,0)"),i.fillStyle=R,i.fillRect(v-x,y-x,x*2,x*2)},g=()=>{i.fillStyle="#05030f",i.fillRect(0,0,t,t);for(let v=0;v<520;v++){let y=c();i.globalAlpha=.25+c()*.6,m(c()*t,c()*t,(y>.96?2.4:y>.8?1.5:.9)*a,y>.93?"#ffe0a0":y>.86?"#a8d8ff":"#ffffff")}i.globalAlpha=1},b=(v,y,x)=>{i.globalCompositeOperation="lighter";for(let M=0;M<y;M++){let C=c()*f,R=Math.sqrt(c())*470*a,I=(70+c()*170)*a,F=v[c()*v.length|0];i.globalAlpha=x*(.5+c()*.5),u(r+Math.cos(C)*R,r+Math.sin(C)*R,I,F)}i.globalAlpha=1,i.globalCompositeOperation="source-over"},h=v=>{let y=i.createRadialGradient(r,r,30*a,r,r,520*a);v.forEach((x,M)=>y.addColorStop(M/(v.length-1),x)),i.fillStyle=y,i.fillRect(0,0,t,t)},p=(v,y)=>{for(let x=0;x<v;x++)i.globalAlpha=y*c(),m(c()*t,c()*t,(1+c()*2.6)*a,c()>.5?"#ffffff":"#000000");i.globalAlpha=1},_=(v,y,x,M,C)=>{i.globalAlpha=1,m(v,y,x,M);let R=i.createRadialGradient(v+x*.25,y+x*.25,x*.1,v,y,x);R.addColorStop(0,"rgba(255,255,255,.10)"),R.addColorStop(1,"rgba(0,0,0,.22)"),i.fillStyle=R,i.beginPath(),i.arc(v,y,x,0,f),i.fill(),i.lineWidth=Math.max(1.5*a,x*.14),i.strokeStyle=C,i.beginPath(),i.arc(v,y,x,Math.PI*.95,Math.PI*1.75),i.stroke(),i.strokeStyle="rgba(0,0,0,.4)",i.beginPath(),i.arc(v,y,x,-.1,Math.PI*.75),i.stroke()},T=(v,y,x,M,C,R,I)=>{i.strokeStyle=R,i.lineWidth=C,i.beginPath(),i.moveTo(v,y);let F=0;for(;M>0&&F++<40;){let B=(10+c()*22)*a;x+=(c()-.5)*.9,v+=Math.cos(x)*B,y+=Math.sin(x)*B,i.lineTo(v,y),M-=B,I>0&&c()<.22&&(i.stroke(),T(v,y,x+(c()>.5?1:-1)*(.5+c()*.6),M*.5,C*.7,R,I-1),i.strokeStyle=R,i.lineWidth=C,i.beginPath(),i.moveTo(v,y))}i.stroke()};if(i.lineCap="round",i.lineJoin="round",o==="nebula"){g(),b(["rgba(255,79,168,.9)","rgba(122,75,255,.9)","rgba(42,208,255,.9)"],46,.2),i.globalCompositeOperation="lighter";for(let v=0;v<2600;v++){let y=Math.pow(c(),.8),x=v%2,M=y*7.2+x*Math.PI+(c()-.5)*(.5+y*.5),C=(30+y*400)*a;i.globalAlpha=.5*(1-y*.75),m(r+Math.cos(M)*C,r+Math.sin(M)*C,(1+c()*2.2)*a,y<.25?"#fff0d0":y<.6?"#ffb8e8":"#9ab8ff")}i.globalAlpha=.55,u(r,r,120*a,"rgba(255,225,180,.9)"),i.globalAlpha=1,i.globalCompositeOperation="source-over",d(486,6,"rgba(200,160,255,.5)"),d(472,2,"rgba(255,140,220,.35)")}else if(o==="solar"){g(),b(["rgba(40,70,200,.9)","rgba(110,50,180,.9)"],14,.14);let v=[118,160,205,252,330,392,440,476],y=[[6,"#b8a890"],[10,"#e8c070"],[11,"#4a9aff"],[8,"#e0603a"],[25,"#d8a878"],[21,"#e8d49a"],[15,"#8ae0e8"],[14,"#4a6aff"]];v.forEach(x=>d(x,2,"rgba(160,190,255,.26)"));for(let x=0;x<260;x++){let M=c()*f,C=(280+c()*24)*a;i.globalAlpha=.3+c()*.4,m(r+Math.cos(M)*C,r+Math.sin(M)*C,(1+c()*2.4)*a,"#a8a090")}i.globalAlpha=1,y.forEach((x,M)=>{let C=c()*f,R=r+Math.cos(C)*v[M]*a,I=r+Math.sin(C)*v[M]*a,F=x[0]*a;M===5&&(i.strokeStyle="rgba(232,212,154,.75)",i.lineWidth=5*a,i.beginPath(),i.ellipse(R,I,F*1.9,F*.6,.5,0,f),i.stroke()),m(R,I,F,x[1]);let B=i.createRadialGradient(R-F*.4,I-F*.4,F*.1,R,I,F);if(B.addColorStop(0,"rgba(255,255,255,.35)"),B.addColorStop(1,"rgba(0,0,20,.55)"),i.fillStyle=B,i.beginPath(),i.arc(R,I,F,0,f),i.fill(),M===2&&m(R+F*1.9,I-F*.6,F*.28,"#d0d0d8"),M===4){i.strokeStyle="rgba(150,90,50,.6)",i.lineWidth=3*a;for(let D of[-.4,0,.4])i.beginPath(),i.moveTo(R-F*.85,I+F*D),i.lineTo(R+F*.85,I+F*D),i.stroke()}}),i.globalCompositeOperation="lighter",i.globalAlpha=.4,u(r,r,130*a,"rgba(255,150,40,.8)"),i.globalAlpha=1,i.globalCompositeOperation="source-over",m(r,r,46*a,"#c8862a"),u(r,r,46*a,"rgba(255,220,140,.8)","rgba(200,120,30,0)"),i.strokeStyle="rgba(120,60,10,.5)",i.lineWidth=2*a;for(let x=0;x<9;x++)i.beginPath(),i.arc(r+(c()-.5)*50*a,r+(c()-.5)*50*a,(4+c()*8)*a,0,f),i.stroke();d(486,5,"rgba(255,220,150,.45)")}else if(o==="moon"){h(["#8f929e","#6e717e","#4c4f5c","#2e3040"]);for(let v=0;v<9;v++){i.globalAlpha=.16;let y=c()*f,x=c()*380*a;m(r+Math.cos(y)*x,r+Math.sin(y)*x,(60+c()*120)*a,"#23252f")}p(s?5200:2600,.13);for(let v=0;v<54;v++){let y=c()*f,x=Math.sqrt(c())*480*a,M=(v<5?46+c()*34:v<18?20+c()*20:7+c()*11)*a;_(r+Math.cos(y)*x,r+Math.sin(y)*x,M,"rgba(52,54,66,.9)","rgba(255,255,255,.4)")}i.globalAlpha=.1;for(let v=0;v<16;v++){let y=v/16*f+.1;i.strokeStyle="#ffffff",i.lineWidth=(3+c()*5)*a,i.beginPath(),i.moveTo(r+Math.cos(y)*40*a,r+Math.sin(y)*40*a),i.lineTo(r+Math.cos(y)*(150+c()*160)*a,r+Math.sin(y)*(150+c()*160)*a),i.stroke()}i.globalAlpha=1,_(r,r,30*a,"rgba(46,48,60,.95)","rgba(255,255,255,.5)"),d(486,6,"rgba(220,225,240,.4)")}else if(o==="mars"){h(["#c86a3c","#a04a28","#742f1a","#431a10"]),i.globalAlpha=.13;for(let v=0;v<46;v++){i.strokeStyle=v%2?"#ffd0a0":"#3a1208",i.lineWidth=(3+c()*5)*a,i.beginPath();let y=v*24*a+c()*10*a,x=c()*6;for(let M=0;M<=t;M+=24*a)i.lineTo(M,y+Math.sin(M*.006/a+x)*16*a+Math.sin(M*.017/a+v)*6*a);i.stroke()}i.globalAlpha=1,p(s?3600:1800,.1),i.globalAlpha=.55;for(let v=0;v<3;v++){let y=.5+v*2.1+c()*.4;T(r+Math.cos(y)*470*a,r+Math.sin(y)*470*a,y+Math.PI+(c()-.5)*.5,560*a,(10+c()*7)*a,"#30100a",2)}i.globalAlpha=.4;for(let v=0;v<16;v++){let y=c()*f,x=c()*470*a;T(r+Math.cos(y)*x,r+Math.sin(y)*x,c()*f,(90+c()*160)*a,2.4*a,"#2a0c06",1)}i.globalAlpha=1;for(let v=0;v<15;v++){let y=c()*f,x=Math.sqrt(c())*470*a;_(r+Math.cos(y)*x,r+Math.sin(y)*x,(10+c()*30)*a,"rgba(92,36,20,.9)","rgba(255,200,150,.4)")}for(let v=0;v<130;v++){let y=c()*f,x=Math.sqrt(c())*490*a,M=(2+c()*5)*a,C=r+Math.cos(y)*x,R=r+Math.sin(y)*x;m(C+M*.5,R+M*.5,M,"rgba(40,14,8,.5)"),m(C,R,M,"#8a4428")}d(486,6,"rgba(255,200,140,.4)")}else if(o==="rings"){g(),b(["rgba(120,90,60,.9)","rgba(60,60,130,.9)"],10,.12);let v=["214,190,150","190,160,120","232,214,170","150,130,110","170,180,200","120,100,84"],y=84;for(;y<500;){let M=2+c()*(c()>.8?20:8);y>196&&y<214||y>344&&y<372||c()<.08||d(y+M/2,M+.6,"rgba("+v[c()*v.length|0]+","+(.22+c()*.4).toFixed(2)+")"),y+=M}i.globalAlpha=.5;for(let M=0;M<900;M++){let C=c()*f,R=(90+c()*400)*a;m(r+Math.cos(C)*R,r+Math.sin(C)*R,(.8+c()*1.8)*a,"#fff4dc")}i.globalAlpha=1,i.save(),i.beginPath(),i.arc(r,r,66*a,0,f),i.clip(),["#e8d49a","#d8b878","#f0e0b0","#c8a468","#e0c890","#b89460","#e8d49a","#d0b070"].forEach((M,C)=>{i.fillStyle=M,i.fillRect(r-70*a,r-66*a+C*16.5*a,140*a,17*a)});let x=i.createRadialGradient(r-22*a,r-22*a,6*a,r,r,68*a);x.addColorStop(0,"rgba(255,255,255,.3)"),x.addColorStop(1,"rgba(10,6,20,.6)"),i.fillStyle=x,i.fillRect(r-70*a,r-70*a,140*a,140*a),i.restore(),d(66,3,"rgba(255,240,200,.5)")}else if(o==="hole"){g(),i.globalCompositeOperation="lighter";for(let v=0;v<420;v++){let y=Math.pow(c(),1.5),x=(104+y*380)*a,M=c()*f,C=.5+c()*2*(1-y*.5),R=y<.12?"255,240,200":y<.35?"255,160,60":y<.65?"220,60,80":"110,60,190";i.strokeStyle="rgba("+R+","+(.1+c()*.22*(1-y*.5)).toFixed(2)+")",i.lineWidth=(2+c()*7)*a,i.beginPath(),i.arc(r,r,x,M,M+C),i.stroke()}for(let v=0;v<60;v++){let y=c()*f;i.strokeStyle="rgba(255,190,110,.10)",i.lineWidth=2*a,i.beginPath();for(let x=0;x<1;x+=.04){let M=(108+x*370)*a,C=y+x*2.4;i.lineTo(r+Math.cos(C)*M,r+Math.sin(C)*M)}i.stroke()}i.globalAlpha=.5,u(r,r,190*a,"rgba(255,150,60,.8)"),i.globalAlpha=1,i.globalCompositeOperation="source-over",m(r,r,98*a,"#000000"),d(100,5,"rgba(255,225,170,.85)"),d(108,2,"rgba(255,170,80,.5)"),d(486,5,"rgba(255,170,80,.4)")}else if(o==="station"){h(["#2c3550","#20283c","#161c2c","#0c111a"]);let v=64*a;for(let y=0;y<t/v;y++)for(let x=0;x<t/v;x++){let M=c();i.fillStyle=M>.86?"rgba(90,240,255,.07)":M>.5?"rgba(160,190,240,.05)":"rgba(0,0,10,.12)",i.fillRect(x*v+3*a,y*v+3*a,v-6*a,v-6*a),i.strokeStyle="rgba(150,180,230,.16)",i.lineWidth=1.6*a,i.strokeRect(x*v+3*a,y*v+3*a,v-6*a,v-6*a),M>.7&&(m(x*v+10*a,y*v+10*a,2.2*a,"rgba(200,220,255,.4)"),m(x*v+v-10*a,y*v+v-10*a,2.2*a,"rgba(200,220,255,.4)"))}for(let[y,x]of[[150,26],[310,30],[468,30]])d(y,x,"#2a3550"),d(y-x/2,2,"rgba(170,200,250,.4)"),d(y+x/2,2,"rgba(0,0,10,.6)"),i.setLineDash([26*a,30*a]),d(y,5,"rgba(90,240,255,.6)"),i.setLineDash([]);for(let y=0;y<12;y++){let x=y/12*f;i.strokeStyle="#2a3550",i.lineWidth=20*a,i.beginPath(),i.moveTo(r+Math.cos(x)*163*a,r+Math.sin(x)*163*a),i.lineTo(r+Math.cos(x)*295*a,r+Math.sin(x)*295*a),i.stroke(),i.strokeStyle=y%3?"rgba(170,200,250,.3)":"rgba(255,212,94,.6)",i.lineWidth=3*a,i.stroke()}for(let y=0;y<4;y++){let x=y*Math.PI/2+Math.PI/4,M=r+Math.cos(x)*390*a,C=r+Math.sin(x)*390*a;i.save(),i.translate(M,C),i.rotate(x),i.beginPath(),i.rect(-44*a,-44*a,88*a,88*a),i.clip(),i.fillStyle="#12161f",i.fillRect(-50*a,-50*a,100*a,100*a),i.strokeStyle="rgba(255,212,94,.55)",i.lineWidth=10*a;for(let R=-6;R<7;R++)i.beginPath(),i.moveTo(R*22*a-50*a,50*a),i.lineTo(R*22*a+50*a,-50*a),i.stroke();i.restore(),m(M,C,24*a,"#161c2c"),m(M,C,10*a,"rgba(90,240,255,.7)")}m(r,r,112*a,"#121826"),d(112,6,"rgba(90,240,255,.6)"),i.fillStyle="rgba(255,212,94,.5)",i.beginPath();for(let y=0;y<10;y++){let x=(y%2?30:74)*a,M=y*Math.PI/5-Math.PI/2;i.lineTo(r+Math.cos(M)*x,r+Math.sin(M)*x)}i.fill()}else{h(["#3d9fce","#226f9f","#134674","#081f40"]),i.globalAlpha=.1;for(let v=0;v<70;v++){let y=c()*t,x=c()*t,M=3+(c()*3|0),C=c()*f,R=(30+c()*90)*a;i.fillStyle=c()>.5?"#ffffff":"#062040",i.beginPath();for(let I=0;I<M;I++){let F=C+I/M*f+(c()-.5)*.6;i.lineTo(y+Math.cos(F)*R*(.6+c()*.6),x+Math.sin(F)*R*(.6+c()*.6))}i.fill()}i.globalAlpha=.5;for(let v=0;v<12;v++){let y=v/12*f+c()*.4;T(r+Math.cos(y)*60*a,r+Math.sin(y)*60*a,y,430*a,(2.6+c()*2.4)*a,"#e8f8ff",2)}i.globalAlpha=.28;for(let v=0;v<26;v++){let y=c()*f,x=c()*480*a;T(r+Math.cos(y)*x,r+Math.sin(y)*x,c()*f,(60+c()*140)*a,1.6*a,"#ffffff",1)}i.globalAlpha=1;for(let v=0;v<300;v++){i.globalAlpha=.3+c()*.5;let y=c()*t,x=c()*t,M=(1.5+c()*3)*a;i.fillStyle="#ffffff",i.fillRect(y-M,x-.5*a,M*2,a),i.fillRect(y-.5*a,x-M,a,M*2)}i.globalAlpha=.35,u(r,r,150*a,"rgba(200,245,255,.8)"),i.globalAlpha=1,d(486,6,"rgba(200,245,255,.45)"),d(120,4,"rgba(200,245,255,.35)")}i.globalAlpha=1,i.globalCompositeOperation="source-over",i.fillStyle="rgba(8,4,20,"+(o==="moon"||o==="mars"||o==="comet"||o==="rings"||o==="hole"?.3:.14)+")",i.fillRect(0,0,t,t);let w=i.createRadialGradient(r,r,300*a,r,r,520*a);return w.addColorStop(0,"rgba(4,2,12,0)"),w.addColorStop(1,"rgba(4,2,12,.38)"),i.fillStyle=w,i.fillRect(0,0,t,t),fp(n,i,t,e,s),up(n)}function Q_(s,e){if(e.floor)return $_(s,e);let t=e.ring,n=e.vein,i=e.dark,r=s?2048:1024,a=document.createElement("canvas");a.width=a.height=r;let o=a.getContext("2d"),l=r/2,c=r/1024,f=o.createRadialGradient(l,l,40*c,l,l,520*c);f.addColorStop(0,e.fl[0]),f.addColorStop(.35,e.fl[1]),f.addColorStop(.75,e.fl[2]),f.addColorStop(1,e.fl[3]),o.fillStyle=f,o.fillRect(0,0,r,r);let m=32*c;for(let g=0;g<r/m;g++)for(let b=0;b<r/m+1;b++){let h=g%2*m/2,p=(b*7919+g*104729)%97/97;o.fillStyle=`rgba(${p>.5?e.tile:i},${.03+p*.07})`,o.fillRect(b*m-h+1.5*c,g*m+1.5*c,m-3*c,m-3*c),p>.93&&(o.fillStyle="rgba("+t+",.5)",o.beginPath(),o.arc(b*m-h+m/2,g*m+m/2,3*c,0,7),o.fill())}o.strokeStyle="rgba("+i+",.5)",o.lineWidth=2.2*c;for(let g=0;g<=r/m;g++){o.beginPath(),o.moveTo(0,g*m),o.lineTo(r,g*m),o.stroke();let b=g%2*m/2;for(let h=0;h<=r/m+1;h++)o.beginPath(),o.moveTo(h*m-b,g*m),o.lineTo(h*m-b,g*m+m),o.stroke()}Z_(o,Nr.indexOf(e),r,c,l),o.lineCap="round";for(let g=0;g<9;g++){let b=g/9*6.283+.2,h=130*c;for(o.beginPath(),o.moveTo(l+Math.cos(b)*h,l+Math.sin(b)*h);h<470*c;)h+=26*c,b+=Math.sin(h*.012+g)*.035,o.lineTo(l+Math.cos(b)*h,l+Math.sin(b)*h);o.strokeStyle="rgba("+n+",.2)",o.lineWidth=7*c,o.stroke(),o.strokeStyle="rgba(255,240,255,.3)",o.lineWidth=1.4*c,o.stroke()}let d=(g,b,h)=>{o.lineWidth=b*c,o.strokeStyle=h,o.beginPath(),o.arc(l,l,g*c,0,7),o.stroke()};o.strokeStyle="rgba("+t+",.16)",o.lineWidth=2*c;for(let g=0;g<16;g++){let b=g*Math.PI/8;o.beginPath(),o.ellipse(l+Math.cos(b)*172*c,l+Math.sin(b)*172*c,58*c,20*c,b,0,7),o.stroke()}for(let g=0;g<32;g++){let b=g*Math.PI/16+.1;o.beginPath(),o.moveTo(l+Math.cos(b)*236*c,l+Math.sin(b)*236*c),o.lineTo(l+Math.cos(b+.1)*262*c,l+Math.sin(b+.1)*262*c),o.lineTo(l+Math.cos(b+.2)*236*c,l+Math.sin(b+.2)*236*c),o.stroke()}d(486,10,"rgba("+t+",.55)"),d(470,3,"rgba("+t+",.3)"),d(360,4,"rgba("+t+",.26)"),d(352,2,"rgba("+t+",.22)"),d(230,4,"rgba("+t+",.3)"),d(112,6,"rgba("+t+",.5)"),o.strokeStyle="rgba("+t+",.5)",o.lineWidth=3*c;for(let g=0;g<24;g++){let b=g*Math.PI/12;o.beginPath(),o.moveTo(l+Math.cos(b)*360*c,l+Math.sin(b)*360*c),o.lineTo(l+Math.cos(b)*(g%2?400:470)*c,l+Math.sin(b)*(g%2?400:470)*c),o.stroke()}for(let g=0;g<12;g++){let b=g*Math.PI/6+.26,h=l+Math.cos(b)*295*c,p=l+Math.sin(b)*295*c;o.save(),o.translate(h,p),o.rotate(b),o.fillStyle="rgba("+t+",.45)",o.beginPath();for(let _=0;_<8;_++){let T=(_%2?5:15)*c,w=_*Math.PI/4;o.lineTo(Math.cos(w)*T,Math.sin(w)*T)}o.fill(),o.restore()}o.strokeStyle="rgba(255,255,255,.35)",o.lineWidth=1.5*c,o.beginPath();for(let g=0;g<=12;g++){let b=g*5%12*Math.PI/6+.26;o.lineTo(l+Math.cos(b)*295*c,l+Math.sin(b)*295*c)}o.stroke();for(let g=0;g<4;g++){let b=g*Math.PI/2+Math.PI/4,h=l+Math.cos(b)*415*c,p=l+Math.sin(b)*415*c;o.fillStyle="rgba("+i+",.75)",o.beginPath(),o.arc(h,p,34*c,0,7),o.fill(),o.lineWidth=4*c,o.strokeStyle="rgba("+t+",.8)",o.stroke(),o.fillStyle="rgba("+n+",.9)",o.beginPath(),o.arc(h,p,13*c,0,7),o.fill()}o.fillStyle="rgba("+i+",.8)",o.beginPath(),o.arc(l,l,106*c,0,7),o.fill(),o.fillStyle="rgba("+t+",.38)",o.beginPath(),o.arc(l,l,62*c,0,7),o.fill(),o.fillStyle="rgba("+i+",1)",o.beginPath(),o.arc(l+20*c,l-14*c,56*c,0,7),o.fill(),o.fillStyle="rgba(10,5,24,.3)",o.fillRect(0,0,r,r);let u=o.createRadialGradient(l,l,260*c,l,l,520*c);return u.addColorStop(0,"rgba(8,4,20,0)"),u.addColorStop(1,"rgba(8,4,20,.34)"),o.fillStyle=u,o.fillRect(0,0,r,r),fp(a,o,r,e,s),up(a)}var tp=null;function dp(s,e){rn=(e|0)%Nr.length;let t=Nr[rn];Er&&(xt.remove(Er),Er.traverse(d=>{d.geometry&&!d.geometry.userData.shared&&d.geometry.dispose()})),oi.length=0,cf.length=0,yf.length=0,vf.length=0,Ga.length=0,Dr=null;let n=Er=new Pt;xt.add(n),df=s;let i=typeof S<"u"&&S.set.gfx===0;tp=Yd[rn]||(Yd[rn]=Q_(!i,t));let r=new vi({map:tp,gradientMap:Di}),a=we(t.side),o=we(t.stone),l=we(t.stone2),c=we(t.gold);xt.background=Zd[rn]||(Zd[rn]=Y_(t)),za&&(za.color.set(t.hemi[0]),za.groundColor.set(t.hemi[1]),lp.color.set(t.sun));let f=new $e(new Dn(s+140,s-100,300,i?56:128),[a,r,a]);f.position.y=-150,n.add(f),N(n,new un(s+136,13,i?8:12,i?72:160),De(t.gold),[0,2,0],void 0,[Math.PI/2,0,0]),N(n,new un(s+168,5,i?6:10,i?72:160),De(t.cry[0],.7),[0,-30,0],void 0,[Math.PI/2,0,0]),N(n,new yi(s-140,640,9),a,[0,-620,0],void 0,[Math.PI,0,0]);let m=t.cols?16:0;for(let d=0;d<m;d++){let u=d/m*6.283+.2,g=Math.cos(u)*(s+96),b=Math.sin(u)*(s+96),h=rt(n,[g,0,b]),p=d%4===2,_=p?90:190;if(N(h,ut,o,[0,_/2,0],[36,_,36]),N(h,ut,c,[0,8,0],[48,16,48]),p?N(h,Zc,l,[20,_+6,6],[26,18,24],[.4,.2,.3]):N(h,ut,c,[0,_+6,0],[46,14,46]),!p){let T=N(h,Dt,De(t.cry[d%2]),[0,_+78,0],[26,46,26]);N(T,Dt,De(t.cry[d%2],.25),[0,0,0],1.7),oi.push({o:T,y:_+78,ph:d,sp:1.6,rot:1.2})}if(d%4===0){let T=(d+1)/m*6.283+.2,w=(Math.cos(T)*(s+96)+g)/2,v=(Math.sin(T)*(s+96)+b)/2,y=Math.hypot(Math.cos(T)*(s+96)-g,Math.sin(T)*(s+96)-b),x=N(n,at,l,[w,214,v],[y+60,30,44],[0,-(u+T)/2+Math.PI/2,0]);N(x,at,c,[0,.55,0],[1.02,.2,1.1]);let M=N(n,at,we(t.ban||6957776),[w,120,v],[110,150,6],[0,-(u+T)/2+Math.PI/2,0]);N(M,be,De(16766046),[0,.1,.7],[.22,.16,.5]),oi.push({o:M,y:120,ph:d,sp:1.3,rot:0,amp:5})}}for(let d=0;d<(t.cols?46:0);d++){let u=Math.random()*6.283,g=s-26-Math.random()*70,b=14+Math.random()*26;N(n,Ye,we(t.cry[d%3?0:1],t.cry[d%3?0:1]),[Math.cos(u)*g,b,Math.sin(u)*g],[b*.5,b*2.2,b*.5],[(Math.random()-.5)*.5,0,(Math.random()-.5)*.5])}for(let d=0;d<9;d++){let u=d/9*6.283+.5,g=s*(.5+d%3*.14),b=rt(n,[Math.cos(u)*g,0,Math.sin(u)*g]);N(b,ut,l,[0,5,0],[44,10,44]),N(b,ut,De(d%2?t.gold:t.cry[0],.8),[0,11,0],[30,2,30]);let h=N(b,Dt,De(d%2?t.gold:t.cry[0],.85),[0,46,0],[9,16,9]);oi.push({o:h,y:46,ph:d*2,sp:2,rot:1.5,amp:8})}for(let d=0;d<8;d++){let u=d/8*6.283,g=s-150,b=rt(n,[Math.cos(u)*g,0,Math.sin(u)*g]);N(b,ut,o,[0,22,0],[9,44,9]),N(b,Ye,c,[0,52,0],[22,20,22],[Math.PI,0,0]);let h=N(b,Ye,De(16751150),[0,80,0],[13,36,13]);N(h,Ye,De(16769146),[0,-.15,0],[.55,.6,.55]),cf.push(h)}for(let d=0;d<20;d++){let u=d/20*6.283+Math.random()*.3,g=s+300+Math.random()*700,b=60+Math.random()*120,h=-300+Math.random()*420,p=N(n,Zc,we(d%3?t.isl[0]:t.isl[1]),[Math.cos(u)*g,h,Math.sin(u)*g],[b,b*.6,b],[Math.random()*.4,Math.random()*6,0]);N(p,ut,we(t.isl[2]),[0,.62,0],[.82,.16,.82]),d%2&&N(p,Dt,De(t.cry[0]),[0,1.2,0],[.22,.6,.22]),d%5===0&&N(p,at,De(t.cry[1],.55),[.5,-.6,.5],[.14,2.4,.05]),oi.push({o:p,y:h,ph:d*1.7,sp:.5+Math.random()*.5,rot:.12,amp:26})}el&&el.forEach(d=>{d.userData.r=Math.random()*(s+200)}),j_(n,s,t,i),X_(n,s,t,i),K_(n,s,t),hp(n,s,t)}function ey(){za=new ma(15128831,3807856,2.2),xt.add(za);let s=lp=new vs(16770752,2.4);s.position.set(-400,900,300),xt.add(s),W_();for(let e of[be,at,Ye,ut,Dt,Ir,Rr,Zc])e.userData.shared=1;Ii=N(xt,at,new tt({color:16726586,transparent:!0,opacity:.4,depthWrite:!1}),[0,3,0],[1,1,1]),Ii.visible=!1,Cs=N(xt,Rr,new tt({color:15313151,transparent:!0,opacity:.8,side:Lt,depthWrite:!1}),[0,4,0],80,[-Math.PI/2,0,0]),Cs.visible=!1,tl=[];for(let e=0;e<14;e++){let t=new $e(Ir,new tt({color:16726586,transparent:!0,opacity:.3,depthWrite:!1})),n=new $e(Rr,new tt({color:16747146,transparent:!0,opacity:.8,depthWrite:!1,side:Lt}));t.rotation.x=n.rotation.x=-Math.PI/2,t.renderOrder=n.renderOrder=2,t.visible=n.visible=!1,xt.add(t),xt.add(n),tl.push({f:t,e:n,c:""})}k_(),lf=Zi(240,()=>new $e(be,new tt({color:16777215}))),op=Zi(240,()=>new $e(be,new tt({color:16777215,transparent:!0,opacity:.3,depthWrite:!1,blending:$t}))),hf=Zi(140,()=>{let e=new $e(Dt,De(16773375));return N(e,Dt,new tt({color:16743167,transparent:!0,opacity:.42,depthWrite:!1,blending:$t}),[0,0,0],1.9),e}),cp=Zi(140,()=>{let e=new $e(Ir,new tt({color:14711551,map:M_,transparent:!0,opacity:.8,depthWrite:!1,blending:$t}));return e.rotation.x=-Math.PI/2,e}),ff=Zi(34,()=>{let e=new $e(Rr,new tt({color:16777215,transparent:!0,side:Lt,depthWrite:!1,blending:$t}));return e.rotation.x=-Math.PI/2,e}),z_(),of=Zi(24,()=>new $e(new Dn(1,1,1,32,1,!0),new tt({color:16777215,transparent:!0,side:Lt,depthWrite:!1,blending:$t}))),Lr=Zi(260,()=>new $e(at,new tt({color:16777215}))),el=Zi(50,e=>{let t=new $e(Dt,De(e%3?13995007:16766046,.7));return t.userData={a:Math.random()*6.283,r:Math.random()*1500,y:Math.random()*400,s:20+Math.random()*40},t}),dp(typeof AR<"u"?AR:1300,0)}bt.init=function(){try{yr=document.createElement("canvas"),yr.id="cv";let s=typeof S<"u"&&S.set.gfx===0;Ls=new Uc({canvas:yr,antialias:!s,alpha:!0}),Ls.setClearColor(0,0),yr.addEventListener("webglcontextlost",e=>{e.preventDefault(),bt.lost=!0}),yr.addEventListener("webglcontextrestored",()=>{bt.lost=!1,uf="",bt.resize()}),Di=new Vi(new Uint8Array([104,160,212,255]),4,1,pr),Di.minFilter=Di.magFilter=Rt,Di.needsUpdate=!0,xt=new Qr,Tn=new Ai(-1,1,1,-1,10,8e3),ey(),bt.canvas=yr,bt.ok=!0,bt.resize()}catch(s){console.warn("WebGL indisponible",s),bt.ok=!1}};var uf="";bt.resize=function(){if(!bt.ok)return;let s=typeof S<"u"&&S.set.gfx===0,e=(s?.65:1)*(bt.q||1),t=Math.max(.35,Math.min(e*(s?1:1.5),SC*(window.devicePixelRatio||1)*e,Math.sqrt(125e4/(W*H))*e)),n=Math.round(W*t),i=Math.round(H*t),r=n+"x"+i;r!==uf&&(uf=r,Ls.setPixelRatio(1),Ls.setSize(n,i,!1));let a=W/H;Tn.left=-Vc*a/2,Tn.right=Vc*a/2,Tn.top=Vc/2,Tn.bottom=-Vc/2,Tn.updateProjectionMatrix()};bt.olSet=s=>{for(let e in Is)Is[e].visible=!!s};bt.gc=function(s){let e=bt.fam();for(let t in an){let n=an[t];if(!n||!n.scene)continue;let i=/^m_[a-z]+_([a-z]+)$/.exec(t),r=!!pf[t];if(i&&i[1]!==e||r&&s&&!s.includes(t)){try{n.scene.traverse(a=>{if(a.isMesh){a.geometry&&a.geometry.dispose();let o=Array.isArray(a.material)?a.material:[a.material];for(let l of o)l&&(l.map&&l.map.dispose(),l.dispose())}}),Li[t]&&(Li[t].dispose(),delete Li[t]),Is[t]&&(Is[t].dispose(),delete Is[t])}catch{}delete an[t]}}};bt.reset=function(s,e){if(bt.ok){for(let t of Ps)t.userData.segs&&t.userData.segs.forEach(n=>xt.remove(n)),xt.remove(t);Ps.clear();for(let t of Pr)xt.remove(t.o);Pr.length=0,ai.length=0;for(let t of Ar)t.visible=!1;pp=0;for(let t of Yc.values())xt.remove(t);Yc.clear();for(let t of ka.values())xt.remove(t);ka.clear(),y_=null,s&&(s!==df||(e|0)%Nr.length!==rn)&&dp(s,e|0),jn.set(0,0,0),$i=1,jc=1,Kc=0,Ii.visible=!1;try{bt.gc(typeof LAUNCH<"u"&&LAUNCH&&LAUNCH.infos?LAUNCH.infos.map(t=>t.hero):null)}catch{}}};var Ar=[],np=96,pp=0;function ty(s,e,t,n){typeof S<"u"&&S.set.gfx===0&&Ar.length>=40;let i=3;for(let r=0;r<i;r++){let a=Ar.length<np?null:Ar[pp++%np];a||(a=new $e(Ir,new tt({transparent:!0,opacity:.3,depthWrite:!1})),a.rotation.x=-Math.PI/2,a.renderOrder=1,xt.add(a),Ar.push(a));let o=Math.random()*6.283,l=r?n*(.7+Math.random()*.9):0,c=r?n*(.18+Math.random()*.22):n*(.62+Math.random()*.25);a.position.set(s+Math.cos(o)*l,1.2+Ar.indexOf(a)%7*.05,e+Math.sin(o)*l),a.scale.set(c*(.8+Math.random()*.5),c*(.8+Math.random()*.5),1),a.rotation.z=o,a.material.color.set(t).multiplyScalar(.55),a.material.opacity=r?.34:.42,a.visible=!0}}bt.gone=function(s){let e=s.o;if(e){if(s.o=null,Ps.delete(e),e.userData.segs&&e.userData.segs.forEach(t=>{Ds(t.position.x,t.position.z,60,"#e2b04a",10,420),xt.remove(t)}),Ds(s.x,s.y,s.r,s.m.col,s.m.boss?40:6,s.m.boss?520:240),!s.nost)try{ty(s.x,s.y,s.m.col,s.m.boss?s.r*1.6:s.r)}catch{}Pr.push({o:e,t:.34,s:e.scale.x})}};bt.spark=(s,e,t,n)=>Ds(s,e,50,t,n||3,180);bt.fire=(s,e,t)=>{Ds(s,e,300+Math.random()*260,t,28,460),Ds(s,e,40,"#ffffff",4,120)};bt.proj=function(s,e,t){return rf.set(s,t||0,e).project(Tn),[(rf.x+1)/2*W,(1-rf.y)/2*H]};bt.render=function(s,e,t){if(!bt.ok||bt.lost)return;re+=e;let n=s.p;$i>0&&($i=Math.max(0,$i-e*1.6));for(let b of s.ps){let h=Yc.get(b);h||(h=L_(b.hero,b.skin,b.wp,b.wsk),xt.add(h),Yc.set(b,h)),D_(h,b,s,e),N_(b,e)}for(let b of cf){let h=1+Math.sin(re*11+b.id)*.18;b.scale.set(13*(2-h),36*h,13*(2-h))}let i=null;for(let b of s.en){let h=b.o||(b.o=U_(b)),p=h.userData,_=b.tg||n;p.born=Math.min(1,p.born+e*2.2),h.position.set(b.x,0,b.y);let w=(b.chg>0||b.wind>0?Math.atan2(b.cvx,b.cvy):Math.atan2(n.x-b.x,n.y-b.y))-p.rot;for(;w>Math.PI;)w-=6.283;for(;w<-Math.PI;)w+=6.283;p.rot+=w*Math.min(1,e*8),h.rotation.y=p.rot,b.flash>0&&(p.punch=1),p.punch=Math.max(0,p.punch-e*7);let v=Math.max(.01,b.r/(MON[b.id].r*1.45)*(p.born<1?1-Math.pow(2,-9*p.born)*Math.cos(p.born*10):1)),y=p.punch*p.punch;h.scale.set(v*(1+y*.3),v*(1-y*.24),v*(1+y*.3)),!p.mm&&an[gf(b.id)]&&ap(h,b.id),p.f&&p.f(b),b.m.boss&&(i=b,F_(h,p,b,e))}if(Ps.size>s.en.length){let b=new Set;for(let h of s.en)h.o&&b.add(h.o);for(let h of Ps)b.has(h)||(h.userData.segs&&h.userData.segs.forEach(p=>xt.remove(p)),xt.remove(h),Ps.delete(h))}if(i&&i.wind>0){Ii.visible=!0;let b=620;Ii.position.set(i.x+i.cvx*b/2,3,i.y+i.cvy*b/2),Ii.scale.set(i.r*1.7,1,b),Ii.rotation.y=Math.atan2(i.cvx,i.cvy),Ii.material.opacity=.25+Math.abs(Math.sin(re*16))*.3}else Ii.visible=!1;for(let b=Pr.length-1;b>=0;b--){let h=Pr[b];h.t-=e;{let p=Math.min(1,1-h.t/.34),_=Math.sin(Math.min(1,p*2.2)*Math.PI);h.o.scale.set(Math.max(.001,h.s*(1+_*.55)*(1-p*p*p)),Math.max(.001,h.s*(1-_*.45)*(1-p*p)),Math.max(.001,h.s*(1+_*.55)*(1-p*p*p))),h.o.position.y+=e*150*p,h.o.rotation.y+=e*16*p}h.t<=0&&(xt.remove(h.o),Pr.splice(b,1))}for(let b=0;b<lf.length;b++){let h=s.sh[b],p=lf[b],_=op[b];if(!h){p.visible=_.visible=!1;continue}p.visible=_.visible=!0,p.position.set(h.x,58,h.y);let T=h.foe?0:Jc[h.col]||0,w=O_[T];if(p.geometry!==w&&(p.geometry=w),T){let y=Math.hypot(h.vx,h.vy)||1,x=Math.atan2(h.vx,h.vy),M=h.r*1.25,C=1+Math.sin(re*26+b)*.12;p.rotation.set(0,x,0),_.rotation.set(0,x,0);let R=1.9,I=3.4;T===1?(p.scale.set(M*.5,M*.5,M*3.4),p.rotation.z=re*9,R=1.5,I=4.6):T===2?(p.scale.set(M*1.15*C,M*1.15*C,M*1.5),R=2.3*C,I=3.8):T===3?(p.scale.set(M*1.25,M*1.25,M*1.25),p.rotation.set(Math.PI/2+Math.sin(re*9+b)*.5,x,re*7+b),R=1.7,I=2.6):T===4?(p.scale.set(M*1.7,M*.22,M*1.7),p.rotation.set(0,re*22+b,0),R=1.6,I=2.4):T===5?(p.scale.set(M*1.35,M*1.35,M*1.35),p.rotation.set(re*8+b,x,re*6),R=2.1,I=3):(p.scale.set(M*.95,M*2.6,M*.95),p.rotation.set(Math.PI/2,0,-x),p.rotation.order="YXZ",p.rotation.set(Math.PI/2,x,0),R=2*C,I=3.6),_.scale.set(M*R,M*R,M*I),_.position.set(h.x-h.vx/y*M*I*.45,58,h.y-h.vy/y*M*I*.45),p.rotation.order!=="XYZ"&&T!==6&&(p.rotation.order="XYZ")}else{let y=Math.hypot(h.vx,h.vy)||1,x=Math.atan2(h.vx,h.vy),M=h.foe?h.kd||1:0,C=M===1?2.9:M===2?1.05:M===3?1.3:2.5,R=M===1?.5:M===2?1.05+Math.sin(re*14+b)*.16:M===3?1.15:.82,I=Math.sin(re*30+b)*(M?4:2);p.rotation.y=_.rotation.y=x,p.rotation.z=M===1?re*14:0,p.scale.set(h.r*R,h.r*R,h.r*C),_.scale.set(h.r*(M===2?2.3:1.7)+I,h.r*(M===2?2.3:1.7)+I,h.r*C*2.2),_.position.set(h.x-h.vx/y*h.r*C*.9,58,h.y-h.vy/y*h.r*C*.9)}!T&&p.rotation.order!=="XYZ"&&(p.rotation.order="XYZ");let v=h.foe?"f"+(h.col||""):h.col;p.userData.c!==v&&(p.userData.c=v,h.foe?(p.material.color.set(h.col||"#ff4d6d").lerp(new _e(16777215),.55),_.material.color.set(h.col||"#ff4d6d").lerp(new _e(16722506),.5)):(p.material.color.set(v).lerp(new _e(16777215),.45),_.material.color.set(v))),Math.random()<(h.foe?.5:.4)&&ai.length<Lr.length&&ai.push({x:h.x+(h.foe?(Math.random()-.5)*h.r:0),y:58,z:h.y+(h.foe?(Math.random()-.5)*h.r:0),vx:0,vy:h.foe?60:30,vz:0,t:h.foe?.32:.22,col:h.foe&&Math.random()<.5?"#ff4d6d":h.col,s:h.foe?9:7})}for(let b=0;b<hf.length;b++){let h=s.gems[b],p=hf[b],_=cp[b];if(!h){p.visible=_.visible=!1;continue}p.visible=_.visible=!0,p.position.set(h.x,34+Math.sin(re*5+b)*9,h.y),p.rotation.y=re*3.4+b;{let T=1+Math.sin(re*9+b*1.7)*.14;p.scale.set(15*T,25*(2-T),15*T),_.position.set(h.x,4,h.y),_.scale.setScalar(30+Math.sin(re*6+b)*7)}}{let b=s.zn||[];for(let h=0;h<tl.length;h++){let p=b[h],_=tl[h];if(!p){_.f.visible=_.e.visible=!1;continue}let T=Math.min(1,1-p.t/p.max),w=p.t<0?Math.max(0,1+p.t/.25):1;_.f.visible=_.e.visible=!0,_.f.position.set(p.x,3.2,p.y),_.e.position.set(p.x,3.4,p.y),_.f.scale.setScalar(Math.max(1,p.r*T)),_.e.scale.setScalar(p.r),_.f.material.opacity=(.22+.22*T+(T>.8?Math.abs(Math.sin(re*40))*.2:0))*w,_.e.material.opacity=(.55+.35*Math.abs(Math.sin(re*(8+14*T))))*w,_.c!==p.col&&(_.c=p.col,_.f.material.color.set(p.col),_.e.material.color.set(p.col).lerp(new _e(16777215),.35))}}for(let b=0;b<ff.length;b++){let h=s.fx[b],p=ff[b];if(!h){p.visible=!1;continue}let _=1-h.t/h.max;p.visible=!0,p.position.set(h.x,5+b*.2,h.y),p.scale.setScalar(Math.max(1,h.r*(.25+.75*_))),p.material.opacity=(1-_)*.9,p.userData.c!==h.col&&(p.userData.c=h.col,p.material.color.set(h.col))}for(let b=ai.length-1;b>=0;b--){let h=ai[b];if(h.t-=e,h.t<=0){ai.splice(b,1);continue}h.vy-=900*e,h.x+=h.vx*e,h.y+=h.vy*e,h.z+=h.vz*e,h.y<4&&(h.y=4,h.vy*=-.4)}for(let b=0;b<Lr.length;b++){let h=ai[b],p=Lr[b];if(!h){p.visible=!1;continue}p.visible=!0,p.position.set(h.x,h.y,h.z),p.scale.setScalar(h.s*Math.min(1,h.t*4)),p.rotation.set(h.t*9,h.t*7,0),p.userData.c!==h.col&&(p.userData.c=h.col,p.material.color.set(h.col))}for(let b=0;b<of.length;b++){let h=s.pil[b],p=of[b];if(!h){p.visible=!1;continue}let _=1-h.t/h.max,T=h.r*(1-_*.75);p.visible=!0,p.position.set(h.x,h.h/2,h.y),p.scale.set(T,h.h,T),p.material.opacity=(1-_)*.38,p.rotation.y=re*3,p.userData.c!==h.col&&(p.userData.c=h.col,p.material.color.set(h.col))}V_(e);for(let b of Ha)b.tex.offset.x+=b.vx*e,b.tex.offset.y+=b.vy*e,b.m.opacity=b.op*(.72+.28*Math.sin(re*b.pf));for(let b of oi)b.o.position.y=b.y+Math.sin(re*b.sp+b.ph)*(b.amp||14),b.o.rotation.y+=e*b.rot;for(let b of yf)b.g.position.y=Math.sin(re*1.8-b.i*.45)*7-3;for(let b of vf){let h=b.a+re*.2*b.dir,p=1+Math.sin(re*5+b.a*4)*.25;b.o.position.set(Math.cos(h)*b.R,98+Math.sin(re*2.2+b.a*3)*16,Math.sin(h)*b.R),b.o.rotation.y=re*2+b.a,b.o.scale.set(9*p,15*p,9*p)}Dr&&(Dr.material.opacity=.3+Math.sin(re*1.6)*.12,wr.offset.x=re*.012);for(let b of Ga)b.o.position.x=jn.x*(1-b.pf),b.o.position.z=jn.z*(1-b.pf);for(let b of el){let h=b.userData;h.y+=h.s*e,h.y>420&&(h.y=0),h.a+=e*.05,b.visible=!0,b.position.set(Math.cos(h.a)*h.r,h.y,Math.sin(h.a)*h.r),b.scale.setScalar(4+Math.sin(re*3+h.r)*1.5)}Cs.visible=n.ult>=100&&!n.dead,Cs.visible&&(Cs.position.set(n.x,4,n.y),Cs.rotation.z=re*2,Cs.scale.setScalar(74+Math.sin(re*6)*8));let r=n;if(n.dead){for(let b of s.ps)if(!b.dead&&!b.gone){r=b;break}}let a=s.cine,o=a&&a.f?a.f:r,l=Math.min(1,t*(a?4:6));jn.x+=(o.x-jn.x)*l,jn.z+=(o.y-jn.z)*l;let c=(a&&a.zoom||1)*(1+(s.zoomP>0?s.zoomP:0));jc+=(c-jc)*Math.min(1,t*6);let f=a&&a.orbit?a.age*a.orbit:0;Kc+=(f-Kc)*Math.min(1,t*(a&&a.orbit?10:3));let m=af+Kc,d=Math.cos(Ua),u=s.shake>0?14:0,g=1+$i*$i*1.4;Tn.zoom=jc*(bt.zoomK||1)/g,Tn.updateProjectionMatrix(),Tn.position.set(jn.x+Math.sin(m)*d*2600+(Math.random()-.5)*u,Math.sin(Ua)*2600+(Math.random()-.5)*u,jn.z+Math.cos(m)*d*2600),Tn.lookAt(jn.x,0,jn.z),Ls.render(xt,Tn)};window.R3=bt;})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
