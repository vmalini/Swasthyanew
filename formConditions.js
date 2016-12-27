Bahmni.ConceptSet.FormConditions.rules = {
    'Blood Pressure' : function (formName, formFieldValues) {
        var bloodPressure = formFieldValues['Blood Pressure'];
        var regex = /\d/g;
        if (regex.test(bloodPressure)) {
            return {
                enable: ["Posture"]
            }
        } else {
            return {
                disable: ["Posture"]
            }
        }
    },
    'Diastolic Data' : function (formName, formFieldValues) {
        var diastolic = formFieldValues['Diastolic Data'];
        if (diastolic) {
            return {
                enable: ["Posture"]
            }
        } else {
            return {}
        }
    },

'Swasthya Employee' : function (formName, formFieldValues) {
        var employee = formFieldValues['Swasthya Employee'];
        if (employee == "No") {
            return {
	enable: ["REGISTRATION FEES"]}
            }
        else {
            return {
	disable: ["REGISTRATION FEES"]
}
        }
    },

'Returning Patient With ID' : function (formName, formFieldValues) {
        var retpatient = formFieldValues['Returning Patient With ID'];
        if (retpatient == "No") {
            return {
        enable: ["FINE"]}
            }
        else {
            return {
        disable: ["FINE"]
}
        }
    },

'From Tribal Village' : function (formName, formFieldValues) {
        var tribal = formFieldValues['From Tribal Village'];
        if (tribal == "No") {
            return {
        enable: ["REGISTRATION FEES"]}
            }
        else {
            return {
        disable: ["REGISTRATION FEES"]
}
        }
    },


'Systolic Data' : function (formName, formFieldValues) {
        var systolic = formFieldValues['Systolic Data'];
        if (systolic) {
            return {
                enable: ["Posture"]
            }
        } else {}
    }
};
