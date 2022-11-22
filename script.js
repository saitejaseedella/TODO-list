function getAndupdate() {
    let tit = document.getElementById('title').value;
    let desc = document.getElementById('Description').value;
    if (localStorage.getItem('itemJson') == null) {
        itemJsonArray = [];
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
        update();
    }
}
function update() {
    if (localStorage.getItem('itemJson') == null) {
        itemJsonArray = [];

        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);

    }


    //poplulate the table 
    let tableBody = document.getElementById("tableBody");
    let str = "";
    itemJsonArray.forEach((element, index) => {
        str += `
            <tr>
            <th scope="row">${index + 1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">
                            Delete
                        </button></td>
             </tr>           
            
         `;

    });
    tableBody.innerHTML = str;

}
add = document.getElementById("add");
add.addEventListener("click", getAndupdate);

update();

function deleted(itemIndex) {
    console.log("Delete", itemIndex);
    itemJsonArrayStr = localStorage.getItem('itemJson');
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    //delete items index element array
    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
    update();
}
function clearStorage() {
    if (confirm("Do you really want to clear")) {
        console.log("clear str")
        localStorage.clear();
        update();
    }
}
