Moousture.iPhoneProbe=new Class({allowed:false,Implements:[Options],options:{touched:1},initialize:function(t,n){this.pos={x:-1,y:-1};this.setOptions(n);var r=function(t){e=new Event(t);if(t.touches.length==this.options.touched){e.stop();this.pos.x=t.touches[0].pageX;this.pos.y=t.touches[0].pageY}};t.addEventListener("touchmove",r.bind(this),false)},probe:function(){pos={};$extend(pos,this.pos);return pos}})