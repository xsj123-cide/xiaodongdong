// pages/personal/evaluate/evaluate.js
import {request} from "../../../static/js/request.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
		img:'../../../static/img/lunbo1.jpg',
		text:`【超级玩乐】龙海中心小学三年级一班8月20 全文【超级玩乐】龙海中心小学三年级一班8月20 全文`,
		imgArray:[],
		pingjiaIndex:-1,
		textarea:``
  },

	pingjia1(e){
		this.setData({
			pingjiaIndex:e.currentTarget.dataset.index
    })
	},
	addImg(){
		var that=this
		wx.chooseImage({
		  count: 9,
		  sizeType: ['original', 'compressed'],
		  sourceType: ['album', 'camera'],
		  success (res) {
		    const tempFilePaths = res.tempFilePaths
			that.setData({
				imgArray:tempFilePaths
			})
		  }
		})
	},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getData();
    this.setData({
			productId:options.productId,
      orderId:options.orderId,
      text:options.title,
      img:options.img
		})
  },
  changeUrl(e){
		console.log(e.currentTarget.dataset.url)
		if(e.currentTarget.dataset.url){
			wx.navigateTo({
				url:e.currentTarget.dataset.url
			})
		}
  },
  save(){
    var data = {};
    data.commentLevel = this.data.pingjiaIndex+1;
    data.remark = this.data.textarea;
    data.productId = this.data.productId;
    data.orderId = this.data.orderId;
    request({url:"/api/xcx/comment/save",data:data})
		.then(result=>{
      console.log(result.data);
      wx.showToast({
        title: '评价成功！',
        icon: 'none',
        duration: 2000
      })
    })
  },
  writearticle(e) {
    var text = e.detail.value;
    this.setData({
      textarea:text
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