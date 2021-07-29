//logout
        function logoutButton() {
            firebase.auth().signOut()
                .then(function () {
                   alert("logout successful");
                }).catch(function (error) {
                    // An error happened.
                });
        }
       
//logout end

document.getElementById('taskform').addEventListener("submit",function(e){
     e.preventDefault();
     let taskInput= document.getElementById('task').value;
    let categoryInput= document.getElementById('category').value;
    let dateinput=document.getElementById('date').value;
     var userID=firebase.auth().currentUser.uid;
    var root=firebase.database().ref().child("users");
    var userRef=root.child(userID);
   // console.log(userID);
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
   
   
  
 })
 




  


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


var database=firebase.database();

function getData(user) {
    
     //console.log("user"+firebase.auth().currentUser.uid);
     var user_ref=database.ref('users/'+user.uid)
     user_ref.on('value',function(snapshot){
         var data=snapshot.val();
         var task=data.task;
         var category=data.category;
         var date=data.date;
         showitems(task,category,date);
        //const uid = user.uid;
    //console.log(uid);
         
     })
    
  
   
}
firebase.auth().onAuthStateChanged(function (user) {
            
                getData(user);
        
           
        });

