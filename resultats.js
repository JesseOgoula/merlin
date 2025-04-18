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

    const moduleScoresListElement = document.getElementById('module-scores-list');
    let moduleDetailsText = "Aucun détail disponible."; // Pour l'email
    if (moduleScoresListElement && moduleScoresString && specialite) {
        try {
            const moduleScores = JSON.parse(moduleScoresString);
            let fileName;
            const lowerCaseSpecialite = specialite.toLowerCase();
            if (lowerCaseSpecialite === 'gestion de projet') {
                fileName = 'gestion-projet';
            } else {
                fileName = lowerCaseSpecialite.replace(/ /g, '-');
            }
            const filePath = `${fileName}.json`;

            const response = await fetch(filePath);
            if (!response.ok) {
                throw new Error(`Impossible de charger les données du quiz pour les noms de modules: ${response.status}`);
            }
            const quizData = await response.json();

            moduleScoresListElement.innerHTML = '';
            moduleDetailsText = ''; // Réinitialiser pour l'email
            quizData.forEach((module, index) => {
                const scoreForModule = moduleScores[index] !== undefined ? moduleScores[index] : 0;
                const totalQuestionsInModule = module.questions.length;
                const moduleName = module.moduleName || `Module ${index + 1}`;

                const listItem = document.createElement('li');
                listItem.textContent = `${moduleName}: ${scoreForModule} / ${totalQuestionsInModule}`;
                moduleScoresListElement.appendChild(listItem);

                // Construire la chaîne pour l'email
                moduleDetailsText += `${moduleName}: ${scoreForModule} / ${totalQuestionsInModule}\n`;
            });

        } catch (error) {
            console.error("Erreur lors de l'affichage des scores par module:", error);
            moduleScoresListElement.innerHTML = '<li>Erreur lors du chargement des détails des modules.</li>';
            moduleDetailsText = "Erreur lors du chargement des détails.";
        }
    } else if (moduleScoresListElement) {
         moduleScoresListElement.innerHTML = '<li>Aucun détail de score par module disponible.</li>';
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
            module_details: moduleDetailsText.trim(), // Enlever les espaces superflus
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