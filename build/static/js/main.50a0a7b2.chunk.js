(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{180:function(e,t,a){e.exports=a(521)},185:function(e,t,a){},187:function(e,t,a){},521:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),c=a.n(l),i=(a(185),a(36)),o=a(37),s=a(39),d=a(38),u=a(40),m=(a(187),a(177)),h=a.n(m),g=a(48),p=a.n(g),b=a(25),f=a.n(b),E=a(179),v=a.n(E),y=a(33),P=a.n(y),j=a(178),k=a.n(j),S=a(172),C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={chartData:{labels:["Staff","NeuroViz","BASIIC","Changing Perspectives","PsychVR","Core","Life You Can Lead","Pulse","Seabird Apps","Protein Structure Builder","Clearpay","Grafficity"],datasets:[{label:"Number of Members per Project",data:[4,6,3,3,2,4,3,2,3,5,2,1],backgroundColor:["rgba(255, 99, 132, 0.6)","rgba(54, 162, 235, 0.6)","rgba(255, 206, 86, 0.6)","rgba(75, 192, 192, 0.6)","rgba(153, 102, 255, 0.6)","rgba(255, 159, 64, 0.6)","rgba(255, 99, 132, 0.6)","rgba(118, 170, 140, 0.6)","rgba(245, 228, 163, 0.6)","rgba(191, 103, 186, 0.6)","rgba(229, 236, 255, 0.6)"]}]}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"chart"},r.a.createElement(S.a,{data:this.state.chartData,options:{scales:{yAxes:[{ticks:{min:0}}]},title:{display:this.props.displayTitle,text:"Number of Members per Project",fontSize:25},legend:{display:this.props.displayLegend,position:this.props.legendPosition}}}))}}]),t}(n.Component);C.defaultProps={displayTitle:!0,displayLegend:!1,legendPosition:"right"};var O=C,w=a(174),L=a(5),R=a.n(L),x=a(49),N=a(107),B=a.n(N),A=a(108),D=a.n(A),I=a(19),T=a.n(I),M=a(103),U=a.n(M),W=a(109),_=a.n(W),q=a(62),J=a.n(q),F=a(104),z=a.n(F),H=a(61),V=a.n(H),Y=a(82),G=a.n(Y),K=a(63),X=a.n(K),$=a(105),Q=a.n($),Z=a(106),ee=a.n(Z),te=a(35),ae=0;function ne(e,t,a,n,r,l){return{id:ae+=1,name:e,URL:t,image:a,message:n,terms_on:r,projects:l}}function re(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}var le=[{id:"name",numeric:!1,disablePadding:!0,label:"Name"},{id:"URL",numeric:!1,disablePadding:!1,label:"URL"},{id:"image",numeric:!1,disablePadding:!1,label:"Image"},{id:"message",numeric:!1,disablePadding:!1,label:"Message"},{id:"terms_on",numeric:!1,disablePadding:!1,label:"Terms On"},{id:"projects",numeric:!1,disablePadding:!1,label:"Projects"}],ce=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).createSortHandler=function(e){return function(t){a.props.onRequestSort(t,e)}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.onSelectAllClick,n=t.order,l=t.orderBy,c=t.numSelected,i=t.rowCount;return r.a.createElement(U.a,null,r.a.createElement(J.a,null,r.a.createElement(T.a,{padding:"checkbox"},r.a.createElement(G.a,{indeterminate:c>0&&c<i,checked:c===i,onChange:a})),le.map(function(t){return r.a.createElement(T.a,{key:t.id,numeric:t.numeric,padding:t.disablePadding?"none":"default",sortDirection:l===t.id&&n},r.a.createElement(X.a,{title:"Sort",placement:t.numeric?"bottom-end":"bottom-start",enterDelay:300},r.a.createElement(z.a,{active:l===t.id,direction:n,onClick:e.createSortHandler(t.id)},t.label)))},this)))}}]),t}(r.a.Component),ie=function(e){var t=e.numSelected,a=e.classes;return r.a.createElement(p.a,{className:R()(a.root,Object(w.a)({},a.highlight,t>0))},r.a.createElement("div",{className:a.title},t>0?r.a.createElement(f.a,{color:"inherit",variant:"subtitle1"},t," selected"):r.a.createElement(f.a,{variant:"h6",id:"tableTitle"},"DALI")),r.a.createElement("div",{className:a.spacer}),r.a.createElement("div",{className:a.actions},t>0?r.a.createElement(X.a,{title:"Delete"},r.a.createElement(P.a,{"aria-label":"Delete"},r.a.createElement(Q.a,null))):r.a.createElement(X.a,{title:"Filter list"},r.a.createElement(P.a,{"aria-label":"Filter list"},r.a.createElement(ee.a,null)))))};ie=Object(x.withStyles)(function(e){return{root:{paddingRight:e.spacing.unit},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(te.lighten)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},spacer:{flex:"1 1 100%"},actions:{color:e.palette.text.secondary},title:{flex:"0 0 auto"}}})(ie);var oe=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).handleRequestSort=function(e,t){var n=t,r="desc";a.state.orderBy===t&&"desc"===a.state.order&&(r="asc"),a.setState({order:r,orderBy:n})},a.handleSelectAllClick=function(e){e.target.checked?a.setState(function(e){return{selected:e.data.map(function(e){return e.id})}}):a.setState({selected:[]})},a.handleClick=function(e,t){var n=a.state.selected,r=n.indexOf(t),l=[];-1===r?l=l.concat(n,t):0===r?l=l.concat(n.slice(1)):r===n.length-1?l=l.concat(n.slice(0,-1)):r>0&&(l=l.concat(n.slice(0,r),n.slice(r+1))),a.setState({selected:l})},a.handleChangePage=function(e,t){a.setState({page:t})},a.handleChangeRowsPerPage=function(e){a.setState({rowsPerPage:e.target.value})},a.isSelected=function(e){return-1!==a.state.selected.indexOf(e)},e.allData.map(function(e){return console.log(e.terms_on)}),a.state={order:"asc",orderBy:"URL",selected:[],data:[ne("Ricky","Jesus",3.7,67,4.3,"Ice Cream"),ne("Yenny",452,25,51,4.9),ne("Tanya",262,16,24,6),ne("Erica",159,6,24,4),ne("Ruoni",356,16,49,3.9),ne("Steven",408,3.2,87,6.5),ne("Froggy",237,9,37,4.3),ne("Aditi",375,0,94,0),ne("Bella",518,26,65,7),ne("Ben",392,.2,98,0),ne("Tim",318,0,81,2),ne("Josh",360,19,9,37),ne("Kate",437,18,63,4)],page:0,rowsPerPage:10},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state,n=a.data,l=a.order,c=a.orderBy,i=a.selected,o=a.rowsPerPage,s=a.page,d=o-Math.min(o,n.length-s*o);return r.a.createElement(V.a,{className:t.root},r.a.createElement(ie,{numSelected:i.length}),r.a.createElement("div",{className:t.tableWrapper},r.a.createElement(B.a,{className:t.table,"aria-labelledby":"tableTitle"},r.a.createElement(ce,{numSelected:i.length,order:l,orderBy:c,onSelectAllClick:this.handleSelectAllClick,onRequestSort:this.handleRequestSort,rowCount:n.length}),r.a.createElement(D.a,null,function(e,t){var a=e.map(function(e,t){return[e,t]});return a.sort(function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]}),a.map(function(e){return e[0]})}(this.props.allData,function(e,t){return"desc"===e?function(e,a){return re(e,a,t)}:function(e,a){return-re(e,a,t)}}(l,c)).slice(s*o,s*o+o).map(function(t){var a=e.isSelected(t.id);return r.a.createElement(J.a,{hover:!0,onClick:function(a){return e.handleClick(a,t.id)},role:"checkbox","aria-checked":a,tabIndex:-1,key:t.id,selected:a},r.a.createElement(T.a,{padding:"checkbox"},r.a.createElement(G.a,{checked:a})),r.a.createElement(T.a,{component:"th",scope:"row",padding:"none"},t.name),r.a.createElement(T.a,null,t.url),r.a.createElement(T.a,null,t.iconUrl),r.a.createElement(T.a,null,t.message),r.a.createElement(T.a,null,t.terms_on),r.a.createElement(T.a,null,t.project))}),d>0&&r.a.createElement(J.a,{style:{height:49*d}},r.a.createElement(T.a,{colSpan:6}))))),r.a.createElement(_.a,{rowsPerPageOptions:[5,10,25,100],component:"div",count:n.length,rowsPerPage:o,page:s,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:this.handleChangePage,onChangeRowsPerPage:this.handleChangeRowsPerPage}))}}]),t}(r.a.Component),se=(Object(x.withStyles)(function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit},table:{minWidth:1020},tableWrapper:{overflowX:"auto"}}})(oe),a(176)),de=a.n(se).a,ue=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this))).state={isLoaded:!1,data:[]},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://mappy.dali.dartmouth.edu/members.json").then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,data:t})})}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,a=e.data;return t?r.a.createElement("div",{className:"App"},r.a.createElement(h.a,{position:"static"},r.a.createElement(p.a,null,r.a.createElement(P.a,{color:"inherit","aria-label":"Menu"},r.a.createElement(k.a,null)),r.a.createElement(f.a,{variant:"h6",color:"inherit"},"DALI Dashboard"),r.a.createElement(v.a,{color:"inherit"}))),r.a.createElement(de,{title:"DALI Members ",data:a.map(function(e){return[e.name,e.url,e.iconUrl,e.message,e.terms_on.map(function(e){return e+" "}),e.project.map(function(e){return e+" "})]}),columns:["Name","URL","Image","Message","Terms On","Projects"]}),r.a.createElement(O,null)):r.a.createElement("div",null,"Loading...")}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[180,2,1]]]);
//# sourceMappingURL=main.50a0a7b2.chunk.js.map