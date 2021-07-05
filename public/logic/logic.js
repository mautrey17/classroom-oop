//html components
const role = document.querySelector('.role');
const idNum = document.querySelector('.idNum');
const showRoster = document.querySelector('.show-roster');
const addPerson = document.querySelector('#add-person');
const personName = document.querySelector('.name');
const numStudents = document.querySelector('.num-students');
const modal = document.querySelector('#exampleModal');
const newRow = document.querySelector('.new-row');
// const btnModal = document.querySelector('#btnModal');
// var myModal = new bootstrap.Modal(document.getElementById('myModal'), options);
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

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

    }
}

class Teacher extends SchoolMember{
    constructor(role, name, students){
        super(role, name);
        this.students = students
    }

    showGPA(){
        alert(`${this.name} teaches ${this.students} students!`)
    }    
}

// btnModal.addEventListener('click', function(){
//     modal.show();
// })



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
        td2.textContent = newNum;
        personDiv.textContent = personName.value;
        showRoster.appendChild(personDiv);
        teacher.showGPA();
        teacherList.push(teacher);
        console.log(teacherList);
        tableRow.append(tableNum, td1, td2);
        newRow.appendChild(tableRow);
        tableCount++;
    }
})