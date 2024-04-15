var menu = document.getElementById("sideMenu");
menu.style.width = "0%";

function Menu() {
  if (document.getElementById("sideMenu").style.width === "0%") {
    document.getElementById("sideMenu").style.width = "100%";
    document.getElementById("appbody").style.filter = "blur(5px)"
    document.body.style.overflow = "hidden";
  } else {
    document.getElementById("sideMenu").style.width = "0%";
    document.getElementById("appbody").style.filter = "blur(0px)"
  }
}
/*
var w = menu.style.width;
    if(w=="0%")
    document.getElementById("sideMenu").style.width="100%";
    else
    document.getElementById("sideMenu").style.width="0%";
    */
