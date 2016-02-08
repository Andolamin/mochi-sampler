var
	kind = require('enyo/kind'),
	Application = require('enyo/Application');

var
	MainView = require('../views/MainView.js');

module.exports = kind({
	name: "mochi.Sampler.Application",
	kind: Application,
	view: MainView
});
