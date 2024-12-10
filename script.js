// let age = "";
// let liveAlone = "";
// let family = "";
// let cars = "";
// let pets = "";
// let outgoing = "";
// let income = "";

const allButtons = document.querySelectorAll(".btnA")

allButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        allButtons.forEach(function(btnA) {
            btnA.classList.remove("selected");
        });

        this.classList.add("selected");
    });
});


document.getElementById("all").classList.add("selected");


