function displayBooked() {
    event.preventDefault(); // Prevent form submission

    let price = 0; // Initialize price
    const firstName = document.getElementById('fName').value.trim();
    const lastName = document.getElementById('lName').value.trim();
    const email = document.getElementById('email').value.trim();
    const numberOfGuests = parseInt(document.getElementById('guest').value);
    const destination = document.getElementById('dest').value;
    const date = document.getElementById('date').value;


    // Set price based on destination
    if (destination === "africa" || destination === "dressrosa" || destination === "arabasta") {
        price = 2300;
    } else if (destination === "pakistan" || destination === "canada" || destination === "china") {
        price = 2000;
    } else if (destination === "kashmir" || destination === "karachi" || destination === "japan") {
        price = 1800;
    } else if (destination === "wholeCakeIsland") {
        price = 2600;
    } else if (destination === "switzerland") {
        price = 3300;
    } else if (destination === "greenland") {
        price = 2700;
    } else if (destination === "water7") {
        price = 3800;
    } else if (destination === "germany") {
        price = 2900;
    }

    // Check if all required fields are filled
    if (!firstName || !lastName || !email || !destination || numberOfGuests < 1 || !date) {
        alert("Please fill out all required fields.");
        return;
    }

    // Calculate total price
    const totalPrice = (numberOfGuests * price).toFixed(2);

    // Update the price field in the form
    

    // Create booking details message
    const bookingMessage = `
        Booking Details:
        Name: ${firstName} ${lastName}
        Email: ${email}
        Number of Guests: ${numberOfGuests}
        Destination: ${destination}
        Total Price: $${totalPrice}
    `;
    const bookingMessage1 = `
        <div class="bookingSetailsInner">
                <a href="#" onclick=hide()><i class="fa-solid fa-xmark"></i></a>
                <div class="detail">
                    <h1>Confirm Your Booking!</h1>
                    <h3>Name: </h3> <p>${firstName} ${lastName}</p>
                    <h3>E-mail: </h3> <p>${email}</p>
                    <h3>Number Of Guests: </h3> <p>${numberOfGuests}</p>
                    <h3>Date: </h3> <p>${date}</p>
                    <h3>Destination: </h3> <p>${destination}</p>
                    <h3>Total Price: </h3> <p>$${totalPrice}</p>
                    <button onclick=displayBookedF()>Confirm Booking</button>
                </div>
                <div class="BookingHeroDis">
                    <img src="/assets/images/hero/bookingHero.jpg" alt="">
                </div>
            </div>
    `;
    alert(bookingMessage);
    // Display booking details
    document.getElementById('bookingDetails').innerHTML = bookingMessage1;
    document.getElementById('bookingDetails').style.display = "block";
}
function hide(){
    document.getElementById('bookingDetails').style.display = "none";
}
function displayBookedF(){
    alert("Tour Booked!");
    document.getElementById('bookingDetails').style.display = "none";
    window.location.href = "../index.html";
}