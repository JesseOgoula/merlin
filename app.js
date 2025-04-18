// partie gestion de la page de quiz
let currentModuleIndex = 0;
let currentQuestionIndex = 0;
let progress = 0;
let score = 0;
let infractions = 0;
let cheating = false;
let quizFinished = false;
let moduleScores = {}; // Pour stocker les scores par module { moduleIndex: score };
let startTime = null; // Pour enregistrer l'heure de début;
let specialiteQuiz; // Variable pour stocker la spécialité du quiz;
let currentQuizData = null; // Variable pour stocker les données du quiz chargées

// Fonction pour bloquer le copier-coller
document.addEventListener('copy', function(e) {
    e.preventDefault();
    infractions++;
    updateInfractions();
});

// Fonction pour bloquer certains raccourcis clavier
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'v' || e.key === 'x' || e.key === 'a')) {
        e.preventDefault();
        infractions++;
        updateInfractions();
    }
    // Bloquer la touche Windows
    if (e.key === 'Meta') {
        e.preventDefault();
        //infractions++;
        //updateInfractions();
        alert("L'utilisation de la touche Windows est interdite !");
    }
});

// Fonction pour bloquer le clic droit
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Fonction pour détecter si l'utilisateur quitte l'onglet
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'hidden' && !quizFinished) {
        infractions++;
        updateInfractions();
        alert("Attention! Sortir de l'onglet est considéré comme une infraction.");
    }
});

// Fonction pour essayer d'empêcher les captures d'écran
document.addEventListener('keyup', function(e) {
    if (e.key === 'PrintScreen') {
        e.preventDefault();
        //infractions++;
        //updateInfractions();
        alert("La capture d'écran est interdite !");
    }
});

// Fonction pour détecter si la souris quitte la fenêtre
document.addEventListener('mouseout', function(e) {
    // Vérifier si la souris sort par le haut, la gauche ou la droite de la fenêtre
    // e.relatedTarget et e.toElement sont null quand la souris quitte la fenêtre du navigateur
    if (!e.relatedTarget && !e.toElement && !quizFinished) {
        infractions++;
        updateInfractions();
        alert("Attention! Sortir la souris de la fenêtre du quiz est considéré comme une infraction.");
    }
});

function updateInfractions() {
    document.getElementById('infractions').textContent = 'Infractions: ' + infractions;
    if (infractions >= 3) {
        cheating = true;
        localStorage.setItem('cheated', 'true');
        // Calculer le score final en pourcentage
        const totalQuestions = getTotalQuestions();
        const finalScore = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;

        // Récupérer le nom de l'utilisateur et la spécialité depuis localStorage
        const userName = localStorage.getItem('userName');
        const specialite = localStorage.getItem('specialite');

        // Stocker les informations dans localStorage
        localStorage.setItem('userName', userName);
        localStorage.setItem('specialite', specialite);
        localStorage.setItem('score', finalScore.toFixed(2)); // Stocker score formaté
        // Rediriger vers les résultats immédiatement en cas de triche
        handleQuizEndOrError("Triche détectée. Le quiz est terminé.");
    }
}

// Fonction pour charger les données du quiz depuis un fichier JSON
async function loadQuizData(specialite) {
    let fileName;
    // Gérer le cas spécifique de "gestion de projet"
    if (specialite === 'gestion de projet') {
        fileName = 'gestion-projet';
    } else {
        // Pour les autres cas, remplacer les espaces par des traits d'union
        fileName = specialite.replace(/ /g, '-');
    }
    const filePath = `${fileName}.json`;
    console.log(`loadQuizData: Tentative de chargement depuis ${filePath}`); // LOG
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        currentQuizData = await response.json();
        console.log("loadQuizData: Données chargées avec succès:", currentQuizData); // LOG
    } catch (error) {
        console.error("Erreur lors du chargement des données du quiz:", error); // LOG ERREUR
        alert(`Erreur critique: Impossible de charger les données du quiz depuis ${filePath}. Le quiz ne peut pas démarrer.`);
        // Optionnel : Rediriger ou bloquer l'interface
        currentQuizData = null; // Assurer que les données sont nulles en cas d'erreur
        throw error; // Propager l'erreur pour que window.onload puisse la gérer
    }
}

window.onload = async () => { // Rendre la fonction async
    // --- Logique spécifique aux pages de Quiz ---
    const quizContainer = document.querySelector('.container1'); // Élément présent uniquement sur les pages de quiz
    console.log("window.onload: Vérification de quizContainer:", quizContainer); // LOG

    if (quizContainer) {
        console.log("window.onload: Page de quiz détectée."); // LOG

        // Récupérer et afficher le nom d'utilisateur
        let userName = null;
        try {
            userName = localStorage.getItem('userName');
            console.log("window.onload: Nom d'utilisateur récupéré:", userName); // LOG
        } catch (e) {
            console.error("Erreur lors de l'accès à localStorage pour userName:", e); // LOG ERREUR
        }

        const userNameElement = document.getElementById('user-name');
        if (userNameElement) {
            // Utiliser "UNKNOWN" si userName est null, undefined ou une chaîne vide
            userNameElement.textContent = userName ? userName : "UNKNOWN";
            console.log("window.onload: Nom affiché dans la sidebar:", userNameElement.textContent); // LOG
        } else {
            console.warn("window.onload: Élément #user-name non trouvé dans le DOM."); // LOG AVERTISSEMENT
        }

        // Récupérer la spécialité depuis localStorage
        let storedSpecialite = null;
        try {
            storedSpecialite = localStorage.getItem('specialite');
            console.log("window.onload: Spécialité récupérée de localStorage:", storedSpecialite); // LOG
        } catch (e) {
            console.error("Erreur lors de l'accès à localStorage:", e); // LOG ERREUR
            // Afficher un message à l'utilisateur ?
            alert("Erreur d'accès au stockage local. Le quiz ne peut pas démarrer.");
            return;
        }

        if (!storedSpecialite) {
            console.error("Spécialité non trouvée dans localStorage. Impossible de démarrer le quiz.");
            alert("Erreur: Spécialité non définie. Veuillez retourner à l'accueil.");
            // Optionnel : rediriger vers index.html si la spécialité manque
            // window.location.href = 'index.html';
            return; // Arrêter l'exécution si la spécialité manque
        }
        specialiteQuiz = storedSpecialite.toLowerCase();
        console.log("window.onload: specialiteQuiz définie:", specialiteQuiz); // LOG

        try {
            // Charger les données du quiz AVANT de charger la sidebar ou les questions
            await loadQuizData(specialiteQuiz);

            // Charger les modules dans la sidebar UNIQUEMENT si les données sont chargées
            loadModulesSidebar(); // Cette fonction contient déjà des logs
             // Initialiser les scores de module à 0
             if (currentQuizData) {
                 currentQuizData.forEach((module, index) => {
                     moduleScores[index] = 0;
                 });
             }; // Ajout point-virgule et correction accolade
        } catch (error) {
             console.error("window.onload: Échec du chargement initial des données du quiz. Arrêt."); // LOG ERREUR
             // Afficher un message à l'utilisateur ou bloquer l'interface ici si nécessaire
             return; // Arrêter l'exécution si les données ne peuvent pas être chargées
        }

        const popup = document.getElementById('instructions-popup');
        console.log('window.onload: popup element:', popup); // LOG

        let instructionsShown = false;
        try {
            instructionsShown = sessionStorage.getItem('instructionsShown');
            console.log('window.onload: instructionsShown récupéré de sessionStorage:', instructionsShown); // LOG
        } catch (e) {
            console.error("Erreur lors de l'accès à sessionStorage:", e); // LOG ERREUR
            // Continuer sans popup peut être problématique, mais on essaie
            alert("Erreur d'accès au stockage de session. Le popup d'instructions pourrait ne pas fonctionner correctement.");
        }


        // Afficher le pop-up d'instructions si c'est la première visite
        if (!instructionsShown) {
             console.log("window.onload: Affichage du popup d'instructions."); // LOG
            if (popup) { // Vérifier si l'élément popup existe
                popup.style.display = 'flex';
            } else {
                console.error('instructions-popup element not found!');
            }
        } else {
            console.log("window.onload: Instructions déjà vues, chargement direct de la question."); // LOG
            // Assurer que les données sont chargées avant de lancer la première question
            if (currentQuizData) {
                loadQuestion(); // Charger directement la question si les instructions ont déjà été vues
                 if (!startTime) { startTime = new Date(); } // Démarrer le timer ici aussi (ajout accolades)
            } else {
                 console.error("window.onload: Données du quiz non disponibles après la vérification des instructions."); // LOG ERREUR
                 alert("Erreur: Impossible de démarrer le quiz car les données n'ont pas pu être chargées.");
            }
        }

        // Timer
        setInterval(() => {
            // Vérifier si l'élément time existe avant de manipuler
            const timeElement = document.getElementById("time");
            if (!timeElement || !timeElement.textContent) return;

            let timer = timeElement.textContent.split(":"),
            hours = parseInt(timer[0]),
            minutes = parseInt(timer[1]),
            seconds = parseInt(timer[2]);
        if (seconds > 0) seconds--;
        else if (minutes > 0) { minutes--; seconds = 59; }
        else if (hours > 0) { hours--; minutes = 59; seconds = 59; }
        document.getElementById("time").textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);

    // Initialiser la webcam
        initWebcam();

        // Attacher les écouteurs pour next/submit SEULEMENT si les boutons existent
        const nextBtn = document.getElementById("next-btn");
        const submitBtn = document.getElementById("submit-btn");

        if (nextBtn) {
            nextBtn.addEventListener("click", selectAnswer);
        }
        if (submitBtn) {
            submitBtn.addEventListener("click", function() {
                selectAnswer(); // Appelle la même fonction que next
            });
        }

        // Gestionnaire d'événement pour le bouton Hamburger (déplacé ici pour être conditionné)
        const hamburgerBtn = document.getElementById('hamburger-btn');
        const sidebar = document.querySelector('.sidebar'); // Sélectionne la sidebar des modules

        if (hamburgerBtn && sidebar) {
            hamburgerBtn.addEventListener('click', function() {
                sidebar.classList.toggle('open'); // Ajoute ou retire la classe 'open'
            });

            // Optionnel : Fermer la sidebar si on clique en dehors (sur le main content par exemple)
            const mainContent = document.querySelector('.main-content');
            if (mainContent) {
                mainContent.addEventListener('click', function() {
                    if (sidebar.classList.contains('open')) {
                        sidebar.classList.remove('open');
                    }
                });
            }
             // Optionnel : Fermer la sidebar si on clique sur un module
            sidebar.addEventListener('click', function(event) {
                // Vérifier si l'élément cliqué est un LI et si la sidebar est ouverte
                if (event.target.tagName === 'LI' && sidebar.classList.contains('open')) {
                     // Appeler changeModule SEULEMENT si on clique sur un module différent de l'actuel
                    const clickedModuleIndex = parseInt(event.target.getAttribute('data-module-index'));
                    if (clickedModuleIndex !== currentModuleIndex) {
                         changeModule(clickedModuleIndex); // Charger le nouveau module
                    }
                    sidebar.classList.remove('open'); // Fermer la sidebar dans tous les cas de clic sur LI
                }
            });
        }

         // Gestionnaire d'événement pour le bouton "Commencer le Quiz" dans le pop-up (conditionné)
        const startQuizBtn = document.getElementById('start-quiz-btn');
        const closePopupBtn = document.getElementById('close-popup');
        // const popup = document.getElementById('instructions-popup'); // Déjà récupéré plus haut

        console.log("window.onload: Vérification boutons popup:", startQuizBtn, closePopupBtn, popup); // LOG

        if (startQuizBtn && popup) {
            startQuizBtn.addEventListener('click', function() {
                console.log("Bouton 'Commencer le Quiz' cliqué."); // LOG
                popup.style.display = 'none'; // Cacher le pop-up
                try {
                    sessionStorage.setItem('instructionsShown', 'true'); // Marquer les instructions comme vues
                    console.log("sessionStorage 'instructionsShown' mis à true."); // LOG
                } catch (e) {
                     console.error("Erreur lors de l'écriture dans sessionStorage:", e); // LOG ERREUR
                     alert("Erreur lors de la sauvegarde de l'état des instructions.");
                }
                // Assurer que les données sont chargées avant de lancer la première question
                if (currentQuizData) {
                    loadQuestion(); // Charger la première question
                     if (!startTime) { startTime = new Date(); } // Démarrer le timer (ajout accolades)
                } else {
                    console.error("window.onload (startQuizBtn): Données du quiz non disponibles."); // LOG ERREUR
                    alert("Erreur: Impossible de démarrer le quiz car les données n'ont pas pu être chargées.");
                }
            });
        }
        if (closePopupBtn && popup) {
             closePopupBtn.addEventListener('click', function() {
                console.log("Bouton 'Fermer Popup' cliqué."); // LOG
                popup.style.display = 'none'; // Cacher le pop-up
                 try {
                    sessionStorage.setItem('instructionsShown', 'true'); // Marquer les instructions comme vues
                    console.log("sessionStorage 'instructionsShown' mis à true."); // LOG
                } catch (e) {
                     console.error("Erreur lors de l'écriture dans sessionStorage:", e); // LOG ERREUR
                     alert("Erreur lors de la sauvegarde de l'état des instructions.");
                }
                 // Assurer que les données sont chargées avant de lancer la première question
                if (currentQuizData) {
                    loadQuestion(); // Charger la première question même si l'utilisateur ferme sans cliquer sur "Commencer"
                     if (!startTime) { startTime = new Date(); } // Démarrer le timer ici aussi (ajout accolades)
                } else {
                    console.error("window.onload (closePopupBtn): Données du quiz non disponibles."); // LOG ERREUR
                    alert("Erreur: Impossible de démarrer le quiz car les données n'ont pas pu être chargées.");
                }
            });
        }


    } // Fin de la condition if (quizContainer)

    // --- Logique commune ou spécifique à d'autres pages (si nécessaire) ---
    // Par exemple, la redirection depuis index.html est gérée directement dans index.html
    // La logique pour resultats.js est dans son propre fichier.
};


function initWebcam() {
    const webcamContainer = document.getElementById('webcam-container');
    if (!webcamContainer) return; // Sortir si pas sur une page de quiz

    // Détecter si l'appareil est mobile/tablette (méthode simple basée sur userAgent)
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    if (isMobile) {
        console.log("Appareil mobile détecté, désactivation de la webcam."); // LOG
        webcamContainer.style.display = 'none'; // Masquer le conteneur de la webcam
        return; // Ne pas initialiser la webcam sur mobile/tablette
    }

    // Initialiser la webcam uniquement sur les appareils non mobiles
    console.log("Initialisation de la webcam pour appareil non mobile."); // LOG
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            const video = document.getElementById('webcam-video');
            if (video) {
                video.srcObject = stream;
            }
        })
        .catch(function (err) {
            console.error("Erreur lors de l'accès à la webcam: ", err);
            if (webcamContainer) {
                webcamContainer.innerHTML = "Erreur d'accès à la webcam.";
                webcamContainer.style.color = 'red';
            }
        });
}

/**
 * Fonction pour mélanger un tableau aléatoirement (algorithme de Fisher-Yates)
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Échange les éléments
    }
    return array;
}

function loadModulesSidebar() {
    console.log('loadModulesSidebar() appelée'); // AJOUTER CE LOG
    const sidebarModules = document.querySelector('.sidebar ul');
    sidebarModules.innerHTML = ''; // Effacer la liste existante

    // Utiliser currentQuizData au lieu de quizData[specialiteQuiz]
    const modules = currentQuizData;
    console.log('currentQuizData (pour modules):', modules); // LOG mis à jour
    if (modules) {
        // Mélanger l'ordre des modules
        shuffleArray(modules); // Mélanger ici
        modules.forEach((module, index) => {
            const moduleLi = document.createElement('li');
            moduleLi.textContent = module.moduleName;
            moduleLi.setAttribute('data-module-index', index); // Stocker l'index du module
            moduleLi.addEventListener('click', function() {
                changeModule(index);
            });
            sidebarModules.appendChild(moduleLi);
        });
        // Activer le premier module par défaut
        activateModuleInSidebar(0);
    }
}

function activateModuleInSidebar(moduleIndex) {
    const sidebarModules = document.querySelectorAll('.sidebar ul li');
    sidebarModules.forEach(li => li.classList.remove('active')); // Désactiver tous les modules
    if (sidebarModules[moduleIndex]) { // Vérifier si l'élément existe
        sidebarModules[moduleIndex].classList.add('active'); // Activer le module courant
    } else {
        console.warn("activateModuleInSidebar: Index de module invalide pour l'activation:", moduleIndex);
    }
}

function changeModule(moduleIndex) {
    currentModuleIndex = moduleIndex;
    currentQuestionIndex = 0; // Réinitialiser l'index des questions
    progress = 0;
    document.getElementById("progress-bar").style.width = progress + "%";
    document.getElementById("progress-text").textContent = `${currentQuestionIndex}/${getCurrentModuleQuestions().length} Questions`;

    // Mélanger les questions du module avant de charger la première question
    // Utiliser currentQuizData
    if (!currentQuizData || !currentQuizData[moduleIndex]) {
        console.error("changeModule: Données du quiz ou module invalide pour l'index", moduleIndex);
        return;
    }
    shuffleArray(currentQuizData[moduleIndex].questions); // Mélanger ici
    loadQuestion();
    activateModuleInSidebar(moduleIndex);

    // Mettre à jour le titre du module dans le main-content
    // Utiliser currentQuizData
    document.getElementById('module-name').textContent = currentQuizData[moduleIndex].moduleName;
}

function loadQuestion() {
    console.log("loadQuestion: Début du chargement de la question."); // LOG
    // Vérifier si currentQuizData est chargé
    if (!currentQuizData) {
        console.error("loadQuestion: Données du quiz (currentQuizData) non chargées ou vides."); // LOG ERREUR
        // Afficher un message d'erreur à l'utilisateur ?
        const qt = document.getElementById("question-text");
        const oc = document.getElementById("options-container");
        if(qt) qt.textContent = "Erreur: Impossible de charger les données du quiz.";
        if(oc) oc.innerHTML = "";
        alert("Erreur critique: Données du quiz introuvables.");
        return;
    }
     // Vérifier si le module courant existe
    // Utiliser currentQuizData
    if (!currentQuizData[currentModuleIndex]) {
        console.error("loadQuestion: Index de module invalide:", currentModuleIndex, "dans currentQuizData."); // LOG ERREUR
         // Gérer la fin du quiz ou une erreur
        handleQuizEndOrError("Erreur: Module de quiz non trouvé.");
        return;
    }

    const currentModuleQuestions = getCurrentModuleQuestions();
     console.log("loadQuestion: Module actuel:", currentModuleIndex, "Nombre de questions:", currentModuleQuestions.length); // LOG

    if (currentQuestionIndex < currentModuleQuestions.length) {
        const question = currentModuleQuestions[currentQuestionIndex];
         console.log("loadQuestion: Chargement question index", currentQuestionIndex, ":", question.text); // LOG

        // Vérifier l'existence des éléments avant de les manipuler
        const questionTextElement = document.getElementById("question-text");
        const optionsContainerElement = document.getElementById("options-container");
        const progressTextElement = document.getElementById("progress-text");
        const moduleNameElement = document.getElementById('module-name');

        if (!questionTextElement || !optionsContainerElement || !progressTextElement || !moduleNameElement) {
            console.error("loadQuestion: Un ou plusieurs éléments HTML requis sont manquants."); // LOG ERREUR
            alert("Erreur d'interface: Impossible d'afficher la question.");
            return; // Arrêter si des éléments manquent
        }


        questionTextElement.textContent = question.text;
        optionsContainerElement.innerHTML = "";

        // Mélanger l'ordre des options de réponse
        const shuffledOptions = [...question.options]; // Créer une copie pour ne pas modifier l'original
        try {
            shuffleArray(shuffledOptions); // Mélanger la copie
        } catch (e) {
            console.error("loadQuestion: Erreur lors du mélange des options:", e); // LOG ERREUR
            // Continuer avec les options non mélangées ? C'est ok ici.
        }


        shuffledOptions.forEach((option, index) => {
            const label = document.createElement("label");
            // Trouver l'index original de l'option pour la valeur du radio button
            const originalOptionIndex = question.options.indexOf(option);
            label.innerHTML = `<input type="radio" name="qcm" value="${originalOptionIndex}"> ${option}`; // Utiliser l'index original comme valeur
            label.classList.add("option");
            optionsContainerElement.appendChild(label);
        });
        // Mettre à jour le texte de progression pour refléter le nombre de questions dans le module courant
        progressTextElement.textContent = `${currentQuestionIndex + 1}/${currentModuleQuestions.length} Questions`;
        // Utiliser currentQuizData
        moduleNameElement.textContent = currentQuizData[currentModuleIndex].moduleName;
        console.log("loadQuestion: Question affichée avec succès."); // LOG

         // Gérer l'affichage des boutons next/submit
        const nextBtn = document.getElementById("next-btn");
        const submitBtn = document.getElementById("submit-btn");
        if (!nextBtn || !submitBtn) {
             console.error("loadQuestion: Boutons next/submit non trouvés.");
             return;
        }

        if (currentQuestionIndex < currentModuleQuestions.length - 1) { // Pas la dernière question
            nextBtn.style.display = "inline-block";
            submitBtn.style.display = "none";
        } else { // Dernière question du module
            nextBtn.style.display = "none";
            submitBtn.style.display = "inline-block";
            submitBtn.className = nextBtn.className; // Copier les classes pour le style
        }


    } else {
        console.log("loadQuestion: Fin du module", currentModuleIndex); // LOG
        // Module terminé, passer au module suivant ou afficher les résultats si c'est le dernier module
        currentModuleIndex++;
        currentQuestionIndex = 0;
        // Utiliser currentQuizData
        if (currentModuleIndex < currentQuizData.length) {
            console.log("loadQuestion: Passage au module suivant:", currentModuleIndex); // LOG
            changeModule(currentModuleIndex); // Charger le module suivant
        } else {
             console.log("loadQuestion: Tous les modules terminés. Redirection vers les résultats."); // LOG
            // Tous les modules sont terminés, afficher la page de résultats
            handleQuizEndOrError(); // Utiliser une fonction séparée pour la fin
        }
    }
}

function getCurrentModuleQuestions() {
    // Utiliser currentQuizData
    if (!currentQuizData || !currentQuizData[currentModuleIndex]) {
        console.error("getCurrentModuleQuestions: Données du quiz ou module invalide pour l'index", currentModuleIndex);
        return []; // Retourner un tableau vide en cas d'erreur
    }
    return currentQuizData[currentModuleIndex].questions;
}

function getTotalQuestions() {
    let totalQuestions = 0;
    // Utiliser currentQuizData
    if (!currentQuizData) {
        console.warn("getTotalQuestions: currentQuizData n'est pas chargé.");
        return 0; // Retourner 0 si les données ne sont pas chargées
    }
    currentQuizData.forEach(module => {
        totalQuestions += module.questions.length;
    });
    return totalQuestions;
}

// Nouvelle fonction pour gérer la fin du quiz ou une erreur majeure
function handleQuizEndOrError(errorMessage = null) {
    quizFinished = true; // Marquer comme terminé
    console.log("handleQuizEndOrError: Quiz terminé ou erreur majeure.", errorMessage || ""); // LOG
    if (errorMessage) {
        alert(errorMessage); // Afficher l'erreur à l'utilisateur si fournie
    }
    // Calculer le temps écoulé
    let elapsedTime = null;
    if (startTime) {
        const endTime = new Date();
        elapsedTime = Math.round((endTime - startTime) / 1000); // Temps en secondes
        console.log("handleQuizEndOrError: Temps écoulé:", elapsedTime, "secondes"); // LOG
    }; // Correction point-virgule

    try {
        localStorage.setItem('cheated', cheating.toString()); // Assurer que c'est une chaîne
        const totalQuestions = getTotalQuestions();
        // Éviter la division par zéro si getTotalQuestions renvoie 0
        const finalScore = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;
        localStorage.setItem('score', finalScore.toFixed(2)); // Stocker score formaté
        // Assurer que userName et specialite sont bien dans localStorage avant redirection
        const userName = localStorage.getItem('userName');
        const specialite = localStorage.getItem('specialite');
        if (userName) localStorage.setItem('userName', userName);
        if (specialite) localStorage.setItem('specialite', specialite);
        localStorage.setItem('moduleScores', JSON.stringify(moduleScores)); // Stocker les scores par module
        if (elapsedTime !== null) { localStorage.setItem('elapsedTime', elapsedTime.toString()); } // Stocker le temps écoulé en chaîne

        console.log("handleQuizEndOrError: Données enregistrées:", { userName, specialite, score: finalScore, cheating, moduleScores, elapsedTime }); // LOG
        console.log("handleQuizEndOrError: Redirection vers resultats.html"); // LOG
        window.location.href = 'resultats.html';
    } catch (e) {
        console.error("Erreur lors de l'enregistrement des résultats ou de la redirection:", e); // LOG ERREUR
        // Afficher un message d'erreur à l'utilisateur ?
        alert("Une erreur est survenue lors de la finalisation du quiz. Vos résultats pourraient ne pas être sauvegardés.");
    }
}


function selectAnswer() {
    console.log("selectAnswer: Sélection d'une réponse."); // LOG
    const selectedOptionInput = document.querySelector('input[name="qcm"]:checked');
    if (selectedOptionInput) {
        const selectedOriginalIndex = parseInt(selectedOptionInput.value); // La valeur est maintenant l'index original
        console.log("selectAnswer: Index original sélectionné:", selectedOriginalIndex); // LOG

        // Vérifier si la question actuelle existe
         if (!getCurrentModuleQuestions()[currentQuestionIndex]) {
             console.error("selectAnswer: Impossible de trouver la question actuelle pour vérifier la réponse.");
             handleQuizEndOrError("Erreur lors de la vérification de la réponse.");
             return;
         }

        if (selectedOriginalIndex === getCurrentModuleQuestions()[currentQuestionIndex].answer) {
            score++;
            moduleScores[currentModuleIndex]++; // Incrémenter le score du module courant
            console.log("selectAnswer: Bonne réponse. Score actuel:", score); // LOG
        } else {
             console.log("selectAnswer: Mauvaise réponse."); // LOG
        }
    } else {
         console.log("selectAnswer: Aucune réponse sélectionnée."); // LOG
         // Empêcher de continuer sans réponse
         alert("Veuillez sélectionner une réponse avant de continuer.");
         return; // Ne pas continuer si aucune réponse n'est sélectionnée
    }

    // Vérifier si c'est la dernière question du dernier module
    // Utiliser currentQuizData
    const isLastModule = currentModuleIndex === currentQuizData.length - 1;
    const isLastQuestionOfModule = currentQuestionIndex === getCurrentModuleQuestions().length - 1;

    if (isLastModule && isLastQuestionOfModule) {
        console.log("selectAnswer: Dernière question du quiz répondue. Fin du quiz."); // LOG
        handleQuizEndOrError(); // Terminer le quiz directement
        return; // Ne pas exécuter le reste de la fonction
    }

    currentQuestionIndex++;
     // Vérifier si la barre de progression existe
    const progressBar = document.getElementById("progress-bar");
    if (progressBar) {
        const currentModuleLength = getCurrentModuleQuestions().length;
        // Éviter la division par zéro
        progress = currentModuleLength > 0 ? ((currentQuestionIndex) / currentModuleLength) * 100 : 0;
        progressBar.style.width = progress + "%";
        console.log("selectAnswer: Progression mise à jour:", progress); // LOG
    } else {
        console.warn("selectAnswer: Élément progress-bar non trouvé."); // LOG AVERTISSEMENT
    }


    // Charger la question suivante ou terminer
    loadQuestion(); // loadQuestion gère maintenant l'affichage des boutons et la fin du quiz/module
}

// La logique pour afficher le nom d'utilisateur est aussi conditionnée dans window.onload

// Les gestionnaires pour start-quiz-btn et close-popup sont maintenant dans window.onload et conditionnés

// Le gestionnaire pour le bouton Hamburger est maintenant dans window.onload et conditionné