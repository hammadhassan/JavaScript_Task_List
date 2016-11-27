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
        info = info + ("<li>" + tasklist[i] + "</li>"); 
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
    document.getElementById("list").style.display = 'none';
}
function edit() {
    var edit = document.getElementsByTagName("li").value;
    if (tasklist.length <= 1) {
        document.getElementById("li").innerHTML = ("<button type = 'edit' value = 'edit' >" + "edit" + "</button>")
    }
}