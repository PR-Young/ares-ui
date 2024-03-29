import request from '@/utils/request'

// 查询流程定义列表
export function listDefinition(query) {
  return request({
    url: '/ares/flowable/definition/list',
    method: 'get',
    params: query
  })
}

// 部署流程实例
export function definitionStart(procDefId, data) {
  return request({
    url: '/ares/flowable/definition/start/' + procDefId,
    method: 'post',
    data: data
  })
}

// 获取流程变量
export function getProcessVariables(taskId) {
  return request({
    url: '/ares/flowable/task/processVariables/' + taskId,
    method: 'get'
  })
}

// 激活/挂起流程
export function updateState(params) {
  return request({
    url: '/ares/flowable/definition/updateState',
    method: 'put',
    params: params
  })
}

// 指定流程办理人员列表
export function userList(query) {
  return request({
    url: '/ares/flowable/definition/userList',
    method: 'get',
    params: query
  })
}

// 指定流程办理组列表
export function roleList(query) {
  return request({
    url: '/ares/flowable/definition/roleList',
    method: 'get',
    params: query
  })
}

// 读取xml文件
export function readXml(deployId) {
  return request({
    url: '/ares/flowable/definition/readXml/' + deployId,
    method: 'get'
  })
}
// 读取image文件
export function readImage(deployId) {
  return request({
    url: '/ares/flowable/definition/readImage/' + deployId,
    method: 'get'
  })
}

// 读取image文件
export function getFlowViewer(procInsId) {
  return request({
    url: '/ares/flowable/task/flowViewer/' + procInsId,
    method: 'get'
  })
}

// 读取xml文件
export function saveXml(data) {
  return request({
    url: '/ares/flowable/definition/save',
    method: 'post',
    data: data
  })
}

// 新增流程定义
export function addDeployment(data) {
  return request({
    url: '/ares/system/deployment',
    method: 'post',
    data: data
  })
}

// 修改流程定义
export function updateDeployment(data) {
  return request({
    url: '/ares/system/deployment',
    method: 'put',
    data: data
  })
}

// 删除流程定义
export function delDeployment(query) {
  return request({
    url: '/ares/flowable/definition/delete/',
    method: 'delete',
    params: query
  })
}

// 导出流程定义
export function exportDeployment(query) {
  return request({
    url: '/ares/system/deployment/export',
    method: 'get',
    params: query
  })
}
