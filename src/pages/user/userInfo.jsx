import Taro, { Component, useState, useEffect } from '@tarojs/taro'
import {View, Button, Text, Image} from '@tarojs/components'
import { connect } from '@tarojs/redux'
import Footer from "../../components/footer/Footer";
import UserItem from '../../components/userItem/userItem'
import './userInfo.scss'
import * as user from "../../actions/userInfo";

class User extends Component{
  config = {
    navigationBarTitleText: '个人信息'
  };
  login() {
    Taro.login({
      success: result => {
        const code = result.code;
        this.props.onLogin && this.props.onLogin({"code": code});
      }
    });
  }

  updateUserInfo(userMes, token) {
    if (token){
      Taro.getUserInfo({
        success: result => {
          const userInfo = result.userInfo;
          this.props.onUpdateUserInfo && this.props.onUpdateUserInfo({
            "id": userMes.id,
            "wx_nickName": userInfo.nickName,
            "wx_avatarUrl": userInfo.avatarUrl,
            "country": userInfo.country,
            "province": userInfo.province,
            "city": userInfo.city,
            "gender": userInfo.gender,
          })
        }
      })
    }

  }

  render() {
    let { userMes, token} = this.props;
    const arr = Object.keys(userMes);
    useEffect(() => {
      this.updateUserInfo(userMes, token)
    },[token]);
    return(
      <View className='user-bg'>
        <View className='user-header'>
          <Image src={require('../../assets/img/banner2.jpg')} className='user-img' />
          <Text className='user-name'>{userMes.nickname ? userMes.nickname:"游客"}</Text>
          <Button
            openType='getUserInfo'
            className='login-btn'
            onClick={
              () => {
                arr.length === 0 ?this.login(): Taro.showToast({title: '已登录'});
              }
            }
          >
            {arr.length === 0 ? '登录': '已登录'}
          </Button>
        </View>
        <UserItem />
        <Footer />
      </View>
    )
  }
}
export default connect(
  state => ({
    new_user: state.userInfo.new_user,
    userMes: state.userInfo.userMes,
    token: state.userInfo.token
    }),
  dispatch => ({
    onLogin(code) {
      dispatch(user.onLogin(code))
    },
    onUpdateUserInfo(args) {
      dispatch(user.updateUserInfo(args))
    }
  })
)(User)
