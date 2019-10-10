element = document.getElementById("title_logo_test");
element2 = document.getElementById("tech-logo-svg");

element.addEventListener("click", function (e) {
    e.preventDefault;
    element.classList.remove("shapeshifter");

    //this line allow the brower refresh the animation without refreshing the whole page
    void element.offsetWidth;

    element.classList.add("shapeshifter");
}, false);

element2.addEventListener("click", function (f) {
    f.preventDefault;
    element2.classList.remove("tech-shapeshifter");

    void element2.offsetWidth;

    element2.classList.add("tech-shapeshifter");
}, false);