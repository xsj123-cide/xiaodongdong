// pages/huodong/specialOffer/specialOffer.js
import {request} from "../../../static/js/request.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
		name:'',
		cateId:'',
		morelen:0,
		swiper:[
			{
				img:'../../../static/img/lunbo1.jpg',
				text:`方特六一·乐享童心】￥199梦幻王国1大1小亲子套票，六一
				方特六一·乐享童心】￥199梦幻王国1大1小亲子套票`
			},
			{
				img:'../../../static/img/lunbo2.jpg',
				text:`方特六一·乐享童心】￥199梦幻王国1大1小亲子套票，六一
				方特六一·乐享童心】￥199梦幻王国1大1小亲子套票`
			},
			{
				img:'../../../static/img/lunbo1.jpg',
				text:`方特六一·乐享童心】￥199梦幻王国1大1小亲子套票，六一
				方特六一·乐享童心】￥199梦幻王国1大1小亲子套票`
			}
		],
		swiperIndex:1,
		more:[
			// {
			// 	img:'../../../static/img/shouye/haibao.jpg',
			// 	title:`【方特六一·乐享童心】￥199梦幻王国1大1小亲子套票，开启
			// 		“童趣模式”缤纷活动`,
			// 	price:128.00,
			// 	yuanjia:472.00,
			// 	number:4567
			// },
			// {
			// 	img:'../../../static/img/shouye/haibao.jpg',
			// 	title:`【方特六一·乐享童心】￥199梦幻王国1大1小亲子套票，开启
			// 		“童趣模式”缤纷活动`,
			// 	price:128.00,
			// 	yuanjia:472.00,
			// 	number:4567
			// },
			// {
			// 	img:'../../../static/img/shouye/haibao.jpg',
			// 	title:`【方特六一·乐享童心】￥199梦幻王国1大1小亲子套票，开启
			// 		“童趣模式”缤纷活动`,
			// 	price:128.00,
			// 	yuanjia:472.00,
			// 	number:4567
			// },
			// {
			// 	img:'../../../static/img/shouye/haibao.jpg',
			// 	title:`【方特六一·乐享童心】￥199梦幻王国1大1小亲子套票，开启
			// 		“童趣模式”缤纷活动`,
			// 	price:128.00,
			// 	yuanjia:472.00,
			// 	number:4567
			// }
		],
  },
  inputChange(e){
		this.setData({
			inputText:e.detail.value
    })
    // var token=wx.getStorageSync('token')
		var data = {
      // token: token,
      keyword: this.data.inputText,
      cateId: this.data.cateId,
		}
    request({url:"/api/xcx/product/search",data:data})
		.then(result=>{
			console.log(result);
			var morelen = result.data.data.length;
        this.setData ({
					more:result.data.data,
					morelen:morelen
        })
		})
  },
  swiperChange(e){
	this.setData({
		swiperIndex:e.detail.current+1
	})
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		this.setData({
			name:options.name,
			cateId:options.cateId
		})
		this.loadmes();
	},
	changeUrl(e){
		console.log(e.currentTarget.dataset.url)
		if(e.currentTarget.dataset.url){
			wx.navigateTo({
				url:e.currentTarget.dataset.url
			})
		}

  },
	loadmes() {
		var data = {
      // token: token,
      keyword: '',
      cateId: this.data.cateId,
		}
    request({url:"/api/xcx/product/search",data:data})
		.then(result=>{
			console.log(result);
        this.setData ({
          more:result.data.data
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