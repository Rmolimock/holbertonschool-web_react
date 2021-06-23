interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'student one first',
    lastName: 'student one last',
    age: 16,
    location: 'student one location',
}

const student2: Student = {
    firstName:  'student two first',
    lastName: 'student two last',
    age: 18,
    location: 'student two location',
}


const studentsList: Array<Student> = [student1, student2];


const table: HTMLTableElement = document.createElement('table');
const tcontent: HTMLTableSectionElement = document.createElement('tcontent');


studentsList.forEach(student => {
    const row: HTMLTableRowElement = document.createElement('tr');
    const colOne: HTMLTableDataCellElement = document.createElement('td');
    const colTwo: HTMLTableDataCellElement = document.createElement('td');
    colOne.innerHTML = student.firstName;
    colTwo.innerHTML = student.location;
    row.append(colOne, colTwo);
    tcontent.append(row);
});


table.append(tcontent);
document.body.appendChild(table);


