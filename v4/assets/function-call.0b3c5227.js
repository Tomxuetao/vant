import{c as p,e as a,d as m,f as g}from"./use-translate.94d81043.js";import{m as s,n as w,u as k,w as y}from"./with-install.dd5596ee.js";import{m as O,u as P}from"./mount-component.725b707e.js";import{p as S,P as h}from"./index.21ae1060.js";import{A as N,e as l,B as b}from"./vue-libs.84c45047.js";const[C,B]=p("notify"),D=a({},S,{type:s("danger"),color:String,message:w,position:s("top"),className:k,background:String,lockScroll:Boolean});var u=N({name:C,props:D,emits:["update:show"],setup(e,{emit:t,slots:r}){const d=f=>t("update:show",f);return()=>l(h,{show:e.show,class:[B([e.type]),e.className],style:{color:e.color,background:e.background},overlay:!1,position:e.position,duration:.2,lockScroll:e.lockScroll,"onUpdate:show":d},{default:()=>[r.default?r.default():e.message]})}});let i,n;const v=e=>g(e)?e:{message:e};function x(){({instance:n}=O({setup(){const{state:e,toggle:t}=P();return()=>l(u,b(e,{"onUpdate:show":t}),null)}}))}function o(e){if(!!m)return n||x(),e=a({},o.currentOptions,v(e)),n.open(e),clearTimeout(i),e.duration>0&&(i=window.setTimeout(o.clear,e.duration)),n}const c=()=>({type:"danger",color:void 0,message:"",onClose:void 0,onClick:void 0,onOpened:void 0,duration:3e3,position:void 0,className:"",lockScroll:!1,background:void 0});o.clear=()=>{n&&n.toggle(!1)};o.currentOptions=c();o.setDefaultOptions=e=>{a(o.currentOptions,e)};o.resetDefaultOptions=()=>{o.currentOptions=c()};o.Component=y(u);o.install=e=>{e.use(o.Component),e.config.globalProperties.$notify=o};export{o as N};
