// const destinationSelect = document.getElementById('destinationSelect');
//   const seatsContainer = document.getElementById('seatsContainer');
//   const ticketInfo = document.getElementById('ticketInfo');
//   const totalPriceDisplay = document.getElementById('totalPrice');
//   let totalPrice = 0;

//   // Generate seats
//   const generateSeats = () => {
//     seatsContainer.innerHTML = '';
//     for (let row = 1; row <= 4; row++) {
//       for (let seat = 1; seat <= 4; seat++) {
//         const div = document.createElement('div');
//         div.className = 'seat available';
//         div.dataset.row = row;
//         div.dataset.seat = seat;
//         div.textContent = String.fromCharCode(65 + seat - 1) + row;
//         seatsContainer.appendChild(div);
//       }
//     }
//   };

//   generateSeats();

//   // Seat click event
//   seatsContainer.addEventListener('click', (e) => {
//     const selectedSeat = e.target;
//     if (selectedSeat.classList.contains('available')) {
//       selectedSeat.classList.remove('available');
//       selectedSeat.classList.add('unavailable');
//       const ticket = document.createElement('div');
//       ticket.textContent = selectedSeat.textContent + ' - 550tk';
//       ticketInfo.appendChild(ticket);
//       totalPrice += 550;
//       totalPriceDisplay.textContent = `Total Price: ${totalPrice} tk`;
//     }
//   });

// const allBtn = document.getElementsByClassName("seat-button");
// let count = 0;
// let totalPrice = 0;

// for (const btn of allBtn) {
//   btn.addEventListener("click", function (e) {
//     count = count + 1;

//     const seatName = e.target.innerText;
//     const selectedSeatInfo = document.getElementById("selected-seat-info");
//     const li = document.createElement("li");
//     const p = document.createElement("p");
//     p.innerText = seatName;
//     const p2 = document.createElement("p");
//     p2.innerText = "Economy";
//     const p3 = document.createElement("p");
//     p3.innerText = "550";

//     li.appendChild(p);
//     li.appendChild(p2);
//     li.appendChild(p3);
//     selectedSeatInfo.appendChild(li);

//     totalPrice += 550;
//     const totalPriceElement = document.getElementById("total-price");
//     totalPriceElement.innerText = totalPrice;

//     setInnerText("selectedSeat", count);
//   });
// }

// function setInnerText(id, value) {
//   document.getElementById(id).innerText = value;
// }


// bus seat information
// const allBtn = document.getElementsByClassName("seat-button");
// let count = 0;
// let totalPrice = 1100; // Starting total price

// for (const btn of allBtn) {
//   btn.addEventListener("click", function (e) {
//     if (count < 4) {
//       // Check if less than 4 seats are selected
//       count = count + 1;

//       const seatName = e.target.innerText;
//       const selectedSeatInfo = document.getElementById("selected-seat-info");
//       const li = document.createElement("li");
//       const p = document.createElement("p");
//       p.innerText = seatName;
//       const p2 = document.createElement("p");
//       p2.innerText = "Economy";
//       const p3 = document.createElement("p");
//       p3.innerText = "550";

//       li.appendChild(p);
//       li.appendChild(p2);
//       li.appendChild(p3);
//       selectedSeatInfo.appendChild(li);

//       totalPrice += 550; // Increment the total price by the price of a ticket

//       const totalPriceElement = document.getElementById("total-price");
//       totalPriceElement.innerText = totalPrice;

//       btn.style.backgroundColor = "#1DD100";

//       setInnerText("selectedSeat", count);
//     } else {
//       alert("You can only select up to 4 seats.");
//     }
//   });
// }

// function setInnerText(id, value) {
//   document.getElementById(id).innerText = value;
// }
// const selected = document.getElementsByClassName("seat-button");
// console.log(selected);

const allBtn = document.getElementsByClassName("seat-button");
let count = 0;
let totalPrice = 1100; // Starting total price
let availableSeats = 40; // Initial number of available seats
let selectedSeats = document.getElementsByClassName("selected"); // Global variable for selected seats

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

      totalPrice += 550; // Increment the total price by the price of a ticket

      const totalPriceElement = document.getElementById("total-price");
      totalPriceElement.innerText = totalPrice;

      btn.classList.add("selected");
      btn.style.backgroundColor = "#1DD100"; // Change button color to green

      availableSeats--; // Decrement the number of available seats
      availableSeatsElement.textContent = availableSeats; // Update the available seats display
      
      // Update selected seats
      selectedSeats = document.getElementsByClassName("selected");
      
      // Check coupon validity after seat selection
      checkFormCoupon();
    } else if (isSelected) {
      // Unselect the button
      count = count - 1;
      const selectedSeatInfo = document.getElementById("selected-seat-info");
      selectedSeatInfo.removeChild(selectedSeatInfo.lastElementChild);
      totalPrice -= 550; // Decrement the total price
      const totalPriceElement = document.getElementById("total-price");
      totalPriceElement.innerText = totalPrice;

      btn.classList.remove("selected");
      btn.style.backgroundColor = ""; // Reset button color

      availableSeats++; // Increment the number of available seats
      availableSeatsElement.textContent = availableSeats; // Update the available seats display
      
      // Update selected seats
      selectedSeats = document.getElementsByClassName("selected");
      
      // Check coupon validity after seat deselection
      checkFormCoupon();
    } else {
      alert("You can only select up to 4 seats or there are no available seats.");
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




