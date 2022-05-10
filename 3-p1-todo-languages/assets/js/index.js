// const formElement = document.getElementById('language-form');
const formElement = document.querySelector('#language-form'); // funciona con selectores tipo css

formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    // destructutring
    const { language, status } = event.target;
    // const language = event.target.language;
    // const status = event.target.status;
    const languageValue = language.value;
    const radiosNodeList = status;
    const checkedElement = Array.from(radiosNodeList).find(element => element.checked);
    const statusValue = checkedElement.value;
    console.log(languageValue, statusValue);
});