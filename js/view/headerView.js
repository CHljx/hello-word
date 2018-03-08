define(["jquery","@lib/compiler"],function($,TemplateCompiler){
    var app={
        $page:$("#page"),
        $container:$(".page-header .nav-list"),
        template:'<li class="item" data-id="{{id}}">{{name}}</li>',
        data:{
            id:null,
            paramKey:$(".page-header .nav-list").data("key")||"game"
        },
        init:function(){
            var _self = this;
            _self.doReq();
            _self.bindEvent();
        },
        bindEvent:function(){
            var _self = this;
            _self.$container.on("click",".item",function(){
                var $this=$(this);
                $this.addClass("active").siblings().removeClass("active");
                _self.data.id=$this.data("id");
                _self.emit("refreshGame",_self.data.id)
                _self.emit("refreshPage",_self.getParam());
            });
        },
        doReq:function(){
            var _self =  this;
            $.ajax({
                url:_self.$page.data("mainbar"),
                dataType:"jsonp",
                type:"get",
                success:function(oRep){
                    _self.$container.html(TemplateCompiler.compile(_self.template,oRep));
                    _self.$container.find(".item:first").addClass("active");
                    _self.data.id=_self.$container.find(".item:first").data('id');
                    _self.emit("refreshGame",_self.data.id)
                    _self.emit("loadEnd",_self.getParam())
                }
            });
        },
        getParam:function(){
            var _self=this,param={};
            param[_self.data.paramKey]=_self.data.id;
            return param
        }
    }
    return app;
})