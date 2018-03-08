define(["mobiscroll"],function(){
    var app={
        $page:$("#page"),
        $container:$(".page-footer"),
        data:{
            dateType:"day",
            date:null,
            minDate:null,
            paramKey:$(".page-footer").data("key")||"date"
        },
        init:function(){
            var _self = this;
            _self.data.dateType=_self.$page.data("dateType")||"day";
            _self.data.date=_self.getDateDow();
            _self.setMiniDate();
            _self.renderDatePlugin();
        },
        getDateDow:function(){
            var _self=this;
            var dNow=new Date();
            var iYear=dNow.getFullYear();
            var iMonth=dNow.getMonth()+1;
            var iDay=dNow.getDate();

            function fixTwo(iNum){
                return iNum>9?iNum:("0"+iNum);
            }
            if(_self.data.dateType=="day"){
                return iYear+"/"+fixTwo(iMonth)+"/"+fixTwo(iDay);
            }else if(_self.data.dateType=="month"){
                return iYear+"/"+fixTwo(iMonth);
            }
        },
        setMiniDate:function(){
            var _self = this;
            var dMinDate = new Date();
            var sMinDate = _self.$page.data("mindate");
            if(sMinDate!=""){
                if(_self.data.dateType=="month"){
                    dMinDate.setFullYear(parseInt(sMinDate.split("-")[0],10));
                    dMinDate.setMonth(parseInt(sMinDate.split("-")[1],10)-1);
                }else{
                    dMinDate.setFullYear(parseInt(sMinDate.split("-")[0],10));
                    dMinDate.setMonth(parseInt(sMinDate.split("-")[1],10)-1);
                    dMinDate.setDate(parseInt(sMinDate.split("-")[2],10));
                }
            }else{
                dMinDate.setTime(0);
            }
            _self.data.minDate=dMinDate;
        },
        renderDatePlugin:function(){
            var _self = this, param={};;
            _self.$container.mobiscroll().date({
                theme: 'android-ics light', //皮肤样式
                display: 'modal', //显示方式
                mode: 'scroller', //日期选择模式
                dateFormat:(_self.data.dateType=="day"?"yy/mm/dd":"yy/mm"),
                lang:'zh',
                minDate:_self.data.minDate,
                maxDate:new Date(),
                onBeforeShow: function (inst) {
                    if(_self.data.dateType=="month"){
                        inst.settings.wheels[0].length>2?inst.settings.wheels[0].pop():null;
                    }
                },
                onSelect:function(sDate){
                    var param={};
                    if(sDate!= _self.data.date){
                        _self.data.date=sDate;
                        _self.$container.find(".input-date").html(_self.data.date);
                        param[_self.data.paramKey]=_self.data.date;
                        _self.emit("refreshDate",_self.data.date)
                        _self.emit("refreshPage",param)
                    }
                },
                onShow:function(){

                }
            });
            _self.$container.find(".input-date").html(_self.data.date);
            param[_self.data.paramKey]=_self.data.date;
            _self.emit("refreshDate",_self.data.date)
            _self.emit("loadEnd",param)

        }
    }
    return app;
})