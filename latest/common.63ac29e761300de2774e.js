"use strict";(self.webpackChunkreact_geo_client_template=self.webpackChunkreact_geo_client_template||[]).push([[76],{44662:function(e,n,t){t.r(n),t.d(n,{BasicLayerTree:function(){return s}});var r=t(96540),a=t(96079),l=t(62976),o=t(94428);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(null,arguments)}const s=e=>{const n=(0,l.Ay)();return n?r.createElement(o.A,i({map:n,filterFunction:e=>!(e instanceof a.default)},e)):r.createElement(r.Fragment,null)};n.default=s},88033:function(e,n,t){var r=t(96540),a=t(65885),l=t(461),o=t(76421),i=t(42106),s=t(71956),c=t(34307),u=t(35598),d=t(13504),p=t(60031),m=t(83407),g=t(87896),A=t(82728),f=t(91765),h=t(40961),w=t(2896),y=t(28559),v=t(50942),E=t(84944),b=t(98097),I=t.n(b),S=t(38540),L=t.n(S),D=t(62976),O=t(38225);function k(){return k=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},k.apply(null,arguments)}var T=e=>{const n=(0,D.Ay)();return n?r.createElement(O.Ay,k({map:n},e)):r.createElement(r.Fragment,null)},P=t(32389),M=t(73675),N=t(85072),_=t.n(N),j=t(97825),C=t.n(j),R=t(77659),x=t.n(R),B=t(55056),F=t.n(B),z=t(10540),V=t.n(z),Y=t(41113),$=t.n(Y),U=t(2676),q={};q.styleTagTransform=$(),q.setAttributes=F(),q.insert=x().bind(null,"head"),q.domAPI=C(),q.insertStyleElement=V();_()(U.A,q),U.A&&U.A.locals&&U.A.locals;function G(){return G=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},G.apply(null,arguments)}var K=e=>{const n=(0,D.Ay)(),{t:t}=(0,P.Bd)();return n?r.createElement(M.Ay,G({map:n,countryCodes:"",allowClear:!0,nominatimBaseUrl:"https://nominatim.terrestris.de/search.php?",placeholder:t("Nominatim.placeholder")},e)):r.createElement(r.Fragment,null)},Q=t(25626);const Z=()=>(0,w.wA)(),H=w.d4;var J=t(49879);const W=(0,J.Z0)({name:"drawer",initialState:{visible:!1},reducers:{toggleVisibility:e=>{e.visible=!e.visible}}}),{toggleVisibility:X}=W.actions;var ee=W.reducer,ne=t(48238),te={};te.styleTagTransform=$(),te.setAttributes=F(),te.insert=x().bind(null,"head"),te.domAPI=C(),te.insertStyleElement=V();_()(ne.A,te),ne.A&&ne.A.locals&&ne.A.locals;function re(){return re=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},re.apply(null,arguments)}const ae=r.lazy((()=>Promise.all([t.e(255),t.e(76)]).then(t.bind(t,44662))));var le=e=>{const n=Z(),t=H((e=>e.drawer.visible)),{t:a}=(0,P.Bd)();return r.createElement(Q.A,re({title:a("Drawer.title"),placement:"right",onClose:()=>{n(X())},open:t,mask:!1},e),r.createElement(r.Suspense,{fallback:null},r.createElement(ae,null)))},oe=t(66188),ie=t(20982),se=t(71953),ce=t(85885),ue={};ue.styleTagTransform=$(),ue.setAttributes=F(),ue.insert=x().bind(null,"head"),ue.domAPI=C(),ue.insertStyleElement=V();_()(ce.A,ue),ce.A&&ce.A.locals&&ce.A.locals;var de=e=>{const n=Z();return r.createElement(se.A,{className:"toggle-drawer-button",onClick:()=>{n(X())},icon:r.createElement(ie.g,{icon:oe.ckx})})},pe=t(12809),me={};me.styleTagTransform=$(),me.setAttributes=F(),me.insert=x().bind(null,"head"),me.domAPI=C(),me.insertStyleElement=V();_()(pe.A,me),pe.A&&pe.A.locals&&pe.A.locals;var ge=()=>r.createElement("div",{className:"App"},r.createElement(T,null),r.createElement(K,null),r.createElement(de,null),r.createElement(le,null)),Ae=t(72635),fe=t(94997);Ae.Ay.use(fe.A).use(P.r9).init({resources:{de:{translation:{Index:{applicationLoadErrorMessage:"Fehler beim Laden der Applikation",applicationLoadErrorDescription:"Die Applikation mit der ID {{applicationId}} konnte nicht geladen werden. Die Standardkonfiguration wird stattdessen geladen.",errorMessage:"Fehler beim Laden der Applikation",errorDescription:"Aufgrund eines unerwarteten Fehlers konnte die Applikation nicht geladen werden. Bitte laden Sie die Seite erneut."},Nominatim:{placeholder:"Ortsname, Straßenname, Stadtteilname, POI usw."},Drawer:{title:"Themen"}}},en:{translation:{Index:{applicationLoadErrorMessage:"Error while loading the application",applicationLoadErrorDescription:"The application with ID {{applicationId}} could not be loaded correctly. You're seeing the default application configuration.",errorMessage:"Error while loading the application",errorDescription:"An unexpected error occured while loading the application. Please try to reload the page."},Nominatim:{placeholder:"Place name, street name, district name, POI, etc."},Drawer:{title:"Layers"}}}},fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1},supportedLngs:["de","en"]});var he=Ae.Ay;const we=(0,J.U1)({reducer:{drawer:ee}});var ye=t(47002),ve={};ve.styleTagTransform=$(),ve.setAttributes=F(),ve.insert=x().bind(null,"head"),ve.domAPI=C(),ve.insertStyleElement=V();_()(ye.A,ve),ye.A&&ye.A.locals&&ye.A.locals;const Ee=e=>{switch(e){case"en":default:return s.A;case"de":return i.A}},be=async e=>{const n=new(L())({url:"/api/"}),t=new(I())({client:n});let r;try{r=await n.application().findOne(e)}catch(n){return y.A.error(`Error while loading application with ID ${e}: ${n}`),y.A.info("Loading the default map configuration."),a.A.error({message:he.t("Index.applicationLoadErrorMessage"),description:he.t("Index.applicationLoadErrorDescription",{applicationId:e}),duration:0}),Ie()}const l=await t.parseMapView(r),o=await t.parseLayerTree(r);return new p.default({view:l,layers:o,controls:(0,c.N)({zoom:!1})})},Ie=()=>{const e=new d.default({source:new g.A});e.set("name","OpenStreetMap");const n=new d.default({opacity:.5,source:new A.default({url:"https://neo.gsfc.nasa.gov/wms/wms",projection:"CRS:84",params:{LAYERS:"MOD_LSTD_CLIM_M"}})});n.set("name","Average Land Surface Temperature (Day)");const t=new d.default({opacity:.5,visible:!1,source:new A.default({url:"https://neo.gsfc.nasa.gov/wms/wms",projection:"CRS:84",params:{LAYERS:"MOD_LSTN_CLIM_M"}})});t.set("name","Average Land Surface Temperature (Night)");const r=new u.default({layers:[n,t]});r.set("name","NASA Earth Observations");const a=new u.default({layers:[e]});a.set("name","Background");const l=(0,m.fromLonLat)([0,40],"EPSG:3857");return new p.default({view:new f.default({center:l,zoom:0}),layers:[a,r],controls:(0,c.N)({zoom:!1})})};(async()=>{try{const e=await(async()=>{const e=v.A.getQueryParam(window.location.href,"applicationId");return e?(y.A.info(`Loading application with ID ${e}`),await be(parseInt(e,10))):(y.A.info("No application ID given, will load the default map configuration."),Ie())})();(0,h.render)(r.createElement(r.StrictMode,null,r.createElement(r.Suspense,{fallback:r.createElement("span",null)},r.createElement(o.default,{locale:Ee(he.language)},r.createElement(w.Kq,{store:we},r.createElement(E.default.Provider,{value:e},r.createElement(ge,null)))))),document.getElementById("app"))}catch(e){y.A.error(e),(0,h.render)(r.createElement(r.StrictMode,null,r.createElement(l.A,{className:"error-boundary",message:he.t("Index.errorMessage"),description:he.t("Index.errorDescription"),type:"error",showIcon:!0})),document.getElementById("app"))}})()},12809:function(e,n,t){var r=t(71354),a=t.n(r),l=t(76314),o=t.n(l)()(a());o.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),n.A=o},2676:function(e,n,t){var r=t(71354),a=t.n(r),l=t(76314),o=t.n(l)()(a());o.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),n.A=o},48238:function(e,n,t){var r=t(71354),a=t.n(r),l=t(76314),o=t.n(l)()(a());o.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),n.A=o},85885:function(e,n,t){var r=t(71354),a=t.n(r),l=t(76314),o=t.n(l)()(a());o.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),n.A=o},47002:function(e,n,t){var r=t(71354),a=t.n(r),l=t(76314),o=t.n(l)()(a());o.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),n.A=o}}]);
//# sourceMappingURL=common.63ac29e761300de2774e.js.map