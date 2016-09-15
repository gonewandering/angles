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
            heightwithlabel: "=",
            resize: "=",
            chart: "@",
            segments: "@",
            responsive: "=",
            tooltip: "="
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

                if ( $scope.heightwithlabel) {
                    var lineWidth = 0;
                    var lines = 1;
                    var maxWidth = $elem.parent().width();
                    for( var il = 0; il < $scope.data.labels.length ; il ++) {
                        var charWidth = 0;
                        for( var ic = 0; ic < $scope.data.labels[il].length ; ic ++) {
                            if( $scope.data.labels[il].charCodeAt(ic) < 255) {
                                charWidth += 6;
                            } else {
                                charWidth += 12;
                            }
                        }
                        var itemWidth = 27 + charWidth;
                        lineWidth += itemWidth;
                        if( lineWidth <= maxWidth ) {
                            continue;
                        } else {
                            lines ++;
                            lineWidth = itemWidth;
                        }
                    }
                    ctx.canvas.height = ( maxWidth + 23 * lines + 5 ) * ( $scope.width / maxWidth );
                } else if($scope.height <= 0) {
                    $elem.height($elem.parent().height());
                    ctx.canvas.height = ctx.canvas.width;
                }  else {
                    ctx.canvas.height = $scope.height || ctx.canvas.height;
                    autosize = true;
                }
			}

            $scope.$watch("data", function (newVal, oldVal) {
                if(chartCreated)
                    chart.destroy();

                var options = $scope.options || {};

                    // if data not defined, exit
                if (!newVal) {
                    return;
                }
                if ($scope.chart) { type = $scope.chart; }

                if(autosize){
                    $scope.size();
                };

                if($scope.responsive || $scope.resize)
                    options.responsive = true;

                if($scope.responsive !== undefined)
                    options.responsive = $scope.responsive;

                $scope.size();
                chart = new Chart(ctx, { type:type, data:$scope.data, options:$scope.options});
            }, false);

            $scope.size();
            var chart = new Chart(ctx, { type:type, data:$scope.data, options:$scope.options});
            var chartCreated = true;
        }
    }
}


/* Aliases for various chart types */
angles.directive("chart", function () { return angles.chart(); });
angles.directive("linechart", function () { return angles.chart("line"); });
angles.directive("barchart", function () { return angles.chart("bar"); });
angles.directive("horizontalbarchart", function () { return angles.chart("horizontalBar"); });
angles.directive("radarchart", function () { return angles.chart("radar"); });
angles.directive("polarchart", function () { return angles.chart("polarArea"); });
angles.directive("piechart", function () { return angles.chart("pie"); });
angles.directive("doughnutchart", function () { return angles.chart("doughnut"); });
