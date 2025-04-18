document.addEventListener('DOMContentLoaded', async function() { // Rendre la fonction async
    // Récupérer les informations du localStorage
    const userName = localStorage.getItem('userName');
    const specialite = localStorage.getItem('specialite');
    const score = localStorage.getItem('score');
    const cheated = localStorage.getItem('cheated');
    const elapsedTimeString = localStorage.getItem('elapsedTime'); // Temps en secondes (chaîne)
    const moduleScoresString = localStorage.getItem('moduleScores'); // Scores par module (chaîne JSON)

    // Afficher le nom d'utilisateur
    const userNameElement = document.getElementById('user-name');
    if (userNameElement) {
        userNameElement.textContent = userName || "Nom non trouvé";
    }

    // Afficher la spécialité
    const specialiteElement = document.getElementById('specialite');
    if (specialiteElement) {
        specialiteElement.textContent = specialite || "Spécialité non trouvée";
    }

    // Afficher le score
    const scoreElement = document.getElementById('score');
    if (scoreElement) {
        scoreElement.textContent = score ? parseFloat(score).toFixed(2) : "N/A"; // Afficher avec 2 décimales
    }

    // Afficher le temps écoulé
    const elapsedTimeElement = document.getElementById('elapsed-time');
    if (elapsedTimeElement && elapsedTimeString) {
        const totalSeconds = parseInt(elapsedTimeString, 10);
        if (!isNaN(totalSeconds)) {
            const minutes = Math.floor(totalSeconds / 60);
            const seconds = totalSeconds % 60;
            elapsedTimeElement.textContent = `${minutes} minute(s) ${seconds} seconde(s)`;
        } else {
            elapsedTimeElement.textContent = "N/A";
        }
    } else if (elapsedTimeElement) {
        elapsedTimeElement.textContent = "N/A";
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

    // Afficher les scores par module
    const moduleScoresListElement = document.getElementById('module-scores-list');
    if (moduleScoresListElement && moduleScoresString && specialite) {
        try {
            const moduleScores = JSON.parse(moduleScoresString);
            // Charger les données du quiz pour obtenir les noms des modules
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

            // Afficher les scores
            moduleScoresListElement.innerHTML = ''; // Vider la liste précédente
            quizData.forEach((module, index) => {
                const scoreForModule = moduleScores[index] !== undefined ? moduleScores[index] : 0;
                const totalQuestionsInModule = module.questions.length;
                const moduleName = module.moduleName || `Module ${index + 1}`; // Nom par défaut si non trouvé

                const listItem = document.createElement('li');
                listItem.textContent = `${moduleName}: ${scoreForModule} / ${totalQuestionsInModule}`;
                moduleScoresListElement.appendChild(listItem);
            });

        } catch (error) {
            console.error("Erreur lors de l'affichage des scores par module:", error);
            moduleScoresListElement.innerHTML = '<li>Erreur lors du chargement des détails des modules.</li>';
        }
    } else if (moduleScoresListElement) {
         moduleScoresListElement.innerHTML = '<li>Aucun détail de score par module disponible.</li>';
    }

    // Logique pour le bouton restart (si présent)
    const restartBtn = document.getElementById('restart-btn');
    if (restartBtn) {
        restartBtn.addEventListener('click', function() {
            // Déterminer la page de quiz en fonction de la spécialité
            const currentSpecialite = localStorage.getItem('specialite'); // Relire au cas où
            let quizPage;

            if (currentSpecialite === 'gestion de projet') {
                quizPage = 'quiz-gestion-projet.html';
            } else if (currentSpecialite === 'marketing digital') {
                quizPage = 'quiz-marketing-digital.html';
            } else {
                // Par défaut, rediriger vers la page d'accueil si spécialité inconnue
                console.warn("Spécialité inconnue pour redémarrer, redirection vers l'accueil.");
                quizPage = 'index.html'; // Rediriger vers l'index par sécurité
            }

            window.location.href = quizPage;
        });
    } else {
        // S'il n'y a pas de bouton restart-btn, on peut l'ajouter dynamiquement ou ignorer
        console.log("Bouton 'restart-btn' non trouvé sur la page des résultats.");
        // Optionnel: Ajouter un bouton si nécessaire
        // const mainContent = document.querySelector('.main-content');
        // if (mainContent) {
        //     const button = document.createElement('button');
        //     button.id = 'restart-btn';
        //     button.textContent = 'Recommencer le Quiz';
        //     button.className = 'btn'; // Ajouter une classe pour le style
        //     button.addEventListener('click', () => { /* ... logique de redirection ... */ });
        //     mainContent.appendChild(button);
        // }
    }

});