!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function r(e,t,r){return e(r={path:t,exports:{},require:function(e,t){return function(){throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},r.exports),r.exports}var n=r((function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);t>r;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports})),o=r((function(e){e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports})),a=r((function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports})),i=r((function(e){e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports})),c=r((function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports})),u=t(r((function(e){e.exports=function(e){return o(e)||a(e)||i(e)||c()},e.exports.__esModule=!0,e.exports.default=e.exports}))),s=r((function(e){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports})),d=r((function(e){e.exports=function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,c=[],u=!0,s=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(c.push(n.value),c.length!==t);u=!0);}catch(e){s=!0,o=e}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw o}}return c}},e.exports.__esModule=!0,e.exports.default=e.exports})),l=r((function(e){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports})),p=t(r((function(e){e.exports=function(e,t){return s(e)||d(e,t)||i(e,t)||l()},e.exports.__esModule=!0,e.exports.default=e.exports}))),m=r((function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})),f=t(m);var y=1/0,_=17976931348623157e292,v=/^\s+|\s+$/g,g=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,w=/^0o[0-7]+$/i,I=parseInt,b="object"==typeof self&&self&&self.Object===Object&&self,S="object"==typeof e&&e&&e.Object===Object&&e||b||Function("return this")(),k=Object.prototype.toString,x=S.Symbol,C=Math.min,O=x?x.prototype:void 0,P=O?O.toString:void 0;function A(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function q(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==k.call(e)}function T(e){if("number"==typeof e)return e;if(q(e))return NaN;if(A(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=A(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(v,"");var r=h.test(e);return r||w.test(e)?I(e.slice(2),r?2:8):g.test(e)?NaN:+e}function E(e){return null==e?"":function(e){if("string"==typeof e)return e;if(q(e))return P?P.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(e)}var N,R=(N=Math["round"],function(e,t){if(e=T(e),t=C(function(e){var t=function(e){return e?(e=T(e))===y||e===-1/0?(0>e?-1:1)*_:e==e?e:0:0===e?e:0}(e),r=t%1;return t==t?r?t-r:t:0}(t),292),t){var r=(E(e)+"e").split("e");return+((r=(E(N(r[0]+"e"+(+r[1]+t)))+"e").split("e"))[0]+"e"+(+r[1]-t))}return N(e)});const L="CNY",j=2,F={amount:{value:"amount",decimalSymbol:".",groupSymbol:",",format:"amount"},amount_no_decimals:{value:"amount_no_decimals",decimalSymbol:"",groupSymbol:",",format:"amount_no_decimals"},amount_with_comma_separator:{value:"amount_with_comma_separator",decimalSymbol:",",groupSymbol:".",format:"amount_with_comma_separator"},amount_no_decimals_with_comma_separator:{value:"amount_no_decimals_with_comma_separator",decimalSymbol:"",groupSymbol:".",format:"amount_no_decimals_with_comma_separator"},amount_with_apostrophe_separator:{value:"amount_with_apostrophe_separator",decimalSymbol:".",groupSymbol:"'",format:"amount_with_apostrophe_separator"},amount_no_decimals_with_space_separator:{value:"amount_no_decimals_with_space_separator",decimalSymbol:"",groupSymbol:" ",format:"amount_no_decimals_with_space_separator"},amount_with_space_separator:{value:"amount_with_space_separator",decimalSymbol:",",groupSymbol:" ",format:"amount_with_space_separator"}},M=/.*\{\{(.*)\}\}/,V="amount";var D;let G,H,B,U;!function(e){e.PREFIX="prefix",e.SUFFIX="suffix"}(D||(D={}));const $=Object.entries(F).map((([,e])=>e.value)),K=new Map,Y=new Map,W=new Map,X=new Map,z=new Map,Q=new Map,J=new Map,Z=new Map,ee=new Map,te=e=>{G=e},re=e=>{U=e;const t={};U.forEach((e=>{t[e.currencyCode]=e.exchangeRate})),B=t,"[object process]"===Object.prototype.toString.call("undefined"!=typeof process?process:0)&&(K.clear(),Y.clear(),W.clear(),X.clear(),z.clear(),Q.clear(),J.clear(),Z.clear(),ee.clear())},ne=e=>U.find((t=>t.currencyCode===e)),oe=e=>$.includes(e||""),ae=e=>{const t=e.match(M);if(t&&t.length){const e=(t[1]||"").trim();return oe(e)?F[e]:null}return null},ie=(e,t,r)=>{const n=r?Q:z,o=ae(t),a=n.get(e)?.format;return o||(oe(a)?F[a]:F.amount)},ce=e=>ae(e)||F.amount,ue=(e,t,r)=>{const n=e.match(M);return n?.length&&$.includes(n?.[1]?.trim()||"")?e:(r?Q:z).get(t)?.origin||"{{amount}}"},se=e=>{const t=ne(e);if(!t)return void console.error(`鑾峰彇${e}瀵瑰簲鐨勮揣甯侀厤缃け璐);const{messageWithoutDefaultCurrency:r,messageWithCurrency:n,messageWithoutCurrency:o,messageWithDefaultCurrency:a,currencyCode:i,rate:c=j,currencySymbol:u}=t;((e,t)=>{K.set(e,t)})(i,c),((e,t)=>{Y.set(e,t)})(i,u),((e,t)=>{t?t?.trimStart().indexOf("{{")>0?J.set(e,D.PREFIX):J.set(e,D.SUFFIX):console.error(e+"鏃犲搴旂殑messageWithoutDefaultCurrency閰嶇疆")})(i,r),((e,t)=>{const{format:r}=ce(t);z.set(e,{format:r,origin:t})})(i,r),((e,t)=>{const{format:r}=ce(t);Q.set(e,{format:r,origin:t})})(i,a),((e,t)=>{const{format:r,decimalSymbol:n,groupSymbol:o}=ie(e,t,!1);Z.set(e,n),ee.set(e,o),W.set(e,{format:r,origin:ue(t,e,!1)})})(i,o),((e,t)=>{const{format:r,decimalSymbol:n,groupSymbol:o}=ie(e,t,!0);Z.set(e,n),ee.set(e,o),X.set(e,{format:r,origin:ue(t,e,!0)})})(i,n)},de=(e,t,r)=>{const{groupSymbol:n,decimalSymbol:o}=F[t],a=0>e,{fractionPart:i,integerPart:c}=function(e,t,r){const n=R(e,t);let o,a;return 0!==t&&r?(o=Math.floor(n),a=(""+R(n-o,t)).replace(/^0?\.?/,"").padEnd(t,"0")):(o=R(n),a=""),{integerPart:o,fractionPart:a}}(a?-e:e,r,o);return{integer:`${a?"-":""}${(""+(c||0)).replace(/(\d)(?=(?:\d{3})+$)/g,"$1"+n)}`,fraction:i,groupSymbol:n,decimalSymbol:o}},le=(e,t="CNY",r=H,n)=>{const o=n||B;return t===r?e:e*(o?.[r]??1)/(o?.[t]??1)},pe=e=>(W.get(e)||se(e),Y.get(e)),me=(e="CNY")=>(W.get(e)||se(e),J.get(e)),fe=e=>(W.get(e)||se(e),Z.get(e)),ye=e=>(W.get(e)||se(e),ee.get(e)),_e=(e,t)=>{const{from:r,code:n,to:o,currencyRates:a}=t||{},i=r||G||L;W.get(i)||se(i);const c=o||n||H;W.get(c)||se(c);const u=((e,t=j)=>("number"!=typeof e?Number(e):e)/10**t)(e),s=((e,t)=>{const r=t?.code||G||L;W.get(r)||se(r);const n=ye(r),o=fe(r),a=pe(r),i=me(r),{format:c}=W.get(r)||{},u=oe(c)?c:V,{integer:s,fraction:d}=de(e,u,j),l=[],p=s?.split(n)||[];return p.forEach(((e,t)=>{l.push({type:"integer",value:e}),t!==p.length-1&&l.push({type:"group",value:n})})),l.push({type:"decimal",value:o}),l.push({type:"fraction",value:d?.trim()}),"prefix"===i?l.unshift({type:"currency",value:a}):l.push({type:"currency",value:a}),l})(le(u,i,c,a||B),{code:c}),d={group:"",integer:"",decimal:"",fraction:"",symbolOrder:"",currencySymbol:""};return d.symbolOrder=me(c),s.forEach((e=>{const t=e.value||"";"currency"===e?.type&&(d.currencySymbol=t),"integer"===e?.type&&(d.integer=d.integer?`${d.integer}${d.group||""}${t}`:t),"group"===e?.type&&(d.group=t),"decimal"===e?.type&&(d.decimal=t),"fraction"===e?.type&&(d.fraction=t)})),d};function ve(){switch(window.SL_State.get("templateAlias")){case"Checkout":case"RePay":case"Orders":case"Thankyou":case"Processing":return function(e){return("number"!=typeof e?Number(e):e)/100};default:var e=window.Shopline.currency,t=window.Shopline.currencyConfig.currencyDetailList;return re(t),te(e),function(e){var t;t=window.SL_State.get("currencyCode")||window.SL_State.get("storeInfo.currency"),H=t;var r=_e(e,{}),n=r.fraction;return Number(r.integer.replace(RegExp(r.group,"g"),"")+(n?".".concat(n):""))}}}var ge,he=r((function(e){var t=m.default;e.exports=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,r||"default");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports})),we=r((function(e){var t=m.default;e.exports=function(e){var r=he(e,"string");return"symbol"===t(r)?r:r+""},e.exports.__esModule=!0,e.exports.default=e.exports})),Ie=r((function(e){e.exports=function(e,t,r){return(t=we(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports})),be=r((function(e){function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}e.exports=function(e){for(var r=1;arguments.length>r;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?t(Object(n),!0).forEach((function(t){Ie(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e},e.exports.__esModule=!0,e.exports.default=e.exports})),Se=t(be),ke=t(r((function(e){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports}))),xe=t(r((function(e){function t(e,t){for(var r=0;t.length>r;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,we(n.key),n)}}e.exports=function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports})));!function(e){e.PageView="pageView",e.RegistrationComplete="registrationComplete",e.LoginComplete="loginComplete",e.LeadSubmit="leadSubmit",e.SearchSubmit="searchSubmit",e.SearchResultView="searchResultView",e.ProductListView="productListView",e.ProductListSelectProduct="productListSelectProduct",e.ProductViewToFacebookPixel="productViewToFacebookPixel",e.ProductView="productView",e.ProductVariantView="productVariantView",e.ProductAddToCart="productAddToCart",e.CartView="cartView",e.CartRemoveProduct="cartRemoveProduct",e.CartSelectProduct="cartSelectProduct",e.OrderStart="orderStart",e.OrderAddPaymentInfo="orderAddPaymentInfo",e.OrderCompleteStep="orderCompleteStep",e.OrderComplete="orderComplete"}(ge||(ge={}));var Ce=function(){function e(){var t=this;ke(this,e),this.eventProperties=void 0,this.log=function(e){t.collect({type:"log",payload:e})},this.event=function(e,r,n){var o={};if(e.name===ge.OrderComplete){var a=e.payload;o={orderSeq:a.orderSeq,appOrderSeq:a.appOrderSeq}}t.collect({type:"event",eventName:e.name,eventPayload:e.payload,eventTracker:r,eventData:n},o)},this.collect=function(e,r){var n,o,a,i;null===(n=window)||void 0===n||null===(o=n.HdSdk)||void 0===o||null===(a=o.shopTracker)||void 0===a||null===(i=a.collect)||void 0===i||i.call(a,{event_id:5800,session_id:"",moreinfo:Se(Se({},e),{},{eventProperties:Se(Se({},t.eventProperties),r||{})})})},this.eventProperties=this.initEventProperties()}return xe(e,[{key:"initEventProperties",value:function(){var e={templateAlias:window.SL_State.get("templateAlias"),abandonedOrderSeq:"",checkoutToken:"",appOrderSeq:"",orderSeq:""};switch(e.templateAlias){case"Checkout":e.abandonedOrderSeq=window.SL_State.get("checkout.abandonedOrderInfo.seq"),e.checkoutToken=window.SL_State.get("checkout.abandonedOrderInfo.checkoutToken");break;case"RePay":e.abandonedOrderSeq=window.SL_State.get("repay.abandonedOrderInfo.seq"),e.checkoutToken=window.SL_State.get("repay.abandonedOrderInfo.checkoutToken");break;case"Orders":e.orderSeq=window.SL_State.get("orders.basicInfo.orderSeq"),e.appOrderSeq=window.SL_State.get("orders.basicInfo.appOrderSeq");break;case"Thankyou":e.abandonedOrderSeq=window.SL_State.get("thankyou.abandonedOrderInfo.seq"),e.orderSeq=window.SL_State.get("thankyou.basicInfo.orderSeq"),e.appOrderSeq=window.SL_State.get("thankyou.basicInfo.appOrderSeq");var t=window.location.pathname.match(/checkouts\/(.*)?\/thank_you/);t&&(e.checkoutToken=t[1]);break;case"Processing":e.abandonedOrderSeq=window.SL_State.get("processing.abandonedOrderInfo.abandonedOrderSeq"),e.checkoutToken=window.SL_State.get("processing.abandonedOrderInfo.checkoutToken"),e.orderSeq=window.SL_State.get("processing.orderInfo.orderBasicInfo.orderSeq"),e.appOrderSeq=window.SL_State.get("processing.orderInfo.orderBasicInfo.appOrderSeq")}return e}}]),e}(),Oe=r((function(e){e.exports=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;a.length>n;n++)0>t.indexOf(r=a[n])&&(o[r]=e[r]);return o},e.exports.__esModule=!0,e.exports.default=e.exports})),Pe=t(r((function(e){e.exports=function(e,t){if(null==e)return{};var r,n,o=Oe(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;a.length>n;n++)0>t.indexOf(r=a[n])&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o},e.exports.__esModule=!0,e.exports.default=e.exports}))),Ae=r((function(e,t){e.exports=function(){function e(e){for(var t=1;arguments.length>t;t++){var r=arguments[t];for(var n in r)e[n]=r[n]}return e}function t(r,n){function o(t,o,a){if("undefined"!=typeof document){"number"==typeof(a=e({},n,a)).expires&&(a.expires=new Date(Date.now()+864e5*a.expires)),a.expires&&(a.expires=a.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var i="";for(var c in a)a[c]&&(i+="; "+c,!0!==a[c]&&(i+="="+a[c].split(";")[0]));return document.cookie=t+"="+r.write(o,t)+i}}function a(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],n={},o=0;t.length>o;o++){var a=t[o].split("="),i=a.slice(1).join("=");try{var c=decodeURIComponent(a[0]);if(n[c]=r.read(i,c),e===c)break}catch(e){}}return e?n[e]:n}}return Object.create({set:o,get:a,remove:function(t,r){o(t,"",e({},r,{expires:-1}))},withAttributes:function(r){return t(this.converter,e({},this.attributes,r))},withConverter:function(r){return t(e({},this.converter,r),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(r)}})}return t({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}()})),qe=["hdEventId"],Te={AddPaymentInfo:6,AddToCart:1,InitiateCheckout:4},Ee=[!1,!1,!1,!0],Ne=function(){function e(){ke(this,e)}return xe(e,[{key:"report",value:function(t,r,n,o){var a;Te[t]?(e.fbChecker(),window.HdSdk&&(a=window.HdSdk.shopTracker).report.apply(a,["80000".concat(Te[t]),Se(Se(Se({},r),n),e.getFbParams())].concat(Ee))):this.load(t,r,n,o)}},{key:"load",value:function(t,r,n,o){var a,i=r||{};e.fbChecker();var c,u,s,d=null,l=o||{},p=l.hdEventId,m=Pe(l,qe),f=e.getFbParams();switch(t){case"Purchase":return window.HdSdk&&(a=window.HdSdk.shopTracker).report.apply(a,[p||"80000101",Se(Se(Se(Se({},n),i),f),m)].concat(Ee)),this;case"ViewContent":d=102;break;case"Search":d=103;break;case"Lead":d=104}d?(i=Se(Se(Se({},i),n),f),window.HdSdk&&(c=window.HdSdk.shopTracker).report.apply(c,["80000".concat(d),i].concat(Ee)),window.HdSdk&&(u=window.HdSdk.shopTracker).report.apply(u,["90000".concat(d),f].concat(Ee))):window.HdSdk&&(s=window.HdSdk.shopTracker).report.apply(s,["90000000",f].concat(Ee));return this}}]),e}();Ne.FB_CHECKER_INFO={lock:!1,interval:300,timer:void 0},Ne.fbChecker=function(){if(window.fbq&&!Ne.FB_CHECKER_INFO.lock){Ne.FB_CHECKER_INFO.lock=!0;var e=Date.now();Ne.FB_CHECKER_INFO.timer=window.setInterval((function(){var t;Ae.get("_fbp")&&(window.clearInterval(Ne.FB_CHECKER_INFO.timer),window.HdSdk&&(t=window.HdSdk.shopTracker).report.apply(t,["93000000",Se({_start:e,_end:Date.now(),_duration:Date.now()-e,_fbq:window.fbq.version},Ne.getFbParams())].concat(Ee)))}),Ne.FB_CHECKER_INFO.interval)}},Ne.getFbParams=function(){var e={iframe_id:1};return["c_user","_fbp","_fbc"].forEach((function(t){e[t]=Ae.get(t)||""})),e},new Ne;var Re=function(){function e(t){ke(this,e),this.transportList=[],this.logger=void 0,this.fbqForward=void 0,this.getCurrency=function(){return window.Shopline.Analytics.meta.getCurrency()},this.convertPrice=function(e){return window.Shopline.Analytics.meta.convertPrice(e)},this.formatPrice=function(e){return window.Shopline.Analytics.meta.formatPrice(e)},this.getTemplateAlias=function(){return window.SL_State.get("templateAlias")},this.getEventTraceConfig=function(){return window.SL_State.get("eventTrace")},this.fbq=function(e,t,r,n){for(var o,a=arguments.length,i=Array(a>4?a-4:0),c=4;a>c;c++)i[c-4]=arguments[c];(o=window).fbq.apply(o,[e,t,r,n].concat(i))},this.gtag=function(e,t,r){for(var n,o=arguments.length,a=Array(o>3?o-3:0),i=3;o>i;i++)a[i-3]=arguments[i];(n=window).gtag.apply(n,[e,t,Se({},r)].concat(a))},this.fbqForward=new Ne,this.logger=t}return xe(e,[{key:"facebookPixel",get:function(){return{getProductContentId:function(e,t){return t&&window.Shopline.Analytics.meta.analyticsQuery.reportIds.getFBPixelReportId(e,t)||e}}}},{key:"googleAdsRemarketing",get:function(){return{getProductId:function(e,t){if(t)return window.Shopline.Analytics.meta.analyticsQuery.reportIds.getGARRemarketingReportId(t)||t}}}},{key:"googleAnalytics",get:function(){return{getProductItemId:function(e,t,r){return r||t}}}}]),e}();function Le(e,t){var r=2>=arguments.length||void 0===arguments[2]||arguments[2],n=e.getCurrency,o=e.convertPrice,a=e.formatPrice,i=e.facebookPixel.getProductContentId,c=function(t,n){r&&e.logger.event(t,"FacebookPixel",n)};return{pageView:function(e){t("track","PageView",{},{eventID:e.eventId})},registrationComplete:function(e){t("track","CompleteRegistration",{content_name:e.userId},{eventID:e.eventId})},searchResultView:function(e){t("track","Search",{search_string:e.keyword,content_ids:je(e.result.map((function(e){return i(e.spuId,e.skuId)||e.spuId}))),content_type:"product_group",currency:n()},{eventID:e.eventId})},leadSubmit:function(e){t("track","Lead",e.spuId?{content_name:e.title,content_ids:je([i(e.spuId,e.skuId)||e.spuId]),content_type:"product_group",currency:n(),value:null!=e.price?o(e.price):void 0}:{content_type:"product_group",currency:n()})},productViewToFacebookPixel:function(e){t("track","ViewContent",{content_ids:je([i(e.spuId,e.skuId)||e.spuId]),content_name:e.title,content_category:"",content_type:"product_group",currency:n(),value:o(e.price)},{eventID:e.eventId})},productAddToCart:function(e){var r=0,u=n();r=null!=e.capiValue?a(e.capiValue):o(e.list.reduce((function(e,t){return e+t.price}),0)),null!=e.capiCurrency&&(u=e.capiCurrency);var s={content_ids:je(e.list.map((function(e){return i(e.spuId,e.skuId)||e.spuId}))),content_name:Fe(e.list.map((function(e){return e.title}))),content_category:"",content_type:"product_group",currency:u,value:r};t("track","AddToCart",s,{eventID:e.eventId}),c({name:ge.ProductAddToCart,payload:e},s)},orderStart:function(e){var r=e.list.reduce((function(e,t){return e+t.quantity}),0),a={content_type:"product_group",content_ids:je(e.list.map((function(e){return i(e.spuId,e.skuId)||e.spuId}))),value:o(e.value),num_items:r,currency:n()},u={eventID:e.eventId};t("track","InitiateCheckout",a,u),c({name:ge.OrderStart,payload:e},{data:a,extData:u})},orderAddPaymentInfo:function(e){var r=e.list.reduce((function(e,t){return e+t.quantity}),0),a={content_ids:je(e.list.map((function(e){return i(e.spuId,e.skuId)||e.spuId}))),value:o(e.value),item_price:o(e.productPrice),currency:n(),quantity:r},u={eventID:e.eventId};t("track","AddPaymentInfo",a,u),c({name:ge.OrderAddPaymentInfo,payload:e},{data:a,extData:u})},orderComplete:function(e){var r=e.list.reduce((function(e,t){return e+t.quantity}),0),a={content_ids:je(e.list.map((function(e){return i(e.spuId,e.skuId)||e.spuId}))),content_type:"product_group",value:o(e.value),num_items:r,currency:e.currency||n()},u={eventID:e.eventId},s=[{hdEventId:null==e?void 0:e.hdEventId,order_seq:null==e?void 0:e.orderSeq}],d=function(){try{if(!window.enhanced_conversion_data||!window.__sl_pixel_user_data__)return;var e=window.enhanced_conversion_data,t=e.email,r=e.phone_number,n=window.__sl_pixel_user_data__,o=n.ph,a=n.em;return t?(window.__sl_pixel_user_data__.em=t,window.__sl_pixel_user_data__.ph=""):(window.__sl_pixel_user_data__.em="",window.__sl_pixel_user_data__.ph=r),function(){try{void 0===a?delete window.__sl_pixel_user_data__.em:window.__sl_pixel_user_data__.em=a,void 0===o?delete window.__sl_pixel_user_data__.ph:window.__sl_pixel_user_data__.ph=o}catch(e){console.error(e)}}}catch(e){return}}();try{t.apply(void 0,["track","Purchase",a,u].concat(s))}finally{d&&d()}c({name:ge.OrderComplete,payload:e},{data:a,extData:u,rest:s})}}}function je(e){return e&&e.length>0?1===e.length?e[0]:Array.from(new Set(e)):""}function Fe(e){return e&&e.length>0?e.join(","):""}function Me(e){var t=e.getCurrency,r=e.convertPrice,n=e.googleAnalytics.getProductItemId,o=function(e,t,r){for(var n,o=arguments.length,a=Array(o>3?o-3:0),i=3;o>i;i++)a[i-3]=arguments[i];(n=window).gtag.apply(n,[e,t,Se(Se({},r),{},{send_to:"GA4"})].concat(a))},a=function(t,r){e.logger.event(t,"GoogleAnalytics4",r)};return{pageView:function(e){o("event","page_view",{page_title:e.title,page_location:e.url,page_path:e.path||""})},registrationComplete:function(e){o("event","sign_up",{method:e.method})},loginComplete:function(e){o("event","login",{method:e.method})},leadSubmit:function(e){o("event","generate_lead",{value:null!=e.price?r(e.price):void 0,currency:t()})},searchSubmit:function(e){o("event","search",{search_term:e.keyword||""})},searchResultView:function(e){o("event","view_item_list",{currency:t(),items:e.result.map((function(o,a){return{item_id:n(o.spuId,o.skuId,o.skuItemNo),item_list_name:e.collectionName||"Search Result",item_name:o.title,item_category:De(o.category),price:r(o.price),index:a+1,currency:t()}}))})},productListView:function(e){o("event","view_item_list",{currency:t(),items:e.list.map((function(o,a){return{item_id:n(o.spuId,o.skuId,o.skuItemNo),item_list_name:e.collectionName,item_name:o.title,item_category:De(o.category),price:r(o.price),index:a+1,currency:t()}}))})},productListSelectProduct:function(e){var a=e.list||[];o("event","select_content",{content_type:"product",item_id:a.length>0?n(e.list[0].spuId,e.list[0].skuId,e.list[0].skuItemNo):""}),o("event","select_item",{content_type:"product",currency:t(),items:a.map((function(o){return{item_id:n(o.spuId,o.skuId,o.skuItemNo),item_list_name:e.collectionName,item_name:o.title,item_category:De(o.category),price:r(o.price),index:o.index,currency:t()}}))})},productView:function(e){o("event","view_item",{currency:t(),value:r(e.price),items:[{item_id:n(e.spuId,e.skuId,e.skuItemNo),item_name:e.title,item_price:r(e.price),item_variant:e.variant,item_category:De(e.category),currency:t()}]})},productAddToCart:function(e){var i={currency:t(),value:r(e.value),items:e.list.map((function(e){return{id:n(e.spuId,e.skuId,e.skuItemNo),name:e.title,price:r(e.price),quantity:e.quantity,variant:e.variant,item_category:De(e.category),currency:t()}}))};o("event","add_to_cart",i),a({name:ge.ProductAddToCart,payload:e},i)},cartView:function(e){o("event","view_cart",{value:r(e.value),currency:t(),items:e.list.map((function(e){return{item_id:n(e.spuId,e.skuId,e.skuItemNo),item_name:e.title,price:r(e.price),quantity:e.quantity,item_variant:e.variant,item_category:De(e.category)}}))})},cartRemoveProduct:function(e){o("event","remove_from_cart",{value:r(e.value),currency:t(),items:e.list.map((function(e){return{item_id:n(e.spuId,e.skuId,e.skuItemNo),item_name:e.title,price:r(e.price),quantity:e.quantity,item_variant:e.variant,item_category:De(e.category)}}))})},cartSelectProduct:function(e){o("event","select_content",{content_type:"product",item_id:n(e.spuId,e.skuId,e.skuItemNo),item_category:De(e.category)})},orderStart:function(e){var i={value:r(e.value),currency:t(),items:e.list.map((function(e){return{item_id:n(e.spuId,e.skuId,e.skuItemNo),item_name:e.title,quantity:e.quantity,price:r(e.price),item_variant:e.variant,item_category:De(e.category)}}))};o("event","begin_checkout",i),a({name:ge.OrderStart,payload:e},{data:i})},orderAddPaymentInfo:function(e){var i={value:r(e.value),currency:t(),payment_type:e.paymentType,items:e.list.map((function(e){return{item_id:n(e.spuId,e.skuId,e.skuItemNo),item_name:e.title,quantity:e.quantity,price:r(e.price),item_variant:e.variant,item_category:De(e.category)}}))};o("event","add_payment_info",i),a({name:ge.OrderAddPaymentInfo,payload:e},{data:i})},orderCompleteStep:function(e){3===e.checkout_step&&o("event","add_shipping_info",{value:r(e.value),currency:t(),items:e.list.map((function(e){return{item_id:n(e.spuId,e.skuId,e.skuItemNo),item_name:e.title,quantity:e.quantity,price:r(e.price),item_variant:e.variant,item_category:De(e.category)}}))})},orderComplete:function(e){if(e.appOrderSeq){var i={value:r(e.value),currency:e.currency||t(),shipping:r(e.shippingAmount),tax:r(e.taxAmount),transaction_id:e.appOrderSeq,coupon:e.coupon||"",items:e.list.map((function(e){return{item_id:n(e.spuId,e.skuId,e.skuItemNo),item_name:e.title,quantity:e.quantity,price:r(e.price),item_variant:e.variant,item_category:De(e.category)}}))};o("event","purchase",i),a({name:ge.OrderComplete,payload:e},{data:i})}}}}function Ve(e,t){var r=e.getCurrency,n=e.convertPrice,o=e.googleAnalytics.getProductItemId,a=function(e,r,n){for(var o,a=arguments.length,i=Array(a>3?a-3:0),c=3;a>c;c++)i[c-3]=arguments[c];(o=window).gtag.apply(o,[e,r,Se(Se({},n),{},{send_to:t})].concat(i))},i=function(t,r){e.logger.event(t,"GoogleUniversalAnalytics",r)};return{pageView:function(e){a("event","page_view",{page_title:e.title,page_location:e.url,page_path:e.path||""})},registrationComplete:function(e){a("event","sign_up",{method:e.method})},loginComplete:function(e){a("event","login",{method:e.method})},leadSubmit:function(e){a("event","generate_lead",{value:null!=e.price?n(e.price):void 0,currency:r()})},searchSubmit:function(e){a("event","search",{search_term:e.keyword||""})},searchResultView:function(e){a("event","view_search_results",{currency:r(),search_term:e.keyword,items:e.result.map((function(e,t){return{id:o(e.spuId,e.skuId,e.skuItemNo),name:e.title,category:De(e.category),list_position:t+1,currency:r()}}))}),a("event","view_item_list",{currency:r(),items:e.result.map((function(t,a){return{id:o(t.spuId,t.skuId,t.skuItemNo),list_name:e.collectionName||"Search Result",name:t.title,price:n(t.price),category:De(t.category),index:a+1,currency:r()}}))})},productListView:function(e){a("event","view_item_list",{currency:r(),items:e.list.map((function(t,a){return{id:o(t.spuId,t.skuId,t.skuItemNo),list_name:e.collectionName,name:t.title,price:n(t.price),category:De(t.category),index:a+1,currency:r()}}))})},productListSelectProduct:function(e){var t=e.list||[];a("event","select_content",{content_type:"product",currency:r(),items:t.map((function(t){return{id:o(t.spuId,t.skuId,t.skuItemNo),name:t.title,price:n(t.price),category:De(t.category),list_position:t.index,list_name:e.collectionName,currency:r()}}))})},productView:function(e){a("event","view_item",{currency:r(),items:[{id:o(e.spuId,e.skuId,e.skuItemNo),name:e.title,price:n(e.price),variant:e.variant,category:De(e.category),currency:r()}]})},productAddToCart:function(e){var t={currency:r(),items:e.list.map((function(e){return{id:o(e.spuId,e.skuId,e.skuItemNo),name:e.title,price:n(e.price),quantity:e.quantity,variant:e.variant,category:De(e.category),currency:r()}}))};a("event","add_to_cart",t),i({name:ge.ProductAddToCart,payload:e},t)},cartRemoveProduct:function(e){a("event","remove_from_cart",{value:n(e.value),currency:r(),items:e.list.map((function(e){return{id:o(e.spuId,e.skuId,e.skuItemNo),name:e.title,price:n(e.price),quantity:e.quantity,variant:e.variant,category:De(e.category)}}))})},cartSelectProduct:function(e){a("event","select_content",{content_type:"product",currency:r(),items:[{id:o(e.spuId,e.skuId,e.skuItemNo),name:e.title,price:n(e.price),variant:e.variant,category:De(e.category)}]})},orderStart:function(e){var t={value:n(e.value),currency:r(),items:e.list.map((function(e){return{id:o(e.spuId,e.skuId,e.skuItemNo),name:e.title,quantity:e.quantity,price:n(e.price),variant:e.variant,category:De(e.category)}}))};a("event","begin_checkout",t),i({name:ge.OrderStart,payload:e},{data:t})},orderAddPaymentInfo:function(e){var t={value:n(e.value),currency:r(),payment_type:e.paymentType,items:e.list.map((function(e){return{id:o(e.spuId,e.skuId,e.skuItemNo),name:e.title,quantity:e.quantity,price:n(e.price),variant:e.variant,category:De(e.category)}}))};a("event","add_payment_info",t),i({name:ge.OrderAddPaymentInfo,payload:e},{data:t})},orderCompleteStep:function(e){a("event","checkout_progress",{value:n(e.value),currency:r(),checkout_step:e.checkout_step,items:e.list.map((function(e){return{id:o(e.spuId,e.skuId,e.skuItemNo),name:e.title,quantity:e.quantity,price:n(e.price),variant:e.variant,category:De(e.category)}}))}),a("event","set_checkout_option",{checkout_step:e.checkout_step,checkout_option:e.checkout_option,value:n(e.value)})},orderComplete:function(e){if(e.appOrderSeq){var t={value:n(e.value),currency:e.currency||r(),shipping:n(e.shippingAmount),tax:n(e.taxAmount),transaction_id:e.appOrderSeq,coupon:e.coupon||"",items:e.list.map((function(e){return{id:o(e.spuId,e.skuId,e.skuItemNo),name:e.title,quantity:e.quantity,price:n(e.price),variant:e.variant,category:De(e.category)}}))};a("event","purchase",t),i({name:ge.OrderComplete,payload:e},{data:t})}}}}function De(e){return e||""}var Ge=function(e){return"[object Object]"===Object.prototype.toString.call(e)};function He(e,t,r){var n=e.getTemplateAlias,o=e.getCurrency,a=e.convertPrice,i=function(e,t,n){for(var o,a=arguments.length,i=Array(a>3?a-3:0),c=3;a>c;c++)i[c-3]=arguments[c];(o=window).gtag.apply(o,[e,t,Se(Se({},n||{}),{},{send_to:r})].concat(i))},c=function(n,o){e.logger.event(n,"GoogleAdsConversion?scope=".concat(t,"&send_to=").concat(r),o)};return{pageView:function(e){if(!t){switch(n()){case"Checkout":case"Processing":case"Thankyou":return}i("event","conversion",null)}},registrationComplete:function(e){"REGISTER-MEMBER"===t&&i("event","conversion",null)},leadSubmit:function(e){"SUBMIT-LEAD-FORM"===t&&i("event","conversion",{value:null!=e.price?a(e.price):void 0,currency:o()})},productAddToCart:function(e){if("ADD-TO-CART"===t){var r={value:a(e.value),currency:o()};i("event","conversion",r),c({name:ge.ProductAddToCart,payload:e},r)}},orderStart:function(e){if("VISIT-SETTLE-PAGE"===t||!t){var r={currency:o(),value:a(e.value)};i("event","conversion",r),c({name:ge.OrderStart,payload:e},r)}},orderComplete:function(e){var r;if("CREATE-ORDER"===t){var n={value:a(e.value),currency:e.currency||o(),transaction_id:e.orderSeq||""};i("event","conversion",n),c({name:ge.OrderComplete,payload:e},{data:n,enhanced_conversion_data:null===(r=window)||void 0===r?void 0:r.enhanced_conversion_data})}}}}function Be(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2?arguments[2]:void 0,n=e.getCurrency,o=e.convertPrice,a=e.googleAdsRemarketing.getProductId,i=function(e,t,n){for(var o,a=arguments.length,i=Array(a>3?a-3:0),c=3;a>c;c++)i[c-3]=arguments[c];(o=window).gtag.apply(o,[e,t,Ge(n)?Se(Se({},n),{},{send_to:r}):n].concat(i))},c=function(n,o){e.logger.event(n,"GoogleAdsRemarketing?legacy=".concat(t,"&send_to=").concat(r),Se(Se({},o),{},{legacy:t}))};return{leadSubmit:function(e){if(t){var r=a(e.spuId,e.skuId),c="product";r||(c="other"),i("event","generate_lead",{ecomm_prodid:r,ecomm_pagetype:c,ecomm_totalvalue:null!=e.price?o(e.price):e.price,currency:n(),ecomm_category:e.collectionName,ecomm_pcat:e.collectionId})}else i("event","generate_lead",{currency:n(),value:null!=e.price?o(e.price):e.price,items:[{id:a(e.spuId,e.skuId),google_business_vertical:"retail"}]})},searchResultView:function(e){var r=e.result.slice(0,10);i("event","view_search_results",t?{ecomm_prodid:r.map((function(e){return a(e.spuId,e.skuId)})),ecomm_pagetype:"searchresults"}:{items:r.map((function(e){return{id:a(e.spuId,e.skuId),google_business_vertical:"retail"}}))})},productListView:function(e){var r=e.list.slice(0,10);i("event","view_item_list",t?{ecomm_prodid:r.map((function(e){return a(e.spuId,e.skuId)})),ecomm_pagetype:e.collectionType,ecomm_pcat:e.collectionName,ecomm_category:e.collectionId}:{items:r.map((function(e){return{id:a(e.spuId,e.skuId),google_business_vertical:"retail"}}))})},productView:function(e){i("event","view_item",t?{ecomm_prodid:a(e.spuId,e.skuId),ecomm_pagetype:"product",ecomm_pcat:e.collectionName,ecomm_category:e.collectionId,ecomm_totalvalue:o(e.price),currency:n()}:{value:o(e.price),currency:n(),items:[{id:a(e.spuId,e.skuId),google_business_vertical:"retail"}]})},productAddToCart:function(e){if(t){var r={ecomm_prodid:e.list.map((function(e){return a(e.spuId,e.skuId)})),ecomm_pagetype:"cart",ecomm_totalvalue:o(e.value),currency:n()};i("event","add_to_cart",r),c({name:ge.ProductAddToCart,payload:e},r)}else{var u={value:o(e.value),currency:n(),items:e.list.map((function(e){return{id:a(e.spuId,e.skuId),google_business_vertical:"retail"}}))};i("event","add_to_cart",u),c({name:ge.ProductAddToCart,payload:e},u)}},orderComplete:function(e){if(t){var r={ecomm_prodid:e.list.map((function(e){return a(e.spuId,e.skuId)})),ecomm_pagetype:"purchase",ecomm_totalvalue:o(e.value)};i("event","purchase",r),c({name:ge.OrderComplete,payload:e},r)}else{var n={value:o(e.value),items:e.list.map((function(e){return{id:a(e.spuId,e.skuId)||e.skuId,google_business_vertical:"retail"}}))};i("event","purchase",n),c({name:ge.OrderComplete,payload:e},n)}}}}function Ue(){if(function(){var e=window.__ENV__.ANALYTICS_UNIFY_GRAY_RELEASE;if(!e)return!0;if(!e.mode)return!0;var t=window.SL_State.get("storeInfo.storeId");return"enable"===e.mode?!e.blacklist_store_ids||0>e.blacklist_store_ids.indexOf(t):!(!e.whitelist_store_ids||0>e.whitelist_store_ids.indexOf(t))}()){var e=new Ce,t=new Re(e);!function(e){var t=e.getEventTraceConfig();if(t.enabled.FBPixel&&e.transportList.push(["FacebookPixel",Le(e,e.fbq)]),t.enabled.GA){var r={};t.enabled.GA.forEach((function(t){if(t.version){if(r[t.version])return;r[t.version]=!0}e.transportList.push("GA4"===t.version?["GoogleAnalytics4",Me(e)]:["GoogleUniversalAnalytics",Ve(e,"UA"===t.version?"UA":t.id)])}))}t.enabled.GAAds&&t.enabled.GAAds.forEach((function(t){e.transportList.push(["GoogleAdsConversion",He(e,t.scope,"".concat(t.id,"/").concat(t.tag))])})),t.enabled.GARemarketing&&t.enabled.GARemarketing.forEach((function(t){0!==t.traceType&&e.transportList.push(["GoogleAdsRemarketing",Be(e,t.useLegacyCode,t.id)])})),e.transportList.push(["FacebookPixelForward",Le(e,(function(t,r,n,o){e.fbqForward.report(r,n,o,arguments.length>4?arguments[4]:void 0)}),!1)])}(t);var r,n,o,a,i=(r={onEvent:function(e){"string"==typeof e.name&&t.transportList.forEach((function(t){var r=p(t,2),n=r[0],o=r[1];if(!(e.whitelistTransports&&0>e.whitelistTransports.indexOf(n)||e.blacklistTransports&&e.blacklistTransports.indexOf(n)>=0||"function"!=typeof o[e.name]))try{o[e.name](e.payload)}catch(e){}}))},onLog:function(e){t.logger.log(e)}},n=[],o=void 0,a=function e(){if(!o&&(o=n.shift())){switch(o[0]){case"event":try{r.onEvent(o[1])}catch(e){console.error("Failed to invoke event with error",e)}break;case"callback":var t=o[1]();if(t&&"object"===f(t)&&"function"==typeof t.then)return void t.then((function(){o=void 0,e()}),(function(){o=void 0,e()}))}o=void 0,e()}},{push:function(){n.push.apply(n,arguments),a()}});window.Shopline.Analytics.meta.convertPrice=ve(),i.push.apply(i,u(window.Shopline.Analytics.dataLayer)),window.Shopline.Analytics.dataLayer=new Proxy(window.Shopline.Analytics.dataLayer,{get:function(e,t,r){return"push"===t?function(){e.push.apply(e,arguments),i.push.apply(i,arguments)}:e[t]}})}}"loading"!=document.readyState?Ue():window.addEventListener("DOMContentLoaded",(function(e){Ue()}))}));