// let myImage = document.querySelector("img");
// myImage.onclick = function () {
//   let mySrc = myImage.getAttribute("src");
//   if (mySrc === "image/ab.webp") {
//     myImage.setAttribute("src", "image/cd.png");
//   } else {
//     myImage.setAttribute("src", "image/ab.webp");
//   }
// };
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  let myName = prompt("Please enteryour name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Mozilla is coool, " + myName;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla is cool, " + storedName;
}
myButton.onclick = function () {
  setUserName();
};
