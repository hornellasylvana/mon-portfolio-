// Sélectionner les éléments
const menuToggle = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');
const navLinks = document.querySelector('.nav-links');

// Fonction pour ouvrir le menu
menuToggle.addEventListener('click', () => {
    navLinks.classList.add('active');
});

// Fonction pour fermer le menu (clic sur la croix)
closeMenu.addEventListener('click', () => {
    navLinks.classList.remove('active');
});

// Optionnel : Fermer le menu si on clique en dehors du bloc de menu
window.addEventListener('click', (e) => {
    if (e.target === navLinks) {
        navLinks.classList.remove('active');
    }
});
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche l'erreur 405 en annulant le rechargement de la page

    // 1. Récupération des données saisies par l'utilisateur
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const sujet = document.getElementById('sujet').value;
    const message = document.getElementById('message').value;

    // 2. Votre numéro WhatsApp avec l'indicatif du Cameroun (237)
    const numeroWhatsApp = "237692510189";

    // 3. Mise en forme du message personnalisé envoyant vos informations et celles du contact
    const texteMessage = `Bonjour KENFACK TAFADJI HORNELLA ANGE,\n\nVous avez reçu un nouveau message depuis votre Portfolio :\n\n- *Nom* : ${nom}\n- *Email* : ${email}\n- *Téléphone* : ${phone}\n- *Sujet* : ${sujet}\n- *Message* : ${message}`;

    // 4. Encodage de l'URL pour gérer les espaces et caractères spéciaux
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texteMessage)}`;

    // 5. Ouverture de WhatsApp dans un nouvel onglet
    window.open(urlWhatsApp, '_blank');
});
// Initialisation d'EmailJS avec votre clé publique
(function() {
    emailjs.init("VOTRE_PUBLIC_KEY"); // Remplacer par votre Public Key EmailJS
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const btn = document.getElementById('btn-submit');
    btn.innerText = 'Envoi en cours...';

    const serviceID = 'VOTRE_SERVICE_ID'; // Remplacer par votre Service ID
    const templateAdminID = 'VOTRE_TEMPLATE_ID_ADMIN'; // Modèle pour recevoir l'e-mail
    const templateAutoReplyID = 'VOTRE_TEMPLATE_ID_AUTOREPLY'; // Modèle de remerciement pour l'utilisateur

    // 1. Envoi de l'e-mail à Hornella (Vous)
    emailjs.sendForm(serviceID, templateAdminID, this)
        .then(() => {
            // 2. Envoi automatique de l'e-mail de remerciement à l'utilisateur
            return emailjs.sendForm(serviceID, templateAutoReplyID, this);
        })
        .then(() => {
            btn.innerText = 'Envoyer le message';
            alert('Merci ! Votre message a bien été envoyé et une confirmation vous a été adressée par e-mail.');
            document.getElementById('contact-form').reset();
        })
        .catch((error) => {
            btn.innerText = 'Envoyer le message';
            alert('Une erreur est survenue lors de l\'envoi : ' + JSON.stringify(error));
        });
});