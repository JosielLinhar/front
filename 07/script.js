const form = document.getElementById("sectionForm");
const inputs = document.querySelectorAll("input");

const inputName = document.getElementById("storeName");
const inputAddres = document.getElementById("storeAddress");
const inputDays = document.getElementById("storeDays");
const inputHours = document.getElementById("storeHours");
const btnSub = document.getElementById("botaoCad");
const btnRec = document.getElementById("botaoRec");

inputs.forEach((x) => {
  x.addEventListener("focus", () => {
    x.style.border = "1px solid #C8A4D4";
  });

  x.addEventListener("blur", () => {
    x.style.border = "0";
  });
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (inputName.value !== "") {
    if (inputAddres.value !== "") {
      if (inputDays.value !== "") {
        if (inputHours.value !== "") {
          console.log("preparando envio");

          let list = [
            inputName.value,
            inputAddres.value,
            inputDays.value,
            inputHours.value,
          ];

          localStorage.setItem("cad", list);
        } else {
          return alert("Preencha horário de funcionamento");
        }
      } else {
        return alert("Preencha dias de funcionamento");
      }
    } else {
      return alert("Preencha o endereço");
    }
  } else {
    return alert("Preencha nome da loja");
  }
});

btnRec.addEventListener("click", () => {
  let arqRec = localStorage.getItem("cad");
  let list = arqRec.split(",");

  inputName.value = list[0];
  inputAddres.value = list[1];
  inputDays.value = list[2];
  inputHours.value = list[3];
});
