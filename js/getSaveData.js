const taskData = document.querySelector(".display-data");

//var database = firebase.database();

firebase.auth().onAuthStateChanged(function (user) {
  getData(user);
});

function showData(key, task, category, date, key) {
  const showUserTaskData = `
    
        <tr>
          <td>${task}</td>
          <td>${category}</td>
          <td>${date}</td>
        </tr>
             
     `;
  taskData.insertAdjacentHTML('beforeend', showUserTaskData);
}

function getData(user) {
  var user_ref = firebase.database().ref("users/" + user.uid);
  user_ref.on("child_added", (snapshot) => {
    const newTodos = snapshot.val();
    var key = snapshot.key;
    var task = newTodos.task;
    var category = newTodos.category;
    var date = newTodos.date;

    showData(key, task, category, date, key);
  });
}
