"use strict";(self.webpackChunkreact_geo_client_template=self.webpackChunkreact_geo_client_template||[]).push([[592],{79378:function(e,t,n){n.r(t),n.d(t,{BasicLayerTree:function(){return s}});var r=n(67294),a=n(46200),o=n(80815),i=n(64289);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}const s=e=>{const t=(0,o.ZP)();return t?r.createElement(i.Z,l({map:t,filterFunction:e=>!(e instanceof a.default)},e)):r.createElement(r.Fragment,null)};t.default=s},22787:function(e,t,n){n(92015);var r=n(4863),a=(n(94125),n(16318)),o=n(67294),i=n(31929),l=n(17699),s=n(67502),c=n(15532),u=n(68734),p=n(61140),d=n(21715),m=n(26414),g=n(98266),f=n(14409),h=n(59090),w=n(73935),v=n(95998),b=n(12038),y=n.n(b),E=n(92212),Z=n.n(E),I=n(67624),S=n(6653),L=n.n(S),O=n(41907),P=n.n(O),A=n(80815),D=n(7294);function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},T.apply(this,arguments)}var k=e=>{const t=(0,A.ZP)();return t?o.createElement(D.ZP,T({map:t},e)):o.createElement(o.Fragment,null)},M=n(64478),j=n(43985),_=n(93379),C=n.n(_),N=n(7795),x=n.n(N),R=n(90569),F=n.n(R),B=n(3565),z=n.n(B),$=n(19216),V=n.n($),G=n(44589),Y=n.n(G),Q=n(5800),U={};U.styleTagTransform=Y(),U.setAttributes=z(),U.insert=F().bind(null,"head"),U.domAPI=x(),U.insertStyleElement=V();C()(Q.Z,U),Q.Z&&Q.Z.locals&&Q.Z.locals;function q(){return q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},q.apply(this,arguments)}var H=e=>{const t=(0,A.ZP)(),{t:n}=(0,M.$)();return t?o.createElement(j.ZP,q({map:t,countryCodes:"",allowClear:!0,nominatimBaseUrl:"https://nominatim.terrestris.de/search.php?",placeholder:n("Nominatim.placeholder")},e)):o.createElement(o.Fragment,null)},J=(n(16049),n(1825));const K=()=>(0,v.I0)(),W=v.v9;var X=n(35304);const ee=(0,X.oM)({name:"drawer",initialState:{visible:!1},reducers:{toggleVisibility:e=>{e.visible=!e.visible}}}),{toggleVisibility:te}=ee.actions;var ne=ee.reducer,re=n(37918),ae={};ae.styleTagTransform=Y(),ae.setAttributes=z(),ae.insert=F().bind(null,"head"),ae.domAPI=x(),ae.insertStyleElement=V();C()(re.Z,ae),re.Z&&re.Z.locals&&re.Z.locals;function oe(){return oe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oe.apply(this,arguments)}const ie=o.lazy((()=>Promise.all([n.e(987),n.e(592)]).then(n.bind(n,79378))));var le=e=>{const t=K(),n=W((e=>e.drawer.visible)),{t:r}=(0,M.$)();return o.createElement(J.Z,oe({title:r("Drawer.title"),placement:"right",onClose:()=>{t(te())},visible:n,mask:!1},e),o.createElement(o.Suspense,{fallback:null},o.createElement(ie,null)))},se=n(51436),ce=n(17625),ue=n(18776),pe=n(76208),de={};de.styleTagTransform=Y(),de.setAttributes=z(),de.insert=F().bind(null,"head"),de.domAPI=x(),de.insertStyleElement=V();C()(pe.Z,de),pe.Z&&pe.Z.locals&&pe.Z.locals;var me=e=>{const t=K();return o.createElement(ue.Z,{className:"toggle-drawer-button",onClick:()=>{t(te())},icon:o.createElement(ce.G,{icon:se.xiG})})},ge=n(65705),fe={};fe.styleTagTransform=Y(),fe.setAttributes=z(),fe.insert=F().bind(null,"head"),fe.domAPI=x(),fe.insertStyleElement=V();C()(ge.Z,fe),ge.Z&&ge.Z.locals&&ge.Z.locals;var he=()=>o.createElement("div",{className:"App"},o.createElement(k,null),o.createElement(H,null),o.createElement(me,null),o.createElement(le,null)),we=n(36609),ve=n(26071),be=n(68718);we.ZP.use(ve.Z).use(be.Db).init({resources:{de:{translation:{Index:{applicationLoadErrorMessage:"Fehler beim Laden der Applikation",applicationLoadErrorDescription:"Die Applikation mit der ID {{applicationId}} konnte nicht geladen werden. Die Standardkonfiguration wird stattdessen geladen.",errorMessage:"Fehler beim Laden der Applikation",errorDescription:"Aufgrund eines unerwarteten Fehlers konnte die Applikation nicht geladen werden. Bitte laden Sie die Seite erneut."},Nominatim:{placeholder:"Ortsname, Straßenname, Stadtteilname, POI usw."},Drawer:{title:"Themen"}}},en:{translation:{Index:{applicationLoadErrorMessage:"Error while loading the application",applicationLoadErrorDescription:"The application with ID {{applicationId}} could not be loaded correctly. You're seeing the default application configuration.",errorMessage:"Error while loading the application",errorDescription:"An unexpected error occured while loading the application. Please try to reload the page."},Nominatim:{placeholder:"Place name, street name, district name, POI, etc."},Drawer:{title:"Layers"}}}},fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1},supportedLngs:["de","en"]});var ye=we.ZP;const Ee=(0,X.xC)({reducer:{drawer:ne}});var Ze=n(90978),Ie={};Ie.styleTagTransform=Y(),Ie.setAttributes=z(),Ie.insert=F().bind(null,"head"),Ie.domAPI=x(),Ie.insertStyleElement=V();C()(Ze.Z,Ie),Ze.Z&&Ze.Z.locals&&Ze.Z.locals;const Se=e=>{switch(e){case"en":default:return s.Z;case"de":return l.Z}},Le=async e=>{const t=new(P())({url:"/api/"}),n=new(L())({client:t});let r;try{r=await t.application().findOne(e)}catch(t){return y().error(`Error while loading application with ID ${e}: ${t}`),y().info("Loading the default map configuration."),a.default.error({message:ye.t("Index.applicationLoadErrorMessage"),description:ye.t("Index.applicationLoadErrorDescription",{applicationId:e}),duration:0}),Oe()}const o=await n.parseMapView(r),i=await n.parseLayerTree(r);return new d.default({view:o,layers:i,controls:(0,c.ce)({zoom:!1})})},Oe=()=>{const e=new p.default({source:new g.default});e.set("name","OpenStreetMap");const t=new p.default({opacity:.5,source:new f.default({url:"https://neo.gsfc.nasa.gov/wms/wms",projection:"CRS:84",params:{LAYERS:"MOD_LSTD_CLIM_M"}})});t.set("name","Average Land Surface Temperature (Day)");const n=new p.default({opacity:.5,visible:!1,source:new f.default({url:"https://neo.gsfc.nasa.gov/wms/wms",projection:"CRS:84",params:{LAYERS:"MOD_LSTN_CLIM_M"}})});n.set("name","Average Land Surface Temperature (Night)");const r=new u.default({layers:[t,n]});r.set("name","NASA Earth Observations");const a=new u.default({layers:[e]});a.set("name","Background");const o=(0,m.fromLonLat)([0,40],"EPSG:3857");return new d.default({view:new h.default({center:o,zoom:0}),layers:[a,r],controls:(0,c.ce)({zoom:!1})})};(async()=>{try{const e=await(async()=>{const e=Z().getQueryParam(window.location.href,"applicationId");return e?(y().info(`Loading application with ID ${e}`),await Le(parseInt(e,10))):(y().info("No application ID given, will load the default map configuration."),Oe())})();(0,w.render)(o.createElement(o.StrictMode,null,o.createElement(o.Suspense,{fallback:o.createElement("span",null)},o.createElement(i.default,{locale:Se(ye.language)},o.createElement(v.zt,{store:Ee},o.createElement(I.default.Provider,{value:e},o.createElement(he,null)))))),document.getElementById("app"))}catch(e){y().error(e),(0,w.render)(o.createElement(o.StrictMode,null,o.createElement(r.default,{className:"error-boundary",message:ye.t("Index.errorMessage"),description:ye.t("Index.errorDescription"),type:"error",showIcon:!0})),document.getElementById("app"))}})()},65705:function(e,t,n){var r=n(87537),a=n.n(r),o=n(23645),i=n.n(o)()(a());i.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),t.Z=i},5800:function(e,t,n){var r=n(87537),a=n.n(r),o=n(23645),i=n.n(o)()(a());i.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),t.Z=i},37918:function(e,t,n){var r=n(87537),a=n.n(r),o=n(23645),i=n.n(o)()(a());i.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),t.Z=i},76208:function(e,t,n){var r=n(87537),a=n.n(r),o=n(23645),i=n.n(o)()(a());i.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),t.Z=i},90978:function(e,t,n){var r=n(87537),a=n.n(r),o=n(23645),i=n.n(o)()(a());i.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),t.Z=i}}]);
//# sourceMappingURL=common.6cf9747df84c25d9713c.js.map