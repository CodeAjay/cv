
var n1 = Math.floor(Math.random()*6)+1;
var player1 = "images/" + n1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", player1);

var n2=Math.floor(Math.random()*6)+1;
var player2="images/" +n2+ ".png";

document.querySelectorAll("img")[1].setAttribute("src", player2);

if(n1>n2){
	document.querySelector("h1").innerHTML="Player 1 Wins <img src='images/flag.png' width='100px' height='100px'>";
}
else if(n2>n1){
	document.querySelector("h1").innerHTML=" <img src='images/flag.png' width='100px' height='100px'> Player 2 Wins ";
}
else if(n2==n1){
	document.querySelector("h1").innerHTML=" It's a draw ";
}