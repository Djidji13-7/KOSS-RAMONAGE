document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".icon1");
  const menu = document.querySelector(".menu");
  const closeIcon = document.querySelector(".fermer");
  const navLinks = document.querySelectorAll(".nav-link");

  // Affiche/masque le menu lorsque l'icône est cliquée
  menuIcon.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  // Masque le menu lorsque 'Fermer' est cliqué
  closeIcon.addEventListener("click", () => {
    menu.classList.remove("active");
  });

  // Masque le menu lorsque l'un des liens est cliqué
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });
});

///NAV SCROLL FIXED//////
document.addEventListener("DOMContentLoaded", () => {
  const navContainer = document.querySelector(".nav-container");

  // Ajoute une écoute pour le défilement
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navContainer.classList.add("shrink");
    } else {
      navContainer.classList.remove("shrink");
    }
  });
});

////PROMO//////////////
document.addEventListener("DOMContentLoaded", () => {
  const promoBar = document.querySelector(".promo");
  const promoCloseIcon = document.querySelector(".fermer1");
  const promoMessages = promoBar.querySelectorAll("span:not(.fermer1)");

  let currentIndex = 0;

  // Function to show the next message
  function showNextMessage() {
    // Hide all messages
    promoMessages.forEach((msg, index) => {
      msg.style.opacity = 0;
      msg.style.zIndex = -1;
    });

    // Show the current message
    promoMessages[currentIndex].style.opacity = 1;
    promoMessages[currentIndex].style.zIndex = 1;

    // Move to the next message, looping back to the first if needed
    currentIndex = (currentIndex + 1) % promoMessages.length;
  }

  // Start the cycle to change messages every 2 seconds
  setInterval(showNextMessage, 2000);

  // Initial call to show the first message
  showNextMessage();

  // Add a click event to the close icon to hide the promo
  promoCloseIcon.addEventListener("click", () => {
    promoBar.classList.add("hide");
  });
});

//FAQ////////////////////////////////////

document.querySelectorAll(".faq-item h4").forEach(item => {
  item.addEventListener("click", () => {
    // Toggle la classe "active" sur le titre de la question
    item.classList.toggle("active");

    // Afficher ou masquer la réponse correspondante
    const answer = item.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});
