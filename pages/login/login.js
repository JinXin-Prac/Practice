// login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    account: '',
    password: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  phoneInput: function (e) 
  {
    this.setData({
      account: e.detail.value
    })
  },
  passwordInput: function (e) 
  {
    this.setData({
      password: e.detail.value
    })
  },
  login:function()
  {
    var that = this
    if (that.data.account.length === 0 || that.data.password.length === 0) {
      wx.showToast({
        title: '用户名或密码不能为空',
        icon: 'none',
        duration: 2000
      })
    } 
    else
    {
      var userName = wx.getStorageSync('userName');
      var userPasswd = wx.getStorageSync('userPasswd');
      if(userName === this.data.account && userPasswd === this.data.password)
      {
        console.log("login success");
        wx.switchTab({
          url: '/pages/index/index'
        })
      }
      else
      {
        wx.setStorageSync('userName', this.data.account);
        wx.setStorageSync('userPasswd', this.data.password);
        console.log("register success");
      }
    }
  }
})