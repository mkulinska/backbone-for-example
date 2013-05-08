define(["backbone", "models/list-item"], function (Backbone, Model) {

  return Backbone.Collection.extend({
    model: Model
  });

});