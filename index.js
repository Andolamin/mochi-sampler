window.mochi = {
	config: {
		theme: window.location.hash.indexOf("dark") >= 0 ? "dark" : "light"
	}
};

window.addEventListener('hashchange', function () {
  var theme = window.location.hash.indexOf("dark") >= 0 ? "dark" : "light";
  document.body.classList.remove('mochi-dark');
  document.body.classList.remove('mochi-light');
  document.body.classList.add('mochi-'+theme);
});

var ready = require("enyo/ready");

var Application = require("./src/apps/Application.js");

window.cast = {};

ready(function() {
	console.log("Ready");
	var app = window.app = new Application({
		name: "mochi.Sampler"
	});
});
