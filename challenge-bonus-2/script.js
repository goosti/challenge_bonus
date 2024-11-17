const notes = [15, 18, 12, 10, 20];

function calculerMoyenne(notes) {
    let somme = 0;
    for (let note of notes) {
        somme += note;
    }
    return somme / notes.length;
}

function noteLaPlusHaute(notes) {
    return Math.max(...notes);
}

function noteLaPlusBasse(notes) {
    return Math.min(...notes);
}

function calculerPourcentage(notes, moyenne) {
    let count = 0;
    for (let note of notes) {
        if (note >= moyenne) {
            count++;
        }
    }
    return (count / notes.length) * 100;
}

function attribuerMention(moyenne) {
    if (moyenne >= 16) {
        return "Très bien";
    } else if (moyenne >= 12) {
        return "Bien";
    } else if (moyenne >= 10) {
        return "Passable";
    } else {
        return "Insuffisant";
    }
}

function trierNotes(notes, ordre = "croissant") {
    if (ordre === "croissant") {
        return notes.slice().sort((a, b) => a - b); 
    } else if (ordre === "décroissant") {
        return notes.slice().sort((a, b) => b - a); 
    } else {
        console.log("Ordre invalide. Choisissez 'croissant' ou 'décroissant'.");
        return notes;
    }
}

function afficherEtudiantsEchoues(notes, moyenne) {
    let echec = notes.filter(note => note < moyenne);
    console.log("Étudiants ayant échoué (note inférieure à la moyenne) : ", echec);
}

const moyenneClasse = calculerMoyenne(notes);
const pourcentageMoyenne = calculerPourcentage(notes, moyenneClasse);
const mentionClasse = attribuerMention(moyenneClasse);

console.log("Tableau des notes des étudiants : ", notes);
console.log("Moyenne de la classe : ", moyenneClasse.toFixed(2)); 
console.log("Note la plus haute : ", noteLaPlusHaute(notes));
console.log("Note la plus basse : ", noteLaPlusBasse(notes));
console.log("Pourcentage des étudiants ayant la moyenne : ", pourcentageMoyenne.toFixed(2) + "%");
console.log("Mention attribuée à la classe : ", mentionClasse);

console.log("Notes triées par ordre croissant : ", trierNotes(notes, "croissant"));
console.log("Notes triées par ordre décroissant : ", trierNotes(notes, "décroissant"));

afficherEtudiantsEchoues(notes, moyenneClasse);

console.log("Date et heure actuelles : ", new Date().toLocaleString());
