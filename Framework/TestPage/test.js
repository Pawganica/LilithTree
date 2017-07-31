


function mainInit()
{
	//charSheet = document.getElementById("test");
	
	//var date = new Date(2000,1,1)
	//var testvar = JSON.stringify(date)
	//charSheet.innerHTML = testvar;
	//charSheet.innerHTML = date.getDate();
	//charSheet.innerHTML = date.getMonth();
	
	//charSheet.innerHTML = testvar;
	
	outSheet = document.getElementById("test2");
	
	for(var i = 0; i < localStorage.length; i++) {
		outSheet.innerText += localStorage.key(i).substring(0,3);
	}

}

function clickMeNow()
{
	charSheet = document.getElementById("test");
	charSheet.innerHTML = "Clicked";
	
}