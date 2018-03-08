define([],function(){
    var app={
        regex:/(\{\{([^{}]*)\}\})/g,
        compile(template,data){
            var _self=this,resultStr="";
            if(Object.prototype.toString.call(data)=="[object Array]"){
                for(var index=0,len=data.length;index<len;index++){
                    resultStr+=_self.compileData(template,data[index])
                }
            }else if(Object.prototype.toString.call("data")=="[object Object]"){
                resultStr+=_self.compileData(template,data)
            }
            return resultStr;
        },
        compileData(template,data){
            var _self = this;
            return template.replace(_self.regex,function(){
                var key=arguments[2];
                return data[key];
            })
        }
    }

    return app;
})