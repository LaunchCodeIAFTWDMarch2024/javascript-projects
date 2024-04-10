
let launchcode = {
  organization: 'nonprofit',
  executiveDirector: 'Jeff',
  percentageCoolEmployees: 100,
  programsOffered: [
    "Web Development", 
    "Data Analysis", 
    "Liftoff"
  ],
  launchOutput: function(num) {
    let str = 'Rutabagas! That doesn\'t work.'
    if (num % 2 === 0 && num % 3 === 0 && num % 5 === 0){
        str = 'LaunchCode Rocks!'
    } else if (num % 2 === 0 && num % 3 === 0) {
        str = 'LaunchCode!'
    } else if (num % 2 === 0 && num % 5 === 0) {
        str = 'Launch Rocks!'
    } else if (num % 5 === 0 && num % 3 === 0) {
        str = 'Code Rocks!'
    } else if (num % 2 === 0) {
        str = 'Launch!'
    } else if (num % 3 === 0) {
        str = 'Code!'
    } else if (num % 5 === 0) {
        str = 'Rocks!'
    }
    return str
}
}

module.exports = launchcode;

