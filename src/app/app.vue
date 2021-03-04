<template>
    <el-container>
        <Aside></Aside>
        <el-main>
            <el-header>{{ $route.meta.title }}</el-header>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script>
import Aside from '../components/aside';

export default {
    components: {
        Aside,
    },
};
</script>

<style>
*{
    margin:0;
    padding:0;
}
#app, .el-main{
    height: 100vh;
    overflow: auto;
}
</style>