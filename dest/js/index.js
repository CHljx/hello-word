/**
 * Created by Administrator on 2016/8/15.
 */
require.config({
   // urlArgs:+new Date(),
    paths:{
        "mobiscroll":"./plugin/mobiscroll.2.13.2.min",
        "jquery":"./lib/jquery-1.9.1.min",
        "echart":"./lib/echarts-all-3.min",
        "view":"./view"
    },
    shim:{
        "mobiscroll":["jquery"]
    }
});
require(["view/toolbarView","view/contentView"],function(ToolBarView,ContentView){
    var eDocEle=window.document.documentElement;

    var sDateType=$(".page").attr("data-date-type");

    ToolBarView.dateType=sDateType;
    ToolBarView.type=$(".page").attr("data-type");

    window.reqTypeHanlder&&(ToolBarView.setReqTypeHanlder(function(toolBarView){

        window.reqTypeHanlder(toolBarView);

    }));


    function docScale(){
        var deviceWidth =eDocEle.clientWidth;
        document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px';
        ContentView.refresh(ToolBarView.getParamObj());
        ToolBarView.ajaxItem();
    }
    $(window).on("resize", docScale).on("orientationchange",docScale);

    ToolBarView.init()
        .on("itemChange",function(){
            ContentView.refresh(ToolBarView.getParamObj());
         })
        .on("dateChange",function(){
            ContentView.refresh(ToolBarView.getParamObj());
        });
});