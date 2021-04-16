//get a reference to the calculate button
var calculateBtnElement = document.querySelector(".calculateBtn");

//get a reference to the billTotal element
    var billTotalElement = document.querySelector(".billTotal");

//get a reference to the billString
    var billStringElement = document.querySelector(".billString");

//create the function that will be called when the calculate button is pressed
    function calculateBtnClicked(){
//  * this function should read the string value entered - split it on a comma.
    var billString = billStringElement.value;
    var billItems = billString.split(",");
    var billTotal = 0;
//  * loop over all the entries in the the resulting list
    for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
        if (billItem === "call"){
            billTotal += 2.75;
        }
        else if (billItem === "sms"){
            billTotal += 0.75;
        }
    }
//  * check if it is a call or an sms and add the right amount to the overall total
    var roundedBillTotal = billTotal.toFixed(2);                                     
        billTotalElement.innerHTML = roundedBillTotal;

//  * once done looping over all the entries - display the total onto the screen in the billTotal element
    if (billTotal >= 30) {
        billTotalElement.classList.add("danger");
        billTotalElement.classList.remove("warning");
    }
    else if (billTotal >= 20) {
        billTotalElement.classList.add("warning");
        billTotalElement.classList.remove("danger");
    }
    else{
        billTotalElement.classList.remove("warning");
        billTotalElement.classList.remove('danger');
    }
    }
// link the function to a click event on the calculate button
    calculateBtnElement.addEventListener('click', calculateBtnClicked);
