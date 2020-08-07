//获取应用实例
const app = getApp()

import {request} from "../../static/js/request.js"

Page({
  data: {
		service:'',
		telNo:'',
		ifxianshi:false,
	  isHengfu:true,
		city1:'厦门',
		tehuitime:[],
	  lunbo:[ 
						{img:"../../static/img/lunbo1.jpg",text:"1",url:'../huodong/purchase/purchase'},
	  			  {img:"../../static/img/lunbo2.jpg",text:"2",url:'../huodong/specialOffer/specialOffer'},
	  ],
	  second:[
	  			  // {img:"../../static/img/shouye/item3.png",text:"特惠抢购",url:'../huodong/purchase/purchase'},
	  			  // {img:"../../static/img/shouye/item1.png",text:"特价门票",url:'../huodong/specialOffer/specialOffer'},
	  			  // {img:"../../static/img/shouye/item4.png",text:"入驻合作",url:'../huodong/settlement/settlement'},
	  			  // {img:"../../static/img/shouye/item2.png",text:"真人CS",url:''},
	  			  // {img:"../../static/img/shouye/item5.png",text:"别墅轰趴",url:''},
	  ],
	  adpic:[
	  			  "../../static/img/shouye/second1.png",
	  			  "../../static/img/shouye/second2.png",
	  			  "../../static/img/shouye/second3.png"
	  ],
	  hongbaoImg:'../../static/img/shouye/hongbao.jpg',
	  itema:[
	  			  // {
	  				//   text:"【方特六一·乐享童心】￥199梦幻王国1大1小亲子套票，开启“童趣模式”缤纷活动",
	  				//   time:"2020-05-29 11:00:00",
	  				//   price:500
	  			  // },
	  			  // {
	  				//   name:"方特梦幻王国",
	  				//   city:"翔安区",
	  				//   juli:"25.7km",
	  				//   text:`【方特六一·乐享童心】￥199梦幻王国1大1小亲子套票，
	  				// 开启“童趣模式”缤纷活动，喜迎六一，给孩子们`,
	  				//   price:88,
	  				//   yuanjia:200,
	  				//   number:2000
	  			  // },
	  			  // {
	  				//   name:"方特梦幻王国",
	  				//   city:"翔安区",
	  				//   juli:"25.7km",
	  				//   text:`【方特六一·乐享童心】￥199梦幻王国1大1小亲子套票，
	  				// 开启“童趣模式”缤纷活动，喜迎六一，给孩子们`,
	  				//   price:88,
	  				//   yuanjia:200,
	  				//   number:2000
	  			  // }
	  ],
	  like:[
	  			  {
	  				  text:`【方特六一·乐享童心】￥199梦幻王国1大1小亲子套票，开启
	  					“童趣模式”缤纷活动，喜迎`,
	  				  price:88,
	  				  yuanjia:450,
	  				  number:2000
	  			  },
	  			  {
	  				  text:`【方特六一·乐享童心】￥199梦幻王国1大1小亲子套票，开启
	  					“童趣模式”缤纷活动，喜迎`,
	  				  price:88,
	  				  yuanjia:450,
	  				  number:2000
	  			  },
	  			  {
	  				  text:`【方特六一·乐享童心】￥199梦幻王国1大1小亲子套票，开启
	  					“童趣模式”缤纷活动，喜迎`,
	  				  price:88,
	  				  yuanjia:450,
	  				  number:2000
	  			  },
	  			  {
	  				  text:`【方特六一·乐享童心】￥199梦幻王国1大1小亲子套票，开启
	  					“童趣模式”缤纷活动，喜迎`,
	  				  price:88,
	  				  yuanjia:450,
	  				  number:2000
	  			  }
	  ],
	  height:app.globalData.statusBarHeight+45,
	  time:[0,0,0,0],
	  daohangColor:""
  },
  onLoad: function (options) {
	 
	  
	  var that=this
	  // wx.getStorage({
	  //   key: 'isHengfu',
	  //   success (res) {
		//   that.setData({
		// 	  isHengfu:res.data
		//   })
	  //   }
		// })
		wx.showLoading({
			title: '加载中',
		})
		that.getData();
		
		// wx.getStorage({
		//   key: 'token',
		//   success (res) {
				

		//   },
		//   fail(error) {
		// 		console.log(error)
		// 		request({url:"/api/xcx/token"})
		// 		.then(result=>{
		// 			if(result.data.message!= "") {
		// 				wx.setStorage({
		// 					key:"token",
		// 					data:result.data.data
		// 				})
		// 				var token = result.data.data;
		// 				that.getData(token);
						
		// 			}					
		// 		})
		// 		.catch(error=> {
		// 			wx.hideLoading();
		// 			wx.showModal({
		// 			title: '提示',
		// 			showCancel: false,
		// 			content: '请求超时，请检查网络',
		// 			success: function () {

		// 			}
		// 			})
		// 		})
		//   }
		// })

		// var token=wx.getStorageSync('token')
		// if(token==''){
		// 	request({url:"/api/xcx/token"})
		// 	.then(result=>{
		// 			wx.setStorage({
		// 				key:"token",
		// 				data:result.data.message
		// 			})
		// 			token = result.data.message
		// 	})
		// }
		// this.getData(token);	  
  },
  onShow(){
	  var that=this;
	  // wx.getStorage({
	  //   key: 'city1',
	  //   success (res) {
	  //     that.setData({
		// 	  city1:res.data
		//   })
	  //   }
	  // })
	},
	concat(){
		var category_copy = this.data.second;
		category_copy[1].url = category_copy[1].url.concat('&name='+this.data.second[1].name);
		category_copy[3].url = category_copy[3].url.concat('&name='+this.data.second[3].name);
		category_copy[4].url = category_copy[4].url.concat('&name='+this.data.second[4].name);
		console.log(category_copy)
		this.setData({
			second:category_copy
		})
	},
	getData() {
		var that = this;
		var data = {}
		request({url:"/api/xcx/index",data:data})
					.then(result=>{
						wx.hideLoading();
						console.log(result);
						if(result.data == "") {
							wx.showToast({
								title: '加载失败',
								icon: none,
								duration: 2000
							})
						}
						that.setData ({
							service:result.data.data.service,
							telNo:result.data.data.telNo,
							second: result.data.data.category,
							lunbo: result.data.data.banner,
							itema: result.data.data.goods,
							like: result.data.data.likes,
							hongbaoImg: result.data.data.hongbao,
							adpic:result.data.data.adpic,
						})
						that.concat();
						getApp().globalData.service = result.data.data.service;
						getApp().globalData.telNo = result.data.data.telNo;
						that.setData ({
							ifxianshi:true
						})
						that.clock();
					})
					.catch(error=> {
						wx.hideLoading();
						wx.showModal({
						title: '提示',
						showCancel: false,
						content: '请求超时，请检查网络',
						success: function () {
						}
						})
					})

						request({url:"/api/xcx/citys",data:data})
						.then(result=>{
							console.log(result.data.data);
							that.setData({
								city1:result.data.data.allCitys.name,
							})
						})
	},
				// 获取商品收藏
	getcollettion() {
			var data = {}
			request({url:"/api/xcx/collect/myCollect",data:data})
			.then(result=>{
				console.log(result.data)
			})
	},
  clock(){
	var that=this;
	var tehuitime = [];
	var tehuitimeobj = {};

	console.log(that.data.itema);
		that.data.itema.forEach((item,index) => {
			tehuitimeobj = {}
			if(item.tehui == true) {
				tehuitimeobj.id = item.id;
				tehuitimeobj.endBuyDate = item.endBuyDate;
				tehuitimeobj.beginBuyDate = item.beginBuyDate;				
				// var time_copy =	that.jisuan(item.endBuyDate)
				var time_copy = [];
				// console.log(time_copy);
				tehuitimeobj.time = time_copy;
				tehuitime.push(tehuitimeobj);
			}
		})
		that.setData({
			tehuitime:tehuitime
		})
	var Interval=setInterval(function(){
		var tehuitime_copy = that.data.tehuitime;
		tehuitime_copy.forEach((item,index)=>{
			var endtime = item.endBuyDate;
			var date=new Date();
			var endtime_copy = new Date(Date.parse(endtime));
      if(date<=endtime_copy){
				var time_copy =	that.jisuan(endtime);
				item.time = time_copy;
			}	
			else if(date>endtime_copy)	{
				item.time = ['已过期'];
			}	
		})
		that.setData({
			tehuitime:tehuitime_copy
		})
	},1000)
	},
	jisuan(endtime) {

			var today=new Date()
			const h=today.getHours()
			const m=today.getMinutes()
			const s=today.getSeconds()
			//结束时间
			var stopTime_copy = endtime+':00';
			var stopTime=new Date(stopTime_copy)
			const stopH=stopTime.getHours()
			const stopM=stopTime.getMinutes()
			const stopS=stopTime.getSeconds()
			
			//倒计时毫秒数
			var shenyu=stopTime.getTime()-today.getTime()
			
			var shengyuD=parseInt(shenyu/(60*60*24*1000))
			var D=parseInt(shenyu)-parseInt(shengyuD*60*60*24*1000)
			var shengyuH=parseInt(D/(60*60*1000))
			var H=D-shengyuH*60*60*1000
			var shengyuM=parseInt(H/(60*1000))
			var M=H-shengyuM*60*1000
			var S=parseInt((shenyu-shengyuD*60*60*24*1000-shengyuH*60*60*1000-shengyuM*60*1000)/1000)
		//	that.setData({
			var	time = [shengyuD,shengyuH,shengyuM,S]
			//})
			if(shengyuD==0&&shengyuH==0&&shengyuM==0&&S==0){
				clearInterval(interval)
			}
			return time;	
	},
		onPullDownRefresh:function(){
			//显示顶部刷新图标
					wx.showNavigationBarLoading();
				//要刷新请求服务器的方法
				wx.showLoading({
					title: '加载中',
				})
				this.getData();
			//隐藏导航栏加载框
				wx.hideNavigationBarLoading();
				//停止下拉事件
				wx.stopPullDownRefresh();
	},
  sousuo1(){
	  wx.switchTab({
		  url:"../sousuo/sousuo"
	  })
	},
	changeUrlb(e){
		console.log(e.currentTarget.dataset.url)
		var endtime=e.currentTarget.dataset.endtime;
		var url_copy = e.currentTarget.dataset.url+'&endtime='+endtime;
		if(e.currentTarget.dataset.url){
			wx.navigateTo({
				url:url_copy
			})
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
  chooseCity(){
	  wx.navigateTo({
		  url:"../city/city?city="+this.data.city1
	  })
  },
  cancelHengfu(){
	  this.setData({
			isHengfu:false,
			height:this.data.height-33
	  })
	  wx.setStorage({
	    key:"isHengfu",
	    data:false
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
  
  onShareAppMessage: function () {
   
      return {
        path:`/pages/wode/wode` 
      }
   
    },
	
})
