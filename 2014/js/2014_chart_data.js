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

  options = $.extend( {'title':'Total Membership 2006-2014', 'legend': { position: 'none' } }, basicDefaults );
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
    ['2013', 380],
    ['2014', 480]
    ]);
  chart.draw(data, options);

  options = $.extend( {'title':'Location'}, optionDefaults );
  chart = new google.visualization.PieChart(document.getElementById('chart_region'));
  data = new google.visualization.DataTable();
  data.addColumn('string', 'Region');
  data.addColumn('number', 'Count');
  data.addRows([
    ['USA', 53],
    ['Other Americas', 4],
    ['Europe', 3],
    ['Africa', 3],
    ['Australia/Asia', 2]
    ]);
  chart.draw(data, options);

  options = $.extend( {'title':'Religious Affiliation'}, optionDefaults );
  chart = new google.visualization.PieChart(document.getElementById('chart_religion'));
  data = new google.visualization.DataTable();
  data.addColumn('string', 'Religion');
  data.addColumn('number', 'Count');
  data.addRows([
    ['The Church of Jesus Christ of Latter-day Saints (LDS)', 40],
    ['Non-LDS Mormon', 3],
    ['Non-Mormon Christian', 4],
    ['Non-Christian Abrahamic', 2],
    ['Other', 6],
    ['None', 10]
    ]);
  chart.draw(data, options);

  options = $.extend( {'title':'Perspective on God'}, optionDefaults );
  chart = new google.visualization.PieChart(document.getElementById('chart_god'));
  data = new google.visualization.DataTable();
  data.addColumn('string', 'Perspective');
  data.addColumn('number', 'Count');
  data.addRows([
    ['Agnostic', 14],
    ['Atheist', 9],
    ['Theist', 38],
    ['No opinion', 4]
    ]);
  chart.draw(data, options);

  options = $.extend( {'title':'Age', 'legend': { position: 'none' }}, barChartDefaults );
  chart = new google.visualization.ColumnChart(document.getElementById('chart_age'));
  data = new google.visualization.DataTable();
  data.addColumn('string', 'Birth Year');
  data.addColumn('number', 'Count');
  data.addRows([
    ['Unspecified', 5],
    ['1-19', 1],
    ['20-29', 13],
    ['30-39', 24],
    ['40-49', 12],
    ['50-59', 6],
    ['60-69', 4],
    ['70+', 1],
    ]);
  chart.draw(data, options);

  options = $.extend( {'title':'Gender'}, optionDefaults );
  chart = new google.visualization.PieChart(document.getElementById('chart_gender'));
  data = new google.visualization.DataTable();
  data.addColumn('string', 'Gender');
  data.addColumn('number', 'Count');
  data.addRows([
    ['Unspecified', 2],
    ['Female', 7],
    ['Male', 53],
    ]);
  chart.draw(data, options);

  options = $.extend( {'title':'Race'}, optionDefaults );
  chart = new google.visualization.PieChart(document.getElementById('chart_race'));
  data = new google.visualization.DataTable();
  data.addColumn('string', 'Race');
  data.addColumn('number', 'Count');
  data.addRows([
    ['Unspecified', 3],
    ['African American / Black', 2],
    ['Asian', 1],
    ['Caucasian / White', 54],
    ['Hispanic / Latino', 2],
    ['Other', 1],
    ]);
  chart.draw(data, options);

  options = $.extend( {'title':'Education' }, optionDefaults );
  chart = new google.visualization.PieChart(document.getElementById('chart_ed'));
  data = new google.visualization.DataTable();
  data.addColumn('string', 'Level of Education');
  data.addColumn('number', 'Count');
  data.addRows([
    ['Unspecified', 0],
    ['Less than High School Diploma', 0],
    ['High School Diploma', 4],
    ['Tech. or Voc. Training', 1],
    ['Some College', 11],
    ['College Degree', 15],
    ['Post Graduate Training', 6],
    ['Post Graduate Degree', 26],
    ]);
  chart.draw(data, options);


  options = $.extend( {'title':'Satisfaction with the Association'}, optionDefaults );
  chart = new google.visualization.PieChart(document.getElementById('chart_satisfaction'));
  data = new google.visualization.DataTable();
  data.addColumn('string', 'Level of Satisfaction');
  data.addColumn('number', 'Count');
  data.addRows([
    ['Very satisfied', 19],
    ['Satisfied', 43],
    ['Unsatisfied', 2],
    ['Very unsatisfied', 1],
    ]);
  chart.draw(data, options);

  options = $.extend( {'title':'Importance of the Association'}, optionDefaults );
  chart = new google.visualization.PieChart(document.getElementById('chart_importance'));
  data = new google.visualization.DataTable();
  data.addColumn('string', 'Level of Importance');
  data.addColumn('number', 'Count');
  data.addRows([
    ['Very important', 25],
    ['Important', 35],
    ['Unimportant', 5],
    ['Very unimportant', 0],
    ]);
  chart.draw(data, options);

  options = $.extend( {'title':'Cultural Politics'}, optionDefaults );
  chart = new google.visualization.PieChart(document.getElementById('chart_politics_cultural'));
  data = new google.visualization.DataTable();
  data.addColumn('string', 'Political View');
  data.addColumn('number', 'Count');
  data.addRows([
    ['Conservative', 13],
    ['Moderate', 12],
    ['Progressive', 34],
    ['No opinion', 6],
    ]);
  chart.draw(data, options);

  options = $.extend( {'title':'Economic Politics'}, optionDefaults );
  chart = new google.visualization.PieChart(document.getElementById('chart_politics_economic'));
  data = new google.visualization.DataTable();
  data.addColumn('string', 'Political View');
  data.addColumn('number', 'Count');
  data.addRows([
    ['Conservative', 19],
    ['Moderate', 20],
    ['Progressive', 21],
    ['No opinion', 5],
    ]);
  chart.draw(data, options);

  options = $.extend( {'title':'Marital Status'}, optionDefaults );
  chart = new google.visualization.PieChart(document.getElementById('chart_marital'));
  data = new google.visualization.DataTable();
  data.addColumn('string', 'Status');
  data.addColumn('number', 'Count');
  data.addRows([
    ['Unspecified', 0],
    ['Single, never married', 9],
    ['Unmarried, living with partner', 1],
    ['Married, never divorced', 47],
    ['Separated', 0],
    ['Divorced', 1],
    ['Divorced, remarried', 4],
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
    ['Unspecified', 0],
    ['0', 18],
    ['1', 6],
    ['2-3', 25],
    ['4-6', 10],
    ['7+', 3],
    ]);
  chart.draw(data, options);

  options = $.extend( {'title':'Reason for Joining', 'legend': { position: 'none' } }, barChartDefaults );
  chart = new google.visualization.ColumnChart(document.getElementById('chart_motivation'));
  data = new google.visualization.DataTable();
  data.addColumn('string', 'Reason');
  data.addColumn('number', 'Count');
  data.addRows([
    ['Intellectual stimulation', 50],
    ['Spiritual stimulation', 31],
    ['Friendship or networking', 33],
    ['Support diverse Mormonism', 35],
    ['Support diverse Transhumanism', 34],
    ['Mormon Transhumanist activism', 25],
    ['Other', 4],
    ]);
  chart.draw(data, options);

}

google.load('visualization', '1.0', {'packages':['corechart']});
google.setOnLoadCallback(drawCharts);