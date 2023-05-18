// nav-bar

var nav1 = document.createElement("nav");
nav1.className = "navbar navbar-expand-md navbar-dark fixed-top py-2 px-4 bg-light";
nav1.id = "nav1";
document.body.appendChild(nav1);
const myImage = new Image(50, 50); //width , height
myImage.src = 'medium.png';
nav1.appendChild(myImage);
document.getElementById("nav1").style.borderBottom = "1px solid black";

//nav-bar-end

var mb1 = document.createElement("div");
mb1.className = "position-relative p-2 p-md-5 text-center";
mb1.id = "mb1";
document.body.appendChild(mb1);
var b1 = document.createElement("div");
b1.className = " p-lg-5 mx-auto my-2";
mb1.appendChild(b1);
b1.id = "b1";
var bh1 = document.createElement("h1");
bh1.className = "display-1 font-weight-normal py-2";
bh1.innerHTML = "Every idea needs a ";
bh1.id = "bh1";
var bh2 = document.createElement("span");
bh2.className = "display-1 fw-bold py-2";
bh2.innerHTML = "Medium.";
b1.appendChild(bh1);
bh1.appendChild(bh2);

document.getElementById("mb1").style.borderBottom = "1px solid black";
document.getElementById("b1").style.fontFamily = "Arial,Sens-serif"

//end-2
var rowMaj = document.createElement("div");
rowMaj.className = "row";
document.body.appendChild(rowMaj);
rowMaj.id = "rowMaj";
var col1 = document.createElement("div");
col1.className = " fs-5 col-md-6 m-4 p-6 text-left";
rowMaj.appendChild(col1);
col1.id = "col1";
var p1 = document.createElement("p");
p1.innerHTML = "The best ideas can change who we are. Medium is where those ideas take shape, take off, and spark powerful conversations. We’re an open platform where over 100 million readers come to find insightful and dynamic thinking. Here, expert and undiscovered voices alike dive into the heart of any topic and bring new ideas to the surface. Our purpose is to spread these ideas and deepen understanding of the world."
col1.appendChild(p1);
var p2 = document.createElement("p");
p2.innerHTML = "We’re creating a new model for digital publishing. One that supports nuance, complexity, and vital storytelling without giving in to the incentives of advertising. It’s an environment that’s open to everyone but promotes substance and authenticity. And it’s where deeper connections forged between readers and writers can lead to discovery and growth. Together with millions of collaborators, we’re building a trusted and vibrant ecosystem fueled by important ideas and the people who think about them."
col1.appendChild(p2);


var col2 = document.createElement("div");
col2.className = "col-md-5";
rowMaj.appendChild(col2);
col2.id = "col2";
var fr = document.createElement("iframe");
fr.src = "https://player.vimeo.com/video/467834328?api=1&background=1&mute=1&loop=1";
fr.width = "100%";
fr.height = "100%";
col2.appendChild(fr);

document.getElementById("col1").style.borderRight = "1px solid black";
document.getElementById("rowMaj").style.borderBottom = "1px solid black";

//end-3
var div2 = document.createElement("div");
div2.className = "container-fluid position-relative p-md-5  text-center";
document.body.appendChild(div2);
div2.id = "div2";
document.getElementById("div2").style.backgroundColor = "#ffd1b9";

var mbd1 = document.createElement("div");
mbd1.className = "position-relative p-1 p-md-2 m-md-3 text-center";
mbd1.id = "mb1";
div2.appendChild(mbd1);
var bd1 = document.createElement("div");
bd1.className = "col-md-5 p-lg-5 mx-auto my-2";
mbd1.appendChild(bd1);
bd1.id = "bd1";
var bhd1 = document.createElement("h1");
bhd1.className = "display-1 font-weight-bold py-2";
bhd1.innerHTML = "A living network of curious minds.";
bhd1.id = "bhd1";
bd1.appendChild(bhd1);
var bpd1 = document.createElement("p");
bpd1.className = "lead font-weight-light py-1";
bpd1.innerHTML = "Anyone can write on Medium. Thought-leaders, journalists, experts, and individuals with unique perspectives share their thinking here. You’ll find pieces by independent writers from around the globe, stories we feature and leading authors, and smart takes on our own suite of blogs and publications."
bd1.appendChild(bpd1);

document.getElementById("bhd1").style.fontSize = "80px";
document.getElementById("bhd1").style.fontFamily = "Gt super text book, Georgia, sans-serif";

//end-4
var rowMaj2 = document.createElement("div");
rowMaj2.className = "row";
document.body.appendChild(rowMaj2);
rowMaj2.id = "rowMaj2";
var cold1 = document.createElement("div");
cold1.className = "p-5 display-1 col-md-6  text-left";
rowMaj2.appendChild(cold1);
cold1.id = "cold1";
var hh = document.createElement("h1");
hh.id = "hh";
hh.innerHTML = "Over 100 million readers and growing."
cold1.appendChild(hh);
document.getElementById("cold1").style.backgroundColor = "#000";
document.getElementById("hh").style.color = "white";
document.getElementById("hh").style.fontSize = "100px";
document.getElementById("hh").fontFamily = "Gt super text book, Georgia, sans-serif";
document.getElementById("cold1").style.paddingRight = "50px";


var cold2 = document.createElement("div");
cold2.className = "col-md-5";
rowMaj2.appendChild(cold2);
cold2.id = "cold2";
var ps = document.createElement("img")



var div3 = document.createElement("div");
div3.className = "container-fluid position-relative p-md-5  text-center";
document.body.appendChild(div3);
div3.id = "div3";
document.getElementById("div3").style.backgroundColor = "#000";

var mbd3 = document.createElement("div");
mbd3.className = "position-relative p-1 p-md-2 m-md-3 text-center";
mbd3.id = "mb1";
div3.appendChild(mbd3);
var bd3 = document.createElement("div");
bd3.className = "col-md-5 p-lg-5 mx-auto my-2";
mbd3.appendChild(bd3);
bd3.id = "bd3";
var bhd3 = document.createElement("h1");
bhd3.className = "display-1 font-weight-bold py-2";
bhd3.innerHTML = "Create the space for your thinking to take off.";
bhd3.id = "bhd3";
bd3.appendChild(bhd3);
var bpd3 = document.createElement("p");
bpd3.className = "lead font-weight-light py-1";
bpd3.innerHTML = "A blank page is also a door. At Medium you can walk through it. It's easy and free to share your thinking on any topic, connect with an audience, express yourself with a range of publishing tools, and even earn money for your work."
bpd3.id = "bpd3";
bd3.appendChild(bpd3);

document.getElementById("div3").style.border = "1px solid white";
document.getElementById("bhd3").style.fontSize = "80px";
document.getElementById("bhd3").style.fontFamily = "Gt super text book, Georgia, sans-serif";
document.getElementById("bhd3").style.color = "white";
document.getElementById("bpd3").style.color = "white";