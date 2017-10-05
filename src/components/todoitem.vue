<template>
  
  <ol>
      <li v-for="item in todo" v-bind:key="item.id">
        {{item.text}}
      </li>
    </ol>
</template>

<script>
export default {
  props: ['todo'],
}
</script>

<style>

</style>
