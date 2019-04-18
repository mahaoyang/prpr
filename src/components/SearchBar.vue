<template>
    <div :style="{width: '200' ,margin: '10% 0'}">
        <div :style="{padding: '0 10%' ,margin: '10% 0'}"><img alt="Vue logo" src="../assets/logo.png"></div>
        <Input search enter-button v-bind:placeholder="msg"/>
    </div>
</template>
<script>
    export default {
        name: 'SearchBar',
        props: {
            msg: String
        }
    }
</script>

