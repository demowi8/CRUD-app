
    var selectedRow = null;
    
    function onFormSubmit(e){
        e.preventDefault();
    var formDatas = readFormData();
    if(selectedRow == null){
        insertNewRecord(formDatas);
    }
    else{
        updateRecord(formDatas);
    }
    resetForm();
};

//Retrieve the Data
function readFormData(){
    var formData = [];
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
    
    return formData;
};

//Insert new Data
function insertNewRecord(data){
    var table = document.getElementById('storedList').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    var cell0 = newRow.insertCell(0);
        cell0.innerHTML = data.firstName;
        
    var cell1 = newRow.insertCell(1);
        cell1.innerHTML = data.middleName;
        
    var cell2 = newRow.insertCell(2);
        cell2.innerHTML = data.lastName;
        
    var cell3 = newRow.insertCell(3);
        cell3.innerHTML = data.phoneNumber;

    var cell4 = newRow.insertCell(4);
        cell4.innerHTML = data.email;
        
    var cell5 = newRow.insertCell(5);
        cell5.innerHTML = data.address;
        
    var cell6 = newRow.insertCell(6);
        cell6.innerHTML = data.dob;
    
    var cell7 = newRow.insertCell(7);
    cell7.innerHTML = data.city;
    
    var cell8 = newRow.insertCell(8);
        cell8.innerHTML = data.state;
        
    var cell9 = newRow.insertCell(9);
        cell9.innerHTML = data.zip;
        
    var cell10 = newRow.insertCell(10);
        cell10.innerHTML = '<button>Edit</button> <button>Delete</button>'
    };
    
    //Edit the data
    function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("firstName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("middleName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("lastName").value = selectedRow.cells[2].innerHTML;
    document.getElementById("phoneNumber").value = selectedRow.cells[3].innerHTML;
    document.getElementById("email").value = selectedRow.cells[4].innerHTML;
    document.getElementById("address").value = selectedRow.cells[5].innerHTML;
    document.getElementById("dob").value = selectedRow.cells[6].innerHTML;
    document.getElementById("city").value = selectedRow.cells[7].innerHTML;
    document.getElementById("state").value = selectedRow.cells[8].innerHTML;
    document.getElementById("zip").value = selectedRow.cells[9].innerHTML;
};
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.firstName;
    selectedRow.cells[1].innerHTML = formData.middleName;
    selectedRow.cells[2].innerHTML = formData.lastName;
    selectedRow.cells[3].innerHTML = formData.phoneNumber;
    selectedRow.cells[4].innerHTML = formData.email;
    selectedRow.cells[5].innerHTML = formData.address;
    selectedRow.cells[6].innerHTML = formData.dob;
    selectedRow.cells[7].innerHTML = formData.city;
    selectedRow.cells[8].innerHTML = formData.state;
    selectedRow.cells[9].innerHTML = formData.zip;
};

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storedList').deleteRow(row.rowIndex);
        resetForm();
    }
};

//Reset the data
function resetForm() {
    document.getElementById("firstName").value = '';
    document.getElementById("middleName").value = '';
    document.getElementById("lastName").value = '';
    document.getElementById("phoneNumber").value = '';
    document.getElementById("email").value = '';
    document.getElementById("address").value = '';
    document.getElementById("dob").value = '';
    document.getElementById("city").value = '';
    document.getElementById("state").value = '';
    document.getElementById("zip").value = '';
    
    selectedRow = null;
};
