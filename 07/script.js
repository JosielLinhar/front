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

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (inputName.value !== "") {
    if (inputAddres.value !== "") {
      if (inputDays.value !== "") {
        if (inputHours.value !== "") {
          const formData = new FormData(form);
          const data = Object.fromEntries(formData);

          try {
            console.log("Preparando envio");
            const response = await fetch(
              "https://apigenerator.dronahq.com/api/IImMAZ38/storeData",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
              }
            );

            if (!response.ok) {
              throw new Error(`Error status: ${response.status}`);
            }

            const json = await response.json();
            console.log(json);
          } catch (error) {
            console.log(error.message);
          }
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
