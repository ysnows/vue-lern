<template>
    <div>
        <ul>
            <template v-for="(item,index) in items">
                <li :key="item"> {{item.name}}</li>
                <li :key="index">{{index}}</li>
            </template>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String,
            msgid: String,
            number: Number
        },
        data() {
            return {
                items: [
                    {name: 'hello'},
                    {name: 'world'}
                ]
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
