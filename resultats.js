document.addEventListener('DOMContentLoaded', function() {
    // Récupérer les informations du localStorage
    const userName = localStorage.getItem('userName');
    const specialite = localStorage.getItem('specialite');
    const score = localStorage.getItem('score');
    const cheated = localStorage.getItem('cheated');

    // Afficher le nom d'utilisateur
    if (userName) {
        document.getElementById('user-name').textContent = userName;
    } else {
        document.getElementById('user-name').textContent = "Nom non trouvé";
    }

    // Afficher la spécialité
    if (specialite) {
        document.getElementById('specialite').textContent = specialite;
    }

    // Afficher le score
    if (score) {
        document.getElementById('score').textContent = score;
    }

    // Afficher le statut de triche (si applicable)
    const cheatedElement = document.getElementById('cheated');
    if (cheatedElement) {
        if (cheated === 'true') {
            cheatedElement.textContent = "Attention : Triche détectée pendant le quiz.";
            cheatedElement.style.color = 'red'; // Style pour indiquer la triche
        } else {
            cheatedElement.textContent = ""; // Ne pas afficher si pas de triche
        }
    }

    // Initialisation de EmailJS avec votre clé publique
    (function() {
        emailjs.init('HdK1lIEyXTpGzuJZp'); // Remplacez 'YOUR_PUBLIC_KEY' par votre clé publique EmailJS

        // Gestionnaire d'événement pour le bouton "Envoyer les résultats par email"
        document.getElementById('send-email-btn').addEventListener('click', function(event) {
            event.preventDefault();

            // Vérification que les informations nécessaires sont disponibles
            if (!userName || !specialite || !score) {
                document.getElementById('email-status-message').textContent = 'Erreur: Informations du quiz manquantes.';
                document.getElementById('email-status-message').style.color = 'red';
                return;
            }

            const templateParams = {
                user_name: userName,
                specialite: specialite,
                score: score,
                cheated: cheated === 'true' ? 'Oui' : 'Non'
            };

            // Envoi de l'email via EmailJS
            emailjs.send('service_rvxap6c', 'template_h5abe0r', templateParams) // Remplacez par votre Service ID et Template ID
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    document.getElementById('email-status-message').textContent = 'Email envoyé avec succès !';
                    document.getElementById('email-status-message').style.color = 'green';
                }, function(error) {
                    console.log('FAILED...', error);
                    document.getElementById('email-status-message').textContent = 'Erreur lors de l\'envoi de l\'email.';
                    document.getElementById('email-status-message').style.color = 'red';
                });
        });
    })();
});

document.getElementById('restart-btn').addEventListener('click', function() {
    // Déterminer la page de quiz en fonction de la spécialité
    const specialite = localStorage.getItem('specialite');
    let quizPage;

    if (specialite === 'gestion de projet') {
        quizPage = 'quiz-gestion-projet.html';
    } else if (specialite === 'marketing digital') {
        quizPage = 'quiz-marketing-digital.html';
    } else {
        // Par défaut, rediriger vers la page de gestion de projet
        quizPage = 'quiz-gestion-projet.html';
    }

    window.location.href = quizPage;
}); 