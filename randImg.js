function randomImage(val){
console.log(randomArray);
	var image = document.getElementById('myImage');
	var elem = document.getElementById("myBar");   
	var width = 1;
	var id = setInterval(frame, 10);
	image.src = "https://upload.wikimedia.org/wikipedia/commons/5/59/Empty.png";
	function frame() {
		if (width >= 100) {
			clearInterval(id);
			rollButton.disabled = false;
			rollButton.style.backgroundColor = "#09bc38";
			switch(val) {
				case 1:
					image.src = "https://cdn.freebiesupply.com/logos/large/2x/taco-bell-5-logo-png-transparent.png";
					document.getElementById("foodHeader").innerHTML = "Tight!";
					break;

				case 2:
					image.src = "https://cdn.freebiesupply.com/logos/large/2x/panera-bread-logo-png-transparent.png";
					document.getElementById("foodHeader").innerHTML = "Light!";
					break;

				case 3:
					image.src = "https://cdn.freebiesupply.com/logos/large/2x/chipotle-mexican-grill-logo-png-transparent.png";
					document.getElementById("foodHeader").innerHTML = "Right!";
					break;
				case 4:
					image.src = "https://seeklogo.net/wp-content/uploads/2011/04/old-mcdonalds-vector-logo.png";
					document.getElementById("foodHeader").innerHTML = "Might!";
					break;
				case 5:
					image.src = "http://www.stickpng.com/assets/images/58429d58a6515b1e0ad75ae8.png";
					document.getElementById("foodHeader").innerHTML = "Wight!";
					break;
			}
		} else {
			width++; 
			elem.style.width = width + '%'; 
			rollButton.disabled = true;
			rollButton.style.backgroundColor = "#277730";
			document.getElementById("foodHeader").innerHTML = "Rolling!";
		}
		}
}