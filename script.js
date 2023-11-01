var entry = document.getElementById("entry");

entry.addEventListener("click", display);
var row = 1;
function display() {
  var name = document.getElementById("fname").value;
  var mail = document.getElementById("mail").value;
  var number = document.getElementById("num_box").value;
  var gender = document.getElementById("gender").value;
  var skill = document.getElementById("skills..").value;
  var age = document.getElementById("age_box").value;
  var image = document.getElementById("picture").value;

  if (!name || !mail || !number || !gender || !skill || !age || !image) {
    alert("please fill all the entries");
    return;
  }

  var show = document.getElementById("show");
  var newRow = show.insertRow(row);

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);
  var cell6 = newRow.insertCell(5);
  var cell7 = newRow.insertCell(6);

  cell1.innerHTML = name;
  cell2.innerHTML = mail;
  cell3.innerHTML = number;
  cell4.innerHTML = gender;
  cell5.innerHTML = skill;
  cell6.innerHTML = age;
  cell7.innerHTML = image;

  row++;

  
}
