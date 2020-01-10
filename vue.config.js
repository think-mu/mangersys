/*
 * @Author: huangzibin
 * @Date: 2020-01-10 17:01:46
 * @Last Modified by: huangzibin
 * @Last Modified time: 2020-01-10 17:01:48
 */

module.exports = {
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