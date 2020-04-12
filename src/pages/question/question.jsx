import Taro, { useState, useEffect} from '@tarojs/taro'
import {Image, Video, View, Audio} from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './question.scss'
import * as test from '../../actions/test'

const Question = props => {
    const {questionInfo, fetchNextQuestion, detailTestInfo, fetchResult, userMes, beginTime, questionTime} = props;
    const [answer, setAnswer] = useState([]);
    const [value, setValue] = useState(0);
    const [timeConsume, setTimeConsume] = useState(0);
    let arr = Object.keys(questionInfo);
    useEffect(() => {
      arr.length !== 0?setAnswer([...questionInfo.answer]): null;
    }, [questionInfo]);
    return(
      <View style={{background: '#F5F5F5', minHeight: '100vh'}}>
        <View className='question-container'>
          <View className='question-content'>
            <View className='question-title'>{questionInfo.content}</View>
            {
              questionInfo.image.length !== 0 ?
                questionInfo.image.map((url, index) => {
                  return (
                    <View key={index} className='question-image'>
                      <Image src={url} />
                    </View>
                  )
                }): null
            }
            {
              questionInfo.video.length !== 0 ?
                questionInfo.image.map((url, index) => {
                  return (
                    <View key={index} className='question-video'>
                      <Video src={url} />
                    </View>
                  )
                }): null
            }
            {
              questionInfo.audio.length !== 0 ?
                questionInfo.image.map((url, index) => {
                  return (
                    <View key={index} className='question-audio'>
                      <Audio src={url} />
                    </View>
                  )
                }): null
            }
            <View className='question-option'>
              {
                arr.length !== 0?
                answer.map((item, index) => {
                  return(
                    <View
                      key={index}
                      className='option-item'
                      onClick={
                        () => {
                          const endTime = new Date().getTime();
                          const time = Math.round((endTime - beginTime)%1000);
                          setTimeConsume(time);
                          setValue(value + item.value);
                          questionInfo.type === 2?
                            (item.refer !==-1 ? fetchNextQuestion({
                              "tid": detailTestInfo[0].tid,
                              "order": item.refer
                            }):fetchResult({
                              "uid": userMes.id,
                              "tid": detailTestInfo[0].tid,
                              "answerOrder": item.answer,
                              "time_consume": timeConsume
                            })) : null;
                          questionInfo.type === 3?
                            (questionInfo.order === questionInfo.num ? fetchResult({
                              "uid": userMes.id,
                              "tid": detailTestInfo[0].tid,
                              "value": value,
                              "time_consume": timeConsume
                            }):fetchNextQuestion({
                              "tid": detailTestInfo[0].tid,
                              "order": (questionInfo.order+1)
                            })) : null;
                          (questionInfo.type === 2 && item.refer === -1) || ( questionInfo.type === 3 && questionInfo.order === questionInfo.num)?
                            Taro.navigateTo({url: '../../pages/result/result'}): null;
                        }
                      }
                    >
                      {item.text}
                    </View>
                  )
                }): null
              }
            </View>
          </View>
        </View>
      </View>
    )
  };
export default connect(
  state => ({
    questionInfo: state.test.questionInfo,
    detailTestInfo: state.test.detailTestInfo,
    userMes: state.userInfo.userMes,
    beginTime: state.test.beginTime,
    questionTime: state.test.questionTime
  }),
  dispatch => ({
    fetchNextQuestion(args) {
      dispatch(test.fetchNextQuestion(args))
    },
    fetchResult(args) {
      dispatch(test.fetchResult(args));
    }
  })
)(Question)
