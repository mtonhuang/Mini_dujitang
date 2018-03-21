const mixins	= require('../../utils/mixins')
const app		= getApp()

const options = {
	data: {
		credits: [],
		next_cursor: null,
		isLoading: false,
		isDone: false
	},
	
	onLoad: function () {
		this.loadCredits()
	},
	
	onReachBottom: function () {
		if(this.data.next_cursor){
			this.loadCredits({cursor: this.data.next_cursor})
		}
	}
}

mixins(options)
Page(options)
