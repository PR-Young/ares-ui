import request from '@/utils/request'

// 查询字典数据列表
export function listData(query) {
  return request({
    url: '/ares/system/dict/data/list',
    method: 'get',
    params: query
  })
}

// 查询字典数据详细
export function getData(dictCode) {
  return request({
    url: '/ares/system/dict/data/' + dictCode,
    method: 'get'
  })
}

// 根据字典类型查询字典数据信息
export function getDicts(dictType) {
  return request({
    url: '/ares/system/dict/data/dictType/' + dictType,
    method: 'get'
  })
}

export function editData(data) {
  return request({
    url: '/ares/system/dict/data/edit',
    method: 'post',
    data: data
  })
}


// 删除字典数据
export function delData(dictCode) {
  return request({
    url: '/ares/system/dict/data/' + dictCode,
    method: 'delete'
  })
}

// 导出字典数据
export function exportData(query) {
  return request({
    url: '/system/dict/data/export',
    method: 'get',
    params: query
  })
}
