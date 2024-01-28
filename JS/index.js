//<!-- Add this script to the end of your HTML files, just before </body> tag -->


  // Function to toggle mobile navigation
  function toggleNav() {
    const navList = document.querySelector('.Nav-bar nav ul');
    navList.classList.toggle('show');
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Basic form validation for the contact form
  function validateForm() {
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    if (emailInput.value === '' || messageInput.value === '') {
      alert('Please fill in all fields.');
      return false;
    }

    if (!isValidEmail(emailInput.value)) {
      alert('Please enter a valid email address.');
      return false;
    }

    return true;
  }

  // Helper function to validate email
  function isValidEmail(email) {
    // Add your email validation logic here
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

//<!-- Add this to your HTML file where you want the carousel -->

  
// Add JavaScript to enable the image carousel
    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel img');
  
    function showImage(index) {
      images.forEach((image, i) => {
        image.style.display = i === index ? 'block' : 'none';
      });
    }
  
    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }
  
    function prevImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    }
  
    // Optionally, you can add setInterval to automatically cycle through images
    // setInterval(nextImage, 5000); // Change 5000 to the desired interval in milliseconds

//<!-- Add this to your HTML file where you want to load content dynamically -->
    

    // Add JavaScript to load content dynamically
    const dynamicContentContainer = document.getElementById('dynamic-content');
    
    function loadDynamicContent() {
        // Use AJAX or fetch to load content from a server
        // Example using fetch:
     fetch('content.json')
       .then(response => response.json())
       .then(data => {
         dynamicContentContainer.innerHTML = data.content;
       })
       .catch(error => {
         console.error('Error loading content:', error);
       });
    }
    
      // Call the function to load content when the page loads
      // loadDynamicContent();

    
