(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7cf0f4ee"],{2423:function(e,t,r){"use strict";r.d(t,"d",function(){return o}),r.d(t,"e",function(){return a}),r.d(t,"c",function(){return i}),r.d(t,"f",function(){return c}),r.d(t,"b",function(){return u}),r.d(t,"g",function(){return l}),r.d(t,"a",function(){return s});var n=r("b775");function o(e){return Object(n["a"])({url:"/api/article",method:"get",params:e})}function a(e){return n["a"].post("/api/article",e)}function i(e){return n["a"].get("/api/article/"+e)}function c(e,t){return n["a"].patch("/api/article/"+e,t)}function u(e){return n["a"].delete("/api/article/"+e)}function l(e){return Object(n["a"])({url:"/api/article_search",method:"get",params:e})}function s(e){return Object(n["a"])(e)}},4499:function(e,t,r){},ba19:function(e,t,r){"use strict";var n=r("4499"),o=r.n(n);o.a},c405:function(e,t,r){"use strict";r.d(t,"c",function(){return o}),r.d(t,"d",function(){return a}),r.d(t,"b",function(){return i}),r.d(t,"e",function(){return c}),r.d(t,"a",function(){return u}),r.d(t,"f",function(){return l});var n=r("b775");function o(e){return Object(n["a"])({url:"/api/category",method:"get",params:e})}function a(e){return n["a"].post("/api/category",e)}function i(e){return n["a"].get("/api/category/"+e)}function c(e,t){return n["a"].patch("/api/category/"+e,t)}function u(e){return n["a"].delete("/api/category/"+e)}function l(e){return Object(n["a"])({url:"/api/category_search",method:"get",params:e})}},fdc6:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"120px"}},[r("el-form-item",{attrs:{label:"栏目",prop:"category_id"}},[r("el-select",{attrs:{placeholder:"请选择栏目","value-key":"name"},model:{value:e.item,callback:function(t){e.item=t},expression:"item"}},e._l(e.category,function(t,n){return r("el-option",{key:n,attrs:{label:t.name,value:t.id}},[r("span",{staticStyle:{float:"left",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.name))])])}),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"文章标题",prop:"title"}},[r("el-input",{model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"作者",prop:"author"}},[r("el-input",{model:{value:e.form.author,callback:function(t){e.$set(e.form,"author",t)},expression:"form.author"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"关键词",prop:"keywords"}},[r("el-input",{model:{value:e.form.keywords,callback:function(t){e.$set(e.form,"keywords",t)},expression:"form.keywords"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"标签",prop:"tag_ids"}},[r("el-input",{model:{value:e.form.tag_ids,callback:function(t){e.$set(e.form,"tag_ids",t)},expression:"form.tag_ids"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"内容",prop:"markdown"}},[r("mavon-editor",{ref:"md",on:{imgAdd:e.imgAdd,imgDel:e.imgDel},model:{value:e.form.markdown,callback:function(t){e.$set(e.form,"markdown",t)},expression:"form.markdown"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"是否置顶"}},[r("el-radio-group",{model:{value:e.form.is_top,callback:function(t){e.$set(e.form,"is_top",t)},expression:"form.is_top"}},[r("el-radio",{attrs:{label:1}},[e._v("是")]),e._v(" "),r("el-radio",{attrs:{label:0}},[e._v("否")])],1)],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onSubmit("form")}}},[e._v("提交")]),e._v(" "),r("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v("重置")])],1)],1)],1)},o=[],a=r("b2d8"),i=(r("64e1"),r("5f87")),c=r("2423"),u=r("c405"),l={components:{mavonEditor:a["mavonEditor"]},data:function(){return{item:"",category:[],form:{title:"",category_id:"",author:"admin",keywords:"",tag_ids:"",markdown:"",content:"0",is_top:0,loading:!1},rules:{title:[{required:!0,message:"请输入名称",trigger:"blur"}],category_id:[{required:!0,message:"请选择栏目",trigger:"blur"}],author:[{required:!0,message:"请输入作者",trigger:"blur"}],keywords:[{required:!0,message:"请输入关键词",trigger:"blur"}],tag_ids:[{required:!0,message:"请选择一个标签",trigger:"blur"}],markdown:[{required:!0,message:"请输入内容",trigger:"blur"}]},redirect:"/article/index"}},watch:{item:function(e){this.form.category_id=e,this.getItem()}},created:function(){this.init()},methods:{getItem:function(){this.$emit("getItem",this.form.category)},init:function(){var e=this;Object(u["c"])({perPage:20}).then(function(t){e.category=t.data.data})},onSubmit:function(e){var t=this;console.log(this.form),this.$refs[e].validate(function(e){if(!e)return!1;t.loading=!0,Object(c["e"])(t.form).then(function(e){t.loading=!1,200===e.code?(t.$message({message:"操作成功",type:"success"}),t.$router.push({path:t.redirect||"/"})):t.$message.error(e.reason)})})},onCancel:function(){this.$message({message:"cancel!",type:"warning"})},resetForm:function(e){this.$refs[e].resetFields()},imgAdd:function(e,t){var r=this,n=new FormData;n.append("file",t),Object(c["a"])({url:"https://www.guke1.com/api/upload?token="+Object(i["a"])(),method:"post",data:n,headers:{"Content-Type":"multipart/form-data"}}).then(function(t){console.log(e),console.log(t),r.$refs.md.$img2Url(e,t.data)})},imgDel:function(e){}}},s=l,m=(r("ba19"),r("0c7c")),f=Object(m["a"])(s,n,o,!1,null,"43c458a2",null);t["default"]=f.exports}}]);