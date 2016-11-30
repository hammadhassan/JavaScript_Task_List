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
        info = info + ("<li>" + tasklist[i] + "<button type='edit' class='edit' >edit</button>" + "<button class='delete' type='delet'>Delete</button>" +"</li>"); 
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
    //document.getElementsByTagName("li").innerHTML = ("<input type = 'edit' value = 'edit' onClick = 'edit()' >" + tasklist )
    alert("yes");
    
}
if (tasklist.length <= 1) {
        document.getElementsByTagName("li").innerHTML = ("<button type = 'edit' value = 'edit' >" + "edit" + "</button>")
    }
    //alert(edit);