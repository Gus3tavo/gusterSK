const botao = document.querySelector(".botao-topo");

window.addEventListener("scroll", function (event) {
if (window.scrollY == 0) {
    botao.classList.remove ("visible");
} else {
    botao.classList.add ("visible");
}
});



