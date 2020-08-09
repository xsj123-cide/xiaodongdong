// pages/personal/refund/refund.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		type:'',
		activiindex:0,
		dayactive:'ss',
		weekday:['日','一','二','三','四','五','六'],
		montharray:[],
		timeArray:[],
		riqi:{
			'2020-08-06': {date: null, oldPrice: "198", price: "118", num: 30, saleNum: null},
			'2020-08-07': {date: null, oldPrice: "198", price: "118", num: 30, saleNum: null},
			'2020-08-08': {date: "2020-08-08", oldPrice: "198", price: "118", num: 30, saleNum: null},
			'2020-08-09': {date: "2020-08-09", oldPrice: "198", price: "118", num: 30, saleNum: null},
			'2020-08-10': {date: "2020-08-10", oldPrice: "198", price: "118", num: 30, saleNum: null},
			'2020-08-11': {date: '2020-08-11', oldPrice: "198", price: "118", num: 30, saleNum: null},
			'2020-09-12': {date: null, oldPrice: "198", price: "118", num: 30, saleNum: null},
			'2020-09-13': {date: null, oldPrice: "198", price: "118", num: 30, saleNum: null},
			'2020-09-14': {date: null, oldPrice: "198", price: "118", num: 30, saleNum: null},
		},
		first:[
			{
				number:'56212142',
				isActive:false,
				value:0
			},
			{
				number:'56212142',
				isActive:false,
				value:1
			},
			{
				number:'56212142',
				isActive:false,
				value:2
			}
		],
		firstArray:[],
		reason:[
			{
				text:'预约不上',
				isActive:false,
				value:0
			},
			{
				text:'预约不上',
				isActive:false,
				value:1
			},
			{
				text:'预约不上',
				isActive:false,
				value:2
			}
		],
		reasonArray:[],
	},
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
	isLeap(year) {
    if((year%4==0 && year%100!=0) || year%400==0){
        return true;
    }
    else{
        return false; 
    }
},
yuan(e) {
	this.setData({
		dayactive:'ss'
	})
},
changeday(e) {
	this.setData({
		dayactive:e.currentTarget.dataset.index
	})
},
	getday(year,month) {
		var day=this.whatDay(year,month);
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
		var daynumobj = {};
	  if(this.isLeap(year)){
	  	monthDay[1]=29 
	  }else{
	  	monthDay[1]=28
		}
		for(var j=1;j<=monthDay[month-1];j++){
			daynumobj={};
			var montha;
      var ja;
      if(j<10){
        ja=''
        ja = "0"+j;
      }else{
        ja='';
        ja = j;
			}
			if(month-1<10){
        montha='';
        montha = '0'+month;
      }else{
        montha='';
        montha = month;
			}
			var keycopy = year+'-'+montha+'-'+ja;
			var obj = this.data.riqi[keycopy];
        console.log(keycopy);
        if(obj!=undefined) {
         daynumobj.date = keycopy;
         daynumobj.oldPrice = obj.oldPrice;
         daynumobj.num = obj.num;
         daynumobj.price = obj.price;
         daynumobj.saleNum = obj.saleNum;
         daynumobj.day = j;
         console.log(obj);
				}
				daynumobj.day = j;
				 array.push(daynumobj);
				 this.setData({
					timeArray:array
				})
		}
	},
	changeindex(e) {
		var activiindex = e.currentTarget.dataset.index
		this.setData({
			activiindex:activiindex
		})
		var montharray = this.data.montharray;
		this.getday(montharray[activiindex].date.substr(0,4),montharray[activiindex].month.substr(0,1)=='0'?montharray[activiindex].month.substr(1,1):montharray[activiindex].month.substr(0,2));
	},
	getmonth() {
		let montharray = [];
		let obj = {};
		for(let i in this.data.riqi) {
			var month = '';
			obj= {};
			var data = new Date();
			var startTime = new Date(Date.parse(i));
			if(data<startTime) {
					month = i.substr(5,2);
					var result = montharray.some(item=>{
						if(item.month==month){
							 return true 
					 } 
				 })
				 if(!result) {
					obj.date = i;
					obj.month = month;
					montharray.push(obj);
				 }
				// if(montharray.indexOf({date:i,month:month})==-1) {
				// 	obj.date = i;
				// 	obj.month = month;
				// 	montharray.push(obj);
				// }
			}
		}
		this.setData ({
			montharray:montharray
		})
		this.getday(montharray[0].date.substr(0,4),montharray[0].month.substr(0,1)=='0'?montharray[0].month.substr(1,1):montharray[0].month.substr(0,2));
	},
	chooseFirst(e){
		var index=e.currentTarget.dataset.index
		var first=this.data.first
		first[index].isActive=!first[index].isActive
		this.setData({
			first:first
		})
	},
	chooseReason(e){
		var index=e.currentTarget.dataset.index
		var reason=this.data.reason
		reason[index].isActive=!reason[index].isActive
		this.setData({
			reason:reason
		})
	},
	refund1(){
		var firstArray=JSON.stringify(this.data.firstArray)
		var reasonArray=JSON.stringify(this.data.reasonArray)
		wx.navigateTo({
			url:"../refundInfo/refundInfo?firstArray="+firstArray+"&reasonArray="+reasonArray
		})
	},
	checkChange1(e){
		this.setData({
			firstArray:e.detail.value
		})
	},
	checkChange2(e){
		this.setData({
			reasonArray:e.detail.value
		})
	},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		var type = options.type;
		this.getmonth();
		console.log(type)
			this.setData ({
				type:type
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