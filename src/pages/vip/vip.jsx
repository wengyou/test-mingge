import Taro from '@tarojs/taro'
import {Image, Text, View} from "@tarojs/components";
import {connect} from "@tarojs/redux";
import './vip.scss'
import * as test from '../../actions/test'

const VipDetail = props => {
  const {payVIP, userMes} = props;
  return(
    <View className='vipDetail-container'>
      <Image className='vipDetail-img' src={require('../../assets/img/vip.jpg')} />
      <View className='privilege-title'>
        <View className='privilege-line' />
        <Text style={{marginLeft: '4vw'}}>会员特权</Text>
      </View>
      <View className='privilege-con-container'>
        <View className='privilege-item'>
          <View className='img-wrapper'>
            <Image className='privilege-img' src={require('../../assets/img/privilege1.png')} />
          </View>
          <View className='text-wrapper'>
            <Text className='text-title'>所有治愈课程免费</Text>
            <Text className='text-con'>20精品付费题：SDS抑郁症*4.99，职业测试*4.99,领导力测试*4.99，智商测试*2.99，九型人格*2.99等等，所有测试题全部免费</Text>
          </View>
        </View>
        <View className='privilege-item'>
          <View className='img-wrapper'>
            <Image className='privilege-img' src={require('../../assets/img/privilege2.png')} />
          </View>
          <View className='text-wrapper'>
            <Text className='text-title'>新增测试题免费</Text>
            <Text className='text-con'>6+治愈课程：抑郁情绪疗愈*9.9，拖延症训练*2.99，幸福感训练*2.99，成就清单训练*2.99等等，所有治愈训练全部免费</Text>
          </View>
        </View>
        <View className='privilege-item'>
          <View className='img-wrapper'>
            <Image className='privilege-img' src={require('../../assets/img/privilege3.png')} />
          </View>
          <View className='text-wrapper'>
            <Text className='text-title'>所有测试免费</Text>
            <Text className='text-con'>已有1351人加入会员</Text>
          </View>
        </View>
      </View>
      <View
        className='vip-price'
        onClick={
          () => {
            payVIP({"uid": userMes.id, "vid": 1})
          }
        }
      >
        ￥9.9立即开通
      </View>
      <Text className='vip-text'>累计可省90元，享受更多会员特权</Text>
    </View>
  )
};
export default connect(
  state => ({
    userMes: state.userInfo.userMes
  }),
  dispatch => ({
    payVIP(args) {
      dispatch(test.payVIP(args))
    }
  })
)(VipDetail);
