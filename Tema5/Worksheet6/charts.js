import {jsonx} from './congreso.js'
//Esto son arrays que guardaré de un json con todas las candidaturas y votos
    console.log(jsonx)
    var xand = jsonx.candidaturas
    console.log(xand)


    var partidos = [];
    xand.forEach(element => {
        let string = element.sCandidatura
        partidos.push(string)
        //console.log(element.sCandidatura)
    });
    console.log(partidos)

    // var escaños = [];
    // xand.forEach(element => {
    //     escaños.push(element.iEscanos)
    //     //console.log(element.sCandidatura)
    // });
    // console.log(escaños)



    var votos = []
    xand.forEach(element => {
        //let string = element.iVotos;
        //console.log(element.iVotos)
        votos.push(element.iVotos)
        // var voto = new Array(element.iVotos)
        // votos.push(voto)
        //console.log(element.sCandidatura)
    });
     console.log(votos)




// ---------------------------Aqui empiezan los charts------------------------------------------------

      // Callback that draws the pie chart for Sarah's pizza.
function drawDonut() {

        // Create the data table for Sarah's pizza.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Partidos');
        data.addColumn('number', 'Votos');
        for (let i=0; i<6; i++){
            data.addRow([partidos[i], votos[i]]);
        }
        

        // Set options for Sarah's pie chart.
        var options = {title:'How Much Pizza Sarah Ate Last Night',
                       width:1000,
                       height:800};

        // Instantiate and draw the chart for Sarah's pizza.
        var chart = new google.visualization.PieChart(document.getElementById('Sarah_chart_div'));
        chart.draw(data, options);
}

      // Callback that draws the pie chart for Anthony's pizza.

function drawGraph() {
        var data = google.visualization.arrayToDataTable([
          //['Partidos', 'votos'],
        ]);
        //Esto me ha dado muchos fallos, en la version original descargada, venia un tipo string
        //He tenido que usar addColumn, y usar number como tipo para cambiar eso
        data.addColumn('string', 'Partidos')
        data.addColumn('number', 'Votos')
        //data.addColumn('number', 'Ecaños')


        for (let i=0; i<10; i++){
            data.addRow([partidos[i], votos[i]]);
        }

        var options = {
          chart: {
            title: 'Company Performance',
            subtitle: 'Sales, Expenses, and Profit: 2014-2017',
            

          },
          animation:{
            duration: 2000,
            easing: 'out',
            //startup: true,
          },
          bars: 'vertical',
          vAxis: {format: 'decimal'},
          height: 500,
          colors: ['#1b9e77', '#d95f02', '#7570b3'],
          vAxis: {minValue:0, maxValue:10000000}

        };

        var chart = new google.visualization.ColumnChart(document.getElementById('Anthony_chart_div'));
        chart.draw(data, options);

// -----------------------------------Animation starts here-------------------------------------------
        function drawGraph2(){
          chart.draw(data, options);
          
        }
        //drawGraphAnim()
        
          setTimeout(function(){
            for (let i=0; i<10; i++){
              var newValue = data.getValue(i, 1)+3000000;
              data.setValue(i,1, newValue);
              drawGraph2()
  
            }
            //drawGraphAnim()
  
          },10000)
        
   
}

      // Load Charts and the corechart package.
      google.charts.load('current', {'packages':['corechart']});
      google.charts.load('current', {'packages':['bar']});

      

      // Draw the pie chart for Sarah's pizza when Charts is loaded.
      google.charts.setOnLoadCallback(drawDonut);

      // Draw the pie chart for the Anthony's pizza when Charts is loaded.
      google.charts.setOnLoadCallback(drawGraph);