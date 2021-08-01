var table=document.getElementById('table-body');
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        var userId=user.uid;
      firebase.database().ref('users/'+userId).on('child_added',(snapshot) => {
        if (snapshot.exists()) {
         // console.log(snapshot.val().task);
         let key=snapshot.key;
          let retriveDataList=snapshot.val();
          let taskData=retriveDataList.task;
          let categoryData=retriveDataList.category;
        displayData(taskData,categoryData,userId,key);
          
         } else {
          console.log("No data available");
            }
});  
} 
});

function displayData(task,category,userId,key) {
    // var html="";
    // html+="<tr></tr>";
    //  html+="<td>"+task+"</td>";
    //   html+="<td>"+category+"<button key="+key+" userid="+userId+" id="+"delete-btn"+">Delete</button>"+"</td>";
     let addInHtml=`
       <tr key="${key}">
          <td>${task}</td>
          <td>${category}</td>
          <td><i class="material-icons delete" userid="${userId}" key="${key}" id="delete-btn" >delete</i></td>
      </tr>
    
     `
  table.insertAdjacentHTML('afterbegin',addInHtml);
    
}
