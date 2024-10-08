const showStudents = () => {
    const tbodyElement = document.getElementsByTagName("tbody")[0];

    if (!tbodyElement) {
        return;
    }
    tbodyElement.innerHTML = "";

    let listStudents = document.getElementById("search-bar").value ? getFilteredList() : getListStudents();
    
    if (!listStudents || listStudents.length === 0) return;

    for(let i = (pagination.pagNumber - 1) * pagination.pagLimit; i < pagination.pagLimit * pagination.pagNumber; i++) {
        const student = listStudents[i];

        if (!student) continue;

        const trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${student.id}</td><td>${student.name}</td><td>${student.lastName}</td>`;
        tbodyElement.appendChild(trElement);
    }
};

getSelectedValue();
document.getElementById("pag-options").addEventListener("change", getSelectedValue);
console.log(pagination);
