import Taro from '@tarojs/taro'
import {View, Text, ScrollView, Image} from '@tarojs/components'
import { connect } from '@tarojs/redux'
import * as test from '../../actions/test'
import './myTestItem.scss'

 const MyTestItem = props => {
  const {myTestInfo, collectTest, userMes, unCollectTest, likeTest, unLikeTest, detailTest} = props;
  return(
    <ScrollView>
      {
        myTestInfo.length !== 0 ?
          myTestInfo.map((item) => {
            const time = new Date(item.test_time).toLocaleString();
            return (
              <View
                key={item.test_id}
                className='myTestItem-container'
              >
                <View
                  className='myTestItem-img'
                  onClick={
                    () => {
                      detailTest({"uid": userMes.id, "tid": item.wxTestInfo.tid,});
                      Taro.navigateTo({url: '../../pages/detail/detail'})
                    }
                  }
                >

                </View>
                <View
                  className='myTestItem-wrapper'
                  onClick={
                    () => {
                      detailTest({"uid": userMes.id, "tid": item.wxTestInfo.tid,});
                      Taro.navigateTo({url: '../../pages/detail/detail'})
                    }
                  }
                >
                  <View className='title'>{item.wxTestInfo.title}</View>
                  <View className='num-wrapper'>
                    <View className='clicks'>点击量：{item.wxTestInfo.clicks}</View>
                    <View className='like-num'>点赞量: {item.wxTestInfo.like_num}</View>
                    <View className='favorites'>收藏量：{item.wxTestInfo.favorites}</View>
                  </View>
                  <View className='time'>测试时间：{time}</View>
                </View>
                <View className='like-wrapper'>
                  {
                    item.wxTestInfo.collection ?
                      <View
                        className='collect'
                        onClick={
                          () => {
                            unCollectTest({
                              "uid": userMes.id,
                              "tidList": [item.wxTestInfo.tid]
                            })
                          }
                        }
                      >
                        已收藏
                      </View>:
                      <View
                        className='collect'
                        onClick={
                          () => {
                            collectTest({
                              "uid": userMes.id,
                              "tid": item.wxTestInfo.tid,
                            });
                          }
                        }
                      >
                        收藏
                      </View>
                  }
                  <View className='like'>
                    <Text className='like-num'>{item.wxTestInfo.like_num}</Text>
                    <Image
                      onClick={
                        () => {
                          item.wxTestInfo.like?
                            unLikeTest({
                              "uid": userMes.id,
                              "tid": item.wxTestInfo.tid,
                            }):
                            likeTest({
                              "uid": userMes.id,
                              "tid": item.wxTestInfo.tid,
                            })
                        }
                      }
                      className='zan' src={item.wxTestInfo.like?require('../../assets/img/like_zan.png'):require('../../assets/img/zan.png')}
                    />
                  </View>
                </View>

              </View>
            )
          }): null
      }
    </ScrollView>
  )
};
export default connect(
  state => ({
      myTestInfo: state.test.myTestInfo,
      userMes: state.userInfo.userMes,
    detailTestInfo: state.test.detailTestInfo,
  }),
  dispatch => ({
      collectTest(args) {
        dispatch(test.collectTest(args))
      },
      unCollectTest(args) {
        dispatch(test.unCollectTest(args));
      },
      likeTest(args){
        dispatch(test.likeTest(args));
      },
      unLikeTest(args) {
        dispatch(test.unLikeTest(args));
      },
      detailTest(args) {
        dispatch(test.fetchDetailTest(args))
      }
  })
)(MyTestItem);
