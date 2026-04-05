const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

// ── ANIMATED COUNTERS ──
const counters = document.querySelectorAll('.stat-num')

counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'))
    let current = 0
    const increment = target / 100

    const timer = setInterval(() => {
        current += increment
        if (current >= target) {
            counter.textContent = target + '+'
            clearInterval(timer)
        } else {
            counter.textContent = Math.floor(current)
        }
    }, 15)
})

// ── FORM VALIDATION ──
const form = document.getElementById('reservationForm')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const date = document.getElementById('date')
    const guests = document.getElementById('guests')
    let isValid = true

    document.querySelectorAll('.error-msg').forEach(el => el.classList.remove('show'))
    document.querySelectorAll('input, select').forEach(el => el.classList.remove('error'))

    if (name.value.trim() === '') {
        name.classList.add('error')
        document.getElementById('nameError').classList.add('show')
        isValid = false
    }
    if (!email.value.includes('@')) {
        email.classList.add('error')
        document.getElementById('emailError').classList.add('show')
        isValid = false
    }
    if (date.value === '') {
        date.classList.add('error')
        document.getElementById('dateError').classList.add('show')
        isValid = false
    }
    if (guests.value === '') {
        guests.classList.add('error')
        document.getElementById('guestsError').classList.add('show')
        isValid = false
    }
    if (isValid) {
        document.getElementById('successMsg').classList.add('show')
        form.reset()
    }
})