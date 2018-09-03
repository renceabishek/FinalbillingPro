  $(document).ready(function () {
      var info = (db2.get('settings').value());
      console.log('inital value---->'+info[0].GST);
       makeActiveSidebar();
      if(info[0].GST=='yes'){
        console.log('inside GST');
        document.getElementById("GST").checked=true;
        document.getElementById("WoutGST").checked=false;
      } else{
        document.getElementById("GST").checked=false;
        document.getElementById("WoutGST").checked=true;
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
  });

  function makeActiveSidebar(){

    document.getElementById("customerFrom").setAttribute("class", "");
    document.getElementById("productFrom").setAttribute("class", "");
    document.getElementById("billingFrom").setAttribute("class", "");
    document.getElementById("dailyreportFrom").setAttribute("class", "");
    document.getElementById("weeklyreportFrom").setAttribute("class", "");
    document.getElementById("monthlyreportFrom").setAttribute("class", "");
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
