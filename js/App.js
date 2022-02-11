"use strict";

const planetLinks = document.getElementsByClassName("planet--link");
const crewLinks = document.getElementsByClassName("crew--link");
const technologyLinks = document.getElementsByClassName("technology--nav-link");

function UpdatePlanet(i) {
  // update active link
  for (let j = 0; j < planetLinks.length; j++) {
    if (j === i) {
      planetLinks[j].classList.add("planet--link__active");
    } else {
      planetLinks[j].classList.remove("planet--link__active");
    }
  }

  // fetch data and update DOM
  let data = {};
  fetch("../data.json")
    .then((res) => res.json())
    .then((appData) => (data = appData))
    .then(() => {
      // image
      document.getElementById(
        "planetImage"
      ).outerHTML = `<img src=\"${data.destinations[i].images.webp}" alt=\"${data.destinations[i].name}\" class=\"planet--image\" id=\"planetImage\">`;
      // name
      document.getElementById("planetName").innerHTML =
        data.destinations[i].name;
      // description
      document.getElementById("planetDescription").innerHTML =
        data.destinations[i].description;
      // distance
      document.getElementById("planetStatsDistance").innerHTML =
        data.destinations[i].distance;
      // travel
      document.getElementById("planetStatsTravel").innerHTML =
        data.destinations[i].travel;
    })
    .catch((err) => {
      alert("something went wrong " + err);
    });
}

function UpdateCrew(i) {
  // update active link
  for (let j = 0; j < crewLinks.length; j++) {
    if (j === i) {
      crewLinks[j].classList.add("crew--link__active");
    } else {
      crewLinks[j].classList.remove("crew--link__active");
    }
  }

  // fetch data and update DOM elements
  let data = {};
  fetch("../data.json")
    .then((res) => res.json())
    .then((appData) => (data = appData))
    .then(() => {
      // Image
      document.getElementById(
        "crewImage"
      ).outerHTML = `<img src="${data.crew[i].images.webp}" alt="${data.crew[i].name}" class="crew--image" id="crewImage">`;
      // Role
      document.getElementById("crewRole").innerHTML = data.crew[i].role;
      // Name
      document.getElementById("crewName").innerHTML = data.crew[i].name;
      // Bio
      document.getElementById("crewBio").innerHTML = data.crew[i].bio;
    })
    .catch((err) => {
      alert("something went wrong " + err);
    });
}

function UpdateTechnology(i) {
  // update active link
  for (let j = 0; j < technologyLinks.length; j++) {
    if (j === i) {
      technologyLinks[j].classList.add("technology--nav-link__active");
    } else {
      technologyLinks[j].classList.remove("technology--nav-link__active");
    }
  }

  // fetch data and update DOM elements
  let data = {};
  fetch("../data.json")
    .then((res) => res.json())
    .then((appData) => (data = appData))
    .then(() => {
      // Image
      // console.log(document.getElementById("technologyImage"));
      if (window.innerWidth < 1200) {
        document.getElementById(
          "technologyImage"
        ).outerHTML = `<picture class="technology--image" id="technologyImage">\n        <source srcset="./assets/technology/image-launch-vehicle-portrait.jpg" media="(min-width: 1200px">\n        <img src="${data.technology[i].images.landscape}" alt="${data.technology[i].name}" class="technology--image">\n      </picture>`;
      } else {
        document.getElementById(
          "technologyImage"
        ).outerHTML = `<picture class="technology--image" id="technologyImage">\n        <source srcset="${data.technology[i].images.portrait}" media="(min-width: 1200px">\n        <img src="${data.technology[i].images.portrait}" alt="${data.technology[i].name}" class="technology--image">\n      </picture>`;
      }
      // document.getElementById(
      //   "technologyImage"
      // ).outerHTML = `<img src="${data.technology[i].images.landscape}" alt="${data.technology[i].name}" class="technology--image" id="technologyImage">`;
      // Name
      document.getElementById("technologyName").innerHTML = data.technology[i].name;
      // Description
      document.getElementById("technologyDescription").innerHTML = data.technology[i].description;
    })
    .catch((err) => {
      alert("something went wrong " + err);
    });
}

function OpenMenu() {
  document.getElementById("mainNav").classList.remove("closed");
}

function CloseMenu() {
  document.getElementById("mainNav").classList.add("closed");
}
