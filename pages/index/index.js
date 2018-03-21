const mixins	= require('../../utils/mixins')
const app		= getApp()

const options = {
	data: {
		is_list: true,
		is_home: true,

		topics: [],
    version:'',
		next_first: null,
		next_cursor: null,
    can: 1,
		isPull: false,
		isLoading: false,
		share_title:'',
		page_title:''
	},

	onLoad: function(options) {
    this.loadTopics()
	},

	onShow: function(){
		this.setNavigationBarTitle()
	},

	onUnload: function(){ 
		this.removeTopicChange()
		this.removeUserChange()
	},

	onPullDownRefresh: function() {
		this.setData({isPull: true})
		this.loadTopics({first: this.data.next_first})
	},

	onReachBottom: function() {
		if(this.data.next_cursor){
			this.loadTopics({cursor: this.data.next_cursor})
		}
	},

	onShareAppMessage: function(res) {

    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target.offsetTop)
      return {
        title: this.data.share_title,
        path: '/pages/index/single?id='+res.target.id
      }
    }else{
      return {
        title: this.data.share_title,
        path: '/pages/index/index'
      }
    }
	
	},
  
}

mixins(options)
Page(options)
