// components/swiperTitle/swiperTitle.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
	array:Array,
	backColor:String,
	titleIndex: {
		type: Number,
		default:0
	}
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
	changeIndex(e){
		this.setData({
			titleIndex:e.currentTarget.dataset.index
		})
		
		var that=this
		this.triggerEvent('index', {
			index:that.data.titleIndex
		});
	},
  }
})
