import{g as I,B}from"./index.fe236e02.js";import{_ as D,r as v,b as d,c as n,d as c,e,h as o,y as r,f as u,w as m,F as p,l as F,x as L,j as N,m as h,S as E,G}from"./index.fb59bf61.js";/* empty css                                                         */const O={id:"video1",muted:"",autoplay:"true",preload:"false"},P=["src"],T={id:"video2",muted:"",autoplay:"true",preload:"false"},$=["src"],j={class:"modal-box"},z={class:"bill-box"},A=["onClick"],H={class:"imco"},J=["src"],K={class:"text"},M={class:"lt"},Q={class:"gt"},q={style:{"text-align":"center"}},R=N("\u786E\u5B9A"),U={emits:["disabledStatus","childClick"],setup(W,{expose:f,emit:b}){const _=h.data,t=v({btnShow:!1,getSource:I(_.role),stepVal:0,myVideo:null}),g=s=>{s==1&&setTimeout(()=>{a.show=!0},2e3),i(s)},i=s=>{t.stepVal=s,y(),s==2&&b("disabledStatus")},y=()=>{t.myVideo=document.getElementById(`video${t.stepVal}`),t.myVideo.load(),t.myVideo.play()},a=v({show:!1,choose:"",curItem:"",list:[{id:1,name:"\u8FDB\u8D26\u5355",value:"C"},{id:2,name:"\u7ED3\u7B97\u4E1A\u52A1\u7533\u8BF7\u4E66",value:"D"},{id:3,name:"\u4E2A\u4EBA\u7ED3\u7B97\u4E1A\u52A1\u7533\u8BF7\u4E66",value:"E"},{id:4,name:"\u73B0\u91D1\u89E3\u6B3E\u5355",value:"I"},{id:5,name:"\u5883\u5185\u6C47\u6B3E\u7533\u8BF7\u4E66",value:"O"},{id:6,name:"\u5883\u5916\u6C47\u6B3E\u7533\u8BF7\u4E66",value:"P"},{id:7,name:"\u4FE1\u7528\u5361\u6FC0\u6D3B\u7533\u8BF7\u4E66",value:"L"},{id:8,name:"\u73B0\u91D1\u7F34\u7EB3\u5355",value:"F"},{id:9,name:"\u94F6\u884C\u672C\u7968\u7533\u8BF7\u4E66",value:"G"},{id:10,name:"\u94F6\u884C\u6C47\u7968\u7533\u8BF7\u4E66",value:"H"},{id:11,name:"\u6302\u5931\u6B62\u4ED8\u901A\u77E5\u4E66",value:"J"},{id:12,name:"\u73B0\u91D1\u5B58\u6B3E\u5355",value:"K"},{id:13,name:"\u5F00\u7ACB\u4E2A\u4EBA\u94F6\u884C\u7ED3\u7B97\u8D26\u6237\u7533\u8BF7\u4E66",value:"A"},{id:14,name:"\u5F00\u7ACB\u5355\u4F4D\u94F6\u884C\u7ED3\u7B97\u8D26\u6237\u7533\u8BF7\u4E66",value:"B"},{id:15,name:"\u4E2A\u4EBA\u5BA2\u6237\u6302\u5931\u7533\u8BF7\u4E66",value:"N"},{id:16,name:"\u4E2A\u4EBA\u5B9A\u671F\u5B58\u6B3E\u7533\u8BF7\u4E66",value:"M"},{id:17,name:"\u4E2A\u4EBA\u901A\u77E5\u5B58\u6B3E\u7533\u8BF7\u4E66",value:"Q"}]}),x=s=>{a.choose=s.id,a.curItem=s},S=()=>{if(a.choose){a.show=!1;let s=_.completeList;s.indexOf(4)==-1&&(s.push(4),h.setData("completeList",s)),i(2),E.set("step4",a.curItem)}else return G.warn("\u8BF7\u5148\u9009\u62E9\u4E00\u4E2A\u5355\u636E"),!1};return f({data:t,setStep:g,nextStep:i}),(s,X)=>{const C=d("a-radio"),V=d("a-button"),w=d("a-modal");return n(),c(p,null,[e("div",{class:r(["video-box",o(t).stepVal==1?"show":""])},[e("video",O,[e("source",{src:o(t).getSource.step1,type:"video/mp4"},null,8,P)])],2),e("div",{class:r(["video-box",o(t).stepVal==2?"show":""])},[e("video",T,[e("source",{src:o(t).getSource.step2,type:"video/mp4"},null,8,$)])],2),e("div",j,[u(w,{visible:o(a).show,width:850,closable:!1,centered:!0,mask:!1,maskClosable:!1,getContainer:".modal-box"},{footer:m(()=>[e("div",q,[u(V,{type:"primary",onClick:S},{default:m(()=>[R]),_:1})])]),default:m(()=>[e("ul",z,[(n(!0),c(p,null,F(o(a).list,(l,k)=>(n(),c("li",{key:k,class:r(o(a).choose==l.id?"on":"")},[e("div",{class:"card",onClick:Y=>x(l)},[e("div",H,[e("img",{src:o(B)(l.id)},null,8,J)]),e("div",K,[e("div",M,[u(C,{checked:o(a).choose==l.id},null,8,["checked"])]),e("div",Q,L(l.name),1)])],8,A)],2))),128))])]),_:1},8,["visible"])])],64)}}};var te=D(U,[["__scopeId","data-v-d6f8db60"]]);export{te as default};
