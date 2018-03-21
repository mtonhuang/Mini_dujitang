const mixins	= require('../../utils/mixins')
const app		= getApp()

const options = {
	data: {
		notifications: [],
		next_cursor: null,
		isLoading: false
	},

	onLoad: function () {
		this.loadNotifications()
	},
	
	navigateTo: function (e) {
		const topic = e.currentTarget.dataset.topic
		if (topic.topic_type === 'article') {
			wx.navigateTo({
				url: '/pages/article/single?id=' + topic.article.post_id
			})
		} else if (topic.topic_type === 'link') {
			wx.navigateToMiniProgram({
				appId: topic.app.appid,
				path: topic.app.app_path
			})
		} else {
			wx.navigateTo({
				url: '/pages/index/single?id=' + topic.topic_id
			})
		}
	},
	
	onReachBottom: function () {
		if(this.data.next_cursor){
			this.loadNotifications({cursor: this.data.next_cursor})
		}
	}
}

mixins(options)
Page(options)
