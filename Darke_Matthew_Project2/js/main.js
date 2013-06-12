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
   function makingOptions(){
	   var formTag = document.getElementsByTagName("form"),
	   	selectli = $("climate"),
	   	makeSelect = document.createElement("select");
	   	makeSelect.setAttribute("id", "climate");
	 for (var i=0,  j=climate.length; i<j; i++){
	 	var makeOption = document.createElement("option");
	 	var optText = climate[i]; 
	 	makeOption.setAttribute("value", optText);
	 	makeOption.innerHTML = optText;
	 	makeSelect.appendChild(makeOption);
	 }
	selectli.appendChild(makeSelect);   	
}
   var climate = ["Hot", "Raining", "Cold"];
   makingOptions();
   
   
   
   
   
   
   
    //var itemList = [""]
    //display and clear data links and submit
    function getselectedCheckboxValue(){
	    var Checkbox = document.getElementById("Clothes", "Medication", "Toiletries");
	    for (var i=0; i<Checkbox.length; i++){
		    if (Checkbox[i].checked ){
		        checkedValue = Checkbox[i].value;
			    
		  }
	   }	    
   }
    function storeData() {
	    var id           = Math.floor(Math.random()*100000002);
	    //gets all form field values and store in object.
	    //object properties contain array with the form labels and input values.
	    getselectedCheckboxValue()	    
	    var item			  = {}; 
	        item.name        =[ "formItems", $( "vacationForm" ).value ];
	        item.checkList     =["Checkbox", $("Clothes").value ];	        
	        item.Budget       =["budgetscale" , $("budgetplan").value];
	        item.date          =["date", $("startdate").value ];	        
	        item.climate       =["climateType", $("climate").value ];
	        item.extraNotes    =["thoughts", $("notes").value ];
	   //save data in local storage and use stringify to convert data into string
	   localStorage.setItem(id, JSON.stringify(item));
	   alert("Checklist Complete!");
	       
    }
    function getData (){
    	var createDiv = document.createElement("div");
    	createDiv.setAttribute("id", "items");
    	var makeList = document.createElement("ul");
    	createDiv.appendChild(makeList);
    	document.body.appendChild(createDiv);
    	for(var i =0, len=localStorage.length; i<len; i++){
	    	var makeli = document.createElement("li");
	    	makeList.appendChild(makeli);
	    	var key = localStorage.key(i);
	    	var value = localStorage.getItem(key);
	    	//converts string from local storage value back to object using JSON.parse()
	    	var str = JSON.parse(value);
	    	var createSublist = document.createElement("ul");
	    	makeli.appendChild("createSublist");
	    	for (var n in str){
		    	var createSublist = document.createElement("li");
		    	createSublist.appendChild("createSublist");
		    	var subText = obj[n][0]+" "+obj[n][1];
		    	makeSublist.innerHTML = subText; 
		   } 
	    }
    }
    function clearLocal(){
	    if (localStorage.length === 0){
		    alert("No Data To Clear.");
	    } else {
	        localStorage.clear();
	        alert("All Vacations Deleted.");
	        window.location.reload();
	        return false;
	   }
 }
    var displayData = $("Display");
    displayData.addEventListener("click", getData);
    var clearData = $("clear");
    clearData.addEventListener("click", clearLocal);
    var completeChecklist = $("submit");
    submit.addEventListener("click", storeData);



} );




