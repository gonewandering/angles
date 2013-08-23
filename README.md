Angles.js
=========

An angular.js wrapper for the Chart.js library.

[View DEMOS](http://lgsilver.github.io/angles/)

[Chart.js Documentation](http://www.chartjs.org/docs/)

Basic Usage
-----------

To Use, make sure to include the following .js files above your app:
```html
<script src="libs/angular/angular.min.js"></script>
<script src="libs/Chart.js/Chart.min.js"></script>
<script src="libs/angles.js"></script>
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
