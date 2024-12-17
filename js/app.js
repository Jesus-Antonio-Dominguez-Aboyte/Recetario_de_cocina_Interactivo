/*Funciones**:
    - Crear funciones para las tareas principales:
        - Agregar una receta al arreglo.
        - Validar los datos del formulario.
        - Buscar recetas por nombre o categoría.
        - Mostrar las recetas en el DOM, incluyendo la imagen.
        - Eliminar una receta del arreglo y del DOM.*/

// Arreglo para almacenar recetas
let recets = [];
//funcion para añadir receta
function addRecet(title, ingredient, steps, category, image) {
  const recet = {
    id: Date.now(), //id de la receta la cual se genera atraves de la fecha actual lo utiliza commo id.
    title,
    ingredient,
    steps,
    category,
    image,
  };
  recets.push(recet);
  renderRecet();
}

//funcion que reenderiza las recetas ( dibuja la recetas en hatml)

function renderRecet() {
  const recetList = document.getElementById("recetslist");
  recetList.innerHTML = ""; //limmpia lista de recetas
  recets.forEach((recet) => {
    const recetItem = document.createElement("li");
    recetItem.className =
      "list-group-item justify-content-between align-items-center";
    recetItem.innerHTML = `
      <h3>${recet.title}</h3>
      <p><strong>Ingredientes:</strong> ${recet.ingredient}</p>
      <p><strong>Pasos:</strong> ${recet.steps}</p>
      <p><strong>Categoria:</strong> ${recet.category}</p>
      <img src="${recet.image}" alt="${recet.title}" />
      <button class="btn btn-danger" onclick="deleteRecet(${recet.id})">Eliminar</button>
`;
    recetList.appendChild(recetItem);
  });
}

//manejar el formulario
document.getElementById("rcForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("rcTitle").value;
  const ingredient = document.getElementById("rcingredient").value;
  const steps = document.getElementById("rcsteps").value;
  const category = document.getElementById("rccategory").value;
  const image = document.getElementById("rcimage").value;
  addRecet(title, ingredient, steps, category, image);
  e.target.reset();
});

//funcion para eliminar recetas
function deleteRecet(id) {
  recets = recets.filter((recet) => recet.id !== id);
  renderRecet();
}
