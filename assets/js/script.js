

// stu1 icinde qrupu p130a beraber olan teacherin adini ve yasini ekrana cixarmaq


// let stu1 = {
//     name: "Togrul",
//     surname: "Quluzade",
//     age: 23,
//     phoneNumbers: [123433, 454532],
//     groups: [{
//         name: "p130",
//         room: "sirius",
//         // teachers: ["Cavid", "Ulker"]

//         teachers: [{
//             name: "Cavid",
//             age:28
//         },
//         {
//             name:"Rovshen",
//             age:22
//         }

//     ]
//     },

//     {
//         name: "Dl210",
//         room: "pluton",
//         teachers: ["Cavid", "Gulnar"]

//     },
//     ]
// }

// let teacherFullData = ()=> {

//     for (const item of stu1.groups) {
//         if(item.name == "p130") {
//             for (const teacher of item.teachers) {
//                 if(teacher.name == "Cavid") {
//                     return `${teacher.name} - ${teacher.age}`;
//                 }
//             }
//         }
//     }
// }

// console.log(teacherFullData());



// function setGroupTeacher(groupName) {
//     return `${teacherFullData()} ${groupName}`
// }

// let group = "p120";

// console.log(setGroupTeacher(group));




// let setGroupTeacher = (groupname) => {
//     let teacherData = teacherFullData();

//     return `${teacherData} ${groupname}`
// }

// console.log(setGroupTeacher("p130"));


// for (const item of stu1.groups) {
//     for (const key in item) {
//     console.log(item[key]);       
// }
// }

// for (const item of stu1.groups) {
//     if(item.room == "sirius") {
//         console.log(item.name);
//     }
// }

// for (const item of stu1.groups) {
//     if(item.name== "p130") {
//         console.log(item.teachers);
//     }
// }



// console.log(stu1.phoneNumbers);

// for (const item of stu1.phoneNumbers) {
//     if(item == 123433) {
//         console.log(stu1.name);
//     }

// }

// let isExist = stu1.phoneNumbers.includes(634876587);

// if(isExist) {
//     console.log("var");
// }else{
//     console.log("yoxdur");
// }




// let stu2 = {
//     name: "Seid",
//     surname: "Nuraliyev",
//     age: 33
// }

// let stu3 = {
//     name: "Mirsamir",
//     surname: "Ezimzade",
//     age: 22
// }



// let students = [stu1,stu2,stu3];

// for (const item of students) {
//     console.log(item.name + " " + item.surname);
//     console.log(item["name"]);
// }



// let group = {
//     name:"p130",
//     capacity:5,
//     students:[],
//     addStudent:function(stu){
//         if(this.students.length != this.capacity){
//             this.students.push(stu)
//             return;
//         }
//         console.log("Qrupda bos yer yoxdur");
//     }
// }

// group.addStudent("Orxan");
// group.addStudent("Togrul")
// group.addStudent("Seid");
// group.addStudent("Cavidan")
// group.addStudent("Esqin");
// group.addStudent("Ilkin")
// group.addStudent("Haqverdi")
// group.addStudent("Rosen");
// group.addStudent("Maqa")

// console.log(group.students);


// let stu1 = {

//     id:1,
//     name:"Togrul",
//     surname:"Quluzade"


// }

// let stu2 = {
//     id:2,
//     name:"Ramil",
//     surname:"Binnetov"
// }



// let stu3 = {

//     id:3,
//     name:"Emil",
//     surname:"Abdullayev"

// }


// let stu4 = {

//     id:4,
//     name:"Seadet",
//     surname:"Murseliyeva"


// }



// let group = {
//         name:"p130",
//         capacity:5,
//         students:[],
//         addStudent:function(stu){

//find method alternative
// let students = this.students.filter(m=>m.id == stu.id);
//     if(students.length != 0) {
//         console.log("Already exist");
//         return;
//     }


//             let students = this.students.find(m=>m.id == stu.id);
//             if(students != undefined) {
//                 console.log("Already exist");
//                 return;
//             }

//             if(this.students.length != this.capacity){
//                 this.students.push(stu)
//                 return;
//             }
//             console.log("Qrupda bos yer yoxdur");
//         }
//     }

// group.addStudent(stu1);
// group.addStudent(stu2);
// group.addStudent(stu3);
// group.addStudent(stu4);
// group.addStudent(stu4); 

// console.log(group.students);

// class Person{
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }

//     getFullName(){
//         console.log(this.name + " " + this.surname);
//     }
// }

// class Employee extends Person {


// }


// let employee = new Employee("Cavidan","Qedirli")


// employee.getFullName()

// console.log(employee.surname);





// String qebul eden bir function yaziriq. Hemin function yeni bir array qaytaracaq,
//  hemin arrayin elementleri functiona gelen stringin sozlerinin herflerinin cemine
// beraber olmalidir.Meselen: Functiona gelen string-"Salam olsun hamiya",hemin functionun qaytardiqi array ise - [5,5,6] olacaq.

function textWord(str) {
    
	return text = ["Ilkin", "Seid", "Mirsamir", "Esqin"].map(m => m.length);
    
}
console.log(textWord());






