/** 
* @NApiVersion 2.x
* @NScriptType ClientScript
*/
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

            var emp = context.currentRecord;
            
            if (context.fieldId === 'comments') {
                var empComment = emp.getValue('comments');

                if(empComment == 'null')
                {
                    alert('Not a valid Emp. comment.');
                    return false;
                }

                return true;
            }
        }

        function saveRecord(context){
            var emp = context.currentRecord;

            var empComment = emp.getValue('comments');

            if(empComment == 'null')
            {
                alert('Not a valid Emp. comment.');
                return false;
            }

            return true;
        }

        return{
            fieldChanged: fieldChanged,
            validateField: validateField,
            saveRecord: saveRecord
        };
    
});