var finalProducts=[];
$(document).ready(function() {
  makeActiveSidebar();
  setproducts();

  var options1 = {
     source: finalProducts,
     minLength: 1
 };
 var selector1 = 'input.productInput';
 $(document).on('keydown.autocomplete', selector1, function() {
     $(this).autocomplete(options1);
 });

});

function makeActiveSidebar(){
 document.getElementById("customerFrom").setAttribute("class", "");
 document.getElementById("productFrom").setAttribute("class", "");
 document.getElementById("billingFrom").setAttribute("class", "");
 document.getElementById("stockreportFrom").setAttribute("class", "");
 document.getElementById("productreportFrom").setAttribute("class", "active");
 document.getElementById("revenuereportFrom").setAttribute("class", "");
 document.getElementById("settingFrom").setAttribute("class", "");
}



function onViewProduct(){
  var charval=[];
  var sortcharval=[];
  var product=document.getElementById('mypro').value;
  charval=makeproduct(product);
  sortcharval=charval.sort(custom_sort);

  var map = sortcharval.reduce(function(map, invoice) {
  var name = invoice.date
  var price = +invoice.productqty
  map[name] = (map[name] || 0) + price
  return map
  }, {})
  console.log('map-->'+JSON.stringify(map));
  var array = Object.keys(map).map(function(name) {
  return {
    date: name,
    productqty: map[name]
  }
})

console.log(JSON.stringify(array));

  showchartvalues(array);

}

function custom_sort(a, b) {
  return new Date(a.date).getTime() - new Date(b.date).getTime();
}

function makeproduct(pro){
  var charvalues=[];
  var productvalues=db3.get('savemaster').value();
  for(var i=0;i<productvalues.length;i++) {
    var innerprod=productvalues[i].productList;
    var productqty=0;
    for(var j=0;j<innerprod.length;j++){
      if(pro==innerprod[j].productname){
        productqty=innerprod[j].prodqty;
      }
    }
    if(productqty !=null && productqty.length>0){
      var obj={"date":productvalues[i].date,"productqty":productqty};
      charvalues.push(obj);
    }
  }
  return charvalues;
}

function showchartvalues(charvalues1){
  console.log(JSON.stringify(charvalues1));
    var chart = AmCharts.makeChart( "proddiv", {
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
        "balloonText": "Date <b> [[category]] </b>: Product Qty <b>[[value]]</b>",
        "fillAlphas": 0.8,
        "lineAlpha": 0.2,
        "type": "column",
        "valueField": "productqty"
      } ],
      "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
      },
      "categoryField": "date",
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

function setproducts(){
  var prodvalues = db1.get('product').value();
  finalProducts=[];
  for(var i=0;i<prodvalues.length;i++) {
    finalProducts.push(prodvalues[i].productname);
    console.log('inside customer');
  }
  console.log(finalProducts);
}
