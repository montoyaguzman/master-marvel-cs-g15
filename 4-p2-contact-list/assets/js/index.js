const main = () => {
    // fetch('http://hp-api.herokuapp.com/api/characters/students')
    fetch('./api/characters.json')
        .then(response => response.json())
        .then(data => console.log('data: ', data));
};

main();