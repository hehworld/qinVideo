(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{Txvc:function(e,a,t){"use strict";t.r(a);t("T2oS");var n,i,l,r=t("W9HT"),c=(t("IzEo"),t("bx4M")),o=(t("+L6B"),t("2/Rp")),m=(t("BoS7"),t("Sdc0")),s=(t("giR+"),t("fyUT")),g=(t("7Kak"),t("9yH6")),f=(t("/zsF"),t("PArb")),d=(t("nRaC"),t("5RzL")),p=(t("14J3"),t("BMrR")),u=(t("jCWc"),t("kPKH")),h=(t("5NDa"),t("5rEg")),b=(t("y8nQ"),t("Vl3Y")),x=t("jehZ"),E=t.n(x),y=(t("Znn+"),t("ZTPi")),j=t("2Taf"),v=t.n(j),M=t("vZ4D"),O=t.n(M),w=t("l4Ni"),C=t.n(w),k=t("ujKo"),I=t.n(k),V=t("MhPg"),A=t.n(V),P=t("q1tI"),D=t.n(P),S=t("MuoO"),N=t("LLXN"),R=(t("Q9mQ"),t("diRs")),L=(t("+BJd"),t("mr32")),q=t("WFjJ"),F=function(e){function a(){var e,t;v()(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return t=C()(this,(e=I()(a)).call.apply(e,[this].concat(i))),t.handleChangeComplete=function(e){var a=t.props.onChange;a(e.hex)},t}return A()(a,e),O()(a,[{key:"render",value:function(){var e=this.props.value,a=["#f5222d","#fa541c","#ffad14","#13c2c2","#52c41a","#1890ff","#2f54eb","#722ed1","#f47373","#697689","#2CCCE4","#555555","#dce775","#ff8a65","#ba68c8"];return D.a.createElement("span",null,D.a.createElement(R["a"],{placement:"bottom",content:D.a.createElement(q["BlockPicker"],{color:e,colors:a,onChangeComplete:this.handleChangeComplete}),trigger:"click"},D.a.createElement(L["a"],{color:e,style:{width:"90px",height:"30px",textAlign:"center",lineHeight:"30px"}},e)))}}]),a}(P["Component"]),T=F,B=t("v99g"),K=t("zX7x"),z=(t("Pwec"),t("CtXQ")),J=function(e){function a(){var e,t;v()(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return t=C()(this,(e=I()(a)).call.apply(e,[this].concat(i))),t.add=function(){var e=t.props,a=e.onChange,n=e.value,i={level:0,prefix:"",key:"",expired:3600};n.push(i),a(n)},t.remove=function(e){return function(){var a=t.props,n=a.onChange,i=a.value;i.splice(e,1),n(i)}},t.setLevel=function(e){return function(a){var n=t.props,i=n.onChange,l=n.value;l[e].level=a,i(l)}},t.setPrefix=function(e){return function(a){var n=t.props,i=n.onChange,l=n.value;l[e].prefix=a.target.value,i(l)}},t.setKey=function(e){return function(a){var n=t.props,i=n.onChange,l=n.value;l[e].key=a.target.value,i(l)}},t.setExpired=function(e){return function(a){var n=t.props,i=n.onChange,l=n.value;l[e].expired=a.target.value,i(l)}},t}return A()(a,e),O()(a,[{key:"render",value:function(){var e=this,a=(h["a"].Search,this.props.value),t=void 0===a?[]:a,n=t.map(function(a,t){return D.a.createElement("span",null,D.a.createElement(p["a"],{type:"flex",justify:"start",align:"top"},D.a.createElement(u["a"],{md:3,style:{display:"flex",alignItems:"center"}},D.a.createElement(s["a"],{value:a.level,placeholder:Object(N["formatMessage"])({id:"config.player.level"}),size:"large",onChange:e.setLevel(t),style:{width:"100%"}})),D.a.createElement(u["a"],{md:1,style:{display:"flex",justifyContent:"center",alignItems:"center",height:"40px"}},D.a.createElement(z["a"],{type:"close-circle",onClick:e.remove(t)})),D.a.createElement(u["a"],{md:20,style:{borderLeft:"dashed 1px rgba(0,0,0,0.2)",paddingLeft:"16px"}},D.a.createElement(p["a"],null,D.a.createElement(u["a"],{span:10},D.a.createElement(h["a"],{value:a.prefix,placeholder:Object(N["formatMessage"])({id:"config.player.prefix"}),onChange:e.setPrefix(t)})),D.a.createElement(u["a"],{span:6,offset:1},D.a.createElement(h["a"],{value:a.key,placeholder:Object(N["formatMessage"])({id:"config.player.key"}),onChange:e.setKey(t)})),D.a.createElement(u["a"],{span:6,offset:1},D.a.createElement(h["a"],{value:a.expired,placeholder:Object(N["formatMessage"])({id:"config.player.expired"}),onChange:e.setExpired(t)}))))),D.a.createElement(f["a"],null))});return D.a.createElement("div",null,n,D.a.createElement(p["a"],{type:"flex",justify:"center",align:"middle"},D.a.createElement(o["a"],{type:"dashed",onClick:this.add,style:{width:"160px",height:"40px",marginBottom:"16px"}},D.a.createElement(z["a"],{type:"plus"})," ",Object(N["formatMessage"])({id:"config.jiexi.add"}))))}}]),a}(P["Component"]),H=J,Q=t("+n12"),Z=function(e){function a(){var e,t;v()(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return t=C()(this,(e=I()(a)).call.apply(e,[this].concat(i))),t.add=function(){var e=t.props,a=e.onChange,n=e.value,i={pattern:"",prefix:""};n.push(i),a(n)},t.remove=function(e){return function(){var a=t.props,n=a.onChange,i=a.value;i.splice(e,1),n(i)}},t.setPattern=function(e){return function(a){var n=t.props,i=n.onChange,l=n.value;l[e].pattern=a.target.value,i(l)}},t.setPrefix=function(e){return function(a){var n=t.props,i=n.onChange,l=n.value;l[e].prefix=a.target.value,i(l)}},t}return A()(a,e),O()(a,[{key:"render",value:function(){var e=this,a=this.props.value,t=void 0===a?[]:a,n=t.map(function(a,t){return D.a.createElement("span",null,D.a.createElement(p["a"],{type:"flex",justify:"start",align:"top"},D.a.createElement(u["a"],{md:10},D.a.createElement(h["a"],{value:a.pattern,placeholder:Object(N["formatMessage"])({id:"config.jiexi.pattern"}),onChange:e.setPattern(t)})),D.a.createElement(u["a"],{md:12,offset:1},D.a.createElement(h["a"],{value:a.prefix,placeholder:Object(N["formatMessage"])({id:"config.jiexi.url"}),onChange:e.setPrefix(t)})),D.a.createElement(u["a"],{md:1,style:{display:"flex",justifyContent:"center",alignItems:"center",height:"40px"}},D.a.createElement(z["a"],{type:"close-circle",onClick:e.remove(t)}))),D.a.createElement(f["a"],null))});return D.a.createElement("div",null,n,D.a.createElement(p["a"],{type:"flex",justify:"center",align:"middle"},D.a.createElement(o["a"],{type:"dashed",onClick:this.add,style:{width:"160px",height:"40px",marginBottom:"16px"}},D.a.createElement(z["a"],{type:"plus"})," ",Object(N["formatMessage"])({id:"config.jiexi.add"}))))}}]),a}(P["Component"]),W=Z,X=(n=Object(S["connect"])(function(e){var a=e.config,t=e.category,n=e.loading;return{config:a,category:t,loading:n.models.config}}),n((l=function(e){function a(){var e,t;v()(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return t=C()(this,(e=I()(a)).call.apply(e,[this].concat(i))),t.handleSubmit=function(e){e.preventDefault();var a=t.props,n=a.dispatch,i=a.form;i.validateFields(function(e,a){e||n({type:"config/postConfig",payload:{data:a}})})},t.initData=function(){var e=t.props.dispatch;e({type:"config/getConfig",payload:{query:{}}})},t}return A()(a,e),O()(a,[{key:"componentDidMount",value:function(){this.initData()}},{key:"render",value:function(){var e=y["a"].TabPane,a=this.props.form.getFieldDecorator,t=this.props,n=t.loading,i=t.config.data,l=t.category,x=l.kind,j=l.comic,v=l.post,M=Object(Q["i"])(x),O=Object(Q["i"])(j),w=Object(Q["i"])(v),C=[{title:"\u9884\u7f6e",key:"init",value:"init1639732",disabled:!0,children:[{title:"\u64ad\u653e\u6700\u9ad8(\u89c6\u9891)",key:"newIndexPlayAnimate",value:"newIndexPlayAnimate"},{title:"\u8bc4\u5206\u6700\u9ad8(\u89c6\u9891)",key:"newIndexRateAnimate",value:"newIndexRateAnimate"},{title:"\u65b0\u756a\u8fde\u8f7d(\u89c6\u9891)",key:"newIndexNewAnimate",value:"newIndexNewAnimate"},{title:"\u968f\u673a\u63a8\u8350(\u89c6\u9891)",key:"newIndexRandomAnimate",value:"newIndexRandomAnimate"},{title:"\u64ad\u653e\u6700\u9ad8(\u6f2b\u753b)",key:"newIndexPlayComic",value:"newIndexPlayComic"},{title:"\u8bc4\u5206\u6700\u9ad8(\u6f2b\u753b)",key:"newIndexRateComic",value:"newIndexRateComic"},{title:"\u65b0\u756a\u8fde\u8f7d(\u6f2b\u753b)",key:"newIndexNewComic",value:"newIndexNewComic"},{title:"\u968f\u673a\u63a8\u8350(\u6f2b\u753b)",key:"newIndexRandomComic",value:"newIndexRandomComic"}]},{title:"\u89c6\u9891",key:"animate",value:"init1639733",disabled:!0,children:M},{title:"\u6f2b\u753b",key:"comic",value:"init1639734",disabled:!0,children:O}],k=[{title:"\u9884\u7f6e",key:"init",value:"init1639732",disabled:!0,children:[{title:"\u8fde\u8f7d\u756a\u5267",key:"newAnimate",value:"newAnimate"},{title:"\u8fde\u8f7d\u6f2b\u753b",key:"newComic",value:"newComic"},{title:"\u6240\u6709\u756a\u5267",key:"allAnimate",value:"allAnimate"},{title:"\u6240\u6709\u6f2b\u753b",key:"allComic",value:"allComic"},{title:"\u6587\u7ae0\u533a",key:"allPost",value:"allPost"},{title:"\u8ba8\u8bba\u533a",key:"newDiscuss",value:"newDiscuss"},{title:"\u5546\u54c1",key:"newShop",value:"newShop"}]},{title:"\u89c6\u9891",key:"animate",value:"init1639733",disabled:!0,children:M},{title:"\u6f2b\u753b",key:"comic",value:"init1639734",disabled:!0,children:O}],I=[{title:"\u9884\u7f6e",key:"init",value:"init1639732",disabled:!0,children:[{title:"\u65b0\u756a",key:"newAnimate",value:"newAnimate"},{title:"\u65b0\u6f2b",key:"newComic",value:"newComic"},{title:"\u756a\u5267",key:"allAnimate",value:"allAnimate"},{title:"\u6f2b\u753b",key:"allComic",value:"allComic"},{title:"\u6587\u7ae0",key:"allPost",value:"allPost"},{title:"\u52a8\u6001",key:"newDiscuss",value:"newDiscuss"},{title:"\u5546\u54c1",key:"newShop",value:"newShop"}]}],V={labelCol:{lg:{span:2}},wrapperCol:{lg:{span:18,offset:1},xl:{span:14,offset:1},xxl:{span:10,offset:1}}},A={xs:24,sm:24,md:24,lg:24,xl:12},P={labelCol:{span:4},wrapperCol:{span:18,offset:1}};return D.a.createElement(B["a"],null,D.a.createElement(r["a"],{tip:"Loading...",spinning:!!n},D.a.createElement(b["a"],{onSubmit:this.handleSubmit},D.a.createElement(c["a"],{bordered:!1},D.a.createElement(y["a"],{defaultActiveKey:"1"},D.a.createElement(e,{tab:Object(N["formatMessage"])({id:"common.baseinfo"}),key:"1"},D.a.createElement(b["a"].Item,E()({},V,{label:Object(N["formatMessage"])({id:"config.color"}),extra:Object(N["formatMessage"])({id:"config.color.extra"})}),a("color",{initialValue:i.color||"#22194d"})(D.a.createElement(T,null))),D.a.createElement(b["a"].Item,E()({},V,{label:Object(N["formatMessage"])({id:"config.name"}),extra:Object(N["formatMessage"])({id:"config.name.extra"})}),a("name",{initialValue:i.name})(D.a.createElement(h["a"],{placeholder:Object(N["formatMessage"])({id:"config.name"})}))),D.a.createElement(b["a"].Item,E()({},V,{label:Object(N["formatMessage"])({id:"config.slogan"}),extra:Object(N["formatMessage"])({id:"config.slogan.extra"})}),a("slogan",{initialValue:i.slogan})(D.a.createElement(h["a"],{placeholder:Object(N["formatMessage"])({id:"config.slogan"})}))),D.a.createElement(b["a"].Item,E()({},V,{label:Object(N["formatMessage"])({id:"config.information"}),extra:Object(N["formatMessage"])({id:"config.information.extra"})}),a("information",{initialValue:i.information})(D.a.createElement(h["a"],{placeholder:Object(N["formatMessage"])({id:"config.information"})}))),D.a.createElement(b["a"].Item,E()({},V,{label:Object(N["formatMessage"])({id:"config.qq"})}),a("qq",{initialValue:i.qq})(D.a.createElement(h["a"],{placeholder:Object(N["formatMessage"])({id:"config.qq"})}))),D.a.createElement(b["a"].Item,E()({},V,{label:Object(N["formatMessage"])({id:"config.email"})}),a("email",{initialValue:i.email})(D.a.createElement(h["a"],{placeholder:Object(N["formatMessage"])({id:"config.email"})}))),D.a.createElement(b["a"].Item,E()({},V,{label:Object(N["formatMessage"])({id:"config.app"})}),a("app",{initialValue:i.app})(D.a.createElement(h["a"],{placeholder:Object(N["formatMessage"])({id:"config.app"})})))),D.a.createElement(e,{tab:Object(N["formatMessage"])({id:"config.image.setting"}),key:"2"},D.a.createElement(p["a"],null,D.a.createElement(u["a"],A,D.a.createElement(b["a"].Item,E()({},P,{label:Object(N["formatMessage"])({id:"config.favicon"}),extra:Object(N["formatMessage"])({id:"config.favicon.extra"})}),a("favicon",{initialValue:i.favicon})(D.a.createElement(K["a"],{type:"config"}))),D.a.createElement(b["a"].Item,E()({},P,{label:Object(N["formatMessage"])({id:"config.pc.headimg"}),extra:Object(N["formatMessage"])({id:"config.pc.headimg.extra"})}),a("headimg",{initialValue:i.headimg})(D.a.createElement(K["a"],{type:"config",width:400,height:160}))),D.a.createElement(b["a"].Item,E()({},P,{label:Object(N["formatMessage"])({id:"config.pc.loginimg"}),extra:Object(N["formatMessage"])({id:"config.pc.loginimg.extra"})}),a("loginimg",{initialValue:i.loginimg})(D.a.createElement(K["a"],{type:"config",width:400,height:200}))),D.a.createElement(b["a"].Item,E()({},P,{label:Object(N["formatMessage"])({id:"config.newAnimate"}),extra:Object(N["formatMessage"])({id:"config.newAnimate.extra"})}),a("newAnimate",{initialValue:i.newAnimate})(D.a.createElement(K["a"],{type:"config",width:400,height:160}))),D.a.createElement(b["a"].Item,E()({},P,{label:Object(N["formatMessage"])({id:"config.newComic"}),extra:Object(N["formatMessage"])({id:"config.newComic.extra"})}),a("newComic",{initialValue:i.newComic})(D.a.createElement(K["a"],{type:"config",width:400,height:160}))),D.a.createElement(b["a"].Item,E()({},P,{label:Object(N["formatMessage"])({id:"config.newDiscuss"}),extra:Object(N["formatMessage"])({id:"config.newDiscuss.extra"})}),a("newDiscuss",{initialValue:i.newDiscuss})(D.a.createElement(K["a"],{type:"config",width:400,height:160}))),D.a.createElement(b["a"].Item,E()({},P,{label:Object(N["formatMessage"])({id:"config.newShop"}),extra:Object(N["formatMessage"])({id:"config.newShop.extra"})}),a("newShop",{initialValue:i.newShop})(D.a.createElement(K["a"],{type:"config",width:400,height:160})))),D.a.createElement(u["a"],A,D.a.createElement(b["a"].Item,E()({},P,{label:Object(N["formatMessage"])({id:"config.user.avatar"}),extra:Object(N["formatMessage"])({id:"config.user.avatar.extra"})}),a("avatar",{initialValue:i.avatar})(D.a.createElement(K["a"],{type:"config"}))),D.a.createElement(b["a"].Item,E()({},P,{label:Object(N["formatMessage"])({id:"config.user.background"}),extra:Object(N["formatMessage"])({id:"config.user.background.extra"})}),a("background",{initialValue:i.background})(D.a.createElement(K["a"],{type:"config",width:400,height:160}))),D.a.createElement(b["a"].Item,E()({},P,{label:Object(N["formatMessage"])({id:"config.mobile.headimg"}),extra:Object(N["formatMessage"])({id:"config.mobile.headimg.extra"})}),a("mobleimg",{initialValue:i.mobleimg})(D.a.createElement(K["a"],{type:"config",width:240,height:400}))),D.a.createElement(b["a"].Item,E()({},P,{label:Object(N["formatMessage"])({id:"config.allAnimate"}),extra:Object(N["formatMessage"])({id:"config.allAnimate.extra"})}),a("allAnimate",{initialValue:i.allAnimate})(D.a.createElement(K["a"],{type:"config",width:400,height:160}))),D.a.createElement(b["a"].Item,E()({},P,{label:Object(N["formatMessage"])({id:"config.allComic"}),extra:Object(N["formatMessage"])({id:"config.allComic.extra"})}),a("allComic",{initialValue:i.allComic})(D.a.createElement(K["a"],{type:"config",width:400,height:160}))),D.a.createElement(b["a"].Item,E()({},P,{label:Object(N["formatMessage"])({id:"config.allPost"}),extra:Object(N["formatMessage"])({id:"config.allPost.extra"})}),a("allPost",{initialValue:i.allPost})(D.a.createElement(K["a"],{type:"config",width:400,height:160})))))),D.a.createElement(e,{tab:Object(N["formatMessage"])({id:"config.page.setting"}),key:"3"},D.a.createElement(b["a"].Item,E()({},V,{label:Object(N["formatMessage"])({id:"config.header.pc.menu"}),extra:Object(N["formatMessage"])({id:"config.header.pc.menu.extra"})}),a("pcMenu",{initialValue:i.pcMenu||[]})(D.a.createElement(d["a"],{treeData:k,showSearch:!0,treeNodeFilterProp:"title",treeDefaultExpandAll:!0,allowClear:!0,multiple:!0,placeholder:Object(N["formatMessage"])({id:"config.header.menu.select"})}))),D.a.createElement(b["a"].Item,E()({},V,{label:Object(N["formatMessage"])({id:"config.index.pc.menu"}),extra:Object(N["formatMessage"])({id:"config.index.pc.menu.extra"})}),a("pcIndex",{initialValue:i.pcIndex||[]})(D.a.createElement(d["a"],{treeData:C,showSearch:!0,treeNodeFilterProp:"title",treeDefaultExpandAll:!0,allowClear:!0,multiple:!0,placeholder:Object(N["formatMessage"])({id:"config.header.menu.select"})}))),D.a.createElement(b["a"].Item,E()({},V,{label:Object(N["formatMessage"])({id:"config.header.h5.menu"}),extra:Object(N["formatMessage"])({id:"config.header.h5.menu.extra"})}),a("h5Menu",{initialValue:i.h5Menu||[]})(D.a.createElement(d["a"],{treeData:I,showSearch:!0,treeNodeFilterProp:"title",treeDefaultExpandAll:!0,allowClear:!0,multiple:!0,placeholder:Object(N["formatMessage"])({id:"config.header.menu.select"})}))),D.a.createElement(b["a"].Item,E()({},V,{label:Object(N["formatMessage"])({id:"config.index.h5.menu"}),extra:Object(N["formatMessage"])({id:"config.index.h5.menu.extra"})}),a("h5Index",{initialValue:i.h5Index||[]})(D.a.createElement(d["a"],{treeData:C,showSearch:!0,treeNodeFilterProp:"title",treeDefaultExpandAll:!0,allowClear:!0,multiple:!0,placeholder:Object(N["formatMessage"])({id:"config.header.menu.select"})}))),D.a.createElement(b["a"].Item,E()({},V,{label:Object(N["formatMessage"])({id:"config.index.post.menu"}),extra:Object(N["formatMessage"])({id:"config.index.post.menu.extra"})}),a("postMenu",{initialValue:i.postMenu||[]})(D.a.createElement(d["a"],{treeData:w,showSearch:!0,treeNodeFilterProp:"title",treeDefaultExpandAll:!0,multiple:!0,allowClear:!0,placeholder:Object(N["formatMessage"])({id:"config.header.menu.select"})}))),D.a.createElement(b["a"].Item,E()({},V,{label:Object(N["formatMessage"])({id:"config.index.post.top"}),extra:Object(N["formatMessage"])({id:"config.index.post.top.extra"})}),a("postTop",{initialValue:i.postTop||[]})(D.a.createElement(d["a"],{treeData:w,showSearch:!0,treeNodeFilterProp:"title",treeDefaultExpandAll:!0,allowClear:!0,placeholder:Object(N["formatMessage"])({id:"config.header.menu.select"})}))),D.a.createElement(b["a"].Item,E()({},V,{label:Object(N["formatMessage"])({id:"config.index.aboutus"}),extra:Object(N["formatMessage"])({id:"config.index.aboutus.extra"})}),a("aboutus",{initialValue:i.aboutus||[]})(D.a.createElement(h["a"],{placeholder:Object(N["formatMessage"])({id:"config.index.aboutus"})})))),D.a.createElement(e,{tab:Object(N["formatMessage"])({id:"config.player.setting"}),key:"4"},D.a.createElement(b["a"].Item,E()({},V,{label:Object(N["formatMessage"])({id:"config.player.limit"}),extra:Object(N["formatMessage"])({id:"config.player.limit.extra"})}),a("playLimit",{initialValue:i.playLimit||[]})(D.a.createElement(H,null))),D.a.createElement(f["a"],null),D.a.createElement(b["a"].Item,E()({},V,{label:Object(N["formatMessage"])({id:"config.player.jiexi"}),extra:Object(N["formatMessage"])({id:"config.player.jiexi.extra"})}),a("jiexi",{initialValue:i.jiexi||[]})(D.a.createElement(W,null)))),D.a.createElement(e,{tab:Object(N["formatMessage"])({id:"config.email.setting"}),key:"5"},D.a.createElement(b["a"].Item,E()({},V,{label:Object(N["formatMessage"])({id:"config.email.type"}),extra:Object(N["formatMessage"])({id:"config.email.type.extra"})}),a("emailSetting.type",{initialValue:i.emailSetting.type||"smtp"})(D.a.createElement(g["a"].Group,null,D.a.createElement(g["a"],{value:"smtp"},"smtp"),D.a.createElement(g["a"],{value:"sendgrid"},"sendgrid")))),D.a.createElement(b["a"].Item,E()({},V,{label:Object(N["formatMessage"])({id:"config.email.name"})}),a("emailSetting.name",{initialValue:i.emailSetting.name||""})(D.a.createElement(h["a"],{placeholder:Object(N["formatMessage"])({id:"config.email.name"})}))),D.a.createElement(b["a"].Item,E()({},V,{label:Object(N["formatMessage"])({id:"config.email.sender"})}),a("emailSetting.sender",{initialValue:i.emailSetting.sender||""})(D.a.createElement(h["a"],{placeholder:Object(N["formatMessage"])({id:"config.email.sender"})}))),D.a.createElement(p["a"],{type:"flex"},D.a.createElement(u["a"],{xs:23,lg:11},D.a.createElement(f["a"],{orientation:"left"},"smtp"),D.a.createElement(b["a"].Item,E()({},P,{label:Object(N["formatMessage"])({id:"config.smtp.port"})}),a("smtp.port",{initialValue:i.smtp.port||465})(D.a.createElement(s["a"],{placeholder:"port"}))),D.a.createElement(b["a"].Item,E()({},P,{label:Object(N["formatMessage"])({id:"config.smtp.secure"})}),a("smtp.secure",{initialValue:i.smtp.secure||!1,valuePropName:"checked"})(D.a.createElement(m["a"],null))),D.a.createElement(b["a"].Item,E()({},P,{label:Object(N["formatMessage"])({id:"config.smtp.host"}),extra:Object(N["formatMessage"])({id:"config.smtp.host.extra"})}),a("smtp.host",{initialValue:i.smtp.host||""})(D.a.createElement(h["a"],{placeholder:"host"}))),D.a.createElement(b["a"].Item,E()({},P,{label:Object(N["formatMessage"])({id:"config.smtp.user.name"})}),a("smtp.user",{initialValue:i.smtp.user||""})(D.a.createElement(h["a"],{placeholder:Object(N["formatMessage"])({id:"config.smtp.user.name"})}))),D.a.createElement(b["a"].Item,E()({},P,{label:Object(N["formatMessage"])({id:"config.smtp.user.pass"})}),a("smtp.pass",{initialValue:i.smtp.pass||""})(D.a.createElement(h["a"],{type:"password",placeholder:Object(N["formatMessage"])({id:"config.smtp.user.pass"})})))),D.a.createElement(u["a"],{xs:23,lg:11,offset:1},D.a.createElement(f["a"],{orientation:"left"},"sendgrid"),D.a.createElement(b["a"].Item,E()({},P,{label:Object(N["formatMessage"])({id:"config.sendgrid.key"})}),a("sendgrid.key",{initialValue:i.sendgrid.key||""})(D.a.createElement(h["a"],{placeholder:"key"}))))))),D.a.createElement(f["a"],null),D.a.createElement(p["a"],{type:"flex",justify:"center",align:"middle"},D.a.createElement(o["a"],{type:"primary",htmlType:"submit"},Object(N["formatMessage"])({id:"config.save"})))))))}}]),a}(P["Component"]),i=l))||i);a["default"]=b["a"].create()(X)}}]);