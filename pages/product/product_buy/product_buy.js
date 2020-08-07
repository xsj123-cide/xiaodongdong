// pages/huodong/baomingBuy/baomingBuy.js
import {request} from "../../../static/js/request.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    taocanslen:0,
    huodongTime:'',
    baoming:false,
    baomingName:'',
    switchobj:{},
    kucun3:[],
    tcId:'',
    montha:'',
    daya:'',
    yeara:'',
    numbera:'',
    productid:'',
    name:``,
    joinAddr: '',
    huodongTime:'',
    totalmoney:0,
    nowdate: 1,
    month:0,
    /* 活动日期选择 */
    timeIndex:8,
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
      // {time:'07月20日',
      // value:'2020-07-20',
			// number:100},
      // {time:'07月21日',
      // value:'2020-07-21',
			// number:100},
      // {time:'07月22日',
      // value:'2020-07-22',
			// number:100},
			// {time:'更多时间'}
    ],
    time_b:[],
	  first:{
	  	img:'../../../static/img/lunbo1.jpg',
	  	title:`龙海中心小学三年级一班8月20日厦门诚意
	  		科技馆“探索科技的力量”秋季研学活动`,
	  	time:'2020年6月10日 9:00-18:00 1天',
	  	place:'龙海中心小学大操场'
	  },
	  second:[
	  	// {title:'诚毅科技馆探索科学的奥秘',
	  	// price:345,
	  	// number:0},
	  	// {title:'诚毅科技馆探索科学的奥秘',
	  	// price:345,
	  	// number:0}
    ],
    userInfos: [],
    beizu:'',
    couponId:'',
    coumoney:'',
  },
  // changeNumber(e) {
  //   console.log("最低到0")
  // },
  changeNumber_a(e) {
    console.log("最低到0")
  },
  hideicon() {
    this.setData({
      isTime:false,
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
  closeTime(){
    var month = this.data.montha;
    var year = this.data.yeara;
		var day = this.data.daya;
    var time_copy = this.data.time;
    var obj = this.data.switchobj;
    var second_copy = this.data.second;
    if(month==''&&year==''&&day=='') {
      wx.showToast({
        title: '请选择日期',
        icon: 'none',
        duration: 2000
      })
    }else{
        // time_copy.pop();
        console.log(time_copy);
        if(time_copy.length>3) {
          console.log('xxxx');
          time_copy.pop();
        }
        var objcopy = obj;
        objcopy.time = month+'月'+day+'日';
        objcopy.value= year+'-'+month+'-'+day;
        time_copy.push(objcopy);
        console.log(time_copy);
        this.setData({
          isTime:false,
          time:time_copy
        })
        console.log(this.data.time[3]);
        second_copy[0].priceName="￥"+this.data.time[3].price;
        second_copy[0].number = 1; 
        this.setData({
        second : second_copy,
        totalmoney:second_copy[0].priceName.substr(1)
			  })

        console.log(this.data.time);
    }
    
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
      var startTime = new Date(Date.parse(keycopy));
      if(date<=startTime){
        var obj = this.data.time_b[keycopy];
        console.log(keycopy);
        if(obj!=undefined) {
         daynumobj.date = obj.date;
         daynumobj.oldPrice = obj.oldPrice;
         daynumobj.num = obj.num;
         daynumobj.price = obj.price;
         daynumobj.saleNum = obj.saleNum;
         daynumobj.day = j;
         console.log(obj);
        }
      }   
      // this.data.time_b.forEach((item,index) => {
      //   var str = item.time;
      //   var day = str.substr(3,2);
      //   var day_tou = str.substr(3,1);
      //   var monmon = str.substr(0,2);
      //   var monmon_tou = str.substr(0,1);
      //   if(day_tou==0) {
      //     day = str.substr(4,1);
      //   }
      //   if(monmon_tou==0) {
      //     monmon = str.substr(1,1);
      //   }
      //   // if(j<10) {
      //   //   j=j.substr(0,1);
      //   // }
      //   // console.log(day +'==='+monmon+'===='+j+'===='+month)
      //   if(j==day&&month==monmon) {
      //     daynumobj.number = item.number;
      //     daynumobj.saleNum = item.saleNum
      //   }
      // })
      daynumobj.day = j;
      array.push(daynumobj)
      
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
    var monindex = this.data.monthIndex
    var number = e.currentTarget.dataset.number
    var obj = e.currentTarget.dataset.obj;
    var date=new Date()
    var month=this.data.month[monindex];
    var year=date.getFullYear()
    console.log(year+"-"+month+"-"+day)
    /* this.setData({
      isTime:false
    }) */
    if(month<10) {
      month = "0"+month
    }
    if(day<10) {
      day = "0"+day
    }
    // var obj ={};
    // obj.time = month+'月'+day+'日';
    // obj.number = number;
    // var time_copy = this.data.time;
    // time_copy.push(obj);
    this.setData({
      dayIndex:index,
      montha:month,
      daya:day,
      yeara:year,
      // numbera:number,
      // time:time_copy,
      switchobj : obj
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
      monthIndex:index,
      dayIndex:-1
		})
		
		var date=new Date()
		var year=date.getFullYear()
    // var month=date.getMonth()+1+index
    var month = this.data.month[index];
		this.time1(year,month)
	},
	changeNumber(e){
		var type=e.currentTarget.dataset.type;
		var index=e.currentTarget.dataset.index;
    var data=this.data.second;
    var dollor =  parseFloat(data[index].priceName.slice(1));
		if(type=='add'){
      data[index].number+=1;  
      console.log(dollor+'----'+data[index].number);
      var money =  ((dollor*1000) * (data[index].number*1000))/1000000;
      this.setData ({
        totalmoney:money
      })
		}else{
      data[index].number-=1;
      var money =  ((dollor*1000) * (data[index].number*1000))/1000000;
      this.setData ({
        totalmoney:money,
        coumoney:'',
        couponId:'',
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
    
    var flag = parseInt(e.currentTarget.dataset.number);
		this.setData({
			timeIndex:flag
    })
    console.log(this.data.timeIndex);
    var second_copy = this.data.second;
    if(e.currentTarget.dataset.number<3) {
      second_copy[0].priceName='￥'+ this.data.time[e.currentTarget.dataset.number].price;
      second_copy[0].number = 1; 
      this.setData({
        second :second_copy
      })
      this.setData({
        totalmoney:second_copy[0].priceName.substr(1)      
      })
    }
		if(e.currentTarget.dataset.number==3){
      
			this.setData({
        isTime:true,
        timeIndex:3
			})
    }

    console.log(this.data.month)
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
      if(item.name.indexOf('电话')!=-1) {
        var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
        if (!myreg.test(item.value)) {
          flag = 0;
          wx.showToast({
            title: '电话号码格式错误~',
            icon: 'none',
            duration: 2000
          })
        }
      }
      if(item.name.indexOf('身份证')!=-1) {
        var myreg=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        if (!myreg.test(item.value)) {
          flag = 0;
          wx.showToast({
            title: '身份证号码格式错误~',
            icon: 'none',
            duration: 2000
          })
        }
      }
      lianinfo.push(lianinfo_item);
    })
    // var token=wx.getStorageSync('token')
					var data={}
          data.productId=productId;
          data.taocans=JSON.stringify(taocans);
          console.log(index)
          if(this.data.time[index]==undefined){
            wx.showToast({
              title: '未选择日期',
              icon: 'none',
              duration: 2000
            })
          }
          else{
            data.date=this.data.time[index].value;
            data.userInfos=JSON.stringify(lianinfo);
            data.couponId = this.data.couponId;
            data.msg=beizhu;
            console.log(data)
            if(flag == 1) {
              request({url:"/api/xcx/order/create",data:data})
              .then(result=>{
                  var payObj = result.data.data.payObj;
                  var totalmoney = this.data.totalmoney;
                  var coumoney = this.data.coumoney;
                  var coumoneyflag = 0;
                  if(coumoney!='') {
                    coumoneyflag = coumoney
                  }
                  wx.requestPayment({
                    timeStamp: payObj.timeStamp,
                    nonceStr: payObj.nonceStr,
                    package: payObj.package,
                    signType:payObj.signType,
                    paySign: payObj.paySign,
                    success (res) {
                      var money = totalmoney-coumoneyflag;
                      wx.navigateTo({
                        url:"../successBuy/successBuy?id="+result.data.data.orderNo+"&money="+money})
                     },
                    fail (res) { 
                      wx.showToast({
                        title: '付款失败',
                        icon: 'none',
                        duration: 2000
                      })
                    }
                  })
              })
            }			
          }
         
    // console.log(obj);
      
		// wx.navigateTo({
		// 	url:"../successBuy/successBuy"
		// })
	},
  // requestpay(orderNo,payStr) {
  //   // var token=wx.getStorageSync('token')
  //   var data={}
  //   data.orderNo = orderNo;
  //   data.payStr = payStr
  //   request({url:"/api/xcx/order/paySuccess",data:data})
  //   .then(result=>{
  //     if(result.data.code == 1) {
  //     }
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.LoadMes(options.id,options.tcId);
    
    var date=new Date()
    var nowdate = date.getDate();
    // var month=date.getMonth()+1;
	  /* 添加月份 */
	  // var shuju=this.data.month
	  // var array=[month,month+1,month+2,month+3]
    // shuju=array
    
	  this.setData({
      // month:shuju,
      nowdate: nowdate,
      tcId:options.tcId
	  })
	  
   
    
  },
  getday(){

  },
  getmon() {
    let getdata= this.data.second;
    let kuobj = getdata[0].kucun;
    let monthb;
    let array = [];
    // kuobj.forEach((item,index)=>{
    //   let flag = item.date.substr(5,1);
    //   if(flag == 0) {
    //     monthb = item.date.substr(6,1)
    //   }else {
    //     monthb = item.date.substr(5,2);
    //   }   
    //   if(array.indexOf(monthb)==-1) {
    //     array.push(monthb);
    //   }
    // })
    var datea=new Date()
    for(let key in kuobj) {
      var startTime = new Date(Date.parse(key));
      if(datea<=startTime){
        let flag = key.substr(5,1);
        if(flag == 0) {
          monthb = key.substr(6,1)
        }else {
          monthb = key.substr(5,2);
        }   
        if(array.indexOf(monthb)==-1) {
          array.push(monthb);
        }
      }  
    }
    // 
    // var montha=date.getMonth()+1;
    // if()
    this.setData({
      month:array,
    })
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
    // var token=wx.getStorageSync('token')
    if (a!=undefined) {
      var data = {
        // token: token,
        tcId:a
      }
    }else {
      var data = {
        // token: token,
      }
    }
		
		request({url:"/api/xcx/product/"+e,data:data})
		.then(result=>{
			that.setData ({
        huodongTime:result.data.data.huodongTime,
        name:result.data.data.name,
        baoming: result.data.data.baoming,
        baomingName: result.data.data.baomingName,
        joinAddr:result.data.data.joinAddr,
        huodongTime:result.data.data.huodongTime,
        second:result.data.data.taocans,
        // kucun3:result.data.data.kucun3,
        userInfos: result.data.data.userInfos, 
        productid: result.data.data.id,
      })
      var taocanslen = this.data.second.length;
      var data=this.data.second;
      this.data.second.forEach((item,index)=>{
        if(item.tcId == this.data.tcId) {
          var kucunobj = item.kucun;
          var time_copy = [];
          var time_copyb = [];
          var monthb ;
          var dayb;
          var time_aa;
          var year_b;
          item.kucun3.forEach((itema,index)=>{
            var obj = {};
            year_b = itema.date.substr(0,4)
            monthb = itema.date.substr(5,2);
            dayb = itema.date.substr(8,2);
            time_aa = monthb+'月'+dayb+'日';
            obj.value = itema.date ;
            obj.time = time_aa;
            obj.oldPrice = itema.oldPrice;
            obj.price = itema.price;
            obj.num = itema.num;
            obj.saleNum = itema.saleNum;
            time_copy.push(obj);
          })
          // for(var key in kucunobj) {
          //   var obj = {};
          //   year_b = key.substr(0,4)
          //   monthb = key.substr(5,2);
          //   dayb = key.substr(8,2);
          //   time_aa = monthb+'月'+dayb+'日';
          //   obj.value = key ;
          //   obj.time = time_aa;
          //   obj.oldPrice = kucunobj[key].oldPrice;
          //   obj.price = kucunobj[key].price;
          //   obj.number = kucunobj[key].num - kucunobj[key].saleNum;
          //   obj.saleNum = kucunobj[key].saleNum;
          //   time_copy.push(obj);
          // }
          // time_copyb = time_copy;
          time_copyb = kucunobj;
          console.log(time_copy);
          that.setData({
            time:time_copy,
            time_b:time_copyb,      
          })
          console.log(this.data.time)
          this.getmon();
          this.time1();
          // this.time1(2020,this.data.month[0]);
        }
      })
      var dollor = parseFloat(data[0].priceName.slice(1));
			that.setData ({
        taocanslen:taocanslen,
        totalmoney:dollor
			})
      var second_copy = that.data.second;
      var userInfos_copy = that.data.userInfos
      // for(let i=0;i<second_copy.length;i++){

      // }
      second_copy.forEach((item,index) => {
        item.number=1
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
  onShow: function (e) {
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];
    var couponId = currPage.data.couponId;
    var coumoney = currPage.data.coumoney;
    this.setData({
      couponId:couponId,
      coumoney:coumoney
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