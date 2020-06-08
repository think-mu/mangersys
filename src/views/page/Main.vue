/*
 * @Author: huangzibin
 * @Date: 2020-01-16 18:57:23
 * @Last Modified by: huangzibin
 * @Last Modified time: 2020-06-08 11:53:04
 */

<template>
  <div class="container">
    <header>
      <!-- <h1>数据可视化</h1> -->
    </header>
    <section class="mainbox">
      <div class="column">
        <div class="panel bar">
          <p>养老服务趋势（万次）</p>
          <div class="chart" id="service"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel line">
          <p>年度养老补助占比</p>
          <div class="chart" id="subsidy">
          </div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel pie">
          <p>紧急救助趋势 (次)</p>
          <div class="chart" id="rescue"></div>
          <div class="panel-footer"></div>
        </div>
      </div>
      <div class="column">
        <div class="no">
          <div class="no-hd">
            <ul>
              <li v-for="(item, index) in totalArr" :key="index">{{item.totalNum}}</li>
            </ul>
          </div>
          <div class="no-bd">
            <ul>
              <li v-for="(item, index) in totalArr" :key="index">{{item.totalTitle}}</li>
            </ul>
          </div>
        </div>
        <div class="map">
          <div class="chart" id="gzmap"></div>
        </div>
      </div>
      <div class="column">
        <div class="panel bar">
          <p>老人总量趋势</p>
          <div class="chart" id="total"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel line">
          <p>服务质量满意度</p>
          <div class="chart" id="quality"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel pie1">
          <p>服务人员增长趋势 (人)</p>
          <div class="chart" id="waiter"></div>
          <div class="panel-footer"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script> 
import gzJson from "assets/geo/guangzhou.json"
import theme from "common/theme";
import { service,subsidy, rescue, total, quality, waiter,  gzmap} from "common/echarParam"
  export default {
    name: "Main",
    components: {
    },
    data() {
      return {
        totalArr: [
          {
            totalNum: 227680,
            totalTitle: "年度补贴发放 (万元)"
          },
          {
            totalNum: 64320,
            totalTitle: "年度服务量 (万次)"
          },
          {
            totalNum: 29177,
            totalTitle: "养老服务机构 (个)"
          },
          {
            totalNum: 1003,
            totalTitle: "服务老人数量 (万人)"
          },
          {
            totalNum: 7892,
            totalTitle: "年度呼叫话务量 (万次)"
          }
        ]
      }
    },
    mounted() {
      this.draw()
    },
    methods: {
      draw() {
        this.$echarts.registerTheme("cBlue", theme);
        /* 服务柱形 */
        let chartService = this.$echarts.init(
        document.getElementById("service"),"cBlue"
        );
        chartService.setOption(service);
              /* 补助玫瑰图 */
        let chartSubsidy = this.$echarts.init(
          document.getElementById("subsidy"),
          "cBlue"
        );
        chartSubsidy.setOption(subsidy);

        /* 救助折线图 */
        let chartRescue = this.$echarts.init(
          document.getElementById("rescue"),
          "cBlue"
        );
        chartRescue.setOption(rescue);

        /* 总量柱形图 */
        let chartTotal = this.$echarts.init(
          document.getElementById("total"),
          "cBlue"
        );
        chartTotal.setOption(total);

        /* 满意度饼图 */
        let chartQuality = this.$echarts.init(
          document.getElementById("quality"),
          "cBlue"
        );
        chartQuality.setOption(quality);

        /* 服务人员折线图 */
        let chartWaiter = this.$echarts.init(
          document.getElementById("waiter"),
          "cBlue"
        );
        chartWaiter.setOption(waiter);

        /* 地图 */
      
        this.$echarts.registerMap("gz", gzJson);
        let chartMap = this.$echarts.init(document.getElementById("gzmap"),"cBlue");
        chartMap.setOption(gzmap);

        window.addEventListener("resize",function(){
          chartService.resize()
          chartSubsidy.resize();
          chartRescue.resize();
          chartTotal.resize();
          chartQuality.resize();
          chartWaiter.resize();
          chartMap.resize();
        })
      }
    }
  }
</script>

<style scoped lang="less">

header{
  height: 60px;
  width: 100%;
  height: 48px;
  background: url(~assets/img/common/homeTitle.png) no-repeat;
  background-size: 100% 100%;
}
.container {
  min-width: 960Px;
  width: 100%;
  color: #fff;
  background-size: cover;
  background-position: 50% center;
  background-repeat: no-repeat;
  background-color: rgb(2, 24, 72);
  background-image: url(~assets/img/common/bg.png);
  overflow-y: scroll;
  vertical-align: middle;
  height: 100%;
  @val:17px;
  width: calc(~"100% + @{val}");
  
}
.mainbox {
  // padding: 18px 20px 30px 20px;
  color: #fff;
  display: flex;
  margin: 0 auto 20px auto;
  padding: 10px 10px 0;
  .column{
    flex: 3;
    .panel {
      position: relative;
      height: 250px;
      padding: 0 10px 30px;
      border: 1px solid rgba(70, 68, 68, 0.26);
      margin-bottom: 15px;
      background:rgba(255, 255, 255, 0.089);
      &::before {
        position:absolute;
        top: 0;
        left: 0;
        width: 10px;
        height: 10px;
        border-left: 2px solid #02a6b5;
        border-top: 2px solid #02a6b5;
        content: "";
      }
      &::after {
        position:absolute;
        top: 0;
        right: 0;
        width: 10px;
        height: 10px;
        border-right: 2px solid #02a6b5;
        border-top: 2px solid #02a6b5;
        content: "";
      }
      .panel-footer {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
        &::before {
        position:absolute;
        bottom: 0;
        left: 0;
        width: 10px;
        height: 10px;
        border-left: 2px solid #02a6b5;
        border-bottom: 2px solid #02a6b5;
        content: "";
        }
        &::after {
          position:absolute;
          bottom: 0;
          right: 0;
          width: 10px;
          height: 10px;
          border-right: 2px solid #02a6b5;
          border-bottom: 2px solid #02a6b5;
          content: "";
        }
      }
      p {
        height: 30px;
        color: #fff;
        line-height: 30px;
        font-size: 14px;
        font-weight: 400;
        text-align: center;
      }
      .chart {
        height: 210px;
      }
    }
  }
  .column:nth-child(2) {
    margin: 10px 5px;
    flex: 6;
  }
  
}
.no {
  // height: 100px;
  background:rgba(255, 255, 255, 0.089);
  padding: 10px;
  margin-bottom: 10px;
  &-hd {
    position: relative;
    border: 1px solid rgba(156, 155, 155, 0.315);
    &::before {
      position: absolute;
      height: 10px;
      width: 30px;
      top: 0;
      left: 0;
      border-left: 2px solid #02a6b5;
      border-top: 2px solid #02a6b5;
      content: "";
    }
    &::after {
      position: absolute;
      height: 10px;
      width: 30px;
      bottom: 0;
      right: 0;
      border-bottom: 2px solid #02a6b5;
      border-right: 2px solid #02a6b5;
      content: "";
    }
    ul {
      display: flex;
      li {
        flex: 1;
        line-height: 50px;
        font-size: 40px;
        color: rgb(255, 232, 24);
        text-align: center;
        font-family: 'electronicFont';
        position: relative;
        &::after {
          content: "";
          position: absolute;
          top: 25%;
          right: 0;
          height: 50%;
          width: 1px;
          background-color: rgba(206, 206, 206, 0.336)
        }
      }
    }
  }
  &-bd {
    ul {
      display: flex;
      li {
        flex: 1;
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        text-align: center;
        padding-top: 5px;
      }
    }
  }
}
.map {
  position: relative;
  height: 660px;

  .chart {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 640px;
  }
}

</style>