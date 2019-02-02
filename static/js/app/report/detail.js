define(["url"],function(urlConfig){
   return {
       data:{
            table:{
                detail:{
                    header:[],
                    rows:[],
                }
            },
            loadStatus:{
                detail:false
            }
       },
       methods:{
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

                   _self.loadStatus.detail=false;
                   _self.flag.isQuery=true;
                   _self.table.detail=data.detail;
                   !_self.table.detail.header&&(_self.table.detail.header=[]);
                   !_self.table.detail.rows&&(_self.table.detail.rows=[]);
                   _self.table.detail.header.forEach(function(item){
                       item.sort=true;
                   });
                   _self.resetTableHeight();
               },function(){

                   _self.loadStatus.detail=false;
               })
           }
       },
       created:function(){
           var _self=this;
           _self.$on("query",function(){
               if(_self.validateSearch&&!_self.validateSearch()){
                   return;
               }
               _self.doQueryDetail();
           })
       }
   }
});