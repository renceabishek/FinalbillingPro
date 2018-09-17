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
    //  if($('#wprodval0'+i).val()>0) {
        val++;
    //  }
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
  document.getElementById("wprintmeMultiple").style.paddingTop="110px";
  document.getElementById('wprintNettvalue').style.display="none";
  document.getElementById("wp_totalvalue").innerHTML="&#8377;"+totalperpage;
  document.getElementById("wp_totalvalue1").innerHTML="&#8377;"+totalperpage1;
  document.getElementById("nettvalue1").innerHTML="&#8377;"+document.getElementById('wprodTotalGrand').innerHTML;
  var printContents = document.getElementById('wprintme').innerHTML;
  var originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;

  window.print();

  document.body.innerHTML = originalContents;
  var objset={"sequenceno": ++setting[0].sequenceno};

  db2.get('settings').nth(0).assign(objset).value();
  db2.write();

  document.getElementById('wprodTotalGrand').innerHTML="0.00";
  document.getElementById('prodTotalGrand').innerHTML="0.00";
}

function wsetPrinttablevalues2050(){
  var table = document.getElementById("wdataTableBill");
  var rowCount = table.rows.length;
  var obj=1;
  var qty=0;
  var qty1=0;

  $("#wp_tablebody tr:gt(0)").remove();
  console.log('count '+rowCount)
  var countitems=0;
  var countitems1=0;
  totalperpage=0;
  totalperpage1=0;
  for(var i=0;rowCount>i;i++){
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
            cell2.innerHTML=db1.get('product').find({"productname":$('#wproductname0').val()}).value().prodtamil;
         }
         cell3.innerHTML=$('#wproductqty0').val();
         cell4.innerHTML=$('#wproductrate0').val();
         cell4.align="right"
         cell5.innerHTML=$('#wprodval0').val();
         cell5.align="right";
         qty=+qty+ +$('#wproductqty0').val();
         totalperpage=+totalperpage+ +$('#wprodval0').val();
     } else{
         console.log('1 value'+$('#wprodsn0'+i).val()) ;
         cell1.innerHTML=obj;
         if($('#wproductname0'+i).val()==''){
           cell2.innerHTML="";
         } else{
           countitems++;
        cell2.innerHTML=db1.get('product').find({"productname":$('#wproductname0'+i).val()}).value().prodtamil;
         }

         cell3.innerHTML=$('#wproductqty0'+i).val();
         cell4.innerHTML=$('#wproductrate0'+i).val();
         cell4.align="right"
         cell5.innerHTML=$('#wprodval0'+i).val();
         cell5.align="right";
         qty=+qty+ +$('#wproductqty0'+i).val();
         totalperpage=+totalperpage+ +$('#wprodval0'+i).val();
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

      } else {
        console.log('1 value'+$('#wprodsn0'+i).val());
        cell1.innerHTML=obj;
        if($('#wproductname0'+i).val()==''){
          cell2.innerHTML="";
        } else{
          countitems1++;
          cell2.innerHTML=db1.get('product').find({"productname":$('#wproductname0'+i).val()}).value().prodtamil;
        }

        cell3.innerHTML=$('#wproductqty0'+i).val();
        cell4.innerHTML=$('#wproductrate0'+i).val();
        cell4.align="right"
        cell5.innerHTML=$('#wprodval0'+i).val();
        cell5.align="right";
        qty1=+qty1+ +$('#wproductqty0'+i).val();
        totalperpage1=+totalperpage1+ +$('#wprodval0'+i).val();
        obj++;
        }
  // }
    document.getElementById("wp_totalitems1").innerHTML=countitems1;

   }
   if(i==rowCount-1){
     var table1 = document.getElementById("wp_tablebody1");
     var rowCount1 = table1.rows.length;
     if(rowCount1<29){
       var size=32-rowCount1;
       for(var i=0;size>i;i++){
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
  if(times>=10 && times <=20){
    print1020();
  } else{

  }
}

function print1020() {

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



var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

function inWords (num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
    return str;
}
