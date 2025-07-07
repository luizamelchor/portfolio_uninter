/* Ação de diminiur a header ao descer na página */
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});

/* Pop up de contato, com botões para abri-lo, fechá-lo e enviá-lo */
const dialog = document.querySelector("#popup");
const abrir = document.querySelector("#contato");
const enviar = document.querySelector("#enviar");
const fechar = document.querySelector("#fechar");

abrir.addEventListener("click", (e) => {
    dialog.showModal();
});

fechar.addEventListener("click", (e) => {
    dialog.close();
});

enviar.addEventListener("click", (e) => {
    dialog.close();
});
