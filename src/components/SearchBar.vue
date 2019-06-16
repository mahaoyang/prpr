<template>
    <div class="SearchBar">
        <div>
            <img alt="Search logo" src="../assets/logo.png" class="SearchLogo">
        </div>
        <Input search enter-button size="large" v-bind:placeholder="msg" class="InputSearchBar"/>
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

<style>
    .SearchBar {
        padding: 5% 10%;
        text-align: center;
    }

    .InputSearchBar {
        max-width: 600px;
        min-width: 300px;
        position: relative;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

    .SearchLogo {
        padding: 50px 10%;
        max-width: 100%;
        max-height: 100%;
    }
</style>
