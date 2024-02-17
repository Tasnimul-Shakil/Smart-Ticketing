const destinationSelect = document.getElementById('destinationSelect');
  const seatsContainer = document.getElementById('seatsContainer');
  const ticketInfo = document.getElementById('ticketInfo');
  const totalPriceDisplay = document.getElementById('totalPrice');
  let totalPrice = 0;
  
  // Generate seats
  const generateSeats = () => {
    seatsContainer.innerHTML = '';
    for (let row = 1; row <= 4; row++) {
      for (let seat = 1; seat <= 4; seat++) {
        const div = document.createElement('div');
        div.className = 'seat available';
        div.dataset.row = row;
        div.dataset.seat = seat;
        div.textContent = String.fromCharCode(65 + seat - 1) + row;
        seatsContainer.appendChild(div);
      }
    }
  };
  
  generateSeats();
  
  // Seat click event
  seatsContainer.addEventListener('click', (e) => {
    const selectedSeat = e.target;
    if (selectedSeat.classList.contains('available')) {
      selectedSeat.classList.remove('available');
      selectedSeat.classList.add('unavailable');
      const ticket = document.createElement('div');
      ticket.textContent = selectedSeat.textContent + ' - 550tk';
      ticketInfo.appendChild(ticket);
      totalPrice += 550;
      totalPriceDisplay.textContent = `Total Price: ${totalPrice} tk`;
    }
  });