var charvalues=[];
 $(document).ready(function() {
   makeActiveSidebar();
   getstockvalues();
   amchartcalling();
});

function makeActiveSidebar(){
  document.getElementById("customerFrom").setAttribute("class", "");
  document.getElementById("productFrom").setAttribute("class", "");
  document.getElementById("billingFrom").setAttribute("class", "");
  document.getElementById("stockreportFrom").setAttribute("class", "active");
  document.getElementById("productreportFrom").setAttribute("class", "");
  document.getElementById("revenuereportFrom").setAttribute("class", "");
  document.getElementById("settingFrom").setAttribute("class", "");
  document.getElementById("ViewbillingFrom").setAttribute("class", "");
}

function getstockvalues(){
  var val=[];
  var productvalues=db1.get('product').value();
  for(var i=0;i<productvalues.length;i++) {
    if(productvalues[i].quantity!=null && productvalues[i].quantity.length>0 && productvalues[i].quantity>=0){
      var obj={"productname":productvalues[i].prodtamil,"productqty":productvalues[i].quantity};
      charvalues.push(obj);
    }
  }
  console.log('finals-->'+JSON.stringify(charvalues));
}

function amchartcalling() {
  var count = Object.keys(charvalues).length;
  console.log(count);
  var c=count* 55.55;
  var width=c+"px";
  chartdiv.style.width=width;

  var chart = AmCharts.makeChart("chartdiv", {
    "theme": "light",
    "type": "serial",
	"startDuration": 2,
    "dataProvider": charvalues,
    "valueAxes": [{
        "position": "left",
        "title": "Product Qty"
    }],
    "graphs": [{
        "balloonText": "[[category]]: <b>[[value]]</b>",
        "fillColorsField": "color",
        "fillAlphas": 1,
        "lineAlpha": 0.1,
        "type": "column",
        "valueField": "productqty"
    }],
    "depth3D": 20,
	"angle": 30,
    "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
    },
    "categoryField": "productname",
    "categoryAxis": {
        "gridPosition": "start",
        "labelRotation": 90
    },
    "export": {
    	"enabled": true
     }

});

}
