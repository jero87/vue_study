<template>
    <div id="part01report01">
        <p>part01report01</p>
        <p>part01report01</p>
        <p>part01report01</p>
        <p>part01report01</p>
        <p>part01report01</p>
        <p>part01report01</p>
        <p>part01report01</p>
        <button @mouseover="showMenu()">11111</button>
    </div>
</template>

<script>
export default {
      methods: {
        showMenu: function() {
            console.log(111);
            $('button').css("background","red")
        }
    }
}
</script>

<style>

</style>
