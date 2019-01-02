<template lang="html">
    <button class="events" @click="sayHello('dd',$event)">
        hello world
    </button>
</template>

<script>
    export default {
        name: "Events",
        methods: {
            sayHello: function (a, event) {
                window.console.log(a, event)
            }
        }
    }
</script>

<style scoped>

</style>