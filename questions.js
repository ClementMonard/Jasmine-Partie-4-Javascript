/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    return texte.length;
}
var remplaceECar = function (texte) {
    return texte.replace('e' , ' ');
}
var concatString = function (texte1, texte2) {
    return texte1.concat(texte2);
}
var afficherCar5 = function (texte) {
    return texte[4];
}
var afficher9Car = function (texte) {
    return texte.substr(0, 9);
}
var majusculeString = function (texte) {
    return texte.toUpperCase(texte);
}
var minusculeString = function (texte) {
    return texte.toLowerCase(texte);
}
var SupprEspaceString = function (texte) {
    return texte.trim(texte);
}
var IsString = function (texte) {
    return typeof texte.valueOf(texte) === 'string';
}
var AfficherExtensionString = function (texte) {
    return texte.substr(texte.lastIndexOf('.')+1);
}
var NombreEspaceString = function (texte) {
    return texte.split(' ').length -1;
}
var InverseString = function (texte) {
    texte = texte.split("");
    texte = texte.reverse();
    texte = texte.join("");
    return texte;
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return Math.pow(x, y);
}
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre);
}
var valeurAbsolueArray = function (array) {
    for (var i = 0; i < array.length; i++) {
    array[i] = (Math.abs(array[i]))
    }
    return array;
}
var sufaceCercle = function (rayon) {
    return Math.round(Math.PI * Math.pow(rayon ,2));
}
var hypothenuse = function (ab, ac) {
    return Math.sqrt(Math.pow(ab ,2) + Math.pow(ac ,2));
}
var calculIMC = function (poids, taille) {
    return Math.round(poids / (taille * taille) * 100) /100;
}
