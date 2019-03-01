define(["url"],function(urlConfig){
    return {
        data:{
            loadStatus:{
                popup:false,
                reg:false,
                view:false,
                real:false
            },
            target:{
                realTab:"real",
                channles:{
                    0:[],
                    1:[],
                    2:[],
                    3:[]
                },
                dashboard:0
            },
            table:{
                view:{
                    headers:[],
                    rows:[]
                }
            },
            list:{
                classfiyChannels:[],
                classfiy:[
                    {
                        name:"所有",value:""
                    },
                    {
                        name:"创速",value:"1"
                    },
                    {
                        name:"直投",value:"2"
                    },
                    {
                        name:"搜索",value:"3"
                    }
                ],
                sumTabs:[],
                dashboards:[],
                sumTables:[],
                realTabs:[{name:"汇总",value:"real"},{name:"弹窗数",value:"popup"},{name:"注册数",value:"reg"},{name:"展示数",value:"view"}]
            },
            param:{
                search:{
                    union_category:""
                },
                modal:{
                    union_category:"",
                    sums:{}
                },
                setting:{
                    sums:{}
                }
            }
        },
        methods:{
            refreshClassfiyChannels:function(){
                var _self=this,channles=JSON.parse(JSON.stringify(_self.target.channles[_self.param.modal.union_category||0]));
                _self.list.classfiyChannels.splice(0);
                Array.prototype.push.apply(_self.list.classfiyChannels,channles.map(function(item){
                    item._checked=false;
                    (item.children||[]).forEach(function(child){
                        child._checked=false;
                    });
                    return item;
                }));
                _self.param.modal.union_category&&_self.list.classfiyChannels.unshift({
                    text:"所有",
                    value:_self.target.channles[_self.param.modal.union_category||0].map(function(item){
                        return item.value;
                    }).join(","),
                    all:true,
                    hideChild:true,
                    _checked:false
                })
            },
            resetParam:function(item){
                var _self=this;
                _self.param.search.site=item.site;
                _self.param.search.game=item.game;
                _self.param.search.channel=item.channel;
                _self.param.search.union_category=item.union_category;
            },
            validateSearch:function(){
                var _self=this;
                if(!_self.param.modal.union_category&&!_self.searchParam.classify){
                    _self.totast("请选择渠道");
                    return false;
                }
                return true;
            },
            doQueryChannels:function(){
                var _self=this;
                if((_self.target.channles[_self.param.modal.union_category||0]||[]).length){
                    _self.refreshClassfiyChannels();
                    return;
                }
                _self.doAjax({
                    url:"/index.php?c=gnweb&a=classify_list",
                    param:{
                        union_category:_self.param.modal.union_category
                    }
                }).then(function(data){
                    _self.target.channles[_self.param.modal.union_category||0]=data;
                    _self.refreshClassfiyChannels();
                })
            },
            doGetColumns:function(){
                var _self=this;
                _self.doAjax({
                    url:urlConfig&&urlConfig.userDefine.get
                }).then(function(data){
                    _self.list.columns=data.all_rows||[];
                    _self.list.columns.forEach(function(item){
                        _self.$set(_self.param.setting.columns,item.key,0)
                    });
                    (data.setting||[]).forEach(function(item){
                        _self.$set(_self.param.setting.columns,item.key,1)
                    });
                    _self.list.sumTabs=data.all_reals_rows||[];
                    _self.list.sumTabs.forEach(function(item){
                        _self.$set(_self.param.setting.sums,item.key,0)
                    });

                    (data.reals_setting||[]).forEach(function(item){
                        _self.$set(_self.param.setting.sums,item.key,1)
                    });
                })
            },
            doSetColumns:function(){
                var _self=this,dims=[];
                _self.cloneParam('setting','modal','sums');
                _self.cloneParam('setting','modal','columns');
                for(var key in _self.param.setting.columns){
                    _self.param.setting.columns[key]&&dims.push(key)
                }
                for(var key in _self.param.setting.sums){
                    _self.param.setting.sums[key]&&dims.push(key)
                }
                _self.doAjax({
                    url:urlConfig&&urlConfig.userDefine.set,
                    param:{
                        udf:dims.join(",")
                    }
                }).then(function(){
                    _self.totast("保存成功");
                },function(oRep){
                    _self.changeStatus("setting",true);
                });
            },
            doQueryRealTime:function(){
                var _self=this;

                _self.flag.isQuery=true;
                Promise.all([
                    _self.doQueryRealTimeByType("view"),
                    _self.doQueryRealTimeByType("popup"),
                    _self.doQueryRealTimeByType("reg")
                ]).then(function(){
                    _self.resetTableHeight();
                })
            },
            doQueryRealTimeByType(type){
                var _self=this,param=JSON.parse(JSON.stringify(_self.searchParam));
                param["type"]=type;
                return new Promise(function(resolve){
                    _self.loadStatus[type]=true;
                    _self.$store.commit("removeXhrAbort",type);
                    _self.doAjax({
                        url:urlConfig.realTime||"/index.php?c=xzl&a=realtime",
                        param:param,
                        hideLoadMask:true,
                        name:type
                    }).then(function(data){
                        _self.loadStatus[type]=false;
                        var tdWidth=_self.$refs["bodyContent"].offsetWidth/4;
                        _self.table[type]=data[type];
                        _self.table[type].header=
                            _self.table[type].header||[];
                        _self.table[type].rows=
                            _self.table[type].rows||[];
                        _self.table[type].header.forEach(function(item,index){
                            item.width=tdWidth;
                        });
                        resolve();
                    },function(oRep){
                        _self.loadStatus[type]=false;
                        resolve();
                    });
                })
            },
            doQueryRealTimeChart:function(){
                var _self=this;
                _self.loadStatus.real=true;
                _self.list.sumTables.splice(0);
                _self.$store.commit("removeXhrAbort","real");
                _self.doAjax({
                    url:urlConfig.realTimeChart,
                    param:_self.searchParam,
                    hideLoadMask:true,
                    name:"real"
                }).then(function(data){
                    _self.loadStatus.real=false;
                    _self.list.dashboards=data.dashboard;
                    _self.list.sumTables.push({
                        headers:data.by_game_table.rows[0].map(function(header){
                            return {
                                label:header,
                                hide:!header
                            }
                        }),
                        name:data.by_game_table.table_name,
                        rows:data.by_game_table.rows.slice(1)
                    });
                    _self.list.sumTables.push({
                        headers:data.third_table.rows[0].map(function(header){
                            return {
                                label:header,
                                hide:!header
                            }
                        }),
                        name:data.third_table.table_name,
                        rows:data.third_table.rows.slice(1)
                    });
                },function(){
                    _self.loadStatus.real=false;
                });
            }
        },
        watch:{
            "param.modal.union_category":{
                immediate:true,
                handler:function(){
                    var _self=this;
                    _self.doQueryChannels();
                }
            }
        },
        computed:{
            dashboardChart:function(){
                var _self=this,chart=_self.list.dashboards[_self.target.dashboard]||{};
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
            },
            regRows:function(){
                var _self=this;
                return _self.sliceArray(_self.table.reg.rows,0,_self.table.reg.rows.length-1);
            },
            regHeaderRows:function(){
                var _self=this;
                return _self.sliceArray(_self.table.reg.rows,_self.table.reg.rows.length-1);
            },
            viewRows:function(){
                var _self=this;
                return _self.sliceArray(_self.table.view.rows,0,_self.table.view.rows.length-1);
            },
            viewHeaderRows:function(){
                var _self=this;
                return _self.sliceArray(_self.table.view.rows,_self.table.view.rows.length-1);
            },
            classfiyCH:function(){
                var _self=this;
                switch (_self.param.search.union_category){
                    case "":
                        return "所有";
                        break;
                    case "1":
                        return "创速";
                        break;
                    case "2":
                        return "直投";
                        break;
                    case "3":
                        return "搜索";
                        break;
                    default:
                        return "所有";
                        break;
                }
            },
            searchParam:function(){
                var _self=this;
                return {
                    referer_param:_self.param.search.site,
                    start_date:_self.param.search.date[0],
                    end_date:_self.param.search.date[1],
                    classify:_self.channels.map(function(item){
                        return _self.param.modal.union_category&&item.value==""?(_self.target.channles[_self.param.modal.union_category||0].map(function(item){
                            return item.value;
                        }).join(",")):item.value
                    }).join(","),
                    union_mapping_id:_self.subChannels.map(function(item){
                        return item.value=="-1"?"":item.value
                    }).join(","),
                    game_id:_self.games.map(function(item){
                        return item.value=="-1"?"":item.value
                    }).join(","),
                    c_game_id:_self.subGames.map(function(item){
                        return item.value=="-1"?"":item.value
                    }).join(",")
                }
            }
        }
    }
});