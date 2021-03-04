<template>
    <div class="page">
        <components-panel/>
        <div class="graph-control">
            <div
                v-loading="data.loading"
                ref="canvas"
                id="canvas"
            >
                <div class="tooltar">
                    <i
                        v-if="!data.running"
                        class="iconfont icon-play"
                        title="开始"
                        @click="excute('play')"
                    ></i>
                    <i
                        v-else
                        class="iconfont icon-stop"
                        title="停止"
                        @click="excute('stop')"
                    ></i>
                    <i
                        class="iconfont icon-reset"
                        title="复位"
                        @click="excute('reset')"
                    ></i>
                    <i
                        class="iconfont icon-zoom-in"
                        title="放大"
                        @click="excute('zoomIn')"
                    ></i>
                    <i
                        class="iconfont icon-zoom-out"
                        title="缩小"
                        @click="excute('zoomOut')"
                    ></i>
                    <i
                        class="iconfont icon-save"
                        title="保存"
                        @click="save"
                    ></i>
                </div>
            </div>
            <div class="component-form">
                <template v-if="data.currentComponent === ''">
                    <h3 style="margin-bottom: 10px;">全局监控流程图</h3>
                    <p>- 支持自定义监控类型</p>
                    <p>- 支持自定义监控链路</p>
                    <p>- 支持实时监控</p>
                    <p>- 单点连通性测试</p>
                    <p>- 查看节点运行状态</p>
                    <p>- 放大缩小重定位视图</p>
                    <p>- 节点右键菜单可查询日志</p>
                    <p>- ...</p>
                </template>
                <component
                    v-else
                    ref="component"
                    :is="data.currentComponent"
                    @update="save"
                ></component>
            </div>
        </div>
    </div>
</template>

<script>
import { getCurrentInstance, onMounted, reactive } from 'vue';
import componentsPanel from './components-panel';
export default {
      components: {
        componentsPanel,
        // server,
        // cdn,
    },
    setup() {
        let graph;
        const data = reactive({
            loading: false,
            currentNode: '',
            currentComponent: '',
            running: false,
        });
          return {
            data,
        }
    }
}
</script>

<style lang="scss" scoped>
    .page{
        height:calc(100vh - 100px);
        display: flex;
    }
    .graph-control{
        flex: 1;
        margin-left: 20px;
        border-radius: 4px;
        border:1px solid #e7e7e7;
        position: relative;
    }
    .tooltar{
        position: absolute;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        border: 1px solid #eee;
        border-radius: 5px;
        padding: 4px 5px;
        background:#fff;
        color: #1890ff;
        .iconfont {
            cursor: pointer;
            margin:0 5px;
            font-size: 20px;
            &:hover {
                opacity: 0.7;
            }
        }
    }
    #canvas{
        height:100%;
        position: relative;
        margin-right: 240px;
        :deep(.g6-minimap) {
            position: absolute;
            bottom:-1px;
            left: -1px;
            border: 1px solid #eee;
            background:#fff;
        }
        :deep(.g6-component-contextmenu) {
            padding-bottom: 3px;
            p{cursor: pointer;
                line-height:20px;
                margin-bottom: 5px;
            }
        }
    }
    .component-form{
        position: absolute;
        top:0;
        right:0;
        width: 200px;
        height: 100%;
        background:#fff;
        border-left: 1px solid #eee;
        padding: 20px;
    }
</style>