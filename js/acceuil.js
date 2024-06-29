document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('#mobile-menu-toggle');
    const mobileMenu = document.querySelector('#mobile-menu');

    mobileMenuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    // Cibler le bouton de connexion
    const connecterButton = document.getElementById('connecter');

    // Ajouter un événement de clic au bouton
    connecterButton.addEventListener('click', function() {
      // Rediriger vers index.html
      window.location.href = '../index.html';
    });
  })

  fetch('../footer.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('footer').innerHTML = data;
            });