import{_ as L,u as P,r as _,w as R,o as c,c as u,a as t,b as I,d as y,p as N,e as U,t as i,g as D,f as B,h as V,F as j,i as z,n as E,j as C,k as O}from"./index-BHKfTUQY.js";import{L as T}from"./leaflet-src-C0hSXGgz.js";const $=v=>(N("data-v-f2675929"),v=v(),U(),v),A={class:"relative min-h-276"},F=$(()=>t("p",{class:"arrow"},"<",-1)),J=[F],M=$(()=>t("p",{class:"arrow"},">",-1)),q=[M],G={key:0,class:"absolute w-full h-full opacity-50 top-0 left-0 bg-black"},H=$(()=>t("div",{class:"flex items-center justify-center w-full h-full"},[t("div",{class:"px-3 py-1 text-xl font-medium leading-none text-center text-white"}," loading... ")],-1)),K=[H],Q={__name:"ProcessImg",props:{postId:{type:Number},imgUrl:{default:"",type:String}},setup(v){const x=P(),{prevImg:n,nextImg:d}=x,m=v,l=_(null),o=_([]),r=_(!1);R(()=>m.imgUrl,(f,s)=>{f!==s&&g(f)},{immediate:!0});function g(f){if(r.value=!0,o.value.some(h=>h.id===f)){const h=o.value.find(w=>w.id===f).canvasRef;l.value.width=h.width,l.value.height=h.height,l.value.getContext("2d").drawImage(h,0,0),r.value=!1;return}const s=new Image;s.src=f,s.onload=()=>{l.value.width=s==null?void 0:s.width,l.value.height=s==null?void 0:s.height,l.value.getContext("2d").drawImage(s,0,0),o.value.push({id:f,canvasRef:s}),r.value=!1},s.onerror=()=>{r.value=!1}}return(f,s)=>(c(),u("div",A,[t("div",{class:"prev",onClick:s[0]||(s[0]=h=>I(n)(v.postId))},J),t("div",{class:"next",onClick:s[1]||(s[1]=h=>I(d)(v.postId))},q),t("canvas",{class:"max-w-full",ref_key:"canvas",ref:l},null,512),r.value?(c(),u("div",G,K)):y("",!0)]))}},W=L(Q,[["__scopeId","data-v-f2675929"]]),X={key:0,class:"flex items-center justify-center w-full h-full"},Y=t("div",{class:"px-3 py-1 text-xl font-medium leading-none text-center text-black"}," loading... ",-1),Z=[Y],ee={key:2,class:"text-red-500"},te={key:3,class:"text-green-500"},se={__name:"CheckInsideArea",props:{postId:{type:Number}},setup(v){const x=v,n=_(void 0),d=_(!1);function m(){d.value=!0,D(x.postId).then(l=>{if(console.log(l),!l.data.lat||!l.data.lng)return n.value=!0,!1;const o={lat:l.data.lat,lng:l.data.lng};console.log(o);const r=JSON.parse(localStorage.getItem("drawnItems"));r&&r.forEach(g=>{T.geoJSON(g).getLayers()[0].getBounds().contains(o)?n.value=!0:n.value=!1})}).finally(()=>{d.value=!1})}return(l,o)=>(c(),u("div",null,[d.value?(c(),u("div",X,Z)):y("",!0),n.value===void 0&&!d.value?(c(),u("button",{key:1,type:"button",class:"flex items-center justify-center px-5 py-2 mt-2 text-white bg-blue-500 rounded",onClick:o[0]||(o[0]=r=>m())}," 檢查 ")):n.value===!0&&!d.value?(c(),u("span",ee,i(n.value?"紅區":""),1)):n.value===!1&&!d.value?(c(),u("span",te,i(n.value?"":"通過"),1)):y("",!0)]))}},ne={class:"flex flex-wrap pb-24 justify-center"},le={class:"p-2"},oe={class:"fs-7"},ae={key:0,class:"text-red-500 inline"},re=t("br",null,null,-1),ie={class:"text-green-600"},ce=["href"],ue={class:"flex justify-end"},de={class:"fixed bottom-0 left-0 z-50 w-full h-28 pb-4 bg-slate-500 border-t border-gray-200"},fe={class:"grid h-1/2 max-w-lg grid-cols-2 mx-auto font-medium"},pe={class:"grid h-1/2 max-w-lg grid-cols-4 mx-auto font-medium"},ve={class:"flex items-center justify-center col-span-2 text-white"},ge={key:0,class:"fixed w-screen h-svh opacity-50 top-0 left-0 bg-black z-50"},he=t("div",{class:"flex items-center justify-center w-full h-full"},[t("div",{class:"px-3 py-1 text-xl font-medium leading-none text-center text-white"}," loading... ")],-1),_e=[he],ye={__name:"ResultView",setup(v){const x=B(),n=P(),{setData:d,setRentUrlParams:m,getRentDataEvent:l}=n,o=_(0),r=_(!1),g=_(!1),f=V(()=>n.rentData.reduce((p,a)=>{let e=p.find(b=>b.location===a.location);return e&&!g.value?e.count++:p.push({...a,count:1}),p},[]));function s(){if(o.value>0){o.value--;const p=w(o.value);r.value=!0,l(`${n.rentUrlParams}${p}`).then(({data:a})=>{d(a.rentList),window.scrollTo(0,0)}).finally(()=>{r.value=!1})}}function h(){const p=Math.floor(+n.records/30);if(o.value<p-1){o.value++;const a=w(o.value);r.value=!0,l(`${n.rentUrlParams}${a}`).then(({data:e})=>{d(e.rentList),window.scrollTo(0,0)}).finally(()=>{r.value=!1})}}const w=p=>{const a=p*30;return p?`&firstRow=${a}`:""};function S(){m(""),x.push({name:"home"})}return(p,a)=>(c(),u(j,null,[t("div",ne,[(c(!0),u(j,null,z(f.value,e=>{var b,k;return c(),u("div",{key:e.post_id,class:"m-2",style:{width:"22rem"}},[C(W,{"post-id":e.post_id,"img-url":e.photo_list[e.currentImgIndex]},null,8,["post-id","img-url"]),t("div",le,[t("p",oe,[O(" 圖"+i(e.currentImgIndex+1)+"/"+i(e.photo_list.length)+" ＄"+i(e.price)+" "+i(e.floor_str)+" "+i(e.area)+"坪 ",1),e.count!==1?(c(),u("p",ae,"重複次數 "+i(e.count),1)):y("",!0),re,t("span",ie,i((b=e==null?void 0:e.surrounding)==null?void 0:b.desc)+i((k=e==null?void 0:e.surrounding)==null?void 0:k.distance),1)]),t("a",{class:"fs-7 text-blue-600",href:`https://rent.591.com.tw/rent-detail-${e.post_id}.html`,target:"_blank"},i(e.location),9,ce),t("div",ue,[C(se,{"post-id":e.post_id},null,8,["post-id"])])])])}),128))]),t("div",de,[t("div",fe,[t("button",{type:"button",class:"inline-flex flex-col items-center justify-center bg-slate-400 px-5 text-white",onClick:a[0]||(a[0]=e=>S())}," 重新查詢 "),t("span",{class:E(["inline-flex flex-col items-center justify-center px-5 text-white",{"bg-blue-500":g.value,"bg-gray-500":!g.value}]),onClick:a[1]||(a[1]=e=>g.value=!g.value)}," 顯示重複 ",2)]),t("div",pe,[t("button",{type:"button",class:"inline-flex flex-col items-center justify-center px-5 group text-white",onClick:a[2]||(a[2]=e=>s())}," 上一頁 "),t("span",ve,"第 "+i(o.value+1)+"/"+i(Math.floor(+I(n).records/30))+" 頁",1),t("button",{type:"button",class:"inline-flex flex-col items-center justify-center px-5 group text-white",onClick:a[3]||(a[3]=e=>h())}," 下一頁 ")])]),r.value?(c(),u("div",ge,_e)):y("",!0)],64))}};export{ye as default};
