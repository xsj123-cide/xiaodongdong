// pages/huodong/baomingInfo/baomingInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
		taocanIndex:-1,
		state1Index:-1,
		isZhezhao:false,
		ot:0
  },

	taocan1(e){
		var index=e.currentTarget.dataset.index
		this.setData({
			taocanIndex:index,
		})
	},
	state1(e){
		var index=e.currentTarget.dataset.index
		this.setData({
			state1Index:index,
		})
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
	shaixuan1(){
		this.setData({
			isZhezhao:true
		})
	},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		this.setData({
			array1:this.data.array
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