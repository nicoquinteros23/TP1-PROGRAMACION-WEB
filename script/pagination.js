const pagination = {
    pagNumber: 1,
    pagLimit: 0,
    maxPage: 0,
};

const getSelectedValue = () => {
    const selectElement = document.getElementById("pag-options");
    const selectValue = selectElement.value;
    pagination.pagLimit = selectValue;
    updateMaxPage();
    changePageValue();
    showStudents();
}

const increasePageNumber = () => {
    if(pagination.pagNumber != pagination.maxPage) pagination.pagNumber++;
    changePageValue();
    showStudents();
}

const decreasePageNumber = () => {
    if(pagination.pagNumber!= 1)pagination.pagNumber--;
    changePageValue();
    showStudents();
}

const goToLastPage = () => {
    pagination.pagNumber = pagination.maxPage;
    changePageValue();
    showStudents();
}

const goToFirtsPage = () => {
    pagination.pagNumber = 1;
    changePageValue();
    showStudents();
}

const changePageValue = () => {
    if(pagination.pagNumber > pagination.maxPage) pagination.pagNumber = pagination.maxPage;
    document.getElementById("pag-index").value = pagination.pagNumber;
    updateMaxPage();
}

const updateMaxPage = () => {
    let listStudents = document.getElementById("search-bar").value ? getFilteredList() : getListStudents();
    pagination.maxPage = Math.ceil(listStudents.length/pagination.pagLimit);
}