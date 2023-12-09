
function displaynav() {
    var nav = document.getElementById("nav");
    if (nav.style.display === "block") {
        nav.style.display = "none"
    } else {
        nav.style.display = "block"
    }
}

function hideall() {
    nav.style.display = "none";
}

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    let parent = document.getElementById("parent");
    let header_scroll = window.scrollY;
    let hover1 = document.getElementById("hover1");
    let hover2 = document.getElementById("hover2");
    let hover3 = document.getElementById("hover3");
    let hover4 = document.getElementById("hover4");
    let hover5 = document.getElementById("hover5");

    if (header_scroll > 100) {
        parent.style.backgroundColor = "red";
    }
    else if(header_scroll < 100) {
        parent.style.backgroundColor = "black";
    }

    if (header_scroll > 100) {
        hover1.style.fontWeight = "900";
        hover2.style.fontWeight = "400";
        hover3.style.fontWeight = "400";
        hover4.style.fontWeight = "400";
        hover5.style.fontWeight = "400";
    }
    if (header_scroll > 550) {
        hover1.style.fontWeight = "400";
        hover2.style.fontWeight = "900";
        hover3.style.fontWeight = "400";
        hover4.style.fontWeight = "400";
        hover5.style.fontWeight = "400";
    }
    if (header_scroll > 1183) {
        hover1.style.fontWeight = "400";
        hover3.style.fontWeight = "900";
        hover2.style.fontWeight = "400";
        hover4.style.fontWeight = "400";
        hover5.style.fontWeight = "400";
    }
    if (header_scroll > 1750) {
        hover1.style.fontWeight = "400";
        hover4.style.fontWeight = "900";
        hover2.style.fontWeight = "400";
        hover3.style.fontWeight = "400";
        hover5.style.fontWeight = "400";
    }
    if (header_scroll > 2250) {
        hover1.style.fontWeight = "400";
        hover5.style.fontWeight = "900";
        hover2.style.fontWeight = "400";
        hover3.style.fontWeight = "400";
        hover4.style.fontWeight = "400";
    }
})
