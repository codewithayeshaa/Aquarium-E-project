function scrollToIntro() {
    let intro = document.getElementById("home-pageBtn")
    intro.scrollIntoView({
        behaviour: "smooth",
        block: "start"
    });
}