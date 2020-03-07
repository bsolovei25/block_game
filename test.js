

var arrbuttons = [];
var tdclick = document.getElementsByTagName("td");
var counter =1;
var body = document.getElementsByTagName("body")[0];
var span = document.createElement("span");
var iter = 70;
var text = document.createTextNode(`Time left : ${iter}`);
span.appendChild(text);
body.appendChild(span);



for(let i =0;i < tdclick.length;i++){
	arrbuttons.push(tdclick[i]);
	arrbuttons[i].addEventListener('click', function(i){
		if (parseInt(i.target.innerText) == counter){
			i.target.style.backgroundColor = "red";
			counter++;
		}
		if(counter == 25){
			body.children[2].innerHTML = "You win!!!"
		}
	});

}

window.onload = function(){
	var startInterval = setInterval(function(){
		if (iter == 0){
			body.children[2].innerHTML = "You lost";
			clearInterval(startInterval);
		}
		if (body.children[2].innerHTML == "You win!!!"){
			clearInterval(startInterval);
		}
		else
			body.children[2].innerHTML = 'Time left : '+(--iter);
	},1000);
}