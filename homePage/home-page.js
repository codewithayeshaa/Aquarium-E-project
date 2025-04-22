function scrollToIntro() {
    let intro = document.getElementById("home-pageBtn")
    intro.scrollIntoView({
        behaviour: "smooth",
        block: "start"
    });
}
$(document).ready(function () {
    $(".card").each(function () {
        const $card = $(this);
        const $icon = $card.find(".bi-chevron-right");
        const $btn = $card.find(".lrnBtn");

        $icon.on("mouseenter", function () {
            if ($icon.find(".lrnBtn").length === 0) {
                $btn.detach().appendTo($icon);
            }
        });

        $icon.on("mouseleave", function () {
            if ($icon.find(".lrnBtn").length > 0) {
                $btn.detach().insertAfter($icon);
            }
        });
    });
});