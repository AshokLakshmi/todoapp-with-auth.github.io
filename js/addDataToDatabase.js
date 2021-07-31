document.getElementById("taskform").addEventListener("submit", function (e) {
  e.preventDefault();
  let taskInput = document.getElementById("task").value;
  let categoryInput = document.getElementById("category").value;
  let dateinput = document.getElementById("date").value;
  var userID = firebase.auth().currentUser.uid;
  var root = firebase.database().ref().child("users");
  var userRef = root.child(userID);
  // console.log(userID);
  var taskData = {
    task: taskInput,
    category: categoryInput,
    date: dateinput,
  };
  userRef.push(taskData, function (error) {
    reset();
    if (error) {
    } else {
      alert("task added");
   
    }
  });
});


function reset(){
document.getElementById('taskform').reset();
}

function writeNewPost(taskInput, categoryInput, dateinput) {
 

   var updateData = {
    task: taskInput,
    category: categoryInput,
    date: dateinput,
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('posts').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}
