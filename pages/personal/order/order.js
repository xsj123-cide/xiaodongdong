// pages/personal/order/order.js
import {request} from "../../../static/js/request.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
		wholelen:0,
		whole:[
			// {
			// 	dingdan:'C2451254122341',
			// 	state:'已支付 已完成',
			// 	img:'../../../static/img/lunbo2.jpg',
			// 	title:'【超级玩乐】龙海中心小学三年级一班8月20',
			// 	taocan:'一大一小学习套餐',
			// 	number:1,
			// 	price:125.00,
			// 	time:'2020-07-20 至 2020-08-17，周一至周日可使用',
			// },
			// {
			// 	dingdan:'C2451254122341',
			// 	state:'已支付 已完成',
			// 	img:'../../../static/img/lunbo2.jpg',
			// 	title:'【超级玩乐】龙海中心小学三年级一班8月20',
			// 	taocan:'一大一小学习套餐',
			// 	number:1,
			// 	price:125.00,
			// 	time:'2020-07-20 至 2020-08-17，周一至周日可使用',
			// }
		],
		waitpay:[],
		refund:[
			{
				dingdan:'C2451254122341',
				state:'未退款',
				img:'../../../static/img/lunbo2.jpg',
				title:'【超级玩乐】龙海中心小学三年级一班8月20',
				taocan:'一大一小学习套餐',
				number:1,
				price:125.00,
				time:'2020-07-20 至 2020-08-17，周一至周日可使用',
			},
			{
				dingdan:'C2451254122341',
				state:'未退款',
				img:'../../../static/img/lunbo2.jpg',
				title:'【超级玩乐】龙海中心小学三年级一班8月20',
				taocan:'一大一小学习套餐',
				number:1,
				price:125.00,
				time:'2020-07-20 至 2020-08-17，周一至周日可使用',
			}
		],
		titleIndex:0
  },

	changeIndex(e){
		var flag = e.currentTarget.dataset.index
		var status ;
		this.setData({
			titleIndex:e.currentTarget.dataset.index
		})
		console.log(this.data.titleIndex);
		if(flag == 2) {
			status = 10;
		}
		if(flag == 1) {
			status = 20
		}
		if(flag == 3) {
			status= 45
		}
		if(flag == 0) {
			status = ''
		}
		this.getData(status);
	},
	// changeUrlA(e){
	// 	console.log(e.currentTarget.dataset.url)
	// 	var id = e.currentTarget.dataset.item;
	// 	var obj='';
	// 	this.data.waitpay.forEach((item,index)=>{
	// 		if(item.id == id) {
	// 			obj = JSON.stringify(item);
	// 		}
	// 	})
		
	// 	// data-url="../orderDetail/orderDetail?type=2"
	// 	if(e.currentTarget.dataset.url){
	// 		wx.navigateTo({
	// 			url:e.currentTarget.dataset.url+'&obj='+obj
	// 		})
	// 	}
	// },
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
		console.log(options);
		if(JSON.stringify(options)!="{}") {
			this.getData(options.status);
		}
		else {
			let status = '';
			this.getData(status)
		}
			
		if(options.status == 10) {
			this.setData({
				titleIndex:2
			})
		}
		if(options.status == 20) {
			this.setData({
				titleIndex:1
			})
		}
		if(options.status == 45) {
			this.setData({
				titleIndex:3
			})
		}
		if(options.status==false) {
			this.setData({
				titleIndex:0
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
	getData(status) {
		var data={};
		var waitpay_copy =[];
		var that = this;
		console.log(status);
		if(status!=''){
			data.status = status;
		}
		request({url:"/api/xcx/user/myOrder",data:data})
            .then(result=>{
							console.log(result);
							that.setData({
								whole:result.data.data.result,
								wholelen:result.data.data.result.length
							})
							var price ;
							that.data.whole.forEach((item,index)=>{
								// if(item.orderStatus == 10) {
								// 	waitpay_copy.push(item);
								// }
								if(item.couponId!=null){
								 price =	((item.price*100)*item.buyNum)/100 - item.couponQuota;
								}
								else {
								 price =	((item.price*100)*item.buyNum)/100;
								}
								item.price = price;
								waitpay_copy.push(item);
							})
							that.setData({
								whole:waitpay_copy
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