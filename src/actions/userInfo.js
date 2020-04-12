import Taro from '@tarojs/taro'
import * as constant from '../constants/actionType'
import {getJSON, postJSON} from "../utils/request";
import apiObj from "../constants/api";


//更新用户信息
export const updateUserInfo = args => {
  return async dispatch => {
    let res = await postJSON(apiObj.updateWxInfo, args);
    switch (res.data.error_code) {
      case 0:
        dispatch({
          type: constant.UPDATE_USER_INFO,
        });
        break;
      case -1:
        return Taro.showToast({title: res.data.message});
      case 1:
        return Taro.showToast({title: res.data.message});
      case 2:
        return Taro.showToast({title: res.data.message});
    }
  }
};
//登录
export const onLogin = (code) => {
  return async dispatch => {
    let res = await postJSON(apiObj.login, code);
    let token = res.data.data.token;
    Taro.setStorageSync('token', token);
    switch (res.data.error_code) {
      case 0:
        dispatch({
          type: constant.LOGIN,
          payload: res.data.data
        });
        break;
      case -1:
        return Taro.showToast({title: res.data.message});
      case 1:
        return Taro.showToast({title: res.data.message});
      case 2:
        return Taro.showToast({title: res.data.message});
      default:
        return Taro.showToast({title: "登录失败"})
    }
  }
};
//获取我的消息
export const fetchMyMessage = args => {
  const data = {
    "page": args.page,
    "rows": args.rows,
    "uid": args.uid
  };
  return async dispatch => {
    const res = await getJSON(apiObj.queryUserMsg, data);
    switch (res.data.error_code) {
      case 0:
        dispatch({
          type: constant.FETCH_MY_MESSAGE,
          payload: res.data.data
        });
        break;
      case -1:
        return Taro.showToast({title: res.data.message});
      case 1:
        return Taro.showToast({title: res.data.message});
      case 2:
        return Taro.showToast({title: res.data.message});
      default:
        return Taro.showToast({title: "获取我的消息失败"})
    }
  }
};


