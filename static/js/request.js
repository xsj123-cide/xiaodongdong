import { json } from "../city";

var app=getApp()
export const request=(params)=>{
	var baseUrl=app.globalData.baseUrl;
	let token = app.globalData.token;
	var data=params.data;
	console.log(app.globalData);
	if(token!=''){
		data['token']=token;
	}
	
	//console.log(store.state.url)
	return new Promise((resolve,reject)=>{
		wx.request({
			...params,
			type:"post",
			data:data,
			url:baseUrl+params.url,
			
			success:(result)=>{
				if(result.data.code == 0) {
					wx.showToast({
						title: result.data.msg,
						icon: 'none',
						duration: 2000
					})
				}
				if(result.data.code == 2) {
					let dataa;
					let tokena;
					console.log("request,request,request");
					var oldtoken = wx.getStorageSync('token')
					wx.removeStorageSync('token');
					wx.removeStorageSync('user');
					wx.removeStorageSync('session_key');
					app.gettoken(oldtoken).then(()=>{
						tokena= wx.getStorageSync('token');
						dataa=params.data;
						dataa.token=tokena;
						wx.request({
							...params,
							type:"post",
							data:dataa,
							url:baseUrl+params.url,
							success:(resulta)=>{
								resolve(resulta)
							},
							fail:(err)=>{
								reject(err)
								}
						})
					});		
				}
				else {
					resolve(result)
				}

				},
			fail:(err)=>{
				reject(err)
				}
		})	
	});
}
