// pages/huodong/purchase/purchase.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		shuju:{
			crazy:[
				{
					img:'../../../static/img/lunbo1.jpg',
					text1:`【超级玩乐】龙海中心小学三年级
					一班8月20`,
					present:100,
					total:300,
					percent:0,
					yuanjia:280.00,
					now:220.00
				},
				{
					img:'../../../static/img/lunbo1.jpg',
					text1:`【超级玩乐】龙海中心小学三年级
					一班8月20`,
					present:100,
					total:300,
					percent:0,
					yuanjia:280.00,
					now:220.00
				}
			]
		},
		titleIndex:0
  },

	changeIndex(e){
		this.setData({
			titleIndex:e.currentTarget.dataset.index
		})
	},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		var shuju=this.data.shuju
		for(var i=0;i<shuju.crazy.length;i++){
			shuju.crazy[i].precent=100*(shuju.crazy[i].present/shuju.crazy[i].total)
		}
		this.setData({
			shuju:shuju
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