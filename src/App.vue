<template>
    <div>
        {{info}}
        <layout msg="Welcome to Your Vue.js App"/>
<!--        <layout-detail msg="Welcome to Your Vue.js App"/>-->
    </div>
</template>

<script>
    import Layout from './layouts/Layout'
    // import LayoutDetail from './layouts/LayoutDetail'

    export default {
        name: 'app',
        components: {
            Layout,
            // LayoutDetail
        },
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 0px;
    }
</style>
