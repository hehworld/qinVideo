(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{BftI:function(a,n,t){"use strict";t.r(n);var e,i,o,r=t("p0pE"),s=t.n(r),l=(t("T2oS"),t("W9HT")),c=t("2Taf"),f=t.n(c),p=t("vZ4D"),u=t.n(p),m=t("l4Ni"),d=t.n(m),g=t("ujKo"),y=t.n(g),v=t("MhPg"),h=t.n(v),k=t("q1tI"),I=t.n(k),w=t("MuoO"),b=(t("LLXN"),t("x+KT")),A=(e=Object(w["connect"])(function(a){var n=a.animate,t=a.category,e=a.loading;return{animate:n,category:t,loading:e.effects["animate/getAnimateInfo"]||e.effects["animate/putAnimateInfo"]}}),e((o=function(a){function n(){var a,t;f()(this,n);for(var e=arguments.length,i=new Array(e),o=0;o<e;o++)i[o]=arguments[o];return t=d()(this,(a=y()(n)).call.apply(a,[this].concat(i))),t.state={animate:{baseInfo:{title:"",slug:"",status:"draft",introduce:"",isUpdate:!1,updateDay:0,rateStar:4,rateCount:1e3,impression:"",eposideCount:12,staff:"",actor:"",linkPrefix:"",downTitle:"",downLink:"",playKind:"mp4",level:0,firstPlay:"20160606",coverVertical:"",coverHorizontal:"",tags:[]},eposide:[]}},t.getAnimateInfo=function(){var a=t.props,n=a.dispatch,e=a.match.params.slug;n({type:"animate/getAnimateInfo",payload:{params:{slug:e}}})},t.handleSubmit=function(a){var n=t.props,e=n.dispatch,i=n.match.params.slug;e({type:"animate/putAnimateInfo",payload:{params:{slug:i},data:a}})},t}return h()(n,a),u()(n,[{key:"componentDidMount",value:function(){this.getAnimateInfo()}},{key:"render",value:function(){var a=this.props,n=a.loading,t=a.match.params.slug,e=this.state.animate;return I.a.createElement(l["a"],{spinning:!!n},I.a.createElement(b["a"],{onChange:this.handleSubmit,animateInfo:e,slug:t}))}}],[{key:"getDerivedStateFromProps",value:function(a,n){var t=a.match.params.slug,e=a.animate;return e.info&&e.info.slug===t?{animate:{baseInfo:s()({},e.info,e.info.information,e.info.play,{playKind:e.info.play.kind,coverHorizontal:e.info.cover.horizontal,coverVertical:e.info.cover.vertical,tags:e.info.category.tag,area:e.info.category.area?e.info.category.area._id:null,year:e.info.category.year?e.info.category.year._id:null,kind:e.info.category.kind?e.info.category.kind._id:null}),eposide:e.info.eposide}}:null}}]),n}(k["Component"]),i=o))||i);n["default"]=A}}]);