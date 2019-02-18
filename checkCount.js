
function countChecks(checkArray, checkBoxNum, foodCheckCount){
	var count = 0;
	totalChecks = 25;
	randomArray = [1, 2, 3, 4, 5];

	if(checkBoxNum == checkArray[4])
		count = 1;
	else if(checkBoxNum == checkArray[3])
		count = 2;
	else if(checkBoxNum == checkArray[2])
		count = 3;
	else if(checkBoxNum == checkArray[1])
		count = 4;
	else
		count = 5;
	if(checkBoxNum.checked == true)
	{	
		for(let i = 0; i < checkArray.length - count; i++)
		{
			checkArray[i].checked = true;
		}
	}
	else if(checkBoxNum.checked == false)
	{
		for(let i = 4; i > checkArray.length - count; i--)
		{
			checkArray[i].checked = false;
		}
	}
	for(let i = 0; i < checkArray.length; i++)
	{		
		if(checkArray[i].checked == true){
			foodCheckCount += 1;
		}
	}
	if(checkArray == tacoCheckArray)
	{
		totalTacoChecks = foodCheckCount;	
	}
	if(checkArray == panCheckArray)
	{
		totalPanChecks = foodCheckCount;
	}
	if(checkArray == chipCheckArray)
	{
		totalChipChecks = foodCheckCount;		
	}
	if(checkArray == macCheckArray)
	{
		totalMacChecks = foodCheckCount;
	}
	if(checkArray == wendCheckArray)
	{
		totalWendChecks = foodCheckCount;
	}
	totalChecks -= (totalTacoChecks + totalPanChecks + totalChipChecks + totalMacChecks + totalWendChecks);
	document.getElementById("checkNum").innerHTML = "Points Left: " + totalChecks;
	if(totalChecks < 25)
	{
		randomArray = [];
	}
	else
	{
		randomArray = [1, 2, 3, 4, 5];
	}
	for(var i = 0; i < totalTacoChecks; i++)
		{
			randomArray.push(1);
		}
	for(var i = 0; i < totalPanChecks; i++)
		{
			randomArray.push(2);
		}
	for(var i = 0; i < totalChipChecks; i++)
		{
			randomArray.push(3);			
		}
	for(var i = 0; i < totalMacChecks; i++)
		{
			randomArray.push(4);			
		}
	for(var i = 0; i < totalWendChecks; i++)
		{
			randomArray.push(5);			
		}
}