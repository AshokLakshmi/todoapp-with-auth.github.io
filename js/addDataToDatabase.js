const addButton = document.getElementById("task-add-button");

function addTaskToDatabase() {
  let taskInput = document.getElementById("input-task").value;
  let taskcategory = document.getElementById("input-category").value;
  var user = firebase.auth().currentUser;
  
  if (taskInput != "" && taskcategory != "") {
      var todoData={
           task: taskInput,
          category: taskcategory,
      }
    firebase.database().ref("users/" + user.uid).push(todoData,function(error){
       resetInputFields();
        if(error){
           alert(error.message);
        }else{
            alert("Data Added");
        }
    });
  }
}
//Reset Input fields after click
function resetInputFields() {
 document.getElementById("input-task").value="";
  document.getElementById("input-category").value=null;

}