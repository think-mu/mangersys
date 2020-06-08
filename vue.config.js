/*
 * @Author: huangzibin
 * @Date: 2020-01-10 17:01:46
 * @Last Modified by: huangzibin
 * @Last Modified time: 2020-06-08 10:06:12
 */

module.exports = {
  css: {
    loaderOptions: {
        postcss: {
            plugins: [
                require('postcss-pxtorem')({
                    rootValue : 64, // 换算的基数
                    // selectorBlackList  : ['weui','mu'], // 忽略转换正则匹配项
                    propList   : ['*'],
                }),
            ]
        }
    }
  }, 
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}