// pages/huodong/settlement/settlement.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		index:0,
		length:0,
		name:'',
		phone:'',
		redioGroup:[
			{
				value:"user",
				name:'用户'
			},
			{
				value:"shop",
				name:'商家'
			}
		]
  },

	textarea1(e){
		var text=e.detail.value
		this.setData({
			length:text.length
		})
	},
	name1(e){
		this.setData({
			name:e.detail.value
		})
	},
	phone1(e){
		this.setData({
			phone:e.detail.value
		})
	},
	tijiao1(){
		var name=this.data.name
		if(name.length==0){
			wx.showModal({
			  content: '姓名不能为空',
			  showCancel: false,
			  success (res) {
				  
			  }
			})
			
			return
		}
		var phone=this.data.phone
		if(phone.length==0){
			wx.showModal({
			  content: '手机号不能为空',
			  showCancel: false,
			  success (res) {
				  
			  }
			})
			
			return
		}
		var length=this.data.length
		if(length==0){
			wx.showModal({
			  content: '合作内容不能为空',
			  showCancel: false,
			  success (res) {
				  
			  }
			})
			
			return
		}
		wx.navigateTo({
			url:"../submitSuccess/submitSuccess"
		})
	},
	back1(){
		wx.switchTab({
		  url: '../../index/index'
		})
	},
	radioChange(e){
		
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