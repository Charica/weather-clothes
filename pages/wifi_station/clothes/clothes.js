var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

    opacity: 0.4,
    disabled: true,
    threshold: 0,
    rule: 'up',
    num: "/2350",
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.getDataFromOneNet();
    //上面这条语句是获取onennet上面的数据的，并包含了所有的函数
    that.getDataFromOneNet();
    setInterval(function () {
      that.getDataFromOneNet();
    }, 5000);
    //上面这条语句实现了实时更新数据的功能，每隔5秒刷新
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
  /*
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
  //下面这个函数获取数据，并且调用了其它的函数
  getDataFromOneNet: function () {
    var page = this;
    //从oneNET请求我们的Wi-Fi气象站的数据
    const requestTask = wx.request({

      url: 'https://api.heclouds.com/devices/503139447/datapoints?datastream_id=Light,Temperature,Humidity&limit=1',
      header: {
        'content-type': 'application/json',
        'api-key': 'JUJ6vTrrDMSVvGpnHurhKwVjTJs='
      },
      success: function (res) {
        console.log(res)
        var app = getApp()
        var huml = res.data.data.datastreams[2]['datapoints'][0]['value'];
        var time = huml * 0.45 - 13.689;
        var hour = parseInt(time);
        var minute = parseInt((time - hour) * 60)
        if(huml<30.41)
        {minute=0;
        hour=0;}
        page.setData({ huml: huml, hour: hour , minute:minute})
        //输出值
        if (huml<30.41) {
          wx.showModal({
            title: '提示',
            content: '主人，可以收衣服啦',
            success: function (res) {
              if (res.confirm) {//这里是点击了确定以后
                console.log('用户点击确定')
              } else {//这里是点击了取消以后
                console.log('用户点击取消')
              }
            }
          })
        }


      },
      fail: function (res) {
        console.log("fail!!!")
      },

      complete: function (res) {
        console.log("end")

      }
    })

  },
})