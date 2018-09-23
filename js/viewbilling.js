$(document).ready(function(){
  makeActiveSidebar();
  var availableTags=[];
  var save=db4.get('invoice').value();
  for(var i=0;i<save.length;i++){
      var val=save[i].invoiceno;
      availableTags.push(val);
  }
    var options = {
       source: availableTags,
       minLength: 1
   };
   var selector = 'input.searchInvoice';
   $(document).on('keydown.autocomplete', selector, function() {
       $(this).autocomplete(options);
   });
   
});

function onget(){
  var originalcontent=document.body.innerHTML;
  console.log('va-->'+$('#myInvoice').val());
  var save=db4.get('invoice').find({"invoiceno":$('#myInvoice').val()}).value().printvalue;
  document.body.innerHTML = save;

  window.print();
  document.body.innerHTML=originalcontent;
}

function  ongetView(){
  var save=db4.get('invoice').find({"invoiceno":$('#myInvoice').val()}).value().printvalue;

  document.getElementById('content').innerHTML=save;
}

function onClear(){
  $('#content').empty();
  $('#myInvoice').val('');
}

function makeActiveSidebar(){
  document.getElementById("customerFrom").setAttribute("class", "");
  document.getElementById("productFrom").setAttribute("class", "");
  document.getElementById("billingFrom").setAttribute("class", "");
  document.getElementById("stockreportFrom").setAttribute("class", "");
  document.getElementById("productreportFrom").setAttribute("class", "");
  document.getElementById("revenuereportFrom").setAttribute("class", "");
  document.getElementById("settingFrom").setAttribute("class", "");
  document.getElementById("ViewbillingFrom").setAttribute("class", "active");
}
