import Taro, {useState, useEffect} from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import * as test from '../../actions/test'
import './tab.scss'

const Tab = props => {
  let { fetchTest, fetchCatalog, userMes, sendCatalog } = props;
  const catalogConfig = [
    {
      key: 1,
      value: '全部',
      cid: 0
    },
    {
      key: 2,
      value: '性格',
      cid: 1
    },
    {
      key: 3,
      value: '能力',
      cid: 2
    },
    {
      key: 4,
      value: '职业',
      cid: 3
    },
    {
      key: 5,
      value: '情感',
      cid: 4
    },
    {
      key: 6,
      value: '趣味',
      cid: 5
    }
  ];
  useEffect(() => {
      fetchCatalog();
  }, []);
  const [tabFlag, setTabFlag] = useState(1);
  return(
    <View className='tab-container'>
      <View className='tab-wrapper'>
        {
          catalogConfig.map((item, index) => {
            return (
              <View
                key={item.key}
                className='tab-item'
                onClick={
                  () => {
                    userMes?fetchTest({
                      "uid": userMes.id,
                      "page": 1,
                      "row": 10,
                      "cid": item.cid === 0?"":item.cid,
                    }):
                    fetchTest({
                      "page": 1,
                      "row": 10,
                      "cid": item.cid === 0?"":item.cid,
                    });
                    setTabFlag(index+1);
                    sendCatalog({
                      catalogValue: item.value
                    })
                  }
                }
                style={item.key === tabFlag ? {backgroundColor: '#F8CE5E', color: '#ffffff'} : {}}
              >
                {item.value}
              </View>
            )
          })
        }
      </View>
    </View>
  )
};

export default connect(
  state => ({
      catalog: state.test.catalog,
      userMes: state.userInfo.userMes
  }),
  dispatch => ({
      fetchCatalog(){
        dispatch(test.fetchCatalog())
      },
      fetchTest(args){
        dispatch(test.fetchTest(args))
      },
      sendCatalog(args) {
        dispatch(test.sendCatalog(args))
      }
  })
)(Tab);
