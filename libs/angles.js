var angles = angular.module("angles", []);


angles.chart = function (type) {
	return { 
		restrict: "A",
		scope: {
			data: "=",
			options: "=",
			id: "@"
		},
		link: function ($scope, $elem) {
			var ctx = $elem[0].getContext("2d");
			var chart = new Chart(ctx);
			
			$scope.$watch("data", function (newVal, oldVal) { 
				// if data not defined, exit
				if (!newVal) return;
				
				chart[type]($scope.data, $scope.options);
			}, true);
		}
	}
}


/* General Chart Wrapper */
angles.directive("chart", function () { 
	return { 
		restrict: "A",
		scope: {
			data: "=",
			type: "@",
			options: "=",
			id: "@"
		},
		link: function ($scope, $elem) {
			var ctx = $elem[0].getContext("2d");
			var chart = new Chart(ctx);
			
			$scope.$watch("data", function (newVal, oldVal) { 
				chart[$scope.type]($scope.data, $scope.options);
			}, true);
		}
	} 
});


/* Aliases for various chart types */
angles.directive("linechart", function () { return angles.chart("Line"); });
angles.directive("barchart", function () { return angles.chart("Bar"); });
angles.directive("radarchart", function () { return angles.chart("Radar"); });
angles.directive("polarchart", function () { return angles.chart("PolarArea"); });
angles.directive("piechart", function () { return angles.chart("Pie"); });
angles.directive("doughnutchart", function () { return angles.chart("Doughnut"); });
/* BC */
angles.directive("donutchart", function () { return angles.chart("Doughnut"); });
