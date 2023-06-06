
fetch('http://localhost:3000/cars')
    .then(r => r.json())
    .then(cars => {
        renderAllCars(cars)
    })
    
const leftNav = document.querySelector("#car-list")


function renderAllCars(cars){
    renderSedans(cars)
    renderSuvs(cars)
    renderTrucks(cars)
}

function renderSedans(cars){
    const sedan = cars[0].sedan
    sedan.forEach(sedan => {
        const eachSedan = document.createElement('li')
        eachSedan.textContent = sedan.make + " " + sedan.model
        leftNav.append(eachSedan)

        eachSedan.addEventListener('click', (e) => {
            const carDetail = document.querySelector("#car-detail")

            const eachSedan = document.querySelector('#car-name')
            eachSedan.textContent = sedan.year + " " + sedan.make + " " + sedan.model

            const fuel = document.querySelector("#car-milage")
            fuel.textContent = "Fuel Economy: " + sedan.fueleconomy

            const horsepower = document.querySelector("#car-power")
            horsepower.textContent = "Horsepower: " + sedan.horsepower
            
            const imageBox = document.querySelector(".car-image")
            const image = document.createElement('img')
            image.src = sedan.image
            image.alt = sedan.make + " " + sedan.model
            removeImage()
            imageBox.append(image)

        const allSedan = document.querySelector("#car-filter")
        allSedan.addEventListener('click', () => {handleSedans(cars)})

        })
    })
}

function handleSedans(cars){
    removeAll(cars)
    renderSedans(cars)
}

// function removeImage(){

// }

function renderSuvs(cars){
    const suv = cars[0].suv
    suv.forEach(suv => {
        const eachSuv = document.createElement('li')
        eachSuv.textContent = suv.make + " " + suv.model
        leftNav.append(eachSuv)

        const allSuvs = document.querySelector("#car-filter")
        allSuvs.addEventListener('click', () => {handleSuvs(cars)})
    })
}

function handleSuvs(cars){
    removeAll(cars)
    renderSuvs(cars)
}

function renderTrucks(cars){
    const truck = cars[0].trucks
    truck.forEach(truck => {
        const eachTruck = document.createElement('li')
        eachTruck.textContent = truck.make + " " + truck.model
        leftNav.append(eachTruck)
        const allTrucks = document.querySelector("#car-filter")
        allTrucks.addEventListener('click', () => {handleTrucks(cars)})
    })
}

function handleTrucks(cars){
    removeAll(cars)
    renderTrucks(cars)
}

function removeAll(cars){
    leftNav.innerHTML = " "
}

const reviewForm = document.querySelector("#review-car")
reviewForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const reviewList = document.querySelector("#review-list")
    const newReview = document.createElement('li')
    newReview.textContent = e.target.review.value
    console.log(e.target.review.value)
    reviewForm.reset()
    reviewList.append(newReview)
})


