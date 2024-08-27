document.getElementById('verification-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const userCode = document.getElementById('code').value;
  const storedCode = localStorage.getItem('verificationCode');

  if (userCode === storedCode) {
    alert('Verification successful!');
    // Proceed with signup (e.g., redirect to a new page or complete the registration process)
  } else {
    alert('Invalid verification code. Please try again.');
  }
});
