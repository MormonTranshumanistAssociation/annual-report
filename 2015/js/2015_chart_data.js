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

  options = $.extend( {'title':'Total Membership 2006-2015', 'legend': { position: 'none' } }, basicDefaults );
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
    ['2014', 480],
    ['2015', 565]
    ]);
  chart.draw(data, options);

  options = $.extend( {'title':'Location'}, optionDefaults );
  chart = new google.visualization.PieChart(document.getElementById('chart_region'));
  data = new google.visualization.DataTable();
  data.addColumn('string', 'Region');
  data.addColumn('number', 'Count');
  data.addRows([
    ['USA', 48],
    ['Other Americas', 4],
    ['Europe', 1],
    ['Africa', 1],
    ['Australia/Asia', 1]
    ]);
  chart.draw(data, options);

  options = $.extend( {'title':'Religious Affiliation'}, optionDefaults );
  chart = new google.visualization.PieChart(document.getElementById('chart_religion'));
  data = new google.visualization.DataTable();
  data.addColumn('string', 'Religion');
  data.addColumn('number', 'Count');
  data.addRows([
    ['The Church of Jesus Christ of Latter-day Saints (LDS)', 35],
    ['Non-LDS Mormon', 3],
    ['Other', 8],
    ['None', 9]
    ]);
  chart.draw(data, options);

  options = $.extend( {'title':'Perspective on God'}, optionDefaults );
  chart = new google.visualization.PieChart(document.getElementById('chart_god'));
  data = new google.visualization.DataTable();
  data.addColumn('string', 'Perspective');
  data.addColumn('number', 'Count');
  data.addRows([
    ['Agnostic', 10],
    ['Atheist', 9],
    ['Theist', 34],
    ['No opinion', 2]
    ]);
  chart.draw(data, options);

  options = $.extend( {'title':'Age', 'legend': { position: 'none' }}, barChartDefaults );
  chart = new google.visualization.ColumnChart(document.getElementById('chart_age'));
  data = new google.visualization.DataTable();
  data.addColumn('string', 'Birth Year');
  data.addColumn('number', 'Count');
  data.addRows([
    ['1-19', 0],
    ['20-29', 14],
    ['30-39', 19],
    ['40-49', 9],
    ['50-59', 5],
    ['60-69', 4],
    ['70+', 3],
    ]);
  chart.draw(data, options);

  options = $.extend( {'title':'Gender'}, optionDefaults );
  chart = new google.visualization.PieChart(document.getElementById('chart_gender'));
  data = new google.visualization.DataTable();
  data.addColumn('string', 'Gender');
  data.addColumn('number', 'Count');
  data.addRows([
    ['Female', 5],
    ['Male', 49],
    ]);
  chart.draw(data, options);

  options = $.extend( {'title':'Race'}, optionDefaults );
  chart = new google.visualization.PieChart(document.getElementById('chart_race'));
  data = new google.visualization.DataTable();
  data.addColumn('string', 'Race');
  data.addColumn('number', 'Count');
  data.addRows([
    ['Unspecified', 1],
    ['African American / Black', 0],
    ['Asian', 1],
    ['Caucasian / White', 49],
    ['Hispanic / Latino', 1],
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
    ['High School Diploma', 0],
    ['Tech. or Voc. Training', 1],
    ['Some College', 7],
    ['College Degree', 17],
    ['Post Graduate Training', 5],
    ['Post Graduate Degree', 24],
    ]);
  chart.draw(data, options);


  options = $.extend( {'title':'Satisfaction with the Association'}, optionDefaults );
  chart = new google.visualization.PieChart(document.getElementById('chart_satisfaction'));
  data = new google.visualization.DataTable();
  data.addColumn('string', 'Level of Satisfaction');
  data.addColumn('number', 'Count');
  data.addRows([
    ['Very satisfied', 18],
    ['Satisfied', 34],
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
    ['Very important', 24],
    ['Important', 25],
    ['Unimportant', 6],
    ['Very unimportant', 0],
    ]);
  chart.draw(data, options);

  options = $.extend( {'title':'Cultural Politics'}, optionDefaults );
  chart = new google.visualization.PieChart(document.getElementById('chart_politics_cultural'));
  data = new google.visualization.DataTable();
  data.addColumn('string', 'Political View');
  data.addColumn('number', 'Count');
  data.addRows([
    ['Conservative', 4],
    ['Moderate', 12],
    ['Progressive', 39],
    ['No opinion', 0],
    ]);
  chart.draw(data, options);

  options = $.extend( {'title':'Economic Politics'}, optionDefaults );
  chart = new google.visualization.PieChart(document.getElementById('chart_politics_economic'));
  data = new google.visualization.DataTable();
  data.addColumn('string', 'Political View');
  data.addColumn('number', 'Count');
  data.addRows([
    ['Conservative', 11],
    ['Moderate', 20],
    ['Progressive', 24],
    ['No opinion', 0],
    ]);
  chart.draw(data, options);

  options = $.extend( {'title':'Marital Status'}, optionDefaults );
  chart = new google.visualization.PieChart(document.getElementById('chart_marital'));
  data = new google.visualization.DataTable();
  data.addColumn('string', 'Status');
  data.addColumn('number', 'Count');
  data.addRows([
    ['Unspecified', 0],
    ['Single, never married', 7],
    ['Unmarried, living with partner', 0],
    ['Married, never divorced', 37],
    ['Separated', 4],
    ['Divorced', 3],
    ['Divorced, remarried', 3],
    ['Widowed', 0],
    ['Widowed, remarried', 0],
    ]);
  chart.draw(data, options);

  options = $.extend( {'title':'Number of Children', 'legend': { position: 'none' } }, barChartDefaults );
  chart = new google.visualization.ColumnChart(document.getElementById('chart_children'));
  data = new google.visualization.DataTable();
  data.addColumn('string', 'Number of Children');
  data.addColumn('number', 'Count');
  data.addRows([
    ['Unspecified', 0],
    ['0', 11],
    ['1', 8],
    ['2-3', 22],
    ['4-6', 12],
    ['7+', 1],
    ]);
  chart.draw(data, options);

  options = $.extend( {'title':'Reason for Joining', 'legend': { position: 'none' } }, barChartDefaults );
  chart = new google.visualization.ColumnChart(document.getElementById('chart_motivation'));
  data = new google.visualization.DataTable();
  data.addColumn('string', 'Reason');
  data.addColumn('number', 'Count');
  data.addRows([
    ['Intellectual stimulation', 46],
    ['Spiritual stimulation', 37],
    ['Friendship or networking', 27],
    ['Support diverse Mormonism', 32],
    ['Support diverse Transhumanism', 26],
    ['Mormon Transhumanist activism', 20],
    ['Other', 14],
    ]);
  chart.draw(data, options);
}

google.load('visualization', '1.0', {'packages':['corechart']});
google.setOnLoadCallback(drawCharts);
