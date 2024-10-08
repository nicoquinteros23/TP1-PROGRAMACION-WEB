let filteredStudents = [];

const searhFilter = () => {
    const searchValue = document.getElementById("search-bar").value.toLowerCase();
    let listStudents = getListStudents();

    filteredStudents = listStudents.filter(student => {
        return (
            student.lastName.toLowerCase().includes(searchValue)
        );
    });
}

const getFilteredList = () => {
    return filteredStudents;
}

document.getElementById("search-bar").addEventListener("input", () => {
    searhFilter();
    updateMaxPage();
    changePageValue();
    showStudents();
});