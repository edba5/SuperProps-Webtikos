(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{143:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(319),o=n(194);e.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},180:function(t,e,n){var a;t.exports=(a=n(193))&&a.default||a},188:function(t,e,n){"use strict";n.d(e,"b",function(){return l});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(34),s=n.n(c);n.d(e,"a",function(){return s.a});n(180);var u=r.a.createContext({}),l=function(t){return r.a.createElement(u.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},193:function(t,e,n){"use strict";n.r(e);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(55),s=n(2),u=function(t){var e=t.location,n=s.default.getResourcesForPathnameSync(e.pathname);return n?r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json)):null};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=u},194:function(t,e,n){"use strict";var a=n(195),r=n(0),i=n.n(r),o=n(4),c=n.n(o),s=n(220),u=n.n(s),l=n(188);function d(t){var e=t.description,n=t.lang,r=t.meta,o=t.keywords,c=t.title;return i.a.createElement(l.b,{query:p,render:function(t){var a=e||t.site.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=d;var p="1025518380"},195:function(t){t.exports={data:{site:{siteMetadata:{title:"A react next landing page",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},295:function(t,e){t.exports=function(t,e,n,a){var r=n?n.call(a,t,e):void 0;if(void 0!==r)return!!r;if(t===e)return!0;if("object"!=typeof t||!t||"object"!=typeof e||!e)return!1;var i=Object.keys(t),o=Object.keys(e);if(i.length!==o.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(e),s=0;s<i.length;s++){var u=i[s];if(!c(u))return!1;var l=t[u],d=e[u];if(!1===(r=n?n.call(a,l,d,u):void 0)||void 0===r&&l!==d)return!1}return!0}},319:function(t,e,n){"use strict";var a=n(320),r=n(0),i=n.n(r),o=n(4),c=n.n(o),s=n(188),u=function(t){var e=t.children;return i.a.createElement(s.b,{query:"755544856",render:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement("main",null,e))},data:a})};u.propTypes={children:c.a.node.isRequired},e.a=u},320:function(t){t.exports={data:{site:{siteMetadata:{title:"A react next landing page"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-53deaf0655c43872fe7b.js.map