function toggleDropdown() {
  var dropdownContent = document.querySelector('.region-content');
  dropdownContent.classList.toggle('show');
}

function updateButtonText(text) {
  var button = document.querySelector('.droprgn');
  button.textContent = text;
  

  var dropdownContent = document.querySelector('.region-content');
  dropdownContent.classList.remove('show');
}


document.addEventListener('click', function(event) {
  if (!event.target.matches('.droprgn')) {
      var dropdowns = document.getElementsByClassName("region-content");
      for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }
      }
  }
});


function updateButtonText(text, event) {
  event.preventDefault();
  
  var button = document.querySelector('.droprgn');
  button.textContent = text;
  

  var dropdownContent = document.querySelector('.region-content');
  dropdownContent.classList.remove('show');
}
