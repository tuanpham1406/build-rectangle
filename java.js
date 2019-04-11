function Rectangle(x, y, cd, cr){
    this.x = x;
    this.y = y;
    this.cd = cd;
    this.cr = cr;
    let c = 2*(cd + cr);
    let s = cd*cr;
    document.getElementById('cp').innerHTML = "Perimeter: " + c + "," + " Area:" + s;
}
function getRandomHex(){
    return Math.floor(Math.random()*255);
}

function getRandomColor(){
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green +")";
}
function createCircle(){
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let cd = Math.floor(Math.random()*250);
    let cr = Math.floor(Math.random()*150);
    let color = getRandomColor();
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let square = new Rectangle(x, y, cd, cr);
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(square.x, square.y, square.cd, square.cr);
    ctx.fill();
    // let radius = Math.floor(Math.random() * 100);
    // let circle= new Circle(550, 260, radius);
    // ctx.beginPath();
    // ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    // ctx.fill();
}
createCircle();
