
// SCROLL INTO
function scrollInto(targetSelector) {
    const offset = 150;
    const element = document.querySelector(targetSelector);
  
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }  
  
  // SCROLL BY
  function scrollSlider(direction){
      let slider = document.getElementById("eventSlider");
      let sliderAmount = 300;
      slider.scrollBy({left: sliderAmount * direction, behaviour: "smooth"})
    }

 // LEARN MORE EFFECT
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



