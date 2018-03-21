const Auth = require('./utils/auth')

App({
	onLaunch: function() {
		if (Auth.user()) {
			this.globalData.user = Auth.user();
		}
	},

	globalData: {
		user: null
	}
})