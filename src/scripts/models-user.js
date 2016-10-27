var $ = require('jquery')
var Backbone = require('Backbone')


var UserModel = Backbone.Model.extend({

   idAttribute: 'email',

})


var UserCollection = Backbone.Collection.extend({

   model: UserModel,

   url: "",

   parse: function(jsonCollection){
      return jsonCollection.results

   },

   initialize: function(qryStr){


      this.url =  "https://randomuser.me/api?" + qryStr;


   },


})


module.exports =  UserCollection;
