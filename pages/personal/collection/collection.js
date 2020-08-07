// pages/personal/collection/collection.js
import {request} from "../../../static/js/request.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
		array:[
			{img:'../../../static/img/lunbo2.jpg',
			title:`【超级玩乐】龙海中心小学三年级
				一班8月20`,
			price:150.00},
			{img:'../../../static/img/lunbo1.jpg',
			title:`【超级玩乐】龙海中心小学三年级
				一班8月20`,
			price:150.00},
			{img:'../../../static/img/lunbo2.jpg',
			title:`【超级玩乐】龙海中心小学三年级
				一班8月20`,
			price:150.00}
		]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();
  },
  changeUrl(e){
		console.log(e.currentTarget.dataset.url)
		if(e.currentTarget.dataset.url){
			wx.navigateTo({
				url:e.currentTarget.dataset.url
			})
		}

  },
  getData() {
    var data = {}
    request({url:"/api/xcx/collect/myCollect",data:data})
					.then(result=>{
            console.log(result);
            this.setData({
              array:result.data.data.result
            })
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