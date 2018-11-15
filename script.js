let btnclicked = false;
var last_known_scroll_position = 0;
var ticking = false;

let domStrings = {
    navbarDOM: ".navbar",  
    navbarBrandDOM: ".navbar-brand",
    navbarShadowDOM: "navbar-shadow",
    bracketNavbarBrandDOM: "bracket-navbar-brand"
}


/****************************************************************************************
 * Hover function to make the brackets for the navbar-brand change color
 ****************************************************************************************/
document.querySelector(domStrings.navbarBrandDOM).addEventListener("mouseover", mouseOver);

document.querySelector(domStrings.navbarBrandDOM).addEventListener("mouseout", mouseOut);

function mouseOver() {
    let brackets = document.getElementsByClassName(domStrings.bracketNavbarBrandDOM);
    for (let i = 0; i < brackets.length; i++) {
        brackets[i].style.color = "gold";
    }
}

function mouseOut() {
    let brackets = document.getElementsByClassName(domStrings.bracketNavbarBrandDOM);
    for (let i = 0; i < brackets.length; i++) {
        brackets[i].style.color = "black";
    }
}


/****************************************************************************************
 * scroll function so that when the navbar Y position is greater than 30 then navbar-shadow class is added
 ****************************************************************************************/

let element = document.querySelector(domStrings.navbarDOM)

function doSomething(scroll_pos) {
    // do something with the scroll position
    if (scroll_pos > 30) {
        element.classList.add(domStrings.navbarShadowDOM)
      } else {
          element.classList.remove(domStrings.navbarShadowDOM)
      }
  }
  
window.addEventListener('scroll', function(e) {

    last_known_scroll_position = window.scrollY;
    //scrolling magic to lessen the pressure calls of the scroll event
    if (!ticking) {
    
      window.requestAnimationFrame(function() {
        doSomething(last_known_scroll_position);
        ticking = false;
      });
      
      ticking = true;
    }

});


/****************************************************************************************
 * function for scrolling up the page
 ****************************************************************************************/
 
// window.onscroll = function() {scrollFunction()};
// window.addEventListener('scroll', scrollFunction)

// function scrollFunction() {
    
//     if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
//         document.getElementById("myBtn").style.display = "block";
        
//     } else {
//         document.getElementById("myBtn").style.display = "none";
//     }
// }

// function topFunction(currentCount) {
    
//     setInterval(function() {
        
//          if (window.scrollY > 30 && btnclicked === true) {
//             document.body.scrollTop = 0;
//             document.documentElement.scrollTop -= 20;
//          } else if (window.scrollY < 30 && btnclicked === true) {
//             btnclicked = false
//             // document.body.scrollTop = 0;
//          }
//     }, 25); 
    
//     btnclicked = true
// }

