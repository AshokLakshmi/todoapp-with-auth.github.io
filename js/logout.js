function logoutButton() {
  firebase
    .auth()
    .signOut()
    .then(function () {
      alert("logout successful");
    })
    .catch(function (error) {
      // An error happened.
    });
}
