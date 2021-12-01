function update(){
    document.getElementById("points").innerHTML = points
}

let cliques = 0
let points = 0
let autoClick = 0
let amountAutoClick = 0 
let costAutoClick = 12



function timer(){
    points = points + amountAutoClick;
    update()
}
setInterval(timer, 1000)

document.getElementById("points").innerHTML = points
document.getElementById("counter").innerHTML = cliques
document.getElementById('btn').addEventListener("click", iterate);
function iterate(){
    cliques ++
    points ++
    document.getElementById("counter").innerHTML = cliques
    document.getElementById("points").innerHTML = points
}

document.getElementById('btn2').addEventListener("click", btn2);
function btn2(){
    if  (points >=10)
         points = points - 10
        document.getElementById("points").innerHTML = points
        update()
}

document.getElementById('costAutoClick').innerHTML = costAutoClick
document.getElementById('amountAutoClick').innerHTML = amountAutoClick
document.getElementById('buyAutoClick').addEventListener("click", buyAutoClick);
function buyAutoClick() {
    if (points >= ((autoClick+1) * 12)) {
        points = points - ((autoClick+1) * 12);
        autoClick = autoClick + 1;
        amountAutoClick = amountAutoClick + 1;
        costAutoClick = ((autoClick+1) * 12);
        update()
    }
    document.getElementById('costAutoClick').innerHTML = costAutoClick
    document.getElementById('amountAutoClick').innerHTML = amountAutoClick
    update()
}