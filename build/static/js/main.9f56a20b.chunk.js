(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{111:function(e,a,t){},112:function(e,a,t){},113:function(e,a,t){},114:function(e,a,t){},115:function(e,a,t){},117:function(e,a,t){},119:function(e,a,t){},136:function(e,a,t){},138:function(e,a,t){},139:function(e,a,t){},140:function(e,a,t){},141:function(e,a,t){},142:function(e,a,t){},143:function(e,a,t){},144:function(e,a,t){},159:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(17),c=t.n(r),m=(t(93),t(69)),i=t(3),o=(t(94),t(95),t(70)),s=t.n(o),u=t(74),E=t.n(u),d=t(9),p=Object(n.createContext)(),h=function(e){var a=e.reducer,t=e.initialState,r=e.children;return l.a.createElement(p.Provider,{value:Object(n.useReducer)(a,t)},r)},g=function(){return Object(n.useContext)(p)},_=t(51),f=t.n(_),b=f.a.initializeApp({apiKey:"AIzaSyCCC_H5sLkuNxiOAiwv-YiQ15ZY4WSBeF8",authDomain:"web-5fefa.firebaseapp.com",projectId:"web-5fefa",storageBucket:"web-5fefa.appspot.com",messagingSenderId:"102509639077",appId:"1:102509639077:web:18f3afe25b0415cb8be44c",measurementId:"G-302L6LTWLS"}).firestore(),v=f.a.auth();var N=function(){var e=g(),a=Object(i.a)(e,2),t=a[0],n=t.basket,r=t.user;return a[1],l.a.createElement("div",{id:"nav-top"},l.a.createElement("div",{className:"header"},l.a.createElement(d.b,{to:"/"},l.a.createElement("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png"})),l.a.createElement("div",{className:"header__search"},l.a.createElement("input",{className:"header__searchInput",type:"text"}),l.a.createElement(s.a,{className:"header__searchIcon"})),l.a.createElement("div",{className:"header__nav"},l.a.createElement(d.b,{to:!r&&"/login"},l.a.createElement("div",{onClick:function(){r&&v.signOut()},className:"header__option"},l.a.createElement("span",{className:"header_optionLineOne"},"Hello ",r?r.email:"Guest"),l.a.createElement("span",{className:"header_optionLineTwo"},r?"Sign Out":"Sign In"))),l.a.createElement(d.b,{to:"/orders"},l.a.createElement("div",{className:"header__option"},l.a.createElement("span",{className:"header_optionLineOne"},"Returns"),l.a.createElement("span",{className:"header_optionLineTwo"},"& Orders"))),l.a.createElement("div",{className:"header__option"},l.a.createElement("span",{className:"header_optionLineOne"},"Your"),l.a.createElement("span",{className:"header_optionLineTwo"},"Prime")),l.a.createElement(d.b,{to:"/checkout"},l.a.createElement("div",{className:"header__optionBasket"},l.a.createElement(E.a,null),l.a.createElement("span",{className:"header_optionLineTwo header__basketCount"},null===n||void 0===n?void 0:n.length))))),l.a.createElement("div",{className:"headerSecondary"},l.a.createElement("div",{className:"header__nav"},l.a.createElement("div",{className:"header__option"},l.a.createElement("span",{className:"header_optionLineOne"},"tructruong843@gmail.com")),l.a.createElement("div",{className:"header__option"},l.a.createElement("span",{className:"headerSecondary_optionLineTwo"},"Today's Deals")),l.a.createElement("div",{className:"header__option"},l.a.createElement("span",{className:"headerSecondary_optionLineTwo"},"Customer Service")),l.a.createElement("div",{className:"header__option"},l.a.createElement("span",{className:"headerSecondary_optionLineTwo"},"Gift Cards")),l.a.createElement("div",{className:"header__option"},l.a.createElement("span",{className:"headerSecondary_optionLineTwo"},"Registry")),l.a.createElement("div",{className:"header__option"},l.a.createElement("span",{className:"headerSecondary_optionLineTwo"},"Sell")),l.a.createElement("div",{className:"header__option"},l.a.createElement("span",{className:"headerSecondary_optionLast"},"Get Free Shipping")))))};t(111),t(112);var y=function(e){e.productList;var a=e.id,t=e.title,n=e.image,r=e.price,c=e.rating,m=g(),o=Object(i.a)(m,2),s=(o[0].basket,o[1]);return l.a.createElement("div",{className:"product"},l.a.createElement("div",{className:"product_info"},l.a.createElement("p",null,t),l.a.createElement("p",{className:"product__price"},l.a.createElement("small",null,"$"),l.a.createElement("strong",null,r)),l.a.createElement("div",{className:"product__rating"},Array(c).fill().map((function(e,a){return l.a.createElement("p",null,"\u2b50")})))),l.a.createElement("img",{src:n,alt:""}),l.a.createElement("button",{onClick:function(){s({type:"ADD_TO_BASKET",item:{id:a,title:t,image:n,price:r,rating:c}})},className:"add-cart"},"Add to Basket"),l.a.createElement("div",null))};var S=function(){return l.a.createElement("div",{className:"home"},l.a.createElement("div",{className:"home__container"},l.a.createElement("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:""}),l.a.createElement("div",{className:"home__row"},l.a.createElement(y,{key:"1001",id:"1001",title:"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",price:29.99,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",rating:5}),l.a.createElement(y,{key:"1002",id:"1002",title:"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",price:239,image:"https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg",rating:4})),l.a.createElement("div",{className:"home__row"},l.a.createElement(y,{key:"1003",id:"1003",title:"Fitbit Charge 4 Fitness and Activity Tracker with Built-in GPS, Heart Rate, Sleep & Swim Tracking, Black/Black, One Size (S &L Bands Included)",price:143,image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg",rating:3}),l.a.createElement(y,{key:"1004",id:"1004",title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",price:98.99,image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$",rating:5}),l.a.createElement(y,{key:"1005",id:"1005",title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",price:598.99,image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg",rating:4})),l.a.createElement("div",{className:"home__row"},l.a.createElement(y,{key:"1006",id:"1006",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",price:1094.98,image:"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg",rating:4})),l.a.createElement("h2",{className:"home__title"},"Top Beauty & Personal Care products"),l.a.createElement("div",{className:"home__row"},l.a.createElement(y,{key:"1007",id:"1007",title:"Neutrogena Makeup Remover Cleansing Face Wipes",price:11.96,image:"https://m.media-amazon.com/images/I/41+OcSh2YsL._AC_SY200_.jpg",rating:5}),l.a.createElement(y,{key:"1008",id:"1008",title:"CeraVe Moisturizing Cream",price:15.28,image:"https://m.media-amazon.com/images/I/5118XlrWwlL._AC_SY200_.jpg",rating:5}),l.a.createElement(y,{key:"1009",id:"1009",title:"REVLON One-Step Hair Dryer And Volumizer Hot Air Brush, Black, Packaging May Vary",price:41.99,image:"https://m.media-amazon.com/images/I/41yn8u3qJPL._AC_SY200_.jpg",rating:4}),l.a.createElement(y,{key:"1010",id:"1010",title:"Crest 3D White Professional Effects Whitestrips 20 Treatments",price:48,image:"https://m.media-amazon.com/images/I/51tyP0EgjUL._AC_SY200_.jpg",rating:5})),l.a.createElement("h2",{className:"home__title"},"Our favorite Toys"),l.a.createElement("div",{className:"home__row"},l.a.createElement(y,{key:"1011",id:"1011",title:"Play-Doh Modeling Compound 10-Pack Case of Colors",price:7.99,image:"https://m.media-amazon.com/images/I/51d5cqa2fVL._AC_SY200_.jpg",rating:6}),l.a.createElement(y,{key:"1012",id:"1012",title:"The Resistance: Avalon Social Deduction Game",price:12.9,image:"https://m.media-amazon.com/images/I/51-wsV9iCqL._AC_SY200_.jpg",rating:5}),l.a.createElement(y,{key:"1013",id:"1013",title:"VTech KidiZoom Smartwatch DX2",price:56.56,image:"https://m.media-amazon.com/images/I/51aIDYrc84L._AC_SY200_.jpg",rating:4}),l.a.createElement(y,{key:"1014",id:"1014",title:"Crayola Colored Pencil Set",price:5.97,image:"https://m.media-amazon.com/images/I/51dgO2O9okL._AC_SY200_.jpg",rating:5}),l.a.createElement(y,{key:"1015",id:"1015",title:"Jenga Classic Game",price:9.99,image:"https://m.media-amazon.com/images/I/519cveTryBL._AC_SY200_.jpg",rating:5})),l.a.createElement("div",{className:"home__line"}),l.a.createElement("div",{className:"home__signIn"},l.a.createElement("h4",null,"See personalized recommendations"),l.a.createElement("div",{className:"home__buttonSignIn"},l.a.createElement(d.b,{to:"/login"},l.a.createElement("h3",{className:"home__h3__signin"},"Sign in")))),l.a.createElement("div",{className:"home__register"},l.a.createElement("h4",null,"New customer?"),l.a.createElement("div",{className:"home__buttonRegister"},l.a.createElement(d.b,{to:"/register"},l.a.createElement("h3",{className:"home__h3__register"},"Start here.")))),l.a.createElement("br",null),l.a.createElement("div",{className:"home__line"})))};t(113),t(114);var k=function(e){e.key;var a=e.id,t=e.title,n=e.image,r=e.price,c=e.rating,m=e.hideButton,o=g(),s=Object(i.a)(o,2),u=(s[0].basket,s[1]);return l.a.createElement("div",{className:"checkoutProduct"},l.a.createElement("img",{className:"checkoutProduct__image",src:n,alt:""}),l.a.createElement("div",{className:"checkoutProduct__info"},l.a.createElement("p",{className:"checkoutProduct__title"},t),l.a.createElement("p",{className:"checkoutProduct__price"},l.a.createElement("small",null,"$"),l.a.createElement("strong",null,r)),l.a.createElement("div",{className:"checkoutProduct__rating"},Array(c).fill().map((function(e,a){return l.a.createElement("p",null,"\u2b50")}))),!m&&l.a.createElement("button",{onClick:function(){u({type:"REMOVE_FROM_BASKET",id:a})}},"Remove from Basket")))},C=t(58),O=t(20),A=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,a){return a.price+e}),0)},j=function(e,a){switch(console.log(a),a.type){case"ADD_TO_BASKET":return Object(O.a)(Object(O.a)({},e),{},{basket:[].concat(Object(C.a)(e.basket),[a.item])});case"EMPTY_BASKET":return Object(O.a)(Object(O.a)({},e),{},{basket:[]});case"REMOVE_FROM_BASKET":var t=e.basket.findIndex((function(e){return e.id===a.id})),n=Object(C.a)(e.basket);return t>=0?n.splice(t,1):console.warn("Cant remove product (id: ".concat(a.id,") as its not in basket!")),Object(O.a)(Object(O.a)({},e),{},{basket:n});case"SET_USER":return Object(O.a)(Object(O.a)({},e),{},{user:a.user});default:return e}},w=(t(115),t(28)),P=t.n(w),B=t(7);var z=function(){var e=Object(B.f)(),a=g(),t=Object(i.a)(a,2),n=t[0].basket;return t[1],l.a.createElement("div",{className:"subtotal"},l.a.createElement(P.a,{renderText:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Subtotal ( ",null===n||void 0===n?void 0:n.length," items): ",l.a.createElement("strong",null,e)),l.a.createElement("small",{className:"subtotal__gift"},l.a.createElement("input",{type:"checkbox"})," This order contains a gift"))},decimalScale:2,value:A(n),displayType:"text",thousandSeparator:!0,prefix:"$"}),l.a.createElement("button",{onClick:function(a){return e.push("/payment")}},"Proceed to Checkout"))},T=t(75);var L=function(){var e=g(),a=Object(i.a)(e,2),t=a[0],n=t.basket,r=t.user;return a[1],l.a.createElement("div",{className:"checkout"},l.a.createElement("div",{className:"checkout__left"},l.a.createElement("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),l.a.createElement("div",null,l.a.createElement("h3",null,"Hello, ",null===r||void 0===r?void 0:r.email),l.a.createElement("h2",{className:"checkout__title"},"Your shopping Basket"),l.a.createElement(T.a,null,n.map((function(e,a){return l.a.createElement("div",{key:a},l.a.createElement(k,{key:e.id,id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating}))}))))),l.a.createElement("div",{className:"checkout__right"},l.a.createElement(z,null)))};t(117);var D=function(){var e=Object(B.f)(),a=Object(n.useState)(""),t=Object(i.a)(a,2),r=t[0],c=t[1],m=Object(n.useState)(""),o=Object(i.a)(m,2),s=o[0],u=o[1];return l.a.createElement("div",{className:"login"},l.a.createElement(d.b,{to:"/"},l.a.createElement("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",alt:""})),l.a.createElement("div",{className:"login__container"},l.a.createElement("h1",null,"Sign-in"),l.a.createElement("form",null,l.a.createElement("h5",null,"E-mail"),l.a.createElement("input",{type:"text",value:r,onChange:function(e){return c(e.target.value)}}),l.a.createElement("h5",null,"Password"),l.a.createElement("input",{type:"password",value:s,onChange:function(e){return u(e.target.value)}}),l.a.createElement("button",{type:"submit",onClick:function(a){a.preventDefault(),v.signInWithEmailAndPassword(r,s).then((function(a){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__signInButton"},"Sign In")),l.a.createElement("p",null,"By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."),l.a.createElement(d.b,{to:"/register"},l.a.createElement("button",{type:"submit",className:"login__registerButton"},"Create your Amazon Account"))))},I=t(34),x=t.n(I),M=t(55),R=(t(119),t(25)),Y=t(76),G=t.n(Y).a.create({baseURL:"https://us-central1-clone-fcc92.cloudfunctions.net/api"});var F=function(){var e=g(),a=Object(i.a)(e,2),t=a[0],r=t.basket,c=t.user,m=a[1],o=Object(B.f)(),s=Object(R.useStripe)(),u=Object(R.useElements)(),E=Object(n.useState)(!1),p=Object(i.a)(E,2),h=p[0],_=p[1],f=Object(n.useState)(""),v=Object(i.a)(f,2),N=v[0],y=v[1],S=Object(n.useState)(null),C=Object(i.a)(S,2),O=C[0],j=C[1],w=Object(n.useState)(!0),z=Object(i.a)(w,2),T=z[0],L=z[1],D=Object(n.useState)(!0),I=Object(i.a)(D,2),Y=I[0],F=I[1];Object(n.useEffect)((function(){(function(){var e=Object(M.a)(x.a.mark((function e(){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G({method:"post",url:"/payment/create?total=".concat(100*A(r))});case 2:a=e.sent,F(a.data.clientSecret);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r]),console.log("THE SECRET IS >>>",Y),console.log("\ud83d\udc71",c);var W=function(){var e=Object(M.a)(x.a.mark((function e(a){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),y(!0),e.next=4,s.confirmCardPayment(Y,{payment_method:{card:u.getElement(R.CardElement)}}).then((function(e){var a=e.paymentIntent;b.collection("users").doc(null===c||void 0===c?void 0:c.uid).collection("orders").doc(a.id).set({basket:r,amount:a.amount,created:a.created}),_(!0),j(null),y(!1),m({type:"EMPTY_BASKET"}),o.replace("/orders")}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return l.a.createElement("div",{className:"payment"},l.a.createElement("div",{className:"payment__container"},l.a.createElement("h1",null,"Checkout ( ",l.a.createElement(d.b,{to:"/checkout"},null===r||void 0===r?void 0:r.length," items"),")"),l.a.createElement("div",{className:"payment__section"},l.a.createElement("div",{className:"payment__title"},l.a.createElement("h3",null,"Delivery Address")),l.a.createElement("div",{className:"payment__address"},l.a.createElement("p",null,null===c||void 0===c?void 0:c.email),l.a.createElement("p",null,"500 Nguyen Thi Dinh"),l.a.createElement("p",null,"Q2, TP.HCM"))),l.a.createElement("div",{className:"payment__section"},l.a.createElement("div",{className:"payment__title"},l.a.createElement("h3",null,"Review items and delivery")),l.a.createElement("div",{className:"payment__items"},r.map((function(e){return l.a.createElement(k,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),l.a.createElement("div",{className:"payment__section"},l.a.createElement("div",{className:"payment__title"},l.a.createElement("h3",null,"Payment Method")),l.a.createElement("div",{className:"payment__details"},l.a.createElement("form",{onSubmit:W},l.a.createElement(R.CardElement,{onChange:function(e){L(e.empty),j(e.error?e.error.message:"")}}),l.a.createElement("div",{className:"payment__priceContainer"},l.a.createElement(P.a,{renderText:function(e){return l.a.createElement("h3",null,"Order Total: ",e)},decimalScale:2,value:A(r),displayType:"text",thousandSeparator:!0,prefix:"$"}),l.a.createElement("button",{disabled:N||T||h},l.a.createElement("span",null,N?l.a.createElement("p",null,"Processing"):"Buy Now"))),O&&l.a.createElement("div",null,O))))))},W=t(77),H=(t(136),t(78)),U=t.n(H);t(138);var K=function(e){var a,t=e.order;return l.a.createElement("div",{className:"order"},l.a.createElement("h2",null,"Order"),l.a.createElement("p",null,U.a.unix(t.data.created).format("MMMM Do YYYY, h:mma")),l.a.createElement("p",{className:"order__id"},l.a.createElement("small",null,t.id)),null===(a=t.data.basket)||void 0===a?void 0:a.map((function(e){return l.a.createElement(k,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating,hideButton:!0})})),l.a.createElement(P.a,{renderText:function(e){return l.a.createElement("h3",{className:"order__total"},"Order Total: ",e)},decimalScale:2,value:t.data.amount/100,displayType:"text",thousandSeparator:!0,prefix:"$"}))};var V=function(){var e=g(),a=Object(i.a)(e,2),t=a[0],r=(t.basket,t.user),c=(a[1],Object(n.useState)([])),m=Object(i.a)(c,2),o=m[0],s=m[1];return Object(n.useEffect)((function(){r?b.collection("users").doc(null===r||void 0===r?void 0:r.uid).collection("orders").orderBy("created","desc").onSnapshot((function(e){s(e.docs.map((function(e){return{id:e.id,data:e.data()}})))})):s([])}),[r]),l.a.createElement("div",{className:"orders"},l.a.createElement("h1",null,"Your Orders"),l.a.createElement("div",{className:"orders__order"},null===o||void 0===o?void 0:o.map((function(e){return l.a.createElement(K,{order:e})}))))},X=t(178);t(139);var q=function(){return l.a.createElement("footer",null,l.a.createElement("div",{className:"footer"},l.a.createElement(X.a,{to:"/header"},l.a.createElement("div",{className:"top centered"},l.a.createElement("a",{href:"#nav-top"},"Back to top"))),l.a.createElement("div",{className:"middle"},l.a.createElement("div",{className:"center"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("h3",null,"Get to Know Us")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Careers")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Blog")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"About Amazon")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Investor Relations")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Amazon Devices"))),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("h3",null,"Make Money with Us")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Sell products on Amazon")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Sell on Amazon Business")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Sell apps on Amazon")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Become an Affiliate")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Advertise Your Products")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Self-Publish with Us")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Host an Amazon Hub")),l.a.createElement("li",null,l.a.createElement("summary",null,l.a.createElement("a",{href:"#"},"Sell Your Subscription on Amazon")))),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("h3",null,"Amazon Payment Products")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Amazon Business Card")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Shop with Points")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Reload Your Balance")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Amazon Currency Converter"))),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("h3",null,"Let Us Help You")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Amazon and COVID-19")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Your Account")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Your Orders")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Shipping Rates & Policies")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Returns & Replacements")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Manage Your Content and Devices")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Amazon Assistant")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Help")))),l.a.createElement("div",{className:"centered"},l.a.createElement("ul",{className:"copy"},l.a.createElement("li",null,l.a.createElement("img",{className:"logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG25.png",alt:""})),l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"select"},l.a.createElement("i",{className:"fa fa-globe","aria-hidden":"true"})," English")),l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"select"},l.a.createElement("i",{className:"flag-icon-us"}),"United States"))))),l.a.createElement("div",{className:"bottom"},l.a.createElement("div",{className:"center"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Amazon Music",l.a.createElement("br",null),l.a.createElement("span",null,"Stream millions",l.a.createElement("br",null)," of songs"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"AmazonFresh",l.a.createElement("br",null),l.a.createElement("span",null,"Groceries & More",l.a.createElement("br",null)," Right To Your Door"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Amazon Web Services",l.a.createElement("br",null),l.a.createElement("span",null,"Scalable Cloud",l.a.createElement("br",null)," Computing Services"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"East Dane",l.a.createElement("br",null),l.a.createElement("span",null,"Designer Men's",l.a.createElement("br",null)," Fashion"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Prime Now",l.a.createElement("br",null),l.a.createElement("span",null,"FREE 2-Hour Delivery",l.a.createElement("br",null)," on Everyday Items")))),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Amazon Drive",l.a.createElement("br",null),l.a.createElement("span",null,"Cloud storage",l.a.createElement("br",null)," from Amazon"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"AmazonGlobal",l.a.createElement("br",null),l.a.createElement("span",null,"Ship Orders",l.a.createElement("br",null)," Internationally"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Audible",l.a.createElement("br",null),l.a.createElement("span",null,"Download",l.a.createElement("br",null)," Audio Books"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Fabric",l.a.createElement("br",null),l.a.createElement("span",null,"Sewing, Quilting",l.a.createElement("br",null)," & Knitting"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Prime Photos",l.a.createElement("br",null),l.a.createElement("span",null,"Unlimited Photo Storage",l.a.createElement("br",null)," Free With Prime"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Woot!",l.a.createElement("br",null),l.a.createElement("span",null,"Deals and ",l.a.createElement("br",null)," Shenanigans")))),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"6pm",l.a.createElement("br",null),l.a.createElement("span",null,"Score deals",l.a.createElement("br",null)," on fashion brands"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Home Services",l.a.createElement("br",null),l.a.createElement("span",null,"Handpicked Pros",l.a.createElement("br",null)," Happiness Guarantee"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Book Depository",l.a.createElement("br",null),l.a.createElement("span",null,"Books With Free",l.a.createElement("br",null)," Delivery Worldwide"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Goodreads",l.a.createElement("br",null),l.a.createElement("span",null,"Book reviews",l.a.createElement("br",null)," & recommendations"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Shopbop",l.a.createElement("br",null),l.a.createElement("span",null,"Designer",l.a.createElement("br",null)," Fashion Brands"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Zappos",l.a.createElement("br",null),l.a.createElement("span",null,"Shoes &",l.a.createElement("br",null)," Clothing")))),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"AbeBooks",l.a.createElement("br",null),l.a.createElement("span",null,"Books, art",l.a.createElement("br",null)," & collectibles"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Amazon Inspire",l.a.createElement("br",null),l.a.createElement("span",null,"Free Digital Educational",l.a.createElement("br",null)," Resources"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Box Office Mojo",l.a.createElement("br",null),l.a.createElement("span",null,"Find Movie",l.a.createElement("br",null)," Box Office Data"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"IMDb",l.a.createElement("br",null),l.a.createElement("span",null,"Movies, TV",l.a.createElement("br",null)," & Celebrities"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"TenMarks.com",l.a.createElement("br",null),l.a.createElement("span",null,"Math Activities",l.a.createElement("br",null)," for Kids & Schools"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Souq.com",l.a.createElement("br",null),l.a.createElement("span",null,"Shop Online in",l.a.createElement("br",null)," the Middle East")))),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"ACX ",l.a.createElement("br",null),l.a.createElement("span",null,"Audiobook Publishing",l.a.createElement("br",null)," Made Easy"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Amazon Rapids",l.a.createElement("br",null),l.a.createElement("span",null,"Fun stories for",l.a.createElement("br",null)," kids on the go"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"ComiXology",l.a.createElement("br",null),l.a.createElement("span",null,"Thousands of",l.a.createElement("br",null)," Digital Comics"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"IMDbPro",l.a.createElement("br",null),l.a.createElement("span",null,"Get Info Entertainment",l.a.createElement("br",null)," Professionals Need"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Warehouse Deals",l.a.createElement("br",null),l.a.createElement("span",null,"Open-Box",l.a.createElement("br",null)," Discounts"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Subscribe with Amazon",l.a.createElement("br",null),l.a.createElement("span",null,"Discover & try",l.a.createElement("br",null)," subscription services")))),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Alexa",l.a.createElement("br",null),l.a.createElement("span",null,"Actionable Analytics",l.a.createElement("br",null)," for the Web"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Amazon Restaurants",l.a.createElement("br",null),l.a.createElement("span",null,"Food delivery from",l.a.createElement("br",null)," local restaurants"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"CreateSpace",l.a.createElement("br",null),l.a.createElement("span",null,"Indie Print Publishing",l.a.createElement("br",null)," Made Easy"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Junglee.com",l.a.createElement("br",null),l.a.createElement("span",null,"Shop Online",l.a.createElement("br",null)," in India"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Whispercast",l.a.createElement("br",null),l.a.createElement("span",null,"Discover & Distribute",l.a.createElement("br",null)," Digital Content")))),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Amazon Business",l.a.createElement("br",null),l.a.createElement("span",null,"Everything For",l.a.createElement("br",null)," Your Business"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Amazon Video Direct",l.a.createElement("br",null),l.a.createElement("span",null,"Video Distribution",l.a.createElement("br",null)," Made Easy"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"DPReview",l.a.createElement("br",null),l.a.createElement("span",null,"Digital",l.a.createElement("br",null)," Photography"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Kindle Direct Publishing",l.a.createElement("br",null),l.a.createElement("span",null,"Indie Digital Publishing",l.a.createElement("br",null)," Made Easy"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Withoutabox",l.a.createElement("br",null),l.a.createElement("span",null,"Submit to",l.a.createElement("br",null)," Film Festivals")))),l.a.createElement("div",{className:"centered"},l.a.createElement("ul",{className:"copy"},l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Conditions of Use")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Privacy Notice")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Interest-Based Ads")),l.a.createElement("li",null,"\xa9 2021, ThanhTruc")))))))};t(140);var J=function(){var e=Object(B.f)(),a=Object(n.useState)(""),t=Object(i.a)(a,2),r=t[0],c=t[1],m=Object(n.useState)(""),o=Object(i.a)(m,2),s=o[0],u=o[1],E=Object(n.useState)(""),p=Object(i.a)(E,2),h=p[0],g=p[1];return l.a.createElement("div",{className:"register"},l.a.createElement(d.b,{to:"/"},l.a.createElement("img",{className:"register__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",alt:""})),l.a.createElement("div",{className:"register__container"},l.a.createElement("h1",null,"Create account"),l.a.createElement("form",null,l.a.createElement("h5",null,"Your name"),l.a.createElement("input",{type:"text",value:r,onChange:function(e){return c(e.target.value)}}),l.a.createElement("h5",null,"Email"),l.a.createElement("input",{type:"text",value:s,onChange:function(e){return u(e.target.value)}}),l.a.createElement("h5",null,"Password"),l.a.createElement("input",{type:"password",value:h,onChange:function(e){return g(e.target.value)}}),l.a.createElement("h5",null,"Re-enter password"),l.a.createElement("input",{type:"password",value:h,onChange:function(e){return g(e.target.value)}})),l.a.createElement("button",{type:"submit",onClick:function(a){a.preventDefault(),v.createUserWithEmailAndPassword(s,h).then((function(a){console.log(a),a&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"register__createButton"},"Create your Amazon Account"),l.a.createElement("p",null,"By creating an account, you agree to Amazon's Conditions of Use and Privacy Notice."),l.a.createElement("div",{className:"register__signIn"},l.a.createElement("hr",null),l.a.createElement("small",null,"Already have an account? ",l.a.createElement(d.b,{to:"/login"},"Sign-In")))))};t(141);var $=function(){return l.a.createElement("div",{className:"footerLogin"},l.a.createElement("p",{className:"centered"},"Conditions of Use Privacy Notice Help \xa9 2021 ThanhTruc"))},Q=t(79),Z=t.n(Q);t(142);var ee=function(e){var a=e.productList,t=(a.id,a.title),n=a.price,r=(a.description,a.category,a.image),c=a.rating,m=(e.i,g()),o=Object(i.a)(m,2),s=(o[0].basket,o[1]);return l.a.createElement("div",{className:"product"},l.a.createElement("div",{className:"product_info"},l.a.createElement("p",null,t),l.a.createElement("p",{className:"product__price"},l.a.createElement("small",null,"$"),l.a.createElement("strong",null,n)),l.a.createElement("div",{className:"product__rating"},Array(c).fill().map((function(e,a){return l.a.createElement("p",null,"\u2b50")})))),l.a.createElement("img",{src:r,alt:""}),l.a.createElement("button",{onClick:function(e){e.productList;var a=e.id,t=e.title,n=e.image,l=e.price,r=e.rating;s({type:"ADD_TO_BASKET",item:{id:a,title:t,image:n,price:l,rating:r}})}},"Add to Basket"))},ae=t(177),te=t(176);t(143),t(144);var ne=function(e){var a=e.productList,t=a.id,n=a.title,r=(a.price,a.description,a.category,a.image);return a.rating,e.i,l.a.createElement("div",{className:"productRow"},l.a.createElement("a",{href:r},l.a.createElement("img",{key:t,src:r,alt:n})))},le=t(80),re=t.n(le);var ce=function(e){var a=e.productLists,t=Object(n.useState)(0),r=Object(i.a)(t,2),c=r[0],m=r[1];return l.a.createElement("div",{className:"productLists"},l.a.createElement("div",{className:"home__container"},l.a.createElement("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:""}),l.a.createElement("div",{className:"home__row"},l.a.createElement(ae.a,{in:!0},l.a.createElement(te.a,{container:!0,alignItems:"stretch",spacing:3},null===a||void 0===a?void 0:a.map((function(e,a){return l.a.createElement(te.a,{item:!0,xs:12,sm:6,md:4,lg:3,style:{display:"flex"}},l.a.createElement(ee,{productList:e,i:a}))}))))),l.a.createElement("div",{className:"productLists__row",style:{padding:"0 ".concat(50,"px"),width:"1300px",overflow:"hidden"}},l.a.createElement(re.a,{requestToChangeActive:m,activeItemIndex:c,alwaysShowChevrons:"true",activePosition:"left",numberOfCards:5,gutter:20,leftChevron:l.a.createElement("button",{className:"productLists__button"},"<"),rightChevron:l.a.createElement("button",{className:"productLists__button"},">"),outsideChevron:!0,chevronWidth:50,style:{overflow:"hidden"}},null===a||void 0===a?void 0:a.map((function(e,a){return l.a.createElement("div",null,l.a.createElement(ne,{productList:e}))}))))))},me=Object(W.a)("pk_test_51HW2EnCRlwJlGJf5BiIJFw2qFX6UimCYXHFiRLTb9Qa8Vc6pQIK3AWUrWrOcfWtFjRPXJ57vzjyZ1M1xYIyF16YL00sj5Exqv4");var ie=function(){var e=g(),a=Object(i.a)(e,2);Object(m.a)(a[0]);var t=a[1],r=Object(n.useState)([]),c=Object(i.a)(r,2),o=c[0],s=c[1];return Object(n.useEffect)((function(){Z()({key:"55eb76a3057fcd338bfd886a91be72b92e956eca572e1d8b807a3e2338fdd0dc/stage",onCommand:function(e){var a=e.command,t=e.productList;"newProducts"===a&&(console.log(t),s(t))}}),v.onAuthStateChanged((function(e){console.log("THE USER IS >>> ",e),t(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),l.a.createElement(d.a,null,l.a.createElement("div",{className:"app"},l.a.createElement(B.c,null,l.a.createElement(B.a,{path:"/orders"},l.a.createElement(N,null),l.a.createElement(V,null),l.a.createElement(q,null)),l.a.createElement(B.a,{path:"/login"},l.a.createElement(D,null),l.a.createElement($,null)),l.a.createElement(B.a,{path:"/register"},l.a.createElement(J,null),l.a.createElement($,null)),l.a.createElement(B.a,{path:"/checkout"},l.a.createElement(N,null),l.a.createElement(L,null)),l.a.createElement(B.a,{path:"/payment"},l.a.createElement(N,null),l.a.createElement(R.Elements,{stripe:me},l.a.createElement(F,null))),l.a.createElement(B.a,{path:"/product"},l.a.createElement(N,null),l.a.createElement(ce,{productLists:o}),l.a.createElement(q,null)),l.a.createElement(B.a,{path:"/"},l.a.createElement(N,null),l.a.createElement(S,null),l.a.createElement(q,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,{initialState:{basket:[],user:null},reducer:j},l.a.createElement(ie,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},88:function(e,a,t){e.exports=t(159)},93:function(e,a,t){},94:function(e,a,t){},95:function(e,a,t){}},[[88,1,2]]]);
//# sourceMappingURL=main.9f56a20b.chunk.js.map