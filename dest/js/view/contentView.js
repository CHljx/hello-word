
/**
 * Created by Administrator on 2016/8/15.
 */
define(["jquery","echart"],function($,echarts){

    var app={
        refresh:function(opt){

            var _self=this;
            $.each($(".wrap-chart"),function(){
                _self.refreshChart($(this),opt);
            });

            $.each($(".wrap-table"),function(){
                _self.refreshTable($(this),opt);
            });

        },
        refreshChart:function($el,opt){
            var _self=this;
            $el.reqChart&&($el.reqChart.abort());
            $el.append("<div class='mask'></div>");
            $el.reqChart= $.ajax({
                url:$el.data("url"),
                data:{
                    type:opt.type,
                    tab_id:opt.id,
                    date:opt.date
                },
                dataType:$el.data("reqtype")||$(".page").data("reqtype"),
                type:"GET",
                success:function(oData){
                    var iItem="";
                    var aChart=[];
                    for(var iIndex= 0,iLen=oData.length;iIndex<iLen;iIndex++){
                        iItem+="<div class='item'>";
                        $.each(oData[iIndex]["text"],function(iIndex,oText){
                            if(iIndex==0){
                                iItem+="<p><span class='span-name span-title'>"+oText["name"]+"</span><br/><span class='font-bold span-rate'>"+(oText["value"].replace(/[个十百千万亿]+/g,""))+"</span>"+(oText["value"].replace(/[.%]+/g,"").replace(/\d+/g,""))+"</p>";
                            }else{
                                iItem+="<p><span class='span-name'>"+oText["name"]+"</span><span class='font-bold "+(oText["value"].indexOf("-")>=0?"color-green":"color-red")+"'>"+oText["value"]+"</span></p>";
                            }
                        });
                        aChart.push({
                            id:"div-chart-"+iIndex+"-"+$el.index(),
                            data:oData[iIndex]["chart"]
                        })
                        iItem+="<div class='div-chart' id='"+aChart[iIndex]["id"]+"'></div>";
                        iItem+="</div>";
                    };
                    $el.html(iItem);
                    _self.renderChart(aChart);
                },
                fail:function(){

                }
            })
        },
        refreshTable:function($el,opt){
            var _self=this;
            $el.find("footer").hide();
            $el.reqTable&&($el.reqTable.abort());
            $el.find(".mask").show();
            $el.reqTable=$.ajax({
                url:$el.data("url"),
                data:{
                    type:opt.type,
                    tab_id:opt.id,
                    date:opt.date
                },
                dataType:$el.data("reqtype")||$(".page").data("reqtype"),
                type:"GET",
                success:function(oData){
                    $el.find("header").html("<span class='header-bg'></span><span class='vertical-middle'>"+oData.title+"</span>");
                    oData.remark&&($el.find("footer").html(oData.remark).show());
                    _self.renderTableHeader($el,oData.header).renderTableBody($el,oData.data);
                    $el.find(".div-detail").css("left",parseInt($el.find('.fixed').width(),10)-1);
                    $el.find(".mask").hide();
                },
                fail:function(){
                    $el.find(".mask").hide();
                }
            })
        },
        renderTableHeader:function($table,data){
            var iFixedTd=$table.data("fixed")||1;
            function renderRows(oHtml,oData,iLevel){
                oData.next=[];
                $.each(oData,function(iIndex,oHeader){

                    if(iIndex<=(iFixedTd-1)&&iLevel==0){
                        oHtml.fixed+="<td>"+oHeader+"</td>"
                    }else{
                        if(oHeader instanceof  Object){
                            for(var sKey in oHeader){
                                oHtml.detail+="<td rowspan='1' colspan='"+oHeader[sKey].length+"' class='collspanTd'>"+sKey+"</td>";
                                oData.next=oData.next.concat(oHeader[sKey]);
                            };
                        }else{
                            oHtml.detail+="<td rowspan='"+(iLevel==0?2:1)+"' class='thead-level-"+(iLevel)+"'>"+oHeader+"</td>";
                        }

                    }
                });
                oHtml.detail+="</tr>";
                oHtml.fixed+="</tr>";
                if(oData.next.length){
                    oHtml.detail+="<tr>";
                    oHtml.fixed+="<tr>";
                    renderRows(oHtml,oData.next,iLevel+1);
                }
            };
            var oHtml={
                fixed:"<tr>",
                detail:"<tr>"
            };
            renderRows(oHtml,data,0);
            $table.find("table.fixed thead").html(oHtml.fixed);
            $table.find("table.detail thead").html(oHtml.detail);
            return this;
        },
        renderTableBody:function($table,oData){
            var oHtml={
                fixed:"",
                detail:""
            };
            var iFixedTd=$table.data("fixed")||1;
            var oRowsPan={};
            $.each(oData,function(iIndex,oRow){
                oHtml.detail+="<tr>";
                oHtml.fixed+="<tr>";
                $.each(oRow,function(iIndex,oCloumn){
                    oCloumn+="";
                    if(!oRowsPan[iIndex]){
                        oRowsPan[iIndex]=1;
                    };
                    if(oRowsPan[iIndex]!=1){
                        oRowsPan[iIndex]--;
                    }else{

                        var tdColor=null;
                        oCloumn=oCloumn.replace(/#color:([^#:]*)/g,function(){
                                tdColor=arguments[1];
                                return "";
                        });
                        var aColumnData=oCloumn.split("#");
                        if(aColumnData.length>1){
                            for(var aIndex=1,aLen=aColumnData.length;aIndex<aLen;aIndex++){
                                var aParam=aColumnData[aIndex].split(":");
                                var filterFn=aParam.shift();
                                if(filterFn=="rows"){
                                    oRowsPan[iIndex]=aParam[0];
                                    if(iIndex<=(iFixedTd-1)){
                                        oHtml.fixed+="<td rowspan='"+oRowsPan[iIndex]+"' style='height:"+(0.5*oRowsPan[iIndex])+"rem;"+(tdColor?("color:"+tdColor):"")+"'>"+aColumnData[0]+"</td>";
                                    }else{
                                        if(oCloumn[0].indexOf("%")>=0){
                                            oHtml.detail+="<td rowspan='"+oRowsPan[iIndex]+"' style='height:"+(0.5*oRowsPan[iIndex])+"rem;"+(tdColor?("color:"+tdColor+"!important"):"")+"' " +
                                                "class='"+(aColumnData[0].indexOf("-")>=0?"color-green":"color-red")+"'>"+aColumnData[0]+"</td>";
                                        }else{
                                            oHtml.detail+="<td rowspan='"+oRowsPan[iIndex]+"' style='height:"+(0.5*oRowsPan[iIndex])+"rem;"+(tdColor?("color:"+tdColor):"")+"'>"+(aColumnData[0]||"-")+"</td>";
                                        }
                                    }
                                }
                            }
                        }else{
                            if(iIndex<=(iFixedTd-1)){
                                oHtml.fixed+="<td style='"+(tdColor?("color:"+tdColor):"")+"'>"+(oCloumn||"-")+"</td>";
                            }else{
                                if(oCloumn.indexOf("%")>=0){
                                    oHtml.detail+="<td class='"+(oCloumn.indexOf("-")>=0?"color-green":"color-red")+"' style='"+(tdColor?("color:"+tdColor+"!important"):"")+"'>"+oCloumn+"</td>";
                                }else{
                                    oHtml.detail+="<td style='"+(tdColor?("color:"+tdColor):"")+"'>"+(oCloumn||"-")+"</td>";
                                }
                            }
                        }

                    }
                });
                oHtml.detail+="</tr>";
                oHtml.fixed+="</tr>";
            });
            $table.find("table.fixed tbody").html(oHtml.fixed);
            $table.find("table.detail tbody").html(oHtml.detail);
            return this;
        },
        renderChart:function(aChart){
            for(var iIndex= 0,iLen=aChart.length;iIndex<iLen;iIndex++){
                var oChart = echarts.init(document.getElementById(aChart[iIndex]["id"]));
                var option = {
                    grid:{
                        left:0,
                        right:0,
                        bottom:0,
                        top:0
                    },
                    xAxis: {
                        type: 'category',
                        data: [],
                        axisLine:{
                            show:false
                        },
                        axisLabel:{
                            show:false
                        },
                        splitLine:{
                            show:false
                        },
                        axisTick:{
                            show:false
                        }
                    },
                    yAxis: {
                        type: 'value',
                        axisLine:{
                            show:false
                        },
                        axisLabel:{
                            show:false
                        },
                        splitLine:{
                            show:false
                        },
                        axisTick:{
                            show:false
                        }
                    },
                    series: [
                        {
                            type:'line',
                            smooth:true,
                            symbol: 'circle',
                            symbolSize:10,
                            areaStyle: {
                                normal: {
                                    color:"rgb(216,237,252)"
                                }
                            },
                            lineStyle: {
                                normal: {
                                    color:"rgb(1,151,255)"
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color:"rgb(1,151,255)",
                                    borderColor:"rgb(216,237,252)",
                                    borderWidth:3
                                }
                            },
                            data: aChart[iIndex]["data"]
                        }
                    ]
                };
                // 使用刚指定的配置项和数据显示图表。
                oChart.setOption(option);
            }

        }
    };
    return app;
});