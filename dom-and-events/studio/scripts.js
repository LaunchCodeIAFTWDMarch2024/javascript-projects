// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {
    const takeoffButton = document.getElementById('takeoff')
    const landButton = document.getElementById('landing')
    const abortButton = document.getElementById('missionAbort')

    const leftButton = document.getElementById('left')
    const rightButton = document.getElementById('right')
    const upButton = document.getElementById('up')
    const downButton = document.getElementById('down')

    const flightStatus = document.getElementById('flightStatus')
    const shuttleBackground = document.getElementById('shuttleBackground')
    const shuttleHeight = document.getElementById('spaceShuttleHeight')
    const rocket = document.getElementById('rocket')
    
    rocket.style.position = 'absolute'
    rocket.style.bottom = '0px'
    rocket.style.left = '0px'

    let initialHeight = 0
    shuttleHeight.innerHTML = initialHeight
    let shuttleWidth = 0

    takeoffButton.addEventListener('click', event => {
        if (confirm('Confirm the shuttle is ready for takeoff')){
            flightStatus.innerHTML = "Shuttle in flight"
            shuttleBackground.style.background = 'blue'
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000
            rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + 'px'
        }
    })

    landButton.addEventListener('click', event => {
        alert('The shuttle is landing. Landing gear engaged.');
        flightStatus.innerHTML = 'The shuttle has landed.'
        shuttleBackground.style.background = 'green'
        shuttleHeight.innerHTML = 0
        shuttleWidth = 0
        rocket.style.left = "0px"
        rocket.style.bottom = "0px"
    })

    abortButton.addEventListener('click', event => {
        if (confirm('Confirm that you want to abort the mission.')){
            flightStatus.innerHTML = 'Mission aborted'
            shuttleBackground.style.background = 'green'
            shuttleHeight.innerHTML = 0
            shuttleWidth = 0
            rocket.style.left = "0px"
            rocket.style.bottom = "0px"
        }
    })

    leftButton.addEventListener('click', event => {
        if (flightStatus.innerHTML === 'Shuttle in flight' && parseInt(rocket.style.left) > 0) {
            rocket.style.left = parseInt(rocket.style.left) - 10 + 'px'
            shuttleWidth -= 1
        }
    })

    rightButton.addEventListener('click', event => {
        if (flightStatus.innerHTML === 'Shuttle in flight' && shuttleWidth < 44) {
            rocket.style.left = parseInt(rocket.style.left) + 10 + 'px'
            shuttleWidth += 1
        }
    })

    upButton.addEventListener('click', event => {
        if (flightStatus.innerHTML === 'Shuttle in flight' && parseInt(shuttleHeight.innerHTML) < 250000) {
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000
            rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + 'px'
        }
    })

    downButton.addEventListener('click', event => {
        if (flightStatus.innerHTML === 'Shuttle in flight' && parseInt(shuttleHeight.innerHTML) > 10000) {
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000
            rocket.style.bottom = parseInt(rocket.style.bottom) - 10 + 'px'
        }
    })
}

window.addEventListener('load', init)