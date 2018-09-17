var daily=[];
$(document).ready(function() {
  makeActiveSidebar();
});

function makeActiveSidebar(){
 document.getElementById("customerFrom").setAttribute("class", "");
 document.getElementById("productFrom").setAttribute("class", "");
 document.getElementById("billingFrom").setAttribute("class", "");
 document.getElementById("stockreportFrom").setAttribute("class", "");
 document.getElementById("productreportFrom").setAttribute("class", "");
 document.getElementById("revenuereportFrom").setAttribute("class", "active");
 document.getElementById("settingFrom").setAttribute("class", "");
}

function custom_sort(a, b) {
  return new Date(a.date).getTime() - new Date(b.date).getTime();
}

function dailyshow(){
  var productvalues=db3.get('savemaster').value();
  var sortcharval=[];
  daily=[];
  for(var i=0;i<productvalues.length;i++) {
    var obj={"date":productvalues[i].date,"totalAmount":productvalues[i].totalAmount};
    daily.push(obj);
  }
  sortcharval=daily.sort(custom_sort);
  var map = sortcharval.reduce(function(map, invoice) {
  var name = invoice.date
  var price = +invoice.totalAmount
  map[name] = (map[name] || 0) + price
  return map
  }, {})
  var array = Object.keys(map).map(function(name) {
  return {
    date: name,
    totalAmount: map[name]
  }
  })
  console.log(JSON.stringify(array));
  showchart(array);

}

function showchart(value){
  var chart = AmCharts.makeChart("revdiv", {
    "type": "serial",
    "theme": "light",
    "marginTop":0,
    "marginRight": 80,
    "dataProvider":value,
    "valueAxes": [{
        "axisAlpha": 0,
        "position": "left",
        "title": "Total Earnings (₹)"
    }],
    "graphs": [{
        "id":"g1",
        "balloonText": "[[category]]<br> <b><span style='font-size:14px;'>₹ [[totalAmount]]</span></b>",
        "bullet": "round",
        "bulletSize": 8,
        "lineColor": "#d1655d",
        "lineThickness": 2,
        "negativeLineColor": "#637bb6",
        "type": "smoothedLine",
        "valueField": "totalAmount"
    }],
    "chartScrollbar": {
        "graph":"g1",
        "gridAlpha":0,
        "color":"#888888",
        "scrollbarHeight":55,
        "backgroundAlpha":0,
        "selectedBackgroundAlpha":0.1,
        "selectedBackgroundColor":"#888888",
        "graphFillAlpha":0,
        "autoGridCount":true,
        "selectedGraphFillAlpha":0,
        "graphLineAlpha":0.2,
        "graphLineColor":"#c2c2c2",
        "selectedGraphLineColor":"#888888",
        "selectedGraphLineAlpha":1

    },
    "chartCursor": {
        "categoryBalloonDateFormat": "YYYY",
        "cursorAlpha": 0,
        "valueLineEnabled":true,
        "valueLineBalloonEnabled":true,
        "valueLineAlpha":0.5,
        "fullWidth":true
    },

    "categoryField": "date",
    "categoryAxis": {

        "minorGridAlpha": 0.1,
        "minorGridEnabled": true
    },
    "export": {
        "enabled": true
    }
});

chart.addListener("rendered", zoomChart);
if(chart.zoomChart){
	chart.zoomChart();
}

}

function zoomChart(){
    chart.zoomToIndexes(Math.round(chart.dataProvider.length * 0.4), Math.round(chart.dataProvider.length * 0.55));
  }

function monthlyshow(){

}
