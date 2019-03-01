window._LOCAL_PARAM="mobile.63.report";
require.config({
   paths:{
       url:"./xzl1/report/url"
   }
});
define(["report/index","./report/detail"],function(baseApp,xzlDetailApp){
    return {
        mixins:[baseApp,xzlDetailApp],
        created:function(){
            var _self=this;
            _self.param.search.date.push(_self.formatDate(new Date(),'yyyy-MM-dd'));
            _self.param.search.date.push(_self.formatDate(new Date(),'yyyy-MM-dd'));
            _self.doGetCurrentTab();
            _self.doQueryUid();
            _self.doGetColumns();
            _self.doGetConditionConf();
        }
    }
});