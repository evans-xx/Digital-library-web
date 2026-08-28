document.getElementById('getStartedBtn').onclick = function() {
  document.getElementById('signupModal').style.display = 'flex';
}

document.getElementById('closeBtn').onclick = function() {
  document.getElementById('signupModal').style.display = 'none';
}

document.getElementById('signupForm').onsubmit = function(e) {
  e.preventDefault(); // stops it from trying to go to contact.php
  alert('Thank you for signing up! We will contact you soon.');
  document.getElementById('signupModal').style.display = 'none';
  this.reset();
}
