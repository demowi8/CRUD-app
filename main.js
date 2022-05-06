var selectedRow = null;
function onFormSubmit(event){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
        return;
    }
}

//Retrieve the Data
function readFormData(){
    var formData = {};
    formData["firstName"] = document.getElementById("firstName").value;
    formData["middleName"] = document.getElementById("middleName").value;
    formData["lastName"] = document.getElementById("lastName").value;
    formData["phoneNumber"] = document.getElementById("phone").value;
    formData["email"] = document.getElementById("email").value;
    formData["address"] = document.getElementById("address").value;
    formData["dob"] = document.getElementById("dob").value;
    formData["city"] = document.getElementById("city").value;
    formData["state"] = document.getElementById("state").value;
    formData["zip"] = document.getElementById("zip").value;
}

//Insert new Data
function insertNewRecord(data){
    var table = document.getElementById("storedList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell0 = newRow.insertCell(0);
    cell1.innerHTML = data.firstName;

    var cell1 = newRow.insertCell(1);
    cell2.innerHTML = data.middleName;

    var cell2 = newRow.insertCell(2);
    cell3.innerHTML = data.lastName;

    var cell3 = newRow.insertCell(3);
    cell1.innerHTML = data.phoneNumber;

    var cell4 = newRow.insertCell(4);
    cell1.innerHTML = data.email;

    var cell5 = newRow.insertCell(5);
    cell1.innerHTML = data.address;

    var cell6 = newRow.insertCell(6);
    cell1.innerHTML = data.dob;

    var cell7 = newRow.insertCell(7);
    cell1.innerHTML = data.city;

    var cell8 = newRow.insertCell(8);
    cell1.innerHTML = data.state;

    var cell9 = newRow.insertCell(9);
    cell1.innerHTML = data.zip;

    var cell10 = newRow.insertCell(10);
    cell10.innerHTML = '<button>Edit</button> <button>Delete</button>'
}