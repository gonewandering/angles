var angles = angular.module("angles", []);

angles.directive("linechart", function () { 
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
				chart.Line($scope.data, $scope.options);
				console.log(chart);
			}, true);
		}
	}
});

angles.directive("barchart", function () { 
	return { 
		restrict: "A",
		scope: {
			data: "=",
			options: "=",
			id: "@",
			width: "@",
			height: "@"
		},
		link: function ($scope, $elem) {
			var ctx = $elem[0].getContext("2d");
			var chart = new Chart(ctx);
			
			$scope.$watch("data", function (newVal, oldVal) { 
				chart.Bar($scope.data, $scope.options);
			}, true);
		}
	}
});

angles.directive("radarchart", function () { 
	return { 
		restrict: "A",
		scope: {
			data: "=",
			options: "=",
			id: "@",
			width: "@",
			height: "@"
		},
		link: function ($scope, $elem) {
			var ctx = $elem[0].getContext("2d");
			var chart = new Chart(ctx);
			
			$scope.$watch("data", function (newVal, oldVal) { 
				chart.Radar($scope.data, $scope.options);
			}, true);
		}
	}
});

angles.directive("polarchart", function () { 
	return { 
		restrict: "A",
		scope: {
			data: "=",
			options: "=",
			id: "@",
			width: "@",
			height: "@"
		},
		link: function ($scope, $elem) {
			var ctx = $elem[0].getContext("2d");
			var chart = new Chart(ctx);
			$scope.$watch("data", function (newVal, oldVal) { 
				chart.PolarArea($scope.data, $scope.options);
			}, true);
		}
	}
});

angles.directive("piechart", function () { 
	return { 
		restrict: "A",
		scope: {
			data: "=",
			options: "=",
			id: "@",
			width: "@",
			height: "@"
		},
		link: function ($scope, $elem) {
			var ctx = $elem[0].getContext("2d");
			var chart = new Chart(ctx);
			$scope.$watch("data", function (newVal, oldVal) { 
				chart.Pie($scope.data, $scope.options);
			}, true);
		}
	}
});

angles.directive("donutchart", function () { 
	return { 
		restrict: "A",
		scope: {
			data: "=",
			options: "=",
			id: "@",
			width: "@",
			height: "@"
		},
		link: function ($scope, $elem) {
			var ctx = $elem[0].getContext("2d");
			var chart = new Chart(ctx);
			$scope.$watch("data", function (newVal, oldVal) { 
				chart.Doughnut($scope.data, $scope.options);
			}, true);
		}
	}
});
