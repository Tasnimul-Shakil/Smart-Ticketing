const scrollToBuyTicketButton = document.getElementById("scrollToBuyTicketButton");

scrollToBuyTicketButton.addEventListener("click", function() {
    const buyTicketSection = document.getElementById("buy-ticket");

    buyTicketSection.scrollIntoView({ behavior: 'smooth' });
});

const allBtn = document.getElementsByClassName("seat-button");
let count = 0;
let totalPrice = 0; 
let availableSeats = 39; 
let selectedSeats = document.getElementsByClassName("selected");
// Get the available seats span element
const availableSeatsElement = document.getElementById("available-seats");
availableSeatsElement.textContent = availableSeats;

for (const btn of allBtn) {
  btn.addEventListener("click", function (e) {
    const isSelected = btn.classList.contains("selected");

    if (!isSelected && count < 4 && availableSeats > 0) {
      // Check if less than 4 seats are selected and available seats > 0
      count = count + 1;

      const seatName = e.target.innerText;
      const selectedSeatInfo = document.getElementById("selected-seat-info");
      const li = document.createElement("li");
      const p = document.createElement("p");
      p.innerText = seatName;
      const p2 = document.createElement("p");
      p2.innerText = "Economy";
      const p3 = document.createElement("p");
      p3.innerText = "550";

      li.appendChild(p);
      li.appendChild(p2);
      li.appendChild(p3);
      selectedSeatInfo.appendChild(li);

      totalPrice += 550; 

      const totalPriceElement = document.getElementById("total-price");
      totalPriceElement.innerText = totalPrice;

      btn.classList.add("selected");
      btn.style.backgroundColor = "#1DD100"; 

      availableSeats--; 
      availableSeatsElement.textContent = availableSeats; 

      // Update selected seats
      selectedSeats = document.getElementsByClassName("selected");

      // Check coupon validity after seat selection
      checkFormCoupon();
    } else if (isSelected) {
      count = count - 1;
      const selectedSeatInfo = document.getElementById("selected-seat-info");
      selectedSeatInfo.removeChild(selectedSeatInfo.lastElementChild);
      totalPrice -= 550; // Decrement the total price
      const totalPriceElement = document.getElementById("total-price");
      totalPriceElement.innerText = totalPrice;

      btn.classList.remove("selected");
      btn.style.backgroundColor = ""; 

      availableSeats++; 
      availableSeatsElement.textContent = availableSeats; 

      // Update selected seats
      selectedSeats = document.getElementsByClassName("selected");

      // Check coupon validity after seat deselection
      checkFormCoupon();
    } else {
      alert(
        "You can only select up to 4 seats"
      );
    }

    setInnerText("selectedSeat", count);
  });
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

function checkFormValidity() {
  const phoneNumber = document.getElementById("number").value;
  const submitButton = document.getElementById("submitButton");

  // Enable submit button if both a phone number is entered and at least one seat is selected
  if (phoneNumber && selectedSeats.length > 0) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}
document.getElementById("submitButton").addEventListener("click", function() {
  // Redirect to the confirmation page
  window.location.href = "confirmation.html";
});


function checkFormCoupon() {
  const applyButton = document.getElementById("applyButton");

  // Enable apply button if at least four seats are selected
  if (selectedSeats.length >= 4) {
    applyButton.disabled = false;
    applyButton.classList.remove("bg-gray-400");
    applyButton.classList.add("bg-[#1DD100]");
  } else {
    applyButton.disabled = true;
    applyButton.classList.remove("bg-[#1DD100]");
    applyButton.classList.add("bg-gray-400");
  }
}
function toggleCouponInputVisibility() {
  const couponInput = document.getElementById("coupon-input");
  // Enable apply button if at least four seats are selected
  if (selectedSeats.length < 4) {
    couponInput.classList.add('hidden');
  } else {
    couponInput.classList.remove('hidden');
  }
}

// Function to apply discount and update grand total
function applyDiscount(discountPercentage) {
  const grandPriceElement = document.getElementById("grand-price");
  const discountedPrice = totalPrice * (1 - discountPercentage / 100);
  grandPriceElement.innerText = discountedPrice.toFixed(2);

  // Hide the coupon input and apply button after applying the discount
  const couponInputDiv = document.getElementById("coupon-input");
  couponInputDiv.style.display = "none";
}

// Event listener for apply button click
function applyDiscount(discountPercentage) {
  const grandPriceElement = document.getElementById("grand-price");
  const discountedPrice = totalPrice * (1 - discountPercentage / 100);
  grandPriceElement.innerText = discountedPrice.toFixed(2);

  const couponInputDiv = document.getElementById("coupon-input");
  couponInputDiv.style.display = "none";
}

// Event listener for apply button click
function applyDiscount(discountPercentage) {
  const grandPriceElement = document.getElementById("grand-price");
  const discountedPrice = totalPrice * (1 - discountPercentage / 100);
  grandPriceElement.innerText = discountedPrice.toFixed(2);

  const couponInputDiv = document.getElementById("coupon-input");
  couponInputDiv.style.display = "none";
}

// Event listener for apply button click
applyButton.addEventListener("click", function () {
  const couponInput = document.getElementById("coupon").value;

  // Check if a valid coupon code is entered
  if (couponInput === "NEW15") {
    applyDiscount(15);

    applyButton.removeAttribute("disabled");
  } else if (couponInput === "Couple 20") {
    applyDiscount(20);

    // Remove the disabled attribute from the apply button
    applyButton.removeAttribute("disabled");
  } else {
    applyButton.setAttribute("disabled", true);
  }

  // Disable the apply button after applying the discount
  applyButton.disabled = true;
  applyButton.classList.remove("bg-[#1DD100]");
  applyButton.classList.add("bg-gray-400");
});


