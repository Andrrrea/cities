
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
    Groesse: cities[i].Groesse
    }
    cities.push(jdata);
    
  }
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
        text: 'Fläche in km<sup>2 von Halle, Erfurt & Berlin, 2020'
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
            name: cities[0].name,
            y: cities[0].Groesse,
            sliced: true,
            selected: true
        }, {
            name: cities[1].name,
            y: cities[1].Groesse
        }, {
            name: cities[2].name,
            y: cities[2].Groesse
        }]
    }]
});
}

//3D stacked chart
    ThreeDChart(cities);
    function ThreeDChart(series) {
    const chart = Highcharts.chart('container7', {
    chart: {
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            viewDistance: 25,
            depth: 40
        }
    },

    title: {
        text: 'Total fruit consumption, grouped by gender'
    },

    xAxis: {
        categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
        labels: {
            skew3d: true,
            style: {
                fontSize: '16px'
            }
        }
    },

    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
            text: 'Number of fruits',
            skew3d: true
        }
    },

    tooltip: {
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
    },

    plotOptions: {
        column: {
            stacking: 'normal',
            depth: 40
        }
    },

    series: [{
        name: 'John',
        data: [5, 3, 4, 7, 2],
        stack: 'male'
    }, {
        name: 'Joe',
        data: [3, 4, 4, 2, 5],
        stack: 'male'
    }, {
        name: 'Jane',
        data: [2, 5, 6, 2, 1],
        stack: 'female'
    }, {
        name: 'Janet',
        data: [3, 0, 4, 4, 3],
        stack: 'female'
    }]
});
}