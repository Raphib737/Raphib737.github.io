$(document).ready(function(){
	var ctx = $('#myChart').get(0).getContext("2d");

 //    var data = {
 //        labels: ["", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
 //        datasets: [
 //            {
 //                label: "My First dataset",
 //                fillColor: "rgba(220,220,220,0.2)",
 //                strokeColor: "rgba(220,220,220,1)",
 //                pointColor: "rgba(220,220,220,1)",
 //                pointStrokeColor: "#fff",
 //                pointHighlightFill: "#fff",
 //                pointHighlightStroke: "rgba(220,220,220,1)",
 //                data: [90, 0, 90, 0, 90, 0, 0]
 //            }
 //        ]
 //    };
	// var myRadarChart = new Chart(ctx).Radar(data);

    var data = [
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
        }
    ];

    var pieChart = new Chart(ctx).Pie(data,{
         percentageInnerCutout : 50
    }
        );
    pieChart.generateLegend();
});