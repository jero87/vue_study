<template>
  <div>
    <p>子组件从父元素读取数据</p>
    <ol>
      <li v-for="item in todo" v-bind:key="item.id">
        {{item.text}}
      </li>
    </ol>
    <button @click="changeParentMsg">子组件修改父元素MSG</button>
  </div>
</template>

<script>
export default {
  props: ['todo'],
  methods: {
    changeParentMsg() {
      this.$emit('changeMyMsg', "修改好咯");
    }
  }

}
</script>

<style>

</style>
