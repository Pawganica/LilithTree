var charBox;
var sceneBox;
var actionBox;

var arrScene = [];
var arrAction = [];
var arrGAction = [];

//TODO: step cycle
//TODO: global event stream
//TODO: generic action wrapper
//TODO: Missed event wrapper - call module functions for missed events 

var core = {
	
	set pos(newposition){
		localStorage.lt_Position = newposition;
	},
	
	get pos(){
		return localStorage.lt_Position;
	},
	
	set date(currentDate) {
		localStorage.lt_dateYear = currentDate.getFullYear();
		localStorage.lt_dateMonth = currentDate.getMonth();
		localStorage.lt_dateDay = currentDate.getDate();
		localStorage.lt_dateHour = currentDate.gethours();
		localStorage.lt_dateMinute = currentDate.getMinutes();
		localStorage.lt_dateSecond = currentDate.getSeconds();
	},
	
	get date() {
		if (localStorate.lt_dateYear == null)
		{
			var returnDate = new Date(2010,1,1);
			return returnDate;
		} else {
			var returnDate = new Date(localStorage.lt_dateYear,localStorage.lt_dateMonth,localStorage.lt_dateDay,localStorage.lt_dateHour,localStorage.lt_dateMinute,localStorage.lt_dateSecond);
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
	},

	addAction(description, sfunction) {
		
		var pushString = "<DIV class='actionLink' onclick='" + sfunction + "();'>" + description + "</DIV>";
		arrAction.push(pushString);
		
	},
	
	processGlobalActions() {
		var arrayLength = arrGAction.length;
		for (var i = 0; i < arrayLength; i++) {    
			callFunction(arrGAction[i]);
		}
	},
	
	resetAll() {
		var flag = 1;
		var point = 0;
		while(flag == 1) {
			flag = 0;
			for(var i = 0; i < localStorage.length; i++) {
				if (localStorage.key(i).substring(0,3) == "lt_") {
					flag = 1;
					point = localStorage.key(i);
				}
			}
			if (flag == 1)
			{
				localStorage.removeItem(point);
			}
		}
		
		mainInit()
	}

}


var mnscn = {
	
	buildCharBox() {
		//TODO: build char sheet display
		while (charBox.firstChild) {
			charBox.removeChild(charBox.firstChild);
		}
		
		
	},
	
	buildSceneBox() {  
		
		while (sceneBox.firstChild) {
			sceneBox.removeChild(sceneBox.firstChild);
		}
		
		var arrayLength = arrScene.length;
		for (var i = 0; i < arrayLength; i++) {
			var newNode = document.createElement('div');      
			newNode.innerHTML = arrScene[i];
			sceneBox.appendChild( newNode );
		}
		
		arrScene.length = 0;
	},
	
	buildActionBox() {
		
		while (actionBox.firstChild) {
			actionBox.removeChild(actionBox.firstChild);
		}
		
		var arrayLength = arrAction.length;
		for (var i = 0; i < arrayLength; i++) {
			var newNode = document.createElement('div');      
			newNode.innerHTML = arrAction[i];
			actionBox.appendChild( newNode );
		}
		
		arrAction.length = 0;
		
	},
	
	turnOn() {
		
		core.processGlobalActions();
		this.buildCharBox();
		this.buildSceneBox();
		this.buildActionBox();
		
	}
	
}


function mainInit()
{
	charBox = document.getElementById("charsheet");
	sceneBox = document.getElementById("scenebox");
	actionBox = document.getElementById("actionbox");
	
	arrScene.length = 0;
	arrAction.length = 0;
	
	var initCurrentPosition = core.pos;
	if (initCurrentPosition == null) {
		initCurrentPosition = "startScreen";
	}
	core.callFunction(initCurrentPosition);
}

//Start sequence
function startScreen()
{
	core.pos = "startScreen";
	arrScene.push("<BR />");
	arrScene.push("<BR />");
	arrScene.push("<center>Lilith Tree.</center>");
	arrScene.push("<BR />");
	
	arrScene.push("<BR />");
	arrScene.push("<BR />");
	core.addAction("Start new game.","grueScreen");
	mnscn.turnOn();
}


function grueScreen()
{
	core.pos = "grueScreen";
	arrScene.push("<BR />");
	arrScene.push("<BR />");
	arrScene.push("You hear a female voice. It's soothing, gentle, almost motherly.");
	arrScene.push("<BR />");
	arrScene.push("<BR />");
	arrScene.push('"Many say that the full moon is magical."');
	arrScene.push("<BR />");
	arrScene.push('"Others say that the <i>new</i> moon is the most magical. Full of promise, full of potential."');
	arrScene.push("<BR />");
	arrScene.push("<BR />");
	
	core.addAction("Wake up.","grueScreen2");
	mnscn.turnOn();
}


function grueScreen2()
{
	core.pos = "grueScreen2";
	arrScene.push("<BR />");
	arrScene.push("<BR />");
	arrScene.push('"Those who <i>know</i> what they are talking about know that it is the half moon that is the most magical, the most powerful."');
	arrScene.push("<BR />");
	arrScene.push('"It is the point between that is the strongest. When something is neither one nor the other, when its place in reality is at its weakest."');
	arrScene.push("<BR />");
	arrScene.push("<BR />");
	
	core.addAction("Wake UP.","grueScreen3");
	mnscn.turnOn();
}


function grueScreen3()
{
	core.pos = "grueScreen3";
	arrScene.push("<BR />");
	arrScene.push("<BR />");
	arrScene.push("The voice continues. It sounds closer now. And then you can feel a presence... no, you can feel <i>her</i>.");
	arrScene.push(" You can <i>feel</i> her, a warmth that closes around you.");
	arrScene.push("<BR />");
	arrScene.push('"That is when magic is the strongest, when there is no tension in something, when the leash hangs slack... that is when you can <i>Pull</i> "');
	arrScene.push("<BR />");
	arrScene.push("<BR />");
	arrScene.push("An icy chill ripples down your spine, sudden, as shocking as an ice bath. Terror wells from nowhere, beyond mere fear, primal and horrific.");
	
	core.addAction("WAKE UP!.","awakenScreen");
	mnscn.turnOn();
}
























