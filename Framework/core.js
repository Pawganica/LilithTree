var charSheet;
var sceneBox;
var actionBox;

//TODO: localStorage wrapper
//TODO: time tracking
//TODO: step cycle
//TODO: global event stream
//TODO: location action wrapper
//TODO: location description wrapper
//TODO: Missed event wrapper - call module functions for missed events

//localStorage.Position = "TestDungeon";

var position = {
	
	Get: function() {
		return localStorage.Position;
	},
	
	Set: function(newPosition) {
		localStorage.Position = newPosition;
	}
	

}

function mainInit()
{
	charSheet = document.getElementById("charsheet");
	sceneBox = document.getElementById("scenebox");
	actionBox = document.getElementById("actionbox");
	
	charSheet.innerHTML = "Test";
	
	var initCurrentPosition = position.Get();
	callFunction(initCurrentPosition);
}

function callFunction(functionName)
{
	window[functionName]();
}
