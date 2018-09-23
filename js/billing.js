var availableTags=[];
var customers=[];
// var imported = document.createElement('script');
// imported.src = './wbilling.js';
// document.head.appendChild(imported);
var gst="no";

function removeallvalues(){
  var dd=db2.get('settings').value();
  if(dd[0].currentdate!=getdates()){
    var obj={"currentdate":getdates()};
    db2.get('settings').nth(0).assign(obj).value();
    db2.write();




    db4.get('invoice').remove().write();
  }
}

 $(document).ready(function() {
     makeActiveSidebar();
     setProductName();
     setcustomers();
     removeallvalues();
     var options = {
        source: availableTags,
        minLength: 1
    };
    var selector = 'input.searchInput';
    $(document).on('keydown.autocomplete', selector, function() {
        $(this).autocomplete(options);
    });

    var options1 = {
       source: customers,
       minLength: 1
   };
   var selector1 = 'input.searchInput1';
   $(document).on('keydown.autocomplete', selector1, function() {
       $(this).autocomplete(options1);
   });

   //  $( "#myCustomer" ).autocomplete({
   //   source: customers
   // });
   var settings=db2.get("settings").value();
   if(settings[0].GST=='yes'){
     gst="yes";
      document.getElementById('table-wrapper').style="top:50px";
      document.getElementById('table-wrapper1').style="display:none";
      $('#wprodTotalGrand').css({'display':'none'});
      $('#prodTotalGrand').css({});
      loadInitalRows();
   } else {
     gst="no";
     document.getElementById('table-wrapper').style="display:none";
     document.getElementById('table-wrapper1').style="top:50px";

     $('#wprodTotalGrand').css({});
     $('#prodTotalGrand').css({'display':'none'});
     wloadInitalRows();
   }
   document.getElementById('myCustomer').focus();
 });

 function loadInitalRows() {
   var ii=19;
   while(ii>0) {
   var table1 = document.getElementById("dataTableBill");
   var rowCount1 = table1.rows.length;
   var row = table1.insertRow(rowCount1);
   row.id = rowCount1;

   var cell1 = row.insertCell(0);
   var cell2 = row.insertCell(1);
   var cell3 = row.insertCell(2);
   var cell4 = row.insertCell(3);
   var cell5 = row.insertCell(4);
   var cell6 = row.insertCell(5);
   // var cell7 = row.insertCell(6);

   var snno=rowCount1;
   snno++;


   var element = document.createElement("input");
   element.setAttribute("style","text-align: left;");
   element.setAttribute("value",snno);
   element.setAttribute("class", "inpTextsno");
   element.setAttribute("id", "prodsn0" + rowCount1);
   element.setAttribute("readonly","true");
   cell1.width="50px";
   cell1.appendChild(element);


   var element = document.createElement("input");
   element.setAttribute("class", "inpTextPname searchInput");
   element.setAttribute("style", "height: 30px !important;");
   element.setAttribute("onfocusout","focusproductName(this);");
   element.setAttribute("id", "productname0"+rowCount1);
   cell2.width="400px";
   cell2.appendChild(element);

   var element = document.createElement("input");
   element.setAttribute("class", "inpTextPname");
   element.setAttribute("style", "height: 30px !important; text-align:right");
   element.setAttribute("onfocusout","gstcalculation();");
   element.setAttribute("onkeypress","return isNumberKeyFloat(event,this.id)");
   element.setAttribute("id", "productgst0"+rowCount1);
   cell3.width="150px";
   cell3.appendChild(element);


   var element = document.createElement("input");
   element.setAttribute("class", "rightalign inpText");
   element.setAttribute("style", "text-align:right");
   element.setAttribute("onfocusout","calculatePerAMT(this)");
   element.setAttribute("onkeypress","return isNumberKey(event,this.id)");
   element.setAttribute("id", "productqty0" + rowCount1);
   cell4.width="150px";
   cell4.appendChild(element);

   var element = document.createElement("input");
   element.setAttribute("class", "rightalign inpText");
   element.setAttribute("style", "text-align: right; height: 30px !important;");
   element.setAttribute("id", "productrate0" + rowCount1);
   element.setAttribute("onkeypress","return isNumberKeyFloat(event,this.id)");
   element.setAttribute("onfocusout","onFocust(this);");
   cell5.width="150px";
   cell5.appendChild(element);

   var element = document.createElement("input");
   element.setAttribute("class", "rightalign inpText");
   element.setAttribute("style", "text-align: right;");
   element.setAttribute("id", "prodval0" + rowCount1);
   element.setAttribute("readonly","true");

   cell6.width="150px";
   cell6.appendChild(element);
   ii--;
   }
 }



 function setcustomers(){
   var customervalues = db.get('customer').value();
   customers=[];
   for(var i=0;i<customervalues.length;i++) {
     customers.push(customervalues[i].customerid);
     customers.push(customervalues[i].customername);
   }

 }


 function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
      });
}




 function makeActiveSidebar(){

   document.getElementById("customerFrom").setAttribute("class", "");
   document.getElementById("productFrom").setAttribute("class", "");
   document.getElementById("billingFrom").setAttribute("class", "active");
   document.getElementById("stockreportFrom").setAttribute("class", "");
   document.getElementById("productreportFrom").setAttribute("class", "");
   document.getElementById("revenuereportFrom").setAttribute("class", "");
   document.getElementById("settingFrom").setAttribute("class", "");
   document.getElementById("ViewbillingFrom").setAttribute("class", "");

}

function setProductName(){
  var productvalues = db1.get('product').value();
  var values;
  for(var i=0;i<productvalues.length;i++) {
    availableTags.push(productvalues[i].productname);
    availableTags.push(productvalues[i].productid);
  }
}



function onbillAdd(event){
  var settings=db2.get("settings").value();
  if(settings[0].GST=='yes'){
   var table1 = document.getElementById("dataTableBill");
   var rowCount1 = table1.rows.length;
   var row = table1.insertRow(rowCount1);
   row.id = rowCount1;

   var cell1 = row.insertCell(0);
   var cell2 = row.insertCell(1);
   var cell3 = row.insertCell(2);
   var cell4 = row.insertCell(3);
   var cell5 = row.insertCell(4);
   var cell6 = row.insertCell(5);
   // var cell7 = row.insertCell(6);

   var snno=rowCount1;
   snno++;


   var element = document.createElement("input");
   element.setAttribute("style","text-align: left;");
   element.setAttribute("value",snno);
   element.setAttribute("class", "inpTextsno");
   element.setAttribute("id", "prodsn0" + rowCount1);
   element.setAttribute("readonly","true");
   cell1.width="50px";
   cell1.appendChild(element);


   var element = document.createElement("input");
   element.setAttribute("class", "inpTextPname searchInput");
   element.setAttribute("style", "height: 30px !important;");
   element.setAttribute("onfocusout","focusproductName(this);");
   element.setAttribute("id", "productname0"+rowCount1);
   cell2.width="400px";
   cell2.appendChild(element);

   var element = document.createElement("input");
   element.setAttribute("class", "inpTextPname");
   element.setAttribute("style", "height: 30px !important; text-align:right");
   element.setAttribute("onfocusout","gstcalculation();");
   element.setAttribute("onkeypress","return isNumberKeyFloat(event,this.id)");
   element.setAttribute("id", "productgst0"+rowCount1);
   cell3.width="150px";
   cell3.appendChild(element);


   var element = document.createElement("input");
   element.setAttribute("class", "rightalign inpText");
   element.setAttribute("style", "text-align:right");
   element.setAttribute("onfocusout","calculatePerAMT(this)");
   element.setAttribute("onkeypress","return isNumberKey(event,this.id)");
   element.setAttribute("id", "productqty0" + rowCount1);
   cell4.width="150px";
   cell4.appendChild(element);

   var element = document.createElement("input");
   element.setAttribute("class", "rightalign inpText");
   element.setAttribute("style", "text-align: right; height: 30px !important;");
   element.setAttribute("id", "productrate0" + rowCount1);
   element.setAttribute("onkeypress","return isNumberKeyFloat(event,this.id)");
   element.setAttribute("onfocusout","onFocust(this);");
   cell5.width="150px";
   cell5.appendChild(element);

   var element = document.createElement("input");
   element.setAttribute("class", "rightalign inpText");
   element.setAttribute("style", "text-align: right;");
   element.setAttribute("id", "prodval0" + rowCount1);
   element.setAttribute("readonly","true");

   cell6.width="150px";
   cell6.appendChild(element);
  } else{
    wonbillAdd();
  }

}

function onFocust(event){
  var tr=$(event).closest('tr').attr('id');
  console.log('tr'+tr);
  if(tr==0){
    if( $('#productname0').val().length>0){
      //  onbillAdd();
    }
  }
  else {
    if ( $('#productname0'+tr).val().length>0 ) {
      if($('#prodsn0'+tr).val()>='20') {
        onbillAdd();
      }
    }
  }

  var rate=document.getElementById(event.id).value;
  if(document.getElementById(event.id).value!=null &&document.getElementById(event.id).value.length>0) {
    document.getElementById(event.id).value=parseFloat(document.getElementById(event.id).value).toFixed(2);
    if(tr==0){
        var qty=document.getElementById('productqty0').value;
        document.getElementById('prodval0').value=parseFloat(qty*rate).toFixed(2);
        gstcalculation();
    } else {
        var qty=document.getElementById('productqty0'+tr).value;
        document.getElementById('prodval0'+tr).value=parseFloat(qty*rate).toFixed(2);
        gstcalculation();
    }
     calculatTotalSum();
 }
}

function calculatePerAMT(event){
  var tr=$(event).closest('tr').attr('id');

  var qty=document.getElementById(event.id).value;
  if(qty!=null && qty.length>0){
    if(tr==0){
        var rate=document.getElementById('productrate0').value;
        document.getElementById('prodval0').value=qty*rate;
          gstcalculation();
    } else {
        var rate=document.getElementById('productrate0'+tr).value;
        document.getElementById('prodval0'+tr).value=qty*rate;
          gstcalculation();
    }
    calculatTotalSum();
  }
}

function onbillRemove(event){
  var table1 = document.getElementById("dataTableBill");
  var rowCount1 = table1.rows.length;
  console.log(rowCount1);
    if(rowCount1>=2) {
      console.log('--inside on'+event);
      var index=($(event.target).parents('tr').index());
      document.getElementById("dataTableBill").deleteRow(index);

    } else{
      alert('Cannot Remove all the row');
    }
    // var table = document.getElementById("dataTableBill").rows;
    //
    // var rows = document.getElementById("dataTableBill").rows.length;
    // document.getElementById('prodsn0').value=1;
    // console.log('tableeeee'+rows);
    // for(i = 1; i < rows; i++)
    // {
    //   console.log(table.rows[i].id);
    //   document.getElementById('prodsn0'+i).value=i;
    // }
 calculatTotalSum();

}

function focusproductName(event){
  var id=event.id;
  var tr=$(event).closest('tr').attr('id');

  var productvalues = (db1.get('product').value());
  for(var i=0;i<productvalues.length;i++) {
    if(productvalues[i].productname==$('#'+id).val()){

      if(tr==0){
          document.getElementById('productrate0').value=productvalues[i].rate;
      } else{
          document.getElementById('productrate0'+tr).value=productvalues[i].rate;
      }
      break;
    }

    if(productvalues[i].productid==$('#'+id).val()){
      if(tr==0){
          document.getElementById('productrate0').value=productvalues[i].rate;
          document.getElementById('productname0').value=productvalues[i].productname;
      } else{
          document.getElementById('productrate0'+tr).value=productvalues[i].rate;
          document.getElementById('productname0'+tr).value=productvalues[i].productname;
      }
      break;
    }
  }
 calculatTotalSum();
}

function calculatTotalSum() {
  var table = document.getElementById("dataTableBill").rows;
  var rows = document.getElementById("dataTableBill").rows.length;
  var y;
  var sum=0.0;
  var qty=0;
  for(i = 0; i <  rows; i++)
  {
           if(i==0){
             if($('#prodval0').val()>=0){
                sum=(+sum+ +$('#prodval0').val());
             }

           } else{
             if($('#prodval0'+i).val()>=0){
              sum=(+sum+ +$('#prodval0'+i).val());
             }

           }
  }
  console.log('sum'+sum);
  if(sum <=0){
    console.log('zero');
    document.getElementById('prodTotal').innerHTML="0.00";
    document.getElementById('prodTotalGrand').innerHTML="0.00";
  } else{
    console.log('not zero');
    document.getElementById('prodTotal').innerHTML=parseFloat(sum).toFixed(2);
    console.log('val--->'+document.getElementById("prodsgst").innerHTML);
    var gst=(+document.getElementById("prodsgst").innerHTML + +document.getElementById("prodcgst").innerHTML);
    var tottal=sum + +gst;
    console.log('gst--->'+tottal);
    document.getElementById('prodTotalGrand').innerHTML=Math.round(parseFloat(tottal).toFixed(2))+".00";
    document.getElementById("prodrn").innerHTML=parseFloat(document.getElementById('prodTotalGrand').innerHTML - tottal).toFixed(2);
  }


}

function focusCusName(event){
//   var customervalues = (db.get('customer').value());
//   for(var i=0;i<customervalues.length;i++) {
//     if(customervalues[i].customerid==$('#myInput').val()){
//           document.getElementById('myInput').value=customervalues[i].customername;
//       break;
//     }
// }
onViewCustomer('focuslost');

}

function onhideCustomerdetail(){
  $('#modalCustomer').modal('hide');
}

function onViewCustomer(val){
    if(val!='focuslost' && document.getElementById('myCustomer').value==''){
      alert('Kindly Enter Customer Name');
      document.getElementById('myCustomer').focus();
      return false;
    } else{
      console.log(document.getElementById('myCustomer').value);
    var customervalues= db.get('customer').find({"customerid": document.getElementById('myCustomer').value}).value();
    if(customervalues!=null && customervalues.customerid.length>0){
      document.getElementById('c_cusid').innerHTML=customervalues.customerid;
      document.getElementById('c_cusname').innerHTML=customervalues.customername;
      document.getElementById('c_cusarea').innerHTML=customervalues.cusarea;
      document.getElementById('c_cusmobile').innerHTML=customervalues.cusmobile;
      document.getElementById('c_custin').innerHTML=customervalues.custin;
      document.getElementById('c_cusaddress').innerHTML=customervalues.cusaddress;
      document.getElementById('c_cusstate').innerHTML=customervalues.cusstate;
      document.getElementById('c_cusPincode').innerHTML=customervalues.cuspincode;
      document.getElementById('c_cusemail').innerHTML=customervalues.cusemail;
      document.getElementById('c_cusremarks').innerHTML=customervalues.cusremarks;
      document.getElementById('hidecusId').innerHTML=customervalues.customerid;
      document.getElementById('myCustomer').value=customervalues.customername;
    } else{
      var customervalues1= db.get('customer').find({"customername": document.getElementById('myCustomer').value}).value();
      if(customervalues1!=null) {
      document.getElementById('c_cusid').innerHTML=customervalues1.customerid;
      document.getElementById('c_cusname').innerHTML=customervalues1.customername;
      document.getElementById('c_cusarea').innerHTML=customervalues1.cusarea;
      document.getElementById('c_cusmobile').innerHTML=customervalues1.cusmobile;
      document.getElementById('c_custin').innerHTML=customervalues1.custin;
      document.getElementById('c_cusaddress').innerHTML=customervalues1.cusaddress;
      document.getElementById('c_cusstate').innerHTML=customervalues1.cusstate;
      document.getElementById('c_cusPincode').innerHTML=customervalues1.cuspincode;
      document.getElementById('c_cusemail').innerHTML=customervalues1.cusemail;
      document.getElementById('c_cusremarks').innerHTML=customervalues1.cusremarks;
      document.getElementById('hidecusId').innerHTML=customervalues1.customerid;
    } else{
      document.getElementById('myCustomer').value="";
    }
    }
    if(val=='focuslost') {
      if(document.getElementById('wproductname0').value!=null && document.getElementById('wproductname0').value.length>0){

      } else{
        if(document.getElementById('myCustomer').value==""){
           document.getElementById('span_customername').innerHTML="";
            document.getElementById('myCustomer').focus();
        } else{
            document.getElementById('span_customername').innerHTML=document.getElementById('myCustomer').value;
            document.getElementById('wproductname0').focus();
        }

      }

    } else{
        $('#modalCustomer').modal('show');
    }
}
}

function setPrinttablevalues(){
  var table = document.getElementById("dataTableBill");
  var rowCount = table.rows.length;
  var obj=1;
  var qty=0;
  console.log('count '+rowCount);
  $("#p_tablebody tr:gt(0)").remove();
  for(var i=0;21>i;i++){

    var table1 = document.getElementById("p_tablebody");
     var rowCount1 = table1.rows.length;
     var row = table1.insertRow(rowCount1);
     row.id = rowCount;
     row.rowspan="20";


     var cell1 = row.insertCell(0);
     var cell2 = row.insertCell(1);
     var cell3 = row.insertCell(2);
     var cell4 = row.insertCell(3);
     var cell5 = row.insertCell(4);
     var cell6 = row.insertCell(5);
     var cell7 = row.insertCell(6);
     var cell8 = row.insertCell(7);
     console.log('--initialval-->'+i);
     if(i==0) {
       console.log('1 value'+$('#prodsn0').val()) ;
       cell1.innerHTML=obj;
       cell1.style.borderRight="1px solid";
       cell1.style.borderLeft="1px solid";
       cell1.id="tbsno0";


       cell2.innerHTML=$('#productname0').val();
       cell2.style.borderRight="1px solid";
       cell2.id="tbprname0";


       cell3.innerHTML=db1.get('product').find({"productname":$('#productname0').val()}).value().producthsn;
       cell3.style.borderRight="1px solid";
       cell3.id="tbprhsnno0";

       cell4.innerHTML=$('#productgst0').val();
       cell4.style.borderRight="1px solid";
       cell4.id="tbgst0";
       cell4.align="right";

       cell5.innerHTML=" ";
       cell5.style.borderRight="1px solid";
       cell5.id="tbmrp0";
       cell5.align="right";

       cell6.innerHTML=$('#productqty0').val();
       cell6.style.borderRight="1px solid";
       cell6.id="tbprqty0";
       cell6.align="right";

       cell7.innerHTML=$('#productrate0').val();
       cell7.style.borderRight="1px solid";
       cell7.id="tbprrate0";
       cell7.align="right";

       cell8.innerHTML=$('#prodval0').val();
       cell8.style.borderRight="1px solid";
       cell8.id="tbprval0";
       cell8.align="right";

       qty=+qty+ +$('#productqty0').val();


       var productvalues = (db1.get('product').value());
       var index;
       var proqty;
       var productid,productname,mrp,rate,producthsn,prodtamil;
       for(var ii=0;ii<productvalues.length;ii++) {

         if(productvalues[ii].productname==$('#productname0').val()){
            console.log('after '+productvalues[ii].quantity);
            proqty=productvalues[ii].quantity;
            productid=productvalues[ii].productid;
            productname=productvalues[ii].productname;
            mrp=productvalues[ii].mrp;
            rate=productvalues[ii].rate;
            producthsn=productvalues[ii].producthsn;
            prodtamil=productvalues[ii].prodtamil;
           index=ii;
          break;
         }
       }
       var c=proqty-$('#productqty0').val();
      var  obj1={"productid":productid,"productname":productname,"producthsn":producthsn,  "mrp":mrp,"rate":rate,
        "quantity":c.toString(),"prodtamil":prodtamil };

       console.log('obj-->'+JSON.stringify(obj1));
       console.log('index-->'+index);
       db1.get('product').nth(index).assign(obj1).value();
       db1.write();

     } else{

         if(i==18 || i==19 || i==20) {
           cell1.innerHTML="";
           cell1.style.borderRight="1px solid";
           cell1.style.borderLeft="1px solid";

           if(i==18){
              cell2.innerHTML="CGST"
           } else if(i==19){
             cell2.innerHTML="SGST"
           } else{
             cell2.innerHTML="ROUNDED OFF"
           }
           cell2.style.borderRight="1px solid";
           cell2.align="right";
           cell2.style.fontWeight="bold";

           cell3.innerHTML=" ";
           cell3.style.borderRight="1px solid";

           cell4.innerHTML=" ";
           cell4.style.borderRight="1px solid";

           cell5.innerHTML=" ";
           cell5.style.borderRight="1px solid";

           cell6.innerHTML=" ";
           cell6.style.borderRight="1px solid";

           cell7.innerHTML=" ";
           cell7.style.borderRight="1px solid";

           if(i==18){
              cell8.innerHTML=document.getElementById("prodcgst").innerHTML;
           } else if(i==19){
             cell8.innerHTML=document.getElementById("prodsgst").innerHTML;
           } else{
             cell8.innerHTML=document.getElementById("prodrn").innerHTML;
           }
           cell8.style.borderRight="1px solid";
           cell8.style.fontWeight="bold";
           cell8.align="right";


         }
         else {
           if($('#prodval0'+i).val() !=null && $('#prodval0'+i).val()>0){
              cell1.innerHTML=obj;
           }   else{
             console.log('--->none');
             cell1.innerHTML=" ";
          }
         cell1.style.borderRight="1px solid";
         cell1.style.borderLeft="1px solid";
         cell1.id="tbsno0"+i;
         console.log('new values-->'+$('#productname0'+i).val()+'--i '+i);
         cell2.innerHTML=$('#productname0'+i).val();
         cell2.style.borderRight="1px solid";
         cell2.id="tbprname0"+i;

         if($('#productname0'+i).val() !=null && $('#productname0'+i).val().length>0){
            cell3.innerHTML=db1.get('product').find({"productname":$('#productname0'+i).val()}).value().producthsn;
         } else{
           cell3.innerHTM="";
         }
         cell3.style.borderRight="1px solid";
         cell3.id="tbprhsnno0"+i;

         if($('#prodval0'+i).val() !=null && $('#prodval0'+i).val()>0){
            cell4.innerHTML=$('#productgst0'+i).val();
          } else{
            cell4.innerHTML="&nbsp";
          }
         cell4.style.borderRight="1px solid";
         cell4.id="tbgst0"+i;
         cell4.align="right";

         cell5.innerHTML=" ";
         cell5.style.borderRight="1px solid";
         cell5.id="tbmrp0"+i;
         cell5.align="right";

         cell6.innerHTML=$('#productqty0'+i).val();
         cell6.style.borderRight="1px solid";
         cell6.id="tbprqty0"+i;
         cell6.align="right";

         cell7.innerHTML=$('#productrate0'+i).val();
         cell7.style.borderRight="1px solid";
         cell7.id="tbprrate0"+i;
         cell7.align="right";

         cell8.innerHTML=$('#prodval0'+i).val();
         cell8.style.borderRight="1px solid";
         cell8.id="tbprval0"+i;
         cell8.align="right";
         qty=+qty+ +$('#productqty0'+i).val();
       }
       if($('#productname0'+i).val() !=null && $('#productname0'+i).val().length>0) {
           var productvalues = (db1.get('product').value());
           var index;
           var proqty;
           for(var ii=0;ii<productvalues.length;ii++) {
             if(productvalues[ii].productname==$('#productname0'+i).val()){
                proqty=productvalues[ii].quantity;
               index=ii;
            //   break;
             }
           }
           var c=proqty-$('#productqty0'+i).val();
           var obj1={"quantity":c.toString()};
           db1.get('product').nth(index).assign(obj1).value();
           db1.write();
       }
     }
     //document.getElementById("p_totalitems").innerHTML=obj;
     console.log('print qty'+qty);
     console.log('iiiivalue-->'+i);
   obj++;
  }

  document.getElementById("tbodytotalQty").innerHTML=qty;
  document.getElementById("tobodytotalAmt").innerHTML="&#8377;"+document.getElementById("prodTotalGrand").innerHTML;
}

function setPrinttablevaluesTAX(){
  var table = document.getElementById("p_tablebody");
  var rowCount = table.rows.length;
  var total=0;
  console.log('count '+rowCount);
  for(var i=0;15>i;i++){

    var table1 = document.getElementById("p_tablebodyTax");
     var rowCount1 = table1.rows.length;
     var row = table1.insertRow(rowCount1);
     row.id = rowCount;
     row.rowspan="20";


     var cell1 = row.insertCell(0);
     var cell2 = row.insertCell(1);
     var cell3 = row.insertCell(2);
     var cell4 = row.insertCell(3);
     var cell5 = row.insertCell(4);
     var cell6 = row.insertCell(5);
     var cell7 = row.insertCell(6);

     if(i==0) {

       cell1.innerHTML=$('#tbprhsnno0').text();
       cell1.style.borderRight="1px solid";
       cell1.style.borderLeft="1px solid";

       cell2.innerHTML=$('#tbprval0').text();
       cell2.style.borderRight="1px solid";
       cell2.align="right";

       var gst=($('#tbgst0').text() / 2);
       cell3.innerHTML=parseFloat(gst).toFixed(2);
       cell3.style.borderRight="1px solid";
       cell3.align="right";

       var final1=($('#tbprval0').text() * parseFloat(gst).toFixed(2) )/100;
       cell4.innerHTML=parseFloat(final1).toFixed(2);
       cell4.style.borderRight="1px solid";
       cell4.align="right";

       cell5.innerHTML=parseFloat(gst).toFixed(2);
       cell5.style.borderRight="1px solid";
       cell5.align="right";

       cell6.innerHTML=parseFloat(final1).toFixed(2);
       cell6.style.borderRight="1px solid";
       cell6.align="right";

       var final=(final1*2);
       cell7.innerHTML=parseFloat(final).toFixed(2);
       cell7.style.borderRight="1px solid";
       cell7.align="right";
       total=+total + +parseFloat(final).toFixed(2);
     } else{

        if($('#tbprhsnno0'+i).text()!=null && $.trim($('#tbprhsnno0'+i).text()).length>0) {
           cell1.innerHTML=$('#tbprhsnno0'+i).text();
           cell1.style.borderRight="1px solid";
           cell1.style.borderLeft="1px solid";

           cell2.innerHTML=$('#tbprval0'+i).text();
           cell2.style.borderRight="1px solid";
           cell2.align="right";

           var gst=($('#tbgst0'+i).text() / 2);
           cell3.innerHTML=parseFloat(gst).toFixed(2);
           cell3.style.borderRight="1px solid";
           cell3.align="right";

           var final1=($('#tbprval0'+i).text() * parseFloat(gst).toFixed(2) )/100;
           cell4.innerHTML=parseFloat(final1).toFixed(2);
           cell4.style.borderRight="1px solid";
           cell4.align="right";

           cell5.innerHTML=parseFloat(gst).toFixed(2);
           cell5.style.borderRight="1px solid";
           cell5.align="right";

           cell6.innerHTML=parseFloat(final1).toFixed(2);
           cell6.style.borderRight="1px solid";
           cell6.align="right";

           var final=(final1*2);
           cell7.innerHTML=parseFloat(final).toFixed(2);
           cell7.style.borderRight="1px solid";
           cell7.align="right";
           total=+total + +parseFloat(final).toFixed(2);
       }
  }
}
document.getElementById('taxablevalue').innerHTML=document.getElementById('prodTotal').innerHTML;
document.getElementById('sgstamount').innerHTML=document.getElementById('prodsgst').innerHTML;
document.getElementById('cgstamount').innerHTML=document.getElementById('prodcgst').innerHTML;
document.getElementById('ttamount').innerHTML=parseFloat(total).toFixed(2);
}

function getdates(){
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
  document.getElementById('p_dated').innerHTML=today;
  return today;
}

function resetaction() {
  // document.getElementById('billingForm').reset();
  var r = confirm("Do you want to reset ?");
  if(r==true){
    document.getElementById('wprodTotalGrand').innerHTML="0.00";
    document.getElementById('prodTotalGrand').innerHTML="0.00";
    document.getElementById('myCustomer').value="";
    document.getElementById('prodTotal').innerHTML="0.00";
    document.getElementById('prodsgst').innerHTML="0.00";
    document.getElementById('prodcgst').innerHTML="0.00";
    document.getElementById('prodrn').innerHTML="0.00";
    cleartableFields();
  } else {

  }


}


var originalContents="";
function printFuntion(){
  console.log('gst values ---->'+gst);
  if(printValidation()){
    var times="";

    if(gst=='yes'){
      originalContents = document.body.innerHTML;
      times=printpagesize(gst);
      masterSaveGST();
      printFunc(times);

    } else {
      times=printpagesize(gst);
      masterSaveWGST();
      wprintFunc(times);
    }
  }
}

function printValidation(){
  if($('#myCustomer').val().trim()=="") {
    alert("Kindly enter the Customer detail");
    document.getElementById('myCustomer').focus();
    return false;
  }
    else if(document.getElementById('prodTotalGrand').innerHTML== '0.00') {
    if(document.getElementById('wprodTotalGrand').innerHTML=='0.00') {
      console.log('validation failed for print--->');
      alert('Total amount is ZERO! Cannot proceed');
      return false;
    } else{
      return true;
    }
  }
   else{
    return true;
  }
}

function gstcalculation(){
  var table = document.getElementById("dataTableBill");
  var rowCount = table.rows.length;
  var obj=1;
  var qty=0;
  var totalgst=0.00;
  console.log('count '+rowCount);
  for(var i=0;rowCount>i;i++){
    if(i==0) {
      if($('#prodval0').val()!=null && $('#prodval0').val()>0) {
        console.log('1 value'+$('#prodsn0').val()) ;
        var val=($('#productgst0').val() * $('#prodval0').val())/100;
        console.log('total gst '+val);
        totalgst=+totalgst+  +val;
      }
    } else{
      if($('#prodval0'+i).val()!=null && $('#prodval0'+i).val()>0) {
      var val=($('#productgst0'+i).val() * $('#prodval0'+i).val())/100;
      console.log('total gst '+val);
      totalgst=+totalgst+  +val;
    }
    }
  }
  var splitgst=totalgst/2;
  document.getElementById("prodsgst").innerHTML=parseFloat(splitgst).toFixed(2);
  document.getElementById("prodcgst").innerHTML=parseFloat(splitgst).toFixed(2);
  calculatTotalSum();
}

function cleartableFields(){
  var table = document.getElementById("dataTableBill");
  var rowCount = table.rows.length;
  for(var i=0;rowCount>i;i++){
    if(i==0) {
      $('#prodval0').val('');
      $('#productgst0').val('');
      $('#productname0').val('');
      $('#productqty0').val('');
      $('#productrate0').val('');

    } else{
      $('#prodval0'+i).val('');
      $('#productgst0'+i).val('');
      $('#productname0'+i).val('');
      $('#productqty0'+i).val('');
      $('#productrate0'+i).val('');
    }
  }

  var table = document.getElementById("wdataTableBill");
  var rowCount = table.rows.length;
  for(var i=0;rowCount>i;i++){
    if(i==0) {
      $('#wprodval0').val('');
      $('#wproductgst0').val('');
      $('#wproductname0').val('');
      $('#wproductqty0').val('');
      $('#wproductrate0').val('');

    } else{
      $('#wprodval0'+i).val('');
      $('#wproductgst0'+i).val('');
      $('#wproductname0'+i).val('');
      $('#wproductqty0'+i).val('');
      $('#wproductrate0'+i).val('');
    }
}
document.getElementById('span_customername').innerHTML='';
}

function printFunc(times)
{
  console.log('----oh'+times);
  if(times<=18){

  document.getElementById('prodgsttiin').innerHTML=db.get('customer').find({"customername":document.getElementById('myCustomer').value}).value().custin;

  document.getElementById('prodst').innerHTML=db.get('customer').find({"customername":document.getElementById('myCustomer').value}).value().cusstate;
  document.getElementById('byuersorderno').innerHTML=db.get('customer').
  find({"customername":document.getElementById('myCustomer').value}).value().buyerscode;

  getdates();
  document.getElementById('p_customername').innerHTML=document.getElementById('myCustomer').value;
  document.getElementById('p_invoiceno').innerHTML=db2.get('settings').value()[0].gstinvoiceno;

  setPrinttablevalues();
  setPrinttablevaluesTAX();
  console.log('---->'+document.getElementById("tobodytotalAmt").innerHTML);

  document.getElementById("wordings").innerHTML="INR "+withDecimal(document.getElementById("prodTotalGrand").innerHTML)+" ONLY";
  document.getElementById("wordingstax").innerHTML="INR "+withDecimal(document.getElementById("ttamount").innerHTML)+" PAISE ONLY";
  var printContents = document.getElementById('printme').innerHTML;

  saveinvoicedata('yes',printContents);

  var invoice=++db2.get('settings').value()[0].gstinvoiceno;
  var objset={"gstinvoiceno": invoice};
  db2.get('settings').nth(0).assign(objset).value();
  db2.write();

  // var index;
  // var save=db4.get('invoice').value();
  // for(var s=0;s<save.length;s++){
  //   console.log('invoice no--->'+save[s].invoiceno+'--->'+document.getElementById('p_invoiceno').innerHTML);
  //   if(save[s].invoiceno==document.getElementById('p_invoiceno').innerHTML){
  //     index=s;
  //     break;
  //   }
  // }
  // console.log('index--->'+index);
  // var obj1={printvalue:printContents};
  // db4.get('invoice').nth(index).assign(obj1).value();
  // db4.write();


  document.body.innerHTML = printContents;

  window.print();

  document.body.innerHTML = originalContents;

  document.getElementById('prodTotalGrand').innerHTML="0.00";
  document.getElementById('span_customername').innerHTML="";
  document.getElementById('prodTotal').innerHTML="0.00";
  document.getElementById('prodsgst').innerHTML="0.00";
  document.getElementById('prodcgst').innerHTML="0.00";
  document.getElementById('prodrn').innerHTML="0.00";



} else{
  console.log('multiple gst print');
  printMultiple(times);
}
}
