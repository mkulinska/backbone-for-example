define(["jquery", "backbone", "models/list-item"], function (jq, Backbone, Model) {

  return Backbone.Collection.extend({
    model: Model,
    fetch: function () {
      console.log('inner fetch', this, arguments);

      var that = this;

      jq.getJSON('js/collection.json')
      .done(function (data) {
        setTimeout(function () {
          that.reset(data);
        }, 3000);
      })
      .fail(function () {

        console.log("json error:",this, arguments);

      });
    }
  });

});
