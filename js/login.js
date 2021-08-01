let loginForm=document.getElementById('login-form');


loginForm.addEventListener('submit',function (e) {
  e.preventDefault();
})

function onLoginSubmit() {
      let loginEmail=document.getElementById('login-email').value;
     let loginPassword=document.getElementById('login-password').value;
     firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    alert(user.email+" login successful");
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });
}