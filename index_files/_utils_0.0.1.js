var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

function addEvent(C,A,B){if(C.addEventListener){C.addEventListener(A,B,0)}else{if(C.attachEvent){C.attachEvent("on"+A,B)}}}function delEvent(C,A,B){if(C.removeEventListener){C.removeEventListener(A,B,0)}else{if(C.detachEvent){C.detachEvent("on"+A,B)}}}var g_dropdown,g_dropdown_timeout;function dropdown(E){var G=document;var I;if(window.event){I=E.srcElement;event.cancelBubble=true}else{I=E.target;E.stopPropagation()}var H=function(N){var N=N||event;if((N.keyCode==27)&&!(N.ctrlKey||N.altKey)){M()}};var L=function(O){var N=O?O.target:event.srcElement;while(N){if(N.className&&(N.className.indexOf("b-dropdown")!=-1)){return }N=N.parentNode}M()};var C=function(){g_dropdown_timeout=setTimeout(M,1000)};var K=function(){clearTimeout(g_dropdown_timeout)};var M=function(){var N=g_dropdown;if(N){delEvent(G,"click",L);delEvent(G,"keydown",H);delEvent(N,"mouseout",C);delEvent(N,"mouseover",K);N.style.visibility="hidden";var O=N.parentNode;O.insertBefore(N.lastChild,N);O.removeChild(N.nextSibling);O.removeChild(N);g_dropdown=0;return 1}return 0};if(!M()){var B=I;while(B.className.indexOf("b-dropdown")==-1){B=B.parentNode}var A=B.parentNode;g_dropdown=document.createElement("div");g_dropdown.className="b-dropdown-popup";A.insertBefore(g_dropdown,B);var J=navigator.userAgent;var D=document.createElement("iframe");D.frameBorder=0;if(J.match(/MSIE/)&&!J.match("Opera")){D.src="javascript:'<body style=\\'background:none;overflow:hidden\\'>'"}else{}g_dropdown.appendChild(D);if((J.match(/MSIE [56]/)||((document.compatMode!="CSS1Compat")&&J.match(/MSIE/)&&!J.match(/Opera/)))){var F=document.createElement("span");F.style.width=B.offsetWidth+"px";F.style.height=B.offsetHeight+"px";F.style.zoom=1;A.insertBefore(F,B)}else{A.insertBefore(B.cloneNode(true),B)}g_dropdown.appendChild(B);addEvent(G,"keydown",H);addEvent(G,"click",L);addEvent(g_dropdown,"mouseout",C);addEvent(g_dropdown,"mouseover",K)}return false};

}
/*
     FILE ARCHIVED ON 05:45:36 Apr 03, 2011 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:27:03 May 29, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1661.266
  exclusion.robots: 0.07
  exclusion.robots.policy: 0.06
  cdx.remote: 0.077
  esindex: 0.031
  LoadShardBlock: 1636.172 (3)
  PetaboxLoader3.datanode: 1652.637 (4)
  load_resource: 202.31
  PetaboxLoader3.resolve: 159.519
*/