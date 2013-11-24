'use strict';
adsCmsFrontendApp.factory('twitterService', function ($resource, $q) {
/*
   We could use $http in stead of $resource below.
   If you are serializing/deserializing objects into/from a data store and doing CRUD-y things,
   $resource would likely be the way to go. If you have a more action/intent based API scheme,
   you might want to use $http instead. And you can certainly use both within the same app if it makes sense to you!


   See http://docs.angularjs.org/api/ngResource.$resource

   Default actions in $resource
   'get':    {method:'GET'},
   'save':   {method:'POST'},
   'query':  {method:'GET', isArray:true},
   'remove': {method:'DELETE'},
   'delete': {method:'DELETE'}

   Note #1
   Port needs to be escaped below, or else we get 404 error with following message:
   Origin http://localhost:3000 is not allowed by Access-Control-Allow-Origin.

   Note #2
   since update (and PUT) is not part of the default actions in $resource we need to add custom action 'update'
   with HTTP method POST  as shown below. Also, 'id' needs to be added to the default parameter list in $resource
   since it will not be sent automatically when calling personResource.update()

   */

  var twitterResource =
    $resource('http://localhost:9000/api/sources/twitter/edit');

  return {
      readData: function () {
          return twitterResource.get().$promise;
      },

      saveData: function (twitterConfig) {
          return twitterResource.save(twitterConfig).$promise;
      }
  }
});
