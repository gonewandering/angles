Angles.js
=========

An angular.js wrapper for the Chart.js library.

[View DEMOS](http://lgsilver.github.io/angles/)

[Chart.js Documentation](http://www.chartjs.org/docs/)

Basic Usage
-----------

To Use, make sure to include the following .js files above your app:
```html
<script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.10/angular.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/Chart.js/0.2.0/Chart.min.js"></script>
<script src="angles.js"></script>
```

Next, make sure to add **"angles"** to your Angular app requirements:

```javascript
var app = angular.module("anglesExample", ["angles"]);
```

Charts are added using a canvas element with the following syntax, which corresponds to Chart.js. The data and options attributes refer to ng-models in the controller scope. You can name these whatever you want:

```html
<canvas chart type="Line" options="options" data="chart" width="500" height="300"></canvas>
```

Charts can also be added with shorter, aliased types

```html
<canvas barchart options="options" data="chart" width="500" height="300"></canvas>
```

In your controller, make sure you provide the appropriate data and options per Chart.js documentation:

```javascript
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

That's it. You can change the values of the chart just as you would with any other angular model.

Directives
----------

### linechart

For Chart.js Line Charts

```html
<canvas linechart options="options" data="chart" width="300" height="300"></canvas>
OR
<canvas chart type="Line" options="options" data="chart" width="300" height="300"></canvas>
```

### barchart

For Chart.js Bar Charts

```html
<canvas barchart options="options" data="chart" width="300" height="300"></canvas>
OR
<canvas chart type="Bar" options="options" data="chart" width="300" height="300"></canvas>
```

### radarchart

For Chart.js Radar Charts

```html
<canvas radarchart options="options" data="chart" width="300" height="300"></canvas>
OR
<canvas chart type="Radar" options="options" data="chart" width="300" height="300"></canvas>
```

### polarchart

For Chart.js Polar Charts

```html
<canvas polarchart options="options" data="chart" width="300" height="300"></canvas>
OR
<canvas chart type="PolarArea" options="options" data="chart" width="300" height="300"></canvas>
```

### piechart

For Chart.js Pie Charts

```html
<canvas piechart options="options" data="chart" width="300" height="300"></canvas>
OR
<canvas chart type="Pie" options="options" data="chart" width="300" height="300"></canvas>
```

### doughnutchart

For Chart.js Doughnut Charts

```html
<canvas doughnutchart options="options" data="chart" width="300" height="300"></canvas>
OR
<canvas chart type="Doughnut" options="options" data="chart" width="300" height="300"></canvas>
```

Options and Data
----------------

You can provide options and data to all charts via the options and data attributes on the canvas elements.

```html
<body ng-app="app">

    <div ng-controller="MainCtrl">
    
        <canvas donutchart options="myChartOptions" data="myChartData" width="300" height="300"></canvas>
    
    </div>


</body>
```

```javascript
'use strict';

angular.module('app', ['angles']).controller('MainCtrl', function( $scope ) {

    $scope.myChartData = [
    	{
    		value: 30,
    		color:"#F7464A"
    	},
    	{
    		value : 50,
    		color : "#E2EAE9"
    	},
    	{
    		value : 100,
    		color : "#D4CCC5"
    	},
    	{
    		value : 40,
    		color : "#949FB1"
    	},
    	{
    		value : 120,
    		color : "#4D5360"
    	}
    ];
    
    $scope.myChartOptions =  {
        //Boolean - Whether we should show a stroke on each segment
        segmentShowStroke : true,
        
        //String - The colour of each segment stroke
        segmentStrokeColor : "#fff",
        
        //Number - The width of each segment stroke
        segmentStrokeWidth : 24,
        
        //The percentage of the chart that we cut out of the middle.
        percentageInnerCutout : 50,
        
        //Boolean - Whether we should animate the chart
        animation : true,
        
        //Number - Amount of animation steps
        animationSteps : 100,
        
        //String - Animation easing effect
        animationEasing : "easeOutBounce",
        
        //Boolean - Whether we animate the rotation of the Doughnut
        animateRotate : true,
        
        //Boolean - Whether we animate scaling the Doughnut from the centre
        animateScale : false,
        
        //Function - Will fire on animation completion.
        onAnimationComplete : null
    };
};

```
