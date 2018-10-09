var totalperpage=0;
var totalperpage1=0;

function printpagesize(val){
  if(val=='yes'){
    var table = document.getElementById("dataTableBill");
    var rowCount = table.rows.length;
    var val=0;
    for(var i=0;rowCount>i;i++){
      if($('#prodval0'+i).val()>0) {
        val++;
      }
    }
    console.log('val-->'+val);
    return val;
  } else {
    var table = document.getElementById("wdataTableBill");
    var rowCount = table.rows.length;
    var val=0;
    for(var i=0;rowCount>i;i++){
     if($('#wprodval0'+i).val()>0) {
        val++;
     }
    }
    console.log('val-->'+val);
    return val;
  }
}

function wprintMultiple(times){
  if(times>=20 && times <=50){
    print2050();
  } else{

  }
}

function print2050() {
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
  wsetPrinttablevalues2050();
  document.getElementById("wprintmeMultiple").style.paddingTop="200px";
  document.getElementById('wprintNettvalue').style.display="none";
  document.getElementById("wp_totalvalue").innerHTML="&#8377;"+totalperpage;
  document.getElementById("wp_totalvalue1").innerHTML="&#8377;"+parseFloat(totalperpage1).toFixed(2);
  document.getElementById("nettvalue1").innerHTML="&#8377;"+document.getElementById('wprodTotalGrand').innerHTML;
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
}

function wsetPrinttablevalues2050(){
  var table = document.getElementById("wdataTableBill");
  var rowCount = table.rows.length;
  var obj=1;
  var qty=0;
  var qty1=0;
  var tamileng=db2.get('settings').value();
  var tamilenglish=tamileng[0].tamilEnglish;

  $("#wp_tablebody tr:gt(0)").remove();
  console.log('count '+rowCount)
  var countitems=0;
  var countitems1=0;
  totalperpage=0;
  totalperpage1=0;
  var incre=0;
  for(var ij=0;rowCount>ij;ij++){
    if(ij==0) {
      if($('#wprodval0').val().length>0){
        incre++;
      }
    } else{
      if($('#wprodval0'+ij).val().length>0){
        incre++;
      }
    }
  }
  console.log('alert-->'+incre);
  for(var i=0;incre>i;i++){
    if(i<=19){
      var table1 = document.getElementById("wp_tablebody");
     var rowCount1 = table1.rows.length;
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
         totalperpage=+totalperpage+ +$('#wprodval0').val();

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
         console.log('obj-->'+JSON.stringify(obj1));
         console.log('index-->'+index);
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
         totalperpage=+totalperpage+ +$('#wprodval0'+i).val();

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
     document.getElementById("wp_totalitems").innerHTML=countitems;
     console.log('print qty'+qty);
     obj++;
   } else{

    var table1 = document.getElementById("wp_tablebody1");
    var rowCount1 = table1.rows.length;
     var row = table1.insertRow(rowCount1);
     row.id = rowCount;

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
      // if($('#wprodval0'+i).val() >0 ) {
      if(i==20){
          cell1.innerHTML="";
          cell2.innerHTML=" ";
          cell3.innerHTML=" ";
          cell4.innerHTML=" ";
          cell5.innerHTML="<b>"+totalperpage+"</b>";
          cell5.align="right";

          var table1 = document.getElementById("wp_tablebody1");
          var rowCount1 = table1.rows.length;
           var row = table1.insertRow(rowCount1);
           row.id = rowCount;

          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          var cell3 = row.insertCell(2);
          var cell4 = row.insertCell(3);
          var cell5 = row.insertCell(4);

            console.log('1 value'+$('#wprodsn0'+i).val());
            cell1.innerHTML=obj;

            if($('#wproductname0'+i).val()==''){
              cell2.innerHTML="";
            } else{
              countitems1++;
              var vv=db1.get('product').find({"productname":$('#wproductname0'+i).val()}).value();
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
            qty1=+qty1+ +$('#wproductqty0'+i).val();
            totalperpage1=+totalperpage1+ +$('#wprodval0'+i).val();

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

            obj++;

      } else {
        console.log('1 value'+$('#wprodsn0'+i).val());
        cell1.innerHTML=obj;

        if($('#wproductname0'+i).val()==''){
          cell2.innerHTML="";
        } else{
          countitems1++;
          var vv=db1.get('product').find({"productname":$('#wproductname0'+i).val()}).value();
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
        qty1=+qty1+ +$('#wproductqty0'+i).val();
        totalperpage1=+totalperpage1+ +$('#wprodval0'+i).val();

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


        obj++;
        }
  // }
    document.getElementById("wp_totalitems1").innerHTML=countitems1;

   }
   if(i==incre-1){
     var table1 = document.getElementById("wp_tablebody1");
     var rowCount1 = table1.rows.length;
     console.log('could be-->'+rowCount1);
     if(rowCount1<29){
       var size=32-rowCount1;
       for(var ii=0;size>ii;ii++){
         var table1 = document.getElementById("wp_tablebody1");
         var rowCount1 = table1.rows.length;
         var row = table1.insertRow(rowCount1);
         row.id = rowCount;
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          var cell3 = row.insertCell(2);
          var cell4 = row.insertCell(3);
          var cell5 = row.insertCell(4);


          cell1.innerHTML=obj;
          cell2.innerHTML=" ";
          cell3.innerHTML=" ";
          cell4.innerHTML=" ";
          cell5.innerHTML=" ";
          obj++;
       }
     }
   }
  }
  document.getElementById("wp_totalqty").innerHTML=qty;
  document.getElementById("wp_totalqty1").innerHTML=qty1;
}


function printMultiple(times){
  document.getElementById('prodgsttiin').innerHTML=db.get('customer').find({"customername":document.getElementById('myCustomer').value}).value().custin;

  document.getElementById('prodst').innerHTML=db.get('customer').find({"customername":document.getElementById('myCustomer').value}).value().cusstate;
  document.getElementById('byuersorderno').innerHTML=db.get('customer').
  find({"customername":document.getElementById('myCustomer').value}).value().buyerscode;

  getdates();
  document.getElementById('p_customername').innerHTML=document.getElementById('myCustomer').value;
  document.getElementById('p_invoiceno').innerHTML=db2.get('settings').value()[0].gstinvoiceno;

  multiplesetPrinttablevalues(times);
  multiplesetPrinttablevaluesTAX(times);
  console.log('---->'+document.getElementById("tobodytotalAmt").innerHTML);

  document.getElementById("wordings").innerHTML="INR "+withDecimal(document.getElementById("prodTotalGrand").innerHTML)+" ONLY";
  document.getElementById("wordingstax").innerHTML="INR "+withDecimal(document.getElementById("ttamount").innerHTML)+" PAISE ONLY";
  var printContents = document.getElementById('printme').innerHTML;

  saveinvoicedata('yes',printContents);

  var invoice=++db2.get('settings').value()[0].gstinvoiceno;
  var objset={"gstinvoiceno": invoice};
  db2.get('settings').nth(0).assign(objset).value();
  db2.write();
  document.body.innerHTML = printContents;

  window.print();

  document.body.innerHTML = originalContents;

  document.getElementById('prodTotalGrand').innerHTML="0.00";
  document.getElementById('span_customername').innerHTML="";
  document.getElementById('prodTotal').innerHTML="0.00";
  document.getElementById('prodsgst').innerHTML="0.00";
  document.getElementById('prodcgst').innerHTML="0.00";
  document.getElementById('prodrn').innerHTML="0.00";
}

function multiplesetPrinttablevalues(times) {

    var table = document.getElementById("dataTableBill");
    var rowCount = table.rows.length;
    var obj=1;
    var qty=0;
    times++;
    console.log('count '+times);
    $("#p_tablebody tr:gt(0)").remove();
    for(var i=0;times>=i;i++){

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

    for(var i=0;3>i;i++){

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


         cell1.innerHTML="";
         cell1.style.borderRight="1px solid";
         cell1.style.borderLeft="1px solid";

         if(i==0){
            cell2.innerHTML="CGST"
         } else if(i==1){
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

         if(i==0){
            cell8.innerHTML=document.getElementById("prodcgst").innerHTML;
         } else if(i==1){
           cell8.innerHTML=document.getElementById("prodsgst").innerHTML;
         } else{
           cell8.innerHTML=document.getElementById("prodrn").innerHTML;
         }
         cell8.style.borderRight="1px solid";
         cell8.style.fontWeight="bold";
         cell8.align="right";



     }

    document.getElementById("tbodytotalQty").innerHTML=qty;
    document.getElementById("tobodytotalAmt").innerHTML="&#8377;"+document.getElementById("prodTotalGrand").innerHTML;
}

function multiplesetPrinttablevaluesTAX(times){
  var table = document.getElementById("p_tablebody");
  var rowCount = table.rows.length;
  var total=0;
  times++;
  console.log('count '+times);
  for(var i=0;times>=i;i++){

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

function masterSaveGST(){
  var table = document.getElementById("dataTableBill");
  var rowCount = table.rows.length;
  var obj=1;
  var qty=0;
  var proobj=[];
  for(var i=0;rowCount>i;i++){
    if(i==0){
      var obj={"productname":$('#productname0').val(),"prodqty":$('#productqty0').val(),"prodvalue":$('#prodval0').val()};
      proobj.push(obj);
    } else{
      if($('#prodval0'+i).val()!=null &&  $('#prodval0'+i).val()>0) {
      var obj={"productname":$('#productname0'+i).val(),"prodqty":$('#productqty0'+i).val(),"prodvalue":$('#prodval0'+i).val()};
      proobj.push(obj);
      }
    }
  }
  var saveobj={"customerid":document.getElementById('myCustomer').value,"productList":proobj,
  "totalAmount":document.getElementById('prodTotalGrand').innerHTML,"invoiceno":db2.get('settings').value()[0].gstinvoiceno,"date":getdates()};
  db3.get('savemaster').push(saveobj).write();
}

function masterSaveWGST(){
  var table = document.getElementById("wdataTableBill");
  var rowCount = table.rows.length;
  var obj=1;
  var qty=0;
  var proobj=[];
  for(var i=0;rowCount>i;i++){
    if(i==0){
      var obj={"productname":$('#wproductname0').val(),"prodqty":$('#wproductqty0').val(),"prodvalue":$('#wprodval0').val()};
      proobj.push(obj);
    } else{
      if($('#wprodval0'+i).val()!=null &&  $('#wprodval0'+i).val()>0) {
      var obj={"productname":$('#wproductname0'+i).val(),"prodqty":$('#wproductqty0'+i).val(),"prodvalue":$('#wprodval0'+i).val()};
      proobj.push(obj);
      }
    }
  }
  var saveobj={"customerid":document.getElementById('myCustomer').value,"productList":proobj,
  "totalAmount":document.getElementById('wprodTotalGrand').innerHTML,"invoiceno":db2.get('settings').value()[0].sequencenoAlpha+
  db2.get('settings').value()[0].sequenceno,"date":getdates()};
  db3.get('savemaster').push(saveobj).write();
}

function saveinvoicedata(gst,val){
    if(gst=='yes'){
      var  invoiceObj={"invoiceno":db2.get('settings').value()[0].gstinvoiceno.toString(),"printvalue":val};
      db4.get('invoice').push(invoiceObj).write();
    } else{
      var  invoiceObj={"invoiceno":db2.get('settings').value()[0].sequencenoAlpha+
      db2.get('settings').value()[0].sequenceno,"printvalue":val};
      db4.get('invoice').push(invoiceObj).write();
    }
}
