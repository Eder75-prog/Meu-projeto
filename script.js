prompt(" escolha um numero")

console.log ("Boa Vindas!");
console.log();


const themeButton = document.getElementById("botao-tema");
let dark = true;

themeButton.addEventListener ("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeButton.innerText ="Tema Claro";
  } else {
    themeButton.innerText ="Tema Escuro";
  }
});

const sections = document.querySelectorAll("main section");

sections.forEach((section) => {
  const title = section.querySelector("h2");

  const content = section.querySelector("div");
  content.classList.add("collapse-content");
  title.style.cursor = "pointer";

  title.addEventListener("click", () => {
    content.classList.toggle("open");
    title.classList.toggle("active");
  });
});
