function drawCharts() {

  var width = 400;
  var height = 300;

  // Make charts narrow enough to fit on smaller devices
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  if( w <= 768 ) {
     width = 275;
     height = 250;
  }

  var chart;
  var data;
  var options;
  var basicDefaults = { 
     'titleTextStyle': {fontSize: 24, fontName: 'Open Sans Condensed', bold: false}, 
     'width':width, 
     'height':height, 
     'pieHole':0.4, 
     'hAxis': {'slantedText':true },
  }
  
  var optionDefaults = $.extend( { 'chartArea': {'left': 10, 'width': '70%' } }, basicDefaults );
  var barChartDefaults = $.extend( { 'chartArea': {'left': '10%', 'width': '60%' } }, basicDefaults );

  options = $.extend( {'title':'Total Membership 2006-2013', 'legend': { position: 'none' } }, basicDefaults );
  chart = new google.visualization.ColumnChart(document.getElementById('chart_growth'));
  data = new google.visualization.DataTable();
  data.addColumn('string', 'Year');
  data.addColumn('number', 'Membership');
  data.addRows([
    ['2006', 29],
    ['2007', 49],
    ['2008', 70],
    ['2009', 87],
    ['2010', 109],
    ['2011', 139],
    ['2012', 246],
    ['2013', 380]
    ]);
  chart.draw(data, options);

  options = $.extend( {'title':'Location'}, optionDefaults );
  chart = new google.visualization.PieChart(document.getElementById('chart_region'));
  data = new google.visualization.DataTable();
  data.addColumn('string', 'Region');
  data.addColumn('number', 'Count');
  data.addRows([
    ['USA', 77],
    ['Other Americas', 6],
    ['Europe', 6],
    ['Africa', 5],
    ['Australia/Asia', 2]
    ]);
  chart.draw(data, options);

  options = $.extend( {'title':'Religious Affiliation'}, optionDefaults );
  chart = new google.visualization.PieChart(document.getElementById('chart_religion'));
  data = new google.visualization.DataTable();
  data.addColumn('string', 'Religion');
  data.addColumn('number', 'Count');
  data.addRows([
    ['The Church of Jesus Christ of Latter-day Saints (LDS)', 66],
    ['Non-LDS Mormon', 7],
    ['Non-Mormon Christian', 2],
    ['Non-Christian Abrahamic', 0],
    ['Other', 12],
    ['None', 9]
    ]);
  chart.draw(data, options);

  options = $.extend( {'title':'Perspective on God'}, optionDefaults );
  chart = new google.visualization.PieChart(document.getElementById('chart_god'));
  data = new google.visualization.DataTable();
  data.addColumn('string', 'Perspective');
  data.addColumn('number', 'Count');
  data.addRows([
    ['Agnostic', 20],
    ['Atheist', 10],
    ['Theist', 59],
    ['No opinion', 7]
    ]);
  chart.draw(data, options);

  options = $.extend( {'title':'Age', 'legend': { position: 'none' }}, barChartDefaults );
  chart = new google.visualization.ColumnChart(document.getElementById('chart_age'));
  data = new google.visualization.DataTable();
  data.addColumn('string', 'Birth Year');
  data.addColumn('number', 'Count');
  data.addRows([
    ['Unspecified', 5],
    ['1-18', 0],
    ['19-28', 16],
    ['29-38', 33],
    ['39-48', 25],
    ['49-58', 10],
    ['59-68', 5],
    ['69+', 2],
    ]);
  chart.draw(data, options);

  options = $.extend( {'title':'Gender'}, optionDefaults );
  chart = new google.visualization.PieChart(document.getElementById('chart_gender'));
  data = new google.visualization.DataTable();
  data.addColumn('string', 'Gender');
  data.addColumn('number', 'Count');
  data.addRows([
    ['Unspecified', 5],
    ['Female', 11],
    ['Male', 80],
    ]);
  chart.draw(data, options);

  options = $.extend( {'title':'Race'}, optionDefaults );
  chart = new google.visualization.PieChart(document.getElementById('chart_race'));
  data = new google.visualization.DataTable();
  data.addColumn('string', 'Race');
  data.addColumn('number', 'Count');
  data.addRows([
    ['Unspecified', 3],
    ['African American / Black', 3],
    ['Asian', 2],
    ['Caucasian / White', 83],
    ['Hispanic / Latino', 0],
    ['Other', 5],
    ]);
  chart.draw(data, options);

  options = $.extend( {'title':'Education' }, optionDefaults );
  chart = new google.visualization.PieChart(document.getElementById('chart_ed'));
  data = new google.visualization.DataTable();
  data.addColumn('string', 'Level of Education');
  data.addColumn('number', 'Count');
  data.addRows([
    ['Unspecified', 4],
    ['Less than High School Diploma', 0],
    ['High School Diploma', 1],
    ['Tech. or Voc. Training', 2],
    ['Some College', 18],
    ['College Degree', 27],
    ['Post Graduate Training', 9],
    ['Post Graduate Degree', 35],
    ]);
  chart.draw(data, options);


  options = $.extend( {'title':'Satisfaction with the Association'}, optionDefaults );
  chart = new google.visualization.PieChart(document.getElementById('chart_satisfaction'));
  data = new google.visualization.DataTable();
  data.addColumn('string', 'Level of Satisfaction');
  data.addColumn('number', 'Count');
  data.addRows([
    ['Very satisfied', 26],
    ['Satisfied', 65],
    ['Unsatisfied', 4],
    ['Very unsatisfied', 1],
    ]);
  chart.draw(data, options);

  options = $.extend( {'title':'Importance of the Association'}, optionDefaults );
  chart = new google.visualization.PieChart(document.getElementById('chart_importance'));
  data = new google.visualization.DataTable();
  data.addColumn('string', 'Level of Importance');
  data.addColumn('number', 'Count');
  data.addRows([
    ['Very important', 30],
    ['Important', 57],
    ['Unimportant', 9],
    ['Very unimportant', 0],
    ]);
  chart.draw(data, options);

  options = $.extend( {'title':'Cultural Politics'}, optionDefaults );
  chart = new google.visualization.PieChart(document.getElementById('chart_politics_cultural'));
  data = new google.visualization.DataTable();
  data.addColumn('string', 'Political View');
  data.addColumn('number', 'Count');
  data.addRows([
    ['Conservative', 10],
    ['Moderate', 30],
    ['Progressive', 49],
    ['No opinion', 7],
    ]);
  chart.draw(data, options);

  options = $.extend( {'title':'Economic Politics'}, optionDefaults );
  chart = new google.visualization.PieChart(document.getElementById('chart_politics_economic'));
  data = new google.visualization.DataTable();
  data.addColumn('string', 'Political View');
  data.addColumn('number', 'Count');
  data.addRows([
    ['Conservative', 30],
    ['Moderate', 34],
    ['Progressive', 22],
    ['No opinion', 10],
    ]);
  chart.draw(data, options);

  options = $.extend( {'title':'Marital Status'}, optionDefaults );
  chart = new google.visualization.PieChart(document.getElementById('chart_marital'));
  data = new google.visualization.DataTable();
  data.addColumn('string', 'Status');
  data.addColumn('number', 'Count');
  data.addRows([
    ['Unspecified', 6],
    ['Single, never married', 6],
    ['Unmarried, living with partner', 7],
    ['Married, never divorced', 65],
    ['Separated', 3],
    ['Divorced', 6],
    ['Divorced, remarried', 2],
    ['Widowed', 0],
    ['Widowed, remarried', 1],
    ]);
  chart.draw(data, options);

  options = $.extend( {'title':'Number of Children', 'legend': { position: 'none' } }, barChartDefaults );
  chart = new google.visualization.ColumnChart(document.getElementById('chart_children'));
  data = new google.visualization.DataTable();
  data.addColumn('string', 'Number of Children');
  data.addColumn('number', 'Count');
  data.addRows([
    ['Unspecified', 6],
    ['0', 23],
    ['1', 8],
    ['2-3', 38],
    ['4-6', 17],
    ['7+', 5],
    ]);
  chart.draw(data, options);

  options = $.extend( {'title':'Reason for Joining' }, optionDefaults );
  chart = new google.visualization.PieChart(document.getElementById('chart_motivation'));
  data = new google.visualization.DataTable();
  data.addColumn('string', 'Reason');
  data.addColumn('number', 'Count');
  data.addRows([
    ['Intellectual stimulation', 12],
    ['Spiritual stimulation', 2],
    ['Friendship or networking', 1],
    ['Support diverse Mormonism', 2],
    ['Support diverse Transhumanism', 5],
    ['Engage in activism', 2],
    ['Other', 19],
    ]);
  chart.draw(data, options);

}

google.load('visualization', '1.0', {'packages':['corechart']});
google.setOnLoadCallback(drawCharts);