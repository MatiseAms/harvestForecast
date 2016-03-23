angular.module('HarvestForecastModule', [])
  .provider('harvestForecastConfig', function () {

    this.Url = 'https://api.forecastapp.com';
    this.accessToken = undefined;
    this.accountId = undefined;

    this.getUrl = function () {
        return this.Url;
    };

    this.setUrl = function (newUrl) {
        this.Url = newUrl;
        return this;
    };

    this.getAccessToken = function () {
        return this.accessToken;
    };

    this.setAccessToken = function (newAccessToken) {
        this.accessToken = newAccessToken;
        return this;
    };

    this.getAccountId = function () {
        return this.accountId;
    };

    this.setAccountId = function (newAccountId) {
        this.accountId = newAccountId;
        return this;
    };

    this.$get = function () {
      return this;
    };

  })
  .service('HarvestForecastService', ['$q', '$window', '$http', 'harvestForecastConfig',  function($q, $window, $http, harvestForecastConfig) {
    'use strict';

    var self = this;

    var req = {
      headers: {
        'authorization': harvestForecastConfig.accessToken,
        'forecast-account-id': harvestForecastConfig.accountId
      }
    };

    self.getProjects = function getProjects(){
      var deferObj = $q.defer();

      req.url = harvestForecastConfig.Url + '/projects';
      req.method = 'get';


      $http(req).then(function(data){
        deferObj.resolve(data.data.projects);
      },
      function(error){
        console.log(error);
      });

      return deferObj.promise;
    };

    self.getAssignments = function getAssignments(start_date,end_date){
      var deferObj = $q.defer();

      // var start_date = '2016-03-04';
      // var end_date = '2016-03-04';

      req.url = harvestForecastConfig.Url + '/assignments?start_date='+start_date+'&end_date='+end_date+'&state=active';
      req.method = 'get';

      $http(req).then(function(data){
        deferObj.resolve(data.data.assignments);
      },
      function(error){
        console.log(error);
      });

      return deferObj.promise;
    };

    self.getPeople = function getPeople(){
      var deferObj = $q.defer();

      req.url = harvestForecastConfig.Url + '/people';
      req.method = 'get';


      $http(req).then(function(data){
        deferObj.resolve(data.data.people);
      },
      function(error){
        console.log(error);
      });

      return deferObj.promise;
    };

    self.getMilestones = function getMilestones(){
      var deferObj = $q.defer();

      var start_date = moment().format('YYYY-MM-DD');
      var end_date = moment().add(1,'month').format('YYYY-MM-DD');

      req.url = harvestForecastConfig.Url + '/milestones?start_date='+start_date+'&end_date='+end_date+'';
      req.method = 'get';


      $http(req).then(function(data){
        deferObj.resolve(data.data.milestones);
      },
      function(error){
        console.log(error);
      });

      return deferObj.promise;
    };

}]);
