const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator(dogs) {
  const dogLinks = [];

  for (let dog in dogs) {
    const aTag = document.createElement("a");
    aTag.innerHTML = dog;
    aTag.href = dogs[dog];
    const dogLink = document.createElement("li");
    dogLink.className = "dog-link";
    dogLink.appendChild(aTag);
    dogLinks.push(dogLink);
  }

  return dogLinks;
}

function attachDogLinks() {
  const dogLinks = dogLinkCreator(dogs);
  const dropDown = document.querySelector('.drop-down-dog-list');
  dogLinks.forEach(dog => {
    dropDown.appendChild(dog);
  })
}

attachDogLinks();
// export default attachDogLinks;

const handleEnter = (e) => {
  const dogList = document.querySelector(".drop-down-dog-list")
  debugger
  if (dogList.className === "drop-down-dog-list hidden") {
    dogList.className = "drop-down-dog-list";
  }
}

const dogHeader = document.querySelector("h3");
dogHeader.addEventListener("click", handleEnter);

