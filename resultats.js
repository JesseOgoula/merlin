document.addEventListener('DOMContentLoaded', async function() { // Rendre la fonction async
    // Initialiser EmailJS
    const EMAILJS_PUBLIC_KEY = 'pPnD-5WHARZF1ice-';
    const EMAILJS_SERVICE_ID = 'service_q531fnr';
    const EMAILJS_TEMPLATE_ID = 'template_0qpt1m8';
    const DESTINATION_EMAIL = 'adirignoogoula@gmail.com'; // Peut être utilisé dans le template ou comme paramètre si nécessaire

    try {
        emailjs.init(EMAILJS_PUBLIC_KEY);
        console.log("EmailJS initialisé.");
    } catch (error) {
        console.error("Erreur lors de l'initialisation d'EmailJS:", error);
        const emailStatusElement = document.getElementById('email-status-message');
        if (emailStatusElement) {
            emailStatusElement.textContent = "Erreur: Impossible d'initialiser le service d'e-mail.";
            emailStatusElement.style.color = 'red';
        }
        // On continue quand même à afficher les résultats
    }


    // --- Récupération et affichage des résultats (code existant) ---
    const userName = localStorage.getItem('userName');
    const specialite = localStorage.getItem('specialite');
    const score = localStorage.getItem('score');
    const cheated = localStorage.getItem('cheated');
    const elapsedTimeString = localStorage.getItem('elapsedTime');
    const moduleScoresString = localStorage.getItem('moduleScores');

    const userNameElement = document.getElementById('user-name');
    if (userNameElement) userNameElement.textContent = userName || "Nom non trouvé";

    const specialiteElement = document.getElementById('specialite');
    if (specialiteElement) specialiteElement.textContent = specialite || "Spécialité non trouvée";

    const scoreElement = document.getElementById('score');
    let formattedScore = "N/A";
    if (scoreElement && score) {
        formattedScore = parseFloat(score).toFixed(2);
        scoreElement.textContent = formattedScore;
    } else if (scoreElement) {
        scoreElement.textContent = formattedScore;
    }

    const elapsedTimeElement = document.getElementById('elapsed-time');
    let formattedElapsedTime = "N/A";
    if (elapsedTimeElement && elapsedTimeString) {
        const totalSeconds = parseInt(elapsedTimeString, 10);
        if (!isNaN(totalSeconds)) {
            const minutes = Math.floor(totalSeconds / 60);
            const seconds = totalSeconds % 60;
            formattedElapsedTime = `${minutes} minute(s) ${seconds} seconde(s)`;
            elapsedTimeElement.textContent = formattedElapsedTime;
        } else {
            elapsedTimeElement.textContent = formattedElapsedTime;
        }
    } else if (elapsedTimeElement) {
        elapsedTimeElement.textContent = formattedElapsedTime;
    }

    const cheatedElement = document.getElementById('cheated');
    let cheatedStatusText = "Non détectée";
    if (cheatedElement) {
        if (cheated === 'true') {
            cheatedStatusText = "Oui";
            cheatedElement.textContent = "Attention : Triche détectée pendant le quiz.";
            cheatedElement.style.color = 'red';
        } else {
            cheatedElement.textContent = "";
        }
    }

    // --- Logique du Certificat --- (Section des scores par module supprimée)
    const SUCCESS_THRESHOLD = 70; // Définir le seuil de réussite en pourcentage

    // Afficher le bouton de téléchargement si le score est suffisant et pas de triche
    if (parseFloat(score) >= SUCCESS_THRESHOLD && cheated !== 'true') {
        const certificateContainer = document.getElementById('certificate-container');
        const downloadBtn = document.getElementById('download-cert-btn');
        const certUserName = document.getElementById('cert-user-name');
        const certSpecialite = document.getElementById('cert-specialite');
        const certDate = document.getElementById('cert-date');
        const certSignDate = document.getElementById('cert-sign-date');
        const certScore = document.getElementById('cert-score'); // Ajouter l'élément pour le score

        if (certificateContainer && downloadBtn && certUserName && certSpecialite && certDate && certSignDate && certScore) { // Ajouter certScore à la vérification
            // Remplir les données du certificat
            const today = new Date();
            const formattedDate = today.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

            // Utiliser les données du localStorage ou des valeurs par défaut pour le test
            const finalUserName = userName || "Nom Exemple";
            const finalSpecialite = specialite || "Gestion de Projet Exemple";

            certUserName.textContent = finalUserName;
            certSpecialite.textContent = finalSpecialite;
            certDate.textContent = formattedDate;
            certSignDate.textContent = formattedDate; // Utiliser la même date pour la signature
            certScore.textContent = formattedScore; // Ajouter le score formaté

            // Rendre le bouton visible, mais garder le conteneur caché sur la page
            certificateContainer.style.display = 'none'; // Garder caché sur la page
            downloadBtn.style.display = 'inline-block'; // Afficher le bouton

            // Ajouter l'événement pour le téléchargement
            downloadBtn.addEventListener('click', function() {
                // Utiliser les noms finaux pour le nom de fichier
                generateCertificatePDF(certificateContainer, finalUserName, finalSpecialite);
            });

             // Cacher temporairement après l'ajout de l'event listener si on ne veut pas le voir sur la page
             // certificateContainer.style.display = 'none';
             // Ou laisser visible si on veut que l'utilisateur voie le certificat avant de télécharger

        } else {
            console.error("Un ou plusieurs éléments du certificat (y compris le score) sont manquants dans le HTML.");
        }
    } // Fin du if (score >= SUCCESS_THRESHOLD && cheated !== 'true')

    function generateCertificatePDF(element, studentName, courseName) {
        console.log("Préparation de la génération du PDF...");
        const filename = `Certificat_${studentName}_${courseName}.pdf`.replace(/[^a-zA-Z0-9_.-]/g, '_'); // Nettoyer le nom de fichier

        // Rendre l'élément temporairement visible pour html2pdf
        element.style.display = 'block';

        const opt = {
          margin:       0.5, // Marges en pouces
          filename:     filename,
          image:        { type: 'jpeg', quality: 0.98 }, // Qualité de l'image
          html2canvas:  { scale: 2, logging: true, useCORS: true }, // Augmenter l'échelle pour une meilleure résolution
          jsPDF:        { unit: 'in', format: 'letter', orientation: 'landscape' } // Format lettre paysage
        };

        // Utiliser html2pdf pour générer le PDF
        html2pdf().from(element).set(opt).save().then(() => {
            console.log("PDF généré et téléchargement lancé.");
            // Cacher à nouveau l'élément après la génération
            element.style.display = 'none';
        }).catch(err => {
            console.error("Erreur lors de la génération du PDF:", err);
            // Cacher aussi en cas d'erreur
             element.style.display = 'none';
        });
    }


    // --- Envoi de l'e-mail ---
    async function sendEmailWithResults() {
        const emailStatusElement = document.getElementById('email-status-message');
        if (!emailStatusElement) {
            console.error("Élément 'email-status-message' non trouvé.");
            return;
        }

        // Préparer les paramètres pour le template EmailJS
        // Assurez-vous que ces noms correspondent aux variables dans votre template EmailJS
        const templateParams = {
            user_name: userName || "N/A",
            specialite: specialite || "N/A",
            score: formattedScore,
            elapsed_time: formattedElapsedTime,
            // module_details: moduleDetailsText.trim(), // Supprimé car l'affichage est retiré
            cheated_status: cheatedStatusText,
            to_email: DESTINATION_EMAIL // Si votre template utilise une variable pour l'email de destination
            // Ajoutez d'autres variables si nécessaire (ex: date, etc.)
            // from_name: "Système de Quiz" // Exemple
        };

        console.log("Paramètres du template EmailJS:", templateParams); // LOG

        emailStatusElement.textContent = "Envoi des résultats par e-mail en cours...";
        emailStatusElement.style.color = 'orange';

        try {
            const response = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
            console.log('EmailJS SUCCESS!', response.status, response.text);
            emailStatusElement.textContent = "Résultats envoyés avec succès par e-mail.";
            emailStatusElement.style.color = 'green';
        } catch (error) {
            console.error('EmailJS FAILED...', error);
            emailStatusElement.textContent = `Échec de l'envoi de l'e-mail: ${error.text || error}`;
            emailStatusElement.style.color = 'red';
        }
    }

    // Appeler la fonction d'envoi d'email après un court délai pour laisser le temps à l'affichage initial
    setTimeout(sendEmailWithResults, 500);


    // --- Logique pour le bouton restart (code existant modifié) ---
    const restartBtn = document.getElementById('restart-btn');
    if (restartBtn) {
        restartBtn.addEventListener('click', function() {
            const currentSpecialite = localStorage.getItem('specialite');
            let quizPage;

            if (currentSpecialite === 'gestion de projet') {
                quizPage = 'quiz-gestion-projet.html';
            } else if (currentSpecialite === 'marketing digital') {
                quizPage = 'quiz-marketing-digital.html';
            } else {
                console.warn("Spécialité inconnue pour redémarrer, redirection vers l'accueil.");
                quizPage = 'index.html';
            }
            window.location.href = quizPage;
        });
    } else {
        console.log("Bouton 'restart-btn' non trouvé sur la page des résultats.");
    }

});