


function mainInit()
{
	charSheet = document.getElementById("test");
	
	var date = new Date(2000,1,1)
	
	var testvar = JSON.stringify(date)
	
	charSheet.innerHTML = testvar;
	
	//charSheet.innerHTML = date.getDate();
	
	charSheet.innerHTML = date.getMonth();
	

}