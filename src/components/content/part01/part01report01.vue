<template>
    <div id="part01report01">
        <p>part01report01</p>
        <p>part01report01</p>
        <p>part01report01</p>
        <p>part01report01</p>
        <p>part01report01</p>
        <p>part01report01</p>
        <p>part01report01</p>
        <button @click="showMenu()">changeColor</button>
        <button @click="getData()">getData</button>
    </div>
</template>

<script>
// import _ajax from "@/api"
export default {
    methods: {
        showMenu: function() {
            $('button').css("background", "red")
        },
        getData: function() {
            var params = {
                "school":"NO.6"
            }
            this._ajax('test',params).then(function(response) {
                console.log(response);
            })
                .catch(function(error) {
                    console.log(error);
                })
        }

    }
}
</script>

<style>

</style>
