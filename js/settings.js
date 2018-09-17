  $(document).ready(function () {
      var info = (db2.get('settings').value());
      console.log('inital value---->'+info[0].GST);
       makeActiveSidebar();
      if(info[0].GST=='yes'){
        console.log('inside GST');
        document.getElementById("GST").checked=true;
        document.getElementById("WoutGST").checked=false;
        document.getElementById("settingwithoutgst").style.display="none";
        document.getElementById("settingwithgst").style.display="";
      } else{
        document.getElementById("GST").checked=false;
        document.getElementById("WoutGST").checked=true;
        document.getElementById("settingwithoutgst").style.display="";
        document.getElementById("settingwithgst").style.display="none";

      }

      var address=info[0].owneraddress;
      var fields = address.split('~');
      if(!(fields=='')){
        document.getElementById('set_name').value=fields[0];
        document.getElementById('set_stname').value=fields[1];
        document.getElementById('set_city').value=fields[2];
      }


      document.getElementById("Ownersname").value=info[0].ownername;
      document.getElementById("sq_noalpha").value=info[0].sequencenoAlpha;
      document.getElementById("sq_no").value=info[0].sequenceno;
      document.getElementById("ownerphon").value=info[0].ownerphone;

      document.getElementById("set_stnamegst").value=info[0].gststreetname;
      document.getElementById("set_citygst").value=info[0].gstcity;
      document.getElementById("set_stategst").value=info[0].gststate;
      document.getElementById("set_pingst").value=info[0].gstpinno;
      document.getElementById("ownerphongst").value=info[0].gstphno;
      document.getElementById("gstinno_gst").value=info[0].gsttinno;
      document.getElementById("gstemailgst").value=info[0].gstmail;
      document.getElementById("gstinvoiceno").value=info[0].gstinvoiceno;

  });

  function makeActiveSidebar(){

    document.getElementById("customerFrom").setAttribute("class", "");
    document.getElementById("productFrom").setAttribute("class", "");
    document.getElementById("billingFrom").setAttribute("class", "");
    document.getElementById("stockreportFrom").setAttribute("class", "");
    document.getElementById("productreportFrom").setAttribute("class", "");
    document.getElementById("revenuereportFrom").setAttribute("class", "");
    document.getElementById("settingFrom").setAttribute("class", "active");

 }

function savetoLowdb(){
  var check=document.querySelector('input[name="am"]:checked').value;
  var obj;
  console.log('check value--->'+check);
  if(check=='GST') {
      obj={"GST":"yes"};
  } else{
    obj={"GST":"no"};
  }
  if(check=='GST'){
    document.getElementById("settingwithoutgst").style.display="none";
    document.getElementById("settingwithgst").style.display="";
  } else{
    document.getElementById("settingwithoutgst").style.display="";
    document.getElementById("settingwithgst").style.display="none";
  }
  db2.get('settings').nth(0).assign(obj).value();
  db2.write();
}


function onSaveAction(){
    var obj={"ownername":document.getElementById("Ownersname").value};
    db2.get('settings').nth(0).assign(obj).value();
    db2.write();
    alert('saved');
}


function onSaveActionAddress(){
    var obj;
    if(document.getElementById("set_name").value=='' ||document.getElementById("set_stname").value==''
        ||  document.getElementById("set_city").value==''){
          obj  ={"owneraddress":""};
  } else{
      obj={"owneraddress":document.getElementById("set_name").value+"~"+document.getElementById("set_stname").value
    +"~"+document.getElementById("set_city").value};
  }

  db2.get('settings').nth(0).assign(obj).value();
  db2.write();
  alert('saved');
}

function onSaveActionNumber(){
  if(document.getElementById('sq_noalpha').value=="" || document.getElementById('sq_no').value==""){
    alert('values cannot be empty');
  } else{
    var obj={"sequencenoAlpha":document.getElementById('sq_noalpha').value,"sequenceno":document.getElementById('sq_no').value};
    db2.get('settings').nth(0).assign(obj).value();
    db2.write();
    alert('saved');
  }
}

function onSaveActionphNumber(){
  if(document.getElementById('ownerphon').value==""){
    alert('Enter Phone Number');
  } else{
    var obj={"ownerphone":document.getElementById('ownerphon').value};
    db2.get('settings').nth(0).assign(obj).value();
    db2.write();
    alert('saved');
  }
}

// MAIN SAVE FUCNTION FOR THE BILL TYPE WITH GST

function settinggstSave(){
  if(gstsavevalidation()){
    var obj={"gststreetname":document.getElementById('set_stnamegst').value,"gstcity":document.getElementById('set_citygst').value,
      "gststate":document.getElementById('set_stategst').value,"gstpinno":document.getElementById('set_pingst').value,
      "gstphno":document.getElementById('ownerphongst').value,"gsttinno":document.getElementById('gstinno_gst').value,
      "gstmail":document.getElementById('gstemailgst').value,"gstinvoiceno":document.getElementById('gstinvoiceno').value};
      db2.get('settings').nth(0).assign(obj).value();
      db2.write();
      alert('saved');
  }
}

function gstsavevalidation(){
  if($.trim($('#set_stnamegst').val())==''){
    alert("Kindly enter the Street Name");
    $('#set_stnamegst').focus();
    return false;
  } else if($.trim($('#set_citygst').val())==''){
    alert("Kindly enter the City");
    $('#set_citygst').focus();
    return false;
  } else if($.trim($('#set_stategst').val())==''){
    alert("Kindly choose State");
    $('#set_stategst').focus();
    return false;
  } else if($.trim($('#set_pingst').val())==''){
    alert("Kindly enter the PIN NO");
    $('#set_pingst').focus();
    return false;
  } else if($.trim($('#ownerphongst').val())==''){
    alert("Kindly enter the Phone No");
    $('#ownerphongst').focus();
    return false;
  } else if($.trim($('#gstinno_gst').val())==''){
    alert("Kindly enter the GSTIN NO");
    $('#gstinno_gst').focus();
    return false;
  } else if($.trim($('#gstemailgst').val())==''){
    alert("Kindly enter the Email ID");
    $('#gstemailgst').focus();
    return false;
  }
  // else if($.trim($('#gstinvoiceno').val())==''){
  //   alert("Kindly enter Invoice Starting NO");
  //   $('#gstinvoiceno').focus();
  //   return false;
  // }
  else {
    return true;
  }
}
