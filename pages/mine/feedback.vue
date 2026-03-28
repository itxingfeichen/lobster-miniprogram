<template>
  <view class="feedback-container">
    <view class="feedback-type card">
      <text class="section-title">反馈类型</text>
      <view class="type-list">
        <view 
          class="type-item" 
          :class="{ active: feedbackType === 'bug' }"
          @click="selectType('bug')"
        >
          <text>🐛 Bug 反馈</text>
        </view>
        <view 
          class="type-item" 
          :class="{ active: feedbackType === 'suggest' }"
          @click="selectType('suggest')"
        >
          <text>💡 建议反馈</text>
        </view>
        <view 
          class="type-item" 
          :class="{ active: feedbackType === 'other' }"
          @click="selectType('other')"
        >
          <text>📝 其他</text>
        </view>
      </view>
    </view>

    <view class="feedback-content card">
      <text class="section-title">反馈内容</text>
      <textarea 
        class="content-input"
        v-model="content"
        placeholder="请详细描述您遇到的问题或建议..."
        maxlength="500"
      />
      <text class="word-count">{{ content.length }}/500</text>
    </view>

    <view class="feedback-contact card">
      <text class="section-title">联系方式（选填）</text>
      <input 
        class="contact-input"
        v-model="contact"
        placeholder="邮箱或微信号"
        type="text"
      />
    </view>

    <view class="submit-section">
      <button class="submit-btn" @click="submitFeedback" :disabled="!canSubmit">
        提交反馈
      </button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      feedbackType: 'bug',
      content: '',
      contact: '',
      submitting: false
    }
  },
  
  computed: {
    canSubmit() {
      return this.content.trim().length >= 10 && !this.submitting
    }
  },
  
  methods: {
    selectType(type) {
      this.feedbackType = type
    },
    
    async submitFeedback() {
      if (!this.canSubmit) return
      
      this.submitting = true
      
      try {
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        uni.showToast({
          title: '提交成功',
          icon: 'success'
        })
        
        setTimeout(() => {
          uni.navigateBack()
        }, 1500)
      } catch (err) {
        uni.showToast({
          title: '提交失败',
          icon: 'none'
        })
      } finally {
        this.submitting = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.feedback-container {
  min-height: 100vh;
  background: $gray-1;
  padding: $spacing-base;
  padding-bottom: 120rpx;
}

.feedback-type {
  margin-bottom: $spacing-base;
  
  .section-title {
    display: block;
    font-size: $font-base;
    font-weight: bold;
    color: $gray-7;
    margin-bottom: $spacing-sm;
  }
  
  .type-list {
    display: flex;
    gap: $spacing-sm;
    
    .type-item {
      flex: 1;
      padding: $spacing-sm;
      text-align: center;
      background: $gray-2;
      border-radius: $radius-sm;
      font-size: $font-sm;
      color: $gray-6;
      
      &.active {
        background: $brand-primary-light;
        color: $brand-primary;
        border: 1rpx solid $brand-primary;
      }
    }
  }
}

.feedback-content {
  margin-bottom: $spacing-base;
  position: relative;
  
  .section-title {
    display: block;
    font-size: $font-base;
    font-weight: bold;
    color: $gray-7;
    margin-bottom: $spacing-sm;
  }
  
  .content-input {
    width: 100%;
    height: 240rpx;
    padding: $spacing-sm;
    background: $gray-1;
    border-radius: $radius-sm;
    font-size: $font-base;
    color: $gray-7;
    box-sizing: border-box;
  }
  
  .word-count {
    position: absolute;
    right: $spacing-sm;
    bottom: $spacing-sm;
    font-size: $font-xs;
    color: $gray-4;
  }
}

.feedback-contact {
  margin-bottom: $spacing-base;
  
  .section-title {
    display: block;
    font-size: $font-base;
    font-weight: bold;
    color: $gray-7;
    margin-bottom: $spacing-sm;
  }
  
  .contact-input {
    width: 100%;
    padding: $spacing-sm;
    background: $gray-1;
    border-radius: $radius-sm;
    font-size: $font-base;
    color: $gray-7;
    box-sizing: border-box;
  }
}

.submit-section {
  padding: $spacing-base;
  
  .submit-btn {
    width: 100%;
    height: 88rpx;
    line-height: 88rpx;
    background: $brand-primary;
    color: #fff;
    font-size: $font-base;
    border-radius: $radius-base;
    border: none;
    
    &[disabled] {
      background: $gray-3;
      color: $gray-5;
    }
    
    &::after {
      border: none;
    }
  }
}
</style>
