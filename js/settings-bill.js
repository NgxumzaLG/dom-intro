// get a reference to the sms or call radio buttons
    var billItemTypeWithSettingsElement = document.querySelector(".billItemTypeWithSettings");

// get refences to all the settings fields
    var callCostSettingsElement = document.querySelector(".callCostSetting");
    var smsCostSettingsElement = document.querySelector(".smsCostSetting");
    var warningLevelSettingElement = document.querySelector(".warningLevelSetting");
    var criticalLevelSettingElement = document.querySelector(".criticalLevelSetting");
    var callTotalSettingsElement = document.querySelector(".callTotalSettings");
    var smsTotalSettingsElement = document.querySelector(".smsTotalSettings");
    var totalSettingsElement = document.querySelector(".totalSettings");


//get a reference to the add button
    var addTotalSettingsElement = document.querySelector(".addTotalSettings");

//get a reference to the 'Update settings' button
    var updateSettingsElement = document.querySelector(".updateSettings");

// create a variables that will keep track of all the settings
    var callSettingTotal = 0;
    var smsSettingTotal = 0;
    var warningLevelTotal = 0;
    var criticalLevelTotal = 0;

// create a variables that will keep track of all three totals.
    var callTotalLevel = 0;
    var smsTotalLevel = 0;
    var totalLevel = 0;


//add an event listener for when the 'Update settings' button is pressed
    updateSettingsElement.addEventListener('click', updateSettingsData);

//add an event listener for when the add button is pressed
    addTotalSettingsElement.addEventListener('click', settingsBill);

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

    function updateSettingsData() {
        if (callCostSettingsElement.value && smsCostSettingsElement.value) {

            callSettingTotal = Number(callCostSettingsElement.value);
            smsSettingTotal = Number(smsCostSettingsElement.value);
            warningLevelTotal = warningLevelSettingElement.value;
            criticalLevelTotal = criticalLevelSettingElement.value;
            backColor();

        }


    }

    function settingsBill() {

        var checkedRadioBtnSettings = document.querySelector("input[name='billItemTypeWithSettings']:checked");
        if (checkedRadioBtnSettings){
            if (totalLevel < criticalLevelTotal) {
                var billItemTypeSettings = checkedRadioBtnSettings.value;
                if (billItemTypeSettings === "call") {
                    callTotalLevel += callSettingTotal;
        
                } else if (billItemTypeSettings === "sms"){
                    smsTotalLevel += smsSettingTotal;
        
                }
            }
        }

        if (callCostSettingsElement.value && smsCostSettingsElement.value) {
            totalLevel = callTotalLevel + smsTotalLevel;

            callTotalSettingsElement.innerHTML = callTotalLevel.toFixed(2);
            smsTotalSettingsElement.innerHTML = smsTotalLevel.toFixed(2);
            totalSettingsElement.innerHTML = totalLevel.toFixed(2);
            backColor();

        }
    }

     function backColor () {
        if (totalLevel >= criticalLevelTotal) {
            totalSettingsElement.classList.remove("warning");
            totalSettingsElement.classList.add("danger");

        }
        else if (totalLevel >= warningLevelTotal) {
            totalSettingsElement.classList.remove("danger");
            totalSettingsElement.classList.add("warning");

        } else {
            totalSettingsElement.classList.remove("danger");
            totalSettingsElement.classList.remove("warning");
            
        }
    }