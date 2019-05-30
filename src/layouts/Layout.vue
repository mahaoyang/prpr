<style scoped>
    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }

    .layout-logo {
        width: 100px;
        height: 30px;
        background: #f5f7f9;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }

    .layout-nav {
        width: 420px;
        margin: -20px auto;
        margin-right: 20px;
    }

    .layout-footer-center {
        text-align: center;
    }

    .header {
        background: rgb(255, 255, 255);
    }

    .content {
        min-height: 600px;
        height: 900px;
    }

    .breadcrumb {
        margin: 20px 20px;
    }
</style>
<template>
    <div class="layout">
        <Layout>

            <Content>
                <!--                <Breadcrumb class="breadcrumb">-->
                <!--                    <BreadcrumbItem>Home</BreadcrumbItem>-->
                <!--                    <BreadcrumbItem>Components</BreadcrumbItem>-->
                <!--                    <BreadcrumbItem>Layout</BreadcrumbItem>-->
                <!--                </Breadcrumb>-->
                <Card>
                    <Header class="header">
                        <Menu mode="horizontal" theme="light" active-name="1">
                            <div class="layout-logo"></div>
                            <div class="layout-nav">
                                <MenuItem name="1">
                                    <Icon type="ios-navigate"></Icon>
                                    Item 1
                                </MenuItem>
                                <MenuItem name="2">
                                    <Icon type="ios-keypad"></Icon>
                                    Item 2
                                </MenuItem>
                                <MenuItem name="3">
                                    <Icon type="ios-analytics"></Icon>
                                    Item 3
                                </MenuItem>
                                <MenuItem name="4">
                                    <Icon type="ios-paper"></Icon>
                                    Item 4
                                </MenuItem>
                            </div>
                        </Menu>
                    </Header>
                    <div class="content">
                        <SearchBar v-bind:msg="info"></SearchBar>
                    </div>
                </Card>
            </Content>
            <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
        </Layout>
    </div>
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
