var charSheet;
var sceneBox;
var actionBox;

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
	}
	
	addMinutes(minutesToAdd) {
		var pointInTime = this.date;
		var totalMilliseconds = minutesToAdd * 60000;
		pointInTime.setTime(pointInTime.getTime() + totalMilliseconds);
		this.date = pointInTime;
	}

}


function mainInit()
{
	charSheet = document.getElementById("charsheet");
	sceneBox = document.getElementById("scenebox");
	actionBox = document.getElementById("actionbox");
	
	charSheet.innerHTML = "Test";
	
	var initCurrentPosition = core.pos;
	callFunction(initCurrentPosition);
}

function callFunction(functionName)
{
	window[functionName]();
}