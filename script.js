var yo1 = document.querySelector(".changeit").addEventListener("mouseover", mouseOver);
var yo2 = document.querySelector(".changeit").addEventListener("mouseout", mouseOut);

function mouseOver() {
    var x = document.getElementsByClassName("normal");
    var yo = x.length
    for (let i = 0; i < yo; i++) {
        x[i].style.color = "gold";
    }
}

function mouseOut() {
    var x = document.getElementsByClassName("normal");
    var yo = x.length
    for (let i = 0; i < yo; i++) {
        x[i].style.color = "black";
    }
}
