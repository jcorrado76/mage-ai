(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5378],{59739:function(e,t,n){"use strict";var r=n(56669);function o(){}function c(){}c.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,c,i){if(i!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:o};return n.PropTypes=n,n}},47329:function(e,t,n){e.exports=n(59739)()},56669:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},55106:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(82394),o=n(75582),c=n(82684),i=n(83455),a=n(9518),u=n(77011),s=n(28598);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=a.default.div.withConfig({displayName:"MultiFileInput__DropzoneStyle",componentId:"sc-1l6yd2y-0"})(["&:hover{cursor:pointer;}"]);var d=function(e){var t=e.children,n=e.inputOnChange,r=e.inputProps,o=e.onDragActiveChange,i=e.setFiles,a=(0,c.useCallback)((function(e){i(e)}),[i]),p=(0,u.uI)({onDrop:a}),d=p.getInputProps,y=p.getRootProps,O=p.isDragActive,b=d(),h=b.accept,v=b.autoComplete,g=b.multiple,P=b.onChange,j=b.onClick,_=b.ref,w=b.style,m=b.tabIndex,C=b.type,D=l(l({},r),{},{accept:h,autoComplete:v,multiple:g,onChange:function(e){null===n||void 0===n||n(e),null===r||void 0===r||r.onChange(e),P(e)},onClick:j,ref:_,style:w,tabIndex:m,type:C});return(0,c.useEffect)((function(){null===o||void 0===o||o(O)}),[O,o]),(0,s.jsxs)(f,l(l({},y()),{},{children:[(0,s.jsx)("input",l(l({},D),{},{directory:"",webkitdirectory:""})),t]}))},y=n(82531);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=function(e){var t=e.children,n=e.directoryPath,a=e.onDragActiveChange,u=e.setFileUploadProgress,p=e.setUploadedFiles,l=(0,i.Db)(y.ZP.files.useCreate({onUploadProgress:function(e,t){var n,o=t.body,c="".concat(null===o||void 0===o?void 0:o.dir_path,"/").concat(null===o||void 0===o||null===(n=o.file)||void 0===n?void 0:n.name);null===u||void 0===u||u((function(t){return b(b({},t),{},(0,r.Z)({},c,e.loaded/e.total))}))}})),f=(0,o.Z)(l,1)[0],O=(0,c.useCallback)((function(e){e.forEach((function(e){var t=e.name,o=e.path.split("/").filter((function(e){return e&&e!==t})).join("/"),c="".concat(n,"/").concat(o),i="".concat(c,"/").concat(t);f({dir_path:c,file:e,overwrite:!1}).then((function(e){var t=e.data,n=t.error,o=t.file;p((function(e){return b(b({},e),{},(0,r.Z)({},i,o||n))}))})),u((function(e){return b(b({},e),{},(0,r.Z)({},i,0))}))}))}),[f,n,u,p]);return(0,s.jsx)(d,{onDragActiveChange:a,setFiles:O,children:t})}},50439:function(e,t,n){"use strict";n.r(t);var r=n(55106),o=n(28598);t.default=function(){return(0,o.jsx)("div",{children:(0,o.jsx)(r.Z,{})})}},91185:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test",function(){return n(50439)}])}},function(e){e.O(0,[7011,9774,2888,179],(function(){return t=91185,e(e.s=t);var t}));var t=e.O();_N_E=t}]);