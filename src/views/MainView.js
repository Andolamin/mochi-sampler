var
	kind = require('enyo/kind');

var
	Button = require('mochi/Button');

module.exports = kind({
	name: "mochi.Sampler.MainView",
	classes: "enyo-fit",
	components: [
		{
			kind: Button,
			content: "Test",
			style: "margin: 20px;"
		}
	]
});

