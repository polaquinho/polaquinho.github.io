const estrellas = document.querySelectorAll(".star i");

estrellas.forEach((estrella) => {
  estrella.addEventListener("mouseover", (e) => {
    // Seleccionamos todas las estrellas después de la actual (incluida la actual)
    const estrellasMarcadas = e.target.parentNode.querySelectorAll(".star i:nth-of-type(n+" + (e.target.dataset.posicion + 1) + ")");

    // Agregamos la clase "fa-solid" a las estrellas
    estrellasMarcadas.forEach((estrellaMarcada) => {
      estrellaMarcada.classList.add("fa-solid");
    });
  });

  estrella.addEventListener("mouseout", (e) => {
    // Seleccionamos todas las estrellas después de la actual (incluida la actual)
    const estrellasMarcadas = e.target.parentNode.querySelectorAll(".star i:nth-of-type(n+" + (e.target.dataset.posicion + 1) + ")");

    // Eliminamos la clase "fa-solid" de las estrellas
    estrellasMarcadas.forEach((estrellaMarcada) => {
      estrellaMarcada.classList.remove("fa-solid");
    });
  });
});

// Asignamos un atributo "data-posicion" a cada estrella para identificar su posición
estrellas.forEach((estrella, i) => {
  estrella.dataset.posicion = i;
});

