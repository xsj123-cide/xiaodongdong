var app=getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
	  isBack:Boolean,
	  backColor:String
  },
  /**
   * 组件的初始数据
   */
  data: {
	statusBarHeight:app.globalData.statusBarHeight,
	height:app.globalData.statusBarHeight+45,
  },

  /**
   * 组件的方法列表
   */
  methods: {
	goBack(){
		wx.navigateBack({
			delta:1
		})
	}
  },
  attached(){
  },
  options:{
	multipleSlots: true
  }
  
})
