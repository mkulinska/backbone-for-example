define(['vent'], function (vent) {
  "use strict";

  return {
    main : function() {
      console.log('main');
    },

    showRecord: function() {
      console.log('showRecord', this, arguments );
    },

    add: function () {
      console.log('add');
    }
  };
});