
var __cov_CmMtHX0F1MlfyMdM0OO__A = (Function('return this'))();
if (!__cov_CmMtHX0F1MlfyMdM0OO__A.__coverage__) { __cov_CmMtHX0F1MlfyMdM0OO__A.__coverage__ = {}; }
__cov_CmMtHX0F1MlfyMdM0OO__A = __cov_CmMtHX0F1MlfyMdM0OO__A.__coverage__;
if (!(__cov_CmMtHX0F1MlfyMdM0OO__A['src/marionette.object.js'])) {
   __cov_CmMtHX0F1MlfyMdM0OO__A['src/marionette.object.js'] = {"path":"src/marionette.object.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},"b":{},"f":{"1":0,"2":0,"3":0},"fnMap":{"1":{"name":"(anonymous_1)","line":6,"loc":{"start":{"line":6,"column":20},"end":{"line":6,"column":38}}},"2":{"name":"(anonymous_2)","line":20,"loc":{"start":{"line":20,"column":14},"end":{"line":20,"column":25}}},"3":{"name":"(anonymous_3)","line":22,"loc":{"start":{"line":22,"column":11},"end":{"line":22,"column":22}}}},"statementMap":{"1":{"start":{"line":6,"column":0},"end":{"line":10,"column":2}},"2":{"start":{"line":7,"column":2},"end":{"line":7,"column":66}},"3":{"start":{"line":9,"column":2},"end":{"line":9,"column":41}},"4":{"start":{"line":12,"column":0},"end":{"line":12,"column":45}},"5":{"start":{"line":17,"column":0},"end":{"line":40,"column":3}},"6":{"start":{"line":23,"column":4},"end":{"line":23,"column":41}},"7":{"start":{"line":24,"column":4},"end":{"line":24,"column":34}},"8":{"start":{"line":25,"column":4},"end":{"line":25,"column":25}},"9":{"start":{"line":43,"column":0},"end":{"line":43,"column":55}}},"branchMap":{}};
}
__cov_CmMtHX0F1MlfyMdM0OO__A = __cov_CmMtHX0F1MlfyMdM0OO__A['src/marionette.object.js'];
__cov_CmMtHX0F1MlfyMdM0OO__A.s['1']++;Marionette.Object=function(options){__cov_CmMtHX0F1MlfyMdM0OO__A.f['1']++;__cov_CmMtHX0F1MlfyMdM0OO__A.s['2']++;this.options=_.extend({},_.result(this,'options'),options);__cov_CmMtHX0F1MlfyMdM0OO__A.s['3']++;this.initialize.apply(this,arguments);};__cov_CmMtHX0F1MlfyMdM0OO__A.s['4']++;Marionette.Object.extend=Marionette.extend;__cov_CmMtHX0F1MlfyMdM0OO__A.s['5']++;_.extend(Marionette.Object.prototype,{initialize:function(){__cov_CmMtHX0F1MlfyMdM0OO__A.f['2']++;},destroy:function(){__cov_CmMtHX0F1MlfyMdM0OO__A.f['3']++;__cov_CmMtHX0F1MlfyMdM0OO__A.s['6']++;this.triggerMethod('before:destroy');__cov_CmMtHX0F1MlfyMdM0OO__A.s['7']++;this.triggerMethod('destroy');__cov_CmMtHX0F1MlfyMdM0OO__A.s['8']++;this.stopListening();},triggerMethod:Marionette.triggerMethod,getOption:Marionette.proxyGetOption,bindEntityEvents:Marionette.proxyBindEntityEvents,unbindEntityEvents:Marionette.proxyUnbindEntityEvents});__cov_CmMtHX0F1MlfyMdM0OO__A.s['9']++;_.extend(Marionette.Object.prototype,Backbone.Events);
