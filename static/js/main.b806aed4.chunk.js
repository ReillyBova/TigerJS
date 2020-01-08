(this["webpackJsonptiger-js"]=this["webpackJsonptiger-js"]||[]).push([[0],{110:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"propertyName",(function(){return Z})),n.d(a,"reducer",(function(){return te})),n.d(a,"setSidePanelTabIndex",(function(){return ne}));var r={};n.r(r),n.d(r,"propertyName",(function(){return Q})),n.d(r,"reducer",(function(){return ie})),n.d(r,"actionCreators",(function(){return ce}));var i=n(0),c=n.n(i),l=n(10),o=n.n(l),s=n(27),u=n(12),d=n(39),m=n(131),f=n(141);function v(e){var t=e.children,n=e.value,a=e.index,r=e.spacing,i=Object(d.a)(e,["children","value","index","spacing"]);return c.a.createElement(m.a,Object.assign({component:"div",role:"tabpanel",hidden:n!==a,id:"side-tabpanel-".concat(a),"aria-labelledby":"side-panel-tab-".concat(a)},i),c.a.createElement(f.a,{p:r},n===a&&t))}var p=n(50);function h(){return c.a.createElement(p.a,null,c.a.createElement("path",{d:"m9 2v6h6v-6h-6zm2 2h2v2h-2v-2z"}),c.a.createElement("path",{d:"m17 16v6h6v-6h-2.5-1-2.5zm2 2h2v2h-2v-2z"}),c.a.createElement("path",{d:"m9 16v6h6v-6h-6zm2 2h2v2h-2v-2z"}),c.a.createElement("path",{d:"m1 16v6h6v-6h-6zm2 2h2v2h-2v-2z"}),c.a.createElement("g",null,c.a.createElement("path",{d:"m11 8v2h2v-2z"}),c.a.createElement("path",{d:"m19 14v2h2v-2z"}),c.a.createElement("path",{d:"m14 11v2h2v-2z"}),c.a.createElement("path",{d:"m11 14v2h2v-2z"}),c.a.createElement("path",{d:"m8 11v2h2v-2z"}),c.a.createElement("path",{d:"m3 14v2h2v-2z"}),c.a.createElement("path",{d:"m17 11v2h2v-2z"}),c.a.createElement("path",{d:"m5 11v2h2v-2z"}),c.a.createElement("path",{d:"m11 11v2h2v-2z"})))}var b=n(56),E=n(133),w=n(134),x=n(135),S=n(143),g=n(58),y=n.n(g),j=n(59),O=n.n(j),z=n(60),C=n.n(z),k=n(61),F=n.n(k),N=n(62),V=n.n(N),W=Object(b.a)((function(){return{root:{flexGrow:0},title:{flexGrow:1}}}));function I(e){var t=e.showViz,n=e.showControl,a=e.showSide,r=e.setViz,i=e.setControl,l=e.setSide,o=e.canDisablePanels,s=W(),u=function(e,t){return e?"Hide ".concat(t):"Show ".concat(t)};return c.a.createElement("div",{className:s.root},c.a.createElement(E.a,{position:"static"},c.a.createElement(w.a,null,c.a.createElement(m.a,{variant:"h6",className:s.title},"TigerJS"),c.a.createElement(S.a,{title:u(t,"Visualization")},c.a.createElement(x.a,{onClick:function(){return r(!t)},"aria-label":"toggle-visualization-panel",disabled:t&&!o},t?c.a.createElement(y.a,null):c.a.createElement(O.a,null))),c.a.createElement(S.a,{title:u(n,"Control Panel")},c.a.createElement(x.a,{onClick:function(){return i(!n)},"aria-label":"toggle-control-panel",disabled:n&&!o},n?c.a.createElement(C.a,null):c.a.createElement(h,null))),c.a.createElement(S.a,{title:u(a,"Side Panel")},c.a.createElement(x.a,{onClick:function(){return l(!a)},"aria-label":"toggle-side-panel",disabled:a&&!o,edge:"end"},a?c.a.createElement(F.a,null):c.a.createElement(V.a,null))))))}var P=n(3),M=n(68),T=n(7),B=n(31),H=n(20),G=function(e){var t=e.reduce((function(e,t){var n=Object(u.a)(e,2),a=n[0],r=n[1],i=t.propertyName,c=t.reducer,l=t.actionCreators,o=Object(d.a)(t,["propertyName","reducer","actionCreators"]);return[Object(B.a)({},a,Object(T.a)({},i,c)),Object(B.a)({},r,{},l,{},o)]}),[{},{}]),n=Object(u.a)(t,2),a=n[0],r=n[1];return[Object(H.b)(a),r]};function A(e,t){var n=Object(s.b)();return Object(i.useMemo)((function(){return Array.isArray(e)?e.map((function(e){return Object(H.a)(e,n)})):Object(H.a)(e,n)}),t?[n].concat(Object(M.a)(t)):[n])}var L=function(){return window.innerWidth||(document.documentElement||document.body).clientWidth},D=n(136),_=3,J=Object(b.a)((function(e){return{root:{display:"flex",position:"relative",height:"100%","&.resizing":{cursor:"col-resize"}},divider:{width:_,flex:"initial",backgroundColor:"light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900],cursor:"col-resize","&:hover:not(.inActive), &.active":{backgroundColor:e.palette.secondary.main},boxShadow:e.shadows[3]},screenWrapperFluid:{position:"relative",flexGrow:1,flexShrink:1,flexBasis:"0%",overflow:"scroll"},screenWrapperFixed:{position:"relative",flex:"initial",overflow:"scroll"},screenWrapperHidden:{display:"none"},noScreens:{alignItems:"center",display:"flex",justifyContent:"center",textAlign:"center"}}})),R=function(e){return e.map((function(e){return e&&e.current?e.current.clientWidth:0}))},q=function(e,t,n,a,r){var i=!1;return e.forEach((function(e,c){if(e&&e.current)if(n[c].isVisible)if(n[c].isFixed){var l="".concat(t[c],r?"%":"px");e.current.style.width!==l&&(e.current.style.width=l,i=!0)}else{var o=t[c].toFixed(1),s=parseFloat(e.current.style.flexGrow).toFixed(1),u=e.current.widthCache;if(s!==o&&(s>0||t[c]>0))e.current.style.flexGrow=o,i=!0,u&&delete e.current.widthCache;else if(u&&a){var d=0;t.forEach((function(e,t){n[t].isFixed||t===c||(d+=e)})),e.current.style.flexGrow=d<=0?L():u>=1?d:d*u/(1-u),i=!0}}else if(a&&!n[c].isFixed){if(!e.current.widthCache){var m=0;t.forEach((function(e,t){n[t].isFixed||(m+=e)})),m-=_,e.current.widthCache=m<=0?1:Math.max(.15,e.current.style.flexGrow/m)}e.current.style.flexGrow=0}})),i},U=function(e,t){var n=0,a=!0,r=!1,i=void 0;try{for(var c,l=e[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){var o=c.value,s=o.isFixed,u=o.minShrink;n+=s?u:u*t}}catch(f){r=!0,i=f}finally{try{a||null==l.return||l.return()}finally{if(r)throw i}}var d=1;n>t&&(d=t/n,n=t);var m=t-n;return e.map((function(e){var t=e.isFixed,n=e.minShrink;return t?n*d:n*m}))};function X(e){var t=e.children,n=e.emptyMessage,a=J(),r=c.a.Children.toArray(t),l=r.map((function(e){var t=e.props;return{isVisible:!t.splitScreenIsHidden,setState:t.splitScreenSetState||function(){},isFixed:"fixed"===t.splitScreenBehavior,minShrink:t.splitScreenMinShrink||0}})),o=JSON.stringify(l),s=Object(i.useRef)(r.map((function(){return Object(i.createRef)()}))),d=Object(i.useState)(-1),v=Object(u.a)(d,2),p=v[0],h=v[1];Object(i.useEffect)((function(){if(s.current&&!(p<0)){var e=L(),t=R(s.current),n=U(l,e);return window.addEventListener("mousemove",a,!1),window.addEventListener("mouseup",i,!1),function(){window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",i)}}function a(a){for(var i=a.clientX,c=-_/2,o=0,u=r.length-1,d=!0,m=0;m<=p;m++)l[m].isVisible&&(o=m,c+=t[m]+_,l[m].isFixed||(d=!1));for(var f=r.length-1;f>p;f--)l[f].isVisible&&(u=f,l[f].isFixed||(d=!1));var v=i-c;if(v>0){for(var h=p+1;h<r.length;h++)if(l[h].isVisible){var b=Math.max(n[h],t[h]-v),E=t[h]-b;if(t[h]=b,v-=E,t[o]+=E,v<=0)break}}else if(v<0){v=-v;for(var w=p;w>=0;w--)if(l[w].isVisible){var x=Math.max(n[w],t[w]-v),S=t[w]-x;if(t[w]=x,v-=S,t[u]+=S,v<=0)break}}var g=!1;if(d){var y=t.map((function(t,n){return l[n].isVisible&&l[n].isFixed?t/e*100:t}));g=q(s.current,y,l,!1,!0)}else g=q(s.current,t,l,!1,!1);g&&window.dispatchEvent(new Event("resize"))}function i(){t.forEach((function(e,t){e<=0&&l[t].isVisible&&l[t].setState(!1)})),h(-1)}}),[p,r.length,o]),Object(i.useEffect)((function(){if(s.current){var e=R(s.current),t=L(),n=0,a=!0;e.forEach((function(e,t){l[t].isFixed?n+=e:l[t].isVisible&&(a=!1)}));var r=1,i=!1;n>t||a?r=t/n:n>.9*t&&(r=.9*t/n,i=!0),e=e.map((function(e,n){if(l[n].isVisible){if(l[n].isFixed)return a?e*r/t*100:e*r;if(i&&0===e&&!s.current[n].current.widthCache)return t}return e})),q(s.current,e,l,!0,a),a||(e=R(s.current),q(s.current,e,l,!1,a)),window.dispatchEvent(new Event("resize"))}}),[o]);var b=!1;return c.a.createElement("div",{className:Object(P.a)(a.root,p>-1&&"resizing")},r.map((function(e,t){var n=Object.assign({},e.props);return delete n.splitScreenIsHidden,delete n.splitScreenSetState,delete n.splitScreenBehavior,delete n.splitScreenMinShrink,l[t].isVisible&&(b=!0),c.a.createElement(i.Fragment,{key:e.key},c.a.createElement("div",{ref:s.current[t],className:Object(P.a)(l[t].isFixed?a.screenWrapperFixed:a.screenWrapperFluid,!l[t].isVisible&&a.screenWrapperHidden)},l[t].isVisible&&c.a.createElement(e.type,n)),t<r.length-1&&l[t+1].isVisible&&b&&c.a.createElement("div",{onMouseDown:function(e){h(t),e.preventDefault()},onMouseUp:function(){return h(-1)},className:Object(P.a)(a.divider,p===t?"active":p>-1&&"inActive")}))})),!b&&c.a.createElement(D.a,{className:a.noScreens,maxWidth:"sm"},c.a.createElement(f.a,{my:4},c.a.createElement(m.a,{variant:"h4",component:"h1"},n))))}var Y=n(63),K=n.n(Y),Q="user_interface",Z="sidePanel",$=({user_interface:{sidePanel:{activeTabIndex:0}}}[Q]||{})[Z]||{},ee="interface/sidePanel/SET_TAB_INDEX";function te(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case ee:return Object(B.a)({},e,{activeTabIndex:t.payload});default:return e}}function ne(e){return{type:ee,payload:e}}var ae=G([a]),re=Object(u.a)(ae,2),ie=re[0],ce=re[1],le=G([r]),oe=Object(u.a)(le,2),se=oe[0],ue=oe[1],de=Object(H.c)(se),me=n(138),fe=n(142),ve=n(137),pe=n(64),he=n.n(pe),be=n(66),Ee=n.n(be),we=n(65),xe=n.n(we),Se=ue.setSidePanelTabIndex;function ge(e){return{id:"side-panel-tab-".concat(e),"aria-controls":"side-panel-tabpanel-".concat(e)}}var ye=Object(b.a)((function(){return{root:{height:"100%",display:"flex",flexDirection:"column",minWidth:200},panelTabs:{flexGrow:0},panelBody:{position:"relative",flexGrow:1,"&>div":{position:"absolute",overflowY:"scroll",height:"100%",width:"100%"}},tabButton:{minWidth:0}}})),je=Object(i.memo)((function(){var e=ye(),t=c.a.useState(0),n=Object(u.a)(t,2),a=n[0],r=n[1],l=Object(i.useRef)();Object(i.useEffect)((function(){function e(){l&&l.current&&(l.current.clientWidth>350?r(1):r(0))}return window.addEventListener("resize",e,!1),e(),function(){window.removeEventListener("resize",e)}}),[]);var o=[Object(s.c)((function(e){return e.user_interface.sidePanel})).activeTabIndex,A(Se)],d=o[0],m=o[1],f=a?3:1;return c.a.createElement("div",{ref:l,className:e.root},c.a.createElement(E.a,{className:e.panelTabs,component:"div",position:"static",color:"default"},c.a.createElement(fe.a,{value:d,onChange:function(e,t){m(t)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"side-panel"},c.a.createElement(S.a,{title:a?"":"Components"},c.a.createElement(ve.a,Object.assign({className:e.tabButton,label:a?"Components":"",icon:c.a.createElement(xe.a,null)},ge(0)))),c.a.createElement(S.a,{title:a?"":"Properties"},c.a.createElement(ve.a,Object.assign({className:e.tabButton,label:a?"Properties":"",icon:c.a.createElement(Ee.a,null)},ge(1)))))),c.a.createElement(he.a,{axis:"x",index:d,onChangeIndex:function(e){m(e)},className:e.panelBody},c.a.createElement(v,{value:d,index:0,spacing:f},c.a.createElement(K.a,null,c.a.createElement(me.a,null,"Item One"))),c.a.createElement(v,{value:d,index:1,spacing:f},"Item Two")))})),Oe=n(24);var ze=function(){var e=Object(i.useRef)();return Object(i.useEffect)((function(){var t=new Oe.e,n=[e.current.parentElement.clientWidth,e.current.parentElement.clientHeight],a=n[0],r=n[1],i=new Oe.d(75,a/r,.1,1e3),c=new Oe.f;c.setSize(a,r),e.current.appendChild(c.domElement);var l=new Oe.a(1,1,1),o=new Oe.c,s=new Oe.b(l,o);t.add(s),i.position.z=5;function u(){if(e&&e.current&&e.current.parentElement){var t=e.current.parentElement,n=t.clientWidth,a=t.clientHeight;i.aspect=n/a,i.updateProjectionMatrix(),c.setSize(n,a)}}return function e(){requestAnimationFrame(e),s.rotation.x+=.01,s.rotation.y+=.01,c.render(t,i)}(),window.addEventListener("resize",u,!1),u(),function(){window.removeEventListener("resize",u)}}),[]),c.a.createElement("div",{style:{position:"absolute"},ref:e})},Ce=Object(b.a)((function(){return{fullHeight:{display:"flex",flexDirection:"column",height:"100vh"},stretchToBottom:{flexGrow:1}}}));var ke=n(67),Fe=Object(ke.a)({palette:{type:"dark",primary:{main:"#7e57c2"},secondary:{main:"#f58025"},background:{default:"#333333"},contrastThreshold:2}}),Ne=n(140),Ve=n(139);o.a.render(c.a.createElement(s.a,{store:de},c.a.createElement(Ve.a,{theme:Fe},c.a.createElement(Ne.a,null),c.a.createElement((function(){var e=Ce(),t=Object(i.useState)(!0),n=Object(u.a)(t,2),a=n[0],r=n[1],l=Object(i.useState)(!0),o=Object(u.a)(l,2),s=o[0],d=o[1],v=Object(i.useState)(!0),p=Object(u.a)(v,2),h=p[0],b=p[1],E=0;a&&(E+=1),s&&(E+=1),h&&(E+=1);var w=E>1,x=function(e,t){(e||w)&&t(e)},S=function(e){return x(e,r)},g=function(e){return x(e,d)},y=function(e){return x(e,b)};return c.a.createElement("div",{className:e.fullHeight},c.a.createElement(I,{showViz:a,showControl:s,showSide:h,setViz:S,setControl:g,setSide:y,canDisablePanels:w}),c.a.createElement("div",{className:e.stretchToBottom},c.a.createElement(X,{emptyMessage:"Hmmm...   it looks like something went wrong!\n                        Use Navbar to toggle a panel back into view :P"},c.a.createElement(ze,{splitScreenIsHidden:!a,splitScreenSetState:S,splitScreenMinShrink:0}),c.a.createElement(D.a,{splitScreenIsHidden:!s,splitScreenSetState:g,splitScreenMinShrink:0,maxWidth:"sm"},c.a.createElement(f.a,{my:4},c.a.createElement(m.a,{variant:"h4",component:"h1",gutterBottom:!0},"Flow Panel"))),c.a.createElement(je,{splitScreenIsHidden:!h,splitScreenSetState:y,splitScreenBehavior:"fixed",splitScreenMinShrink:200}))))}),null))),document.querySelector("#root"))},79:function(e,t,n){e.exports=n(110)}},[[79,1,2]]]);
//# sourceMappingURL=main.b806aed4.chunk.js.map