const addStudent = (event) => {
    event.preventDefault();

    let listStudents = getListStudents();

    const student = {
        id: listStudents.length +50000,
        name: document.getElementById('name').value,
        lastName: document.getElementById('lastName').value
    };

    listStudents.push(student);

    localStorage.setItem('listStudents', JSON.stringify(listStudents));

    document.getElementById('name').value = null;
    document.getElementById('lastName').value = null;

    window.location.href = "table.html";
};