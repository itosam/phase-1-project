const beerList = document.querySelector("#beer-menu");
function getBeer(){
    fetch('https://api.punkapi.com/v2/beers?page=1&per_page=8')
    .then((res) => res.json())
    .then((beerArray) => {beerArray.forEach((beer) => {appendBeerList(beer);
    });
    })
}
getBeer();
function appendBeerList(allBeer){
    const cardImage = document.createElement("img")
    cardImage.src = allBeer.image_url;
    cardImage.addEventListener('click', () => {
        const posterImage = document.querySelector("#drink-detail .detail-image")
        posterImage.src = allBeer.image_url;
        const posterName = document.querySelector("#drink-detail .name")
        posterName.textContent = allBeer.name;
        const posterTagline = document.querySelector("#drink-detail .tagline")
        posterTagline.textContent = allBeer.tagline;
        const posterAbv = document.querySelector("#ABV-display")
        posterAbv.textContent =allBeer.abv;
        const posterDescription = document.querySelector("#description-display")
        posterDescription.textContent = allBeer.description;
    });
    beerList.append(cardImage);
};
let addBeer = false;
    const addBtn = document.querySelector("#new-beer-btn");
    const beerFormContainer = document.querySelector(".container");
    addBtn.addEventListener("click", () => {
    addBeer = !addBeer;
    if (addBeer) {
        beerFormContainer.style.display = "block";
    } else {
        beerFormContainer.style.display = "none";
    }
});
function handleForm(){
    const form = document.querySelector("#new-drink")
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const newName = e.target["new-drink-name"].value;
      const newAbv = e.target["new-abv"].value;
      const newImage = e.target["new-image"].value;
      const newTagline = e.target["new-tagline"].value;
      const newDescription = e.target["new-description"].value;
      const newBeer = {
        name: newName,
        image_url: newImage,
        abv: newAbv,
        tagline: newTagline,
        description: newDescription
      }
    appendBeerList(newBeer)
})
};
handleForm()
