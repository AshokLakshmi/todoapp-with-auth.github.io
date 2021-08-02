setInterval(function () {
  var deleteBtn = document.querySelectorAll("#delete-btn");
  for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener("click", function () {
      var todoKey = deleteBtn[i].getAttribute("key");
      var userid = deleteBtn[i].getAttribute("userid");
      //console.log(userid + "=" + todoKey);

      let userRef = firebase
        .database()
        .ref("users/" + userid)
        .child(todoKey);
      userRef
        .remove()
        .then(() => {
         // alert("todo Deleted please reload page");
          location.reload();
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage);
          // ..
        });

      // firebase.database().ref('users/'+userid).on('child_removed',(snapshot) => {
      //         if (snapshot.exists()) {
      //         // let key=snapshot.key;
      //          if(snapshot.key===todoKey){
      //              snapshot.key.remove();
      //          }

      //          } else {
      //           console.log("No data available");
      //             }
      // });
    });
  }
}, 4000);
