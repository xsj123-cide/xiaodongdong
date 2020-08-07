// components/jingxuan/jingxuan.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
	shuju:Array
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
    changeUrl(e){
      console.log(e.currentTarget.dataset.url)
      if(e.currentTarget.dataset.url){
        wx.navigateTo({
          url:e.currentTarget.dataset.url
        })
      }
    },
  }
})
