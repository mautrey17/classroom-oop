//html components
const role = document.querySelector('.role');
const idNum = document.querySelector('.idNum');
const showRoster = document.querySelector('.show-roster');
const addPerson = document.querySelector('#add-person');
const personName = document.querySelector('.name');
const numStudents = document.querySelector('.num-students');
const modal = document.querySelector('#exampleModal');
const newRow = document.querySelector('.new-row');
const favorite = document.querySelector('.favorite');
const grade = document.querySelector('.grade');
const teacherQuestion = document.querySelector('.teacher-question');
const studentQuestion = document.querySelector('.student-question');
const adminQuestion = document.querySelector('.admin-question');
const message = document.querySelector('.message');
// const btnModal = document.querySelector('#btnModal');
// var myModal = new bootstrap.Modal(document.getElementById('myModal'), options);

const teacherList = [];
const studentList = [];
const adminList = [];
let tableCount = 1;

class SchoolMember{
    constructor(role, name){
        this.role = role;
        this.name = name;
        // this.idnum = idnum;
    }

    showName(){
        alert(`hi, my name is ${this.name}`)
    }
}

class Teacher extends SchoolMember{
    constructor(role, name, students){
        super(role, name);
        this.students = students
    }

    showStudents(){
        alert(`${this.name} teaches ${this.students} students!`)
    }    
}

// btnModal.addEventListener('click', function(){
//     modal.show();
// })

role.addEventListener('change', function(){
    console.log('success')
    role.value === 'teacher' ? teacherQuestion.className = 'test' : teacherQuestion.className = 'hide';

    role.value === 'student' ? studentQuestion.className = 'test' : studentQuestion.className = 'hide';

    role.value === 'admin' ? adminQuestion.className = 'test' : adminQuestion.className = 'hide';
})

addPerson.addEventListener('click', function(e){
    e.preventDefault();
    console.log('here');

    let newRole = role.value;
    let newName = personName.value;
    let newNum = numStudents.value;
    

    if(role.value === 'teacher'){
        const teacher = new Teacher(newRole, newName, newNum)
        const personDiv = document.createElement('p');
        const tableRow = document.createElement('tr');
        const tableNum = document.createElement('th');
        tableNum.textContent = tableCount;
        const td1 = document.createElement('td')
        td1.textContent = newName;
        const td2 = document.createElement('td')
        td2.textContent = newRole;
        const td3 = document.createElement('td')
        const newBtn = document.createElement('button')
        newBtn.addEventListener('click', function(){
            teacher.showStudents()
        })
        newBtn.className = 'btn btn-outline-success'
        newBtn.textContent = 'My Information';
        td3.appendChild
        personDiv.textContent = personName.value;
        showRoster.appendChild(personDiv);
        teacherList.push(teacher);
        console.log(teacherList);
        tableRow.append(tableNum, td1, td2, newBtn);
        newRow.appendChild(tableRow);
        tableCount++;
    }
})