var tasklist = [];
//add function
function add() {
    var data = document.getElementById("myInput").value;
    //if input is empty
    if (data == "" || data == " " || data == "  " ) {
        alert("Please Enter Your Task")
    }
    else {
        tasklist.push(data);
    }
    var list = document.getElementById("list");
    var info = "";
    for(var i = 0; i < tasklist.length; i++) {
        info = info + ("<li>" + tasklist[i]/*+ "<button type='edit' class='edit' id='edit' onClick='edit();'>edit</button>"*/ +"<button class='delete' type='delet' >Delete</button>" +"</li>"); 
        list.innerHTML = info;
    }
    myInput.value = "";
    //Remove individual item    
    var deletebutton = document.getElementsByClassName("delete");
    for(var j = 0; j < deletebutton.length; j++){
        deletebutton[j].onclick = function(){
           this.parentElement.style.display = "none"; 
            tasklist.splice(0, 1);
        }
    }
}
//removed all items
function removed() {
    document.getElementById("list").innerHTML = "";
    tasklist = [];
}
// function edit() {
//         var tasklist1 = prompt("edit");
//         var edit = document.getElementById("edit");
//     for (var i = 0; i < edit.legnth; i++) {
//         edit[i].onClick = function() {
//             tasklist1.push(tasklist[i]);
//         }
//     }
// }
// //Remove individual item    
    // var deletebutton = document.getElementsByClassName("delete");
    // for(i = 0; i < deletebutton.length; i++){
    //     deletebutton[i].onclick = function(){
    //         this.parentElement.style.display = "none";
    //     }
    // }
//  function deleteb() {
//      var deletebutton = document.getElementsByClassName("delete");
//     for(i = 0; i < deletebutton.length; i++){
//         deletebutton[i].onclick = function(){
//              this.parentElement.style.display = "none";
//         }
//     }   
//  }