// pages/personal/fenxiaoInfo/fenxiaoInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		info:{
			nickName:"不忘初心",
			name:"徐枫",
			phone:"17638160580",
			text:"aabbccdd",
			compony:"凤凰新闻",
			city:"厦门",
			detail:"思明区仙岳山"
		}
  },

	cityChange(e){
		var cityArray=e.detail.value
		var city
		if(cityArray[0]==cityArray[1]){
			city=cityArray[1]+cityArray[2]
		}else{
			city=cityArray[0]+cityArray[1]+cityArray[2]
		}
		var info=this.data.info
		info.city=city
		this.setData({
			info:info
		})
		console.log(city)
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