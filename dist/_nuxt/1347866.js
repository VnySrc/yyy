(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{301:function(t,o,e){var content=e(345);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(53).default)("6d626096",content,!0,{sourceMap:!1})},344:function(t,o,e){"use strict";e(301)},345:function(t,o,e){var r=e(52)(!1);r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]),r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&display=swap);"]),r.push([t.i,'*{scrollbar-width:thin}::-webkit-scrollbar{width:5px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background-color:#1d1d1d;border-radius:.5rem}*,:after,:before{margin:0;padding:0;box-sizing:inherit}body,html{font-size:62.5%;box-sizing:border-box}a{text-decoration:none}li{list-style:none}html{width:100vw;min-height:100vh;position:relative;background:#d5dadf;background:linear-gradient(45deg,#dfedf4,#c2d4e0 50%,#dfedf4)}button{border:none;text-decoration:none}@-webkit-keyframes scaling{0%{transform:scale(1)}to{transform:scale(1.1)}}@keyframes scaling{0%{transform:scale(1)}to{transform:scale(1.1)}}@-webkit-keyframes Color{0%{background-position:50% 0}50%{background-position:50% 100%}to{background-position:50% 0}}@keyframes Color{0%{background-position:50% 0}50%{background-position:50% 100%}to{background-position:50% 0}}.post{padding:4rem 1.5rem}@media(min-width:600px){.post{padding:4rem 2rem}}@media(min-width:900px){.post{padding:6rem 12rem}}.post h1{font-size:3rem;color:#0075db;margin:0 0 2rem}.post h2{color:#f5585d;margin:0 0 1rem}.post h2,.post h3,.post h4,.post h5,.post h6{font-size:2rem;padding:0 0 0 .5rem;border-left:.5rem solid #a1b3c1}.post h3,.post h4,.post h5,.post h6{margin:2rem 0;color:#3b506e}.post p{margin:1rem 0;font-size:2rem;color:#789;font-family:"Arvo",serif}.post a{color:#3b506e}.nuxt-content{display:flex;height:100%;flex-direction:column;justify-content:center}',""]),t.exports=r},370:function(t,o,e){"use strict";e.r(o);var r=e(3),n=(e(35),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function o(){var e,r,n;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return e=t.$content,r=t.params,o.next=3,e("blog",r.slug).fetch();case 3:return n=o.sent,o.abrupt("return",{message:"",blog:n});case 5:case"end":return o.stop()}}),o)})))()}}),c=(e(344),e(4)),component=Object(c.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"post"},[e("h2",[t._v(t._s(t.blog.tag))]),t._v(" "),e("h1",[t._v(t._s(t.blog.titulo))]),t._v(" "),e("nuxt-content",{attrs:{document:t.blog}})],1)}),[],!1,null,null,null);o.default=component.exports}}]);