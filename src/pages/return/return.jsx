import Taro from '@tarojs/taro'
import {View} from "@tarojs/components";
import {connect} from "@tarojs/redux";
import './return.scss'

const Return = props => {
  return(
    <View>
      <View className='return-title'>问题反馈</View>
      <View className='return-lists'>

      </View>
    </View>
  )
};
export default connect(
  state => ({

  }),
  dispatch => ({

  })
)(Return)
