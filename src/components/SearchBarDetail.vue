<template>
    <div class="SearchBarDetail">
        <img alt="Search logo" src="../assets/logo_detail.png" class="SearchLogoDetail">
        <Input search enter-button size="large" v-bind:placeholder="msg" class="InputSearchBarDetail"/>
    </div>
</template>
<script>
    export default {
        name: 'SearchBarDetail',
        props: {
            msg: String
        }
    }
</script>

<style>
    .SearchBarDetail {
        padding: 10px 10%;
        text-align: center;
    }

    .InputSearchBarDetail {
        max-width: 900px;
        min-width: 300px;
        position: relative;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

    .SearchLogoDetail {
        padding: 30px 10%;
        max-width: 100%;
        max-height: 100%;
    }
</style>
