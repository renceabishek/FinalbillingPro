 $(document).ready(function() {
    // $(document).jkey('prt',function(){
    // 	console.log('atl p pressed');
    //   printFuntion();
    // });
    window.addEventListener("keyup", checkKeyPressed, false);
    function checkKeyPressed(e) {
      if (e.keyCode == "44") {
        console.log('inside print');
        printFuntion();
      }
    }

    $( "#myCustomer" ).autocomplete({
     source: customers
   });

});

function wloadInitalRows(){

  var ii=19;
  while(ii>0) {
  var table1 = document.getElementById("wdataTableBill");
  var rowCount1 = table1.rows.length;
  var row = table1.insertRow(rowCount1);
  row.id = rowCount1;

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);

  var snno=rowCount1;
  snno++;


  var element = document.createElement("input");
  element.setAttribute("style","text-align: left;");
  element.setAttribute("value",snno);
  element.setAttribute("class", "inpTextsno");
  element.setAttribute("id", "wprodsn0" + rowCount1);
  element.setAttribute("readonly","true");
  cell1.width="50px";
  cell1.appendChild(element);


  var element = document.createElement("input");
  element.setAttribute("class", "inpTextPname searchInput");
  element.setAttribute("style", "height: 30px !important;");
  element.setAttribute("onfocusout","wfocusproductName(this);");
  element.setAttribute("id", "wproductname0"+rowCount1);
  cell2.width="400px";
  cell2.appendChild(element);


  var element = document.createElement("input");
  element.setAttribute("class", "rightalign inpText");
  element.setAttribute("style", "text-align:right");
  element.setAttribute("onfocusout","wcalculatePerAMT(this)");
  element.setAttribute("onkeypress","return isNumberKey(event,this.id)");
  element.setAttribute("id", "wproductqty0" + rowCount1);
  element.setAttribute("maxlength","10");
  cell3.width="150px";
  cell3.appendChild(element);

  var element = document.createElement("input");
  element.setAttribute("class", "rightalign inpText");
  element.setAttribute("style", "text-align: right; height: 30px !important;");
  element.setAttribute("id", "wproductrate0" + rowCount1);
  element.setAttribute("onkeypress","return isNumberKeyFloat(event,this.id)");
  element.setAttribute("onfocusout","wonFocust(this);");
  element.setAttribute("maxlength","10");
  cell4.width="150px";
  cell4.appendChild(element);

  var element = document.createElement("input");
  element.setAttribute("class", "rightalign inpText");
  element.setAttribute("style", "text-align: right; height: 30px !important;");
  element.setAttribute("id", "wprodval0" + rowCount1);
  element.setAttribute("readonly","true");
  cell5.width="150px";
  cell5.appendChild(element);
  ii--;
  }
}

function wcalculatePerAMT(event){
  var tr=$(event).closest('tr').attr('id');

  var qty=document.getElementById(event.id).value;
  if(qty!=null && qty.length>0) {
  if(tr==0){
      var rate=document.getElementById('wproductrate0').value;
      document.getElementById('wprodval0').value=qty*rate;
  } else {
      var rate=document.getElementById('wproductrate0'+tr).value;
      document.getElementById('wprodval0'+tr).value=qty*rate;
  }
 wcalculatTotalSum();
 }
}

function wfocusproductName(event){
  var id=event.id;
  var tr=$(event).closest('tr').attr('id');

  var productvalues = (db1.get('product').value());
  for(var i=0;i<productvalues.length;i++) {
    if(productvalues[i].productname==$('#'+id).val()){

      if(tr==0){
          document.getElementById('wproductrate0').value=productvalues[i].rate;
      } else{
          document.getElementById('wproductrate0'+tr).value=productvalues[i].rate;
      }
      break;
    }

    if(productvalues[i].productid==$('#'+id).val()){

      if(tr==0){
          document.getElementById('wproductrate0').value=productvalues[i].rate;
          document.getElementById('wproductname0').value=productvalues[i].productname;
      } else{
          document.getElementById('wproductrate0'+tr).value=productvalues[i].rate;
          document.getElementById('wproductname0'+tr).value=productvalues[i].productname;
      }
      break;
    }
  }
 wcalculatTotalSum();
}

function wcalculatTotalSum() {
  var table = document.getElementById("wdataTableBill").rows;
  var rows = document.getElementById("wdataTableBill").rows.length;
  var y;
  var sum=0.0;
  var qty=0;
  for(i = 0; i <  rows; i++)
  {
           if(i==0){
             if($('#wprodval0').val()>=0){
                sum=(+sum+ +$('#wprodval0').val());
             }

           } else{
             if($('#wprodval0'+i).val()>=0){
              sum=(+sum+ +$('#wprodval0'+i).val());
             }

           }
  }

  if(sum <=0){
    document.getElementById('wprodTotalGrand').innerHTML="0.00";

  } else{
    document.getElementById('wprodTotalGrand').innerHTML=parseFloat(sum).toFixed(2);
  }


}


function wonFocust(event){
  var tr=$(event).closest('tr').attr('id');
  console.log('tr'+tr);
  if(tr==0){
    if( $('#wproductname0').val().length>0){
      //  onbillAdd();
    }
  }
  else {
    if ( $('#wproductname0'+tr).val().length>0 ) {
      if($('#wprodsn0'+tr).val()>='20') {
        wonbillAdd();
      }
    }
  }

  var rate=document.getElementById(event.id).value;
  // if(!rate.includes('.')){
  //   document.getElementById(event.id).value=rate+".00";
  // } else {
  //   var chkrate=rate.split('.');
  //   if(chkrate[1].length>2){
  //
  //   } else{
  //     document.getElementById(event.id).value=rate+".0";
  //   }
  // }
  if(document.getElementById(event.id).value!=null &&document.getElementById(event.id).value.length>0) {
  document.getElementById(event.id).value=parseFloat(document.getElementById(event.id).value).toFixed(2);

    console.log('rate--->'+rate);
    if(tr==0){
        var qty=document.getElementById('wproductqty0').value;
        document.getElementById('wprodval0').value=parseFloat(qty*rate).toFixed(2);
        //parseFloat(Math.round(num3 * 100) / 100).toFixed(2);
    } else {
        var qty=document.getElementById('wproductqty0'+tr).value;
        document.getElementById('wprodval0'+tr).value=parseFloat(qty*rate).toFixed(2);
    }
     wcalculatTotalSum();
 }
}

function wonbillAdd(){
   var table1 = document.getElementById("wdataTableBill");
   var rowCount1 = table1.rows.length;
   var row = table1.insertRow(rowCount1);
   row.id = rowCount1;

   var cell1 = row.insertCell(0);
   var cell2 = row.insertCell(1);
   var cell3 = row.insertCell(2);
   var cell4 = row.insertCell(3);
   var cell5 = row.insertCell(4);


   var snno=rowCount1;
   snno++;


   var element = document.createElement("input");
   element.setAttribute("style","text-align: left;");
   element.setAttribute("value",snno);
   element.setAttribute("class", "inpTextsno");
   element.setAttribute("id", "wprodsn0" + rowCount1);
   element.setAttribute("readonly","true");
   cell1.appendChild(element);


   var element = document.createElement("input");
   element.setAttribute("class", "inpTextPname searchInput");
   element.setAttribute("style", "height: 30px !important;");
   element.setAttribute("onfocusout","wfocusproductName(this);");
   element.setAttribute("id", "wproductname0"+rowCount1);
   cell2.width="400px";
   cell2.appendChild(element);


   var element = document.createElement("input");
   element.setAttribute("class", "rightalign inpText");
   element.setAttribute("style", "text-align:right");
   element.setAttribute("onfocusout","wcalculatePerAMT(this)");
   element.setAttribute("onkeypress","return isNumberKey(event,this.id)");
   element.setAttribute("id", "wproductqty0" + rowCount1);
   element.setAttribute("maxlength","10");
   cell3.width="150px";
   cell3.appendChild(element);

   var element = document.createElement("input");
   element.setAttribute("class", "rightalign inpText");
   element.setAttribute("style", "text-align: right; height: 30px !important;");
   element.setAttribute("id", "wproductrate0" + rowCount1);
   element.setAttribute("onkeypress","return isNumberKeyFloat(event,this.id)");
   element.setAttribute("onfocusout","wonFocust(this);");
   element.setAttribute("maxlength","10");
   cell4.width="150px";
   cell4.appendChild(element);

   var element = document.createElement("input");
   element.setAttribute("class", "rightalign inpText");
   element.setAttribute("style", "text-align: right; height: 30px !important;");
   element.setAttribute("id", "wprodval0" + rowCount1);
   element.setAttribute("readonly","true");
   cell5.appendChild(element);


}

function wsetPrinttablevalues(){


    var table = document.getElementById("wdataTableBill");
    var rowCount = table.rows.length;
    var obj=1;
    var qty=0;
    var tamileng=db2.get('settings').value();
    var tamilenglish=tamileng[0].tamilEnglish;

    $("#wp_tablebody tr:gt(0)").remove();
    console.log('count '+rowCount)
    var countitems=0;
    for(var i=0;20>i;i++){

        var table1 = document.getElementById("wp_tablebody");
       var rowCount1 = table1.rows.length;

       // row.className='noBorder';

        var row = table1.insertRow(rowCount1);
        row.id = rowCount;

       var cell1 = row.insertCell(0);
       var cell2 = row.insertCell(1);
       var cell3 = row.insertCell(2);
       var cell4 = row.insertCell(3);
       var cell5 = row.insertCell(4);
         // if($('#wprodval0'+i).val() >0 ) {

       if(i==0) {
         console.log('1 value'+$('#wprodsn0').val()) ;
         cell1.innerHTML=obj;
         if($('#wproductname0').val()==''){
           cell2.innerHTML="";
         }
         else{
           countitems++;
           var vv=db1.get('product').find({"productname":$('#wproductname0').val()}).value();

           if(tamilenglish=='tamil' && typeof vv !='undefined' && vv!=''){
             cell2.innerHTML=db1.get('product').find({"productname":$('#wproductname0').val()}).value().prodtamil;
           } else{
             cell2.innerHTML=$('#wproductname0').val();
           }
         }
         cell3.innerHTML=$('#wproductqty0').val();
         cell4.innerHTML=$('#wproductrate0').val();
         cell4.align="right"
         cell5.innerHTML=$('#wprodval0').val();
         cell5.align="right";
         qty=+qty+ +$('#wproductqty0').val();

         var productvalues = (db1.get('product').value());
         var index;
         var proqty;
         for(var ii=0;ii<productvalues.length;ii++) {
           if(productvalues[ii].productname==$('#wproductname0').val()){
              proqty=productvalues[ii].quantity;
             index=ii;
          //   break;
           }
         }
         var c=proqty-$('#wproductqty0').val();
         var obj1={"quantity":c.toString()};
         db1.get('product').nth(index).assign(obj1).value();
         db1.write();


       } else{
           console.log('1 value'+$('#wprodsn0'+i).val()) ;
           cell1.innerHTML=obj;
           if($('#wproductname0'+i).val()==''){
             cell2.innerHTML="";
           } else{
             countitems++;
             var vv=db1.get('product').find({"productname":$('#wproductname0'+i).val()}).value();
             console.log('vv-->'+vv);
             if(tamilenglish=='tamil' && typeof vv !='undefined' && vv!=''){
               cell2.innerHTML=db1.get('product').find({"productname":$('#wproductname0'+i).val()}).value().prodtamil;
             } else{
               cell2.innerHTML=$('#wproductname0'+i).val();
             }
           }

           cell3.innerHTML=$('#wproductqty0'+i).val();
           cell4.innerHTML=$('#wproductrate0'+i).val();
           cell4.align="right"
           cell5.innerHTML=$('#wprodval0'+i).val();
           cell5.align="right";
           qty=+qty+ +$('#wproductqty0'+i).val();


           if($('#wproductname0'+i).val() !=null && $('#wproductname0'+i).val().length>0) {
           var productvalues = (db1.get('product').value());
           var index;
           var proqty;
           for(var ii=0;ii<productvalues.length;ii++) {
             if(productvalues[ii].productname==$('#wproductname0'+i).val()){
                proqty=productvalues[ii].quantity;
               index=ii;
            //   break;
             }
           }

           var c=proqty-$('#wproductqty0'+i).val();
           var obj1={"quantity":c.toString()};
           console.log('obj-->'+JSON.stringify(obj1));
           console.log('index-->'+index);
           db1.get('product').nth(index).assign(obj1).value();
           db1.write();
         }
       }
     // }
       document.getElementById("wp_totalitems").innerHTML=countitems;
       console.log('print qty'+qty);
       obj++;
    }
  document.getElementById("wp_totalqty").innerHTML=qty;
}

function wgetdates(){
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
  document.getElementById('wp_date').innerHTML=today;
}

function wprintFunc(times) {
    if(times<=19) {
      console.log('--------->'+document.getElementById('hidecusId').innerHTML);
      var cuscity=db.get('customer').find({"customerid":document.getElementById('hidecusId').innerHTML}).value().cusarea;
      var setting =db2.get('settings').value();

      document.getElementById('wp_customershopname').innerHTML=document.getElementById('myCustomer').value;
      document.getElementById('wp_customercity').innerHTML=cuscity;
      document.getElementById('wp_tin').innerHTML=document.getElementById('c_custin').innerHTML;
      document.getElementById('wp_ph').innerHTML=setting[0].ownerphone;
      wgetdates();

      document.getElementById('wp_ownername').innerHTML=setting[0].ownername;
      document.getElementById('wp_no').innerHTML=setting[0].sequencenoAlpha+"/"+setting[0].sequenceno;
      if(!(setting[0].owneraddress=='')){
        var address=setting[0].owneraddress;
        var fields = address.split('~');
        document.getElementById('wp_address1').innerHTML=fields[0];
        document.getElementById('wp_address2').innerHTML=fields[1];
        document.getElementById('wp_address3').innerHTML=fields[2];
      }
      wsetPrinttablevalues();
      document.getElementById("wprintmeMultiple").style.display="none";
      document.getElementById("wp_totalvalue").innerHTML="&#8377;"+parseFloat(document.getElementById('wprodTotalGrand').innerHTML).toFixed(2);
      document.getElementById("nettvalue").innerHTML="&#8377;"+document.getElementById('wprodTotalGrand').innerHTML;
      var printContents = document.getElementById('wprintme').innerHTML;
      var originalContents = document.body.innerHTML;

      document.body.innerHTML = printContents;
      saveinvoicedata('no',printContents);
      window.print();

      document.body.innerHTML = originalContents;
      var objset={"sequenceno": ++setting[0].sequenceno};

      db2.get('settings').nth(0).assign(objset).value();
      db2.write();

      document.getElementById('wprodTotalGrand').innerHTML="0.00";
      document.getElementById('prodTotalGrand').innerHTML="0.00";
      document.getElementById('span_customername').innerHTML="";

    } else {
      document.getElementById("wprintmeMultiple").style.display="";
      wprintMultiple(times);
      $("#wp_tablebody1 tr:gt(0)").remove();
    }
}
