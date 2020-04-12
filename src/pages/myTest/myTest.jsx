import Taro, {useEffect, useState} from '@tarojs/taro'
import {View} from "@tarojs/components"
import {connect} from "@tarojs/redux";
import './myTest.scss'
import MyTestItem from '../../components/myTestItem/myTestItem'
import * as test from '../../actions/test'


const MyTest = props => {
  const {fetchMyTest, userMes, collectFlag, fetchPurchasedTest, myTestInfo} = props;
  const arr = Object.keys(userMes);
  useEffect(() => {
    arr.length !== 0?fetchMyTest({"page": 1, "rows": 10, "uid": userMes.id}):Taro.showToast({title: "您还未登录"})
  }, [collectFlag]);
  const [testFlag, setTestFlag] = useState(true);
  const [purchaseFlag, setPurchaseFlag] = useState(false);
  return(
    <View>
      <View className='myTest-wrapper'>
        <View
          className={testFlag?'test-current':'myTest-title'}
          onClick={
            () => {
              fetchMyTest({
                "page": 1,
                "rows": 10,
                "uid": userMes.id
              });
              setTestFlag(true);
              setPurchaseFlag(false);
            }
          }
        >
          我的测试
        </View>
        <View
          className={purchaseFlag?'purchase-current': 'my-purchase'}
          onClick={
            () => {
              fetchPurchasedTest({
                "page": 1,
                "rows": 10,
                "uid": userMes.id
              });
              setPurchaseFlag(true);
              setTestFlag(false);
            }
          }
        >
          我的购买
        </View>
      </View>
      <View className='myTest-lists'>
        <View>
          <MyTestItem />
          {
            testFlag&&myTestInfo.length ===0? <View className='myTest-end'>您还没有收藏任何测试题</View>: null
          }
          {
            purchaseFlag&&myTestInfo.length === 0 ? <View className='myTest-end'>您还没有购买任何测试题</View>: null
          }
        </View>
      </View>
    </View>
  )
};
export default connect(
  state => ({
      userMes: state.userInfo.userMes,
      token: state.userInfo.token,
      testInfo: state.test.testInfo,
      collectFlag: state.test.collectFlag,
      myTestInfo: state.test.myTestInfo
  }),
  dispatch => ({
      fetchMyTest(args) {
        dispatch(test.fetchMyTest(args));
      },
    fetchPurchasedTest(args){
        dispatch(test.fetchPurchasedTest(args))
    }
  })
)(MyTest)
