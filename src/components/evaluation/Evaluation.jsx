import Taro, {useEffect, useState, useRef} from '@tarojs/taro'
import {connect} from "@tarojs/redux";
import {View, Button} from "@tarojs/components";
import * as comment from "../../actions/comment"
import './evaluation.scss'
import Comment from '../../components/comment/comment'

const Evaluation = props => {
  const { commentInfo, sendCommentFlag} = props;
  return(
    <View className='eval-container'>
      <View className='eval-wrapper'>
        <View className='eval-title'>用户评价</View>
        <View
          className='eval-write'
          onClick={
            () => {
              sendCommentFlag({"flag": false})
            }
          }
        >
          发布评论
        </View>
      </View>
      <View className='eval-content-wrapper'>
        {
          commentInfo.length !== 0 ?<Comment />:
            <View className='comment-none'>现在还没有评论呢...</View>
        }
      </View>
    </View>
  )
};

export default connect(
  state => ({
    detailTestInfo: state.test.detailTestInfo,
    userMes: state.userInfo.userMes,
    token: state.userInfo.token,
    commentInfo: state.comment.commentInfo,
  }),
  dispatch => ({
    sendCommentFlag(args) {
      dispatch(comment.sendCommentFlag(args))
    }
  })
)(Evaluation);
