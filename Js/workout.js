function togglePopup1() {
  document.getElementById("popup").classList.toggle("active");
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

const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  404: "",
  "/": "/home.html",
  "/BMI": "/BMI.html",
  "/workout": "/workout.html",
  "/About%20us": "/About us.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
