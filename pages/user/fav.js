const mixins	= require('../../utils/mixins')
const app		= getApp()

const options = {
	data: {
		favs: [],
		next_cursor: 0,
		isLoading: false
	},

	onLoad: function () {
		this.loadFavs()
	},

	onReachBottom: function () {
		if(this.data.next_cursor){
			this.loadFavs({cursor: this.data.next_cursor})
		}
	}
}

mixins(options)
Page(options)
