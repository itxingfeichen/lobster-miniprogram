<script>
export default {
	onLaunch: function() {
		console.log('App Launch')
		// #ifdef MP-WEIXIN || MP-QQ || MP-ALIPAY
		uni.setStorageSync('app_launched', true)
		// #endif
	},
	onShow: function() { console.log('App Show') },
	onHide: function() { console.log('App Hide') }
}
</script>

<style lang="scss">
/* 每个页面公共 css */
@import '@/uni_modules/uview-ui/index.scss';
@import '@/styles/mixins.scss';
@import '@/styles/animation.scss';

page { background-color: $gray-1; font-size: $font-base; line-height: 1.5; color: $gray-7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; }
.container { padding: $spacing-base; }
.page-wrapper { min-height: 100vh; background-color: $gray-1; }

// 文字颜色
.text-primary { color: $brand-primary; }
.text-secondary { color: $brand-secondary; }
.text-success { color: $color-success; }
.text-warning { color: $color-warning; }
.text-error { color: $color-error; }
.text-info { color: $color-info; }
.text-title { color: $gray-7; }
.text-body { color: $gray-6; }
.text-muted { color: $gray-5; }
.text-disabled { color: $gray-4; }
.text-white { color: #ffffff; }

// 背景色
.bg-primary { background-color: $brand-primary; }
.bg-primary-light { background-color: $brand-primary-light; }
.bg-secondary { background-color: $brand-secondary; }
.bg-secondary-light { background-color: $brand-secondary-light; }
.bg-white { background-color: #ffffff; }
.bg-gray { background-color: $gray-1; }

// 文字
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }
.text-xs { font-size: $font-xs; }
.text-sm { font-size: $font-sm; }
.text-base { font-size: $font-base; }
.text-md { font-size: $font-md; }
.text-lg { font-size: $font-lg; }
.text-xl { font-size: $font-xl; }
.text-xxl { font-size: $font-xxl; }
.text-bold { font-weight: bold; }

// 间距
.mt-xs { margin-top: $spacing-xs; }
.mt-sm { margin-top: $spacing-sm; }
.mt-base { margin-top: $spacing-base; }
.mt-md { margin-top: $spacing-md; }
.mt-lg { margin-top: $spacing-lg; }
.mt-xl { margin-top: $spacing-xl; }
.mb-xs { margin-bottom: $spacing-xs; }
.mb-sm { margin-bottom: $spacing-sm; }
.mb-base { margin-bottom: $spacing-base; }
.mb-md { margin-bottom: $spacing-md; }
.mb-lg { margin-bottom: $spacing-lg; }
.mb-xl { margin-bottom: $spacing-xl; }
.ml-xs { margin-left: $spacing-xs; }
.ml-sm { margin-left: $spacing-sm; }
.ml-base { margin-left: $spacing-base; }
.mr-xs { margin-right: $spacing-xs; }
.mr-sm { margin-right: $spacing-sm; }
.mr-base { margin-right: $spacing-base; }
.pt-xs { padding-top: $spacing-xs; }
.pt-sm { padding-top: $spacing-sm; }
.pt-base { padding-top: $spacing-base; }
.pb-xs { padding-bottom: $spacing-xs; }
.pb-sm { padding-bottom: $spacing-sm; }
.pb-base { padding-bottom: $spacing-base; }
.px-base { padding-left: $spacing-base; padding-right: $spacing-base; }
.py-base { padding-top: $spacing-base; padding-bottom: $spacing-base; }
.mt-20 { margin-top: 20px; }
.mb-20 { margin-bottom: 20px; }

// 卡片
.card {
	@include card-base; margin-bottom: $spacing-base;
	&-header { @include flex-between; margin-bottom: $spacing-sm; padding-bottom: $spacing-sm; border-bottom: 1rpx solid $gray-2; }
	&-title { font-size: $font-lg; font-weight: bold; color: $gray-7; }
	&-subtitle { font-size: $font-sm; color: $gray-5; }
	&-body { font-size: $font-base; color: $gray-6; line-height: 1.6; }
	&-footer { @include flex-between; margin-top: $spacing-sm; padding-top: $spacing-sm; border-top: 1rpx solid $gray-2; }
}

// 列表项
.list-item {
	@include flex-between; padding: $spacing-base; background: #fff; @include hairline-bottom;
	&-content { flex: 1; min-width: 0; }
	&-title { font-size: $font-base; color: $gray-7; @include text-ellipsis(1); }
	&-desc { font-size: $font-sm; color: $gray-5; margin-top: $spacing-xs; @include text-ellipsis(2); }
	&-extra { flex-shrink: 0; margin-left: $spacing-sm; font-size: $font-sm; color: $gray-5; }
	&-arrow { flex-shrink: 0; margin-left: $spacing-xs; color: $gray-4; }
}

// 标签
.tag {
	display: inline-flex; align-items: center; padding: 4rpx 16rpx; border-radius: $radius-sm; font-size: $font-xs; line-height: 1.5;
	&-primary { color: $brand-primary; background: $brand-primary-light; }
	&-secondary { color: $brand-secondary; background: $brand-secondary-light; }
	&-success { color: $color-success; background: rgba($color-success, 0.1); }
	&-warning { color: $color-warning; background: rgba($color-warning, 0.1); }
	&-error { color: $color-error; background: rgba($color-error, 0.1); }
	&-info { color: $color-info; background: rgba($color-info, 0.1); }
	&-plain { color: $gray-6; background: $gray-2; }
}
.badge { display: inline-flex; align-items: center; justify-content: center; min-width: 32rpx; height: 32rpx; padding: 0 8rpx; border-radius: $radius-round; font-size: $font-xs; color: #fff; background: $color-error; }

// 难度标签
.tag-beginner { @include difficulty-tag($color-success); }
.tag-intermediate { @include difficulty-tag($color-info); }
.tag-advanced { @include difficulty-tag($brand-secondary); }

// 代码块
.code-block {
	background: $code-bg-color; border-radius: $radius-base; padding: $spacing-base;
	font-family: 'Menlo', 'Monaco', 'Courier New', monospace; font-size: $font-sm;
	color: $code-text-color; line-height: 1.6; overflow-x: auto; white-space: pre; -webkit-overflow-scrolling: touch;
	.keyword { color: $code-keyword-color; }
	.string { color: $code-string-color; }
	.comment { color: $code-comment-color; font-style: italic; }
	.function { color: $code-function-color; }
	.number { color: $code-number-color; }
}
.code-inline { display: inline; padding: 4rpx 12rpx; background: $code-bg-color; border-radius: $radius-sm; font-family: 'Menlo', 'Monaco', 'Courier New', monospace; font-size: $font-sm; color: $code-text-color; }

// 按钮
.btn-primary { background: $brand-primary; color: #fff; border: none; border-radius: $radius-base; padding: 12px 30px; font-size: $font-lg; &:active { background: $brand-primary-dark; } }
.btn-secondary { background: $brand-secondary; color: #fff; border: none; border-radius: $radius-base; padding: 12px 30px; font-size: $font-lg; }
.btn-outline { background: transparent; color: $brand-primary; border: 2rpx solid $brand-primary; border-radius: $radius-base; padding: 12px 30px; font-size: $font-lg; }

// 加载
.loading-wrapper {
	@include flex-center; @include flex-column; padding: $spacing-xl 0;
	&-icon { width: 64rpx; height: 64rpx; border: 4rpx solid $gray-3; border-top-color: $brand-primary; border-radius: 50%; animation: spin 0.8s linear infinite; }
	&-text { margin-top: $spacing-sm; font-size: $font-sm; color: $gray-5; }
}

// 空状态
.empty-state {
	@include flex-center; @include flex-column; padding: 120rpx $spacing-lg;
	&-icon { width: 200rpx; height: 200rpx; margin-bottom: $spacing-md; }
	&-title { font-size: $font-lg; color: $gray-6; margin-bottom: $spacing-xs; }
	&-desc { font-size: $font-sm; color: $gray-5; text-align: center; }
	&-action { margin-top: $spacing-lg; }
}

// 分割线
.divider { height: 1rpx; background: $gray-2; margin: $spacing-base 0; }
.divider-bold { height: 16rpx; background: $gray-1; }

// Flex
.flex-center { @include flex-center; }
.flex-between { @include flex-between; }
.flex-column { @include flex-column; }
.flex-1 { flex: 1; min-width: 0; }
.flex-shrink-0 { flex-shrink: 0; }

.safe-area-bottom { @include safe-area-bottom; }
.ellipsis { @include text-ellipsis(1); }
.ellipsis-2 { @include text-ellipsis(2); }
.ellipsis-3 { @include text-ellipsis(3); }
</style>
