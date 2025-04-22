function scrollSlider(direction){
    let slider = document.getElementById("eventSlider");
    let sliderAmount = 300;
    slider.scrollBy({left: sliderAmount * direction, behaviour: "smooth"})
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
 
function scrollInto(target) {
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 100); // Smooth scroll duration in ms
  }


