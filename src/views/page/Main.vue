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
      </div>
      <div class="center"></div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
  import theme from 'common/theme'
  import {service, subsidy} from 'common/echarParam'

  export default {
    name: "Main",
    data() {
      return {
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

        //window.addEventListener("resize", () => { chartService.resize();});
      }
    }
  }
</script>

<style scoped>
.main {
  height: 100%;
  width: 100%;
  color: #fff;
  background-size: cover;
  background-position: 50% center;
  background-repeat: no-repeat;
  background-color: rgb(2, 24, 72);
  background-image: url(~assets/img/common/bg.0da6e92d.png);
  overflow: hidden;
}

.main .header-top {
  width: 100%;
  height: 48px;
  background: url(~assets/img/common/homeTitle.bb741cbd.png) no-repeat;
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
  height: 216px;
  width: 100%;
}
.main .home-warp .left .echart-title h4 {
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


/* 中间图表 */

.main .home-warp .center {
  float: left;
  width: 752px;
  text-align: center;
  height: 100%;
}
.main .home-warp .right {
  width: 320px;
  height: 100%;
  float: right;
}
</style>
