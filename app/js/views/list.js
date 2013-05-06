define(["backbone.marionette", "collections/list", "views/list-item"],
      function (marionette, Collection, ItemView){
        return Marionette.CompositeView.extend({

          template : function () { return "<ul></ul>"},

          itemView : ItemView,

          itemViewContainer: 'ul',

          collection: new Collection ([{}, {}, {}])

        });
      });