(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5187d511"],{2279:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("van-form",{staticStyle:{"margin-top":"30px"},on:{submit:e.onSubmit}},[a("div",{staticStyle:{"text-align":"center"}},[a("van-image",{attrs:{round:"",width:"10rem",height:"10rem",src:e.avatar?e.avatar:"../vant/cat.jpeg"}}),a("input",{staticClass:"form-control-file",staticStyle:{width:"220px"},attrs:{type:"file"},on:{change:e.avatarChange}})],1),a("van-field",{staticStyle:{"padding-left":"30px","margin-top":"30px","font-size":"16px"},attrs:{name:"用户名",label:"用户名",placeholder:"用户名",disabled:""},model:{value:this.username,callback:function(t){e.$set(this,"username",t)},expression:"this.username"}}),a("van-field",{staticStyle:{"padding-left":"30px","font-size":"16px"},attrs:{type:"password",name:"密码",label:"密码",placeholder:"密码"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("van-field",{staticStyle:{"padding-left":"30px","font-size":"16px"},attrs:{name:"年龄",label:"年龄",placeholder:"年龄"},model:{value:e.age,callback:function(t){e.age=t},expression:"age"}}),a("van-field",{staticStyle:{"padding-left":"30px"},attrs:{readonly:"",clickable:"",label:"性别",value:e.gender,placeholder:"选择"},on:{click:function(t){e.showPicker=!0}}}),a("van-popup",{attrs:{round:"",position:"bottom"},model:{value:e.showPicker,callback:function(t){e.showPicker=t},expression:"showPicker"}},[a("van-picker",{attrs:{"show-toolbar":"",columns:e.columns},on:{cancel:function(t){e.showPicker=!1},confirm:e.onConfirm}})],1),a("div",{staticStyle:{margin:"26px 16px"}},[a("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("修改")])],1)],1)},r=[],i=(a("96cf"),a("1da1")),s=(a("38d5"),a("772a")),o=(a("68ef"),a("e3b3"),a("a526"),a("f253")),l=(a("a71a"),a("9d70"),a("3743"),a("4d75"),a("e41f")),u=(a("e7e5"),a("d399")),c=a("2b0e");c["a"].use(u["a"]),c["a"].use(l["a"]),c["a"].use(o["a"]),c["a"].use(s["a"]);var d={data:function(){return{username:"",password:"",age:1,gender:"",showPicker:!1,columns:["男","女","保密"],imageUrl:"",avatar:""}},methods:{onConfirm:function(e){this.gender=e,this.showPicker=!1},onSubmit:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,n,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=localStorage.getItem("currentUser"),a=JSON.parse(a),n=a._id,e._id=n,t.next=6,e.$request.put("/user/"+n,{params:{username:e.username,password:e.password,age:e.age,gender:e.gender}});case 6:r=t.sent,i=r.data,1===i.code&&(Object(u["a"])("修改成功"),i.data.gender?e.gender=i.data.gender:e.gender,i.data.age?e.age=i.data.age:e.age,i.data.avatarUrl?e.avatar=i.data.avatarUrl:e.avatar,i.data.password&&e.$router.push({name:"Login"}));case 9:case"end":return t.stop()}}),t)})))()},avatarChange:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n,r,i,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=localStorage.getItem("currentUser"),n=JSON.parse(n),r=n._id,i=new FormData,i.set("_id",r),i.set("avatar",e.target.files[0]),a.next=8,t.$request.post("/upload/user",i,{contentType:!1});case 8:s=a.sent,t.avatar=s.avatarUrl,r===n._id&&(n.avatarUrl=s.avatarUrl,localStorage.setItem("currentUser",JSON.stringify(n)));case 11:case"end":return a.stop()}}),a)})))()}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,n,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=localStorage.getItem("currentUser"),a=JSON.parse(a),n=a._id,t.next=5,e.$request.get("/user/"+n);case 5:r=t.sent,i=r.data,e.username=i.data.username,e.gender=i.data.gender,e.age=i.data.age,e.avatar=i.data.avatarUrl;case 11:case"end":return t.stop()}}),t)})))()}},f=d,m=a("2877"),p=Object(m["a"])(f,n,r,!1,null,null,null);t["default"]=p.exports},"38d5":function(e,t,a){"use strict";a("68ef")},"772a":function(e,t,a){"use strict";var n=a("d282"),r=a("db85"),i=Object(n["a"])("form"),s=i[0],o=i[1];t["a"]=s({props:{colon:Boolean,labelWidth:[Number,String],labelAlign:String,inputAlign:String,scrollToError:Boolean,validateFirst:Boolean,errorMessageAlign:String,submitOnEnter:{type:Boolean,default:!0},validateTrigger:{type:String,default:"onBlur"},showError:{type:Boolean,default:!0},showErrorMessage:{type:Boolean,default:!0}},provide:function(){return{vanForm:this}},data:function(){return{fields:[]}},methods:{validateSeq:function(){var e=this;return new Promise((function(t,a){var n=[];e.fields.reduce((function(e,t){return e.then((function(){if(!n.length)return t.validate().then((function(e){e&&n.push(e)}))}))}),Promise.resolve()).then((function(){n.length?a(n):t()}))}))},validateAll:function(){var e=this;return new Promise((function(t,a){Promise.all(e.fields.map((function(e){return e.validate()}))).then((function(e){e=e.filter((function(e){return e})),e.length?a(e):t()}))}))},validate:function(e){return e?this.validateField(e):this.validateFirst?this.validateSeq():this.validateAll()},validateField:function(e){var t=this.fields.filter((function(t){return t.name===e}));return t.length?new Promise((function(e,a){t[0].validate().then((function(t){t?a(t):e()}))})):Promise.reject()},resetValidation:function(e){this.fields.forEach((function(t){e&&t.name!==e||t.resetValidation()}))},scrollToField:function(e,t){this.fields.forEach((function(a){a.name===e&&a.$el.scrollIntoView(t)}))},addField:function(e){this.fields.push(e),Object(r["a"])(this.fields,this)},removeField:function(e){this.fields=this.fields.filter((function(t){return t!==e}))},getValues:function(){return this.fields.reduce((function(e,t){return e[t.name]=t.formValue,e}),{})},onSubmit:function(e){e.preventDefault(),this.submit()},submit:function(){var e=this,t=this.getValues();this.validate().then((function(){e.$emit("submit",t)})).catch((function(a){e.$emit("failed",{values:t,errors:a}),e.scrollToError&&e.scrollToField(a[0].name)}))}},render:function(){var e=arguments[0];return e("form",{class:o(),on:{submit:this.onSubmit}},[this.slots()])}})}}]);
//# sourceMappingURL=chunk-5187d511.2047b1bf.js.map