
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
          text: 'Historische Einwohnerzahlen Halle, Erfurt & Berin'
      },
      xAxis: {
          categories: [cities[0].Jahr[0], cities[0].Jahr[1], cities[0].Jahr[2], cities[0].Jahr[3], cities[0].Jahr[4]],
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
          name: "Halle",
          data: [1,2,4]
      }, {
          name: "Erfurt",
          data: [10,20,30]
      }, {
          name: "Berlin",
          data: [5, 15, 20]
      },{
        name: "Berlin",
        data: [50, 100, 150]
    }, {
        name: "Berlin",
        data: [60,80,100]
    }]
  });
}
}