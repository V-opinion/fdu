google.maps.__gjsload__('geometry', function(_){var vsa=function(a,b){return Math.abs(_.Ti(b-a,-180,180))},wsa=function(a,b,c,d,e){if(!d){c=vsa(a.lng(),c)/vsa(a.lng(),b.lng());if(!e)return e=Math.sin(_.Pf(a.lat())),e=Math.log((1+e)/(1-e))/2,b=Math.sin(_.Pf(b.lat())),_.Qf(2*Math.atan(Math.exp(e+c*(Math.log((1+b)/(1-b))/2-e)))-Math.PI/2);a=e.fromLatLngToPoint(a);b=e.fromLatLngToPoint(b);return e.fromPointToLatLng(new _.Uk(a.x+c*(b.x-a.x),a.y+c*(b.y-a.y))).lat()}e=_.Pf(a.lat());a=_.Pf(a.lng());d=_.Pf(b.lat());b=_.Pf(b.lng());c=_.Pf(c);return _.Ti(_.Qf(Math.atan2(Math.sin(e)*
Math.cos(d)*Math.sin(c-b)-Math.sin(d)*Math.cos(e)*Math.sin(c-a),Math.cos(e)*Math.cos(d)*Math.sin(a-b))),-90,90)},xsa=function(a,b){a=new _.Dj(a,!1);b=new _.Dj(b,!1);return a.equals(b)},ysa=function(a,b){const c=[];let d=[0,0],e;for(let f=0,g=_.Pi(a);f<g;++f)e=b?b(a[f]):a[f],oA.tE(e[0]-d[0],c),oA.tE(e[1]-d[1],c),d=e;return c.join("")},pA={containsLocation:function(a,b){a=_.Hj(a);const c=_.Ti(a.lng(),-180,180),d=!!b.get("geodesic"),e=b.get("latLngs");var f=b.get("map");f=!d&&f?f.getProjection():null;
let g=!1;for(let k=0,m=e.getLength();k<m;++k){const p=e.getAt(k);for(let t=0,u=p.getLength();t<u;++t){const w=p.getAt(t),x=p.getAt((t+1)%u);var h=_.Ti(w.lng(),-180,180);const z=_.Ti(x.lng(),-180,180),B=Math.max(h,z);h=Math.min(h,z);(B-h>180?c>=B||c<h:c<B&&c>=h)&&wsa(w,x,c,d,f)<a.lat()&&(g=!g)}}return g||pA.isLocationOnEdge(a,b)}};_.Fa("module$exports$mapsapi$geometry$polyGeometry.PolyGeometry.containsLocation",pA.containsLocation);
pA.isLocationOnEdge=function(a,b,c){a=_.Hj(a);c=c||1E-9;const d=_.Ti(a.lng(),-180,180),e=b instanceof _.cn,f=!!b.get("geodesic"),g=b.get("latLngs");b=b.get("map");b=!f&&b?b.getProjection():null;for(let t=0,u=g.getLength();t<u;++t){const w=g.getAt(t),x=w.getLength(),z=e?x:x-1;for(let B=0;B<z;++B){var h=w.getAt(B);const C=w.getAt((B+1)%x);if(xsa(h,a)||xsa(C,a))return!0;var k=_.Ti(h.lng(),-180,180),m=_.Ti(C.lng(),-180,180);const F=Math.max(k,m),J=Math.min(k,m);if(k=Math.abs(_.Ti(k-m,-180,180))<=1E-9&&
(Math.abs(_.Ti(k-d,-180,180))<=c||Math.abs(_.Ti(m-d,-180,180))<=c)){k=a.lat();m=Math.min(h.lat(),C.lat())-c;var p=Math.max(h.lat(),C.lat())+c;k=k>=m&&k<=p}if(k)return!0;if(F-J>180?d+c>=F||d-c<=J:d+c>=J&&d-c<=F)if(h=wsa(h,C,d,f,b),Math.abs(h-a.lat())<c)return!0}}return!1};_.Fa("module$exports$mapsapi$geometry$polyGeometry.PolyGeometry.isLocationOnEdge",pA.isLocationOnEdge);var oA={decodePath:function(a){const b=_.Pi(a),c=Array(Math.floor(a.length/2));let d=0,e=0,f=0,g;for(g=0;d<b;++g){let h=1,k=0,m;do m=a.charCodeAt(d++)-63-1,h+=m<<k,k+=5;while(m>=31);e+=h&1?~(h>>1):h>>1;h=1;k=0;do m=a.charCodeAt(d++)-63-1,h+=m<<k,k+=5;while(m>=31);f+=h&1?~(h>>1):h>>1;c[g]=new _.Dj(e*1E-5,f*1E-5,!0)}c.length=g;return c}};_.Fa("module$exports$mapsapi$poly$polylineCodec.PolylineCodec.decodePath",oA.decodePath);
oA.encodePath=function(a){a instanceof _.Ml&&(a=a.getArray());a=(0,_.pk)(a);return ysa(a,function(b){return[Math.round(b.lat()*1E5),Math.round(b.lng()*1E5)]})};_.Fa("module$exports$mapsapi$poly$polylineCodec.PolylineCodec.encodePath",oA.encodePath);oA.tE=function(a,b){for(a=a<0?~(a<<1):a<<1;a>=32;)b.push(String.fromCharCode((32|a&31)+63)),a>>=5;b.push(String.fromCharCode(a+63))};var zsa={encoding:oA,spherical:_.pp,poly:pA};_.pa.google.maps.geometry=zsa;_.Ii("geometry",zsa);});