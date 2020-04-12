import Taro from '@tarojs/taro'
import * as constant from '../constants/actionType'
import apiObj from "../constants/api";
import {postJSON, getJSON} from "../utils/request";
import {getExtConfig} from "@tarojs/taro-quickapp/src/api/unsupportedApi";

//获取类目
export const fetchCatalog = () => {
  return async dispatch => {
    const res = await getJSON(apiObj.queryCatalog);
    switch (res.data.error_code) {
      case 0:
        dispatch({
          type: constant.FETCH_CATALOG,
          payload: res.data.data
        });
        break;
      case -1:
        return Taro.showToast({title: res.data.message});
      case 1:
        return Taro.showToast({title: res.data.message});
      case 2:
        return Taro.showToast({title: res.data.message});
      case 500:
        return Taro.showToast({title: res.data.message});
      default:
        return Taro.showToast({title: '类目请求失败'});
    }
  }
};

//获取测试题
export const fetchTest = (args) => {
  return async dispatch => {
    let res = await postJSON(apiObj.queryTestInfo, args);
    switch (res.data.error_code) {
      case 0:
        dispatch({
          type: constant.FETCH_TEST,
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
        return Taro.showToast({title: "套题请求失败"})
    }
  }
};

//获取下一页测试题
export const fetchNextTest = args => {
  return async dispatch => {
    const res = await postJSON(apiObj.queryTestInfo, args);
    switch (res.data.error_code) {
      case 0:
        res.data.data.items?
        dispatch({
          type: constant.FETCH_NEXT_TEST,
          payload: res.data.data
        }): null;
        break;
      case -1:
        return Taro.showToast({title: res.data.message});
      case 1:
        return Taro.showToast({title: res.data.message});
      case 2:
        return Taro.showToast({title: res.data.message});
      default:
        return Taro.showToast({title: "套题请求失败"})
    }
  }
};

//获取测试题详情
export const fetchDetailTest = args => {
  return async dispatch => {
    const res = await postJSON(apiObj.queryTestInfo, args);
    switch (res.data.error_code) {
      case 0:
        dispatch({
          type: constant.FETCH_DETAIL_TEST,
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
        return Taro.showToast({title: "测试题详情获取失败"})
    }
  }
};

//查询具体的测试题内容
export const fetchQuestionInfo = args => {
  return async dispatch => {
    const res = await getJSON(apiObj.queryQuestionInfo, args);
    switch (res.data.error_code) {
      case 0:
        dispatch({
          type: constant.FETCH_QUESTION_INFO,
          payload: res.data.data,
          beginTime: args.beginTime
        });
        break;
      case -1:
        return Taro.showToast({title: res.data.message});
      case 1:
        return Taro.showToast({title: res.data.message});
      case 2:
        return Taro.showToast({title: res.data.message});
      default:
        return Taro.showToast({title: "测试题内容获取失败"})
    }
  }
};
//查询下一道题
export const fetchNextQuestion = args => {
  return async dispatch => {
    const res = await getJSON(apiObj.queryQuestionInfo, args);
    switch (res.data.error_code) {
      case 0:
        dispatch({
          type: constant.FETCH_NEXT_QUESTION,
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
        return Taro.showToast({title: "测试题内容获取失败"})
    }
  }
};
//获取测试结果页面
export const fetchResult = args => {
  return async dispatch => {
    const res = await postJSON(apiObj.testResult, args);
    switch (res.data.error_code) {
      case 0:
        dispatch({
          type: constant.FETCH_RESULT,
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
        return Taro.showToast({title: "测试题内容获取失败"})
    }
  }
};
//收藏本套测试题
export const collectTest = args => {
  return async dispatch => {
    const res = await postJSON(apiObj.collectTest, args);
    switch (res.data.error_code) {
      case 0:
        dispatch({
          type: constant.COLLECT_TEST
        });
        return Taro.showToast({title: "收藏成功"});
      case -1:
        return Taro.showToast({title: res.data.message});
      case 1:
        return Taro.showToast({title: res.data.message});
      case 2:
        return Taro.showToast({title: res.data.message});
      default:
        return Taro.showToast({title: "收藏测试题失败"})
    }
  }
};
//取消收藏本套测试题
export const unCollectTest = args => {
  return async dispatch => {
    const res = await postJSON(apiObj.cancelTest, args);
    switch (res.data.error_code) {
      case 0:
        dispatch({
          type: constant.UN_COLLECT_TEST
        });
        return Taro.showToast({title: "取消收藏成功"});
      case -1:
        return Taro.showToast({title: res.data.message});
      case 1:
        return Taro.showToast({title: res.data.message});
      case 2:
        return Taro.showToast({title: res.data.message});
      default:
        return Taro.showToast({title: "取消收藏测试题失败"})
    }
  }
};

//查询用户已购买套题
export const fetchPurchasedTest = args => {
  return async dispatch => {
    const res =  await getJSON(apiObj.purchasedTest, args);
    switch (res.data.error_code) {
      case 0:
        dispatch({
          type: constant.FETCH_PURCHASED,
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
        return Taro.showToast({title: "已购买套题获取失败"})
    }
  }
};

//获取我的测试题
export const fetchMyTest = args => {
  return async dispatch => {
    const res = await getJSON(apiObj.queryTestedInfo, args);
    switch (res.data.error_code) {
      case 0:
        dispatch({
          type: constant.FETCH_MY_TEST,
          payload: res.data.data
        });
        break;
      case -1:
        dispatch({
          type: constant.FETCH_TEST_FAIL,
        });
        return Taro.showToast({title: "您还没有登录"});
      case 1:
        dispatch({
          type: constant.FETCH_TEST_FAIL,
        });
        return Taro.showToast({title: res.data.message});
      case 2:
        dispatch({
          type: constant.FETCH_TEST_FAIL,
        });
        return Taro.showToast({title: res.data.message});
      default:
        dispatch({
          type: constant.FETCH_TEST_FAIL,
        });
        return Taro.showToast({title: "我的测试题获取失败"})
    }
  }
};

//测试题点赞
export const likeTest = args => {
  return async dispatch => {
    const res = await postJSON(apiObj.likeTest, args);
    switch (res.data.error_code) {
      case 0:
        dispatch({
          type: constant.LIKE_TEST
        });
        break;
      case -1:
        return Taro.showToast({title: res.data.message});
      case 1:
        return Taro.showToast({title: res.data.message});
      case 2:
        return Taro.showToast({title: res.data.message});
      default:
        return Taro.showToast({title: "测试题点赞失败"})
    }
  }
};
//取消测试题点赞
export const unLikeTest = args => {
  return async dispatch => {
    const res = await postJSON(apiObj.unlikeTest, args);
    switch (res.data.error_code) {
      case 0:
        dispatch({
          type: constant.UN_LIKE_TEST
        });
        break;
      case -1:
        return Taro.showToast({title: res.data.message});
      case 1:
        return Taro.showToast({title: res.data.message});
      case 2:
        return Taro.showToast({title: res.data.message});
      default:
        return Taro.showToast({title: "测试题点赞失败"})
    }
  }
};

export const sendIndexFlag = args => {
  return dispatch => {
    dispatch({
      type: constant.SEND_INDEX_FLAG,
      flag: args
    })
  }
};
export const sendCatalog = args => {
  return dispatch => {
    dispatch({
      type: constant.SEND_CATALOG,
      catalogValue: args.catalogValue
    })
  }
};

//测试题支付
export const payTest = args => {
  return async dispatch => {
    const res = await postJSON(apiObj.payTest, args);
    switch (res.data.error_code) {
      case 0:
        dispatch({
          type: constant.PAY_TEST,
          payload: res.data.data
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

//vip支付
export const payVIP = args => {
  return async dispatch => {
    const res = await postJSON(apiObj.payVIP, args);
    switch (res.data.error_code) {
      case 0:
        dispatch({
          type: constant.PAY_VIP,
          payload: res.data.data
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
