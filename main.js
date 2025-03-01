// Set the target date for Ramadan 2025
const ramadanDate = new Date('2025-03-02T00:00:00').getTime();

// Update the countdown every second
const countdown = setInterval(() => {
    // Get current date and time
    const now = new Date().getTime();
    
    // Calculate the time remaining
    const timeLeft = ramadanDate - now;
    
    // Calculate days, hours, minutes, seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    // Update the DOM elements
    document.querySelectorAll('.countdown-number').forEach((element, index) => {
        const values = [days, hours, minutes, seconds];
        // Add leading zeros
        element.textContent = String(values[index]).padStart(2, '0');
    });
    
    // If countdown is finished
    if (timeLeft < 0) {
        clearInterval(countdown);
        document.querySelectorAll('.countdown-number').forEach(element => {
            element.textContent = '00';
        });
        document.querySelector('.greeting').textContent = 'Ramadan Mubarak!';
    }
}, 1000);
