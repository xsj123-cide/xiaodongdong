// pages/huodong/order/order.js
import {request} from "../../../static/js/request.js"
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
		id:'',
		features:[],
		name: "",
		ifshouc: true,
		imgArray:[
			"../../../static/img/lunbo1.jpg",
			"../../../static/img/lunbo2.jpg",
		],
	  first:{
		
	  	text1:"班级研学活动",
	  	text2:"自然研学",
	  	text3:`龙海中心小学三年级一班8月20日厦门诚意
	  	科技馆“探索科技的力量”秋季研学活动`,
	  	// button:[
	  	// 	"红色研究",
	  	// 	"爱国主题",
	  	// 	"10个积分",
	  	// 	"两天一夜"
	  	// ],
	  	array:[
	  		"../../../static/img/shouye/touxiang1.jpg",
	  		"../../../static/img/shouye/touxiang2.jpg",
	  		"","","","","","",""
	  	],
	  	total:1000,
	  	shengyu:200,
	  	bianhao:2000,
	  	name:"陪你到天明"
		},
		detail:``,
		bmzxs:[
						// '需提前2小时购买，方可使用 需提前2小时购买，方可使用',
						// '未使用可随时退款',
						// '持「悦动卷」先换票在使用'
						// {
						// 	name: "需提前购买",
						// 	remark: "需提前2小时购买"
						// }
		],
	  second:{
	  	time:`1天  2020年5月10日8:00-17:00`,
	  	jihe:'福建省厦门市观音山',
	  	huodong:'福建省厦门市观音山'
	  },
	  taocans:[
	  	{
	  		name:'A',
	  		img:"../../../static/img/lunbo1.jpg",
	  		title:"一大一小套餐",
	  		baoming:200,
	  		price:105.00
	  	},
	  	{
	  		name:'B',
	  		img:"../../../static/img/lunbo1.jpg",
	  		title:"一大一小套餐",
	  		baoming:200,
	  		price:105.00
	  	}
		],
	
	  fourth:{
	  	img1:'../../../static/img/lunbo1.jpg',
	  	name:'龙海中心小学三年级一班',
	  	bear:'小东东教育',
	  	tiwen:[
	  		{
	  			title:'需要驾驶证吗 需要驾驶证吗',
	  			answer:'不需要',
	  			number:10
	  		},
	  		{
	  			title:'需要驾驶证吗 需要驾驶证吗',
	  			answer:'不需要',
	  			number:10
	  		}
	  	],
	  	
	  	shuoming:[
	  		'费用费用费用',
	  		'费用不含费用',
	  		'政策费用费用政策'
	  	],
	  	jihe:'每日上午9;00-10;00',
	  	other:[
	  		'发票说明发票说明发票说明发票说明',
	  		'订单查询订单查询订单查询'
	  	]
	  },
	  more:[
	  	{
	  		img:'../../../static/img/shouye/haibao.jpg',
	  		title:`【方特六一·乐享童心】￥199梦幻王国1大1小亲子套票，开启
	  			“童趣模式”缤纷活动`,
	  		price:128.00,
	  		yuanjia:472.00,
	  		number:4567
	  	},
	  	{
	  		img:'../../../static/img/shouye/haibao.jpg',
	  		title:`【方特六一·乐享童心】￥199梦幻王国1大1小亲子套票，开启
	  			“童趣模式”缤纷活动`,
	  		price:128.00,
	  		yuanjia:472.00,
	  		number:4567
	  	},
	  	{
	  		img:'../../../static/img/shouye/haibao.jpg',
	  		title:`【方特六一·乐享童心】￥199梦幻王国1大1小亲子套票，开启
	  			“童趣模式”缤纷活动`,
	  		price:128.00,
	  		yuanjia:472.00,
	  		number:4567
	  	},
	  	{
	  		img:'../../../static/img/shouye/haibao.jpg',
	  		title:`【方特六一·乐享童心】￥199梦幻王国1大1小亲子套票，开启
	  			“童趣模式”缤纷活动`,
	  		price:128.00,
	  		yuanjia:472.00,
	  		number:4567
	  	}
	  ],
	  problem:[
		{
			title:'需要驾驶证吗1 需要驾驶证吗1',
			number:10,
			time:'2020-05-23',
			array:[
				{img:'../../../static/img/lunbo1.jpg',
				name:'xufeng1234',
				time:'2020-05-23',
				text:'不需要'},
				{img:'../../../static/img/lunbo1.jpg',
				name:'xufeng1234',
				time:'2020-05-23',
				text:'不需要'},
				{img:'../../../static/img/lunbo1.jpg',
				name:'xufeng1234',
				time:'2020-05-23',
				text:'不需要'}
			]
		},
		{
			title:'需要驾驶证吗2 需要驾驶证吗2',
			number:10,
			time:'2020-05-23',
			array:[
				{img:'../../../static/img/lunbo1.jpg',
				name:'xufeng1234',
				time:'2020-05-23',
				text:'不需要'},
				{img:'../../../static/img/lunbo1.jpg',
				name:'xufeng1234',
				time:'2020-05-23',
				text:'不需要'},
				{img:'../../../static/img/lunbo1.jpg',
				name:'xufeng1234',
				time:'2020-05-23',
				text:'不需要'}
			]
		}   
	  ],
	  problemIndex:0,
		//倒计时的时间
		time:[0,0,0,0],
		/* 活动slider */
		slider:0,
		/* swiper Index */
		index:-1,
		/* scrollHeight */
		height1:'calc(100vh - '+app.globalData.statusBarHeight+'px - 45px - 100rpx)',
		/* 滑轮指定滚动id */
		scrollItem:"",
		/* 遮罩文本 */
		zhezhaoText:`龙海中心小学三年级一班8月20日厦门诚意科技馆“探索科技的力量”秋季研学活动`,
		isZhezhao:false,
		isProblem:false,
		isHaibao:false
  },
	changeUrl(e){
		console.log(e.currentTarget.dataset.url)
		if(e.currentTarget.dataset.url){
			wx.navigateTo({
				url:e.currentTarget.dataset.url
			})
		}
	},
	getUserinfo(e){
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
					var token=wx.getStorageSync('token')
					var data={token:token,code:res.code}
					data.userInfo=JSON.stringify(useinfo);
					// console.log(data)
					request({url:"/api/xcx/login",data:data})
					.then(result=>{
						console.log(result.data)
						wx.setStorage({
						  key:"session_key",
						  data:result.data.message.session_key
						})
					})
				}
			}
		})
	},
	zhezhao1(e){
		var type=e.currentTarget.dataset.type
		console.log(type)
		if(type=='haibao'){
			this.setData({
				isZhezhao:true,
				isHaibao:true
			})
		}else{
			this.setData({
				isZhezhao:true,
				isProblem:true
			})
		}
	},
	cancelZhezhao(){
		if(this.data.isHaibao==true){
			this.setData({
				isZhezhao:false,
				isHaibao:false
			})
		}else{
			this.setData({
				isZhezhao:false,
				isProblem:false
			})
		}
	},
	haibao1(e){
		var type=e.currentTarget.dataset.type
		this.setData({
			isZhezhao:false,
			isHaibao:false
		})
		if(type==false){
			var data=this.data.zhezhaoText
			wx.setClipboardData({
			  data: data,
			  success (res) {
			    wx.getClipboardData({
			      success (res) {
			        console.log(res.data)
			      }
			    })
			  }
			})
		}else{
			wx.navigateTo({
				url:'../haibao/haibao'
			})
		}
	},
	/* 更换问题 */
	changeProblem(e){
		var type=e.currentTarget.dataset.type
		if(type=="left"&&this.data.problemIndex!=0){
			this.setData({
				problemIndex:this.data.problemIndex-1
			})
		}else if(type=="right"&&this.data.problemIndex!=this.data.problem.length-1){
			this.setData({
				problemIndex:this.data.problemIndex+1
			})
		}
	},
	cancelProblem(){
		this.setData({
			isZhezhao:false,
			isProblem:false
		})
	},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		this.setData({
			id:options.id
		})
		this.LoadMes(options.id);
	  var slider=(1-this.data.first.shengyu/this.data.first.total)*100
	  this.setData({
		  slider:slider
	  })
	  
	  /* this.clock() */
	},
	changeicon() {
		var that = this
		that.setData({
			ifshouc:!this.data.ifshouc
	})
	},
	LoadMes(e) {
		if(e=="") {
			wx.showToast({
				title: '加载失败',
				icon: none,
				duration: 2000
			})
		}
		var that = this;
		var token=wx.getStorageSync('token')
		var data = {
			token: token
		}
		request({url:"/api/xcx/product/"+e,data:data})
		.then(result=>{
			console.log(result);
			that.setData ({
				detail: result.data.data.detail,
				bmzxs: result.data.data.bmzxs,
				features:result.data.data.features,
				name:result.data.data.name,
				taocans:result.data.data.taocans,
				imgArray:result.data.data.covers
			})
		})
	},
  clock(){
	  var that=this
	  var interval=setInterval(function(){
		    var today=new Date()
	  		const h=today.getHours()
		    const m=today.getMinutes()
		    const s=today.getSeconds()
			
			//结束时间
			var stopTime=new Date("2020-07-20 00:00:00")
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
			that.setData({
				time:[shengyuD,shengyuH,shengyuM,S]
			})
			if(shengyuD==0&&shengyuH==0&&shengyuM==0&&S==0){
				clearInterval(interval)
			}
	  },1000)
		
  },
  changeIndex(e){
	  var scrollItem
	  if(e.target.dataset.id==0){
		  scrollItem="wenti"
	  }else if(e.target.dataset.id==1){
		  scrollItem="xuzhi"
	  }else{
		  scrollItem="xiangqing"
	  }
	  this.setData({
		  index:e.target.dataset.id,
		  scrollItem:scrollItem
	  })
  },
  baoming1(){
	  wx.navigateTo({
		  url:"../baomingBuy/baomingBuy"
	  })
  },
  baomingInfo(){
	  wx.navigateTo({
	  		  url:"../baomingInfo/baomingInfo"
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