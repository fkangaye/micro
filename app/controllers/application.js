import Ember from 'ember';

export default Ember.Controller.extend({
	  loginPage: true,
	  actions: {
	  	toggleLoginIcon(){
	  		this.toggleProperty("loginPage");
	  	}
	  }

});

