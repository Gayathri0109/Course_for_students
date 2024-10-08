class Course {
    constructor(name, code) {
        this.name = name;
        this.code = code;
        this.enrolledStudents = [];
    }

    enrollStudent(studentName) {
        this.enrolledStudents.push(studentName);
    }
}

class Student {
    constructor(name) {
        this.name = name;
    }
}

let courses = [];

document.getElementById('add-course-btn').addEventListener('click', () => {
    const courseName = document.getElementById('course-name').value;
    const courseCode = document.getElementById('course-code').value;
    const course = new Course(courseName, courseCode);
    courses.push(course);
    document.getElementById('course-list-ul').innerHTML += `<li>${courseName} (${courseCode})</li>`;
    document.getElementById('course-select').innerHTML += `<option value="${courseCode}">${courseName}</option>`;
    document.getElementById('course-name').value = '';
    document.getElementById('course-code').value = '';
});

document.getElementById('enroll-student-btn').addEventListener('click', () => {
    const studentName = document.getElementById('student-name').value;
    const courseCode = document.getElementById('course-select').value;
    const course = courses.find((course) => course.code === courseCode);
    course.enrollStudent(studentName);
    document.getElementById('student-list-ul').innerHTML += `<li>${studentName} - ${courseCode}</li>`;
    document.getElementById('student-name').value = '';
});