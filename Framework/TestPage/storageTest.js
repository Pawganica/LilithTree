var storeWrap  =  {
	
	get a() {
		if (localStorage.Tester == null)
		{return "Null";}
		else
		{return localStorage.Tester;}
	},
	set a(x) {
		localStorage.Tester = x;
	}
	
	
	
	
}


function mainInit()
{
	charSheet = document.getElementById("test");

	if (localStorage.Tester == null)
	{
		localStorage.Tester = "";
	}
	
	//storeWrap.a = "Test";
	//charSheet.innerHTML = storeWrap.a;
	

	

}