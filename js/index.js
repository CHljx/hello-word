/**
 * Created by Administrator on 2016/8/15.
 */
require.config({
   // urlArgs:+new Date(),
    paths:{
        "mobiscroll":"./plugin/mobiscroll.2.13.2.min",
        "compiler":"./lib/compiler",
        "jquery":"./lib/jquery-1.9.1.min",
        "view":"./view",
        "@lib":"./lib"
    },
    shim:{
        "mobiscroll":["jquery"]
    }
});
require(["view/headerView","view/footerView","view/contentView"],function(headerView,footerView,contentView){
    contentView.addEmitMonitor(headerView).addEmitMonitor(footerView);
    contentView.init(function(){
        headerView.init();
        footerView.init();
    });

});