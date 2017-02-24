/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    return texte.length;
}
var remplaceECar = function (texte) {
    return texte.replace("e", " ");
}
var concatString = function (texte1, texte2) {
    return texte1+texte2;
}
var afficherCar5 = function (texte) {
    return texte.charAt(4);
}
var afficher9Car = function (texte) {
    return texte.slice(0,9);
}
var majusculeString = function (texte) {
    return texte.toLocaleUpperCase();
}
var minusculeString = function (texte) {
    return texte.toLocaleLowerCase();
}
var SupprEspaceString = function (texte) {
    return texte.trim();
}
var IsString = function (texte) {
  if (typeof texte === "string"){
    return true;
  }
}
var AfficherExtensionString = function (texte) {
  var array = texte.split(".");
    return array[array.length -1 ];
}
var NombreEspaceString = function (texte) {
  var nbrEspace =0;
  for (var i = 0; i < texte.length; i++) {
    texte[i]
    if (texte[i]== " ") {
      nbrEspace+=1;
    }
  }
    return nbrEspace;
}
var InverseString = function (texte) {
  var invers = "";
  for (var i = texte.length-1; i >= 0 ; i--) {
    var invers = invers+texte[i];
  }
    return invers ;
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return Math.pow(x,y);
}
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre);
}
var valeurAbsolueArray = function (array) {
    return array.map(Math.abs);
}

var sufaceCercle = function (rayon) {
    return Math.round(rayon*rayon*Math.PI);
}
var hypothenuse = function (ab, ac) {
    return Math.sqrt((ab*ab) + (ac*ac));
}
var calculIMC = function (poids, taille) {
    var imc = (poids/(taille*taille))*100;
    return Math.round (imc)/100;
}
