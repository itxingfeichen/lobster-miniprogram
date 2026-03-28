<template>
  <view class="settings-container">
    <view class="settings-group card">
      <view class="settings-item" @click="toggleNotification">
        <text class="item-label">推送通知</text>
        <switch 
          :checked="settings.notification" 
          @change="onNotificationChange"
          color="#3cc51f"
        />
      </view>
      <view class="settings-item" @click="toggleSound">
        <text class="item-label">声音</text>
        <switch 
          :checked="settings.sound" 
          @change="onSoundChange"
          color="#3cc51f"
        />
      </view>
      <view class="settings-item" @click="toggleVibrate">
        <text class="item-label">震动</text>
        <switch 
          :checked="settings.vibrate" 
          @change="onVibrateChange"
          color="#3cc51f"
        />
      </view>
    </view>

    <view class="settings-group card">
      <view class="settings-item" @click="clearCache">
        <text class="item-label">清除缓存</text>
        <view class="item-right">
          <text class="item-value">{{ cacheSize }}</text>
          <text class="item-arrow">›</text>
        </view>
      </view>
      <view class="settings-item" @click="checkUpdate">
        <text class="item-label">检查更新</text>
        <view class="item-right">
          <text class="item-value">v1.0.0</text>
          <text class="item-arrow">›</text>
        </view>
      </view>
    </view>

    <view class="settings-group card">
      <view class="settings-item" @click="goToPrivacy">
        <text class="item-label">隐私政策</text>
        <text class="item-arrow">›</text>
      </view>
      <view class="settings-item" @click="goToTerms">
        <text class="item-label">用户协议</text>
        <text class="item-arrow">›</text>
      </view>
      <view class="settings-item" @click="goToAbout">
        <text class="item-label">关于我们</text>
        <text class="item-arrow">›</text>
      </view>
    </view>

    <view class="logout-section">
      <button class="logout-btn" @click="handleLogout">退出登录</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      settings: {
        notification: true,
        sound: true,
        vibrate: true
      },
      cacheSize: '0 KB'
    }
  },
  
  onShow() {
    this.calculateCache()
    this.loadSettings()
  },
  
  methods: {
    loadSettings() {
      const saved = uni.getStorageSync('app_settings')
      if (saved) {
        this.settings = saved
      }
    },
    
    saveSettings() {
      uni.setStorageSync('app_settings', this.settings)
    },
    
    toggleNotification() {
      this.settings.notification = !this.settings.notification
      this.saveSettings()
    },
    
    onNotificationChange(e) {
      this.settings.notification = e.detail.value
      this.saveSettings()
    },
    
    toggleSound() {
      this.settings.sound = !this.settings.sound
      this.saveSettings()
    },
    
    onSoundChange(e) {
      this.settings.sound = e.detail.value
      this.saveSettings()
    },
    
    toggleVibrate() {
      this.settings.vibrate = !this.settings.vibrate
      this.saveSettings()
    },
    
    onVibrateChange(e) {
      this.settings.vibrate = e.detail.value
      this.saveSettings()
    },
    
    calculateCache() {
      try {
        const keys = ['browse_history', 'favorites', 'app_settings', 'userInfo']
        let total = 0
        keys.forEach(key => {
          const data = uni.getStorageSync(key)
          if (data) {
            total += JSON.stringify(data).length
          }
        })
        if (total < 1024) {
          this.cacheSize = total + ' B'
        } else if (total < 1024 * 1024) {
          this.cacheSize = (total / 1024).toFixed(1) + ' KB'
        } else {
          this.cacheSize = (total / 1024 / 1024).toFixed(1) + ' MB'
        }
      } catch (e) {
        this.cacheSize = '0 KB'
      }
    },
    
    clearCache() {
      uni.showModal({
        title: '提示',
        content: '确定清除缓存吗？',
        success: (res) => {
          if (res.confirm) {
            uni.clearStorageSync()
            this.cacheSize = '0 KB'
            uni.showToast({
              title: '已清除',
              icon: 'success'
            })
          }
        }
      })
    },
    
    checkUpdate() {
      uni.showToast({
        title: '已是最新版本',
        icon: 'none'
      })
    },
    
    goToPrivacy() {
      uni.showToast({
        title: '功能开发中',
        icon: 'none'
      })
    },
    
    goToTerms() {
      uni.showToast({
        title: '功能开发中',
        icon: 'none'
      })
    },
    
    goToAbout() {
      uni.showModal({
        title: '关于',
        content: 'OpenClaw 教程小程序\n版本: 1.0.0\n让学习变得更简单！',
        showCancel: false
      })
    },
    
    handleLogout() {
      uni.showModal({
        title: '提示',
        content: '确定退出登录吗？',
        success: (res) => {
          if (res.confirm) {
            uni.removeStorageSync('userInfo')
            uni.reLaunch({
              url: '/pages/index/index'
            })
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.settings-container {
  min-height: 100vh;
  background: $gray-1;
  padding: $spacing-base;
  padding-bottom: 120rpx;
}

.settings-group {
  margin-bottom: $spacing-base;
  
  .settings-item {
    @include flex-between;
    padding: $spacing-base 0;
    border-bottom: 1rpx solid $gray-2;
    
    &:last-child {
      border-bottom: none;
    }
    
    .item-label {
      font-size: $font-base;
      color: $gray-7;
    }
    
    .item-right {
      display: flex;
      align-items: center;
      
      .item-value {
        font-size: $font-sm;
        color: $gray-5;
        margin-right: $spacing-xs;
      }
      
      .item-arrow {
        font-size: $font-lg;
        color: $gray-4;
      }
    }
  }
}

.logout-section {
  padding: $spacing-lg;
  
  .logout-btn {
    width: 100%;
    height: 88rpx;
    line-height: 88rpx;
    background: #fff;
    color: $color-error;
    font-size: $font-base;
    border-radius: $radius-base;
    border: none;
    
    &::after {
      border: none;
    }
  }
}
</style>
