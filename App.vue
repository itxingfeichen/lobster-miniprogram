<script>
export default {
  onLaunch: function() {
    console.log('App Launch')
    // 初始化 uView
    // #ifdef MP-WEIXIN || MP-QQ || MP-ALIPAY
    uni.setStorageSync('app_launched', true)
    // #endif
  },
  onShow: function() {
    console.log('App Show')
  },
  onHide: function() {
    console.log('App Hide')
  }
}
</script>

<style lang="scss">
/*每个页面公共 css */
@import '@/uni_modules/uview-ui/index.scss';

page {
  background-color: #f8f8f8;
  font-size: 14px;
  line-height: 1.5;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

/* 通用样式 */
.container {
  padding: 20px;
}

.card {
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.btn-primary {
  background: #3cc51f;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 12px 30px;
  font-size: 16px;
}

.text-center {
  text-align: center;
}

.mt-20 {
  margin-top: 20px;
}

.mb-20 {
  margin-bottom: 20px;
}
</style>
