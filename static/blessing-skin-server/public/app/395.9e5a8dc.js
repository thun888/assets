(self.webpackChunkblessing_skin_server=self.webpackChunkblessing_skin_server||[]).push([[395],{1570:function(t,e){e.w=function(t){return t}},9018:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var i=n(7294),s=n(3601);function a(){(0,i.useEffect)((()=>{(0,s.j)("mounted")}),[])}},550:function(t,e,n){"use strict";var i;function s(t){return`@media (max-width: ${t}px)`}function a(t,e){return`@media (min-width: ${t}px) and (max-width: ${e}px)`}function r(t){return`@media (min-width: ${t}px)`}n.d(e,{Uo:function(){return i},Qj:function(){return s},vX:function(){return a},tS:function(){return r}}),function(t){t[t.xs=0]="xs",t[t.sm=576]="sm",t[t.md=768]="md",t[t.lg=992]="lg",t[t.xl=1200]="xl"}(i||(i={}))},7395:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return S}});var i=n(5893),s=n(7294),a=n(786),r=n(1570),o=n(9018),u=n(88),c=n(6703),h=n(2065),l=function(){this._tweens={},this._tweensAddedDuringUpdate={}};l.prototype={getAll:function(){return Object.keys(this._tweens).map(function(t){return this._tweens[t]}.bind(this))},removeAll:function(){this._tweens={}},add:function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},remove:function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},update:function(t,e){var n=Object.keys(this._tweens);if(0===n.length)return!1;for(t=void 0!==t?t:f.now();n.length>0;){this._tweensAddedDuringUpdate={};for(var i=0;i<n.length;i++){var s=this._tweens[n[i]];s&&!1===s.update(t)&&(s._isPlaying=!1,e||delete this._tweens[n[i]])}n=Object.keys(this._tweensAddedDuringUpdate)}return!0}};var d,f=new l;f.Group=l,f._nextId=0,f.nextId=function(){return f._nextId++},"undefined"==typeof self&&"undefined"!=typeof process&&process.hrtime?f.now=function(){var t=process.hrtime();return 1e3*t[0]+t[1]/1e6}:"undefined"!=typeof self&&void 0!==self.performance&&void 0!==self.performance.now?f.now=self.performance.now.bind(self.performance):void 0!==Date.now?f.now=Date.now:f.now=function(){return(new Date).getTime()},f.Tween=function(t,e){this._isPaused=!1,this._pauseStart=null,this._object=t,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._repeat=0,this._repeatDelayTime=void 0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=null,this._easingFunction=f.Easing.Linear.None,this._interpolationFunction=f.Interpolation.Linear,this._chainedTweens=[],this._onStartCallback=null,this._onStartCallbackFired=!1,this._onUpdateCallback=null,this._onRepeatCallback=null,this._onCompleteCallback=null,this._onStopCallback=null,this._group=e||f,this._id=f.nextId()},f.Tween.prototype={getId:function(){return this._id},isPlaying:function(){return this._isPlaying},isPaused:function(){return this._isPaused},to:function(t,e){return this._valuesEnd=Object.create(t),void 0!==e&&(this._duration=e),this},duration:function(t){return this._duration=t,this},start:function(t){for(var e in this._group.add(this),this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._startTime=void 0!==t?"string"==typeof t?f.now()+parseFloat(t):t:f.now(),this._startTime+=this._delayTime,this._valuesEnd){if(this._valuesEnd[e]instanceof Array){if(0===this._valuesEnd[e].length)continue;this._valuesEnd[e]=[this._object[e]].concat(this._valuesEnd[e])}void 0!==this._object[e]&&(void 0===this._valuesStart[e]&&(this._valuesStart[e]=this._object[e]),this._valuesStart[e]instanceof Array==0&&(this._valuesStart[e]*=1),this._valuesStartRepeat[e]=this._valuesStart[e]||0)}return this},stop:function(){return this._isPlaying?(this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,null!==this._onStopCallback&&this._onStopCallback(this._object),this.stopChainedTweens(),this):this},end:function(){return this.update(1/0),this},pause:function(t){return this._isPaused||!this._isPlaying||(this._isPaused=!0,this._pauseStart=void 0===t?f.now():t,this._group.remove(this)),this},resume:function(t){return this._isPaused&&this._isPlaying?(this._isPaused=!1,this._startTime+=(void 0===t?f.now():t)-this._pauseStart,this._pauseStart=0,this._group.add(this),this):this},stopChainedTweens:function(){for(var t=0,e=this._chainedTweens.length;t<e;t++)this._chainedTweens[t].stop()},group:function(t){return this._group=t,this},delay:function(t){return this._delayTime=t,this},repeat:function(t){return this._repeat=t,this},repeatDelay:function(t){return this._repeatDelayTime=t,this},yoyo:function(t){return this._yoyo=t,this},easing:function(t){return this._easingFunction=t,this},interpolation:function(t){return this._interpolationFunction=t,this},chain:function(){return this._chainedTweens=arguments,this},onStart:function(t){return this._onStartCallback=t,this},onUpdate:function(t){return this._onUpdateCallback=t,this},onRepeat:function(t){return this._onRepeatCallback=t,this},onComplete:function(t){return this._onCompleteCallback=t,this},onStop:function(t){return this._onStopCallback=t,this},update:function(t){var e,n,i;if(t<this._startTime)return!0;for(e in!1===this._onStartCallbackFired&&(null!==this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),n=(t-this._startTime)/this._duration,n=0===this._duration||n>1?1:n,i=this._easingFunction(n),this._valuesEnd)if(void 0!==this._valuesStart[e]){var s=this._valuesStart[e]||0,a=this._valuesEnd[e];a instanceof Array?this._object[e]=this._interpolationFunction(a,i):("string"==typeof a&&(a="+"===a.charAt(0)||"-"===a.charAt(0)?s+parseFloat(a):parseFloat(a)),"number"==typeof a&&(this._object[e]=s+(a-s)*i))}if(null!==this._onUpdateCallback&&this._onUpdateCallback(this._object,n),1===n){if(this._repeat>0){for(e in isFinite(this._repeat)&&this._repeat--,this._valuesStartRepeat){if("string"==typeof this._valuesEnd[e]&&(this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(this._valuesEnd[e])),this._yoyo){var r=this._valuesStartRepeat[e];this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=r}this._valuesStart[e]=this._valuesStartRepeat[e]}return this._yoyo&&(this._reversed=!this._reversed),void 0!==this._repeatDelayTime?this._startTime=t+this._repeatDelayTime:this._startTime=t+this._delayTime,null!==this._onRepeatCallback&&this._onRepeatCallback(this._object),!0}null!==this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var o=0,u=this._chainedTweens.length;o<u;o++)this._chainedTweens[o].start(this._startTime+this._duration);return!1}return!0}},f.Easing={Linear:{None:function(t){return t}},Quadratic:{In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}},Cubic:{In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}},Quartic:{In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}},Quintic:{In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},Sinusoidal:{In:function(t){return 1-Math.cos(t*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return.5*(1-Math.cos(Math.PI*t))}},Exponential:{In:function(t){return 0===t?0:Math.pow(1024,t-1)},Out:function(t){return 1===t?1:1-Math.pow(2,-10*t)},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))}},Circular:{In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},Elastic:{In:function(t){return 0===t?0:1===t?1:-Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)},Out:function(t){return 0===t?0:1===t?1:Math.pow(2,-10*t)*Math.sin(5*(t-.1)*Math.PI)+1},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?-.5*Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI):.5*Math.pow(2,-10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)+1}},Back:{In:function(t){var e=1.70158;return t*t*((e+1)*t-e)},Out:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},InOut:function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)}},Bounce:{In:function(t){return 1-f.Easing.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?.5*f.Easing.Bounce.In(2*t):.5*f.Easing.Bounce.Out(2*t-1)+.5}}},f.Interpolation={Linear:function(t,e){var n=t.length-1,i=n*e,s=Math.floor(i),a=f.Interpolation.Utils.Linear;return e<0?a(t[0],t[1],i):e>1?a(t[n],t[n-1],n-i):a(t[s],t[s+1>n?n:s+1],i-s)},Bezier:function(t,e){for(var n=0,i=t.length-1,s=Math.pow,a=f.Interpolation.Utils.Bernstein,r=0;r<=i;r++)n+=s(1-e,i-r)*s(e,r)*t[r]*a(i,r);return n},CatmullRom:function(t,e){var n=t.length-1,i=n*e,s=Math.floor(i),a=f.Interpolation.Utils.CatmullRom;return t[0]===t[n]?(e<0&&(s=Math.floor(i=n*(1+e))),a(t[(s-1+n)%n],t[s],t[(s+1)%n],t[(s+2)%n],i-s)):e<0?t[0]-(a(t[0],t[0],t[1],t[1],-i)-t[0]):e>1?t[n]-(a(t[n],t[n],t[n-1],t[n-1],i-n)-t[n]):a(t[s?s-1:0],t[s],t[n<s+1?n:s+1],t[n<s+2?n:s+2],i-s)},Utils:{Linear:function(t,e,n){return(e-t)*n+t},Bernstein:function(t,e){var n=f.Interpolation.Utils.Factorial;return n(t)/n(e)/n(t-e)},Factorial:(d=[1],function(t){var e=1;if(d[t])return d[t];for(var n=t;n>1;n--)e*=n;return d[t]=e,e}),CatmullRom:function(t,e,n,i,s){var a=.5*(n-t),r=.5*(i-e),o=s*s;return(2*e-2*n+a+r)*(s*o)+(-3*e+3*n-2*a-r)*o+a*s+e}}},f.version="18.5.0";var _=f,p=n(8848),v=n(550),m=s.memo((t=>{const e=~~(t.used+t.unused),n=t.used/e*100;return(0,i.jsxs)("div",Object.assign({className:`info-box bg-${t.color}`},{children:[(0,i.jsx)("span",Object.assign({className:"info-box-icon"},{children:(0,i.jsx)("i",{className:`fas fa-${t.icon}`},void 0)}),void 0),(0,i.jsxs)("div",Object.assign({className:"info-box-content"},{children:[(0,i.jsx)("span",Object.assign({className:"info-box-text"},{children:t.name}),void 0),(0,i.jsxs)("span",Object.assign({className:"info-box-number"},{children:[(0,i.jsx)("b",{children:t.used},void 0)," / ",e," ",t.unit]}),void 0),(0,i.jsx)("div",Object.assign({className:"progress"},{children:(0,i.jsx)("div",{className:"progress-bar",style:{width:`${n}%`}},void 0)}),void 0)]}),void 0)]}),void 0)}));function g(t,e,n){if(n){const e=(new Date).setHours(0,0,0,0),n=e+864e5-Date.now();return t.valueOf()<e?0:n}return t.valueOf()+36e5*e-Date.now()}function b(t){const e=t/6e4;return e<60?(0,u.t)("user.signRemainingTime",{time:~~e,unit:(0,u.t)("user.timeUnitMin")}):(0,u.t)("user.signRemainingTime",{time:~~(e/60),unit:(0,u.t)("user.timeUnitHour")})}var w=s.memo((t=>{const{lastSign:e,signGap:n,canSignAfterZero:s}=t,a=g(e,n,s),r=b(a),o=a<=0;return(0,i.jsxs)("button",Object.assign({className:"btn bg-gradient-primary pl-4 pr-4",role:"button",disabled:!o||t.isLoading,onClick:t.onClick},{children:[(0,i.jsx)("i",{className:"far fa-calendar-check","aria-hidden":"true"},void 0),"  ",o?(0,u.t)("user.sign"):r]}),void 0)}));const j=a.Z.p`
  font-weight: bold;
  margin-top: 5px;
  ${v.Qj(v.Uo.md)} {
    margin-top: 12px;
  }
`,x=a.Z.p`
  font-family: 'Minecraft';
  font-size: 50px;
  margin-top: 20px;
  cursor: help;
`,y=a.Z.p`
  font-size: smaller;
  margin-top: 20px;
`;var S=(0,r.w)((()=>{const[t,e]=(0,s.useState)(!1),[n,a]=(0,s.useState)(0),[r,l]=(0,s.useState)(0),[d,f]=(0,s.useState)(0),[v,S]=function(t){const[e,n]=(0,s.useState)(0),i=(0,s.useRef)(e),[a,r]=(0,s.useState)(0);return(0,s.useEffect)((()=>{new _.Tween(i).to({current:a},1e3).start(),function t(){requestAnimationFrame(t),_.update(),n(i.current)}()}),[a]),[e,r]}(),[O,I]=(0,s.useState)(1),[C,k]=(0,s.useState)(1),[M,T]=(0,s.useState)(new Date),[P,E]=(0,s.useState)(!1),[N,A]=(0,s.useState)(24);(0,o.Z)(),(0,s.useEffect)((()=>{(async()=>{e(!0);const t=await c.U2(p.Z.user.score());a(t.usage.players),l(t.usage.storage),S(t.user.score),f(t.user.score),I(t.rate.players),k(t.rate.storage),T(new Date(t.user.lastSignAt)),E(t.signAfterZero),A(t.signGapTime),e(!1)})()}),[]);const U=(0,s.useCallback)((async()=>{e(!0);const{code:t,message:n,data:i}=await c.v_(p.Z.user.sign());if(0===t)h.A.success(n),T(new Date),S(i.score),f(i.score);else if(1===t){const t=g(M,N,P);h.A.warning(b(t))}else h.A.error(n);e(!1)}),[]);return(0,i.jsxs)("div",Object.assign({className:"card card-primary card-outline"},{children:[(0,i.jsx)("div",Object.assign({className:"card-header"},{children:(0,i.jsx)("h3",Object.assign({className:"card-title"},{children:(0,u.t)("user.used.title")}),void 0)}),void 0),(0,i.jsx)("div",Object.assign({className:"card-body"},{children:(0,i.jsxs)("div",Object.assign({className:"row"},{children:[(0,i.jsx)("div",{className:"col-md-1"},void 0),(0,i.jsxs)("div",Object.assign({className:"col-md-6"},{children:[(0,i.jsx)(m,{color:"teal",icon:"gamepad",name:(0,u.t)("user.used.players"),used:n,unused:d/O,unit:""},void 0),r>1024?(0,i.jsx)(m,{color:"maroon",icon:"hdd",name:(0,u.t)("user.used.storage"),used:~~(r/1024),unused:~~(d/C/1024),unit:"MB"},void 0):(0,i.jsx)(m,{color:"maroon",icon:"hdd",name:(0,u.t)("user.used.storage"),used:r,unused:d/C,unit:"KB"},void 0)]}),void 0),(0,i.jsxs)("div",Object.assign({className:"col-md-4 text-center"},{children:[(0,i.jsx)(j,{children:(0,u.t)("user.cur-score")},void 0),(0,i.jsx)(x,Object.assign({"data-toggle":"modal","data-target":"#modal-score-instruction"},{children:~~v}),void 0),(0,i.jsx)(y,{children:(0,u.t)("user.score-notice")},void 0)]}),void 0)]}),void 0)}),void 0),(0,i.jsx)("div",Object.assign({className:"card-footer"},{children:(0,i.jsx)(w,{isLoading:t,lastSign:M,canSignAfterZero:P,signGap:N,onClick:U},void 0)}),void 0)]}),void 0)}))}}]);