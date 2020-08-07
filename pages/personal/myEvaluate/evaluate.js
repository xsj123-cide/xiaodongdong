// pages/personal/evaluate/evaluate.js
import {request} from "../../../static/js/request.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
		infos:[],
		infowait:[],
		waitlength:0,
		yilength:0,
		array:[
			{img:'../../../static/img/lunbo1.jpg',
			text:`【超级玩乐】龙海中心小学三年级一班8月20暗示【超级玩乐】龙海中心小学三年级一班8月20暗示`,
			time:'2020-5-18 18:04:39',
			price:125.00,
			number:1},
			{img:'../../../static/img/lunbo2.jpg',
			text:`【超级玩乐】龙海中心小学三年级一班8月20暗示【超级玩乐】龙海中心小学三年级一班8月20暗示`,
			time:'2020-5-18 18:04:39',
			price:130.00,
			number:2},
		],
		already1:[
			{
			img:'../../../static/img/shouye/touxiang1.jpg',
			name:'陪你到天明',
			time:'18:17:19',
			img1:'../../../static/img/lunbo1.jpg',
			text1:`阿斯法司法福气哦婆婆人前人后安顺达速发泡批发
					商品的名字名字名字名字名字名字名字名字`,
			pingfen:3.0,
			scoreIndex:3,
			answer:`客服回复客服回复客服回复客服回复客服回复客服回复客服回复客服回复客服回`
			},
			{
			img:'../../../static/img/shouye/touxiang2.jpg',
			name:'陪你到天明',
			time:'18:17:19',
			img1:'../../../static/img/lunbo2.jpg',
			text1:`阿斯法司法福气哦婆婆人前人后安顺达速发泡批发
					商品的名字名字名字名字名字名字名字名字`,
			pingfen:3.0,
			scoreIndex:3,
			answer:`客服回复客服回复客服回复客服回复客服回复客服回复客服回复客服回复客服回`
			}
		],
		titleIndex:0
  },

	changeIndex(e){
		this.setData({
			titleIndex:e.currentTarget.dataset.index
		})
		if(e.currentTarget.dataset.index==1){
			this.getData();
		}
		else if(e.currentTarget.dataset.index==0){
			this.getDataa();
		}
	},
	changeUrl(e){
		console.log(e.currentTarget.dataset.url)
		if(e.currentTarget.dataset.url){
			wx.navigateTo({
				url:e.currentTarget.dataset.url
			})
		}
	},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		this.getDataa();
		
	},
	getDataa() {
		var data = {};
		data.status=60
		request({url:"/api/xcx/user/myOrder",data:data})
		.then(result=>{
			var length = result.data.data.result.length;
			this.setData({
				infowait:result.data.data.result,
				waitlength:length
			})
			this.getData()
		})
	},
	getData() {
		var data = {};
		request({url:"/api/xcx/comment/myComment",data:data})
		.then(result=>{
			var length = result.data.data.result.length;
			this.setData({
				infos:result.data.data.result,
				yilength:length
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