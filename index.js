window.mochi = {
	config: {
		theme: window.location.hash.indexOf("dark") >= 0 ? "dark" : "light"
	}
};

var ready = require("enyo/ready");

var Application = require("./src/apps/Application.js");

window.cast = {};

ready(function() {
	console.log("Ready");
	var app = window.app = new Application({
		name: "mochi.Sampler"
	});
});
