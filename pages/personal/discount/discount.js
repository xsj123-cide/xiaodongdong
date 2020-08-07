// pages/discount/discount/discount.js
import {request} from "../../../static/js/request.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    conponList:[],
    isget:false,
	discount:[
		{money:20,
		need:498,
		range:'全平台可用',
		whole:4000,
		used:1000,
		percent:0,
		isReceive:false},
		{money:200,
		need:3999,
		range:'指定商家使用',
		text:'指定套餐',
		whole:4000,
		used:800,
		percent:0,
		isReceive:false},
		{money:200,
		need:3999,
		range:'指定商家使用',
		text:'指定套餐',
		whole:4000,
		used:3200,
		percent:0,
		isReceive:true}
	]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
	
  },
  getData() {
    var data = {}
    var that = this;
    var shuju;
    request({url:"/api/xcx/coupon/list",data:data})
		.then(result=>{
      console.log(result.data)
      that.setData({
        conponList:result.data.data.result
      })
      shuju = that.data.conponList
      // for(let i=0;i<shuju.length;i++){
      //   let percent=shuju[i].getNum/shuju[i].nums
      //   shuju[i].percent=percent*100
      // }
      shuju.forEach((item,index)=> {
        let percent = (item.getNum/item.nums)*100;
        item.percent = percent.toFixed(2);
      })
      console.log(shuju);
      this.setData({
        conponList:shuju
      })
		})
  },
  getdicount(e){
    var that = this;
    console.log(e.currentTarget.dataset.id);
    var couponId = e.currentTarget.dataset.id;
    var data = {};
    data.couponId = couponId;
    request({url:"/api/xcx/coupon/get",data:data})
		.then(result=>{
      console.log(result.data);
      that.getData();
      // this.setData({
      //   isget:true
      // })
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