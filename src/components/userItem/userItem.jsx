import Taro from '@tarojs/taro'
import {connect} from "@tarojs/redux";
import {View, Text, Image} from "@tarojs/components";
import './userItem.scss'

const UserItem = props => {
  const userConfig = [
    {
      key: 1,
      value: "加入会员",
      imgUrl: require('../../assets/img/vip.png')
    },
    {
      key: 2,
      value: "我的测试",
      imgUrl: require('../../assets/img/myTest.png')
    },
    {
      key: 3,
      value: "我的消息",
      imgUrl: require('../../assets/img/info.png')
    },
    {
      key: 4,
      value: "问题反馈",
      imgUrl: require('../../assets/img/return.png')
    }
  ];

  return(
    <View className='userItem-container'>
      {
        userConfig.map((item, index)=> {
          return (
            <View
              className='userItem-wrapper'
              key={index}
              onClick={
                () => {
                  item.key === 1? Taro.navigateTo({url: '../../pages/vip/vip'}): null;
                  item.key === 2? Taro.navigateTo({url: '../../pages/myTest/myTest'}): null;
                  item.key === 3? Taro.navigateTo({url: '../../pages/myMessage/myMessage'}): null;
                  item.key === 4? Taro.navigateTo({url: '../../pages/return/return'}): null;
                }
              }
            >
              <Image className='item-icon' src={item.imgUrl} />
              <Text className='item-text'>{item.value}</Text>
              <Image className='item-right' src={require('../../assets/img/vip-right.png')} />
            </View>
          )
        })
      }
    </View>
  )
};
export default connect(
  state => ({

  }),
  dispatch => ({

  })
)(UserItem)
