const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
  e.preventDefault();

  const terminoBusqueda = document.querySelector("#termino").value;

  //Validar formulario, no aceptar campos vacios
  if (terminoBusqueda === "") {
    mostrarAlerta("Debe ingresar datos que sean correctos");
    return;
  }

  buscarImagenes();
}

function mostrarAlerta(mensaje) {

  const alertaExiste = document.querySelector('.bg-red-100');

  if (!alertaExiste) { // Si existe que solamente se vea una vez y no cada vez que apretamos el boton
    const alerta = document.createElement("p");
    alerta.classList.add(
      "bg-red-100",
      "border-red-400",
      "text-red-700",
      "px-4",
      "py-3",
      "rounded",
      "max-w-lg",
      "mx-auto",
      "mt-6",
      "text-center"
    );

    alerta.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">${mensaje}</span>
    `;

    formulario.appendChild(alerta);

    setTimeout(() => {
      alerta.remove();
    }, 3000);
  }
}

function buscarImagenes(termino){

    const key = '24646168-2a770a2ec9aa619292b395e35';
    const url = `https://pixabay.com/api/?key=${key}&q=${termino}`;

    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => {
        mostrarImagenes(resultado.hits);
    })
}

function mostrarImagenes(imagenes){
    console.log(imagenes);
}