function addTd(id, tr){
    let col = document.createElement('td');
    col.innerText = id;
    tr.append(col);
}

function createBasicTable(){
    let table = document.createElement('table');
    table.setAttribute('id', 'studentsTable');
    table.setAttribute('border', 'solid')
    table.setAttribute('width', '200px');
    return table;
}

function addTr(thead){
    let theadTr = document.createElement('tr');
    thead.append(theadTr);
    return theadTr;
}

function loadTable(){
    let table = createBasicTable();
    table.setAttribute('border', 'solid')
    table.setAttribute('width', '200px')
    let thead = document.createElement('thead');
    let theadTr = addTr(thead);

    addTd("ID", theadTr);
    addTd("Name", theadTr);

    table.append(theadTr);

    document.getElementById("tablediv").append(table);
}