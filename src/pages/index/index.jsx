import Taro, { Component, useState, useEffect } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import * as Atest from '../../actions/test'
import Footer from '../../components/footer/Footer'
import Tab from "../../components/tab/Tab";
import TestList from '../../components/testList/TestList'
import Vip from "../../components/vip/Vip"
import './index.scss'
import Banner from "../../components/banner/banner"

 class Index extends Component{
  config = {
    navigationBarTitleText: '首页'
  };
   render() {
     const {fetchTest, userMes, indexFlag, catalogValue} = this.props;
     useEffect(() => {
       userMes?fetchTest({"uid": userMes.id, "page":1,"rows": 10}): fetchTest({"page":1,"rows": 10})
     },[]);
    return(
      <View>
        {indexFlag ?<Banner />: <Vip />}
        {
          indexFlag ? <View className='index-test'>
            <View className='index-line' />
            <View className='index-catalog'>{catalogValue}</View>
            <Text>测试</Text>
          </View>: null
        }
        <Tab />
        <TestList />
        <Footer />
      </View>
    )
  }

 }
 export default connect(
   state => ({
      openFlag: state.test.openFlag,
     userMes: state.userInfo.userMes,
     indexFlag: state.test.indexFlag,
     catalogValue: state.test.catalogValue
   }),
   dispatch => ({
     fetchTest(args){
       dispatch(Atest.fetchTest(args))
     }
   })
 )(Index)
