// VARIAVEIS
const numberDigited = document.querySelector("#numberDigited");
const screem1 = document.querySelector(".screem1");
const screem2 = document.querySelector(".screem2 ");
let numberRandom = Math.round(Math.random() * 4);
let attempts = 1;

function start(event) {
  event.preventDefault();
  if (
    numberDigited.value != "" &&
    numberDigited.value <= 5 &&
    numberDigited.value >= 0
  ) {
    if (numberRandom != numberDigited.value) {
      alert("Tente novamente ");
      attempts++;
      document.getElementById("numberDigited").value = "";
    } else {
      screem1.classList.add("hide");
      screem2.classList.remove("hide");
      screem2.querySelector(
        "h2"
      ).innerText = `Parabéns! você acertou em ${attempts} tentativas`;
    }
    console.log("Tentativas " + attempts);
  } else {
    alert("Insira um numero válido");
  }
}

function reset() {
  document.querySelector(".screem2").classList.add("hide");
  document.querySelector(".screem1 ").classList.remove("hide");
  document.getElementById("numberDigited").value = "";
  attempts = 1;
  numberRandom = Math.round(Math.random() * 4);
}
