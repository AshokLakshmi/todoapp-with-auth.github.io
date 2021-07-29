const login=document.getElementById('login');
const signup=document.getElementById('signup');
const moveButton=document.getElementById('btn-color');
function register(){
    login.style.left="-400px";
    signup.style.left="50px";
    moveButton.style.left="110px";
}
function loginmove(){
    login.style.left="50px";
    signup.style.left="400px";
    moveButton.style.left="0";
}