!function(t){function e(e){for(var o,r,c=e[0],s=e[1],l=e[2],f=0,m=[];f<c.length;f++)r=c[f],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&m.push(a[r][0]),a[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);for(u&&u(e);m.length;)m.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(o=!1)}o&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},a={0:0},i=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;i.push([19,1]),n()}({13:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),i=n(3),r=n.n(i),c="bottom-left",s="bottom-right",l="bottom-center",u="top-left",f="top-right",m="top-center",d="center",p="success",h="danger",b="info",y="default",v="warning",g="timeout",E=function(t){return null==t};function w(t){return t===c||t===s||t===l}function N(t){return t===u||t===f||t===m}function O(t){var e=t.type,n=t.content,o=t.userDefinedTypes,a=["notification-item"];if(n)return a;if(E(o))return function(t){switch(t){case y:return["notification-item","notification-default"];case p:return["notification-item","notification-success"];case h:return["notification-item","notification-danger"];case v:return["notification-item","notification-warning"];case b:return["notification-item","notification-info"];default:return["notification-item"]}}(e);var i=o.find((function(t){return t.name===e}));return a.concat(i.htmlClasses)}function S(t,e){var n=t.duration,o=t.timingFunction,a=t.delay;return"".concat(n,"ms ").concat(e," ").concat(o," ").concat(a,"ms")}function k(t,e){var n=e.duration,o=e.timingFunction,a=e.delay,i=t||{};return E(i.duration)&&(i.duration=n),E(i.timingFunction)&&(i.timingFunction=o),E(i.delay)&&(i.delay=a),i}var C=new function(){var t=this;return this.types=null,this.counter=0,this.add=function(){},this.addNotification=function(e){var n=t.types;return t.counter+=1,t.add(function(t,e){var n=t,o=n.id,a=n.type,i=n.insert,r=n.content,c=n.container,s=n.animationIn,l=n.animationOut,u=n.slidingEnter,f=n.slidingExit,m=n.touchRevert,d=n.touchSlidingExit,g=n.dismiss,w=n.width,N=n.onRemoval;n.id=o||C.counter,n.type=r?null:a.toLowerCase(),e&&!r&&(n.userDefinedTypes=function(t,e){var n=t.content,o=t.type;if(!n&&o!==p&&o!==h&&o!==b&&o!==y&&o!==v&&e)return e}(n,e)),E(w)||(n.width=w),n.container=c.toLowerCase(),n.insert=(i||"top").toLowerCase(),n.dismiss=function(t){var e=t,n={duration:0,click:!0,touch:!0,onScreen:!1,waitForAnimation:!1,showIcon:!1};return e?(Object.keys(n).forEach((function(t){E(e[t])&&(e[t]=n[t])})),e):n}(g),n.animationIn=s||[],n.animationOut=l||[],n.onRemoval=N||function(){};var O=function(t,e,n){return{duration:t,timingFunction:e,delay:n}};n.slidingEnter=k(u,O(600,"linear",0)),n.slidingExit=k(f,O(600,"linear",0)),n.touchRevert=k(m,O(600,"linear",0));var S=d||{},j=S.swipe,T=S.fade;return n.touchSlidingExit=S,n.touchSlidingExit.swipe=k(j||{},O(600,"linear",0)),n.touchSlidingExit.fade=k(T||{},O(300,"linear",0)),n}(e,n))},this.removeNotification=function(){},this.register=function(e){var n=e.addNotification,o=e.removeNotification,a=e.types;t.add=n,t.removeNotification=o,t.types=a},this},j=n(1),T=n.n(j),M=function(t,e){var n,o,a=e;this.pause=function(){clearTimeout(n),a-=Date.now()-o},this.resume=function(){o=Date.now(),clearTimeout(n),n=setTimeout(t,a)},this.clear=function(){clearTimeout(n)},this.resume()};function P(t){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],o=!0,a=!1,i=void 0;try{for(var r,c=t[Symbol.iterator]();!(o=(r=c.next()).done)&&(n.push(r.value),!e||n.length!==e);o=!0);}catch(t){a=!0,i=t}finally{try{o||null==c.return||c.return()}finally{if(a)throw i}}return n}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function I(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function R(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?I(Object(n),!0).forEach((function(e){x(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function x(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function A(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function F(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function L(t){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function D(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function z(t,e){return(z=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var Y=function(t){function e(t){var n,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=!(o=L(e).call(this,t))||"object"!==P(o)&&"function"!=typeof o?D(this):o).rootElementRef=a.a.createRef(),n.onClick=n.onClick.bind(D(n)),n.onTouchStart=n.onTouchStart.bind(D(n)),n.onTouchMove=n.onTouchMove.bind(D(n)),n.onTouchEnd=n.onTouchEnd.bind(D(n)),n.onMouseEnter=n.onMouseEnter.bind(D(n)),n.onMouseLeave=n.onMouseLeave.bind(D(n));var i=t.notification.width;return n.state={parentStyle:{height:0,overflow:"hidden",width:i?"".concat(i,"px"):"100%"},htmlClassList:O(t.notification),animationPlayState:"running",touchEnabled:!0},n}var n,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&z(t,e)}(e,t),n=e,(o=[{key:"componentWillUnmount",value:function(){this.timer&&this.timer.clear()}},{key:"componentDidMount",value:function(){var t=this,e=this.props,n=e.notification,o=e.count,a=n.dismiss,i=a.duration,r=a.onScreen,c=this.rootElementRef.current.scrollHeight,s=function(t,e){return!(e<=1)&&e>1&&("top"===t.insert&&N(t.container)||"bottom"===t.insert&&w(t.container)||t.container===d)}(n,o),l=function(){i&&!r&&(t.timer=new M((function(){return t.removeNotification(g)}),i))};this.setState((function(t){return{parentStyle:{width:t.parentStyle.width,height:"".concat(c,"px"),transition:s?S(n.slidingEnter,"height"):"10ms height"},onTransitionEnd:l}}),(function(){requestAnimationFrame((function(){t.setState((function(t){return{htmlClassList:[].concat(A(n.animationIn),A(t.htmlClassList))}}))}))}))}},{key:"componentDidUpdate",value:function(t){var e=t.removed;this.props.removed&&!e&&this.removeNotification("manual")}},{key:"removeNotification",value:function(t){var e=this,n=this.props,o=n.notification,a=n.toggleRemoval,i=o.id,r=o.onRemoval,c=o.dismiss.waitForAnimation,s=[].concat(A(o.animationOut),A(O(o))),l=function(){return a(i,(function(){return r(i,t)}))},u={height:0,transition:S(o.slidingExit,"height")};return c?this.setState((function(t){var n=t.parentStyle.width;return{htmlClassList:s,onAnimationEnd:function(){e.setState({parentStyle:R({width:n},u),onTransitionEnd:l})}}})):this.setState((function(t){return{parentStyle:R({width:t.parentStyle.width},u),onTransitionEnd:l,htmlClassList:s}}))}},{key:"onClick",value:function(){var t=this.props.notification.dismiss;(t.click||t.showIcon)&&this.removeNotification("click")}},{key:"onTouchStart",value:function(t){var e=_(t.touches,1)[0].pageX;this.setState((function(t){var n=t.parentStyle;return{startX:e,currentX:e,parentStyle:R({},n,{position:"relative"})}}))}},{key:"onTouchMove",value:function(t){var e=this,n=t.touches,o=this.state.startX,a=this.props,i=a.toggleRemoval,r=a.notification,c=r.id,s=r.onRemoval,l=r.slidingExit,u=r.touchSlidingExit,f=u.swipe,m=u.fade,d=_(n,1)[0].pageX,p=d-o,h=this.rootElementRef.current.offsetWidth,b=window.innerWidth+h,y="".concat(d-o>=0?b:-b,"px");if(function(t,e){return Math.abs(t)>=.4*e}(p,h)){var v=S(f,"left"),g=S(m,"opacity"),E=function(){i(c,(function(){return s(c,"touch")}))};return this.setState((function(t){return{touchEnabled:!1,parentStyle:R({},t.parentStyle,{left:y,opacity:0,transition:"".concat(v,", ").concat(g)}),onTransitionEnd:function(){e.setState((function(t){return{parentStyle:R({},t.parentStyle,{height:0,transition:S(l,"height")}),onTransitionEnd:E}}))}}}))}return this.setState((function(t){var e=t.parentStyle;return{currentX:d,parentStyle:R({},e,{left:"".concat(0+p,"px")})}}))}},{key:"onTouchEnd",value:function(){var t=this.props.notification.touchRevert;this.setState((function(e){return{parentStyle:R({},e.parentStyle,{left:0,transition:S(t,"left")})}}))}},{key:"onMouseEnter",value:function(){this.timer?this.timer.pause():this.setState({animationPlayState:"paused"})}},{key:"onMouseLeave",value:function(){this.timer?this.timer.resume():this.setState({animationPlayState:"running"})}},{key:"renderTimer",value:function(){var t=this,e=this.props.notification.dismiss,n=e.duration,o=e.onScreen,i=this.state.animationPlayState;if(n&&o){var r={animationName:"timer",animationDuration:"".concat(n,"ms"),animationTimingFunction:"linear",animationFillMode:"forwards",animationDelay:0,animationPlayState:i};return a.a.createElement("div",{className:"timer"},a.a.createElement("div",{className:"timer-filler",onAnimationEnd:function(){return t.removeNotification(g)},style:r}))}}},{key:"renderCustomContent",value:function(){var t=this.state.htmlClassList,e=this.props.notification,n=e.id,o=e.content,i=e.dismiss,r=i.duration,c=i.pauseOnHover,s=r>0&&c;return a.a.createElement("div",{className:"".concat([].concat(A(t),["n-child"]).join(" ")),onMouseEnter:s?this.onMouseEnter:null,onMouseLeave:s?this.onMouseLeave:null},a.a.isValidElement(o)?o:a.a.createElement(o,{id:n}))}},{key:"renderNotification",value:function(){var t=this.props.notification,e=t.title,n=t.message,o=t.dismiss,i=o.showIcon,r=o.duration,c=o.pauseOnHover,s=this.state.htmlClassList,l=r>0&&c;return a.a.createElement("div",{className:"".concat([].concat(A(s),["n-child"]).join(" ")),onMouseEnter:l?this.onMouseEnter:null,onMouseLeave:l?this.onMouseLeave:null},a.a.createElement("div",{className:"notification-content"},i&&a.a.createElement("div",{className:"notification-close",onClick:this.onClick}),e&&a.a.createElement("div",{className:"notification-title"},e),a.a.createElement("div",{className:"notification-message"},n),this.renderTimer()))}},{key:"render",value:function(){var t=this.props.notification,e=t.content,n=t.dismiss.click,o=this.state,i=o.parentStyle,r=o.onAnimationEnd,c=o.onTransitionEnd,s=o.touchEnabled;return a.a.createElement("div",{ref:this.rootElementRef,onClick:n?this.onClick:null,className:"notification-parent",style:i,onAnimationEnd:r,onTransitionEnd:c,onTouchStart:s?this.onTouchStart:null,onTouchMove:s?this.onTouchMove:null,onTouchEnd:s?this.onTouchEnd:null},e?this.renderCustomContent():this.renderNotification())}}])&&F(n.prototype,o),e}(a.a.Component);Y.propTypes={toggleRemoval:T.a.func.isRequired,count:T.a.number.isRequired,removed:T.a.bool};var W=Y;function X(t){return(X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function B(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function H(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function q(t){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function J(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function U(t,e){return(U=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}n(13);var Z=function(t){function e(t){var n,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this,(n=!(o=q(e).call(this,t))||"object"!==X(o)&&"function"!=typeof o?J(this):o).state={isMobile:t.isMobile,breakpoint:t.breakpoint,notifications:[]},n.add=n.add.bind(J(n)),n.remove=n.remove.bind(J(n)),n.toggleRemoval=n.toggleRemoval.bind(J(n)),n.handleResize=n.handleResize.bind(J(n)),n}var n,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&U(t,e)}(e,t),n=e,(o=[{key:"componentDidMount",value:function(){var t=this.props.types;C.register({addNotification:this.add,removeNotification:this.remove,types:t}),this.setState({width:window.innerWidth}),window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"handleResize",value:function(){this.setState({width:window.innerWidth})}},{key:"add",value:function(t){return this.setState((function(e){var n=e.notifications;return{notifications:"top"===t.insert?[t].concat(B(n)):[].concat(B(n),[t])}})),t.id}},{key:"remove",value:function(t){this.setState((function(e){return{notifications:e.notifications.map((function(e){return e.id===t&&(e.removed=!0),e}))}}))}},{key:"toggleRemoval",value:function(t,e){this.setState((function(e){return{notifications:e.notifications.filter((function(e){return e.id!==t}))}}),e)}},{key:"renderNotifications",value:function(t){var e=this;return t.map((function(n){return a.a.createElement(W,{id:n.id,key:n.id,notification:n,toggleRemoval:e.toggleRemoval,count:t.length,removed:n.removed})}))}},{key:"renderMobileNotifications",value:function(t){var e=t.className,n=t.id,o=function(t){var e=[],n=[];return t.forEach((function(t){var o=t.container;N(o)||"center"===o?e.push(t):w(o)&&n.push(t)})),{top:e,bottom:n}}(this.state.notifications),i=this.renderNotifications(o.top),r=this.renderNotifications(o.bottom);return a.a.createElement("div",{id:n,key:"mobile",className:"react-notification-root ".concat(e||"")},a.a.createElement("div",{className:"notification-container-mobile-top"},i),a.a.createElement("div",{className:"notification-container-mobile-bottom"},r))}},{key:"renderScreenNotifications",value:function(t){var e=t.className,n=t.id,o=function(t){var e=[],n=[],o=[],a=[],i=[],r=[],p=[];return t.forEach((function(t){var h=t.container;h===u?e.push(t):h===f?n.push(t):h===m?o.push(t):h===c?a.push(t):h===s?i.push(t):h===l?r.push(t):h===d&&p.push(t)})),{topLeft:e,topRight:n,topCenter:o,bottomLeft:a,bottomRight:i,bottomCenter:r,center:p}}(this.state.notifications),i=this.renderNotifications(o.topLeft),r=this.renderNotifications(o.topRight),p=this.renderNotifications(o.topCenter),h=this.renderNotifications(o.bottomLeft),b=this.renderNotifications(o.bottomRight),y=this.renderNotifications(o.bottomCenter),v=this.renderNotifications(o.center);return a.a.createElement("div",{id:n,key:"screen",className:"react-notification-root ".concat(e||"")},a.a.createElement("div",{className:"notification-container-top-left"},i),a.a.createElement("div",{className:"notification-container-top-right"},r),a.a.createElement("div",{className:"notification-container-bottom-left"},h),a.a.createElement("div",{className:"notification-container-bottom-right"},b),a.a.createElement("div",{className:"notification-container-top-center"},p),a.a.createElement("div",{className:"notification-container-center"},a.a.createElement("div",{className:"center-inner"},v)),a.a.createElement("div",{className:"notification-container-bottom-center"},y))}},{key:"render",value:function(){var t=this.props.isMobile,e=this.state,n=e.width,o=e.breakpoint;return t&&n<=o?this.renderMobileNotifications(this.props):this.renderScreenNotifications(this.props)}}])&&H(n.prototype,o),e}(a.a.Component);Z.propTypes={isMobile:T.a.bool,breakpoint:T.a.number,types:T.a.array},Z.defaultProps={isMobile:!0,breakpoint:768};var V=Z,G=(n(14),n(4)),K=n.n(G);function Q(){return a.a.createElement("div",{className:"header"},a.a.createElement("div",{className:"header-content"},a.a.createElement("h1",{className:"header-title"},"React-Notifications"),a.a.createElement("p",{className:"header-desc"},"Delightful and highly customisable React Component to notify your users"),a.a.createElement("div",{className:"header-buttons"},a.a.createElement(K.a,{type:"stargazers",size:"large",namespace:"teodosii",repo:"react-notifications-component"}))))}var $={title:"Awesomeness",message:"Awesome Notifications!",type:"success",container:"top-right",insert:"bottom",animationIn:["animated","fadeIn"],animationOut:["animated","faster","fadeOut"],slidingEnter:{duration:300,timingFunction:"linear",delay:0},slidingExit:{duration:300,timingFunction:"linear",delay:0},touchRevert:{duration:600,timingFunction:"linear",delay:0},touchSlidingExit:{swipe:{duration:600,timingFunction:"linear",delay:0},fade:{duration:300,timingFunction:"linear",delay:0}},dismiss:{duration:0,onScreen:!1,pauseOnHover:!0,waitForAnimation:!1,showIcon:!0,click:!0,touch:!0}},tt=["top-left","top-right","top-center","center","bottom-left","bottom-right","bottom-center"],et=["success","danger","warning","default","info","awesome"],nt=["All your data has been successfully updated","Your meeting has been successfully attended","Document has been successfully updated"],ot=["You have no access rights","An error occurred while saving","Document has been permanently removed"],at=["Your connection is not private","Your local datetime is not in sync with server's date","You've already done this action"],it=["All your messages have been logged","A new issue has been reported by Office Desk"],rt=["A new appointment has been created in your agenda","You have an appointment at 4PM today"],ct=["Custom types can be used as well. Pretty cool, huh!?","Types are easily configurable. Nice, huh?!"];function st(){return tt[Math.floor(Math.random()*tt.length)]}function lt(){return et[Math.floor(Math.random()*et.length)]}function ut(t){switch(t){case"success":return"Success";case"danger":return"Error";case"warning":return"Warning";case"info":return;case"default":case"awesome":return}}function ft(t){switch(t){case"success":return nt[Math.floor(Math.random()*nt.length)];case"danger":return ot[Math.floor(Math.random()*ot.length)];case"warning":return at[Math.floor(Math.random()*at.length)];case"info":return rt[Math.floor(Math.random()*rt.length)];case"default":return it[Math.floor(Math.random()*it.length)];case"awesome":return ct[Math.floor(Math.random()*ct.length)]}}function mt(t){return(mt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function dt(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function pt(t){return(pt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function ht(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function bt(t,e){return(bt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var yt=function(t){function e(t){var n,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this,(n=!(o=pt(e).call(this,t))||"object"!==mt(o)&&"function"!=typeof o?ht(this):o).add=n.add.bind(ht(n)),n}var n,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&bt(t,e)}(e,t),n=e,(o=[{key:"add",value:function(t){var e=lt();return C.addNotification(Object.assign({},$,{title:ut(e),message:ft(e),container:t,type:e}))}},{key:"render",value:function(){var t=this;return a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-lg-6 offset-lg-3 column col-md-10 offset-md-1 col-sm-12"},a.a.createElement("h6",null,"Container"),a.a.createElement("div",null,a.a.createElement("code",{className:"white-code"},"Container")," can be set from predefined values"," ",a.a.createElement("code",{className:"white-code"},"top-left"),","," ",a.a.createElement("code",{className:"white-code"},"top-right"),","," ",a.a.createElement("code",{className:"white-code"},"top-center"),","," ",a.a.createElement("code",{className:"white-code"},"bottom-left"),","," ",a.a.createElement("code",{className:"white-code"},"bottom-right"),","," ",a.a.createElement("code",{className:"white-code"},"bottom-center")),a.a.createElement("div",null,a.a.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){return t.add("top-left")}},"Top Left")," ",a.a.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){return t.add("top-right")}},"Top Right")," ",a.a.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){return t.add("top-center")}},"Top Center")," ",a.a.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){return t.add("center")}},"Center")," ",a.a.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){return t.add("bottom-left")}},"Bottom Left")," ",a.a.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){return t.add("bottom-right")}},"Bottom Right")," ",a.a.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){return t.add("bottom-center")}},"Bottom Center")," ")))}}])&&dt(n.prototype,o),e}(a.a.Component);function vt(t){return(vt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function gt(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function Et(t){return(Et=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function wt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Nt(t,e){return(Nt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var Ot=function(t){function e(t){var n,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this,(n=!(o=Et(e).call(this,t))||"object"!==vt(o)&&"function"!=typeof o?wt(this):o).add=n.add.bind(wt(n)),n}var n,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Nt(t,e)}(e,t),n=e,(o=[{key:"add",value:function(t){return C.addNotification(Object.assign({},$,{type:t,title:ut(t),message:ft(t),container:st()}))}},{key:"render",value:function(){var t=this;return a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-lg-6 offset-lg-3 column col-md-10 offset-md-1 col-sm-12"},a.a.createElement("h6",null,"Type"),a.a.createElement("div",null,a.a.createElement("code",{className:"white-code"},"Type")," can be set from predefined values"," ",a.a.createElement("code",{className:"white-code"},"success"),", ",a.a.createElement("code",{className:"white-code"},"default"),", ",a.a.createElement("code",{className:"white-code"},"warning"),", ",a.a.createElement("code",{className:"white-code"},"info"),","," ",a.a.createElement("code",{className:"white-code"},"danger")," or custom to suit your needs"),a.a.createElement("div",null,a.a.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){return t.add("success")}},"Success")," ",a.a.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){return t.add("default")}},"Default")," ",a.a.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){return t.add("warning")}},"Warning")," ",a.a.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){return t.add("info")}},"Info")," ",a.a.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){return t.add("danger")}},"Danger")," ",a.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return t.add("awesome")}},"Custom"))))}}])&&gt(n.prototype,o),e}(a.a.Component);function St(){var t=function(t){var e=lt();return C.addNotification(Object.assign({},$,{type:e,insert:t,message:ft(e),title:ut(e)}))};return a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-lg-6 offset-lg-3 column col-md-10 offset-md-1 col-sm-12"},a.a.createElement("h6",null,"Insert"),a.a.createElement("div",null,"Insertion in ",a.a.createElement("code",{className:"white-code"},"react-notifications")," can be done either at the ",a.a.createElement("code",{className:"white-code"},"top")," or at the"," ",a.a.createElement("code",{className:"white-code"},"bottom")," of the container"),a.a.createElement("div",null,a.a.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){return t("top")}},"Top")," ",a.a.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){return t("bottom")}},"Bottom"))))}function kt(){var t=function(t){var e=lt();return C.addNotification(Object.assign({},$,{animationIn:t,container:st(),message:ft(e),type:e}))};return a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-lg-6 offset-lg-3 column col-md-10 offset-md-1 col-sm-12"},a.a.createElement("h6",null,"Animation Entrance"),a.a.createElement("div",null,"Entrance ",a.a.createElement("code",{className:"white-code"},"animation")," can be customised by specifying CSS classes"),a.a.createElement("div",null,a.a.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){return t(["animated bounceIn"])}},"Bounce In")," ",a.a.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){return t(["animated fadeIn"])}},"Fade In")," ",a.a.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){return t(["animated flipInX"])}},"Flip In X")," ",a.a.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){return t(["animated flipInY"])}},"Flip In Y")," ",a.a.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){return t(["animated zoomIn"])}},"Zoom In")," ",a.a.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){return t(["animated flash"])}},"Flash")," ",a.a.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){return t(["animated jackInTheBox"])}},"Jack In The Box"))))}function Ct(){var t=function(t){var e=lt();return C.addNotification(Object.assign({},$,{slidingExit:{delay:300},animationOut:t,container:st(),message:ft(e),type:e}))};return a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-lg-6 offset-lg-3 column col-md-10 offset-md-1 col-sm-12"},a.a.createElement("h6",null,"Animation Exit"),a.a.createElement("div",null,"Exit ",a.a.createElement("code",{className:"white-code"},"animation")," can be customised by specifying CSS classes"),a.a.createElement("div",null,a.a.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){return t(["animated bounceOut"])}},"Bounce Out")," ",a.a.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){return t(["animated fadeOut"])}},"Fade Out")," ",a.a.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){return t(["animated flipOutX"])}},"Flip Out X")," ",a.a.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){return t(["animated flipOutY"])}},"Flip Out Y")," ",a.a.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){return t(["animated zoomOut"])}},"Zoom Out")," ")))}function jt(){return a.a.createElement("div",null,a.a.createElement(kt,null),a.a.createElement(Ct,null))}var Tt=n(5),Mt=n.n(Tt);function Pt(t){return(Pt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function It(t){return(It=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Rt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function xt(t,e){return(xt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var At=function(t){function e(t){var n,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this,(n=!(o=It(e).call(this,t))||"object"!==Pt(o)&&"function"!=typeof o?Rt(this):o).add=n.add.bind(Rt(n)),n.addCustomIcon=n.addCustomIcon.bind(Rt(n)),n.cachedImage=null,n}var n,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&xt(t,e)}(e,t),n=e,(o=[{key:"componentDidMount",value:function(){this.cachedImage=new Image,this.cachedImage.src=Mt.a}},{key:"addCustomIcon",value:function(t,e){var n;"success"===t?n="Your agenda has been successfully synced":"warning"===t?n="Warning! All your data will be lost if you proceed":"danger"===t&&(n="Error! You have no update rights"),C.addNotification(Object.assign({},$,{width:275,container:st(),content:a.a.createElement("div",{className:"notification-custom-".concat(t)},a.a.createElement("div",{className:"notification-custom-icon"},a.a.createElement("i",{className:e})),a.a.createElement("div",{className:"notification-custom-content"},a.a.createElement("p",{className:"notification-message"},n)))}))}},{key:"add",value:function(){var t=this;C.addNotification(Object.assign({},$,{width:325,container:st(),content:function(){return a.a.createElement("div",{className:"custom-image-content"},a.a.createElement("img",{src:t.cachedImage.src,alt:""}))}}))}},{key:"render",value:function(){var t=this;return a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-lg-6 offset-lg-3 column col-md-10 offset-md-1 col-sm-12"},a.a.createElement("h6",null,"Custom Content"),a.a.createElement("div",null,"With ",a.a.createElement("code",{className:"white-code"},"react-notifications-component")," ","notification's"," content can be customised to suit your needs."),a.a.createElement("div",null,a.a.createElement("button",{className:"btn btn-outline-secondary",onClick:this.add},"Custom Image Content"),a.a.createElement("div",null,a.a.createElement("button",{className:"btn btn-outline-secondary",onClick:function(){return t.addCustomIcon("success","fa fa-check-circle")}},"Success with Icon")," ",a.a.createElement("button",{className:"btn btn-outline-secondary",onClick:function(){return t.addCustomIcon("danger","fa fa-exclamation-circle")}},"Danger with Icon")," ",a.a.createElement("button",{className:"btn btn-outline-secondary",onClick:function(){return t.addCustomIcon("warning","fa fa-exclamation-triangle")}},"Warning with Icon")))))}}])&&_t(n.prototype,o),e}(a.a.Component);function Ft(){return a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-lg-6 offset-lg-3 column col-md-10 offset-md-1 col-sm-12 heading"},a.a.createElement("h2",{className:"text-center"},"Examples"),a.a.createElement("div",{className:"alert alert-warning alert-small"},a.a.createElement("i",{className:"fa fa-info-circle"}),"All notifications have been set to be automatically dismissed after"," ",a.a.createElement("code",{className:"white-code"},"5000ms"),". Notifications can be manually dismissed by"," ",a.a.createElement("code",{className:"white-code"},"clicking")," or by"," ",a.a.createElement("code",{className:"white-code"},"swiping")," on mobile devices.")))}var Lt=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(Ft,null),a.a.createElement(yt,null),a.a.createElement(Ot,null),a.a.createElement(At,null),a.a.createElement(St,null),a.a.createElement(jt,null))};function Dt(){return a.a.createElement("div",{className:"content"},a.a.createElement("div",{className:"container"},a.a.createElement(Lt,null)))}var zt=n(6),Yt=n.n(zt);n(18),r.a.render(a.a.createElement((function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(V,{types:[{htmlClasses:["notification-awesome"],name:"awesome"}],isMobile:!0}),a.a.createElement(Q,null),a.a.createElement(Dt,null),a.a.createElement(Yt.a,{target:"_blank",size:125,href:"https://github.com/teodosii/react-notifications-component"}))}),null),document.getElementById("root"))},5:function(t,e,n){t.exports=n.p+"1716baa09161da5443ec49c071921c42.png"}});