<style scoped>
    .layout {
        border: 1px solid rgba(255, 255, 255, 0);
        background: rgba(255, 255, 255, 0);
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }

    .layout-footer-center {
        text-align: center;
        background: rgba(251, 255, 255, 0);
    }

    .header {
        background: rgba(255, 255, 255, 0);
    }

    .content {
        min-height: 600px;
        height: 750px;
        /*background: rgb(255, 255, 255);*/
    }

    .breadcrumb {
        text-align: right;
    }
</style>
<template>
    <Layout class="layout">
        <Header class="header">
            <Breadcrumb class="breadcrumb">
                <BreadcrumbItem to="/">
                    <Icon type="ios-home-outline"></Icon>
                    Home
                </BreadcrumbItem>
                <BreadcrumbItem to="/components/breadcrumb">
                    <Icon type="logo-buffer"></Icon>
                    Components
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Button size="small" type="primary">login</Button>
                </BreadcrumbItem>
            </Breadcrumb>
        </Header>
        <Content class="content">
            <SearchBar v-bind:msg="info"></SearchBar>
        </Content>
        <Footer class="layout-footer-center">2011-2019 &copy; Maagle Search</Footer>
    </Layout>
</template>
<script>
    import SearchBar from "../components/SearchBar.vue"
    import axios from 'axios'
    import console from 'console'

    export default {
        name: 'SearchHome',
        components: {
            SearchBar
        },
        data() {
            return {
                info: null,
                loading: true,
                errored: false
            }
        },
        filters: {
            currencydecimal(value) {
                return value.toFixed(2)
            }
        },
        mounted() {
            axios
                .get('https://api.coindesk.com/v1/bpi/currentprice.json')
                .then(response => {
                    this.info = response.data.chartName
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => this.loading = false)
        }
    }
</script>
