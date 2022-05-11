// const formElement = document.getElementById('language-form');
const formElement = document.querySelector('#language-form'); // funciona con selectores tipo css
let languages = [];
// seleccion del elemento padre
const ulElement = document.querySelector('#list-languages');

formElement.addEventListener('submit', (event) => {
    
    // clean

    ulElement.innerHTML = '';
    
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

    renderLanguagesList(languages);

});

const renderLanguagesList = (languages) => {
    if (languages.length > 0) {
        languages.forEach(renderElementList);
    } else {
        const newDiv = document.createElement('div');
        const newContent = document.createTextNode('No hay lenguajes en la lista...');
        newDiv.appendChild(newContent); //añade texto al div creado.
        ulElement.appendChild(newDiv);
    }
}

const renderElementList = (element, index) => {
    // creacion de elementos hijos
    const liElement = document.createElement('li');
    const iElement = document.createElement('i');
    const divElement = document.createElement('div');
    const buttonElement = document.createElement('button');
    // agregado de clases a los nuevos elementos
    liElement.classList.add('list-group-item', 'd-flex', 'justify-content-between');
    validateIconType(element.status);
    buttonElement.classList.add('bi', 'bi-trash3-fill', 'text-danger');
    buttonElement.setAttribute('type', 'submit');
    buttonElement.setAttribute('index', index);
    // agregar nombre de lenguaje
    liElement.innerHTML = element.text;
    // hacer aparecer los elementos 
    ulElement.appendChild(liElement);
    liElement.appendChild(divElement);
    divElement.appendChild(iElement);
    divElement.appendChild(buttonElement);

}

const validateIconType = (status) => {
    if (status === 'standBy') {

    } else if (status === 'start') {

    } else if (status === 'finished') {

    }
    // iElement.classList.add('bi', '', '');
    // text-success - bi-pause-circle-fill
    // text-warning - bi-pause-circle-fill
    // text-primary - bi-pause-circle-fill
}