var btn=document.createElement("button");
btn.innerHTML="Click Me";
btn.style.position="absolute"
btn.setAttribute("onclick","createDiv()");
document.body.appendChild(btn)

function createDiv() {
	var div=document.createElement("div");
	div.setAttribute("class","main");
	document.body.appendChild(div);
}