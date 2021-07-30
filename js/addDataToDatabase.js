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