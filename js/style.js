const login=document.getElementById('login');
const signup=document.getElementById('signup');
const moveButton=document.getElementById('btn-color');
const forgetDiv=document.getElementById('forget-tab');



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
function forgetTab(){
    forgetDiv.style.display="block";
    

   
}
function closeForget(){
     forgetDiv.style.display="none";
}

 var check = function () {
            if (document.getElementById('registerpassword').value ==
                document.getElementById('registerconfimepassword').value) {
                document.getElementById('message').style.color = 'green';
                document.getElementById('message').innerHTML = 'matching';
            } else {
                document.getElementById('message').style.color = 'red';
                document.getElementById('message').innerHTML = 'not matching';
            }
        }