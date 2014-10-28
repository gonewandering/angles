Angles.js
=========

An angular.js wrapper for the Chart.js library.

[Chart.js Documentation](http://www.chartjs.org/docs/)

New Update of ChartJS (Beta) allow more interaction with graph ( tooltips and png/jpg export of graphs)

[ChartJS](http://www.chartjs.org/)

Basic Usage
-----------

To Use, make sure to include the following .js files above your app:
```html
<script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.10/angular.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/Chart.js/1.0.1-beta.2/Chart.min.js"></script>
<script src="angles.js"></script>
```

Next, make sure to add **"angles"** to your Angular app requirements:

```javascript
var app = angular.module("anglesExample", ["angles"]);
```

Charts are added using a canvas element with the following syntax, which corresponds to Chart.js. The data and options attributes refer to ng-models in the controller scope. You can name these whatever you want:

```html
<canvas chart="Line" options="options" data="chart" width="500" height="300"></canvas>
```

Charts can also be added with shorter, aliased types

```html
<canvas barchart options="options" data="chart" width="500" height="300"></canvas>
```

In your controller, make sure you provide the appropriate data and options per Chart.js documentation:

you can add responsive attribute to enable responsiveness of canvas

```html
<canvas barchart responsive=true options="options" data="chart"></canvas>
```

the legend attribute auto generate a legend after canvas container 

```html
<canvas barchart legend=true options="options" data="chart"></canvas>
```

The template for this legend is a legendTemplate in the chart options

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
<canvas chart="Line" options="options" data="chart" width="300" height="300"></canvas>
```

### barchart

For Chart.js Bar Charts

```html
<canvas barchart options="options" data="chart" width="300" height="300"></canvas>
OR
<canvas chart="Bar" options="options" data="chart" width="300" height="300"></canvas>
```

### radarchart

For Chart.js Radar Charts

```html
<canvas radarchart options="options" data="chart" width="300" height="300"></canvas>
OR
<canvas chart="Radar" options="options" data="chart" width="300" height="300"></canvas>
```

### polarchart

For Chart.js Polar Charts

```html
<canvas polarchart options="options" data="chart" width="300" height="300"></canvas>
OR
<canvas chart="PolarArea" options="options" data="chart" width="300" height="300"></canvas>
```

### piechart

For Chart.js Pie Charts

```html
<canvas piechart options="options" data="chart" width="300" height="300"></canvas>
OR
<canvas charte="Pie" options="options" data="chart" width="300" height="300"></canvas>
```

### doughnutchart

For Chart.js Doughnut Charts

```html
<canvas doughnutchart options="options" data="chart" width="300" height="300"></canvas>
OR
<canvas chart="Doughnut" options="options" data="chart" width="300" height="300"></canvas>
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
  
    //Globals
    $scope.myChartOptions = {
        // Boolean - Whether to animate the chart
        animation: true,
    
        // Number - Number of animation steps
        animationSteps: 60,
    
        // String - Animation easing effect
        animationEasing: "easeOutQuart",
    
        // Boolean - If we should show the scale at all
        showScale: true,
    
        // Boolean - If we want to override with a hard coded scale
        scaleOverride: false,
    
        // ** Required if scaleOverride is true **
        // Number - The number of steps in a hard coded scale
        scaleSteps: null,
        // Number - The value jump in the hard coded scale
        scaleStepWidth: null,
        // Number - The scale starting value
        scaleStartValue: null,
    
        // String - Colour of the scale line
        scaleLineColor: "rgba(0,0,0,.1)",
    
        // Number - Pixel width of the scale line
        scaleLineWidth: 1,
    
        // Boolean - Whether to show labels on the scale
        scaleShowLabels: true,
    
        // Interpolated JS string - can access value
        scaleLabel: "<%=value%>",
    
        // Boolean - Whether the scale should stick to integers, not floats even if drawing space is there
        scaleIntegersOnly: true,
    
        // Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
        scaleBeginAtZero: false,
    
        // String - Scale label font declaration for the scale label
        scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
    
        // Number - Scale label font size in pixels
        scaleFontSize: 12,
    
        // String - Scale label font weight style
        scaleFontStyle: "normal",
    
        // String - Scale label font colour
        scaleFontColor: "#666",
    
        // Boolean - whether or not the chart should be responsive and resize when the browser does.
        responsive: false,
    
        // Boolean - Determines whether to draw tooltips on the canvas or not
        showTooltips: true,
    
        // Array - Array of string names to attach tooltip events
        tooltipEvents: ["mousemove", "touchstart", "touchmove"],
    
        // String - Tooltip background colour
        tooltipFillColor: "rgba(0,0,0,0.8)",
    
        // String - Tooltip label font declaration for the scale label
        tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
    
        // Number - Tooltip label font size in pixels
        tooltipFontSize: 14,
    
        // String - Tooltip font weight style
        tooltipFontStyle: "normal",
    
        // String - Tooltip label font colour
        tooltipFontColor: "#fff",
    
        // String - Tooltip title font declaration for the scale label
        tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
    
        // Number - Tooltip title font size in pixels
        tooltipTitleFontSize: 14,
    
        // String - Tooltip title font weight style
        tooltipTitleFontStyle: "bold",
    
        // String - Tooltip title font colour
        tooltipTitleFontColor: "#fff",
    
        // Number - pixel width of padding around tooltip text
        tooltipYPadding: 6,
    
        // Number - pixel width of padding around tooltip text
        tooltipXPadding: 6,
    
        // Number - Size of the caret on the tooltip
        tooltipCaretSize: 8,
    
        // Number - Pixel radius of the tooltip border
        tooltipCornerRadius: 6,
    
        // Number - Pixel offset from point x to tooltip edge
        tooltipXOffset: 10,
    
        // String - Template string for single tooltips
        tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
    
        // String - Template string for single tooltips
        multiTooltipTemplate: "<%= value %>",
    
        // Function - Will fire on animation progression.
        onAnimationProgress: function(){},
    
        // Function - Will fire on animation completion.
        onAnimationComplete: function(){}
    };

};

```
