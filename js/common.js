
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

function ondropup(obj){
	console.log('this--->'+obj.getAttribute('class'));
	if($(obj).hasClass('open')) {
		 //$('#drop1').removeClass('open');
		 document.getElementById("drop1").classList.remove("open");
	 }
		else{
			 $('#drop1').toggleClass('open');
			// this.classList.toggle('open');
			 //document.getElementById("drop1").classList.add("open");
		}
}

function withDecimal(n){
	var nums = n.toString().split('.')
	 var whole = convertNumberToWords(nums[0])
	 if (nums.length == 2) {
			 var fraction = convertNumberToWords(nums[1])
			 return whole + 'and ' + fraction;
	 } else {
			 return whole;
	 }
}

function convertNumberToWords(amount) {
    var words = new Array();
    words[0] = '';
    words[1] = 'One';
    words[2] = 'Two';
    words[3] = 'Three';
    words[4] = 'Four';
    words[5] = 'Five';
    words[6] = 'Six';
    words[7] = 'Seven';
    words[8] = 'Eight';
    words[9] = 'Nine';
    words[10] = 'Ten';
    words[11] = 'Eleven';
    words[12] = 'Twelve';
    words[13] = 'Thirteen';
    words[14] = 'Fourteen';
    words[15] = 'Fifteen';
    words[16] = 'Sixteen';
    words[17] = 'Seventeen';
    words[18] = 'Eighteen';
    words[19] = 'Nineteen';
    words[20] = 'Twenty';
    words[30] = 'Thirty';
    words[40] = 'Forty';
    words[50] = 'Fifty';
    words[60] = 'Sixty';
    words[70] = 'Seventy';
    words[80] = 'Eighty';
    words[90] = 'Ninety';
    amount = amount.toString();
    var atemp = amount.split(".");
    var number = atemp[0].split(",").join("");
    var n_length = number.length;
    var words_string = "";
    if (n_length <= 9) {
        var n_array = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
        var received_n_array = new Array();
        for (var i = 0; i < n_length; i++) {
            received_n_array[i] = number.substr(i, 1);
        }
        for (var i = 9 - n_length, j = 0; i < 9; i++, j++) {
            n_array[i] = received_n_array[j];
        }
        for (var i = 0, j = 1; i < 9; i++, j++) {
            if (i == 0 || i == 2 || i == 4 || i == 7) {
                if (n_array[i] == 1) {
                    n_array[j] = 10 + parseInt(n_array[j]);
                    n_array[i] = 0;
                }
            }
        }
        value = "";
        for (var i = 0; i < 9; i++) {
            if (i == 0 || i == 2 || i == 4 || i == 7) {
                value = n_array[i] * 10;
            } else {
                value = n_array[i];
            }
            if (value != 0) {
                words_string += words[value] + " ";
            }
            if ((i == 1 && value != 0) || (i == 0 && value != 0 && n_array[i + 1] == 0)) {
                words_string += "Crores ";
            }
            if ((i == 3 && value != 0) || (i == 2 && value != 0 && n_array[i + 1] == 0)) {
                words_string += "Lakhs ";
            }
            if ((i == 5 && value != 0) || (i == 4 && value != 0 && n_array[i + 1] == 0)) {
                words_string += "Thousand ";
            }
            if (i == 6 && value != 0 && (n_array[i + 1] != 0 && n_array[i + 2] != 0)) {
                words_string += "Hundred and ";
            } else if (i == 6 && value != 0) {
                words_string += "Hundred ";
            }
        }
        words_string = words_string.split("  ").join(" ");
    }
    return words_string;
}
