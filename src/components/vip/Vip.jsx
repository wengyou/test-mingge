import Taro from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './vip.scss'

const Vip = props => {
  return(
    <View className='vip-container'>
      <Text className='vip-text'>开通VIP会员 全场免费测</Text>
      <View
        className='vip-access'
        onClick={
          () => {
            Taro.navigateTo({
              url: '../../pages/vip/vip'
            })
          }
        }
      >
        <Text>开通</Text>
        <Image className='vip-img' src={require('../../assets/img/vip-right.png')} />
      </View>
    </View>
  )
};

export default connect(
  state => ({

  }),
  dispatch => ({

  })
)(Vip)
