<template>
  <div id="app">
    <mymenu></mymenu>
    <mycontent></mycontent>
  </div>
</template>

<script>
import mymenu from './components/menu.vue'
import mycontent from './components/contentEntry.vue'

export default {
  name: 'app',
  components: {
    mymenu, mycontent
  }
}
</script>

<style>

</style>

