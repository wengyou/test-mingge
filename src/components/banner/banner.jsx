import Taro from '@tarojs/taro'
import { View, Image, Swiper, SwiperItem} from "@tarojs/components";
import {connect} from "@tarojs/redux";

const Banner = () => {
  return(
    <Swiper
      className='test-h banner-container'
      indicatorColor='#999'
      indicatorActiveColor='#F8CE5E'
      vertical={false}
      circular
      indicatorDots
      autoplay
      style={{width: '100%', height: '10rem'}}
    >
      <SwiperItem>
        <View style={{width: '100%', height: '100%'}} className='demo-text-1'>
          <Image
            style={{width: '100%', height: '100%'}}
            className='banner-img'
            src={require('../../assets/img/banner1.jpg')}
          />
        </View>
      </SwiperItem>
      <SwiperItem>
        <View style={{width: '100%', height: '100%'}} className='demo-text-2'>
          <Image
            style={{width: '100%', height: '100%'}}
            className='banner-img'
            src={require('../../assets/img/banner2.jpg')}
          />
        </View>
      </SwiperItem>
      <SwiperItem>
        <View style={{width: '100%', height: '100%'}} className='demo-text-3'>
          <Image
            style={{width: '100%', height: '100%'}}
            className='banner-img'
            src={require('../../assets/img/banner3.jpg')}
          />
        </View>
      </SwiperItem>
      <SwiperItem>
        <View style={{width: '100%', height: '100%'}} className='demo-text-4'>
          <Image
            style={{width: '100%', height: '100%'}}
            className='banner-img'
            src={require('../../assets/img/banner4.png')}
          />
        </View>
      </SwiperItem>
    </Swiper>
  )
};
export default connect(
  state => ({

  }),
  dispatch => ({

  })
)(Banner)
