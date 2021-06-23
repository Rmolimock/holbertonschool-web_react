interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}


interface Directors extends Teacher {
    numberOfReports: number;
}

interface showTeachers {
    (firstName: string, lastName: string): string;
}

export const showTeacher: showTeachers = (firstName:string, lastName: string) => {
    return `${firstName[0]}. ${lastName}`;
}

interface is {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

interface isc {
    new (firstName: string, lastName: string): is;
}

export const StudentClass: isc = class StudentClass implements is{
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework() {
        return "Currently working"
    }

    displayName() {
        return this.firstName
    }
}
