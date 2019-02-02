define(["url"],function(urlConfig){
    return {
        data:{
            target:{
                realTab:"popup",
                realFrame:"popup"
            },
            chart:{
                popup:{},
                active:{},
                reg:{}
            },
            table:{
                popup:{
                    header:[],
                    rows:[],
                },
                active:{
                    headers:[],
                    rows:[]
                },
                reg:{
                    headers:[],
                    rows:[]
                }
            },
            list:{
                realTabs:[{name:"弹窗数",value:"popup"},{name:"激活数",value:"active"},{name:"注册数",value:"reg"},{name:"实时趋势图",value:"real"}]
            }
        },
        computed:{
            realChart:function(){
                var _self=this,chart=_self.chart[_self.target.realFrame];
                return {
                    grid:{
                        right:"5%",
                        top:"5%",
                        left:"15%"
                    },
                    legend:{
                        data:(chart.series||[]).filter(function(item){
                            return item.legend?true:false;
                        }).map(function(item){
                            if(item&&item.legend){
                                return item.legend
                            }
                        })
                    },
                    xAxis:{
                        data:chart.xAxis
                    },
                    series:(chart.series||[]).filter(function(item){
                        return item.legend?true:false;
                    }).map(function(item){
                        if(item.data&&Object.prototype.toString.call(item.data)=="[object String]"){
                            item.data=item.data.split(",")
                        }
                        return {
                            data:item.data||[],
                            name:item.legend,
                            type:"line"
                        }
                    })
                }
            }
        },
        methods:{
            rateClass:function(rate){
                if(parseFloat(rate,10)>0){
                    return {
                        "clr-red":true
                    }
                }else if(parseFloat(rate,10)<0){
                    return {
                        "clr-green":true
                    }
                }
            },
            ratePost:function(rate){
                return (rate===undefined?"--":rate)+"%"
            },
            doQueryRealTime:function(){
                var _self=this;
                _self.doAjax({
                    url:urlConfig.realTime,
                    param:_self.searchParam
                }).then(function(data){

                    var tdWidth=_self.$refs["bodyContent"].offsetWidth/4;
                    _self.flag.isQuery=true;
                    _self.table.popup=data.popup;
                    _self.table.active=data.active;
                    _self.table.reg=data.reg;
                    _self.table.popup.header.forEach(function(item,index){
                        item.width=tdWidth;
                    })
                    _self.table.active.header.forEach(function(item,index){
                        item.width=tdWidth;
                    })
                    _self.table.reg.header.forEach(function(item,index){
                        item.width=tdWidth;
                    });
                    _self.resetTableHeight();
                });
            },
            doQueryRealTimeChart:function(){
                var _self=this,aLastParam=_self.aLastParam||{},hasChange=false;
                for(var key in _self.searchParam){
                    if(key!="start_date"&&key!="end_date"&&aLastParam[key]!=_self.searchParam[key]){
                        hasChange=true;
                        break;
                    }
                }
                if(!hasChange){
                    return;
                }
                _self.aLastParam=JSON.parse(JSON.stringify(_self.searchParam));
                delete _self.aLastParam.start_date;
                delete _self.aLastParam.end_date;
                _self.doAjax({
                    url:urlConfig.realTimeChart,
                    param:_self.aLastParam,
                    hideLoadMask:true
                }).then(function(data){
                    _self.chart=data.chart;
                    _self.$nextTick(function(){
                        _self.resetTableHeight();
                    })
                });
            }
        },
        created:function(){
            var _self=this,isFirst=true;
            _self.$on("query",function(){
                if(_self.validateSearch&&!_self.validateSearch()){
                    return;
                }
                _self.doQueryRealTime();
                _self.doQueryRealTimeChart();
            });
        },
        watch:{
            "target.realTab":function(){
                var _self=this;
                _self.resize();
            }
        }
    }
});