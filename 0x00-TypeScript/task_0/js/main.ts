interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const studentOne: Student = {
    firstName: 'student 1 first name',
    lastName: 'student 1 last name',
    age: 33,
    location: 'student 1 location'
}

const studentTwo: Student = {
    firstName: 'student 2 first name',
    lastName: 'student 2 last name',
    age: 42,
    location: 'student 2 location'
}

let studentsList: Array<Student> = [ studentOne, studentTwo ]

const studentRows: string = studentsList.map((student) => {
    return '<tr><td>' + student.firstName + '</td><td>' + student.location + '</td></tr>'
}).join('');

let studentTable: string = '<table>' + studentRows + '</table>'

console.log(studentTable)