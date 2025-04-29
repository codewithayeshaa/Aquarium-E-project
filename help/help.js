// SEARCH BAR
function searchHelp() {
    const message = document.getElementById('searchInput').value.toLowerCase();
    const replyMessage = document.getElementById('replyMessage');

    if (!message.trim()) {
        replyMessage.classList.add("d-none");
        return;
    }

    if (message.includes('timing') || message.includes('hours')) {
        replyMessage.textContent = "Our aquarium is open from 9:00 AM to 6:00 PM daily.";
    }
    else if (message.includes('ticket') || message.includes('price')) {
        replyMessage.textContent = "Ticket prices vary. Please visit our Online Booking page for details.";
    }
    else if (message.includes('food and drink') || message.includes('snacks') || message.includes('food')) {
        replyMessage.textContent = "Outside food and drinks are not allowed inside the aquarium. However, we have a café on-site offering a variety of snacks, meals, and beverages";
    }
    else if (message.includes('event') || message.includes('show')) {
        replyMessage.textContent = "Check our Events page for schedules!";
    }
    else if (message.includes('advance booking') || message.includes('advance tickets')) {
        replyMessage.textContent = "We recommend booking tickets online in advance to guarantee your preferred time slot, especially during weekends and holidays. Walk-in tickets are subject to availability";
    }
    else if (message.includes(' tour hour') || message.includes('how long the tour take')) {
        replyMessage.textContent = " Most visitors spend between 2 to 3 hours exploring the aquarium. Guided tours typically last about 1 hour.";
    }
    else if (message.includes('wheelchair accessible') || message.includes('wheelchair available')) {
        replyMessage.textContent = "Yes! Our facility is fully wheelchair accessible. We also offer rental wheelchairs at the entrance on a first-come, first-served basis.";
    }
    else {
        replyMessage.textContent = "Sorry, we couldn't find an answer. Please contact our Contact Page.";
    }

    replyMessage.classList.remove("d-none");
}

// FEEDBACK FORM
function handleFeedbackForm() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const rating = document.getElementById("rating");
    const comments = document.getElementById("comments");
    const ratingAlert = document.getElementById("ratingAlert");
    const pageAlert = document.getElementById("pageAlert");

    let isValid = true;

    [name, email, rating].forEach(input => input.classList.remove("border-danger"));

    if (name.value.trim() === "") {
      name.classList.add("border-danger");
      isValid = false;
    }

    if (email.value.trim() === "") {
      email.classList.add("border-danger");
      isValid = false;
    }

    if (rating.value === "Choose a rating" || rating.value === "") {
      rating.classList.add("border-danger");
      ratingAlert.classList.remove("d-none");
      isValid = false;
    } else {
      ratingAlert.classList.add("d-none");
    }

    if (!isValid) {
      return false;
    }
    pageAlert.classList.remove("d-none");

 
    document.getElementById("feedbackForm").reset();

    setTimeout(function () {
      pageAlert.classList.add("d-none");
    }, 3000);

    return false;}
  
  
