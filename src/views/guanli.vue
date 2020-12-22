<template>
    <div class="app">
        <top></top>
        <div class="div">
            <div class="div1">
                <p>待办事项<span class="span1">9</span></p>
                <div class="div1-zuo">
                    <ul class="ul1">
                        <li><span class="span2"></span>条教学设备借入申请<span style="float:right">最近一条时间：2017-11-03  09:00</span></li>
                        <li><span class="span2"></span>1条易耗品领用申请<span style="float:right">最近一条时间：2017-11-03  09:00</span></li>
                        <li><span class="span2"></span>1条教学设备报修申请<span style="float:right">最近一条时间：2017-11-03  09:00</span></li>
                    </ul>
                </div>
                <div class="div1-you">
                    <ul class="ul1" style="margin-left: 10px">
                        <li><span class="span2"></span>1条教学设备挂失申请<span style="float:right">最近一条时间：2017-11-03  09:00</span></li>
                        <li><span class="span2"></span>1条教学设备报废申请<span style="float:right">最近一条时间：2017-11-03  09:00</span></li>
                        <li><span class="span2"></span>1条易耗品核销申请<span style="float:right">最近一条时间：2017-11-03  09:00</span></li>
                    </ul>
                </div>
            </div>
            <div class="div2">
                <p>资产监控</p>
                <div class='div2-1'>
                        <div style="margin-left:0px;background: rgba(237, 86, 101, 1);">
                        <div class="div2-div-zuo">
                            <img src="../assets/3-1.png" style="margin-top:30%">
                        </div>
                        <div class="div2-div-you">
                            <p class="div2-p1">资产总量</p>
                            <p class="div2-p2">138,000</p>
                        </div>
                    </div>
                    <div style="margin-left:0px;background: rgba(247, 165, 79, 1);">
                        <div class="div2-div-zuo">
                            <img src="../assets/3-2.png" style="margin-top:30%">
                        </div>
                        <div class="div2-div-you">
                            <p class="div2-p1">资产总额</p>
                            <p class="div2-p2">10,138,000</p>
                        </div>
                    </div>
                    <div style="margin-left:0px;background: rgba(28, 133, 199, 1);">
                        <div class="div2-div-zuo">
                            <img src="../assets/3-3.png" style="margin-top:30%">
                        </div>
                        <div class="div2-div-you">
                            <p class="div2-p1">房产面积</p>
                            <p class="div2-p2">7,738,000</p>
                        </div>
                    </div>
                    <div style="margin-left:0px;background: rgba(26, 179, 148, 1);">
                        <div class="div2-div-zuo">
                            <img src="../assets/3-4.png" style="margin-top:30%">
                        </div>
                        <div class="div2-div-you">
                            <p class="div2-p1">地产面积</p>
                            <p class="div2-p2">638,000</p>
                        </div>
                    </div>
                </div>
                <div class="div2-2">
                    <div style="margin-left:0px">
                        <div class="div2-div2-zuo">
                            <span class="div2-2-span">设备借出统计</span>
                        </div>
                        <div class="div2-div2-you">
                            <ul>
                                <li style="margin-top:55%"><img src="../assets/4-1.png" style="margin-right:10px;position: relative;top:2px">设备库存</li>
                                <li><img src="../assets/4-3.png" style="margin-right:10px;position: relative;top:2px">设备借出</li>
                            </ul>
                        </div>
                    </div>
                    <div style="margin-left:0px">
                        <div class="div2-div2-zuo">
                            <span class="div2-2-span" style="margin-top:38%">易耗品分<br/>发统计</span>
                        </div>
                        <div class="div2-div2-you">
                            <ul>
                                <li style="margin-top:55%;font-size:14px"><img src="../assets/4-1.png" style="margin-right:10px;position: relative;top:2px">易耗品库存</li>
                                <li style="font-size:14px;"><img src="../assets/4-3.png" style="margin-right:10px;position: relative;top:2px">易耗品分发</li>
                            </ul>
                        </div>
                    </div>
                    <div style="margin-left:0px">
                        <div class="div2-div2-zuo">
                            <span class="div2-2-span">挂失资产统计</span>
                        </div>
                        <div class="div2-div2-you">
                            <ul>
                                <li><img src="../assets/4-1.png" style="margin-right:10px;position: relative;top:2px">书桌</li>
                                <li><img src="../assets/4-2.png" style="margin-right:10px;position: relative;top:2px">乒乓球</li>
                                <li><img src="../assets/4-3.png" style="margin-right:10px;position: relative;top:2px">电脑桌</li>
                                <li><img src="../assets/4-4.png" style="margin-right:10px;position: relative;top:2px">量筒</li>
                                <li><img src="../assets/4-5.png" style="margin-right:10px;position: relative;top:2px">试管</li>
                            </ul>
                        </div>
                    </div>
                    <div style="margin-left:0px">
                        <div class="div2-div2-zuo">
                            <span class="div2-2-span">报废资产统计</span>
                        </div>
                        <div class="div2-div2-you">
                            <ul>
                                <li><img src="../assets/4-1.png" style="margin-right:10px;position: relative;top:2px">书桌</li>
                                <li><img src="../assets/4-2.png" style="margin-right:10px;position: relative;top:2px">乒乓球</li>
                                <li><img src="../assets/4-3.png" style="margin-right:10px;position: relative;top:2px">电脑桌</li>
                                <li><img src="../assets/4-4.png" style="margin-right:10px;position: relative;top:2px">量筒</li>
                                <li><img src="../assets/4-5.png" style="margin-right:10px;position: relative;top:2px">试管</li>
                            </ul>
                        </div>
                    </div>  
                </div>
            </div>
            <div class="div3">
                <P>资产统计</p>
                <div class="div3-1">
                    <span style="background:seagreen;color:white">设备分类数量统计</span>
                    <span>设备分类金额统计</span>
                    <span>易耗品分类数量统计</span>
                    <span>易耗品分类金额统计</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import top from '../components/top.vue'

export default {
    components:{
        top
    }
}   
</script>

<style scoped>
    .div2-div2-you>ul{
        padding: 0px 30px;
        margin-top: 5px;
        list-style-type: none;
    }
    .div2-div2-you>ul>li{
        margin-bottom: 10px;
    }
    .div2-2-span{
        display: inline-block;
        margin-top: 43%;
        font-size: 13px;
    }
    .div2-2>div{
        float: left;
        width: 23%;
        height: 160px;
        margin: 0% 2%;
    }
    .div2-div2-zuo{
        text-align: center;
        float: left;
        width: 50%; 
        height: 160px;
        background-image: url('../assets/2.png');
        background-size: 100%;
    }
    .div2-div2-you{
        float: left;
        width: 50%; 
        height: 160px;
    }
    .div2-p1{
        font-size: 20px;
        margin: 10px;
    }
    .div2-p2{
        text-align: right;
        margin: 14px 13px 8px 13px;
        font-size: 30px;
        font-weight: 900;
    }
    .div2-1>div {
        float: left;
        width: 23%;
        height: 100px;
        margin: 0% 2%;
        margin-bottom: 30px;
    }
    .div2-div-zuo{
        float: left;
        width: 25%;
        height: 100px;
        background: rgba(102, 102, 102, 0.5);
        text-align: center;
    }
    .div2-div-you{
        color: white;
        float: left;
        width: 75%;
        height: 100px;
    }
    .div1>div{
        width: 49%;
        height: 100px;
        float: left;
    }
    .div3-1>span{
        display: inline-block;
        padding: 7px 15px;
        margin-right: 10px;
        font-size: 14px;
        margin-top: 7px; 
        background: gainsboro;
    }
    .span2{
        display: inline-block;
        width: 5px;
        height: 5px;
        margin-right: 10px;
        margin-top: 8px;
        border-radius: 5px;
        background: red;
        float: left;
    }
    .ul1{
        list-style-type: none;
        padding-left: 10px;
        width: 65%;
        font-size: 14px;
    }
    .ul1>li{
        margin-bottom: 10px;
    }
    .div1-you{
        border-left: 1px dashed silver; 
    }
    .span1{
        display: inline-block;
        width: 14px;
        font-size: 12px;
        margin-left: 10px;
        text-align: center;
        border-radius: 10px;
        background: tomato;
        color: white;
    }
    .div{
        background: #f5f5f5;
        height: 1070px;
        padding: 40px;
    }
    .div1{
        padding:1% 2%;
        width: 96%;
        height: 180px;
        background: white;
    }
    .div2{
        padding:1% 2%;
        width: 96%;
        height: 360px;
        margin-top: 20px;
        background: white;
    }
    .div3{
        padding:1% 2%;
        width: 96%;
        height: 400px;
        margin-top: 20px;
        background: white;
    }
</style>

<style>
    body{
        margin: 0px;
        padding: 0px;
    }
</style>