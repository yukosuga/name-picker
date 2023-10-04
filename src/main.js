"use strict";

const nameList = ["Leon", "Emily", "Mischa", "Thomas", "Clara", "Michael", "Sophia", "Charley", "Mario", "Cathy"];

const namePicker = () => {
    const randomIndex = Math.floor(Math.random() * nameList.length);
    const randomName = nameList[randomIndex];
    return randomName;
}

const handleButtonClick = () => {
    const selectedName = namePicker();
    console.log(selectedName);
    document.getElementById("displayedName").textContent = selectedName;
}

document.getElementById("pickNameButton").addEventListener("click", handleButtonClick);