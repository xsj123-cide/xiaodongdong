// pages/personal/refundInfo/refundInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
	text1:'提交申请退款',
	info:[
		{name:'退款订单',
		text:'C534523632'},
		{name:'退款时间',
		text:'2020-06-06 14:21:37'},
		{name:'退款数量',
		text:'1'},
		{name:'退款金额',
		text:'876.00'},
		{name:'退款原因',
		text:'计划有变'}
	],
	isCanel:false,
	time:[
		{
			day:'06-06',
			min:'14:21',
			text1:'提交申请退款',
			text2:'已提交申请，商家将在7-10个工作日跟进审核 ',
			success:true
		},
		{
			day:'06-06',
			min:'14:21',
			text1:'申请通过',
			success:true
		},
		{
			text1:'退款入账',
			success:false
		}
	]
  },

	refund(){
		var that=this
		var time=[
			{
				day:'06-06',
				min:'14:21',
				text1:'提交申请退款',
				text2:'已提交申请，商家将在7-10个工作日跟进审核 ',
				success:true
			},
			{
				text1:'取消退款',
				text2:'退款已取消，稍后恢复订单为待使用状态',
				success:false
			},
		]
		
		wx.showModal({
		  title: '提示',
		  content: '是否确认取消退款',
		  cancelText: '否',
		  confirmColor: '#73C9FF',
		  success (res) {
		    if (res.confirm) {
		      console.log('用户点击确定')
			  
			  that.setData({
				  isCanel:true,
				  text1:'取消退款',
				  time:time
			  })
		    } else if (res.cancel) {
		      console.log('用户点击取消')
		    }
		  }
		})
	},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	  var firstArray=JSON.parse(options.firstArray)
	  var reasonArray=JSON.parse(options.reasonArray)
		console.log(firstArray)
		console.log(reasonArray)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})