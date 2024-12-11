'use strict';

const jsList = document.querySelector('.js-list');

const kittenOne = `<li class="card">
  <img
    class="card_img"
    src="https://dev.adalab.es/gato-siames.webp"
    alt="gatito"
  />
  <h3 class="card_title">Anastacio</h3>
  <h4 class="card_race">Siamés</h4>
  <p class="card_description">
        Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.
   </p>
</li>`;

const kittenTwo = `<li class="card">
    <img class="card_img" src="https://dev.adalab.es/sphynx-gato.webp" alt="sphynx-cat" />
    <h3 class="card_title">Fiona</h3>
    <h4 class="card_race">Sphynx</h4>
    <p class="card_description">
        Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.
    </p>
</li>
`

const kittenThree = `<li class="card">
    <img class="card_img" src="https://dev.adalab.es/maine-coon-cat.webp" alt="maine-coon-cat" />
    <h3 class="card_title">Cielo</h3>
    <h4 class="card_race">Maine Coon</h4>
    <p class="card_description">
        Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
        bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.
    </p>
</li>
`

jsList.innerHTML = kittenOne + kittenTwo + kittenThree;

const btnAdd = document.querySelector('.js-btn-add');
const newForm = document.querySelector('.new-form');
const btnCancel = document.querySelector('.js-btn-cancel');
const inputURL = document.querySelector('.js-input-url');
const inputName = document.querySelector('.js-input-name');
const inputRace = document.querySelector('.js-input-race');
const inputDes = document.querySelector('.js-input-des');


btnAdd.addEventListener('click',()=>{
    newForm.classList.toggle('collapsed');
});

btnCancel.addEventListener('click', ()=>{
    newForm.classList.add('collapsed');
    inputURL.value = '';
    inputName.value = '';
    inputRace.value = '';
    inputDes.value = '';
});

const searchButton = document.querySelector('.js_button-search');

const input_search_desc = document .querySelector('.js_in_search_desc');



const kittenDesc1 = "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";

const kittenDesc2 = "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";

const kittenDesc3 = "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";

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

  let breedText = "";
  const kittenRace1 = "Siamés";
  const kittenRace2 = "Sphynx";
  const kittenRace3 = "Maine Coon";

  