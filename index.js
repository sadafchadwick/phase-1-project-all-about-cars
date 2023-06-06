function fetcher(){
    fetch('https://fuelapi.com/demo')
        .then(r => r.json())
        .then(cars => console.log(cars))
}

fetch()