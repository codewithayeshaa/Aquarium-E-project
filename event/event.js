function scrollSlider(direction){
    let slider = document.getElementById("eventSlider");
    let sliderAmount = 300;
    slider.scrollBy({left: sliderAmount * direction, behaviour: "smooth"})
}