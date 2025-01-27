(()=>{"use strict";var o={5251:(o,t,e)=>{var r=e(9196),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function b(o,t,e){var r,a={},b=null,l=null;for(r in void 0!==e&&(b=""+e),void 0!==t.key&&(b=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,r)&&!m.hasOwnProperty(r)&&(a[r]=t[r]);if(o&&o.defaultProps)for(r in t=o.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:n,type:o,key:b,ref:l,props:a,_owner:c.current}}t.Fragment=a,t.jsx=b,t.jsxs=b},5893:(o,t,e)=>{o.exports=e(5251)},9196:o=>{o.exports=window.React}},t={};function e(r){var n=t[r];if(void 0!==n)return n.exports;var a=t[r]={exports:{}};return o[r](a,a.exports,e),a.exports}e.r=o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})};var r={};(()=>{e.r(r);const o=window.kubio.editor,t=window.wp.data,n=window.wp.hooks,a=window.wp.i18n,i=window.kubio.advancedPanel,c=window.kubio.controls,m=window.kubio.core,b=window.kubio.globalData,l=window.wp.components,u=window.wp.element;var d=e(5893);const s=({styledElement:o="wc-button",title:t=(0,a.__)("Primary button","kubio")})=>{const[e,r]=(0,u.useState)(""),{globalStyle:n}=(0,b.useGlobalDataStyle)(),s={type:m.WithDataPathTypes.STYLE,style:o,dataHelper:n};return(0,d.jsx)(l.PanelBody,{initialOpen:!1,title:t,children:(0,d.jsxs)(l.BaseControl,{label:(0,a.__)("State","kubio"),children:[(0,d.jsx)(i.StatesControl,{activeState:e,setActiveState:r,availableStates:["normal","hover","disabled"]}),(0,d.jsx)(c.GradientColorPickerWithPath,{label:(0,a.__)("Background","kubio"),path:"background",state:e,...s}),(0,d.jsx)(c.ColorWithPath,{label:(0,a.__)("Text color","kubio"),path:"typography.color",state:e,...s}),(0,d.jsx)(c.ColorWithPath,{label:(0,a.__)("Border color","kubio"),path:["border.top.color","border.bottom.color","border.left.color","border.right.color"],state:e,...s}),(0,d.jsx)(c.SeparatorHorizontalLine,{}),(0,d.jsx)(c.TypographyControlPopupWithPath,{path:"typography",...s}),(0,d.jsx)(c.SeparatorHorizontalLine,{}),(0,d.jsx)(c.BordersAndRadiusWithPath,{path:"border",...s,withColor:!1}),(0,d.jsx)(c.SeparatorHorizontalLine,{}),(0,d.jsx)(c.BoxShadowWithPath,{path:"boxShadow",...s})]})})},w=({})=>{const o=(0,a.__)("On sale badge","kubio"),{globalStyle:t}=(0,b.useGlobalDataStyle)(),e={type:m.WithDataPathTypes.STYLE,style:"wc-on-sale",dataHelper:t};return(0,d.jsxs)(l.PanelBody,{initialOpen:!1,title:o,children:[(0,d.jsx)(c.GradientColorPickerWithPath,{label:(0,a.__)("Background","kubio"),path:"background",...e}),(0,d.jsx)(c.ColorWithPath,{label:(0,a.__)("Text color","kubio"),path:"typography.color",...e}),(0,d.jsx)(c.SeparatorHorizontalLine,{}),(0,d.jsx)(c.TypographyControlPopupWithPath,{path:"typography",...e}),(0,d.jsx)(c.SeparatorHorizontalLine,{}),(0,d.jsx)(c.BoxUnitValueControlWithPath,{label:(0,a.__)("Padding","kubio"),path:"padding",...e}),(0,d.jsx)(c.SeparatorHorizontalLine,{}),(0,d.jsx)(c.ColorWithPath,{label:(0,a.__)("Border color","kubio"),path:["border.top.color","border.bottom.color","border.left.color","border.right.color"],...e}),(0,d.jsx)(c.SeparatorHorizontalLine,{}),(0,d.jsx)(c.BoxShadowWithPath,{path:"boxShadow",...e})]})},_=()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s,{title:(0,a.__)("Primary button","kubio"),styledElement:"wc-alt-button"}),(0,d.jsx)(s,{title:(0,a.__)("Secondary button","kubio"),styledElement:"wc-button"}),(0,d.jsx)(w,{})]}),p={WC_BUTTON:"wc-button",WC_ALT_BUTTON:"wc-alt-button",WC_ON_SALE:"wc-on-sale"},h={"wc-button":{withGlobalPrefix:!0,selector:{normal:".woocommerce a.button, .woocommerce button.button, .woocommerce input.button, .woocommerce #respond input#submit",hover:".woocommerce a.button:hover, .woocommerce button.button:hover, .woocommerce input.button:hover, .woocommerce #respond input#submit:hover",disabled:".woocommerce a.button:disabled,.woocommerce a.button[disabled], .woocommerce button.button:disabled,.woocommerce button.button[disabled], .woocommerce input.button:disabled,.woocommerce input.button[disabled], .woocommerce #respond input#submit:disabled,.woocommerce #respond input#submit[disabled]"}},"wc-alt-button":{withGlobalPrefix:!0,selector:{normal:".woocommerce a.button.woocommerce-form-login__submit, .woocommerce a.button.add_to_cart_button, .woocommerce a.button.alt, .woocommerce button.button.woocommerce-form-login__submit, .woocommerce button.button.add_to_cart_button, .woocommerce button.button.alt, .woocommerce input.button.woocommerce-form-login__submit, .woocommerce input.button.add_to_cart_button, .woocommerce input.button.alt, .woocommerce #respond input#submit.woocommerce-form-login__submit, .woocommerce #respond input#submit.add_to_cart_button, .woocommerce #respond input#submit.alt",hover:".woocommerce a.button.woocommerce-form-login__submit:hover, .woocommerce a.button.add_to_cart_button:hover, .woocommerce a.button.alt:hover, .woocommerce button.button.woocommerce-form-login__submit:hover, .woocommerce button.button.add_to_cart_button:hover, .woocommerce button.button.alt:hover, .woocommerce input.button.woocommerce-form-login__submit:hover, .woocommerce input.button.add_to_cart_button:hover, .woocommerce input.button.alt:hover, .woocommerce #respond input#submit.woocommerce-form-login__submit:hover, .woocommerce #respond input#submit.add_to_cart_button:hover, .woocommerce #respond input#submit.alt:hover",disabled:".woocommerce a.button.woocommerce-form-login__submit:disabled,.woocommerce a.button.woocommerce-form-login__submit[disabled], .woocommerce a.button.add_to_cart_button:disabled,.woocommerce a.button.add_to_cart_button[disabled], .woocommerce a.button.alt:disabled,.woocommerce a.button.alt[disabled], .woocommerce button.button.woocommerce-form-login__submit:disabled,.woocommerce button.button.woocommerce-form-login__submit[disabled], .woocommerce button.button.add_to_cart_button:disabled,.woocommerce button.button.add_to_cart_button[disabled], .woocommerce button.button.alt:disabled,.woocommerce button.button.alt[disabled], .woocommerce input.button.woocommerce-form-login__submit:disabled,.woocommerce input.button.woocommerce-form-login__submit[disabled], .woocommerce input.button.add_to_cart_button:disabled,.woocommerce input.button.add_to_cart_button[disabled], .woocommerce input.button.alt:disabled,.woocommerce input.button.alt[disabled], .woocommerce #respond input#submit.woocommerce-form-login__submit:disabled,.woocommerce #respond input#submit.woocommerce-form-login__submit[disabled], .woocommerce #respond input#submit.add_to_cart_button:disabled,.woocommerce #respond input#submit.add_to_cart_button[disabled], .woocommerce #respond input#submit.alt:disabled,.woocommerce #respond input#submit.alt[disabled]"}},"wc-on-sale":{withGlobalPrefix:!0,selector:".woocommerce-loop-product__link .onsale"}};(0,o.registerSubSidebarArea)({name:"kubio-woocommerce",title:(0,a.__)("WooCommerce style","kubio"),parent:"document",render:()=>(0,d.jsx)(_,{})}),(0,n.addFilter)("kubio.showRenderedPostContent","kubio.showRenderedPostContent.WooCommercePage",((o,e,r)=>{var n,a;const i=null===(n=(0,t.select)("core/block-editor").getSettings())||void 0===n||null===(a=n.kubioBasicWooCommerce)||void 0===a?void 0:a.pagesIds;return-1!==Object.values(i||{}).indexOf(parseInt(r))||o})),(0,n.addFilter)("kubio.style-types","kubio.style-types.WooCommerce",(o=>({...o,definitions:{...o.definitions,globalStyle:{...o.definitions.globalStyle,elementsEnum:{...o.definitions.globalStyle.elementsEnum,...p},elementsByName:{...o.definitions.globalStyle.elementsByName,...h}}}})))})(),(window.kubio=window.kubio||{}).woocommerceStyles=r})();
