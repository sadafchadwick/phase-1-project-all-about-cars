fetch('http://localhost:3000/cars')
    .then(r => r.json())
    .then(cars => {
        filterNav(cars)
    })

// HTML VARIABLES
const leftNav = document.querySelector("#car-list")

const allCarsButton = document.getElementById('all-cars-btn')
const allSedanButton = document.getElementById('sedan-btn')
const allSuvButton = document.getElementById('suv-btn')
const allTruckButton = document.getElementById('truck-btn')

// NAV FILTER EVENT LISTENERS
function filterNav(cars){
    const navList = document.getElementById('car-list')

    const sedans = cars[0].sedan
    const trucks = cars[0].trucks
    const suvs = cars[0].suv

    allCarsButton.addEventListener('click' , () => {
        navList.innerHTML = ""
        
        addCarsToNav(sedans)
        addCarsToNav(suvs)
        addCarsToNav(trucks)
    })

    allSedanButton.addEventListener('click' , () => {
        navList.innerHTML = ""
        addCarsToNav(sedans)
    })

    allSuvButton.addEventListener('click' , () => {
        navList.innerHTML = ""
        addCarsToNav(suvs)
    })

    allTruckButton.addEventListener('click' , () => {
        navList.innerHTML = ""
        addCarsToNav(trucks)
    })
}

function addCarsToNav(cars){
    
    cars.forEach(car => {
        const eachCar = document.createElement('button')
        const smallLogo = document.createElement('img')

        smallLogo.src = car.SMlogo
        smallLogo.alt = car.make

        eachCar.textContent = car.make + " " + car.model + ' '
        eachCar.className = 'nav-buttons'
        
        eachCar.appendChild(smallLogo)
        leftNav.appendChild(eachCar)
        eachCar.addEventListener('click', () => {
            navClickEvent(car)
        })
    })   
}

function navClickEvent(car) {
    const oneCar = document.getElementById('car-name')
    oneCar.textContent = car.year + " " + car.make + " " + car.model

    const fuel = document.getElementById('car-milage')
    fuel.textContent = "Fuel Economy: " + car.fueleconomy

    const horsepower = document.getElementById('car-power')
    horsepower.textContent = "Horsepower: " + car.horsepower

    const defaultReview = document.getElementById('default-review')
    defaultReview.textContent = car.reviews

    const image = document.getElementById('main-car')
    image.src = car.image
    image.alt = car.make + " " + car.model
    image.addEventListener('mouseover', () => {
        imageMouseoverEvent(car)
    })
}

function imageMouseoverEvent(car){
    const imageContainer = document.getElementById('main-car')
    imageContainer.src = car.moimage
    imageContainer.alt = car.make + " " + car.model + "Interior"

    imageContainer.addEventListener('mouseout', () => {
        imageContainer.src = car.image
        imageContainer.alt = car.make + " " + car.model
    })
}

// EVENT LISTENER FOR REVIEWS
const reviewForm = document.querySelector("#review-car")
reviewForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const reviewList = document.querySelector("#review-list")
    const newReview = document.createElement('li')
    newReview.textContent = e.target.review.value
    console.log(e.target.review.value)
    reviewForm.reset()
    reviewList.append(newReview)
    removeExtraList(newReview)
})

function removeExtraList(newReview){
    while (newReview.firstChild) {
        newReview.removeChild(newReview.firstChild)
    }
}

// function renderAllNames(cars){
//     renderSedans(cars)
//     renderSuvs(cars)
//     renderTrucks(cars)

//     const allCars = document.querySelector("#all-cars-btn")
//     allCars.addEventListener('click', () => {showCarsList(cars)})
// }

// function renderSedans(cars){
//     const sedan = cars[0].sedan
//     sedan.forEach(sedan => {
//         // const line = document.createElement('li')
//         const eachSedan = document.createElement('button')
//         eachSedan.textContent = sedan.make + " " + sedan.model
//         leftNav.append(eachSedan)

//     const allSedan = document.querySelector("#sedan-btn")
//     allSedan.addEventListener('click', () => {showSedansList(cars)})

//     eachSedan.addEventListener('click', function() {
//         const oneSedan = document.querySelector('#car-name')
//         oneSedan.textContent = sedan.year + " " + sedan.make + " " + sedan.model

//         const fuel = document.querySelector("#car-milage")
//         fuel.textContent = "Fuel Economy: " + sedan.fueleconomy
    
//         const horsepower = document.querySelector("#car-power")
//         horsepower.textContent = "Horsepower: " + sedan.horsepower

//         const reviews = document.querySelector("#review-list")
//         const showReviews = document.createElement('li')
//         showReviews.textContent = sedan.reviews
//         removeExtraList(reviews)
//         reviews.append(showReviews)

//         const image = document.querySelector("#main-car")
//         image.src = sedan.image
//         image.alt = sedan.make + " " + sedan.model

//     image.addEventListener("mouseover", () => {image.src = sedan.moimage})
//     image.addEventListener("mouseout", () => {image.src = sedan.image})
//     })
//     // line.append(eachSedan)
//     })
// }

// 

