// Code your orbitCircumference function here:
function orbitCircumference(altitude) {
  let circumference = Math.round(2 * Math.PI * altitude);
  return circumference;
}
console.log(orbitCircumference(2000))

// Code your missionDuration function here:
function missionDuration(numOrbits, orbitRadius = 2000, orbitSpeed = 28000) {
  let duration = (orbitCircumference(orbitRadius) / orbitSpeed) * numOrbits;
  duration = Math.round(duration * 100) / 100
  return duration;
  // return `The mission will travel ${orbitCircumference(orbitRadius) * numOrbits} km around the planet, and it will take ${duration} hours to complete.`;
}

console.log(missionDuration(5))

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(arr) {
  let selectedNum = Math.floor(Math.random() * arr.length)
  return arr[selectedNum];
}

// Code your oxygenExpended function here:
function oxygenExpended(crewObj, numOrbits, orbitRadius = 2000, orbitSpeed = 28000) {
  let duration = missionDuration(numOrbits, orbitRadius, orbitSpeed);
  let oxygenUsed = Math.round(crewObj.o2Used(duration) * 1000) / 1000
  return `${crewObj.name} will perform the spacewalk, which will last ${duration} hours and require ${oxygenUsed} kg of oxygen.`
}

// Candidate data & crew array.
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
 
 let crew = [candidateA,candidateC,candidateE];
 
 console.log(oxygenExpended(selectRandomEntry(crew), 3, 4000, 60))