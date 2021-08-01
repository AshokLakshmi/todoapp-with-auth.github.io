function forgetPassword() {
    var forgetEmail = document.getElementById("forget-email").value;
    firebase.auth().sendPasswordResetEmail(forgetEmail)
        .then(() => {
            resetForgetFields();
            alert(
                "Password Reset Email Send on Email Address : " +
                forgetEmail +
                " Please check Your Email"
            );
             
            
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
       
}

function resetForgetFields() {
 document.getElementById("forget-email").value="";

}
