//html components
const role = document.querySelector(".role");
const idNum = document.querySelector(".idNum");
const showRoster = document.querySelector(".show-roster");
const addPerson = document.querySelector("#add-person");
const personName = document.querySelector(".name");
const numStudents = document.querySelector(".num-students");
const modal = document.querySelector("#exampleModal");
const newRow = document.querySelector(".new-row");
const favorite = document.querySelector(".favorite");
const grade = document.querySelector(".grade");
const teacherQuestion = document.querySelector(".teacher-question");
const studentQuestion = document.querySelector(".student-question");
const adminQuestion = document.querySelector(".admin-question");
const message = document.querySelector(".message");
const showAlert = document.querySelector(".show-alert");

//location of school members
const rosterList = [];

//counter for table
let tableCount = 1;

//Classes for OOP practice
class SchoolMember {
  constructor(role, name) {
    this.role = role;
    this.name = name;
  }

  showName() {
    createAlert(`hi, my name is ${this.name}`)
  }

  assignedRole() {
    createAlert("I have not been assigned a role yet!");
  }
}

class Teacher extends SchoolMember {
  constructor(role, name, students) {
    super(role, name);
    this.students = students;
  }

  showStudents() {
    createAlert(`${this.name} teaches ${this.students} students!`);
  }

  assignedRole() {
    createAlert("I am a teacher");
  }
}

class Student extends SchoolMember {
  constructor(role, name, favorite) {
    super(role, name);
    this.favorite = favorite;
  }

  showFavorite() {
    createAlert(`${this.name}'s favorite class is ${this.favorite}!`);
  }
  assignedRole() {
    createAlert("I am a student!");
  }
}

class Admin extends SchoolMember {
  constructor(role, name, grade) {
    super(role, name);
    this.grade = grade;
  }

  showGrade() {
    createAlert(`${this.name} is admin over grade ${this.grade}!`);
  }
  assignedRole() {
    createAlert("I am admin!");
  }
}

//function to create alert displaying information
const createAlert = (text) => {
  showAlert.firstChild ? showAlert.removeChild(showAlert.firstChild) : "";
  let newAlert = document.createElement("div");
  newAlert.className = "alert alert-info";
  newAlert.textContent = text;
  showAlert.appendChild(newAlert);
};

//display correct question depending on position being created
role.addEventListener("change", function () {
  role.value === "teacher"
    ? (teacherQuestion.className = "test")
    : (teacherQuestion.className = "hide");

  role.value === "student"
    ? (studentQuestion.className = "test")
    : (studentQuestion.className = "hide");

  role.value === "admin"
    ? (adminQuestion.className = "test")
    : (adminQuestion.className = "hide");
});

//function to create HTML for each table row
function createTableRow(role, name, extra, oop) {
  console.log(extra);
  let personDiv = document.createElement("p");
  let tableRow = document.createElement("tr");
  let tableNum = document.createElement("th");
  tableNum.textContent = tableCount;
  let td1 = document.createElement("td");
  td1.textContent = name;
  let td2 = document.createElement("td");
  td2.textContent = role;

  let td3 = document.createElement("td");
  let generalBtn = document.createElement("button");
  generalBtn.addEventListener("click", function () {
    oop.showName();
  });
  generalBtn.className = "btn btn-outline-info";
  generalBtn.textContent = "Generic Alert";
  td3.appendChild(generalBtn);

  let td4 = document.createElement("td");
  let roleBtn = document.createElement("button");
  roleBtn.addEventListener("click", function () {
    switch (role) {
      case "teacher":
        oop.showStudents();
        break;
      case "student":
        oop.showFavorite();
        break;
      case "admin":
        oop.showGrade();
        break;
      default:
        oop.assignedRole();
        break;
    }
  });
  roleBtn.className = "btn btn-outline-success";
  roleBtn.textContent = "My Information";
  td4.appendChild(roleBtn);

  let td5 = document.createElement("td");
  let overwriteBtn = document.createElement("button");
  overwriteBtn.addEventListener("click", function () {
    oop.assignedRole();
  });
  overwriteBtn.className = "btn btn-outline-success";
  overwriteBtn.textContent = "My Information";
  td5.appendChild(overwriteBtn);

  personDiv.textContent = personName.value;
  showRoster.appendChild(personDiv);
  rosterList.push(oop);
  tableRow.append(tableNum, td1, td2, td3, td4, td5);
  newRow.appendChild(tableRow);
  tableCount++;
}

//function to create new school member
addPerson.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("here");

  let newRole = role.value;
  let newName = personName.value;

  switch (role.value) {
    case "teacher":
      let newNum = numStudents.value;
      let teacher = new Teacher(newRole, newName, newNum);

      createTableRow(newRole, newName, newNum, teacher);
      break;
    case "student":
      let newFavorite = favorite.value;
      let student = new Student(newRole, newName, newFavorite);

      createTableRow(newRole, newName, newFavorite, student);
      break;
    case "admin":
      let newGrade = grade.value;
      let admin = new Admin(newRole, newName, newGrade);

      createTableRow(newRole, newName, newGrade, admin);
      break;
    default:
      let schoolMember = new SchoolMember(newRole, newName);
      createTableRow(newRole, newName, "", schoolMember);
      break;
  }
});
