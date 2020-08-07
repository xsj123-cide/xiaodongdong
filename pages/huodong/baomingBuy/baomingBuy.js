// pages/huodong/baomingBuy/baomingBuy.js
import {request} from "../../../static/js/request.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    montha:'',
    daya:'',
    yeara:'',
    productid:'',
    huodongName:``,
    joinAddr: '',
    huodongTime:'',
    totalmoney:0,
    nowdate: 1,
    month:0,
    /* 活动日期选择 */
    timeIndex:0,
    /* 月份选择 */
    monthIndex:0,
    /* 日期数组 */
		timeArray:[],
    /* 是否开启日期选择 */
    isTime:false,
    /* 选中日期 */
		dayIndex:-1,
    arriveTime:'2020年6月10日 18:00',
    weeka:[
			'日','一','二','三','四','五','六'
		],
    time:[
      {time:'07月20日',
      value:'2020-07-20',
			number:100},
      {time:'07月21日',
      value:'2020-07-21',
			number:100},
      {time:'07月22日',
      value:'2020-07-22',
			number:100},
			{time:'更多时间'}
		],
	  first:{
	  	img:'../../../static/img/lunbo1.jpg',
	  	title:`龙海中心小学三年级一班8月20日厦门诚意
	  		科技馆“探索科技的力量”秋季研学活动`,
	  	time:'2020年6月10日 9:00-18:00 1天',
	  	place:'龙海中心小学大操场'
	  },
	  second:[
	  	{title:'诚毅科技馆探索科学的奥秘',
	  	price:345,
	  	number:0},
	  	{title:'诚毅科技馆探索科学的奥秘',
	  	price:345,
	  	number:0}
    ],
    userInfos: [],
    beizu:''
  },
  changeNumber(e) {
    console.log("最低到0")
  },
  changeNumber_a(e) {
    console.log("最低到0")
  },
  closeTime(){
    var month = this.data.montha;
    var year = this.data.yeara;
		var day = this.data.daya;
		var time_copy = this.data.time;
		time_copy.pop();
		var obj = {time:month+'月'+day+'日',number:200,value:year+'-'+month+'-'+day};
		time_copy.push(obj);
		console.log(time_copy);
	  this.setData({
			isTime:false,
			time:time_copy
		})
		console.log(this.data.time);
  },
  /*判断某年某月某日是星期几，默认1号*/
	whatDay(year, month, day=1) {
		var monthDay = [31,0,31,30,31,30,31,31,30,31,30,31];
		
	    var sum = 0;
	    sum += (year-1)*365+Math.floor((year-1)/4)-Math.floor((year-1)/100)+Math.floor((year-1)/400)+day;
	    for(var i=0; i<month-1; i++){
	        sum += monthDay[i];
	    }
	    if(month > 2){
	        if(this.isLeap(year)){ 
	            sum += 29; 
	        }
	        else{
	            sum += 28; 
	        }
	    }
	    return sum%7;
  },
  /*判断某年是否闰年*/
	isLeap(year) {
    if((year%4==0 && year%100!=0) || year%400==0){
        return true;
    }
    else{
        return false; 
    }
},
  /* 添加日期 */
  time1(year1,month1){
	  var date=new Date()
	  
	  var month=date.getMonth()+1
	  if(month1!=undefined){
		  month=month1
	  }
	  var year=date.getFullYear()
	  if(year1!=undefined){
	  	  year=year1
	  }
	  
	  /* 计算当月第一天是周几 */
	  var day=this.whatDay(year,month)
	  var time=0
	  if(day!=7){
	  	time=day
	  }else{
	  	time=0
	  }
	  var array=[]
	  for(var i=0;i<time;i++){
	  	array.push("")
	  }
	  var monthDay = [31,0,31,30,31,30,31,31,30,31,30,31];
	  if(this.isLeap(year)){
	  	monthDay[1]=29 
	  }else{
	  	monthDay[1]=28
	  }
	  for(var j=1;j<=monthDay[month-1];j++){
	  	array.push(j)
	  }
	  this.setData({
	  	timeArray:array
    })
    console.log(this.data.timeArray);
  },
  /* 点击日期 */
  switchDay(e){
    var day=e.currentTarget.dataset.day
    var index=e.currentTarget.dataset.index
    var date=new Date()
    var month=date.getMonth()+1+this.data.monthIndex
    var year=date.getFullYear()
    console.log(year+"-"+month+"-"+day)
    /* this.setData({
      isTime:false
    }) */
    this.setData({
      dayIndex:index,
      montha:month,
      daya:day,
      yeara:year
    })
    },
  checkbei(e) {
    this.setData ({
      beizu:e.detail.value
    })
  },
  /* 改变月份 */
	changeMonth(e){
		var index=e.currentTarget.dataset.index
		this.setData({
			monthIndex:index
		})
		
		var date=new Date()
		var year=date.getFullYear()
		var month=date.getMonth()+1+index
		this.time1(year,month)
	},
	changeNumber(e){
		var type=e.currentTarget.dataset.type;
		var index=e.currentTarget.dataset.index;
    var data=this.data.second;
    var dollor =  parseFloat(data[index].priceName.slice(1));
		if(type=='add'){
      data[index].number+=1;  
      // console.log(typeof dollor);
      var money =  dollor + this.data.totalmoney;
      this.setData ({
        totalmoney:money
      })
		}else{
      data[index].number-=1;
      var money =  this.data.totalmoney -dollor;
      this.setData ({
        totalmoney:money
      })
		}
		this.setData({
			second:data
		})
  },
  checkindex(info) {
    console.log(info.detail.value)
    console.log(info.currentTarget.dataset.name);
    this.data.userInfos.forEach((item,index)=>{
      if(item.name == info.currentTarget.dataset.name) {
        item.value = info.detail.value
      }
    })
  },
  // formMes(e){
  //   console.log(e.detail.value)
    
  //   return e.detail.value
  // },
  timeChange(e){
		this.setData({
			timeIndex:parseInt(e.currentTarget.dataset.number)
    })
    console.log(this.data.timeIndex);
		if(e.currentTarget.dataset.number==3){
			this.setData({
				isTime:true
			})
    }
    console.log(this.data.monthIndex,this.data.month[0])
	},
	baoming1(){
    var flag = 1;
    var lianinfo_item = {};
    var lianinfo = [];
    var productId = this.data.productid;
    var obja = {};
    var taocans = [];
    var index = this.data.timeIndex;

    this.data.second.forEach((item,index)=>{
      obja = {};
      obja.tcId = item.tcId;
      obja.buyNum = item.number;
      if(item.number==0) {
        flag = 0;
        wx.showToast({
          title: '请选择套餐数量~',
          icon: 'none',
          duration: 2000
        })
      }
      taocans.push(obja);
    })
    // var totalmoney = this.data.totalmoney;
    var beizhu = this.data.beizu;
    this.data.userInfos.forEach((item,index)=>{        
      lianinfo_item = {};
      lianinfo_item.name  = item.name;
      lianinfo_item.value = item.value;
      if(item.val==true&&item.value=='') {
        flag = 0;
        wx.showToast({
          title: '联系信息填写不全~',
          icon: 'none',
          duration: 2000
        })
      }
      if(item.name === '手机号') {
        var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
        if (!myreg.test(item.value)) {
          flag = 0;
          wx.showToast({
            title: '手机号码格式错误~',
            icon: 'none',
            duration: 2000
          })
        }
      }
      lianinfo.push(lianinfo_item);
    })
    console.log(this.data.time[index].value)
    var token=wx.getStorageSync('token')
					var data={token:token}
          data.productId=productId;
          data.taocans=JSON.stringify(taocans);
          data.date=this.data.time[index].value;
          data.userInfos=JSON.stringify(lianinfo);
          data.msg=beizhu;
          // console.log(data)
          if(flag == 1) {
            request({url:"/api/xcx/order/create",data:data})
            .then(result=>{
                wx.requestPayment({
                  timeStamp: '',
                  nonceStr: '',
                  package: '',
                  signType: 'MD5',
                  paySign: '',
                  success (res) { },
                  fail (res) { }
                })
            
            })
          }			
    // console.log(obj);
      
		// wx.navigateTo({
		// 	url:"../successBuy/successBuy"
		// })
	},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.LoadMes(options.id,options.tcId);
    
    var date=new Date()
    var nowdate = date.getDate();
    var month=date.getMonth()+1;
	  /* 添加月份 */
	  var shuju=this.data.month
	  var array=[month,month+1,month+2,month+3]
	  shuju=array
	  this.setData({
      month:shuju,
      nowdate: nowdate,
	  })
	  
    this.time1()
    
  },
  LoadMes(e,a) {
		if(e=="") {
			wx.showToast({
				title: '加载失败',
				icon: none,
				duration: 2000
			})
		}
		var that = this;
    var token=wx.getStorageSync('token')
    if (a!=undefined) {
      var data = {
        token: token,
        tcId:a
      }
    }else {
      var data = {
        token: token,
      }
    }
		
		request({url:"/api/xcx/product/"+e,data:data})
		.then(result=>{
			console.log(result);
			that.setData ({
        huodongName:result.data.data.huodongName,
        joinAddr:result.data.data.joinAddr,
        huodongTime:result.data.data.huodongTime,
        second:result.data.data.taocans,
        userInfos: result.data.data.userInfos, 
        productid: result.data.data.id,
      })
      var second_copy = that.data.second;
      var userInfos_copy = that.data.userInfos
      // for(let i=0;i<second_copy.length;i++){

      // }
      second_copy.forEach((item,index) => {
        item.number=0
      });
      userInfos_copy.forEach((item,index) => {
        item.value=''
      })
      that.setData ({
        second:second_copy,
        userInfos:userInfos_copy
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