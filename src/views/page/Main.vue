<template>
  <div class="main">
    <div class="header-top"></div>
    <div class="home-warp">
      <div class="left">
        <section class="service-chart">
          <section class="echart-title">
            <h4>养老服务趋势（万次）</h4>
          </section>
          <div id="service"></div>
        </section>

        <section class="subsidy-chart">
          <section class="echart-title">
            <h4>年度养老补助占比</h4>
          </section>
          <div id="subsidy"></div>
        </section>

        <section class="rescue-chart">
          <section class="echart-title">
            <h4>紧急救助趋势 (次)</h4>
          </section>
          <div id="rescue"></div>
        </section>
      </div>

      <div class="center">
        <div class="top">
          <div class="item" v-for="item in totalArr" :key="item">
            <p class="num">
              <span>{{item.totalNum}}</span>
            </p>
            <p class="text">{{item.totalTitle}}</p>
          </div>
        </div>
      </div>

      <div class="right">
        <section class="total-chart">
          <section class="echart-title">
            <h4>老人总量趋势</h4>
          </section>
          <div id="total"></div>
        </section>

        <section class="quality-chart">
          <section class="echart-title">
            <h4>服务质量满意度</h4>
          </section>
          <div id="quality"></div>
        </section>

        <section class="waiter-chart">
          <section class="echart-title">
            <h4>服务人员增长趋势 (人)</h4>
          </section>
          <div id="waiter"></div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  import theme from 'common/theme'
  import {service, subsidy, rescue, total, quality, waiter} from 'common/echarParam'

  export default {
    name: "Main",
    data() {
      return {
        totalArr: [
          {
            totalNum:227680,
            totalTitle: '年度补贴发放 (万元)'
          },{
            totalNum:64320,
            totalTitle: '年度服务量 (万次)'
          },{
            totalNum:29177,
            totalTitle: '养老服务机构 (个)'
          },{
            totalNum:1003,
            totalTitle: '服务老人数量 (万人)'
          },{
            totalNum:7892,
            totalTitle: '年度呼叫话务量 (万次)'
          },
        ]
      }
    },
    created() {
    },
    mounted() {
      this.drawLine()
    },
    methods: {
      drawLine() {
        this.$echarts.registerTheme('cBlue', theme)
        /* 服务柱形 */
        let chartService = this.$echarts.init(document.getElementById('service'), 'cBlue')
        chartService.setOption(service)

        /* 补助玫瑰图 */
        let chartSubsidy = this.$echarts.init(document.getElementById('subsidy'), 'cBlue')
        chartSubsidy.setOption(subsidy)

        /* 救助折线图 */
        let chartRescue = this.$echarts.init(document.getElementById('rescue'), 'cBlue')
        chartRescue.setOption(rescue)

        /* 总量柱形图 */
        let chartTotal = this.$echarts.init(document.getElementById('total'), 'cBlue')
        chartTotal.setOption(total)

        /* 满意度饼图 */
        let chartQuality = this.$echarts.init(document.getElementById('quality'), 'cBlue')
        chartQuality.setOption(quality)

        /* 服务人员折线图 */
         let chartWaiter = this.$echarts.init(document.getElementById('waiter'), 'cBlue')
        chartWaiter.setOption(waiter)
        //window.addEventListener("resize", () => { chartService.resize();});
      }
    }
  }
</script>

<style scoped>

.main {
  
  width: 100%;
  color: #fff;
  background-size: cover;
  background-position: 50% center;
  background-repeat: no-repeat;
  background-color: rgb(2, 24, 72);
  background-image: url(~assets/img/common/bg.png);
  overflow: hidden;
}

.main .header-top {
  width: 100%;
  height: 48px;
  background: url(~assets/img/common/homeTitle.png) no-repeat;
  background-size: 100% 100%;
}
/* 仪表板样式 */
.main .home-warp {
  padding: 18px 20px;
  height: calc(100% - 5px);
  width: 100%;
  overflow: hidden;
}
/* 左边图表 */
.main .home-warp .left {
  float: left;
  width: 320px;
  height: 100%;
}
.main .home-warp .left .service-chart{
  margin-top: 24px;
  height: 236px;
  width: 100%;
}
.main .home-warp .left .subsidy-chart {
  height: 206px;
  width: 100%;
}
.main .home-warp .left .rescue-chart {
  height: 236px;
  width: 100%;
}

.main .home-warp .echart-title h4 {
  display: flex;
  align-items: center;
  padding-left: 9px;
  border-left: 1.6px solid #00a3ff;
  margin-bottom: 18px;
  height: 17.6px;
  font-size: 14.5px;
  font-weight: normal;
}

.main .home-warp .left .service-chart #service {
  height: 200px;
  color: #fff;
}
.main .home-warp .left .subsidy-chart #subsidy {
  height: 140px;
  color: #fff;
}
.main .home-warp .left .rescue-chart #rescue {
  height: 180px;
  color: #fff;
}



/* 中间图表 */

.main .home-warp .center {
  float: left;
  width: 752px;
  text-align: center;
  height: 100%;
}

.main .home-warp .center .top {
  width: 100%;
  white-space: nowrap;
}

.main .home-warp .center .top .item {
  width: 136px;
  height: 62.4px;
  border: 1px solid #1A5BCA;
  box-shadow: 0 2px 12px 0 rgba(26, 91, 202, 0.74);
  display: inline-block;
  margin-left: 8px;
  }
.main .home-warp .center .top .item .num {
  font-size: 24px;
  font-weight: 600;
  color: #ffe96f;
  line-height: 33.6px
}
.main .home-warp .center .top .item .text {
  font-size: 12.8px;
  line-height: 17.6px;
  font-weight: 400px;
  color: #cfdcff;
}
/* 右边图表 */
.main .home-warp .right {
  width: 320px;
  height: 100%;
  float: right;
}
.main .home-warp .right .total-chart {
  height: 226px;
  width: 100%;
}

.main .home-warp .right .total-chart #total {
  height: 190px;
  color: #fff;
}

.main .home-warp .right .quality-chart {
  height: 216px;
  width: 100%;
}

.main .home-warp .right .quality-chart #quality {
  height: 190px;
  color: #fff;
}

.main .home-warp .right .waiter-chart {
  height: 236px;
  width: 100%;
}
.main .home-warp .right .waiter-chart #waiter {
  height: 190px;
  color: #fff;
}
</style>
