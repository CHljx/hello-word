define(["@lib/moment.min","@lib/compiler"],function(moment, compiler){
    window.moment=moment;
    var app={
        $view:$(".h5-quota"),
        $android:$(".js-android"),
        $ios:$(".js-ios"),
        $today:$(".js-today"),
        url:"",
        param:{},
        data:{
            startDate:"",
            endDate:"",
            date:"",
            game_id:"",
            type:1
        },
        init:function(){
            var _self = this;
            _self.url=_self.$view.data("url");
            _self.data.type=_self.$view.find(".toolbar .item.active").data("type")||1;
            _self.bindEvent();
        },
        bindEvent:function(){
            var _self = this;
            _self.$view.find(".toolbar").on("click",".item",function(){
               var $this=$(this);
               $this.addClass("active").siblings().removeClass("active");
               _self.data.type=$this.data("type");
               _self.refreshDate(_self.data.date);
               _self.refresh();
            });
        },
        refresh:function(param){
            var _self = this;
            param=param||{};
            for(var key in param){
                _self.param[key]=param[key]
            }
            _self.param["start_date"]=_self.data.startDate;
            _self.param["end_date"]=_self.data.endDate;
            _self.startLoad();
            _self.ajax=$.ajax({
                url:_self.url,
                data: _self.param,
                dataType:"jsonp",
                success:function(oRep){
                   _self.endLoad(oRep);
                }
            })
        },
        startLoad:function(){
            var _self = this;
            _self.$android.addClass("load");
            _self.$ios.addClass("load");
            _self.$ios.html("");
            _self.$android.html("")
            if(_self.ajax){
                _self.ajax.abort();
            }
        },
        endLoad:function(oRep){
            var _self = this;
            _self.$ios.removeClass("load");
            _self.$android.removeClass("load");
            _self.renderQuato(oRep.android,_self.$android);
            _self.renderQuato(oRep.ios,_self.$ios);
        },
        renderQuato:function(data,$boxBody){
            var _self=this,sHtml="";
            for(var index=0,len=data.length;index<len;index+=3){
                sHtml+='<div class="col flex-row flex-1">'+ compiler.compile(
                    '<div class="item-box"> <div class="item-box-body"><span>{{name}}</span><span>{{value}}</span></div> </div>',
                    data.slice(index,index+3)
                )+'</div>';
            };
            $boxBody.html(sHtml)
        },
        refreshDate:function(date){
            var _self=this;
            var dDate=moment(date,"YYYY/MM/DD");
            _self.data.endDate=date;
            _self.data.date=date;
            _self.$today.html(date==moment().format("YYYY/MM/DD")?"今天":date)
            switch (_self.data.type){
                case 1:
                    _self.data.startDate=date;
                    break;
                case 2:
                    _self.data.startDate=_self.data.endDate=dDate.add(-1,"days").format("YYYY/MM/DD");
                    break;
                case 3:
                    _self.data.startDate=dDate.add(-2,"days").format("YYYY/MM/DD");
                    break;
                case 4:
                    _self.data.startDate=dDate.add(-6,"days").format("YYYY/MM/DD");
                    break;
            }
        }
    };
    app.init()
    return app;
})