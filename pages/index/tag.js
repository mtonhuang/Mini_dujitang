const mixins	= require('../../utils/mixins')
const app	 	= getApp()

const options = {
	data: {
		is_list: true,
		is_tag: true,

		topics: [],
		tag_id: 0,

		next_first: 0,
		next_cursor: 0,
    openid:0,
		isPull: false,
		isLoading: false,

		share_title:'',
		page_title:''
	},

	onLoad: function(options) {
    
	
    if(options.tag_id){
      this.loadTopics({ tag_id: options.tag_id }, true)
      this.setData({ tag_id: options.tag_id })      
    }else{
    this.loadTopics({ openid: options.openid }, true)
    this.setData({ openid: options.openid })    

    }
		
	},

	onShow: function(){
		this.setNavigationBarTitle()
	},

	onUnload: function(){ 
		this.removeTopicChange()
	},

	onPullDownRefresh: function() {
		this.setData({isPull: true})
    if (this.data.next_first == 0) {
      return;
    } else {
      if (this.data.tag_id) {
        this.loadTopics({ first: this.data.next_first, tag_id: this.data.tag_id })
      } else {
        this.loadTopics({ first: this.data.next_first, openid: this.data.openid })
      }
    }

	},
	
	onReachBottom: function() {
    if (this.data.next_cursor==0){
      return;
    }else{
      if (this.data.tag_id) {
        this.loadTopics({ cursor: this.data.next_cursor, tag_id: this.data.tag_id })
      } else {
        this.loadTopics({ cursor: this.data.next_cursor, openid: this.data.openid })
      }
    }
     
		
	},
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res)
      return {
        title: this.data.share_title,
        path: '/pages/index/single?id=' + res.target.id
      }
    } else {
      return {
        title: this.data.share_title,
        path: '/pages/index/tag?tag_id=' + this.data.tag_id
      }
    }

  },
}

mixins(options)
Page(options)
