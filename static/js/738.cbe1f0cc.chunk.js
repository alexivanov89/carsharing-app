"use strict";(self.webpackChunkcarsharing_app=self.webpackChunkcarsharing_app||[]).push([[738],{8738:function(e,r,a){a.r(r),a.d(r,{default:function(){return h}});var n=a(1413),o=(a(2791),a(6030)),s=a(5176),_=a(1947),c=a(2069),i=a(1591),l=a(8864),t=a(5824),d=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")},p=a(4569),m=(a.n(p)().create({baseURL:"https://api-factory.simbirsoft1.com/api",responseType:"json",headers:{"X-Api-Factory-Application-Id":"5e25c641099b810b946c5d5b"}}),{container:"OrderPage_container__EQoGT",navigationOrderForm:"OrderPage_navigationOrderForm__VMvo6",wrapper:"OrderPage_wrapper__eyaWV",button__navigation:"OrderPage_button__navigation__jHU+l",separator:"OrderPage_separator__5lL3Q",orderForm:"OrderPage_orderForm__V+q7h",stepForm:"OrderPage_stepForm__1nHzi",form:"OrderPage_form__KS8Bs",section:"OrderPage_section__eOS-S",location__city:"OrderPage_location__city__t-aAF",location__point:"OrderPage_location__point__KVuGY",location__map:"OrderPage_location__map__UCiQ0",location__map__header:"OrderPage_location__map__header__PdMud",location__map__body:"OrderPage_location__map__body__M26pk",orderInfo:"OrderPage_orderInfo__98pN0",orderInfo__header:"OrderPage_orderInfo__header__6jslK",orderInfo__params:"OrderPage_orderInfo__params__5ZIaL",orderInfo__param:"OrderPage_orderInfo__param__Fp2tF",orderInfo__param__name:"OrderPage_orderInfo__param__name__EEA-Q",orderInfo__param__value:"OrderPage_orderInfo__param__value__axmmz",orderInfo__price:"OrderPage_orderInfo__price__bapkN",orderInfo__price__label:"OrderPage_orderInfo__price__label__OrFPN",orderInfo__button:"OrderPage_orderInfo__button__hUfaC",select:"OrderPage_select__tj9ne"}),f=a(184),u={},h=function(){var e=(0,o.I0)(),r=(0,o.v9)((function(e){return e.orderForm})),a=r.currentStep,p=r.filledStep,h=r.pointOfIssue,v=(r.car,r.rentalDuration,r.rate,r.additionalServices,r.price),x=h.city,j=h.point,b=(0,s.cI)({defaultValues:u}),g=b.handleSubmit,I=(b.reset,b.setValue,b.control);return(0,f.jsxs)("div",{className:m.container,children:[(0,f.jsx)("div",{className:m.navigationOrderForm,children:(0,f.jsxs)("div",{className:m.wrapper,children:[(0,f.jsx)(i.Z,{classes:m.button__navigation,filled:p>-1,active:0===a,onClick:function(){e((0,t.Bq)(0))},children:"\u041c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435"}),(0,f.jsx)("div",{className:m.separator,children:(0,f.jsx)(c.b,{})}),(0,f.jsx)(i.Z,{classes:m.button__navigation,filled:p>0,active:1===a,disabled:p<0,onClick:function(){e((0,t.Bq)(1))},children:"\u041c\u043e\u0434\u0435\u043b\u044c"}),(0,f.jsx)("div",{className:m.separator,children:(0,f.jsx)(c.b,{})}),(0,f.jsx)(i.Z,{classes:m.button__navigation,filled:p>1,active:2===a,disabled:p<1,onClick:function(){e((0,t.Bq)(2))},children:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e"}),(0,f.jsx)("div",{className:m.separator,children:(0,f.jsx)(c.b,{})}),(0,f.jsx)(i.Z,{classes:m.button__navigation,filled:p>2,active:3===a,disabled:p<2,onClick:function(){e((0,t.Bq)(3))},children:"\u0418\u0442\u043e\u0433\u043e"})]})}),(0,f.jsxs)("div",{className:m.orderForm,children:[(0,f.jsx)("div",{className:m.stepForm,children:(0,f.jsxs)("form",{onSubmit:g((function(e){console.log("data",e)})),className:m.form,children:[0===a&&(0,f.jsxs)("section",{className:m.location,children:[(0,f.jsxs)("div",{className:m.location__city,children:[(0,f.jsx)("label",{children:"\u0413\u043e\u0440\u043e\u0434"}),(0,f.jsx)(s.Qr,{id:"city",name:"city",control:I,render:function(e){var r=e.field;return(0,f.jsx)(_.ZP,(0,n.Z)((0,n.Z)({placeholder:"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0432\u0432\u043e\u0434\u0438\u0442\u044c \u0433\u043e\u0440\u043e\u0434 ...",isClearable:!0},r),{},{options:[{value:"1",label:"\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a"},{value:"2",label:"\u0421\u0430\u0440\u0430\u0442\u043e\u0432"},{value:"3",label:"\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433"},{value:"4",label:"\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440"},{value:"5",label:"\u0412\u043e\u0440\u043e\u043d\u0435\u0436"}],onChange:function(){return console.log("test")},className:m.select,classNamePrefix:"select"}))}})]}),(0,f.jsxs)("div",{className:m.location__point,children:[(0,f.jsx)("label",{children:"\u041f\u0443\u043d\u043a\u0442 \u0432\u044b\u0434\u0430\u0447\u0438"}),(0,f.jsx)(s.Qr,{id:"point",name:"point",control:I,render:function(e){var r=e.field;return(0,f.jsx)(_.ZP,(0,n.Z)((0,n.Z)({placeholder:"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0432\u0432\u043e\u0434\u0438\u0442\u044c \u043f\u0443\u043d\u043a\u0442 ...",isClearable:!0},r),{},{options:[{value:"1",label:"\u041d\u0430\u0440\u0438\u043c\u0430\u043d\u043e\u0432\u0430 42"},{value:"2",label:"\u041d\u0430\u0440\u0438\u043c\u0430\u043d\u043e\u0432\u0430 24"}],onChange:function(){return console.log("test")},className:m.select,classNamePrefix:"select"}))}})]}),(0,f.jsxs)("div",{className:m.location__map,children:[(0,f.jsx)("p",{className:m.location__map__header,children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043d\u0430 \u043a\u0430\u0440\u0442\u0435:"}),(0,f.jsx)("div",{className:m.location__map__body,style:{background:"url(".concat(l,") center / cover no-repeat ")}})]})]}),1===a&&(0,f.jsx)("div",{children:"step2"}),2===a&&(0,f.jsx)("div",{children:"step3"}),3===a&&(0,f.jsx)("div",{children:"step4"})]})}),(0,f.jsxs)("div",{className:m.orderInfo,children:[(0,f.jsx)("div",{className:m.orderInfo__header,children:"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437:"}),(0,f.jsx)("div",{className:m.orderInfo__params,children:x&&j&&(0,f.jsxs)("div",{className:m.orderInfo__param,children:[(0,f.jsx)("div",{className:m.orderInfo__param__name,children:"\u041f\u0443\u043d\u043a\u0442 \u0432\u044b\u0434\u0430\u0447\u0438"}),(0,f.jsxs)("div",{className:m.orderInfo__param__value,children:[(0,f.jsx)("div",{className:m.orderInfo__city,children:"".concat(x,",")}),(0,f.jsx)("div",{className:m.pointOfIssue,children:j})]})]})}),(0,f.jsxs)("div",{className:m.orderInfo__price,children:[(0,f.jsx)("p",{className:m.orderInfo__price__label,children:"\u0426\u0435\u043d\u0430:\xa0"}),(0,f.jsx)("p",{className:m.orderInfo__price__value,children:v.calculated?"".concat(v.calculated," \u20bd"):"\u043e\u0442 ".concat(d(v.min)," \u0434\u043e ").concat(d(v.max)," \u20bd")})]}),function(r){switch(r){case 0:return(0,f.jsx)(i.Z,{classes:m.orderInfo__button,disabled:!(x&&j),onClick:function(){e((0,t.Bq)(a+1)),e((0,t.es)(p+1))},children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u044c"});case 1:return(0,f.jsx)(i.Z,{classes:m.orderInfo__button,onClick:function(){e((0,t.Bq)(a+1)),e((0,t.es)(p+1))},children:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e"});case 2:return(0,f.jsx)(i.Z,{classes:m.orderInfo__button,onClick:function(){e((0,t.Bq)(a+1)),e((0,t.es)(p+1))},children:"\u0418\u0442\u043e\u0433\u043e"});case 3:return(0,f.jsx)(i.Z,{classes:m.orderInfo__button,onClick:function(){e((0,t.Bq)(a+1)),e((0,t.es)(p+1))},children:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c"});default:return(0,f.jsx)(i.Z,{classes:m.orderInfo__button,onClick:function(){e((0,t.Bq)(a+1)),e((0,t.es)(p+1))},children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u044c"})}}(a)]})]})]})}},8864:function(e,r,a){e.exports=a.p+"static/media/map.f7765e04fc83e89ca26d.webp"}}]);
//# sourceMappingURL=738.cbe1f0cc.chunk.js.map