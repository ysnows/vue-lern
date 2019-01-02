<template>
    <div>
        {{$store.state.count.count}}
        <button @click="add(2)">增加</button>
        <button @click="remove">减少</button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "Com",
        props: [
            'age'
        ],
        methods: mapActions('count', [
            'add',
            'remove'
        ])
    }
</script>

<style scoped>

</style>