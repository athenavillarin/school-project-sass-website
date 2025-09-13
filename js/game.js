const logoNormal = document.getElementById('logo-normal');
const logoHover = document.getElementById('logo-hover');
const dropdownContainer = document.querySelector('.navbar .container');
const gameList = document.getElementById('game-list');
const gameImages = document.getElementById('game-container');
const placeholderImages = document.getElementById('placeholder-container');
const arrow = document.querySelector('.navbar-logo .arrow');

// Toggle dropdown visibility when logo or arrow is clicked
const toggleDropdown = (event) => {
  if (event) {
    event.stopPropagation(); // Prevent document click from immediately closing dropdown
  }
  dropdownContainer.classList.toggle('show');
  updateGameImagesDisplay();
};

[logoNormal, logoHover, arrow].forEach(element => {
  element.addEventListener('click', toggleDropdown);
});


// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
  if (!dropdownContainer.contains(event.target) && !logoNormal.contains(event.target) && !logoHover.contains(event.target)) {
    dropdownContainer.classList.remove('show');
    updateGameImagesDisplay();
  }
});

// Handle mouseover and mouseout on game list items
gameList.addEventListener('mouseover', (event) => {
  if (event.target.tagName === 'A') {
    const gameId = event.target.getAttribute('id').replace('#', '');
    showGameImage(gameId);
  }
});

gameList.addEventListener('mouseout', showPlaceholderImages);

// Show game image based on hovered link
function showGameImage(gameId) {
  Array.from(gameImages.querySelectorAll('.game-image')).forEach(img => img.style.display = 'none');
  placeholderImages.style.display = 'none';
  const gameImage = document.getElementById(`${gameId}-image`);
  if (gameImage) {
    gameImage.style.display = 'block';
  }
}

// Show placeholder images
function showPlaceholderImages() {
  placeholderImages.style.display = 'grid';
  Array.from(gameImages.querySelectorAll('.game-image')).forEach(img => img.style.display = 'none');
}

// Update game images display based on dropdown visibility
function updateGameImagesDisplay() {
  if (dropdownContainer.classList.contains('show')) {
    showPlaceholderImages();
  } else {
    placeholderImages.style.display = 'none';
    Array.from(gameImages.querySelectorAll('.game-image')).forEach(img => img.style.display = 'none');
  }
}

showPlaceholderImages();
