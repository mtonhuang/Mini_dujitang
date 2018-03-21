const API			= require('../../utils/api')
const NC			= require('../../utils/notificationcenter.js')
const mixins		= require('../../utils/mixins')
const WxParse		= require('../../utils/wxParse/wxParse')
const app			= getApp()

let isSubmiting 	= false

const options = {
	data: {
		id: 0,
		is_single: true,
		isLoading: true,
		type: 'article',
		topic: null,	
		user: null,
		text: '',
		reply_to: 0,
		reply_focus: false,
		placeholder: '发布评论'
	},

	onLoad: function(options) {
		console.log(app.globalData.user);
		this.setData({
			id: options.id,
			user: app.globalData.user
		})
		this.loadArticle(options.id)
	},

	loadArticle: function(id) {
		API.getArticle(id).then(res => {
			var topic = res.article;
			topic.tag = topic.topic_tag
			this.setData({
				topic: topic,
				share_title: res.share_title,
				isLoading: false
			})

			WxParse.wxParse('content', 'html', res.article.content, this, 0)
			
			wx.setNavigationBarTitle({title: res.page_title})
		}).catch(err => {
			this.setData({
				isLoading: false
			})
			console.log('err', err)
		})
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
	},

	onShareAppMessage: function() {
		return {
			title: this.data.share_title,
			path: '/pages/article/single?id=' + this.data.id
		}
	}
}

mixins(options)
Page(options)
