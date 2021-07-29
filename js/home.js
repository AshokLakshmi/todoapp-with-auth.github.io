
  firebase.auth().onAuthStateChanged(function (user) {
            if (!user) {
                location.replace("index.html");
            } else {
                document.getElementById('useremail').innerHTML = user.email;
               
            }
        });
        

        function logoutButton() {
            firebase.auth().signOut()
                .then(function () {
                   alert("logout successful");
                }).catch(function (error) {
                    // An error happened.
                });
        }
       

const submitButton=document.getElementById('taskform').addEventListener("submit",function(e){
     e.preventDefault();
     let taskInput= document.getElementById('task').value;
    let categoryInput= document.getElementById('category').value;
    let dateinput=document.getElementById('date').value;

    var root=firebase.database().ref().child("users");
    var userID=firebase.auth().currentUser.uid;
    var userRef=root.child(userID);
    var taskData={
        task:taskInput,
         category:categoryInput,
         date:dateinput,
    }
    userRef.set(taskData,function(error){
        if(error){
         
        }else{
        alert("task added");
        
        }
    })
   
   
   //writeUserData(taskInput,categoryInput,dateinput)
 })
 




  

//  function writeUserData(taskInput,categoryInput,dateinput) {
//       var user=firebase.auth().currentUser;
     
//   firebase.database().ref('users/' + user.uid+"/").set({
//     task:taskInput,
//     category: categoryInput,
//     date:dateinput
//   });
// }
 
//fetch and display data
const taskData=document.querySelector('.display-data');
 
function showitems(task,category,date) {

    const showUserTaskData=`
    <div class="data-item">
                <h3>${category}</h3>
                <p>${task}</p>
                <span>${date}</span>
            </div>
    `
    taskData.insertAdjacentHTML('afterbegin',showUserTaskData);
    
}
