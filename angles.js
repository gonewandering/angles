var angles = angular.module("angles", []);


angles.chart = function (type) {
    return { 
        restrict: "A",
        scope: {
            data: "=",
            options: "=",
            id: "@",
            width: "=",
            height: "="
        },
        link: function ($scope, $elem) {
            var ctx = $elem[0].getContext("2d");
            var autosize = false

            if ($scope.width <= 0) {
                $elem.width($elem.parent().width());
                $elem.height($elem.parent().height());
                ctx.canvas.width = $elem.width();
                ctx.canvas.height = ctx.canvas.width / 2;               
            } else {
                ctx.canvas.width = $scope.width || ctx.canvas.width;
                ctx.canvas.height = $scope.height || ctx.canvas.height;
                autosize = true;
            }

    
            var chart = new Chart(ctx);

            $scope.$watch("data", function (newVal, oldVal) { 
                // if data not defined, exit
                if(autosize){
                    ctx.canvas.width = $scope.width || $elem.parent().width();
                    ctx.canvas.height = $scope.height || $elem.parent().height();
                    chart = new Chart(ctx);
                } else if (!newVal) return;
                
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
            id: "@",
            width: "=",
            height: "="
        },
        link: function ($scope, $elem) {
            var ctx = $elem[0].getContext("2d");
            var autosize = false

            if ($scope.width <= 0) {
                $elem.width($elem.parent().width());
                $elem.height($elem.parent().height());
                ctx.canvas.width = $elem.width();
                ctx.canvas.height = ctx.canvas.width / 2;               
            } else {
                ctx.canvas.width = $scope.width || $elem.parent().width();
                ctx.canvas.height = $scope.height || $elem.parent().height();
                autosize = true;
            }


            var chart = new Chart(ctx);

            $scope.$watch("data", function (newVal, oldVal) {
                if(autosize){
                    ctx.canvas.width = $scope.width || $elem.parent().width();
                    ctx.canvas.height = $scope.height || $elem.parent().height();
                    chart = new Chart(ctx);
                }

                if ($scope.data !== undefined) { 
                  chart[$scope.type]($scope.data, $scope.options);
                }
            }, true);
        }
    } 
});

angles.directive('resize', function ($window) {
    return function ($scope, $elem) {
        var w = angular.element($window);

        w.bind('resize', function () {
            $scope.plotData["refresh"] = !$scope.plotData["refresh"];
            $scope.$apply();
        });
    }
})


/* Aliases for various chart types */
angles.directive("linechart", function () { return angles.chart("Line"); });
angles.directive("barchart", function () { return angles.chart("Bar"); });
angles.directive("radarchart", function () { return angles.chart("Radar"); });
angles.directive("polarchart", function () { return angles.chart("PolarArea"); });
angles.directive("piechart", function () { return angles.chart("Pie"); });
angles.directive("doughnutchart", function () { return angles.chart("Doughnut"); });
/* BC */
angles.directive("donutchart", function () { return angles.chart("Doughnut"); });
