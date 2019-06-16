<template>
    <div>
        <search-bar-detail></search-bar-detail>
        <div v-for="site in sites">
            <Divider orientation="left"><a v-bind:href="site.url">Left Text</a></Divider>
            <p>{{ site.name }}.</p>
        </div>
    </div>
</template>
<script>
    import SearchBarDetail from "./SearchBarDetail"

    export default {
        name: 'SearchDetail',
        components: {
            SearchBarDetail
        },
        data() {
            return {
                sites: [
                    {
                        url: '#',
                        name: 'Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive\n' +
                            '                officer, and a co-founder of Apple Inc.'
                    },
                    {
                        url: '/',
                        name: 'Google'
                    },
                    {
                        url: '/',
                        name: 'Taobao'
                    }
                ]
            }
        }
    }
</script>