import Taro, {useEffect, useState} from '@tarojs/taro'
import { connect } from '@tarojs/redux';
import {View, Text, Button, Image} from "@tarojs/components";
import Evaluation from "../../components/evaluation/Evaluation";
import * as test from '../../actions/test'
import * as comment from "../../actions/comment"
import './detail.scss'
import {AtTextarea} from "taro-ui";

const Detail = (props) => {
  const {
    detailTestInfo,
    fetchQuestionInfo,
    fetchComment,
    time,
    userMes,
    commentFlag,
    publishComment,
    sendCommentFlag,
    payTest,
  } = props;
  const detailTest = [...detailTestInfo];
  const [content , setContent] = useState('');
  useEffect(() => {
    detailTestInfo.length !== 0 ?
      fetchComment({"page": 1, "rows": 10, "tid": detailTest[0].tid,"uid": userMes.id}): null
  }, [time, detailTestInfo]);
  return (
    <View>
      <View className='detail-container' style={commentFlag?{}:{display: "none"}}>
        <Image className='detail-img' src={detailTest.length ?(detailTest[0].cover_image? detailTest[0].cover_image:require('../../assets/img/banner2.jpg')): null} />
        <View className='detail-title'>{detailTest[0].title}</View>
        <View className='detail-wrapper'>
          <Text className='detail-item'>{detailTest[0].num}题</Text>
          <Text className='detail-item line'>2分钟</Text>
          <Text className='detail-item'>{detailTest[0].test_volume}人测过</Text>
        </View>
        <Text className='detail-content'>
          {detailTest[0].introduction}
        </Text>
        <View className='tag-wrapper'>
          <View className='tag-item'>
            <Image className='green-tag' src={require('../../assets/img/green-tag.png')} />
            <Text className='tag-text'>成熟度</Text>
          </View>
          <View className='tag-item'>
            <Image className='green-tag' src={require('../../assets/img/green-tag.png')} />
            <Text className='tag-text'>多维度</Text>
          </View>
          <View className='tag-item'>
            <Image className='green-tag right' src={require('../../assets/img/green-tag.png')} />
            <Text className='tag-text'>专业</Text>
          </View>
        </View>
        {
          detailTest[0].is_free === 0?
            <View
              className='test-btn'
              onClick={
                () => {
                  const beginTime = new Date().getTime();
                  fetchQuestionInfo({"tid": detailTest[0].tid, "order": 1, beginTime});
                  Taro.navigateTo({
                    url: '../../pages/question/question',
                  })
                }
              }
            >
              开始测试
            </View>:
            <View
              className='test-btn-purchase'
              onClick={
                () => {payTest({"tid": detailTest[0].tid, "uid": userMes.id})}
              }
            >
              我要购买 {detailTest[0].price}￥
            </View>
        }
        <View className='divide-line' />
        <Evaluation />
      </View>
      <View className={commentFlag ? 'hide': 'text-con'} style={commentFlag? {display: 'none'}: {}}>
        <View className='wrapper'>
          <View
            className='cancel'
            onClick={
              () => {
                sendCommentFlag({"flag": true});
              }
            }
          >
            取消
          </View>
          <View
            className='title'
            onClick={
              () => {
                content.length > 0 ? publishComment({
                  "uid": userMes.id,
                  "tid": detailTest[0].tid,
                  "content": content,
                }): Taro.showToast({title: '评论不能为空'});
                sendCommentFlag({"flag": true});
                setContent('');
              }
            }
          >
            发布
          </View>
        </View>
        <AtTextarea
          value={content}
          placeholder='友善的评论是交流的起点...'
          onChange={
            (e) => {
              setContent(e.target.value)
            }
          }
          height={600}
          className={commentFlag?'hide':'text-input'}
        />
      </View>
    </View>
  )
};
export default connect(
  state => ({
      detailTestInfo: state.test.detailTestInfo,
      token: state.userInfo.token,
      time: state.comment.time,
      userMes: state.userInfo.userMes,
      commentFlag: state.comment.commentFlag
  }),
  dispatch => ({
      fetchQuestionInfo(args){
        dispatch(test.fetchQuestionInfo(args))
      },
      fetchComment(args) {
        dispatch(comment.fetchComment(args))
      },
      publishComment(args) {
        dispatch(comment.publishComment(args));
      },
      sendCommentFlag(args) {
        dispatch(comment.sendCommentFlag(args))
      },
      payTest(args) {
          dispatch(test.payTest(args))
      }
  })
)(Detail);
