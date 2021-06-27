var current = 0;

function next() {
    const current_old = current;
    const slides = document.getElementsByClassName("slide");
    current = (current + 1) % slides.length;
    if (current === current_old) return;

    slides[current_old].style.display = "none";
    slides[current].style.display = "block";

    const desks = document.getElementsByClassName("desk");
    for (var i = 0; i < desks.length; i++) {
        desks[i].classList.add("active");
    }
    const lines = document.getElementsByClassName("line");
    for (var i = 0; i < lines.length; i++) {
        lines[i].classList.add("active");
    }
}

function prev() {
    const current_old = current;
    const slides = document.getElementsByClassName("slide");
    current = (current + slides.length - 1) % slides.length;
    if (current === current_old) return;
    slides[current_old].style.display = "none";
    slides[current].style.display = "flex";
    init(current);
    document.getElementsByClassName("desk")[0].classList.remove("active");
}

function init(id) {
    if (id === 1) {
        const html_elements = document.getElementsByClassName("slide");
        const html_element = html_elements[id];
        const new_element = document.createElement("div");
        new_element.className = "desk";
        new_element.style.opacity = 1;
        html_element.appendChild(new_element);
    }
}