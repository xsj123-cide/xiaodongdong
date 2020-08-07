// pages/personal/myDiscount/myDiscount.js
import {request} from "../../../static/js/request.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    conponList:[],
    conponListlen:0,
    conponListalen:0,
    iconif:false,
    totalmoney:'',
    couponIdnow:'',
    coumoneynoew:'',
	  discount:[
	  	{money:20,
	  	need:498,
	  	range:'全平台可用',
	  	time:'2019.01.11-2019.01.30'},
	  	{money:200,
	  	need:3999,
	  	range:'指定商家使用',
	  	text:'指定套餐',
	  	time:'2019.01.11-2019.01.30'},
	  	{money:200,
	  	need:3999,
	  	range:'指定商家使用',
	  	text:'指定套餐',
	  	time:'2019.01.11-2019.01.30'}
	  ],
	  usedDiscount:[
	  	{money:20,
	  	need:498,
	  	range:'全平台可用',
	  	time:'2019.01.11-2019.01.30',
	  	text1:'已使用'},
	  	{money:200,
	  	need:3999,
	  	range:'指定商家使用',
	  	text:'指定套餐',
	  	time:'2019.01.11-2019.01.30',
	  	text1:'已过期'},
	  	{money:200,
	  	need:3999,
	  	range:'指定商家使用',
	  	text:'指定套餐',
	  	time:'2019.01.11-2019.01.30',
	  	text1:'已使用'}
	  ],
	titleIndex:0
  },
  changeUrl(e){
    console.log(e.currentTarget.dataset.url)
    if(e.currentTarget.dataset.url){
      wx.switchTab({
				url:e.currentTarget.dataset.url
			})
    }
  },
	changeIndex(e){
		this.setData({
			titleIndex:e.currentTarget.dataset.index
    })
    if(e.currentTarget.dataset.index==1){
      this.getDataa() 
    }else if(e.currentTarget.dataset.index==0){
      this.getData(this.data.totalmoney) 
    }
  },
  chose(e) {
    console.log(e)
    var couponIdnow = e.currentTarget.dataset.id;
    var coumoneynoew = e.currentTarget.dataset.coumoney;
    if(e.currentTarget.dataset.id==this.data.couponIdnow) {
      this.setData({
        iconif:false,
        couponIdnow:'',
        coumoneynoew:''
      })
    }else {
      this.setData({
        iconif:true,
        couponIdnow:couponIdnow,
        coumoneynoew:coumoneynoew
      })
    }  
    console.log(this.data.coumoneynoew) 
  },
  back(infos) {
    // var couponId = infos.currentTarget.dataset.couponId;
    var couponId = this.data.couponIdnow;
    var coumoney = this.data.coumoneynoew;
    // var coumoney = infos.currentTarget.dataset.coumoney;
    let pages = getCurrentPages();
    let prevPage = pages[ pages.length - 2 ]; 
    prevPage.setData({
      couponId: couponId,
      coumoney:coumoney
    })
    wx.navigateBack({
      delta: 1  
    })  
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var totalmoney = options.totalmoney;
    if(totalmoney!=undefined) {
      this.setData({
        totalmoney:totalmoney
      })
    }
    this.getData(totalmoney)
  },
  getDataa() {
    var data = {}
      var that = this;
      data.status = 2;
    var conponList_copya=[];
      request({url:"/api/xcx/coupon/myConpon",data:data})
      .then(result=>{
        console.log(result.data)
        that.setData({
          conponLista:result.data.data.result
        })
        var conponList_copy = that.data.conponLista
        conponList_copy.forEach((item,index)=> {
          var beginTime = item.beginTime.substr(0,10);
          var endTime = item.endTime.substr(0,10);
          item.beginTime = beginTime;
          item.endTime = endTime;  
          conponList_copya.push(item);

        })
        console.log(conponList_copya);
        var conponListalen = conponList_copya.length;
        that.setData({
          conponLista:conponList_copya,
          conponListalen:conponListalen
        })
		})
  },
  getData(totalmoney) {
    var data = {}
    var that = this;
    var obj;
    data.status = 1;
    var conponList_copya=[];
    request({url:"/api/xcx/coupon/myConpon",data:data})
		.then(result=>{
      console.log(result.data)
      that.setData({
        conponList:result.data.data.result
      })
      var conponList_copy = that.data.conponList
      conponList_copy.forEach((item,index)=> {
        var beginTime = item.beginTime.substr(0,10);
        var endTime = item.endTime.substr(0,10);
        item.beginTime = beginTime;
        item.endTime = endTime;
         if(totalmoney!=''&&totalmoney<item.astrict){
            item.flag = 'yes'
            item.color = 'gray'
          }
          else if(totalmoney!=''&&totalmoney>=item.astrict){
            item.flag = 'yes'
          }
        conponList_copya.push(item);
      })
      console.log(conponList_copya);
      var conponListlen = conponList_copya.length;
      that.setData({
        conponList:conponList_copya,
        conponListlen:conponListlen
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