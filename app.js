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
        info = info + ("<li>" + tasklist[i] + "<button type='edit' class='edit' onClick='edit();'>edit</button>" + "<button class='delete' type='delet' onClick='deleteb();'>Delete</button>" +"</li>"); 
        list.innerHTML = info;
    }
    myInput.value = "";
}
//removed code
function removed() {
    // location.reload();
    // list = "";
    // info = "";
    // tasklist = [];
    document.getElementById("list").style.display = "none";
}
function edit() {
    var tasklist1 = prompt("edit");
    var arr = [taskliskt1];
    arr.push(tasklist[i]);
    //alert("yes");
}
function deleteb() {
    //document.getElementsByTagName("li").style.display = "none";
    alert("work");
}