import {request} from "../../static/js/request.js"

const app=getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
		mokuai:[],
		ifxianshi:false,
	  first:[
	  	{img:"../../static/img/shouye/icon1.png",text:"活动记录",url:''},
	  	{img:"../../static/img/shouye/icon2.png",text:"我的收藏",url:'../personal/collection/collection'},
	  	{img:"../../static/img/shouye/icon3.png",text:"我的评价",url:'../personal/myEvaluate/evaluate'},
	  	{img:"../../static/img/shouye/icon4.png",text:"优惠券",url:'../personal/myDiscount/myDiscount'}
	  ],
	  second:[
	  	{icon:"iconhuodong",text:"待使用",url:'../personal/orderDetail/orderDetail?type=0'},
	  	{icon:"iconshoucang",text:"待支付",url:'../personal/orderDetail/orderDetail?type=2'},
	  	{icon:"iconpingjia",text:"退款/售后",url:'../personal/refund/refund'},
	  	{icon:"iconyouhuiquan",text:"全部订单",url:'../personal/order/order'}
	  ],
	  third:[
		{icon:"iconkefu",text:"联系客服",url:''},
	  	{icon:"iconlingquanzhongxin",text:"领券中心",url:'../personal/discount/discount'},
	  	{icon:"iconfapiao",text:"我的发票",url:''},
	  	{icon:"iconguanyu",text:"关系我们",url:''}
	  ],
	  fourth:[
	  	{icon:"iconqian",text:"金额",number:1000.01,url:''},
	  	{icon:"iconqian",text:"可提金额",number:1000.01,url:''},
	  	{icon:"iconqian",text:"核销后可提",number:1000.01,url:''},
	  	{icon:"iconqianbao",text:"钱包",url:'../personal/wallet/wallet'},
	  	{icon:"icondingdan-",text:"分销订单",url:'../personal/fenxiao/fenxiao'},
	  	{icon:"iconRectangleCopy",text:"我的分销商",url:'../personal/myDistribution/myDistribution'},
	  	{icon:"iconiconset0148",text:"我的海报",url:''},
	  	{icon:"iconhuiyuan",text:"我的会员",url:'../personal/member/member'},
	  	{icon:"iconziliao",text:"资料修改",url:'../personal/fenxiaoInfo/fenxiaoInfo'},
	  	{icon:"iconRectangleCopy",text:"发展分销商",url:'../personal/developFenxiao/developFenxiao'},
	  ],
	  fifth:[
	  	{icon:"icontubiaolunkuo-",text:"核销",url:'../personal/supplier/supplier'},
	  	{icon:"iconjilu",text:"核销记录",url:'../personal/hexiaoOrder/hexiao'},
	  	{icon:"icontixian",text:"体现",url:'../personal/withdrawal/withdrawal'},
	  	{icon:"iconwenhao",text:"供应商帮助",url:''}
	  ],
	height:app.globalData.statusBarHeight+45,
	/* 是否登录 */
	isLogin:false,
	/* 用户信息 */
	userInfo:{},
	daohangColor:""
  },

	changeUrl(e){
		console.log(e.currentTarget.dataset.url)
		wx.navigateTo({
			url:e.currentTarget.dataset.url
		})
	},
	getUserinfo(e){
		console.log("sssss")
		var that = this;
		var useinfo={
			img:e.detail.userInfo.avatarUrl,
			name:e.detail.userInfo.nickName,
			gender:e.detail.userInfo.gender,
			city:e.detail.userInfo.city,
			country:e.detail.userInfo.country,
			province:e.detail.userInfo.province,
			language:e.detail.userInfo.language,
			}
		console.log(useinfo);
		wx.setStorage({
		  key:"user",
		  data:e.detail
		})
		this.setData({
			isLogin:true,
			userInfo:useinfo
		})
		
		wx.login({
			success(res){
				if(res.code){
					// var token=wx.getStorageSync('token')
					var data={code:res.code}
					data.userInfo=JSON.stringify(useinfo);
					console.log(data)
					request({url:"/api/xcx/login",data:data})
					.then(result=>{
						console.log(result.data)
						that.loadmes();
						wx.setStorage({
						  key:"session_key",
						  data:result.data.data.session_key
						})
						
					})
				}
			}
		})
	},
	scroll1(e){
		  var scrollTop=e.detail.scrollTop
		  if(scrollTop>30){
			  this.setData({
				  daohangColor:'#87CEFA'
			  })
		  }else{
			  this.setData({
			  	  daohangColor:''
			  })
		  }
	},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		var that=this
		// wx.showLoading({
		// 	title: '加载中',
		// })
		
		wx.getStorage({
		  key: 'user',
		  success (res) {
			var data={img:res.data.userInfo.avatarUrl,name:res.data.userInfo.nickName}
			that.setData({
				isLogin:true,
				userInfo:data
			})
			that.loadmes();
		  },
		  fail(error) {
				// that.loadmes();
				console.log(error)
				that.setData({
					isLogin:false,
					// userInfo:data
				})
		  }
		})
		
			// var token=wx.getStorageSync('token')
			// if(token==''){
			// 	request({url:"http://192.168.106.12/api/xcx/token"})
			// 	.then(result=>{
			// 			wx.setStorage({
			// 			  key:"token",
			// 			  data:result.data.message
			// 			})
			// 	})
			// }
			// this.loadmes()
	},
	loadmes() {
		console.log("ssss");
		var that = this;
		// var token=wx.getStorageSync('token')
		var data = {
			// token: token
		}
		request({url:"/api/xcx/user/menu",data:data})
		.then(result=>{
			console.log(result);
				this.setData({
					mokuai:result.data.data
				})
				that.setData ({
					ifxianshi:true
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