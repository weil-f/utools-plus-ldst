(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2d16"],{2673:function(n,t,e){"use strict";e.r(t),e.d(t,"admin_account_list",(function(){return i})),e.d(t,"admin_account_add",(function(){return o})),e.d(t,"admin_account_update",(function(){return c})),e.d(t,"admin_account_reset",(function(){return r})),e.d(t,"admin_account_disable",(function(){return f})),e.d(t,"admin_account_info",(function(){return s})),e.d(t,"admin_account_del",(function(){return d})),e.d(t,"func_list",(function(){return l})),e.d(t,"takeout_customer",(function(){return m}));e("d3b7");var u=e("efc9"),a="mrbase_sys_users",i=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n["~table~"]=a,new Promise((function(t,e){u["default"].post("/api/management/list-user/v1",n).then((function(n){t(n)}))["catch"]((function(n){e(n)}))}))},o=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n["~table~"]=a,new Promise((function(t,e){u["default"].post("/api/management/add-user/v1",n).then((function(n){t(n)}))["catch"]((function(n){e(n)}))}))},c=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n["~table~"]=a,new Promise((function(t,e){u["default"].post("/api/management/update-user/v1",n).then((function(n){t(n)}))["catch"]((function(n){e(n)}))}))},r=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n["~table~"]=a,new Promise((function(t,e){u["default"].post("/api/management/update-reset-password/v1",n).then((function(n){t(n)}))["catch"]((function(n){e(n)}))}))},f=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n["~table~"]=a,new Promise((function(t,e){u["default"].post("/api/management/update-disable-account/v1",n).then((function(n){t(n)}))["catch"]((function(n){e(n)}))}))},s=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n["~table~"]=a,new Promise((function(t,e){u["default"].post("/api/management/find-user/v1",n).then((function(n){t(n)}))["catch"]((function(n){e(n)}))}))},d=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n["~table~"]=a,new Promise((function(t,e){u["default"].post("/api/management/delete-user/v1",n).then((function(n){t(n)}))["catch"]((function(n){e(n)}))}))},l=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n["~table~"]="mrbase_sys_role",new Promise((function(t,e){u["default"].post("/api/role/list-function_role-clients/v1",n).then((function(n){t(n)}))["catch"]((function(n){e(n)}))}))},m=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n["~table~"]="mrbase_sys_staffs",new Promise((function(t,e){u["default"].post("/api/management/find-staff-user/v1",n).then((function(n){t(n)}))["catch"]((function(n){e(n)}))}))}}}]);
//# sourceMappingURL=chunk-2d0b2d16.49c822d8.js.map