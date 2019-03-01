define(["url"],function(urlConfig){
    return {
        components:{
            "detailTable":{
                data:function(){
                    return {
                        flag:{
                            checkAll:0,
                            statusCheck:0
                        }
                    }
                },
                props:{
                    rows:Array,
                    headers:Array,
                    headerList:Array,
                    fixed:[Number,String],
                    tdClass:Function,
                    height:[Number,String],
                    status:[Number,String],
                    statusFn:Function
                },
                template:`<ts-table v-bind="$props">
                                <div slot="column" key="check">
                                    <template scope="props">
                                        <el-check v-model="flag.checkAll" v-if="props.index==0" @change="toggleCheckAll"></el-check>
                                        <el-check v-model="props.item.checked" v-if="props.index!=0" @change="checkIsAll"></el-check>
                                    </template>
                                </div>
                                <div slot="column" key="operate">
                                    <template scope="props">
                                        <el-switch v-if="props.index==0" :active-value="1" :inactive-value="0" v-model="flag.statusCheck" @change="actStatusAll(props.item)"></el-switch>
                                        <el-switch v-if="props.index!=0" :active-value="1" :inactive-value="0" v-model="props.item.status" @change="actStatus(props.item)"></el-switch>
                                    </template>
                                </div>
                                <div slot="column" key="input">
                                    <template scope="props"><span v-if="props.index==0">---</span>
                                        <div class="clr-active" v-if="props.index!=0" v-html="props.item[props.column.key]||'---'" @click="actInput(props.item,props.column.key)"></div>
                                    </template>
                                </div>
                            </ts-table>`,
                methods:{
                    checkIsStatus:function(){
                        var _self=this;
                        _self.rows.slice(1).forEach(function(item){
                            if(item.checked){
                                _self.flag.statusCheck=item.status
                            }
                        });
                    },
                    toggleCheckAll:function(){
                        var _self=this;
                        _self.rows.forEach(function(item){
                            item.checked=_self.flag.checkAll;
                        });
                        _self.checkIsStatus();
                    },
                    checkIsAll:function(){
                        var _self=this,isCheck=true;
                        _self.rows.slice(1).forEach(function(item){
                            if(!item.checked){
                                isCheck=false;
                            }
                        });
                        _self.checkIsStatus();
                        _self.flag.checkAll=isCheck;
                    },
                    actInput:function(item,key){
                        var _self=this;
                        _self.$emit("input-show",item,key)
                    },
                    actStatusAll:function(item){
                        var _self=this,checkStatus,checkRows;
                        checkRows=_self.rows.filter(function(item){
                            return item.checked?true:false;
                        });
                        checkStatus=checkRows.map(function(item){
                            return item.status
                        });
                        if(new Set(checkStatus).size>1){
                            _self.totast("批量操作状态需一致");
                            _self.flag.statusCheck=+!_self.flag.statusCheck;
                            return;
                        }
                        if(checkStatus.length==0){
                            _self.totast("请勾选行");
                            _self.flag.statusCheck=+!_self.flag.statusCheck;
                            return;
                        }
                        _self.$message.confirm(
                            "请确认是否修改计划（"+checkRows.map(function(item){
                                return item.campaign_name
                            }).join(",")+"）状态为"+(_self.flag.statusCheck?"开启":"关闭"),
                            "提示",
                            {
                                callback:function(action){
                                    if(action=="confirm"){
                                        _self.statusFn({
                                            param:{
                                                classify:checkRows.map(function(item){
                                                    return item.classify
                                                }).join(","),
                                                campaign_id:checkRows.map(function(item){
                                                    return item.campaign_id
                                                }).join(","),
                                                campaign_name:checkRows.map(function(item){
                                                    return item.campaign_name
                                                }).join(","),
                                                status:_self.flag.statusCheck
                                            },
                                            success:function(){
                                                checkRows.forEach(function(row){
                                                    row.status=_self.flag.statusCheck
                                                })
                                            },
                                            fail:function(){
                                                _self.flag.statusCheck=+!_self.flag.statusCheck;
                                            }
                                        })
                                    }else{
                                        _self.flag.statusCheck=+!_self.flag.statusCheck;
                                    }
                                    return true;
                                }
                            }
                        )
                    },
                    actStatus:function(item){
                        var _self=this;
                        _self.$message.confirm(
                            "请确认是否修改计划（"+item.campaign_name+"）状态为"+(item.status?"开启":"关闭"),
                            "提示",
                            {
                                callback:function(action){
                                    if(action=="confirm"){
                                        _self.statusFn({
                                            param:{
                                                classify:item.classify,
                                                campaign_id:item.campaign_id,
                                                campaign_name:item.campaign_name,
                                                status:item.status
                                            },
                                            success:function(){
                                                _self.checkIsStatus();
                                            },
                                            fail:function(){
                                                item.status=+!item.status;
                                            }
                                        })
                                    }else{
                                        item.status=+!item.status;
                                    }
                                    return true;
                                }
                            }
                        )
                    }
                },
                watch:{
                    "status":function(){
                        var _self=this;
                        if(_self.status==1){
                            _self.flag.statusCheck=1;
                        }else if(_self.status==-1){
                            _self.flag.statusCheck=0;
                        }
                    }
                }
            }
        },
        data:{
            status:{
                log:false
            },
            table:{
                logs:{
                    headers:[],
                    rows:[]
                }
            },
            flag:{
                checkAll:false,
                showInput:false,
                statusCheck:false,
                hasNewLog:false
            },
            param:{
                operate:{
                    input:0,
                    type:1,
                    status:0
                }
            }
        },
        computed:{
            detailHeadersFormat:function(){
                var _self=this,headers=(_self.table.detail.header||[]).slice(0);
                _self.hasOperateRows&&headers.unshift({
                    label:"",
                    key:"check"
                });
                return headers;
            },
            detailRowsFormat:function(){
                var _self=this,status=_self.param.operate.status;

                if(!_self.hasOperateRows){
                    return _self.detailRows;
                }
                return _self.detailRows.filter(function(row){
                    if(status==0){
                        return true;
                    }
                    if(status==1){
                        return row.status==1?true:false;
                    }
                    if(status==-1){
                        return row.status==1?false:true;
                    }
                })
            },
            hasOperateRows:function(){
                var _self=this;
                return !!_self.table.detail.header.filter(function(item){
                    return (item.slot=="operate"||item.slot=="input")?true:false
                }).length
            },
            btnConfirmText:function(){
                var _self=this;
                return {1:"确认出价",2:"确认预算"}[_self.param.operate.type]
            },
            dataColumnsCheckAll:function(){
                var _self=this,columns=_self.list.columns.slice(10);
                return !columns.filter(function(column){
                    return _self.param.modal.columns[column.key]?false:true;
                }).length;
            },
            dimColumnsCheckAll:function(){
                var _self=this,columns=_self.list.columns.slice(4,10);
                return !columns.filter(function(column){
                    return _self.param.modal.columns[column.key]?false:true;
                }).length;
            },
            operateColumnsCheckAll:function(){
                var _self=this,columns=_self.list.columns.slice(1,4);
                return !columns.filter(function(column){
                    return _self.param.modal.columns[column.key]?false:true;
                }).length;
            }
        },
        created:function(){
            var _self=this;
            _self.doCheckNewLog();
            setInterval(function(){
                _self.doCheckNewLog();
            },1000*60)
        },
        methods:{
            emitblur:function(){
                var _self=this;
                if(navigator.userAgent.match(/(iphone|ios|ipad)/gi)){
                    window.scroll(0,0);
                }
            },
            doQueryDetail:function(){
                var _self=this;
                _self.loadStatus.detail=true;
                _self.$store.commit("removeXhrAbort","detail");
                _self.doAjax({
                    url:urlConfig.detail||"/index.php?c=xzl&a=detail",
                    param:_self.searchParam,
                    hideLoadMask:true,
                    name:"detail"
                }).then(function(data){

                    (data.detail.rows=data.detail.rows||[]).forEach(function(item){
                        item.checked=false;
                    });
                    data.detail.header=data.detail.header||[];
                    _self.loadStatus.detail=false;
                    _self.flag.isQuery=true;
                    _self.table.detail=data.detail;
                    _self.table.detail.header.forEach(function(item){
                        item.sort=true;
                    });
                    // _self.resetTableHeight();
                    _self.flag.checkAll=false;
                },function(){

                    _self.loadStatus.detail=false;
                })
            },
            doQueryLog:function(){
                var _self=this;
                _self.doAjax({
                    url:"/index.php?c=xzl&a=get_campaign"
                }).then(function(data){
                    _self.table.logs.headers=data.logs.header;
                    _self.table.logs.rows=data.logs.rows;
                    _self.status.log=true;
                })
            },
            actOperateStatus:function(val){
                this.param.operate.status=val;
            },
            detailTdClass:function(row,key){
                return row[key+"_update"]?"warn":"";
            },
            actInput:function(item,key){
                var _self=this;
                _self.param.operate.item=item;
                _self.param.operate.key=key;
                _self.param.operate.input=item[key];
                _self.param.operate.type={"bid":1,"budget":2}[key];
                _self.flag.showInput=true;
            },
            actConfirm:function(){
                var _self=this;
                if(_self.param.operate.input!= _self.param.operate.item[_self.param.operate.key]){
                    _self.$message.confirm(
                        "请确认是否修改计划（"+_self.param.operate.item.campaign_name+"）"+{1:"出价",2:"预算"}[_self.param.operate.type]+"为"+_self.param.operate.input,
                        "提示",
                        {
                            callback:function(action){
                                if(action=="confirm"){
                                    _self.doInput();
                                }
                                return true;
                            }
                        })
                }else{
                    _self.totast("无需修改")
                }

            },
            doInput:function(){
                var _self=this,param={
                    classify_id:_self.param.search.channel.map(function(item){
                        return item.value
                    }).join(","),
                    classify:_self.param.operate.item.classify,
                    campaign_id:_self.param.operate.item.campaign_id,
                    campaign_name:_self.param.operate.item.campaign_name,
                    budget_before:_self.param.operate.item.budget,
                    bid_before:_self.param.operate.item.bid
                };
                param[{1:"bid",2:"budget"}[_self.param.operate.type]]=_self.param.operate.input;
                _self.doAjax({
                    url:"/index.php?c=xzl&a=set_campaign",
                    param:param
                }).then(function(){
                    _self.param.operate.item.bgClass="red";
                    _self.param.operate.item[_self.param.operate.key]=_self.param.operate.input;
                    _self.param.operate.item[_self.param.operate.key+"_update"]=true;
                    _self.flag.showInput=false;
                },function(){
                    _self.totast("接口(/index.php?c=xzl&a=set_campaign)请求失败");
                })
            },
            doStatus:function(opt){
                var _self=this,param=opt.param;
                param["classify_id"]=_self.param.search.channel.map(function(item){
                    return item.value
                }).join(",")
                _self.doAjax({
                    url:"/index.php?c=xzl&a=set_campaign",
                    param:param
                }).then(function(){
                    opt.success();
                },function(){
                    opt.fail()
                })
            },
            doCheckNewLog:function(){
                var _self=this;
                _self.doAjax({
                    url:"/index.php?c=xzl&a=is_error_log"
                }).then(function(data){
                    _self.flag.hasNewLog=data.flag==1?true:false;
                },function(){

                    _self.flag.hasNewLog=false;
                })
            }
        }
    }
});