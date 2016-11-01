import Ember from 'ember';

export default Ember.Controller.extend({
	loginFailed: false,
	login: function(){
		this.setProperties({
			loginFailed:false
		});
		Ember.$.post("/login", {
			username: this.get("username"),
			password: this.get("password")
		}).then(function(){
			document.location = "/welcome";
		},function(){
			this.set("loginFailed", true);
		}.bind(this));
	}

});
