window._LOCAL_PARAM="mobile.sqw.report";
require.config({
   paths:{
       url:"./sqw/report/url"
   }
});
define(["report/index","./report/detail"],function(baseApp,sqwDetailApp){
    return {
        mixins:[baseApp,sqwDetailApp],
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