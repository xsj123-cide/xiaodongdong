// pages/personal/userInfo/userInfo.js
import {request} from "../../../static/js/request.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city:"",
    detail_ad:'',
    Idcard:'',
    userinfo:{},
		user:{
			
    },
    phoneNumber: ""
  },
  getPhoneNumber(e){
    var that = this;
    var ivObj = e.detail.iv;
    var telObj = e.detail.encryptedData;
    var token=wx.getStorageSync('token')
    var session_key = wx.getStorageSync('session_key')
        var data={token:token,encryptedData: telObj,session_key:session_key,iv: ivObj}
        console.log(data)
        request({url:"/api/xcx/getMobile",data:data})
					.then(result=>{
            console.log(result.data);
              var phoneObj = result.data.data.phoneNumber;
              console.log("手机号=", phoneObj)
              var userinfobj = this.data.userinfo;
              userinfobj.mobile = phoneObj
              that.setData({
                userinfo: userinfobj
              })
          })
          .catch(err=> {
              wx.showToast({
                title: '失败',
                icon: 'none',
                duration: 2000
              })
            }
          )
    
  },
	cityChange(e){
		// var city
		// if(e.detail.value[0]==e.detail.value[1]){
		// 	city=e.detail.value[1]+e.detail.value[2]
		// }else{
		// 	city=e.detail.value[0]+e.detail.value[1]+e.detail.value[2]
    // }
    var userinfo_cppy = this.data.userinfo;
    userinfo_cppy.provinceName = e.detail.value[0];
    userinfo_cppy.cityName = e.detail.value[1];
    userinfo_cppy.areaName = e.detail.value[2];
    this.setData ({
      userinfo:userinfo_cppy
    })
	},
	save1(){
    var token=wx.getStorageSync('token')

		var data = {
      token: token,
      address:this.data.userinfo.address,
      areaName:this.data.userinfo.areaName,
      cardNo:this.data.userinfo.cardNo,
      cityName:this.data.userinfo.cityName,
      mobile:this.data.userinfo.mobile,
      provinceName:this.data.userinfo.provinceName,
      trueName:this.data.userinfo.trueName
		} 
    request({url:"/api/xcx/user/save",data:data})
		.then(result=>{
			console.log(result);
		})
		wx.navigateBack({
			delta:1
		})
	},
	getPhone1(e){
		console.log(e.detail)
	},
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		var that=this
	  this.loadmes();
		wx.getStorage({
		  key: 'user',
		  success (res) {
			that.setData({
				user:res.data.userInfo
			})
		  }
		})
  },
  Idcard(e) {
    var userinfo_cppy = this.data.userinfo;
    userinfo_cppy.cardNo = e.detail.value;
    this.setData ({
      userinfo:userinfo_cppy
    })
  },
  trueName(e) {
    var userinfo_cppy = this.data.userinfo;
    userinfo_cppy.trueName = e.detail.value;
    this.setData ({
      userinfo:userinfo_cppy
    })
  },
  mobile(e) {
    var userinfo_cppy = this.data.userinfo;
    userinfo_cppy.mobile = e.detail.value;
    this.setData ({
      userinfo:userinfo_cppy
    })
  },
  detail_ad(e) {
    var userinfo_cppy = this.data.userinfo;
    userinfo_cppy.address = e.detail.value;
    this.setData ({
      userinfo:userinfo_cppy
    })
    console.log(this.data.userinfo.address);
  },
  loadmes(){
    var token=wx.getStorageSync('token')
		var data = {
			token: token
		}
		request({url:"/api/xcx/user/get",data:data})
		.then(result=>{
			console.log(result);
        this.setData ({
          userinfo:result.data.data
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