// Basic Bar Chart
        BarChart(cities);
        // Start der FUnktion zur Erstellung des Diagramms 
        function BarChart(series) { 
        // Zuweisen einer ID ('Container5') 
        const chart = Highcharts.chart('container5', {
        // Chart Type festlegen 
      chart: {
          type: 'bar'
      },
        // Chart Title festlegen 
      title: {
          text: 'Historische Einwohnerzahlen Halle, Erfurt & Berlin'
      },
        // Achsen festlegen 
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
          // overview: 'justify' bewirkt, dass die Labels innerhalb der Plot Area angezeigt werden
          labels: {
              overflow: 'justify'
          }
      },
      tooltip: {
          valueSuffix: ' millions'
      },
          //  PlotOptions ist ein "Hüllen"-Objekt für die Konfiguration weiterer Objekte je Series-type. 
          // bar: Optionen werden für alle Balken-Series definiert 
      plotOptions: {
          bar: {
              dataLabels: {
                  enabled: true
              }
          }
      },
        // Festlegen der Legendeneigenschaften
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
        // Anzeigen/Ausblenden eines Credit-Labels in der unteren rechten Ecke des Diagramms 
      credits: {
          enabled: false
      },
        // Zuweisen spezifischer Daten
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