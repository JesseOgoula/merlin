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

});

// Le code pour le bouton restart-btn reste ici
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