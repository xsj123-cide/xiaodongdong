//app.js
import city from "./static/city.js"

App({
  onLaunch: function () {
	// wx.setStorage({
	//   key:"city",
	//   data:city.json.data
	// })  
	
	wx.getLocation({
	 type: 'wgs84',
	 success (res) {
	   const latitude = res.latitude
	   const longitude = res.longitude
	   var data={latitude:latitude,longitude:longitude}
	   wx.setStorage({
	     key:"weizhi",
	     data:data
	   }) 
	 }
	})
	
    // 获取用户信息
  //   wx.getSetting({
  //     success: res => {
  //       if (res.authSetting['scope.userInfo']) {
  //         // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
  //         wx.getUserInfo({
  //           success: res => {
  //             // 可以将 res 发送给后台解码出 unionId
  //             this.globalData.userInfo = res.userInfo

  //             // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //             // 所以此处加入 callback 以防止这种情况
  //             if (this.userInfoReadyCallback) {
  //               this.userInfoReadyCallback(res)
  //             }
  //           }
  //         })
  //       }
  //     }
  //   })
  //   // let that = this
  //   wx.getStorage({
	// 	key: 'token',
	// 	success: res => {	
  //     this.globalData.token = res.data;
	// 		console.log(this.globalData.token)
	// 	},
	// 	fail:error=> {
	// 		console.log(error);
	// 		wx.request({
	// 			type:"post",
	// 			url:this.globalData.baseUrl+'/api/xcx/token',
	// 			success:(result)=>{
	// 				wx.setStorage({
	// 					key:"token",
	// 					data:result.data.data
	// 				})
	// 				console.log(result);
	// 				this.globalData.token = result.data.data;
	// 			},
	// 			fail:(err) => {
					
	// 			}
	// 		})	
  //   }
    
  // })
  this.gettoken();
     
  },
  gettoken:function(oldtoken){
    return new Promise((relove,reject)=>{
      let tokena = wx.getStorageSync('token');
      if(tokena=='') {
        wx.request({
          type:"post",
          url:this.globalData.baseUrl+'/api/xcx/token?oldToken='+oldtoken,
          success:(result)=>{
            wx.setStorage({
              key:"token",
              data:result.data.data
            })
            console.log(result);
            this.globalData.token = result.data.data;
            relove()
          },
          fail:(err)=>{
            reject()
          }
        })	
      }
      else if(tokena!=''){
        this.globalData.token = tokena;
        relove();
      }
 })

    
  },
  globalData: {
    userInfo: null,
	  statusBarHeight: wx.getSystemInfoSync().statusBarHeight,
    // baseUrl:"http://192.168.106.12",
    // baseUrl:"http://192.168.106.59:82",
    // baseUrl:"http://192.168.18.1",
     baseUrl:"https://xcx.ydxly.com",
    service:'',
    telNo:'',
    token:'',
  }
})