// pages/huodong/baomingInfo/baomingInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		callGetPhone:'17750637563',
		menus:[],
		array:[
			{
				img:'../../../static/img/shouye/touxiang1.jpg',
				name:'王大壮',
				taocan:'A',
				number:2,
				isBaoming:true
			},
			{
				img:'../../../static/img/shouye/touxiang2.jpg',
				name:'王大壮',
				taocan:'B',
				number:2,
				isBaoming:false
			},
			{
				img:'../../../static/img/shouye/touxiang1.jpg',
				name:'王大壮',
				taocan:'A',
				number:2,
				isBaoming:true
			},
			{
				img:'../../../static/img/shouye/touxiang2.jpg',
				name:'王大壮',
				taocan:'B',
				number:2,
				isBaoming:false
			},
			{
				img:'../../../static/img/shouye/touxiang1.jpg',
				name:'王大壮',
				taocan:'A',
				number:2,
				isBaoming:true
			},
			{
				img:'../../../static/img/shouye/touxiang2.jpg',
				name:'王大壮',
				taocan:'A',
				number:2,
				isBaoming:false
			}
		],
		array1:[],
		taocan:[
			'A','B'
		],
		zhezhaoText:`龙海中心小学三年级一班8月20日厦门诚意科技馆“探索科技的力量”秋季研学活动`,
		taocanIndex:-1,
		state1Index:-1,
		isZhezhao:false,
		isZhezhaoa:false,
		isHaibao:false,
		ot:0
  },
	cancelZhezhao(){
		if(this.data.isHaibao==true){
			this.setData({
				isZhezhaoa:false,
				isHaibao:false
			})
		}else{
			this.setData({
				isZhezhao:false,
			})
		}
	},
	taocan1(e){
		var index=e.currentTarget.dataset.index
		this.setData({
			taocanIndex:index,
		})
	},
	zhezhao1(e){
		var type=e.currentTarget.dataset.type
		console.log(e)
		if(type=='haibao'){
			this.setData({
				isZhezhaoa:true,
				isHaibao:true
			})
		}else{
			this.setData({
				isZhezhaoa:true,
			})
		}
	},
	haibao1(e){
		var type=e.currentTarget.dataset.type
		this.setData({
			isZhezhaoa:false,
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
	changeUrla(e) {
		console.log(e.currentTarget.dataset.url)
		if(e.currentTarget.dataset.url){
			wx.switchTab({
				url:e.currentTarget.dataset.url
			})
		}
	},
	state1(e){
		var index=e.currentTarget.dataset.index
		this.setData({
			state1Index:index,
		})
	},
	callPhone(phoneNumber) {
		     wx.makePhoneCall({
		       phoneNumber: phoneNumber,
		       success: function() {
		         console.log("拨打电话成功！")
		       },
		       fail: function() {
		         console.log("拨打电话失败！")
		       }
		     })
	},
	callGetPhone(e) {
		let telPhone = e.currentTarget.dataset.getphone;
   this.callPhone(telPhone);
	},
	save1(){
		var array=this.data.array
		var taocan
		if(this.data.taocanIndex!=-1){
			taocan=this.data.taocan[this.data.taocanIndex]
		}
		var state1
		if(this.data.state1Index!=-1){
			if(this.data.state1Index==0){
				state1=true
			}else{
				state1=false
			}
		}
		var array1=[]
		if(taocan!=undefined&&state1!=undefined){
			array.forEach(item=>{
				if(item.taocan==taocan&&item.isBaoming==state1){
					array1.push(item)
				}
			})
		}
		if(taocan!=undefined&&state1==undefined){
			array.forEach(item=>{
				if(item.taocan==taocan){
					array1.push(item)
				}
			})
		}
		if(taocan==undefined&&state1!=undefined){
			array.forEach(item=>{
				if(item.isBaoming==state1){
					array1.push(item)
				}
			})
		}
		if(taocan==undefined&&state1==undefined){
			return
		}
		this.setData({
			array1:array1,
			isZhezhao:false
		})
		
	},
	onShareAppMessage (e) {
		console.log("ssssss");
		return {
				title: '肯德基',
				path: '/pages/product/product_detail/product_detail?id=1000', 
				desc: '描述',  
				imageUrl: '../../../static/img/shouye/haibao.jpg'
			}
		},
	shaixuan1(){
		this.setData({
			isZhezhao:true
		})
	},
	goBack(){
		wx.navigateBack({
			delta:1
		})
	},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		console.log(JSON.parse(options.baoinfo))
		this.setData({
			array1:JSON.parse(options.baoinfo),
			menus:JSON.parse(options.menus)
		})
		// this.setData({
		// 	array1:this.data.array
		// })
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