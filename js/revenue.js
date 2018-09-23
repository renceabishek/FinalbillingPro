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
 document.getElementById("ViewbillingFrom").setAttribute("class", "");
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

function getTopN(arr, prop, n) {
    // clone before sorting, to preserve the original array
    var clone = arr.slice(0);

    // sort descending
    clone.sort(function(x, y) {
        if (x[prop] == y[prop]) return 0;
        else if (parseInt(x[prop]) < parseInt(y[prop])) return 1;
        else return -1;
    });

    return clone.slice(0, n || 1);
}
function monthlyshow(){

    var da=getdatesrev();
    var arry=[];
    var arr=db3.get('savemaster').value();
    for(var i=0;i<arr.length;i++){
      if(arr[i].date==da){
        arry.push(arr);
      }
    }

    //showTopCustomerChart(vari);

}



function showTopCustomerChart(charvalues1){
  console.log(JSON.stringify(charvalues1));
    var chart = AmCharts.makeChart( "revdiv", {
      "type": "serial",
      "theme": "light",
      "dataProvider": charvalues1,
      "valueAxes": [ {
        "gridColor": "#FFFFFF",
        "gridAlpha": 0.2,
        "dashLength": 0,
        "title":"Product Qty"
      } ],
      "gridAboveGraphs": true,
      "startDuration": 1,
      "graphs": [ {
        "balloonText": "Customer <b> [[category]] </b>: Amount of purchase <b>[[value]]</b>",
        "fillAlphas": 0.8,
        "lineAlpha": 0.2,
        "type": "column",
        "valueField": "totalAmount"
      } ],
      "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
      },
      "categoryField": "customerid",
      "categoryAxis": {
        "gridPosition": "start",
        "gridAlpha": 0,
        "tickPosition": "start",
        "tickLength": 20,
        "labelRotation": 45
      },
      "export": {
        "enabled": true
      }

    } );
}


function getdatesrev(){
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();

  if(dd<10) {
      dd = '0'+dd
  }

  if(mm<10) {
      mm = '0'+mm
  }

  today = mm + '/' + dd + '/' + yyyy;

  return today;
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
