// pages/city/city.js
var app=getApp()
import {request} from "../../static/js/request.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
	height1:'calc(100vh - '+app.globalData.statusBarHeight+'px - 40px)',
	/* 位置数组 */
	Detail:[],
	/* 城市数组 */
	city:[],
	/* 字母数组 */
	alphabet: [],
	/* 右侧导航下标 */
	cityIndex:'a',
	/* scroll定位元素ID */
	scrollId:'',
	/* 热门城市数组 */
	remenArray:[
		"北京","上海","广州","杭州","深圳"
	],
	citys:[],
	hotCitys:[],
	indexCity:{},
	city1:''
  },

	scrollHandle(e){
		var that=this
		let view = wx.createSelectorQuery().in(this).selectAll(".list");
		view.boundingClientRect(d => {
			let top = d[0].top;
			d.forEach(item => {
				item.top = item.top - top;
				item.bottom = item.bottom - top;
				this.data.Detail.push({
					id: item.id,
					top: item.top,
					bottom: item.bottom
				});
			});
		}).exec();
		
		const scrollTop = e.detail.scrollTop;
		this.data.Detail.some(item => {
			if (scrollTop >= item.top && scrollTop <= item.bottom - 20) {
				that.setData({
					cityIndex:item.id
				})
				return true;
			}
		});
	},
	scroll1(e){
		var id=e.currentTarget.dataset.id
		this.setData({
			scrollId:id
		})
		if(id=='a'){
			id="热门"
		}
		wx.showToast({
		  icon: "none",
		  title: id,
		  duration: 2000
		})
	},
	chooseCity(e){
		var city1=e.currentTarget.dataset.city
		wx.setStorage({
		  key:"city1",
		  data:city1
		})
		wx.switchTab({
		  url: '../index/index'
		})
	},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		// var city1=options.city
	  this.getData();
		// var that=this
		// var city;
		// var indexCity_copy = this.data.indexCity
		// indexCity_copy.name = city1
		// wx.getStorage({
		//   key: 'city',
		//   success (res) {
		// 		city=res.data
		// 		that.setData({
		// 			city:city.cities,
		// 			alphabet:city.alphabet,
		// 			// indexCity:indexCity_copy
		// 		})
		//   }
		// })
  },
	getData() {
		var data = {};
		var city_copy = {};
		// var singlecity = [];
		request({url:"/api/xcx/citys",data:data})
		.then(result=>{
			console.log(result.data.data);
			this.setData({
				citys:result.data.data.allCitys,
				indexCity:result.data.data.indexCity,
				hotCitys:result.data.data.hotCitys
			})
			this.data.citys.forEach((item,index) => {
				var key = item.pinyin;
				if(city_copy.hasOwnProperty(key)){
					city_copy[key].push(item);
				}
				else {
					city_copy[key] = [];
					city_copy[key].push(item);
				}
			})
			this.setData({
				city:city_copy
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