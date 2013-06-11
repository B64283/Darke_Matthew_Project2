//alert("javaScript works");
// Matthew Darke
//VFW 1306 Project2

// waits untill DOM is ready
window.addEventListener("DOMContentLoaded", function() {
//shortcut get ele by id
    
    function $(x) {
	    var ele = document.getElementById(x);
	    return ele;
    }
    //var itemList = [""]
    //display and clear data links and submit
    function getselectedCheckboxValue(){
	    if ($("Clothes").Checked){
	    	Clothesvalue = $("Clothes").value;
	    } else {
	    	Clothesvalue = "None"
	    }
	    if ($("Medication").Checked){
	    	Medicationvalue = $("Medication").value;
	    } else {
	    	Medicationvalue = "None"
	    }	
	    if ($("Toileteries").Checked){
	    	Toileteriesvalue = $("Toileteries").value;
	    } else {
	    	Toileteriesvalue = "None"			
		}
	    
    }
   
    
    function storeData() {
	    var id                = Math.floor(Math.random()*100000002);
	    //gets all form field values and store in object.
	    //object properties contain array with the form labels and input values.
	    getselectedCheckboxValue()	    
	    var item              = {}; 
	        item.name        =[ "itemName", $( "Iname" ).value ];
	        item.checklist     =["checkList", checkListValue ];	        
	        item.Budget       =["budgetscale" , $("budgetplan").value];
	        item.date          =["date", $("startdate").value ];	        
	        item.climate       =["climateType", climateValue ];
	        item.extraNotes    =["thoughts", $("notes").value ];
	   //save data in local storage and use stringify to convert data into string
	   localStorage.setItem(id, JSON.stringify(item));
	   alert("Checklist Complete!");
	       
    }
    
    var displayData = $("Display");
    displayData.addEventListener("click", getData);
    var clearData = $("clear");
    clearData.addEventListener("click", clearLocal);
    var complete = $("submit");
    save.addEventListener("click", saveData);



} );




