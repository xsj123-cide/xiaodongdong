// pages/personal/refund/refund.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		first:[
			{
				number:'56212142',
				isActive:false,
				value:0
			},
			{
				number:'56212142',
				isActive:false,
				value:1
			},
			{
				number:'56212142',
				isActive:false,
				value:2
			}
		],
		firstArray:[],
		reason:[
			{
				text:'预约不上',
				isActive:false,
				value:0
			},
			{
				text:'预约不上',
				isActive:false,
				value:1
			},
			{
				text:'预约不上',
				isActive:false,
				value:2
			}
		],
		reasonArray:[],
  },

	chooseFirst(e){
		var index=e.currentTarget.dataset.index
		var first=this.data.first
		first[index].isActive=!first[index].isActive
		this.setData({
			first:first
		})
	},
	chooseReason(e){
		var index=e.currentTarget.dataset.index
		var reason=this.data.reason
		reason[index].isActive=!reason[index].isActive
		this.setData({
			reason:reason
		})
	},
	refund1(){
		var firstArray=JSON.stringify(this.data.firstArray)
		var reasonArray=JSON.stringify(this.data.reasonArray)
		wx.navigateTo({
			url:"../refundInfo/refundInfo?firstArray="+firstArray+"&reasonArray="+reasonArray
		})
	},
	checkChange1(e){
		this.setData({
			firstArray:e.detail.value
		})
	},
	checkChange2(e){
		this.setData({
			reasonArray:e.detail.value
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