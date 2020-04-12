import * as constant from '../constants/actionType'

const comment_STATE = {
  commentInfo: [],
  commentPage: '',
  time:'',
  zanFlag: [],
  commentTotal: '',
  commentFlag: true
};
export default (state = comment_STATE, action) => {
  switch (action.type) {
    case constant.SEND_COMMENT_FLAG:
      return {
        ...state,
        commentFlag: action.payload
      };
    case constant.FETCH_COMMENT:
      return{
        ...state,
        commentInfo: action.payload.items,
        commentPage: action.payload.page,
        commentTotal: action.payload.total
      };
    case constant.FETCH_NEXT_COMMENT:
      return {
        ...state,
        commentInfo: state.commentInfo.concat(action.payload.items),
        commentPage: action.payload.page
      };
    case constant.PUBLISH_COMMENT:
      return {
        ...state,
        time: new Date()
      };
    case constant.LIKE_COMMENT:
      return {
        ...state,
        time: new Date()
      };
    case constant.UN_LIKE_COMMENT:
      return {
        ...state,
        time: new Date()
      };
    default:
      return state
  }
}
