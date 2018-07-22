// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })
new Vue({
  el:'#app',
  data:{
    title:'hello',
    subTitle:'vue react is good',
    showSub:true,
    todos:[
      // '吃饭','睡觉','写代码'
      {text:'吃饭',done:false},
      {text:'睡觉',done:false},
      {text:'写代码',done:false}
    ],
    mytodo:''
  },
  computed:{
    remain(){
      return this.todos.filter(v=>v.done).length
    }
  },
  methods:{
    add(){
      this.todos.push({text:this.mytodo,done:false})
      this.mytodo = '';
      // this.title = 'handle add'
    },
    clear(){
      this.todos = this.todos.filter(v=>!v.done)
    },
    toggle(i){
      this.todos[i].done = !this.todos[i].done; 
    }
  }
})