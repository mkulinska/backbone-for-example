define(['marionette'],function(marionette) {
  'use strict';

  return marionette.AppRouter.extend({
    appRoutes:{
      '': 'main',
      'details/:record': 'showRecord',
      'add' : 'add'
    }
  });

});