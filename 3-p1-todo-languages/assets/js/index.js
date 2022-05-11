// const formElement = document.getElementById('language-form');
const formElement = document.querySelector('#language-form'); // funciona con selectores tipo css
let languages = [];

formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    // destructutring
    const { languageElement, statusRadioElement } = event.target;
    // const language = event.target.language;
    // const status = event.target.status;
    const languageValue = languageElement.value;
    const radiosNodeList = statusRadioElement;
    const checkedElement = Array.from(radiosNodeList).find(element => element.checked);
    const statusValue = checkedElement.value;
    const language = { 
        text: languageValue, 
        status: statusValue 
    };
    languages.push(language);
    console.log(languages);

});

const renderElementList = () => {
    // seleccion del elemento padre
    const ulElement = document.querySelector('#list-languages');
    // creacion de elementos hijos
    const liElement = document.createElement('li');
    const iElement = document.createElement('i');
    const divElement = document.createElement('div');
    const buttonElement = document.createElement('button');
    // agregado de clases a los nuevos elementos
    liElement.classList.add('list-group-item', 'd-flex', 'justify-content-between');
    iElement.classList.add('bi', 'bi-pause-circle-fill', 'text-primary');
    buttonElement.classList.add('bi', 'bi-trash3-fill', 'text-danger');
    buttonElement.setAttribute('type', 'submit');
    buttonElement.setAttribute('index', 0);
    // agregar nombre de lenguaje
    liElement.innerHTML = 'JavaScript';

    ulElement.appendChild(liElement);
    liElement.appendChild(divElement);
    divElement.appendChild(iElement);
    divElement.appendChild(buttonElement);

}

renderElementList();