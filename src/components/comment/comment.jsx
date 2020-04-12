import Taro, {useEffect} from '@tarojs/taro'
import {Image, Text, View, ScrollView} from "@tarojs/components";
import { AtIcon } from 'taro-ui'
import {connect} from "@tarojs/redux";
import './comment.scss'
import * as comment from "../../actions/comment";

const Comment = props => {
  const {commentInfo, likeComment, userMes, token, unLikeComment, fetchNextComment, commentPage, detailTestInfo, commentTotal} = props;
  const commentList = [...commentInfo];
  return(
    <View>
      {
        commentList.map((item, index) => {
          const time = new Date(item.add_time);
          const date = time.toLocaleString();
          return(
            <View key={index} className='comment-container'>
              <View className='comment-img'>

              </View>
              <View className='comment-con-wrapper'>
                <View className='comment-name'>
                  <View className='name'>{item.nickname}</View>
                  <View className='more-wrapper'>
                    <Image
                      className='more'
                      src={require('../../assets/img/more.png')}
                    >
                    </Image>
                    <View className='more-item'>举报</View>
                  </View>

                </View>
                <View className='comment-con'>{item.content}</View>
                <View className='comment-time'>
                  <View className='time'>{date}</View>
                  <View className='like'>
                    <Text className='like-num'>{item.like_num}</Text>
                    <Image
                      onClick={
                        () => {
                          token?(!item.like?likeComment({
                            "uid": userMes.id,
                            "cid": item.cid,
                          }): unLikeComment({
                              "uid": userMes.id,
                              "cid": item.cid,
                            })):
                            Taro.showToast({title: '请登录后再点赞'});
                        }
                      }
                      className='zan' src={item.like?require('../../assets/img/like_zan.png'):require('../../assets/img/zan.png')}
                    />
                  </View>
                </View>
              </View>
            </View>
          )
        })
      }
      {
          commentList.length < commentTotal?
          <View
            className='comment-end'
            onClick={
              () => {
                fetchNextComment({
                  "page": commentPage+1,
                  "rows": 10,
                  "tid": detailTestInfo[0].tid
                })
              }
            }
          >
            点击加载更多评论，一共{commentTotal}条评论
            <AtIcon value='chevron-down' size='25' color='#888' />
          </View>:
          <View className='comment-end'>没有更多评论了</View>
      }
    </View>
  )
};
export default connect(
  state => ({
    commentInfo: state.comment.commentInfo,
    commentPage: state.comment.commentPage,
    userMes: state.userInfo.userMes,
    token: state.userInfo.token,
    zanFlag: state.comment.zanFlag,
    detailTestInfo: state.test.detailTestInfo,
    commentTotal: state.comment.commentTotal
  }),
  dispatch => ({
    likeComment(args) {
      dispatch(comment.likeComment(args));
    },
    unLikeComment(args) {
      dispatch(comment.unLikeComment(args));
    },
    fetchNextComment(args){
      dispatch(comment.fetchNextComment(args));
    }
  })
)(Comment)
