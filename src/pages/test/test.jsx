import Taro, {useEffect} from '@tarojs/taro';
import {View} from "@tarojs/components";
import {connect} from "@tarojs/redux";
import './test.scss'
import MyTestItem from '../../components/myTestItem/myTestItem'
import * as test from '../../actions/test'
import Footer from "../../components/footer/Footer";

const Test = props => {
  const {fetchMyTest, userMes, collectFlag} = props;
  let arr = Object.keys(userMes);
  useEffect(() => {
    arr.length !==0 ?fetchMyTest({"page": 1, "rows": 10, "uid": userMes.id}): Taro.showToast({title: "您还没有登录"})
  }, [collectFlag]);
  return(
    <View>
      <View className='test-title'>测试记录</View>
      <View className='test-lists'>
        <View>
          <MyTestItem />
        </View>
      </View>
      <Footer />
    </View>
  )
};
export default connect(
  state => ({
    userMes: state.userInfo.userMes,
    token: state.userInfo.token,
    testInfo: state.test.testInfo,
    collectFlag: state.test.collectFlag,
  }),
  dispatch => ({
    fetchMyTest(args) {
      dispatch(test.fetchMyTest(args));
    }
  })
)(Test)
