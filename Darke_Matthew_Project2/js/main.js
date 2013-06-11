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
    
    function storeData(){
	   localStorage.setItem("test" , "hello"); 
    }
    
    var displayData = $("Display");
    displayData.addEventListener("click", getData);
    var clearData = $("clear");
    clearData.addEventListener("click", clearLocal);
    var complete = $("submit");
    save.addEventListener("click", saveData);



} );




