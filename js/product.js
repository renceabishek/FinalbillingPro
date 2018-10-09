

 $(document).ready(function() {
   console.log('insie inn');
     makeActiveSidebar();
    getProductTable();
    // setpagination();

    myReadyFilter();

 });

  function makeActiveSidebar(){
    document.getElementById("customerFrom").setAttribute("class", "");
    document.getElementById("productFrom").setAttribute("class", "active");
    document.getElementById("billingFrom").setAttribute("class", "");
    document.getElementById("stockreportFrom").setAttribute("class", "");
    document.getElementById("productreportFrom").setAttribute("class", "");
    document.getElementById("revenuereportFrom").setAttribute("class", "");
    document.getElementById("settingFrom").setAttribute("class", "");
    document.getElementById("ViewbillingFrom").setAttribute("class", "");
}



function getProductTable(){

    var productvalues = (db1.get('product').value());
  for(var i=0;i<productvalues.length;i++) {

   var table = document.getElementById("proDTableBody");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    row.id = rowCount;
    row.style="text-align:center;"

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);

    // var element = document.createElement("input");
    // element.setAttribute("type", "text");
    // element.setAttribute("value",productvalues[i].productid);
    // element.setAttribute("style", "text-align:left");
    // element.setAttribute("class", "form-control");
    // element.setAttribute("id", "PRO_ID" + i);
    // element.setAttribute("readonly","true");
    // cell1.appendChild(element);
    cell1.innerHTML=productvalues[i].productid;
    cell1.id="PRO_ID" + i;
    // var element = document.createElement("input");
    // element.setAttribute("class", "form-control");
    // element.setAttribute("ondrop","return false;");
    // element.setAttribute("onpaste","return false;");
    // element.setAttribute("value",productvalues[i].productname);
    // element.setAttribute("style", "text-align:right");
    // element.setAttribute("id", "PROD_NAME" + i);
    // element.setAttribute("readonly","true");
    // cell2.appendChild(element);
    cell2.innerHTML=productvalues[i].productname;
    cell2.id="PROD_NAME" + i;

    // var element = document.createElement("input");
    // element.setAttribute("class", "form-control");
    // element.setAttribute("onkeypress","return isNumber(event)");
    // element.setAttribute("onchange","return validateDecimal(this)");
    // element.setAttribute("onblur","return calculateTotal1(this)");
    // element.setAttribute("ondrop","return false;");
    // element.setAttribute("onpaste","return false;");
    // element.setAttribute("value",productvalues[i].mrp);
    // element.setAttribute("style", "text-align:right");
    // element.setAttribute("id", "PROD_MRP" + i);
    // element.setAttribute("readonly","true");
    // cell3.appendChild(element);
  cell3.innerHTML=productvalues[i].producthsn;
    cell3.id="PROD_HSN" + i;
    cell4.innerHTML=productvalues[i].mrp;
    cell4.id="PROD_MRP" + i;

    // var element = document.createElement("input");
    // element.setAttribute("class", "form-control");
    // element.setAttribute("onkeypress","return isNumber(event)");
    // element.setAttribute("onchange","return validateDecimal(this)");
    // element.setAttribute("onblur","return calculateTotal1(this)");
    // element.setAttribute("ondrop","return false;");
    // element.setAttribute("onpaste","return false;");
    // element.setAttribute("value",productvalues[i].rate);
    // element.setAttribute("style", "text-align:right");
    // element.setAttribute("id", "PROD_RATE" + i);
    // element.setAttribute("readonly","true");
    // cell4.appendChild(element);

    cell5.innerHTML=productvalues[i].rate;
    cell5.id="PROD_RATE" + i;

    cell6.innerHTML=productvalues[i].quantity;
    cell6.id="PROD_QUAN" + i;

    cell7.innerHTML=productvalues[i].prodtamil;
    cell7.id="PROD_TAMIL" + i;

    var element = document.createElement("button");
    element.setAttribute("class", "fa fa-edit  prod_edit");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("id", i);
    element.setAttribute("type", "button");
    element.setAttribute("onclick", "btnEditaction(this);");
    cell8.appendChild(element);

    var element = document.createElement("button");
    element.setAttribute("class", "fa fa-trash prod_trash");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("id", i);
    element.setAttribute("type", "button");
    element.setAttribute("onclick", "btnDeleteAction(this);");
    cell9.appendChild(element);


    }

}





function addRowproduct() {

    var table = document.getElementById("dataTablePro1");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    row.id = rowCount;
    var setting =db2.get('settings').value();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);

    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("value", ++setting[0].productno);
    element.setAttribute("style", "text-align:left");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "productid0" + rowCount);
    cell1.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("style", "text-align:left");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "productval0" + rowCount);
    cell2.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("style", "text-align:left");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "producthsn0" + rowCount);
    element.setAttribute("onkeypress", "return isNumberKey(event)");
    cell3.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "prodmrp0" + rowCount);
    element.setAttribute("onkeypress", "return isNumberKey(event)");
    cell4.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "prodrate0" + rowCount);
    element.setAttribute("onkeypress", "return isNumberKey(event)");
    cell5.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "prodquan0" + rowCount);
    element.setAttribute("onkeypress", "return isNumberKey(event)");
    cell6.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("style", "text-align:left");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "prodtamil0" + rowCount);
    cell7.appendChild(element);

    var element = document.createElement("button");
    element.setAttribute("style", "text-align:right;height: 30px !important;");
    //element.innerHTML="[X]";
    element.setAttribute("class", "btn btn-danger fa fa fa-remove");
    element.setAttribute("id", "bdn_productaction" + rowCount);
    element.setAttribute("onclick","onProdremove(event)");
    cell8.appendChild(element);

}

function onProdremove(event){
    console.log('--inside on'+event);
    var index=($(event.target).parents('tr').index());
    document.getElementById("dataTablePro1").deleteRow(index);
    return false;
}

function saveNewProduct(){
  if(savenewprodValidation()){
    addintoProduct();
  }
}

function savenewprodValidation(){
  var table = document.getElementById("dataTablePro1");
  var rowCount = table.rows.length;
  console.log('-->product new values '+rowCount);


  for(var i=0;rowCount>i;i++){
    // if($.trim($('#productid'+i).val())==''){
    //   alert('Product Id should not be Empty');
    //   return false;
    // } else
    if(i==0){
      if($.trim($('#productval'+i).val())=='') {
        alert('Product Name should not be Empty');
        document.getElementById('productval'+i).focus();
        return false;
      } else if($.trim($('#producthsn'+i).val())=='') {
       alert('Product HSN Code should not be Empty');
       document.getElementById('producthsn'+i).focus();
       return false;
      }
       else if($.trim($('#prodmrp'+i).val())=='') {
       alert('Product M.R.P should not be Empty');
       document.getElementById('prodmrp'+i).focus();
      return false;
      } else if($.trim($('#prodrate'+i).val())=='') {
         alert('Product Rate should not be Empty');
         document.getElementById('prodrate'+i).focus();
         return false;
      }
      else if($.trim($('#prodtamil'+i).val())=='') {
        alert('Product Name in Tamil should not be Empty');
        document.getElementById('prodtamil'+i).focus();
        return false;
      }
    } else {
        if($.trim($('#productval0'+i).val())=='') {
          alert('Product Name should not be Empty');
          document.getElementById('productval0'+i).focus();
          return false;
        } else if($.trim($('#producthsn0'+i).val())=='') {
         alert('Product HSN Code should not be Empty');
         document.getElementById('producthsn0'+i).focus();
         return false;
        }
         else if($.trim($('#prodmrp0'+i).val())=='') {
         alert('Product M.R.P should not be Empty');
         document.getElementById('prodmrp0'+i).focus();
        return false;
      } else if($.trim($('#prodrate0'+i).val())=='') {
           alert('Product Rate should not be Empty');
           document.getElementById('prodrate0'+i).focus();
           return false;
        }
        else if($.trim($('#prodtamil0'+i).val())=='') {
          alert('Product Name in Tamil should not be Empty');
          document.getElementById('prodtamil0'+i).focus();
          return false;
        }
    }

}
}

function addintoProduct() {
  var productvalues = (db1.get('product').value());
  var count=productvalues.length+1;
  var t = $('#proDTable').DataTable();

  var table = document.getElementById("dataTablePro");
  var rowCount = table.rows.length;
  for(var i=0;rowCount>i;i++){
    count++;

    var val1="<span id=PRO_ID"+count+">"+$('#productid'+i).val()+"</span>";
    var val2="<span id=PROD_NAME"+count+">"+$('#productval'+i).val()+"</span>";
  var val3="<span id=PROD_HSN"+count+">"+$('#producthsn'+i).val()+"</span>";
    var val4="<span id=PROD_MRP"+count+">"+$('#prodmrp'+i).val()+"</span>";
    var val5="<span id=PROD_RATE"+count+">"+$('#prodrate'+i).val()+"</span>";
      var val6="<span id=PROD_QUAN"+count+">"+$('#prodquan'+i).val()+"</span>";
    var val7="<span id=PROD_TAMIL"+count+">"+$('#prodtamil'+i).val()+"</span>"

    var val8="<button id="+count+" type='button' class='fa fa-edit prod_edit' onclick=btnEditaction(this);></button>";
    var val9="<span id="+count+" type='button' class='fa fa-trash prod_trash' onclick=btnDeleteAction(this);></button>";
    console.log(val1);
     t.row.add( [
           val1,
           val2,
           val3,
           val4,
           val5,
           val6,
           val7,
           val8,
           val9
       ] ).draw( false );


     var obj = { "productid": $('#productid'+i).val(), "productname": $('#productval'+i).val(),
    "producthsn": $('#producthsn'+i).val(),"mrp":$('#prodmrp'+i).val(),
   "rate":$('#prodrate'+i).val(),"quantity":$('#prodquan'+i).val(), "prodtamil":$('#prodtamil'+i).val() };
     db1.get('product').push(obj).write();

     var setting =db2.get('settings').value();
     var objset={"productno": ++setting[0].productno};

     db2.get('settings').nth(0).assign(objset).value();
     db2.write();
  }
//  $("#proDTableBody").empty();
//  getProductTable();

  $('#dataTablePro').find("tr:gt(0)").remove();
  $('#productid0').val('');
  $('#productval0').val('');
    $('#producthsn0').val('');
  $('#prodmrp0').val('');
  $('#prodrate0').val('');
    $('#prodquan0').val('');
  $('#prodtamil0').val('');
  $('#modalCompose').modal('hide');
}

/* DataTable Filter Functionality Added here */

function myFilter() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("Fill_prodid");
  filter = input.value.toUpperCase();
  table = document.getElementById("proDTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

/// Another Filter and pagination Functionality

function myReadyFilter(){

  $('#proDTable').DataTable( {
      "pagingType": "full_numbers"
  } );
}

function prodAddAction() {
  document.getElementById('productform').reset();
  var settings=db2.get("settings").value();
  document.getElementById('productid0').value=settings[0].productno;
  $('#modalCompose').modal('show');
}

//Validation for empty
function saveEditProductVal(){
  if(saveEditprodValidation()){
    saveEditProduct();
  }
}


function saveEditprodValidation(){

    if($.trim($('#eproductvale0').val())=='') {
      alert('Product Name should not be Empty');
      document.getElementById('eproductvale0').focus();
      return false;
    }
    else if($.trim($('#eproducthsne0').val())=='') {
     alert('Product HSN Code should not be Empty');
     document.getElementById('eproducthsne0').focus();
     return false;
    }
    else if($.trim($('#eprodmrpe0').val())=='') {
     alert('Product M.R.P should not be Empty');
     document.getElementById('eprodmrpe0').focus();
      return false;
    }
    else if($.trim($('#eprodratee0').val())=='') {
       alert('Product Rate should not be Empty');
       document.getElementById('eprodratee0').focus();
       return false;
    } else{
        return true;
    }



}
//End of validation

function saveEditProduct(){
  var productvalues = (db1.get('product').value());
  var index;
  for(var i=0;i<productvalues.length;i++) {
    if(productvalues[i].productid==$('#eproductide0').val()){
      index=i;
      break;
    }
  }
  var obj={"productid":$('#eproductide0').val(),"productname":$('#eproductvale0').val(),
  "producthsn":$('#eproducthsne0').val(),
  "mrp":$('#eprodmrpe0').val(),"rate":$('#eprodratee0').val(),"quantity":$('#eprodquane0').val()  };
  db1.get('product').nth(index).assign(obj).value();
  db1.write();

  var table = document.getElementById("proDTableBody").rows;
  var rows = document.getElementById("proDTableBody").rows.length;
  var y;
  for(i = 0; i <  rows; i++)
  {    for(j = 0; j < 6; j++)
       {
           y = table[i].cells;
           //do something with cells in a row
           if(y[0].innerHTML==$('#eproductide0').val()){
             y[1].innerHTML = $('#eproductvale0').val();
             y[2].innerHTML = $('#eproducthsne0').val();
             y[3].innerHTML = $('#eprodmrpe0').val();
             y[4].innerHTML = $('#eprodratee0').val();
             y[5].innerHTML = $('#eprodquane0').val();
             break;
           }
           //console.log(y[0].innerHTML);
          // y[j].innerHTML = "";
       }
  }
  $('#modalEditCompose').modal('hide');
}
function btnEditaction(event){

  // console.log(document.getElementById('PRO_ID3').value);
  //   $('productid0').val($('#PRO_ID'+event.id).val());
  //   $('productval0').val($('#PROD_NAME'+event.id).val());
  //   $('prodmrp0').val($('#PROD_MRP'+event.id).val());
  //   $('prodrate0').val($('#PROD_RATE'+event.id).val());
  var t = document.getElementById('proDTableBody');
  var rows = t.rows;
  for (var i=0; i<rows.length; i++) {
          rows[i].onclick = function () {
              if (this.parentNode.nodeName == 'THEAD') {
                  return;
              }
              var cells = this.cells; //cells collection
              console.log(cells[0].innerHTML);

                 $('#eproductide0').val(cells[0].innerHTML);
                $('#eproductvale0').val(cells[1].innerHTML);
                $('#eproducthsne0').val(cells[2].innerHTML);
                $('#eprodmrpe0').val(cells[3].innerHTML);
                $('#eprodratee0').val(cells[4].innerHTML);
                $('#eprodquane0').val(cells[5].innerHTML);
            };
          }
   $('#modalEditCompose').modal('show');
  console.log('inside edit'+$('#PRO_ID'+event.id).val());

//$('#productval'+i).val()

}
function btnDeleteAction(event){
  var t = document.getElementById('proDTableBody');
  var rows = t.rows;
  for (var i=0; i<rows.length; i++) {
          rows[i].onclick = function () {
              if (this.parentNode.nodeName == 'THEAD') {
                  return;
              }
              var cells = this.cells; //cells collection
              console.log(cells[0].innerHTML);
              document.getElementById("span_delete").innerHTML=cells[0].innerHTML;

            };
          }
   $('#modalDeleteCompose').modal('show');
}

function DelteProduct(){
  var table = document.getElementById("proDTableBody").rows;
  var rows = document.getElementById("proDTableBody").rows.length;
  var y;
  var index;
  var obj1;
  for(i = 0; i <  rows; i++)
  {    for(j = 0; j < 7; j++)
       {
           y = table[i].cells;
           //do something with cells in a row
           if(y[0].innerHTML==document.getElementById("span_delete").innerHTML){
             obj1={
             "productid":y[0].innerHTML
             };
             index=i;
             console.log('inside delete if'+obj1);
             break;
           }
       }
  }
document.getElementById("proDTableBody").deleteRow(index);
console.log(obj1);
db1.get('product').remove(obj1).write();

$('#modalDeleteCompose').modal('hide');
}
