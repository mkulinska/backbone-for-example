define(["jquery", "backbone", "models/list-item"], function (jq, Backbone, Model) {

  return Backbone.Collection.extend({
    model: Model,
    fetch: function () {
      console.log('inner fetch', this, arguments);

      var col = this;

      jq.getJSON('js/collection.json')
      .done(function (data) {

        col.reset(data);

      })
      .fail(function () {

        console.log("json error:",this, arguments);

      });
    },
    initialize: function () {
      this.fetch();
    }
  });

});
