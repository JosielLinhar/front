const form = document.getElementById("sectionForm");
const inputs = document.querySelectorAll("input");

const inputName = document.getElementById("storeName");
const inputAddres = document.getElementById("storeAddress");
const inputDays = document.getElementById("storeDays");
const inputHours = document.getElementById("storeHours");
const btn = document.getElementById("botao");

inputs.forEach((x) => {
  x.addEventListener("focus", () => {
    x.style.border = "1px solid #C8A4D4";
  });

  x.addEventListener("blur", () => {
    x.style.border = "0";
  });
});

btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (inputName.value !== "") console.log(inputName.value);

  if (inputAddres.value !== "") console.log(inputAddres.value);

  if (inputDays.value !== "") console.log(inputDays.value);

  if (inputHours.value !== "") console.log(inputHours.value);
});
