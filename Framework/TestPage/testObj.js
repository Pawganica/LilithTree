
function mainInit() {
	var TestDiv = document.getElementById('testdiv');

	TestDiv.innerHTML = "Loaded";
	
	
	var testObject = {val1:"One",val2:"two"};
	var testIndex = "val1";
	
	TestDiv.innerHTML = testObject[testIndex]
}
