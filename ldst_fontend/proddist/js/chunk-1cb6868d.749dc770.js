(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1cb6868d","chunk-2d0d6eb6"],{7535:function(t,e,n){"use strict";n.r(e),n.d(e,"get_postgrades",(function(){return o})),n.d(e,"get_postgradesdetail",(function(){return i})),n.d(e,"get_postgrades_groupdetail",(function(){return r})),n.d(e,"add_postgrades",(function(){return u})),n.d(e,"add_postgrades_group",(function(){return c})),n.d(e,"update_postgrades",(function(){return l})),n.d(e,"update_postgrades_group",(function(){return d})),n.d(e,"delete_postgrades",(function(){return p})),n.d(e,"delete_postgrades_group",(function(){return g}));n("d3b7");var s=n("efc9"),a="mrbase_sys_job_post_grades",o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=a,new Promise((function(e,n){s["default"].post("/api/post/grade/list-post-grades/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=a,new Promise((function(e,n){s["default"].post("/api/post/grade/find-post-grades/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=a,new Promise((function(e,n){s["default"].post("/api/post/grade/find-post-grades-group/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=a,new Promise((function(e,n){s["default"].post("/api/post/grade/add-post-grades/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=a,new Promise((function(e,n){s["default"].post("/api/post/grade/add-post-grades-group/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=a,new Promise((function(e,n){s["default"].post("/api/post/grade/update-post-grades/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=a,new Promise((function(e,n){s["default"].post("/api/post/grade/update-post-grades-group/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=a,new Promise((function(e,n){s["default"].post("/api/post/grade/delete-post-grades/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=a,new Promise((function(e,n){s["default"].post("/api/post/grade/delete-post-grades-group/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))}},bc00:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",["Post_level_management"==t.$route.name?n("mrc_ess_table",{attrs:{addBtnList:t.listmenu,headers:t.headers,paginationOptions:t.options,isLoading:t.loading,slotKey:["hierarchyName","org_level_name"],items:t.desserts},on:{turnPage:t.getlist},scopedSlots:t._u([{key:"top",fn:function(){return[t._v(" 搜索框 ")]},proxy:!0},{key:"item.hierarchyName",fn:function(e){var s=e.item;return[n("span",{staticClass:"f1"},[t._v(t._s(s.group_name))]),n("br"),n("span",{staticClass:"f2"},[t._v(t._s(s.job_grade_name))])]}},{key:"item.org_level_name",fn:function(e){var s=e.item;return[n("span",{staticClass:"chipbox"},t._l(s.org_level_name,(function(e,s){return n("v-chip",{key:s,staticClass:"ml-2"},[t._v(" "+t._s(e)+" ")])})),1)]}},{key:"item.actions",fn:function(e){var s=e.item;return[n("menu-list",{attrs:{list:t.menulist},on:{handleClick:function(e){return t.handleClick(e,s)}},scopedSlots:t._u([{key:"showAction",fn:function(){return[n("v-icon",[t._v("mdi-dots-vertical")])]},proxy:!0}],null,!0)})]}}],null,!1,326463202)}):[n("router-view")]],2)},a=[],o=(n("c975"),n("d81d"),n("b0c0"),n("ac1f"),n("1276"),n("96cf"),n("1da1")),i=n("7535"),r={components:{},props:{},data:function(){return{loading:!1,options:{pagesize:5,cpage:this.$store.state.cpage,totalCount:null,totalpage:null},desserts:[]}},created:function(){},mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getlist();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),beforeDestroy:function(){this.$store.commit("setCpage",1)},methods:{turnPage:function(t){var e=t.cpage,n=t.pagesize;this.options.cpage=e,this.options.pagesize=n,this.getlist()},getlist:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,e&&(e.cpage,e.pagesize,this.options=e),n=this.$store.state.currentCompany,t.next=5,Object(i["get_postgrades"])({cpage:this.options.cpage,pagesize:this.options.pagesize,org_level_uuid:n});case 5:s=t.sent,200==s.code?(this.options.totalCount=s.totalCount,this.options.totalpage=s.totalpage,this.desserts=s.data.map((function(t){return t.org_level_name=-1!=t.org_level_name.indexOf(",")?t.org_level_name.split(","):[t.org_level_name],t}))):this.$store.commit("newsTips",s.msg),this.loading=!1;case 8:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),godetail:function(t){console.log(111);var e=t.group_name;this.$store.commit("set_uuid",t.uuid),this.$store.commit("set_iconstatus",!0),this.$store.commit("set_subPage_name",e||t.job_grade_name),this.$router.push({name:"detailPost",params:{uuid:t.uuid,iconstatus:!0,groupName:e}})},editPrompt:function(t){var e=t.group_name;this.$store.commit("set_uuid",t.uuid),this.$store.commit("set_iconstatus",!1),this.$store.commit("set_subPage_name",e||t.job_grade_name),this.$router.push({name:"detailPost",params:{uuid:t.uuid,iconstatus:!1,groupName:e}})},handleDel:function(t){var e=this;this.$myConfirm({content:"确认删除该岗位等级？"}).then((function(){t.group_name?Object(i["delete_postgrades_group"])({group_name:t.group_name}).then((function(t){200==t.code&&(e.$store.commit("newsTips",e.$t("message_The_deletion_was_successful")),1==e.desserts.length&&1!=e.options.cpage&&e.options.cpage--,e.getlist())})):Object(i["delete_postgrades"])({uuid:t.uuid}).then((function(t){200==t.code&&(e.$store.commit("newsTips",e.$t("message_The_deletion_was_successful")),1==e.desserts.length&&1!=e.options.cpage&&e.options.cpage--,e.getlist())}))}))["catch"]((function(){}))},handleClick:function(t,e){var n=t.index;switch(n){case 0:this.godetail(e);break;case 1:this.editPrompt(e);break;case 2:this.handleDel(e);break}}},computed:{listmenu:function(){return[{page_name:"addOne",name:this.$t("label_Add_a_single_level")},{page_name:"addGroup",name:this.$t("label_A_set_of_new")}]},menulist:function(){return[{name:this.$t("label_View")},{name:this.$t("label_Edit")},{name:this.$t("label_delete")}]},headers:function(){return[{text:this.$t("label_The_name_of_the_hierarchy"),align:"start",sortable:!1,value:"hierarchyName"},{text:this.$t("label_The_hierarchy"),align:"start",sortable:!1,value:"job_grade_class"},{text:this.$t("label_Use_the_unit"),align:"start",sortable:!1,value:"org_level_name"},{text:this.$t("label_Number_of_posts_in_use"),align:"start",sortable:!1,value:"staff_number"},{text:"",value:"actions",sortable:!1,align:"start"}]}},watch:{$route:function(t){"Post_level_management"==this.$route.name&&this.getlist()}}},u=r,c=(n("e721"),n("2877")),l=Object(c["a"])(u,s,a,!1,null,"3eace380",null);e["default"]=l.exports},e721:function(t,e,n){"use strict";var s=n("e92e"),a=n.n(s);a.a},e92e:function(t,e,n){}}]);
//# sourceMappingURL=chunk-1cb6868d.749dc770.js.map