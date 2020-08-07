// pages/personal/withdrawal/withdrawal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		array:[
			{
				title:'可提现',
				price:2300.00
			},
			{
				title:'已提现',
				price:2300.00
			},
			{
				title:'待打款',
				price:2300.00
			},
			{
				title:'待出游订单',
				price:2300.00
			}
		]
  },

	withdrawal(){
		wx.navigateTo({
			url:'../withdrawalSuccess/withdrawalSuccess'
		})
	},
	tixian1(e){
		var index=e.currentTarget.dataset.index
		
		if(index==1){
			wx.navigateTo({
				url:'../withdrawalOrder/withdrawalOrder'
			})
		}
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