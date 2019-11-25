// pages/bases/bases.js
Page({

  /**
   * Page initial data
   */
  data: {
    msg: 'Hello movie!',
    img: '/images/logo.png',
    arr: ['a','b','c','d'],
    list: [
      {
        name: 'ChrisChen',
        age: 18,
        gender: 'male'
      },
      {
        name: 'AuroraZhou',
        age: 18,
        gender: 'female'
      }
    ],
    isLogin: true,
    count: 0
  },

  onTapHandler: function() {
    this.setData({
      count: this.data.count + 1
    })
  },
  onBoxHandler: function(e) {
    console.log('box clicked')
    console.log(e.target.dataset.id);
  },
  onChildHandler: function() {
    console.log('child clicked')
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})