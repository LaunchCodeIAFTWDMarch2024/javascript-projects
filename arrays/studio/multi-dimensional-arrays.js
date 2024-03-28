const input = require('readline-sync')

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
food = food.split(',')
equipment = equipment.split(',')
pets = pets.split(',')
sleepAids = sleepAids.split(',')

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [food, equipment, pets, sleepAids]

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let userInput = input.question('What drawer would you like to view: 0, 1, 2, or 3? ')

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

// if (userInput >= 0 && userInput < 4) {
//     console.log(`Your selected drawer contains ${cargoHold[userInput][0]}, ${cargoHold[userInput][1]}, ${cargoHold[userInput][2]}, and ${cargoHold[userInput][3]}.`)
// }

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”

let userItem = input.question(`What item are you looking for? `)

if (userInput >= 0 && userInput < 4) {
    if (cargoHold[userInput].includes(userItem)) {
        console.log(`Cabinet ${userInput} does contain ${userItem}.`)
    } else console.log(`Cabinet ${userInput} does not contain ${userItem}.`)
} else console.log("Drawer does not exist!")