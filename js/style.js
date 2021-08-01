const login=document.querySelector('.login-form');
const signup=document.querySelector('.signup-form');

function register(){
    //login.style.display="none";
    //signup.style.display="block"
    login.style.display="none";
    signup.style.display="block";
  
}
function loginmove(){
   login.style.display="block";
    signup.style.display="none"
}