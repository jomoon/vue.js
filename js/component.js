Vue.component("button-counter",{
    // ，一个组件的 data 选项必须是一个函数 ，不然就会几个组建同步
    data: function() {
        return {
            count:0
        }
    },
    // methods: function() {
    //     return {
    //         doub: function(num) {
    //             return num * 2
    //         }
    //     }
    // },
    template:"<button v-on:click='count++'>you clicked me {{count}} times.</button>"
})

new Vue({
    el: "#app1"
})