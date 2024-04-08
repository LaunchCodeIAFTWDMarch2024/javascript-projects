// Code your selectRandomEntry function here:
// function selectRandomEntry(arr) {
//   let selectedNum = Math.floor(Math.random() * arr.length)
//   return arr[selectedNum];
// }

function selectRandomEntry(arr) {
  let crewIDs = [];
  while (crewIDs.length < 3) {
    let index = Math.floor(Math.random() * arr.length)
    let chosen = arr[index]
    if (crewIDs.includes(chosen)) {
    } else {
      crewIDs.push(chosen)
    }
  }
  return crewIDs
}

// Code your buildCrewArray function here:
function buildCrewArray(selectedIDs, availableCrew) {
  let selectedCrew = [];
  for (let i = 0; i < availableCrew.length; i++) {
    if (selectedIDs.includes(availableCrew[i].astronautID)){
      selectedCrew.push(availableCrew[i])
    }
  }
  return `${selectedCrew[0].name}, ${selectedCrew[1].name}, and ${selectedCrew[2].name} are going to space!`
}
// function buildCrewArray(arr) {
//   let crew = [];
//   while (crew.length < 3) {
//     let chosen = selectRandomEntry(arr);
//     if (crew.includes(chosen)) {
//     } else {
//       crew.push(chosen)
//     }
//   }
//   return crew;
// }

let idNumbers = [291, 414, 503, 599, 796, 890];
// console.log(buildCrewArray(idNumbers))
// console.log(selectRandomEntry(idNumbers))

// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:
// function displayCrew(arr) {
//   let selectedId = buildCrewArray(idNumbers);
//   let crewData = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (selectedId.includes(arr[i].astronautID)) {
//       crewData.push(arr[i])
//     } 
//   }
//   return `${crewData[0].name}, ${crewData[1].name}, and ${crewData[2].name} are going to space!`
// }

// console.log(displayCrew(animals))

console.log(buildCrewArray(selectRandomEntry(idNumbers), animals))