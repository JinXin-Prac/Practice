App({
  globalData:
  {
    settings:{ language: null },
    userInfo:null
  },
  onLaunch:function () {
    var language = wx.getStorageSync('selectedLanguage');
    if (language)
    { 
      this.globalData.settings.language = language; 
    }
    else
    {
       this.globalData.settings.language = 0; 
    }
  //调用API从本地缓存中获取数据
  var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  GetUseInfo(cb)
  {
    var that = this
    if(this.globalData.userInfo)
    {
      typeof cb == "function" &&cb(this.globalData.userInfo)
    }
    else
    {
      //调用登录接口
      wx.login({success:function()
      {
        wx.getUserInfo({
          success:function(res)
          {
            that.globalData.userInfo = res.userInfo
            typeof cb == "function" && cb      (that.gobalData.userInfo) 
          }
        })
      }
      })
    }
  }
})