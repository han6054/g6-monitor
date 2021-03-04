<template>
    <el-aside>
        <!-- <div class="logo">
            <img src="../assets/img/zf-logo.png">
        </div> -->
        <el-menu
            default-active="/"
            text-color="#fff"
            active-text-color="#fff"
            background-color="#041527"
            @select="menuSelect"
        >
            <el-menu-item index="/"><i class="el-icon-monitor"></i>Dashboard</el-menu-item>
            <el-submenu index="2">
                <template #title>
                    <i class="el-icon-s-promotion"></i>
                    <span>监控页</span>
                </template>
                <el-menu-item index="/global">全局监控</el-menu-item>
                <el-menu-item index="/server">服务监控</el-menu-item>
                <el-menu-item index="/user">用户行为</el-menu-item>
            </el-submenu>
        </el-menu>
    </el-aside>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();

        const menuSelect = (path) => {
            router.push({ path });
        };

        return {
            menuSelect,
        };
    },
};
</script>

<style lang="scss" scoped>
    .el-aside{
        height: 100vh;
        background:#041527;
    }
    .logo{
        padding:10px;
        text-align: center;
        img{
            width: 200px;
        }
    }
    .el-menu-item{
        &.is-active{
            background: #4491f7 !important;
        }
    }
</style>