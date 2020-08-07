// components/jingxuan/jingxuan.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    addr:{
      type:String,
      default:'广东佛山市祖庙'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    address:'广东佛山市祖庙',
    longitude:116.4965075,
    latitude: 40.006103,
    speed:0,
    accuracy:0,
    markers: [
      {
        iconPath: "../public/markers.png",
        id: 0,
        latitude: 30.281714,
        longitude: 120.180895,
        width: 40,
        height: 40,
        label: {
          content: "下城",
          color: "#fff",
          fontSize: 12,
          anchorX: -(0.5 * (3 * 24))/2,
          textAlign: "center"
        }
      }]
  },
  ready: function () {
    console.log(this.properties.addr)
    var that=this
    that.setData({
      address :that.properties.addr
    })
    // wx.showLoading({
    //   title:"定位中",
    //   mask:true
    // })
    // wx.getLocation({
    //   type: 'gcj02',
    //   altitude:true,//高精度定位
    //   //定位成功，更新定位结果
    //   success: function (res) {
    //     var latitude = res.latitude
    //     var longitude = res.longitude
    //     var speed = res.speed
    //     var accuracy = res.accuracy
       
    //     that.setData({
    //       longitude:longitude,
    //       latitude: latitude,
    //       speed: speed,
    //       accuracy: accuracy
    //     })
    //   },
    //   //定位失败回调
    //   fail:function(){
    //     wx.showToast({
    //       title:"定位失败",
    //       icon:"none"
    //     })
    //   },
 
    //   complete:function(){
    //     //隐藏定位中信息进度
    //     wx.hideLoading()
    //   }
 
    // })
    that.openMap();
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    openMap: function () {
      var that = this;
      // 引入SDK核心类
      var QQMapWX = require('../../static/js/qqmap-wx-jssdk.min.js');
  
      // 实例化API核心类
      var demo = new QQMapWX({
        key:'DZ4BZ-FPFWJ-7UEFW-KULVF-RZZUK-KUFK3' // 必填
      });
      // 调用接口
      demo.geocoder({
        address: this.data.address,
        success: function (res) {
          console.log(res);
          that.setData({
            latitude: res.result.location.lat,
            longitude: res.result.location.lng
          })
          wx.openLocation({
            latitude: that.data.latitude,
            longitude: that.data.longitude,
            scale: 28,
            name: that.data.address,
          })
        },
        fail: function (res) {
          console.log(res);
          wx.showToast({
						title: res.message,
						icon: 'none',
						duration: 2000
					})
        },
      })
    },

  }
})
// //index.js
// //获取应用实例
// const app = getApp()
 
// Page({
//   data: {
//     longitude:116.4965075,
//     latitude: 40.006103,
//     speed:0,
//     accuracy:0,
//     markers: [
//       {
//         iconPath: "../public/markers.png",
//         id: 0,
//         latitude: 30.281714,
//         longitude: 120.180895,
//         width: 40,
//         height: 40,
//         label: {
//           content: "下城",
//           color: "#fff",
//           fontSize: 12,
//           anchorX: -(0.5 * (3 * 24))/2,
//           textAlign: "center"
//         }
//       }]
//   },
//   //事件处理函数
//   bindViewTap: function() {
   
//   },
//   onLoad: function () {
//     var that=this
//     wx.showLoading({
//       title:"定位中",
//       mask:true
//     })
//     wx.getLocation({
//       type: 'gcj02',
//       altitude:true,//高精度定位
//       //定位成功，更新定位结果
//       success: function (res) {
//         var latitude = res.latitude
//         var longitude = res.longitude
//         var speed = res.speed
//         var accuracy = res.accuracy
       
//         that.setData({
//           longitude:longitude,
//           latitude: latitude,
//           speed: speed,
//           accuracy: accuracy
//         })
//       },
//       //定位失败回调
//       fail:function(){
//         wx.showToast({
//           title:"定位失败",
//           icon:"none"
//         })
//       },
 
//       complete:function(){
//         //隐藏定位中信息进度
//         wx.hideLoading()
//       }
 
//     })
//   },
// })