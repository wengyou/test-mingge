import Taro, {useEffect, useState} from '@tarojs/taro'
import {Image, View} from "@tarojs/components";
import {connect} from "@tarojs/redux";
import './myMessage.scss'
import * as user from '../../actions/userInfo'

const MyMessage = props => {
  const {userMes, token, fetchMyMessage, myMessage} = props;
  useEffect(() => {
    token?fetchMyMessage({"page": 1, "rows": 10, "uid": userMes.id}):
      Taro.showToast({title: "您还没有登录"})
  },[]);
  return(
    <View style={{background: '#E8E8E8'}}>
      <View className='myMessage-title'>我的消息</View>
      <View className='myMessage-lists'>
        {
          myMessage.length !== 0 ? myMessage.map((item, index) => {
            const time = new Date(item.send_time);
            const date = time.toLocaleString();
            return  <View key={index} className='myMessage-item'>
              <Image className='mes-icon' src={require('../../assets/img/mes.png')} />
              <View className='myMessage-con'>{item.content}</View>
              <View className='myMessage-time'>{date}</View>
            </View>
          }): <View>您还没有任何消息通知</View>
        }
      </View>
    </View>
  )
};
export default connect(
  state => ({
      token: state.userInfo.token,
    userMes: state.userInfo.userMes,
    myMessage: state.userInfo.myMessage
  }),
  dispatch => ({
      fetchMyMessage(args) {
        dispatch(user.fetchMyMessage(args));
      }
  })
)(MyMessage);
