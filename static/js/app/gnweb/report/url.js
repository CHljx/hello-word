define(function(){
    return {
        realTime:"/index.php?c=gnweb&a=realtime",
        realTimeChart:"/index.php?c=gnweb&a=realtime_chart",
        detail:"/index.php?c=gnweb&a=detail",
        defaultPage:{
            set:"/index.php?c=gnweb&a=set_gnweb_default_page",
            get:"/index.php?c=gnweb&a=get_gnweb_default_page"
        },
        userDefine:{
            set:"/index.php?c=gnweb&a=set_user_define",
            get:"/index.php?c=gnweb&a=get_user_define"
        },
        uids:"/index.php?c=gnweb&a=user_define_uids"
    }
});