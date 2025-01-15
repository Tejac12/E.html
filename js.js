// let a = [1, 2, 4]
// let b = {
//     id: 1,
//     name: "sonthosh"
// }
// function c() {
//     console.log("hello")
// }
// c()



let url = 'https://ecommerce-api3.p.rapidapi.com/malefootwear';
let options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '34cc9b6d9cmsh3534ac1d5a1e268p115675jsn67ca2a8a10cb',
        'x-rapidapi-host': 'ecommerce-api3.p.rapidapi.com'

    }
};


let allData = []
let cardContainer = document.getElementById("cardContainer")


let btn = document.getElementById("fetchData")

function displyCards(z) {
    cardContainer.textContent = " "
    z.forEach(x => {
        let card = document.createElement("div")
        card.innerHTML = `<img src="${x.Image}" width="250"/>
    <p>${x.Brand}</p>
    <button>Add to cart</button>`
        cardContainer.append(card)
    });
}
btn.addEventListener("click", async (e) => {
    e.preventDefault()
    const data = await fetch(url, options).then(res => res.json()).then(res => res).catch(err => {
        console.log(err)
    })
    console.log(data);
    allData = data;
    displyCards(data)
    // data.forEach((x) => {
    // allData = data;
    // displaycard(data)
    // let card = document.createElement("div")
    // card.innerHTML = `<img src="${x.Image}" width="250"/>
    // <p>${x.Brand}</p>
    // <button>Add to cart</button>`
    // document.body.append(card)
});


let puma = document.getElementById("puma")
puma.addEventListener("click", () => {
    const filteredData = allData.filter(x => x.Brand.toLowerCase() === "puma")
    // 
    console.log(filteredData)
    displyCards(filteredData)
})

let sparx = document.getElementById("sparx")
sparx.addEventListener("click", () => {
    const filteredData = allData.filter(x => x.Brand.toLowerCase() === "sparx")
    console.log(filteredData)
    displyCards(filteredData)

})


let nike = document.getElementById("nike")
nike.addEventListener("click", () => {
    const filteredData = allData.filter(x => x.Brand.toLowerCase() === "nike")
    console.log(filteredData)
    displyCards(filteredData)
})


let reebok = document.getElementById("reebok")
reebok.addEventListener("click", () => {
    const filteredData = allData.filter(x => x.Brand.toLowerCase() === "reebok")
    console.log(filteredData);
    displyCards(filteredData)

})