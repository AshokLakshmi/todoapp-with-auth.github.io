let signupForm=document.getElementById('signup-form');
signupForm.addEventListener('submit',function(e){
    e.preventDefault();

})

function onSignupSubmit() {

    let siginEmail=document.getElementById('sigin-email').value;
    let siginPassword=document.getElementById('sigin-password').value;
    let siginConfirmPassword=document.getElementById('sigin-confirm-password').value;
        if(siginPassword===siginConfirmPassword){
             firebase.auth().createUserWithEmailAndPassword(siginEmail, siginPassword)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    alert(user.email+" register successful");
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
    // ..
  });
        }else{
            alert("confirm password does not match please try again");
        }

   

    
}