// Animation du texte
const txtAnim = document.querySelector('h1');

new Typewriter(txtAnim, {
    deleteSpeed: 50
})
    .changeDelay(50)
    .typeString('L\'ISS')
    .pauseFor(300)
    .typeString(', <strong style="color: #c61a09" > by Nasa.</strong>')
    .pauseFor(1500)
    .deleteChars(8)
    .typeString('<strong style="color: #c61a09">Presented by Samir.</strong>')
    .start();



// Définition de la fonction fetchISSPosition pour l'Api de l'iss
function fetchISSPosition() {
    // Effectuer une requête GET à l'URL de l'API ISS
    fetch('http://api.open-notify.org/iss-now.json')
        // Convertir la réponse en JSON
        .then(response => response.json())
        // Une fois les données JSON récupérées
        .then(data => {
            // Sélectionner l'élément HTML avec la classe "data__container"
            const dataContainer = document.querySelector('.data__container');
            // Effacer le contenu précédent de l'élément HTML
            dataContainer.innerHTML = '';

            // Afficher le timestamp converti en date et heure locale
            if (data.timestamp) {
                // Convertir le timestamp en objet Date
                const timestamp = new Date(data.timestamp * 1000);
                // Options de formatage de la date
                const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                // Options de formatage de l'heure
                const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
                // Ajouter le timestamp formaté à l'élément HTML
                dataContainer.innerHTML += `<p><strong>Timestamp:</strong> ${timestamp.toLocaleDateString(undefined, dateOptions)} ${timestamp.toLocaleTimeString(undefined, timeOptions)}</p>`;
            }

            // Afficher les données de l'objet iss_position s'il existe
            if (data.iss_position && typeof data.iss_position === 'object') {
                // Ajouter un titre pour les données ISS Position
                dataContainer.innerHTML += '<p><strong>ISS Position:</strong></p>';
                // Commencer une liste non ordonnée
                dataContainer.innerHTML += '<ul>';
                // Parcourir toutes les propriétés de l'objet iss_position
                for (const key in data.iss_position) {
                    if (data.iss_position.hasOwnProperty(key)) {
                        // Ajouter chaque propriété et sa valeur à la liste
                        dataContainer.innerHTML += `<li><strong>${key}:</strong> ${data.iss_position[key]}</li>`;
                    }
                }
                // Fermer la liste non ordonnée
                dataContainer.innerHTML += '</ul>';
            }
        })
        // Gérer les erreurs éventuelles lors de la récupération des données
        .catch(error => console.error('Erreur lors de la récupération des données ISS :', error));
}

// Appeler la fonction fetchISSPosition dès que la page HTML est chargée
document.addEventListener('DOMContentLoaded', fetchISSPosition);





// function pour svg object
// Variables pour la position et le temps
let centerX = 980; // Position horizontale du centre de l'ellipse
let centerY = 330; // Position verticale du centre de l'ellipse
let radiusX = 330; // Rayon horizontal de l'ellipse
let radiusY = 300; // Rayon vertical de l'ellipse
let angle = 0; // Angle initial
let speed = 0.003; // Vitesse de rotation

// Variables pour la position et le temps
let centerX2 = 1060; // Position horizontale du centre de l'ellipse
let centerY2 = 235; // Position verticale du centre de l'ellipse
let radiusX2 = 200; // Rayon horizontal de l'ellipse
let radiusY2 = 200; // Rayon vertical de l'ellipse




// Fonction pour mettre à jour la position de l'objet
function updatePosition() {
    // Calcul des coordonnées en fonction de l'angle
    let x = centerX + radiusX * Math.cos(angle);
    let y = centerY + radiusY * Math.sin(angle);

    // Calcul des coordonnées en fonction de l'angle
    let x2 = centerX2 + radiusX2 * Math.cos(angle);
    let y2 = centerY2 + radiusY2 * Math.sin(angle);

    // Déplacer l'objet à ses nouvelles coordonnées
    object.style.left = x + "px";
    object.style.top = y + "px";

    // Déplacer l'objet à ses nouvelles coordonnées
    object2.style.left = x2 + "px";
    object2.style.top = y2 + "px";

    // Incrémenter l'angle
    angle += speed;



    // Appeler la fonction à nouveau pour une animation fluide
    requestAnimationFrame(updatePosition);
}

// Récupérer l'élément HTML de l'objet d'origine
const object = document.getElementById("object");
// Récupérer l'élément HTML de la nouvelle SVG
const object2 = document.getElementById("object2");

// Appeler la fonction pour démarrer l'animation de l'objet d'origine
updatePosition(object);
// Appeler la fonction pour démarrer l'animation de la nouvelle SVG
updatePosition(object2);

// function pour svg object



