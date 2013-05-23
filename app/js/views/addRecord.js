define(["underscore", "marionette", "text!tpl/addRecord.html", "jquery"], function (_, Marionette, template, jq) {
  return Marionette.ItemView.extend({

    template: _.template(template),


    events: {
      'focus input[type=text]': 'clearInput',
      'click input[type=button]': 'addRecord'
    },

    clearInput: function (event) {
      console.log(arguments);
      jq(event.currentTarget).val('');
    },

    addRecord: function () {
      console.log(arguments);
      var val = this.$el.find('input[type=text]').val();

      this.collection.add({title: val});

      document.location.hash="#/";

    }

  });
});