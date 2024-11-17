const playlist = [
    {
        titre: "Bohemian Rhapsody",
        artiste: "Queen",
        durée: 5.54
    },
    {
        titre: "Imagine",
        artiste: "John Lennon",
        durée: 3.03
    },
    {
        titre: "Billie Jean",
        artiste: "Michael Jackson",
        durée: 4.54
    }
];


let ajouterTitre = prompt("Quel est le titre de la chanson ?");
let ajouterArtiste = prompt("Quel est l'artiste de la chanson ?");
let ajouterDurée = parseFloat(prompt("Quelle est la durée de la chanson en minutes (ex: 3.45) ?"));

let ajouterChanson = {
    titre: ajouterTitre,
    artiste: ajouterArtiste,
    durée: ajouterDurée
};

playlist.push(ajouterChanson);

function calculerDuréeTotale() {
    let duréeTotale = 0;
    for (let chanson of playlist) {
        duréeTotale += chanson.durée;
    }
    console.log("Durée totale de la playlist : " + duréeTotale.toFixed(2) + " minutes.");
}

calculerDuréeTotale(); 

function mélangerPlaylist() {
    for (let i = playlist.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [playlist[i], playlist[j]] = [playlist[j], playlist[i]]; 
    }
}

mélangerPlaylist();

console.log("Playlist mélangée :");
console.log(playlist); 

