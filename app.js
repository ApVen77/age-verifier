// // The even/odd reporter
// // Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen using document.write (e.g. "2 is even"). %

// // The Grade Assigner
// // Write a function named assignGrade that:
// // takes 1 argument, a number score.
// // returns a grade for the score, either "A", "B", "C", "D", or "F".
// // Call that function for a few different scores and log the result to the document or console to make sure it works correctly. 

// function assignGrade(score) {
//     if (score > 90) {
//         return 'A'; 
//     }
//     else if (score > 80) {
//         return 'B'; 
//     }

// break statement
//return value with the URl
//document.write
//alert

//     else if (score > 70) {
//         return 'C'; 
//     }

//     else if (score > 60) {
//         return 'D'; 
//     }

//     else { 
//         return 'F'; 
//     }

// }

// document.write(' You got an ' + assignGrade(86) + "<br>"); 
// document.write(' You got an ' + assignGrade(55)+ "<br>"); 
// document.write(' You got an ' + assignGrade(77)+ "<br>"); 

// var assignGrade = 90;

// if ( assignGrade >= 90) {
// document.write("Grade : A");
// }
// else if ( assignGrade >= 80) {
// document.write("Grade : B");
// }
// else if ( assignGrade >= 70 ) {
// document.write("Grade : C");
// }
// else if ( assignGrade >= 60) {
// document.write("Grade : D");
// }
// else {
// document.write("Grade : F");
// }; 

function checkAge(age) {
        if (age >= 18) {
          return true;
        } else {
          return confirm('Not old enough');
        }
      }
      
      let age = prompt('How old are you?', 18);
      
      if ( checkAge(age) ) {
        alert( 'Access granted' );
      } else {
        alert( 'Access denied' );
      }; 

      function favDrink() {
        var message;
        var favDrink = prompt("What's your favorite cocktail drink?", "Daiquiri");
        switch(favDrink) {
          case "Beer":
            message = "Excellent choice. Beer is good for your soul.";
            break;
          case "Martini":
            message = "Martini  is my favorite too!";
            break;
          case "Water":
            message = "Really? Are you sure the Water is your favorite?";
            break;
          default:
            message = "I have never heard of that one..";
        }
        document. write (message); 
      }
    
    