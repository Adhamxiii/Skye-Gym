let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Come back :(";
});
window.addEventListener("focus", () => {
  document.title = docTitle;
});

let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

function togglePopup1() {
  document.getElementById("popup").classList.toggle("active");
}

function togglePopup2() {
  document.getElementById("popup-2").classList.toggle("active");
}

function togglePopup3() {
  document.getElementById("popup-3").classList.toggle("active");
}

function change() {
  if (document.getElementById("switch").checked) {
    document.getElementById("male-body-maps").style.display = "none";
    document.getElementById("female-body-maps").style.display = "flex";
  } else {
    document.getElementById("male-body-maps").style.display = "flex";
    document.getElementById("female-body-maps").style.display = "none";
  }
}

const joinBtn = document.getElementById("btn-join");
const modal = document.querySelector(".model");
const body = document.querySelector("body");
const closeButton = document.querySelector(".close-button");
function openModel() {
  modal.classList.add("is-open");
  body.style.overflow = "hidden";
}
const closeModal = () => {
  modal.classList.remove("is-open");
  body.style.overflow = "initial";
};
joinBtn.addEventListener("click", openModel);
closeButton.addEventListener("click", closeModal);

const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});



