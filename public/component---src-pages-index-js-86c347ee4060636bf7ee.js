webpackJsonp([35783957827783],{150:function(e,t){"use strict";function r(e,t,s){if("string"!=typeof t){if(f){var d=u(t);d&&d!==f&&r(e,d,s)}var p=c(t);l&&(p=p.concat(l(t)));for(var m=0;m<p.length;++m){var y=p[m];if(!(a[y]||n[y]||s&&s[y])){var v=i(t,y);try{o(e,y,v)}catch(e){}}}return e}return e}var a={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o=Object.defineProperty,c=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,i=Object.getOwnPropertyDescriptor,u=Object.getPrototypeOf,f=u&&u(Object);e.exports=r},187:function(e,t,r){"use strict";function a(e,t){if(!e){if(n)throw new Error(o);throw new Error(o+": "+(t||""))}}Object.defineProperty(t,"__esModule",{value:!0});var n=!0,o="Invariant failed";t.default=a},188:function(e,t,r){"use strict";function a(e,t){if(!n){if(e)return;var r="Warning: "+t;"undefined"!=typeof console&&console.warn(r);try{throw Error(r)}catch(e){}}}var n=!0;e.exports=a},290:function(e,t){},199:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var n=r(4),o=a(n),c=r(149),l=a(c);r(290);var i=function(e){var t=e.data;return console.log(t),o.default.createElement("div",null,t.allMarkdownRemark.edges.map(function(e){var t=e.node;return o.default.createElement("div",{key:t.id,className:"article-box"},o.default.createElement(l.default,{to:t.fields.slug,style:{textDecoration:"none",color:"inherit"}},o.default.createElement("h3",{className:"title"},t.frontmatter.title)),o.default.createElement("p",{className:"author"},t.frontmatter.author),o.default.createElement("p",{className:"date"},t.frontmatter.date," ",t.timeToRead,"min read"),o.default.createElement("p",{className:"excerpt"},t.excerpt))}))};t.default=i;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-js-86c347ee4060636bf7ee.js.map