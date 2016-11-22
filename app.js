var tasklist = [];
/*for(var i = 0; i < list.length; i++) {
    document.getElementsByTagName("li")= this.innerHTML;
} */
function add() {
    //document.getElementById("list") = this.innerHTML;
    var GetInputValue = document.getElementById("input").value;
    if (GetInputValue == " " || GetInputValue == "") {
        alert("Please write some thing");
    }
    else {
        tasklist.push(GetInputValue);
    }
    if (tasklist.length >= 1) {
        document.getElementById("heading").innerHTML = "Enter Your Task";
    }
    var List = document.getElementById("list");
    var data = "";
    for (var i = 0; i < tasklist.length; i++) {
        data += "<li>" + tasklist[i] + "</li>";
        List.innerHTML = data;
    }
    data = "";
    document.getElementById("myInput").value = "";

}
function removed() {
    list = [];
}