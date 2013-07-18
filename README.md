Angles.js
======

An angular.js wrapper for the Chart.js library.

### To Use, make sure to include the following .js files above your app:
```
    <script src="libs/angular/angular.min.js"></script>
    <script src="libs/Chart.js/Chart.min.js"></script>
    <script src="libs/angles.js"></script>
```
### Next, make sure to add "angles" to your Angular app requirements:
```
  var app = angular.module("anglesExample", ["angles"]);
```
### Charts are added using a canvas element with the following syntax, which corresponds to Chart.js. The data and options attributes refer to ng-models in the cntroller scope. You can name these whatever you want:
```
  <canvas linechart options="options" data="chart" id="lineChart" width="500" height="300"></canvas>
``` 
### In your controller, make sure you provide the appropriate data and options per Chart.js documentation:
```
   $scope.chart = {
  		labels : ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
			datasets : [
				{
					fillColor : "rgba(151,187,205,0)",
					strokeColor : "#e67e22",
					pointColor : "rgba(151,187,205,0)",
					pointStrokeColor : "#e67e22",
					data : [4, 3, 5, 4, 6]
				},
				{
					fillColor : "rgba(151,187,205,0)",
					strokeColor : "#f1c40f",
					pointColor : "rgba(151,187,205,0)",
					pointStrokeColor : "#f1c40f",
					data : [8, 3, 2, 5, 4]
				}
			], 
		};
```
### That's it. You can change the values of the chart just as you would with any other angular model.
