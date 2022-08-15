let count = 0;
document.getElementById("input-btn").addEventListener("click", function () {
    count++;
    const inputValue = document.getElementById("input-value").value;

    const tableSection = document.getElementById("table-section");

    let tr = document.createElement("tr");
    tr.innerHTML = `
        <th scope="row">${count}</th>
        <td>${inputValue}</td>
        <td>
            <button class="btn btn-primary delete-btn">Delete</button>
            <button class="btn btn-success edit-btn">Edit</button>
        </td>
    `

    tableSection.appendChild(tr);
    document.getElementById("input-value").value = " ";

    const deleteBtn = document.getElementsByClassName("delete-btn");
    const editBtn = document.getElementsByClassName("edit-btn");
    const clearBtn = document.getElementById("clear-btn");
    for (let button of deleteBtn) {
        button.addEventListener("click", function (event) {
            event.target.parentNode.parentNode.style.display = 'none';
        })
    }

    for (let editButton of editBtn) {
        editButton.addEventListener("click", function (event) {
            event.target.parentNode.parentNode.style.textDecoration = "line-through";
        })
    }


    clearBtn.addEventListener("click", function () {
        tr.style.display = "none";
    })
})

