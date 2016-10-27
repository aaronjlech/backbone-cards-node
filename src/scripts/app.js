var $ = require('jquery')
var Backbone = require('Backbone')

var UserCollection = require('./models-user.js')

var cardsTemplateFn = require('./view-templates.js')

var ViewTemplateConstructor = require('./view-handler.js')



var AppRouter = Backbone.Router.extend({

   routes: {

      "": "showHomePage",
      "nationality/:nat/gender/:gender": "showNatAndGend",
      "gender/:gender": "showGender",
      "nationality/:nat": "showNat",




   },

   showHomePage: function(){


      var homeColl = new UserCollection('results=24')

      homeColl.fetch().then(function(){

         var homePageView = new ViewTemplateConstructor('#app-container', cardsTemplateFn)


         homePageView.render(homeColl)

      })




   },

   showNat: function(natArg){

      var natColl = new UserCollection('results=24&nat='+ natArg)

      natColl.fetch().then(function(){

         var natPageView = new ViewTemplateConstructor('#app-container', cardsTemplateFn)

         natPageView.render(natColl)





      })


   },

   showGender: function(genArg){

      var genColl = new UserCollection('results=24&gender='+ genArg)

      genColl.fetch().then(function(){
         console.log(genColl)

         var genPageView = new ViewTemplateConstructor('#app-container', cardsTemplateFn)

         genPageView.render(genColl)





      })



   },
   showNatAndGend: function(natArg2, genArg2){
      var natGenColl = new UserCollection('results=24&nat='+ natArg2 +'&gender=' +genArg2)

      natGenColl.fetch().then(function(){

         var natGenPageView = new ViewTemplateConstructor('#app-container', cardsTemplateFn)

         natGenPageView.render(natGenColl)





      })
   },




   initialize: function(){

      Backbone.history.start();




   }
})

var app = new AppRouter();
