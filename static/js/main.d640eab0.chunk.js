(this["webpackJsonptiger-js"]=this["webpackJsonptiger-js"]||[]).push([[0],{110:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"propertyName",(function(){return M})),n.d(r,"reducer",(function(){return U})),n.d(r,"actionCreators",(function(){return J}));var a={};n.r(a),n.d(a,"propertyName",(function(){return K})),n.d(a,"reducer",(function(){return Z})),n.d(a,"actionCreators",(function(){return $}));var i={};n.r(i),n.d(i,"propertyName",(function(){return N})),n.d(i,"reducer",(function(){return ne})),n.d(i,"middleware",(function(){return re})),n.d(i,"actionCreators",(function(){return ae}));var c=n(0),o=n.n(c),l=n(12),s=n.n(l),u=n(15),d=n(8),f=n(68),m=n(130),v=n(140);function p(e){var t=e.children,n=e.value,r=e.index,a=e.spacing,i=Object(f.a)(e,["children","value","index","spacing"]);return o.a.createElement(m.a,Object.assign({component:"div",role:"tabpanel",hidden:n!==r,id:"side-tabpanel-".concat(r),"aria-labelledby":"side-panel-tab-".concat(r)},i),o.a.createElement(v.a,{p:a},n===r&&t))}var b=n(51);function h(){return o.a.createElement(b.a,null,o.a.createElement("path",{d:"m9 2v6h6v-6h-6zm2 2h2v2h-2v-2z"}),o.a.createElement("path",{d:"m17 16v6h6v-6h-2.5-1-2.5zm2 2h2v2h-2v-2z"}),o.a.createElement("path",{d:"m9 16v6h6v-6h-6zm2 2h2v2h-2v-2z"}),o.a.createElement("path",{d:"m1 16v6h6v-6h-6zm2 2h2v2h-2v-2z"}),o.a.createElement("g",null,o.a.createElement("path",{d:"m11 8v2h2v-2z"}),o.a.createElement("path",{d:"m19 14v2h2v-2z"}),o.a.createElement("path",{d:"m14 11v2h2v-2z"}),o.a.createElement("path",{d:"m11 14v2h2v-2z"}),o.a.createElement("path",{d:"m8 11v2h2v-2z"}),o.a.createElement("path",{d:"m3 14v2h2v-2z"}),o.a.createElement("path",{d:"m17 11v2h2v-2z"}),o.a.createElement("path",{d:"m5 11v2h2v-2z"}),o.a.createElement("path",{d:"m11 11v2h2v-2z"})))}var g=n(9),E=n(3),w=n(31),O=n(20),j=n(4),y=function(e){var t=e.reduce((function(e,t){var n=Object(d.a)(e,3),r=n[0],a=n[1],i=n[2],c=t.propertyName,o=t.reducer,l=t.middleware,s=t.actionCreators;return[Object(g.a)({},r,Object(j.a)({},c,o)),[].concat(Object(w.a)(a),Object(w.a)(l||[])),Object(g.a)({},i,{},s||{})]}),[{},[],{}]),n=Object(d.a)(t,3),r=n[0],a=n[1],i=n[2];return[Object(O.c)(r),a,i]};function S(e,t){var n=Object(u.b)();return Object(c.useMemo)((function(){return Array.isArray(e)?e.map((function(e){return Object(O.b)(e,n)})):Object(O.b)(e,n)}),t?[n].concat(Object(w.a)(t)):[n])}var x=function(){return window.innerWidth||(document.documentElement||document.body).clientWidth},D=function(){return window.innerHeight||(document.documentElement||document.body).clientHeight},C=function(e){return!(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)&&("buttons"in e?1===e.buttons:"which"in e?1===e.which:1===e.button||"click"===e.type)},k=function(e,t,n){var r=n.top,a=n.bottom,i=n.left,c=n.right;return!(i>e||e>c||r>t||t>a)},z=function(e,t){return"translate(".concat(e,"px, ").concat(t,"px)")},N="user_interface",I={user_interface:{sidePanel:{activeTabIndex:0},dragState:{isActive:!1,activeDrag:null,isClaimed:!1,claimerID:"",claimedDrops:{},returningDrops:{}}}}[N]||{},M="dragState",R=I[M]||{},X="interface/dragState/START_DRAG",Y="interface/dragState/END_DRAG",A="interface/dragState/CLAIM_DRAG",F="interface/dragState/UNCLAIM_DRAG",L="interface/dragState/RECEIVE_DROP",P="interface/dragState/RETURNED_DROP",T=function(e){return e.ownerID?Object(g.a)({isActive:!0,activeDrag:e},B(e.ownerID)):{isActive:!0,activeDrag:e}},V={isActive:!1,activeDrag:null},W=function(e,t){var n=t.finalX,r=t.finalY;if(e.isClaimed){var a=e.activeDrag,i=a.color,c=a.id,o=e.claimerID;return{claimedDrops:Object(g.a)({},e.claimedDrops,Object(j.a)({},c,{color:i,finalX:n,finalY:r,claimerID:o,parentX:"none",parentY:"none"}))}}var l=e.activeDrag,s=l.color,u=l.id,d=l.initX,f=l.initY,m=l.ownerID,v=l.parentX,p=l.parentY;return{returningDrops:Object(g.a)({},e.returningDrops,Object(j.a)({},u,{color:s,initX:d,initY:f,finalX:n,finalY:r,ownerID:m,parentX:v,parentY:p}))}},B=function(e){return{isClaimed:!0,claimerID:e}},_={isClaimed:!1,claimerID:""},G=function(e,t){var n=Object(g.a)({},e.claimedDrops);return t.forEach((function(e){delete n[e]})),{claimedDrops:n}},H=function(e,t){var n=Object(g.a)({},e.returningDrops),r=e.claimedDrops;return t.forEach((function(e){if(n[e].ownerID){var t=n[e],a=t.color,i=t.finalX,c=t.finalY,o=t.parentX,l=t.parentY,s=n[e].ownerID;r=Object(g.a)({},r,Object(j.a)({},e,{color:a,finalX:i,finalY:c,claimerID:s,parentX:o,parentY:l}))}delete n[e]})),r!==e.claimedDrops?{returningDrops:n,claimedDrops:r}:{returningDrops:n}};function U(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t.propertyName!==M)return e;switch(t.type){case X:return Object(g.a)({},e,{},T(t.payload));case Y:return Object(g.a)({},e,{},_,{},V,{},W(e,t.payload));case A:return Object(g.a)({},e,{},B(t.payload));case F:return Object(g.a)({},e,{},_);case L:return Object(g.a)({},e,{},G(e,t.payload));case P:return Object(g.a)({},e,{},H(e,t.payload));default:return e}}var J={acStartDrag:function(e,t,n,r,a,i){var c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"none",o=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"none",l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"";return{type:X,payload:{color:e,id:t,initX:n,initY:r,mouseX:a,mouseY:i,parentX:c,parentY:o,ownerID:l},propertyName:M}},acEndDrag:function(e,t){return{type:Y,payload:{finalX:e,finalY:t},propertyName:M}},acClaimDrag:function(e){return{type:A,payload:e,propertyName:M}},acUnclaimDrag:function(){return{type:F,propertyName:M}},acRecievedDrop:function(e){return{type:L,payload:e,propertyName:M}},acReturnedDrop:function(e){return{type:P,payload:e,propertyName:M}}},K="sidePanel",q=I[K]||{},Q="interface/sidePanel/SET_TAB_INDEX";function Z(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case Q:return Object(g.a)({},e,{activeTabIndex:t.payload});default:return e}}var $={acSetSidePanelTabIndex:function(e){return{type:Q,payload:e}}},ee=y([r,a]),te=Object(d.a)(ee,3),ne=te[0],re=te[1],ae=te[2],ie=y([i]),ce=Object(d.a)(ie,3),oe=ce[0],le=ce[1],se=ce[2],ue=Object(O.d)(oe,O.a.apply(void 0,Object(w.a)(le))),de=n(57),fe=n(132),me=se.acEndDrag,ve=se.acReturnedDrop,pe=500,be=Object(de.a)((function(e){return{root:{position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:e.zIndex.modal,cursor:"grabbing"},allowPointerEvents:{pointerEvents:"none"},activeDraggable:{zIndex:1,willChange:"transform",position:"absolute",cursor:"grabbing"},returningDraggable:{display:"inline-block",position:"absolute",zIndex:0,transition:"transform ".concat(pe,"ms ease-in-out"),opacity:.5}}}));function he(){var e=be(),t=Object(u.c)((function(e){return e.user_interface.dragState.activeDrag})),n=Object(c.useRef)(),r=S([me,ve]),a=Object(d.a)(r,2),i=a[0],l=a[1],s=Object(c.useState)([]),f=Object(d.a)(s,2),m=f[0],v=f[1];Object(c.useEffect)((function(){if(n&&n.current&&t){var e,r,a=t.initX,c=t.initY,o=t.mouseX,l=t.mouseY,s=a-o,u=c-l,d=n.current.getBoundingClientRect(),f=d.width,m=d.height,v=x()-f,p=D()-m;return window.addEventListener("mousemove",b,!1),window.addEventListener("mouseup",h,!1),function(){window.removeEventListener("mousemove",b),window.removeEventListener("mouseup",h)}}function b(t){var a=t.clientX,i=t.clientY;n&&n.current&&(e=Math.min(Math.max(a+s,0),v),r=Math.min(Math.max(i+u,0),p),n.current.style.transform=z(e,r))}function h(t){var n=t.clientX,a=t.clientY;e=Math.min(Math.max(n+s,0),v),r=Math.min(Math.max(a+u,0),p),i(e,r)}}),[m,t,i,n]);var p=Object(u.c)((function(e){return e.user_interface.dragState}));return Object(c.useEffect)((function(){var e={};p.activeDrag&&(e[p.activeDrag.id]=Object(g.a)({},p.activeDrag),e[p.activeDrag.id].isActive=!0);var t=[];Object.entries(p.returningDrops).forEach((function(n){var r=Object(d.a)(n,2),a=r[0],i=r[1];e[a]=i,t.push(a)}));var n=null;t.length>0&&(n=setTimeout((function(){return l(t)}),pe));var r=Object.keys(e).sort().map((function(t){return[t,e[t]]}));return v(r),function(){n&&clearTimeout(n)}}),[p.activeDrag,p.returningDrops,l]),m.length>0?o.a.createElement("div",{className:Object(E.a)(e.root,!p.isActive&&e.allowPointerEvents)},m.map((function(t){var r=Object(d.a)(t,2),a=r[0],i=r[1],c=i.color,l=i.initX,s=i.initY;return i.isActive?o.a.createElement("div",{key:a,ref:n,className:e.activeDraggable,style:{transform:"scale(1) ".concat(z(l,s))}},o.a.createElement(fe.a,{elevation:12,style:{width:50,height:50,margin:8,backgroundColor:c}})):o.a.createElement("div",{key:a,className:e.returningDraggable,style:{transform:z(l,s)}},o.a.createElement(fe.a,{style:{width:50,height:50,margin:8,backgroundColor:c}}))}))):null}var ge=n(133),Ee=n(134),we=n(135),Oe=n(142),je=n(59),ye=n.n(je),Se=n(60),xe=n.n(Se),De=n(61),Ce=n.n(De),ke=n(62),ze=n.n(ke),Ne=n(63),Ie=n.n(Ne),Me=Object(de.a)((function(){return{root:{flexGrow:0},title:{flexGrow:1}}}));function Re(e){var t=e.showViz,n=e.showControl,r=e.showSide,a=e.setViz,i=e.setControl,c=e.setSide,l=e.canDisablePanels,s=Me(),u=function(e,t){return e?"Hide ".concat(t):"Show ".concat(t)};return o.a.createElement("div",{className:s.root},o.a.createElement(ge.a,{position:"static"},o.a.createElement(Ee.a,null,o.a.createElement(m.a,{variant:"h6",className:s.title},"TigerJS"),o.a.createElement(Oe.a,{title:u(t,"Visualization")},o.a.createElement(we.a,{onClick:function(){return a(!t)},"aria-label":"toggle-visualization-panel",disabled:t&&!l},t?o.a.createElement(ye.a,null):o.a.createElement(xe.a,null))),o.a.createElement(Oe.a,{title:u(n,"Control Panel")},o.a.createElement(we.a,{onClick:function(){return i(!n)},"aria-label":"toggle-control-panel",disabled:n&&!l},n?o.a.createElement(Ce.a,null):o.a.createElement(h,null))),o.a.createElement(Oe.a,{title:u(r,"Side Panel")},o.a.createElement(we.a,{onClick:function(){return c(!r)},"aria-label":"toggle-side-panel",disabled:r&&!l,edge:"end"},r?o.a.createElement(ze.a,null):o.a.createElement(Ie.a,null))))))}var Xe=n(136),Ye=3,Ae=Object(de.a)((function(e){return{root:{display:"flex",position:"relative",height:"100%","&.resizing":{cursor:"col-resize"}},divider:{width:Ye,flex:"initial",backgroundColor:"light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900],cursor:"col-resize","&:hover:not(.inActive), &.active":{backgroundColor:e.palette.secondary.main},boxShadow:e.shadows[3]},screenWrapperFluid:{position:"relative",flexGrow:1,flexShrink:1,flexBasis:"0%",overflow:"scroll"},screenWrapperFixed:{position:"relative",flex:"initial",overflow:"scroll"},screenWrapperHidden:{display:"none"},noScreens:{alignItems:"center",display:"flex",justifyContent:"center",textAlign:"center"}}})),Fe=function(e){return e.map((function(e){return e?e.clientWidth:0}))},Le=function(e,t,n,r,a){var i=!1;return e.forEach((function(e,c){if(e)if(n[c].isVisible)if(n[c].isFixed){var o="".concat(t[c],a?"%":"px");e.style.width!==o&&(e.style.width=o,i=!0)}else{var l=t[c].toFixed(1),s=parseFloat(e.style.flexGrow).toFixed(1),u=e.widthCache;if(s!==l&&(s>0||t[c]>0))e.style.flexGrow=l,i=!0,u&&delete e.widthCache;else if(u&&r){var d=0;t.forEach((function(e,t){n[t].isFixed||t===c||(d+=e)})),e.style.flexGrow=d<=0?x():u>=1?d:d*u/(1-u),i=!0}}else if(r&&!n[c].isFixed){if(!e.widthCache){var f=0;t.forEach((function(e,t){n[t].isFixed||(f+=e)})),f-=Ye,e.widthCache=f<=0?1:Math.max(.15,e.style.flexGrow/f)}e.style.flexGrow=0}})),i},Pe=function(e,t){var n=0,r=!0,a=!1,i=void 0;try{for(var c,o=e[Symbol.iterator]();!(r=(c=o.next()).done);r=!0){var l=c.value,s=l.isFixed,u=l.minShrink;n+=s?u:u*t}}catch(m){a=!0,i=m}finally{try{r||null==o.return||o.return()}finally{if(a)throw i}}var d=1;n>t&&(d=t/n,n=t);var f=t-n;return e.map((function(e){var t=e.isFixed,n=e.minShrink;return t?n*d:n*f}))};function Te(e){var t=e.children,n=e.emptyMessage,r=Ae(),a=o.a.Children.toArray(t),i=a.map((function(e){var t=e.props;return{isVisible:!t.splitScreenIsHidden,setState:t.splitScreenSetState||function(){},isFixed:"fixed"===t.splitScreenBehavior,minShrink:t.splitScreenMinShrink||0}})),l=JSON.stringify(i),s=Object(c.useRef)([]);Object(c.useEffect)((function(){s.current=s.current.slice(0,a.length)}),[a.length]);var u=Object(c.useState)(-1),f=Object(d.a)(u,2),p=f[0],b=f[1];Object(c.useEffect)((function(){if(s.current&&!(p<0)){var e=x(),t=Fe(s.current),n=Pe(i,e);return window.addEventListener("mousemove",r,!1),window.addEventListener("mouseup",c,!1),function(){window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",c)}}function r(r){for(var c=r.clientX,o=-Ye/2,l=0,u=a.length-1,d=!0,f=0;f<=p;f++)i[f].isVisible&&(l=f,o+=t[f]+Ye,i[f].isFixed||(d=!1));for(var m=a.length-1;m>p;m--)i[m].isVisible&&(u=m,i[m].isFixed||(d=!1));var v=c-o;if(v>0){for(var b=p+1;b<a.length;b++)if(i[b].isVisible){var h=Math.max(n[b],t[b]-v),g=t[b]-h;if(t[b]=h,v-=g,t[l]+=g,v<=0)break}}else if(v<0){v=-v;for(var E=p;E>=0;E--)if(i[E].isVisible){var w=Math.max(n[E],t[E]-v),O=t[E]-w;if(t[E]=w,v-=O,t[u]+=O,v<=0)break}}var j=!1;if(d){var y=t.map((function(t,n){return i[n].isVisible&&i[n].isFixed?t/e*100:t}));j=Le(s.current,y,i,!1,!0)}else j=Le(s.current,t,i,!1,!1);j&&window.dispatchEvent(new Event("resize"))}function c(){t.forEach((function(e,t){e<=0&&i[t].isVisible&&i[t].setState(!1)})),b(-1)}}),[p,a.length,l]),Object(c.useEffect)((function(){if(s.current){var e=Fe(s.current),t=x(),n=0,r=!0;e.forEach((function(e,t){i[t].isFixed?n+=e:i[t].isVisible&&(r=!1)}));var a=1,c=!1;n>t||r?a=t/n:n>.9*t&&(a=.9*t/n,c=!0),e=e.map((function(e,n){if(i[n].isVisible){if(i[n].isFixed)return r?e*a/t*100:e*a;if(c&&0===e&&!s.current[n].widthCache)return t}return e})),Le(s.current,e,i,!0,r),r||(e=Fe(s.current),Le(s.current,e,i,!1,r)),window.dispatchEvent(new Event("resize"))}}),[l]);var h=!1;return o.a.createElement("div",{className:Object(E.a)(r.root,p>-1&&"resizing")},a.map((function(e,t){var n=Object.assign({},e.props);return delete n.splitScreenIsHidden,delete n.splitScreenSetState,delete n.splitScreenBehavior,delete n.splitScreenMinShrink,i[t].isVisible&&(h=!0),o.a.createElement(c.Fragment,{key:e.key},o.a.createElement("div",{ref:function(e){return s.current[t]=e},className:Object(E.a)(i[t].isFixed?r.screenWrapperFixed:r.screenWrapperFluid,!i[t].isVisible&&r.screenWrapperHidden)},i[t].isVisible&&o.a.createElement(e.type,n)),t<a.length-1&&i[t+1].isVisible&&h&&o.a.createElement("div",{onMouseDown:function(e){C(e)&&(b(t),e.preventDefault())},onMouseUp:function(){return b(-1)},className:Object(E.a)(r.divider,p===t?"active":p>-1&&"inActive")}))})),!h&&o.a.createElement(Xe.a,{className:r.noScreens,maxWidth:"sm"},o.a.createElement(v.a,{my:4},o.a.createElement(m.a,{variant:"h4",component:"h1"},n))))}var Ve=se.acClaimDrag,We=se.acUnclaimDrag,Be=se.acRecievedDrop,_e=se.acStartDrag,Ge=Object(de.a)((function(e){return{root:{position:"absolute",height:"100%",width:"100%"},scrollWrapper:{position:"relative",overflow:"scroll",height:"100%",width:"100%"},outline:{border:"2px solid ".concat(e.palette.secondary.main)},noOutline:{border:"2px solid transparent"},test:{width:50,height:50,margin:8,cursor:"grab","&:hover":{boxShadow:e.shadows[8]}}}})),He="CONTROL_PANEL",Ue=Object(c.memo)((function(){var e=Ge(),t=Object(u.c)((function(e){return e.user_interface.dragState.isActive})),n=Object(u.c)((function(e){return e.user_interface.dragState.claimerID})),r=Object(c.useRef)(),a=S([Ve,We,Be]),i=Object(d.a)(a,3),l=i[0],s=i[1],f=i[2],p=Object(c.useMemo)((function(){return t&&n===He}),[t,n]);Object(c.useEffect)((function(){var e;if(r&&r.current&&t)return n(),window.addEventListener("resize",n,!1),window.addEventListener("mousemove",a,!1),function(){window.removeEventListener("resize",n),window.removeEventListener("mousemove",a)};function n(){var t=r.current.getBoundingClientRect(),n=t.top,a=t.bottom,i=t.left,c=t.right;e={top:n,bottom:a,left:i,right:c}}function a(t){var n=t.clientX,a=t.clientY;if(r&&r.current){var i=k(n,a,e);p?i||s():i&&l(He)}}}),[t,p,l,s]);var b=Object(u.c)((function(e){return e.user_interface.dragState.claimedDrops})),h=Object(c.useState)({}),w=Object(d.a)(h,2),O=w[0],j=w[1];Object(c.useEffect)((function(){var e=[],t={};if(Object.entries(b).forEach((function(n){var r=Object(d.a)(n,2),a=r[0],i=r[1];i.claimerID===He&&(e.push(a),t[a]=i)})),e.length>0){f(e);var n=0,r=0;if(y&&y.current){var a=y.current.getBoundingClientRect(),i=a.left,c=a.top;n=i,r=c}Object.values(t).forEach((function(e){"none"===e.parentX?e.x=e.finalX-n:e.x=e.parentX,"none"===e.parentY?e.y=e.finalY-r:e.y=e.parentY,delete e.finalX,delete e.parentX,delete e.finalY,delete e.parentY})),j(Object(g.a)({},O,{},t))}}),[O,b,f]);var y=Object(c.useRef)(),x=S(_e),D=Object(c.useRef)([]);Object(c.useEffect)((function(){D.current=D.current.slice(0,Object.keys(O).length)}),[O]);var z=Object(u.c)((function(e){return e.user_interface.dragState.activeDrag}));return Object(c.useEffect)((function(){if(z&&z.id in O){var e=Object(g.a)({},O);delete e[z.id],j(e)}}),[z,O]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{ref:r,className:Object(E.a)(e.root,p?e.outline:e.noOutline)}),o.a.createElement("div",{className:e.scrollWrapper},o.a.createElement(Xe.a,{ref:y,style:{position:"absolute"}},o.a.createElement(v.a,{my:4},o.a.createElement(m.a,{variant:"h4",component:"h1",gutterBottom:!0},"Control Panel")),Object.entries(O).map((function(t,n){var r=Object(d.a)(t,2),a=r[0],i=r[1];return o.a.createElement("div",{key:a,ref:function(e){return D.current[n]=e},style:{zIndex:1,display:"inline-block",position:"absolute",left:i.x,top:i.y}},o.a.createElement(fe.a,{onMouseDown:function(e){return function(e,t,n,r){var a=D.current[n];if(C(e)&&a){var i=a.getBoundingClientRect(),c=i.left,o=i.top,l=O[t];x(r,t,c,o,e.clientX,e.clientY,l.x,l.y,He),e.preventDefault()}}(e,a,n,i.color)},style:{backgroundColor:i.color},className:e.test}))})))))})),Je=n(141),Ke=n(137),qe=n(64),Qe=n.n(qe),Ze=n(66),$e=n.n(Ze),et=n(65),tt=n.n(et),nt=se.acSetSidePanelTabIndex,rt=se.acStartDrag;function at(e){return{id:"side-panel-tab-".concat(e),"aria-controls":"side-panel-tabpanel-".concat(e)}}var it=Object(de.a)((function(e){return{root:{height:"100%",display:"flex",flexDirection:"column",minWidth:200},panelTabs:{flexGrow:0},panelBody:{position:"relative",flexGrow:1,"&>div":{position:"absolute",overflowY:"scroll",overflowX:"hidden",height:"100%",width:"100%"}},tabButton:{minWidth:0},test:{width:50,height:50,margin:8,backgroundColor:"purple",cursor:"grab","&:hover":{boxShadow:e.shadows[8]}}}})),ct=Object(c.memo)((function(){var e=it(),t=o.a.useState(0),n=Object(d.a)(t,2),r=n[0],a=n[1],i=Object(c.useRef)();Object(c.useEffect)((function(){function e(){i&&i.current&&(i.current.clientWidth>350?a(1):a(0))}return window.addEventListener("resize",e,!1),e(),function(){window.removeEventListener("resize",e)}}),[]);var l=[Object(u.c)((function(e){return e.user_interface.sidePanel.activeTabIndex})),S(nt)],s=l[0],f=l[1],m=r?3:1,v=S(rt),b=function(e,t,n){if(C(e)&&t&&t.current){var r=t.current.getBoundingClientRect(),a=r.left,i=r.top,c=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15);v(n,c,a,i,e.clientX,e.clientY),e.preventDefault()}},h=Object(c.useRef)(),g=Object(c.useRef)(),E=Object(c.useRef)(),w=Object(c.useRef)(),O=Object(c.useRef)();return o.a.createElement("div",{ref:i,className:e.root},o.a.createElement(ge.a,{className:e.panelTabs,component:"div",position:"static",color:"default"},o.a.createElement(Je.a,{value:s,onChange:function(e,t){f(t)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"side-panel"},o.a.createElement(Oe.a,{title:r?"":"Components"},o.a.createElement(Ke.a,Object.assign({className:e.tabButton,label:r?"Components":"",icon:o.a.createElement(tt.a,null)},at(0)))),o.a.createElement(Oe.a,{title:r?"":"Properties"},o.a.createElement(Ke.a,Object.assign({className:e.tabButton,label:r?"Properties":"",icon:o.a.createElement($e.a,null)},at(1)))))),o.a.createElement(Qe.a,{axis:"x",index:s,onChangeIndex:function(e){f(e)},className:e.panelBody},o.a.createElement(p,{value:s,index:0,spacing:m},o.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"}},o.a.createElement("div",{ref:h},o.a.createElement(fe.a,{style:{backgroundColor:"red"},className:e.test,onMouseDown:function(e){return b(e,h,"red")}})),o.a.createElement("div",{ref:g},o.a.createElement(fe.a,{style:{backgroundColor:"blue"},className:e.test,onMouseDown:function(e){return b(e,g,"blue")}})),o.a.createElement("div",{ref:E},o.a.createElement(fe.a,{style:{backgroundColor:"green"},className:e.test,onMouseDown:function(e){return b(e,E,"green")}})),o.a.createElement("div",{ref:w},o.a.createElement(fe.a,{style:{backgroundColor:"purple"},className:e.test,onMouseDown:function(e){return b(e,w,"purple")}})),o.a.createElement("div",{ref:O},o.a.createElement(fe.a,{style:{backgroundColor:"orange"},className:e.test,onMouseDown:function(e){return b(e,O,"orange")}})))),o.a.createElement(p,{value:s,index:1,spacing:m},"Item Two")))})),ot=n(27);var lt=function(){var e=Object(c.useRef)();return Object(c.useEffect)((function(){var t=new ot.e,n=[e.current.parentElement.clientWidth,e.current.parentElement.clientHeight],r=n[0],a=n[1],i=new ot.d(75,r/a,.1,1e3),c=new ot.f;c.domElement.style.display="block",c.setSize(r,a),e.current.appendChild(c.domElement);var o=new ot.a(1,1,1),l=new ot.c,s=new ot.b(o,l);t.add(s),i.position.z=5;function u(){if(e&&e.current&&e.current.parentElement){var t=e.current.parentElement,n=t.clientWidth,r=t.clientHeight;i.aspect=n/r,i.updateProjectionMatrix(),c.setSize(n,r)}}return function e(){requestAnimationFrame(e),s.rotation.x+=.01,s.rotation.y+=.01,c.render(t,i)}(),window.addEventListener("resize",u,!1),u(),function(){window.removeEventListener("resize",u)}}),[]),o.a.createElement("div",{style:{position:"absolute"},ref:e})},st=Object(de.a)((function(){return{fullHeight:{display:"flex",flexDirection:"column",height:"100vh"},stretchToBottom:{flexGrow:1}}}));var ut=n(67),dt=Object(ut.a)({palette:{type:"dark",primary:{main:"#7e57c2"},secondary:{main:"#f58025"},background:{default:"#333333"},contrastThreshold:2}}),ft=n(139),mt=n(138);s.a.render(o.a.createElement(u.a,{store:ue},o.a.createElement(mt.a,{theme:dt},o.a.createElement(ft.a,null),o.a.createElement((function(){var e=st(),t=Object(c.useState)(!0),n=Object(d.a)(t,2),r=n[0],a=n[1],i=Object(c.useState)(!0),l=Object(d.a)(i,2),s=l[0],u=l[1],f=Object(c.useState)(!0),m=Object(d.a)(f,2),v=m[0],p=m[1],b=0;r&&(b+=1),s&&(b+=1),v&&(b+=1);var h=b>1,g=function(e,t){(e||h)&&t(e)},E=function(e){return g(e,a)},w=function(e){return g(e,u)},O=function(e){return g(e,p)};return o.a.createElement("div",{className:e.fullHeight},o.a.createElement(Re,{showViz:r,showControl:s,showSide:v,setViz:E,setControl:w,setSide:O,canDisablePanels:h}),o.a.createElement("div",{className:e.stretchToBottom},o.a.createElement(Te,{emptyMessage:"Hmmm...   it looks like something went wrong!\n                        Use Navbar to toggle a panel back into view :P"},o.a.createElement(lt,{splitScreenIsHidden:!r,splitScreenSetState:E,splitScreenMinShrink:0}),o.a.createElement(Ue,{splitScreenIsHidden:!s,splitScreenSetState:w,splitScreenMinShrink:0}),o.a.createElement(ct,{splitScreenIsHidden:!v,splitScreenSetState:O,splitScreenBehavior:"fixed",splitScreenMinShrink:200}))),o.a.createElement(he,null))}),null))),document.querySelector("#root"))},79:function(e,t,n){e.exports=n(110)}},[[79,1,2]]]);
//# sourceMappingURL=main.d640eab0.chunk.js.map