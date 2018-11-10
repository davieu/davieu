let domStrings = {
    navbarBrandDOM: ".navbar-brand",
    bracketNavbarBrandDOM: "bracket-navbar-brand"
}

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