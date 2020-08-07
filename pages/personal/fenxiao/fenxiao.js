// pages/personal/fenxiao/fenxiao.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		array:[
			'全部','已游玩','未游玩'
		],
		whole:[
			{
				dingdan:'CA23455768787564',
				time:'2020-10-29 19:26',
				price:'79.00',
				isDakuan:true,
				isZhedie:false
			},
			{
				dingdan:'CA23455768787564',
				time:'2020-10-29 19:26',
				price:'79.00',
				isDakuan:true,
				isZhedie:false
			},
			{
				dingdan:'CA23455768787564',
				time:'2020-10-29 19:26',
				price:'79.00',
				isDakuan:false,
				isZhedie:false
			}
		],
		titleIndex:0
  },

	changeIndex(e){
		this.setData({
			titleIndex:e.detail.index
		})
	},
	zhedie1(e){
		var index=e.currentTarget.dataset.index
		var whole=this.data.whole
		whole[index].isZhedie=!whole[index].isZhedie
		this.setData({
			whole:whole
		})
	},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		this.setData({
			titleIndex:options.titleIndex
		})
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