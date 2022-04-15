const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

var ask0 = document.getElementById("ask-0");
var ask1 = document.getElementById("ask-1");
var ask2 = document.getElementById("ask-2");
var ask3 = document.getElementById("ask-3");
var arrow0 = document.getElementById("arrow-0")
var arrow1 = document.getElementById("arrow-1")
var arrow2 = document.getElementById("arrow-2")
var arrow3 = document.getElementById("arrow-3")

var i;



function handle(ask, arrow) {
    ask.addEventListener("click", function () {
        console.log(arrow);
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (arrow.classList.contains('rotate-arrow')) {
            panel.style.display = "none";
            arrow.classList.remove("rotate-arrow")
        } else {
            panel.style.display = "block";
            arrow.classList.add("rotate-arrow")
        }
    });
}

handle(ask0, arrow0)
handle(ask1, arrow1)
handle(ask2, arrow2)
handle(ask3, arrow3)