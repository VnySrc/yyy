(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{279:function(e,t){},280:function(e,t){},297:function(e,t,r){var content=r(338);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(53).default)("048ccbb8",content,!0,{sourceMap:!1})},337:function(e,t,r){"use strict";r(297)},338:function(e,t,r){var o=r(52)(!1);o.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]),o.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&display=swap);"]),o.push([e.i,"*{scrollbar-width:thin}::-webkit-scrollbar{width:5px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background-color:#1d1d1d;border-radius:.5rem}*,:after,:before{margin:0;padding:0;box-sizing:inherit}body,html{font-size:62.5%;box-sizing:border-box}a{text-decoration:none}li{list-style:none}html{width:100vw;min-height:100vh;position:relative;background:#d5dadf;background:linear-gradient(45deg,#dfedf4,#c2d4e0 50%,#dfedf4)}button{border:none;text-decoration:none}@-webkit-keyframes scaling{0%{transform:scale(1)}to{transform:scale(1.1)}}@keyframes scaling{0%{transform:scale(1)}to{transform:scale(1.1)}}@-webkit-keyframes Color{0%{background-position:50% 0}50%{background-position:50% 100%}to{background-position:50% 0}}@keyframes Color{0%{background-position:50% 0}50%{background-position:50% 100%}to{background-position:50% 0}}@media(min-width:1800px){.estoque{max-width:100%!important;padding:8rem}}.estoque_filter{margin:0 0 3rem}@media(min-width:900px){.estoque_filter{display:flex}}.estoque_filter div{display:flex;justify-content:center;background-color:#f4f4f4;border-radius:5rem;padding:1rem}@media(min-width:600px){.estoque_filter div{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}}@media(min-width:900px){.estoque_filter div{justify-content:flex-start}}.estoque_filter div select{color:#566b83;border:none;font-weight:700;font-size:1.2rem;background-color:transparent;text-align:center;cursor:pointer}@media(min-width:900px){.estoque_filter div select{width:20rem}}.estoque_filter div select:hover{color:#0075db}.estoque_filter div select:nth-child(2){margin:0 1rem}.estoque_cards{display:flex;flex-direction:column;grid-gap:3rem;gap:3rem}@media(min-width:600px){.estoque_cards{display:grid;grid-gap:2rem;gap:2rem;grid-template-columns:repeat(2,1fr)}}@media(min-width:900px){.estoque_cards{grid-template-columns:repeat(3,1fr);grid-gap:3rem;gap:3rem}}@media(min-width:1800px){.estoque_cards{grid-template-columns:repeat(4,1fr)}}.estoque_cards_card{min-width:15rem}.estoque_cards_card_info{height:100%;padding:1rem;overflow:hidden;border-radius:.5rem;background:linear-gradient(45deg,#eef6f9,#dfedf4);box-shadow:.1rem .1rem 1rem rgba(0,0,0,.1);display:flex;flex-direction:column;justify-content:space-between}.estoque_cards_card_info_img{position:relative;overflow:hidden;border-radius:.5rem;height:22rem;margin:0 0 1rem}.estoque_cards_card_info_img img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;position:absolute;-o-object-position:center;object-position:center}.estoque_cards_card_info_title h1{font-size:2.2rem;color:#566b83}.estoque_cards_card_info_title h2{color:#789;font-size:1.2rem;margin:.5rem 0 0;flex-wrap:nowrap}.estoque_cards_card_info_price{width:100%;display:flex;padding:1rem 0 0;flex-direction:column}.estoque_cards_card_info_price h3{margin:4rem 0 0;padding:0 0 1rem;font-size:2rem;text-align:center;border-bottom:.2rem solid #c2d4e0;color:#3b506e}.estoque_cards_card_info_price div{display:flex;justify-content:space-around}.estoque_cards_card_info_price div span{font-size:1.4rem;font-weight:700;margin:1rem 0 0;color:#a1b3c1}.estoque_cards_card:hover img{-webkit-animation:scaling 1s both;animation:scaling 1s both}.estoque_cards_card:hover h1{color:#0098ff}",""]),e.exports=o},368:function(e,t,r){"use strict";r.r(t);var o=r(3),n=(r(35),r(11),r(23),new(r(261).Parser)({explicitRoot:!1,explicitArray:!1})),c={data:function(){return{cars:[],sortType:"",sortModel:"",sortBrand:""}},head:{title:"Avenida Veículos",titleTemplate:"Confira nosso estoque | %s"},filters:{gas:function(e){return"Gasolina e álcool"===e?"Flex":e},price:function(e){return Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e)},km:function(e){return Intl.NumberFormat("pt-BR",{style:"unit",unit:"kilometer"}).format(e)}},computed:{sortItem:function(){this.sortType,"priceUp"==this.sortType&&(this.cars=this.cars.sort((function(e,t){return t.valor_final-e.valor_final}))),"priceDown"==this.sortType&&(this.cars=this.cars.sort((function(e,t){return e.valor_final-t.valor_final}))),"yearUp"==this.sortType&&(this.cars=this.cars.sort((function(e,t){return t.ano_fabricacao_descricao-e.ano_fabricacao_descricao}))),"yearDown"==this.sortType&&(this.cars=this.cars.sort((function(e,t){return e.ano_fabricacao_descricao-t.ano_fabricacao_descricao}))),"price40"==this.sortType&&(this.cars=this.cars.filter((function(e){return e.valor_final<=4e4}))),"price50"==this.sortType&&(this.cars=this.cars.filter((function(e){return e.valor_final<=5e4}))),"price60"==this.sortType&&(this.cars=this.cars.filter((function(e){return e.valor_final<=6e4})))},getBrand:function(){return this.cars.map((function(e){return e.marca_descricao})).sort().filter((function(e,t,r){return r.indexOf(e)===t}))},getModel:function(){return this.cars.map((function(e){return e.modelo_descricao})).sort().filter((function(e,t,r){return r.indexOf(e)===t}))}},methods:{orderModel:function(e){this.sortModel==e.target.value&&(this.cars=this.cars.filter((function(t){return t.modelo_descricao===e.target.value})))},orderBrand:function(e){this.sortBrand==e.target.value&&(this.cars=this.cars.filter((function(t){return t.marca_descricao===e.target.value})))},cleanFilter:function(){window.location.reload(!1)}},asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var r,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$axios,setInterval(Object(o.a)(regeneratorRuntime.mark((function e(){var t,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.$get();case 2:return t=e.sent,e.next=5,n.parseStringPromise(t).then((function(e){return e.veiculo}));case 5:return o=e.sent,e.abrupt("return",{cars:o});case 7:case"end":return e.stop()}}),e)}))),6e4),t.next=4,r.$get();case 4:return c=t.sent,t.next=7,n.parseStringPromise(c).then((function(e){return e.veiculo}));case 7:return l=t.sent,t.abrupt("return",{cars:l});case 9:case"end":return t.stop()}}),t)})))()}},l=(r(337),r(4)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"estoque"},[r("div",{staticClass:"estoque_filter"},[r("div",[r("select",{directives:[{name:"model",rawName:"v-model",value:e.sortBrand,expression:"sortBrand"}],on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.sortBrand=t.target.multiple?r:r[0]},function(t){return e.orderBrand(t)}]}},[r("option",{attrs:{value:""},on:{click:e.cleanFilter}},[e._v("Marca")]),e._v(" "),e._l(e.getBrand,(function(t,o){return r("option",{key:o,domProps:{value:t}},[e._v("\n          "+e._s(t)+"\n        ")])}))],2),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.sortModel,expression:"sortModel"}],on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.sortModel=t.target.multiple?r:r[0]},function(t){return e.orderModel(t)}]}},[r("option",{attrs:{value:""},on:{click:e.cleanFilter}},[e._v("Modelo")]),e._v(" "),e._l(e.getModel,(function(t,o){return r("option",{key:o,domProps:{value:t}},[e._v("\n          "+e._s(t)+"\n        ")])}))],2),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.sortType,expression:"sortType"}],attrs:{change:e.sortItem},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.sortType=t.target.multiple?r:r[0]}}},[r("option",{attrs:{value:""},on:{click:e.cleanFilter}},[e._v("A - Z")]),e._v(" "),r("option",{attrs:{value:"yearUp"}},[e._v("Mais novo")]),e._v(" "),r("option",{attrs:{value:"yearDown"}},[e._v("Mais velho")]),e._v(" "),r("option",{attrs:{value:"priceUp"}},[e._v("Maior preço")]),e._v(" "),r("option",{attrs:{value:"priceDown"}},[e._v("Menor preço")]),e._v(" "),r("option",{attrs:{value:"price40"}},[e._v("Até 40 mil")]),e._v(" "),r("option",{attrs:{value:"price50"}},[e._v("Até 50 mil")]),e._v(" "),r("option",{attrs:{value:"price60"}},[e._v("Até 60 mil")])])])]),e._v(" "),r("div",{staticClass:"estoque_cards"},e._l(e.cars,(function(t){return r("nuxt-link",{key:t.id,staticClass:"estoque_cards_card",attrs:{to:"/estoque/"+t.id}},[r("div",{staticClass:"estoque_cards_card_info"},[r("div",{staticClass:"estoque_cards_card_info_img"},[r("img",{attrs:{src:t.fotos.imagem[0],loading:"lazy"}})]),e._v(" "),r("div",{staticClass:"estoque_cards_card_info_title"},[r("h1",[e._v(e._s(t.marca_descricao)+" "+e._s(t.modelo_descricao))]),e._v(" "),r("h2",[e._v(e._s(t.versao_descricao))])]),e._v(" "),r("div",{staticClass:"estoque_cards_card_info_price"},[r("h3",[e._v(e._s(e._f("price")(t.valor_final)))]),e._v(" "),r("div",[r("span",[e._v(e._s(t.ano_fabricacao_descricao)+" / "+e._s(t.ano_modelo_descricao))]),e._v(" "),r("span",[e._v(e._s(e._f("gas")(t.combustivel_descricao)))]),e._v(" "),r("span",[e._v(e._s(e._f("km")(t.kilometragem)))])])])])])})),1)])}),[],!1,null,null,null);t.default=component.exports}}]);