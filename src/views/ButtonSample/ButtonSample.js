var
  kind = require('enyo/kind');

var
	Button = require('mochi/Button'),
	Header = require('mochi/Header'),
	Icon = require('mochi/Icon');

var
	FittableRows = require('layout/FittableRows');

module.exports = kind({
  components: [
    {
      kind: Header,
      style: "width: 100%",
      content: "Buttons"
    },
    {
      name: "ButtonSample",
      kind: FittableRows,
      style: "margin: 16px 0 0 24px;",
      noStretch: true,
      components: [
        {
          kind: Button,
          content: "Button"
        },
        {
          kind: Button,
          content: "Disabled",
          disabled: true
        },
        {
          kind: Button,
          content: "Affirmative",
          classes: "mochi-button-affirmative"
        },
        {
          kind: Button,
          content: "Warning",
          classes: "mochi-button-warning"
        },
        {
          kind: Button,
          content: "Blue",
          classes: "mochi-button-blue"
        },
        {
          kind: Button,
          content: "With Icon",
          classes: "mochi-button-picker",
          components: [
            {
              kind: Icon,
              src: 'mochi/assets/picker-arrow.svg',
              style: "width: 7px; height: 6px; margin: 10px 6px 0 5px !important;"
            }
          ]
        }
      ]
    }
  ]
});