// ``

$(document).ready(function(){

// const students ={
//   name: 'Paolo',
//   age: 30,
//   email :'paolo@libero.it'
// };
//
// const {name, email} = students;
// console.log(students);

// ...................................................................

// SET ICONE

const icons = [ // ogni elemento dell'Array è un'icona che ha determinate caratteristiche:

    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
];

// REFS

// Icons Container:
const container = $('.icons'); // riferimento di un elem del DOM



// Mi creo una funzione che gestisce questo tipo di comportamento
// il primo parametro è il SET di icone il secondo e la passo dentro il CONTAINER:


//1. Print Icons ORIGINALI on Screen
// printIcons(icons, container);


// 2. Print Icons with color
const colors = ['blue','orange','purple'];
console.log(colors);

const coloredIcons = colorIcons(icons, colors);
console.log(coloredIcons);
printIcons(coloredIcons, container);

// 3. Filter icons by Type

const select = $('#type');
const types = getType(icons)

// generazione options
genOption(types,select);

// cambio evento
select.change(() =>{
  const selected = select.val();
  console.log(selected);

  const filteredIcons = filterIcons(coloredIcons, selected);
  printIcons(filteredIcons, container);
});


}); // <-- End doc ready




// SEZIONE FUNCTION


//1. Print Icons on Screen

// qui ho gli argomenti che mi aspetto di ricevere
function printIcons(icons, container) {

  container.html('');

// icon è l'ELEMENTO
// a ogni iterzione ICON rappresenterà uno degli oggetti dell'Array
  icons.forEach((icon) => {
    const{family, prefix, name, color} = icon;  // <-- DESTRUTTURAZIONE

    const html =
    `<div class="icon-singolare">
        <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
        <div class="title">${name.toUpperCase()}</div>
      </div>`;

      container.append(html);
    });
}

// 2. COLOR ICONS
function colorIcons(icons, colors){
  // ottemiamo prima i Types
  const types = getType(icons);
  console.log(types);

  // Assegnamo un colore in base ai Type
  const coloredIcons = icons.map((icon) => {
    const indexType = types.indexOf(icon.type);


    return{
      ...icon,
      color: colors[indexType]
    };
  });

  return coloredIcons;


}

//3. GET ICONS TYPES
 // quante tipologie ci sono nell'oggetto e collezionarle in un Array in modo univoco, estrarre solo le varie tipologie
function getType(icons){
  const types = [];

// il passaggio sotto ci permette di avere tutte le tipologie nell'Array senza ripeterle
  icons.forEach((icon) => {
    if(! types.includes(icon.type)) {
      types.push(icon.type);
    }
  });

return types;


}

// 4. GEN OPTION BY Types
function genOption(types, select){
  types.forEach((opt) => {
    select.append(`<option value="${opt}">${opt}</option>`);
  });
}

// 5. FILTER ICONS display
function filterIcons(coloredIcons, selected){

// condizione per ritornare allo stato iniziale
  if(selected === 'all')
  return coloredIcons;


  const filtered = coloredIcons.filter((icon)=>{
    return icon.type === selected;
  });

  return filtered;
}
