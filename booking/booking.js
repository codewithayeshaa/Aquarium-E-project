document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("✅ Thank you! Your booking request has been received. We'll contact you shortly.");
    this.reset();
    document.getElementById("eventDetails").classList.add("d-none");
    document.getElementById("eventTimings").innerHTML = "";
  });
  
  // Event pricing configuration
  
  const pricing = {
    diving: 40,
    jellyfish: 25,
    dolphin: 25,
    penguin: 20,
    school: 15
  };
  
  
  // DOM element references
  const eventSelect = document.getElementById("event");
  const adultInput = document.getElementById("adultTickets");
  const childInput = document.getElementById("childTickets");
  const seniorInput = document.getElementById("seniorTickets");
  const totalPriceDiv = document.getElementById("totalPrice");
  
  // Function to update the total price
  function updateTotal() {
    const event = eventSelect.value;
    const price = pricing[event] || 0;
  
    if (event === "host") {
      totalPriceDiv.textContent = "Contact for Pricing";
      return;
    }
  
    const adults = parseInt(adultInput.value) || 0;
    const children = parseInt(childInput.value) || 0;
    const seniors = parseInt(seniorInput.value) || 0;
  
    const total = (adults * price) + (children * price * 0.5) + (seniors * price * 0.75);
    totalPriceDiv.textContent = `$${total.toFixed(2)}`;
  }
  
  // Event listeners for price updates
  eventSelect.addEventListener("change", updateTotal);
  adultInput.addEventListener("input", updateTotal);
  childInput.addEventListener("input", updateTotal);
  seniorInput.addEventListener("input", updateTotal);
  // Event info with multiple timing slots
  const eventInfo = {
    dolphin: {
      times: ["11:00 AM - 12:00 PM", "2:00 PM - 3:00 PM", "5:00 PM - 6:00 PM"],
      price: "$25 per person"
    },
    penguin: {
      times: ["1:00 PM - 2:00 PM", "3:00 PM - 4:00 PM", "6:00 PM - 7:00 PM"],
      price: "$20 per person"
    },
    diving: {
      times: ["10:00 AM - 11:30 AM", "12:00 PM - 1:30 PM", "4:00 PM - 5:30 PM"],
      price: "$40 per person"
    },
    jellyfish: {
      times: ["6:00 PM - 7:00 PM", "7:30 PM - 8:30 PM"],
      price: "$35 per person"
    },
    school: {
      times: ["9:00 AM - 12:00 PM", "1:00 PM - 3:00 PM"],
      price: "$15 per student"
    }
  };
  
  
  // Show timings and pricing on event selection
  eventSelect.addEventListener("change", function () {
    const selectedEvent = eventSelect.value;
  
    if (eventInfo[selectedEvent]) {
      const eventTimingsContainer = document.getElementById("eventTimings");
      const eventPrice = document.getElementById("eventPrice");
      const eventDetails = document.getElementById("eventDetails");
  
      // Clear previous timings
      eventTimingsContainer.innerHTML = "";
  
      // Add timing radio buttons
      eventInfo[selectedEvent].times.forEach((time, index) => {
        const id = `timeOption${index}`;
        const radioHTML = `
          <div class="form-check">
            <input class="form-check-input" type="radio" name="eventTime" id="${id}" value="${time}" ${index === 0 ? "checked" : ""}>
            <label class="form-check-label" for="${id}">
              ${time}
            </label>
          </div>
        `;
        eventTimingsContainer.innerHTML += radioHTML;
      });
  
      eventPrice.textContent = eventInfo[selectedEvent].price;
      eventDetails.classList.remove("d-none");
    } else {
      document.getElementById("eventDetails").classList.add("d-none");
      document.getElementById("eventTimings").innerHTML = "";
    }
  });
  