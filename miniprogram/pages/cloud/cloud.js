// 云数据库操作
const db = wx.cloud.database(); // initialize database
Page({

  /**
   * Page initial data
   */
  data: {
    images:[]
  },  
  // 增
  insert: function() {
    // 非Promise
    // db.collection('user').add({
    //   data: {
    //     name: 'Chris Chen',
    //     age: 20
    //   },
    //   success: res => {
    //     console.log(res);
    //   },
    //   fail: err => {
    //     console.log(err);
    //   }
    // })
    // Promise形式
    db.collection('user').add({
      data: {
        name: 'Xianxian',
        age: 18
      }
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  },
  // 改
  update: function() {
    db.collection('user').doc('e2001a7f5ddb863a0042105e13db0811').update({
      data: {
        age: 21
      }
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  },
  // 查
  search: function() {
    db.collection('user').where({
      name: 'Chris Chen'
    }).get()
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  },
  // 删
  delete: function() {
    db.collection('user')
      .doc('e2001a7f5ddb863a0042105e13db0811')
      .remove()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  },
  sum: function() {
    wx.cloud.callFunction({
      name: 'sum',
      data: {
        a: 2,
        b: 3
      }
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  },
  getOpenId: function() {
    wx.cloud.callFunction({
      name: 'login'
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  },
  batchDelete: function() {
    wx.cloud.callFunction({
      name: "batchDelete"
    })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  },
  upload: function() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        const tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)
        wx.cloud.uploadFile({
          cloudPath: new Date().getTime() + '.png',
          filePath: tempFilePaths[0],
          success: res => {
            db.collection('image').add({
              data: {
                fileID: res.fileID
              }
            }).then(res => {
              console.log(res)
            }).catch(err => {
              console.log(err)
            })
          },
          fail: console.error
        })
      },
    })
  },
  getFile: function() {
    wx.cloud.callFunction({
      name: 'login'
    }).then(res => {
      db.collection('image').where({
        _openid: res.result.openid
      }).get()
      .then(res => {
        console.log(res);
        this.setData({
          images: res.data
        })
      })
    })
  },
  download: function(e) {
    wx.cloud.downloadFile({
      fileID: e.target.dataset.fileid,
      success: res => {
        console.log(res.tempFilePath),
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          // Promise形式不成功，原因未知
          success: res => {
            wx.showToast({
              title: '保存成功',
            })
          }
        })
      }
    })
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