const loginForm = document.getElementById("login");
const registerForm = document.getElementById("signup");
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("login");
});
registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("signup");
});

const auth = firebase.auth();
const database = firebase.database();


auth.onAuthStateChanged(function (user) {
    if (user) {
        alert('user is signed successful');
        location.replace("home.html");
    }else{
       
    }
});

//login
function loginFunction() {
    const loginEmail = document.getElementById("loginemail").value;
    const loginPassword = document.getElementById("loginpassword").value;
    auth
        .signInWithEmailAndPassword(loginEmail, loginPassword)
        .then(function (response) { 
          
        })
        .catch(function (error) {
            document.getElementById("loginError").innerHTML = error.message;
        });
        
}






function registerFunction() {
    const registerEmail = document.getElementById("registeremail").value;
    const registerPassword = document.getElementById("registerpassword").value;
    
  
    auth.createUserWithEmailAndPassword(registerEmail, registerPassword)
        .then(function () {
           alert("Registration successful");
           
        })
        .catch(function (error) {
            document.getElementById("regsiterError").innerHTML = error.message;
        });
       



}











//forget password
function forgetPassword() {
    const loginEmail = document.getElementById("loginemail").value;
    auth
        .sendPasswordResetEmail(loginEmail)
        .then(() => {
            alert(
                "Password Reset Email Send on Email Address : " +
                loginEmail +
                " Please check Your Email"
            );
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
}
