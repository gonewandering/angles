var angles = angular.module("angles", []);

angles.chart = function (type) {
    return { 
        restrict: "A",
        scope: {
            data: "=",
            options: "=",
            id: "@",
            width: "=",
            height: "=",
            resize: "=",
            chart: "@"
        },
        link: function ($scope, $elem) {
            var ctx = $elem[0].getContext("2d");
            var autosize = false;

			$scope.size = function () {
	            if ($scope.width <= 0) {
	                $elem.width($elem.parent().width());
	                ctx.canvas.width = $elem.width();
	            } else {
	                ctx.canvas.width = $scope.width || ctx.canvas.width;
	                autosize = true;
	            }				

                if($scope.height <= 0){
                    $elem.height($elem.parent().height());
                    ctx.canvas.height = ctx.canvas.width / 2;   
                } else {
                    ctx.canvas.height = $scope.height || ctx.canvas.height;
                    autosize = true;
                }
			}

            $scope.$watch("data", function (newVal, oldVal) { 
                // if data not defined, exit
                if (!newVal) {
                  return;
                }
                if ($scope.chart) { type = $scope.chart; }
                
                if(autosize){
                    $scope.size();
                    chart = new Chart(ctx);
                } else if (!newVal) return;
                
                chart[type]($scope.data, $scope.options);
            }, true);
            
            if ($scope.resize) {
		        angular.element(window).bind('resize', function () {
		            $scope.size();
		            chart = new Chart(ctx);
		            chart[type]($scope.data, $scope.options);
		        });	  
                
                //unbind the event when scope destroyed 
                $scope.$on("$destroy", function() {
                     angular.element(window).off();
                });                           
            }
            
			$scope.size();
            var chart = new Chart(ctx);
        }
    }
}


/* Aliases for various chart types */
angles.directive("chart", function () { return angles.chart(); });
angles.directive("linechart", function () { return angles.chart("Line"); });
angles.directive("barchart", function () { return angles.chart("Bar"); });
angles.directive("radarchart", function () { return angles.chart("Radar"); });
angles.directive("polarchart", function () { return angles.chart("PolarArea"); });
angles.directive("piechart", function () { return angles.chart("Pie"); });
angles.directive("doughnutchart", function () { return angles.chart("Doughnut"); });
angles.directive("donutchart", function () { return angles.chart("Doughnut"); });