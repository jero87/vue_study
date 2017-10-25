<template>
  <div id="app">
    <myhead></myhead>
    <mymenu></mymenu>
    <mycontent></mycontent>
    <todoitem v-bind:todo="groceryList" @changeMyMsg="changeMsg"></todoitem>
    <div>{{Msg}}</div>
  </div>
</template>

<script>
import todoitem from './components/todoitem.vue'
import myhead from './components/myhead.vue'
import mymenu from './components/menu.vue'
import mycontent from './components/contentEntry.vue'

export default {
  name: 'app',
  components: {
    myhead, mymenu, mycontent, todoitem
  },
  methods: {
    changeMsg(msg) {
      this.Msg = msg;
    }
  },
  data() {
    return {
      Msg:"初始msg",
      groceryList: [
        { id: 0, text: '蔬菜' },
        { id: 1, text: '奶酪' },
        { id: 2, text: '随便其他什么人吃的东西' }
      ]
    }
  },




}
</script>

<style>

</style>

