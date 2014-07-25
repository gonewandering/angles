var app = angular.module("anglesExample", ["angles"]);

app.controller("angCtrl", function ($scope, $http) { 
  
  $scope.chart = [
    {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "My First dataset",
            fillColor: "rgba(241,196,15,0.2)",
            strokeColor: "rgba(241,196,15,1)",
            pointColor: "rgba(241,196,15,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "rgba(241,196,15,1)",
            pointHighlightStroke: "rgba(241,196,15,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "rgba(151,187,205,1)",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
          }
        ]
    }, {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          fillColor: "rgba(241,196,15,0.5)",
          strokeColor: "rgba(241,196,15,0.8)",
          highlightFill: "rgba(241,196,15,0.75)",
          highlightStroke: "rgba(220,220,220,1)",
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: "My Second dataset",
          fillColor: "rgba(151,187,205,0.5)",
          strokeColor: "rgba(151,187,205,0.8)",
          highlightFill: "rgba(151,187,205,0.75)",
          highlightStroke: "rgba(151,187,205,1)",
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    }, {
      labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
      datasets: [
        {
          label: "My First dataset",
          fillColor: "rgba(241,196,15,0.2)",
          strokeColor: "rgba(241,196,15,1)",
          pointColor: "rgba(241,196,15,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "rgba(241,196,15,1)",
          pointHighlightStroke: "rgba(241,196,15,1)",
          data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
          label: "My Second dataset",
          fillColor: "rgba(151,187,205,0.2)",
          strokeColor: "rgba(151,187,205,1)",
          pointColor: "rgba(151,187,205,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(151,187,205,1)",
          data: [28, 48, 40, 19, 96, 27, 100]
        }
      ]
    }, [
      {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
      },
      {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
      },
      {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
      },
      {
        value: 40,
        color: "#949FB1",
        highlight: "#A8B3C5",
        label: "Grey"
      },
      {
        value: 120,
        color: "#4D5360",
        highlight: "#616774",
        label: "Dark Grey"
      }
    ]
  ]
  
  $scope.options = {
    segmentShowStroke : false,
    responsive: true
  };

  $scope.optionsLegend = {
    responsive: true,
    legendTemplate : "<ul class=\"col-xs-4 list-unstyled <%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li ng-click=\"showTooltip(<%=i%>)\"><span class=\"fa fa-circle\" style=\"color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"

  }

  $scope.showTooltip = function(index){
    $scope.indx = index;
    console.log(index)
  }

})