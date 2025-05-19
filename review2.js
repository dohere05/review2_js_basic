function $(id){
    return document.getElementById(id);
}
//
function add(){
    const name = $("name").value.trim();
    const email = $("email").value.trim();
    const phone = $("phone").value.trim();
    const date = $("date").value.trim();

    if(name === "" || email === "" || phone === "" || date === ""){
        alert("Vui lòng điền đầy đủ thông tin!");
        return;
    }  

    if (!/^[A-Za-zÀ-ỹà-ỹ\s]{3,36}$/.test(name)) {
        alert("❌ Họ tên không hợp lệ (3-36 ký tự, chỉ chữ và khoảng trắng)");
        return;
    }
    if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        alert("❌ Email không đúng định dạng");
        return;
    }
    if (!/^(0|\+84)[3|5|7|8|9]\d{8}$/.test(phone)) {
        alert("❌ Số điện thoại không hợp lệ (VD: 0912345678 hoặc +84912345678)");
        return;
    }
    if (!/^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(date)) {
        alert("❌ Ngày sinh không hợp lệ (định dạng: DD/MM/YYYY)");
        return;
    }
    const table = $("tableOut").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);

    cell1.innerText = name;
    cell2.innerText = email;
    cell3.innerText = phone;
    cell4.innerText = date;
    
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Xóa";
    deleteBtn.onclick = function() {
        table.deleteRow(newRow.rowIndex - 1);
    };
    cell5.appendChild(deleteBtn);

    $("name").value = "";
    $("email").value = "";
    $("phone").value = "";
    $("date").value = "";
}

function search() {
    const searchText = $("search").value.toLowerCase().trim();
    const table = $("tableOut").getElementsByTagName('tbody')[0];
    const rows = table.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        let found = false;
        
        for (let j = 0; j < cells.length - 1; j++) { // -1 to exclude the action column
            const cellText = cells[j].innerText.toLowerCase();
            if (cellText.includes(searchText)) {
                found = true;
                break;
            }
        }
        
        rows[i].style.display = found || searchText === "" ? "" : "none";
    }
}