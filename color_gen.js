function grid(){
	var x = "", i, y, z, equal1, equal2, equals1;
	var query = window.location.search; // graps url text
	for(y = 0; y < query.length; y++) {
		// looks at first index after '=''
		if(query.charAt(y) == '=') {
			equal1 = y+1;
		}
		// looks at first index after '&
		if(query.charAt(y) == "&") {
			equal2 = y;
			break;
		}
	}
	
	// returns the text between the '=' and '&' in the url and converts to int
	var height = parseInt(query.substring(equal1, equal2)); // number value in url
	
	// returns the last text after the last '=' in the url text anc converts to int
	var lastPart = query.substring(equal2, query.length);
	for(z = 0; z < lastPart.length; z++) {
		if(lastPart.charAt(z) == '=') {
			equals1 = z+1; // start at index after final '=' 
		}
	
	}
	var width = parseInt(lastPart.substring(equals1, lastPart.length)); // 2nd number value in url
	
	// the var q is used to determine how much of the top margin should be cut so that there is no margin between rows
	// the var rowCt is used for the same purpose except it the q changes based on the row so rowCt is there to determine which row the box is on
	var q = 0, rowCt = 0;
	for (i = 1; i <= (height * width); i++) {
		var randCol = Math.floor(Math.random() * 255); // function to retrieve the any random number between 0 and 255
		var randCol1 = Math.floor(Math.random() * 255);
		var randCol2 = Math.floor(Math.random() * 255);
		// CSS for each individual box that is created 
		x = x + "<div style='height:50px;width:50px;position:relative;top:" + rowCt*q + "px;display:inline-block;background-color:rgb(" + randCol + ", " + randCol1 + ", " + randCol2 + ")'></div>";
		// conditional statement used to detrmine how much marginal space should be cut so that there is no space between the boxes
		if(i % width == 0) {
			rowCt++;
			x = x + "<br>";
			q = -4;
		}
	}
	
	// used to put back this JS code back into HTML
	document.getElementById("blockID").innerHTML = x;
}

function myFunction() {
    var inpObj1 = document.getElementById("h"); // retrieves the height input
    var inpObj2 = document.getElementById("w"); // retrieves the width input
    // checks the validity of the height
    if (inpObj1.checkValidity() == false) {
        document.getElementById("blockID").innerHTML = "Must enter a number."
    } else {
        document.getElementById("blockID").innerHTML = "Input OK";
    }
    // checks the validity of the width 
    if(inpObj2.checkValidity() == false) {
    	document.getElementById("blockID").innerHTML = "Must enter a number."
    } else {
    	document.getElementById("blockID").innerHTML = "Input OK"
    }
} 

