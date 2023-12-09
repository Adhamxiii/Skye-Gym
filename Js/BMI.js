let gender = "male",
  height = 170;

document.querySelector(".male").onclick = function () {
  gender = "male";
  this.classList.add("active");
  document.querySelector(".female").className = "female";
};

document.querySelector(".female").onclick = function () {
  gender = "female";
  this.classList.add("active");
  document.querySelector(".male").className = "male";
};

document.getElementById("height").oninput = function () {
  BMI();
  var slider = document.getElementById("height");
  customSlider();
};
document.getElementById("weight").oninput = function () {
  BMI();
  var w = document.getElementById("weight").value;
  let progressBar = document.querySelector(".circular-progress");
  let valueContainer = document.querySelector(".value-container");
  valueContainer.innerHTML = `${w}Kg`;
  let progressValue = 0;
  let progressEndValue = w;
  progressValue++;
  valueContainer.textContent = `${w}Kg`;
  progressBar.style.background = `conic-gradient(
        #e52121 ${w * 2.4}deg,
        #c7ccd0 ${w * 2.4}deg
    )`;
};

function BMI() {
  var h = document.getElementById("height").value;
  var w = document.getElementById("weight").value;
  var bmi = w / (((h / 100) * h) / 100);
  var bmio = bmi.toFixed(2);
  document.getElementById("bmi-num").textContent = bmio;
  var num = document.getElementById("number");
  num.innerHTML = h;

  var BMItxt = document.getElementById("bmi-txt");
  var BMIdiv = document.querySelector(".bmi-txt");
  if (bmio < 16) {
    BMItxt.textContent = "Severe Thinness";
    BMIdiv.style.background = "#fff";
  } else if (bmio >= 16 && bmio < 17) {
    BMItxt.textContent = "Moderate Thinness";
    BMIdiv.style.background = "#eeeeff";
    BMItxt.style.fontSize = "28px";
  } else if (bmio >= 17 && bmio < 18.5) {
    BMItxt.innerHTML = "Mild Thinness";
    BMIdiv.style.background = "#ccc";
  } else if (bmio >= 18.5 && bmio < 25) {
    BMItxt.innerHTML = "You're Healthy";
    BMIdiv.style.background = "#D6FFDD";
  } else if (bmio >= 25 && bmio < 30) {
    BMItxt.innerHTML = "Overweight";
    BMIdiv.style.background = "#E8D284";
  } else if (bmio >= 30 && bmio < 35) {
    BMItxt.innerHTML = "Obese Class I";
    BMIdiv.style.background = "#E2798E";
  } else if (bmio >= 35 && bmio < 40) {
    BMItxt.innerHTML = "Obese Class II";
    BMIdiv.style.background = "#e24262";
  } else {
    BMItxt.innerHTML = "Obese Class III";
    BMIdiv.style.background = "red";
  }

  if (bmio < 15) {
    document.getElementById("circle1").style.left = "0px";
  } else if (bmio >= 15 && bmio < 18.5) {
    const f1 = ((bmio - 15) / 3.5) * 100;
    document.getElementById("circle1").style.cssText = `left: ${f1}% ;`;
    document.getElementById("circle2").style.display = "none";
    document.getElementById("circle3").style.display = "none";
    document.getElementById("circle4").style.display = "none";
  } else if (bmio >= 18.5 && bmio < 25) {
    document.getElementById("circle1").style.display = "none";
    document.getElementById("circle3").style.display = "none";
    document.getElementById("circle4").style.display = "none";
    document.getElementById("circle2").style.display = "block";
    const f2 = ((bmio - 18.5) / 6.5) * 100;
    document.getElementById("circle2").style.cssText = `left: ${f2}% ;`;
  } else if (bmio >= 25 && bmio < 30) {
    document.getElementById("circle1").style.display = "none";
    document.getElementById("circle2").style.display = "none";
    document.getElementById("circle4").style.display = "none";
    document.getElementById("circle3").style.display = "block";
    const f3 = ((bmio - 25) / 5) * 100;
    document.getElementById("circle3").style.cssText = `left: ${f3}% ;`;
  } else if (bmio >= 30 && bmio < 40) {
    document.getElementById("circle1").style.display = "none";
    document.getElementById("circle3").style.display = "none";
    document.getElementById("circle2").style.display = "none";
    document.getElementById("circle4").style.display = "block";
    const f4 = ((bmio - 30) / 10) * 100;
    document.getElementById("circle4").style.cssText = `left: ${f4}% ;`;
  }
}

document.getElementById("circle1").style.display = "none";
document.getElementById("circle2").style.display = "none";
document.getElementById("circle3").style.display = "none";
document.getElementById("circle4").style.display = "none";

// const joinBtn = document.getElementById("btn-join");
// const modal = document.querySelector(".model");
// const body = document.querySelector("body");
// const closeButton = document.querySelector(".close-button");
// function openModel() {
//   modal.classList.add("is-open");
//   body.style.overflow = "hidden";
// }
// const closeModal = () => {
//   modal.classList.remove("is-open");
//   body.style.overflow = "initial";
// };
// joinBtn.addEventListener("click", openModel);
// closeButton.addEventListener("click", closeModal);

// const signUpButton = document.getElementById("signUp");
// const signInButton = document.getElementById("signIn");
// const container = document.getElementById("container");

// signUpButton.addEventListener("click", () => {
//   container.classList.add("right-panel-active");
// });

// signInButton.addEventListener("click", () => {
//   container.classList.remove("right-panel-active");
// });
