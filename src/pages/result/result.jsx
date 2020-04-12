import Taro, {useEffect} from '@tarojs/taro'
import {View, Text, Button} from "@tarojs/components"
import { AtIcon } from 'taro-ui'
import {connect} from "@tarojs/redux";
import './result.scss'
import * as test from '../../actions/test'

const Result = props => {
  const {result, questionInfo, collectTest, detailTestInfo, userMes, unCollectTest, detailTest, sendIndexFlag} = props;
  console.log(detailTestInfo);
  return(
    <View>
      {
        result.length !== 0 ?<View className='result-container'>
          <View className='result-title'>{result.refer_title}</View>
          <View className='result-star'>
            <AtIcon value='star-2' size='20' color='#F8CE5E' />
            <AtIcon value='star-2' size='20' color='#F8CE5E' />
            <AtIcon value='star-2' size='20' color='#F8CE5E' />
            <AtIcon value='star-2' size='20' color='#F8CE5E' />
            <AtIcon value='star-2' size='20' color='#F8CE5E' />
            <Text className='num'>{questionInfo.test_volume}</Text>
          </View>
          <View className='result-con'>{result.title_value}</View>
          <View className='result-analyse'>
            <View className='analyse-title'>详细分析:</View>
            <View className='analyse-con'>{result.text}</View>
          </View>
          <View className='result-btn'>
            <Button
              className='share-btn'
              openType='share'
            >
              分享
            </Button>
            <Button
              className='more-test-btn'
              onClick={
                () => {
                  sendIndexFlag({
                    indexFlag: true
                  });
                  Taro.navigateTo({url: '../../pages/index/index'})
                }
              }
            >
              查看更多测试
            </Button>
          </View>
          <View
            className='all-test-btn'
            onClick={
              () => {
                Taro.navigateTo({url: '../../pages/myTest/myTest'})
              }
            }
          >
            查看我的测试
          </View>
          {
            detailTestInfo[0].collection ?
              <View
                className='all-test-btn'
                onClick={
                  () => {
                    unCollectTest({
                      "uid": userMes.id,
                      "tidList": [detailTestInfo[0].tid]
                    });
                    setTimeout(() => {
                      detailTest({"tid": detailTestInfo[0].tid, "uid": userMes.id});
                    }, 1000)
                  }
                }
              >已收藏本套测试题</View>:
              <View
                className='all-test-btn'
                onClick={
                  () => {
                    collectTest({
                      "uid": userMes.id,
                      "tid": detailTestInfo[0].tid,
                    });
                    setTimeout(() => {
                      detailTest({"tid": detailTestInfo[0].tid, "uid": userMes.id});
                    }, 1000)
                  }
                }
              >
                收藏本套测试题
              </View>
          }

          <View className='adv'>
            广告
          </View>
        </View>: null
      }
    </View>
  )
};
export default connect(
  state => ({
      result: state.test.resultInfo,
      questionInfo: state.test.questionInfo,
      userMes: state.userInfo.userMes,
      detailTestInfo: state.test.detailTestInfo,
  }),
  dispatch => ({
      collectTest(args) {
        dispatch(test.collectTest(args));
      },
      unCollectTest(args) {
        dispatch(test.unCollectTest(args));
      },
      detailTest(args){
        dispatch(test.fetchDetailTest(args));
      },
    sendIndexFlag(args){
        dispatch(test.sendIndexFlag(args));
    }
  }),
)(Result)
