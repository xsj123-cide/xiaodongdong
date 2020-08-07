// pages/huodong/purchase/purchase.js
import {request} from "../../../static/js/request.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
		shuju:{
      tehuitime:[],
			crazy:[
				{
					img:'../../../static/img/lunbo1.jpg',
					text1:`【超级玩乐】龙海中心小学三年级
					一班8月20`,
					present:100,
					total:300,
					percent:0,
					yuanjia:280.00,
					now:220.00
				},
				{
					img:'../../../static/img/lunbo1.jpg',
					text1:`【超级玩乐】龙海中心小学三年级
					一班8月20`,
					present:100,
					total:300,
					percent:0,
					yuanjia:280.00,
					now:220.00
				}
			]
		},
		titleIndex:0
  },

	changeIndex(e){
		this.setData({
			titleIndex:e.currentTarget.dataset.index
    })
    this.loadmes();
	},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var shuju=this.data.shuju;
    this.loadmes();
		// for(var i=0;i<shuju.crazy.length;i++){
		// 	shuju.crazy[i].precent=100*(shuju.crazy[i].present/shuju.crazy[i].total)
		// }
		// this.setData({
		// 	shuju:shuju
		// })
  },
  loadmes() {
    // var token=wx.getStorageSync('token')
		var data = {
      // token: token,
      status: this.data.titleIndex
		}
    request({url:"/api/xcx/product/tehui",data:data})
		.then(result=>{
      console.log(result);
        this.setData ({
          shuju:result.data.data
        })
        if(this.data.titleIndex==0) {
          var shuju_copy=result.data.data;
          shuju_copy.forEach((item,index)=>{
            item.precent= 100*(item.sales/item.totals)
          })
          this.setData ({
            shuju:shuju_copy
          })
        }
        this.clock();
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
  clock(){
    var that=this;
    var tehuitime = [];
    var tehuitimeobj = {};
  
    console.log(that.data.itema);
      that.data.shuju.forEach((item,index) => {
        tehuitimeobj = {}
          tehuitimeobj.id = item.id;
          tehuitimeobj.beginBuyDate = item.beginBuyDate;				
          var time_copy = [];
          tehuitimeobj.time = time_copy;
          tehuitime.push(tehuitimeobj);
      })
      that.setData({
        tehuitime:tehuitime
      })
    var Interval=setInterval(function(){
      var tehuitime_copy = that.data.tehuitime;
      tehuitime_copy.forEach((item,index)=>{
        var begintime = item.beginBuyDate;
        var date=new Date();
        var endtime_copy = new Date(Date.parse(begintime));
        if(date<=endtime_copy){
          var time_copy =	that.jisuan(begintime);
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