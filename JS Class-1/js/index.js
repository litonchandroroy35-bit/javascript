// window.alert('Hello from external JS');
// alert('Hello from external JS without writhing window object');
console.log('Hello from colsole JS');
document.writeln("Hello World");

let a; //declaration
// data type INITIALIZATION
let studentId = 123;
let studentCgpa = 3.75;
let studentName = 'Rahmot';
let eS = " "; //empty string

// print
document.writeln('Student Id: '+ studentId +'<br>');
document.writeln('Student Cgpa: '+ studentCgpa +'<br>');
document.writeln('Student Name: '+ studentName +'<br>');

// console print
console.log('Student Id: '+ studentId +'<br>');
console.log('Student Cgpa: '+ studentCgpa +'<br>');
console.log('Student Name: '+ studentName +'<br>');

document.writeln('<p style ="color:red"> Md. Shahab Uddin </p>');
document.writeln('<p style ="color:green"> '+ studentName +' </p>');
document.writeln('<p style ="color:orange"> '+ studentCgpa +' </p>');

//Type casting
//Float to Integer
let cgpa = parseInt(studentCgpa);
document.writeln(typeof(cgpa));
document.writeln(cgpa + '<br>');

//Integer to float
let id = parseFloat(studentId);
document.writeln(typeof(id));
document.writeln(cgpa.toFixed(3));

//String to Number
let bS =parseInt(b);
document.writeln('String to Number: '+typeof(id));
document.writeln(bS + '<br>');