// pages/huodong/orderBuy/orderBuy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		month:'',
		day:'',
		title:`【超级玩乐】龙海中心小学三年级一班8月20日厦门诚意科技馆“探索
		科技的力量”秋季研学活动`,
		time:[
			{time:'06月02日',
			number:100},
			{time:'06月03日',
			number:100},
			{time:'06月04日',
			number:100},
			{time:'更多时间'}
		],
		arriveTime:'2020年6月10日 18:00',
		penple:[
			{
				type:'成人',
				number:10
			},
			{
				type:'小孩',
				number:10
			}
		],
		month:0,
		week:[
			'日','一','二','三','四','五','六'
		],
		/* 活动日期选择 */
		timeIndex:0,
		/* 月份选择 */
		monthIndex:0,
		/* 日期数组 */
		timeArray:[],
		/* 是否开启日期选择 */
		isTime:false,
		/* 选中日期 */
		dayIndex:-1
  },
	timeChange(e){
		this.setData({
			timeIndex:parseInt(e.currentTarget.dataset.number)
		})
		if(e.currentTarget.dataset.number==3){
			this.setData({
				isTime:true
			})
		}
	},
	peopleChange(e){
		var number=e.currentTarget.dataset.number
		var type=e.currentTarget.dataset.type
		var data=this.data.penple
		if(type=='add'){
			data[number].number+=1
		}else{
			data[number].number-=1
		}
		this.setData({
			penple:data
		})
	},
	/* 跳转支付成功页面 */
	successBuy(e){
		console.log(e.currentTarget.dataset.url)
		var url=e.currentTarget.dataset.url
		wx.navigateTo({
			url:url
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
	
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	  var date=new Date()
	  var month=date.getMonth()+1
	  /* 添加月份 */
	  var shuju=this.data.month
	  var array=[month,month+1,month+2,month+3]
	  shuju=array
	  this.setData({
	  	month:shuju
	  })
	  
		this.time1()
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
		month:month,
		day:day
	})
  },
  closeTime(){
		var month = this.data.month;
		var day = this.data.day;
		var time_copy = this.data.time;
		time_copy.pop();
		var obj = {time:month+'月'+day+'日',number:200};
		time_copy.push(obj);
		console.log(time_copy);
	  this.setData({
			isTime:false,
			time:time_copy
		})
		console.log(this.data.time);
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