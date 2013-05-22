define(["jquery", "backbone", "models/list-item"], function (jq, Backbone, Model) {


  return Backbone.Collection.extend({
    model: Model,

    isInitialized: false,
      
    initDeferred: null,

    initPromise: null,

    _initialize: function () {
        
        this.isInitialized = true;
        
        this.trigger('initialized', this);

        this.initDeferred.resolve(this);

    },
      
      
    initialize: function () {
        this.initDeferred = new jq.Deferred();
        this.initPromise = this.initDeferred.promise();

        this.initPromise.done(function () { 
            console.log('collection ready');
        });

    },

    
    fetch: function () {
      console.log('inner fetch', this, arguments);

      var that = this;

      jq.getJSON('js/collection.json')
      .done(function (data) {
        setTimeout(function () {
          that.once('reset', that._initialize, that);
          that.reset(data);
        }, 500);
      })
      .fail(function () {
        console.log("json error:",this, arguments);
      });
    }
  });

});
