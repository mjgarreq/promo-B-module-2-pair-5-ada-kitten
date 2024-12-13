'use strict';

//Llamamos a la sección del formulario (la lista de gatitos)
const jsList = document.querySelector('.js-list');

// Creamos variables de cada gatito (url-img, nombre, descripción y raza)
const kittenImage1 = 'https://dev.adalab.es/gato-siames.webp';

const kittenName1 = 'Anastacio'

const kittenDesc1 = "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";

const kittenRace1 = "Siamés"; 

const kittenImage2 = 'https://dev.adalab.es/sphynx-gato.webp';

const kittenName2 = 'Fiona';

const kittenDesc2 = "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";

const kittenRace2 = "Sphynx";

const kittenImage3 = 'https://dev.adalab.es/maine-coon-cat.webp';

const kittenName3 = 'Cielo'

const kittenDesc3 = "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";

const kittenRace3 = "Maine Coon";

// Creamos una función para meter todo el código de lo que debe aparecer en cada artículo de gatito
function renderKitten(url, name, race, desc) {
  return `<li class="card">
    <img
    class="card_img"
    src= "${url}"
    alt="gatito"/>
    <h3 class="card_title">${name}</h3>
    <h4 class="card_race">${race}</h4>
    <p class="card_description">
    ${desc}
    </p>
    </li>`;
}

// Cramos variables y ejecutamos la funicón de arriba para pintar los 3 gatitos que ya estaban en la página (cambiando el nombre de los parámetros de entrada por las variables creadas más arriba)
const kittenOne = renderKitten(kittenImage1, kittenName1, kittenRace1, kittenDesc1);

const kittenTwo = renderKitten(kittenImage2, kittenName2, kittenRace2, kittenDesc2);

const kittenThree = renderKitten(kittenImage3, kittenName3, kittenRace3, kittenDesc3);

// Pintamos en el html los gatitos
jsList.innerHTML = kittenOne + kittenTwo + kittenThree;

// Creamos variables ara el formulario de crear más gatitos
const btnAdd = document.querySelector('.js-btn-add');
const newForm = document.querySelector('.new-form');
const btnCancel = document.querySelector('.js-btn-cancel');
const inputURL = document.querySelector('.js-input-url');
const inputName = document.querySelector('.js-input-name');
const inputRace = document.querySelector('.js-input-race');
const inputDes = document.querySelector('.js-input-des');

//Creamos dos funciones, una para añadir la clase collapsed y que desaparezca el fomrulario, y otra para quitar la clase collapsed y que aparezca.
function showNewCatForm() {
    newForm.classList.remove("collapsed");
  }
function hideNewCatForm() {
    newForm.classList.add("collapsed");
}

// Creamos una función mpara manejar el evento del click del botón y metemos las dos funciones de collapsed anteriores
function handleClickNewCatForm(event) {
    if (newForm.classList.contains("collapsed")) {
      showNewCatForm ();
    } else {
      hideNewCatForm ();
    }
}

// Creamos el evento en el botón para que ejecute la función manejadora
btnAdd.addEventListener('click', handleClickNewCatForm);

// Creamos un evento al botón de cancelar de dentro del formulario de crear nuevos gatitos para que al darle, se añada la clase collapsed y se reseteen los valores de los inputs
btnCancel.addEventListener('click', ()=>{
    newForm.classList.add('collapsed');
    inputURL.value = '';
    inputName.value = '';
    inputRace.value = '';
    inputDes.value = '';
});

// Creamos variables para la sección de buscar
const searchButton = document.querySelector('.js_button-search');

const input_search_desc = document .querySelector('.js_in_search_desc');

// Creamos evento para el botón de la sección de buscar
searchButton.addEventListener("click", (ev) => {
    ev.preventDefault();
    const descrSearchText = input_search_desc.value; // Recoge el valor del input de la descripción en una variable
    if (kittenDesc1.includes(descrSearchText)) {
        jsList.innerHTML = kittenOne;      
      }
      
      if (kittenDesc2.includes(descrSearchText)) {
        jsList.innerHTML = kittenTwo;
      }
      
      if (kittenDesc3.includes(descrSearchText)) {
        jsList.innerHTML = kittenThree; 
      }
  });
