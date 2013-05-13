define(['underscore', 'marionette', 'text!tpl/list-item.html'], function (_, Marionette, template) {
  'use strict';

  return Marionette.CompositeView.extend({
    tagName : 'li',


    template: _.template(template),

    events: {
      click: 'alert'

    },


    alert: function () {
	console.log(this.template.toString());
	this.template(this.model);
      alert(this.model.get('rand')) ;

    }


  });
});
