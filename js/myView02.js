// 创建的根Vue实例，以及可选的嵌套的，可复用的组建树组成
var vm = new Vue({
    // 选项
    el:"#app1",
    data: {
        object: {
            firstName :"huang",
            lastName: "jiangjun",
            age:30
        }
    }
})


var vm2 = new Vue({
    el: "#app2",
    data: {
        numbers: [1,2,3,4,5]
    },
    computed: {
        evenNumber: function() {
            return this.numbers.filter(function(num) {
                return num % 2 === 0
            })
        }
    },
    methods: {
        even: function(numbers) {
            return numbers.filter(function(num) {
                return num % 2 === 0
            })
        }
    }
})


Vue.component("todo-item",{
    template: '\<li>\ {{title}}\ <button v-on:click="$emit(\'remove\')">Remove</button>\<li>\ ',
    props: ['title']
})


new Vue({
    el:"#todo-list-example",
    data: {
        newTodoText:"",
        todos:[
            {id:1,title:"Do the dishes"},
            {id:2,title:"Take out the trash"},
            {id: 3,title: 'Mow the lawn'}
        ],
        nextTodoId: 4
    },
    methods: {
        addNewTodo: function() {
            this.todos.push({
                id: this.nextTodoId ++,
                title: this.newTodoText
            })
            this.newTodoText = ""
        }
    }
})


var example1 = new Vue({
    el:"#example-1",
    data: {
        counter: 0,
        counter2: 0
    },
    methods: {
        add2: function() {
            this.counter2 = this.counter2 + 2
        },
        warn: function(message,event) {
            if(event) event.preventDefault()
            alert(message)
        }
    }
})

var app3 = new Vue({
    el:"#app3",
    data: {
        message : ""
    }
})