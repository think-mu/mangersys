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
  tooltip: {},
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

export {service, subsidy}