// import 'axios';


//html components
const role = document.querySelector('.role');
const idNum = document.querySelector('.idNum');
const showRoster = document.querySelector('.show-roster');
const addPerson = document.querySelector('#add-person');
const personName = document.querySelector('.name');
const numStudents = document.querySelector('.num-students');

class SchoolMember{
    constructor(role, name){
        this.role = role;
        this.name = name;
        // this.idnum = idnum;
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

addPerson.addEventListener('click', function(e){
    e.preventDefault();
    console.log('here');

    let newRole = role.value;
    let newName = personName.value;
    let newNum = numStudents.value;
    

    if(role.value === 'teacher'){
        teacher = new Teacher(newRole, newName, newNum)
        const personDiv = document.createElement('p');
        personDiv.textContent = personName.value;
        showRoster.appendChild(personDiv);
        teacher.showGPA();
    }
})