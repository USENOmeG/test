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

function toggleContent(button) {
  const card = button.closest('.news-card');
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









  
  
