/**
 * Created by Administrator on 2016/9/2.
 */
define(function(){
    return {
        urlConfig:{
            dayData:{
                mainBar:"http://hy.tj.37wan.com/api/mob_ajax.php?block=main-bar",
                dailyRate:"http://hy.tj.37wan.com/api/mob_ajax.php?block=daily-rate",
                weekData:"http://hy.tj.37wan.com/api/mob_ajax.php?block=weekdata",
                dayData:"http://hy.tj.37wan.com/api/mob_ajax.php?block=daydata",
                clickSta:"",
                menuItem:"http://hy.tj.37wan.com/api/mob_menu.php",
                dataType:"JSONP"
            },
            monthData:{

            },
            groupRevenue:{
                mainBar:"./data/mob_bar.js",
                clickSta:"",
                menuItem:"./data/mob_item.js",
                dataType:"JSON"
            }
        }
    }
})