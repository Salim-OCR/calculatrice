const resultat = document.getElementById("result");
const equal = document.getElementById("equal");

const buttons = document.querySelectorAll(".btn");

//event click btns
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    resultat.textContent += e.target.innerText;
    console.log(e);
  });
});

equal.addEventListener("click", () => {
  resultat.textContent = eval(resultat.textContent);
});

clear.addEventListener("click", () => {
  setTimeout(() => {
    resultat.textContent = "";
  }, 1000);
    resultat.textContent = 0;
});

actualiser.addEventListener('click', () => {
    resultat.textContent = "";
})
