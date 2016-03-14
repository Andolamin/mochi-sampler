var
	kind = require('enyo/kind'),
	Control = require('enyo/Control'),
	Collection = require('enyo/Collection');

var
  FittableRows = require('layout/FittableRows'),
  FittableColumns = require('layout/FittableColumns');

var
  Panels = require('mochi/Panels'),
  List = require('mochi/List'),
	ListItem = require('mochi/ListItem'),
	ToggleButton = require('mochi/ToggleButton');

var
  Samples = require('./Samples.js'),
  ButtonSample = require("./ButtonSample");

module.exports = kind({
	name: "mochi.Sampler.MainView",
	kind: Control,
	classes: "enyo-fit enyo-unselectable",
	components: [
    {
      kind: Panels,
      classes: "enyo-fit rounded",
      layoutStyle: Panels.Split,
      components: [
        {
          style: "min-width: 370px; padding: 0 50px 0 0; margin-right: -50px;",
          components: [
            {
              kind: FittableRows,
              classes: 'enyo-fit',
              components: [
                {
                  name: "sampleList",
                  kind: List,
                  collection: new Collection(Samples),
                  style: "width: 100%;",
                  fit: true,
                  components: [
                    {
                      components: [
                        {
                          kind: ListItem,
                          classes: "sampler-list-item",
                          components: [
                            {
                              name: "label"
                            }
                          ]
                        }
                      ],
                      bindings: [
                        {from: ".model.label", to: ".$.label.content"}
                      ]    
                    }
                  ]
                },
                {
                  kind: FittableColumns,
                  style: "width: 320px; height: 40px;",
                  components: [
                    {
                      name: "ThemeToggle",
                      kind: ToggleButton,
                      onContent: "Dark",
                      offContent: "Light",
                      value: window.location.hash.indexOf('#dark') >= 0,
                      style: "margin: 8px !important; height: 24px;"
                    },
                    {
                      content: "Theme",
                      style: "margin: 8px 0px !important;",
                      fit: true
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: "ButtonSample",
          kind: ButtonSample
        }
      ]
    }
  ],
  bindings: [
    {from: ".$.ThemeToggle.value", to: ".theme", transform: function(v) {
      return (v ? "dark" : "light");
    }}
	],
	themeChanged: function () {
    window.location.hash = '#'+this.theme;
	}
});
