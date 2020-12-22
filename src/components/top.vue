<template>
    <div class="app">
        <div class="div1">
            <span class="span1">XX学校资产管理系统</span>
        </div>
        <div class="div2">
            <span>资产管理</span>
            <span>申请&审批</span>
            <span>统计</span>
            <span>设置</span>
            <span>操作日志</span>
            <span>帮助</span>
        </div>
        <div class="div3">
            <img src="../assets/1.png" width="45px" style="position: absolute;right:155px;top:3px;">
            <span>张小风</span> 
            <span class="span2">学校管理员</span>
        </div>
    </div>
</template>
<style scoped>
    .span1{
        border-left: 3px solid seagreen;
        font-weight: 900;
        padding-left: 5px;
        margin-left: 10px;
    }
    .span2{
        padding: 5px;
        background: seagreen;
        margin: 0px 15px;
    }
    .app{
        width: 100%;
        background: rgba(39, 51, 65, 1);
        height: 35px;
        padding-top: 15px;
        color: white;
        font-size: 17px;
    }
    .div1{
        width: 15%;
        float: left;
        font-size: 18px;
    }
    .div2{
        width: 70%;
        float: left;
        text-align: center;
    }
    .div2>span{
        margin:0px 35px;
    }
    .div3{
        width: 15%;
        float: left;
        text-align: right;
        font-size: 14px;
    }
</style>