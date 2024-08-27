emailjs.init("pOf5J7jjUfFkG9q4D"); // Replace with your EmailJS user ID

document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const email = document.getElementById('email').value;
  const verificationCode = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit code

  // Save the code in a temporary storage (localStorage, sessionStorage, or server-side)
  localStorage.setItem('verificationCode', verificationCode);

  emailjs.send('service_93qnw0y', 'verif_code_xplormc', {
    to_email: email,
    verification_code: verificationCode
  })
  .then(response => {
    console.log('Email sent successfully', response);
    alert('Verification code sent to your email.');
  })
  .catch(error => {
    console.error('Error sending email', error);
  });
});
