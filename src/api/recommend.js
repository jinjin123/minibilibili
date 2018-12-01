// 推荐api
import jsonp from '../assets/js/jsonp'
import { options, commonParams } from './config'

export function getSliderList() {
  let url = 'https://api.bilibili.com/x/web-show/res/loc'

  const data = Object.assign({}, commonParams, {
    pf: 7,
    id: 1695
  })

  return jsonp(url, data, options)
}

export function getRanking() { // 排名
  let url = 'https://api.bilibili.com/x/web-interface/dynamic/index'
  const data = Object.assign({}, commonParams, {
  })
  return jsonp(url, data, options)
}

export function getBillBoard() {
  let url = 'https://api.bilibili.com/archive_rank/getarchiverankbypartion'

  const data = Object.assign({}, commonParams, {
    tid: 168, // 国产相关
    pn: 1
  })

  return jsonp(url, data, options)
}
