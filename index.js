fetch('http://localhost:3000/cars')
    .then(r => r.json())
    .then(cars => { renderAllCars(cars)
    })

function renderAllCars(cars){
    const sedan = cars[0].sedan
    const suv = cars[0].suv
    const trucks = cars[0].trucks

    for(i=0; i<sedan.length; i++){
    const leftNav = document.querySelector("#car-list")
    const eachSedan = document.createElement('li')
    eachSedan.textContent = sedan[i].make + " " + sedan[i].model
    leftNav.append(eachSedan)
    }

    for(i=0; i<suv.length; i++){
        const leftNav = document.querySelector("#car-list")
        const eachSuv = document.createElement('li')
        eachSuv.textContent = suv[i].make + " " + suv[i].model
        leftNav.append(eachSuv)
    }

    for(i=0; i<trucks.length; i++){
        const leftNav = document.querySelector("#car-list")
        const eachTruck = document.createElement('li')
        eachTruck.textContent = trucks[i].make + " " + trucks[i].model
        leftNav.append(eachTruck)
    }
}