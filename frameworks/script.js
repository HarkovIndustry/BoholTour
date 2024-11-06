const spot = {
    cards: [
    { path: 'images/Alona Beach/', image: '1.jpeg', title: 'Alona Beach', 
    description: 'Relax on the stunning, kilometer-long white sand beach in Panglao Island.', 
    button: 'View More', address: 'Panglao Island, Bohol', fee: 'Free', contact: '+63 938 502 8101',
    carouselImages: [ '1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg' ]
    },
    { path: 'images/Baclayon Church/', image: '1.jpg', title: 'Baclayon Church', 
    description: 'Dedicated to Our Lady of the Immaculate Conception, this ancient Catholic stone church showcases Bohol&apos;s rich history.', 
    button: 'View More', address: 'Main Road, Baclayon, Bohol', fee: 'Free', contact: '+63 938 540 9088',
    carouselImages: [ '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.JPG', '8.JPG' ]
    },
    { path: 'images/Bilar Man-Made Forest/', image: '1.jpg', title: 'Bilar Man-Made Forest', 
    description: 'Stroll through the refreshing, two-kilometer stretch of Mahogany trees.', 
    button: 'View More', address: 'Loay Interior Road, Bilar, Bohol', fee: 'Free', contact: '+63 938 540 9088',
    carouselImages: [ '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg' ]
    },
    { path: 'images/Blood Compact Shrine/', image: '1.jpg', title: 'Blood Compact Shrine',
    description: 'Historic site commemorating the Blood Compact between Sikatuna and Miguel Lopez de Legaspi, symbolizing peace and friendship.', 
    button: 'View More', address: 'J.P Inting Street, Tagbilaran City, 6300 Bohol', fee: 'Free', contact: '+63 938 411 2014',
    carouselImages: [ '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg' ]
    },
    { path: 'images/Bohol Bee Farm/', image: '1.JPG', title: 'Bohol Bee Farm',
    description: 'Discover beekeeping wonders, enjoy scenic surroundings, and savor local cuisine.', 
    button: 'View More', address: 'Bohol Bee Farm, Dao, Dauis, Panglao Island, Bohol', fee: 'PHP 500 (with Lunch)', contact: '+63 938 502 2288',
    carouselImages: [ '1.JPG', '2.jpg', '3.jpg', '4.jpg', '5.jpg' ]
    },
    { path: 'images/Chocolate Hills/', image: '1.jpeg', title: 'Chocolate Hills',
    description: 'Witness breathtaking, chocolate-brown hills formed by tidal movements, a natural wonder.', 
    button: 'View More', address: 'Carmen, Bohol', fee: 'PHP 100 (view deck)', contact: '+63 938 411 2014',
    carouselImages: [ '1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg' ]
    },
    { path: 'images/Danao Adventure Park/', image: '1.jpg', title: 'Danao Adventure Park',
    description: 'Experience extreme adventures like sky ride, plunge, and river trekking amidst nature.', 
    button: 'View More', address: 'Danao, Bohol', fee: 'PHP 500 - PHP 2,000', contact: '+63 938 510 0055',
    carouselImages: [ '1.jpg', '2.jpg', '3.JPG', '4.jpg', '5.jpg' ]
    },
    { path: 'images/Loboc River/', image: '1.jpeg', title: 'Loboc River',
    description: 'Experience a scenic river cruise, savor lunch at floating restaurants, and marvel at stunning views of lush greens.', 
    button: 'View More', address: 'Poblacion Sawang, Loboc Bohol', fee: 'PHP 500 - PHP 1,500', contact: '+63 938 537 9141',
    carouselImages: [ '1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg']
    },
    { path: 'images/Philippine Tarsier Foundation/', image: '1.jpg', title: 'Philippine Tarsier Foundation',
    description: 'Meet the smallest primates, learn about conservation efforts, and support wildlife preservation.', 
    button: 'View More', address: 'Philippine Tarsier Foundation Inc., Corella Bohol', fee: 'PHP 60', contact: '+63 938 535 9275',
    carouselImages: [ '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg' ]
    },
    { path: 'images/Tigbao Hanging Bridge/', image: '1.jpeg', title: 'Tigbao Hanging Bridge',
    description: 'Cross the steel and bamboo bridge, explore souvenir shops, and visit the "buko king" of Bohol.', 
    button: 'View More', address: 'Tigbao, Loboc Bohol', fee: 'Free', contact: '+63 938 537 9141',
    carouselImages: [ '1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg' ]
    }
    ], screen: { xs: 2, md: 3, lg: 4, xl: 6 }
};

function createCards() {
    const cardContainer = document.querySelector('.cardcontainer');
    const row = document.createElement('div');
    row.className = 'row';

    spot.cards.forEach((spotData, index) => {
        const colClassXs = `col-${Math.floor(12 / spot.screen.xs)}`;
        const colClassMd = `col-md-${Math.floor(12 / spot.screen.md)}`;
        const colClassLg = `col-lg-${Math.floor(12 / spot.screen.lg)}`;
        const colClassXl = `col-xl-${Math.floor(12 / spot.screen.xl)}`;

        const card = document.createElement('div');
        card.className = `${colClassXs} ${colClassMd} ${colClassLg} ${colClassXl} mb-4`;

        card.innerHTML = `
          <div class="card h-100 shadow-sm" style="transition: transform 0.2s;">
            <img src="${spotData.path}${spotData.image}" class="card-img-top" alt="${spotData.title}">
            <div class="card-body">
              <h5 class="card-title">${spotData.title}</h5>
              <p class="card-text">${spotData.description}</p>
              <a href="#" class="btn btn-primary" data-id="${index}">${spotData.button}</a>
            </div>
          </div>
        `;

        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)';
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
        });

        row.appendChild(card);
    });

    cardContainer.appendChild(row);
}

function showSweetAlert(spot) {
    Swal.fire({
        title: spot.title,
        html: `
          <div id="carousel${spot.title.replace(/\s+/g, '')}" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              ${spot.carouselImages.map((img, index) => `
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                  <img src="${spot.path}${img}" class="d-block w-100" alt="...">
                </div>
              `).join('')}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carousel${spot.title.replace(/\s+/g, '')}" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carousel${spot.title.replace(/\s+/g, '')}" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <p>${spot.description}</p>
          <p><strong>Address:</strong> ${spot.address}</p>
          <p><strong>Entrance Fee:</strong> ${spot.fee}</p>
          <p><strong>Contact Number:</strong> ${spot.contact}</p>
        `,
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText: 'View Map',
        cancelButtonText: 'Call Number'
    }).then(result => {
        if (result.isConfirmed) {
            window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.address)}`, '_blank');
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            window.open(`tel:${spot.contact}`);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createCards();

    document.querySelectorAll('.btn-primary').forEach(button => {
        button.addEventListener('click', event => {
            event.preventDefault();
            const spotId = button.getAttribute('data-id');
            const spotInfo = spot.cards[spotId];
            if (spotInfo) {
                showSweetAlert(spotInfo);
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
  // Create Home section
  const intro = document.querySelector('.intro');
  intro.innerHTML = `
      <div class="row">
          <div class="col-lg-12 text-center">
              <h2 class="fw-bold text-primary">Welcome to Bohol</h2>
              <p class="lead">Discover the stunning beauty and rich cultural heritage of Bohol. From pristine beaches to historical landmarks and thrilling adventures, Bohol offers something for everyone. Explore the top tourist spots and immerse yourself in the unique charm of this island paradise.</p>
          </div>
      </div>
  `;

  // Create About Us section
  const about = document.querySelector('.about');
  about.innerHTML = `
      <div class="row">
          <div class="col-lg-8 col-md-7 mb-4">
              <h2 class="fw-bold text-primary">About Us</h2>
              <p class="lead">We are passionate about promoting the beauty and culture of Bohol. Our mission is to guide you through the most breathtaking tourist spots in Bohol, ensuring an unforgettable experience. Whether you're here for the pristine beaches, historical landmarks, or thrilling adventures, Bohol has something for everyone.</p>
              <p class="lead">As a proud resident and developer of this project, I, Jhon Anthony Pano, am dedicated to providing you with the best information and tips to make your visit to Bohol truly special. <a href="https://harkovindustry.github.io/JPano-Portfolio/" target="_blank" class="text-primary fw-bold">View Developer's Portfolio</a></p>
          </div>
          <div class="col-lg-4 col-md-5 mb-4 text-center">
              <img src="images/profile.jpg" class="img-fluid rounded-circle" alt="Jhon Anthony Pano">
          </div>
      </div>
  `;

    // Create Contact Developer section
    const contact = document.querySelector('.contact');
    contact.innerHTML = `
        <h2 class="text-center text-primary">Do you have any suggestion? Contact me!</h2>
        <form id="contactForm" class="mt-4">
            <div class="mb-3">
                <label for="email" class="form-label">Gmail Account</label>
                <input type="email" class="form-control" id="email" name="email" placeholder="name@gmail.com" required>
            </div>
            <div class="mb-3">
                <label for="subject" class="form-label">Subject</label>
                <input type="text" class="form-control" id="subject" name="subject" placeholder="Subject" required>
            </div>
            <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" id="message" name="message" rows="4" placeholder="Your message" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send</button>
        </form>
    `;

    // Add CSS for the form styling
    const style = document.createElement('style');
    style.textContent = `
        .form-label {
            font-weight: bold;
        }
        .form-control {
            border-radius: 0.5rem;
        }
        .btn-primary {
            background-color: #007bff;
            border-color: #007bff;
            border-radius: 0.5rem;
            transition: background-color 0.3s, border-color 0.3s;
        }
        .btn-primary:hover {
            background-color: #0056b3;
            border-color: #0056b3;
        }
    `;
    document.head.appendChild(style);

    // Initialize EmailJS
    emailjs.init('FzMCSnDCZkjNQx-3v'); // Replace with your EmailJS User ID

    // Contact form submission handling
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Check for internet connection
        if (navigator.onLine) {
            emailjs.send('service_qx6ifcn', 'template_lv7xnpd', {
                to_email: 'jacpano@gmail.com',
                from_name: email,
                to_name: 'Jhon Anthony Pano',
                message: message,
                subject: subject
            })
            .then(response => {
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent',
                    text: 'Your message has been sent successfully!',
                });
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error Sending Message',
                    text: 'There was an error sending your message. Please try again later.',
                });
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Unable to Send Message',
                text: 'Please check your internet connection and try again.',
            });
        }
    });

});
