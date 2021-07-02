import 'axios';


//html components
const role = document.querySelector('.role');
const idNum = document.querySelector('.idNum');

class SchoolMember{
    constructor(role, name, idnum){
        this.role = role;
        this.name = name;
        this.idnum = idnum;
    }
}