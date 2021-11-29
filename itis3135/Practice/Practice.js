https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event

var $ = function(id) {
	return document.getElementById(id);
};

window.onload = function() {

	
	//function myFunction(){

	/*document.getElementById('espresso').addEventListener('click', function(e){
		var img1 = document.createElement('img1');
		img1.setAttribute('src', 'images/espresso.jpg');
		e.target.appendChild(img1);
	})*/

	//const espresso = document.querySelector('espresso');

	
	document.addEventListener('click', e => {

	var total = 0;
	var order = document.getElementById('order');
	
	
	
	//add onclick event handler for each image
	if(e.target.matches('espresso'))
	{
		order.innerHTML("<p>$1.95 - Espresso - Delicious espresso. Wanna try it?</p>");
		total += 1.95;
	}
	else if(e.target.matches('cappuccino'))
	{
		window.print("$3.45 - Cappuccino - Delicious cappuccino!");
		total += 3.45;
	}

	document.getElementById('total').innerHTML = "Total: " + total;
	

	// for click event add item to order and update total

	// display order and total

})
		
}; // end onload