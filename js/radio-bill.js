// get a reference to the sms or call radio buttons
    var billItemTypeRadioElement = document.querySelector(".billItemTypeRadio");
    var callTotalTwoElement = document.querySelector(".callTotalTwo");
    var smsTotalTwoElement = document.querySelector(".smsTotalTwo");
    var totalTwoElement = document.querySelector(".totalTwo");

//get a reference to the add button
    var radioBillAddBtnElement = document.querySelector(".radioBillAddBtn");

//create a variable that will keep track of the total bill
    var callTotal2 = 0;
    var smsTotal2 = 0;

//add an event listener for when the add button is pressed
  radioBillAddBtnElement.addEventListener('click', radioBillTotal)

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

   
        // billItemType will be 'call' or 'sms'
    

    function radioBillTotal (){

        var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
        if (checkedRadioBtn){
            var billItemType = checkedRadioBtn.value

        }

        if (billItemType === "call") {
            callTotal2 += 2.75;

        } else if (billItemType === "sms"){
            smsTotal2 += 0.75;

        }

        var totalCost2 = callTotal2 + smsTotal2

        callTotalTwoElement.innerHTML = callTotal2.toFixed(2);
        smsTotalTwoElement.innerHTML = smsTotal2.toFixed(2);
        totalTwoElement.innerHTML = totalCost2.toFixed(2);
        
        if (totalCost2 >= 50){
            totalTwoElement.classList.add("danger");
        }
        else if (totalCost2 >= 30){
            totalTwoElement.classList.add("warning");
        }
    }

   

