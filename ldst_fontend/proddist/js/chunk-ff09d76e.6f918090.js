(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ff09d76e","chunk-2d0aecac"],{"0c25":function(t,e,o){"use strict";o.r(e),o.d(e,"getPostList",(function(){return i})),o.d(e,"getDetailsPost",(function(){return a})),o.d(e,"addPost",(function(){return r})),o.d(e,"updatePost",(function(){return d})),o.d(e,"deletePost",(function(){return u}));o("d3b7");var s=o("efc9"),n="mrbase_sys_job_posts",i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=n,new Promise((function(e,o){s["default"].post("/api/post/list-post/v1",t).then((function(t){e(t)}))["catch"]((function(t){o(t)}))}))},a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=n,new Promise((function(e,o){s["default"].post("/api/post/find-post/v1",t).then((function(t){e(t)}))["catch"]((function(t){o(t)}))}))},r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=n,new Promise((function(e,o){s["default"].post("/api/post/add-post/v1",t).then((function(t){e(t)}))["catch"]((function(t){o(t)}))}))},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=n,new Promise((function(e,o){s["default"].post("/api/post/update-post/v1",t).then((function(t){e(t)}))["catch"]((function(t){o(t)}))}))},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=n,new Promise((function(e,o){s["default"].post("/api/post/delete-post/v1",t).then((function(t){e(t)}))["catch"]((function(t){o(t)}))}))}},"2d0d":function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-form",{ref:"positionsform"},[o("v-card",[o("v-card-title",[o("mrc_ess_switch",{attrs:{"true-value":"1","false-value":"0",readonly:t.readonly,"true-text":t.$t("label_To_enable_the"),"false-text":t.$t("label_disable")},model:{value:t.Positiondetails.is_used,callback:function(e){t.$set(t.Positiondetails,"is_used",e)},expression:"Positiondetails.is_used"}})],1),o("v-card-text",[o("v-row",[o("v-col",{attrs:{cols:"6"}},[o("mrc_ess_multiText",{attrs:{label:t.$t("label_Position_Title")+"*",isNational:t.judegNational("job_post_name"),readonly:t.readonly,"error-messages":t.$errors("Positiondetails","job_post_name",t.requiredRule)},model:{value:t.Positiondetails.job_post_name,callback:function(e){t.$set(t.Positiondetails,"job_post_name",e)},expression:"Positiondetails.job_post_name"}})],1),o("v-col",{attrs:{cols:"6"}},[o("mrc_ess_multiText",{attrs:{label:t.$t("label_Short_code")+"*",isNational:t.judegNational("job_post_shortcode"),"error-messages":t.$errors("Positiondetails","job_post_shortcode",t.maxLength(20)),readonly:t.readonly},model:{value:t.Positiondetails.job_post_shortcode,callback:function(e){t.$set(t.Positiondetails,"job_post_shortcode",e)},expression:"Positiondetails.job_post_shortcode"}})],1)],1),o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("mrc_ess_prompt",{attrs:{label:t.$t("label_Post_grades")+"*",rules:!1,disabled:t.readonly,multiple:!0,errMsg:t.$errors(null,"jobPostRades",t.requiredRule),obj:t.mrbase_sys_job_post_grades},model:{value:t.jobPostRades,callback:function(e){t.jobPostRades=e},expression:"jobPostRades"}})],1)],1),o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("mrc_ess_prompt",{attrs:{label:t.$t("label_department")+"*",rules:!1,disabled:t.readonly,errMsg:t.$errors(null,"department",t.requiredRule),obj:t.companyName},model:{value:t.department,callback:function(e){t.department=e},expression:"department"}})],1)],1),o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("mrc_ess_multiText",{attrs:{label:t.$t("label_describe"),isNational:t.judegNational("job_post_description"),readonly:t.readonly},model:{value:t.Positiondetails.job_post_description,callback:function(e){t.$set(t.Positiondetails,"job_post_description",e)},expression:"Positiondetails.job_post_description"}})],1)],1),o("v-row",[o("v-col",{attrs:{cols:"4"}},[o("mrc_ess_NumInput",{attrs:{label:t.$t("label_The_sorting")+"*","error-messages":t.$errors("Positiondetails","sequence",t.requiredRule),readonly:t.readonly},model:{value:t.Positiondetails.sequence,callback:function(e){t.$set(t.Positiondetails,"sequence",e)},expression:"Positiondetails.sequence"}})],1)],1)],1),t.readonly?t._e():o("mrc_ess_submitBtn",{attrs:{loading:t.btnIsLoading},on:{success:t.success,cancel:t.cancel}})],1)],1)},n=[],i=(o("a15b"),o("ac1f"),o("1276"),o("96cf"),o("1da1")),a=o("0c25"),r=(o("6924"),o("b5ae")),d={components:{},props:{isreadonly:{type:Boolean}},watch:{isreadonly:function(t){this.readonly=t}},validations:{Positiondetails:{job_post_name:{maxLength:Object(r["maxLength"])(20),required:r["required"]},job_post_shortcode:{maxLength:Object(r["maxLength"])(20)},job_post_description:{},sequence:{between:Object(r["between"])(1,50),required:r["required"]}},jobPostRades:{required:r["required"]},department:{required:r["required"]}},data:function(){return{btnIsLoading:!1,nodorules:[function(t){return!!t||"不能为空"},function(t){return String(t).length<=200||"超过输入个数"},function(t){return!/[@#$%^&()<>?/]/.test(t)||"请勿输入非法字符"},function(t){return!/^ +| +$/g.test(t)||"不能输入空格"}],userrules:[function(t){return String(t).length<=20||"超过输入个数"},function(t){return!/[^\w]/g.test(t)||"只能输入数字和字母"}],jobPostRades:[],department:[],switch1:!1,readonly:this.isreadonly,items:["foo","bar","fizz","buzz"],value:["foo","bar","fizz","buzz"],addsequence:1,Positiondetails:{created_by:"",created_utc_datetime:"",job_post_shortcode:"",dept_uuid:"",is_used:"",job_post_description:"",job_post_grades:"",job_post_id:"",job_post_name:"",org_level_uuid:"",sequence:"",updated_by:"",updated_utc_datetime:"",uuid:""}}},created:function(){},mounted:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.national("mrbase_sys_job_posts");case 2:if(!this.$route.params.uuid&&!this.$store.state.uuid){t.next=12;break}return t.next=5,Object(a["getDetailsPost"])({uuid:this.$store.state.uuid});case 5:e=t.sent,console.log(e),this.Positiondetails=e.data,this.department=this.Positiondetails.dept_uuid,this.jobPostRades=""===this.Positiondetails.job_post_grades?[]:this.Positiondetails.job_post_grades.split(","),t.next=12;break;case 12:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{success:function(){var t=this;if(this.$v.Positiondetails.$touch(),this.$v.$touch(),!this.$v.Positiondetails.$error){this.btnIsLoading=!0;var e=this.jobPostRades.join(",");this.Positiondetails.job_post_grades=e;var o=this.Positiondetails;delete o.created_by,delete o.created_utc_datetime,delete o.job_post_id,delete o.updated_by,delete o.updated_utc_datetime,o.dept_uuid=this.department,this.$route.params.uuid||this.$store.state.uuid?(o.org_level_uuid=this.company_uuid,Object(a["updatePost"])(o).then((function(e){200==e.code?t.$router.push({name:"jobs_manage"}):7013==e.code?(t.$myConfirm({content:t.$t("message_Subordinate_employees_cannot_modify_the_position")}),t.btnIsLoading=!1):(t.$myConfirm({content:t.$t("message_The_modification_failed")}),t.btnIsLoading=!1)}))["catch"]((function(e){t.$myConfirm({content:t.$t("message_The_modification_failed")}),t.btnIsLoading=!1}))):(o.org_level_uuid=this.company_uuid,Object(a["addPost"])(o).then((function(e){200==e.code?t.$router.push({name:"jobs_manage"}):(t.$myConfirm({content:"新增失败请重试"}),t.btnIsLoading=!1)}))["catch"]((function(e){t.$myConfirm({content:"新增失败请重试"}),t.btnIsLoading=!1})))}},cancel:function(){var t=this;this.$myConfirm({content:this.$t("message_Confirm_the_cancellation_of_the_edit")}).then((function(){t.$router.push({name:"jobs_manage"})}))["catch"]((function(t){}))},changesequence:function(t){this.Positiondetails.sequence+=t}},computed:{company_uuid:function(){return this.$store.state.currentCompany},companyName:function(){return{prompt_name:"levelUuid_deptUuid",org_level_uuid:this.company_uuid}},mrbase_sys_job_post_grades:function(){return{prompt_name:"mrbase_sys_job_post_grades",org_level_uuid:this.company_uuid}}}},u=d,c=(o("4ce1"),o("2877")),l=Object(c["a"])(u,s,n,!1,null,"d5772d86",null);e["default"]=l.exports},"4ce1":function(t,e,o){"use strict";var s=o("9fd5"),n=o.n(s);n.a},"9fd5":function(t,e,o){}}]);
//# sourceMappingURL=chunk-ff09d76e.6f918090.js.map