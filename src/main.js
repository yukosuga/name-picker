"use strict";

const nameList = [
  "Leon",
  "Emily",
  "Chole",
  "Thomas",
  "Clara",
  "Michael",
  "Sophia",
  "Charley",
  "Mario",
  "Cathy",
];
const copyNameList = [...nameList];

const namePicker = () => {
  if (copyNameList.length === 0) {
    copyNameList.push(...nameList);
  }
  const randomIndex = Math.floor(Math.random() * copyNameList.length);
  const randomName = copyNameList[randomIndex];
  copyNameList.splice(randomIndex, 1);
  return randomName;
};

const handleButtonClick = () => {
  const selectedName = namePicker();
  console.log(selectedName);
  document.getElementById("displayedName").textContent = selectedName;
};

document
  .getElementById("pickNameButton")
  .addEventListener("click", handleButtonClick);
