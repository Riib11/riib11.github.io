/*
  Highlight.js 10.3.2 (31e1fc40)
  License: BSD-3-Clause
  Copyright (c) 2006-2020, Ivan Sagalaev
*/
var hljs=function(){"use strict";function e(n){Object.freeze(n)
;var t="function"==typeof n
;return Object.getOwnPropertyNames(n).forEach((function(r){
!Object.hasOwnProperty.call(n,r)||null===n[r]||"object"!=typeof n[r]&&"function"!=typeof n[r]||t&&("caller"===r||"callee"===r||"arguments"===r)||Object.isFrozen(n[r])||e(n[r])
})),n}class n{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data}
ignoreMatch(){this.ignore=!0}}function t(e){
return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")
}function r(e,...n){var t={};for(const n in e)t[n]=e[n]
;return n.forEach((function(e){for(const n in e)t[n]=e[n]})),t}function a(e){
return e.nodeName.toLowerCase()}var i=Object.freeze({__proto__:null,
escapeHTML:t,inherit:r,nodeStream:function(e){var n=[];return function e(t,r){
for(var i=t.firstChild;i;i=i.nextSibling)3===i.nodeType?r+=i.nodeValue.length:1===i.nodeType&&(n.push({
event:"start",offset:r,node:i}),r=e(i,r),a(i).match(/br|hr|img|input/)||n.push({
event:"stop",offset:r,node:i}));return r}(e,0),n},mergeStreams:function(e,n,r){
var i=0,s="",o=[];function l(){
return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n
}function c(e){s+="<"+a(e)+[].map.call(e.attributes,(function(e){
return" "+e.nodeName+'="'+t(e.value)+'"'})).join("")+">"}function u(e){
s+="</"+a(e)+">"}function g(e){("start"===e.event?c:u)(e.node)}
for(;e.length||n.length;){var d=l()
;if(s+=t(r.substring(i,d[0].offset)),i=d[0].offset,d===e){o.reverse().forEach(u)
;do{g(d.splice(0,1)[0]),d=l()}while(d===e&&d.length&&d[0].offset===i)
;o.reverse().forEach(c)
}else"start"===d[0].event?o.push(d[0].node):o.pop(),g(d.splice(0,1)[0])}
return s+t(r.substr(i))}});const s=e=>!!e.kind;class o{constructor(e,n){
this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(e){
this.buffer+=t(e)}openNode(e){if(!s(e))return;let n=e.kind
;e.sublanguage||(n=`${this.classPrefix}${n}`),this.span(n)}closeNode(e){
s(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){
this.buffer+=`<span class="${e}">`}}class l{constructor(){this.rootNode={
children:[]},this.stack=[this.rootNode]}get top(){
return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){
this.top.children.push(e)}openNode(e){const n={kind:e,children:[]}
;this.add(n),this.stack.push(n)}closeNode(){
if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){
for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}
walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){
return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),
n.children.forEach((n=>this._walk(e,n))),e.closeNode(n)),e}static _collapse(e){
"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{
l._collapse(e)})))}}class c extends l{constructor(e){super(),this.options=e}
addKeyword(e,n){""!==e&&(this.openNode(n),this.addText(e),this.closeNode())}
addText(e){""!==e&&this.add(e)}addSublanguage(e,n){const t=e.root
;t.kind=n,t.sublanguage=!0,this.add(t)}toHTML(){
return new o(this,this.options).value()}finalize(){return!0}}function u(e){
return e?"string"==typeof e?e:e.source:null}
const g="[a-zA-Z]\\w*",d="[a-zA-Z_]\\w*",h="\\b\\d+(\\.\\d+)?",f="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",p="\\b(0b[01]+)",m={
begin:"\\\\[\\s\\S]",relevance:0},b={className:"string",begin:"'",end:"'",
illegal:"\\n",contains:[m]},v={className:"string",begin:'"',end:'"',
illegal:"\\n",contains:[m]},x={
begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
},E=function(e,n,t={}){var a=r({className:"comment",begin:e,end:n,contains:[]
},t);return a.contains.push(x),a.contains.push({className:"doctag",
begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),a
},_=E("//","$"),w=E("/\\*","\\*/"),N=E("#","$");var y=Object.freeze({
__proto__:null,IDENT_RE:g,UNDERSCORE_IDENT_RE:d,NUMBER_RE:h,C_NUMBER_RE:f,
BINARY_NUMBER_RE:p,
RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
SHEBANG:(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=function(...e){
return e.map((e=>u(e))).join("")}(n,/.*\b/,e.binary,/\b.*/)),r({
className:"meta",begin:n,end:/$/,relevance:0,"on:begin":(e,n)=>{
0!==e.index&&n.ignoreMatch()}},e)},BACKSLASH_ESCAPE:m,APOS_STRING_MODE:b,
QUOTE_STRING_MODE:v,PHRASAL_WORDS_MODE:x,COMMENT:E,C_LINE_COMMENT_MODE:_,
C_BLOCK_COMMENT_MODE:w,HASH_COMMENT_MODE:N,NUMBER_MODE:{className:"number",
begin:h,relevance:0},C_NUMBER_MODE:{className:"number",begin:f,relevance:0},
BINARY_NUMBER_MODE:{className:"number",begin:p,relevance:0},CSS_NUMBER_MODE:{
className:"number",
begin:h+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
relevance:0},REGEXP_MODE:{begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",
begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[m,{begin:/\[/,end:/\]/,
relevance:0,contains:[m]}]}]},TITLE_MODE:{className:"title",begin:g,relevance:0
},UNDERSCORE_TITLE_MODE:{className:"title",begin:d,relevance:0},METHOD_GUARD:{
begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:function(e){
return Object.assign(e,{"on:begin":(e,n)=>{n.data._beginMatch=e[1]},
"on:end":(e,n)=>{n.data._beginMatch!==e[1]&&n.ignoreMatch()}})}
}),R="of and for in not or if then".split(" ");function k(e){function n(n,t){
return RegExp(u(n),"m"+(e.case_insensitive?"i":"")+(t?"g":""))}class t{
constructor(){
this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}
addRule(e,n){
n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),
this.matchAt+=function(e){return RegExp(e.toString()+"|").exec("").length-1
}(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null)
;const e=this.regexes.map((e=>e[1]));this.matcherRe=n(function(e,n="|"){
for(var t=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,r=0,a="",i=0;i<e.length;i++){
var s=r+=1,o=u(e[i]);for(i>0&&(a+=n),a+="(";o.length>0;){var l=t.exec(o)
;if(null==l){a+=o;break}
a+=o.substring(0,l.index),o=o.substring(l.index+l[0].length),
"\\"===l[0][0]&&l[1]?a+="\\"+(Number(l[1])+s):(a+=l[0],"("===l[0]&&r++)}a+=")"}
return a}(e),!0),this.lastIndex=0}exec(e){
this.matcherRe.lastIndex=this.lastIndex;const n=this.matcherRe.exec(e)
;if(!n)return null
;const t=n.findIndex(((e,n)=>n>0&&void 0!==e)),r=this.matchIndexes[t]
;return n.splice(0,t),Object.assign(n,r)}}class a{constructor(){
this.rules=[],this.multiRegexes=[],
this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){
if(this.multiRegexes[e])return this.multiRegexes[e];const n=new t
;return this.rules.slice(e).forEach((([e,t])=>n.addRule(e,t))),
n.compile(),this.multiRegexes[e]=n,n}resumingScanAtSamePosition(){
return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){
this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(e){
const n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex
;let t=n.exec(e)
;if(this.resumingScanAtSamePosition())if(t&&t.index===this.lastIndex);else{
const n=this.getMatcher(0);n.lastIndex=this.lastIndex+1,t=n.exec(e)}
return t&&(this.regexIndex+=t.position+1,
this.regexIndex===this.count&&this.considerAll()),t}}function i(e,n){
const t=e.input[e.index-1],r=e.input[e.index+e[0].length]
;"."!==t&&"."!==r||n.ignoreMatch()}
if(e.contains&&e.contains.includes("self"))throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.")
;return function t(s,o){const l=s;if(s.compiled)return l
;s.compiled=!0,s.__beforeBegin=null,s.keywords=s.keywords||s.beginKeywords
;let c=null
;if("object"==typeof s.keywords&&(c=s.keywords.$pattern,delete s.keywords.$pattern),
s.keywords&&(s.keywords=function(e,n){var t={}
;return"string"==typeof e?r("keyword",e):Object.keys(e).forEach((function(n){
r(n,e[n])})),t;function r(e,r){
n&&(r=r.toLowerCase()),r.split(" ").forEach((function(n){var r=n.split("|")
;t[r[0]]=[e,O(r[0],r[1])]}))}
}(s.keywords,e.case_insensitive)),s.lexemes&&c)throw Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ")
;return l.keywordPatternRe=n(s.lexemes||c||/\w+/,!0),
o&&(s.beginKeywords&&(s.begin="\\b("+s.beginKeywords.split(" ").join("|")+")(?=\\b|\\s)",
s.__beforeBegin=i),
s.begin||(s.begin=/\B|\b/),l.beginRe=n(s.begin),s.endSameAsBegin&&(s.end=s.begin),
s.end||s.endsWithParent||(s.end=/\B|\b/),
s.end&&(l.endRe=n(s.end)),l.terminator_end=u(s.end)||"",
s.endsWithParent&&o.terminator_end&&(l.terminator_end+=(s.end?"|":"")+o.terminator_end)),
s.illegal&&(l.illegalRe=n(s.illegal)),
void 0===s.relevance&&(s.relevance=1),s.contains||(s.contains=[]),
s.contains=[].concat(...s.contains.map((function(e){return function(e){
return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map((function(n){
return r(e,{variants:null},n)}))),e.cached_variants?e.cached_variants:M(e)?r(e,{
starts:e.starts?r(e.starts):null}):Object.isFrozen(e)?r(e):e}("self"===e?s:e)
}))),s.contains.forEach((function(e){t(e,l)
})),s.starts&&t(s.starts,o),l.matcher=function(e){const n=new a
;return e.contains.forEach((e=>n.addRule(e.begin,{rule:e,type:"begin"
}))),e.terminator_end&&n.addRule(e.terminator_end,{type:"end"
}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(l),l}(e)}function M(e){
return!!e&&(e.endsWithParent||M(e.starts))}function O(e,n){
return n?Number(n):function(e){return R.includes(e.toLowerCase())}(e)?0:1}
const L={props:["language","code","autodetect"],data:function(){return{
detectedLanguage:"",unknownLanguage:!1}},computed:{className(){
return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){
if(!this.autoDetect&&!hljs.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),
this.unknownLanguage=!0,t(this.code);let e
;return this.autoDetect?(e=hljs.highlightAuto(this.code),
this.detectedLanguage=e.language):(e=hljs.highlight(this.language,this.code,this.ignoreIllegals),
this.detectectLanguage=this.language),e.value},autoDetect(){
return!(this.language&&(e=this.autodetect,!e&&""!==e));var e},
ignoreIllegals:()=>!0},render(e){return e("pre",{},[e("code",{
class:this.className,domProps:{innerHTML:this.highlighted}})])}},j={install(e){
e.component("highlightjs",L)}
},I=t,T=r,{nodeStream:S,mergeStreams:A}=i,B=Symbol("nomatch")
;return function(t){
var r=[],a=Object.create(null),i=Object.create(null),s=[],o=!0,l=/(^(<[^>]+>|\t|)+|\n)/gm,u="Could not find the language '{}', did you forget to load/include a language module?"
;const g={disableAutodetect:!0,name:"Plain text",contains:[]};var d={
noHighlightRe:/^(no-?highlight)$/i,
languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",
tabReplace:null,useBR:!1,languages:null,__emitter:c};function h(e){
return d.noHighlightRe.test(e)}function f(e,n,t,r){var a={code:n,language:e}
;N("before:highlight",a);var i=a.result?a.result:p(a.language,a.code,t,r)
;return i.code=a.code,N("after:highlight",i),i}function p(e,t,r,i){var s=t
;function l(e,n){var t=_.case_insensitive?n[0].toLowerCase():n[0]
;return Object.prototype.hasOwnProperty.call(e.keywords,t)&&e.keywords[t]}
function c(){null!=y.subLanguage?function(){if(""!==O){var e=null
;if("string"==typeof y.subLanguage){
if(!a[y.subLanguage])return void M.addText(O)
;e=p(y.subLanguage,O,!0,R[y.subLanguage]),R[y.subLanguage]=e.top
}else e=m(O,y.subLanguage.length?y.subLanguage:null)
;y.relevance>0&&(L+=e.relevance),M.addSublanguage(e.emitter,e.language)}
}():function(){if(!y.keywords)return void M.addText(O);let e=0
;y.keywordPatternRe.lastIndex=0;let n=y.keywordPatternRe.exec(O),t="";for(;n;){
t+=O.substring(e,n.index);const r=l(y,n);if(r){const[e,a]=r
;M.addText(t),t="",L+=a,M.addKeyword(n[0],e)}else t+=n[0]
;e=y.keywordPatternRe.lastIndex,n=y.keywordPatternRe.exec(O)}
t+=O.substr(e),M.addText(t)}(),O=""}function g(e){
return e.className&&M.openNode(e.className),y=Object.create(e,{parent:{value:y}
})}function h(e,t,r){let a=function(e,n){var t=e&&e.exec(n)
;return t&&0===t.index}(e.endRe,r);if(a){if(e["on:end"]){const r=new n(e)
;e["on:end"](t,r),r.ignore&&(a=!1)}if(a){for(;e.endsParent&&e.parent;)e=e.parent
;return e}}if(e.endsWithParent)return h(e.parent,t,r)}function f(e){
return 0===y.matcher.regexIndex?(O+=e[0],1):(S=!0,0)}function b(e){
var n=e[0],t=s.substr(e.index),r=h(y,e,t);if(!r)return B;var a=y
;a.skip?O+=n:(a.returnEnd||a.excludeEnd||(O+=n),c(),a.excludeEnd&&(O=n));do{
y.className&&M.closeNode(),y.skip||y.subLanguage||(L+=y.relevance),y=y.parent
}while(y!==r.parent)
;return r.starts&&(r.endSameAsBegin&&(r.starts.endRe=r.endRe),
g(r.starts)),a.returnEnd?0:n.length}var v={};function x(t,a){var i=a&&a[0]
;if(O+=t,null==i)return c(),0
;if("begin"===v.type&&"end"===a.type&&v.index===a.index&&""===i){
if(O+=s.slice(a.index,a.index+1),!o){const n=Error("0 width match regex")
;throw n.languageName=e,n.badRule=v.rule,n}return 1}
if(v=a,"begin"===a.type)return function(e){var t=e[0],r=e.rule
;const a=new n(r),i=[r.__beforeBegin,r["on:begin"]]
;for(const n of i)if(n&&(n(e,a),a.ignore))return f(t)
;return r&&r.endSameAsBegin&&(r.endRe=RegExp(t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),
r.skip?O+=t:(r.excludeBegin&&(O+=t),
c(),r.returnBegin||r.excludeBegin||(O=t)),g(r),r.returnBegin?0:t.length}(a)
;if("illegal"===a.type&&!r){
const e=Error('Illegal lexeme "'+i+'" for mode "'+(y.className||"<unnamed>")+'"')
;throw e.mode=y,e}if("end"===a.type){var l=b(a);if(l!==B)return l}
if("illegal"===a.type&&""===i)return 1
;if(T>1e5&&T>3*a.index)throw Error("potential infinite loop, way more iterations than matches")
;return O+=i,i.length}var _=E(e)
;if(!_)throw console.error(u.replace("{}",e)),Error('Unknown language: "'+e+'"')
;var w=k(_),N="",y=i||w,R={},M=new d.__emitter(d);!function(){
for(var e=[],n=y;n!==_;n=n.parent)n.className&&e.unshift(n.className)
;e.forEach((e=>M.openNode(e)))}();var O="",L=0,j=0,T=0,S=!1;try{
for(y.matcher.considerAll();;){
T++,S?S=!1:y.matcher.considerAll(),y.matcher.lastIndex=j
;const e=y.matcher.exec(s);if(!e)break;const n=x(s.substring(j,e.index),e)
;j=e.index+n}return x(s.substr(j)),M.closeAllNodes(),M.finalize(),N=M.toHTML(),{
relevance:L,value:N,language:e,illegal:!1,emitter:M,top:y}}catch(n){
if(n.message&&n.message.includes("Illegal"))return{illegal:!0,illegalBy:{
msg:n.message,context:s.slice(j-100,j+100),mode:n.mode},sofar:N,relevance:0,
value:I(s),emitter:M};if(o)return{illegal:!1,relevance:0,value:I(s),emitter:M,
language:e,top:y,errorRaised:n};throw n}}function m(e,n){
n=n||d.languages||Object.keys(a);var t=function(e){const n={relevance:0,
emitter:new d.__emitter(d),value:I(e),illegal:!1,top:g}
;return n.emitter.addText(e),n}(e),r=t
;return n.filter(E).filter(w).forEach((function(n){var a=p(n,e,!1);a.language=n,
a.relevance>r.relevance&&(r=a),a.relevance>t.relevance&&(r=t,t=a)
})),r.language&&(t.second_best=r),t}function b(e){
return d.tabReplace||d.useBR?e.replace(l,(e=>"\n"===e?d.useBR?"<br>":e:d.tabReplace?e.replace(/\t/g,d.tabReplace):e)):e
}function v(e){let n=null;const t=function(e){var n=e.className+" "
;n+=e.parentNode?e.parentNode.className:"";const t=d.languageDetectRe.exec(n)
;if(t){var r=E(t[1])
;return r||(console.warn(u.replace("{}",t[1])),console.warn("Falling back to no-highlight mode for this block.",e)),
r?t[1]:"no-highlight"}return n.split(/\s+/).find((e=>h(e)||E(e)))}(e)
;if(h(t))return;N("before:highlightBlock",{block:e,language:t
}),d.useBR?(n=document.createElement("div"),
n.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n")):n=e
;const r=n.textContent,a=t?f(t,r,!0):m(r),s=S(n);if(s.length){
const e=document.createElement("div");e.innerHTML=a.value,a.value=A(s,S(e),r)}
a.value=b(a.value),N("after:highlightBlock",{block:e,result:a
}),e.innerHTML=a.value,e.className=function(e,n,t){var r=n?i[n]:t,a=[e.trim()]
;return e.match(/\bhljs\b/)||a.push("hljs"),
e.includes(r)||a.push(r),a.join(" ").trim()
}(e.className,t,a.language),e.result={language:a.language,re:a.relevance,
relavance:a.relevance},a.second_best&&(e.second_best={
language:a.second_best.language,re:a.second_best.relevance,
relavance:a.second_best.relevance})}const x=()=>{if(!x.called){x.called=!0
;var e=document.querySelectorAll("pre code");r.forEach.call(e,v)}}
;function E(e){return e=(e||"").toLowerCase(),a[e]||a[i[e]]}
function _(e,{languageName:n}){"string"==typeof e&&(e=[e]),e.forEach((e=>{i[e]=n
}))}function w(e){var n=E(e);return n&&!n.disableAutodetect}function N(e,n){
var t=e;s.forEach((function(e){e[t]&&e[t](n)}))}Object.assign(t,{highlight:f,
highlightAuto:m,fixMarkup:function(e){
return console.warn("fixMarkup is deprecated and will be removed entirely in v11.0"),
console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2534"),
b(e)},highlightBlock:v,configure:function(e){
e.useBR&&(console.warn("'useBR' option is deprecated and will be removed entirely in v11.0"),
console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2559")),
d=T(d,e)},initHighlighting:x,initHighlightingOnLoad:function(){
window.addEventListener("DOMContentLoaded",x,!1)},
registerLanguage:function(e,n){var r=null;try{r=n(t)}catch(n){
if(console.error("Language definition for '{}' could not be registered.".replace("{}",e)),
!o)throw n;console.error(n),r=g}
r.name||(r.name=e),a[e]=r,r.rawDefinition=n.bind(null,t),
r.aliases&&_(r.aliases,{languageName:e})},listLanguages:function(){
return Object.keys(a)},getLanguage:E,registerAliases:_,
requireLanguage:function(e){var n=E(e);if(n)return n
;throw Error("The '{}' language is required, but not loaded.".replace("{}",e))},
autoDetection:w,inherit:T,addPlugin:function(e){s.push(e)},vuePlugin:j
}),t.debugMode=function(){o=!1},t.safeMode=function(){o=!0
},t.versionString="10.3.2";for(const n in y)"object"==typeof y[n]&&e(y[n])
;return Object.assign(t,y),t}({})}()
;"object"==typeof exports&&"undefined"!=typeof module&&(module.exports=hljs);hljs.registerLanguage("typescript",function(){"use strict"
;const e="[A-Za-z$_][0-9A-Za-z$_]*",n=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],a=["true","false","null","undefined","NaN","Infinity"],s=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"])
;function t(e){return r("(?=",e,")")}function i(e){return r("(",e,")?")}
function r(...e){return e.map((e=>{
return(n=e)?"string"==typeof n?n:n.source:null;var n})).join("")}
return function(c){const o={$pattern:e,
keyword:n.concat(["type","namespace","typedef","interface","public","private","protected","implements","declare","abstract","readonly"]).join(" "),
literal:a.join(" "),
built_in:s.concat(["any","void","number","boolean","string","object","never","enum"]).join(" ")
},l={className:"meta",begin:"@[A-Za-z$_][0-9A-Za-z$_]*"},d=(e,n,a)=>{
const s=e.contains.findIndex((e=>e.label===n))
;if(-1===s)throw Error("can not find mode to replace");e.contains.splice(s,1,a)
},g=function(c){const o=e,l={begin:/<[A-Za-z0-9\\._:-]+/,
end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{
const a=e[0].length+e.index,s=e.input[a];"<"!==s?">"===s&&(((e,{after:n})=>{
const a=e[0].replace("<","</");return-1!==e.input.indexOf(a,n)})(e,{after:a
})||n.ignoreMatch()):n.ignoreMatch()}},d={$pattern:e,keyword:n.join(" "),
literal:a.join(" "),built_in:s.join(" ")
},g=(e,n)=>`\\b0[${e}][${n}]([${n}_]*[${n}])?n?`,b=/[1-9]([0-9_]*\d)?/,u=/\d([0-9_]*\d)?/,E=r(/[eE][+-]?/,u),m={
className:"number",variants:[{begin:g("bB","01")},{begin:g("oO","0-7")},{
begin:g("xX","0-9a-fA-F")},{begin:r(/\b/,b,"n")},{begin:r(/(\b0)?\./,u,i(E))},{
begin:r(/\b/,b,i(r(/\./,i(u))),i(E))},{begin:/\b0[\.n]?/}],relevance:0},y={
className:"subst",begin:"\\$\\{",end:"\\}",keywords:d,contains:[]},p={
begin:"html`",end:"",starts:{end:"`",returnEnd:!1,
contains:[c.BACKSLASH_ESCAPE,y],subLanguage:"xml"}},_={begin:"css`",end:"",
starts:{end:"`",returnEnd:!1,contains:[c.BACKSLASH_ESCAPE,y],subLanguage:"css"}
},N={className:"string",begin:"`",end:"`",contains:[c.BACKSLASH_ESCAPE,y]},f={
className:"comment",variants:[c.COMMENT("/\\*\\*","\\*/",{relevance:0,
contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",
begin:"\\{",end:"\\}",relevance:0},{className:"variable",
begin:o+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,
relevance:0}]}]}),c.C_BLOCK_COMMENT_MODE,c.C_LINE_COMMENT_MODE]
},A=[c.APOS_STRING_MODE,c.QUOTE_STRING_MODE,p,_,N,m,c.REGEXP_MODE]
;y.contains=A.concat({begin:/{/,end:/}/,keywords:d,contains:["self"].concat(A)})
;const O=[].concat(f,y.contains),S=O.concat([{begin:/\(/,end:/\)/,keywords:d,
contains:["self"].concat(O)}]),T={className:"params",begin:/\(/,end:/\)/,
excludeBegin:!0,excludeEnd:!0,keywords:d,contains:S};return{name:"Javascript",
aliases:["js","jsx","mjs","cjs"],keywords:d,exports:{PARAMS_CONTAINS:S},
illegal:/#(?![$_A-z])/,contains:[c.SHEBANG({label:"shebang",binary:"node",
relevance:5}),{label:"use_strict",className:"meta",relevance:10,
begin:/^\s*['"]use (strict|asm)['"]/
},c.APOS_STRING_MODE,c.QUOTE_STRING_MODE,p,_,N,f,m,{
begin:r(/[{,\n]\s*/,t(r(/(\/\/.*$)*/,/(\/\*(.|\n)*\*\/)*/,/\s*/,o+"\\s*:"))),
relevance:0,contains:[{className:"attr",begin:o+t("\\s*:"),relevance:0}]},{
begin:"("+c.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",
keywords:"return throw case",contains:[f,c.REGEXP_MODE,{className:"function",
begin:"(\\([^()]*(\\([^()]*(\\([^()]*\\))*[^()]*\\))*[^()]*\\)|"+c.UNDERSCORE_IDENT_RE+")\\s*=>",
returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{
begin:c.UNDERSCORE_IDENT_RE},{className:null,begin:/\(\s*\)/,skip:!0},{
begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:d,contains:S}]}]},{
begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{
begin:"<>",end:"</>"},{begin:l.begin,"on:begin":l.isTrulyOpeningTag,end:l.end}],
subLanguage:"xml",contains:[{begin:l.begin,end:l.end,skip:!0,contains:["self"]}]
}],relevance:0},{className:"function",beginKeywords:"function",end:/[{;]/,
excludeEnd:!0,keywords:d,contains:["self",c.inherit(c.TITLE_MODE,{begin:o}),T],
illegal:/%/},{className:"function",
begin:c.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\))*[^()]*\\))*[^()]*\\)\\s*{",
returnBegin:!0,contains:[T,c.inherit(c.TITLE_MODE,{begin:o})]},{variants:[{
begin:"\\."+o},{begin:"\\$"+o}],relevance:0},{className:"class",
beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{
beginKeywords:"extends"},c.UNDERSCORE_TITLE_MODE]},{begin:/\b(?=constructor)/,
end:/[\{;]/,excludeEnd:!0,contains:[c.inherit(c.TITLE_MODE,{begin:o}),"self",T]
},{begin:"(get|set)\\s+(?="+o+"\\()",end:/{/,keywords:"get set",
contains:[c.inherit(c.TITLE_MODE,{begin:o}),{begin:/\(\)/},T]},{begin:/\$[(.]/}]
}}(c)
;return Object.assign(g.keywords,o),g.exports.PARAMS_CONTAINS.push(l),g.contains=g.contains.concat([l,{
beginKeywords:"namespace",end:/\{/,excludeEnd:!0},{beginKeywords:"interface",
end:/\{/,excludeEnd:!0,keywords:"interface extends"
}]),d(g,"shebang",c.SHEBANG()),d(g,"use_strict",{className:"meta",relevance:10,
begin:/^\s*['"]use strict['"]/
}),g.contains.find((e=>"function"===e.className)).relevance=0,Object.assign(g,{
name:"TypeScript",aliases:["ts"]}),g}}());hljs.registerLanguage("mathematica",function(){"use strict";return function(e){
return{name:"Mathematica",aliases:["mma","wl"],keywords:{
$pattern:"(\\$|\\b)"+e.IDENT_RE+"\\b",
keyword:"AASTriangle AbelianGroup Abort AbortKernels AbortProtect AbortScheduledTask Above Abs AbsArg AbsArgPlot Absolute AbsoluteCorrelation AbsoluteCorrelationFunction AbsoluteCurrentValue AbsoluteDashing AbsoluteFileName AbsoluteOptions AbsolutePointSize AbsoluteThickness AbsoluteTime AbsoluteTiming AcceptanceThreshold AccountingForm Accumulate Accuracy AccuracyGoal ActionDelay ActionMenu ActionMenuBox ActionMenuBoxOptions Activate Active ActiveClassification ActiveClassificationObject ActiveItem ActivePrediction ActivePredictionObject ActiveStyle AcyclicGraphQ AddOnHelpPath AddSides AddTo AddToSearchIndex AddUsers AdjacencyGraph AdjacencyList AdjacencyMatrix AdjustmentBox AdjustmentBoxOptions AdjustTimeSeriesForecast AdministrativeDivisionData AffineHalfSpace AffineSpace AffineStateSpaceModel AffineTransform After AggregatedEntityClass AggregationLayer AircraftData AirportData AirPressureData AirTemperatureData AiryAi AiryAiPrime AiryAiZero AiryBi AiryBiPrime AiryBiZero AlgebraicIntegerQ AlgebraicNumber AlgebraicNumberDenominator AlgebraicNumberNorm AlgebraicNumberPolynomial AlgebraicNumberTrace AlgebraicRules AlgebraicRulesData Algebraics AlgebraicUnitQ Alignment AlignmentMarker AlignmentPoint All AllowAdultContent AllowedCloudExtraParameters AllowedCloudParameterExtensions AllowedDimensions AllowedFrequencyRange AllowedHeads AllowGroupClose AllowIncomplete AllowInlineCells AllowKernelInitialization AllowLooseGrammar AllowReverseGroupClose AllowScriptLevelChange AllTrue Alphabet AlphabeticOrder AlphabeticSort AlphaChannel AlternateImage AlternatingFactorial AlternatingGroup AlternativeHypothesis Alternatives AltitudeMethod AmbientLight AmbiguityFunction AmbiguityList Analytic AnatomyData AnatomyForm AnatomyPlot3D AnatomySkinStyle AnatomyStyling AnchoredSearch And AndersonDarlingTest AngerJ AngleBisector AngleBracket AnglePath AnglePath3D AngleVector AngularGauge Animate AnimationCycleOffset AnimationCycleRepetitions AnimationDirection AnimationDisplayTime AnimationRate AnimationRepetitions AnimationRunning AnimationRunTime AnimationTimeIndex Animator AnimatorBox AnimatorBoxOptions AnimatorElements Annotate Annotation AnnotationDelete AnnotationNames AnnotationRules AnnotationValue Annuity AnnuityDue Annulus AnomalyDetection AnomalyDetectorFunction Anonymous Antialiasing AntihermitianMatrixQ Antisymmetric AntisymmetricMatrixQ Antonyms AnyOrder AnySubset AnyTrue Apart ApartSquareFree APIFunction Appearance AppearanceElements AppearanceRules AppellF1 Append AppendCheck AppendLayer AppendTo ApplicationIdentificationKey Apply ApplySides ArcCos ArcCosh ArcCot ArcCoth ArcCsc ArcCsch ArcCurvature ARCHProcess ArcLength ArcSec ArcSech ArcSin ArcSinDistribution ArcSinh ArcTan ArcTanh Area Arg ArgMax ArgMin ArgumentCountQ ARIMAProcess ArithmeticGeometricMean ARMAProcess Around AroundReplace ARProcess Array ArrayComponents ArrayDepth ArrayFilter ArrayFlatten ArrayMesh ArrayPad ArrayPlot ArrayQ ArrayResample ArrayReshape ArrayRules Arrays Arrow Arrow3DBox ArrowBox Arrowheads ASATriangle Ask AskAppend AskConfirm AskDisplay AskedQ AskedValue AskFunction AskState AskTemplateDisplay AspectRatio AspectRatioFixed Assert AssociateTo Association AssociationFormat AssociationMap AssociationQ AssociationThread AssumeDeterministic Assuming Assumptions AstronomicalData AsymptoticDSolveValue AsymptoticEqual AsymptoticEquivalent AsymptoticGreater AsymptoticGreaterEqual AsymptoticIntegrate AsymptoticLess AsymptoticLessEqual AsymptoticOutputTracker AsymptoticRSolveValue AsymptoticSolve AsymptoticSum Asynchronous AsynchronousTaskObject AsynchronousTasks Atom AtomCoordinates AtomCount AtomDiagramCoordinates AtomList AtomQ AttentionLayer Attributes Audio AudioAmplify AudioAnnotate AudioAnnotationLookup AudioBlockMap AudioCapture AudioChannelAssignment AudioChannelCombine AudioChannelMix AudioChannels AudioChannelSeparate AudioData AudioDelay AudioDelete AudioDevice AudioDistance AudioFade AudioFrequencyShift AudioGenerator AudioIdentify AudioInputDevice AudioInsert AudioIntervals AudioJoin AudioLabel AudioLength AudioLocalMeasurements AudioLooping AudioLoudness AudioMeasurements AudioNormalize AudioOutputDevice AudioOverlay AudioPad AudioPan AudioPartition AudioPause AudioPitchShift AudioPlay AudioPlot AudioQ AudioRecord AudioReplace AudioResample AudioReverb AudioSampleRate AudioSpectralMap AudioSpectralTransformation AudioSplit AudioStop AudioStream AudioStreams AudioTimeStretch AudioTrim AudioType AugmentedPolyhedron AugmentedSymmetricPolynomial Authenticate Authentication AuthenticationDialog AutoAction Autocomplete AutocompletionFunction AutoCopy AutocorrelationTest AutoDelete AutoEvaluateEvents AutoGeneratedPackage AutoIndent AutoIndentSpacings AutoItalicWords AutoloadPath AutoMatch Automatic AutomaticImageSize AutoMultiplicationSymbol AutoNumberFormatting AutoOpenNotebooks AutoOpenPalettes AutoQuoteCharacters AutoRefreshed AutoRemove AutorunSequencing AutoScaling AutoScroll AutoSpacing AutoStyleOptions AutoStyleWords AutoSubmitting Axes AxesEdge AxesLabel AxesOrigin AxesStyle AxiomaticTheory Axis BabyMonsterGroupB Back Background BackgroundAppearance BackgroundTasksSettings Backslash Backsubstitution Backward Ball Band BandpassFilter BandstopFilter BarabasiAlbertGraphDistribution BarChart BarChart3D BarcodeImage BarcodeRecognize BaringhausHenzeTest BarLegend BarlowProschanImportance BarnesG BarOrigin BarSpacing BartlettHannWindow BartlettWindow BaseDecode BaseEncode BaseForm Baseline BaselinePosition BaseStyle BasicRecurrentLayer BatchNormalizationLayer BatchSize BatesDistribution BattleLemarieWavelet BayesianMaximization BayesianMaximizationObject BayesianMinimization BayesianMinimizationObject Because BeckmannDistribution Beep Before Begin BeginDialogPacket BeginFrontEndInteractionPacket BeginPackage BellB BellY Below BenfordDistribution BeniniDistribution BenktanderGibratDistribution BenktanderWeibullDistribution BernoulliB BernoulliDistribution BernoulliGraphDistribution BernoulliProcess BernsteinBasis BesselFilterModel BesselI BesselJ BesselJZero BesselK BesselY BesselYZero Beta BetaBinomialDistribution BetaDistribution BetaNegativeBinomialDistribution BetaPrimeDistribution BetaRegularized Between BetweennessCentrality BeveledPolyhedron BezierCurve BezierCurve3DBox BezierCurve3DBoxOptions BezierCurveBox BezierCurveBoxOptions BezierFunction BilateralFilter Binarize BinaryDeserialize BinaryDistance BinaryFormat BinaryImageQ BinaryRead BinaryReadList BinarySerialize BinaryWrite BinCounts BinLists Binomial BinomialDistribution BinomialProcess BinormalDistribution BiorthogonalSplineWavelet BipartiteGraphQ BiquadraticFilterModel BirnbaumImportance BirnbaumSaundersDistribution BitAnd BitClear BitGet BitLength BitNot BitOr BitSet BitShiftLeft BitShiftRight BitXor BiweightLocation BiweightMidvariance Black BlackmanHarrisWindow BlackmanNuttallWindow BlackmanWindow Blank BlankForm BlankNullSequence BlankSequence Blend Block BlockchainAddressData BlockchainBase BlockchainBlockData BlockchainContractValue BlockchainData BlockchainGet BlockchainKeyEncode BlockchainPut BlockchainTokenData BlockchainTransaction BlockchainTransactionData BlockchainTransactionSign BlockchainTransactionSubmit BlockMap BlockRandom BlomqvistBeta BlomqvistBetaTest Blue Blur BodePlot BohmanWindow Bold Bond BondCount BondList BondQ Bookmarks Boole BooleanConsecutiveFunction BooleanConvert BooleanCountingFunction BooleanFunction BooleanGraph BooleanMaxterms BooleanMinimize BooleanMinterms BooleanQ BooleanRegion Booleans BooleanStrings BooleanTable BooleanVariables BorderDimensions BorelTannerDistribution Bottom BottomHatTransform BoundaryDiscretizeGraphics BoundaryDiscretizeRegion BoundaryMesh BoundaryMeshRegion BoundaryMeshRegionQ BoundaryStyle BoundedRegionQ BoundingRegion Bounds Box BoxBaselineShift BoxData BoxDimensions Boxed Boxes BoxForm BoxFormFormatTypes BoxFrame BoxID BoxMargins BoxMatrix BoxObject BoxRatios BoxRotation BoxRotationPoint BoxStyle BoxWhiskerChart Bra BracketingBar BraKet BrayCurtisDistance BreadthFirstScan Break BridgeData BrightnessEqualize BroadcastStationData Brown BrownForsytheTest BrownianBridgeProcess BrowserCategory BSplineBasis BSplineCurve BSplineCurve3DBox BSplineCurve3DBoxOptions BSplineCurveBox BSplineCurveBoxOptions BSplineFunction BSplineSurface BSplineSurface3DBox BSplineSurface3DBoxOptions BubbleChart BubbleChart3D BubbleScale BubbleSizes BuildingData BulletGauge BusinessDayQ ButterflyGraph ButterworthFilterModel Button ButtonBar ButtonBox ButtonBoxOptions ButtonCell ButtonContents ButtonData ButtonEvaluator ButtonExpandable ButtonFrame ButtonFunction ButtonMargins ButtonMinHeight ButtonNote ButtonNotebook ButtonSource ButtonStyle ButtonStyleMenuListing Byte ByteArray ByteArrayFormat ByteArrayQ ByteArrayToString ByteCount ByteOrdering C CachedValue CacheGraphics CachePersistence CalendarConvert CalendarData CalendarType Callout CalloutMarker CalloutStyle CallPacket CanberraDistance Cancel CancelButton CandlestickChart CanonicalGraph CanonicalizePolygon CanonicalizePolyhedron CanonicalName CanonicalWarpingCorrespondence CanonicalWarpingDistance CantorMesh CantorStaircase Cap CapForm CapitalDifferentialD Capitalize CapsuleShape CaptureRunning CardinalBSplineBasis CarlemanLinearize CarmichaelLambda CaseOrdering Cases CaseSensitive Cashflow Casoratian Catalan CatalanNumber Catch Catenate CatenateLayer CauchyDistribution CauchyWindow CayleyGraph CDF CDFDeploy CDFInformation CDFWavelet Ceiling CelestialSystem Cell CellAutoOverwrite CellBaseline CellBoundingBox CellBracketOptions CellChangeTimes CellContents CellContext CellDingbat CellDynamicExpression CellEditDuplicate CellElementsBoundingBox CellElementSpacings CellEpilog CellEvaluationDuplicate CellEvaluationFunction CellEvaluationLanguage CellEventActions CellFrame CellFrameColor CellFrameLabelMargins CellFrameLabels CellFrameMargins CellGroup CellGroupData CellGrouping CellGroupingRules CellHorizontalScrolling CellID CellLabel CellLabelAutoDelete CellLabelMargins CellLabelPositioning CellLabelStyle CellLabelTemplate CellMargins CellObject CellOpen CellPrint CellProlog Cells CellSize CellStyle CellTags CellularAutomaton CensoredDistribution Censoring Center CenterArray CenterDot CentralFeature CentralMoment CentralMomentGeneratingFunction Cepstrogram CepstrogramArray CepstrumArray CForm ChampernowneNumber ChangeOptions ChannelBase ChannelBrokerAction ChannelDatabin ChannelHistoryLength ChannelListen ChannelListener ChannelListeners ChannelListenerWait ChannelObject ChannelPreSendFunction ChannelReceiverFunction ChannelSend ChannelSubscribers ChanVeseBinarize Character CharacterCounts CharacterEncoding CharacterEncodingsPath CharacteristicFunction CharacteristicPolynomial CharacterName CharacterRange Characters ChartBaseStyle ChartElementData ChartElementDataFunction ChartElementFunction ChartElements ChartLabels ChartLayout ChartLegends ChartStyle Chebyshev1FilterModel Chebyshev2FilterModel ChebyshevDistance ChebyshevT ChebyshevU Check CheckAbort CheckAll Checkbox CheckboxBar CheckboxBox CheckboxBoxOptions ChemicalData ChessboardDistance ChiDistribution ChineseRemainder ChiSquareDistribution ChoiceButtons ChoiceDialog CholeskyDecomposition Chop ChromaticityPlot ChromaticityPlot3D ChromaticPolynomial Circle CircleBox CircleDot CircleMinus CirclePlus CirclePoints CircleThrough CircleTimes CirculantGraph CircularOrthogonalMatrixDistribution CircularQuaternionMatrixDistribution CircularRealMatrixDistribution CircularSymplecticMatrixDistribution CircularUnitaryMatrixDistribution Circumsphere CityData ClassifierFunction ClassifierInformation ClassifierMeasurements ClassifierMeasurementsObject Classify ClassPriors Clear ClearAll ClearAttributes ClearCookies ClearPermissions ClearSystemCache ClebschGordan ClickPane Clip ClipboardNotebook ClipFill ClippingStyle ClipPlanes ClipPlanesStyle ClipRange Clock ClockGauge ClockwiseContourIntegral Close Closed CloseKernels ClosenessCentrality Closing ClosingAutoSave ClosingEvent CloudAccountData CloudBase CloudConnect CloudDeploy CloudDirectory CloudDisconnect CloudEvaluate CloudExport CloudExpression CloudExpressions CloudFunction CloudGet CloudImport CloudLoggingData CloudObject CloudObjectInformation CloudObjectInformationData CloudObjectNameFormat CloudObjects CloudObjectURLType CloudPublish CloudPut CloudRenderingMethod CloudSave CloudShare CloudSubmit CloudSymbol CloudUnshare ClusterClassify ClusterDissimilarityFunction ClusteringComponents ClusteringTree CMYKColor Coarse CodeAssistOptions Coefficient CoefficientArrays CoefficientDomain CoefficientList CoefficientRules CoifletWavelet Collect Colon ColonForm ColorBalance ColorCombine ColorConvert ColorCoverage ColorData ColorDataFunction ColorDetect ColorDistance ColorFunction ColorFunctionScaling Colorize ColorNegate ColorOutput ColorProfileData ColorQ ColorQuantize ColorReplace ColorRules ColorSelectorSettings ColorSeparate ColorSetter ColorSetterBox ColorSetterBoxOptions ColorSlider ColorsNear ColorSpace ColorToneMapping Column ColumnAlignments ColumnBackgrounds ColumnForm ColumnLines ColumnsEqual ColumnSpacings ColumnWidths CombinedEntityClass CombinerFunction CometData CommonDefaultFormatTypes Commonest CommonestFilter CommonName CommonUnits CommunityBoundaryStyle CommunityGraphPlot CommunityLabels CommunityRegionStyle CompanyData CompatibleUnitQ CompilationOptions CompilationTarget Compile Compiled CompiledCodeFunction CompiledFunction CompilerOptions Complement CompleteGraph CompleteGraphQ CompleteKaryTree CompletionsListPacket Complex Complexes ComplexExpand ComplexInfinity ComplexityFunction ComplexListPlot ComplexPlot ComplexPlot3D ComponentMeasurements ComponentwiseContextMenu Compose ComposeList ComposeSeries CompositeQ Composition CompoundElement CompoundExpression CompoundPoissonDistribution CompoundPoissonProcess CompoundRenewalProcess Compress CompressedData ComputeUncertainty Condition ConditionalExpression Conditioned Cone ConeBox ConfidenceLevel ConfidenceRange ConfidenceTransform ConfigurationPath ConformAudio ConformImages Congruent ConicHullRegion ConicHullRegion3DBox ConicHullRegionBox ConicOptimization Conjugate ConjugateTranspose Conjunction Connect ConnectedComponents ConnectedGraphComponents ConnectedGraphQ ConnectedMeshComponents ConnectedMoleculeComponents ConnectedMoleculeQ ConnectionSettings ConnectLibraryCallbackFunction ConnectSystemModelComponents ConnesWindow ConoverTest ConsoleMessage ConsoleMessagePacket ConsolePrint Constant ConstantArray ConstantArrayLayer ConstantImage ConstantPlusLayer ConstantRegionQ Constants ConstantTimesLayer ConstellationData ConstrainedMax ConstrainedMin Construct Containing ContainsAll ContainsAny ContainsExactly ContainsNone ContainsOnly ContentFieldOptions ContentLocationFunction ContentObject ContentPadding ContentsBoundingBox ContentSelectable ContentSize Context ContextMenu Contexts ContextToFileName Continuation Continue ContinuedFraction ContinuedFractionK ContinuousAction ContinuousMarkovProcess ContinuousTask ContinuousTimeModelQ ContinuousWaveletData ContinuousWaveletTransform ContourDetect ContourGraphics ContourIntegral ContourLabels ContourLines ContourPlot ContourPlot3D Contours ContourShading ContourSmoothing ContourStyle ContraharmonicMean ContrastiveLossLayer Control ControlActive ControlAlignment ControlGroupContentsBox ControllabilityGramian ControllabilityMatrix ControllableDecomposition ControllableModelQ ControllerDuration ControllerInformation ControllerInformationData ControllerLinking ControllerManipulate ControllerMethod ControllerPath ControllerState ControlPlacement ControlsRendering ControlType Convergents ConversionOptions ConversionRules ConvertToBitmapPacket ConvertToPostScript ConvertToPostScriptPacket ConvexHullMesh ConvexPolygonQ ConvexPolyhedronQ ConvolutionLayer Convolve ConwayGroupCo1 ConwayGroupCo2 ConwayGroupCo3 CookieFunction Cookies CoordinateBoundingBox CoordinateBoundingBoxArray CoordinateBounds CoordinateBoundsArray CoordinateChartData CoordinatesToolOptions CoordinateTransform CoordinateTransformData CoprimeQ Coproduct CopulaDistribution Copyable CopyDatabin CopyDirectory CopyFile CopyTag CopyToClipboard CornerFilter CornerNeighbors Correlation CorrelationDistance CorrelationFunction CorrelationTest Cos Cosh CoshIntegral CosineDistance CosineWindow CosIntegral Cot Coth Count CountDistinct CountDistinctBy CounterAssignments CounterBox CounterBoxOptions CounterClockwiseContourIntegral CounterEvaluator CounterFunction CounterIncrements CounterStyle CounterStyleMenuListing CountRoots CountryData Counts CountsBy Covariance CovarianceEstimatorFunction CovarianceFunction CoxianDistribution CoxIngersollRossProcess CoxModel CoxModelFit CramerVonMisesTest CreateArchive CreateCellID CreateChannel CreateCloudExpression CreateDatabin CreateDataSystemModel CreateDialog CreateDirectory CreateDocument CreateFile CreateIntermediateDirectories CreateManagedLibraryExpression CreateNotebook CreatePalette CreatePalettePacket CreatePermissionsGroup CreateScheduledTask CreateSearchIndex CreateSystemModel CreateTemporary CreateUUID CreateWindow CriterionFunction CriticalityFailureImportance CriticalitySuccessImportance CriticalSection Cross CrossEntropyLossLayer CrossingCount CrossingDetect CrossingPolygon CrossMatrix Csc Csch CTCLossLayer Cube CubeRoot Cubics Cuboid CuboidBox Cumulant CumulantGeneratingFunction Cup CupCap Curl CurlyDoubleQuote CurlyQuote CurrencyConvert CurrentDate CurrentImage CurrentlySpeakingPacket CurrentNotebookImage CurrentScreenImage CurrentValue Curry CurvatureFlowFilter CurveClosed Cyan CycleGraph CycleIndexPolynomial Cycles CyclicGroup Cyclotomic Cylinder CylinderBox CylindricalDecomposition D DagumDistribution DamData DamerauLevenshteinDistance DampingFactor Darker Dashed Dashing DatabaseConnect DatabaseDisconnect DatabaseReference Databin DatabinAdd DatabinRemove Databins DatabinUpload DataCompression DataDistribution DataRange DataReversed Dataset Date DateBounds Dated DateDelimiters DateDifference DatedUnit DateFormat DateFunction DateHistogram DateList DateListLogPlot DateListPlot DateListStepPlot DateObject DateObjectQ DateOverlapsQ DatePattern DatePlus DateRange DateReduction DateString DateTicksFormat DateValue DateWithinQ DaubechiesWavelet DavisDistribution DawsonF DayCount DayCountConvention DayHemisphere DaylightQ DayMatchQ DayName DayNightTerminator DayPlus DayRange DayRound DeBruijnGraph DeBruijnSequence Debug DebugTag Decapitalize Decimal DecimalForm DeclareKnownSymbols DeclarePackage Decompose DeconvolutionLayer Decrement Decrypt DecryptFile DedekindEta DeepSpaceProbeData Default DefaultAxesStyle DefaultBaseStyle DefaultBoxStyle DefaultButton DefaultColor DefaultControlPlacement DefaultDuplicateCellStyle DefaultDuration DefaultElement DefaultFaceGridsStyle DefaultFieldHintStyle DefaultFont DefaultFontProperties DefaultFormatType DefaultFormatTypeForStyle DefaultFrameStyle DefaultFrameTicksStyle DefaultGridLinesStyle DefaultInlineFormatType DefaultInputFormatType DefaultLabelStyle DefaultMenuStyle DefaultNaturalLanguage DefaultNewCellStyle DefaultNewInlineCellStyle DefaultNotebook DefaultOptions DefaultOutputFormatType DefaultPrintPrecision DefaultStyle DefaultStyleDefinitions DefaultTextFormatType DefaultTextInlineFormatType DefaultTicksStyle DefaultTooltipStyle DefaultValue DefaultValues Defer DefineExternal DefineInputStreamMethod DefineOutputStreamMethod DefineResourceFunction Definition Degree DegreeCentrality DegreeGraphDistribution DegreeLexicographic DegreeReverseLexicographic DEigensystem DEigenvalues Deinitialization Del DelaunayMesh Delayed Deletable Delete DeleteAnomalies DeleteBorderComponents DeleteCases DeleteChannel DeleteCloudExpression DeleteContents DeleteDirectory DeleteDuplicates DeleteDuplicatesBy DeleteFile DeleteMissing DeleteObject DeletePermissionsKey DeleteSearchIndex DeleteSmallComponents DeleteStopwords DeleteWithContents DeletionWarning DelimitedArray DelimitedSequence Delimiter DelimiterFlashTime DelimiterMatching Delimiters DeliveryFunction Dendrogram Denominator DensityGraphics DensityHistogram DensityPlot DensityPlot3D DependentVariables Deploy Deployed Depth DepthFirstScan Derivative DerivativeFilter DerivedKey DescriptorStateSpace DesignMatrix DestroyAfterEvaluation Det DeviceClose DeviceConfigure DeviceExecute DeviceExecuteAsynchronous DeviceObject DeviceOpen DeviceOpenQ DeviceRead DeviceReadBuffer DeviceReadLatest DeviceReadList DeviceReadTimeSeries Devices DeviceStreams DeviceWrite DeviceWriteBuffer DGaussianWavelet DiacriticalPositioning Diagonal DiagonalizableMatrixQ DiagonalMatrix DiagonalMatrixQ Dialog DialogIndent DialogInput DialogLevel DialogNotebook DialogProlog DialogReturn DialogSymbols Diamond DiamondMatrix DiceDissimilarity DictionaryLookup DictionaryWordQ DifferenceDelta DifferenceOrder DifferenceQuotient DifferenceRoot DifferenceRootReduce Differences DifferentialD DifferentialRoot DifferentialRootReduce DifferentiatorFilter DigitalSignature DigitBlock DigitBlockMinimum DigitCharacter DigitCount DigitQ DihedralAngle DihedralGroup Dilation DimensionalCombinations DimensionalMeshComponents DimensionReduce DimensionReducerFunction DimensionReduction Dimensions DiracComb DiracDelta DirectedEdge DirectedEdges DirectedGraph DirectedGraphQ DirectedInfinity Direction Directive Directory DirectoryName DirectoryQ DirectoryStack DirichletBeta DirichletCharacter DirichletCondition DirichletConvolve DirichletDistribution DirichletEta DirichletL DirichletLambda DirichletTransform DirichletWindow DisableConsolePrintPacket DisableFormatting DiscreteChirpZTransform DiscreteConvolve DiscreteDelta DiscreteHadamardTransform DiscreteIndicator DiscreteLimit DiscreteLQEstimatorGains DiscreteLQRegulatorGains DiscreteLyapunovSolve DiscreteMarkovProcess DiscreteMaxLimit DiscreteMinLimit DiscretePlot DiscretePlot3D DiscreteRatio DiscreteRiccatiSolve DiscreteShift DiscreteTimeModelQ DiscreteUniformDistribution DiscreteVariables DiscreteWaveletData DiscreteWaveletPacketTransform DiscreteWaveletTransform DiscretizeGraphics DiscretizeRegion Discriminant DisjointQ Disjunction Disk DiskBox DiskMatrix DiskSegment Dispatch DispatchQ DispersionEstimatorFunction Display DisplayAllSteps DisplayEndPacket DisplayFlushImagePacket DisplayForm DisplayFunction DisplayPacket DisplayRules DisplaySetSizePacket DisplayString DisplayTemporary DisplayWith DisplayWithRef DisplayWithVariable DistanceFunction DistanceMatrix DistanceTransform Distribute Distributed DistributedContexts DistributeDefinitions DistributionChart DistributionDomain DistributionFitTest DistributionParameterAssumptions DistributionParameterQ Dithering Div Divergence Divide DivideBy Dividers DivideSides Divisible Divisors DivisorSigma DivisorSum DMSList DMSString Do DockedCells DocumentGenerator DocumentGeneratorInformation DocumentGeneratorInformationData DocumentGenerators DocumentNotebook DocumentWeightingRules Dodecahedron DomainRegistrationInformation DominantColors DOSTextFormat Dot DotDashed DotEqual DotLayer DotPlusLayer Dotted DoubleBracketingBar DoubleContourIntegral DoubleDownArrow DoubleLeftArrow DoubleLeftRightArrow DoubleLeftTee DoubleLongLeftArrow DoubleLongLeftRightArrow DoubleLongRightArrow DoubleRightArrow DoubleRightTee DoubleUpArrow DoubleUpDownArrow DoubleVerticalBar DoublyInfinite Down DownArrow DownArrowBar DownArrowUpArrow DownLeftRightVector DownLeftTeeVector DownLeftVector DownLeftVectorBar DownRightTeeVector DownRightVector DownRightVectorBar Downsample DownTee DownTeeArrow DownValues DragAndDrop DrawEdges DrawFrontFaces DrawHighlighted Drop DropoutLayer DSolve DSolveValue Dt DualLinearProgramming DualPolyhedron DualSystemsModel DumpGet DumpSave DuplicateFreeQ Duration Dynamic DynamicBox DynamicBoxOptions DynamicEvaluationTimeout DynamicGeoGraphics DynamicImage DynamicLocation DynamicModule DynamicModuleBox DynamicModuleBoxOptions DynamicModuleParent DynamicModuleValues DynamicName DynamicNamespace DynamicReference DynamicSetting DynamicUpdating DynamicWrapper DynamicWrapperBox DynamicWrapperBoxOptions E EarthImpactData EarthquakeData EccentricityCentrality Echo EchoFunction EclipseType EdgeAdd EdgeBetweennessCentrality EdgeCapacity EdgeCapForm EdgeColor EdgeConnectivity EdgeContract EdgeCost EdgeCount EdgeCoverQ EdgeCycleMatrix EdgeDashing EdgeDelete EdgeDetect EdgeForm EdgeIndex EdgeJoinForm EdgeLabeling EdgeLabels EdgeLabelStyle EdgeList EdgeOpacity EdgeQ EdgeRenderingFunction EdgeRules EdgeShapeFunction EdgeStyle EdgeThickness EdgeWeight EdgeWeightedGraphQ Editable EditButtonSettings EditCellTagsSettings EditDistance EffectiveInterest Eigensystem Eigenvalues EigenvectorCentrality Eigenvectors Element ElementData ElementwiseLayer ElidedForms Eliminate EliminationOrder Ellipsoid EllipticE EllipticExp EllipticExpPrime EllipticF EllipticFilterModel EllipticK EllipticLog EllipticNomeQ EllipticPi EllipticReducedHalfPeriods EllipticTheta EllipticThetaPrime EmbedCode EmbeddedHTML EmbeddedService EmbeddingLayer EmbeddingObject EmitSound EmphasizeSyntaxErrors EmpiricalDistribution Empty EmptyGraphQ EmptyRegion EnableConsolePrintPacket Enabled Encode Encrypt EncryptedObject EncryptFile End EndAdd EndDialogPacket EndFrontEndInteractionPacket EndOfBuffer EndOfFile EndOfLine EndOfString EndPackage EngineEnvironment EngineeringForm Enter EnterExpressionPacket EnterTextPacket Entity EntityClass EntityClassList EntityCopies EntityFunction EntityGroup EntityInstance EntityList EntityPrefetch EntityProperties EntityProperty EntityPropertyClass EntityRegister EntityStore EntityStores EntityTypeName EntityUnregister EntityValue Entropy EntropyFilter Environment Epilog EpilogFunction Equal EqualColumns EqualRows EqualTilde EqualTo EquatedTo Equilibrium EquirippleFilterKernel Equivalent Erf Erfc Erfi ErlangB ErlangC ErlangDistribution Erosion ErrorBox ErrorBoxOptions ErrorNorm ErrorPacket ErrorsDialogSettings EscapeRadius EstimatedBackground EstimatedDistribution EstimatedProcess EstimatorGains EstimatorRegulator EuclideanDistance EulerAngles EulerCharacteristic EulerE EulerGamma EulerianGraphQ EulerMatrix EulerPhi Evaluatable Evaluate Evaluated EvaluatePacket EvaluateScheduledTask EvaluationBox EvaluationCell EvaluationCompletionAction EvaluationData EvaluationElements EvaluationEnvironment EvaluationMode EvaluationMonitor EvaluationNotebook EvaluationObject EvaluationOrder Evaluator EvaluatorNames EvenQ EventData EventEvaluator EventHandler EventHandlerTag EventLabels EventSeries ExactBlackmanWindow ExactNumberQ ExactRootIsolation ExampleData Except ExcludedForms ExcludedLines ExcludedPhysicalQuantities ExcludePods Exclusions ExclusionsStyle Exists Exit ExitDialog ExoplanetData Exp Expand ExpandAll ExpandDenominator ExpandFileName ExpandNumerator Expectation ExpectationE ExpectedValue ExpGammaDistribution ExpIntegralE ExpIntegralEi ExpirationDate Exponent ExponentFunction ExponentialDistribution ExponentialFamily ExponentialGeneratingFunction ExponentialMovingAverage ExponentialPowerDistribution ExponentPosition ExponentStep Export ExportAutoReplacements ExportByteArray ExportForm ExportPacket ExportString Expression ExpressionCell ExpressionPacket ExpressionUUID ExpToTrig ExtendedEntityClass ExtendedGCD Extension ExtentElementFunction ExtentMarkers ExtentSize ExternalBundle ExternalCall ExternalDataCharacterEncoding ExternalEvaluate ExternalFunction ExternalFunctionName ExternalObject ExternalOptions ExternalSessionObject ExternalSessions ExternalTypeSignature ExternalValue Extract ExtractArchive ExtractLayer ExtremeValueDistribution FaceForm FaceGrids FaceGridsStyle FacialFeatures Factor FactorComplete Factorial Factorial2 FactorialMoment FactorialMomentGeneratingFunction FactorialPower FactorInteger FactorList FactorSquareFree FactorSquareFreeList FactorTerms FactorTermsList Fail Failure FailureAction FailureDistribution FailureQ False FareySequence FARIMAProcess FeatureDistance FeatureExtract FeatureExtraction FeatureExtractor FeatureExtractorFunction FeatureNames FeatureNearest FeatureSpacePlot FeatureSpacePlot3D FeatureTypes FEDisableConsolePrintPacket FeedbackLinearize FeedbackSector FeedbackSectorStyle FeedbackType FEEnableConsolePrintPacket FetalGrowthData Fibonacci Fibonorial FieldCompletionFunction FieldHint FieldHintStyle FieldMasked FieldSize File FileBaseName FileByteCount FileConvert FileDate FileExistsQ FileExtension FileFormat FileHandler FileHash FileInformation FileName FileNameDepth FileNameDialogSettings FileNameDrop FileNameForms FileNameJoin FileNames FileNameSetter FileNameSplit FileNameTake FilePrint FileSize FileSystemMap FileSystemScan FileTemplate FileTemplateApply FileType FilledCurve FilledCurveBox FilledCurveBoxOptions Filling FillingStyle FillingTransform FilteredEntityClass FilterRules FinancialBond FinancialData FinancialDerivative FinancialIndicator Find FindAnomalies FindArgMax FindArgMin FindChannels FindClique FindClusters FindCookies FindCurvePath FindCycle FindDevices FindDistribution FindDistributionParameters FindDivisions FindEdgeCover FindEdgeCut FindEdgeIndependentPaths FindEquationalProof FindEulerianCycle FindExternalEvaluators FindFaces FindFile FindFit FindFormula FindFundamentalCycles FindGeneratingFunction FindGeoLocation FindGeometricConjectures FindGeometricTransform FindGraphCommunities FindGraphIsomorphism FindGraphPartition FindHamiltonianCycle FindHamiltonianPath FindHiddenMarkovStates FindIndependentEdgeSet FindIndependentVertexSet FindInstance FindIntegerNullVector FindKClan FindKClique FindKClub FindKPlex FindLibrary FindLinearRecurrence FindList FindMatchingColor FindMaximum FindMaximumFlow FindMaxValue FindMeshDefects FindMinimum FindMinimumCostFlow FindMinimumCut FindMinValue FindMoleculeSubstructure FindPath FindPeaks FindPermutation FindPostmanTour FindProcessParameters FindRepeat FindRoot FindSequenceFunction FindSettings FindShortestPath FindShortestTour FindSpanningTree FindSystemModelEquilibrium FindTextualAnswer FindThreshold FindTransientRepeat FindVertexCover FindVertexCut FindVertexIndependentPaths Fine FinishDynamic FiniteAbelianGroupCount FiniteGroupCount FiniteGroupData First FirstCase FirstPassageTimeDistribution FirstPosition FischerGroupFi22 FischerGroupFi23 FischerGroupFi24Prime FisherHypergeometricDistribution FisherRatioTest FisherZDistribution Fit FitAll FitRegularization FittedModel FixedOrder FixedPoint FixedPointList FlashSelection Flat Flatten FlattenAt FlattenLayer FlatTopWindow FlipView Floor FlowPolynomial FlushPrintOutputPacket Fold FoldList FoldPair FoldPairList FollowRedirects Font FontColor FontFamily FontForm FontName FontOpacity FontPostScriptName FontProperties FontReencoding FontSize FontSlant FontSubstitutions FontTracking FontVariations FontWeight For ForAll Format FormatRules FormatType FormatTypeAutoConvert FormatValues FormBox FormBoxOptions FormControl FormFunction FormLayoutFunction FormObject FormPage FormTheme FormulaData FormulaLookup FortranForm Forward ForwardBackward Fourier FourierCoefficient FourierCosCoefficient FourierCosSeries FourierCosTransform FourierDCT FourierDCTFilter FourierDCTMatrix FourierDST FourierDSTMatrix FourierMatrix FourierParameters FourierSequenceTransform FourierSeries FourierSinCoefficient FourierSinSeries FourierSinTransform FourierTransform FourierTrigSeries FractionalBrownianMotionProcess FractionalGaussianNoiseProcess FractionalPart FractionBox FractionBoxOptions FractionLine Frame FrameBox FrameBoxOptions Framed FrameInset FrameLabel Frameless FrameMargins FrameRate FrameStyle FrameTicks FrameTicksStyle FRatioDistribution FrechetDistribution FreeQ FrenetSerretSystem FrequencySamplingFilterKernel FresnelC FresnelF FresnelG FresnelS Friday FrobeniusNumber FrobeniusSolve FromAbsoluteTime FromCharacterCode FromCoefficientRules FromContinuedFraction FromDate FromDigits FromDMS FromEntity FromJulianDate FromLetterNumber FromPolarCoordinates FromRomanNumeral FromSphericalCoordinates FromUnixTime Front FrontEndDynamicExpression FrontEndEventActions FrontEndExecute FrontEndObject FrontEndResource FrontEndResourceString FrontEndStackSize FrontEndToken FrontEndTokenExecute FrontEndValueCache FrontEndVersion FrontFaceColor FrontFaceOpacity Full FullAxes FullDefinition FullForm FullGraphics FullInformationOutputRegulator FullOptions FullRegion FullSimplify Function FunctionCompile FunctionCompileExport FunctionCompileExportByteArray FunctionCompileExportLibrary FunctionCompileExportString FunctionDomain FunctionExpand FunctionInterpolation FunctionPeriod FunctionRange FunctionSpace FussellVeselyImportanceGaborFilter GaborMatrix GaborWavelet GainMargins GainPhaseMargins GalaxyData GalleryView Gamma GammaDistribution GammaRegularized GapPenalty GARCHProcess GatedRecurrentLayer Gather GatherBy GaugeFaceElementFunction GaugeFaceStyle GaugeFrameElementFunction GaugeFrameSize GaugeFrameStyle GaugeLabels GaugeMarkers GaugeStyle GaussianFilter GaussianIntegers GaussianMatrix GaussianOrthogonalMatrixDistribution GaussianSymplecticMatrixDistribution GaussianUnitaryMatrixDistribution GaussianWindow GCD GegenbauerC General GeneralizedLinearModelFit GenerateAsymmetricKeyPair GenerateConditions GeneratedCell GeneratedDocumentBinding GenerateDerivedKey GenerateDigitalSignature GenerateDocument GeneratedParameters GeneratedQuantityMagnitudes GenerateHTTPResponse GenerateSecuredAuthenticationKey GenerateSymmetricKey GeneratingFunction GeneratorDescription GeneratorHistoryLength GeneratorOutputType Generic GenericCylindricalDecomposition GenomeData GenomeLookup GeoAntipode GeoArea GeoArraySize GeoBackground GeoBoundingBox GeoBounds GeoBoundsRegion GeoBubbleChart GeoCenter GeoCircle GeodesicClosing GeodesicDilation GeodesicErosion GeodesicOpening GeoDestination GeodesyData GeoDirection GeoDisk GeoDisplacement GeoDistance GeoDistanceList GeoElevationData GeoEntities GeoGraphics GeogravityModelData GeoGridDirectionDifference GeoGridLines GeoGridLinesStyle GeoGridPosition GeoGridRange GeoGridRangePadding GeoGridUnitArea GeoGridUnitDistance GeoGridVector GeoGroup GeoHemisphere GeoHemisphereBoundary GeoHistogram GeoIdentify GeoImage GeoLabels GeoLength GeoListPlot GeoLocation GeologicalPeriodData GeomagneticModelData GeoMarker GeometricAssertion GeometricBrownianMotionProcess GeometricDistribution GeometricMean GeometricMeanFilter GeometricScene GeometricTransformation GeometricTransformation3DBox GeometricTransformation3DBoxOptions GeometricTransformationBox GeometricTransformationBoxOptions GeoModel GeoNearest GeoPath GeoPosition GeoPositionENU GeoPositionXYZ GeoProjection GeoProjectionData GeoRange GeoRangePadding GeoRegionValuePlot GeoResolution GeoScaleBar GeoServer GeoSmoothHistogram GeoStreamPlot GeoStyling GeoStylingImageFunction GeoVariant GeoVector GeoVectorENU GeoVectorPlot GeoVectorXYZ GeoVisibleRegion GeoVisibleRegionBoundary GeoWithinQ GeoZoomLevel GestureHandler GestureHandlerTag Get GetBoundingBoxSizePacket GetContext GetEnvironment GetFileName GetFrontEndOptionsDataPacket GetLinebreakInformationPacket GetMenusPacket GetPageBreakInformationPacket Glaisher GlobalClusteringCoefficient GlobalPreferences GlobalSession Glow GoldenAngle GoldenRatio GompertzMakehamDistribution GoodmanKruskalGamma GoodmanKruskalGammaTest Goto Grad Gradient GradientFilter GradientOrientationFilter GrammarApply GrammarRules GrammarToken Graph Graph3D GraphAssortativity GraphAutomorphismGroup GraphCenter GraphComplement GraphData GraphDensity GraphDiameter GraphDifference GraphDisjointUnion GraphDistance GraphDistanceMatrix GraphElementData GraphEmbedding GraphHighlight GraphHighlightStyle GraphHub Graphics Graphics3D Graphics3DBox Graphics3DBoxOptions GraphicsArray GraphicsBaseline GraphicsBox GraphicsBoxOptions GraphicsColor GraphicsColumn GraphicsComplex GraphicsComplex3DBox GraphicsComplex3DBoxOptions GraphicsComplexBox GraphicsComplexBoxOptions GraphicsContents GraphicsData GraphicsGrid GraphicsGridBox GraphicsGroup GraphicsGroup3DBox GraphicsGroup3DBoxOptions GraphicsGroupBox GraphicsGroupBoxOptions GraphicsGrouping GraphicsHighlightColor GraphicsRow GraphicsSpacing GraphicsStyle GraphIntersection GraphLayout GraphLinkEfficiency GraphPeriphery GraphPlot GraphPlot3D GraphPower GraphPropertyDistribution GraphQ GraphRadius GraphReciprocity GraphRoot GraphStyle GraphUnion Gray GrayLevel Greater GreaterEqual GreaterEqualLess GreaterEqualThan GreaterFullEqual GreaterGreater GreaterLess GreaterSlantEqual GreaterThan GreaterTilde Green GreenFunction Grid GridBaseline GridBox GridBoxAlignment GridBoxBackground GridBoxDividers GridBoxFrame GridBoxItemSize GridBoxItemStyle GridBoxOptions GridBoxSpacings GridCreationSettings GridDefaultElement GridElementStyleOptions GridFrame GridFrameMargins GridGraph GridLines GridLinesStyle GroebnerBasis GroupActionBase GroupBy GroupCentralizer GroupElementFromWord GroupElementPosition GroupElementQ GroupElements GroupElementToWord GroupGenerators Groupings GroupMultiplicationTable GroupOrbits GroupOrder GroupPageBreakWithin GroupSetwiseStabilizer GroupStabilizer GroupStabilizerChain GroupTogetherGrouping GroupTogetherNestedGrouping GrowCutComponents Gudermannian GuidedFilter GumbelDistribution HaarWavelet HadamardMatrix HalfLine HalfNormalDistribution HalfPlane HalfSpace HamiltonianGraphQ HammingDistance HammingWindow HandlerFunctions HandlerFunctionsKeys HankelH1 HankelH2 HankelMatrix HankelTransform HannPoissonWindow HannWindow HaradaNortonGroupHN HararyGraph HarmonicMean HarmonicMeanFilter HarmonicNumber Hash Haversine HazardFunction Head HeadCompose HeaderLines Heads HeavisideLambda HeavisidePi HeavisideTheta HeldGroupHe HeldPart HelpBrowserLookup HelpBrowserNotebook HelpBrowserSettings Here HermiteDecomposition HermiteH HermitianMatrixQ HessenbergDecomposition Hessian HexadecimalCharacter Hexahedron HexahedronBox HexahedronBoxOptions HiddenMarkovProcess HiddenSurface Highlighted HighlightGraph HighlightImage HighlightMesh HighpassFilter HigmanSimsGroupHS HilbertCurve HilbertFilter HilbertMatrix Histogram Histogram3D HistogramDistribution HistogramList HistogramTransform HistogramTransformInterpolation HistoricalPeriodData HitMissTransform HITSCentrality HjorthDistribution HodgeDual HoeffdingD HoeffdingDTest Hold HoldAll HoldAllComplete HoldComplete HoldFirst HoldForm HoldPattern HoldRest HolidayCalendar HomeDirectory HomePage Horizontal HorizontalForm HorizontalGauge HorizontalScrollPosition HornerForm HostLookup HotellingTSquareDistribution HoytDistribution HTMLSave HTTPErrorResponse HTTPRedirect HTTPRequest HTTPRequestData HTTPResponse Hue HumanGrowthData HumpDownHump HumpEqual HurwitzLerchPhi HurwitzZeta HyperbolicDistribution HypercubeGraph HyperexponentialDistribution Hyperfactorial Hypergeometric0F1 Hypergeometric0F1Regularized Hypergeometric1F1 Hypergeometric1F1Regularized Hypergeometric2F1 Hypergeometric2F1Regularized HypergeometricDistribution HypergeometricPFQ HypergeometricPFQRegularized HypergeometricU Hyperlink HyperlinkCreationSettings Hyperplane Hyphenation HyphenationOptions HypoexponentialDistribution HypothesisTestData I IconData Iconize IconizedObject IconRules Icosahedron Identity IdentityMatrix If IgnoreCase IgnoreDiacritics IgnorePunctuation IgnoreSpellCheck IgnoringInactive Im Image Image3D Image3DProjection Image3DSlices ImageAccumulate ImageAdd ImageAdjust ImageAlign ImageApply ImageApplyIndexed ImageAspectRatio ImageAssemble ImageAugmentationLayer ImageBoundingBoxes ImageCache ImageCacheValid ImageCapture ImageCaptureFunction ImageCases ImageChannels ImageClip ImageCollage ImageColorSpace ImageCompose ImageContainsQ ImageContents ImageConvolve ImageCooccurrence ImageCorners ImageCorrelate ImageCorrespondingPoints ImageCrop ImageData ImageDeconvolve ImageDemosaic ImageDifference ImageDimensions ImageDisplacements ImageDistance ImageEffect ImageExposureCombine ImageFeatureTrack ImageFileApply ImageFileFilter ImageFileScan ImageFilter ImageFocusCombine ImageForestingComponents ImageFormattingWidth ImageForwardTransformation ImageGraphics ImageHistogram ImageIdentify ImageInstanceQ ImageKeypoints ImageLevels ImageLines ImageMargins ImageMarker ImageMarkers ImageMeasurements ImageMesh ImageMultiply ImageOffset ImagePad ImagePadding ImagePartition ImagePeriodogram ImagePerspectiveTransformation ImagePosition ImagePreviewFunction ImagePyramid ImagePyramidApply ImageQ ImageRangeCache ImageRecolor ImageReflect ImageRegion ImageResize ImageResolution ImageRestyle ImageRotate ImageRotated ImageSaliencyFilter ImageScaled ImageScan ImageSize ImageSizeAction ImageSizeCache ImageSizeMultipliers ImageSizeRaw ImageSubtract ImageTake ImageTransformation ImageTrim ImageType ImageValue ImageValuePositions ImagingDevice ImplicitRegion Implies Import ImportAutoReplacements ImportByteArray ImportOptions ImportString ImprovementImportance In Inactivate Inactive IncidenceGraph IncidenceList IncidenceMatrix IncludeAromaticBonds IncludeConstantBasis IncludeDefinitions IncludeDirectories IncludeFileExtension IncludeGeneratorTasks IncludeHydrogens IncludeInflections IncludeMetaInformation IncludePods IncludeQuantities IncludeRelatedTables IncludeSingularTerm IncludeWindowTimes Increment IndefiniteMatrixQ Indent IndentingNewlineSpacings IndentMaxFraction IndependenceTest IndependentEdgeSetQ IndependentPhysicalQuantity IndependentUnit IndependentUnitDimension IndependentVertexSetQ Indeterminate IndeterminateThreshold IndexCreationOptions Indexed IndexGraph IndexTag Inequality InexactNumberQ InexactNumbers InfiniteLine InfinitePlane Infinity Infix InflationAdjust InflationMethod Information InformationData InformationDataGrid Inherited InheritScope InhomogeneousPoissonProcess InitialEvaluationHistory Initialization InitializationCell InitializationCellEvaluation InitializationCellWarning InitializationObjects InitializationValue Initialize InitialSeeding InlineCounterAssignments InlineCounterIncrements InlineRules Inner InnerPolygon InnerPolyhedron Inpaint Input InputAliases InputAssumptions InputAutoReplacements InputField InputFieldBox InputFieldBoxOptions InputForm InputGrouping InputNamePacket InputNotebook InputPacket InputSettings InputStream InputString InputStringPacket InputToBoxFormPacket Insert InsertionFunction InsertionPointObject InsertLinebreaks InsertResults Inset Inset3DBox Inset3DBoxOptions InsetBox InsetBoxOptions Insphere Install InstallService InstanceNormalizationLayer InString Integer IntegerDigits IntegerExponent IntegerLength IntegerName IntegerPart IntegerPartitions IntegerQ IntegerReverse Integers IntegerString Integral Integrate Interactive InteractiveTradingChart Interlaced Interleaving InternallyBalancedDecomposition InterpolatingFunction InterpolatingPolynomial Interpolation InterpolationOrder InterpolationPoints InterpolationPrecision Interpretation InterpretationBox InterpretationBoxOptions InterpretationFunction Interpreter InterpretTemplate InterquartileRange Interrupt InterruptSettings IntersectingQ Intersection Interval IntervalIntersection IntervalMarkers IntervalMarkersStyle IntervalMemberQ IntervalSlider IntervalUnion Into Inverse InverseBetaRegularized InverseCDF InverseChiSquareDistribution InverseContinuousWaveletTransform InverseDistanceTransform InverseEllipticNomeQ InverseErf InverseErfc InverseFourier InverseFourierCosTransform InverseFourierSequenceTransform InverseFourierSinTransform InverseFourierTransform InverseFunction InverseFunctions InverseGammaDistribution InverseGammaRegularized InverseGaussianDistribution InverseGudermannian InverseHankelTransform InverseHaversine InverseImagePyramid InverseJacobiCD InverseJacobiCN InverseJacobiCS InverseJacobiDC InverseJacobiDN InverseJacobiDS InverseJacobiNC InverseJacobiND InverseJacobiNS InverseJacobiSC InverseJacobiSD InverseJacobiSN InverseLaplaceTransform InverseMellinTransform InversePermutation InverseRadon InverseRadonTransform InverseSeries InverseShortTimeFourier InverseSpectrogram InverseSurvivalFunction InverseTransformedRegion InverseWaveletTransform InverseWeierstrassP InverseWishartMatrixDistribution InverseZTransform Invisible InvisibleApplication InvisibleTimes IPAddress IrreduciblePolynomialQ IslandData IsolatingInterval IsomorphicGraphQ IsotopeData Italic Item ItemAspectRatio ItemBox ItemBoxOptions ItemSize ItemStyle ItoProcess JaccardDissimilarity JacobiAmplitude Jacobian JacobiCD JacobiCN JacobiCS JacobiDC JacobiDN JacobiDS JacobiNC JacobiND JacobiNS JacobiP JacobiSC JacobiSD JacobiSN JacobiSymbol JacobiZeta JankoGroupJ1 JankoGroupJ2 JankoGroupJ3 JankoGroupJ4 JarqueBeraALMTest JohnsonDistribution Join JoinAcross Joined JoinedCurve JoinedCurveBox JoinedCurveBoxOptions JoinForm JordanDecomposition JordanModelDecomposition JulianDate JuliaSetBoettcher JuliaSetIterationCount JuliaSetPlot JuliaSetPoints K KagiChart KaiserBesselWindow KaiserWindow KalmanEstimator KalmanFilter KarhunenLoeveDecomposition KaryTree KatzCentrality KCoreComponents KDistribution KEdgeConnectedComponents KEdgeConnectedGraphQ KelvinBei KelvinBer KelvinKei KelvinKer KendallTau KendallTauTest KernelExecute KernelFunction KernelMixtureDistribution Kernels Ket Key KeyCollisionFunction KeyComplement KeyDrop KeyDropFrom KeyExistsQ KeyFreeQ KeyIntersection KeyMap KeyMemberQ KeypointStrength Keys KeySelect KeySort KeySortBy KeyTake KeyUnion KeyValueMap KeyValuePattern Khinchin KillProcess KirchhoffGraph KirchhoffMatrix KleinInvariantJ KnapsackSolve KnightTourGraph KnotData KnownUnitQ KochCurve KolmogorovSmirnovTest KroneckerDelta KroneckerModelDecomposition KroneckerProduct KroneckerSymbol KuiperTest KumaraswamyDistribution Kurtosis KuwaharaFilter KVertexConnectedComponents KVertexConnectedGraphQ LABColor Label Labeled LabeledSlider LabelingFunction LabelingSize LabelStyle LabelVisibility LaguerreL LakeData LambdaComponents LambertW LaminaData LanczosWindow LandauDistribution Language LanguageCategory LanguageData LanguageIdentify LanguageOptions LaplaceDistribution LaplaceTransform Laplacian LaplacianFilter LaplacianGaussianFilter Large Larger Last Latitude LatitudeLongitude LatticeData LatticeReduce Launch LaunchKernels LayeredGraphPlot LayerSizeFunction LayoutInformation LCHColor LCM LeaderSize LeafCount LeapYearQ LearnDistribution LearnedDistribution LearningRate LearningRateMultipliers LeastSquares LeastSquaresFilterKernel Left LeftArrow LeftArrowBar LeftArrowRightArrow LeftDownTeeVector LeftDownVector LeftDownVectorBar LeftRightArrow LeftRightVector LeftTee LeftTeeArrow LeftTeeVector LeftTriangle LeftTriangleBar LeftTriangleEqual LeftUpDownVector LeftUpTeeVector LeftUpVector LeftUpVectorBar LeftVector LeftVectorBar LegendAppearance Legended LegendFunction LegendLabel LegendLayout LegendMargins LegendMarkers LegendMarkerSize LegendreP LegendreQ LegendreType Length LengthWhile LerchPhi Less LessEqual LessEqualGreater LessEqualThan LessFullEqual LessGreater LessLess LessSlantEqual LessThan LessTilde LetterCharacter LetterCounts LetterNumber LetterQ Level LeveneTest LeviCivitaTensor LevyDistribution Lexicographic LibraryDataType LibraryFunction LibraryFunctionError LibraryFunctionInformation LibraryFunctionLoad LibraryFunctionUnload LibraryLoad LibraryUnload LicenseID LiftingFilterData LiftingWaveletTransform LightBlue LightBrown LightCyan Lighter LightGray LightGreen Lighting LightingAngle LightMagenta LightOrange LightPink LightPurple LightRed LightSources LightYellow Likelihood Limit LimitsPositioning LimitsPositioningTokens LindleyDistribution Line Line3DBox Line3DBoxOptions LinearFilter LinearFractionalOptimization LinearFractionalTransform LinearGradientImage LinearizingTransformationData LinearLayer LinearModelFit LinearOffsetFunction LinearOptimization LinearProgramming LinearRecurrence LinearSolve LinearSolveFunction LineBox LineBoxOptions LineBreak LinebreakAdjustments LineBreakChart LinebreakSemicolonWeighting LineBreakWithin LineColor LineGraph LineIndent LineIndentMaxFraction LineIntegralConvolutionPlot LineIntegralConvolutionScale LineLegend LineOpacity LineSpacing LineWrapParts LinkActivate LinkClose LinkConnect LinkConnectedQ LinkCreate LinkError LinkFlush LinkFunction LinkHost LinkInterrupt LinkLaunch LinkMode LinkObject LinkOpen LinkOptions LinkPatterns LinkProtocol LinkRankCentrality LinkRead LinkReadHeld LinkReadyQ Links LinkService LinkWrite LinkWriteHeld LiouvilleLambda List Listable ListAnimate ListContourPlot ListContourPlot3D ListConvolve ListCorrelate ListCurvePathPlot ListDeconvolve ListDensityPlot ListDensityPlot3D Listen ListFormat ListFourierSequenceTransform ListInterpolation ListLineIntegralConvolutionPlot ListLinePlot ListLogLinearPlot ListLogLogPlot ListLogPlot ListPicker ListPickerBox ListPickerBoxBackground ListPickerBoxOptions ListPlay ListPlot ListPlot3D ListPointPlot3D ListPolarPlot ListQ ListSliceContourPlot3D ListSliceDensityPlot3D ListSliceVectorPlot3D ListStepPlot ListStreamDensityPlot ListStreamPlot ListSurfacePlot3D ListVectorDensityPlot ListVectorPlot ListVectorPlot3D ListZTransform Literal LiteralSearch LocalAdaptiveBinarize LocalCache LocalClusteringCoefficient LocalizeDefinitions LocalizeVariables LocalObject LocalObjects LocalResponseNormalizationLayer LocalSubmit LocalSymbol LocalTime LocalTimeZone LocationEquivalenceTest LocationTest Locator LocatorAutoCreate LocatorBox LocatorBoxOptions LocatorCentering LocatorPane LocatorPaneBox LocatorPaneBoxOptions LocatorRegion Locked Log Log10 Log2 LogBarnesG LogGamma LogGammaDistribution LogicalExpand LogIntegral LogisticDistribution LogisticSigmoid LogitModelFit LogLikelihood LogLinearPlot LogLogisticDistribution LogLogPlot LogMultinormalDistribution LogNormalDistribution LogPlot LogRankTest LogSeriesDistribution LongEqual Longest LongestCommonSequence LongestCommonSequencePositions LongestCommonSubsequence LongestCommonSubsequencePositions LongestMatch LongestOrderedSequence LongForm Longitude LongLeftArrow LongLeftRightArrow LongRightArrow LongShortTermMemoryLayer Lookup Loopback LoopFreeGraphQ LossFunction LowerCaseQ LowerLeftArrow LowerRightArrow LowerTriangularize LowerTriangularMatrixQ LowpassFilter LQEstimatorGains LQGRegulator LQOutputRegulatorGains LQRegulatorGains LUBackSubstitution LucasL LuccioSamiComponents LUDecomposition LunarEclipse LUVColor LyapunovSolve LyonsGroupLy MachineID MachineName MachineNumberQ MachinePrecision MacintoshSystemPageSetup Magenta Magnification Magnify MailAddressValidation MailExecute MailFolder MailItem MailReceiverFunction MailResponseFunction MailSearch MailServerConnect MailServerConnection MailSettings MainSolve MaintainDynamicCaches Majority MakeBoxes MakeExpression MakeRules ManagedLibraryExpressionID ManagedLibraryExpressionQ MandelbrotSetBoettcher MandelbrotSetDistance MandelbrotSetIterationCount MandelbrotSetMemberQ MandelbrotSetPlot MangoldtLambda ManhattanDistance Manipulate Manipulator MannedSpaceMissionData MannWhitneyTest MantissaExponent Manual Map MapAll MapAt MapIndexed MAProcess MapThread MarchenkoPasturDistribution MarcumQ MardiaCombinedTest MardiaKurtosisTest MardiaSkewnessTest MarginalDistribution MarkovProcessProperties Masking MatchingDissimilarity MatchLocalNameQ MatchLocalNames MatchQ Material MathematicalFunctionData MathematicaNotation MathieuC MathieuCharacteristicA MathieuCharacteristicB MathieuCharacteristicExponent MathieuCPrime MathieuGroupM11 MathieuGroupM12 MathieuGroupM22 MathieuGroupM23 MathieuGroupM24 MathieuS MathieuSPrime MathMLForm MathMLText Matrices MatrixExp MatrixForm MatrixFunction MatrixLog MatrixNormalDistribution MatrixPlot MatrixPower MatrixPropertyDistribution MatrixQ MatrixRank MatrixTDistribution Max MaxBend MaxCellMeasure MaxColorDistance MaxDetect MaxDuration MaxExtraBandwidths MaxExtraConditions MaxFeatureDisplacement MaxFeatures MaxFilter MaximalBy Maximize MaxItems MaxIterations MaxLimit MaxMemoryUsed MaxMixtureKernels MaxOverlapFraction MaxPlotPoints MaxPoints MaxRecursion MaxStableDistribution MaxStepFraction MaxSteps MaxStepSize MaxTrainingRounds MaxValue MaxwellDistribution MaxWordGap McLaughlinGroupMcL Mean MeanAbsoluteLossLayer MeanAround MeanClusteringCoefficient MeanDegreeConnectivity MeanDeviation MeanFilter MeanGraphDistance MeanNeighborDegree MeanShift MeanShiftFilter MeanSquaredLossLayer Median MedianDeviation MedianFilter MedicalTestData Medium MeijerG MeijerGReduce MeixnerDistribution MellinConvolve MellinTransform MemberQ MemoryAvailable MemoryConstrained MemoryConstraint MemoryInUse MengerMesh Menu MenuAppearance MenuCommandKey MenuEvaluator MenuItem MenuList MenuPacket MenuSortingValue MenuStyle MenuView Merge MergeDifferences MergingFunction MersennePrimeExponent MersennePrimeExponentQ Mesh MeshCellCentroid MeshCellCount MeshCellHighlight MeshCellIndex MeshCellLabel MeshCellMarker MeshCellMeasure MeshCellQuality MeshCells MeshCellShapeFunction MeshCellStyle MeshCoordinates MeshFunctions MeshPrimitives MeshQualityGoal MeshRange MeshRefinementFunction MeshRegion MeshRegionQ MeshShading MeshStyle Message MessageDialog MessageList MessageName MessageObject MessageOptions MessagePacket Messages MessagesNotebook MetaCharacters MetaInformation MeteorShowerData Method MethodOptions MexicanHatWavelet MeyerWavelet Midpoint Min MinColorDistance MinDetect MineralData MinFilter MinimalBy MinimalPolynomial MinimalStateSpaceModel Minimize MinimumTimeIncrement MinIntervalSize MinkowskiQuestionMark MinLimit MinMax MinorPlanetData Minors MinRecursion MinSize MinStableDistribution Minus MinusPlus MinValue Missing MissingBehavior MissingDataMethod MissingDataRules MissingQ MissingString MissingStyle MissingValuePattern MittagLefflerE MixedFractionParts MixedGraphQ MixedMagnitude MixedRadix MixedRadixQuantity MixedUnit MixtureDistribution Mod Modal Mode Modular ModularInverse ModularLambda Module Modulus MoebiusMu Molecule MoleculeContainsQ MoleculeEquivalentQ MoleculeGraph MoleculeModify MoleculePattern MoleculePlot MoleculePlot3D MoleculeProperty MoleculeQ MoleculeValue Moment Momentary MomentConvert MomentEvaluate MomentGeneratingFunction MomentOfInertia Monday Monitor MonomialList MonomialOrder MonsterGroupM MoonPhase MoonPosition MorletWavelet MorphologicalBinarize MorphologicalBranchPoints MorphologicalComponents MorphologicalEulerNumber MorphologicalGraph MorphologicalPerimeter MorphologicalTransform MortalityData Most MountainData MouseAnnotation MouseAppearance MouseAppearanceTag MouseButtons Mouseover MousePointerNote MousePosition MovieData MovingAverage MovingMap MovingMedian MoyalDistribution Multicolumn MultiedgeStyle MultigraphQ MultilaunchWarning MultiLetterItalics MultiLetterStyle MultilineFunction Multinomial MultinomialDistribution MultinormalDistribution MultiplicativeOrder Multiplicity MultiplySides Multiselection MultivariateHypergeometricDistribution MultivariatePoissonDistribution MultivariateTDistribution N NakagamiDistribution NameQ Names NamespaceBox NamespaceBoxOptions Nand NArgMax NArgMin NBernoulliB NBodySimulation NBodySimulationData NCache NDEigensystem NDEigenvalues NDSolve NDSolveValue Nearest NearestFunction NearestNeighborGraph NearestTo NebulaData NeedCurrentFrontEndPackagePacket NeedCurrentFrontEndSymbolsPacket NeedlemanWunschSimilarity Needs Negative NegativeBinomialDistribution NegativeDefiniteMatrixQ NegativeIntegers NegativeMultinomialDistribution NegativeRationals NegativeReals NegativeSemidefiniteMatrixQ NeighborhoodData NeighborhoodGraph Nest NestedGreaterGreater NestedLessLess NestedScriptRules NestGraph NestList NestWhile NestWhileList NetAppend NetBidirectionalOperator NetChain NetDecoder NetDelete NetDrop NetEncoder NetEvaluationMode NetExtract NetFlatten NetFoldOperator NetGraph NetInformation NetInitialize NetInsert NetInsertSharedArrays NetJoin NetMapOperator NetMapThreadOperator NetMeasurements NetModel NetNestOperator NetPairEmbeddingOperator NetPort NetPortGradient NetPrepend NetRename NetReplace NetReplacePart NetSharedArray NetStateObject NetTake NetTrain NetTrainResultsObject NetworkPacketCapture NetworkPacketRecording NetworkPacketRecordingDuring NetworkPacketTrace NeumannValue NevilleThetaC NevilleThetaD NevilleThetaN NevilleThetaS NewPrimitiveStyle NExpectation Next NextCell NextDate NextPrime NextScheduledTaskTime NHoldAll NHoldFirst NHoldRest NicholsGridLines NicholsPlot NightHemisphere NIntegrate NMaximize NMaxValue NMinimize NMinValue NominalVariables NonAssociative NoncentralBetaDistribution NoncentralChiSquareDistribution NoncentralFRatioDistribution NoncentralStudentTDistribution NonCommutativeMultiply NonConstants NondimensionalizationTransform None NoneTrue NonlinearModelFit NonlinearStateSpaceModel NonlocalMeansFilter NonNegative NonNegativeIntegers NonNegativeRationals NonNegativeReals NonPositive NonPositiveIntegers NonPositiveRationals NonPositiveReals Nor NorlundB Norm Normal NormalDistribution NormalGrouping NormalizationLayer Normalize Normalized NormalizedSquaredEuclideanDistance NormalMatrixQ NormalsFunction NormFunction Not NotCongruent NotCupCap NotDoubleVerticalBar Notebook NotebookApply NotebookAutoSave NotebookClose NotebookConvertSettings NotebookCreate NotebookCreateReturnObject NotebookDefault NotebookDelete NotebookDirectory NotebookDynamicExpression NotebookEvaluate NotebookEventActions NotebookFileName NotebookFind NotebookFindReturnObject NotebookGet NotebookGetLayoutInformationPacket NotebookGetMisspellingsPacket NotebookImport NotebookInformation NotebookInterfaceObject NotebookLocate NotebookObject NotebookOpen NotebookOpenReturnObject NotebookPath NotebookPrint NotebookPut NotebookPutReturnObject NotebookRead NotebookResetGeneratedCells Notebooks NotebookSave NotebookSaveAs NotebookSelection NotebookSetupLayoutInformationPacket NotebooksMenu NotebookTemplate NotebookWrite NotElement NotEqualTilde NotExists NotGreater NotGreaterEqual NotGreaterFullEqual NotGreaterGreater NotGreaterLess NotGreaterSlantEqual NotGreaterTilde Nothing NotHumpDownHump NotHumpEqual NotificationFunction NotLeftTriangle NotLeftTriangleBar NotLeftTriangleEqual NotLess NotLessEqual NotLessFullEqual NotLessGreater NotLessLess NotLessSlantEqual NotLessTilde NotNestedGreaterGreater NotNestedLessLess NotPrecedes NotPrecedesEqual NotPrecedesSlantEqual NotPrecedesTilde NotReverseElement NotRightTriangle NotRightTriangleBar NotRightTriangleEqual NotSquareSubset NotSquareSubsetEqual NotSquareSuperset NotSquareSupersetEqual NotSubset NotSubsetEqual NotSucceeds NotSucceedsEqual NotSucceedsSlantEqual NotSucceedsTilde NotSuperset NotSupersetEqual NotTilde NotTildeEqual NotTildeFullEqual NotTildeTilde NotVerticalBar Now NoWhitespace NProbability NProduct NProductFactors NRoots NSolve NSum NSumTerms NuclearExplosionData NuclearReactorData Null NullRecords NullSpace NullWords Number NumberCompose NumberDecompose NumberExpand NumberFieldClassNumber NumberFieldDiscriminant NumberFieldFundamentalUnits NumberFieldIntegralBasis NumberFieldNormRepresentatives NumberFieldRegulator NumberFieldRootsOfUnity NumberFieldSignature NumberForm NumberFormat NumberLinePlot NumberMarks NumberMultiplier NumberPadding NumberPoint NumberQ NumberSeparator NumberSigns NumberString Numerator NumeratorDenominator NumericalOrder NumericalSort NumericArray NumericArrayQ NumericArrayType NumericFunction NumericQ NuttallWindow NValues NyquistGridLines NyquistPlot O ObservabilityGramian ObservabilityMatrix ObservableDecomposition ObservableModelQ OceanData Octahedron OddQ Off Offset OLEData On ONanGroupON Once OneIdentity Opacity OpacityFunction OpacityFunctionScaling Open OpenAppend Opener OpenerBox OpenerBoxOptions OpenerView OpenFunctionInspectorPacket Opening OpenRead OpenSpecialOptions OpenTemporary OpenWrite Operate OperatingSystem OptimumFlowData Optional OptionalElement OptionInspectorSettings OptionQ Options OptionsPacket OptionsPattern OptionValue OptionValueBox OptionValueBoxOptions Or Orange Order OrderDistribution OrderedQ Ordering OrderingBy OrderingLayer Orderless OrderlessPatternSequence OrnsteinUhlenbeckProcess Orthogonalize OrthogonalMatrixQ Out Outer OuterPolygon OuterPolyhedron OutputAutoOverwrite OutputControllabilityMatrix OutputControllableModelQ OutputForm OutputFormData OutputGrouping OutputMathEditExpression OutputNamePacket OutputResponse OutputSizeLimit OutputStream Over OverBar OverDot Overflow OverHat Overlaps Overlay OverlayBox OverlayBoxOptions Overscript OverscriptBox OverscriptBoxOptions OverTilde OverVector OverwriteTarget OwenT OwnValues Package PackingMethod PaddedForm Padding PaddingLayer PaddingSize PadeApproximant PadLeft PadRight PageBreakAbove PageBreakBelow PageBreakWithin PageFooterLines PageFooters PageHeaderLines PageHeaders PageHeight PageRankCentrality PageTheme PageWidth Pagination PairedBarChart PairedHistogram PairedSmoothHistogram PairedTTest PairedZTest PaletteNotebook PalettePath PalindromeQ Pane PaneBox PaneBoxOptions Panel PanelBox PanelBoxOptions Paneled PaneSelector PaneSelectorBox PaneSelectorBoxOptions PaperWidth ParabolicCylinderD ParagraphIndent ParagraphSpacing ParallelArray ParallelCombine ParallelDo Parallelepiped ParallelEvaluate Parallelization Parallelize ParallelMap ParallelNeeds Parallelogram ParallelProduct ParallelSubmit ParallelSum ParallelTable ParallelTry Parameter ParameterEstimator ParameterMixtureDistribution ParameterVariables ParametricFunction ParametricNDSolve ParametricNDSolveValue ParametricPlot ParametricPlot3D ParametricRegion ParentBox ParentCell ParentConnect ParentDirectory ParentForm Parenthesize ParentList ParentNotebook ParetoDistribution ParetoPickandsDistribution ParkData Part PartBehavior PartialCorrelationFunction PartialD ParticleAcceleratorData ParticleData Partition PartitionGranularity PartitionsP PartitionsQ PartLayer PartOfSpeech PartProtection ParzenWindow PascalDistribution PassEventsDown PassEventsUp Paste PasteAutoQuoteCharacters PasteBoxFormInlineCells PasteButton Path PathGraph PathGraphQ Pattern PatternSequence PatternTest PauliMatrix PaulWavelet Pause PausedTime PDF PeakDetect PeanoCurve PearsonChiSquareTest PearsonCorrelationTest PearsonDistribution PercentForm PerfectNumber PerfectNumberQ PerformanceGoal Perimeter PeriodicBoundaryCondition PeriodicInterpolation Periodogram PeriodogramArray Permanent Permissions PermissionsGroup PermissionsGroupMemberQ PermissionsGroups PermissionsKey PermissionsKeys PermutationCycles PermutationCyclesQ PermutationGroup PermutationLength PermutationList PermutationListQ PermutationMax PermutationMin PermutationOrder PermutationPower PermutationProduct PermutationReplace Permutations PermutationSupport Permute PeronaMalikFilter Perpendicular PerpendicularBisector PersistenceLocation PersistenceTime PersistentObject PersistentObjects PersistentValue PersonData PERTDistribution PetersenGraph PhaseMargins PhaseRange PhysicalSystemData Pi Pick PIDData PIDDerivativeFilter PIDFeedforward PIDTune Piecewise PiecewiseExpand PieChart PieChart3D PillaiTrace PillaiTraceTest PingTime Pink PitchRecognize Pivoting PixelConstrained PixelValue PixelValuePositions Placed Placeholder PlaceholderReplace Plain PlanarAngle PlanarGraph PlanarGraphQ PlanckRadiationLaw PlaneCurveData PlanetaryMoonData PlanetData PlantData Play PlayRange Plot Plot3D Plot3Matrix PlotDivision PlotJoined PlotLabel PlotLabels PlotLayout PlotLegends PlotMarkers PlotPoints PlotRange PlotRangeClipping PlotRangeClipPlanesStyle PlotRangePadding PlotRegion PlotStyle PlotTheme Pluralize Plus PlusMinus Pochhammer PodStates PodWidth Point Point3DBox Point3DBoxOptions PointBox PointBoxOptions PointFigureChart PointLegend PointSize PoissonConsulDistribution PoissonDistribution PoissonProcess PoissonWindow PolarAxes PolarAxesOrigin PolarGridLines PolarPlot PolarTicks PoleZeroMarkers PolyaAeppliDistribution PolyGamma Polygon Polygon3DBox Polygon3DBoxOptions PolygonalNumber PolygonAngle PolygonBox PolygonBoxOptions PolygonCoordinates PolygonDecomposition PolygonHoleScale PolygonIntersections PolygonScale Polyhedron PolyhedronAngle PolyhedronCoordinates PolyhedronData PolyhedronDecomposition PolyhedronGenus PolyLog PolynomialExtendedGCD PolynomialForm PolynomialGCD PolynomialLCM PolynomialMod PolynomialQ PolynomialQuotient PolynomialQuotientRemainder PolynomialReduce PolynomialRemainder Polynomials PoolingLayer PopupMenu PopupMenuBox PopupMenuBoxOptions PopupView PopupWindow Position PositionIndex Positive PositiveDefiniteMatrixQ PositiveIntegers PositiveRationals PositiveReals PositiveSemidefiniteMatrixQ PossibleZeroQ Postfix PostScript Power PowerDistribution PowerExpand PowerMod PowerModList PowerRange PowerSpectralDensity PowersRepresentations PowerSymmetricPolynomial Precedence PrecedenceForm Precedes PrecedesEqual PrecedesSlantEqual PrecedesTilde Precision PrecisionGoal PreDecrement Predict PredictionRoot PredictorFunction PredictorInformation PredictorMeasurements PredictorMeasurementsObject PreemptProtect PreferencesPath Prefix PreIncrement Prepend PrependLayer PrependTo PreprocessingRules PreserveColor PreserveImageOptions Previous PreviousCell PreviousDate PriceGraphDistribution PrimaryPlaceholder Prime PrimeNu PrimeOmega PrimePi PrimePowerQ PrimeQ Primes PrimeZetaP PrimitivePolynomialQ PrimitiveRoot PrimitiveRootList PrincipalComponents PrincipalValue Print PrintableASCIIQ PrintAction PrintForm PrintingCopies PrintingOptions PrintingPageRange PrintingStartingPageNumber PrintingStyleEnvironment Printout3D Printout3DPreviewer PrintPrecision PrintTemporary Prism PrismBox PrismBoxOptions PrivateCellOptions PrivateEvaluationOptions PrivateFontOptions PrivateFrontEndOptions PrivateKey PrivateNotebookOptions PrivatePaths Probability ProbabilityDistribution ProbabilityPlot ProbabilityPr ProbabilityScalePlot ProbitModelFit ProcessConnection ProcessDirectory ProcessEnvironment Processes ProcessEstimator ProcessInformation ProcessObject ProcessParameterAssumptions ProcessParameterQ ProcessStateDomain ProcessStatus ProcessTimeDomain Product ProductDistribution ProductLog ProgressIndicator ProgressIndicatorBox ProgressIndicatorBoxOptions Projection Prolog PromptForm ProofObject Properties Property PropertyList PropertyValue Proportion Proportional Protect Protected ProteinData Pruning PseudoInverse PsychrometricPropertyData PublicKey PublisherID PulsarData PunctuationCharacter Purple Put PutAppend Pyramid PyramidBox PyramidBoxOptions QBinomial QFactorial QGamma QHypergeometricPFQ QnDispersion QPochhammer QPolyGamma QRDecomposition QuadraticIrrationalQ QuadraticOptimization Quantile QuantilePlot Quantity QuantityArray QuantityDistribution QuantityForm QuantityMagnitude QuantityQ QuantityUnit QuantityVariable QuantityVariableCanonicalUnit QuantityVariableDimensions QuantityVariableIdentifier QuantityVariablePhysicalQuantity Quartics QuartileDeviation Quartiles QuartileSkewness Query QueueingNetworkProcess QueueingProcess QueueProperties Quiet Quit Quotient QuotientRemainder RadialGradientImage RadialityCentrality RadicalBox RadicalBoxOptions RadioButton RadioButtonBar RadioButtonBox RadioButtonBoxOptions Radon RadonTransform RamanujanTau RamanujanTauL RamanujanTauTheta RamanujanTauZ Ramp Random RandomChoice RandomColor RandomComplex RandomEntity RandomFunction RandomGeoPosition RandomGraph RandomImage RandomInstance RandomInteger RandomPermutation RandomPoint RandomPolygon RandomPolyhedron RandomPrime RandomReal RandomSample RandomSeed RandomSeeding RandomVariate RandomWalkProcess RandomWord Range RangeFilter RangeSpecification RankedMax RankedMin RarerProbability Raster Raster3D Raster3DBox Raster3DBoxOptions RasterArray RasterBox RasterBoxOptions Rasterize RasterSize Rational RationalFunctions Rationalize Rationals Ratios RawArray RawBoxes RawData RawMedium RayleighDistribution Re Read ReadByteArray ReadLine ReadList ReadProtected ReadString Real RealAbs RealBlockDiagonalForm RealDigits RealExponent Reals RealSign Reap RecognitionPrior RecognitionThreshold Record RecordLists RecordSeparators Rectangle RectangleBox RectangleBoxOptions RectangleChart RectangleChart3D RectangularRepeatingElement RecurrenceFilter RecurrenceTable RecurringDigitsForm Red Reduce RefBox ReferenceLineStyle ReferenceMarkers ReferenceMarkerStyle Refine ReflectionMatrix ReflectionTransform Refresh RefreshRate Region RegionBinarize RegionBoundary RegionBounds RegionCentroid RegionDifference RegionDimension RegionDisjoint RegionDistance RegionDistanceFunction RegionEmbeddingDimension RegionEqual RegionFunction RegionImage RegionIntersection RegionMeasure RegionMember RegionMemberFunction RegionMoment RegionNearest RegionNearestFunction RegionPlot RegionPlot3D RegionProduct RegionQ RegionResize RegionSize RegionSymmetricDifference RegionUnion RegionWithin RegisterExternalEvaluator RegularExpression Regularization RegularlySampledQ RegularPolygon ReIm ReImLabels ReImPlot ReImStyle Reinstall RelationalDatabase RelationGraph Release ReleaseHold ReliabilityDistribution ReliefImage ReliefPlot RemoteAuthorizationCaching RemoteConnect RemoteConnectionObject RemoteFile RemoteRun RemoteRunProcess Remove RemoveAlphaChannel RemoveAsynchronousTask RemoveAudioStream RemoveBackground RemoveChannelListener RemoveChannelSubscribers Removed RemoveDiacritics RemoveInputStreamMethod RemoveOutputStreamMethod RemoveProperty RemoveScheduledTask RemoveUsers RenameDirectory RenameFile RenderAll RenderingOptions RenewalProcess RenkoChart RepairMesh Repeated RepeatedNull RepeatedString RepeatedTiming RepeatingElement Replace ReplaceAll ReplaceHeldPart ReplaceImageValue ReplaceList ReplacePart ReplacePixelValue ReplaceRepeated ReplicateLayer RequiredPhysicalQuantities Resampling ResamplingAlgorithmData ResamplingMethod Rescale RescalingTransform ResetDirectory ResetMenusPacket ResetScheduledTask ReshapeLayer Residue ResizeLayer Resolve ResourceAcquire ResourceData ResourceFunction ResourceObject ResourceRegister ResourceRemove ResourceSearch ResourceSubmissionObject ResourceSubmit ResourceSystemBase ResourceUpdate ResponseForm Rest RestartInterval Restricted Resultant ResumePacket Return ReturnEntersInput ReturnExpressionPacket ReturnInputFormPacket ReturnPacket ReturnReceiptFunction ReturnTextPacket Reverse ReverseBiorthogonalSplineWavelet ReverseElement ReverseEquilibrium ReverseGraph ReverseSort ReverseSortBy ReverseUpEquilibrium RevolutionAxis RevolutionPlot3D RGBColor RiccatiSolve RiceDistribution RidgeFilter RiemannR RiemannSiegelTheta RiemannSiegelZ RiemannXi Riffle Right RightArrow RightArrowBar RightArrowLeftArrow RightComposition RightCosetRepresentative RightDownTeeVector RightDownVector RightDownVectorBar RightTee RightTeeArrow RightTeeVector RightTriangle RightTriangleBar RightTriangleEqual RightUpDownVector RightUpTeeVector RightUpVector RightUpVectorBar RightVector RightVectorBar RiskAchievementImportance RiskReductionImportance RogersTanimotoDissimilarity RollPitchYawAngles RollPitchYawMatrix RomanNumeral Root RootApproximant RootIntervals RootLocusPlot RootMeanSquare RootOfUnityQ RootReduce Roots RootSum Rotate RotateLabel RotateLeft RotateRight RotationAction RotationBox RotationBoxOptions RotationMatrix RotationTransform Round RoundImplies RoundingRadius Row RowAlignments RowBackgrounds RowBox RowHeights RowLines RowMinHeight RowReduce RowsEqual RowSpacings RSolve RSolveValue RudinShapiro RudvalisGroupRu Rule RuleCondition RuleDelayed RuleForm RulePlot RulerUnits Run RunProcess RunScheduledTask RunThrough RuntimeAttributes RuntimeOptions RussellRaoDissimilarity SameQ SameTest SampledEntityClass SampleDepth SampledSoundFunction SampledSoundList SampleRate SamplingPeriod SARIMAProcess SARMAProcess SASTriangle SatelliteData SatisfiabilityCount SatisfiabilityInstances SatisfiableQ Saturday Save Saveable SaveAutoDelete SaveConnection SaveDefinitions SavitzkyGolayMatrix SawtoothWave Scale Scaled ScaleDivisions ScaledMousePosition ScaleOrigin ScalePadding ScaleRanges ScaleRangeStyle ScalingFunctions ScalingMatrix ScalingTransform Scan ScheduledTask ScheduledTaskActiveQ ScheduledTaskInformation ScheduledTaskInformationData ScheduledTaskObject ScheduledTasks SchurDecomposition ScientificForm ScientificNotationThreshold ScorerGi ScorerGiPrime ScorerHi ScorerHiPrime ScreenRectangle ScreenStyleEnvironment ScriptBaselineShifts ScriptForm ScriptLevel ScriptMinSize ScriptRules ScriptSizeMultipliers Scrollbars ScrollingOptions ScrollPosition SearchAdjustment SearchIndexObject SearchIndices SearchQueryString SearchResultObject Sec Sech SechDistribution SecondOrderConeOptimization SectionGrouping SectorChart SectorChart3D SectorOrigin SectorSpacing SecuredAuthenticationKey SecuredAuthenticationKeys SeedRandom Select Selectable SelectComponents SelectedCells SelectedNotebook SelectFirst Selection SelectionAnimate SelectionCell SelectionCellCreateCell SelectionCellDefaultStyle SelectionCellParentStyle SelectionCreateCell SelectionDebuggerTag SelectionDuplicateCell SelectionEvaluate SelectionEvaluateCreateCell SelectionMove SelectionPlaceholder SelectionSetStyle SelectWithContents SelfLoops SelfLoopStyle SemanticImport SemanticImportString SemanticInterpretation SemialgebraicComponentInstances SemidefiniteOptimization SendMail SendMessage Sequence SequenceAlignment SequenceAttentionLayer SequenceCases SequenceCount SequenceFold SequenceFoldList SequenceForm SequenceHold SequenceLastLayer SequenceMostLayer SequencePosition SequencePredict SequencePredictorFunction SequenceReplace SequenceRestLayer SequenceReverseLayer SequenceSplit Series SeriesCoefficient SeriesData ServiceConnect ServiceDisconnect ServiceExecute ServiceObject ServiceRequest ServiceResponse ServiceSubmit SessionSubmit SessionTime Set SetAccuracy SetAlphaChannel SetAttributes Setbacks SetBoxFormNamesPacket SetCloudDirectory SetCookies SetDelayed SetDirectory SetEnvironment SetEvaluationNotebook SetFileDate SetFileLoadingContext SetNotebookStatusLine SetOptions SetOptionsPacket SetPermissions SetPrecision SetProperty SetSecuredAuthenticationKey SetSelectedNotebook SetSharedFunction SetSharedVariable SetSpeechParametersPacket SetStreamPosition SetSystemModel SetSystemOptions Setter SetterBar SetterBox SetterBoxOptions Setting SetUsers SetValue Shading Shallow ShannonWavelet ShapiroWilkTest Share SharingList Sharpen ShearingMatrix ShearingTransform ShellRegion ShenCastanMatrix ShiftedGompertzDistribution ShiftRegisterSequence Short ShortDownArrow Shortest ShortestMatch ShortestPathFunction ShortLeftArrow ShortRightArrow ShortTimeFourier ShortTimeFourierData ShortUpArrow Show ShowAutoConvert ShowAutoSpellCheck ShowAutoStyles ShowCellBracket ShowCellLabel ShowCellTags ShowClosedCellArea ShowCodeAssist ShowContents ShowControls ShowCursorTracker ShowGroupOpenCloseIcon ShowGroupOpener ShowInvisibleCharacters ShowPageBreaks ShowPredictiveInterface ShowSelection ShowShortBoxForm ShowSpecialCharacters ShowStringCharacters ShowSyntaxStyles ShrinkingDelay ShrinkWrapBoundingBox SiderealTime SiegelTheta SiegelTukeyTest SierpinskiCurve SierpinskiMesh Sign Signature SignedRankTest SignedRegionDistance SignificanceLevel SignPadding SignTest SimilarityRules SimpleGraph SimpleGraphQ SimplePolygonQ SimplePolyhedronQ Simplex Simplify Sin Sinc SinghMaddalaDistribution SingleEvaluation SingleLetterItalics SingleLetterStyle SingularValueDecomposition SingularValueList SingularValuePlot SingularValues Sinh SinhIntegral SinIntegral SixJSymbol Skeleton SkeletonTransform SkellamDistribution Skewness SkewNormalDistribution SkinStyle Skip SliceContourPlot3D SliceDensityPlot3D SliceDistribution SliceVectorPlot3D Slider Slider2D Slider2DBox Slider2DBoxOptions SliderBox SliderBoxOptions SlideView Slot SlotSequence Small SmallCircle Smaller SmithDecomposition SmithDelayCompensator SmithWatermanSimilarity SmoothDensityHistogram SmoothHistogram SmoothHistogram3D SmoothKernelDistribution SnDispersion Snippet SnubPolyhedron SocialMediaData Socket SocketConnect SocketListen SocketListener SocketObject SocketOpen SocketReadMessage SocketReadyQ Sockets SocketWaitAll SocketWaitNext SoftmaxLayer SokalSneathDissimilarity SolarEclipse SolarSystemFeatureData SolidAngle SolidData SolidRegionQ Solve SolveAlways SolveDelayed Sort SortBy SortedBy SortedEntityClass Sound SoundAndGraphics SoundNote SoundVolume SourceLink Sow Space SpaceCurveData SpaceForm Spacer Spacings Span SpanAdjustments SpanCharacterRounding SpanFromAbove SpanFromBoth SpanFromLeft SpanLineThickness SpanMaxSize SpanMinSize SpanningCharacters SpanSymmetric SparseArray SpatialGraphDistribution SpatialMedian SpatialTransformationLayer Speak SpeakTextPacket SpearmanRankTest SpearmanRho SpeciesData SpecificityGoal SpectralLineData Spectrogram SpectrogramArray Specularity SpeechRecognize SpeechSynthesize SpellingCorrection SpellingCorrectionList SpellingDictionaries SpellingDictionariesPath SpellingOptions SpellingSuggestionsPacket Sphere SphereBox SpherePoints SphericalBesselJ SphericalBesselY SphericalHankelH1 SphericalHankelH2 SphericalHarmonicY SphericalPlot3D SphericalRegion SphericalShell SpheroidalEigenvalue SpheroidalJoiningFactor SpheroidalPS SpheroidalPSPrime SpheroidalQS SpheroidalQSPrime SpheroidalRadialFactor SpheroidalS1 SpheroidalS1Prime SpheroidalS2 SpheroidalS2Prime Splice SplicedDistribution SplineClosed SplineDegree SplineKnots SplineWeights Split SplitBy SpokenString Sqrt SqrtBox SqrtBoxOptions Square SquaredEuclideanDistance SquareFreeQ SquareIntersection SquareMatrixQ SquareRepeatingElement SquaresR SquareSubset SquareSubsetEqual SquareSuperset SquareSupersetEqual SquareUnion SquareWave SSSTriangle StabilityMargins StabilityMarginsStyle StableDistribution Stack StackBegin StackComplete StackedDateListPlot StackedListPlot StackInhibit StadiumShape StandardAtmosphereData StandardDeviation StandardDeviationFilter StandardForm Standardize Standardized StandardOceanData StandbyDistribution Star StarClusterData StarData StarGraph StartAsynchronousTask StartExternalSession StartingStepSize StartOfLine StartOfString StartProcess StartScheduledTask StartupSound StartWebSession StateDimensions StateFeedbackGains StateOutputEstimator StateResponse StateSpaceModel StateSpaceRealization StateSpaceTransform StateTransformationLinearize StationaryDistribution StationaryWaveletPacketTransform StationaryWaveletTransform StatusArea StatusCentrality StepMonitor StereochemistryElements StieltjesGamma StirlingS1 StirlingS2 StopAsynchronousTask StoppingPowerData StopScheduledTask StrataVariables StratonovichProcess StreamColorFunction StreamColorFunctionScaling StreamDensityPlot StreamMarkers StreamPlot StreamPoints StreamPosition Streams StreamScale StreamStyle String StringBreak StringByteCount StringCases StringContainsQ StringCount StringDelete StringDrop StringEndsQ StringExpression StringExtract StringForm StringFormat StringFreeQ StringInsert StringJoin StringLength StringMatchQ StringPadLeft StringPadRight StringPart StringPartition StringPosition StringQ StringRepeat StringReplace StringReplaceList StringReplacePart StringReverse StringRiffle StringRotateLeft StringRotateRight StringSkeleton StringSplit StringStartsQ StringTake StringTemplate StringToByteArray StringToStream StringTrim StripBoxes StripOnInput StripWrapperBoxes StrokeForm StructuralImportance StructuredArray StructuredSelection StruveH StruveL Stub StudentTDistribution Style StyleBox StyleBoxAutoDelete StyleData StyleDefinitions StyleForm StyleHints StyleKeyMapping StyleMenuListing StyleNameDialogSettings StyleNames StylePrint StyleSheetPath Subdivide Subfactorial Subgraph SubMinus SubPlus SubresultantPolynomialRemainders SubresultantPolynomials Subresultants Subscript SubscriptBox SubscriptBoxOptions Subscripted Subsequences Subset SubsetEqual SubsetMap SubsetQ Subsets SubStar SubstitutionSystem Subsuperscript SubsuperscriptBox SubsuperscriptBoxOptions Subtract SubtractFrom SubtractSides SubValues Succeeds SucceedsEqual SucceedsSlantEqual SucceedsTilde Success SuchThat Sum SumConvergence SummationLayer Sunday SunPosition Sunrise Sunset SuperDagger SuperMinus SupernovaData SuperPlus Superscript SuperscriptBox SuperscriptBoxOptions Superset SupersetEqual SuperStar Surd SurdForm SurfaceArea SurfaceColor SurfaceData SurfaceGraphics SurvivalDistribution SurvivalFunction SurvivalModel SurvivalModelFit SuspendPacket SuzukiDistribution SuzukiGroupSuz SwatchLegend Switch Symbol SymbolName SymletWavelet Symmetric SymmetricGroup SymmetricKey SymmetricMatrixQ SymmetricPolynomial SymmetricReduction Symmetrize SymmetrizedArray SymmetrizedArrayRules SymmetrizedDependentComponents SymmetrizedIndependentComponents SymmetrizedReplacePart SynchronousInitialization SynchronousUpdating Synonyms Syntax SyntaxForm SyntaxInformation SyntaxLength SyntaxPacket SyntaxQ SynthesizeMissingValues SystemDialogInput SystemException SystemGet SystemHelpPath SystemInformation SystemInformationData SystemInstall SystemModel SystemModeler SystemModelExamples SystemModelLinearize SystemModelParametricSimulate SystemModelPlot SystemModelProgressReporting SystemModelReliability SystemModels SystemModelSimulate SystemModelSimulateSensitivity SystemModelSimulationData SystemOpen SystemOptions SystemProcessData SystemProcesses SystemsConnectionsModel SystemsModelDelay SystemsModelDelayApproximate SystemsModelDelete SystemsModelDimensions SystemsModelExtract SystemsModelFeedbackConnect SystemsModelLabels SystemsModelLinearity SystemsModelMerge SystemsModelOrder SystemsModelParallelConnect SystemsModelSeriesConnect SystemsModelStateFeedbackConnect SystemsModelVectorRelativeOrders SystemStub SystemTest Tab TabFilling Table TableAlignments TableDepth TableDirections TableForm TableHeadings TableSpacing TableView TableViewBox TableViewBoxBackground TableViewBoxOptions TabSpacings TabView TabViewBox TabViewBoxOptions TagBox TagBoxNote TagBoxOptions TaggingRules TagSet TagSetDelayed TagStyle TagUnset Take TakeDrop TakeLargest TakeLargestBy TakeList TakeSmallest TakeSmallestBy TakeWhile Tally Tan Tanh TargetDevice TargetFunctions TargetSystem TargetUnits TaskAbort TaskExecute TaskObject TaskRemove TaskResume Tasks TaskSuspend TaskWait TautologyQ TelegraphProcess TemplateApply TemplateArgBox TemplateBox TemplateBoxOptions TemplateEvaluate TemplateExpression TemplateIf TemplateObject TemplateSequence TemplateSlot TemplateSlotSequence TemplateUnevaluated TemplateVerbatim TemplateWith TemporalData TemporalRegularity Temporary TemporaryVariable TensorContract TensorDimensions TensorExpand TensorProduct TensorQ TensorRank TensorReduce TensorSymmetry TensorTranspose TensorWedge TestID TestReport TestReportObject TestResultObject Tetrahedron TetrahedronBox TetrahedronBoxOptions TeXForm TeXSave Text Text3DBox Text3DBoxOptions TextAlignment TextBand TextBoundingBox TextBox TextCases TextCell TextClipboardType TextContents TextData TextElement TextForm TextGrid TextJustification TextLine TextPacket TextParagraph TextPosition TextRecognize TextSearch TextSearchReport TextSentences TextString TextStructure TextStyle TextTranslation Texture TextureCoordinateFunction TextureCoordinateScaling TextWords Therefore ThermodynamicData ThermometerGauge Thick Thickness Thin Thinning ThisLink ThompsonGroupTh Thread ThreadingLayer ThreeJSymbol Threshold Through Throw ThueMorse Thumbnail Thursday Ticks TicksStyle TideData Tilde TildeEqual TildeFullEqual TildeTilde TimeConstrained TimeConstraint TimeDirection TimeFormat TimeGoal TimelinePlot TimeObject TimeObjectQ Times TimesBy TimeSeries TimeSeriesAggregate TimeSeriesForecast TimeSeriesInsert TimeSeriesInvertibility TimeSeriesMap TimeSeriesMapThread TimeSeriesModel TimeSeriesModelFit TimeSeriesResample TimeSeriesRescale TimeSeriesShift TimeSeriesThread TimeSeriesWindow TimeUsed TimeValue TimeWarpingCorrespondence TimeWarpingDistance TimeZone TimeZoneConvert TimeZoneOffset Timing Tiny TitleGrouping TitsGroupT ToBoxes ToCharacterCode ToColor ToContinuousTimeModel ToDate Today ToDiscreteTimeModel ToEntity ToeplitzMatrix ToExpression ToFileName Together Toggle ToggleFalse Toggler TogglerBar TogglerBox TogglerBoxOptions ToHeldExpression ToInvertibleTimeSeries TokenWords Tolerance ToLowerCase Tomorrow ToNumberField TooBig Tooltip TooltipBox TooltipBoxOptions TooltipDelay TooltipStyle Top TopHatTransform ToPolarCoordinates TopologicalSort ToRadicals ToRules ToSphericalCoordinates ToString Total TotalHeight TotalLayer TotalVariationFilter TotalWidth TouchPosition TouchscreenAutoZoom TouchscreenControlPlacement ToUpperCase Tr Trace TraceAbove TraceAction TraceBackward TraceDepth TraceDialog TraceForward TraceInternal TraceLevel TraceOff TraceOn TraceOriginal TracePrint TraceScan TrackedSymbols TrackingFunction TracyWidomDistribution TradingChart TraditionalForm TraditionalFunctionNotation TraditionalNotation TraditionalOrder TrainingProgressCheckpointing TrainingProgressFunction TrainingProgressMeasurements TrainingProgressReporting TrainingStoppingCriterion TransferFunctionCancel TransferFunctionExpand TransferFunctionFactor TransferFunctionModel TransferFunctionPoles TransferFunctionTransform TransferFunctionZeros TransformationClass TransformationFunction TransformationFunctions TransformationMatrix TransformedDistribution TransformedField TransformedProcess TransformedRegion TransitionDirection TransitionDuration TransitionEffect TransitiveClosureGraph TransitiveReductionGraph Translate TranslationOptions TranslationTransform Transliterate Transparent TransparentColor Transpose TransposeLayer TrapSelection TravelDirections TravelDirectionsData TravelDistance TravelDistanceList TravelMethod TravelTime TreeForm TreeGraph TreeGraphQ TreePlot TrendStyle Triangle TriangleCenter TriangleConstruct TriangleMeasurement TriangleWave TriangularDistribution TriangulateMesh Trig TrigExpand TrigFactor TrigFactorList Trigger TrigReduce TrigToExp TrimmedMean TrimmedVariance TropicalStormData True TrueQ TruncatedDistribution TruncatedPolyhedron TsallisQExponentialDistribution TsallisQGaussianDistribution TTest Tube TubeBezierCurveBox TubeBezierCurveBoxOptions TubeBox TubeBoxOptions TubeBSplineCurveBox TubeBSplineCurveBoxOptions Tuesday TukeyLambdaDistribution TukeyWindow TunnelData Tuples TuranGraph TuringMachine TuttePolynomial TwoWayRule Typed TypeSpecifier UnateQ Uncompress UnconstrainedParameters Undefined UnderBar Underflow Underlined Underoverscript UnderoverscriptBox UnderoverscriptBoxOptions Underscript UnderscriptBox UnderscriptBoxOptions UnderseaFeatureData UndirectedEdge UndirectedGraph UndirectedGraphQ UndoOptions UndoTrackedVariables Unequal UnequalTo Unevaluated UniformDistribution UniformGraphDistribution UniformPolyhedron UniformSumDistribution Uninstall Union UnionPlus Unique UnitaryMatrixQ UnitBox UnitConvert UnitDimensions Unitize UnitRootTest UnitSimplify UnitStep UnitSystem UnitTriangle UnitVector UnitVectorLayer UnityDimensions UniverseModelData UniversityData UnixTime Unprotect UnregisterExternalEvaluator UnsameQ UnsavedVariables Unset UnsetShared UntrackedVariables Up UpArrow UpArrowBar UpArrowDownArrow Update UpdateDynamicObjects UpdateDynamicObjectsSynchronous UpdateInterval UpdateSearchIndex UpDownArrow UpEquilibrium UpperCaseQ UpperLeftArrow UpperRightArrow UpperTriangularize UpperTriangularMatrixQ Upsample UpSet UpSetDelayed UpTee UpTeeArrow UpTo UpValues URL URLBuild URLDecode URLDispatcher URLDownload URLDownloadSubmit URLEncode URLExecute URLExpand URLFetch URLFetchAsynchronous URLParse URLQueryDecode URLQueryEncode URLRead URLResponseTime URLSave URLSaveAsynchronous URLShorten URLSubmit UseGraphicsRange UserDefinedWavelet Using UsingFrontEnd UtilityFunction V2Get ValenceErrorHandling ValidationLength ValidationSet Value ValueBox ValueBoxOptions ValueDimensions ValueForm ValuePreprocessingFunction ValueQ Values ValuesData Variables Variance VarianceEquivalenceTest VarianceEstimatorFunction VarianceGammaDistribution VarianceTest VectorAngle VectorAround VectorColorFunction VectorColorFunctionScaling VectorDensityPlot VectorGlyphData VectorGreater VectorGreaterEqual VectorLess VectorLessEqual VectorMarkers VectorPlot VectorPlot3D VectorPoints VectorQ Vectors VectorScale VectorStyle Vee Verbatim Verbose VerboseConvertToPostScriptPacket VerificationTest VerifyConvergence VerifyDerivedKey VerifyDigitalSignature VerifyInterpretation VerifySecurityCertificates VerifySolutions VerifyTestAssumptions Version VersionNumber VertexAdd VertexCapacity VertexColors VertexComponent VertexConnectivity VertexContract VertexCoordinateRules VertexCoordinates VertexCorrelationSimilarity VertexCosineSimilarity VertexCount VertexCoverQ VertexDataCoordinates VertexDegree VertexDelete VertexDiceSimilarity VertexEccentricity VertexInComponent VertexInDegree VertexIndex VertexJaccardSimilarity VertexLabeling VertexLabels VertexLabelStyle VertexList VertexNormals VertexOutComponent VertexOutDegree VertexQ VertexRenderingFunction VertexReplace VertexShape VertexShapeFunction VertexSize VertexStyle VertexTextureCoordinates VertexWeight VertexWeightedGraphQ Vertical VerticalBar VerticalForm VerticalGauge VerticalSeparator VerticalSlider VerticalTilde ViewAngle ViewCenter ViewMatrix ViewPoint ViewPointSelectorSettings ViewPort ViewProjection ViewRange ViewVector ViewVertical VirtualGroupData Visible VisibleCell VoiceStyleData VoigtDistribution VolcanoData Volume VonMisesDistribution VoronoiMesh WaitAll WaitAsynchronousTask WaitNext WaitUntil WakebyDistribution WalleniusHypergeometricDistribution WaringYuleDistribution WarpingCorrespondence WarpingDistance WatershedComponents WatsonUSquareTest WattsStrogatzGraphDistribution WaveletBestBasis WaveletFilterCoefficients WaveletImagePlot WaveletListPlot WaveletMapIndexed WaveletMatrixPlot WaveletPhi WaveletPsi WaveletScale WaveletScalogram WaveletThreshold WeaklyConnectedComponents WeaklyConnectedGraphComponents WeaklyConnectedGraphQ WeakStationarity WeatherData WeatherForecastData WebAudioSearch WebElementObject WeberE WebExecute WebImage WebImageSearch WebSearch WebSessionObject WebSessions WebWindowObject Wedge Wednesday WeibullDistribution WeierstrassE1 WeierstrassE2 WeierstrassE3 WeierstrassEta1 WeierstrassEta2 WeierstrassEta3 WeierstrassHalfPeriods WeierstrassHalfPeriodW1 WeierstrassHalfPeriodW2 WeierstrassHalfPeriodW3 WeierstrassInvariantG2 WeierstrassInvariantG3 WeierstrassInvariants WeierstrassP WeierstrassPPrime WeierstrassSigma WeierstrassZeta WeightedAdjacencyGraph WeightedAdjacencyMatrix WeightedData WeightedGraphQ Weights WelchWindow WheelGraph WhenEvent Which While White WhiteNoiseProcess WhitePoint Whitespace WhitespaceCharacter WhittakerM WhittakerW WienerFilter WienerProcess WignerD WignerSemicircleDistribution WikipediaData WikipediaSearch WilksW WilksWTest WindDirectionData WindingCount WindingPolygon WindowClickSelect WindowElements WindowFloating WindowFrame WindowFrameElements WindowMargins WindowMovable WindowOpacity WindowPersistentStyles WindowSelected WindowSize WindowStatusArea WindowTitle WindowToolbars WindowWidth WindSpeedData WindVectorData WinsorizedMean WinsorizedVariance WishartMatrixDistribution With WolframAlpha WolframAlphaDate WolframAlphaQuantity WolframAlphaResult WolframLanguageData Word WordBoundary WordCharacter WordCloud WordCount WordCounts WordData WordDefinition WordFrequency WordFrequencyData WordList WordOrientation WordSearch WordSelectionFunction WordSeparators WordSpacings WordStem WordTranslation WorkingPrecision WrapAround Write WriteLine WriteString Wronskian XMLElement XMLObject XMLTemplate Xnor Xor XYZColor Yellow Yesterday YuleDissimilarity ZernikeR ZeroSymmetric ZeroTest ZeroWidthTimes Zeta ZetaZero ZIPCodeData ZipfDistribution ZoomCenter ZoomFactor ZTest ZTransform $Aborted $ActivationGroupID $ActivationKey $ActivationUserRegistered $AddOnsDirectory $AllowExternalChannelFunctions $AssertFunction $Assumptions $AsynchronousTask $AudioInputDevices $AudioOutputDevices $BaseDirectory $BatchInput $BatchOutput $BlockchainBase $BoxForms $ByteOrdering $CacheBaseDirectory $Canceled $ChannelBase $CharacterEncoding $CharacterEncodings $CloudBase $CloudConnected $CloudCreditsAvailable $CloudEvaluation $CloudExpressionBase $CloudObjectNameFormat $CloudObjectURLType $CloudRootDirectory $CloudSymbolBase $CloudUserID $CloudUserUUID $CloudVersion $CloudVersionNumber $CloudWolframEngineVersionNumber $CommandLine $CompilationTarget $ConditionHold $ConfiguredKernels $Context $ContextPath $ControlActiveSetting $Cookies $CookieStore $CreationDate $CurrentLink $CurrentTask $CurrentWebSession $DateStringFormat $DefaultAudioInputDevice $DefaultAudioOutputDevice $DefaultFont $DefaultFrontEnd $DefaultImagingDevice $DefaultLocalBase $DefaultMailbox $DefaultNetworkInterface $DefaultPath $Display $DisplayFunction $DistributedContexts $DynamicEvaluation $Echo $EmbedCodeEnvironments $EmbeddableServices $EntityStores $Epilog $EvaluationCloudBase $EvaluationCloudObject $EvaluationEnvironment $ExportFormats $Failed $FinancialDataSource $FontFamilies $FormatType $FrontEnd $FrontEndSession $GeoEntityTypes $GeoLocation $GeoLocationCity $GeoLocationCountry $GeoLocationPrecision $GeoLocationSource $HistoryLength $HomeDirectory $HTMLExportRules $HTTPCookies $HTTPRequest $IgnoreEOF $ImageFormattingWidth $ImagingDevice $ImagingDevices $ImportFormats $IncomingMailSettings $InitialDirectory $Initialization $InitializationContexts $Input $InputFileName $InputStreamMethods $Inspector $InstallationDate $InstallationDirectory $InterfaceEnvironment $InterpreterTypes $IterationLimit $KernelCount $KernelID $Language $LaunchDirectory $LibraryPath $LicenseExpirationDate $LicenseID $LicenseProcesses $LicenseServer $LicenseSubprocesses $LicenseType $Line $Linked $LinkSupported $LoadedFiles $LocalBase $LocalSymbolBase $MachineAddresses $MachineDomain $MachineDomains $MachineEpsilon $MachineID $MachineName $MachinePrecision $MachineType $MaxExtraPrecision $MaxLicenseProcesses $MaxLicenseSubprocesses $MaxMachineNumber $MaxNumber $MaxPiecewiseCases $MaxPrecision $MaxRootDegree $MessageGroups $MessageList $MessagePrePrint $Messages $MinMachineNumber $MinNumber $MinorReleaseNumber $MinPrecision $MobilePhone $ModuleNumber $NetworkConnected $NetworkInterfaces $NetworkLicense $NewMessage $NewSymbol $Notebooks $NoValue $NumberMarks $Off $OperatingSystem $Output $OutputForms $OutputSizeLimit $OutputStreamMethods $Packages $ParentLink $ParentProcessID $PasswordFile $PatchLevelID $Path $PathnameSeparator $PerformanceGoal $Permissions $PermissionsGroupBase $PersistenceBase $PersistencePath $PipeSupported $PlotTheme $Post $Pre $PreferencesDirectory $PreInitialization $PrePrint $PreRead $PrintForms $PrintLiteral $Printout3DPreviewer $ProcessID $ProcessorCount $ProcessorType $ProductInformation $ProgramName $PublisherID $RandomState $RecursionLimit $RegisteredDeviceClasses $RegisteredUserName $ReleaseNumber $RequesterAddress $RequesterWolframID $RequesterWolframUUID $ResourceSystemBase $RootDirectory $ScheduledTask $ScriptCommandLine $ScriptInputString $SecuredAuthenticationKeyTokens $ServiceCreditsAvailable $Services $SessionID $SetParentLink $SharedFunctions $SharedVariables $SoundDisplay $SoundDisplayFunction $SourceLink $SSHAuthentication $SummaryBoxDataSizeLimit $SuppressInputFormHeads $SynchronousEvaluation $SyntaxHandler $System $SystemCharacterEncoding $SystemID $SystemMemory $SystemShell $SystemTimeZone $SystemWordLength $TemplatePath $TemporaryDirectory $TemporaryPrefix $TestFileName $TextStyle $TimedOut $TimeUnit $TimeZone $TimeZoneEntity $TopDirectory $TraceOff $TraceOn $TracePattern $TracePostAction $TracePreAction $UnitSystem $Urgent $UserAddOnsDirectory $UserAgentLanguages $UserAgentMachine $UserAgentName $UserAgentOperatingSystem $UserAgentString $UserAgentVersion $UserBaseDirectory $UserDocumentsDirectory $Username $UserName $UserURLBase $Version $VersionNumber $VoiceStyles $WolframID $WolframUUID"
},contains:[e.COMMENT("\\(\\*","\\*\\)",{contains:["self"]
}),e.QUOTE_STRING_MODE,e.C_NUMBER_MODE]}}}());hljs.registerLanguage("applescript",function(){"use strict";return function(e){
var t=e.inherit(e.QUOTE_STRING_MODE,{illegal:""}),r={className:"params",
begin:"\\(",end:"\\)",contains:["self",e.C_NUMBER_MODE,t]
},n=e.COMMENT("--","$"),i=[n,e.COMMENT("\\(\\*","\\*\\)",{contains:["self",n]
}),e.HASH_COMMENT_MODE];return{name:"AppleScript",aliases:["osascript"],
keywords:{
keyword:"about above after against and around as at back before beginning behind below beneath beside between but by considering contain contains continue copy div does eighth else end equal equals error every exit fifth first for fourth from front get given global if ignoring in into is it its last local me middle mod my ninth not of on onto or over prop property put ref reference repeat returning script second set seventh since sixth some tell tenth that the|0 then third through thru timeout times to transaction try until where while whose with without",
literal:"AppleScript false linefeed return pi quote result space tab true",
built_in:"alias application boolean class constant date file integer list number real record string text activate beep count delay launch log offset read round run say summarize write character characters contents day frontmost id item length month name paragraph paragraphs rest reverse running time version weekday word words year"
},contains:[t,e.C_NUMBER_MODE,{className:"built_in",
begin:"\\b(clipboard info|the clipboard|info for|list (disks|folder)|mount volume|path to|(close|open for) access|(get|set) eof|current date|do shell script|get volume settings|random number|set volume|system attribute|system info|time to GMT|(load|run|store) script|scripting components|ASCII (character|number)|localized string|choose (application|color|file|file name|folder|from list|remote application|URL)|display (alert|dialog))\\b|^\\s*return\\b"
},{className:"literal",
begin:"\\b(text item delimiters|current application|missing value)\\b"},{
className:"keyword",
begin:"\\b(apart from|aside from|instead of|out of|greater than|isn't|(doesn't|does not) (equal|come before|come after|contain)|(greater|less) than( or equal)?|(starts?|ends|begins?) with|contained by|comes (before|after)|a (ref|reference)|POSIX file|POSIX path|(date|time) string|quoted form)\\b"
},{beginKeywords:"on",illegal:"[${=;\\n]",contains:[e.UNDERSCORE_TITLE_MODE,r]
}].concat(i),illegal:"//|->|=>|\\[\\["}}}());hljs.registerLanguage("awk",function(){"use strict";return function(e){return{
name:"Awk",keywords:{
keyword:"BEGIN END if else while do for in break continue delete next nextfile function func exit|10"
},contains:[{className:"variable",variants:[{begin:/\$[\w\d#@][\w\d_]*/},{
begin:/\$\{(.*?)}/}]},{className:"string",contains:[e.BACKSLASH_ESCAPE],
variants:[{begin:/(u|b)?r?'''/,end:/'''/,relevance:10},{begin:/(u|b)?r?"""/,
end:/"""/,relevance:10},{begin:/(u|r|ur)'/,end:/'/,relevance:10},{
begin:/(u|r|ur)"/,end:/"/,relevance:10},{begin:/(b|br)'/,end:/'/},{
begin:/(b|br)"/,end:/"/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]
},e.REGEXP_MODE,e.HASH_COMMENT_MODE,e.NUMBER_MODE]}}}());hljs.registerLanguage("json",function(){"use strict";return function(n){var e={
literal:"true false null"
},i=[n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE],t=[n.QUOTE_STRING_MODE,n.C_NUMBER_MODE],a={
end:",",endsWithParent:!0,excludeEnd:!0,contains:t,keywords:e},l={begin:"{",
end:"}",contains:[{className:"attr",begin:/"/,end:/"/,
contains:[n.BACKSLASH_ESCAPE],illegal:"\\n"},n.inherit(a,{begin:/:/
})].concat(i),illegal:"\\S"},s={begin:"\\[",end:"\\]",contains:[n.inherit(a)],
illegal:"\\S"};return t.push(l,s),i.forEach((function(n){t.push(n)})),{
name:"JSON",contains:t,keywords:e,illegal:"\\S"}}}());hljs.registerLanguage("coffeescript",function(){"use strict"
;const e=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],n=["true","false","null","undefined","NaN","Infinity"],a=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"])
;return function(r){var t,i={
keyword:e.concat(["then","unless","until","loop","by","when","and","or","is","isnt","not"]).filter((t=["var","const","let","function","static"],
e=>!t.includes(e))).join(" "),
literal:n.concat(["yes","no","on","off"]).join(" "),
built_in:a.concat(["npm","print"]).join(" ")},s="[A-Za-z$_][0-9A-Za-z$_]*",o={
className:"subst",begin:/#\{/,end:/}/,keywords:i
},c=[r.BINARY_NUMBER_MODE,r.inherit(r.C_NUMBER_MODE,{starts:{end:"(\\s*/)?",
relevance:0}}),{className:"string",variants:[{begin:/'''/,end:/'''/,
contains:[r.BACKSLASH_ESCAPE]},{begin:/'/,end:/'/,contains:[r.BACKSLASH_ESCAPE]
},{begin:/"""/,end:/"""/,contains:[r.BACKSLASH_ESCAPE,o]},{begin:/"/,end:/"/,
contains:[r.BACKSLASH_ESCAPE,o]}]},{className:"regexp",variants:[{begin:"///",
end:"///",contains:[o,r.HASH_COMMENT_MODE]},{begin:"//[gim]{0,3}(?=\\W)",
relevance:0},{begin:/\/(?![ *]).*?(?![\\]).\/[gim]{0,3}(?=\W)/}]},{begin:"@"+s
},{subLanguage:"javascript",excludeBegin:!0,excludeEnd:!0,variants:[{
begin:"```",end:"```"},{begin:"`",end:"`"}]}];o.contains=c
;var l=r.inherit(r.TITLE_MODE,{begin:s}),d="(\\(.*\\))?\\s*\\B[-=]>",g={
className:"params",begin:"\\([^\\(]",returnBegin:!0,contains:[{begin:/\(/,
end:/\)/,keywords:i,contains:["self"].concat(c)}]};return{name:"CoffeeScript",
aliases:["coffee","cson","iced"],keywords:i,illegal:/\/\*/,
contains:c.concat([r.COMMENT("###","###"),r.HASH_COMMENT_MODE,{
className:"function",begin:"^\\s*"+s+"\\s*=\\s*"+d,end:"[-=]>",returnBegin:!0,
contains:[l,g]},{begin:/[:\(,=]\s*/,relevance:0,contains:[{className:"function",
begin:d,end:"[-=]>",returnBegin:!0,contains:[g]}]},{className:"class",
beginKeywords:"class",end:"$",illegal:/[:="\[\]]/,contains:[{
beginKeywords:"extends",endsWithParent:!0,illegal:/[:="\[\]]/,contains:[l]},l]
},{begin:s+":",end:":",returnBegin:!0,returnEnd:!0,relevance:0}])}}}());hljs.registerLanguage("haxe",function(){"use strict";return function(e){return{
name:"Haxe",aliases:["hx"],keywords:{
keyword:"break case cast catch continue default do dynamic else enum extern for function here if import in inline never new override package private get set public return static super switch this throw trace try typedef untyped using var while Int Float String Bool Dynamic Void Array ",
built_in:"trace this",literal:"true false null _"},contains:[{
className:"string",begin:"'",end:"'",contains:[e.BACKSLASH_ESCAPE,{
className:"subst",begin:"\\$\\{",end:"\\}"},{className:"subst",begin:"\\$",
end:"\\W}"}]
},e.QUOTE_STRING_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.C_NUMBER_MODE,{
className:"meta",begin:"@:",end:"$"},{className:"meta",begin:"#",end:"$",
keywords:{"meta-keyword":"if else elseif end error"}},{className:"type",
begin:":[ \t]*",end:"[^A-Za-z0-9_ \t\\->]",excludeBegin:!0,excludeEnd:!0,
relevance:0},{className:"type",begin:":[ \t]*",end:"\\W",excludeBegin:!0,
excludeEnd:!0},{className:"type",begin:"new *",end:"\\W",excludeBegin:!0,
excludeEnd:!0},{className:"class",beginKeywords:"enum",end:"\\{",
contains:[e.TITLE_MODE]},{className:"class",beginKeywords:"abstract",
end:"[\\{$]",contains:[{className:"type",begin:"\\(",end:"\\)",excludeBegin:!0,
excludeEnd:!0},{className:"type",begin:"from +",end:"\\W",excludeBegin:!0,
excludeEnd:!0},{className:"type",begin:"to +",end:"\\W",excludeBegin:!0,
excludeEnd:!0},e.TITLE_MODE],keywords:{keyword:"abstract from to"}},{
className:"class",begin:"\\b(class|interface) +",end:"[\\{$]",excludeEnd:!0,
keywords:"class interface",contains:[{className:"keyword",
begin:"\\b(extends|implements) +",keywords:"extends implements",contains:[{
className:"type",begin:e.IDENT_RE,relevance:0}]},e.TITLE_MODE]},{
className:"function",beginKeywords:"function",end:"\\(",excludeEnd:!0,
illegal:"\\S",contains:[e.TITLE_MODE]}],illegal:/<\//}}}());hljs.registerLanguage("elm",function(){"use strict";return function(e){var n={
variants:[e.COMMENT("--","$"),e.COMMENT("{-","-}",{contains:["self"]})]},i={
className:"type",begin:"\\b[A-Z][\\w']*",relevance:0},s={begin:"\\(",end:"\\)",
illegal:'"',contains:[{className:"type",
begin:"\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?"},n]};return{name:"Elm",
keywords:"let in if then else case of where module import exposing type alias as infix infixl infixr port effect command subscription",
contains:[{beginKeywords:"port effect module",end:"exposing",
keywords:"port effect module where command subscription exposing",
contains:[s,n],illegal:"\\W\\.|;"},{begin:"import",end:"$",
keywords:"import as exposing",contains:[s,n],illegal:"\\W\\.|;"},{begin:"type",
end:"$",keywords:"type alias",contains:[i,s,{begin:"{",end:"}",
contains:s.contains},n]},{beginKeywords:"infix infixl infixr",end:"$",
contains:[e.C_NUMBER_MODE,n]},{begin:"port",end:"$",keywords:"port",contains:[n]
},{className:"string",begin:"'\\\\?.",end:"'",illegal:"."
},e.QUOTE_STRING_MODE,e.C_NUMBER_MODE,i,e.inherit(e.TITLE_MODE,{
begin:"^[_a-z][\\w']*"}),n,{begin:"->|<-"}],illegal:/;/}}}());hljs.registerLanguage("xml",function(){"use strict";return function(e){var n={
className:"symbol",begin:"&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;"},a={begin:"\\s",
contains:[{className:"meta-keyword",begin:"#?[a-z_][a-z1-9_-]+",illegal:"\\n"}]
},s=e.inherit(a,{begin:"\\(",end:"\\)"}),t=e.inherit(e.APOS_STRING_MODE,{
className:"meta-string"}),i=e.inherit(e.QUOTE_STRING_MODE,{
className:"meta-string"}),c={endsWithParent:!0,illegal:/</,relevance:0,
contains:[{className:"attr",begin:"[A-Za-z0-9\\._:-]+",relevance:0},{
begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{
begin:/"/,end:/"/,contains:[n]},{begin:/'/,end:/'/,contains:[n]},{
begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",
aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],
case_insensitive:!0,contains:[{className:"meta",begin:"<![a-z]",end:">",
relevance:10,contains:[a,i,t,s,{begin:"\\[",end:"\\]",contains:[{
className:"meta",begin:"<![a-z]",end:">",contains:[a,s,i,t]}]}]
},e.COMMENT("\x3c!--","--\x3e",{relevance:10}),{begin:"<\\!\\[CDATA\\[",
end:"\\]\\]>",relevance:10},n,{className:"meta",begin:/<\?xml/,end:/\?>/,
relevance:10},{className:"tag",begin:"<style(?=\\s|>)",end:">",keywords:{
name:"style"},contains:[c],starts:{end:"</style>",returnEnd:!0,
subLanguage:["css","xml"]}},{className:"tag",begin:"<script(?=\\s|>)",end:">",
keywords:{name:"script"},contains:[c],starts:{end:"<\/script>",returnEnd:!0,
subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:"</?",
end:"/?>",contains:[{className:"name",begin:/[^\/><\s]+/,relevance:0},c]}]}}
}());hljs.registerLanguage("crystal",function(){"use strict";return function(e){
var n="(_*[ui](8|16|32|64|128))?",i="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|[=!]~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~|]|//|//=|&[-+*]=?|&\\*\\*|\\[\\][=?]?",a="[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?",s={
$pattern:"[a-zA-Z_]\\w*[!?=]?",
keyword:"abstract alias annotation as as? asm begin break case class def do else elsif end ensure enum extend for fun if include instance_sizeof is_a? lib macro module next nil? of out pointerof private protected rescue responds_to? return require select self sizeof struct super then type typeof union uninitialized unless until verbatim when while with yield __DIR__ __END_LINE__ __FILE__ __LINE__",
literal:"false nil true"},t={className:"subst",begin:"#{",end:"}",keywords:s
},r={className:"template-variable",variants:[{begin:"\\{\\{",end:"\\}\\}"},{
begin:"\\{%",end:"%\\}"}],keywords:s};function c(e,n){var i=[{begin:e,end:n}]
;return i[0].contains=i,i}var l={className:"string",
contains:[e.BACKSLASH_ESCAPE,t],variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/
},{begin:/`/,end:/`/},{begin:"%[Qwi]?\\(",end:"\\)",contains:c("\\(","\\)")},{
begin:"%[Qwi]?\\[",end:"\\]",contains:c("\\[","\\]")},{begin:"%[Qwi]?{",end:"}",
contains:c("{","}")},{begin:"%[Qwi]?<",end:">",contains:c("<",">")},{
begin:"%[Qwi]?\\|",end:"\\|"},{begin:/<<-\w+$/,end:/^\s*\w+$/}],relevance:0},b={
className:"string",variants:[{begin:"%q\\(",end:"\\)",contains:c("\\(","\\)")},{
begin:"%q\\[",end:"\\]",contains:c("\\[","\\]")},{begin:"%q{",end:"}",
contains:c("{","}")},{begin:"%q<",end:">",contains:c("<",">")},{begin:"%q\\|",
end:"\\|"},{begin:/<<-'\w+'$/,end:/^\s*\w+$/}],relevance:0},o={
begin:"(?!%})("+e.RE_STARTERS_RE+"|\\n|\\b(case|if|select|unless|until|when|while)\\b)\\s*",
keywords:"case if select unless until when while",contains:[{className:"regexp",
contains:[e.BACKSLASH_ESCAPE,t],variants:[{begin:"//[a-z]*",relevance:0},{
begin:"/(?!\\/)",end:"/[a-z]*"}]}],relevance:0},g=[r,l,b,{className:"regexp",
contains:[e.BACKSLASH_ESCAPE,t],variants:[{begin:"%r\\(",end:"\\)",
contains:c("\\(","\\)")},{begin:"%r\\[",end:"\\]",contains:c("\\[","\\]")},{
begin:"%r{",end:"}",contains:c("{","}")},{begin:"%r<",end:">",
contains:c("<",">")},{begin:"%r\\|",end:"\\|"}],relevance:0},o,{
className:"meta",begin:"@\\[",end:"\\]",
contains:[e.inherit(e.QUOTE_STRING_MODE,{className:"meta-string"})]
},e.HASH_COMMENT_MODE,{className:"class",beginKeywords:"class module struct",
end:"$|;",illegal:/=/,contains:[e.HASH_COMMENT_MODE,e.inherit(e.TITLE_MODE,{
begin:a}),{begin:"<"}]},{className:"class",beginKeywords:"lib enum union",
end:"$|;",illegal:/=/,contains:[e.HASH_COMMENT_MODE,e.inherit(e.TITLE_MODE,{
begin:a})],relevance:10},{beginKeywords:"annotation",end:"$|;",illegal:/=/,
contains:[e.HASH_COMMENT_MODE,e.inherit(e.TITLE_MODE,{begin:a})],relevance:10},{
className:"function",beginKeywords:"def",end:/\B\b/,
contains:[e.inherit(e.TITLE_MODE,{begin:i,endsParent:!0})]},{
className:"function",beginKeywords:"fun macro",end:/\B\b/,
contains:[e.inherit(e.TITLE_MODE,{begin:i,endsParent:!0})],relevance:5},{
className:"symbol",begin:e.UNDERSCORE_IDENT_RE+"(\\!|\\?)?:",relevance:0},{
className:"symbol",begin:":",contains:[l,{begin:i}],relevance:0},{
className:"number",variants:[{begin:"\\b0b([01_]+)"+n},{begin:"\\b0o([0-7_]+)"+n
},{begin:"\\b0x([A-Fa-f0-9_]+)"+n},{
begin:"\\b([1-9][0-9_]*[0-9]|[0-9])(\\.[0-9][0-9_]*)?([eE]_*[-+]?[0-9_]*)?(_*f(32|64))?(?!_)"
},{begin:"\\b([1-9][0-9_]*|0)"+n}],relevance:0}]
;return t.contains=g,r.contains=g.slice(1),{name:"Crystal",aliases:["cr"],
keywords:s,contains:g}}}());hljs.registerLanguage("bash",function(){"use strict";return function(e){
const s={};Object.assign(s,{className:"variable",variants:[{
begin:/\$[\w\d#@][\w\d_]*/},{begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,
contains:[s]}]}]});const n={className:"subst",begin:/\$\(/,end:/\)/,
contains:[e.BACKSLASH_ESCAPE]},t={begin:/<<-?\s*(?=\w+)/,starts:{
contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}
},a={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,s,n]}
;n.contains.push(a);const i={begin:/\$\(\(/,end:/\)\)/,contains:[{
begin:/\d+#[0-9a-f]+/,className:"number"},e.NUMBER_MODE,s]},c=e.SHEBANG({
binary:"(fish|bash|zsh|sh|csh|ksh|tcsh|dash|scsh)",relevance:10}),o={
className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,
contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0};return{
name:"Bash",aliases:["sh","zsh"],keywords:{$pattern:/\b[a-z._-]+\b/,
keyword:"if then else elif fi for while in do done case esac function",
literal:"true false",
built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp"
},contains:[c,e.SHEBANG(),o,i,e.HASH_COMMENT_MODE,t,a,{className:"",begin:/\\"/
},{className:"string",begin:/'/,end:/'/},s]}}}());hljs.registerLanguage("shell",function(){"use strict";return function(s){return{
name:"Shell Session",aliases:["console"],contains:[{className:"meta",
begin:"^\\s{0,3}[/\\w\\d\\[\\]()@-]*[>%$#]",starts:{end:"$",subLanguage:"bash"}
}]}}}());hljs.registerLanguage("ocaml",function(){"use strict";return function(e){return{
name:"OCaml",aliases:["ml"],keywords:{$pattern:"[a-z_]\\w*!?",
keyword:"and as assert asr begin class constraint do done downto else end exception external for fun function functor if in include inherit! inherit initializer land lazy let lor lsl lsr lxor match method!|10 method mod module mutable new object of open! open or private rec sig struct then to try type val! val virtual when while with parser value",
built_in:"array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 string unit in_channel out_channel ref",
literal:"true false"},illegal:/\/\/|>>/,contains:[{className:"literal",
begin:"\\[(\\|\\|)?\\]|\\(\\)",relevance:0},e.COMMENT("\\(\\*","\\*\\)",{
contains:["self"]}),{className:"symbol",begin:"'[A-Za-z_](?!')[\\w']*"},{
className:"type",begin:"`[A-Z][\\w']*"},{className:"type",
begin:"\\b[A-Z][\\w']*",relevance:0},{begin:"[a-z_]\\w*'[\\w']*",relevance:0
},e.inherit(e.APOS_STRING_MODE,{className:"string",relevance:0
}),e.inherit(e.QUOTE_STRING_MODE,{illegal:null}),{className:"number",
begin:"\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)",
relevance:0},{begin:/[-=]>/}]}}}());hljs.registerLanguage("basic",function(){"use strict";return function(E){return{
name:"BASIC",case_insensitive:!0,illegal:"^.",keywords:{
$pattern:"[a-zA-Z][a-zA-Z0-9_$%!#]*",
keyword:"ABS ASC AND ATN AUTO|0 BEEP BLOAD|10 BSAVE|10 CALL CALLS CDBL CHAIN CHDIR CHR$|10 CINT CIRCLE CLEAR CLOSE CLS COLOR COM COMMON CONT COS CSNG CSRLIN CVD CVI CVS DATA DATE$ DEFDBL DEFINT DEFSNG DEFSTR DEF|0 SEG USR DELETE DIM DRAW EDIT END ENVIRON ENVIRON$ EOF EQV ERASE ERDEV ERDEV$ ERL ERR ERROR EXP FIELD FILES FIX FOR|0 FRE GET GOSUB|10 GOTO HEX$ IF THEN ELSE|0 INKEY$ INP INPUT INPUT# INPUT$ INSTR IMP INT IOCTL IOCTL$ KEY ON OFF LIST KILL LEFT$ LEN LET LINE LLIST LOAD LOC LOCATE LOF LOG LPRINT USING LSET MERGE MID$ MKDIR MKD$ MKI$ MKS$ MOD NAME NEW NEXT NOISE NOT OCT$ ON OR PEN PLAY STRIG OPEN OPTION BASE OUT PAINT PALETTE PCOPY PEEK PMAP POINT POKE POS PRINT PRINT] PSET PRESET PUT RANDOMIZE READ REM RENUM RESET|0 RESTORE RESUME RETURN|0 RIGHT$ RMDIR RND RSET RUN SAVE SCREEN SGN SHELL SIN SOUND SPACE$ SPC SQR STEP STICK STOP STR$ STRING$ SWAP SYSTEM TAB TAN TIME$ TIMER TROFF TRON TO USR VAL VARPTR VARPTR$ VIEW WAIT WHILE WEND WIDTH WINDOW WRITE XOR"
},contains:[E.QUOTE_STRING_MODE,E.COMMENT("REM","$",{relevance:10
}),E.COMMENT("'","$",{relevance:0}),{className:"symbol",begin:"^[0-9]+ ",
relevance:10},{className:"number",begin:"\\b([0-9]+[0-9edED.]*[#!]?)",
relevance:0},{className:"number",begin:"(&[hH][0-9a-fA-F]{1,4})"},{
className:"number",begin:"(&[oO][0-7]{1,6})"}]}}}());hljs.registerLanguage("sml",function(){"use strict";return function(e){return{
name:"SML (Standard ML)",aliases:["ml"],keywords:{$pattern:"[a-z_]\\w*!?",
keyword:"abstype and andalso as case datatype do else end eqtype exception fn fun functor handle if in include infix infixr let local nonfix of op open orelse raise rec sharing sig signature struct structure then type val with withtype where while",
built_in:"array bool char exn int list option order real ref string substring vector unit word",
literal:"true false NONE SOME LESS EQUAL GREATER nil"},illegal:/\/\/|>>/,
contains:[{className:"literal",begin:/\[(\|\|)?\]|\(\)/,relevance:0
},e.COMMENT("\\(\\*","\\*\\)",{contains:["self"]}),{className:"symbol",
begin:"'[A-Za-z_](?!')[\\w']*"},{className:"type",begin:"`[A-Z][\\w']*"},{
className:"type",begin:"\\b[A-Z][\\w']*",relevance:0},{
begin:"[a-z_]\\w*'[\\w']*"},e.inherit(e.APOS_STRING_MODE,{className:"string",
relevance:0}),e.inherit(e.QUOTE_STRING_MODE,{illegal:null}),{className:"number",
begin:"\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)",
relevance:0},{begin:/[-=]>/}]}}}());hljs.registerLanguage("javascript",function(){"use strict"
;const e="[A-Za-z$_][0-9A-Za-z$_]*",n=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],a=["true","false","null","undefined","NaN","Infinity"],s=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"])
;function r(e){return i("(?=",e,")")}function t(e){return i("(",e,")?")}
function i(...e){return e.map((e=>{
return(n=e)?"string"==typeof n?n:n.source:null;var n})).join("")}
return function(c){const o=e,l={begin:/<[A-Za-z0-9\\._:-]+/,
end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{
const a=e[0].length+e.index,s=e.input[a];"<"!==s?">"===s&&(((e,{after:n})=>{
const a=e[0].replace("<","</");return-1!==e.input.indexOf(a,n)})(e,{after:a
})||n.ignoreMatch()):n.ignoreMatch()}},g={$pattern:e,keyword:n.join(" "),
literal:a.join(" "),built_in:s.join(" ")
},d=(e,n)=>`\\b0[${e}][${n}]([${n}_]*[${n}])?n?`,b=/[1-9]([0-9_]*\d)?/,E=/\d([0-9_]*\d)?/,u=i(/[eE][+-]?/,E),_={
className:"number",variants:[{begin:d("bB","01")},{begin:d("oO","0-7")},{
begin:d("xX","0-9a-fA-F")},{begin:i(/\b/,b,"n")},{begin:i(/(\b0)?\./,E,t(u))},{
begin:i(/\b/,b,t(i(/\./,t(E))),t(u))},{begin:/\b0[\.n]?/}],relevance:0},m={
className:"subst",begin:"\\$\\{",end:"\\}",keywords:g,contains:[]},N={
begin:"html`",end:"",starts:{end:"`",returnEnd:!1,
contains:[c.BACKSLASH_ESCAPE,m],subLanguage:"xml"}},y={begin:"css`",end:"",
starts:{end:"`",returnEnd:!1,contains:[c.BACKSLASH_ESCAPE,m],subLanguage:"css"}
},f={className:"string",begin:"`",end:"`",contains:[c.BACKSLASH_ESCAPE,m]},A={
className:"comment",variants:[c.COMMENT("/\\*\\*","\\*/",{relevance:0,
contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",
begin:"\\{",end:"\\}",relevance:0},{className:"variable",
begin:o+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,
relevance:0}]}]}),c.C_BLOCK_COMMENT_MODE,c.C_LINE_COMMENT_MODE]
},p=[c.APOS_STRING_MODE,c.QUOTE_STRING_MODE,N,y,f,_,c.REGEXP_MODE]
;m.contains=p.concat({begin:/{/,end:/}/,keywords:g,contains:["self"].concat(p)})
;const O=[].concat(A,m.contains),T=O.concat([{begin:/\(/,end:/\)/,keywords:g,
contains:["self"].concat(O)}]),R={className:"params",begin:/\(/,end:/\)/,
excludeBegin:!0,excludeEnd:!0,keywords:g,contains:T};return{name:"Javascript",
aliases:["js","jsx","mjs","cjs"],keywords:g,exports:{PARAMS_CONTAINS:T},
illegal:/#(?![$_A-z])/,contains:[c.SHEBANG({label:"shebang",binary:"node",
relevance:5}),{label:"use_strict",className:"meta",relevance:10,
begin:/^\s*['"]use (strict|asm)['"]/
},c.APOS_STRING_MODE,c.QUOTE_STRING_MODE,N,y,f,A,_,{
begin:i(/[{,\n]\s*/,r(i(/(\/\/.*$)*/,/(\/\*(.|\n)*\*\/)*/,/\s*/,o+"\\s*:"))),
relevance:0,contains:[{className:"attr",begin:o+r("\\s*:"),relevance:0}]},{
begin:"("+c.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",
keywords:"return throw case",contains:[A,c.REGEXP_MODE,{className:"function",
begin:"(\\([^()]*(\\([^()]*(\\([^()]*\\))*[^()]*\\))*[^()]*\\)|"+c.UNDERSCORE_IDENT_RE+")\\s*=>",
returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{
begin:c.UNDERSCORE_IDENT_RE},{className:null,begin:/\(\s*\)/,skip:!0},{
begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:g,contains:T}]}]},{
begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{
begin:"<>",end:"</>"},{begin:l.begin,"on:begin":l.isTrulyOpeningTag,end:l.end}],
subLanguage:"xml",contains:[{begin:l.begin,end:l.end,skip:!0,contains:["self"]}]
}],relevance:0},{className:"function",beginKeywords:"function",end:/[{;]/,
excludeEnd:!0,keywords:g,contains:["self",c.inherit(c.TITLE_MODE,{begin:o}),R],
illegal:/%/},{className:"function",
begin:c.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\))*[^()]*\\))*[^()]*\\)\\s*{",
returnBegin:!0,contains:[R,c.inherit(c.TITLE_MODE,{begin:o})]},{variants:[{
begin:"\\."+o},{begin:"\\$"+o}],relevance:0},{className:"class",
beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{
beginKeywords:"extends"},c.UNDERSCORE_TITLE_MODE]},{begin:/\b(?=constructor)/,
end:/[\{;]/,excludeEnd:!0,contains:[c.inherit(c.TITLE_MODE,{begin:o}),"self",R]
},{begin:"(get|set)\\s+(?="+o+"\\()",end:/{/,keywords:"get set",
contains:[c.inherit(c.TITLE_MODE,{begin:o}),{begin:/\(\)/},R]},{begin:/\$[(.]/}]
}}}());hljs.registerLanguage("prolog",function(){"use strict";return function(n){
var e={begin:/\(/,end:/\)/,relevance:0},a={begin:/\[/,end:/\]/},s={
className:"comment",begin:/%/,end:/$/,contains:[n.PHRASAL_WORDS_MODE]},i={
className:"string",begin:/`/,end:/`/,contains:[n.BACKSLASH_ESCAPE]},c=[{
begin:/[a-z][A-Za-z0-9_]*/,relevance:0},{className:"symbol",variants:[{
begin:/[A-Z][a-zA-Z0-9_]*/},{begin:/_[A-Za-z0-9_]*/}],relevance:0},e,{begin:/:-/
},a,s,n.C_BLOCK_COMMENT_MODE,n.QUOTE_STRING_MODE,n.APOS_STRING_MODE,i,{
className:"string",begin:/0\'(\\\'|.)/},{className:"string",begin:/0\'\\s/
},n.C_NUMBER_MODE];return e.contains=c,a.contains=c,{name:"Prolog",
contains:c.concat([{begin:/\.$/}])}}}());hljs.registerLanguage("ruby",function(){"use strict";return function(e){
var n="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",a={
keyword:"and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",
literal:"true false nil"},s={className:"doctag",begin:"@[A-Za-z]+"},i={
begin:"#<",end:">"},r=[e.COMMENT("#","$",{contains:[s]
}),e.COMMENT("^\\=begin","^\\=end",{contains:[s],relevance:10
}),e.COMMENT("^__END__","\\n$")],c={className:"subst",begin:"#\\{",end:"}",
keywords:a},t={className:"string",contains:[e.BACKSLASH_ESCAPE,c],variants:[{
begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/`/,end:/`/},{
begin:"%[qQwWx]?\\(",end:"\\)"},{begin:"%[qQwWx]?\\[",end:"\\]"},{
begin:"%[qQwWx]?{",end:"}"},{begin:"%[qQwWx]?<",end:">"},{begin:"%[qQwWx]?/",
end:"/"},{begin:"%[qQwWx]?%",end:"%"},{begin:"%[qQwWx]?-",end:"-"},{
begin:"%[qQwWx]?\\|",end:"\\|"},{
begin:/\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/},{
begin:/<<[-~]?'?(\w+)(?:.|\n)*?\n\s*\1\b/,returnBegin:!0,contains:[{
begin:/<<[-~]?'?/},e.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,
contains:[e.BACKSLASH_ESCAPE,c]})]}]},b={className:"params",begin:"\\(",
end:"\\)",endsParent:!0,keywords:a},d=[t,i,{className:"class",
beginKeywords:"class module",end:"$|;",illegal:/=/,
contains:[e.inherit(e.TITLE_MODE,{begin:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"}),{
begin:"<\\s*",contains:[{begin:"("+e.IDENT_RE+"::)?"+e.IDENT_RE}]}].concat(r)},{
className:"function",beginKeywords:"def",end:"$|;",
contains:[e.inherit(e.TITLE_MODE,{begin:n}),b].concat(r)},{begin:e.IDENT_RE+"::"
},{className:"symbol",begin:e.UNDERSCORE_IDENT_RE+"(\\!|\\?)?:",relevance:0},{
className:"symbol",begin:":(?!\\s)",contains:[t,{begin:n}],relevance:0},{
className:"number",
begin:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
relevance:0},{begin:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},{className:"params",
begin:/\|/,end:/\|/,keywords:a},{begin:"("+e.RE_STARTERS_RE+"|unless)\\s*",
keywords:"unless",contains:[i,{className:"regexp",
contains:[e.BACKSLASH_ESCAPE,c],illegal:/\n/,variants:[{begin:"/",end:"/[a-z]*"
},{begin:"%r{",end:"}[a-z]*"},{begin:"%r\\(",end:"\\)[a-z]*"},{begin:"%r!",
end:"![a-z]*"},{begin:"%r\\[",end:"\\][a-z]*"}]}].concat(r),relevance:0
}].concat(r);c.contains=d,b.contains=d;var g=[{begin:/^\s*=>/,starts:{end:"$",
contains:d}},{className:"meta",
begin:"^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+>|(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>)",
starts:{end:"$",contains:d}}];return{name:"Ruby",
aliases:["rb","gemspec","podspec","thor","irb"],keywords:a,illegal:/\/\*/,
contains:r.concat(g).concat(d)}}}());hljs.registerLanguage("properties",function(){"use strict";return function(e){
var n="[ \\t\\f]*",t="("+n+"[:=]"+n+"|[ \\t\\f]+)",a="([^\\\\\\W:= \\t\\f\\n]|\\\\.)+",s="([^\\\\:= \\t\\f\\n]|\\\\.)+",r={
end:t,relevance:0,starts:{className:"string",end:/$/,relevance:0,contains:[{
begin:"\\\\\\n"}]}};return{name:".properties",case_insensitive:!0,illegal:/\S/,
contains:[e.COMMENT("^\\s*[!#]","$"),{begin:a+t,returnBegin:!0,contains:[{
className:"attr",begin:a,endsParent:!0,relevance:0}],starts:r},{begin:s+t,
returnBegin:!0,relevance:0,contains:[{className:"meta",begin:s,endsParent:!0,
relevance:0}],starts:r},{className:"attr",relevance:0,begin:s+n+"$"}]}}}());hljs.registerLanguage("go",function(){"use strict";return function(e){var n={
keyword:"break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune",
literal:"true false iota nil",
built_in:"append cap close complex copy imag len make new panic print println real recover delete"
};return{name:"Go",aliases:["golang"],keywords:n,illegal:"</",
contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"string",
variants:[e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{begin:"`",end:"`"}]},{
className:"number",variants:[{begin:e.C_NUMBER_RE+"[i]",relevance:1
},e.C_NUMBER_MODE]},{begin:/:=/},{className:"function",beginKeywords:"func",
end:"\\s*(\\{|$)",excludeEnd:!0,contains:[e.TITLE_MODE,{className:"params",
begin:/\(/,end:/\)/,keywords:n,illegal:/["']/}]}]}}}());hljs.registerLanguage("sql",function(){"use strict";return function(e){
var t=e.COMMENT("--","$");return{name:"SQL",case_insensitive:!0,
illegal:/[<>{}*]/,contains:[{
beginKeywords:"begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke comment values with",
end:/;/,endsWithParent:!0,keywords:{$pattern:/[\w\.]+/,
keyword:"as abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias all allocate allow alter always analyze ancillary and anti any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound bucket buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain explode export export_set extended extent external external_1 external_2 externally extract failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force foreign form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour hours http id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lateral lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minutes minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notnull notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second seconds section securefile security seed segment select self semi sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tablesample tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unnest unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace window with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek",
literal:"true false null unknown",
built_in:"array bigint binary bit blob bool boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text time timestamp tinyint varchar varchar2 varying void"
},contains:[{className:"string",begin:"'",end:"'",contains:[{begin:"''"}]},{
className:"string",begin:'"',end:'"',contains:[{begin:'""'}]},{
className:"string",begin:"`",end:"`"
},e.C_NUMBER_MODE,e.C_BLOCK_COMMENT_MODE,t,e.HASH_COMMENT_MODE]
},e.C_BLOCK_COMMENT_MODE,t,e.HASH_COMMENT_MODE]}}}());hljs.registerLanguage("haskell",function(){"use strict";return function(e){
var n={variants:[e.COMMENT("--","$"),e.COMMENT("{-","-}",{contains:["self"]})]
},i={className:"meta",begin:"{-#",end:"#-}"},a={className:"meta",begin:"^#",
end:"$"},s={className:"type",begin:"\\b[A-Z][\\w']*",relevance:0},l={
begin:"\\(",end:"\\)",illegal:'"',contains:[i,a,{className:"type",
begin:"\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?"},e.inherit(e.TITLE_MODE,{
begin:"[_a-z][\\w']*"}),n]};return{name:"Haskell",aliases:["hs"],
keywords:"let in if then else case of where do module import hiding qualified type data newtype deriving class instance as default infix infixl infixr foreign export ccall stdcall cplusplus jvm dotnet safe unsafe family forall mdo proc rec",
contains:[{beginKeywords:"module",end:"where",keywords:"module where",
contains:[l,n],illegal:"\\W\\.|;"},{begin:"\\bimport\\b",end:"$",
keywords:"import qualified as hiding",contains:[l,n],illegal:"\\W\\.|;"},{
className:"class",begin:"^(\\s*)?(class|instance)\\b",end:"where",
keywords:"class family instance where",contains:[s,l,n]},{className:"class",
begin:"\\b(data|(new)?type)\\b",end:"$",
keywords:"data family type newtype deriving",contains:[i,s,l,{begin:"{",end:"}",
contains:l.contains},n]},{beginKeywords:"default",end:"$",contains:[s,l,n]},{
beginKeywords:"infix infixl infixr",end:"$",contains:[e.C_NUMBER_MODE,n]},{
begin:"\\bforeign\\b",end:"$",
keywords:"foreign import export ccall stdcall cplusplus jvm dotnet safe unsafe",
contains:[s,e.QUOTE_STRING_MODE,n]},{className:"meta",
begin:"#!\\/usr\\/bin\\/env runhaskell",end:"$"
},i,a,e.QUOTE_STRING_MODE,e.C_NUMBER_MODE,s,e.inherit(e.TITLE_MODE,{
begin:"^[_a-z][\\w']*"}),n,{begin:"->|<-"}]}}}());hljs.registerLanguage("csharp",function(){"use strict";return function(e){
var n={
keyword:["abstract","as","base","break","case","class","const","continue","do","else","event","explicit","extern","finally","fixed","for","foreach","goto","if","implicit","in","interface","internal","is","lock","namespace","new","operator","out","override","params","private","protected","public","readonly","record","ref","return","sealed","sizeof","stackalloc","static","struct","switch","this","throw","try","typeof","unchecked","unsafe","using","virtual","void","volatile","while"].concat(["add","alias","and","ascending","async","await","by","descending","equals","from","get","global","group","init","into","join","let","nameof","not","notnull","on","or","orderby","partial","remove","select","set","unmanaged","value","var","when","where","with","yield"]).join(" "),
built_in:"bool byte char decimal delegate double dynamic enum float int long nint nuint object sbyte short string ulong unit ushort",
literal:"default false null true"},i=e.inherit(e.TITLE_MODE,{
begin:"[a-zA-Z](\\.?\\w)*"}),a={className:"number",variants:[{
begin:"\\b(0b[01']+)"},{
begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"},{
begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
}],relevance:0},s={className:"string",begin:'@"',end:'"',contains:[{begin:'""'}]
},t=e.inherit(s,{illegal:/\n/}),r={className:"subst",begin:"{",end:"}",
keywords:n},l=e.inherit(r,{illegal:/\n/}),c={className:"string",begin:/\$"/,
end:'"',illegal:/\n/,contains:[{begin:"{{"},{begin:"}}"},e.BACKSLASH_ESCAPE,l]
},o={className:"string",begin:/\$@"/,end:'"',contains:[{begin:"{{"},{begin:"}}"
},{begin:'""'},r]},d=e.inherit(o,{illegal:/\n/,contains:[{begin:"{{"},{
begin:"}}"},{begin:'""'},l]})
;r.contains=[o,c,s,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,a,e.C_BLOCK_COMMENT_MODE],
l.contains=[d,c,t,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,a,e.inherit(e.C_BLOCK_COMMENT_MODE,{
illegal:/\n/})];var g={variants:[o,c,s,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]
},E={begin:"<",end:">",contains:[{beginKeywords:"in out"},i]
},_=e.IDENT_RE+"(<"+e.IDENT_RE+"(\\s*,\\s*"+e.IDENT_RE+")*>)?(\\[\\])?",b={
begin:"@"+e.IDENT_RE,relevance:0};return{name:"C#",aliases:["cs","c#"],
keywords:n,illegal:/::/,contains:[e.COMMENT("///","$",{returnBegin:!0,
contains:[{className:"doctag",variants:[{begin:"///",relevance:0},{
begin:"\x3c!--|--\x3e"},{begin:"</?",end:">"}]}]
}),e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"meta",begin:"#",
end:"$",keywords:{
"meta-keyword":"if else elif endif define undef warning error line region endregion pragma checksum"
}},g,a,{beginKeywords:"class interface",end:/[{;=]/,illegal:/[^\s:,]/,
contains:[{beginKeywords:"where class"
},i,E,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{beginKeywords:"namespace",
end:/[{;=]/,illegal:/[^\s:]/,
contains:[i,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{
beginKeywords:"record",end:/[{;=]/,illegal:/[^\s:]/,
contains:[i,E,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{className:"meta",
begin:"^\\s*\\[",excludeBegin:!0,end:"\\]",excludeEnd:!0,contains:[{
className:"meta-string",begin:/"/,end:/"/}]},{
beginKeywords:"new return throw await else",relevance:0},{className:"function",
begin:"("+_+"\\s+)+"+e.IDENT_RE+"\\s*(\\<.+\\>)?\\s*\\(",returnBegin:!0,
end:/\s*[{;=]/,excludeEnd:!0,keywords:n,contains:[{
beginKeywords:"public private protected static internal protected abstract async extern override unsafe virtual new sealed partial"
},{begin:e.IDENT_RE+"\\s*(\\<.+\\>)?\\s*\\(",returnBegin:!0,
contains:[e.TITLE_MODE,E],relevance:0},{className:"params",begin:/\(/,end:/\)/,
excludeBegin:!0,excludeEnd:!0,keywords:n,relevance:0,
contains:[g,a,e.C_BLOCK_COMMENT_MODE]
},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},b]}}}());hljs.registerLanguage("diff",function(){"use strict";return function(e){return{
name:"Diff",aliases:["patch"],contains:[{className:"meta",relevance:10,
variants:[{begin:/^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/},{
begin:/^\*\*\* +\d+,\d+ +\*\*\*\*$/},{begin:/^\-\-\- +\d+,\d+ +\-\-\-\-$/}]},{
className:"comment",variants:[{begin:/Index: /,end:/$/},{begin:/={3,}/,end:/$/
},{begin:/^\-{3}/,end:/$/},{begin:/^\*{3} /,end:/$/},{begin:/^\+{3}/,end:/$/},{
begin:/^\*{15}$/}]},{className:"addition",begin:"^\\+",end:"$"},{
className:"deletion",begin:"^\\-",end:"$"},{className:"addition",begin:"^\\!",
end:"$"}]}}}());hljs.registerLanguage("markdown",function(){"use strict";return function(n){
const e={begin:"<",end:">",subLanguage:"xml",relevance:0},a={
begin:"\\[.+?\\][\\(\\[].*?[\\)\\]]",returnBegin:!0,contains:[{
className:"string",begin:"\\[",end:"\\]",excludeBegin:!0,returnEnd:!0,
relevance:0},{className:"link",begin:"\\]\\(",end:"\\)",excludeBegin:!0,
excludeEnd:!0},{className:"symbol",begin:"\\]\\[",end:"\\]",excludeBegin:!0,
excludeEnd:!0}],relevance:10},i={className:"strong",contains:[],variants:[{
begin:/_{2}/,end:/_{2}/},{begin:/\*{2}/,end:/\*{2}/}]},s={className:"emphasis",
contains:[],variants:[{begin:/\*(?!\*)/,end:/\*/},{begin:/_(?!_)/,end:/_/,
relevance:0}]};i.contains.push(s),s.contains.push(i);var c=[e,a]
;return i.contains=i.contains.concat(c),s.contains=s.contains.concat(c),{
name:"Markdown",aliases:["md","mkdown","mkd"],contains:[{className:"section",
variants:[{begin:"^#{1,6}",end:"$",contains:c=c.concat(i,s)},{
begin:"(?=^.+?\\n[=-]{2,}$)",contains:[{begin:"^[=-]*$"},{begin:"^",end:"\\n",
contains:c}]}]},e,{className:"bullet",begin:"^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)",
end:"\\s+",excludeEnd:!0},i,s,{className:"quote",begin:"^>\\s+",contains:c,
end:"$"},{className:"code",variants:[{begin:"(`{3,})(.|\\n)*?\\1`*[ ]*"},{
begin:"(~{3,})(.|\\n)*?\\1~*[ ]*"},{begin:"```",end:"```+[ ]*$"},{begin:"~~~",
end:"~~~+[ ]*$"},{begin:"`.+?`"},{begin:"(?=^( {4}|\\t))",contains:[{
begin:"^( {4}|\\t)",end:"(\\n)$"}],relevance:0}]},{begin:"^[-\\*]{3,}",end:"$"
},a,{begin:/^\[[^\n]+\]:/,returnBegin:!0,contains:[{className:"symbol",
begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0},{className:"link",
begin:/:\s*/,end:/$/,excludeBegin:!0}]}]}}}());hljs.registerLanguage("swift",function(){"use strict";return function(e){var i={
keyword:"#available #colorLiteral #column #else #elseif #endif #file #fileLiteral #function #if #imageLiteral #line #selector #sourceLocation _ __COLUMN__ __FILE__ __FUNCTION__ __LINE__ Any as as! as? associatedtype associativity break case catch class continue convenience default defer deinit didSet do dynamic dynamicType else enum extension fallthrough false fileprivate final for func get guard if import in indirect infix init inout internal is lazy left let mutating nil none nonmutating open operator optional override postfix precedence prefix private protocol Protocol public repeat required rethrows return right self Self set static struct subscript super switch throw throws true try try! try? Type typealias unowned var weak where while willSet",
literal:"true false nil",
built_in:"abs advance alignof alignofValue anyGenerator assert assertionFailure bridgeFromObjectiveC bridgeFromObjectiveCUnconditional bridgeToObjectiveC bridgeToObjectiveCUnconditional c compactMap contains count countElements countLeadingZeros debugPrint debugPrintln distance dropFirst dropLast dump encodeBitsAsWords enumerate equal fatalError filter find getBridgedObjectiveCType getVaList indices insertionSort isBridgedToObjectiveC isBridgedVerbatimToObjectiveC isUniquelyReferenced isUniquelyReferencedNonObjC join lazy lexicographicalCompare map max maxElement min minElement numericCast overlaps partition posix precondition preconditionFailure print println quickSort readLine reduce reflect reinterpretCast reverse roundUpToAlignment sizeof sizeofValue sort split startsWith stride strideof strideofValue swap toString transcode underestimateCount unsafeAddressOf unsafeBitCast unsafeDowncast unsafeUnwrap unsafeReflect withExtendedLifetime withObjectAtPlusZero withUnsafePointer withUnsafePointerToObject withUnsafeMutablePointer withUnsafeMutablePointers withUnsafePointer withUnsafePointers withVaList zip"
},n=e.COMMENT("/\\*","\\*/",{contains:["self"]}),t={className:"subst",
begin:/\\\(/,end:"\\)",keywords:i,contains:[]},a={className:"string",
contains:[e.BACKSLASH_ESCAPE,t],variants:[{begin:/"""/,end:/"""/},{begin:/"/,
end:/"/}]},r={className:"number",
begin:"\\b([\\d_]+(\\.[\\deE_]+)?|0x[a-fA-F0-9_]+(\\.[a-fA-F0-9p_]+)?|0b[01_]+|0o[0-7_]+)\\b",
relevance:0};return t.contains=[r],{name:"Swift",keywords:i,
contains:[a,e.C_LINE_COMMENT_MODE,n,{className:"type",
begin:"\\b[A-Z][\\w\xc0-\u02b8']*[!?]"},{className:"type",
begin:"\\b[A-Z][\\w\xc0-\u02b8']*",relevance:0},r,{className:"function",
beginKeywords:"func",end:"{",excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{
begin:/[A-Za-z$_][0-9A-Za-z$_]*/}),{begin:/</,end:/>/},{className:"params",
begin:/\(/,end:/\)/,endsParent:!0,keywords:i,
contains:["self",r,a,e.C_BLOCK_COMMENT_MODE,{begin:":"}],illegal:/["']/}],
illegal:/\[|%/},{className:"class",
beginKeywords:"struct protocol class extension enum",keywords:i,end:"\\{",
excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{
begin:/[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/})]},{className:"meta",
begin:"(@discardableResult|@warn_unused_result|@exported|@lazy|@noescape|@NSCopying|@NSManaged|@objc|@objcMembers|@convention|@required|@noreturn|@IBAction|@IBDesignable|@IBInspectable|@IBOutlet|@infix|@prefix|@postfix|@autoclosure|@testable|@available|@nonobjc|@NSApplicationMain|@UIApplicationMain|@dynamicMemberLookup|@propertyWrapper)\\b"
},{beginKeywords:"import",end:/$/,contains:[e.C_LINE_COMMENT_MODE,n]}]}}}());hljs.registerLanguage("css",function(){"use strict";return function(e){var n={
begin:/(?:[A-Z\_\.\-]+|--[a-zA-Z0-9_-]+)\s*:/,returnBegin:!0,end:";",
endsWithParent:!0,contains:[{className:"attribute",begin:/\S/,end:":",
excludeEnd:!0,starts:{endsWithParent:!0,excludeEnd:!0,contains:[{
begin:/[\w-]+\(/,returnBegin:!0,contains:[{className:"built_in",begin:/[\w-]+/
},{begin:/\(/,end:/\)/,
contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.CSS_NUMBER_MODE]}]
},e.CSS_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,e.C_BLOCK_COMMENT_MODE,{
className:"number",begin:"#[0-9A-Fa-f]+"},{className:"meta",begin:"!important"}]
}}]};return{name:"CSS",case_insensitive:!0,illegal:/[=\/|'\$]/,
contains:[e.C_BLOCK_COMMENT_MODE,{className:"selector-id",
begin:/#[A-Za-z0-9_-]+/},{className:"selector-class",begin:/\.[A-Za-z0-9_-]+/},{
className:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",
contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},{className:"selector-pseudo",
begin:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{begin:"@(page|font-face)",
lexemes:"@[a-z-]+",keywords:"@page @font-face"},{begin:"@",end:"[{;]",
illegal:/:/,returnBegin:!0,contains:[{className:"keyword",
begin:/@\-?\w[\w]*(\-\w+)*/},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,
relevance:0,keywords:"and or not only",contains:[{begin:/[a-z-]+:/,
className:"attribute"},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.CSS_NUMBER_MODE]
}]},{className:"selector-tag",begin:"[a-zA-Z-][a-zA-Z0-9_-]*",relevance:0},{
begin:"{",end:"}",illegal:/\S/,contains:[e.C_BLOCK_COMMENT_MODE,n]}]}}}());hljs.registerLanguage("makefile",function(){"use strict";return function(e){
var i={className:"variable",variants:[{
begin:"\\$\\("+e.UNDERSCORE_IDENT_RE+"\\)",contains:[e.BACKSLASH_ESCAPE]},{
begin:/\$[@%<?\^\+\*]/}]},n={className:"string",begin:/"/,end:/"/,
contains:[e.BACKSLASH_ESCAPE,i]},a={className:"variable",begin:/\$\([\w-]+\s/,
end:/\)/,keywords:{
built_in:"subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value"
},contains:[i]},r={begin:"^"+e.UNDERSCORE_IDENT_RE+"\\s*(?=[:+?]?=)"},s={
className:"section",begin:/^[^\s]+:/,end:/$/,contains:[i]};return{
name:"Makefile",aliases:["mk","mak"],keywords:{$pattern:/[\w-]+/,
keyword:"define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath"
},contains:[e.HASH_COMMENT_MODE,i,n,a,r,{className:"meta",begin:/^\.PHONY:/,
end:/$/,keywords:{$pattern:/[\.\w]+/,"meta-keyword":".PHONY"}},s]}}}());hljs.registerLanguage("brainfuck",function(){"use strict";return function(e){
var n={className:"literal",begin:"[\\+\\-]",relevance:0};return{
name:"Brainfuck",aliases:["bf"],
contains:[e.COMMENT("[^\\[\\]\\.,\\+\\-<> \r\n]","[\\[\\]\\.,\\+\\-<> \r\n]",{
returnEnd:!0,relevance:0}),{className:"title",begin:"[\\[\\]]",relevance:0},{
className:"string",begin:"[\\.,]",relevance:0},{begin:/(?:\+\+|\-\-)/,
contains:[n]},n]}}}());hljs.registerLanguage("java",function(){"use strict";function e(e){
return e?"string"==typeof e?e:e.source:null}function n(e){return a("(",e,")?")}
function a(...n){return n.map((n=>e(n))).join("")}function s(...n){
return"("+n.map((n=>e(n))).join("|")+")"}return function(e){
var r="false synchronized int abstract float private char boolean var static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do",i={
className:"meta",begin:"@[\xc0-\u02b8a-zA-Z_$][\xc0-\u02b8a-zA-Z_$0-9]*",
contains:[{begin:/\(/,end:/\)/,contains:["self"]}]
},t=e=>a("[",e,"]+([",e,"_]*[",e,"]+)?"),c={className:"number",variants:[{
begin:`\\b(0[bB]${t("01")})[lL]?`},{begin:`\\b(0${t("0-7")})[dDfFlL]?`},{
begin:a(/\b0[xX]/,s(a(t("a-fA-F0-9"),/\./,t("a-fA-F0-9")),a(t("a-fA-F0-9"),/\.?/),a(/\./,t("a-fA-F0-9"))),/([pP][+-]?(\d+))?/,/[fFdDlL]?/)
},{begin:a(/\b/,s(a(/\d*\./,t("\\d")),t("\\d")),/[eE][+-]?[\d]+[dDfF]?/)},{
begin:a(/\b/,t(/\d/),n(/\.?/),n(t(/\d/)),/[dDfFlL]?/)}],relevance:0};return{
name:"Java",aliases:["jsp"],keywords:r,illegal:/<\/|#/,
contains:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,
relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]
}),e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{
className:"class",beginKeywords:"class interface enum",end:/[{;=]/,
excludeEnd:!0,keywords:"class interface enum",illegal:/[:"\[\]]/,contains:[{
beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},{
beginKeywords:"new throw return else",relevance:0},{className:"class",
begin:"record\\s+"+e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,excludeEnd:!0,
end:/[{;=]/,keywords:r,contains:[{beginKeywords:"record"},{
begin:e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,relevance:0,
contains:[e.UNDERSCORE_TITLE_MODE]},{className:"params",begin:/\(/,end:/\)/,
keywords:r,relevance:0,contains:[e.C_BLOCK_COMMENT_MODE]
},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{className:"function",
begin:"([\xc0-\u02b8a-zA-Z_$][\xc0-\u02b8a-zA-Z_$0-9]*(<[\xc0-\u02b8a-zA-Z_$][\xc0-\u02b8a-zA-Z_$0-9]*(\\s*,\\s*[\xc0-\u02b8a-zA-Z_$][\xc0-\u02b8a-zA-Z_$0-9]*)*>)?\\s+)+"+e.UNDERSCORE_IDENT_RE+"\\s*\\(",
returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:r,contains:[{
begin:e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,relevance:0,
contains:[e.UNDERSCORE_TITLE_MODE]},{className:"params",begin:/\(/,end:/\)/,
keywords:r,relevance:0,
contains:[i,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.C_NUMBER_MODE,e.C_BLOCK_COMMENT_MODE]
},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},c,i]}}}());hljs.registerLanguage("latex",function(){"use strict";return function(e){
const n=[{begin:/\^{6}[0-9a-f]{6}/},{begin:/\^{5}[0-9a-f]{5}/},{
begin:/\^{4}[0-9a-f]{4}/},{begin:/\^{3}[0-9a-f]{3}/},{begin:/\^{2}[0-9a-f]{2}/
},{begin:/\^{2}[\u0000-\u007f]/}],a=[{className:"keyword",begin:/\\/,
relevance:0,contains:[{endsParent:!0,begin:function(...e){return"("+e.map((e=>{
return(n=e)?"string"==typeof n?n:n.source:null;var n})).join("|")+")"
}(...["(?:NeedsTeXFormat|RequirePackage|GetIdInfo)","Provides(?:Expl)?(?:Package|Class|File)","(?:DeclareOption|ProcessOptions)","(?:documentclass|usepackage|input|include)","makeat(?:letter|other)","ExplSyntax(?:On|Off)","(?:new|renew|provide)?command","(?:re)newenvironment","(?:New|Renew|Provide|Declare)(?:Expandable)?DocumentCommand","(?:New|Renew|Provide|Declare)DocumentEnvironment","(?:(?:e|g|x)?def|let)","(?:begin|end)","(?:part|chapter|(?:sub){0,2}section|(?:sub)?paragraph)","caption","(?:label|(?:eq|page|name)?ref|(?:paren|foot|super)?cite)","(?:alpha|beta|[Gg]amma|[Dd]elta|(?:var)?epsilon|zeta|eta|[Tt]heta|vartheta)","(?:iota|(?:var)?kappa|[Ll]ambda|mu|nu|[Xx]i|[Pp]i|varpi|(?:var)rho)","(?:[Ss]igma|varsigma|tau|[Uu]psilon|[Pp]hi|varphi|chi|[Pp]si|[Oo]mega)","(?:frac|sum|prod|lim|infty|times|sqrt|leq|geq|left|right|middle|[bB]igg?)","(?:[lr]angle|q?quad|[lcvdi]?dots|d?dot|hat|tilde|bar)"].map((e=>e+"(?![a-zA-Z@:_])")))
},{endsParent:!0,
begin:RegExp(["(?:__)?[a-zA-Z]{2,}_[a-zA-Z](?:_?[a-zA-Z])+:[a-zA-Z]*","[lgc]__?[a-zA-Z](?:_?[a-zA-Z])*_[a-zA-Z]{2,}","[qs]__?[a-zA-Z](?:_?[a-zA-Z])+","use(?:_i)?:[a-zA-Z]*","(?:else|fi|or):","(?:if|cs|exp):w","(?:hbox|vbox):n","::[a-zA-Z]_unbraced","::[a-zA-Z:]"].map((e=>e+"(?![a-zA-Z:_])")).join("|"))
},{endsParent:!0,variants:n},{endsParent:!0,relevance:0,variants:[{
begin:/[a-zA-Z@]+/},{begin:/[^a-zA-Z@]?/}]}]},{className:"params",relevance:0,
begin:/#+\d?/},{variants:n},{className:"built_in",relevance:0,begin:/[$&^_]/},{
className:"meta",begin:"% !TeX",end:"$",relevance:10},e.COMMENT("%","$",{
relevance:0})],t={begin:/\{/,end:/\}/,relevance:0,contains:["self",...a]
},i=e.inherit(t,{relevance:0,endsParent:!0,contains:[t,...a]}),r={begin:/\[/,
end:/\]/,endsParent:!0,relevance:0,contains:[t,...a]},s={begin:/\s+/,relevance:0
},c=[i],l=[r],o=function(e,n){return{contains:[s],starts:{relevance:0,
contains:e,starts:n}}},d=function(e,n){return{begin:"\\\\"+e+"(?![a-zA-Z@:_])",
keywords:{$pattern:/\\[a-zA-Z]+/,keyword:"\\"+e},relevance:0,contains:[s],
starts:n}},g=function(n,a){return e.inherit({
begin:"\\\\begin(?=\\s*\\r?\\n?\\s*\\{"+n+"\\})",keywords:{
$pattern:/\\[a-zA-Z]+/,keyword:"\\begin"},relevance:0},o(c,a))
},m=(n="string")=>e.END_SAME_AS_BEGIN({className:n,begin:/(.|\r?\n)/,
end:/(.|\r?\n)/,excludeBegin:!0,excludeEnd:!0,endsParent:!0}),u=function(e){
return{className:"string",end:"(?=\\\\end\\{"+e+"\\})"}},b=(e="string")=>({
relevance:0,begin:/\{/,starts:{endsParent:!0,contains:[{className:e,
end:/(?=\})/,endsParent:!0,contains:[{begin:/\{/,end:/\}/,relevance:0,
contains:["self"]}]}]}});return{name:"LaTeX",aliases:["TeX"],
contains:[...["verb","lstinline"].map((e=>d(e,{contains:[m()]}))),d("mint",o(c,{
contains:[m()]})),d("mintinline",o(c,{contains:[b(),m()]})),d("url",{
contains:[b("link"),b("link")]}),d("hyperref",{contains:[b("link")]
}),d("href",o(l,{contains:[b("link")]
})),...[].concat(...["","\\*"].map((e=>[g("verbatim"+e,u("verbatim"+e)),g("filecontents"+e,o(c,u("filecontents"+e))),...["","B","L"].map((n=>g(n+"Verbatim"+e,o(l,u(n+"Verbatim"+e)))))]))),g("minted",o(l,o(c,u("minted")))),...a]
}}}());hljs.registerLanguage("scala",function(){"use strict";return function(e){var n={
className:"subst",variants:[{begin:"\\$[A-Za-z0-9_]+"},{begin:"\\${",end:"}"}]
},a={className:"string",variants:[{begin:'"',end:'"',illegal:"\\n",
contains:[e.BACKSLASH_ESCAPE]},{begin:'"""',end:'"""',relevance:10},{
begin:'[a-z]+"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE,n]},{
className:"string",begin:'[a-z]+"""',end:'"""',contains:[n],relevance:10}]},s={
className:"type",begin:"\\b[A-Z][A-Za-z0-9_]*",relevance:0},t={
className:"title",
begin:/[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/,
relevance:0},i={className:"class",beginKeywords:"class object trait type",
end:/[:={\[\n;]/,excludeEnd:!0,
contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{
beginKeywords:"extends with",relevance:10},{begin:/\[/,end:/\]/,excludeBegin:!0,
excludeEnd:!0,relevance:0,contains:[s]},{className:"params",begin:/\(/,end:/\)/,
excludeBegin:!0,excludeEnd:!0,relevance:0,contains:[s]},t]},l={
className:"function",beginKeywords:"def",end:/[:={\[(\n;]/,excludeEnd:!0,
contains:[t]};return{name:"Scala",keywords:{literal:"true false null",
keyword:"type yield lazy override def with val var sealed abstract private trait object if forSome for while throw finally protected extends import final return else break new catch super class case package default try this match continue throws implicit"
},contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,a,{className:"symbol",
begin:"'\\w[\\w\\d_]*(?!')"},s,l,i,e.C_NUMBER_MODE,{className:"meta",
begin:"@[A-Za-z]+"}]}}}());hljs.registerLanguage("rust",function(){"use strict";return function(e){
var n="([ui](8|16|32|64|128|size)|f(32|64))?",t="drop i8 i16 i32 i64 i128 isize u8 u16 u32 u64 u128 usize f32 f64 str char bool Box Option Result String Vec Copy Send Sized Sync Drop Fn FnMut FnOnce ToOwned Clone Debug PartialEq PartialOrd Eq Ord AsRef AsMut Into From Default Iterator Extend IntoIterator DoubleEndedIterator ExactSizeIterator SliceConcatExt ToString assert! assert_eq! bitflags! bytes! cfg! col! concat! concat_idents! debug_assert! debug_assert_eq! env! panic! file! format! format_args! include_bin! include_str! line! local_data_key! module_path! option_env! print! println! select! stringify! try! unimplemented! unreachable! vec! write! writeln! macro_rules! assert_ne! debug_assert_ne!"
;return{name:"Rust",aliases:["rs"],keywords:{$pattern:e.IDENT_RE+"!?",
keyword:"abstract as async await become box break const continue crate do dyn else enum extern false final fn for if impl in let loop macro match mod move mut override priv pub ref return self Self static struct super trait true try type typeof unsafe unsized use virtual where while yield",
literal:"true false Some None Ok Err",built_in:t},illegal:"</",
contains:[e.C_LINE_COMMENT_MODE,e.COMMENT("/\\*","\\*/",{contains:["self"]
}),e.inherit(e.QUOTE_STRING_MODE,{begin:/b?"/,illegal:null}),{
className:"string",variants:[{begin:/r(#*)"(.|\n)*?"\1(?!#)/},{
begin:/b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/}]},{className:"symbol",
begin:/'[a-zA-Z_][a-zA-Z0-9_]*/},{className:"number",variants:[{
begin:"\\b0b([01_]+)"+n},{begin:"\\b0o([0-7_]+)"+n},{
begin:"\\b0x([A-Fa-f0-9_]+)"+n},{
begin:"\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)"+n}],relevance:0},{
className:"function",beginKeywords:"fn",end:"(\\(|<)",excludeEnd:!0,
contains:[e.UNDERSCORE_TITLE_MODE]},{className:"meta",begin:"#\\!?\\[",
end:"\\]",contains:[{className:"meta-string",begin:/"/,end:/"/}]},{
className:"class",beginKeywords:"type",end:";",
contains:[e.inherit(e.UNDERSCORE_TITLE_MODE,{endsParent:!0})],illegal:"\\S"},{
className:"class",beginKeywords:"trait enum struct union",end:"{",
contains:[e.inherit(e.UNDERSCORE_TITLE_MODE,{endsParent:!0})],illegal:"[\\w\\d]"
},{begin:e.IDENT_RE+"::",keywords:{built_in:t}},{begin:"->"}]}}}());hljs.registerLanguage("smalltalk",function(){"use strict";return function(e){
var n="[a-z][a-zA-Z0-9_]*",a={className:"string",begin:"\\$.{1}"},s={
className:"symbol",begin:"#"+e.UNDERSCORE_IDENT_RE};return{name:"Smalltalk",
aliases:["st"],keywords:"self super nil true false thisContext",
contains:[e.COMMENT('"','"'),e.APOS_STRING_MODE,{className:"type",
begin:"\\b[A-Z][A-Za-z0-9_]*",relevance:0},{begin:n+":",relevance:0
},e.C_NUMBER_MODE,s,a,{begin:"\\|[ ]*"+n+"([ ]+"+n+")*[ ]*\\|",returnBegin:!0,
end:/\|/,illegal:/\S/,contains:[{begin:"(\\|[ ]*)?"+n}]},{begin:"\\#\\(",
end:"\\)",contains:[e.APOS_STRING_MODE,a,e.C_NUMBER_MODE,s]}]}}}());hljs.registerLanguage("lua",function(){"use strict";return function(e){
var t="\\[=*\\[",a="\\]=*\\]",n={begin:t,end:a,contains:["self"]
},o=[e.COMMENT("--(?!\\[=*\\[)","$"),e.COMMENT("--\\[=*\\[",a,{contains:[n],
relevance:10})];return{name:"Lua",keywords:{$pattern:e.UNDERSCORE_IDENT_RE,
literal:"true false nil",
keyword:"and break do else elseif end for goto if in local not or repeat return then until while",
built_in:"_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove"
},contains:o.concat([{className:"function",beginKeywords:"function",end:"\\)",
contains:[e.inherit(e.TITLE_MODE,{
begin:"([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"}),{className:"params",
begin:"\\(",endsWithParent:!0,contains:o}].concat(o)
},e.C_NUMBER_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{className:"string",
begin:t,end:a,contains:[n],relevance:5}])}}}());hljs.registerLanguage("yaml",function(){"use strict";return function(e){
var n="true false yes no null",a="[\\w#;/?:@&=+$,.~*\\'()[\\]]+",s={
className:"string",relevance:0,variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/
},{begin:/\S+/}],contains:[e.BACKSLASH_ESCAPE,{className:"template-variable",
variants:[{begin:"{{",end:"}}"},{begin:"%{",end:"}"}]}]},i=e.inherit(s,{
variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/[^\s,{}[\]]+/}]}),l={
end:",",endsWithParent:!0,excludeEnd:!0,contains:[],keywords:n,relevance:0},t={
begin:"{",end:"}",contains:[l],illegal:"\\n",relevance:0},g={begin:"\\[",
end:"\\]",contains:[l],illegal:"\\n",relevance:0},b=[{className:"attr",
variants:[{begin:"\\w[\\w :\\/.-]*:(?=[ \t]|$)"},{
begin:'"\\w[\\w :\\/.-]*":(?=[ \t]|$)'},{begin:"'\\w[\\w :\\/.-]*':(?=[ \t]|$)"
}]},{className:"meta",begin:"^---s*$",relevance:10},{className:"string",
begin:"[\\|>]([0-9]?[+-])?[ ]*\\n( *)[\\S ]+\\n(\\2[\\S ]+\\n?)*"},{
begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,
relevance:0},{className:"type",begin:"!\\w+!"+a},{className:"type",
begin:"!<"+a+">"},{className:"type",begin:"!"+a},{className:"type",begin:"!!"+a
},{className:"meta",begin:"&"+e.UNDERSCORE_IDENT_RE+"$"},{className:"meta",
begin:"\\*"+e.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"\\-(?=[ ]|$)",
relevance:0},e.HASH_COMMENT_MODE,{beginKeywords:n,keywords:{literal:n}},{
className:"number",
begin:"\\b[0-9]{4}(-[0-9][0-9]){0,2}([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?(\\.[0-9]*)?([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?\\b"
},{className:"number",begin:e.C_NUMBER_RE+"\\b"},t,g,s],c=[...b];return c.pop(),
c.push(i),l.contains=c,{name:"YAML",case_insensitive:!0,aliases:["yml","YAML"],
contains:b}}}());hljs.registerLanguage("python",function(){"use strict";return function(e){
const n={
keyword:"and as assert async await break class continue def del elif else except finally for  from global if import in is lambda nonlocal|10 not or pass raise return try while with yield",
built_in:"__import__ abs all any ascii bin bool breakpoint bytearray bytes callable chr classmethod compile complex delattr dict dir divmod enumerate eval exec filter float format frozenset getattr globals hasattr hash help hex id input int isinstance issubclass iter len list locals map max memoryview min next object oct open ord pow print property range repr reversed round set setattr slice sorted staticmethod str sum super tuple type vars zip",
literal:"__debug__ Ellipsis False None NotImplemented True"},a={
className:"meta",begin:/^(>>>|\.\.\.) /},s={className:"subst",begin:/\{/,
end:/\}/,keywords:n,illegal:/#/},i={begin:/\{\{/,relevance:0},r={
className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{
begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,
contains:[e.BACKSLASH_ESCAPE,a],relevance:10},{
begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,
contains:[e.BACKSLASH_ESCAPE,a],relevance:10},{
begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,
contains:[e.BACKSLASH_ESCAPE,a,i,s]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,
end:/"""/,contains:[e.BACKSLASH_ESCAPE,a,i,s]},{begin:/([uU]|[rR])'/,end:/'/,
relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{
begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,
end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,
contains:[e.BACKSLASH_ESCAPE,i,s]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,
contains:[e.BACKSLASH_ESCAPE,i,s]},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},t={
className:"number",relevance:0,variants:[{begin:e.BINARY_NUMBER_RE+"[lLjJ]?"},{
begin:"\\b(0o[0-7]+)[lLjJ]?"},{begin:e.C_NUMBER_RE+"[lLjJ]?"}]},l={
className:"params",variants:[{begin:/\(\s*\)/,skip:!0,className:null},{
begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:n,
contains:["self",a,t,r,e.HASH_COMMENT_MODE]}]};return s.contains=[r,t,a],{
name:"Python",aliases:["py","gyp","ipython"],keywords:n,
illegal:/(<\/|->|\?)|=>/,contains:[a,t,{beginKeywords:"if",relevance:0
},r,e.HASH_COMMENT_MODE,{variants:[{className:"function",beginKeywords:"def"},{
className:"class",beginKeywords:"class"}],end:/:/,illegal:/[${=;\n,]/,
contains:[e.UNDERSCORE_TITLE_MODE,l,{begin:/->/,endsWithParent:!0,
keywords:"None"}]},{className:"meta",begin:/^[\t ]*@/,end:/$/},{
begin:/\b(print|exec)\(/}]}}}());hljs.registerLanguage("c-like",function(){"use strict";return function(e){
function t(e){return"(?:"+e+")?"}var n=e.COMMENT("//","$",{contains:[{
begin:/\\\n/}]
}),r="[a-zA-Z_]\\w*::",a="(decltype\\(auto\\)|"+t(r)+"[a-zA-Z_]\\w*"+t("<.*?>")+")",i={
className:"keyword",begin:"\\b[a-z\\d_]*_t\\b"},s={className:"string",
variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",
contains:[e.BACKSLASH_ESCAPE]},{
begin:"(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
end:"'",illegal:"."},e.END_SAME_AS_BEGIN({
begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},o={
className:"number",variants:[{begin:"\\b(0b[01']+)"},{
begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"},{
begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
}],relevance:0},c={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{
"meta-keyword":"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"
},contains:[{begin:/\\\n/,relevance:0},e.inherit(s,{className:"meta-string"}),{
className:"meta-string",begin:/<.*?>/,end:/$/,illegal:"\\n"
},n,e.C_BLOCK_COMMENT_MODE]},l={className:"title",begin:t(r)+e.IDENT_RE,
relevance:0},d=t(r)+e.IDENT_RE+"\\s*\\(",u={
keyword:"int float while private char char8_t char16_t char32_t catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid wchar_t short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignas alignof constexpr consteval constinit decltype concept co_await co_return co_yield requires noexcept static_assert thread_local restrict final override atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and and_eq bitand bitor compl not not_eq or or_eq xor xor_eq",
built_in:"std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr _Bool complex _Complex imaginary _Imaginary",
literal:"true false nullptr NULL"},m=[c,i,n,e.C_BLOCK_COMMENT_MODE,o,s],p={
variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{
beginKeywords:"new throw return else",end:/;/}],keywords:u,contains:m.concat([{
begin:/\(/,end:/\)/,keywords:u,contains:m.concat(["self"]),relevance:0}]),
relevance:0},_={className:"function",begin:"("+a+"[\\*&\\s]+)+"+d,
returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:u,illegal:/[^\w\s\*&:<>]/,
contains:[{begin:"decltype\\(auto\\)",keywords:u,relevance:0},{begin:d,
returnBegin:!0,contains:[l],relevance:0},{className:"params",begin:/\(/,
end:/\)/,keywords:u,relevance:0,contains:[n,e.C_BLOCK_COMMENT_MODE,s,o,i,{
begin:/\(/,end:/\)/,keywords:u,relevance:0,
contains:["self",n,e.C_BLOCK_COMMENT_MODE,s,o,i]}]
},i,n,e.C_BLOCK_COMMENT_MODE,c]};return{
aliases:["c","cc","h","c++","h++","hpp","hh","hxx","cxx"],keywords:u,
disableAutodetect:!0,illegal:"</",contains:[].concat(p,_,m,[c,{
begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
end:">",keywords:u,contains:["self",i]},{begin:e.IDENT_RE+"::",keywords:u},{
className:"class",beginKeywords:"enum class struct union",end:/[{;:<>=]/,
contains:[{beginKeywords:"final class struct"},e.TITLE_MODE]}]),exports:{
preprocessor:c,strings:s,keywords:u}}}}());hljs.registerLanguage("cpp",function(){"use strict";return function(e){
var i=e.requireLanguage("c-like").rawDefinition();return i.disableAutodetect=!1,
i.name="C++",i.aliases=["cc","c++","h++","hpp","hh","hxx","cxx"],i}}());hljs.registerLanguage("arduino",function(){"use strict";return function(e){
var t=e.requireLanguage("cpp").rawDefinition(),r=t.keywords
;return r.keyword+=" boolean byte word String",
r.literal+=" DIGITAL_MESSAGE FIRMATA_STRING ANALOG_MESSAGE REPORT_DIGITAL REPORT_ANALOG INPUT_PULLUP SET_PIN_MODE INTERNAL2V56 SYSTEM_RESET LED_BUILTIN INTERNAL1V1 SYSEX_START INTERNAL EXTERNAL DEFAULT OUTPUT INPUT HIGH LOW",
r.built_in+=" setup loop KeyboardController MouseController SoftwareSerial EthernetServer EthernetClient LiquidCrystal RobotControl GSMVoiceCall EthernetUDP EsploraTFT HttpClient RobotMotor WiFiClient GSMScanner FileSystem Scheduler GSMServer YunClient YunServer IPAddress GSMClient GSMModem Keyboard Ethernet Console GSMBand Esplora Stepper Process WiFiUDP GSM_SMS Mailbox USBHost Firmata PImage Client Server GSMPIN FileIO Bridge Serial EEPROM Stream Mouse Audio Servo File Task GPRS WiFi Wire TFT GSM SPI SD runShellCommandAsynchronously analogWriteResolution retrieveCallingNumber printFirmwareVersion analogReadResolution sendDigitalPortPair noListenOnLocalhost readJoystickButton setFirmwareVersion readJoystickSwitch scrollDisplayRight getVoiceCallStatus scrollDisplayLeft writeMicroseconds delayMicroseconds beginTransmission getSignalStrength runAsynchronously getAsynchronously listenOnLocalhost getCurrentCarrier readAccelerometer messageAvailable sendDigitalPorts lineFollowConfig countryNameWrite runShellCommand readStringUntil rewindDirectory readTemperature setClockDivider readLightSensor endTransmission analogReference detachInterrupt countryNameRead attachInterrupt encryptionType readBytesUntil robotNameWrite readMicrophone robotNameRead cityNameWrite userNameWrite readJoystickY readJoystickX mouseReleased openNextFile scanNetworks noInterrupts digitalWrite beginSpeaker mousePressed isActionDone mouseDragged displayLogos noAutoscroll addParameter remoteNumber getModifiers keyboardRead userNameRead waitContinue processInput parseCommand printVersion readNetworks writeMessage blinkVersion cityNameRead readMessage setDataMode parsePacket isListening setBitOrder beginPacket isDirectory motorsWrite drawCompass digitalRead clearScreen serialEvent rightToLeft setTextSize leftToRight requestFrom keyReleased compassRead analogWrite interrupts WiFiServer disconnect playMelody parseFloat autoscroll getPINUsed setPINUsed setTimeout sendAnalog readSlider analogRead beginWrite createChar motorsStop keyPressed tempoWrite readButton subnetMask debugPrint macAddress writeGreen randomSeed attachGPRS readString sendString remotePort releaseAll mouseMoved background getXChange getYChange answerCall getResult voiceCall endPacket constrain getSocket writeJSON getButton available connected findUntil readBytes exitValue readGreen writeBlue startLoop IPAddress isPressed sendSysex pauseMode gatewayIP setCursor getOemKey tuneWrite noDisplay loadImage switchPIN onRequest onReceive changePIN playFile noBuffer parseInt overflow checkPIN knobRead beginTFT bitClear updateIR bitWrite position writeRGB highByte writeRed setSpeed readBlue noStroke remoteIP transfer shutdown hangCall beginSMS endWrite attached maintain noCursor checkReg checkPUK shiftOut isValid shiftIn pulseIn connect println localIP pinMode getIMEI display noBlink process getBand running beginSD drawBMP lowByte setBand release bitRead prepare pointTo readRed setMode noFill remove listen stroke detach attach noTone exists buffer height bitSet circle config cursor random IRread setDNS endSMS getKey micros millis begin print write ready flush width isPIN blink clear press mkdir rmdir close point yield image BSSID click delay read text move peek beep rect line open seek fill size turn stop home find step tone sqrt RSSI SSID end bit tan cos sin pow map abs max min get run put",
t.name="Arduino",t.aliases=["ino"],t}}());hljs.registerLanguage("lisp",function(){"use strict";return function(e){
var n="[a-zA-Z_\\-\\+\\*\\/\\<\\=\\>\\&\\#][a-zA-Z0-9_\\-\\+\\*\\/\\<\\=\\>\\&\\#!]*",i="\\|[^]*?\\|",a="(\\-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|\\-)?\\d+)?",s={
className:"literal",begin:"\\b(t{1}|nil)\\b"},b={className:"number",variants:[{
begin:a,relevance:0},{begin:"#(b|B)[0-1]+(/[0-1]+)?"},{
begin:"#(o|O)[0-7]+(/[0-7]+)?"},{begin:"#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?"},{
begin:"#(c|C)\\("+a+" +"+a,end:"\\)"}]},g=e.inherit(e.QUOTE_STRING_MODE,{
illegal:null}),l=e.COMMENT(";","$",{relevance:0}),t={begin:"\\*",end:"\\*"},r={
className:"symbol",begin:"[:&]"+n},c={begin:n,relevance:0},d={begin:i},o={
contains:[b,g,t,r,{begin:"\\(",end:"\\)",contains:["self",s,g,b,c]},c],
variants:[{begin:"['`]\\(",end:"\\)"},{begin:"\\(quote ",end:"\\)",keywords:{
name:"quote"}},{begin:"'"+i}]},u={variants:[{begin:"'"+n},{
begin:"#'"+n+"(::"+n+")*"}]},m={begin:"\\(\\s*",end:"\\)"},v={endsWithParent:!0,
relevance:0};return m.contains=[{className:"name",variants:[{begin:n},{begin:i}]
},v],v.contains=[o,u,m,s,b,g,l,t,r,d,c],{name:"Lisp",illegal:/\S/,
contains:[b,e.SHEBANG(),s,g,l,o,u,m,c]}}}());hljs.registerLanguage("verilog",function(){"use strict";return function(e){
return{name:"Verilog",aliases:["v","sv","svh"],case_insensitive:!1,keywords:{
$pattern:/[\w\$]+/,
keyword:"accept_on alias always always_comb always_ff always_latch and assert assign assume automatic before begin bind bins binsof bit break buf|0 bufif0 bufif1 byte case casex casez cell chandle checker class clocking cmos config const constraint context continue cover covergroup coverpoint cross deassign default defparam design disable dist do edge else end endcase endchecker endclass endclocking endconfig endfunction endgenerate endgroup endinterface endmodule endpackage endprimitive endprogram endproperty endspecify endsequence endtable endtask enum event eventually expect export extends extern final first_match for force foreach forever fork forkjoin function generate|5 genvar global highz0 highz1 if iff ifnone ignore_bins illegal_bins implements implies import incdir include initial inout input inside instance int integer interconnect interface intersect join join_any join_none large let liblist library local localparam logic longint macromodule matches medium modport module nand negedge nettype new nexttime nmos nor noshowcancelled not notif0 notif1 or output package packed parameter pmos posedge primitive priority program property protected pull0 pull1 pulldown pullup pulsestyle_ondetect pulsestyle_onevent pure rand randc randcase randsequence rcmos real realtime ref reg reject_on release repeat restrict return rnmos rpmos rtran rtranif0 rtranif1 s_always s_eventually s_nexttime s_until s_until_with scalared sequence shortint shortreal showcancelled signed small soft solve specify specparam static string strong strong0 strong1 struct super supply0 supply1 sync_accept_on sync_reject_on table tagged task this throughout time timeprecision timeunit tran tranif0 tranif1 tri tri0 tri1 triand trior trireg type typedef union unique unique0 unsigned until until_with untyped use uwire var vectored virtual void wait wait_order wand weak weak0 weak1 while wildcard wire with within wor xnor xor",
literal:"null",
built_in:"$finish $stop $exit $fatal $error $warning $info $realtime $time $printtimescale $bitstoreal $bitstoshortreal $itor $signed $cast $bits $stime $timeformat $realtobits $shortrealtobits $rtoi $unsigned $asserton $assertkill $assertpasson $assertfailon $assertnonvacuouson $assertoff $assertcontrol $assertpassoff $assertfailoff $assertvacuousoff $isunbounded $sampled $fell $changed $past_gclk $fell_gclk $changed_gclk $rising_gclk $steady_gclk $coverage_control $coverage_get $coverage_save $set_coverage_db_name $rose $stable $past $rose_gclk $stable_gclk $future_gclk $falling_gclk $changing_gclk $display $coverage_get_max $coverage_merge $get_coverage $load_coverage_db $typename $unpacked_dimensions $left $low $increment $clog2 $ln $log10 $exp $sqrt $pow $floor $ceil $sin $cos $tan $countbits $onehot $isunknown $fatal $warning $dimensions $right $high $size $asin $acos $atan $atan2 $hypot $sinh $cosh $tanh $asinh $acosh $atanh $countones $onehot0 $error $info $random $dist_chi_square $dist_erlang $dist_exponential $dist_normal $dist_poisson $dist_t $dist_uniform $q_initialize $q_remove $q_exam $async$and$array $async$nand$array $async$or$array $async$nor$array $sync$and$array $sync$nand$array $sync$or$array $sync$nor$array $q_add $q_full $psprintf $async$and$plane $async$nand$plane $async$or$plane $async$nor$plane $sync$and$plane $sync$nand$plane $sync$or$plane $sync$nor$plane $system $display $displayb $displayh $displayo $strobe $strobeb $strobeh $strobeo $write $readmemb $readmemh $writememh $value$plusargs $dumpvars $dumpon $dumplimit $dumpports $dumpportson $dumpportslimit $writeb $writeh $writeo $monitor $monitorb $monitorh $monitoro $writememb $dumpfile $dumpoff $dumpall $dumpflush $dumpportsoff $dumpportsall $dumpportsflush $fclose $fdisplay $fdisplayb $fdisplayh $fdisplayo $fstrobe $fstrobeb $fstrobeh $fstrobeo $swrite $swriteb $swriteh $swriteo $fscanf $fread $fseek $fflush $feof $fopen $fwrite $fwriteb $fwriteh $fwriteo $fmonitor $fmonitorb $fmonitorh $fmonitoro $sformat $sformatf $fgetc $ungetc $fgets $sscanf $rewind $ftell $ferror"
},contains:[e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE,e.QUOTE_STRING_MODE,{
className:"number",contains:[e.BACKSLASH_ESCAPE],variants:[{
begin:"\\b((\\d+'(b|h|o|d|B|H|O|D))[0-9xzXZa-fA-F_]+)"},{
begin:"\\B(('(b|h|o|d|B|H|O|D))[0-9xzXZa-fA-F_]+)"},{begin:"\\b([0-9_])+",
relevance:0}]},{className:"variable",variants:[{begin:"#\\((?!parameter).+\\)"
},{begin:"\\.\\w+",relevance:0}]},{className:"meta",begin:"`",end:"$",keywords:{
"meta-keyword":"define __FILE__ __LINE__ begin_keywords celldefine default_nettype define else elsif end_keywords endcelldefine endif ifdef ifndef include line nounconnected_drive pragma resetall timescale unconnected_drive undef undefineall"
},relevance:0}]}}}());hljs.registerLanguage("php",function(){"use strict";return function(e){var r={
begin:"\\$+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*"},t={className:"meta",
variants:[{begin:/<\?php/,relevance:10},{begin:/<\?[=]?/},{begin:/\?>/}]},a={
className:"subst",variants:[{begin:/\$\w+/},{begin:/\{\$/,end:/\}/}]
},n=e.inherit(e.APOS_STRING_MODE,{illegal:null
}),i=e.inherit(e.QUOTE_STRING_MODE,{illegal:null,
contains:e.QUOTE_STRING_MODE.contains.concat(a)}),o=e.END_SAME_AS_BEGIN({
begin:/<<<[ \t]*(\w+)\n/,end:/[ \t]*(\w+)\b/,
contains:e.QUOTE_STRING_MODE.contains.concat(a)}),l={className:"string",
contains:[e.BACKSLASH_ESCAPE,t],variants:[e.inherit(n,{begin:"b'",end:"'"
}),e.inherit(i,{begin:'b"',end:'"'}),i,n,o]},s={
variants:[e.BINARY_NUMBER_MODE,e.C_NUMBER_MODE]},c={
keyword:"__CLASS__ __DIR__ __FILE__ __FUNCTION__ __LINE__ __METHOD__ __NAMESPACE__ __TRAIT__ die echo exit include include_once print require require_once array abstract and as binary bool boolean break callable case catch class clone const continue declare default do double else elseif empty enddeclare endfor endforeach endif endswitch endwhile eval extends final finally float for foreach from global goto if implements instanceof insteadof int integer interface isset iterable list match new object or private protected public real return string switch throw trait try unset use var void while xor yield",
literal:"false null true",
built_in:"Error|0 AppendIterator ArgumentCountError ArithmeticError ArrayIterator ArrayObject AssertionError BadFunctionCallException BadMethodCallException CachingIterator CallbackFilterIterator CompileError Countable DirectoryIterator DivisionByZeroError DomainException EmptyIterator ErrorException Exception FilesystemIterator FilterIterator GlobIterator InfiniteIterator InvalidArgumentException IteratorIterator LengthException LimitIterator LogicException MultipleIterator NoRewindIterator OutOfBoundsException OutOfRangeException OuterIterator OverflowException ParentIterator ParseError RangeException RecursiveArrayIterator RecursiveCachingIterator RecursiveCallbackFilterIterator RecursiveDirectoryIterator RecursiveFilterIterator RecursiveIterator RecursiveIteratorIterator RecursiveRegexIterator RecursiveTreeIterator RegexIterator RuntimeException SeekableIterator SplDoublyLinkedList SplFileInfo SplFileObject SplFixedArray SplHeap SplMaxHeap SplMinHeap SplObjectStorage SplObserver SplObserver SplPriorityQueue SplQueue SplStack SplSubject SplSubject SplTempFileObject TypeError UnderflowException UnexpectedValueException ArrayAccess Closure Generator Iterator IteratorAggregate Serializable Throwable Traversable WeakReference Directory __PHP_Incomplete_Class parent php_user_filter self static stdClass"
};return{aliases:["php","php3","php4","php5","php6","php7","php8"],
case_insensitive:!0,keywords:c,
contains:[e.HASH_COMMENT_MODE,e.COMMENT("//","$",{contains:[t]
}),e.COMMENT("/\\*","\\*/",{contains:[{className:"doctag",begin:"@[A-Za-z]+"}]
}),e.COMMENT("__halt_compiler.+?;",!1,{endsWithParent:!0,
keywords:"__halt_compiler"}),t,{className:"keyword",begin:/\$this\b/},r,{
begin:/(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/},{className:"function",
beginKeywords:"fn function",end:/[;{]/,excludeEnd:!0,illegal:"[$%\\[]",
contains:[e.UNDERSCORE_TITLE_MODE,{className:"params",begin:"\\(",end:"\\)",
excludeBegin:!0,excludeEnd:!0,keywords:c,
contains:["self",r,e.C_BLOCK_COMMENT_MODE,l,s]}]},{className:"class",
beginKeywords:"class interface",end:"{",excludeEnd:!0,illegal:/[:\(\$"]/,
contains:[{beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},{
beginKeywords:"namespace",end:";",illegal:/[\.']/,
contains:[e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"use",end:";",
contains:[e.UNDERSCORE_TITLE_MODE]},{begin:"=>"},l,s]}}}());hljs.registerLanguage("php-template",function(){"use strict";return function(n){
return{name:"PHP template",subLanguage:"xml",contains:[{begin:/<\?(php|=)?/,
end:/\?>/,subLanguage:"php",contains:[{begin:"/\\*",end:"\\*/",skip:!0},{
begin:'b"',end:'"',skip:!0},{begin:"b'",end:"'",skip:!0
},n.inherit(n.APOS_STRING_MODE,{illegal:null,className:null,contains:null,
skip:!0}),n.inherit(n.QUOTE_STRING_MODE,{illegal:null,className:null,
contains:null,skip:!0})]}]}}}());hljs.registerLanguage("less",function(){"use strict";return function(e){
var n="([\\w-]+|@{[\\w-]+})",a=[],s=[],t=function(e){return{className:"string",
begin:"~?"+e+".*?"+e}},r=function(e,n,a){return{className:e,begin:n,relevance:a}
},i={begin:"\\(",end:"\\)",contains:s,relevance:0}
;s.push(e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,t("'"),t('"'),e.CSS_NUMBER_MODE,{
begin:"(url|data-uri)\\(",starts:{className:"string",end:"[\\)\\n]",
excludeEnd:!0}
},r("number","#[0-9A-Fa-f]+\\b"),i,r("variable","@@?[\\w-]+",10),r("variable","@{[\\w-]+}"),r("built_in","~?`[^`]*?`"),{
className:"attribute",begin:"[\\w-]+\\s*:",end:":",returnBegin:!0,excludeEnd:!0
},{className:"meta",begin:"!important"});var c=s.concat({begin:"{",end:"}",
contains:a}),l={beginKeywords:"when",endsWithParent:!0,contains:[{
beginKeywords:"and not"}].concat(s)},o={begin:n+"\\s*:",returnBegin:!0,
end:"[;}]",relevance:0,contains:[{className:"attribute",begin:n,end:":",
excludeEnd:!0,starts:{endsWithParent:!0,illegal:"[<=$]",relevance:0,contains:s}
}]},g={className:"keyword",
begin:"@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
starts:{end:"[;{}]",returnEnd:!0,contains:s,relevance:0}},d={
className:"variable",variants:[{begin:"@[\\w-]+\\s*:",relevance:15},{
begin:"@[\\w-]+"}],starts:{end:"[;}]",returnEnd:!0,contains:c}},b={variants:[{
begin:"[\\.#:&\\[>]",end:"[;{}]"},{begin:n,end:"{"}],returnBegin:!0,
returnEnd:!0,illegal:"[<='$\"]",relevance:0,
contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,l,r("keyword","all\\b"),r("variable","@{[\\w-]+}"),r("selector-tag",n+"%?",0),r("selector-id","#"+n),r("selector-class","\\."+n,0),r("selector-tag","&",0),{
className:"selector-attr",begin:"\\[",end:"\\]"},{className:"selector-pseudo",
begin:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{begin:"\\(",end:"\\)",contains:c},{
begin:"!important"}]}
;return a.push(e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,g,d,o,b),{
name:"Less",case_insensitive:!0,illegal:"[=>'/<($\"]",contains:a}}}());hljs.registerLanguage("coq",function(){"use strict";return function(e){return{
name:"Coq",keywords:{
keyword:"_|0 as at cofix else end exists exists2 fix for forall fun if IF in let match mod Prop return Set then Type using where with Abort About Add Admit Admitted All Arguments Assumptions Axiom Back BackTo Backtrack Bind Blacklist Canonical Cd Check Class Classes Close Coercion Coercions CoFixpoint CoInductive Collection Combined Compute Conjecture Conjectures Constant constr Constraint Constructors Context Corollary CreateHintDb Cut Declare Defined Definition Delimit Dependencies Dependent Derive Drop eauto End Equality Eval Example Existential Existentials Existing Export exporting Extern Extract Extraction Fact Field Fields File Fixpoint Focus for From Function Functional Generalizable Global Goal Grab Grammar Graph Guarded Heap Hint HintDb Hints Hypotheses Hypothesis ident Identity If Immediate Implicit Import Include Inductive Infix Info Initial Inline Inspect Instance Instances Intro Intros Inversion Inversion_clear Language Left Lemma Let Libraries Library Load LoadPath Local Locate Ltac ML Mode Module Modules Monomorphic Morphism Next NoInline Notation Obligation Obligations Opaque Open Optimize Options Parameter Parameters Parametric Path Paths pattern Polymorphic Preterm Print Printing Program Projections Proof Proposition Pwd Qed Quit Rec Record Recursive Redirect Relation Remark Remove Require Reserved Reset Resolve Restart Rewrite Right Ring Rings Save Scheme Scope Scopes Script Search SearchAbout SearchHead SearchPattern SearchRewrite Section Separate Set Setoid Show Solve Sorted Step Strategies Strategy Structure SubClass Table Tables Tactic Term Test Theorem Time Timeout Transparent Type Typeclasses Types Undelimit Undo Unfocus Unfocused Unfold Universe Universes Unset Unshelve using Variable Variables Variant Verbose Visibility where with",
built_in:"abstract absurd admit after apply as assert assumption at auto autorewrite autounfold before bottom btauto by case case_eq cbn cbv change classical_left classical_right clear clearbody cofix compare compute congruence constr_eq constructor contradict contradiction cut cutrewrite cycle decide decompose dependent destruct destruction dintuition discriminate discrR do double dtauto eapply eassumption eauto ecase econstructor edestruct ediscriminate eelim eexact eexists einduction einjection eleft elim elimtype enough equality erewrite eright esimplify_eq esplit evar exact exactly_once exfalso exists f_equal fail field field_simplify field_simplify_eq first firstorder fix fold fourier functional generalize generalizing gfail give_up has_evar hnf idtac in induction injection instantiate intro intro_pattern intros intuition inversion inversion_clear is_evar is_var lapply lazy left lia lra move native_compute nia nsatz omega once pattern pose progress proof psatz quote record red refine reflexivity remember rename repeat replace revert revgoals rewrite rewrite_strat right ring ring_simplify rtauto set setoid_reflexivity setoid_replace setoid_rewrite setoid_symmetry setoid_transitivity shelve shelve_unifiable simpl simple simplify_eq solve specialize split split_Rabs split_Rmult stepl stepr subst sum swap symmetry tactic tauto time timeout top transitivity trivial try tryif unfold unify until using vm_compute with"
},contains:[e.QUOTE_STRING_MODE,e.COMMENT("\\(\\*","\\*\\)"),e.C_NUMBER_MODE,{
className:"type",excludeBegin:!0,begin:"\\|\\s*",end:"\\w+"},{begin:/[-=]>/}]}}
}());hljs.registerLanguage("kotlin",function(){"use strict";return function(e){
var n={
keyword:"abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",
built_in:"Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
literal:"true false null"},a={className:"symbol",begin:e.UNDERSCORE_IDENT_RE+"@"
},i={className:"subst",begin:"\\${",end:"}",contains:[e.C_NUMBER_MODE]},s={
className:"variable",begin:"\\$"+e.UNDERSCORE_IDENT_RE},t={className:"string",
variants:[{begin:'"""',end:'"""(?=[^"])',contains:[s,i]},{begin:"'",end:"'",
illegal:/\n/,contains:[e.BACKSLASH_ESCAPE]},{begin:'"',end:'"',illegal:/\n/,
contains:[e.BACKSLASH_ESCAPE,s,i]}]};i.contains.push(t);var r={className:"meta",
begin:"@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*"+e.UNDERSCORE_IDENT_RE+")?"
},l={className:"meta",begin:"@"+e.UNDERSCORE_IDENT_RE,contains:[{begin:/\(/,
end:/\)/,contains:[e.inherit(t,{className:"meta-string"})]}]
},c=e.COMMENT("/\\*","\\*/",{contains:[e.C_BLOCK_COMMENT_MODE]}),o={variants:[{
className:"type",begin:e.UNDERSCORE_IDENT_RE},{begin:/\(/,end:/\)/,contains:[]}]
},d=o;return d.variants[1].contains=[o],o.variants[1].contains=[d],{
name:"Kotlin",aliases:["kt"],keywords:n,contains:[e.COMMENT("/\\*\\*","\\*/",{
relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"}]
}),e.C_LINE_COMMENT_MODE,c,{className:"keyword",
begin:/\b(break|continue|return|this)\b/,starts:{contains:[{className:"symbol",
begin:/@\w+/}]}},a,r,l,{className:"function",beginKeywords:"fun",end:"[(]|$",
returnBegin:!0,excludeEnd:!0,keywords:n,
illegal:/fun\s+(<.*>)?[^\s\(]+(\s+[^\s\(]+)\s*=/,relevance:5,contains:[{
begin:e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,relevance:0,
contains:[e.UNDERSCORE_TITLE_MODE]},{className:"type",begin:/</,end:/>/,
keywords:"reified",relevance:0},{className:"params",begin:/\(/,end:/\)/,
endsParent:!0,keywords:n,relevance:0,contains:[{begin:/:/,end:/[=,\/]/,
endsWithParent:!0,contains:[o,e.C_LINE_COMMENT_MODE,c],relevance:0
},e.C_LINE_COMMENT_MODE,c,r,l,t,e.C_NUMBER_MODE]},c]},{className:"class",
beginKeywords:"class interface trait",end:/[:\{(]|$/,excludeEnd:!0,
illegal:"extends implements",contains:[{
beginKeywords:"public protected internal private constructor"
},e.UNDERSCORE_TITLE_MODE,{className:"type",begin:/</,end:/>/,excludeBegin:!0,
excludeEnd:!0,relevance:0},{className:"type",begin:/[,:]\s*/,end:/[<\(,]|$/,
excludeBegin:!0,returnEnd:!0},r,l]},t,{className:"meta",begin:"^#!/usr/bin/env",
end:"$",illegal:"\n"},{className:"number",
begin:"\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?",
relevance:0}]}}}());hljs.registerLanguage("plaintext",function(){"use strict";return function(t){
return{name:"Plain text",aliases:["text","txt"],disableAutodetect:!0}}}());hljs.registerLanguage("python-repl",function(){"use strict";return function(n){
return{aliases:["pycon"],contains:[{className:"meta",starts:{end:/ |$/,starts:{
end:"$",subLanguage:"python"}},variants:[{begin:/^>>>(?=[ ]|$)/},{
begin:/^\.\.\.(?=[ ]|$)/}]}]}}}());hljs.registerLanguage("c",function(){"use strict";return function(e){
var n=e.requireLanguage("c-like").rawDefinition()
;return n.name="C",n.aliases=["c","h"],n}}());hljs.registerLanguage("scheme",function(){"use strict";return function(e){
var t="[^\\(\\)\\[\\]\\{\\}\",'`;#|\\\\\\s]+",n={$pattern:t,
"builtin-name":"case-lambda call/cc class define-class exit-handler field import inherit init-field interface let*-values let-values let/ec mixin opt-lambda override protect provide public rename require require-for-syntax syntax syntax-case syntax-error unit/sig unless when with-syntax and begin call-with-current-continuation call-with-input-file call-with-output-file case cond define define-syntax delay do dynamic-wind else for-each if lambda let let* let-syntax letrec letrec-syntax map or syntax-rules ' * + , ,@ - ... / ; < <= = => > >= ` abs acos angle append apply asin assoc assq assv atan boolean? caar cadr call-with-input-file call-with-output-file call-with-values car cdddar cddddr cdr ceiling char->integer char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? char-downcase char-lower-case? char-numeric? char-ready? char-upcase char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? char? close-input-port close-output-port complex? cons cos current-input-port current-output-port denominator display eof-object? eq? equal? eqv? eval even? exact->inexact exact? exp expt floor force gcd imag-part inexact->exact inexact? input-port? integer->char integer? interaction-environment lcm length list list->string list->vector list-ref list-tail list? load log magnitude make-polar make-rectangular make-string make-vector max member memq memv min modulo negative? newline not null-environment null? number->string number? numerator odd? open-input-file open-output-file output-port? pair? peek-char port? positive? procedure? quasiquote quote quotient rational? rationalize read read-char real-part real? remainder reverse round scheme-report-environment set! set-car! set-cdr! sin sqrt string string->list string->number string->symbol string-append string-ci<=? string-ci<? string-ci=? string-ci>=? string-ci>? string-copy string-fill! string-length string-ref string-set! string<=? string<? string=? string>=? string>? string? substring symbol->string symbol? tan transcript-off transcript-on truncate values vector vector->list vector-fill! vector-length vector-ref vector-set! with-input-from-file with-output-to-file write write-char zero?"
},r={className:"literal",begin:"(#t|#f|#\\\\"+t+"|#\\\\.)"},a={
className:"number",variants:[{begin:"(\\-|\\+)?\\d+([./]\\d+)?",relevance:0},{
begin:"(\\-|\\+)?\\d+([./]\\d+)?[+\\-](\\-|\\+)?\\d+([./]\\d+)?i",relevance:0},{
begin:"#b[0-1]+(/[0-1]+)?"},{begin:"#o[0-7]+(/[0-7]+)?"},{
begin:"#x[0-9a-f]+(/[0-9a-f]+)?"}]},i=e.QUOTE_STRING_MODE,c=[e.COMMENT(";","$",{
relevance:0}),e.COMMENT("#\\|","\\|#")],s={begin:t,relevance:0},l={
className:"symbol",begin:"'"+t},o={endsWithParent:!0,relevance:0},u={variants:[{
begin:/'/},{begin:"`"}],contains:[{begin:"\\(",end:"\\)",
contains:["self",r,i,a,s,l]}]},g={className:"name",begin:t,keywords:n},d={
variants:[{begin:"\\(",end:"\\)"},{begin:"\\[",end:"\\]"}],contains:[{
begin:/lambda/,endsWithParent:!0,returnBegin:!0,contains:[g,{begin:/\(/,
end:/\)/,endsParent:!0,contains:[s]}]},g,o]}
;return o.contains=[r,a,i,s,l,u,d].concat(c),{name:"Scheme",illegal:/\S/,
contains:[e.SHEBANG(),a,i,l,u,d].concat(c)}}}());hljs.registerLanguage("nginx",function(){"use strict";return function(e){var n={
className:"variable",variants:[{begin:/\$\d+/},{begin:/\$\{/,end:/}/},{
begin:"[\\$\\@]"+e.UNDERSCORE_IDENT_RE}]},a={endsWithParent:!0,keywords:{
$pattern:"[a-z/_]+",
literal:"on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"
},relevance:0,illegal:"=>",contains:[e.HASH_COMMENT_MODE,{className:"string",
contains:[e.BACKSLASH_ESCAPE,n],variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/
}]},{begin:"([a-z]+):/",end:"\\s",endsWithParent:!0,excludeEnd:!0,contains:[n]
},{className:"regexp",contains:[e.BACKSLASH_ESCAPE,n],variants:[{begin:"\\s\\^",
end:"\\s|{|;",returnEnd:!0},{begin:"~\\*?\\s+",end:"\\s|{|;",returnEnd:!0},{
begin:"\\*(\\.[a-z\\-]+)+"},{begin:"([a-z\\-]+\\.)+\\*"}]},{className:"number",
begin:"\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"},{
className:"number",begin:"\\b\\d+[kKmMgGdshdwy]*\\b",relevance:0},n]};return{
name:"Nginx config",aliases:["nginxconf"],contains:[e.HASH_COMMENT_MODE,{
begin:e.UNDERSCORE_IDENT_RE+"\\s+{",returnBegin:!0,end:"{",contains:[{
className:"section",begin:e.UNDERSCORE_IDENT_RE}],relevance:0},{
begin:e.UNDERSCORE_IDENT_RE+"\\s",end:";|{",returnBegin:!0,contains:[{
className:"attribute",begin:e.UNDERSCORE_IDENT_RE,starts:a}],relevance:0}],
illegal:"[^\\s\\}]"}}}());hljs.registerLanguage("http",function(){"use strict";return function(e){
var n="HTTP/[0-9\\.]+";return{name:"HTTP",aliases:["https"],illegal:"\\S",
contains:[{begin:"^"+n,end:"$",contains:[{className:"number",
begin:"\\b\\d{3}\\b"}]},{begin:"^[A-Z]+ (.*?) "+n+"$",returnBegin:!0,end:"$",
contains:[{className:"string",begin:" ",end:" ",excludeBegin:!0,excludeEnd:!0},{
begin:n},{className:"keyword",begin:"[A-Z]+"}]},{className:"attribute",
begin:"^\\w",end:": ",excludeEnd:!0,illegal:"\\n|\\s|=",starts:{end:"$",
relevance:0}},{begin:"\\n\\n",starts:{subLanguage:[],endsWithParent:!0}}]}}}());hljs.registerLanguage("objectivec",function(){"use strict";return function(e){
var n=/[a-zA-Z@][a-zA-Z0-9_]*/,_={$pattern:n,
keyword:"@interface @class @protocol @implementation"};return{
name:"Objective-C",aliases:["mm","objc","obj-c","obj-c++","objective-c++"],
keywords:{$pattern:n,
keyword:"int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required @encode @package @import @defs @compatibility_alias __bridge __bridge_transfer __bridge_retained __bridge_retain __covariant __contravariant __kindof _Nonnull _Nullable _Null_unspecified __FUNCTION__ __PRETTY_FUNCTION__ __attribute__ getter setter retain unsafe_unretained nonnull nullable null_unspecified null_resettable class instancetype NS_DESIGNATED_INITIALIZER NS_UNAVAILABLE NS_REQUIRES_SUPER NS_RETURNS_INNER_POINTER NS_INLINE NS_AVAILABLE NS_DEPRECATED NS_ENUM NS_OPTIONS NS_SWIFT_UNAVAILABLE NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_REFINED_FOR_SWIFT NS_SWIFT_NAME NS_SWIFT_NOTHROW NS_DURING NS_HANDLER NS_ENDHANDLER NS_VALUERETURN NS_VOIDRETURN",
literal:"false true FALSE TRUE nil YES NO NULL",
built_in:"BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"
},illegal:"</",contains:[{className:"built_in",
begin:"\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"
},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.C_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{
className:"string",variants:[{begin:'@"',end:'"',illegal:"\\n",
contains:[e.BACKSLASH_ESCAPE]}]},{className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,
keywords:{
"meta-keyword":"if else elif endif define undef warning error line pragma ifdef ifndef include"
},contains:[{begin:/\\\n/,relevance:0},e.inherit(e.QUOTE_STRING_MODE,{
className:"meta-string"}),{className:"meta-string",begin:/<.*?>/,end:/$/,
illegal:"\\n"},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{
className:"class",begin:"("+_.keyword.split(" ").join("|")+")\\b",end:"({|$)",
excludeEnd:!0,keywords:_,contains:[e.UNDERSCORE_TITLE_MODE]},{
begin:"\\."+e.UNDERSCORE_IDENT_RE,relevance:0}]}}}());hljs.registerLanguage("apache",function(){"use strict";return function(e){
var n={className:"number",
begin:"\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?"};return{
name:"Apache config",aliases:["apacheconf"],case_insensitive:!0,
contains:[e.HASH_COMMENT_MODE,{className:"section",begin:"</?",end:">",
contains:[n,{className:"number",begin:":\\d{1,5}"
},e.inherit(e.QUOTE_STRING_MODE,{relevance:0})]},{className:"attribute",
begin:/\w+/,relevance:0,keywords:{
nomarkup:"order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"
},starts:{end:/$/,relevance:0,keywords:{literal:"on off all deny allow"},
contains:[{className:"meta",begin:"\\s\\[",end:"\\]$"},{className:"variable",
begin:"[\\$%]\\{",end:"\\}",contains:["self",{className:"number",
begin:"[\\$%]\\d+"}]},n,{className:"number",begin:"\\d+"},e.QUOTE_STRING_MODE]}
}],illegal:/\S/}}}());hljs.registerLanguage("perl",function(){"use strict";return function(e){var n={
$pattern:/[\w.]+/,
keyword:"getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qq fileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmget sub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedir ioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when"
},t={className:"subst",begin:"[$@]\\{",end:"\\}",keywords:n},s={begin:"->{",
end:"}"},r={variants:[{begin:/\$\d/},{
begin:/[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/},{begin:/[\$%@][^\s\w{]/,
relevance:0}]
},i=[e.BACKSLASH_ESCAPE,t,r],a=[r,e.HASH_COMMENT_MODE,e.COMMENT("^\\=\\w","\\=cut",{
endsWithParent:!0}),s,{className:"string",contains:i,variants:[{
begin:"q[qwxr]?\\s*\\(",end:"\\)",relevance:5},{begin:"q[qwxr]?\\s*\\[",
end:"\\]",relevance:5},{begin:"q[qwxr]?\\s*\\{",end:"\\}",relevance:5},{
begin:"q[qwxr]?\\s*\\|",end:"\\|",relevance:5},{begin:"q[qwxr]?\\s*\\<",
end:"\\>",relevance:5},{begin:"qw\\s+q",end:"q",relevance:5},{begin:"'",end:"'",
contains:[e.BACKSLASH_ESCAPE]},{begin:'"',end:'"'},{begin:"`",end:"`",
contains:[e.BACKSLASH_ESCAPE]},{begin:"{\\w+}",contains:[],relevance:0},{
begin:"-?\\w+\\s*\\=\\>",contains:[],relevance:0}]},{className:"number",
begin:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
relevance:0},{
begin:"(\\/\\/|"+e.RE_STARTERS_RE+"|\\b(split|return|print|reverse|grep)\\b)\\s*",
keywords:"split return print reverse grep",relevance:0,
contains:[e.HASH_COMMENT_MODE,{className:"regexp",
begin:"(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",relevance:10},{
className:"regexp",begin:"(m|qr)?/",end:"/[a-z]*",contains:[e.BACKSLASH_ESCAPE],
relevance:0}]},{className:"function",beginKeywords:"sub",
end:"(\\s*\\(.*?\\))?[;{]",excludeEnd:!0,relevance:5,contains:[e.TITLE_MODE]},{
begin:"-\\w\\b",relevance:0},{begin:"^__DATA__$",end:"^__END__$",
subLanguage:"mojolicious",contains:[{begin:"^@@.*",end:"$",className:"comment"}]
}];return t.contains=a,s.contains=a,{name:"Perl",aliases:["pl","pm"],keywords:n,
contains:a}}}());hljs.registerLanguage("julia",function(){"use strict";return function(e){
var r="[A-Za-z_\\u00A1-\\uFFFF][A-Za-z_0-9\\u00A1-\\uFFFF]*",t={$pattern:r,
keyword:"in isa where baremodule begin break catch ccall const continue do else elseif end export false finally for function global if import importall let local macro module quote return true try using while type immutable abstract bitstype typealias ",
literal:"true false ARGS C_NULL DevNull ENDIAN_BOM ENV I Inf Inf16 Inf32 Inf64 InsertionSort JULIA_HOME LOAD_PATH MergeSort NaN NaN16 NaN32 NaN64 PROGRAM_FILE QuickSort RoundDown RoundFromZero RoundNearest RoundNearestTiesAway RoundNearestTiesUp RoundToZero RoundUp STDERR STDIN STDOUT VERSION catalan e|0 eu|0 eulergamma golden im nothing pi \u03b3 \u03c0 \u03c6 ",
built_in:"ANY AbstractArray AbstractChannel AbstractFloat AbstractMatrix AbstractRNG AbstractSerializer AbstractSet AbstractSparseArray AbstractSparseMatrix AbstractSparseVector AbstractString AbstractUnitRange AbstractVecOrMat AbstractVector Any ArgumentError Array AssertionError Associative Base64DecodePipe Base64EncodePipe Bidiagonal BigFloat BigInt BitArray BitMatrix BitVector Bool BoundsError BufferStream CachingPool CapturedException CartesianIndex CartesianRange Cchar Cdouble Cfloat Channel Char Cint Cintmax_t Clong Clonglong ClusterManager Cmd CodeInfo Colon Complex Complex128 Complex32 Complex64 CompositeException Condition ConjArray ConjMatrix ConjVector Cptrdiff_t Cshort Csize_t Cssize_t Cstring Cuchar Cuint Cuintmax_t Culong Culonglong Cushort Cwchar_t Cwstring DataType Date DateFormat DateTime DenseArray DenseMatrix DenseVecOrMat DenseVector Diagonal Dict DimensionMismatch Dims DirectIndexString Display DivideError DomainError EOFError EachLine Enum Enumerate ErrorException Exception ExponentialBackOff Expr Factorization FileMonitor Float16 Float32 Float64 Function Future GlobalRef GotoNode HTML Hermitian IO IOBuffer IOContext IOStream IPAddr IPv4 IPv6 IndexCartesian IndexLinear IndexStyle InexactError InitError Int Int128 Int16 Int32 Int64 Int8 IntSet Integer InterruptException InvalidStateException Irrational KeyError LabelNode LinSpace LineNumberNode LoadError LowerTriangular MIME Matrix MersenneTwister Method MethodError MethodTable Module NTuple NewvarNode NullException Nullable Number ObjectIdDict OrdinalRange OutOfMemoryError OverflowError Pair ParseError PartialQuickSort PermutedDimsArray Pipe PollingFileWatcher ProcessExitedException Ptr QuoteNode RandomDevice Range RangeIndex Rational RawFD ReadOnlyMemoryError Real ReentrantLock Ref Regex RegexMatch RemoteChannel RemoteException RevString RoundingMode RowVector SSAValue SegmentationFault SerializationState Set SharedArray SharedMatrix SharedVector Signed SimpleVector Slot SlotNumber SparseMatrixCSC SparseVector StackFrame StackOverflowError StackTrace StepRange StepRangeLen StridedArray StridedMatrix StridedVecOrMat StridedVector String SubArray SubString SymTridiagonal Symbol Symmetric SystemError TCPSocket Task Text TextDisplay Timer Tridiagonal Tuple Type TypeError TypeMapEntry TypeMapLevel TypeName TypeVar TypedSlot UDPSocket UInt UInt128 UInt16 UInt32 UInt64 UInt8 UndefRefError UndefVarError UnicodeError UniformScaling Union UnionAll UnitRange Unsigned UpperTriangular Val Vararg VecElement VecOrMat Vector VersionNumber Void WeakKeyDict WeakRef WorkerConfig WorkerPool "
},a={keywords:t,illegal:/<\//},n={className:"subst",begin:/\$\(/,end:/\)/,
keywords:t},o={className:"variable",begin:"\\$"+r},i={className:"string",
contains:[e.BACKSLASH_ESCAPE,n,o],variants:[{begin:/\w*"""/,end:/"""\w*/,
relevance:10},{begin:/\w*"/,end:/"\w*/}]},l={className:"string",
contains:[e.BACKSLASH_ESCAPE,n,o],begin:"`",end:"`"},s={className:"meta",
begin:"@"+r};return a.name="Julia",a.contains=[{className:"number",
begin:/(\b0x[\d_]*(\.[\d_]*)?|0x\.\d[\d_]*)p[-+]?\d+|\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\b\d[\d_]*(\.[\d_]*)?|\.\d[\d_]*)([eEfF][-+]?\d+)?/,
relevance:0},{className:"string",begin:/'(.|\\[xXuU][a-zA-Z0-9]+)'/},i,l,s,{
className:"comment",variants:[{begin:"#=",end:"=#",relevance:10},{begin:"#",
end:"$"}]},e.HASH_COMMENT_MODE,{className:"keyword",
begin:"\\b(((abstract|primitive)\\s+)type|(mutable\\s+)?struct)\\b"},{begin:/<:/
}],n.contains=a.contains,a}}());hljs.registerLanguage("ini",function(){"use strict";function e(e){
return e?"string"==typeof e?e:e.source:null}function n(...n){
return n.map((n=>e(n))).join("")}return function(a){var s={className:"number",
relevance:0,variants:[{begin:/([\+\-]+)?[\d]+_[\d_]+/},{begin:a.NUMBER_RE}]
},i=a.COMMENT();i.variants=[{begin:/;/,end:/$/},{begin:/#/,end:/$/}];var t={
className:"variable",variants:[{begin:/\$[\w\d"][\w\d_]*/},{begin:/\$\{(.*?)}/}]
},r={className:"literal",begin:/\bon|off|true|false|yes|no\b/},l={
className:"string",contains:[a.BACKSLASH_ESCAPE],variants:[{begin:"'''",
end:"'''",relevance:10},{begin:'"""',end:'"""',relevance:10},{begin:'"',end:'"'
},{begin:"'",end:"'"}]},c={begin:/\[/,end:/\]/,contains:[i,r,t,l,s,"self"],
relevance:0
},g="("+[/[A-Za-z0-9_-]+/,/"(\\"|[^"])*"/,/'[^']*'/].map((n=>e(n))).join("|")+")"
;return{name:"TOML, also INI",aliases:["toml"],case_insensitive:!0,illegal:/\S/,
contains:[i,{className:"section",begin:/\[+/,end:/\]+/},{
begin:n(g,"(\\s*\\.\\s*",g,")*",n("(?=",/\s*=\s*[^#\s]/,")")),className:"attr",
starts:{end:/$/,contains:[i,c,r,t,l,s]}}]}}}());hljs.registerLanguage("scss",function(){"use strict";return function(e){
var t="@[a-z-]+",i={className:"variable",begin:"(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b"
},r={className:"number",begin:"#[0-9A-Fa-f]+"}
;return e.CSS_NUMBER_MODE,e.QUOTE_STRING_MODE,
e.APOS_STRING_MODE,e.C_BLOCK_COMMENT_MODE,{name:"SCSS",case_insensitive:!0,
illegal:"[=/|']",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{
className:"selector-id",begin:"\\#[A-Za-z0-9_-]+",relevance:0},{
className:"selector-class",begin:"\\.[A-Za-z0-9_-]+",relevance:0},{
className:"selector-attr",begin:"\\[",end:"\\]",illegal:"$"},{
className:"selector-tag",
begin:"\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b",
relevance:0},{className:"selector-pseudo",
begin:":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)"
},{className:"selector-pseudo",
begin:"::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)"
},i,{className:"attribute",
begin:"\\b(src|z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b",
illegal:"[^\\s]"},{
begin:"\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"
},{begin:":",end:";",
contains:[i,r,e.CSS_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{
className:"meta",begin:"!important"}]},{begin:"@(page|font-face)",lexemes:t,
keywords:"@page @font-face"},{begin:"@",end:"[{;]",returnBegin:!0,
keywords:"and or not only",contains:[{begin:t,className:"keyword"
},i,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,r,e.CSS_NUMBER_MODE]}]}}}());