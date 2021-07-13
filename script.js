document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
});

function renderModal() {
    document.querySelector(".modal").classList.add("is-active");
}

function removeModal() {
    document.querySelector(".modal").classList.remove("is-active");
}

function removeNotification() {
    document.querySelector(".notification").remove();
}

// Clicking the log in or sign up buttons will render the modal
document.getElementById("signUpBtn").addEventListener("click", renderModal);
document.getElementById("logInBtn").addEventListener("click", renderModal);

// Clicking any of the buttons in the modal will remove it from the page
document.getElementById("close-btn").addEventListener("click", removeModal);
document.getElementById("success-btn").addEventListener("click", removeModal);
document.getElementById("cancel-btn").addEventListener("click", removeModal);

document.getElementById("remove-notification").addEventListener("click", removeNotification);

 