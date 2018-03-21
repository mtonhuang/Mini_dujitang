const mixins	= require('../../utils/mixins')
const app		= getApp()

const options = {
	data: {
		user: null
	},

	onShow: function () {
		this.getProfile();
	},

	onUnload: function(){
		this.removeUserChange()
	}
}

mixins(options)
Page(options)
