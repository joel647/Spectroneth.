  // // JavaScript for form validation
  // document.getElementById('loginForm').addEventListener('submit', function(event) {
  //   event.preventDefault(); // Prevent the form from submitting

  //   // Clear previous errors
  //   document.getElementById('usernameError').textContent = '';
  //   document.getElementById('passwordError').textContent = '';

  //   let hasError = false;

  //   // Validate username
  //   const username = document.getElementById('username').value.trim();
  //   if (!username) {
  //     document.getElementById('usernameError').textContent = 'Username is required';
  //     hasError = true;
  //   }

  //   // Validate password
  //   const password = document.getElementById('password').value.trim();
  //   if (!password) {
  //     document.getElementById('p    asswordError').textContent = 'Password is required';
  //     hasError = true;
  //   }

  //   // If no errors, submit the form
  //   if (!hasError) {
  //     alert('Form submitted successfully!');
  //     // You can handle the focrm submission here, e.g., sending data to the server
  //   }
  // });




document.getElementById('checkbox').onchange = function(e){
  password.type= checkbox.type? 'text': 'password';
setTimeout(()=> password.type = 'password' ,500)

}


// ...existing code...

// Function to validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}



// Function to validate password
function isValidPassword(password) {
  return password.length >= 8;
}


// Event listener for login button
document.getElementById('loginButton').addEventListener('click', function() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const passwordError = document.getElementById('passwordError');

  if (!email || !password) {
      passwordError.textContent = 'Enter the fields';
      return;
  }

  if (!isValidEmail(email)) {
      passwordError.textContent = 'Invalid email address';
      return;
  }



  if (!isValidPassword(password)) {
    passwordError.textContent = 'password must be a number and must be 7 long';
  }else{
              setTimeout(()=> 
                passwordError.textContent  = 'logging in....',
                passwordError.style.color=' #ecd3d32b'
              ,500)
                 
                 setTimeout(()=>window.open('/pages/spectronet/index.html',"_self"),2500)
            
      }
  }
)
