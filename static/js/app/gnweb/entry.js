window._LOCAL_PARAM="mobile.gnweb.report";
require.config({
   paths:{
       url:"./gnweb/report/url"
   }
});
define(["report/index","./report/index"],function(baseApp,reportApp){
    return {
        mixins:[baseApp,reportApp],
        created:function(){
            var _self=this;
            _self.param.search.date.push(_self.formatDate(new Date(),'yyyy-MM-dd'));
            _self.param.search.date.push(_self.formatDate(new Date(),'yyyy-MM-dd'));
            _self.doQueryUid();
            _self.doGetColumns();
            _self.doGetConditionConf();
        }
    }
});