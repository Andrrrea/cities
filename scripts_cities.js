
// JSON für Highcharts einlesen – AJAX Einladen der JSON Datei – clientside !FUNKTIONIERT!

window.onload = AJAX_data_cities;
//alert("Skript funktioniert");

function AJAX_data_cities() 
{
  var req = new XMLHttpRequest();
  req.onreadystatechange = function ()
  {
    
    if (req.readyState == 4)
    { 
      if (req.status == 200 || req.status == 0)
      { 
        var res = req.responseText;
        var jobj = JSON.parse(res);
        if(jobj) {
            Verarbeiten(jobj);
        }
      }
      else alert("Error" + req.statusText);
    }
  }
  req.open("GET", "data_cities.json", true);
  req.send();
}

// result JSON in function for further transformation 
function Verarbeiten(jobj)
{
  var cities = jobj.cities;

  var city_data = [];
  for (var i in cities) {
    var jdata = {
    Name: cities[i].name,
    Jahr: cities[i].Jahr,
    Einwohnerzahl: cities[i].Einwohnerzahl,
    }
    cities.push(jdata);
    
  }
 

    // Basic Bar Chart
        BarChart(cities);
        function BarChart(series) {
        const chart = Highcharts.chart('container5', {
      chart: {
          type: 'bar'
      },
      title: {
          text: 'Historische Einwohnerzahlen Halle, Erfurt & Berlin'
      },
      xAxis: {
          categories: [cities[0].name, cities[1].name, cities[2].name],
          title: {
              text: null
          }
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Einwohnerzahl',
              align: 'high'
          },
          labels: {
              overflow: 'justify'
          }
      },
      tooltip: {
          valueSuffix: ' millions'
      },
      plotOptions: {
          bar: {
              dataLabels: {
                  enabled: true
              }
          }
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top',
          x: -40,
          y: 80,
          floating: true,
          borderWidth: 1,
          backgroundColor:
              Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
          shadow: true
      },
      credits: {
          enabled: false
      },
      series: [{
          name: "Year " + cities[0].Jahr[0],
          data: [cities[0].Einwohnerzahl[0], cities[1].Einwohnerzahl[0], cities[2].Einwohnerzahl[0]]
      }, {
          name: "Year " + cities[0].Jahr[1],
          data: [cities[0].Einwohnerzahl[1], cities[1].Einwohnerzahl[1], cities[2].Einwohnerzahl[1]]
      }, {
          name: "Year " + cities[0].Jahr[2],
          data: [cities[0].Einwohnerzahl[2], cities[1].Einwohnerzahl[2], cities[2].Einwohnerzahl[2]]
      },{
        name: "Year " + cities[0].Jahr[3],
        data: [cities[0].Einwohnerzahl[3], cities[1].Einwohnerzahl[3], cities[2].Einwohnerzahl[3]]
    }, {
        name: "Year " + cities[0].Jahr[4],
        data: [cities[0].Einwohnerzahl[4], cities[1].Einwohnerzahl[4],cities[2].Einwohnerzahl[4],]
    }]
  }); 
}


// Basic Pie Chart

    PieChart(cities);
    function PieChart(series) {
    const chart = Highcharts.chart('container6', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Einwohnerzahlen Halle, Erfurt & Berlin, 1930'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Chrome',
            y: 61.41,
            sliced: true,
            selected: true
        }, {
            name: 'Internet Explorer',
            y: 11.84
        }, {
            name: 'Firefox',
            y: 10.85
        }, {
            name: 'Edge',
            y: 4.67
        }]
    }]
});


}
}