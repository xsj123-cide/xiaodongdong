// pages/personal/orderDetail/orderDetail.js
import {request} from "../../../static/js/request.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
		title:'未支付',
		orderId:'',
		code:'',
		moreProducts:[],
	  info:{
		  img:'../../../static/img/lunbo1.jpg',
		  text1:`联龙海中心小学三年级一班8月20日厦门诚意
				科技馆“探索科技的力量”秋季研学活动 `,
		  text2:'诚毅科技馆探索科学的奥秘1大1小',
		  number:2,
		  price:345
	  },
	  tishi:[
		'请携带好本人身份证配合景区检查',
		'请配合工作人员的体温监测和登记',
		'请携带好本人身份证配合景区检查'
	  ],
	  mapImg:'../../../static/img/lunbo1.jpg',
	  detail:{
		dingdan:'YD152245531203',
		xiadan:'2019-10-17 16:36:45',
		shiyong:'2019-10-17'
	  },
	  saoma:{
		img:'../../../static/img/shouye/saoma.jpg',
		yanzheng:'674224'
	  },
	  more:[
	  	{
	  		img:'../../static/img/shouye/haibao.jpg',
	  		title:`【方特六一·乐享童心】￥199梦幻王国1大1小亲子套票，开启
	  			“童趣模式”缤纷活动`,
	  		price:128.00,
	  		yuanjia:472.00,
	  		number:4567
	  	},
	  	{
	  		img:'../../static/img/shouye/haibao.jpg',
	  		title:`【方特六一·乐享童心】￥199梦幻王国1大1小亲子套票，开启
	  			“童趣模式”缤纷活动`,
	  		price:128.00,
	  		yuanjia:472.00,
	  		number:4567
	  	},
	  	{
	  		img:'../../static/img/shouye/haibao.jpg',
	  		title:`【方特六一·乐享童心】￥199梦幻王国1大1小亲子套票，开启
	  			“童趣模式”缤纷活动`,
	  		price:128.00,
	  		yuanjia:472.00,
	  		number:4567
	  	},
	  	{
	  		img:'../../static/img/shouye/haibao.jpg',
	  		title:`【方特六一·乐享童心】￥199梦幻王国1大1小亲子套票，开启
	  			“童趣模式”缤纷活动`,
	  		price:128.00,
	  		yuanjia:472.00,
	  		number:4567
	  	}
	  ],
	type:0,
	isZhezhao:false,
	isPhone:false,
	isJihe:false,
	isorderc:false
  },
	call1(){
		this.setData({
			isZhezhao:true,
			isPhone:true
		})
	},
	phone1(e){
		var type=e.currentTarget.dataset.type
		this.setData({
			isZhezhao:false,
			isPhone:false
		})
		if(type==true){
			wx.makePhoneCall({
			  phoneNumber: '0592-4346324'
			})
		}
	},
	orderchu() {
		this.setData({
			isZhezhao:true,
			isorderc:true
		})
	},
	jihe1(){
		this.setData({
			isZhezhao:true,
			isorderc:true
		})
	},
	cancelJihe(){
		this.setData({
			isZhezhao:false,
			isJihe:false
		})
	},
	cancelorderc(){
		this.setData({
			isZhezhao:false,
			isorderc:false
		})
	},
	tapZhezhao(){
		if(this.data.isPhone==true){
			this.setData({
				isZhezhao:false,
				isPhone:false
			})
		}else{
			this.setData({
				isZhezhao:false,
				isJihe:false
			})
		}
	},
	continuepay(e) {
		var data = {}
		data.orderNo = e.currentTarget.dataset.oderno;
		request({url:"/api/xcx/order/pay",data:data})
		.then(result=>{
			console.log(result.data)
			var payObj = result.data.data.payObj;
        var totalmoney = this.data.totalmoney;
        wx.requestPayment({
          timeStamp: payObj.timeStamp,
          nonceStr: payObj.nonceStr,
          package: payObj.package,
          signType:payObj.signType,
          paySign: payObj.paySign,
          success (res) {
            wx.navigateTo({
            	url:"../successBuy/successBuy?id="+result.data.data.orderNo+"&money="+totalmoney
            })
           },
          fail (res) { 
            wx.showToast({
              title: '付款失败',
              icon: 'none',
              duration: 2000
            })
          }
        })
		})
	},
	getData(id) {
		var data = {};
		data.orderNo=id;
		var that = this;
		var total;
		request({url:"/api/xcx/user/myOrder/detail",data:data})
		.then(result=>{
			console.log(result.data);
			var detail = result.data.data.detail;
			if(detail.couponId!='') {
				total = ((detail.price*100)*detail.buyNum)/100-detail.couponQuota;
			}else {
				total = ((detail.price*100)*detail.buyNum)/100
			}
			var newdetail = detail;
			newdetail.price = total;
			that.setData({
				info:newdetail,
				moreProducts:result.data.data.moreProducts
			})
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	
		// console.log(JSON.parse(options.obj));
		// this.setData({
		// 	orderId:options.id
		// })	
		console.log(options.id);
		this.getData(options.id);
		
	},
	inputcode(e) {
		this.setData({
			code:e.detail.value
		})
	},
	checkcode(){
		var data = {}
		data.code = this.data.code;
		request({url:"/api/xcx/user/myOrder/applied",data:data})
		.then(result=>{
			console.log(result.data)
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