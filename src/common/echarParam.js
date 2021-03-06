/*
 * @Author: huangzibin
 * @Date: 2020-01-16 18:58:58
 * @Last Modified by: huangzibin
 * @Last Modified time: 2020-06-08 11:47:57
 */
import gzJson from "assets/geo/guangzhou.json"

const service = {
  legend: {
    right: 10,
    itemWidth: 15,
    itemHeight: 10,
    textStyle: {
      fontSize: 9,
      lineHeight: 12
    }
  },
  grid: {
    left: '0%',
    top: '10%',
    right: '0%',
    bottom: '4%',
    containLabel: true
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: 'shadow'
    }
  },
  dataset: {
    source: [
    ['service', '机构服务', '居家服务', '社区服务'],
    ['2月', 43, 85, 243],
    ['3月', 83, 73, 55],
    ['4月', 86, 65, 82],
    ['5月', 72, 53, 239],
    ['6月', 72, 53, 39],
    ['7月', 72, 53, 39],
]
  },
  xAxis: {
    type: 'category',
    axisLabel: {
      interval: 0,
    } 
  },
  yAxis: {
    axisLabel: {
      interval: 0
    } 
  },
  series: [
    {type: 'bar',
    barWidth:7,
    /* itemStyle : {
      normal: {
        color: () => {
          return new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
            offset: 0,
            color: '#e7da31'
            }, {
            offset: 1,
            color: '#3eb89f'
            }
         ])
        }
      }
    },  */

    },
    {type: 'bar',
    barWidth:7
    },
    {type: 'bar',
    barWidth:7
    },
  ]
}

const subsidy = {
  
  tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
      left: 'center',
      top: 'bottom',
      data: ['床位补助', '运营补助', '助参补助', '其他'],
      itemWidth: 15,
      itemHeight: 10,
      textStyle: {
      fontSize: 9,
      lineHeight: 12
    }
  },

  series: [
      
      {
          name: '面积模式',
          type: 'pie',
          radius: [12, 45],
          roseType: 'area',
          data: [
              {value: 40, name: '床位补助'},
              {value: 30, name: '运营补助'},
              {value: 20, name: '助参补助'},
              {value: 10, name: '其他'},
            
          ]
      }
  ]
}; 

const rescue = {
  tooltip: {
      trigger: 'axis',
      axisPointer: {
          type: 'cross',
          label: {
              backgroundColor: '#6a7985'
          }
      }
  },
  legend: {
      data: ['误报', '救助响应'],
      left: 'right',
      itemWidth: 15,
      itemHeight: 10,
      textStyle: {
        fontSize: 9,
        lineHeight: 12
      }
      
  },

  grid: {
      left: '0%',
      right: '8%',
      bottom: '3%',
      containLabel: true
  },
  xAxis: [
      {
          type: 'category',
          boundaryGap: false,
          data: ['2019Q1', '2019Q2', '2019Q3', '2019Q4']
      }
  ],
  yAxis: [
      {
          type: 'value'
      }
  ],
  series: [
      {
          name: '误报',
          type: 'line',
          stack: '总量',
          label: {
              normal: {
                  show: true,
                  position: 'top'
              }
          },
          areaStyle: {},
          data: [281, 265, 252, 211]
      },
     
      {
          name: '救助响应',
          type: 'line',
          stack: '总量',
          label: {
              normal: {
                  show: true,
                  position: 'top'
              }
          },
          areaStyle: {},
          data: [1829, 1669, 1789, 2012]
      }
  ]
};

const total = {
  legend: {
    right: 10,
    itemWidth: 15,
    itemHeight: 10,
    textStyle: {
      fontSize: 9,
      lineHeight: 12
    }
  },
  tooltip: {},
  dataset: {
    source: [
    ['service', '男', '女'],
    ['2月', 43, 208],
    ['3月', 83, 73],
    ['4月', 86, 65],
    ['5月', 192, 53],
    ['6月', 72, 53],
    ['7月', 72, 213],
]
  },
  xAxis: {
    type: 'category',
    axisLabel: {
      interval: 0,
    } 
  },
  yAxis: {
    axisLabel: {
      interval: 0
    } 
  },
  series: [
    {type: 'bar',
    barWidth:7
    },
    {type: 'bar',
    barWidth:7
    }
  ]
}

const quality = {
  tooltip: {},
  
  radar: {
      // shape: 'circle',
      name: {
          textStyle: {
              color: '#fff',
              padding: [1, 1]
          }
      },
      radius: 38,
      indicator: [
          { name: 'A生活', max: 100},
          { name: 'B助餐', max: 100},
          { name: 'C健康', max: 100},
          { name: 'D医疗', max: 100},
          { name: 'E救助', max: 100},
          { name: 'F关爱', max: 100}
      ],
      center: ['30%', '40%'],
  },
  series: [
    {
      name: '满意度',
      type: 'radar',
      // areaStyle: {normal: {}},
      data: [
         {
              value: [90, 80, 80, 85, 90, 70],
              
         }
      ]
    },
    {
      name: '总分数',
      type: 'pie',      
      radius: ['25%', '45%'],
      center: ['80%', '40%'],
      avoidLabelOverlap: true,
      label: {
          normal: {
              show: true,
              position: 'center',
              //  formatter: '{d}%',
              formatter: '{b}',
              textStyle: {
                  fontSize: '12',
                  fontWeight: 'bold',
                 
              }
          },   
      },
      labelLine: {
          normal: {
              show: false
          }
      },
      data: [
          {value: 335,name:"86%"},
          {value: 70,}
      ]
    }
  ]
};

const waiter = {
  tooltip: {
      trigger: 'axis',
      axisPointer: {
          type: 'cross',
          label: {
              backgroundColor: '#6a7985'
          }
      }
  },
  legend: {
      data: ['误报', '救助响应'],
      left: 'right',
      itemWidth: 15,
      itemHeight: 10,
      textStyle: {
        fontSize: 9,
        lineHeight: 12
      }
      
  },

  grid: {
      left: '0%',
      right: '8%',
      bottom: '3%',
      containLabel: true
  },
  xAxis: [
      {
          type: 'category',
          boundaryGap: false,
          data: ['2月', '3月', '4月', '5月', '6月', '7月']
      }
  ],
  yAxis: [
      {
          type: 'value'
      }
  ],
  series: [
      {
          name: '工作人员',
          type: 'line',
          stack: '总量',
          label: {
              normal: {
                  show: true,
                  position: 'top'
              }
          },
          areaStyle: {},
          data: [5120, 6687, 7189, 7721, 8120, 8632]
      },
     
      {
          name: '志愿者',
          type: 'line',
          stack: '总量',
          label: {
              normal: {
                  show: true,
                  position: 'top'
              }
          },
          areaStyle: {},
          data: [41129, 42118, 43332, 44529, 45127, 46810]
      }
  ]
};

const gzmap = {
  grid: {
    left: '0%',
    top: '10%',
    right: '0%',
    bottom: '4%',
    containLabel: true
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b}<br/>{c}'
  },
  // legend: {
  //   show: false,
  //   type: 'plain'
  // },
  series: [
    {
      type: 'map',
      roam: false,
      map: 'gz',
      center: [113.465367,23.28559],
      aspectScale: 1,
      zoom: 1.2,
      data: [
        {name:"荔湾区", value: [113.243038,23.124943]},
        {name:"海珠区", value: [113.262008,23.103131]},
        {name:"越秀区", value: [113.280714,23.125624]},
        {name:"天河区", value: [113.335367,23.13559]},
        {name:"黄埔区", value: [113.450761,23.103239]},
        {name:"白云区", value: [113.262831,23.162281]},
        {name:"番禺区", value: [113.364619,22.938582]},
        {name:"南沙区", value: [113.53738,22.794531]},
        {name:"从化区", value: [113.587386,23.545283]},
        {name:"花都区", value: [113.211184,23.39205]},
        {name:"增城区", value: [113.829579,23.290497]},
       ],
       showLegendSymbol:true,
     
      label: {
        show: true,
        color: '#fff',
        fontSize: 10,
      },
      itemStyle: {
        areaColor: '#0E4287',
        borderColor: '#0378DA'
      },
      
      emphasis: {
        label: {
          color: "#000"
        }
      },
      
      
      
    }
  ]
}

export {service, subsidy, rescue, total, quality, waiter, gzmap}