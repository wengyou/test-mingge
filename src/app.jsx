import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import {View} from "@tarojs/components";
import Index from './pages/index'
import Detail from './pages/detail/detail'
import Test from './pages/test/test'
import User from './pages/user/userInfo'
import Question from './pages/question/question'
import VipDetail from './pages/vip/vip'
import MyTest from './pages/myTest/myTest'
import MyMessage from './pages/myMessage/myMessage'
import Return from './pages/return/return'
import Result from './pages/result/result'
import configStore from './store'
import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
const store = configStore();
class App extends Component{
  config = {
    pages: [
      'pages/index/index',
      'pages/user/userInfo',
      'pages/detail/detail',
      'pages/test/test',
      'pages/question/question',
      'pages/vip/vip',
      'pages/myTest/myTest',
      'pages/myMessage/myMessage',
      'pages/return/return',
      'pages/result/result',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  };

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <View>
          <Index />
          <User />
          <Detail />
          <Test />
          <Question />
          <VipDetail />
          <MyTest />
          <MyMessage />
          <Return />
          <Result />
        </View>

      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'));
