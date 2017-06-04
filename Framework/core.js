var charSheet;
var sceneBox;
var actionBox;

//TODO: localStorage wrapper
//TODO: step cycle
//TODO: global event stream
//TODO: location action wrapper
//TODO: location description wrapper

localStorage.Position = "TestDungeon";

var position = {
	
	get: function() {
		return localStorage.LilithTree.Position;
	}

}

function mainInit()
{
	charSheet = document.getElementById("charsheet");
	sceneBox = document.getElementById("scenebox");
	actionBox = document.getElementById("actionbox");
	
	charSheet.innerHTML = "Test";
	
	callFunction(localStorage.Position);
}

function callFunction(functionName)
{
	//window[functionName](t.parentNode.id);
	window[functionName]();
}