import Taro from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import * as test from '../../actions/test'
import './testList.scss'

const TestList = props => {
    const {testInfo, detailTest, fetchNextTestInfo, testPage, userMes, testTotal} = props;
    const testInfoList = [...testInfo];
    const arr = Object.keys(userMes);
   return(
     <ScrollView
       style={{minHeight: '100vh'}}
       scrollY='true'
       onScrollToLower={
         () => {
           userMes?(testPage&&testTotal < testInfoList.length?fetchNextTestInfo({
             "uid": userMes.id,
             "page": testPage+1,
             "rows": 10
           }): null):(testPage&&testTotal < testInfoList.length?fetchNextTestInfo({
             "page": testPage+1,
             "rows": 10
           }): null)
         }
       }
     >
       {
         testInfoList.map((item, index) => {
           return(
             <View className='list-wrapper' key={index} >
               <View className='list-img'> </View>
               <View className='list-text'>
                 <Text className='text-top'>{item.title}</Text>
                 <Text>{item.num}人测过</Text>
                 <View className='text-con'>{item.introduction}</View>
               </View>
               <View
                 className='list-btn'
                 onClick={
                   () => {
                     arr.length !== 0 ? detailTest({"tid": item.tid, "uid": userMes.id}):
                       Taro.showToast({title: '请登录后测试'});
                     arr.length !== 0? Taro.navigateTo({
                       url: '../../pages/detail/detail'
                     }): null
                   }
                 }
               >
                 测试
               </View>
             </View>
           )
         })
       }
       <View className='none'>没有更多数据了</View>
     </ScrollView>
   )
};
export default connect(
  state => ({
      testInfo: state.test.testInfo,
      testPage: state.test.testPage,
      userMes: state.userInfo.userMes,
      testTotal: state.test.testTotal,
  }),
  dispatch => ({
      detailTest(args){
        dispatch(test.fetchDetailTest(args));
      },
    fetchNextTestInfo(args) {
        dispatch(test.fetchNextTest(args));
    }
  })
)(TestList)
