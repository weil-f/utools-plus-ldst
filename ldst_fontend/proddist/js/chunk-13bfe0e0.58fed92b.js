(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13bfe0e0","chunk-2d21083c"],{"209a":function(e,t,n){},"26d1":function(e,t,n){"use strict";var i=n("209a"),a=n.n(i);a.a},2926:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"adduser"},[n("v-row",[n("div",[e.$store.state.uuid?n("mrc_ess_switch",{attrs:{"true-value":1,"false-value":0,"true-text":e.$t("label_To_enable_the"),"false-text":e.$t("label_disable")},model:{value:e.switch1,callback:function(t){e.switch1=t},expression:"switch1"}}):e._e()],1)]),n("v-row",[n("v-col",{attrs:{cols:"6"}},[n("mrc_ess_multiText",{attrs:{label:e.$t("label_The_customer_name")+"*",isNational:e.judegNational("client_name"),"error-messages":e.$errors("userdetail","client_name",e.requiredRule.concat(e.maxLength(20))),readonly:e.readonly},model:{value:e.userdetail.client_name,callback:function(t){e.$set(e.userdetail,"client_name",t)},expression:"userdetail.client_name"}})],1),n("v-col",{attrs:{cols:"6"}},[n("mrc_ess_multiText",{attrs:{label:e.$t("label_Client_short_code"),isNational:e.judegNational("client_short_code"),"error-messages":e.$errors("userdetail","client_short_code",e.maxLength(20)),"background-color":e.readonly?"":"#f2f2f2",readonly:!!e.$store.state.uuid},model:{value:e.userdetail.client_short_code,callback:function(t){e.$set(e.userdetail,"client_short_code",t)},expression:"userdetail.client_short_code"}})],1)],1),n("v-row",[n("v-col",{attrs:{cols:"6"}},[n("mrc_ess_phoneInput",{attrs:{readonly:e.readonly,code:e.userdetail.client_tel_area_code,changeCode:e.userdetail.client_tel_area_code},on:{"update:changeCode":function(t){return e.$set(e.userdetail,"client_tel_area_code",t)},"update:change-code":function(t){return e.$set(e.userdetail,"client_tel_area_code",t)}},model:{value:e.userdetail.client_tel,callback:function(t){e.$set(e.userdetail,"client_tel",t)},expression:"userdetail.client_tel"}})],1),n("v-col",{attrs:{cols:"6"}},[n("mrc_ess_multiText",{attrs:{label:e.$t("label_Web_site"),isNational:e.judegNational("client_browser"),"error-messages":e.$errors("userdetail","client_browser",e.urlRule),readonly:e.readonly},model:{value:e.userdetail.client_browser,callback:function(t){e.$set(e.userdetail,"client_browser",t)},expression:"userdetail.client_browser"}})],1)],1),n("v-row",[n("v-col",{attrs:{cols:"6"}},[n("mrc_ess_brandupload",{on:{changeimgSrc:e.changeimgSrc},model:{value:e.userdetail.light_mode_icon,callback:function(t){e.$set(e.userdetail,"light_mode_icon",t)},expression:"userdetail.light_mode_icon"}})],1),n("v-col",{attrs:{cols:"6"}},[n("mrc_ess_brandupload",{on:{changeimgSrc:e.changeimgSrc2},model:{value:e.userdetail.dark_mode_icon,callback:function(t){e.$set(e.userdetail,"dark_mode_icon",t)},expression:"userdetail.dark_mode_icon"}})],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("mrc_ess_multiText",{attrs:{label:e.$t("label_note"),isNational:e.judegNational("client_remark"),"error-messages":e.$errors("userdetail","client_remark",e.maxLength(200)),readonly:e.readonly},model:{value:e.userdetail.client_remark,callback:function(t){e.$set(e.userdetail,"client_remark",t)},expression:"userdetail.client_remark"}})],1)],1),n("h2",[e._v(e._s(e.$t("label_address")))]),n("v-card",{staticClass:"address"},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("mrc_ess_multiText",{attrs:{label:e.$t("label_The_street_address"),isNational:e.judegNational("client_address_line_one"),readonly:e.readonly},model:{value:e.userdetail.client_address_line_one,callback:function(t){e.$set(e.userdetail,"client_address_line_one",t)},expression:"userdetail.client_address_line_one"}}),n("mrc_ess_multiText",{attrs:{isNational:e.judegNational("client_address_line_two"),readonly:e.readonly},model:{value:e.userdetail.client_address_line_two,callback:function(t){e.$set(e.userdetail,"client_address_line_two",t)},expression:"userdetail.client_address_line_two"}}),n("mrc_ess_multiText",{attrs:{isNational:e.judegNational("client_address_line_three"),readonly:e.readonly},model:{value:e.userdetail.client_address_line_three,callback:function(t){e.$set(e.userdetail,"client_address_line_three",t)},expression:"userdetail.client_address_line_three"}})],1)],1),n("v-row",[n("v-col",{attrs:{cols:"4"}},[n("mrc_ess_prompt",{attrs:{label:e.$t("label_city")+"*",rules:!1,obj:e.cityName,disabled:e.readonly},model:{value:e.userdetail.client_address_city_id,callback:function(t){e.$set(e.userdetail,"client_address_city_id",t)},expression:"userdetail.client_address_city_id"}})],1),n("v-col",{attrs:{cols:"4"}},[n("mrc_ess_prompt",{attrs:{label:e.$t("label_provinces")+"*",rules:!1,obj:e.provinceName,disabled:e.readonly},model:{value:e.userdetail.client_address_province_id,callback:function(t){e.$set(e.userdetail,"client_address_province_id",t)},expression:"userdetail.client_address_province_id"}})],1),n("v-col",{attrs:{cols:"4"}},[n("mrc_ess_prompt",{attrs:{label:e.$t("label_countries")+"*",rules:!1,obj:"mrbase_common_geo_country",errMsg:e.$errors("userdetail","client_address_country_id",e.requiredRule),disabled:e.readonly},model:{value:e.userdetail.client_address_country_id,callback:function(t){e.$set(e.userdetail,"client_address_country_id",t)},expression:"userdetail.client_address_country_id"}})],1)],1),n("v-row",[n("v-col",{attrs:{cols:"6"}},[n("mrc_ess_multiText",{attrs:{label:e.$t("label_Zip_code"),isNational:e.judegNational("client_address_zip_code"),readonly:e.readonly},model:{value:e.userdetail.client_address_zip_code,callback:function(t){e.$set(e.userdetail,"client_address_zip_code",t)},expression:"userdetail.client_address_zip_code"}})],1)],1)],1),n("v-row",[n("v-divider",{staticClass:"mt-9 mb-6 ml-3 mr-3"})],1),n("h2",[e._v("联系人")]),n("v-card",{staticClass:"linkman",staticStyle:{border:"1px solid #e0e0e0","box-shadow":"none"}},[n("v-data-table",{staticClass:"elevation-1",attrs:{"hide-default-footer":"",headers:e.headers,items:e.desserts,"items-per-page":5,"sort-by":"calories"},scopedSlots:e._u([{key:"item.client_contact_status",fn:function(t){var i=t.item;return[1==i.client_contact_status?n("v-chip",{staticStyle:{color:"#ffffff"},attrs:{color:"#18a874"}},[e._v(e._s(e.$t("label_normal")))]):n("v-chip",[e._v(e._s(e.$t("label_time_out")))])]}},{key:"item.actions",fn:function(t){var i=t.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(i)}}},[e._v(" mdi-pencil ")]),e.readonly?e._e():n("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(i)}}},[e._v(" mdi-delete ")])]}},e.readonly?null:{key:"footer",fn:function(){return[n("v-divider"),n("span",{staticClass:"mt-2 pb-2 d-flex ml-5",on:{click:e.editItem}},[n("span",{style:{color:e.$vuetify.theme.defaults.light.primary,lineHeight:"28px",fontSize:"14px"}},[e._v(e._s(e.$t("label_Add_contacts")))]),n("v-icon",{staticClass:"material-icons ml-3",style:{color:e.$vuetify.theme.defaults.light.primary,fontSize:"21px"}},[e._v("add")])],1)]},proxy:!0}],null,!0)})],1),n("mrc_ess_myDialog",{attrs:{title:e.$t("label_The_contact"),width:"700"},on:{success:e.save,cancel:e.close},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card-text",[n("v-row",{attrs:{dense:""}},[n("v-col",{attrs:{cols:"12"}},[n("mrc_ess_switch",{attrs:{"true-value":"1","false-value":"0",readonly:e.readonly,"true-text":e.$t("label_normal"),"false-text":e.$t("label_time_out")},model:{value:e.editedItem.client_contact_status,callback:function(t){e.$set(e.editedItem,"client_contact_status",t)},expression:"editedItem.client_contact_status"}})],1),n("v-col",{attrs:{cols:"6"}},[n("mrc_ess_multiText",{attrs:{label:e.$t("label_familyName")+"*",isNational:e.judegNational("contact_last_name"),"error-messages":e.$errors("editedItem","contact_last_name",e.requiredRule),readonly:e.readonly},model:{value:e.editedItem.contact_last_name,callback:function(t){e.$set(e.editedItem,"contact_last_name",t)},expression:"editedItem.contact_last_name"}})],1),n("v-col",{attrs:{cols:"6"}},[n("mrc_ess_multiText",{attrs:{label:e.$t("label_GivenName")+"*",isNational:e.judegNational("contact_first_name"),"error-messages":e.$errors("editedItem","contact_first_name",e.requiredRule),readonly:e.readonly},model:{value:e.editedItem.contact_first_name,callback:function(t){e.$set(e.editedItem,"contact_first_name",t)},expression:"editedItem.contact_first_name"}})],1),n("v-col",{attrs:{cols:"6"}},[n("mrc_ess_multiText",{attrs:{label:e.$t("label_ChristianName")+"*",isNational:e.judegNational("contact_middle_name"),"error-messages":e.$errors("editedItem","contact_middle_name",e.requiredRule),readonly:e.readonly},model:{value:e.editedItem.contact_middle_name,callback:function(t){e.$set(e.editedItem,"contact_middle_name",t)},expression:"editedItem.contact_middle_name"}})],1),n("v-col",{attrs:{cols:"12"}},[n("mrc_ess_multiText",{attrs:{label:e.$t("label_DisplayName")+"*",isNational:e.judegNational("contact_preferred_name"),"error-messages":e.$errors("editedItem","contact_preferred_name",e.requiredRule),readonly:e.readonly},model:{value:e.editedItem.contact_preferred_name,callback:function(t){e.$set(e.editedItem,"contact_preferred_name",t)},expression:"editedItem.contact_preferred_name"}})],1),n("v-col",{attrs:{cols:"12"}},[n("mrc_ess_multiText",{attrs:{label:e.$t("label_position_office")+"*",isNational:e.judegNational("contact_job_position"),"error-messages":e.$errors("editedItem","contact_job_position",e.requiredRule),readonly:e.readonly},model:{value:e.editedItem.contact_job_position,callback:function(t){e.$set(e.editedItem,"contact_job_position",t)},expression:"editedItem.contact_job_position"}})],1),n("v-col",{attrs:{cols:"12"}},[n("mrc_ess_phoneInput",{attrs:{readonly:e.readonly,code:e.editedItem.client_contact_phone_area_code,changeCode:e.editedItem.client_contact_phone_area_code},on:{"update:changeCode":function(t){return e.$set(e.editedItem,"client_contact_phone_area_code",t)},"update:change-code":function(t){return e.$set(e.editedItem,"client_contact_phone_area_code",t)}},model:{value:e.editedItem.client_contact_phone_number,callback:function(t){e.$set(e.editedItem,"client_contact_phone_number",t)},expression:"editedItem.client_contact_phone_number"}})],1),n("v-col",{attrs:{cols:"12"}},[n("mrc_ess_phoneInput",{attrs:{readonly:e.readonly,code:e.editedItem.client_contact_company_area_code,changeCode:e.editedItem.client_contact_company_area_code},on:{"update:changeCode":function(t){return e.$set(e.editedItem,"client_contact_company_area_code",t)},"update:change-code":function(t){return e.$set(e.editedItem,"client_contact_company_area_code",t)}},model:{value:e.editedItem.client_contact_company_phone,callback:function(t){e.$set(e.editedItem,"client_contact_company_phone",t)},expression:"editedItem.client_contact_company_phone"}})],1),n("v-row",{attrs:{dense:""}},[n("v-col",{attrs:{cols:"12"}},[n("mrc_ess_multiText",{attrs:{label:e.$t("label_email")+"*",isNational:e.judegNational("client_contact_email"),"error-messages":e.$errors("editedItem","client_contact_email",e.requiredRule.concat(e.emailRule)),readonly:e.readonly},model:{value:e.editedItem.client_contact_email,callback:function(t){e.$set(e.editedItem,"client_contact_email",t)},expression:"editedItem.client_contact_email"}})],1)],1)],1)],1)],1)],1)},a=[],c=(n("c975"),n("d81d"),n("a434"),n("5530")),l=(n("96cf"),n("1da1")),s=(n("bc3a"),n("b7e6"),n("b5ae")),r={props:{list:{type:Object,default:function(){return{}}},readonly:{type:Boolean,default:!1}},components:{},data:function(){return{csfile:null,isShow:!0,dark_mode_icon_file:"",light_mode_icon_file:"",dialog:!1,detailData:{},switch1:1,desserts:[],deletedesserts:[],userdetail:{client_name:"",client_short_code:"",client_tel_area_code:"",client_tel:"",client_browser:"",client_remark:"",client_address_line_one:"",client_address_line_two:"",client_address_line_three:"",client_address_city_id:"",client_address_province_id:"",client_address_country_id:"",client_address_zip_code:"",client_industry:"2",light_mode_icon:{},dark_mode_icon:{},mrbase_sys_function_permission:"",mrbase_sys_client_contacts:"",mrbase_sys_client_whitelist_email:"",mrbase_sys_client_language:""},editedItem:{client_contact_phone_number:"",contact_middle_name:"",client_contact_email:"",contact_job_position:"",client_contact_phone_area_code:"",contact_preferred_name:"","~table~":"mrbase_sys_client_contacts",client_contact_company_phone:"",client_contact_company_area_code:"",contact_last_name:"",contact_first_name:"",client_contact_status:"1"},editedIndex:-1,defaultItem:{client_contact_phone_number:"",contact_middle_name:"",client_contact_email:"",contact_job_position:"",client_contact_phone_area_code:"",contact_preferred_name:"",client_contact_company_phone:"",client_contact_company_area_code:"",contact_last_name:"",contact_first_name:"",client_contact_status:"1"}}},mounted:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.national("mrbase_sys_client");case 2:(this.$route.params.uuid||this.$store.state.detailuuid)&&(this.userdetail=this.list,this.desserts=this.list.mrbase_sys_client_contacts?this.list.mrbase_sys_client_contacts:[]);case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),watch:{list:{handler:function(e){this.userdetail=e,this.desserts=e.mrbase_sys_client_contacts?e.mrbase_sys_client_contacts:[]},deep:!0},dialog:function(e){e||this.close()}},methods:{changeimgSrc2:function(e){this.csfile=e,this.dark_mode_icon_file=e},changeimgSrc:function(e){this.csfile=e,this.light_mode_icon_file=e},moyi:function(){this.$uploadFiles(this.csfile,this.options)},getclientcontactss:function(e){this.desserts.length>0?(this.desserts=[],this.desserts.push(e)):this.desserts.push(e)},editItem:function(e){(e.uuid||e.client_uuid||e.client_contact_status)&&(this.editedIndex=this.desserts.indexOf(e),this.editedItem=Object.assign({},e)),this.dialog=!0},deleteItem:function(e){var t=this,n=this.desserts.indexOf(e);this.$myConfirm({content:this.$t("message_Confirm_the_deletion")}).then((function(){var e=t.desserts.splice(n,1);(e[0].uuid||e[0].client_uuid)&&t.deletedesserts.push(e[0])}))},close:function(){var e=this;this.$v.editedItem.$reset(),this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){this.$v.editedItem.$touch(),this.$v.editedItem.$error||(this.editedIndex>-1?Object.assign(this.desserts[this.editedIndex],this.editedItem):this.desserts.push(this.editedItem),this.close())},formverify:function(){return this.$v.userdetail.$touch(),!this.$v.userdetail.$error}},computed:{deletedessertslist:function(){return this.deletedesserts.length>0?this.deletedesserts.map((function(e){return Object(c["a"])(Object(c["a"])({},e),{},{"~type~":"del"})})):[]},formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"},provinceName:function(){return{prompt_name:"mrbase_common_geo_province",country:this.userdetail.client_address_country_id}},cityName:function(){return{prompt_name:"mrbase_common_geo_city",province:String(this.userdetail.client_address_province_id)}},options:function(){var e={};return e.function_uuid=this.$store.state.menuFunctionUuid,e.attachment_data_table="mrbase_sys_clients",e.attachment_data_field="light_mode_icon",e.org_level_uuid=this.$store.state.currentCompany,e.uuid=this.$store.state.detailuuid,e},headers:function(){return[{text:this.$t("label_Add_contacts"),align:"center",sortable:!1,value:"contact_first_name"},{text:this.$t("label_The_phone"),value:"client_contact_phone_number",sortable:!1,align:"center"},{text:this.$t("label_email"),value:"client_contact_email",sortable:!1,align:"center"},{text:this.$t("label_state"),value:"client_contact_status",sortable:!1,align:"center"},{text:"Actions",value:"actions",sortable:!1}]}},validations:{userdetail:{client_name:{required:s["required"],maxLength:Object(s["maxLength"])(20)},client_short_code:{maxLength:Object(s["maxLength"])(20)},client_tel_area_code:{},client_tel:{},client_browser:{url:s["url"]},client_remark:{maxLength:Object(s["maxLength"])(200)},client_address_line_one:{},client_address_line_two:{},client_address_line_three:{},client_address_city_id:{},client_address_province_id:{},client_address_country_id:{required:s["required"]},client_address_zip_code:{},client_industry:{},light_mode_icon:{},dark_mode_icon:{}},editedItem:{contact_last_name:{required:s["required"]},contact_first_name:{required:s["required"]},contact_middle_name:{required:s["required"]},contact_preferred_name:{required:s["required"]},contact_job_position:{required:s["required"]},client_contact_phone_area_code:{},client_contact_phone_number:{},client_contact_company_area_code:{},client_contact_company_phone:{},client_contact_email:{required:s["required"],email:s["email"]}}}},o=r,d=(n("26d1"),n("2877")),_=Object(d["a"])(o,i,a,!1,null,"70200280",null);t["default"]=_.exports},b7e6:function(e,t,n){"use strict";n.r(t),n.d(t,"getclientlist",(function(){return c})),n.d(t,"getclientdetail",(function(){return l})),n.d(t,"edmitclientdetail",(function(){return s})),n.d(t,"adduserclientdetail",(function(){return r})),n.d(t,"copyuserclientdetail",(function(){return o})),n.d(t,"copyadduserclientdetail",(function(){return d})),n.d(t,"updateclientdetail",(function(){return _})),n.d(t,"updatequanxian",(function(){return u})),n.d(t,"updatewhite",(function(){return m})),n.d(t,"updatelanguage",(function(){return h})),n.d(t,"getTreeList",(function(){return f}));n("d3b7");var i=n("efc9"),a="mrbase_sys_clients",c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]=a,new Promise((function(t,n){i["default"].post("/api/client/list-client/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]=a,new Promise((function(t,n){i["default"].post("/api/client/find-client/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]=a,new Promise((function(t,n){i["default"].post("/api/client/delete-client/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))},r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]=a,new Promise((function(t,n){i["default"].post("/api/client/add-client/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]=a,new Promise((function(t,n){i["default"].post("/api/client/copy-client-info/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]=a,new Promise((function(t,n){i["default"].post("/api/client/copy-add-client/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]=a,new Promise((function(t,n){i["default"].post("/api/client/update-client/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]=a,new Promise((function(t,n){i["default"].post("/api/client/update-client-function-permission/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]=a,new Promise((function(t,n){i["default"].post("/api/client/update-client-whitelist-email/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]=a,new Promise((function(t,n){i["default"].post("/api/client/update-client-language/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]=a,new Promise((function(t,n){i["default"].post("/api/client/function-permission-info/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))}}}]);
//# sourceMappingURL=chunk-13bfe0e0.58fed92b.js.map