console.log('***** Music Collection *****')

let collection = []

function addToCollection(title,artist, yearPublished ){

    let album = {
        title : title,
        artist : artist,
        yearPublished : yearPublished,
    }
    collection.push(album);
    return album;
}
console.log(addToCollection('CLB','Drake', 2023));
console.log(addToCollection('Sonder Son', 'Brent Faiyaz', 2017));
console.log(addToCollection('Views','Drake',2016));
console.log(addToCollection('I Never Liked You', 'Future', 2023));
console.log(addToCollection('Lil Uzi vs World','Lil Uzi Vert', 2016));
console.log(addToCollection('Excuse me for being antisocial', 'Roddy Rich', 2020));
