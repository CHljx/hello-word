/**
 * Created by Administrator on 2016/8/15.
 */
define(["jquery","mobiscroll"],function($){
    var $page=$(".page");
    var app={
        type:"plat",
        id:"",
        date:"",
        dateType:"day",
        init:function(){
            this.view=$(".page-header");
            this.nav=$(".nav-list");
            this.$spanReqType=$(".span-req-type");
            this.date=this.getDateDow();
            this.bindEvent();
            this.ajax();
            this.ajaxItem();
            return this;
        },
        bindEvent:function(){
            var _self=this;
            var $inputDate=$(".input-date");
            var dMinDate = new Date();
            var sMinDate = $(".page").data("mindate");
            if(sMinDate!=""){
                if(_self.dateType=="month"){
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
            _self.nav.on("click tap","li",function(){
                var $this=$(this);
                _self.ajaxClickSta("item_"+_self.type+"_"+_self.id);
                if($this.hasClass("active")){
                    return;
                }
                $this.addClass("active").siblings().removeClass("active");
                _self.id=$this.attr("data-id");
                _self.view.trigger("itemChange");
            });
            $(".req-date").mobiscroll().date({
                theme: 'android-ics light', //皮肤样式
                display: 'modal', //显示方式
                mode: 'scroller', //日期选择模式
                dateFormat:(_self.dateType=="day"?"yy/mm/dd":"yy/mm"),
                lang:'zh',
                minDate:dMinDate,
                maxDate:new Date(),
                onBeforeShow: function (inst) {
                    if(_self.dateType=="day"){
                    }else if(_self.dateType=="month"){
                        inst.settings.wheels[0].length>2?inst.settings.wheels[0].pop():null;
                    }
                },
                onSelect:function(sDate){
                    if(sDate!= _self.date){
                        _self.date=sDate;
                        $inputDate.html(_self.date);
                        _self.view.trigger("dateChange");
                    }
                },
                onShow:function(){
                    _self.ajaxClickSta("date");
                }
            });
            $inputDate.html(_self.date);
            $(".page").on("click tap",function(){
                $(".menu-item-sub").hide();
            }).on("click tap",".switch",function(e){
                e.preventDefault();
                $(".menu-item-sub").toggle();
                return false;
            }).on("click tap",".menu-item-sub a",function(){
                window.location.href=$(this).attr("href");
            });

            var scrollTimer=null;
            var aWrapTable=$(".wrap-table");
            $(window).scroll(function(){
                var iScrollTop=$(window).scrollTop();
                $.each(aWrapTable,function(){
                    var $this=$(this);
                    var iOffsetTop=$this.offset().top;
                    if(iOffsetTop<iScrollTop){
                        $this.find("thead td").css("transform","translateY("+(iScrollTop-iOffsetTop+3)+"px)");
                    }else{
                        $this.find("thead td").css("transform","translateY(0px)");
                    }
                });

            });
        },
        ajax:function(){
            var _self=this;
            $.ajax({
                url:$page.data("mainbar"),
                data:{
                  type:_self.type
                },
                dataType:$page.data("reqtype"),
                type:"GET",
                success:function(oData){
                    var sTemplate="<li class='item' data-id='{{id}}'><a>{{name}}</a></li>";
                    var sHtml="";
                    var iIndex=0;
                    for(var iKey in oData){
                        iIndex++;
                        sHtml+=sTemplate.replace(/{{([^{}]*)}}/g,function(){
                            return oData[iKey][arguments[1]];
                        });
                    }
                    var $this=_self.nav.hide().html(sHtml).find(".item").css("min-width",iIndex<=4?(100/iIndex+"%"):"1.86rem").first();
                    $this.addClass("active").siblings().removeClass("active");
                    _self.id=$this.attr("data-id");
                    _self.view.trigger("itemChange");
                    _self.nav.show();
                }
            });
        },
        on:function(sType,fCallback){
            this.view.on(sType,fCallback);
            return this;
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
            if(_self.dateType=="day"){
                return iYear+"/"+fixTwo(iMonth)+"/"+fixTwo(iDay);
            }else if(_self.dateType=="month"){
                return iYear+"/"+fixTwo(iMonth);
            }
        },
        getParamObj:function(){
            var _self=this;
            return {
                type:_self.type,
                date:_self.date,
                id:_self.id
            };
        },
        setReqTypeHanlder:function(fn){
            var _self=this;
            if(fn){
                $(".req-type").on("click",function(){
                    fn.call(_self,_self);
                });
            }
        },
        ajaxClickSta:function(sType){
            var _self=this;
            if($page.data("clickSta")&&$page.data("clickSta")!=""){
                $.ajax({
                    url:$page.data("clickSta"),
                    data:{
                        type:sType
                    },
                    dataType:$page.data("reqtype"),
                    type:"GET"
                });
            }
        },
        ajaxItem:function(){
            var _self=this;
            $.ajax({
                url:$page.data("menuitem"),
                dataType:$page.data("reqtype"),
                type:"GET",
                success:function(oData){
                    var sTemplate="<li class='item' data-id='{{id}}'><a href='{{url}}'>{{name}}</a></li>";
                    var sHtml="";
                    var iIndex=0;
                    for(var iKey in oData){
                        iIndex++;
                        sHtml+=sTemplate.replace(/{{([^{}]*)}}/g,function(){
                            return oData[iKey][arguments[1]];
                        });
                    }
                    $(".menu-item-sub").html(sHtml).css("margin-top",-$(".menu-item-sub").height());
                }
            });
        }
    };
    return app;
});