import * as constant from '../constants/actionType'

const home_STATE = {
  catalog: [],
  testInfo: [],
  testPage: '',
  testTotal: '',
  detailTestInfo: [],
  questionInfo: {},
  beginTime: '',
  resultInfo: [],
  collectFlag: '',
  myTestInfo: [],
  myTestPage: '',
  indexFlag: false,
  catalogValue: '全部',
  questionTime: new Date(),
};

export default (state = home_STATE, action) => {
  switch (action.type) {
    case constant.SEND_CATALOG:
      return {
        ...state,
        catalogValue: action.catalogValue
      };
    case constant.SEND_INDEX_FLAG:
      return {
        ...state,
        indexFlag: action.flag.indexFlag
      };
    case constant.COLLECT_TEST:
      return {
        ...state,
        collectFlag: new Date()
      };
    case constant.LIKE_TEST:
      return {
        ...state,
        collectFlag: new Date()
      };
    case constant.UN_LIKE_TEST:
      return {
        ...state,
        collectFlag: new Date()
      };
    case constant.UN_COLLECT_TEST:
      return {
        ...state,
        collectFlag: new Date()
      };
    case constant.FETCH_TEST_FAIL:
      return {
        ...state,
        testPage: '',
        testInfo: []
      };
    case constant.FETCH_TESTED_INFO:
      return {
        ...state,
        testInfo: action.payload.items,
        testPage: action.payload.page
      };
    case constant.FETCH_MY_TEST:
      return {
        ...state,
        myTestInfo: action.payload.items,
        myTestPage: action.payload.page
      };
    case constant.FETCH_PURCHASED:
      return {
        ...state,
        myTestInfo: action.payload.items,
        myTestPage: action.payload.page
      };
    case constant.FETCH_QUESTION_INFO:
      return {
        ...state,
        questionInfo: action.payload,
        beginTime: action.beginTime
      };
    case constant.FETCH_NEXT_QUESTION:
      return {
        ...state,
        questionInfo: action.payload,
        questionTime: new Date()
      };
    case constant.FETCH_RESULT:
      return {
        ...state,
        resultInfo: action.payload
      };
    case constant.FETCH_DETAIL_TEST:
      return {
        ...state,
        detailTestInfo: action.payload.items
      };
    case constant.FETCH_TEST:
      return {
        ...state,
        testInfo: action.payload.items,
        testPage: action.payload.page,
        testTotal: action.payload.total
      };
    case constant.FETCH_NEXT_TEST:
      return {
        ...state,
        testPage: action.payload.page,
        testInfo: state.testInfo.concat(action.payload.items)
      };
    case constant.FETCH_CATALOG:
      return {
        ...state,
        catalog: action.payload.items
      };
    default:
      return state
  }
}
