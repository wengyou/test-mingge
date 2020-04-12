import Taro, {useState, useEffect} from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './footer.scss'

const Footer = props => {
  const [currentPage, setCurrentPage] = useState('pages/index/index');
  useEffect(() => {
    let page = Taro.getCurrentPages().pop();
    setCurrentPage(page.route);
  },[]);
  return(
    <View className='footer-container'>
      <View className='footer-wrapper'>
        <View
          className='footer-tab'
          onClick={
            () => {
              let page = Taro.getCurrentPages().pop();
              page.route !== 'pages/index/index'?
                Taro.redirectTo({
                  url: '../../pages/index/index',
                }): null
            }
          }
        >
          <Image
            className='footer-img'
            src={
              currentPage === 'pages/index/index'?
                require('../../assets/img/home-current.png'):require('../../assets/img/home.png')}
          />
          <View className={currentPage === 'pages/index/index' ? "current-text": ""}>首页</View>
        </View>
        <View
          className='footer-tab'
          onClick={
            () => {
              let page = Taro.getCurrentPages().pop();
              page.route !== 'pages/test/test' ?
                Taro.redirectTo({
                  url: '../../pages/test/test',
                }): null
            }
          }
        >
          <Image
            className='footer-img'
            src={
              currentPage === 'pages/test/test'?
                require('../../assets/img/test-current.png'):require('../../assets/img/test.png')}
          />
          <View className={currentPage === 'pages/test/test' ?'current-text': ''}>测试</View>
        </View>
        <View
          className='footer-tab'
          onClick={
            () => {
              let page = Taro.getCurrentPages().pop();
              page.route !== 'pages/user/userInfo' ?
                Taro.redirectTo({
                  url: '../../pages/user/userInfo',
                }): null
            }
          }
        >
          <Image
            className='footer-img'
            src={
              currentPage === 'pages/user/userInfo'?
                require('../../assets/img/mine-current.png'):require('../../assets/img/mine.png')}
          />
          <View className={currentPage === 'pages/user/userInfo' ? "current-text": ""}>我的</View>
        </View>
      </View>

    </View>
  )
};

export default connect(
  state => ({

  }),
  dispatch => ({

  })
)(Footer);
