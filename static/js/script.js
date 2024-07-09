// For Navbar
const scrollProgressBar = document.addEventListener('scroll', function () {
    const scrollBar = document.getElementById('scrollProgressBar');
    const maxHeight = document.body.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / maxHeight) * 100;

    scrollBar.style.width = scrolled + '%';
});

const navBar = document.getElementById("navBar");
      window.onscroll = function () {
        if (window.scrollY > 22) {
          navBar.classList.add("scrolled");
        } else {
          navBar.classList.remove("scrolled");
        }
      };

const scrollBar = document.querySelectorAll('.scroll-progress-container');
      window.onscroll = function () {
        if (window.scrollY > 22) {
          scrollBar.classList.add("scrolled");
        } else {
          scrollBar.classList.remove("scrolled");
        }
      };

function navMobileIcon() {
  var mobileMenuIcon = document.querySelector('.mobile-menu-icon i');

  if (mobileMenuIcon) {
    mobileMenuIcon.addEventListener('click', () => {
      mobileMenuIcon.classList.toggle('fa-bars');
      mobileMenuIcon.classList.toggle('fa-xmark');
    });
  }
}

// For the button in navbar. It allows user to open search box
function magnify_searching() {
  var search_button = document.querySelector('.ai_search');
  var navbar_menu = document.querySelector('.navbar-menu');
  var search_box = document.querySelector('.search_box');
  
  search_button.classList.toggle('active');
  navbar_menu.classList.toggle('hidden');
  search_box.classList.toggle('active');
}

// For screen loader
document.addEventListener("DOMContentLoaded", function() {
  // Show loading screen
  document.getElementById("loading_screen").style.display = "flex";

  // Set timeout to hide loading screen after 3 seconds (minimum)
  setTimeout(function() {
    // Hide loading screen
    document.getElementById("loading_screen").style.display = "none";
    
    // Show content
    document.body.style.visibility = "visible"; // Assuming your content is in the body
  }, 2000); // 3000 milliseconds = 3 seconds minimum
});

window.addEventListener("load", function() {
  // Once the page has fully loaded, show content (in case it wasn't shown due to fast loading)
  document.body.style.visibility = "visible";
});

// Function to check if an element is in the viewport
function isInViewport(element) {
  var bounding = element.getBoundingClientRect();
  return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Typing animation
document.addEventListener("DOMContentLoaded", function() {
  var text = "あなたの著作物を守ります";
  var element = document.getElementById("wannatext");
  var charIndex = 0;

  function typeWriter() {
      if (charIndex < text.length) {
          element.innerHTML += text.charAt(charIndex);
          charIndex++;
          setTimeout(typeWriter, 200); // Adjust typing speed by changing the delay here
      } else {
          element.style.borderRight = 'none'; // Remove the caret after typing
      }
  }

  // Add a 3-second delay before starting the typing effect
  setTimeout(function() {
      typeWriter();
      element.style.animation = "blink-caret .75s step-end infinite";
  }, 3000); // 3000 milliseconds = 3 seconds
});

// Function to apply random fade-in animation to elements when they enter viewport
function applyFadeInAnimation() {
  var elements = document.querySelectorAll('.fade-in');
  elements.forEach(function(element, index) {
      if (isInViewport(element)) {
          // Set delay for animation for non-first elements
          // var delay = index === 0 ? 1000 : 50; // 3 seconds delay for first element, 1 second delay for others
          // element.style.transitionDelay = delay + 'ms';
          // Apply animation by setting opacity to 1
          element.style.opacity = 1;
      }
  });
}

// Call applyFadeInAnimation function when scrolling
window.addEventListener('scroll', applyFadeInAnimation);

// Call applyFadeInAnimation function on page load
window.addEventListener('load', function() {
  // Apply fade-in animation to all elements except the first one
  var elements = document.querySelectorAll('.fade-in:not(.first-header)');
  elements.forEach(function(element) {
      element.style.opacity = 0; // Start with opacity 0 for animation
  });

  // Apply fade-in animation to the first element with a delay of 3 seconds
  var firstElement = document.querySelector('.first-header .fade-in');
  var firstParagraph = this.document.querySelector('.first-contact');
  firstElement.style.transitionDelay = '0s';
  firstElement.style.opacity = 1;

  firstParagraph.style.transitionDelay = '0s'

  // Call applyFadeInAnimation to handle other elements
  applyFadeInAnimation();
});

// news cards scroll animation
document.addEventListener('DOMContentLoaded', function () {
  const newsContent = document.querySelector('.news-content');
  const newsCards = document.querySelectorAll('.news-card');
  const controlBtn = document.getElementById('play-pause');
  const indicators = document.querySelectorAll('.indicator');

  const cardWidth = newsCards[0].offsetWidth + 500; // Card width plus gap
  const numCards = newsCards.length;
  let currentPosition = 0;
  let isPlaying = true;
  let intervalId;

  // Duplicate the news cards to create a seamless scroll
  newsContent.innerHTML += newsContent.innerHTML;

  function startSlider() {
      intervalId = setInterval(scrollNews, 10);
  }

  function stopSlider() {
      clearInterval(intervalId);
  }

  function toggleSlider() {
      if (isPlaying) {
          stopSlider();
          controlBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
      } else {
          startSlider();
          controlBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
      }
      isPlaying = !isPlaying;
  }

  function scrollNews() {
      currentPosition -= 1;
      newsContent.style.transform = `translateX(${currentPosition}px)`;

      // Check if the news content has scrolled past the last card
      if (currentPosition <= -cardWidth * numCards) {
          currentPosition = 0;
          newsContent.style.transition = 'none';
          newsContent.style.transform = `translateX(${currentPosition}px)`;
          // Wait for the next frame to re-enable transition
          requestAnimationFrame(() => {
              newsContent.style.transition = '';
              currentPosition -= 1;
              newsContent.style.transform = `translateX(${currentPosition}px)`;
          });
      }
  }

  function updateIndicators() {
      const activeIndex = Math.abs(currentPosition / cardWidth) % numCards;
      indicators.forEach((indicator, index) => {
          indicator.classList.toggle('active', index === activeIndex);
      });
  }

  setInterval(updateIndicators, 100);

  controlBtn.addEventListener('click', toggleSlider);

  startSlider();
});

document.addEventListener('DOMContentLoaded', function() {
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const sliderContainer = document.querySelector('.slider-container');
  const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;

  function showSlide(index) {
    if (index >= slides.length) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = slides.length - 1;
    } else {
      currentIndex = index;
    }
    const offset = -currentIndex * 100;
    sliderContainer.style.transform = `translateX(${offset}%)`;
  }

  prevButton.addEventListener('click', function() {
    showSlide(currentIndex - 1);
  });

  nextButton.addEventListener('click', function() {
    showSlide(currentIndex + 1);
  });

  showSlide(currentIndex);
});

// WhyUs header 
document.addEventListener('DOMContentLoaded', function () {
  const thirdHeader = document.querySelector('.third-header');
  const thirdContent = document.querySelector('.third-content');
  const whyUsCardsContainer = document.querySelector('.whyUs_cards_container');

  // function handleScroll() {
  //     const containerRect = thirdContent.getBoundingClientRect();
  //     const headerRect = thirdHeader.getBoundingClientRect();
  //     const cardsContainerRect = whyUsCardsContainer.getBoundingClientRect();

  //     // Check if the header should be sticky and centered in the viewport
  //     if (containerRect.top < window.innerHeight / 2 && containerRect.bottom > window.innerHeight / 2) {
  //         thirdHeader.style.position = 'fixed';
  //         thirdHeader.style.top = '50%';
  //         thirdHeader.style.transform = 'translateY(-50%)';
  //         thirdHeader.style.zIndex = '1';
  //     } else {
  //         thirdHeader.style.position = 'absolute';
  //         thirdHeader.style.top = '100px';
  //         thirdHeader.style.transform = 'translateY(0)';
  //         thirdHeader.style.zIndex = '1';
  //     }

  //     // Check if the header should move below the cards
  //     if (containerRect.bottom <= headerRect.height + 100) { // Include 100px top margin
  //         thirdHeader.style.position = 'absolute';
  //         thirdHeader.style.top = `${cardsContainerRect.bottom - containerRect.top - headerRect.height}px`;
  //         thirdHeader.style.transform = 'translateY(0)';
  //     }
  // }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initialize on page load
});

// To toggle hidden content 
function toggleContent(button) {
  const card = button.closest('.news-card, .accordion_content ul li');
  const content = card.querySelector('.hidden-content');

  if (content.style.display === 'none' || content.style.display === '') {
    content.style.display = 'block';
    button.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
  } else {
    content.style.display = 'none';
    button.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
  }
}

// Fading animation
const textFadeIn = document.getElementById("textFadeIn"); // test this out later (fade in animation) 
  window.onscroll = function() {
    if (window.scrollTo.arguments) {
      textFadeIn.classList.add("FadeIn-active") // have to edit CSS for the activate animation
    } else {
      textFadeIn.classList.remove("FadeIn-active")
    }
  };

// Fot chatBot
function activateChatBot() {
  const chatbotBtn = document.querySelector('.chatbot-btn');
  const chatbotSection = document.querySelector('.chatbot-section');

  if (chatbotSection.style.display === 'none' || chatbotSection.style.display === '') {
    chatbotSection.style.display = 'block';
    chatbotBtn.querySelector('button').innerHTML = '<i class="fa-regular fa-circle-xmark"></i>&nbsp;Close';
  } else {
    chatbotSection.style.display = 'none';
    chatbotBtn.querySelector('button').innerHTML = '<i class="fa-regular fa-comment-dots"></i>&nbsp;Help';
  }
}

// document.querySelector('.chatbot-btn').addEventListener (
//   'click', () => {
//     document.body.classList.toggle('bot-activated')
//     console.log('chat bot is activated')
//   }
// );

// document.querySelector('.chatbot-btn').addEventListener (
//   'click', chatbot => {
//     document.body.classList.toggle('activated')
//     console.log('chat bot is activated')
//   }
// )

// function chatbot() {
//   console.log('button clicked')
// }

// A function for pages 
function PageChanger() {
  const page = document.querySelectorAll('.page');
  page.forEach((link) => {
    content.classList.remove('active');
  });

  const selectedPage = document.getElementById('.page' + pageNumber);
  selectedPage.classList.add('active');
}

// image slider on gallery for service_detail page
const slides = document.querySelectorAll('.gallery_images img');
 
function displayImage() {
  slides = slides.classList.add('.displayed');
}

function prevSlide() {
  const previousButton = document.querySelectorAll('.prev_btn')

  document.previousButton.addEventListener(
    'click', () => {
      document.slides.classList.add('.active')
      console.log('slides btn was clicked')
    }
  )
}

// For quotes in company index page
document.addEventListener('DOMContentLoaded', () => {
  function hoverPopOuts() {
    var headers = document.querySelectorAll('.quote_header');
    var contents = document.querySelectorAll('.vertical_content');

    // Display the first element by default
    contents[0].classList.add('active');

    headers.forEach((header, index) => {
      header.addEventListener('mouseover', () => {
        // Remove active class from all contents
        contents.forEach(content => content.classList.remove('active'));
        
        // Add active class to the current content
        contents[index].classList.add('active');
      });
    });
  }

  // Call the function to set up the event listeners
  hoverPopOuts();
});

// For first content background
document.addEventListener('mousemove', function (e) {
  const waves = document.querySelectorAll('.wave');
  const x = (e.clientX / window.innerWidth) * 2 - 1;
  const y = (e.clientY / window.innerHeight) * 2 - 1;

  waves.forEach(wave => {
      wave.style.transform = `translate(-50%, -50%) rotate(${x * 20}deg)`;
  });
});

// chevrons for navbar and whatnot
// function chevronDirection(button) {
//   var chevron = button.querySelector('.fa-chevron-down');

//   if (chevron) {
//       button.addEventListener('mouseover', () => {
//           chevron.classList.remove('fa-chevron-down');
//           chevron.classList.add('fa-chevron-up');
//       });

//       button.addEventListener('mouseout', () => {
//           chevron.classList.remove('fa-chevron-up');
//           chevron.classList.add('fa-chevron-down');
//       });
//   }
// }

// // Attach the function to all buttons with the class 'dropbtn'
// document.querySelectorAll('.dropbtn').forEach(button => {
//   chevronDirection(button);
// });

// Changing the navbar mobile icon from three bars to x mark
function navMobileIcon() {
  var mobileMenuIcon = document.querySelector('.mobile-menu-icon i');

  if (mobileMenuIcon) {
    mobileMenuIcon.addEventListener('click', () => {
      mobileMenuIcon.classList.toggle('fa-bars');
      mobileMenuIcon.classList.toggle('fa-xmark');
    });
  }
}

// Initialize the function
navMobileIcon();

