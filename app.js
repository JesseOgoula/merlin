function redirigerQuiz(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire
  
    const specialite = document.getElementById("specialite").value; // Récupère la spécialité choisie
  
    if (specialite === "Gestion") {
      window.location.href = "quiz-gestion-projet.html"; // Redirection vers le quiz de mathématiques
    } else if (specialite === "Marketing") {
      window.location.href = "quiz-marketing-digital.html"; // Redirection vers le quiz de physique
    }
  }

  
// partie gestion de la page de quiz
const quizData = {
    "gestion de projet": [
        {
            "moduleName": " Fondamentaux de la gestion de projet",
            "questions": [
    {
        "text": "Qu'est‑ce que la gestion de projet ?",
        "options": [
          "La planification et l'exécution de tâches pour atteindre des objectifs définis",
          "Le suivi de la production industrielle",
          "L'analyse financière",
          "La gestion des ressources humaines"
        ],
        "answer": 0
      },
    {
        "text": "Quelle tendance est prévue pour l'emploi en gestion de projet sur la prochaine décennie ?",
        "options": [
          "Une diminution drastique",
          "Une stagnation",
          "Une croissance significative",
          "Une croissance modeste"
        ],
        "answer": 2
      },
    {
        "text": "Quel défi majeur est mis en évidence dans le domaine de la gestion de projet ?",
        "options": [
          "Un excès de talents",
          "Un déficit de talents",
          "Un manque de projets",
          "Une surqualification des chefs de projet"
        ],
        "answer": 1
      },
    {
        "text": "Pourquoi adopter une approche structurée dans la gestion de projet ?",
        "options": [
          "Réduire le temps de développement",
          "Garantir le succès des projets",
          "Minimiser uniquement les coûts",
          "Augmenter la complexité des projets"
        ],
        "answer": 1
      },
    {
        "text": "Quel est le rôle principal du Scrum Master dans Scrum ?",
        "options": [
          "Gérer l'équipe",
          "Servir l'équipe en facilitant le processus",
          "Décider des tâches",
          "Imposer les décisions"
        ],
        "answer": 1
      },
    {
        "text": "Que représente le Sprint dans Scrum ?",
        "options": [
          "Une réunion quotidienne",
          "Une période de travail itérative",
          "Une phase de planification",
          "Une phase de clôture de projet"
        ],
        "answer": 1
      },
    {
        "text": "Quel document permet de mesurer la satisfaction des professionnels de la gestion de projet ?",
        "options": [
          "Le rapport annuel",
          "Un sondage sur la profession",
          "Le guide de certification",
          "L'analyse de marché"
        ],
        "answer": 1
      },
    {
        "text": "Quel objectif principal permet d'analyser l'évolution de la profession ?",
        "options": [
          "Identifier la technologie utilisée",
          "Comprendre les pratiques et la santé de la profession",
          "Étudier la structure organisationnelle",
          "Définir les normes comptables"
        ],
        "answer": 1
      },
    {
        "text": "Quels sont les éléments essentiels d'une gestion de projet efficace ?",
        "options": [
          "La planification, la communication et le suivi",
          "Le recrutement, la formation et la promotion",
          "La vente, le marketing et la distribution",
          "La conception, la production et la distribution"
        ],
        "answer": 0
      },
    {
        "text": "Qu'est ce qui caractérise l'approche Scrum ?",
        "options": [
          "Une documentation exhaustive",
          "L'inspection et l'adaptation continue",
          "Une hiérarchie stricte",
          "Une planification à long terme"
        ],
        "answer": 1
      },
    {
        "text": "Quelle est la principale raison d'un déficit de talents en gestion de projet ?",
        "options": [
          "Une baisse de l'intérêt pour le domaine",
          "Une croissance rapide nécessitant de nouvelles compétences",
          "Une diminution de l'offre de formations",
          "Un excès de qualifications"
        ],
        "answer": 1
      },
    {
        "text": "Quel est l'objectif fondamental de la gestion de projet ?",
        "options": [
          "Augmenter uniquement les bénéfices",
          "Gérer les ressources pour atteindre des objectifs",
          "Réduire uniquement les coûts de production",
          "Accroître la productivité des employés"
        ],
        "answer": 1
      },
    {
        "text": "Que représente le terme Scrum dans la gestion de projet Agile ?",
        "options": [
          "Une réunion d'équipe",
          "Un cadre de travail",
          "Un outil de gestion du temps",
          "Une méthode hiérarchique"
        ],
        "answer": 1
      },
      {
        "text": "La croissance de l'emploi en gestion de projet implique :",
        "options": [
          "Une stagnation du marché",
          "Une augmentation de la demande de professionnels",
          "Un déclin de la profession",
          "Une réorientation vers d'autres domaines"
        ],
        "answer": 1
      },
      {
        "text": "Quel est l'objectif principal d'un rapport sur l'état de la profession ?",
        "options": [
          "Évaluer les tendances et les défis du secteur",
          "Fournir des stratégies de vente",
          "Définir les salaires",
          "Identifier les technologies obsolètes"
        ],
        "answer": 0
      },
      {
        "text": "Quelle compétence est essentielle pour un chef de projet ?",
        "options": [
          "La maîtrise des langages de programmation",
          "La communication efficace",
          "La connaissance en marketing",
          "La gestion des stocks"
        ],
        "answer": 1
      },
      {
        "text": "Quel rôle joue la flexibilité dans Scrum ?",
        "options": [
          "Permet de changer de direction en fonction des retours",
          "Rendre le processus rigide",
          "Empêcher la révision des objectifs",
          "Décourager l'innovation"
        ],
        "answer": 0
      },
      {
        "text": "Quel est l'impact de l'évolution technologique sur la gestion de projet ?",
        "options": [
          "Aucune influence",
          "Accroît la complexité des projets",
          "Favorise l'émergence de nouveaux outils",
          "Réduit le besoin de formation"
        ],
        "answer": 2
      },
      {
        "text": "Quelle approche favorise l'inspection régulière et l'adaptation ?",
        "options": [
          "La méthode Waterfall",
          "La méthode Scrum",
          "La gestion de crise",
          "La planification stratégique"
        ],
        "answer": 1
      },
      {
        "text": "Qui est responsable de maximiser la valeur du produit dans Scrum ?",
        "options": [
          "Le Scrum Master",
          "Le Product Owner",
          "L'équipe de développement",
          "Le client"
        ],
        "answer": 1
      },
      {
        "text": "Que décrit un rapport sur la croissance de l'emploi en gestion de projet ?",
        "options": [
          "Les statistiques sur les technologies de l'information",
          "Les tendances en matière d'emploi et de compétences",
          "La répartition géographique des projets",
          "Les méthodes de formation pour chefs de projet"
        ],
        "answer": 1
      },
      {
        "text": "Quel avantage clé offre le management de projet ?",
        "options": [
          "Augmenter la confusion dans l'équipe",
          "Clarifier les objectifs et les responsabilités",
          "Réduire la communication",
          "Limiter l'innovation"
        ],
        "answer": 1
      },
      {
        "text": "La méthode Scrum se caractérise par :",
        "options": [
          "Une planification unique en début de projet",
          "Des itérations courtes et récurrentes",
          "Un processus sans rétroaction",
          "Un management autoritaire"
        ],
        "answer": 1
      },
      {
        "text": "Quel document permet de comprendre l'impact de la technologie sur la gestion de projet ?",
        "options": [
          "Le guide Scrum",
          "Un rapport sur l'état de la profession",
          "Un article sur la gestion de projet",
          "Un rapport sur la croissance de l'emploi"
        ],
        "answer": 3
      },
      {
        "text": "Quel est le principal objectif d'un Sprint dans Scrum ?",
        "options": [
          "Concevoir un produit final",
          "Livrer un incrément de produit fonctionnel",
          "Planifier l'ensemble du projet",
          "Réunir l'équipe pour discuter"
        ],
        "answer": 1
      },
      {
        "text": "Comment la gestion de projet contribue-t-elle à la réussite d'une organisation ?",
        "options": [
          "En améliorant la coordination des ressources et l'atteinte des objectifs",
          "En diminuant la visibilité des projets",
          "En limitant la communication entre départements",
          "En éliminant les risques"
        ],
        "answer": 0
      },
      {
        "text": "Quelle relation existe-t-il entre la croissance de l'emploi et le déficit de talents ?",
        "options": [
          "La croissance ne crée aucun déficit",
          "La croissance génère un besoin accru de professionnels qualifiés",
          "Le déficit diminue avec la croissance",
          "La croissance est due à un surplus de talents"
        ],
        "answer": 1
      },
      {
        "text": "Dans Scrum, l'équipe doit être :",
        "options": [
          "Auto-organisée",
          "Dirigée par un manager externe",
          "Hiérarchisée strictement",
          "Composée uniquement de développeurs"
        ],
        "answer": 0
      },
      {
        "text": "Quel rôle joue la rétroaction dans le processus Scrum ?",
        "options": [
          "Elle permet d'ignorer les erreurs",
          "Elle favorise l'amélioration continue",
          "Elle est facultative",
          "Elle complique le projet"
        ],
        "answer": 1
      },
      {
        "text": "Quel facteur est déterminant dans le succès d'un projet ?",
        "options": [
          "La qualité de la communication",
          "La rapidité d'exécution sans planification",
          "Le budget alloué uniquement",
          "Le nombre de réunions"
        ],
        "answer": 0
      }
            ]
        },
        {
            "moduleName": "La valeur d'un gestionnaire de projet",
            "questions": [
                {
                    "text": "Qui peut être considéré comme un chef de projet ?",
                    "options": [
                        "Uniquement un manager d'équipes",
                        "Un professionnel responsable de la planification, de l'exécution et du suivi des projets",
                        "Un technicien spécialisé",
                        "Un consultant externe"
                    ],
                    "answer": 1
                },
                {
                    "text": "Quel aspect est valorisé dans le rôle d'un chef de projet ?",
                    "options": [
                        "La capacité à gérer efficacement les ressources",
                        "La spécialisation dans un domaine technique uniquement",
                        "La gestion exclusive des ressources humaines",
                        "La réduction du temps de travail"
                    ],
                    "answer": 0
                },
                {
                    "text": "Quel document présente un aperçu du contenu de l'examen PMP ?",
                    "options": [
                        "Le guide Scrum",
                        "Un aperçu du contenu de l'examen PMP",
                        "Un rapport sur la croissance de l'emploi",
                        "Un sondage sur la profession"
                    ],
                    "answer": 1
                },
                {
                    "text": "Quel est l'objectif principal de l'examen PMP ?",
                    "options": [
                        "Mesurer les compétences en gestion de projet",
                        "Tester des connaissances en informatique",
                        "Évaluer des compétences en vente",
                        "Déterminer le salaire d'un chef de projet"
                    ],
                    "answer": 0
                },
                {
                    "text": "Quelles compétences sont essentielles pour un chef de projet ?",
                    "options": [
                        "La gestion du temps, la communication et la résolution de problèmes",
                        "La maîtrise de logiciels spécifiques uniquement",
                        "La capacité à coder",
                        "La gestion des stocks"
                    ],
                    "answer": 0
                },
                {
                    "text": "Le rôle d'un chef de projet inclut :",
                    "options": [
                        "La planification et l'exécution des projets",
                        "La maintenance des équipements uniquement",
                        "La gestion des finances personnelles",
                        "La production industrielle"
                    ],
                    "answer": 0
                },
                {
                    "text": "Quel avantage offre la certification PMP ?",
                    "options": [
                        "Une reconnaissance internationale",
                        "L'exclusivité au sein d'une entreprise",
                        "La garantie d'un poste permanent",
                        "Une augmentation automatique du salaire"
                    ],
                    "answer": 0
                },
                {
                    "text": "Quel domaine est évalué dans le contenu de l'examen PMP ?",
                    "options": [
                        "La gestion des communications",
                        "La conception de produits",
                        "La programmation informatique",
                        "La gestion des ventes"
                    ],
                    "answer": 0
                },
                {
                    "text": "Quel rôle stratégique joue un chef de projet dans une équipe ?",
                    "options": [
                        "Assurer la coordination et l'alignement des objectifs",
                        "Se contenter d'exécuter les tâches",
                        "Se concentrer uniquement sur les aspects financiers",
                        "Ne pas communiquer avec les parties prenantes"
                    ],
                    "answer": 0
                },
                {
                    "text": "Comment la certification PMP contribue-t-elle à la réussite professionnelle ?",
                    "options": [
                        "En attestant de la maîtrise des pratiques de gestion de projet",
                        "En garantissant une promotion immédiate",
                        "En augmentant les heures de travail",
                        "En réduisant la complexité des projets"
                    ],
                    "answer": 0
                },
                {
                    "text": "Quel est l'impact d'un chef de projet efficace sur une équipe ?",
                    "options": [
                        "Amélioration de la communication et de la productivité",
                        "Augmentation des conflits internes",
                        "Réduction de la coordination",
                        "Diminution de l'engagement"
                    ],
                    "answer": 0
                },
                {
                    "text": "Quel rôle stratégique est mis en avant dans la gestion de projet ?",
                    "options": [
                        "Le rôle de facilitateur",
                        "Le rôle de superviseur hiérarchique strict",
                        "Le rôle de simple exécutant",
                        "Le rôle de technicien isolé"
                    ],
                    "answer": 0
                },
                {
                    "text": "Quel document détaille les domaines de connaissances évalués lors de l'examen PMP ?",
                    "options": [
                        "Le guide Agile",
                        "Un aperçu du contenu de l'examen PMP",
                        "Un rapport sur la gestion des talents",
                        "La documentation Scrum"
                    ],
                    "answer": 1
                },
                {
                    "text": "Quel défi est particulièrement présent pour un chef de projet ?",
                    "options": [
                        "La gestion des parties prenantes",
                        "L'optimisation du code",
                        "La gestion des stocks",
                        "La conception graphique"
                    ],
                    "answer": 0
                },
                {
                    "text": "L'examen PMP évalue également la capacité à :",
                    "options": [
                        "Gérer les risques",
                        "Programmer des applications",
                        "Développer des produits",
                        "Concevoir des campagnes publicitaires"
                    ],
                    "answer": 0
                },
                {
                    "text": "La valeur d'un chef de projet se mesure en :",
                    "options": [
                        "La qualité de la planification et de l'exécution",
                        "Le nombre de projets annulés",
                        "La rapidité sans réflexion",
                        "Le suivi des tendances marketing"
                    ],
                    "answer": 0
                },
                {
                    "text": "La certification PMP est reconnue pour :",
                    "options": [
                        "Ses critères stricts et son alignement avec les meilleures pratiques",
                        "Son coût élevé uniquement",
                        "Sa durée de formation limitée",
                        "Son exclusivité régionale"
                    ],
                    "answer": 0
                },
                {
                    "text": "Quel est l'impact de la gestion de projet sur la performance organisationnelle ?",
                    "options": [
                        "Une amélioration notable",
                        "Une dégradation",
                        "Aucune influence",
                        "Un impact négatif"
                    ],
                    "answer": 0
                },
                {
                    "text": "La capacité à adapter les stratégies de gestion de projet est évaluée lors de l'examen PMP.",
                    "options": [
                        "Vrai",
                        "Faux",
                        "Partiellement",
                        "Sans importance"
                    ],
                    "answer": 0
                },
                {
                    "text": "La valeur d'un gestionnaire de projet réside principalement dans :",
                    "options": [
                        "Sa capacité à optimiser les processus et mobiliser l'équipe",
                        "Son habileté technique isolée",
                        "Sa gestion des technologies",
                        "Sa capacité à réduire les coûts sans compromis sur la qualité"
                    ],
                    "answer": 0
                }
            ]
        },
        {
            "moduleName": "Approches communes de gestion de projet et choix de méthodologie",
            "questions": [
                {
                    "text": "Quelle méthodologie est souvent associée à une approche séquentielle ?",
                    "options": ["La méthode Agile", "La méthode Waterfall", "La méthode Scrum", "La méthode Kanban"],
                    "answer": 1
                },
                {
                    "text": "Quelle méthodologie privilégie la flexibilité et l'adaptation ?",
                    "options": ["La méthode Waterfall", "La méthode Agile", "La méthode en cascade", "La méthode prédictive"],
                    "answer": 1
                },
                {
                    "text": "Le choix d'une méthodologie de gestion de projet dépend principalement de :",
                    "options": ["La taille du budget uniquement", "La nature et les exigences du projet", "Le nombre de membres de l'équipe", "La localisation géographique"],
                    "answer": 1
                },
                {
                    "text": "Dans la méthodologie Scrum, le terme « Sprint » désigne :",
                    "options": ["Une réunion de démarrage", "Une période fixe pour développer une partie du produit", "Une réunion de clôture", "Une phase de test uniquement"],
                    "answer": 1
                },
                {
                    "text": "Quelle méthodologie met l'accent sur la visualisation du travail en cours ?",
                    "options": ["La méthode Kanban", "La méthode Agile", "La méthode Waterfall", "La méthode PRINCE2"],
                    "answer": 0
                },
                {
                    "text": "La méthode Agile se caractérise par :",
                    "options": ["Une planification rigide", "Une approche itérative et incrémentale", "Un cycle de vie linéaire", "L'absence de rétroaction"],
                    "answer": 1
                },
                {
                    "text": "Quel est un avantage clé de l'approche Waterfall ?",
                    "options": ["Une meilleure planification initiale", "Une flexibilité maximale", "Une adaptation continue", "Une réactivité aux changements"],
                    "answer": 0
                },
                {
                    "text": "Pour des projets aux exigences bien définies dès le départ, quelle méthode est recommandée ?",
                    "options": ["La méthode Agile", "La méthode Waterfall", "La méthode Scrum", "La méthode Kanban"],
                    "answer": 1
                },
                {
                    "text": "Le choix de la méthodologie se fait en évaluant :",
                    "options": ["Les risques et l'incertitude", "Le temps de déjeuner", "Le nombre de réunions", "Le nombre de locaux disponibles"],
                    "answer": 0
                },
                {
                    "text": "Pour des projets nécessitant une collaboration étroite et des ajustements fréquents, quelle méthode est adaptée ?",
                    "options": ["Une forte prévisibilité", "Une collaboration étroite et des ajustements fréquents", "Une planification unique", "Un contrôle strict et rigide"],
                    "answer": 1
                },
                {
                    "text": "Une approche hybride combine :",
                    "options": ["Les avantages des méthodes prédictives et agiles", "Les avantages d'un management strict uniquement", "La gestion des ressources humaines uniquement", "L'approche hiérarchique avec la méthode Waterfall"],
                    "answer": 0
                },
                {
                    "text": "Quelle méthode est connue pour sa structure en cycles itératifs ?",
                    "options": ["La méthode en cascade", "La méthode Agile", "La planification linéaire", "La conception en V"],
                    "answer": 1
                },
                {
                    "text": "La flexibilité d'une méthodologie permet de :",
                    "options": ["Répondre efficacement aux changements", "Rendre le projet plus rigide", "Éviter toute modification du plan initial", "Allonger la durée du projet"],
                    "answer": 0
                },
                {
                    "text": "Quel critère est essentiel lors du choix d'une méthodologie ?",
                    "options": ["La couleur des documents", "La compréhension des besoins des parties prenantes", "La localisation du siège social", "La taille des bureaux"],
                    "answer": 1
                },
                {
                    "text": "La méthode Kanban utilise principalement :",
                    "options": ["Des tableaux visuels pour suivre l'avancement", "Des rapports écrits exclusivement", "Une documentation exhaustive", "Une approche cyclique sans visualisation"],
                    "answer": 0
                },
                {
                    "text": "Quel inconvénient peut présenter la méthode Waterfall ?",
                    "options": ["La difficulté d'adaptation aux changements", "Une trop grande flexibilité", "Le manque de structure", "Le risque de surcommunication"],
                    "answer": 0
                },
                {
                    "text": "La méthode Agile favorise :",
                    "options": ["La planification à long terme sans ajustement", "La réactivité aux retours d'expérience", "Une documentation exhaustive", "Une séparation stricte des phases"],
                    "answer": 1
                },
                {
                    "text": "Quel rôle joue l'analyse des risques dans le choix de la méthodologie ?",
                    "options": ["Aucun rôle", "Un rôle clé pour adapter l'approche", "Un rôle secondaire", "Un rôle exclusivement financier"],
                    "answer": 1
                },
                {
                    "text": "Quel avantage la méthode Agile offre-t-elle par rapport à la méthode Waterfall ?",
                    "options": ["Une meilleure planification initiale", "Une capacité accrue à intégrer les changements", "Une documentation plus complète", "Une structure de reporting plus stricte"],
                    "answer": 1
                },
                {
                    "text": "Quel critère peut influencer le choix entre une approche Agile et Waterfall ?",
                    "options": ["La volatilité des exigences du projet", "La taille de l'équipe uniquement", "La durée des réunions", "La localisation du bureau"],
                    "answer": 0
                }
            ]
        },
        {
            "moduleName": "Le rôle du chef de projet au sein des structures organisationnelles",
            "questions": [
                {
                    "text": "Qu'est‑ce qu'une organisation matricielle ?",
                    "options": ["Une organisation avec une seule hiérarchie", "Une structure où les employés ont plusieurs supérieurs (fonctionnels et de projet)", "Une organisation sans structure", "Une structure purement fonctionnelle"],
                    "answer": 1
                },
                {
                    "text": "Quel avantage offre une organisation matricielle ?",
                    "options": ["Une meilleure allocation des ressources", "Une clarté hiérarchique absolue", "Une absence de conflits", "Une gestion simplifiée"],
                    "answer": 0
                },
                {
                    "text": "Quelle structure organisationnelle est caractérisée par une forte centralisation ?",
                    "options": ["Structure fonctionnelle", "Structure matricielle", "Structure projet", "Structure décentralisée"],
                    "answer": 0
                },
                {
                    "text": "Quel type de structure permet une grande flexibilité dans la gestion de projets ?",
                    "options": ["La structure projet", "La structure fonctionnelle", "La structure bureaucratique", "La structure hiérarchique"],
                    "answer": 0
                },
                {
                    "text": "Comment définir la culture organisationnelle ?",
                    "options": ["Un ensemble de valeurs et de croyances partagées", "Un document officiel", "Une structure hiérarchique", "Un manuel de procédures"],
                    "answer": 0
                },
                {
                    "text": "Quelle étape est essentielle pour une adoption réussie par l'utilisateur final ?",
                    "options": ["La communication proactive", "La réduction des interactions", "La minimisation des tests", "L'absence de formation"],
                    "answer": 0
                },
                {
                    "text": "Quel est l'objectif d'un organigramme ?",
                    "options": ["Illustrer la structure d'une organisation", "Calculer les budgets", "Définir des objectifs marketing", "Planifier des réunions"],
                    "answer": 0
                },
                {
                    "text": "Quel outil aide à concevoir la culture d'entreprise ?",
                    "options": ["Le Business Model Canvas", "Un outil de cartographie culturelle", "Le diagramme de Gantt", "La matrice SWOT"],
                    "answer": 1
                },
                {
                    "text": "Quel est l'objectif de la gestion du changement au niveau du projet ?",
                    "options": ["Gérer les transitions et l'adoption du changement", "Optimiser les profits", "Réduire les effectifs", "Augmenter la production"],
                    "answer": 0
                },
                {
                    "text": "Dans une organisation matricielle, que doit souvent faire le chef de projet ?",
                    "options": ["Gérer des conflits d'autorité entre différents managers", "Travailler seul", "Ignorer les supérieurs fonctionnels", "Se concentrer uniquement sur les aspects financiers"],
                    "answer": 0
                },
                {
                    "text": "Dans une structure fonctionnelle, quelle est généralement l'autorité du chef de projet ?",
                    "options": ["Une autorité limitée sur les ressources", "Un contrôle total", "Une absence de responsabilités", "Un rôle uniquement consultatif"],
                    "answer": 0
                },
                {
                    "text": "La culture organisationnelle influence :",
                    "options": ["Le comportement et la performance des employés", "Les revenus uniquement", "Les produits uniquement", "Les horaires de travail"],
                    "answer": 0
                },
                {
                    "text": "Quelle étape est primordiale lors de la gestion du changement ?",
                    "options": ["L'engagement des utilisateurs", "La réduction des réunions", "L'absence de feedback", "Une documentation complexe"],
                    "answer": 0
                },
                {
                    "text": "Un organigramme permet de :",
                    "options": ["Visualiser la répartition des responsabilités", "Augmenter les coûts de gestion", "Complexifier la structure", "Diminuer la clarté organisationnelle"],
                    "answer": 0
                },
                {
                    "text": "Quel outil aide les organisations à aligner leurs valeurs culturelles ?",
                    "options": ["Identifier et aligner les valeurs culturelles", "Déterminer le budget", "Planifier les horaires", "Concevoir des organigrammes"],
                    "answer": 0
                },
                {
                    "text": "La gestion du changement doit être :",
                    "options": ["Intégrée dès le début du projet", "Négligée pendant la phase de planification", "Réalisée après la mise en œuvre", "Gérée séparément du projet"],
                    "answer": 0
                },
                {
                    "text": "Dans une structure de projet, l'autorité du chef de projet est généralement :",
                    "options": ["Plus forte", "Inexistante", "Partagée équitablement", "Dépendante de la fonction"],
                    "answer": 0
                },
                {
                    "text": "Quel est l'un des défis majeurs d'une organisation matricielle ?",
                    "options": ["La gestion des conflits d'intérêts", "L'absence de communication", "La centralisation excessive", "La surcharge de documentation"],
                    "answer": 0
                },
                {
                    "text": "Pourquoi est-il important de comprendre la culture organisationnelle ?",
                    "options": ["Pour faciliter le changement", "Pour augmenter la complexité du projet", "Pour isoler les équipes", "Pour standardiser toutes les procédures"],
                    "answer": 0
                },
                {
                    "text": "Pour une adoption réussie par l'utilisateur final, il est nécessaire de :",
                    "options": ["Proposer une formation adaptée et un soutien continu", "Réduire le temps de formation", "Ignorer les retours d'expérience", "Automatiser totalement sans intervention humaine"],
                    "answer": 0
                },
                {
                    "text": "Dans un organigramme, quel élément est essentiel à représenter ?",
                    "options": ["Les relations hiérarchiques", "Les préférences personnelles", "Les résultats financiers", "Les horaires de travail"],
                    "answer": 0
                },
                {
                    "text": "L'approche de cartographie culturelle encourage à :",
                    "options": ["Comprendre les différences culturelles pour améliorer la collaboration", "Imposer une culture unique", "Ignorer les variations culturelles", "Se concentrer uniquement sur les profits"],
                    "answer": 0
                },
                {
                    "text": "La gestion du changement inclut :",
                    "options": ["L'implication des parties prenantes", "L'exclusion des utilisateurs finaux", "La documentation uniquement technique", "La planification financière exclusive"],
                    "answer": 0
                },
                {
                    "text": "Quel avantage présente une structure de projet par rapport à une structure fonctionnelle ?",
                    "options": ["Une prise de décision plus rapide", "Une spécialisation fonctionnelle accrue", "Un contrôle budgétaire strict", "Une communication limitée"],
                    "answer": 0
                },
                {
                    "text": "La structure matricielle permet de :",
                    "options": ["Optimiser l'utilisation des ressources dans divers projets", "Supprimer la communication entre départements", "Centraliser toutes les décisions", "Limiter l'autonomie des équipes"],
                    "answer": 0
                },
                {
                    "text": "La culture organisationnelle peut être un levier pour :",
                    "options": ["Stimuler l'innovation", "Réduire la productivité", "Imposer des règles strictes sans flexibilité", "Centraliser le pouvoir"],
                    "answer": 0
                },
                {
                    "text": "Quel élément est essentiel pour gérer le changement dans un projet ?",
                    "options": ["Une communication efficace", "L'absence de planification", "La décentralisation des décisions", "La suppression des retours d'expérience"],
                    "answer": 0
                },
                {
                    "text": "Dans une organisation fonctionnelle, comment le pouvoir est-il généralement réparti ?",
                    "options": ["Par fonction spécialisée", "De manière égale entre tous les employés", "Uniquement au niveau de la direction de projet", "De façon aléatoire"],
                    "answer": 0
                },
                {
                    "text": "Dans une structure matricielle, le rôle du chef de projet consiste à :",
                    "options": ["Coordonner les ressources de différents départements", "Se concentrer uniquement sur les tâches individuelles", "Ignorer les objectifs globaux", "Centraliser toutes les décisions sans consultation"],
                    "answer": 0
                },
                {
                    "text": "La gestion du changement dans un projet vise à :",
                    "options": ["Minimiser les perturbations lors de l'implémentation des changements", "Retarder l'implémentation", "Ignorer les résistances", "Supprimer toute rétroaction"],
                    "answer": 0
                }
            ]
        }
    ],
    "marketing digital": [
        {
            "moduleName": "Fondamentaux du numérique",
            "questions": [
                {
                    "text": "Quelle est la fonction d'un moteur de recherche ?",
                    "options": ["Héberger des sites web", "Indexer et permettre de trouver des informations sur Internet", "Fournir un accès à des bases de données locales", "Créer des pages web"],
                    "answer": 1
                },
                {
                    "text": "Quel composant est responsable de l'exécution des instructions dans un ordinateur ?",
                    "options": ["Disque dur", "CPU", "Carte graphique", "Alimentation"],
                    "answer": 1
                },
                {
                    "text": "Le référent digital a pour mission principale :",
                    "options": ["Créer des campagnes publicitaires", "Accompagner la transformation numérique d'une entreprise", "Gérer les réseaux sociaux", "Développer des logiciels"],
                    "answer": 1
                },
                {
                    "text": "Parmi ces outils, lequel n'appartient PAS à Google Workspace ?",
                    "options": ["Google Docs", "Google Meet", "Trello", "Google Sheets"],
                    "answer": 2
                },
                {
                    "text": "HTTP est un protocole utilisé pour :",
                    "options": ["Transférer des fichiers entre serveurs", "Afficher des pages web", "Envoyer des emails", "Crypter des données"],
                    "answer": 1
                },
                {
                    "text": "La RAM sert principalement à :",
                    "options": ["Stocker des fichiers de manière permanente", "Exécuter des processus temporaires", "Contrôler les périphériques", "Sauvegarder des données"],
                    "answer": 1
                },
                {
                    "text": "Un CMS comme WordPress permet de :",
                    "options": ["Gérer le contenu d'un site web sans coder", "Analyser des données clients", "Protéger contre les virus", "Créer des animations 3D"],
                    "answer": 0
                },
                {
                    "text": "Le SEO vise principalement à :",
                    "options": ["Améliorer le classement d'un site dans les résultats de recherche", "Augmenter le trafic payant", "Concevoir des interfaces utilisateur", "Optimiser les performances d'un serveur"],
                    "answer": 0
                },
                {
                    "text": "Quelle est la différence entre Internet et le Web ?",
                    "options": ["Internet est un réseau physique, le Web est un service basé sur ce réseau", "Le Web est une version avancée d'Internet", "Internet est un navigateur, le Web est un protocole", "Aucune différence"],
                    "answer": 0
                },
                {
                    "text": "Un exemple de navigateur web est :",
                    "options": ["Photoshop", "Slack", "Firefox", "Excel"],
                    "answer": 2
                },
                {
                    "text": "Le rôle d'un développeur front-end est de :",
                    "options": ["Créer l'interface utilisateur d'un site", "Gérer les bases de données", "Analyser les performances SEO", "Écrire des scripts backend"],
                    "answer": 0
                },
                {
                    "text": "Un disque SSD est :",
                    "options": ["Un stockage rapide et non mécanique", "Un outil de gestion de projet", "Un protocole de sécurité", "Un type de réseau sans fil"],
                    "answer": 0
                },
                {
                    "text": "Parmi ces métiers, lequel est lié au digital ?",
                    "options": ["Data Scientist", "Mécanicien industriel", "Comptable", "Boulanger"],
                    "answer": 0
                },
                {
                    "text": "Un pare-feu (firewall) sert à :",
                    "options": ["Bloquer les accès non autorisés à un réseau", "Améliorer la vitesse d'un ordinateur", "Stocker des fichiers cloud", "Générer des mots de passe"],
                    "answer": 0
                },
                {
                    "text": "Le cloud computing permet :",
                    "options": ["D'accéder à des ressources informatiques à distance", "De créer des applications hors ligne", "D'améliorer la résolution d'écran", "De jouer à des jeux vidéo sans console"],
                    "answer": 0
                },
                {
                    "text": "Quel outil Google Workspace est utilisé pour les tableurs ?",
                    "options": ["Google Sheets", "Google Docs", "Google Slides", "Google Forms"],
                    "answer": 0
                },
                {
                    "text": "Un système d'exploitation comme Windows ou macOS gère :",
                    "options": ["Les interactions entre matériel et logiciels", "Les campagnes marketing", "Les stratégies SEO", "Les bases de données"],
                    "answer": 0
                },
                {
                    "text": "Le HTML est utilisé pour :",
                    "options": ["Structurer le contenu d'une page web", "Styliser une page web", "Gérer les interactions utilisateur", "Stocker des données"],
                    "answer": 0
                },
                {
                    "text": "Un VPN sert principalement à :",
                    "options": ["Sécuriser la connexion internet", "Augmenter la vitesse de téléchargement", "Contrôler la température du CPU", "Générer des rapports financiers"],
                    "answer": 0
                },
                {
                    "text": "Quel langage est utilisé pour styliser une page web ?",
                    "options": ["CSS", "Python", "SQL", "Java"],
                    "answer": 0
                },
                {
                    "text": "Un nom de domaine comme .org indique généralement :",
                    "options": ["Une organisation à but non lucratif", "Un site gouvernemental", "Un site commercial", "Un réseau social"],
                    "answer": 0
                },
                {
                    "text": "Le rôle d'un administrateur réseau est :",
                    "options": ["Gérer la connectivité et la sécurité des réseaux", "Créer du contenu marketing", "Développer des applications mobiles", "Analyser les données clients"],
                    "answer": 0
                },
                {
                    "text": "Un cookie sur le web est :",
                    "options": ["Un fichier stockant des informations utilisateur", "Un virus informatique", "Un type de pare-feu", "Un protocole de cryptage"],
                    "answer": 0
                },
                {
                    "text": "Le terme \"responsive design\" désigne :",
                    "options": ["Un site qui s'adapte à tous les écrans", "Un site à chargement rapide", "Un design coloré", "Une interface animée"],
                    "answer": 0
                },
                {
                    "text": "Un exemple de solution de stockage cloud est :",
                    "options": ["Google Drive", "Microsoft Word", "Adobe Premiere", "AutoCAD"],
                    "answer": 0
                }
            ]
        },
        {
            "moduleName": "Méthodologies et gestion de projet",
            "questions": [
                {
                    "text": "La phase d'empathie dans le Design Thinking vise à :",
                    "options": ["Comprendre les besoins des utilisateurs", "Prototyper une solution", "Vendre un produit", "Analyser les coûts"],
                    "answer": 0
                },
                {
                    "text": "L'analyse SWOT identifie :",
                    "options": ["Forces, Faiblesses, Opportunités, Menaces", "Solutions, Workflows, Objectifs, Temps", "Stratégies, Web, Outils, Tactiques", "Aucune de ces réponses"],
                    "answer": 0
                },
                {
                    "text": "Un objectif SMART doit être :",
                    "options": ["Spécifique, Mesurable, Atteignable, Réaliste, Temporel", "Simple, Moderne, Agile, Rapide, Technologique", "Spontané, Méticuleux, Ambitieux, Réfléchi, Tactique", "Aucune de ces réponses"],
                    "answer": 0
                },
                {
                    "text": "Le Lean Startup privilégie :",
                    "options": ["Des itérations rapides basées sur les retours utilisateurs", "Un plan détaillé sur 5 ans", "Un budget marketing élevé", "Un produit parfait dès le lancement"],
                    "answer": 0
                },
                {
                    "text": "La matrice d'Eisenhower classe les tâches selon :",
                    "options": ["Urgence et importance", "Coût et complexité", "Popularité et tendances", "Ressources et temps"],
                    "answer": 0
                },
                {
                    "text": "Un persona est utilisé pour :",
                    "options": ["Représenter un utilisateur type cible", "Gérer les tâches d'une équipe", "Analyser les données financières", "Concevoir des logos"],
                    "answer": 0
                },
                {
                    "text": "Le benchmarking consiste à :",
                    "options": ["Comparer ses performances à celles des concurrents", "Prototyper une interface utilisateur", "Auditer un site web", "Gérer une communauté en ligne"],
                    "answer": 0
                },
                {
                    "text": "Le Lean Canvas se concentre sur :",
                    "options": ["Problèmes, solutions, avantages concurrentiels", "Design graphique", "Publicité en ligne", "Gestion des stocks"],
                    "answer": 0
                },
                {
                    "text": "Un sprint en Scrum dure généralement :",
                    "options": ["2 à 4 semaines", "6 mois", "1 jour", "1 heure"],
                    "answer": 0
                },
                {
                    "text": "L'analyse PESTEL évalue les facteurs :",
                    "options": ["Politiques, Économiques, Sociaux, Technologiques, Environnementaux, Légaux", "Produits, Entreprises, Stratégies, Tactiques, Équipes, Leadership", "Prix, Emballage, Stockage, Transport, Export, Logistique", "Aucune de ces réponses"],
                    "answer": 0
                },
                {
                    "text": "La carte d'empathie sert à :",
                    "options": ["Visualiser les besoins et motivations des utilisateurs", "Planifier un budget", "Analyser les performances SEO", "Créer des maquettes"],
                    "answer": 0
                },
                {
                    "text": "Le Lean Management vise à :",
                    "options": ["Éliminer les gaspillages", "Augmenter la production à tout prix", "Centraliser les décisions", "Réduire les interactions clients"],
                    "answer": 0
                },
                {
                    "text": "Un Product Manager est responsable de :",
                    "options": ["La vision et le succès d'un produit", "La comptabilité d'entreprise", "La gestion des réseaux sociaux", "L'entretien des locaux"],
                    "answer": 0
                },
                {
                    "text": "L'étude de marché permet de :",
                    "options": ["Comprendre les besoins des clients et la concurrence", "Développer un prototype technique", "Créer une charte graphique", "Optimiser les serveurs cloud"],
                    "answer": 0
                },
                {
                    "text": "La méthode agile favorise :",
                    "options": ["La flexibilité et l'adaptation aux changements", "Une documentation exhaustive", "Des cycles de développement longs", "Un contrôle hiérarchique strict"],
                    "answer": 0
                },
                {
                    "text": "Le rôle d'un Scrum Master est :",
                    "options": ["Faciliter les processus agiles et supprimer les obstacles", "Gérer les comptes clients", "Concevoir des interfaces utilisateur", "Analyser les données SEO"],
                    "answer": 0
                },
                {
                    "text": "La valeur principale du Lean Startup est :",
                    "options": ["Apprendre rapidement grâce aux feedbacks", "Maximiser les profits dès le lancement", "Ignorer les attentes des clients", "Investir dans la publicité"],
                    "answer": 0
                },
                {
                    "text": "Un objectif SMART doit inclure :",
                    "options": ["Un délai précis", "Un budget illimité", "Des résultats flous", "Aucune métrique"],
                    "answer": 0
                },
                {
                    "text": "L'analyse PESTEL est utile pour :",
                    "options": ["Évaluer l'environnement macro-économique", "Concevoir des logos", "Optimiser les campagnes Google Ads", "Gérer les ressources humaines"],
                    "answer": 0
                },
                {
                    "text": "La matrice d'Eisenhower catégorise une tâche urgente et importante comme :",
                    "options": ["À faire en priorité", "À déléguer", "À planifier", "À éviter"],
                    "answer": 0
                },
                {
                    "text": "Le MVP (Minimum Viable Product) vise à :",
                    "options": ["Tester une idée avec un produit minimal", "Lancer un produit parfait", "Maximiser les fonctionnalités", "Ignorer les retours utilisateurs"],
                    "answer": 0
                },
                {
                    "text": "Un rétroplanning est utilisé pour :",
                    "options": ["Planifier les étapes d'un projet à partir de la date de fin", "Analyser les coûts", "Créer des personas", "Gérer les réseaux sociaux"],
                    "answer": 0
                },
                {
                    "text": "Le diagramme de Gantt illustre :",
                    "options": ["L'avancement des tâches dans le temps", "Les flux utilisateur", "Les résultats financiers", "Les interactions sociales"],
                    "answer": 0
                },
                {
                    "text": "Un risque identifié dans un projet doit être :",
                    "options": ["Analysé et mitigé", "Ignoré", "Externalisé", "Financé"],
                    "answer": 0
                },
                {
                    "text": "La méthode Kanban utilise :",
                    "options": ["Des tableaux visuels pour gérer les tâches", "Des sprints de 2 semaines", "Une documentation rigide", "Des budgets détaillés"],
                    "answer": 0
                }
            ]
        },
        {
            "moduleName": "Design et gestion de produit",
            "questions": [
                {
                    "text": "Un wireframe est :",
                    "options": ["Une maquette simplifiée d'interface", "Un diagramme de flux", "Une charte graphique", "Un document marketing"],
                    "answer": 0
                },
                {
                    "text": "Figma est principalement utilisé pour :",
                    "options": ["Concevoir des interfaces et prototyper", "Analyser des données", "Gérer des projets", "Héberger des sites web"],
                    "answer": 0
                },
                {
                    "text": "La roadmap produit décrit :",
                    "options": ["Les étapes futures d'un produit", "Les coûts de production", "La stratégie social media", "Les besoins utilisateurs"],
                    "answer": 0
                },
                {
                    "text": "L'UX Design se concentre sur :",
                    "options": ["L'expérience utilisateur", "L'optimisation du code", "La publicité en ligne", "La gestion des stocks"],
                    "answer": 0
                },
                {
                    "text": "Un cahier des charges fonctionnel inclut :",
                    "options": ["Les spécifications techniques et fonctionnelles", "La palette de couleurs", "Le budget marketing", "Les contrats clients"],
                    "answer": 0
                },
                {
                    "text": "Le Product Vision Canvas aide à :",
                    "options": ["Définir la vision stratégique d'un produit", "Analyser les concurrents", "Créer des publicités", "Gérer les réseaux sociaux"],
                    "answer": 0
                },
                {
                    "text": "Un user flow représente :",
                    "options": ["Le parcours type d'un utilisateur", "L'architecture technique", "La stratégie de contenu", "Les coûts de développement"],
                    "answer": 0
                },
                {
                    "text": "La charte graphique définit :",
                    "options": ["L'identité visuelle (couleurs, typographie, logo)", "Les fonctionnalités d'un produit", "Les objectifs SMART", "Les tâches quotidiennes"],
                    "answer": 0
                },
                {
                    "text": "Le prompt engineering est utilisé pour :",
                    "options": ["Optimiser les requêtes envoyées à une IA", "Gérer les projets agiles", "Concevoir des logos", "Analyser les données clients"],
                    "answer": 0
                },
                {
                    "text": "La vision produit doit être :",
                    "options": ["Inspirante et claire", "Technique et détaillée", "Confidentielle", "Générique"],
                    "answer": 0
                },
                {
                    "text": "Un prototype clickable est souvent créé avec :",
                    "options": ["Figma ou Adobe XD", "Excel", "Google Analytics", "Trello"],
                    "answer": 0
                },
                {
                    "text": "L'UI Design se focalise sur :",
                    "options": ["L'aspect visuel et l'ergonomie d'une interface", "La vitesse d'un site web", "La stratégie marketing", "La gestion des données"],
                    "answer": 0
                },
                {
                    "text": "Un user flow (parcours utilisateur) décrit :",
                    "options": ["Une situation d'utilisation typique du produit", "Les étapes de développement", "La roadmap produit", "Les coûts de production"],
                    "answer": 0
                },
                {
                    "text": "Le Lean Canvas est une version simplifiée de :",
                    "options": ["Business Model Canvas", "Carte d'empathie", "Diagramme de Gantt", "SWOT"],
                    "answer": 0
                },
                {
                    "text": "Un test utilisateur (user testing) vise à :",
                    "options": ["Identifier les problèmes d'utilisation d'un produit", "Valider des hypothèses marketing", "Mesurer la vitesse d'un site web", "Analyser les données financières"],
                    "answer": 0
                },
                {
                    "text": "Dans le MVP (Minimum Viable Product), l'accent est mis sur :",
                    "options": ["Les fonctionnalités essentielles", "Le design parfait", "Le budget marketing", "La documentation technique"],
                    "answer": 0
                },
                {
                    "text": "La \"roadmap produit\" inclut généralement :",
                    "options": ["Objectifs, fonctionnalités, calendrier", "Analyse des concurrents", "Stratégie de publicité", "Palette de couleurs"],
                    "answer": 0
                },
                {
                    "text": "L'UI Design se distingue de l'UX Design par son focus sur :",
                    "options": ["L'aspect visuel et l'interactivité", "La recherche utilisateur", "La stratégie de contenu", "L'analyse des données"],
                    "answer": 0
                },
                {
                    "text": "Une carte d'empathie contient des sections comme :",
                    "options": ["\"Ce que l'utilisateur pense\", \"Ce qu'il ressent\"", "\"Coûts\", \"Revenus\"", "\"Fonctionnalités\", \"Technologies\"", "\"Publicité\", \"SEO\""],
                    "answer": 0
                },
                {
                    "text": "Un wireframe haute fidélité inclut :",
                    "options": ["Des détails visuels (couleurs, typographie)", "Des annotations techniques", "Des données utilisateur", "Des analyses de marché"],
                    "answer": 0
                },
                {
                    "text": "Dans Figma, un \"frame\" est utilisé pour :",
                    "options": ["Définir une zone de travail (écran, composant)", "Analyser les performances", "Gérer les tâches d'équipe", "Créer des animations"],
                    "answer": 0
                },
                {
                    "text": "La \"vision produit\" doit être alignée avec :",
                    "options": ["La stratégie globale de l'entreprise", "Les tendances graphiques", "Les budgets publicitaires", "Les outils de développement"],
                    "answer": 0
                },
                {
                    "text": "Le Product Vision Canvas aide à clarifier :",
                    "options": ["Les utilisateurs cibles et les besoins clés", "Les coûts de production", "Les campagnes social media", "Les algorithmes d'IA"],
                    "answer": 0
                },
                {
                    "text": "Un \"user flow\" est souvent représenté sous forme de :",
                    "options": ["Diagramme de flux", "Tableur Excel", "Graphique en camembert", "Carte mentale"],
                    "answer": 0
                },
                {
                    "text": "Le terme \"responsive design\" est crucial pour :",
                    "options": ["Assurer l'adaptabilité sur mobiles, tablettes et desktop", "Optimiser le référencement", "Augmenter la vitesse de chargement", "Générer du trafic payant"],
                    "answer": 0
                }
            ]
        },
        {
            "moduleName": "Marketing et stratégie digitale",
            "questions": [
                {
                    "text": "Le growth hacking combine :",
                    "options": ["Créativité, analyse et rapidité", "Budgets élevés et publicité TV", "Documentation rigide et planification", "Design graphique et codage"],
                    "answer": 0
                },
                {
                    "text": "Le storytelling efficace repose sur :",
                    "options": ["Une structure narrative claire (début, conflit, résolution)", "Des données statistiques complexes", "Des graphiques techniques", "Des acronymes professionnels"],
                    "answer": 0
                },
                {
                    "text": "Une stratégie \"go-to-market\" inclut :",
                    "options": ["Segmentation client, canaux de distribution, plan de lancement", "Design d'interface, wireframes, prototypes", "Code source, tests techniques, déploiement", "Analyse SWOT, PESTEL, Lean Canvas"],
                    "answer": 0
                },
                {
                    "text": "Un audit social media analyse principalement :",
                    "options": ["Performance des posts, engagement, cohérence de la marque", "Code HTML/CSS des pages", "Données financières de l'entreprise", "Design des logos"],
                    "answer": 0
                },
                {
                    "text": "L'inbound marketing attire les clients via :",
                    "options": ["Contenu utile (blogs, eBooks, webinaires)", "Publicités intrusives (pop-ups, spams)", "Appels téléphoniques aléatoires", "Campagnes print coûteuses"],
                    "answer": 0
                },
                {
                    "text": "La \"ligne éditoriale\" définit :",
                    "options": ["Ton, style, fréquence et sujets de publication", "Palette de couleurs et typographie", "Fonctionnalités techniques d'un site", "Budgets publicitaires mensuels"],
                    "answer": 0
                },
                {
                    "text": "Le copywriting efficace vise à :",
                    "options": ["Persuader et inciter à l'action", "Rédiger des rapports techniques", "Analyser des données SEO", "Gérer des bases de données"],
                    "answer": 0
                },
                {
                    "text": "Un community manager interagit principalement sur :",
                    "options": ["Réseaux sociaux (Facebook, Instagram, Twitter)", "Plateformes de développement (GitHub)", "Outils de design (Figma, Adobe XD)", "Logiciels comptables"],
                    "answer": 0
                },
                {
                    "text": "L'image de marque (branding) inclut :",
                    "options": ["Logo, slogan, valeurs, expérience client", "Prix des produits", "Nombre d'employés", "Localisation des bureaux"],
                    "answer": 0
                },
                {
                    "text": "Le marketing de contenu vise à :",
                    "options": ["Éduquer et engager le public via du contenu utile", "Vendre directement des produits", "Crypter des données", "Optimiser les serveurs"],
                    "answer": 0
                },
                {
                    "text": "La \"matrice Eisenhower\" classe une tâche non urgente mais importante comme :",
                    "options": ["À planifier", "À faire immédiatement", "À déléguer", "À supprimer"],
                    "answer": 0
                },
                {
                    "text": "Un KPI (Key Performance Indicator) en social media pourrait être :",
                    "options": ["Taux d'engagement (likes, partages)", "Nombre d'employés", "Taille des locaux", "Vitesse du réseau interne"],
                    "answer": 0
                },
                {
                    "text": "Le SEO et le SEA diffèrent car :",
                    "options": ["Le SEO est gratuit, le SEA est payant", "Le SEA concerne l'expérience utilisateur", "Le SEO utilise des publicités display", "Le SEA est un outil de design"],
                    "answer": 0
                },
                {
                    "text": "Un hashtag est utilisé sur les réseaux sociaux pour :",
                    "options": ["Catégoriser le contenu et augmenter la visibilité", "Crypter des messages", "Analyser les données financières", "Gérer les stocks"],
                    "answer": 0
                },
                {
                    "text": "Le \"A/B testing\" permet de :",
                    "options": ["Comparer deux versions d'une page web", "Analyser des tendances économiques", "Concevoir des logos", "Optimiser les serveurs"],
                    "answer": 0
                },
                {
                    "text": "Un funnel de conversion représente :",
                    "options": ["Le parcours client (de la découverte à l'achat)", "La structure technique d'un site", "La stratégie de recrutement", "Les coûts de production"],
                    "answer": 0
                },
                {
                    "text": "L'\"UGC\" (User-Generated Content) désigne :",
                    "options": ["Contenu créé par les utilisateurs (avis, photos)", "Contenu généré par des IA", "Publicités sponsorisées", "Rapports annuels d'entreprise"],
                    "answer": 0
                },
                {
                    "text": "Un influenceur digital est principalement utile pour :",
                    "options": ["Augmenter la crédibilité et la portée d'une marque", "Développer des logiciels", "Gérer les ressources humaines", "Auditer les comptes"],
                    "answer": 0
                },
                {
                    "text": "Le \"CTA\" (Call To Action) idéal est :",
                    "options": ["Clair et incitatif (\"Inscrivez-vous maintenant !\")", "Long et détaillé", "Technique et complexe", "Générique et vague"],
                    "answer": 0
                },
                {
                    "text": "L'e-mail marketing efficace nécessite :",
                    "options": ["Une liste ciblée, un sujet percutant, un contenu pertinent", "Des graphiques 3D complexes", "Des liens cryptés", "Un budget illimité"],
                    "answer": 0
                },
                {
                    "text": "Le \"reach\" sur les réseaux sociaux mesure :",
                    "options": ["Le nombre de personnes ayant vu un contenu", "Le taux de conversion", "Le coût par clic", "La vitesse de chargement"],
                    "answer": 0
                },
                {
                    "text": "Un bon titre d'article SEO doit :",
                    "options": ["Inclure des mots-clés et être attractif", "Être très technique", "Éviter les verbes d'action", "Contenir des acronymes complexes"],
                    "answer": 0
                },
                {
                    "text": "Le \"remarketing\" cible :",
                    "options": ["Les utilisateurs ayant déjà interagi avec un site", "Les nouveaux clients exclusivement", "Les employés de l'entreprise", "Les concurrents directs"],
                    "answer": 0
                },
                {
                    "text": "La \"stratégie social media\" inclut :",
                    "options": ["Choix des plateformes, calendrier éditorial, KPI", "Développement d'applications mobiles", "Gestion des stocks", "Analyse de code source"],
                    "answer": 0
                },
                {
                    "text": "L'\"inbound marketing\" se distingue de l'\"outbound marketing\" par :",
                    "options": ["Une approche non intrusive (le client vient à vous)", "L'utilisation de publicités TV/radio", "L'envoi massif d'e-mails non sollicités", "La gestion des réseaux internes"],
                    "answer": 0
                }
            ]
        }
    ]
};

let currentModuleIndex = 0;
let currentQuestionIndex = 0;
let progress = 0;
let score = 0;
let infractions = 0;
let cheating = false;
let quizFinished = false;
let specialiteQuiz; // Variable pour stocker la spécialité du quiz

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

function updateInfractions() {
    document.getElementById('infractions').textContent = 'Infractions: ' + infractions;
    if (infractions >= 3) {
        cheating = true;
        localStorage.setItem('cheated', 'true');
        // Calculer le score final en pourcentage
        const finalScore = (score / getTotalQuestions()) * 100;

        // Récupérer le nom de l'utilisateur et la spécialité depuis localStorage
        const userName = localStorage.getItem('userName');
        const specialite = localStorage.getItem('specialite');

        // Stocker les informations dans localStorage
        localStorage.setItem('userName', userName);
        localStorage.setItem('specialite', specialite);
        localStorage.setItem('score', finalScore);
        window.location.href = 'resultats.html';
    }
}

window.onload = () => {
    // Récupérer la spécialité depuis localStorage
    specialiteQuiz = localStorage.getItem('specialite').toLowerCase();
    // console.log('specialiteQuiz:', specialiteQuiz); // AJOUTER CE LOG

    // Charger les modules dans la sidebar
    loadModulesSidebar();

    const popup = document.getElementById('instructions-popup');
    console.log('popup element:', popup); // AJOUTER CE LOG
    console.log('instructionsShown in sessionStorage:', sessionStorage.getItem('instructionsShown')); // AJOUTER CE LOG

    // Afficher le pop-up d'instructions si c'est la première visite
    if (!sessionStorage.getItem('instructionsShown')) {
        if (popup) { // Vérifier si l'élément popup existe
            popup.style.display = 'flex';
        } else {
            console.error('instructions-popup element not found!'); // AJOUTER CE LOG
        }
    } else {
        loadQuestion(); // Charger directement la question si les instructions ont déjà été vues
    }

    setInterval(() => {
        let timer = document.getElementById("time").textContent.split(":"),
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
};

function initWebcam() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            const video = document.getElementById('webcam-video');
            if (video) {
                video.srcObject = stream;
            }
        })
        .catch(function (err) {
            console.error("Erreur lors de l'accès à la webcam: ", err);
            const webcamContainer = document.getElementById('webcam-container');
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

    const modules = quizData[specialiteQuiz];
    console.log('quizData[specialiteQuiz]:', modules); // AJOUTER CE LOG
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
    sidebarModules[moduleIndex].classList.add('active'); // Activer le module courant
}

function changeModule(moduleIndex) {
    currentModuleIndex = moduleIndex;
    currentQuestionIndex = 0; // Réinitialiser l'index des questions
    progress = 0;
    document.getElementById("progress-bar").style.width = progress + "%";
    document.getElementById("progress-text").textContent = `${currentQuestionIndex}/${getCurrentModuleQuestions().length} Questions`;

    // Mélanger les questions du module avant de charger la première question
    shuffleArray(quizData[specialiteQuiz][moduleIndex].questions); // Mélanger ici
    loadQuestion();
    activateModuleInSidebar(moduleIndex);

    // Mettre à jour le titre du module dans le main-content
    document.getElementById('module-name').textContent = quizData[specialiteQuiz][moduleIndex].moduleName;
}

function loadQuestion() {
    const currentModuleQuestions = getCurrentModuleQuestions();
    if (currentQuestionIndex < currentModuleQuestions.length) {
        const question = currentModuleQuestions[currentQuestionIndex];
        document.getElementById("question-text").textContent = question.text;
        const optionsContainer = document.getElementById("options-container");
        optionsContainer.innerHTML = "";

        // Mélanger l'ordre des options de réponse
        const shuffledOptions = [...question.options]; // Créer une copie pour ne pas modifier l'original
        shuffleArray(shuffledOptions); // Mélanger la copie

        shuffledOptions.forEach((option, index) => {
            const label = document.createElement("label");
            label.innerHTML = `<input type="radio" name="qcm" value="${index}"> ${option}`;
            label.classList.add("option");
            optionsContainer.appendChild(label);
        });
        // Mettre à jour le texte de progression pour refléter le nombre de questions dans le module courant
        document.getElementById("progress-text").textContent = `${currentQuestionIndex + 1}/${currentModuleQuestions.length} Questions`;
        document.getElementById('module-name').textContent = quizData[specialiteQuiz][currentModuleIndex].moduleName;

    } else {
        // Module terminé, passer au module suivant ou afficher les résultats si c'est le dernier module
        currentModuleIndex++;
        currentQuestionIndex = 0;
        if (currentModuleIndex < quizData[specialiteQuiz].length) {
            changeModule(currentModuleIndex); // Charger le module suivant
        } else {
            // Tous les modules sont terminés, afficher la page de résultats
            quizFinished = true;
            localStorage.setItem('cheated', cheating);
            const finalScore = (score / getTotalQuestions()) * 100; // Calculer le score total
            localStorage.setItem('score', finalScore);
            localStorage.setItem('userName', localStorage.getItem('userName')); // Récupérer userName du localStorage et le ré-enregistrer
            localStorage.setItem('specialite', localStorage.getItem('specialite')); // Récupérer specialite du localStorage et le ré-enregistrer

            // {{ Assistant ajoute ces lignes de console.log pour le débogage }}
            console.log("userName enregistré dans localStorage:", localStorage.getItem('userName'));
            console.log("specialite enregistrée dans localStorage:", localStorage.getItem('specialite'));
            console.log("score enregistré dans localStorage:", localStorage.getItem('score'));
            console.log("cheated enregistré dans localStorage:", localStorage.getItem('cheated'));
            console.log("Redirection vers resultats.html");

            window.location.href = 'resultats.html';
        }
    }
}

function getCurrentModuleQuestions() {
    return quizData[specialiteQuiz][currentModuleIndex].questions;
}

function getTotalQuestions() {
    let totalQuestions = 0;
    quizData[specialiteQuiz].forEach(module => {
        totalQuestions += module.questions.length;
    });
    return totalQuestions;
}

function selectAnswer() {
    const selectedOption = document.querySelector('input[name="qcm"]:checked');
    if (selectedOption) {
        const answerIndex = parseInt(selectedOption.value);
        // Récupérer l'option sélectionnée (texte) après le mélange
        const selectedAnswerText = document.querySelector(`#options-container label:nth-child(${answerIndex + 1})`).textContent.trim();
        // Trouver l'index de la réponse sélectionnée dans le tableau d'options original
        const originalAnswerIndex = getCurrentModuleQuestions()[currentQuestionIndex].options.indexOf(selectedAnswerText);

        if (originalAnswerIndex === getCurrentModuleQuestions()[currentQuestionIndex].answer) {
            score++;
        }
    }

    currentQuestionIndex++;
    progress = ((currentQuestionIndex) / getCurrentModuleQuestions().length) * 100;
    document.getElementById("progress-bar").style.width = progress + "%";

    if (currentQuestionIndex < getCurrentModuleQuestions().length -1 ) { // Vérifie si ce n'est pas la dernière question du module
        loadQuestion();
        document.getElementById("next-btn").style.display = "inline-block";
        document.getElementById("submit-btn").style.display = "none";
    } else if (currentQuestionIndex === getCurrentModuleQuestions().length -1 ) { // Si c'est la dernière question du module
        loadQuestion();
        document.getElementById("next-btn").style.display = "none";
        document.getElementById("submit-btn").style.display = "inline-block";
        document.getElementById("submit-btn").className = document.getElementById("next-btn").className;
    }
     else {
        loadQuestion(); // Charge la première question du module suivant ou affiche les résultats
        document.getElementById("next-btn").style.display = "inline-block";
        document.getElementById("submit-btn").style.display = "none";
    }
}

document.getElementById("next-btn").addEventListener("click", selectAnswer);
document.getElementById("submit-btn").addEventListener("click", function() {
    selectAnswer();
});

document.addEventListener('DOMContentLoaded', function() {
    // Récupérer le nom de l'utilisateur depuis localStorage
    const userName = localStorage.getItem('userName');

    // Si le nom de l'utilisateur existe, l'afficher dans la colonne latérale
    if (userName) {
        const userNameElement = document.getElementById('user-name');
        if (userNameElement) {
            userNameElement.textContent = userName;
        }
    }
});

// Gestionnaire d'événement pour le bouton "Commencer le Quiz" dans le pop-up
document.getElementById('start-quiz-btn').addEventListener('click', function() {
    document.getElementById('instructions-popup').style.display = 'none'; // Cacher le pop-up
    sessionStorage.setItem('instructionsShown', 'true'); // Marquer les instructions comme vues
    loadQuestion(); // Charger la première question
});

// Gestionnaire d'événement pour le bouton de fermeture du pop-up
document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('instructions-popup').style.display = 'none'; // Cacher le pop-up
    sessionStorage.setItem('instructionsShown', 'true'); // Marquer les instructions comme vues
    loadQuestion(); // Charger la première question même si l'utilisateur ferme sans cliquer sur "Commencer"
});