import Taro from '@tarojs/taro'
import * as constant from '../constants/actionType'
import {getJSON, postJSON} from "../utils/request";
import apiObj from "../constants/api";

//获取评论
export const fetchComment = args => {
  return async dispatch => {
    const res = await postJSON(apiObj.queryCommentInfo,args);
    switch (res.data.error_code) {
      case 0:
        dispatch({
          type: constant.FETCH_COMMENT,
          payload: res.data.data
        });
        break;
      case -1:
        dispatch({
          type: constant.FETCH_COMMENT_FAIL
        });
        return Taro.showToast({title: res.data.message});
      case 1:
        dispatch({
          type: constant.FETCH_COMMENT_FAIL
        });
        return Taro.showToast({title: res.data.message});
      case 2:
        dispatch({
          type: constant.FETCH_COMMENT_FAIL
        });
        return Taro.showToast({title: res.data.message});
      default:
        dispatch({
          type: constant.FETCH_COMMENT_FAIL
        });
        return Taro.showToast({title: res.data.message})
    }
  }
};
//获取下一页评论
export const fetchNextComment = args => {
  return async dispatch => {
    const res = await postJSON(apiObj.queryCommentInfo, args);
    switch (res.data.error_code) {
      case 0:
        dispatch({
          type: constant.FETCH_NEXT_COMMENT,
          payload: res.data.data
        });
        break;
      case -1:
        dispatch({
          type: constant.FETCH_COMMENT_FAIL
        });
        return Taro.showToast({title: res.data.message});
      case 1:
        dispatch({
          type: constant.FETCH_COMMENT_FAIL
        });
        return Taro.showToast({title: res.data.message});
      case 2:
        dispatch({
          type: constant.FETCH_COMMENT_FAIL
        });
        return Taro.showToast({title: res.data.message});
      default:
        dispatch({
          type: constant.FETCH_COMMENT_FAIL
        });
        return Taro.showToast({title: res.data.message})
    }
  }
}

//发表评论
export const publishComment = args => {
  return async dispatch => {
    const res = await postJSON(apiObj.comment, args);
    switch (res.data.error_code) {
      case 0:
        dispatch({
          type: constant.PUBLISH_COMMENT,
        });
        return Taro.showToast({title: '发表成功'});
      case -1:
        return Taro.showToast({title: res.data.message});
      case 1:
        return Taro.showToast({title: res.data.message});
      case 2:
        return Taro.showToast({title: res.data.message});
      default:
        return Taro.showToast({title: '发表失败'});
    }
  }
};

export const sendCommentFlag = (args) => {
  console.log('1');
  return dispatch => {
    dispatch({
      type: constant.SEND_COMMENT_FLAG,
      payload: args.flag
    })
  }
};

//点赞评论
export const likeComment = args => {
  return async dispatch => {
    const res = await postJSON(apiObj.likeComment, args);
    switch (res.data.error_code) {
      case 0:
        dispatch({
          type: constant.LIKE_COMMENT
        });
        return Taro.showToast({title: '点赞成功'});
      case -1:
        return Taro.showToast({title: res.data.message});
      case 1:
        return Taro.showToast({title: res.data.message});
      case 2:
        return Taro.showToast({title: res.data.message});
      default:
        return Taro.showToast({title: '点赞失败'});
    }
  }
};

//取消点赞评论
export const unLikeComment = args => {
  return async dispatch => {
    const res = await postJSON(apiObj.unlikeComment, args);
    switch (res.data.error_code) {
      case 0:
        dispatch({
          type: constant.UN_LIKE_COMMENT
        });
        return Taro.showToast({title: '取消点赞成功'});
      case -1:
        return Taro.showToast({title: res.data.message});
      case 1:
        return Taro.showToast({title: res.data.message});
      case 2:
        return Taro.showToast({title: res.data.message});
      default:
        return Taro.showToast({title: '取消点赞失败'});
    }
  }
};

