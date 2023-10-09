let elements = [];
let n = 0;
const WIDTH = 300;


function a() {
    if (n == 0)
    {
        let side = parseInt(Math.random()*4);
        let x, y, vx, vy, dx, dy;
        if (side == 0) {y = window.scrollY; dy = window.innerHeight;}
        else if (side == 1) {x = window.innerWidth; dx = -window.innerWidth;}
        else if (side == 2) {y = window.innerHeight+window.scrollY; dy = -window.innerHeight;}
        else if (side == 3) {x = 0; dx = window.innerWidth;}
        if (side == 0 || side == 2) {x = parseInt(Math.random()*window.innerWidth); dx = parseInt(Math.random()*window.innerWidth)-x;}
        if (side == 1 || side == 3) {y = parseInt(Math.random()*window.innerHeight)+window.scrollY; dy = parseInt(Math.random()*window.innerHeight)-y;}
        img = document.createElement("img");
        img.src = "./assets/img/chef_dark.jpg";
        img.style.width = `${WIDTH}px`;
        img.style.position = "absolute";
        document.getElementsByTagName("body")[0].append(img);
        elements.push([img, x, y, dx/30, dy/30, Math.random()*360, Math.random()*90-45]);
    }
	let i = 0;
	while (i < elements.length) {
		elements[i][1] += elements[i][3];
		elements[i][2] += elements[i][4];
		if (elements[i][1] < -WIDTH || elements[i][1] > window.innerWidth+WIDTH || elements[i][2] < -WIDTH+window.scrollY || elements[i][2] > window.innerHeight+WIDTH+window.scrollY) {
            elements[i][0].remove();
            elements.splice(i, 1);
        }
		else {
			elements[i][0].style.left = elements[i][1].toString()+"px";
			elements[i][0].style.top = elements[i][2].toString()+"px";
            elements[i][5] = (elements[i][5]+elements[i][6])%360;
            elements[i][0].style.transform = `rotate(${elements[i][5]}deg)`;
            elements[i][0].style.filter = `sepia(100%) saturate(500%) hue-rotate(${Math.random()*360}deg)`;
			i++;
		}
	}
	n = (n+1)%10;
	setTimeout(a, 50);
}


document.getElementById("secret").addEventListener("click", a);