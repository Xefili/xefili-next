export default {
    building: {
        title: " Comment compiler à partir du code source",
        subtitle_1: "..pour xefili.dev SPA",
        content: " Compilez à l'aide de la commande de compilation fournie par le fichier package.json. Cette étape de compilation compile automatiquement les classes TailwindCSS et configure les fichiers pour le SPA Vue principal."
    },
    structure: {
        title: "Structure of Xefili.dev",
        subtitle_1: "The Scaffold",
        content_1: "L'application suit la structure typique de Vue 3. Le dossier racine contient toutes les fichiers de configuration, le src/ fichier contient toutes les fichiers sources ainsi que le fichier d'entrée main.js. Pour tout organiser, le src/ fichier est divisée en plusieurs sous-dossiers; components/,  assets/, locales/, router/, utils/, et views/.",
        subtitle_2: "Le views/ fichier",
        content_2: " Le fichier perspectives contient toutes les pages et une une structure de page approximative. Ces vues sont acheminées avec le routeur perspectives et remplies de composants.",
        subtitle_3: "Le components/ fichier",
        content_3 : "Ce dossier contient les composants ; des modèles HTML pré-construits réutilisables dans plusieurs vues. Ils sont dynamiques et utilisent des props.",
        subtitle_4 : "Les autres dossiers",
        content_4 : "Le dossier locales/ contient les différentes langues pour le site web de documentation. Grâce à mon aimable traducteur, je suis en mesure de fournir cette documentation en 3 langues différentes.",
        content_4_1 : "Le dossier router/ contient le script pour Vue Router. Il ne contient que des routes et des références à tous les composants d'affichage dans le dossier views/",
        content_4_2 : "Le dossier utils/ contient les scripts de configuration et d'initialisation pour les plugins et autres éléments. Actuellement, seule la configuration pour la coloration syntaxique Shiki s'y trouve.",
        content_4_3: "Le dossier assets/ contient tous les actifs tels que : polices, images et fichiers svg. Le dossier styles/ contient la feuille de style source pour TailwindCSS et peut contenir des styles d'animation. Étant donné que les styles sont généralement limités à Vue, vous ne devriez pas vous attendre à y trouver beaucoup de fichiers."

    },
    contribute: {
        title: "Comment contribuer à Xefili.dev",
        subtitle_1: "Sur Github",
        content: " Vous pouvez contribuer sur Github en ouvrant des tickets ou en créant des pull requests. Rendez-vous sur github.com/xefili/xefili-app pour en savoir plus.",
        subtitle_2: "Sur cette page",
        content_2: " Si cette page contient une erreur, cliquez sur l'icône dans l'en-tête pour la signaler (fonctionnalité non implémentée pour le moment !)"
    },
    navigation: {
        home: "Accueil",
        report: "Signaler une erreur"
    }
}