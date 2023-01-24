"use strict"
let Door = document.getElementById("Door");
Door.addEventListener("mouseover", function () {
    Door.src = "AutoDoor_O.png";
})
Door.addEventListener("mouseleave", function () {
    Door.src = "AutoDoor_C.png";
})