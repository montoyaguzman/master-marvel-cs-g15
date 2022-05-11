// const formElement = document.getElementById('language-form');
const formElement = document.querySelector('#language-form'); // funciona con selectores tipo css
let languages = [];
// seleccion del elemento padre
const ulElement = document.querySelector('#list-languages');

formElement.addEventListener('submit', (event) => {
    
    cleanView();
    
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
    renderTotal(languages);
    resetForm();

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
};

const renderElementList = (element, index) => {
    // creacion de elementos hijos
    const liElement = document.createElement('li');
    const iElement = document.createElement('i');
    const divElement = document.createElement('div');
    const buttonElement = document.createElement('button');
    // agregado de clases a los nuevos elementos
    liElement.classList.add('list-group-item', 'd-flex', 'justify-content-between');
    setClassForIcon(iElement, element.status);
    buttonElement.classList.add('bi', 'bi-trash3-fill', 'text-danger');
    buttonElement.setAttribute('type', 'button');
    buttonElement.setAttribute('index', index);
    buttonElement.addEventListener('click', handleDeleteClick);
    // agregar nombre de lenguaje
    liElement.innerHTML = element.text;
    // hacer aparecer los elementos 
    ulElement.appendChild(liElement);
    liElement.appendChild(divElement);
    divElement.appendChild(iElement);
    divElement.appendChild(buttonElement);

};

const setClassForIcon = (iElement, status) => {
    iElement.classList.add('bi');
    if (status === 'standBy') {
        iElement.classList.add('text-warning' , 'bi-pause-circle-fill');
    } else if (status === 'start') {
        iElement.classList.add('text-primary' , 'bi-play-fill');
    } else if (status === 'finished') {
        iElement.classList.add('text-success' , 'bi-check-lg');
    }
};

const resetForm = () => {

};

const cleanView = () => {
    ulElement.innerHTML = '';
};

const handleDeleteClick = (event) => {
    const positionStr = event.target.getAttribute('index');
    const position = parseInt(positionStr);
    languages.splice(position, 1);
    cleanView();
    renderLanguagesList(languages);
};

const renderTotal = (languajesArray) => {
    const allTotal = document.querySelector('#language-all');
    const completedTotal = document.querySelector('#language-complete');
    const pendingTotal = document.querySelector('#language-pending');
    allTotal.innerHTML = languajesArray.length;
    // calcular completados
    const complets = getCompletes(languajesArray);
    completedTotal.innerHTML = complets;
    // calcular pendientes
    const pendings = getPendings(languajesArray);
    pendingTotal.innerHTML = pendings;
};

const getCompletes = (languajesArray) => {
    const completeElementsArr = languajesArray.filter(element => element.status === 'finished');
    return completeElementsArr.length;
}

function getPendings(languajesArray) {
    let num = 0;
    for (let i=0; i < languajesArray.length; i++) {
        const iterador = languajesArray[i];
        if (iterador.status === 'start' || iterador.status === 'standBy') {
            num++;
        }
    }
    return num;
}