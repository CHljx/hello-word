define(["report/realtime","report/detail","url"],function(realTimeApp,detailApp,urlConfig){
    const _LOCAL_PARAM=window._LOCAL_PARAM;
    function toString(target){
        return Object.prototype.toString.call(target)
    }
    function formatDate(date,fmt){
        var o = {
            "M+": date.getMonth() + 1,
            "d+": date.getDate()
        };
        if(/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for(var k in o)
            if(new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }

    return {
        mixins:[realTimeApp,detailApp],
        data:{
            option:{
                date:{
                    minDate:new Date(new Date().getTime()-15*24*60*60*1000)
                }
            },
            table:{
                height:"",
                headerToolbarHeight:""
            },
            list:{
                headers:["实时数据","明细数据"],
                footers:[
                    {
                        text:"当天",
                        fn:function(){
                            this.changeStatus("date",true)
                        }
                    },
                    {
                        text:"渠道",
                        fn:function(){
                            this.changeStatus("channel",true)
                        }
                    },
                    {
                        text:"游戏",
                        fn:function(){
                            this.changeStatus("game",true)
                        }
                    },
                    {
                        text:"子站",
                        fn:function(){
                            this.changeStatus("site",true)
                        }
                    },
                    {
                        text:"设置",
                        fn:function(){
                            this.changeStatus("setting",true)
                        }
                    }
                ],
                locals:JSON.parse(localStorage.getItem(_LOCAL_PARAM)||"[]"),
                uids:[],
                tabs:[
                    {name:"弹窗数",value:"popup"},
                    {name:"激活数",value:"active"},
                    {name:"注册数",value:"reg"},
                    {name:"趋势图",value:"real"},
                    {name:"投放明细",value:"detail"}
                ],
                columns:[
                ]
            },
            target:{
                headerIndex:0
            },
            flag:{
                isQuery:false,
                showAside:false,
            },
            param:{
                modal:{
                    date:[],
                    game:[],
                    channel:[],
                    site:"",
                    currentTab:"",
                    columns:{}
                },
                search:{
                    date:[],
                    game:[],
                    channel:[],
                    site:"",
                },
                local:{
                    name:""
                },
                setting:{
                    currentTab:"",
                    columns:{}
                }
            },
            status:{
                date:false,
                calendar:false,
                game:false,
                channel:false,
                site:false,
                setting:false
            }
        },
        methods:{
            toggleCheck:function(item,key){
                item[key]=!item[key];
            },
            toggleCheckColumns:function(items,flag){
                var _self=this;
                items.forEach(function(item){
                    _self.param.modal.columns[item.key]=flag
                })
            },
            formatDate:function(date,fr){
                return formatDate(date,fr)
            },
            sliceArray:function(array,start,end){
                if(array.length===0){
                    return [];
                }

                if(end){
                    return array.slice(start,end);
                }
                if(array.length==1){
                    return [];
                }
                return array.slice(start||0);
            },
            actQuery:function(){
                this.$emit("query");
            },
            saveLocal:function(){
                var _self=this,aList=_self.list.locals;
                if(!_self.param.local.name.replace(/(^\s+|\s$)/g,"")){
                    _self.totast("配置名不能为空");
                    return;
                }
                aList.unshift({
                    name:_self.param.local.name,
                    setting:JSON.parse(JSON.stringify(_self.param.search))
                });
                _self.list.locals.splice(5);
                _self.param.local.name="";
                localStorage.setItem(_LOCAL_PARAM,JSON.stringify(aList));
                _self.doSetConditionConf(JSON.stringify(aList));
            },
            removeLocal:function(index){
                var _self=this;
                _self.list.locals.splice(index,1);
                localStorage.setItem(_LOCAL_PARAM,JSON.stringify(_self.list.locals));
                _self.doSetConditionConf(JSON.stringify(_self.list.locals))
            },
            changeStatus:function(type,status){
                var _self=this;
                for(var key in _self.status){
                    _self.status[key]=false;
                }
                type&&(_self.status[type]=status||false);
            },
            resetParam:function(item){
                var _self=this;
                _self.param.search.site=item.site;
                _self.param.search.game=item.game;
                _self.param.search.channel=item.channel;
            },
            cloneParam:function(target,source,key){
                var _self=this;
                if(toString(_self.param[source][key])==="[object Object]"){
                    _self.param[target][key]=JSON.parse(JSON.stringify(_self.param[source][key]));
                    return;
                }
                _self.param[target][key]=_self.param[source][key];
            },
            chooseDate:function(offset,endOffset){
                var _self=this,dEnd=new Date();
                _self.setDate(
                    [
                        formatDate(new Date(dEnd.getTime()+offset*24*60*60*1000),"yyyy-MM-dd"),
                        formatDate(new Date(dEnd.getTime()+(endOffset||0)*24*60*60*1000),"yyyy-MM-dd")
                    ],
                    {
                        "-1":"昨天",
                        "0":"当天",
                        "-2":"最近3天",
                        "-7":"最近8天"
                    }[offset]
                );
            },
            setDate:function(dates,text){
                var _self=this,start=dates[0],end=dates[1]
                _self.changeStatus();
                _self.param.search.date.splice(0,1,start);
                _self.param.search.date.splice(1,1,end);
                _self.list.footers[0].text=text||("<span style='font-size:.2rem'>"+start+"</span><span style='font-size:.2rem'>"+end+"</span>");
            },
            validateDate:function(dates){
                var _self=this;
                if(dates[1].date.getTime()-dates[0].date.getTime()>14*24*60*60*1000){
                    _self.totast("时间跨度不能超过15天");
                    return false;
                }
                return true;
            },
            resetTableHeight:function(){
                var _self=this;
                _self.$nextTick(function(){
                    _self.table.height=_self.$refs["content"].offsetHeight;
                    _self.resize();
                })
            },
            resize:function(){
                var _self=this;
                _self.$nextTick(function(){
                    _self.broadcast("ts-table","calculate");
                    _self.broadcast("chart","resize")
                })
            },
            /**
             * 设置默认首页
             */
            doGetCurrentTab:function(){
                var _self=this;
                _self.$store.dispatch("doGet",{
                    url:urlConfig&&urlConfig.defaultPage.get
                }).then(function(oRep){
                    if(oRep.code==1){
                        var currentPage=oRep.data.default_page;
                        if(currentPage=="detail"){
                            _self.target.headerIndex=1;
                        }else{
                            _self.target.realTab=currentPage;
                            _self.target.headerIndex=0;
                        }
                        _self.param.setting.currentTab=oRep.data.default_page;
                    }
                });
            },
            /**
             * 获取默认首页
             */
            doSetSetting:function(){
                var _self=this;
                _self.cloneParam('setting','modal','currentTab');
                _self.$store.dispatch("doGet",{
                    url:urlConfig&&urlConfig.defaultPage.set,
                    param:{
                        value:_self.param.setting.currentTab
                    }
                }).then(function(){
                    _self.totast("设置默认首页成功");
                });
                if(_self.target.headerIndex==1){
                    var dims=[];
                    _self.cloneParam('setting','modal','columns');
                    for(var key in _self.param.setting.columns){
                        _self.param.setting.columns[key]&&dims.push(key)
                    }
                    _self.$store.dispatch("doGet",{
                        url:urlConfig&&urlConfig.userDefine.set,
                        param:{
                            udf:dims.join(",")
                        }
                    }).then(function(){
                        _self.totast("设置明细数据列成功");
                    });
                }
            },
            /**
             * 获取配置子站
             */
            doQueryUid:function(){
                var _self=this;
                _self.$store.dispatch("doGet",{
                    url:urlConfig&&urlConfig.uids
                }).then(function(oRep){
                    if(oRep.code==1){
                        _self.list.uids=(oRep.data||[]).filter(function(item){
                            return (item+"").replace(/(^\s+|\s$)/g,"")!="";
                        });
                    }
                });
            },
            /**
             *
             * @param opt
             * @returns {Promise}
             */
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
                })
            },
            /**
             *
             * @param opt
             * @returns {Promise}
             */
            doGetConditionConf:function(){
                var _self=this;
                if(urlConfig&&urlConfig.conditonConfig&&urlConfig.conditonConfig.get){

                    _self.doAjax({
                        url:urlConfig&&urlConfig.conditonConfig.get
                    }).then(function(data){
                        _self.list.locals=JSON.parse(data||"[]")
                    })
                }
            },
            doSetConditionConf:function(config){
                var _self=this;
                if(urlConfig&&urlConfig.conditonConfig&&urlConfig.conditonConfig.set){
                    _self.doAjax({
                        url:urlConfig&&urlConfig.conditonConfig.set,
                        param:{
                            config:config
                        },
                        method:"doPost"
                    })
                }
            },
            doAjax:function(opt){
                var _self=this;
                return new Promise(function(resolve,reject){
                    _self.$store.dispatch(opt.method||"doPost",{
                        url:opt.url,
                        param:opt.param,
                        hideLoadMask:opt.hideLoadMask,
                        name:opt.name||""
                    }).then(function(oRep){
                        if(oRep.code==1){
                            resolve(oRep.data);
                        }else{
                            _self.totast(oRep.msg);
                            reject(oRep)
                        }
                    },function(){
                        reject({
                            msg:opt.url+"请求失败"
                        })
                    })
                })

            },
        },
        mounted:function(){
            var _self=this;
            _self.table.headerToolbarHeight=document.querySelector(".header-toolbar").offsetHeight;
            _self.table.height=_self.$refs["content"].offsetHeight;
            window.addEventListener('orientationchange',function(){
                setTimeout(function(){
                    adapt(750, 100);
                    _self.resetTableHeight();
                },500)
            },false);

        },
        computed:{
            detailRows:function(){
                var _self=this;
                return _self.sliceArray(_self.table.detail.rows,1);
            },
            detailHeaderRows:function(){
                var _self=this;
                return _self.sliceArray(_self.table.detail.rows,0,1);
            },
            popupRows:function(){
                var _self=this;
                return _self.sliceArray(_self.table.popup.rows,0,_self.table.popup.rows.length-1);
            },
            popupHeaderRows:function(){
                var _self=this;
                return _self.sliceArray(_self.table.popup.rows,_self.table.popup.rows.length-1);
            },
            activeRows:function(){
                var _self=this;
                return _self.sliceArray(_self.table.active.rows,0,_self.table.active.rows.length-1);
            },
            activeHeaderRows:function(){
                var _self=this;
                return _self.sliceArray(_self.table.active.rows,_self.table.active.rows.length-1);
            },
            regRows:function(){
                var _self=this;
                return _self.sliceArray(_self.table.reg.rows,0,_self.table.reg.rows.length-3);
            },
            regHeaderRows:function(){
                var _self=this;
                return _self.sliceArray(_self.table.reg.rows,_self.table.reg.rows.length-3);
            },
            channels:function(){
                var _self=this;
                return _self.param.search.channel.length==0?[{text:'所有',value:""}]:_self.param.search.channel;
            },
            subChannels:function(){
                var _self=this,aSubs=[];
                _self.param.search.channel.forEach(function(channel){
                    channel.children.forEach(function(subChannel){
                        aSubs.push(subChannel);
                    })
                })
                return aSubs.length==0?[{text:'所有',value:""}]:aSubs;
            },
            games:function(){
                var _self=this;
                return _self.param.search.game.length==0?[{text:'所有',value:""}]:_self.param.search.game;
            },
            subGames:function(){
                var _self=this,aSubs=[];
                _self.param.search.game.forEach(function(game){
                    game.children.forEach(function(sub){
                        aSubs.push(sub);
                    })
                })
                return aSubs.length==0?[{text:'所有',value:""}]:aSubs;
            },
            appClass:function(){
                var _self=this;
                if(_self.target.headerIndex==0){
                    return "has-header-toolbar";
                }else{
                    return "";
                }
            },
            searchParam:function(){
                var _self=this;
                return {
                    referer_param:_self.param.search.site,
                    start_date:_self.param.search.date[0],
                    end_date:_self.param.search.date[1],
                    classify:_self.channels.map(function(item){
                        return item.value=="-1"?"":item.value
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
        },
        watch:{
            "target.headerIndex":function(){
                var _self=this;
                _self.resetTableHeight();
            }
        }
    }
});