
function isNumberKeyFloat(evt,id)
{
	try{
        var charCode = (evt.which) ? evt.which : event.keyCode;

        if(charCode==46){
            var txt=document.getElementById(id).value;
            if(!(txt.indexOf(".") > -1)){

                return true;
            } else{
              return false;
            }
        }
        var values=document.getElementById(id).value;
        console.log('---->'+values);
        if(values.includes('.')) {
          var dotVal=values.split('.');
          if(dotVal[1].length<=1){
            if (charCode > 31 && (charCode < 48 || charCode > 57) )
                return false;
            console.log('indi'+dotVal[1].length);
            return true;
          }
          return false;
        }
        if (charCode > 31 && (charCode < 48 || charCode > 57) )
            return false;

        return true;
	}catch(w){
		alert(w);
	}
}

function isNumberKey(evt,id)
{
	try{
        var charCode = (evt.which) ? evt.which : event.keyCode;

        if(charCode==46){
              return false;
        }


        if (charCode > 31 && (charCode < 48 || charCode > 57) )
            return false;

        return true;
	}catch(w){
		alert(w);
	}
}
