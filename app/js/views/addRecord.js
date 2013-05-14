define(["underscore", "marionette", "text!tpl/addRecord.html"], function (_, Marionette, template) {
  return Marionette.CompositeView.extend({

    template: _.template(template)


  });
});