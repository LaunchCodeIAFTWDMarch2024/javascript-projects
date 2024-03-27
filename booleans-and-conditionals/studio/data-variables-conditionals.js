// Initialize Variables below
let date = 'Monday 2019-03-18';
let time = '10:05:34 AM';
let astronautCount = 7;
let astronautStatus = 'ready';
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximmumFuelTemp = -150;
let fuelLevel = '100%';
let weatherStatus = 'clear';

let launchStatus = true
let isAstronautCountGood = false
let isAstronautStatusCleared = false
let isFuelLevelCleared = false
let isMassKgCleared = false
let isTempCleared = false
let isWeatherCleared = false


// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7) {
    // console.log('Astronaut number does not exceed limits')
    isAstronautCountGood = true
} else if (astronautCount > 7) {
    console.log("Astronaut count exceeds limits.")
}

// add logic below to verify all astronauts are ready
if (astronautStatus === 'ready') {
    // console.log('Astronauts are ready')
    isAstronautStatusCleared = true
} else if (astronautStatus !== 'ready') {
    console.log("Astronauts are not ready")
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg <= maximumMassLimit) {
    // console.log('Total mass within specifications')
    isMassKgCleared = true
} else if (totalMassKg > maximumMassLimit) {
    console.log('Mass exceeds specification')
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius > minimumFuelTemp && fuelTempCelsius < maximmumFuelTemp) {
    // console.log('Fuel temp within range')
    isTempCleared = true;
} else console.log('Fuel temp outside operational range.')
// add logic below to verify the fuel level is at 100%
if (fuelLevel === '100%') {
    // console.log('Fuel level is 100%')
    isFuelLevelCleared = true;
} else console.log('Fuel level is not 100%')
// add logic below to verify the weather status is clear
if (weatherStatus === 'clear') {
    // console.log('Weather is good')
    isWeatherCleared = true;
} else console.log('Weather is not good.')
// Verify shuttle launch can proceed based on above conditions

// if (astronautCount <= 7 && astronautStatus === 'ready' && 
//     totalMassKg <= maximumMassLimit && fuelTempCelsius > minimumFuelTemp && 
//     fuelTempCelsius < maximmumFuelTemp && fuelLevel === '100%' && 
//     weatherStatus === 'clear') {
//         launchStatus = true;
// } else launchStatus = false;

// if (launchStatus) {
//     console.log('launch is a go')
// } else console.log('no launch')

// if (astronautCount > 7) {
//     launchStatus = false;
// } else if (astronautStatus !== 'ready') {
//     launchStatus = false;
//     console.log('no launch')
// } else {
//     console.log('ready to launch!')
// }
// console.log(launchStatus)

if (isAstronautCountGood && isAstronautStatusCleared && isMassKgCleared && isTempCleared && isFuelLevelCleared && isWeatherCleared) {
    console.log('congratulations you have launched a rocket')
} else console.log('ABORT LAUNCH. Conditions not met for successfull launch.')