define(["marionette", "collections/list", "views/list-item", "text!tpl/list.html"],
      function (Marionette, Collection, ItemView, template){
        'use strict';
        return Marionette.CompositeView.extend({

          // template : function () { return "<ul></ul>"},

          template : _.template(template),

          tagName: 'ul',

          itemView : ItemView,

          // itemViewContainer: 'ul',

          itemViewContainer: '',

          //itemViewContainer: this.$el,

          //collection: new Collection (),

          initialize: function () {
            this.collection.on('all', function () {
                console.log('render', this, arguments);
              this.render();
            }, this);
          }
        });
      });
