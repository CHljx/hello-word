define(["jquery"],function($,echarts){
    var app={
        data:{
            param:{},
            loadNum:0
        },
        handlerView:null,
        addEmitMonitor:function(view){
            var _self= this;
            view.$context=_self;
            view.emit=function(type,param){
                _self[type]&&_self[type](param);
                _self.handlerView[type]&&_self.handlerView[type](param);
            }
            _self.data.loadNum++;
            return _self;
        },
        refreshPage:function(param){
            var _self = this;
            for(var key in param){
                _self.data.param[key]=param[key];
            }
            _self.handlerView&&_self.handlerView["refresh"]&&_self.handlerView["refresh"](_self.data.param)
        },
        loadEnd:function(param){
            var _self=this;
            _self.data.loadNum--;
            for(var key in param){
                _self.data.param[key]=param[key];
            }
            if(_self.data.loadNum==0){
                _self.refreshPage()
            }
        },
        init:function(fn){
            var _self=this,appView=$(".page-content").data("view");
            require(["view/"+appView],function(view){
               _self.handlerView=view;
                fn();
            });
        }
    };
    return app;
});