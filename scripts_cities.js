
// JSON für Highcharts einlesen – AJAX Einladen der JSON Datei – clientside !FUNKTIONIERT!

window.onload = AJAX_data_cities;
alert("Skript funktioniert");

function AJAX_data_cities() 
{
  var req = new XMLHttpRequest();

  console.log("HIER");

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
            console.log("HIER?????");
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
    data.push(jdata);
    //alert(jsondata);
    
  }
 

    // Basic Bar Chart

    //BarChart(city_data)
    //function BarChart(series) {

    document.addEventListener('DOMContentLoaded', function () {
    Highcharts.chart('container5', {
      chart: {
          type: 'bar'
      },
      title: {
          text: 'Historic World Population by Region'
      },
      subtitle: {
          text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
      },
      xAxis: {
          categories: ['Africa', 'Europe', 'America', 'Asia', 'Atlantic'],
          title: {
              text: null
          }
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Population (millions)',
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
          name: "Year 2010",
          data: [107, 31, 635, 203, 2]
      }, {
          name: "Year 2011",
          data: [133, 156, 947, 408, 6]
      }, {
          name: "Year 2012",
          data: [814, 841, 3714, 727, 31]
      }]
  });
})
}