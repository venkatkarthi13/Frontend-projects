const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const count = document.getElementById('count')
const total = document.getElementById('total')
const movieSelect = document.getElementById('movie')

const payNowButton = document.getElementById('pay-now')
const confirmationMessage = document.getElementById('confirmation-message')
const dateInput = document.getElementById('movie-date')
const timeSelect = document.getElementById('movie-time')


function resetLocalStorage() {
  localStorage.removeItem('selectedMovieIndex')
  localStorage.removeItem('selectedMoviePrice')
  localStorage.removeItem('selectedSeats')
}

resetLocalStorage()
populateUI()

let ticketPrice = +movieSelect.value

function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex)
  localStorage.setItem('selectedMoviePrice', moviePrice)
}

function updateSelectedCount() {
  
  const selectedSeats = document.querySelectorAll('.row .seat.selected')
  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat))

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex))
  const selectedSeatsCount = selectedSeats.length

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice
}

function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'))

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected')
      }
    })
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex')

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex
  }
}

movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value
  setMovieData(e.target.selectedIndex, e.target.value)
  updateSelectedCount()
})

container.addEventListener('click', e => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected')
    updateSelectedCount()
  }
});

payNowButton.addEventListener('click', () => {
  const selectedSeats = document.querySelectorAll('.row .seat.selected')
  const selectedSeatsCount = selectedSeats.length
  const selectedMovie = movieSelect.options[movieSelect.selectedIndex].text
  const selectedDate = dateInput.value
  const selectedTime = timeSelect.value

  if (selectedSeatsCount > 0 && selectedMovie !== '...Select...' && selectedDate && selectedTime !== '...Select...') {
    const seatsList = [...selectedSeats].map(seat => seat.getAttribute('data-seat-number')).join(', ')
    confirmationMessage.innerHTML = `Booked Successfully✅</br>
     ${selectedSeatsCount} 🎟️seat(s) for the movie "${selectedMovie}"<br>
      on ${selectedDate} at ${selectedTime}. <br>
      Seat no: ${seatsList}.<br>🤗 Happy Cinema🍿`
    confirmationMessage.classList.remove('hidden')

    selectedSeats.forEach(seat => seat.classList.remove('selected'))
    updateSelectedCount()
    movieSelect.selectedIndex = 0
    dateInput.value = ''
    timeSelect.selectedIndex = 0
  } else {
    alert('Please select seats, movie, date, and time.');
  }
})

updateSelectedCount();
