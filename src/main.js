"use strict";

const nameList = ["Leon", "Emily", "Mischa", "Thomas", "Clara", "Michael", "Sophia", "Charley", "Mario", "Cathy"];
const maxRandom = nameList.length - 2

const namePicker = () => {
    // Select any name at random.. except the last
    const randomIndex = Math.floor(Math.random() * maxRandom);

    // Remove the name from the array...
    const randomName = nameList.splice(randomIndex, 1)[0];

    // ... and place it at the end, so that it can't be selected
    // for the next two calls
    nameList.push(randomName)

    // console.log("nameList:", nameList);

    return randomName;
}

const handleButtonClick = () => {
    const selectedName = namePicker();
    console.log(selectedName);
    document.getElementById("displayedName").textContent = selectedName;
}

document.getElementById("pickNameButton").addEventListener("click", handleButtonClick);