(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var s=e.g.document;if(!t&&s&&(s.currentScript&&(t=s.currentScript.src),!t)){var i=s.getElementsByTagName("script");i.length&&(t=i[i.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),((e,t,s)=>{function i(e,t=60,s=1,i=4e3){let n=0,r=null,o=!1;this.framerate=t,this.panic=i,this.speed=s,this.pause=function(){o=!0},this.play=function(){o=!1},this.tick=function(t=1){requestAnimationFrame((()=>{for(;t--;)e(1e3/this.framerate)}))},this.update=function(){const t=performance.now();if(null!==r&&!1===o)for(n+=t-r;n>=1e3/this.framerate/this.speed&&!1===o;){const t=n>=this.panic/this.speed,s=!1===t?1e3/this.framerate:n*this.speed;n-=s/this.speed,e(s,t)}requestAnimationFrame(this.update.bind(this)),r=t}}class n{$engine;get engine(){return this.$engine}set engine(e){this.$engine=e}start(){}update(){}}const r=class{$identifier;$name;$nodes;$parameters;$parent;$rotation;$scale;$translation;$type;get haschildren(){return 0!==this.$nodes.length}get hasparent(){return void 0!==this.$parent}get identifier(){return this.$identifier}get name(){return this.$name}get nodes(){return this.$nodes}get parameters(){return this.$immutable(this.$parameters)}get parent(){return this.$parent}get rotation(){return this.$immutable(this.$rotation)}get scale(){return this.$immutable(this.$scale)}get translation(){return this.$immutable(this.$translation)}get type(){return this.$type}constructor(e){const{type:t}=e;if("CAMERA_NODE"===t){const t=e;this.$constructornodecamera(t)}else if("MODEL_NODE"===t){const t=e;this.$constructornodemodel(t)}else if("NODE"===t){const t=e;this.$constructornodeempty(t)}}$constructornodecamera(e){this.$identifier=e.identifier,this.$name=e.name,this.$type=e.type,this.$nodes=[],this.$parameters=e.parameters,this.$translation=e.parameters.translation,this.$rotation=e.parameters.rotation}$constructornodeempty(e){this.$identifier=e.identifier,this.$name=e.name,this.$type=e.type,this.$nodes=[],this.$parameters=e.parameters,this.$translation=e.parameters.translation,this.$rotation=e.parameters.rotation,this.$scale=e.parameters.scale}$constructornodemodel(e){this.$identifier=e.identifier,this.$name=e.name,this.$type=e.type,this.$nodes=[],this.$parameters=e.parameters,this.$translation=e.parameters.translation,this.$rotation=e.parameters.rotation,this.$scale=e.parameters.scale}$immutable(e){return void 0===e?e:JSON.parse(JSON.stringify(e))}addchild(e){this.$nodes.push(e)}addparent(e){this.$parent=e}removechild(e){const t=this.$nodes.indexOf(e);-1!==t&&this.$nodes.splice(t,1)}removeparent(){this.$parent=void 0}rotateall([e,t,s]){this.$rotation=[e,t,s]}rotatex(e){this.$rotation[0]=e}rotatey(e){this.$rotation[1]=e}rotatez(e){this.$rotation[2]=e}scaleall([e,t,s]){this.$scale=[e,t,s]}scalex(e){this.$scale[0]=e}scaley(e){this.$scale[1]=e}scalez(e){this.$scale[2]=e}translateall([e,t,s]){this.$translation=[e,t,s]}translatex(e){this.$translation[0]=e}translatey(e){this.$translation[1]=e}translatez(e){this.$translation[2]=e}};const o=Math.PI/180,a=class{$elements=[];get elements(){return this.$elements}constructor(){this.identity()}add(e){const t=e.get();return this.$elements[0]+=t[0],this.$elements[1]+=t[1],this.$elements[2]+=t[2],this.$elements[3]+=t[3],this.$elements[4]+=t[4],this.$elements[5]+=t[5],this.$elements[6]+=t[6],this.$elements[7]+=t[7],this.$elements[8]+=t[8],this.$elements[9]+=t[9],this.$elements[10]+=t[10],this.$elements[11]+=t[11],this.$elements[12]+=t[12],this.$elements[13]+=t[13],this.$elements[14]+=t[14],this.$elements[15]+=t[15],this}clone(e){return this.$elements=[...e.get()],this}from(e){return this.$elements=[...e],this}get(){return[...this.$elements]}identity(){return this.$elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],this}invert(){const[e,t,s,i,n,r,o,a,h,l,m,$,c,d,p,f]=this.$elements,u=e*r-t*n,g=e*o-s*n,v=e*a-i*n,y=t*o-s*r,w=t*a-i*r,x=s*a-i*o,b=h*d-l*c,E=h*p-m*c,O=h*f-$*c,A=l*p-m*d,N=l*f-$*d,_=m*f-$*p,R=u*_-g*N+v*A+y*O-w*E+x*b;return 0!==R&&(this.$elements[0]=(r*_-o*N+a*A)/R,this.$elements[1]=(s*N-t*_-i*A)/R,this.$elements[2]=(d*x-p*w+f*y)/R,this.$elements[3]=(m*w-l*x-$*y)/R,this.$elements[4]=(o*O-n*_-a*E)/R,this.$elements[5]=(e*_-s*O+i*E)/R,this.$elements[6]=(p*v-c*x-f*g)/R,this.$elements[7]=(h*x-m*v+$*g)/R,this.$elements[8]=(n*N-r*O+a*b)/R,this.$elements[9]=(t*O-e*N-i*b)/R,this.$elements[10]=(c*w-d*v+f*u)/R,this.$elements[11]=(l*v-h*w-$*u)/R,this.$elements[12]=(r*E-n*A-o*b)/R,this.$elements[13]=(e*A-t*E+s*b)/R,this.$elements[14]=(d*g-c*y-p*u)/R,this.$elements[15]=(h*y-l*g+m*u)/R),this}multiply(e){e=e.get();let t=this.$elements[0],s=this.$elements[1],i=this.$elements[2],n=this.$elements[3],r=this.$elements[4],o=this.$elements[5],a=this.$elements[6],h=this.$elements[7],l=this.$elements[8],m=this.$elements[9],$=this.$elements[10],c=this.$elements[11],d=this.$elements[12],p=this.$elements[13],f=this.$elements[14],u=this.$elements[15],g=e[0],v=e[1],y=e[2],w=e[3];return this.$elements[0]=g*t+v*r+y*l+w*d,this.$elements[1]=g*s+v*o+y*m+w*p,this.$elements[2]=g*i+v*a+y*$+w*f,this.$elements[3]=g*n+v*h+y*c+w*u,g=e[4],v=e[5],y=e[6],w=e[7],this.$elements[4]=g*t+v*r+y*l+w*d,this.$elements[5]=g*s+v*o+y*m+w*p,this.$elements[6]=g*i+v*a+y*$+w*f,this.$elements[7]=g*n+v*h+y*c+w*u,g=e[8],v=e[9],y=e[10],w=e[11],this.$elements[8]=g*t+v*r+y*l+w*d,this.$elements[9]=g*s+v*o+y*m+w*p,this.$elements[10]=g*i+v*a+y*$+w*f,this.$elements[11]=g*n+v*h+y*c+w*u,g=e[12],v=e[13],y=e[14],w=e[15],this.$elements[12]=g*t+v*r+y*l+w*d,this.$elements[13]=g*s+v*o+y*m+w*p,this.$elements[14]=g*i+v*a+y*$+w*f,this.$elements[15]=g*n+v*h+y*c+w*u,this}perspective(e,t,s,i){const n=Math.tan(e/2),r=s-i;return this.$elements[0]=1/(n*t),this.$elements[1]=0,this.$elements[2]=0,this.$elements[3]=0,this.$elements[4]=0,this.$elements[5]=1/n,this.$elements[6]=0,this.$elements[7]=0,this.$elements[8]=0,this.$elements[9]=0,this.$elements[10]=(s+i)/r,this.$elements[11]=-1,this.$elements[12]=0,this.$elements[13]=0,this.$elements[14]=2*s*i/r,this.$elements[15]=0,this}rotate(e,t){let[s,i,n]=t;const r=Math.hypot(s,i,n);if(r<Number.EPSILON)return this;const o=Math.sin(e),a=Math.cos(e),h=1-a;s/=r,i/=r,n/=r;const l=s*s*h+a,m=i*s*h+n*o,$=n*s*h-i*o,c=s*i*h-n*o,d=i*i*h+a,p=n*i*h+s*o,f=s*n*h+i*o,u=i*n*h-s*o,g=n*n*h+a,{0:v,1:y,2:w,3:x,4:b,5:E,6:O,7:A,8:N,9:_,10:R,11:D}=this.$elements;return this.$elements[0]=v*l+b*m+N*$,this.$elements[1]=y*l+E*m+_*$,this.$elements[2]=w*l+O*m+R*$,this.$elements[3]=x*l+A*m+D*$,this.$elements[4]=v*c+b*d+N*p,this.$elements[5]=y*c+E*d+_*p,this.$elements[6]=w*c+O*d+R*p,this.$elements[7]=x*c+A*d+D*p,this.$elements[8]=v*f+b*u+N*g,this.$elements[9]=y*f+E*u+_*g,this.$elements[10]=w*f+O*u+R*g,this.$elements[11]=x*f+A*u+D*g,this}rotateX(e){const t=Math.sin(e),s=Math.cos(e),{4:i,5:n,6:r,7:o,8:a,9:h,10:l,11:m}=this.$elements;return this.$elements[4]=i*s+a*t,this.$elements[5]=n*s+h*t,this.$elements[6]=r*s+l*t,this.$elements[7]=o*s+m*t,this.$elements[8]=a*s-i*t,this.$elements[9]=h*s-n*t,this.$elements[10]=l*s-r*t,this.$elements[11]=m*s-o*t,this}rotateY(e){const t=Math.sin(e),s=Math.cos(e),{0:i,1:n,2:r,3:o,8:a,9:h,10:l,11:m}=this.$elements;return this.$elements[0]=i*s-a*t,this.$elements[1]=n*s-h*t,this.$elements[2]=r*s-l*t,this.$elements[3]=o*s-m*t,this.$elements[8]=i*t+a*s,this.$elements[9]=n*t+h*s,this.$elements[10]=r*t+l*s,this.$elements[11]=o*t+m*s,this}rotateZ(e){const t=Math.sin(e),s=Math.cos(e),{0:i,1:n,2:r,3:o,4:a,5:h,6:l,7:m}=this.$elements;return this.$elements[0]=i*s+a*t,this.$elements[1]=n*s+h*t,this.$elements[2]=r*s+l*t,this.$elements[3]=o*s+m*t,this.$elements[4]=a*s-i*t,this.$elements[5]=h*s-n*t,this.$elements[6]=l*s-r*t,this.$elements[7]=m*s-o*t,this}scale(e){const[t,s,i]=e;return this.$elements[0]*=t,this.$elements[1]*=t,this.$elements[2]*=t,this.$elements[3]*=t,this.$elements[4]*=s,this.$elements[5]*=s,this.$elements[6]*=s,this.$elements[7]*=s,this.$elements[8]*=i,this.$elements[9]*=i,this.$elements[10]*=i,this.$elements[11]*=i,this}set(e){return this.$elements=[...e],this}subtract(e){const t=e.get();return this.$elements[0]-=t[0],this.$elements[1]-=t[1],this.$elements[2]-=t[2],this.$elements[3]-=t[3],this.$elements[4]-=t[4],this.$elements[5]-=t[5],this.$elements[6]-=t[6],this.$elements[7]-=t[7],this.$elements[8]-=t[8],this.$elements[9]-=t[9],this.$elements[10]-=t[10],this.$elements[11]-=t[11],this.$elements[12]-=t[12],this.$elements[13]-=t[13],this.$elements[14]-=t[14],this.$elements[15]-=t[15],this}translate(e){const[t,s,i]=e,[n,r,o,a,h,l,m,$,c,d,p,f,u,g,v,y]=this.$elements;return this.$elements[12]=n*t+h*s+c*i+u,this.$elements[13]=r*t+l*s+d*i+g,this.$elements[14]=o*t+m*s+p*i+v,this.$elements[15]=a*t+$*s+f*i+y,this}transpose(){const{1:e,2:t,3:s,4:i,6:n,7:r,8:o,9:a,11:h,12:l,13:m,14:$}=this.$elements;return this.$elements[1]=i,this.$elements[2]=o,this.$elements[3]=l,this.$elements[4]=e,this.$elements[6]=a,this.$elements[7]=m,this.$elements[8]=t,this.$elements[9]=n,this.$elements[11]=$,this.$elements[12]=s,this.$elements[13]=r,this.$elements[14]=h,this}},h={POINTS:0,LINES:1,LINE_STRIP:2,LINE_LOOP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},l={BYTE:Int8Array,UNSIGNED_BYTE:Uint8Array,SHORT:Int16Array,UNSIGNED_SHORT:Uint16Array,INT:Int32Array,UNSIGNED_INT:Uint32Array,FLOAT:Float32Array},m={BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126},$=class{$context;$model;$webgl;get model(){return this.$model}constructor(e){this.$webgl=e,this.$context=e.context}prepare(e){const t={},{colors:s,normals:i,draw:n,positions:r}=e;if(void 0!==s){const{buffer:e,components:i,normalize:n,offset:r,stride:o,type:a}=s,h=this.$context.createBuffer();this.$context.bindBuffer(this.$context.ARRAY_BUFFER,h),this.$context.bufferData(this.$context.ARRAY_BUFFER,new l[a](e),this.$context.STATIC_DRAW),t.colors={buffer:h,components:i,type:m[a],normalize:n,stride:o,offset:r}}if(void 0!==i){const{buffer:e,components:s,normalize:n,offset:r,stride:o,type:a}=i,h=this.$context.createBuffer();this.$context.bindBuffer(this.$context.ARRAY_BUFFER,h),this.$context.bufferData(this.$context.ARRAY_BUFFER,new l[a](e),this.$context.STATIC_DRAW),t.normals={buffer:h,components:s,type:m[a],normalize:n,stride:o,offset:r}}if(void 0!==r){const{buffer:e,components:s,normalize:i,offset:n,stride:o,type:a}=r,h=this.$context.createBuffer();this.$context.bindBuffer(this.$context.ARRAY_BUFFER,h),this.$context.bufferData(this.$context.ARRAY_BUFFER,new l[a](e),this.$context.STATIC_DRAW),t.positions={buffer:h,components:s,type:m[a],normalize:i,stride:o,offset:n}}if(void 0!==n){const{count:e,method:s,mode:i,offset:r}=n;t.draw={mode:h[i],method:s,offset:r,count:e}}return this.$model=t,this}render(e){const{colors:t,draw:s,normals:i,positions:n}=this.$model;if(void 0!==t&&!0===e.colors){const{buffer:e,components:s,normalize:i,offset:n,stride:r,type:o}=t,a=this.$webgl.attribute("COLOR");this.$context.bindBuffer(this.$context.ARRAY_BUFFER,e),this.$context.vertexAttribPointer(a,s,o,i,r,n),this.$context.enableVertexAttribArray(a)}if(void 0!==i&&!0===e.normals){const{buffer:e,components:t,normalize:s,offset:n,stride:r,type:o}=i,a=this.$webgl.attribute("NORMAL");this.$context.bindBuffer(this.$context.ARRAY_BUFFER,e),this.$context.vertexAttribPointer(a,t,o,s,r,n),this.$context.enableVertexAttribArray(a)}if(void 0!==n&&!0===e.positions){const{buffer:e,components:t,normalize:s,offset:i,stride:r,type:o}=n,a=this.$webgl.attribute("POSITION");this.$context.bindBuffer(this.$context.ARRAY_BUFFER,e),this.$context.vertexAttribPointer(a,t,o,s,r,i),this.$context.enableVertexAttribArray(a)}if("arrays"===s.method){const{count:e,mode:t,offset:i}=s;this.$context.drawArrays(t,i,e)}return this}};function c(e,t,s){return[-1,-1,-1,-1,-1,1,1,-1,1,1,-1,1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,-1,-1,1,1,-1,1,1,-1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,-1,1,1,-1,1,1,-1,-1,1,-1,-1,-1,-1,-1,1,1,-1,1,-1,1,1,-1,1,1,-1,1,1,1,-1,1,1,-1,1,1,1,1,1,1,-1,1,1,-1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,1,1,1,-1,1,1,-1,1,-1,-1,1,-1,1].map(((i,n)=>n%3==0?i+e:n%3==1?i+t:n%3==2?i+s:void 0))}const d=function(e=1,t=1,s=1){const i=[],n=[],r=[];for(let o=0;o<1;o+=1)for(let a=0;a<1;a+=1)for(let h=0;h<1;h+=1){i.push(...c(3*(o-.5)+1.5,3*(a-.5)+1.5,3*(h-.5)+1.5)),r.push(0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0);for(let r=0,o=i.length/3;r<o;r+=1)n.push(e,t,s,1)}return{draw:{method:"arrays",mode:"TRIANGLES",offset:0,count:i.length/3},colors:{buffer:n,components:4,type:"FLOAT",normalize:!1,stride:0,offset:0},normals:{buffer:r,components:3,type:"FLOAT",normalize:!1,stride:0,offset:0},positions:{buffer:i,components:3,type:"FLOAT",normalize:!1,stride:0,offset:0}}};const p={Engine:class{$rafid;$devicecontroller;$machine;$devicegame;$deviceviewer;$systems;$started;get devicecontroller(){return this.$devicecontroller}get devicegame(){return this.$devicegame}get deviceviewer(){return this.$deviceviewer}set devicecontroller(e){this.$devicecontroller=e}set devicegame(e){this.$devicegame=e}set deviceviewer(e){this.$deviceviewer=e}constructor(){this.$systems=[],this.$loop=new i(this.tick.bind(this))}addsystem(e){e.engine=this,this.$systems.push(e)}start(){this.$started=!0,this.$systems.forEach((e=>{e.start()})),this.$loop.update()}stop(){this.$started=!1,window.cancelAnimationFrame(this.$rafid),this.$rafid=void 0,this.$systems=[]}tick(e){this.$systems.forEach((t=>{!1!==this.$started&&t.update(e)}))}},System:n,DeviceController:class{$game;constructor(e){this.$game=e,window.addEventListener("keyup",this.handleinputs.bind(this))}destroy(){window.removeEventListener("keyup",this.handleinputs.bind(this))}handleinputs(e){"ArrowLeft"===e.key&&this.$game.$world.$nodes[10].$translation[0]>=0?this.$game.$world.$nodes[10].$translation[0]-=2:"ArrowRight"===e.key&&this.$game.$world.$nodes[10].$translation[0]<=0&&(this.$game.$world.$nodes[10].$translation[0]+=2)}},DeviceGame:class{$world;get world(){return this.$world}constructor(e){this.$world=new class{$camera;$cameras;$cartridge;$models;$nodes;$root;get camera(){return this.$camera}get cameras(){return this.$cameras}get models(){return this.$models}get nodes(){return this.$nodes}get root(){return this.$root}set camera(e){this.$camera=e}set root(e){this.$root=e}constructor(e){this.$cartridge=this.$immutable(e),this.$cameras={},this.$models={},this.$nodes={},this.$cartridge.nodes.forEach((e=>{const t=e.identifier;void 0===this.$nodes[t]&&(this.$nodes[t]=this.$gethierarchy(t))})),this.$camera=this.$nodes[this.$cartridge.camera],this.$root=this.$nodes[this.$cartridge.node]}$gethierarchy(e){const t=this.$cartridge.nodes.find((t=>t.identifier===e)),s=new r(t);if("CAMERA_NODE"===s.type?this.$cameras[e]=s:"MODEL_NODE"===s.type&&(this.$models[e]=s),0!==t.nodes.length){const e=s;t.nodes.forEach((t=>{void 0===this.$nodes[t]&&(this.$nodes[t]=this.$gethierarchy(t));const s=this.$nodes[t];s.addparent(e),e.addchild(s)}))}return s}$immutable(e){return void 0===e?e:JSON.parse(JSON.stringify(e))}addmodel(e,t,s=Date.now()){const{$name:i="Model",$type:n="box"}=e,o=new r({identifier:s,name:i,type:"MODEL_NODE",nodes:[],parameters:{translation:[0,0,0],rotation:[0,0,0],scale:[1,1,1],type:n}});return this.$nodes[s]=o,this.$models[s]=o,o.addparent(t),t.addchild(o),o}addnode(e,t){const{$name:s="Node"}=e,i=Date.now(),n=new r({identifier:i,name:s,type:"NODE",nodes:[],parameters:{translation:[0,0,0],rotation:[0,0,0],scale:[1,1,1]}});return this.$nodes[i]=n,n.addparent(t),t.addchild(n),n}getnode(e){return this.$nodes[e]}getparents(e){const t=[];return void 0!==e.parent&&t.push(...this.getparents(e.parent)),t.push(e),t}removenode(e){const t=[],s=this.$nodes[e];return t.push(s.identifier),!0===s.haschildren&&[...s.nodes].forEach((e=>{t.push(...this.removenode(e.identifier))})),!0===s.hasparent&&(s.parent.removechild(s),s.removeparent()),s===this.$camera&&(this.$camera=void 0),s===this.$root&&(this.$root=void 0),delete this.$cameras[e],delete this.$models[e],delete this.$nodes[e],t}reparent(e,t){if(e!==t&&e.parent!==t&&"NODE"===t.type)return!0===e.hasparent&&(e.parent.removechild(e),e.removeparent()),e.addparent(t),t.addchild(e),e}tocartridge(){const e={nodes:[]};return Object.values(this.$nodes).forEach((t=>{const{identifier:s,name:i,nodes:n,parameters:r,type:o}=t,a={};a.identifier=s,a.name=i,a.type=o,a.nodes=n.map((e=>e.identifier)),a.parameters=r,e.nodes.push(a)})),e.camera=this.$camera.identifier,e.node=this.$root.identifier,this.$immutable(e)}}(e)}},DeviceViewer:class{$container;$element;get element(){return this.$element}constructor(e){this.$container=e,this.$element=document.createElement("canvas"),this.$element.style.width="100%",this.$element.style.height="100%",this.$container.appendChild(this.$element),this.setsize()}aspect(){return this.$element.clientWidth/this.$element.clientHeight}destroy(){this.$container.removeChild(this.$element)}ratio(){return window.devicePixelRatio||1}setsize(){const e=this.ratio(),t=Math.floor(this.$element.offsetWidth*e),s=Math.floor(this.$element.offsetHeight*e);this.$element.setAttribute("width",""+t),this.$element.setAttribute("height",""+s)}},SystemForward:class extends n{$deathplaying;$windplaying;start(){}update(e){if(void 0===this.engine.devicegame)return;const t=this.engine.devicegame.$world.$nodes[10];t.$translation[2]-=16*e/1e3,this.engine.devicegame.$world.$camera.$parameters.projection.fieldofview<110&&(this.engine.devicegame.$world.$camera.$parameters.projection.fieldofview+=1*e/1e3);let s=!1;Object.values(this.engine.devicegame.$world.$nodes).forEach((e=>{!0!==s&&"Cube"===e.name&&Math.abs(t.$translation[2]-e.$translation[2])<1&&t.$translation[0]===e.$translation[0]&&(s=!0)})),t.$translation[2]<=-96&&(t.$translation[2]=0),!0===s&&this.engine.$machine.stop()}},SystemRender:class extends n{$renderer;start(){if(void 0===this.engine.deviceviewer)return;const e=new class{$program;$context;get context(){return this.$context}constructor(e){this.$context=e}attribute(e){return this.$context.getAttribLocation(this.$program,e)}destroy(){this.$context.getExtension("WEBGL_lose_context").loseContext()}fragment(e){return this.shader(this.$context.FRAGMENT_SHADER,e)}pixel(e,t){const s=this.$context,i=new Uint8Array(4);return s.readPixels(e,t,1,1,s.RGBA,s.UNSIGNED_BYTE,i),i}program(e,t){const s=this.$context,i=s.createProgram();return s.attachShader(i,e),s.attachShader(i,t),s.linkProgram(i),i}shader(e,t){const s=this.$context,i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}uniform(e){return this.$context.getUniformLocation(this.$program,e)}use(e){this.$context.useProgram(e),this.$program=e}vertex(e){return this.shader(this.$context.VERTEX_SHADER,e)}}(this.engine.deviceviewer.element.getContext("webgl2",{antialias:!1}));this.$renderer=new class{$camera;$matrixcamera;$matrixprojection;$meshes;$programs;$webgl;get matrixcamera(){return this.$matrixcamera}get matrixprojection(){return this.$matrixprojection}get matrixview(){return(new a).clone(this.matrixcamera).invert()}constructor(e,t){this.$webgl=t,this.$viewer=e,this.$context=t.context,this.$meshes={},this.$meshes.floor=new $(t).prepare(d(1,1,1)),this.$meshes.hero=new $(t).prepare(d(.4,.8,.6)),this.$meshes.box=new $(t).prepare(d(1,1,1)),this.$meshes.grid=new $(t).prepare(function(e,t){const s=[],i=[];s.push(0,0,0,-e,0,0,0,0,0,e,0,0,0,0,0,0,-e,0,0,0,0,0,e,0,0,0,0,0,0,-e,0,0,0,0,0,e),i.push(1,1,1,1,1,1,1,1,1,.4,.4,1,1,.4,.4,1,1,1,1,1,1,1,1,1,.4,1,.4,1,.4,1,.4,1,1,1,1,1,1,1,1,1,.4,.4,1,1,.4,.4,1,1);for(let n=1;n<e+1;n+=1){let r=.2,o=.2,a=.2;n%t==0&&(r=.4,o=.4,a=.4),n===e&&(r=.4,o=.4,a=.4),s.push(-e,0,-n,e,0,-n,-e,0,n,e,0,n,-n,0,-e,-n,0,e,n,0,-e,n,0,e),i.push(r,o,a,1,r,o,a,1,r,o,a,1,r,o,a,1,r,o,a,1,r,o,a,1,r,o,a,1,r,o,a,1)}return{draw:{method:"arrays",mode:"LINES",offset:0,count:s.length/3},colors:{buffer:i,components:4,type:"FLOAT",normalize:!1,stride:0,offset:0},positions:{buffer:s,components:3,type:"FLOAT",normalize:!1,stride:0,offset:0}}}(16,4)),this.$programs={},this.$programs.colors=t.program(t.vertex("attribute vec4 COLOR;attribute vec4 POSITION;uniform mat4 projection;uniform mat4 transformation;uniform mat4 view;varying highp vec4 v_color;void main(void) {gl_Position = projection * view * transformation * POSITION;v_color = COLOR;}"),t.fragment("varying highp vec4 v_color;void main(void) {gl_FragColor = v_color;gl_FragColor.rgb *= gl_FragColor.a;}")),this.$programs.lights=t.program(t.vertex("attribute vec4 COLOR;attribute vec3 NORMAL;attribute vec4 POSITION;uniform vec3 directional;uniform vec3 directionalColor;uniform mat4 projection;uniform mat4 transformation;uniform mat4 view;varying highp vec4 v_color;varying highp vec3 v_light;void main(void) {gl_Position = projection * view * transformation * POSITION;v_color = COLOR;v_light = directionalColor * dot(normalize(directional), normalize(mat3(transformation) * NORMAL));}"),t.fragment("varying highp vec4 v_color;varying highp vec3 v_light;void main(void) {highp float fognear = 0.97;highp float fogfar = 1.0;highp vec4 fogcolor = vec4(0.0);highp float fogamount = smoothstep(fognear, fogfar, gl_FragCoord.z);gl_FragColor = mix(vec4(v_color.rgb * v_light * 1.0, 1.0), fogcolor, fogamount);}"))}clear(){this.$context.viewport(0,0,this.$context.canvas.width,this.$context.canvas.height),this.$context.clearColor(0,0,0,1),this.$context.clear(this.$context.COLOR_BUFFER_BIT|this.$context.DEPTH_BUFFER_BIT)}destroy(){this.$webgl.destroy()}enabledepth(){this.$context.enable(this.$context.DEPTH_TEST)}pick(e,t,s,i){const n=this.$viewer.ratio(),r=this.$webgl.pixel(e*n,(i-t)*n);console.log(r)}render(e,t,s){const i=-1!==s.indexOf("colors"),n=-1!==s.indexOf("lights");if(!0===i)this.$webgl.use(this.$programs.colors),this.$context.uniformMatrix4fv(this.$webgl.uniform("view"),!1,this.matrixview.get()),this.$context.uniformMatrix4fv(this.$webgl.uniform("projection"),!1,this.matrixprojection.get());else if(!0===n){this.$webgl.use(this.$programs.lights);const e=[0,10,10],t=[1,1,1];this.$context.uniform3fv(this.$webgl.uniform("directional"),new Float32Array(e)),this.$context.uniform3fv(this.$webgl.uniform("directionalColor"),new Float32Array(t)),this.$context.uniformMatrix4fv(this.$webgl.uniform("view"),!1,this.matrixview.get()),this.$context.uniformMatrix4fv(this.$webgl.uniform("projection"),!1,this.matrixprojection.get())}Object.values(e).forEach((e=>{const{parameters:s}=e,{type:r}=s,h=[e];let l=e;for(;!0===l.hasparent;)l=l.parent,h.unshift(l);if(-1===h.indexOf(t))return;const m=new a;h.forEach((e=>{m.translate(e.translation).rotateY(e.rotation[1]*o).rotateX(e.rotation[0]*o).rotateZ(e.rotation[2]*o).scale(e.scale)})),!0===i?(this.$context.uniformMatrix4fv(this.$webgl.uniform("transformation"),!1,m.get()),this.$meshes[r].render({positions:!0,colors:!0})):!0===n&&(this.$context.uniformMatrix4fv(this.$webgl.uniform("transformation"),!1,m.get()),this.$meshes[r].render({positions:!0,colors:!0,normals:!0}))}))}setmatrixcamera(){let e=this.$camera;const t=[e];for(;!0===e.hasparent;)e=e.parent,t.unshift(e);const s=new a;t.forEach((e=>{s.translate(e.translation).rotateY(e.rotation[1]*o).rotateX(e.rotation[0]*o).rotateZ(e.rotation[2]*o)})),this.$matrixcamera=s}setmatrixprojection(){const{parameters:e}=this.$camera,{projection:t}=e,{far:s,fieldofview:i,near:n}=t,r=i*o,h=this.$viewer.aspect();this.$matrixprojection=(new a).perspective(r,h,n,s)}usecamera(e){this.$camera=e,this.setmatrixcamera(),this.setmatrixprojection()}}(this.engine.deviceviewer,e),this.$renderer.enabledepth(),this.$renderer.clear(),this.$renderer.usecamera(this.engine.devicegame.world.camera),this.$renderer.render(this.engine.devicegame.world.models,this.engine.devicegame.world.root,["lights"])}destroy(){this.$renderer.destroy()}update(){void 0!==this.engine.deviceviewer&&(this.$renderer.clear(),this.$renderer.usecamera(this.engine.devicegame.world.camera),this.$renderer.render(this.engine.devicegame.world.models,this.engine.devicegame.world.root,["lights"]))}}},f=s.p+"904ab94261925f38033b9c6cd67e914b.mp3",u=JSON.parse('{"nodes":[{"identifier":0,"name":"Root","type":"NODE","nodes":[10,20,1648945804178,1648946091544,1648946561587,1648946626322,1649009954483,1649009989744,1649010169039,1649010426148,1649010445449],"parameters":{"translation":[0,0,0],"rotation":[0,0,0],"scale":[1,1,1]}},{"identifier":1,"name":"Hero Camera","type":"CAMERA_NODE","nodes":[],"parameters":{"translation":[0,1,-1],"rotation":[0,0,0],"projection":{"fieldofview":50,"near":0.1,"far":1000,"type":"perspective"}}},{"identifier":10,"name":"Node Hero Container","type":"NODE","nodes":[1,16],"parameters":{"translation":[0,0,0],"rotation":[0,0,0],"scale":[1,1,1]}},{"identifier":16,"name":"Cube Hero","type":"MODEL_NODE","nodes":[],"parameters":{"translation":[0,1,0],"rotation":[0,0,0],"scale":[1,1,1],"type":"hero"}},{"identifier":20,"name":"Floor","type":"MODEL_NODE","nodes":[],"parameters":{"translation":[0,-1,-900],"rotation":[0,0,0],"scale":[3,1,1000],"type":"floor"}},{"identifier":1648945804178,"name":"Cube","type":"MODEL_NODE","nodes":[],"parameters":{"translation":[-2,0,-24],"rotation":[0,0,0],"scale":[1,100,1],"type":"box"}},{"identifier":1648946091544,"name":"Cube","type":"MODEL_NODE","nodes":[],"parameters":{"translation":[0,0,-48],"rotation":[0,0,0],"scale":[1,100,1],"type":"box"}},{"identifier":1648946561587,"name":"Cube","type":"MODEL_NODE","nodes":[],"parameters":{"translation":[-2,0,-72],"rotation":[0,0,0],"scale":[1,100,1],"type":"box"}},{"identifier":1648946626322,"name":"Cube","type":"MODEL_NODE","nodes":[],"parameters":{"translation":[2,0,-72],"rotation":[0,0,0],"scale":[1,100,1],"type":"box"}},{"identifier":1649009954483,"name":"Cube","type":"MODEL_NODE","nodes":[],"parameters":{"translation":[2,0,-96],"rotation":[0,0,0],"scale":[1,100,1],"type":"box"}},{"identifier":1649009989744,"name":"Cube","type":"MODEL_NODE","nodes":[],"parameters":{"translation":[0,0,-96],"rotation":[0,0,0],"scale":[1,100,1],"type":"box"}},{"identifier":1649010169039,"name":"Cube","type":"MODEL_NODE","nodes":[],"parameters":{"translation":[0,0,-24],"rotation":[0,0,0],"scale":[1,100,1],"type":"box"}},{"identifier":1649010426148,"name":"Cube","type":"MODEL_NODE","nodes":[],"parameters":{"translation":[-2,0,-120],"rotation":[0,0,0],"scale":[1,100,1],"type":"box"}},{"identifier":1649010445449,"name":"Cube","type":"MODEL_NODE","nodes":[],"parameters":{"translation":[0,0,-120],"rotation":[0,0,0],"scale":[1,100,1],"type":"box"}}],"camera":1,"node":0}');new class{$engine;$started;$audio;constructor(){document.getElementById("start").addEventListener("click",(()=>{this.start()})),document.addEventListener("keydown",(e=>{("Enter"===e.key&&!0!==this.$started||" "===e.key&&!0!==this.$started)&&this.start()}))}restart(){this.stop(),this.start()}start(){if(!0!==this.$audio){const e=new Audio(f);e.oncanplaythrough=()=>{e.play(),e.loop=!0},this.$audio=!0}this.$engine=new p.Engine,this.$engine.$machine=this,this.$engine.devicegame=new p.DeviceGame(JSON.parse(JSON.stringify(u))),this.$engine.deviceviewer=new p.DeviceViewer(document.body),this.$engine.devicecontroller=new p.DeviceController(this.$engine.devicegame),this.$engine.addsystem(new p.SystemRender),this.$engine.addsystem(new p.SystemForward),this.$engine.start(),this.$started=!0}stop(){this.$engine.stop(),this.$engine.deviceviewer.destroy(),this.$engine.devicecontroller.destroy(),this.$engine.devicegame=void 0,delete this.$engine,this.$started=!1}}})(0,0,e)})();
//# sourceMappingURL=index.js.map