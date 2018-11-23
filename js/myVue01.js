window.onload= function() {
  var app = new Vue({
    el: "#app1",
    data: {
      msg: "俩个Div Id同名会有什么事情呢?",
      title: "如果有俩个字符呢"
    }


  });



    var app2 = new Vue({
      el: "#app2",
      data: {
        message: "页面加载于" + new Date().toLocaleString()
      }
    });


    var app3 = new Vue({
      el: "#app3",
      data: {
        seen : false
      }
    });



    var app4 = new Vue({
      el: "#app4",
      data:{
        todoList:[
          {text:"学习"} ,
          {text:"生活"},
          {text:"娱乐"}
        ]
      }
    });


    var app5 = new Vue({
      el: "#app-5",
      data: {
        message: "Hello Vue.js"
      },
      methods: {
        reverseMessage:function() {
          this.message = this.message.split('').reverse().join('');
        }
      }
    });

    
    // Vue.component("todo-item", {
    //   template : '<li>这是一个代办项目</li>'
    // })

    Vue.component("todo-item", {
      props :['todo'],
      template : '<li>{{todo.text}}</li>'
    })

  


    var app6 = new Vue({
      el: "#app-6",
      data : {
        groceryList:[
          {id :0,text:'蔬菜'},
          {id : 1,text :'奶酪'},
          {id:2,text:'whatever people eat!'}
        ]
      }
    })
}
