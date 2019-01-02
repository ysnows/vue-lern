<template>
    <div>
        <button @click="increment">增加</button>
        <button @click="decrement">减少</button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "Com",
        props: [
            'age'
        ],
        data: function () {
            return {
                hello: 'hello'
            }
        },
        methods: mapActions([
            'increment',
            'decrement'
        ])
    }
</script>

<style scoped>

</style>