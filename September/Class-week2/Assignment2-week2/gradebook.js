const students = [
    {
        firstName: "Israel", 
        lastName: "Foily", 
        score: 80
    },

    {
        firstName: "Ziva", 
        lastName: "Eben", 
        score: 55
    },

    {
        firstName: "Alicia", 
        lastName: "Mercy", 
        score: 65
    },

    {
        firstName: "Eliana", 
        lastName: "Helen", 
        score: 40
    },

    {
        firstName: "David", 
        lastName: "Blessing", 
        score: 68
    },

    {
        firstName: "Christiana", 
        lastName: "Asher", 
        score: 77
    },

    {
        firstName: "Frances", 
        lastName: "Felicia", 
        score: 25
    },

    {
        firstName: "Brenda", 
        lastName: "Emily", 
        score: 98
    },

    {
        firstName: "Kelvin", 
        lastName: "Sunday", 
        score: 55
    },

    {
        firstName: "Success", 
        lastName: "Emmanuel", 
        score: 100
    },

    {
        firstName: "Sonia", 
        lastName: "Martha", 
        score: 64
    },

    { 
        firstName: "John", 
        lastName: "Adams", 
        score: 75 
    },

    { 
        firstName: "Mary", 
        lastName: "Johnson", 
        score: 62 
    },

    { 
        firstName: "Peter", 
        lastName: "Brown", 
        score: 49 
    },

    { 
        firstName: "Jane", 
        lastName: "Smith", 
        score: 85 
    },

    { 
        firstName: "Paul", 
        lastName: "Davis", 
        score: 33 
    },

    { 
        firstName: "Emily", 
        lastName: "Wilson", 
        score: 58 
    },

    { 
        firstName: "David", 
        lastName: "Taylor", 
        score: 91 
    },

    { 
        firstName: "Grace", 
        lastName: "Clark", 
        score: 44 
    },

    { 
        firstName: "Chris", 
        lastName: "Lewis", 
        score: 67 
    },

    { 
        firstName: "Sophia", 
        lastName: "Walker", 
        score: 72 
    }
]


function getGrade(score) {
    if (score === 100) {
    return "A++, Perfect Score";
  } else if (score >= 90 && score <= 99) {
    return "A+";
  } else if (score >= 70) {
    return "A";
  } else if (score >= 60) {
    return "B";
  } else if (score >= 50) {
    return "C";
  } else if (score >= 40) {
    return "D";
  } else {
    return "F";
  }
}


// creating a Function to find student using a loop
function showResult(firstName, lastName) {
  let found = false; // to track if student is on the class list or not

  for (let i = 0; i < students.length; i++) {
    let student = students[i];

    if (
      student.firstName.toLowerCase() === firstName.toLowerCase() &&
      student.lastName.toLowerCase() === lastName.toLowerCase()
    ) {
      let grade = getGrade(student.score);

      console.log("Hello " + student.firstName + " " + student.lastName + ", your score is " + student.score);
      console.log("You got a " + grade + " grade.");

      if (student.score >= 50) {
        console.log("Congratulations, you passed!");
      } else {
        console.log("You failed. You are to repeat this class.");
      }

      found = true;
      break;
    }
  }

  if (!found) {
    console.log("Student not found in the gradebook.");
  }
}


let first = prompt("Enter your first name:");
let last = prompt("Enter your last name:");

// Showing the result per student
showResult(first, last);
console.log(" ");
console.log(" ");
console.log(" ");




// Teacher's copy showing the entire class with their names,score and grade
function printAllStudents() {

  console.log("---- TEACHERS COPY OF CLASS 1 GENERAL GRADEBOOK----");
  for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let grade = getGrade(student.score);

    console.log(student.firstName + " " + student.lastName + " | Score: " + student.score + " | Grade: " + grade);
  }
}

printAllStudents();