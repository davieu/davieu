let regState = []
let navBar = document.querySelectorAll('#demo');
let navBarArr = Array.from(navBar);
console.log(navBarArr);

let navnav = document.querySelectorAll('.navbar-nav');
let navnavnavArr = Array.from(navBar);

var testing = navnavnavArr;

getArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        regState[i] = (arr[i])
}
}
getArray(navnavnavArr)

let hello = navnavnavArr.map(cur => cur)
// document.querySelector('.nav-item').addEventListener('click', (e) => {
//     console.log(e.target)
//     document.querySelector('.nav-item').style.color='red'
//     // console.log(btnRepliesArr.indexOf(e.target))
//     // navBarArr.forEach(cur => cur.style.color = 'red')
// })
var yo1 = document.querySelector(".changeit").addEventListener("mouseover", mouseOver);
var yo2 = document.querySelector(".changeit").addEventListener("mouseout", mouseOut);

// document.querySelector('.navbar-nav').addEventListener("mouseover", mouseOver2);
// document.querySelector('.navbar-nav').addEventListener("mouseout", mouseOut2);


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

// document.querySelector('.navbar-nav').addEventListener('mouseover', (e) => {
//     console.log(e.target)
// })

// function mouseOver2(e) {
//     // if (!document.querySelector('.navbar-nav')) {
//     if (navnavnavArr[0] === e.target) {
//         navnavnavArr[0].innerHTML= '<span>{ </span>About Me<span> }</span>'
//     }
//     if (navnavnavArr[1] === e.target) {
//         navnavnavArr[1].innerHTML= '<span>{ </span>My Work<span> }</span>'
//     }
//     if (navnavnavArr[2] === e.target) {
//         navnavnavArr[2].innerHTML= '<span>{ </span>Get in Touch<span> }</span>'
//     }
    // }

    // navBarArr.forEach(cur => {
    //     if (cur[0]) {
    //         cur[0].style.color = 'red'
    //     }
    // })
    // navBarArr[0].style.color = 'red'

    // var test =  document.getElementById("demo")
    // test.innerHTML= '<span class="poop">{ </span>About Me<span class="poop"> }</span>'
    // var x = document.getElementsByClassName("poop");
    // var yo = x.length
    // for (let i = 0; i < yo; i++) {
    //     x[i].style.color = "gold";
    // }
// }

// function mouseOut2(e) {

//     // var test =  document.getElementById("demo")

//     if (navnavnavArr[0] === e.target) {
//         navnavnavArr[0].textContent= "About Me"
//     }
//     if (navnavnavArr[1] === e.target) {
//         navnavnavArr[1].textContent= "My Work"
//     }
//     if (navnavnavArr[2] === e.target) {
//         navnavnavArr[2].textContent= "Get in Touch"
//     }

    // navnavnavArr[0].textContent= "About Me"
    // navnavnavArr[1].textContent= "My Work"
    // navnavnavArr[2].textContent= "Get in Touch"

    // var test2 =  document.getElementById("demo")[1]
    // test.textContent= "About Me"

    // var test2 =  document.getElementById("demo")
    // test.textContent= "About Me"
// }

// document.getElementById('demo').addEventListener('mouseover', (e) => {
//     console.log(e.target)
// })