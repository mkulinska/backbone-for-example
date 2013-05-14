define(['vent'], function (vent) {
  "use strict";

  return {
    main : function() {
      console.log('main');
      vent.trigger('show:main');
    },

    showRecord: function(recordId) {
      console.log('showRecord', this, arguments );
      vent.trigger('show:showRecord', recordId);
    },

    add: function () {
      console.log('add');
      vent.trigger('show:addRecord');
    }
  };
});