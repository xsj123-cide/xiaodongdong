// pages/personal/supplier/supplier.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		name:'森田鬼校',
		array:[
			{icon:'icondingdan',
			text:'已游玩订单',
			url:"../fenxiao/fenxiao?titleIndex=1"},
			{icon:'icondingdanchulizhong',
			text:'未游玩订单',
			url:"../fenxiao/fenxiao?titleIndex=2"},
			{icon:'icontixian',
			text:'提现',
			url:"../withdrawal/withdrawal"},
			{icon:'iconkefu',
			text:'供应商帮助',
			url:""}
		]
  },

	hexiao1(){
		wx.navigateTo({
			url:"../hexiao/hexiao"
		})
	},
	changeUrl(e){
		var url=e.currentTarget.dataset.url
		wx.navigateTo({
			url:url
		})
	},
	
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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