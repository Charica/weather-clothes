// start.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    opacity: 0.4,
    disabled: true,
    threshold: 0,
    rule: 'up',
    
  },


    
/////////////////////可以安插天气的界面。
  //跳转到图片识别的口令验证页面
 validate: function() {
    wx.navigateTo({
      url: '../wifi_station/index/index',
    })
  },

 location: function () {
    wx.navigateTo({
      url: '../wifi_station/clothes/clothes',
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
  
  },
  
    })
