<template>
    <div class="components-panel">
        <h3>机房</h3>
        <div
            class="node"
            draggable="true"
            type="server"
            @dragstart="dragstart"
        >
            主机
        </div>
        <h3>网络</h3>
        <div
            class="node"
            type="cdn"
            draggable="true"
            @dragstart="dragstart"
        >
            cdn
        </div>
        <div
            class="node"
            type="domain"
            draggable="true"
            @dragstart="dragstart"
        >
            主域名
        </div>
        <h3>前台</h3>
        <div
            class="node"
            type="static-file"
            draggable="true"
            @dragstart="dragstart"
        >
            静态资源
        </div>
        <div
            class="node"
            type="response"
            draggable="true"
            @dragstart="dragstart"
        >
            接口响应
        </div>
        <div
            class="node"
            type="js-error"
            draggable="true"
            @dragstart="dragstart"
        >
            js 报错
        </div>
        <h3>主要页面</h3>
        <div
            class="node"
            type="page"
            draggable="true"
            @dragstart="dragstart"
        >
            页面监控
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .components-panel{
        width: 200px;
        border-radius: 4px;
        border:1px solid #e7e7e7;
        padding: 10px 20px;
        h3{
            font-weight: normal;
            font-size: 16px;
        }
        .node{
            height: 34px;
            margin:10px 0;
            border-radius: 4px;
            text-align: center;
            line-height: 32px;
            border: 1px solid #a5bb6c;
            background:#e7f7ef;
            cursor: move;
        }
    }
</style>