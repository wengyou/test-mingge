import * as constant from '../constants/actionType'

const userInfo_STATE = {
  token: '',
  new_user: 'true',
  userMes: {},
  myMessage: [],
  myMessagePage: '',
};
export default (state = userInfo_STATE, action) => {
  switch (action.type) {
    case constant.FETCH_MY_MESSAGE:
      return {
        ...state,
        myMessage: action.payload.items,
        myMessagePage: action.payload.page
      };
    case constant.UPDATE_USER_INFO:
      return {
        ...state
      };
    case constant.LOGIN:
      return {
        ...state,
        token: action.payload.token,
        userMes: action.payload.userInfo,
        new_user: action.payload.new_user,
      };
    default:
      return state
  }
}
