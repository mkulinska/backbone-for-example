define(["marionette", "collections/list", "views/list-item"],
      function (Marionette, Collection, ItemView){
        'use strict';
        return Marionette.CompositeView.extend({

          // template : function () { return "<ul></ul>"},

          template : function () { return ""},

          tagName: 'ul',

          itemView : ItemView,

          // itemViewContainer: 'ul',

          itemViewContainer: '',

          //itemViewContainer: this.$el,

          collection: new Collection ([
            {title: "aaa", subtitle: "bbbb"},
            {title: "ccc", subtitle: "ddd"},
            {},
            {title: "eee", subtitle: "fff"}])
        });
      });
