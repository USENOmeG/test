// For progressive bar underneath the Navbar
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
          var delay = index === 0 ? 1000 : 50; // 3 seconds delay for first element, 1 second delay for others
          element.style.transitionDelay = delay + 'ms';
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
  firstElement.style.transitionDelay = '2s';
  firstElement.style.opacity = 1;

  // Call applyFadeInAnimation to handle other elements
  applyFadeInAnimation();
});

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




// Viewport triggered animation
// const EnterViewPort = new addEventListener('entries', function() {
//   const animation = document.querySelectorAll('.animation')
//   const viewport = EnterViewPort('.animation')


//   if (EnterViewPort == forEach.entries ) {
//     document.add.classList('.play_animation').style.visibility = "visible"
//   } else {
//     document.querySelectorAll.toggle('.animation').style.visibility = "none"
//   }
// })


// text animations

// document.addEventListener("DOMContentLoaded", function() {
//   var textWrapper = document.querySelector(".ml11 .letters");
//   textWrapper.innerHTML = textWrapper.textContent.replace(
//     /([^\x00-\x80]|\w)/g,
//     "<span class='letter'>$&</span>"
//   );

//   anime.timeline()
//     .add({
//       targets: ".ml11 .line",
//       scaleY: [0, 1],
//       opacity: [0.5, 1],
//       easing: "easeOutExpo",
//       duration: 1000,
//     })
//     .add({
//       targets: ".ml11 .line",
//       translateX: [
//         0,
//         textWrapper.getBoundingClientRect().width + 10,
//       ],
//       easing: "easeOutExpo",
//       duration: 700,
//       delay: 1800,
//     })
//     .add({
//       targets: ".ml11 .letter",
//       opacity: [0, 1],
//       easing: "easeOutExpo",
//       duration: 600,
//       offset: "-=775",
//       delay: (el, i) => 34 * (i + 1),
//     })
//     .add({
//       targets: ".ml11 .line",
//       opacity: 0, // Fade out the line
//       duration: 500, // Duration of the fade-out animation
//       easing: "easeOutExpo",
//       complete: function() {
//         // Callback function to remove the line element from the DOM after fading out
//         var lineElement = document.querySelector(".ml11 .line");
//         lineElement.parentNode.removeChild(lineElement);
//       }
//     });
// });

// function isInViewport(element) {
//   var rect = element.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

// // Function to start the animation when the element enters the viewport
// function startAnimationIfInView() {
//   var textWrapper = document.querySelector('.ml2');
//   if (isInViewport(textWrapper)) {
//     textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
//     anime.timeline()
//       .add({
//         targets: '.ml2 .letter',
//         scale: [4, 1],
//         opacity: [0, 1],
//         translateZ: 0,
//         easing: "easeOutExpo",
//         duration: 950,
//         delay: (el, i) => 70 * i
//       });
//     // Remove the animation event listener to prevent it from triggering again
//     window.removeEventListener('scroll', startAnimationIfInView);
//   }
// }

// // Add event listener to start the animation when the page is scrolled
// window.addEventListener('scroll', startAnimationIfInView);

// // Start the animation if the element is already in the viewport when the page loads
// startAnimationIfInView();


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

const textFadeIn = document.getElementById("textFadeIn"); // test this out later (fade in animation) 
  window.onscroll = function() {
    if (window.scrollTo.arguments) {
      textFadeIn.classList.add("FadeIn-active") // have to edit CSS for the activate animation
    } else {
      textFadeIn.classList.remove("FadeIn-active")
    }
  };

// makes the screen into dark theme
document.querySelector('.mode-switcher').addEventListener (
  'click', () => {
    document.body.classList.toggle('dark-mode') 
    console.log('btn clicked')
  }
);


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


// For the company_index hovering effects
// So far, I'm wondering how to make it come true
function activateAndHoveringEffect() {
  var CompanyQuotes = getElementById('.hovering_effect');

  CompanyQuotes.addEventListener(
    'hover', () => {
      document.CompanyQuotes.classList.add('.active')
      log.console('quote has been hovered.')
    })
}










  
  
