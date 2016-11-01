import Ember from 'ember';

var Team = Ember.Object.extend({
	name: '',
	members: ''
});

var TeamCollection = Ember.ArrayProxy.extend(Ember.SortableMixin, {
	sortProperties: ['title'],
	sortAscending: false,
	content: [],
});

var teamList = TeamCollection.create();
var team1 = Team.create({
	name: "TEAM AAA",
	members: 2
});

var team2 = Team.create({
	name: "TEAM B",
	members: 1
});

var team3 = Team.create({
	name: "TEAM C",
	members: 1
});

teamList.pushObject(team1);
teamList.pushObject(team2);
teamList.pushObject(team3);

export default Ember.Controller.extend({
	team: teamList
});
