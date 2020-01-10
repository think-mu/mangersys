/*
 * @Author: huangzibin
 * @Date: 2020-01-10 15:26:40
 * @Last Modified by: huangzibin
 * @Last Modified time: 2020-01-10 15:30:29
 * 首页数据请求
 */

import {request} from "./request";

export function getHomeMultidata() {
  return request({
    url: '/'
  })
}