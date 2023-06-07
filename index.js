fetch('http://localhost:3000/cars')
    .then(r => r.json())
    .then(cars => {
        renderAllCars(cars)
    })
    
const leftNav = document.querySelector("#car-list")

function renderAllCars(cars){
    renderAllNames(cars)
    renderSedans(cars)
    renderSuvs(cars)
    renderTrucks(cars)
}

function renderAllNames(cars){
    renderSedans(cars)
    renderSuvs(cars)
    renderTrucks(cars)

    const allCars = document.querySelector("#all-cars-btn")
    allCars.addEventListener('click', () => {showCarsList(cars)})
}

function renderSedans(cars){
    const sedan = cars[0].sedan
    sedan.forEach(sedan => {
        const line =document.createElement('li')
        const eachSedan = document.createElement('button')
        eachSedan.textContent = sedan.make + " " + sedan.model
        leftNav.append(line)

    const allSedan = document.querySelector("#sedan-btn")
    allSedan.addEventListener('click', () => {showSedansList(cars)})

    eachSedan.addEventListener('click', function() {
        const carDetail = document.querySelector("#car")
        const oneSedan = document.querySelector('#car-name')
        oneSedan.textContent = sedan.year + " " + sedan.make + " " + sedan.model

        const fuel = document.querySelector("#car-milage")
        fuel.textContent = "Fuel Economy: " + sedan.fueleconomy
    
        const horsepower = document.querySelector("#car-power")
        horsepower.textContent = "Horsepower: " + sedan.horsepower

        const reviews = document.querySelector("#review-list")
        const showReviews = document.createElement('li')
        showReviews.textContent = sedan.reviews
        removeExtraList(reviews)
        reviews.append(showReviews)

        //const imageBox = document.querySelector(".car-image")
        const image = document.querySelector("#main-car")
        image.src = sedan.image
        image.alt = sedan.make + " " + sedan.model

    image.addEventListener("mouseover", () => {image.src = sedan.moimage})
    image.addEventListener("mouseout", () => {image.src = sedan.image})
    })
    line.append(eachSedan)
    })
}

function renderSuvs(cars){
    const suv = cars[0].suv
    suv.forEach(suv => {
        const line =document.createElement('li')
        const eachSuv = document.createElement('button')
        eachSuv.textContent = suv.make + " " + suv.model
        leftNav.append(line)

    const allSuv = document.querySelector("#suv-btn")
    allSuv.addEventListener('click', () => {showSuvsList(cars)})

    eachSuv.addEventListener('click', function() {
        const carDetail = document.querySelector("#car")
        const oneSuv = document.querySelector('#car-name')
        oneSuv.textContent = suv.year + " " + suv.make + " " + suv.model

        const fuel = document.querySelector("#car-milage")
        fuel.textContent = "Fuel Economy: " + suv.fueleconomy
    
        const horsepower = document.querySelector("#car-power")
        horsepower.textContent = "Horsepower: " + suv.horsepower

        const reviews = document.querySelector("#review-list")
        const showReviews = document.createElement('li')
        showReviews.textContent = suv.reviews
        removeExtraList(reviews)
        reviews.append(showReviews)

        const imageBox = document.querySelector(".car-image")
        const image = document.querySelector("#main-car")
        image.src = suv.image
        image.alt = suv.make + " " + suv.model

    image.addEventListener("mouseover", () => {image.src = suv.moimage})
    image.addEventListener("mouseout", () => {image.src = suv.image})
    })
    line.append(eachSuv)
    })
}

function renderTrucks(cars){
    const truck = cars[0].trucks
    truck.forEach(truck => {
        const line =document.createElement('li')
        const eachTruck = document.createElement('button')
        eachTruck.textContent = truck.make + " " + truck.model
        leftNav.append(line)

    const allTrucks = document.querySelector("#truck-btn")
    allTrucks.addEventListener('click', () => {showTrucksList(cars)})

    eachTruck.addEventListener('click', function() {
        const carDetail = document.querySelector("#car")
        const oneTruck = document.querySelector('#car-name')
        oneTruck.textContent = truck.year + " " + truck.make + " " + truck.model

        const fuel = document.querySelector("#car-milage")
        fuel.textContent = "Fuel Economy: " + truck.fueleconomy
    
        const horsepower = document.querySelector("#car-power")
        horsepower.textContent = "Horsepower: " + truck.horsepower

        const reviews = document.querySelector("#review-list")
        const showReviews = document.createElement('li')
        showReviews.textContent = truck.reviews
        removeExtraList(reviews)
        reviews.append(showReviews)

        const imageBox = document.querySelector(".car-image")
        const image = document.querySelector("#main-car")
        image.src = truck.image
        image.alt = truck.make + " " + truck.model

    image.addEventListener("mouseover", () => {image.src = truck.moimage})
    image.addEventListener("mouseout", () => {image.src = truck.image})
    })
    line.append(eachTruck)
    })
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

function showCarsList(cars){
    removeAll(cars)
    renderAllNames(cars)
}

function showSedansList(cars){
    removeAll(cars)
    renderSedans(cars)
}

function showSuvsList(cars){
    removeAll(cars)
    renderSuvs(cars)
}

function showTrucksList(cars){
    removeAll(cars)
    renderTrucks(cars)
}

function removeAll(cars){
    leftNav.innerHTML = " "
}

function removeExtraList(parentElement) {
    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild)
    }
}