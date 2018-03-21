const mixins		= require('../../utils/mixins')
const app			= getApp()

const options = {
	data: {
		id: 0,
		is_single: true,
		isLoading: true,
		type: 'topic',
		topic: null,
		user: null,
		text: '',
		reply_to: 0,
		reply_focus: false,
		placeholder: '发布评论'
	},
	
	onLoad: function(options) {
		this.setData({
			id: options.id,
			user: app.globalData.user
		})
		this.loadTopic(options.id)
	},

	onUnload: function(){ 
		this.removeTopicChange()
	},

	onShareAppMessage: function() {
		return {
			title: this.data.share_title,
			path: '/pages/index/single?id=' + this.data.id
		}
	},

	share: function() {
		wx.showShareMenu({
			success: function() {
				console.log('open share success')
			},
			fail: function() {
				console.log('open share fail')
			}
		})
	}
}

mixins(options)
Page(options)
