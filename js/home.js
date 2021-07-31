
const taskData = document.querySelector(".display-data");

var database = firebase.database();
//const displayDataItems=document.getElementsByClassName('display-data');
//window.setInterval(displayDataItems,1000);
firebase.auth().onAuthStateChanged(function (user) {
  
getData(user);
  
});

function showData(key,task,category,date,key) {
  
   const showUserTaskData = `
     <div class="data-item" child-key="${key}">
                <div class="items">
                 <input value="${category}" readOnly />
                 <input value="${task}" readOnly />
                  <input value="${date}" readOnly /></div>
                  <div class="edit-delete">
                 <button class="delete-btn" id="delete-btn key="${key}">Delete</button>
                 <button class="delete-btn" id="edit-btn" key="${key}">Edit</button>
                 </div>
             </div>
     `;
      taskData.insertAdjacentHTML("afterbegin", showUserTaskData);

  
}

   

function getData(user) {
  var user_ref = database.ref("users/" + user.uid);
 user_ref.on("child_added", (snapshot) => {
    const newTodos = snapshot.val();
    var key = snapshot.key;
    var task = newTodos.task;
    var category = newTodos.category;
    var date = newTodos.date;
      showData(key,task,category,date,key);
     
    });
  });
}

   

