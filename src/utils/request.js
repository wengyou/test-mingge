import Taro from '@tarojs/taro';

export function getJSON(url, data) {
  const token = Taro.getStorageSync('token');
  return Taro.request({
    url: url,
    data: data,
    method: 'GET',
    header: {
      'content-type': 'application/json',
      'token': token
    },
    success(res){
      console.log(res);
    },
    fail: (error) => {
      error.data = {};
      error.data.msg = '请求超时或服务器异常,请检查网络或联系管理员!';
      return Promise.resolve(error)
    }
  });
}

export function postJSON(url, data) {
  const token = Taro.getStorageSync('token');
  const dataJSON = JSON.stringify(data);
  return Taro.request({
    url,
    data: dataJSON,
    method: 'POST',
    header: {
      'content-type':'application/json',
      'token': token
    },
    success(res){
      console.log(res.data)
    },
    fail(res){
      console.log(res)
    }
  });
}
