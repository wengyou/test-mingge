const rootPath = "https://www.zxfuping.cn:8080/fortune_wx";
const apiObj = {
  login: rootPath+'/auth/login_by_WeChat',  //登录
  userUpdateInfo: rootPath+'/user/updateInfo', //用户信息更新
  queryInfo: rootPath+ '/user/queryInfo', //查询个人信息接口
  queryTestedInfo: rootPath+'/user/testedInfo', //用户已测试题目查询
  purchasedTest: rootPath+'/user/queryPurchased_test', //用户已购买测试套题查询
  updateWxInfo: rootPath+'/user/updateWxInfo', //更新用户微信信息
  queryCatalog: rootPath+'/catalog/queryCatalog', //类目查询
  queryTestInfo: rootPath+'/test/queryTestInfo', //测试套题查询
  testResult: rootPath+'/test/result', //请求测试结果
  queryQuestionInfo: rootPath+'/question/queryQuestionInfo', //具体测试题内容查询
  queryUserMsg: rootPath+'/message/queryMsg', //用户消息查询
  queryCollectInfo: rootPath+'/collect/queryCollectInfo', //用户收藏测试套题查询
  collectTest: rootPath+'/collect/collect', //收藏测试题
  cancelTest: rootPath+'/collect/uncollect', //取消收藏测试题
  queryCommentInfo: rootPath+'/comment/queryCommentInfo', //测试套题评论查询
  comment: rootPath+'/comment/comment', //测试套题评论
  deleteComment: rootPath+'/comment/delete', //删除评论
  updateComment: rootPath+'/comment/update', //更新评论
  likeTest: rootPath+'/like/like_test', //套题点赞
  unlikeTest: rootPath+'/like/unlike_test', //取消套题评论点赞
  likeComment: rootPath+'/like/like_comment', //评论点赞
  unlikeComment: rootPath+'/like/unlike_comment', //取消评论点赞
  queryLikeComment: rootPath+'/like/is_likeComment',//查询评论点赞
  browsingHistory: rootPath+'/footprint/browsing_history', //查询浏览记录
  deleteHistory: rootPath+'/footprint/delete', //删除浏览记录
  feedbackSubmit: rootPath+'/feedback/submit', //意见反馈
  queryFeedbackInfo: rootPath+'/feedback/queryFeedbackInfo', //查询意见反馈
  updateFeedback: rootPath+'/feedback/update', //修改意见反馈
  deleteFeedback: rootPath+'/feedback/delete', //删除反馈意见
  payTest: rootPath+'/order/purchaseTest', //测试题订单
  payVIP: rootPath + '/order/purchaseVIP', //vip订单
};

export default apiObj;
