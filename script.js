
var entry=document.getElementById("entry");
entry.addEventListener("click",displaydetails);

var row=1; 

function displaydetails() {
    var name=document.getElementById(name).value;
    var age=document.getElementById(age).value;
    var dob=document.getElementById(dob).value;
    var email=document.getElementById(email).value;
    var company=document.getElementById(company).value;

    if(!name || !age || !dob || !email || !company){
        alert("Please fill the required details");
        return;
    }
    
    var display=document.getElementById("display");
    var newRow= display.insertRow(row);
    var cell1=newRow.insertCell(0);
    var cell2=newRow.insertCell(1);
    var cell3=newRow.insertCell(2);
    var cell4=newRow.insertCell(3);
    var cell5=newRow.insertCell(4);

    cell1.innerHTML=name;
    cell2.innerHTML=age;
    cell3.innerHTML=dob;
    cell4.innerHTML=email;
    cell5.innerHTML=company;

    row++;
}