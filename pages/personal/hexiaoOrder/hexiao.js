// pages/personal/hexiao/hexiao.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
	array:[
		'未游玩','已游玩'
	],
	index:0,
	whole:[
		{
			name:'不忘初心',
			touxiang:'../../../static/img/shouye/touxiang1.jpg',
			dingdan:'C2451254122341',
			xiadan:'2020-6-16 13:23',
			img:'../../../static/img/lunbo2.jpg',
			title:'【超级玩乐】龙海中心小学三年级一班8月20',
			taocan:'一大一小学习套餐',
			number:1,
			price:125.00,
			time:'2020 06-17 2:00',
		},
		{
			name:'不忘初心',
			touxiang:'../../../static/img/shouye/touxiang2.jpg',
			dingdan:'C2451254122341',
			xiadan:'2020-6-16 13:23',
			img:'../../../static/img/lunbo2.jpg',
			title:'【超级玩乐】龙海中心小学三年级一班8月20',
			taocan:'一大一小学习套餐',
			number:1,
			price:125.00,
			time:'2020 06-17 2:00',
		}
	],
	already:[
		{
			name:'不忘初心',
			touxiang:'../../../static/img/shouye/touxiang1.jpg',
			dingdan:'C2451254122341',
			hexiao:'2020-6-16 13:23',
			img:'../../../static/img/lunbo2.jpg',
			title:'【超级玩乐】龙海中心小学三年级一班8月20',
			taocan:'一大一小学习套餐',
			number:1,
			price:125.00,
			time:'2020 06-17 2:00',
			hexiaoName:'陪你到天明'
		},
		{
			name:'不忘初心',
			touxiang:'../../../static/img/shouye/touxiang2.jpg',
			dingdan:'C2451254122341',
			hexiao:'2020-6-16 13:23',
			img:'../../../static/img/lunbo2.jpg',
			title:'【超级玩乐】龙海中心小学三年级一班8月20',
			taocan:'一大一小学习套餐',
			number:1,
			price:125.00,
			time:'2020 06-17 2:00',
			hexiaoName:'陪你到天明'
		}
	]
  },

	getIndex(e){
		this.setData({
			index:e.detail.index
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