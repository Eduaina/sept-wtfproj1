// 2nd CLASS WORK
 
// 🎯 Game: Fruit Catcher
// The player chooses a basket, and the game checks if the basket contains a fruit. 
// Each basket is an object, and the game uses a function to check the basket. 
// It uses an array to store baskets, and a boolean to track if the fruit was found.
 
const baskets = [
    { 
    name: "Basket 1", 
    hasFruit: false 
    },

    { 
    name: "Basket 2", 
    hasFruit: true 
    },

    { 
    name: "Basket 3", 
    hasFruit: false 
    }
];
 
 // Attempt 2
// function checkBasket(basketNumber) {
//     let instruction = prompt("You have 3 choices: Basket 1 or Basket 2 or Basket 3. " + " Choose your basket")


//     if (baskets) {
//         if (instruction == baskets[0].name && baskets[0].hasFruit == true) {
//             return "Correct choice of Basket, Fruit Found";
//         } else if (instruction == baskets[1].name && baskets[1].hasFruit == true) {
//             return "Correct choice of Basket, Fruit Found";
//         } else if (instruction == baskets[2].name && baskets[2].hasFruit == true) {
//             return "Correct choice of Basket, Fruit Found";
//         } else {
//             return "Sorry your choosen basket is empty";
//         } 
//     } else if (!baskets) {
//         return "Not a basket choice!!. Try Again!!";
//     }

//     return;
// }


// Attempt 3
// function checkBasket(basketNumber)  {
//     if (baskets) {
//         if (basketNumber) {
//             return "Correct choice of Basket, Fruit Found";
//         } else {
//              return "Sorry your choosen basket is empty";
//         }
//     } else if (!baskets[basketNumber]) {
//         return "Wrong choice of basket!!!. Try Again!!!"
//     }
// }


// Attempt 4
// function checkBasket(basketName) {

//   // Finding the basket object that matches the user's choice using .find.
//   // .find() is an array method and the parameter is an arrow function
//   let selectedBasket = baskets.find(basket => basket.name === basketName);

//   if (!selectedBasket) {
//     return "Wrong choice of basket! Try Basket 1, Basket 2, or Basket 3.";
//   }

//   if (selectedBasket.hasFruit) {
//     return "HURRAY!!! Correct choice of Basket, Fruit Found!";
//   } else {
//     return "Sorry, your chosen basket is empty, YOU LOSE!!!";
//   }
// }


// console.log(checkBasket("Basket 1"));
// console.log(checkBasket("Basket 2"));
// console.log(checkBasket("Basket 3"));
// console.log(checkBasket("wooda"));



// Attempt 5 -- Ive given up and im using a for loop now

function checkBasket(basketName) {
  let found = false;

  for (let i = 0; i < baskets.length; i++) {
    let basket = baskets[i];

    if (basket.name.toLowerCase() == basketName.toLowerCase()) {
      let fruit = basket.hasFruit

      if (fruit) {
        console.log("You picked: " + basket.name + ". HURRAY!!! Correct choice of Basket, Fruit Found!");
      } else {
        console.log("Sorry, your chosen basket is empty, YOU LOSE!!!");
      }  

      found = true;
      break;

    }  
  
  }

  if (!found) {
        console.log("Wrong choice of basket! Try Basket 1, Basket 2, or Basket 3.");
      }

}

name = prompt("You have 3 choices: Basket 1 or Basket 2 or Basket 3. " + " Choose your basket");

console.log(checkBasket(name));