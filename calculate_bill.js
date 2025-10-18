//Assignment no. : 08
let student = { name : "Blessy" , age : 24, grades : [97, 95, 93]}
console.log(student.name)
console.log(student['name'])
student.school = "Green Valley High"
console.log(Object.entries(student))

//Assignment no. 09
let book = {title : "Fault in our stars", author : "John Green" , year : 2012, genres : ['tragedy', 'young romance']}
for (key in book)
{
  console.log(`${key} : ${book[key]}`)
}

//Assignment no. : 10

let rectangle = {length : 24, width : 36 }
rectangle.calculateArea = function() {
  return rectangle['length']*rectangle['width']
}

rectangle.calculatePerimeter = function() {
  let add = rectangle['length']+rectangle['width']
  return 2*(add)
}
let area = rectangle.calculateArea()
let perimeter = rectangle.calculatePerimeter()
console.log(area)
console.log(perimeter)

//Assignment no. 11

let employee = {firstName : 'Jacinth Blessy' , lastName : "Mamidi" , hourlyWage : 350, hoursWorked : 8}
employee.calculateSalary = function() {
  return employee.hoursWorked*employee.hourlyWage*30
}

console.log(`Name of the employee : ${employee.firstName} ${employee.lastName}`)
let salary = employee.calculateSalary()
console.log(`Salary of the employee : ${salary}`)


//Assignmentno. 12
let library = { name : "Governemnt Library of Vizag" , location : "Seethammapeta" ,
books : [{ title : 'The teacher' , author : 'Freida McFadden' , available : true }, 
{ title : 'Looking for Alaska' , author : 'John Green' , available : false } ,
{ title : 'The Dead romantics' , author : 'Ashley Poston' , available : true }
],

displayAvailableBooks: function() {
  console.log("Available books:");
  for (let book of this.books) {
    if (book.available) {
      console.log(`${book.title} by ${book.author}`);
    }
  }
},

findBook: function(title) {
  for (let book of this.books) {
    if (book.title.toLowerCase() === title.toLowerCase()) {
      return book;
    }
  }
    return "Book not found";
  }
};

library.displayAvailableBooks();

console.log(library.findBook("The Teacher"));
console.log(library.findBook("Unknown Book"));
