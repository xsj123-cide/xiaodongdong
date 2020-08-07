// pages/personal/hexiao/hexiao.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		first:{
			dingdan:'SH2020121823395673467',
			price:450.00
		},
		second:{
			name:'吴迪',
			phone:'15603728294',
			img1:'../../../static/img/lunbo1.jpg',
			text:`我是文案我是文案我是文案我是文案我是文案我是文案我是文案`,
			price:500.00,
			number:2,
			yanzheng:123456,
			number1:0
		}
  },

	hexiao1(){
		wx.showModal({
		  title: '提示',
		  content: '确定核销该订单',
		  confirmColor:'#73C9FF',
		  success (res) {
		    if (res.confirm) {
		      console.log('用户点击确定')
			  wx.navigateTo({
				  url:"../hexiaoSuccess/hexiaoSuccess"
			  })
		    } else if (res.cancel) {
		      console.log('用户点击取消')
		    }
		  }
		})
	},
	add1(e){
		var type=e.currentTarget.dataset.type
		var second=this.data.second
		if(type=="add"){
			second.number1+=1
		}else{
			if(second.number1==0){
				return
			}
			second.number1-=1
		}
		this.setData({
			second:second
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