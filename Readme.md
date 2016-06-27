# AngularJS Harvest Forecast SDK
A small wrapper to use Harvest Forecast SDK on your site or Second Screen

## Find your Forecastapp credentials
- Go to http://forecastapp.com
- Login if not logged in yet
- Open your webinspector
- Navigate to Resources -> Local storage
- Find and copy `account_id` and `access_token`

## Install

Install Harvest Forecast SDK using [bower](http://bower.io):
```bash
bower install ng-harvestForecast
```

Load script in html after angular.js file
```html
<script src="/vendor/harvestForecast.js"></script>
```

## Config it
Include module in your app
```javascript
var app = angular.module('exampleApp', [
	'HarvestForecastModule'
])
```
Set Access Token and Account ID variables
```javascript
var app.config(['harvestForecastConfigProvider', function(harvestForecastConfigProvider) {
	'use strict';

  // Set forecast access token and account id
  //
	harvestForecastConfigProvider.setAccessToken('<access_token>');
	harvestForecastConfigProvider.setAccountId(<account_id>);
}]);
```

## Use it

Include the module as a service in your controller
```javascript
app.controller('HomeController', ['HarvestForecastService' function(HarvestForecastService){ }]);
```

### Functions
Get Assignments with `start` and `end` date
```javascript
var start = '2016-03-23';
var end = '2016-03-23';

HarvestForecastService.getAssignments(start,end).then(function(assignments){
  $scope.assignments = assignments;
});
```
Get milestones
```javascript
HarvestForecastService.getMilestones().then(function(milestones){
  $scope.milestones = milestones;
})
```

Get projects
```javascript
HarvestForecastService.getProjects().then(function(projects){
  $scope.projects = projects;
})
```

Get clients
```javascript
HarvestForecastService.getClients().then(function(clients){
  $scope.clients = clients;
})
```

Get users
```javascript
HarvestForecastService.getPeople().then(function(people){
  $scope.people = people;
});
```

## TODO

- Incorporate all get functions in SDK
- Expand functions with date range
- Manipulate functions (create/delete/update)
- Better way to use the api
- More of your great ideas ;)


### License
Copyright (c) 2016 - Maurits Meester - http://www.matise.nl

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
