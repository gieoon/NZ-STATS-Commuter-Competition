(this["webpackJsonpvisualizing-commuter-data"]=this["webpackJsonpvisualizing-commuter-data"]||[]).push([[6],{161:function(e,t,a){},162:function(e,t,a){e.exports=a.p+"static/media/help_white.ecb08412.svg"},204:function(e,t,a){"use strict";a.r(t);var n=a(54),o=a(13),r=a(5),i=a.n(r),c=a(159),s=function(e){var t=e.width,a=e.statistic,n=window.innerWidth;t||(t=n>769?480:n);var r=(n>769?.9:1)*t/.885,s=42+o.m+r;return i.a.createElement(c.a,{viewBox:"0 0 ".concat(t," ").concat(s),height:s,width:t,speed:2,backgroundColor:o.c[a]},i.a.createElement("circle",{cx:.4*t,cy:s/2,r:"5"}),i.a.createElement("circle",{cx:.5*t,cy:s/2,r:"5"}),i.a.createElement("circle",{cx:.6*t,cy:s/2,r:"5"}))},u=a(20),l=a(90),m=a.n(l),d=a(160),p=a.n(d),b=a(76),f=a(27),g=a.n(f),v=a(247),h=a(53),_=a(57),E=(a(161),a(58)),O=a(74),N=a(162),j=a.n(N);var y=a(163),w=a(75),k=a(88),C=a(164);function x(){var e=Object(y.a)(["\n//   width: 100%;\n  height: 100%;\n  font-family: 'archia';\n  font-size: 12px;\n  background: white;\n  border-radius: 5px;\n  will-change: transform, opacity;\n  margin: 8px auto;\n  margin-right: 12px;\n  padding: 6px;\n"]);return x=function(){return e},e}function D(){var e=Object(y.a)(["\n  position: relative;\n  display: block;\n  max-width: 300px;\n//   display: grid;\n//   grid-template-columns: repeat(4, minmax(100px, 1fr));\n//   grid-gap: 25px;\n  padding: 25px;\n  background: white;\n  border-radius: 6px;\n  cursor: pointer;\n  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);\n  will-change: width, height;\n"]);return D=function(){return e},e}function T(){var e=Object(y.a)(["\n    max-height: 70vh;\n    overflow-y: scroll; \n    pointer-events: all;\n"]);return T=function(){return e},e}function A(){var e=Object(y.a)(["\n    margin-top: 8px;\n"]);return A=function(){return e},e}function S(){var e=Object(y.a)(["\n    margin: 0;\n    font-weight: 200;\n    /* opacity: .45; */\n    color: rgb(108, 117, 125);\n"]);return S=function(){return e},e}function M(){var e=Object(y.a)(["\n  position: fixed;\n  left: calc(408px + 8px + 8px + 8px);\n  top: calc(8px);\n  z-index: 9999;\n  pointer-events: none;\n"]);return M=function(){return e},e}function R(){var e=Object(y.a)(["\n    position: fixed;\n    top: -8px;\n    left: 0;\n    height: calc(100vh + 8px);\n    width: 100vw;\n    background-color: rgba(0,0,0,.2);\n    z-index: 1001;\n"]);return R=function(){return e},e}function U(e){var t=e.open,a=e.setOpen,o=e.name1,c=e.name,s=e.data,u=Object(r.useState)(!0),l=Object(n.a)(u,2),m=l[0],d=l[1],p=Object(r.useRef)(),b=Object(r.useRef)(),f=Object(E.d)({ref:b,from:{top:"-500px"},to:{top:t?"0px":"-500px"}}).top,g=Object(E.d)({ref:p,config:E.b.stiff,from:{size:"1%",background:"#161625",opacity:0},to:{size:t?"100%":"1%",background:t?"#161625":"#1e1e30",opacity:t?1:0}}),v=g.size,h=g.opacity,_=Object(k.a)(g,["size","opacity"]),O=Object(r.useRef)(),N=Object(E.f)(t?s:[],(function(e){return e[0]}),{ref:O,unique:!0,trail:400/s.length,from:{opacity:0,transform:"scale(0)"},enter:{opacity:1,transform:"scale(1)"},leave:{opacity:0,transform:"scale(0)"}});return Object(r.useEffect)((function(){setTimeout((function(){d(!t)}),250)}),[t]),Object(E.c)(t?[b,p,O]:[O,p,b],[0,t?.15:.3]),i.a.createElement("div",null,i.a.createElement(Y,{id:"background",onClick:function(e){"background"===e.target.id&&a(!t)},style:{display:m?"none":"block",pointerEvents:t?"all":"none",opacity:h}}),i.a.createElement(z,{id:"destination-popup-wrapper"},i.a.createElement(F,{id:"destination-popup-container",style:Object(w.a)({},_,{width:v,height:v,top:f,opacity:h})},t?i.a.createElement(i.a.Fragment,null,i.a.createElement(V,{id:"destination-popup-top-description"},"Details about this location"),i.a.createElement(I,{id:"destination-popup-header"},o+", ",i.a.createElement("br",null),c)):"",i.a.createElement(P,{id:"destination-popup-contents"},N.map((function(e){var t=e.item,a=e.key,n=e.props;return i.a.createElement(H,{key:a,className:"destination-popup-item",style:Object(w.a)({},n,{background:"#1e1e30"})},i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{color:"#6c757d",marginBottom:"4px"}},q(t[0])),i.a.createElement("div",{style:{color:"white"}},q(t[0]).includes("distance")?Number(t[1]).toFixed(2)+"km":q(t[0]).includes("common")?t[1]:q(t[0]).includes("people")?Number(t[1]).toFixed()+" people":q(t[0]).includes("trips")?Number(t[1]).toFixed()+" trips":Number(t[1]).toFixed())))}))))))}var Y=Object(C.a)(E.a.div)(R()),z=Object(C.a)(E.a.div)(M()),V=Object(C.a)(E.a.h6)(S()),I=Object(C.a)(E.a.h1)(A()),P=Object(C.a)(E.a.div)(T()),F=Object(C.a)(E.a.div)(D()),H=Object(C.a)(E.a.div)(x()),q=function(e){switch(e){case"SA2_name_usual_residence_address":return"name";case"number_of_commutes_departing":return"Number of commute trips departing from here";case"number_of_commutes_arriving":return"Number of commute trips arriving here";case"number_of_people_commuting":return"Number of people commuting from here";case"average_distance_of_departing_commute":return"Average distance of commutes departing from here";case"average_distance_of_arriving_commute":return"Average distance of commutes arriving here";case"education_bicycle_count":return"Number of people commuting to school by bicycle";case"education_bus_count":return"Number of people commuting to school by bus";case"education_ferry_count":return"Number of people commuting to school by ferry";case"education_home_count":return"Number of people studying from home";case"education_other_count":return"Number of people commuting to school by other means";case"education_own_vehicle_count":return"Number of people commuting to school using their own vehicle";case"education_passenger_count":return"Number of people commuting to school as a passenger in a car/truck/van";case"education_train_count":return"Number of people commuting to school by train";case"education_walk_or_jog_count":return"Number of people commuting to school walking/jogging";case"work_bicycle_count":return"Number of people commuting to work on bicycle";case"work_bus_count":return"Number of people commuting to work oby bus";case"work_ferry_count":return"Number of people commuting to work by ferry";case"work_home_count":return"Number of people working from home";case"work_other_count":return"Number of people commuting to work by other means";case"work_own_vehicle_count":return"Number of people commuting to work using their own or a company vehicle";case"work_passenger_count":return"Number of people commuting to work as a passenger";case"work_train_count":return"Number of people commuting to work by train";case"work_walk_or_jog_count":return"Number of people commuting to work walking/jogging";case"common_destination_1":return"Most common destination for people commuting from here";case"common_destination_2":return"Second most common destination for people commuting from here";case"common_destination_3":return"Third most common destination for people commuting from here";case"common_arrival_1":return"Most common destination for people commuting here";case"common_arrival_2":return"Second most common destination for people commuting here";case"common_arrival_3":return"Third most common destination for people commuting here";case"bicycle_distance":return"Average distance commuting on bicycle";case"bus_distance":return"Average distance of commute by bus";case"ferry_distance":return"Average distance of commute by ferry";case"other_distance":return"Average distance of commute by other means";case"own_vehicle_distance":return"Average distance of commute using own vehicle";case"passenger_distance":return"Average distance of commute as a passenger in car/truck/van";case"train_distance":return"Average distance of commute by train";case"walk_or_jog_distance":return"Average distance of commute walking/jogging";default:return""}},Z=Object(r.lazy)((function(){return a.e(15).then(a.bind(null,238))}));var L=function(e){e.hoveredRegion,e.hoveredData,e.highlightedData,e.centroidData;var t=e.allCentroidDestinations,a=e.currentDestinationData,c=e.clickedData,s=e.setClickedData,l=Object(v.a)().t,d=Object(r.useState)(o.r),p=Object(n.a)(d,2),b=(p[0],p[1],Object(r.useState)("Total")),f=Object(n.a)(b,2),g=(f[0],f[1],Object(r.useState)({name1:"",name:"",data:[]})),h=Object(n.a)(g,2),N=h[0],y=h[1],w=Object(r.useState)(!1),k=Object(n.a)(w,2),C=k[0],x=k[1],D=Object(O.a)(o.h+"/destinations",u.c,{revalidateOnMount:!0,revalidateOnFocus:!0}).data,T=Object(E.d)({count:Math.floor(c.COUNT)||0,from:{count:Math.floor(c.COUNT)||0},config:{tension:500,clamp:!0,duration:350}}),A=Object(E.d)({distance:Math.floor(c.HAVERSINE_DISTANCE)||0,from:{distance:Math.floor(c.HAVERSINE_DISTANCE)||0},config:{tension:500,clamp:!0,duration:350}});Object(r.useEffect)((function(){}),[a]);var S=function(e,t){if(D&&D[t]){var a=Object.keys(D[t]).filter((function(e){return(Number(D[t][e])>0||e.includes("common")&&"-990"!==D[t][e])&&!e.includes("home")&&!e.includes("total")})).map((function(e){return[e,D[t][e]]}));y({name1:e,name:t,data:a}),x(!0)}};return i.a.createElement("div",{className:"LeftPanel"},i.a.createElement("div",{className:"inner"},i.a.createElement("div",{className:"title"},i.a.createElement("a",{href:"/"},i.a.createElement("span",null,"New Zealand "),"Commute")),i.a.createElement(r.Suspense,{fallback:i.a.createElement("div",null)},i.a.createElement(Z,{allCentroidDestinations:t,setClickedData:s})),i.a.createElement("div",{className:"map-stats"},i.a.createElement("div",null)),i.a.createElement(r.Suspense,{fallback:i.a.createElement("div",null)},i.a.createElement("div",{className:"meta"},c.departure_SA22018_V1_NAME&&c.departure_SA22018_V1_NAME.length?i.a.createElement("h2",{className:m()("total",c.COMMUTE_TYPE)},i.a.createElement("div",{style:{paddingTop:"6px"}},l("From "),c.DEPARTURE_NAME_1,c.departure_SA22018_V1_NAME&&c.departure_SA22018_V1_NAME.length?", ":"",i.a.createElement("div",{className:"destination-link",onClick:function(){S(c.DEPARTURE_NAME_1,c.departure_SA22018_V1_NAME)}},l(c.departure_SA22018_V1_NAME)),i.a.createElement("div",{className:"to"},l("To "),c.DESTINATION_NAME_1,c.DESTINATION_NAME_1?", ":"",i.a.createElement("div",{className:"destination-link",onClick:function(){S(c.DESTINATION_NAME_1,c.destination_SA22018_V1_NAME)}},c.destination_SA22018_V1_NAME))),i.a.createElement("div",{style:{alignSelf:"center",paddingLeft:"6px"}},i.a.createElement(E.a.h1,null,A.distance.interpolate((function(e){return Number(e).toFixed(2).toString()+"km"}))))):"")),i.a.createElement("div",{className:"stats-bottom"},Object.keys(c).length?i.a.createElement("div",{style:{paddingBottom:"1em",paddingTop:"1em",display:"flex",justifyContent:"space-between"}},i.a.createElement(E.a.h1,{style:{whiteSpace:"nowrap"},className:m()(c.COMMUTE_TYPE)},T.count.interpolate((function(e){return e>0?Math.floor(e).toFixed()+" people":""}))),i.a.createElement("h2",{className:m()(c.COMMUTE_TYPE)},c.TYPE?"Commuting for ":"",(c.TYPE||"").charAt(0)+(c.TYPE||"").substring(1).toLowerCase(),i.a.createElement("br",null),o.d[c.COMMUTE_TYPE])):""),i.a.createElement("div",{className:"about-wrapper"},i.a.createElement(_.b,{to:"/about"},i.a.createElement("img",{src:j.a,alt:""})),i.a.createElement("h6",{className:m()("footnote")},"".concat(l("* Based on 2018 Census by NZ Statistics, see ")),i.a.createElement("a",{href:"https://datafinder.stats.govt.nz/data/category/census/2018/commuter-view/?_ga=2.217129552.794612537.1592401476-705599149.1592401476",target:"_noblank",style:{color:"#6c757d"}},l("source")),i.a.createElement("br",null),l("Locations have been approximated to protect user privacy")))),i.a.createElement(U,{open:C,setOpen:x,name1:N.name1,name:N.name,data:N.data}))},W=Object(r.lazy)((function(){return Promise.all([a.e(10),a.e(7)]).then(a.bind(null,222))})),B=Object(r.lazy)((function(){return a.e(3).then(a.bind(null,234))}));t.default=i.a.memo((function(e){var t,a=e.districtCode,c=e.educationData,l=e.workData,d=e.regionalEducationData,p=e.regionalWorkData,f=e.regionalTotalData,_=e.centroidData,E=e.allCentroidDestinations,O=e.regionHighlighted,N=e.setRegionHighlighted,j=e.anchor,y=e.setAnchor,w=e.mapStatistic,k=(e.setMapStatistic,e.isCountryLoaded),C=void 0===k||k,x=Object(v.a)().t,D=(Object(h.g)(),Object(r.useRef)()),T=Object(r.useRef)(),A=Object(r.useState)({code:a,view:o.q.COUNTRY,option:o.o.TOTAL}),S=Object(n.a)(A,2),M=S[0],R=S[1],U=Object(r.useState)({view:o.q.COUNTRY}),Y=Object(n.a)(U,2),z=Y[0],V=Y[1],I=Object(r.useState)(void 0),P=Object(n.a)(I,2),F=(P[0],P[1]),H=Object(r.useState)({}),q=Object(n.a)(H,2),Z=q[0],J=q[1],K=Object(r.useState)({}),G=Object(n.a)(K,2),Q=G[0],X=G[1],$=Object(r.useState)({from:"",to:""}),ee=Object(n.a)($,2),te=ee[0],ae=ee[1],ne=Object(r.useState)(o.r),oe=Object(n.a)(ne,2),re=(oe[0],oe[1],Object(r.useState)({hoveredData:{},hoveredDestination:""})),ie=Object(n.a)(re,2),ce=ie[0],se=ie[1],ue=Object(r.useState)(Object.values(o.r)),le=Object(n.a)(ue,2),me=le[0],de=le[1],pe=function(){return{educationMapData:M.option!==o.o.WORK?c:[],workMapData:M.option!==o.o.EDUCATION?l:[]}},be=Object(r.useState)(pe),fe=Object(n.a)(be,2),ge=fe[0],ve=fe[1];o.n[M.code],Object(r.useEffect)((function(){ve(pe),R({code:O.districtCode,view:o.q.COUNTRY,option:M.option})}),[C,O.districtCode,O.districtName,M.code,M.option,M.view]);var he=Object(r.useCallback)((function(e){var t=o.n[e];if(t)if(t.mapType===o.q.STATE){var a=c[e].districts||{},n=Object.keys(a).sort((function(e,t){return Object(u.d)(a[t],"total",w)-Object(u.d)(a[e],"total",w)}))[0];g.a.unstable_batchedUpdates((function(){N({districtCode:e,cityName:n}),R({code:e,view:o.q.COUNTRY,option:M.option})}))}else g.a.unstable_batchedUpdates((function(){R({code:"NZ",view:o.q.COUNTRY,option:M.option}),N({districtCode:"NZ",cityName:null})}))}),[c,l,M.option,w,N]);Object(r.useEffect)((function(){he(a)}),[a,he]);var _e=Object(r.useMemo)((function(){var e,t,a=(O.districtCode?null===(e=c[O.districtCode])||void 0===e?void 0:null===(t=e.districts)||void 0===t?void 0:t[O.cityName]:c[O.districtCode])||{};return Object(b.a)(a,(function(e){e.name=O.districtCode||o.b[O.districtCode],O.districtCode||(e.population_millions=o.j[O.districtCode])}))}),[c,l,O.districtCode,O.cityName]);return i.a.createElement("div",{className:m()("MapExplorer",{stickied:"mapexplorer"===j},{hidden:j&&"mapexplorer"!==j})},window.innerWidth>769&&i.a.createElement("div",{className:m()("anchor",{stickied:"mapexplorer"===j}),onClick:function(){y("mapexplorer"===j?null:"mapexplorer")}}),i.a.createElement("div",{ref:D},w&&i.a.createElement(r.Suspense,{fallback:i.a.createElement(s,Object.assign({className:"map-loader"},{width:null===(t=D.current)||void 0===t?void 0:t.clientWidth,statistic:w}))},i.a.createElement("div",{className:"main-wrapper"},i.a.createElement(L,{hoveredRegion:_e,hoveredData:ce,highlightedData:Z,centroidData:_,allCentroidDestinations:E,currentDestinationData:te,clickedData:Q,setClickedData:X}),i.a.createElement("div",{className:"map-wrapper"},i.a.createElement(W,{currentMap:M,data:ge,regionalEducationData:d,regionalWorkData:p,regionalTotalData:f,centroidData:_,setRegionalData:F,currentView:z,setCurrentView:V,changeMap:he,regionHighlighted:O,setRegionHighlighted:N,setHighlightedData:J,setHoveredData:se,statistic:w,isCountryLoaded:C,currentCommuteTypes:me,leafletMapRef:T,setCurrentDestinationData:ae,setClickedData:X}),i.a.createElement("div",{className:"tabs-container"},i.a.createElement("div",{className:"tabs-map"},Object.values(o.o).map((function(e){return i.a.createElement("div",{key:e,className:m()("tab",{focused:M.option===e}),onClick:function(){return function(e){R({code:M.code,view:o.q.COUNTRY,option:e}),z.view===o.q.COUNTRY&&N({districtCode:O.districtCode,cityName:null})}(e)}},i.a.createElement("h4",{className:e,style:{color:o.f[e.toUpperCase()]}},x(e)))}))))),i.a.createElement("div",{className:"commutes-wrapper"},Object.values(o.r).map((function(e,t){return i.a.createElement(B,{commuteType:e,currentCommuteTypes:me,setCurrentCommuteTypes:de,key:t})})))))))}),(function(e,t){var a,n,o,r,i,c,s,u,l,m;return!!p()(e.stateCode,t.stateCode)&&(!!p()(e.regionHighlighted,t.regionHighlighted)&&(!!p()(e.mapStatistic,t.mapStatistic)&&(!!p()(e.anchor,t.anchor)&&(!!p()(null===(a=e.educationData)||void 0===a?void 0:null===(n=a.NZ)||void 0===n?void 0:null===(o=n.meta)||void 0===o?void 0:o.last_updated,null===(r=t.educationData)||void 0===r?void 0:null===(i=r.NZ)||void 0===i?void 0:null===(c=i.meta)||void 0===c?void 0:c.last_updated)&&!!p()(null===(s=e.educationData)||void 0===s?void 0:null===(u=s.NZ)||void 0===u?void 0:u.total,null===(l=t.educationData)||void 0===l?void 0:null===(m=l.NZ)||void 0===m?void 0:m.total)))))}))}}]);
//# sourceMappingURL=MapExplorer.4ecdaf44.chunk.js.map