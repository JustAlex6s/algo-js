/*Create a function named calcDistance which takes the coordinates of two different points A and B in a 2D space. That function must return the distance between those two points.
Exemples de résultats :
Point A = [1, 1], point B = [2, 2] => 1,41
Point A = [1, 1], point B = [3, 1] => 2
Point A = [4, 1], point B = [1, 1] => 3
Point A = [-2, 2], point B = [2, -2] => 5,65
Créez un programme pour utiliser cette fonction.
Rédigez une documentation pour la fonction calcDistance.
Remarque : vous devez probablement faire une recherche sur Google pour apprendre la formule mathématique pour le faire. Vous aurez probablement également besoin de rechercher des fonctions utiles en JavaScript pour vous aider à créer des formules mathématiques complexes...*/

/**
 * Calcule la distance entre deux points A et B dans un espace 2D.
 * @param {number[]} pointA - Les coordonnées du point A [x, y].
 * @param {number[]} pointB - Les coordonnées du point B [x, y].
 * @returns {number} La distance entre les deux points.
 */
function calcDistance(pointA, pointB) {
    // Extrayez les coordonnées x et y des points A et B
    const [x1, y1] = pointA;
    const [x2, y2] = pointB;

    // Calculez la différence entre les coordonnées x et y
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;

    //Théorème de Pythagore pour calculer la distance
    const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
    
    // Arrondir la distance à deux décimales
    return Math.round(distance * 100) / 100;
}

// Exemples d'utilisation de la fonction calcDistance
const distance1 = calcDistance([1, 1], [2, 2]);
console.log(distance1); // Résultat : 1.41

const distance2 = calcDistance([1, 1], [3, 1]);
console.log(distance2); // Résultat : 2

const distance3 = calcDistance([4, 1], [1, 1]);
console.log(distance3); // Résultat : 3

const distance4 = calcDistance([-2, 2], [2, -2]);
console.log(distance4); // Résultat : 5.65




/*function calcDistance(pointA, pointB) {
const x1 = pointA[0];
const y1 = pointA[1];
const x2 = pointB[0];
const y2 = pointB[1];

const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

return distance.toFixed(2);
}

const pointA = [4,4];
const pointB = [18,36];

console.log(calcDistance(pointA, pointB));

// const pointA = [x1, y1];
// const pointA = [x2, y2];*/