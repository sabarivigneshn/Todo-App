!function(t){"object"==typeof module&&module.exports?module.exports=t:t(Highcharts)}(function(t){!function(t){var e=t.defaultOptions,n=t.doc,o=t.Chart,i=t.addEvent,r=t.removeEvent,a=t.fireEvent,s=t.createElement,l=t.discardElement,p=t.css,c=t.merge,h=t.pick,d=t.each,u=t.objectEach,g=t.extend,m=t.isTouchDevice,x=t.win,f=x.navigator.userAgent,y=t.Renderer.prototype.symbols;/Edge\/|Trident\/|MSIE /.test(f),/firefox/i.test(f),g(e.lang,{printChart:"Print chart",downloadPNG:"Download PNG image",downloadJPEG:"Download JPEG image",downloadPDF:"Download PDF document",downloadSVG:"Download SVG vector image",contextButtonTitle:"Chart context menu"}),e.navigation={buttonOptions:{theme:{},symbolSize:14,symbolX:12.5,symbolY:10.5,align:"right",buttonSpacing:3,height:22,verticalAlign:"top",width:24}},c(!0,e.navigation,{menuStyle:{border:"1px solid #999999",background:"#ffffff",padding:"5px 0"},menuItemStyle:{padding:"0.5em 1em",background:"none",color:"#333333",fontSize:m?"14px":"11px",transition:"background 250ms, color 250ms"},menuItemHoverStyle:{background:"#335cad",color:"#ffffff"},buttonOptions:{symbolFill:"#666666",symbolStroke:"#666666",symbolStrokeWidth:3,theme:{fill:"#ffffff",stroke:"none",padding:5}}}),e.exporting={type:"image/png",url:"https://export.highcharts.com/",printMaxWidth:780,scale:2,buttons:{contextButton:{className:"highcharts-contextbutton",menuClassName:"highcharts-contextmenu",symbol:"menu",_titleKey:"contextButtonTitle",menuItems:"printChart separator downloadPNG downloadJPEG downloadPDF downloadSVG".split(" ")}},menuItemDefinitions:{printChart:{textKey:"printChart",onclick:function(){this.print()}},separator:{separator:!0},downloadPNG:{textKey:"downloadPNG",onclick:function(){this.exportChart()}},downloadJPEG:{textKey:"downloadJPEG",onclick:function(){this.exportChart({type:"image/jpeg"})}},downloadPDF:{textKey:"downloadPDF",onclick:function(){this.exportChart({type:"application/pdf"})}},downloadSVG:{textKey:"downloadSVG",onclick:function(){this.exportChart({type:"image/svg+xml"})}}}},t.post=function(t,e,o){var i=s("form",c({method:"post",action:t,enctype:"multipart/form-data"},o),{display:"none"},n.body);u(e,function(t,e){s("input",{type:"hidden",name:e,value:t},null,i)}),i.submit(),l(i)},g(o.prototype,{sanitizeSVG:function(t,e){if(e&&e.exporting&&e.exporting.allowHTML){var n=t.match(/<\/svg>(.*?$)/);n&&n[1]&&(n='<foreignObject x="0" y="0" width="'+e.chart.width+'" height="'+e.chart.height+'"><body xmlns="http://www.w3.org/1999/xhtml">'+n[1]+"</body></foreignObject>",t=t.replace("</svg>",n+"</svg>"))}return t=t.replace(/zIndex="[^"]+"/g,"").replace(/isShadow="[^"]+"/g,"").replace(/symbolName="[^"]+"/g,"").replace(/jQuery[0-9]+="[^"]+"/g,"").replace(/url\(("|&quot;)(\S+)("|&quot;)\)/g,"url($2)").replace(/url\([^#]+#/g,"url(#").replace(/<svg /,'<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ (NS[0-9]+\:)?href=/g," xlink:href=").replace(/\n/," ").replace(/<\/svg>.*?$/,"</svg>").replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g,'$1="rgb($2)" $1-opacity="$3"').replace(/&nbsp;/g,"\xa0").replace(/&shy;/g,"\xad"),t=t.replace(/<IMG /g,"<image ").replace(/<(\/?)TITLE>/g,"<$1title>").replace(/height=([^" ]+)/g,'height="$1"').replace(/width=([^" ]+)/g,'width="$1"').replace(/hc-svg-href="([^"]+)">/g,'xlink:href="$1"/>').replace(/ id=([^" >]+)/g,' id="$1"').replace(/class=([^" >]+)/g,'class="$1"').replace(/ transform /g," ").replace(/:(path|rect)/g,"$1").replace(/style="([^"]+)"/g,function(t){return t.toLowerCase()})},getChartHTML:function(){return this.container.innerHTML},getSVG:function(e){var o,i,r,a,p,h=c(this.options,e);return n.createElementNS||(n.createElementNS=function(t,e){return n.createElement(e)}),i=s("div",null,{position:"absolute",top:"-9999em",width:this.chartWidth+"px",height:this.chartHeight+"px"},n.body),r=this.renderTo.style.width,p=this.renderTo.style.height,r=h.exporting.sourceWidth||h.chart.width||/px$/.test(r)&&parseInt(r,10)||600,p=h.exporting.sourceHeight||h.chart.height||/px$/.test(p)&&parseInt(p,10)||400,g(h.chart,{animation:!1,renderTo:i,forExport:!0,renderer:"SVGRenderer",width:r,height:p}),h.exporting.enabled=!1,delete h.data,h.series=[],d(this.series,function(t){a=c(t.userOptions,{animation:!1,enableMouseTracking:!1,showCheckbox:!1,visible:t.visible}),a.isInternal||h.series.push(a)}),d(this.axes,function(e){e.userOptions.internalKey||(e.userOptions.internalKey=t.uniqueKey())}),o=new t.Chart(h,this.callback),e&&d(["xAxis","yAxis","series"],function(t){var n={};e[t]&&(n[t]=e[t],o.update(n))}),d(this.axes,function(e){var n=t.find(o.axes,function(t){return t.options.internalKey===e.userOptions.internalKey}),i=e.getExtremes(),r=i.userMin,i=i.userMax;!n||void 0===r&&void 0===i||n.setExtremes(r,i,!0,!1)}),r=o.getChartHTML(),r=this.sanitizeSVG(r,h),h=null,o.destroy(),l(i),r},getSVGForExport:function(t,e){var n=this.options.exporting;return this.getSVG(c({chart:{borderRadius:0}},n.chartOptions,e,{exporting:{sourceWidth:t&&t.sourceWidth||n.sourceWidth,sourceHeight:t&&t.sourceHeight||n.sourceHeight}}))},exportChart:function(e,n){n=this.getSVGForExport(e,n),e=c(this.options.exporting,e),t.post(e.url,{filename:e.filename||"chart",type:e.type,width:e.width||0,scale:e.scale,svg:n},e.formAttributes)},print:function(){var t,e,o=this,i=o.container,r=[],s=i.parentNode,l=n.body,p=l.childNodes,c=o.options.exporting.printMaxWidth;o.isPrinting||(o.isPrinting=!0,o.pointer.reset(null,0),a(o,"beforePrint"),(e=c&&o.chartWidth>c)&&(t=[o.options.chart.width,void 0,!1],o.setSize(c,void 0,!1)),d(p,function(t,e){1===t.nodeType&&(r[e]=t.style.display,t.style.display="none")}),l.appendChild(i),x.focus(),x.print(),setTimeout(function(){s.appendChild(i),d(p,function(t,e){1===t.nodeType&&(t.style.display=r[e])}),o.isPrinting=!1,e&&o.setSize.apply(o,t),a(o,"afterPrint")},1e3))},contextMenu:function(e,o,r,a,l,c,h){var u,m,x=this,f=x.options.navigation,y=x.chartWidth,b=x.chartHeight,v="cache-"+e,w=x[v],E=Math.max(l,c);w||(x[v]=w=s("div",{className:e},{position:"absolute",zIndex:1e3,padding:E+"px"},x.container),u=s("div",{className:"highcharts-menu"},null,w),p(u,g({MozBoxShadow:"3px 3px 10px #888",WebkitBoxShadow:"3px 3px 10px #888",boxShadow:"3px 3px 10px #888"},f.menuStyle)),m=function(){p(w,{display:"none"}),h&&h.setState(0),x.openMenu=!1},x.exportEvents.push(i(w,"mouseleave",function(){w.hideTimer=setTimeout(m,500)}),i(w,"mouseenter",function(){clearTimeout(w.hideTimer)}),i(n,"mouseup",function(t){x.pointer.inClass(t.target,e)||m()})),d(o,function(e){if("string"==typeof e&&(e=x.options.exporting.menuItemDefinitions[e]),t.isObject(e,!0)){var n;e.separator?n=s("hr",null,null,u):(n=s("div",{className:"highcharts-menu-item",onclick:function(t){t&&t.stopPropagation(),m(),e.onclick&&e.onclick.apply(x,arguments)},innerHTML:e.text||x.options.lang[e.textKey]},null,u),n.onmouseover=function(){p(this,f.menuItemHoverStyle)},n.onmouseout=function(){p(this,f.menuItemStyle)},p(n,g({cursor:"pointer"},f.menuItemStyle))),x.exportDivElements.push(n)}}),x.exportDivElements.push(u,w),x.exportMenuWidth=w.offsetWidth,x.exportMenuHeight=w.offsetHeight),o={display:"block"},r+x.exportMenuWidth>y?o.right=y-r-l-E+"px":o.left=r-E+"px",a+c+x.exportMenuHeight>b&&"top"!==h.alignOptions.verticalAlign?o.bottom=b-a-E+"px":o.top=a+c-E+"px",p(w,o),x.openMenu=!0},addButton:function(t){var e,n,o=this,i=o.renderer,r=c(o.options.navigation.buttonOptions,t),a=r.onclick,s=r.menuItems,l=r.symbolSize||12;if(o.btnCount||(o.btnCount=0),o.exportDivElements||(o.exportDivElements=[],o.exportSVGElements=[]),!1!==r.enabled){var p,d=r.theme,u=d.states,m=u&&u.hover,u=u&&u.select;delete d.states,a?p=function(t){t.stopPropagation(),a.call(o,t)}:s&&(p=function(){o.contextMenu(n.menuClassName,s,n.translateX,n.translateY,n.width,n.height,n),n.setState(2)}),r.text&&r.symbol?d.paddingLeft=h(d.paddingLeft,25):r.text||g(d,{width:r.width,height:r.height,padding:0}),n=i.button(r.text,0,0,p,d,m,u).addClass(t.className).attr({"stroke-linecap":"round",title:o.options.lang[r._titleKey],zIndex:3}),n.menuClassName=t.menuClassName||"highcharts-menu-"+o.btnCount++,r.symbol&&(e=i.symbol(r.symbol,r.symbolX-l/2,r.symbolY-l/2,l,l).addClass("highcharts-button-symbol").attr({zIndex:1}).add(n),e.attr({stroke:r.symbolStroke,fill:r.symbolFill,"stroke-width":r.symbolStrokeWidth||1})),n.add().align(g(r,{width:n.width,x:h(r.x,o.buttonOffset)}),!0,"spacingBox"),o.buttonOffset+=(n.width+r.buttonSpacing)*("right"===r.align?-1:1),o.exportSVGElements.push(n,e)}},destroyExport:function(t){var e=t?t.target:this;t=e.exportSVGElements;var n,o=e.exportDivElements,i=e.exportEvents;t&&(d(t,function(t,o){t&&(t.onclick=t.ontouchstart=null,n="cache-"+t.menuClassName,e[n]&&delete e[n],e.exportSVGElements[o]=t.destroy())}),t.length=0),o&&(d(o,function(t,n){clearTimeout(t.hideTimer),r(t,"mouseleave"),e.exportDivElements[n]=t.onmouseout=t.onmouseover=t.ontouchstart=t.onclick=null,l(t)}),o.length=0),i&&(d(i,function(t){t()}),i.length=0)}}),y.menu=function(t,e,n,o){return["M",t,e+2.5,"L",t+n,e+2.5,"M",t,e+o/2+.5,"L",t+n,e+o/2+.5,"M",t,e+o-1.5,"L",t+n,e+o-1.5]},o.prototype.renderExporting=function(){var t=this,e=t.options.exporting,n=e.buttons,o=t.isDirtyExporting||!t.exportSVGElements;t.buttonOffset=0,t.isDirtyExporting&&t.destroyExport(),o&&!1!==e.enabled&&(t.exportEvents=[],u(n,function(e){t.addButton(e)}),t.isDirtyExporting=!1),i(t,"destroy",t.destroyExport)},o.prototype.callbacks.push(function(t){t.renderExporting(),i(t,"redraw",t.renderExporting),d(["exporting","navigation"],function(e){t[e]={update:function(n,o){t.isDirtyExporting=!0,c(!0,t.options[e],n),h(o,!0)&&t.redraw()}}})})}(t)});