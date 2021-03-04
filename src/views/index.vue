<template>
    <div class="page">
        <el-row :gutter="30">
            <el-col :span="8">
                <el-card>
                    <p class="text">前台访问量</p>
                    <span class="num">1200</span>次
                    <div class="record">
                        周同比 12%  <i class="el-icon-caret-top"></i>
                        日同比 -5% <i class="el-icon-caret-bottom"></i>
                    </div>
                    日均访问量 1w 次
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card>
                    <p class="text">接口请求次数</p>
                    <span class="num">12w</span>次
                    <div class="record">
                        周同比 5%  <i class="el-icon-caret-top"></i>
                        日同比 -1% <i class="el-icon-caret-bottom"></i>
                    </div>
                    日均访问量 1w 次
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card>
                    <p class="text">页面 404</p>
                    <span class="num">100</span>次
                    <div class="record">
                        周同比 5%  <i class="el-icon-caret-top"></i>
                        日同比 -1% <i class="el-icon-caret-bottom"></i>
                    </div>
                    日均访问量 50 次
                </el-card>
            </el-col>
        </el-row>
        <!-- <img src="../assets/img/15.20.20.png" alt="">
        <img src="../assets/img/15.23.12.png" alt=""> -->
    </div>
</template>

<script>
export default {
    setup() {

    },
};
</script>

<style lang="scss" scoped>
    .text{margin-bottom: 10px;}
    .num{font-size: 30px;}
    .record{
        margin:10px 0;
        padding-bottom: 10px;
        border-bottom: 1px solid #eee;
    }
    .el-icon-caret-top{color: #f5222d;}
    .el-icon-caret-bottom{color:#52c41a;}
    img{max-width:100%;}
</style>