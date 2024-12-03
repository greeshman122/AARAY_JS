function storeInformation(name, age, ...favoriteColors) {
    let info = {
        name: name,
        age: age,
        favoriteColors: favoriteColors
    };
    console.log(info);
    return info;
}

function displayInformation() {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let colors = document.getElementById('colors').value.split(',');

    let info = storeInformation(name, age, ...colors);
    document.getElementById('infoResult').innerText =
        'Name: ' + info.name + '\n' +
        'Age: ' + info.age + '\n' +
        'Favorite Colors: ' + info.favoriteColors.join(', ');
}