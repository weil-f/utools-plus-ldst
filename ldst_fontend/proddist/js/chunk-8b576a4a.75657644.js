(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8b576a4a"],{"27b4":function(t,e,s){},dd2b:function(t,e,s){"use strict";var a=s("27b4"),n=s.n(a);n.a},f418:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box",staticStyle:{position:"relative"}},["allClientMsg"==t.$route.name?s("v-btn",{staticStyle:{position:"absolute",top:"-53px",right:"60px"},attrs:{rounded:"",color:"primary",dark:""},on:{click:t.goTranslate}},[t._v(t._s(t.$t("label_translation")))]):t._e(),"allClientMsg"==t.$route.name?s("mrc_ess_table",{attrs:{headers:t.headers,search:t.search,pageName:"addAllClientMsg",slotKey:["status"],paginationOptions:t.options,isLoading:t.loading,items:t.desserts},on:{turnPage:t.getlist},scopedSlots:t._u([{key:"top",fn:function(){return[s("v-card-title",{staticStyle:{height:"60px",position:"relative"}})]},proxy:!0},{key:"item.status",fn:function(e){var a=e.item;return[1===a.status?s("v-btn",{attrs:{rounded:"",color:"#13a671",dark:"","x-small":""}},[t._v(t._s(t.$t("label_To_enable_the")))]):t._e(),0===a.status?s("v-btn",{attrs:{rounded:"",color:"#999999",dark:"","x-small":""}},[t._v(t._s(t.$t("label_disable")))]):t._e()]}},{key:"item.language_master_content",fn:function(e){var s=e.item;return[t._v(" "+t._s(t.INT(s.language_master_content))+" ")]}},{key:"item.actions",fn:function(e){var a=e.item;return[s("menu-list",{attrs:{list:t.menulist},on:{handleClick:function(e){return t.handleClick(e,a)}},scopedSlots:t._u([{key:"showAction",fn:function(){return[s("v-icon",[t._v("mdi-dots-vertical")])]},proxy:!0}],null,!0)})]}}],null,!1,3918993245)}):s("router-view")],1)},n=[],i=(s("b0c0"),s("ac1f"),s("841c"),s("96cf"),s("1da1")),o=s("0480"),r={components:{},props:{},data:function(){return{loading:!1,options:{pagesize:5,cpage:this.$store.state.cpage,totalCount:null,totalpage:null},desserts:[],search:""}},created:function(){},mounted:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.$route.meta.title="国际化基础数据"+(this.$store.state.client_type?"->":"")+this.$store.state.client_type,t.next=3,this.getlist();case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),beforeDestroy:function(){this.$store.commit("setCpage",1)},methods:{searchChange:function(t){this.search=t},goTranslate:function(){this.$router.push({name:"detaillabelInttranslation"})},rowgodetail:function(t){this.$store.commit("set_iconstatus",!0),this.$store.commit("set_uuid2",""),this.$store.commit("set_uuid",t.uuid),this.$store.commit("set_subPage_name",t.language_master_key),this.$router.push({name:"detailAllClientMsg",params:{title:t.language_master_key}})},handleClick:function(t,e){var s=this,a=t.index;switch(a){case 0:this.rowgodetail(e);break;case 1:this.$store.commit("set_iconstatus",!1),this.$store.commit("set_uuid2",""),this.$store.commit("set_uuid",e.uuid),this.$store.commit("set_subPage_name",e.language_master_key),this.$router.push({name:"detailAllClientMsg",params:{title:e.language_master_key}});break;case 2:this.$myConfirm({content:"确认要删除吗？"}).then((function(t){Object(o["deletehint"])({uuid:e.uuid}).then((function(t){200==t.code&&(s.$store.commit("newsTips",s.$t("message_The_deletion_was_successful")),s.getlist())}))}))["catch"]((function(t){}));break}},goadd:function(){this.$store.commit("set_iconstatus",""),this.$store.commit("set_uuid",""),this.$store.commit("set_uuid2",""),this.$store.commit("set_subPage_name",""),this.$router.push({name:"addAllClientMsg"})},getlist:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var s,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,1==this.desserts.length&&1!=this.options.cpage&&this.options.cpage--,e&&(e.cpage,e.pagesize,this.options=e),s=this.$store.state.client_type,a=this.$store.state.version,t.next=7,Object(o["gethintList"])({client_type:s,version:a,cpage:this.options.cpage,pagesize:this.options.pagesize});case 7:n=t.sent,"200"===n.code&&(this.desserts=n.data,this.options.totalCount=n.totalCount,this.options.totalpage=n.totalpage),this.loading=!1;case 10:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},computed:{headers:function(){return[{text:"Key",align:"start",sortable:!1,value:"language_master_key"},{text:this.$t("label_The_name_of_the_module"),align:"start",sortable:!1,value:"language_master_module_uuid"},{text:this.$t("label_The_name_of_the_function"),align:"start",sortable:!1,value:"language_master_function_uuid"},{text:this.$t("label_content"),align:"start",sortable:!1,value:"language_master_content"},{text:this.$t("label_version"),align:"start",sortable:!1,value:"version"},{text:this.$t("label_type"),align:"start",sortable:!1,value:"language_data_type"},{text:this.$t("label_state"),align:"center",sortable:!1,value:"status"},{text:"",value:"actions",sortable:!1,align:"center"}]},menulist:function(){return[{name:this.$t("label_View"),show:!0},{name:this.$t("label_Edit"),show:!0},{name:this.$t("label_delete"),show:!0}]}},watch:{$route:function(t){"allClientMsg"==t.name&&this.getlist()}}},l=r,u=(s("dd2b"),s("2877")),c=Object(u["a"])(l,a,n,!1,null,"61b1734e",null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-8b576a4a.75657644.js.map