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
//The instructions werent quite clear. It took me too lonng to realize
// that I just create the object inside the function
console.log(addToCollection('CLB','Drake', 2023));
console.log(addToCollection('Sonder Son', 'Brent Faiyaz', 2017));
console.log(addToCollection('Views','Drake',2016));
console.log(addToCollection('I Never Liked You', 'Future', 2023));
console.log(addToCollection('Lil Uzi vs World','Lil Uzi Vert', 2016));
console.log(addToCollection('Excuse me for being antisocial', 'Roddy Rich', 2020));
//created the 'showCollections' function. I specified to see how many albums I have
//first and then my whole collection
function showCollection(){
    console.log('This is all of my favorite albums',collection.length)
    for(i= 0; i< collection.length; i++)
    console.log(collection[i].title,'by',collection[i].artist, 'published in ', collection[i].yearPublished);
    
}
showCollection(collection);

function findByArtist( artist){
   let Resultsartist = []
        for(i=0; i < collection.length; i++){
          if(collection[i].artist === artist ){
            Resultsartist.push(collection[i]);
          return Resultsartist
          }
        }
      }

console.log(findByArtist('Drake'));
console.log(findByArtist('Majid'));
//I was so confused with the instructions of this assignment. I understand we are building
// on our knowledge but the instructions are hard to follow