var charBox;
var sceneBox;
var actionBox;

var arrScene = [];

//TODO: step cycle
//TODO: global event stream
//TODO: location action wrapper
//TODO: location description wrapper
//TODO: Missed event wrapper - call module functions for missed events

//localStorage.Position = "TestDungeon";

var core = {
	
	set pos(newposition){
		localStorage.Position = newposition;
	},
	
	get pos(){
		return localStorage.Position;
	},
	
	set date(currentDate) {
		localStorage.dateYear = currentDate.getFullYear();
		localStorage.dateMonth = currentDate.getMonth();
		localStorage.dateDay = currentDate.getDate();
		localStorage.dateHour = currentDate.gethours();
		localStorage.dateMinute = currentDate.getMinutes();
		localStorage.dateSecond = currentDate.getSeconds();
	},
	
	get date() {
		if (localStorate.dateYear == null)
		{
			var returnDate = new Date(2010,1,1);
			return returnDate;
		} else {
			var returnDate = new Date(localStorage.dateYear,localStorage.dateMonth,localStorage.dateDay,localStorage.dateHour,localStorage.dateMinute,localStorage.dateSecond);
			return returnDate;
		}
	},
	
	addMinutes(minutesToAdd) {
		var pointInTime = this.date;
		var totalMilliseconds = minutesToAdd * 60000;
		pointInTime.setTime(pointInTime.getTime() + totalMilliseconds);
		this.date = pointInTime;
	},

	callFunction(functionName) {
		window[functionName]();
	}
	
}

 
var mnscn = {
	
	buildCharBox() {
		//TODO: build char sheet display
	},
	
	
	buildSceneBox() {  
		
		while (sceneBox.firstChild) {
			sceneBox.removeChild(sceneBox.firstChild);
		}
		
		var arrayLength = arrScene.length;
		for (var i = 0; i < arrayLength; i++) {
			var newNode = document.createElement('div');      
			newNode.innerHTML = arrScene[i];
			sceneBox.appendChild( newNode )
		}
		
		arrScene.length = 0;
	},
	
	
	buildActionBox() {
		//TODO: build action wrapper
		//TODO: generic action wrapper
	}
	
	
}


function mainInit()
{
	charBox = document.getElementById("charsheet");
	sceneBox = document.getElementById("scenebox");
	actionBox = document.getElementById("actionbox");
	
	arrScene.length = 0;
	
	var initCurrentPosition = core.pos;
	core.callFunction(initCurrentPosition);
	
	mnscn.buildSceneBox();
}


function startScreen()
{
	arrScene.push("You are in a maze of twisty passages, all alike.")
	
}