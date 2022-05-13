const ulElement = document.querySelector('#contacts-ul');

const renderCardContact = (element) => {
    // const newDiv = document.createElement('div');
    // liElement.classList.add('list-group-item', 'd-flex', 'justify-content-between');
    // buttonElement.setAttribute('index', index);
    // newDiv.appendChild(newContent);

    const li = document.createElement('li');
    const cardDiv = document.createElement('div');
    const photoDiv = document.createElement('div');
    const img = document.createElement('img');
    const texDiv = document.createElement('div');
    
    cardDiv.classList.add('card');
    photoDiv.classList.add('photo');
    img.setAttribute('src', element.photo);
    texDiv.classList.add('text');
    texDiv.innerHTML = element.text;

    ulElement.appendChild(li);
    li.appendChild(cardDiv);
    cardDiv.appendChild(photoDiv);
    cardDiv.appendChild(texDiv);
    photoDiv.appendChild(img);

}

const normalizeData = (data) => {
    let contacts = [];
    data.forEach(element => {
        const contact = {
            text: element.name,
            photo: element.image
        };
        contacts.push(contact);
    });
    return contacts;
}


const main = () => {
    // fetch('http://hp-api.herokuapp.com/api/characters/students')
    fetch('./api/characters.json')
        .then(response => response.json())
        .then(data => normalizeData(data))
        .then(contacts => contacts.forEach(renderCardContact))
};

main();