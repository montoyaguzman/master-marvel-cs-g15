// const formElement = document.getElementById('language-form');
const formElement = document.querySelector('#language-form'); // funciona con selectores tipo css

formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event.target);
    const inputData = event.target.language;
    console.log(inputData);
    console.log(inputData.value);
});