(this["webpackJsonparcanum-catalogue"]=this["webpackJsonparcanum-catalogue"]||[]).push([[0],{150:function(e,t,a){e.exports={FullScreenContainer:"App_FullScreenContainer__BZzJB",contentContainer:"App_contentContainer__1vCJO",closeSnackBtn:"App_closeSnackBtn__3oYuF",messagePortal:"App_messagePortal__2mEOo"}},175:function(e,t,a){e.exports={productPreview:"Admin_productPreview__2jMRH",createBtn:"Admin_createBtn__16YYF"}},23:function(e,t,a){e.exports={rowContainer:"CheckoutProduct_rowContainer__2oo0i",productContainer:"CheckoutProduct_productContainer__1uadX",quantityContainer:"CheckoutProduct_quantityContainer__3VXdu",priceContainer:"CheckoutProduct_priceContainer__1LDjJ",imageContainer:"CheckoutProduct_imageContainer__1I3jl",deleteBtnContainer:"CheckoutProduct_deleteBtnContainer__2BHuC",productName:"CheckoutProduct_productName__3A92h",productType:"CheckoutProduct_productType__1otUn",btn:"CheckoutProduct_btn__2VQsv",btnsContainer:"CheckoutProduct_btnsContainer__2Xdls",quantity:"CheckoutProduct_quantity__23JhY",innerContainer:"CheckoutProduct_innerContainer__1hk0K",deleteIcon:"CheckoutProduct_deleteIcon__1Wyqy",deleteBtn:"CheckoutProduct_deleteBtn__2tpW7"}},254:function(e,t,a){e.exports=a.p+"static/media/logo.a8420689.png"},277:function(e,t,a){e.exports=a(417)},282:function(e,t,a){},41:function(e,t,a){e.exports={buttonFlex:"Checkout_buttonFlex__2EKfB",checkoutContainer:"Checkout_checkoutContainer__1aM8O",subtotalContainer:"Checkout_subtotalContainer__2vOMr",innerContainer:"Checkout_innerContainer__2OPlj",subtotal:"Checkout_subtotal__FenN5",totalPrice:"Checkout_totalPrice__1emSE",buyBtn:"Checkout_buyBtn__35wzz",icon:"Checkout_icon__II37h",backArrow:"Checkout_backArrow__1Mytx",backBtn:"Checkout_backBtn__1EQgo",buyContainer:"Checkout_buyContainer__1-j5z"}},417:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(15),r=a.n(o),i=(a(282),a(150)),l=a.n(i),u=a(468),s=a(51),d=Object(s.a)(),m=a(456),p=Object(m.a)((function(e){return{root:{flexGrow:1},gridItem:{display:"flex",justifyContent:"space-around"}}})),b=Object(m.a)((function(e){return{root:{width:"90%",display:"flex",flexDirection:"column"},media:{height:175},cardActions:{display:"flex",justifyContent:"space-around",marginTop:"auto",paddingLeft:"".concat(e.spacing(2.5)," !important")},buyIcon:{fontSize:e.spacing(4),color:e.palette.primary.main},iconBtn:{padding:e.spacing(1)}}})),f=a(459),g=a(463),C=a(461),h=a(460),E=a(462),y=a(13),k=a(458),v=a(464),_=function(e){var t=e.product,a=e.onClickAddProduct,n=b(),o=Object(y.a)((function(e){return{badge:{top:e.spacing(4),right:e.spacing(6),padding:"12px 15px",borderRadius:"8px 0 0 8px",backgroundColor:"#E2CAF8",color:e.palette.primary.main}}}))(k.a);return c.a.createElement(f.a,{className:n.root},c.a.createElement(o,{badgeContent:"Disponible ".concat(t.inventory,"    ")}),c.a.createElement(h.a,{className:n.media,image:t.imageUrl,title:t.name}),c.a.createElement(C.a,null,c.a.createElement(E.a,{variant:"h5",align:"center",component:"h1"},t.name),c.a.createElement(E.a,{variant:"subtitle1",component:"p",align:"center",color:"textSecondary"},t.subtitle),c.a.createElement(E.a,{variant:"body1",component:"p"},t.description),c.a.createElement(E.a,{variant:"caption",component:"p",color:"textSecondary"},t.aditionalInfo)),c.a.createElement(g.a,{className:n.cardActions},c.a.createElement(E.a,{variant:"h6",component:"p"},"COP ".concat(t.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1."))),c.a.createElement(v.a,{className:n.iconBtn,onClick:a},c.a.createElement("i",{className:"".concat(n.buyIcon," las la-cart-plus")}))))},j=a(465),P=a(105),O=c.a.memo((function(e){var t=e.onAddProduct,a=e.checkoutProducts,o=e.onGetProducts,r=e.products,i=p(),l=Object(P.b)().enqueueSnackbar;Object(n.useEffect)((function(){o()}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:i.root},c.a.createElement(j.a,{container:!0,spacing:3},r.map((function(e){return c.a.createElement(j.a,{className:i.gridItem,item:!0,xs:12,sm:6,md:4,lg:3,xl:2,key:e.id},c.a.createElement(_,{product:e,onClickAddProduct:function(){var n;n=e.id,a.filter((function(e){return e.id===n})).length?l("Este producto ya fue agregado",{variant:"warning"}):(t(e),l("Producto agregado correctamente",{variant:"success"}))}}))})))))})),N=a(64),I=a(42),w=Object(I.b)({name:"general",initialState:{isLoading:!1},reducers:{setIsLoading:function(e,t){e.isLoading=t.payload}}}),B=a(25),S=a(148),x=Object(I.b)({name:"checkout",initialState:{checkoutProducts:[],itemWasAdded:!1},reducers:{addProduct:function(e,t){e.checkoutProducts=[].concat(Object(S.a)(e.checkoutProducts),[{id:t.payload.id,imageUrl:t.payload.imageUrl,name:t.payload.name,subtitle:t.payload.subtitle,price:t.payload.price,quantity:1}])},deleteProduct:function(e,t){e.checkoutProducts=e.checkoutProducts.filter((function(e){return e.id!=t.payload}))},substractQuantityProduct:function(e,t){e.checkoutProducts=e.checkoutProducts.map((function(e){return e.id==t.payload?Object(B.a)(Object(B.a)({},e),{},{quantity:e.quantity-1}):e}))},addQuantityProduct:function(e,t){e.checkoutProducts=e.checkoutProducts.map((function(e){return e.id==t.payload?Object(B.a)(Object(B.a)({},e),{},{quantity:e.quantity+1}):e}))}}}),A=Object(I.b)({name:"admin",initialState:{products:[]},reducers:{getProducts:function(e,t){},getProductsSuccess:function(e,t){e.products=t.payload}}}),U=w.actions.setIsLoading,q=A.actions.getProducts,L=x.actions.addProduct,D={onGetProducts:function(){return q()},onSetIsLoading:function(e){return U(e)},onAddProduct:function(e){return L(e)}},F=Object(N.b)((function(e){return{isLoading:e.general.isLoading,products:e.catalogue.products,checkoutProducts:e.checkout.checkoutProducts}}),D)(O),R=a(136),z=a(183),T=a(175),M=a.n(T),Q=a(138),G=a.n(Q),J=(a(418),a(30)),W="",H=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return G.a.storage().ref("products/".concat(e).concat(t?"/"+t:""))},K=function(e,t,a,n){var c=W?H(e,W.name).put(W):"";c&&c.on("state_changed",(function(e){return n?n(e.bytesTransferred/e.totalBytes*100):null}),(function(e){return a?a(e):function(e){return console.log(e)}}),(function(){t(function(e,t){return Object(J.a)(H(e).child(t).getDownloadURL())}(e,W.name)),W=""}))},Y=a(474),V=a(466),X=a(253),$=a(476),Z=[{key:"d",text:"Dados",value:"dices"},{key:"t",text:"Juegos de Mesa",value:"tabletopGames"},{key:"a",text:"Accesorios",value:"accesories"}],ee=function(e){var t,a=e.onSetProductInfo,o=c.a.createRef(),r={name:"",category:"",subtitle:"",description:"",aditionalInfo:"",price:"",inventory:"",imageUrl:""};Object(n.useEffect)((function(){return s(""),function(){t&&t.unsubscribe()}}),[]);var i=Object(n.useState)(""),l=Object(z.a)(i,2),u=l[0],s=l[1],d=Object(n.useState)(r),m=Object(z.a)(d,2),p=m[0],b=m[1],f=function(e){t&&t.unsubscribe(),t=e.subscribe((function(e){a(Object(B.a)(Object(B.a)({},p),{},{imageUrl:e})),s(""),b(r)}))},g=function(e){console.log("Progress",e)},C=function(e){console.log("ERROR",e)},h=function(e,t){var a=t.name,n=t.value;console.log(a,n),b(Object(B.a)(Object(B.a)({},p),{},Object(R.a)({},a,n)))};return c.a.createElement(c.a.Fragment,null,c.a.createElement(Y.a,null,c.a.createElement(Y.a.Group,{unstackable:!0,widths:3},c.a.createElement(Y.a.Input,{label:"Nombre",name:"name",autoComplete:"off",placeholder:"Nombre",value:p.name,onChange:h}),c.a.createElement(Y.a.Field,{name:"category",control:V.a,options:Z,label:{children:"Category",htmlFor:"form-select-control-category"},placeholder:"Categoria",search:!0,searchInput:{id:"form-select-control-category"},onChange:h}),c.a.createElement(Y.a.Input,{label:"Subtitulo",name:"subtitle",autoComplete:"off",placeholder:"Subtitulo",value:p.subtitle,onChange:h})),c.a.createElement(X.a,{unstackable:!0,widths:2},c.a.createElement(Y.a.Input,{label:"Descripcion",name:"description",autoComplete:"off",placeholder:"Descripcion",value:p.description,onChange:h}),c.a.createElement(Y.a.Input,{label:"Informacion Adicional",name:"aditionalInfo",autoComplete:"off",placeholder:"Informacion Adicional",value:p.aditionalInfo,onChange:h})),c.a.createElement(X.a,{unstackable:!0,widths:2},c.a.createElement(Y.a.Input,{label:"Precio",name:"price",autoComplete:"off",placeholder:"Precio",value:p.price,onChange:function(e,t){isNaN(t.value)||h(0,t)}}),c.a.createElement(Y.a.Input,{label:"Cantidad en Inventario",name:"inventory",autoComplete:"off",placeholder:"Cantidad en inventario",value:p.inventory,onChange:function(e,t){isNaN(t.value)||h(0,t)}})),c.a.createElement("input",{ref:o,type:"file",accept:"image/*",hidden:!0,onChange:function(e){var t=e.target.files[0];W=t;var a=new FileReader;a.readAsDataURL(t),a.onloadend=function(){console.log(a.result),s(a.result)}}}),c.a.createElement($.a,{type:"button",content:"Seleccionar Imagen",labelPosition:"left",icon:"file",onClick:function(){return o.current.click()}})),c.a.createElement("div",{className:M.a.productPreview},c.a.createElement("h1",null,"Preview"),c.a.createElement(_,{product:{name:p.name||"Nombre",category:p.category||"Categoria",subtitle:p.subtitle||"Subtitulo",description:p.description||"Descripcion",aditionalInfo:p.aditionalInfo||"Informacion Adicional",price:p.price||"0000",inventory:p.inventory||0,imageUrl:u||"https://plchldr.co/i/850x667"},key:p.name+Math.random()}),c.a.createElement($.a,{className:M.a.createBtn,type:"button",onClick:function(){K(p.category,f,C,g)}},"Crear Producto")))},te=Object(I.b)({name:"admin",initialState:{product:{name:"",category:"",subtitle:"",description:"",aditionalInfo:"",price:"",inventory:0,imageUrl:""}},reducers:{setProductInfo:function(e,t){e.product=t.payload}}}),ae=te.actions.setProductInfo,ne={onSetProductInfo:function(e){return ae(e)}},ce=Object(N.b)((function(e){return{}}),ne)(ee),oe=a(467),re=a(41),ie=a.n(re),le=a(478),ue=a(259),se=a(23),de=a.n(se),me=function(e){var t=e.product,a=e.onClickDelete,n=e.onClickAdd,o=e.onClickSubstract;return c.a.createElement("div",{className:de.a.rowContainer},c.a.createElement(le.a,{raised:!0,className:de.a.productContainer},c.a.createElement("div",{className:de.a.innerContainer},c.a.createElement("div",{className:de.a.imageContainer},c.a.createElement(ue.a,{src:t.imageUrl,size:"small"})),c.a.createElement("div",null,c.a.createElement("p",{className:de.a.productName},t.name),c.a.createElement("p",{className:de.a.productType},t.subtitle))),c.a.createElement("div",{className:de.a.innerContainer},c.a.createElement("div",{className:de.a.quantityContainer},c.a.createElement("div",{className:de.a.quantity},t.quantity),c.a.createElement("div",{className:de.a.btnsContainer},c.a.createElement($.a,{icon:!0,className:de.a.btn,onClick:function(){n(t.id)}},c.a.createElement("i",{className:"las la-plus"})),c.a.createElement($.a,{icon:!0,className:de.a.btn,onClick:function(){o(t.id)}},c.a.createElement("i",{className:"las la-minus"})))),c.a.createElement("div",{className:de.a.priceContainer},"COP ".concat(t.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1."))))),c.a.createElement("div",{className:de.a.deleteBtnContainer},c.a.createElement($.a,{icon:!0,className:de.a.deleteBtn,onClick:function(){a(t.id)}},c.a.createElement("i",{className:"las la-trash-alt ".concat(de.a.deleteIcon)}))))},pe=function(){d.push("/arcanum-catalogue/catalogue")},be=function(e){var t=e.products,a=e.onDeleteProduct,n=e.onAddQuantity,o=e.onSubstractQuantity;return c.a.createElement(c.a.Fragment,null,c.a.createElement($.a,{className:ie.a.backBtn,onClick:pe},c.a.createElement("i",{className:"las la-arrow-left ".concat(ie.a.backArrow," ").concat(ie.a.icon)}),"Regresar"),t.map((function(e){return c.a.createElement(me,{key:e.id,product:e,onClickDelete:function(e){return a(e)},onClickAdd:function(e){return n(e)},onClickSubstract:function(e){return o(e)}})})),c.a.createElement("div",{className:ie.a.subtotalContainer},c.a.createElement("div",{className:ie.a.innerContainer},c.a.createElement("span",{className:ie.a.subtotal},"SUBTOTAL")),c.a.createElement("div",{className:ie.a.innerContainer},c.a.createElement("span",{className:ie.a.totalPrice},t.reduce((function(e,t){return e+parseInt(t.price)}),0)))),c.a.createElement(oe.a,null),c.a.createElement("div",{className:ie.a.buyContainer},c.a.createElement($.a,{className:ie.a.buyBtn},c.a.createElement("i",{className:"lab la-whatsapp ".concat(ie.a.icon)}),"Pedir por whatsapp")))},fe=x.actions,ge=fe.deleteProduct,Ce=fe.addQuantityProduct,he=fe.substractQuantityProduct,Ee={onDeleteProduct:function(e){return ge(e)},onAddQuantity:function(e){return Ce(e)},onSubstractQuantity:function(e){return he(e)}},ye=Object(N.b)((function(e){return{products:e.checkout.checkoutProducts}}),Ee)(be),ke=function(){return c.a.createElement(u.a,{to:"/arcanum-catalogue/catalogue"})},ve=function(){return c.a.createElement(u.c,{history:d},c.a.createElement(u.d,null,c.a.createElement(u.b,{path:"/arcanum-catalogue",exact:!0,component:ke}),c.a.createElement(u.b,{path:"/arcanum-catalogue/catalogue",exact:!0,component:F}),c.a.createElement(u.b,{path:"/arcanum-catalogue/checkout",exact:!0,component:ye}),c.a.createElement(u.b,{path:"/arcanum-catalogue/admin",exact:!0,component:ce}),c.a.createElement(u.b,{component:function(){return c.a.createElement(u.a,{to:"/arcanum-catalogue"})}})))},_e=Object(m.a)((function(e){return{headerContainer:{width:"100%",height:85,backgroundColor:"black",display:"flex",alignItems:"center",justifyContent:"space-between",position:"sticky",top:0,zIndex:50},icon:{fontSize:45},logoContainer:{marginLeft:e.spacing(6)},buttonsContainer:{marginRight:e.spacing(6)},shopButton:{background:"black",color:"white"}}})),je=a(469),Pe=a(254),Oe=a.n(Pe),Ne=function(){d.push("/arcanum-catalogue/checkout")},Ie=function(){d.push("/arcanum-catalogue/admin")},we=function(){var e=_e();return c.a.createElement("div",{className:e.headerContainer},c.a.createElement("div",{className:e.logoContainer},c.a.createElement("img",{src:Oe.a})),c.a.createElement("div",{className:e.buttonsContainer},c.a.createElement(je.a,{className:e.shopButton,onClick:Ie},"Go to Admin Temp"),c.a.createElement(je.a,{className:e.shopButton,onClick:Ne},c.a.createElement("i",{className:"las la-shopping-cart ".concat(e.icon)}))))},Be=Object(m.a)((function(e){return{footerContainer:{width:"100%",height:85,display:"flex",alignItems:"center",justifyContent:"space-between",backgroundColor:"#f6f5fa",marginTop:"auto"},followUsContainer:{alignItems:"center",display:"flex",marginLeft:e.spacing(6)},followUsBtnContainer:{display:"flex",width:95,justifyContent:"space-evenly"},aditonalInfoContainer:{marginRight:e.spacing(6)},socialMediaBtn:{color:"white",fontSize:25,minWidth:30,padding:e.spacing(1)},fbBtnColor:{backgroundColor:"#3b5998","&:hover":{backgroundColor:"#2D4373"}},instaBtnColor:{backgroundColor:"#833ab4","&:hover":{backgroundColor:"#672E8D"}}}})),Se=function(){var e=Be();return c.a.createElement("div",{className:e.footerContainer},c.a.createElement("div",{className:e.followUsContainer},c.a.createElement("div",null,"Siguenos:"),c.a.createElement("div",{className:e.followUsBtnContainer},c.a.createElement(v.a,{className:"".concat(e.socialMediaBtn," ").concat(e.fbBtnColor)},c.a.createElement("i",{className:"lab la-facebook-square"})),c.a.createElement(v.a,{className:"".concat(e.socialMediaBtn," ").concat(e.instaBtnColor)},c.a.createElement("i",{className:"lab la-instagram"})))),c.a.createElement("div",{className:e.aditonalInfoContainer},c.a.createElement("p",null,"Made with ",c.a.createElement("i",{className:"las la-heart"})),c.a.createElement("p",null,"Esta web todavia se encuentra en desarrollo")))},xe=a(258),Ae={palette:{primary:{main:"#8A2BE2"},secondary:{main:"#03DAC5"}},spacing:function(e){return"".concat(.5*e,"rem")}},Ue=a(470),qe=function(){var e=Object(xe.a)(Ae),t=c.a.createRef(),a=function(e){return function(){t.current.closeSnackbar(e)}};return c.a.createElement(P.a,{ref:t,action:function(e){return c.a.createElement(v.a,{onClick:a(e)},c.a.createElement("i",{className:"".concat(l.a.closeSnackBtn," las la-times-circle")}))},anchorOrigin:{vertical:"bottom",horizontal:"right"},autoHideDuration:3e3},c.a.createElement(Ue.a,{theme:e},c.a.createElement("div",{className:l.a.FullScreenContainer},c.a.createElement(we,null),c.a.createElement("div",{className:l.a.contentContainer},c.a.createElement(ve,null)),c.a.createElement(Se,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Le=a(475),De=a(34),Fe=Object(De.c)({general:w.reducer,admin:te.reducer,catalogue:A.reducer,checkout:x.reducer}),Re=a(473),ze=a(257),Te=a(471),Me=a(31),Qe=a(472),Ge=a(182),Je=a.n(Ge),We="https://arcanum-catalogue.firebaseio.com/";Je.a.interceptors.request.use((function(e){return"get"===e.method&&(e.params=Object(B.a)({},e.data)),e}),(function(e){return Promise.reject(e)}));var He=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return Je.a.request(Object(B.a)({baseURL:We,url:e,method:t,data:a,headers:{"Content-Type":"application/json"}},n))},Ke=a(234),Ye=a(86),Ve=te.actions.setProductInfo,Xe=w.actions,$e=Xe.setIsLoading,Ze=Xe.setError,et=A.actions,tt=et.getProducts,at=et.getProductsSuccess,nt=w.actions,ct=nt.setIsLoading,ot=nt.setError,rt=x.actions.addProduct,it=w.actions.setIsLoading,lt=Object(Re.a)((function(e,t){return e.pipe(Object(ze.a)(Ve.type),Object(Te.a)((function(e){return Object(Ke.a)(He("/products/".concat(e.payload.category,".json"),"POST",e.payload).pipe(Object(Me.a)((function(e){return console.log(e.data),$e(!1)})),Object(Qe.a)((function(e){return Object(Ye.a)(Ze({meesage:e.response.data.error,errorCode:e.response.status}))}))),Object(Ye.a)($e(!1)))})))}),(function(e,t){return e.pipe(Object(ze.a)(tt.type),Object(Te.a)((function(e){return Object(Ke.a)(He("/products/dices.json","GET").pipe(Object(Me.a)((function(e){var t=e.data,a=Object.keys(t).map((function(e){return Object(B.a)(Object(B.a)({},t[e]),{},{id:e})}));return at(a)})),Object(Qe.a)((function(e){return Object(Ye.a)(ot({meesage:e.response.data.error,errorCode:e.response.status}))}))),Object(Ye.a)(ct(!1)))})))}),(function(e,t){return e.pipe(Object(ze.a)(rt.type),Object(Te.a)((function(e){return console.log(t.value.checkout.itemWasAdded),Object(Ye.a)(it(!1))})))})),ut=Object(Le.a)();a(416);console.log("firebase"),G.a.initializeApp({apiKey:"AIzaSyAJ5r4iSjNwCCCEyvjoq9pUPlhRGznqmfU",authDomain:"arcanum-catalogue.firebaseapp.com",databaseURL:"https://arcanum-catalogue.firebaseio.com",projectId:"arcanum-catalogue",storageBucket:"arcanum-catalogue.appspot.com",messagingSenderId:"61521143983",appId:"1:61521143983:web:2663beb5e10e5b571bcc5a",measurementId:"G-ZCKHFPJHVH"}),r.a.render(c.a.createElement(N.a,{store:function(){var e=Object(I.a)({reducer:Fe,middleware:[ut].concat(Object(S.a)(Object(I.c)()))});return ut.run(lt),e}()},c.a.createElement(c.a.StrictMode,null,c.a.createElement(qe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[277,1,2]]]);
//# sourceMappingURL=main.37cdb016.chunk.js.map