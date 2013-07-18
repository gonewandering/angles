app.controller("angCtrl", function ($scope, $http) { 
	$scope.config = {
		duration: 100,
		shares: 100,
		sellPerc: .95,
		buyPerc: 1.05,
		bank: 0
	}
	
	$scope.shares = 0;
	$scope.bank = 10000;
	$scope.portfolio;
	
	$scope.symbol = "YHOO";
	
	$scope.chart = {};
	
	$scope.chart.data = {
		labels : [],
		datasets : [
			{
				fillColor : "rgba(151,187,205,0)",
				strokeColor : "#006699",
				pointColor : "rgba(151,187,205,1)",
				pointStrokeColor : "#fff",
				data : []
			},
			{
				fillColor : "rgba(151,187,205,0)",
				strokeColor : "#FF0000",
				pointColor : "rgba(151,187,205,1)",
				pointStrokeColor : "#fff",
				data : []
			}
		], 
	};

	$scope.update = function () { 
		
		$http.jsonp('http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20%3D%20%22'+$scope.symbol+'%22%20and%20startDate%20%3D%20%222013-01-01%22%20and%20endDate%20%3D%20%222013-06-01%22%0A&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=JSON_CALLBACK').success(function(data) {
	        $scope.chart.data.labels = [];
	        $scope.chart.data.datasets[0].data = [];
		        
		    var quotes = data.query.results.quote;
		    
	        for ( i in quotes) {

		        $scope.chart.data.labels.push(quotes[i].Date);
		        
		        // This is the Stock Portfolio Price
		        $scope.chart.data.datasets[0].data.push(quotes[i].Close * $scope.config.shares);
		        
		        // This is the Algorithmic Trade Proce
		        if (i > 0) {
			        if ($scope.bank > 0 && (quotes[i].Close/quotes[i-1].Close) > $scope.buyPerc) { 
				        $scope.shares = $scope.bank/quotes[i].Close;
				        $scope.chart.data.datasets[1].data.push($scope.shares*quotes[i].Close);
				        $scope.bank = 0;
			        }
			        
			        else if ($scope.bank == 0 && (quotes[i].Close/quotes[i-1].Close) < $scope.sellPerc) { 
				        $scope.bank = $scope.shares*quotes[i].Close;
				        $scope.chart.data.datasets[1].data.push($scope.bank);
				        $scope.shares = 0;        
			        }
					else { 
						$scope.chart.data.datasets[1].data.push($scope.bank + ($scope.shares*quotes[i].Close));
					}
				}
	        }
	    });
	};
	
	$scope.update();
	
	$scope.chart.options = { 
		animation: false,
		pointDot: false,
		scaleSteps: 10
	}
})