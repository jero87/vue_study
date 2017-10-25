<template>
    <div id="part02report01">
    </div>
</template>

<script>
import Highcharts from "highcharts"
import wordcloud  from "../../../../node_modules/highcharts/modules/wordcloud.js"
wordcloud(Highcharts)
//  require("../../../../node_modules/highcharts/modules/wordcloud.js")(Highcharts)

export default {
    components: {
        Highcharts
    },
    data() {
        return {
            hichartsData: {},

        }
    },
    created() {
        this.getData();
    },
    methods: {
        //获取表格数据
        getData() {
            this._ajax('test', {})
                .then(function(responseData) {
                    responseData = [
                        { name: "jero", weight: 1 },
                        { name: "win", weight: 3 },
                        { name: "ref", weight: 2 },
                    ]
                    this.hichartsData = responseData;
                    this.drawHichartsPic(this.hichartsData)

                    // this.test()
                }.bind(this))
                .catch(function(error) {
                    console.log(error);
                });
        },
        drawHichartsPic(data) {
            Highcharts.chart('part02report01', {
                series: [{
                    type: 'wordcloud',
                    data: data
                }],
                title: {
                    text: '词云图'
                }
            })
        },
        test() {
            var chart= new Highcharts.Chart('part02report01', {          
            chart: {
                type: 'bar'                         //指定图表的类型，默认是折线图（line）
            },
            title: {
                text: '我的第一个图表'                //指定图表标题
            },
            xAxis: {
                categories: ['苹果', '香蕉', '橙子'] //指定x轴分组
            },
            yAxis: {
                title: {
                    text: '吃水果个数'                //指定y轴的标题
                }
            },
            series: [{                              //指定数据列
                name: '小明',                       //数据列名
                data: [1, 0, 4]                     //数据
            }, {
                name: '小红',
                data: [5, 7, 3]
            }]
        })
        }
    }
}
</script>

<style>

</style>
