/***
* @NApiVersion 2.x
* @NScriptType ClientScript
***/
define([],
    function(){

        function fieldChanged(context){
            var emp = context.currentRecord;

            if (context.fieldId === 'phone') {
                var fax = emp.getValue('fax');

                if(!fax) {
                    var phone = emp.getValue({
                        fieldId: 'phone'
                    });

                    emp.setValue({
                        fieldId: 'fax',
                        value: phone
                    });
                }
            }
        }

        function validateField(context){

        }

        function saveRecord(context){

        }

        return{
            fieldChanged: fieldChanged,
            validateField: validateField,
            saveRecord: saveRecord
        };
    
});