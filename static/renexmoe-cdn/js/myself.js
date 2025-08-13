!function(){"use strict";var r=.5*(Math.sqrt(3)-1),e=(3-Math.sqrt(3))/6,t=1/3,a=1/6,o=(Math.sqrt(5)-1)/4,i=(5-Math.sqrt(5))/20;function n(r){var e;e="function"==typeof r?r:r?function(){var r=0,e=0,t=0,a=1,o=(i=4022871197,function(r){r=r.toString();for(var e=0;e<r.length;e++){var t=.02519603282416938*(i+=r.charCodeAt(e));t-=i=t>>>0,i=(t*=i)>>>0,i+=4294967296*(t-=i)}return 2.3283064365386963e-10*(i>>>0)});var i;r=o(" "),e=o(" "),t=o(" ");for(var n=0;n<arguments.length;n++)(r-=o(arguments[n]))<0&&(r+=1),(e-=o(arguments[n]))<0&&(e+=1),(t-=o(arguments[n]))<0&&(t+=1);return o=null,function(){var o=2091639*r+2.3283064365386963e-10*a;return r=e,e=t,t=o-(a=0|o)}}(r):Math.random,this.p=f(e),this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);for(var t=0;t<512;t++)this.perm[t]=this.p[255&t],this.permMod12[t]=this.perm[t]%12}function f(r){var e,t=new Uint8Array(256);for(e=0;e<256;e++)t[e]=e;for(e=0;e<255;e++){var a=e+~~(r()*(256-e)),o=t[e];t[e]=t[a],t[a]=o}return t}n.prototype={grad3:new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),grad4:new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]),noise2D:function(t,a){var o,i,n=this.permMod12,f=this.perm,s=this.grad3,v=0,h=0,l=0,u=(t+a)*r,d=Math.floor(t+u),p=Math.floor(a+u),M=(d+p)*e,m=t-(d-M),c=a-(p-M);m>c?(o=1,i=0):(o=0,i=1);var y=m-o+e,w=c-i+e,g=m-1+2*e,A=c-1+2*e,x=255&d,q=255&p,D=.5-m*m-c*c;if(D>=0){var S=3*n[x+f[q]];v=(D*=D)*D*(s[S]*m+s[S+1]*c)}var U=.5-y*y-w*w;if(U>=0){var b=3*n[x+o+f[q+i]];h=(U*=U)*U*(s[b]*y+s[b+1]*w)}var F=.5-g*g-A*A;if(F>=0){var N=3*n[x+1+f[q+1]];l=(F*=F)*F*(s[N]*g+s[N+1]*A)}return 70*(v+h+l)},noise3D:function(r,e,o){var i,n,f,s,v,h,l,u,d,p,M=this.permMod12,m=this.perm,c=this.grad3,y=(r+e+o)*t,w=Math.floor(r+y),g=Math.floor(e+y),A=Math.floor(o+y),x=(w+g+A)*a,q=r-(w-x),D=e-(g-x),S=o-(A-x);q>=D?D>=S?(v=1,h=0,l=0,u=1,d=1,p=0):q>=S?(v=1,h=0,l=0,u=1,d=0,p=1):(v=0,h=0,l=1,u=1,d=0,p=1):D<S?(v=0,h=0,l=1,u=0,d=1,p=1):q<S?(v=0,h=1,l=0,u=0,d=1,p=1):(v=0,h=1,l=0,u=1,d=1,p=0);var U=q-v+a,b=D-h+a,F=S-l+a,N=q-u+2*a,C=D-d+2*a,P=S-p+2*a,T=q-1+.5,_=D-1+.5,j=S-1+.5,k=255&w,z=255&g,B=255&A,E=.6-q*q-D*D-S*S;if(E<0)i=0;else{var G=3*M[k+m[z+m[B]]];i=(E*=E)*E*(c[G]*q+c[G+1]*D+c[G+2]*S)}var H=.6-U*U-b*b-F*F;if(H<0)n=0;else{var I=3*M[k+v+m[z+h+m[B+l]]];n=(H*=H)*H*(c[I]*U+c[I+1]*b+c[I+2]*F)}var J=.6-N*N-C*C-P*P;if(J<0)f=0;else{var K=3*M[k+u+m[z+d+m[B+p]]];f=(J*=J)*J*(c[K]*N+c[K+1]*C+c[K+2]*P)}var L=.6-T*T-_*_-j*j;if(L<0)s=0;else{var O=3*M[k+1+m[z+1+m[B+1]]];s=(L*=L)*L*(c[O]*T+c[O+1]*_+c[O+2]*j)}return 32*(i+n+f+s)},noise4D:function(r,e,t,a){var n,f,s,v,h,l,u,d,p,M,m,c,y,w,g,A,x,q=this.perm,D=this.grad4,S=(r+e+t+a)*o,U=Math.floor(r+S),b=Math.floor(e+S),F=Math.floor(t+S),N=Math.floor(a+S),C=(U+b+F+N)*i,P=r-(U-C),T=e-(b-C),_=t-(F-C),j=a-(N-C),k=0,z=0,B=0,E=0;P>T?k++:z++,P>_?k++:B++,P>j?k++:E++,T>_?z++:B++,T>j?z++:E++,_>j?B++:E++;var G=P-(l=k>=3?1:0)+i,H=T-(u=z>=3?1:0)+i,I=_-(d=B>=3?1:0)+i,J=j-(p=E>=3?1:0)+i,K=P-(M=k>=2?1:0)+2*i,L=T-(m=z>=2?1:0)+2*i,O=_-(c=B>=2?1:0)+2*i,Q=j-(y=E>=2?1:0)+2*i,R=P-(w=k>=1?1:0)+3*i,V=T-(g=z>=1?1:0)+3*i,W=_-(A=B>=1?1:0)+3*i,X=j-(x=E>=1?1:0)+3*i,Y=P-1+4*i,Z=T-1+4*i,$=_-1+4*i,rr=j-1+4*i,er=255&U,tr=255&b,ar=255&F,or=255&N,ir=.6-P*P-T*T-_*_-j*j;if(ir<0)n=0;else{var nr=q[er+q[tr+q[ar+q[or]]]]%32*4;n=(ir*=ir)*ir*(D[nr]*P+D[nr+1]*T+D[nr+2]*_+D[nr+3]*j)}var fr=.6-G*G-H*H-I*I-J*J;if(fr<0)f=0;else{var sr=q[er+l+q[tr+u+q[ar+d+q[or+p]]]]%32*4;f=(fr*=fr)*fr*(D[sr]*G+D[sr+1]*H+D[sr+2]*I+D[sr+3]*J)}var vr=.6-K*K-L*L-O*O-Q*Q;if(vr<0)s=0;else{var hr=q[er+M+q[tr+m+q[ar+c+q[or+y]]]]%32*4;s=(vr*=vr)*vr*(D[hr]*K+D[hr+1]*L+D[hr+2]*O+D[hr+3]*Q)}var lr=.6-R*R-V*V-W*W-X*X;if(lr<0)v=0;else{var ur=q[er+w+q[tr+g+q[ar+A+q[or+x]]]]%32*4;v=(lr*=lr)*lr*(D[ur]*R+D[ur+1]*V+D[ur+2]*W+D[ur+3]*X)}var dr=.6-Y*Y-Z*Z-$*$-rr*rr;if(dr<0)h=0;else{var pr=q[er+1+q[tr+1+q[ar+1+q[or+1]]]]%32*4;h=(dr*=dr)*dr*(D[pr]*Y+D[pr+1]*Z+D[pr+2]*$+D[pr+3]*rr)}return 27*(n+f+s+v+h)}},n._buildPermutationTable=f,"undefined"!=typeof define&&define.amd&&define((function(){return n})),"undefined"!=typeof exports?exports.SimplexNoise=n:"undefined"!=typeof window&&(window.SimplexNoise=n),"undefined"!=typeof module&&(module.exports=n)}();
const backgroundCanvas = document.getElementById('background-canvas');
const ctx = backgroundCanvas.getContext('2d');
backgroundCanvas.width = window.innerWidth;
backgroundCanvas.height = window.innerHeight;

const simplex = new SimplexNoise();

// 配置参数
const cols = window.innerWidth;
const rows = window.innerHeight;
const cellSize = Math.min(backgroundCanvas.width / cols, backgroundCanvas.height / rows);
const contourLevels = 12;

// 生成高度图
const heightMap = [];
for (let y = 0; y <= rows; y++) {
  heightMap[y] = [];
  for (let x = 0; x <= cols; x++) {
    const nx = x / cols;
    const ny = y / rows;
    heightMap[y][x] = simplex.noise2D(nx * 3, ny * 3); // 调整倍数以控制形状大小
  }
}

// 平滑曲线插值（用于点集）
function drawSmoothLine(points) {
  if (points.length < 2) return;
  ctx.beginPath();
  ctx.moveTo(points[0][0], points[0][1]);
  for (let i = 1; i < points.length - 2; i++) {
    const xc = (points[i][0] + points[i + 1][0]) / 2;
    const yc = (points[i][1] + points[i + 1][1]) / 2;
    ctx.quadraticCurveTo(points[i][0], points[i][1], xc, yc);
  }
  // 结尾
  const n = points.length;
  ctx.quadraticCurveTo(points[n - 2][0], points[n - 2][1], points[n - 1][0], points[n - 1][1]);
  ctx.stroke();
}

// 等高线轮廓生成（采样+插值）
function drawContour(level) {
  ctx.strokeStyle = 'rgba(0,0,0,0.05)';
  ctx.lineWidth = 1;

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const tl = heightMap[y][x];
      const tr = heightMap[y][x + 1];
      const br = heightMap[y + 1][x + 1];
      const bl = heightMap[y + 1][x];

      const sx = x * cellSize;
      const sy = y * cellSize;

      const interpolate = (v1, v2, p1, p2) => {
        const t = (level - v1) / (v2 - v1);
        return [p1[0] + (p2[0] - p1[0]) * t, p1[1] + (p2[1] - p1[1]) * t];
      };

      const points = [];

      if ((tl - level) * (tr - level) < 0)
        points.push(interpolate(tl, tr, [sx, sy], [sx + cellSize, sy]));
      if ((tr - level) * (br - level) < 0)
        points.push(interpolate(tr, br, [sx + cellSize, sy], [sx + cellSize, sy + cellSize]));
      if ((br - level) * (bl - level) < 0)
        points.push(interpolate(br, bl, [sx + cellSize, sy + cellSize], [sx, sy + cellSize]));
      if ((bl - level) * (tl - level) < 0)
        points.push(interpolate(bl, tl, [sx, sy + cellSize], [sx, sy]));

      if (points.length >= 2) {
        drawSmoothLine(points);
      }
    }
  }
}

// 多层轮廓绘制
for (let i = 0; i < contourLevels; i++) {
  const level = -1 + (2 * i) / contourLevels;
  drawContour(level);
}