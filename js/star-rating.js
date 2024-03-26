const estrellas = document.querySelectorAll(".star i");

estrellas.forEach((estrella) => {
  estrella.addEventListener("mouseover", (e) => {
    
    const estrellasMarcadas = e.target.parentNode.querySelectorAll(".star i:nth-of-type(n+" + (e.target.dataset.posicion + 1) + ")");

    estrellasMarcadas.forEach((estrellaMarcada) => {
      estrellaMarcada.classList.add("fa-solid");
    });
  });

  estrella.addEventListener("mouseout", (e) => {

    const estrellasMarcadas = e.target.parentNode.querySelectorAll(".star i:nth-of-type(n+" + (e.target.dataset.posicion + 1) + ")");

    estrellasMarcadas.forEach((estrellaMarcada) => {
      estrellaMarcada.classList.remove("fa-solid");
    });
  });
});

estrellas.forEach((estrella, i) => {
  estrella.dataset.posicion = i;
});

