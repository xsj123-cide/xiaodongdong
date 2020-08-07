const app=getApp()
import {request} from "../../static/js/request.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:[],
    hotSearchs:[],
    tuijians:[],
    lishilen:0,
    tuijianslen:0,
    hotSearchslen:0,
    inputvalue:'',
    ifxianshi:false,
	  remen:[
	  	"方特","万象城","方特","万象城","方特","万象城","方特","万象城",
	  ],
	  shangqu:[
	  	{img:"../../static/img/lunbo1.jpg",
	  	text:"加州商业广场"},
	  	{img:"../../static/img/lunbo2.jpg",
	  	text:"万象城"},
	  	{img:"../../static/img/lunbo1.jpg",
	  	text:"方特"}
	  ],
	  lishi:[
	  	// "加州商业广场","万象城","方特","万象城","方特","万象城","方特","万象城",
	  ],
	height:app.globalData.statusBarHeight+45,
	inputText:''
  },
  searchlishi(e){
    console.log(e.currentTarget.dataset.key);
    this.setData({
      inputvalue:e.currentTarget.dataset.key
    })
    var data = {
      keyword: e.currentTarget.dataset.key,
      cateId: ''
    }
    request({url:"/api/xcx/product/search",data:data})
		.then(result=>{
			console.log(result);
        this.setData ({
          item:result.data.data
        })
		})
  },
	inputChange(e){
		this.setData({
			inputText:e.detail.value
    })
    // var token=wx.getStorageSync('token')
		var data = {
      // token: token,
      keyword: this.data.inputText,
      cateId: ''
		}
    request({url:"/api/xcx/product/search",data:data})
		.then(result=>{
			console.log(result);
        this.setData ({
          item:result.data.data
        })
      var lishilen = wx.getStorageSync('lishi');
      this.setData({
        lishilen:lishilen
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
  savehistory(e) {
    var item = e.detail.value;
    item = item.replace(/\s*/g,"")
    var lishiarray = [];
    var that = this;
    if(item!=''){
      wx.getStorage({
        key: 'lishi',
        success (res) {
          var exsit = res.data;
          if(exsit.length>10){
            exsit.shift();
          }
          exsit.push(item);
          wx.setStorage({
            key:"lishi",
            data:exsit,
            success(res) {
              var exsita = wx.getStorageSync('lishi');
              console.log(exsita);
              that.setData({
                lishi:exsita
              })
            }
          })
        },
        fail(error) {
          lishiarray.push(item);
          wx.setStorage({
            key:"lishi",
            data:lishiarray,
            success (res) {
              var exsita = wx.getStorageSync('lishi');
              console.log(exsita);
              that.setData({
                lishi:exsita
              })
            }
          })
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('xxxxxxxx');
    this.getData();
  },
  getData() {
    var data = {};
    request({url:"/api/xcx/product/searchInit",data:data})
		.then(result=>{
      console.log(result.data)
      var tuijians = result.data.data.tuijians
      var tuijianslen = tuijians.length;
      var hotSearchslen = result.data.data.hotSearchs.length;
      this.setData({
        // hotSearchs:result.data
        hotSearchs:result.data.data.hotSearchs,
        tuijians:tuijians,
        tuijianslen:tuijianslen,
        hotSearchslen:hotSearchslen
      })
      var lishilen = wx.getStorageSync('lishi');
      if(lishilen=='') {
        lishilen= 0 ;
      }
      this.setData({
        lishilen:lishilen
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
    var that = this
    wx.getStorage({
		  key: 'lishi',
		  success (res) {
        var exsit = res.data;
        that.setData({
          lishi:exsit
        })
		  },
		  fail(error) {
        that.setData({
          lishi:[]
        })
      } 
    })
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