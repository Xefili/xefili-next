export default {
    building: {
        title: "Quellcode kompilieren",
        subtitle_1: "..für xefili.dev SPA",
        content: "Das Projekt kann mit dem build Befehl auf der package.json Datei kompiliert werden. Der Befehl baut die TailwindCSS Klassen und die Vue SPA App."
    },
    structure: {
        title: "Struktur von Xefili.dev",
        subtitle_1: "Das Gerüst",
        content_1: "Die App folgt der typischen Vue 3-Struktur. Der Stammordner enthält alle Konfigurationsdateien, der Ordner src/ enthält alle Quelldateien sowie die Eingabedatei main.js. Um alles übersichtlich zu halten, ist der Ordner src/ in weitere Unterordner unterteilt: components/, assets/, locales/, router/, utils/ und views/.",
        subtitle_2: "Der Ordner views/",
        content_2: "Der Ordner views enthält alle Seiten und eine grobe Seitenstruktur. Diese Ansichten werden mit Vue Router geroutet und mit Komponenten gefüllt.",
        subtitle_3: "Der Ordner components/",
        content_3: "Dieser Ordner enthält die Komponenten, also vorgefertigte HTML-Vorlagen, die in mehreren Ansichten wiederverwendet werden können. Sie sind dynamisch und nutzen Props.",
        subtitle_4: "Die anderen Ordner",
        content_4: "Der Ordner „locales/“ enthält die verschiedenen Sprachen für die Dokumentationswebsite. Da ich einen freundlichen Übersetzer an meiner Seite habe, kann ich diese Dokumentation in drei verschiedenen Sprachen anbieten.",
        content_4_1: "Der Ordner „router/“ enthält das Skript für Vue Router. Er enthält nur Routen und Verweise auf alle Ansichtskomponenten im Ordner views/.",
        content_4_2: "Der Ordner „utils/“ enthält Setup- und Initialisierungsskripte für Plugins und andere Dinge. Derzeit befindet sich dort nur die Einrichtung für die Shiki-Syntaxhervorhebung.",
        content_4_3: "Der Ordner assets/ enthält alle Assets wie Schriftarten, Bilder und SVG-Dateien. Der Ordner styles/ enthält das Quell-Stylesheet für TailwindCSS und kann Animationsstile enthalten. Da Stile in Vue normalerweise in ihrem Umfang begrenzt sind, sollten Sie nicht mit vielen Dateien in diesem Ordner rechnen."
    },
    contribute: {
        title: "Wie Sie zu Xefili.dev beitragen können",
        subtitle_1: "Auf Github",
        content: "Sie können auf Github beitragen, indem Sie Issues öffnen oder Pull-Anfragen erstellen. Weitere Informationen finden Sie unter github.com/xefili/xefili-app.",
        subtitle_2: "Auf dieser Seite",
        content_2: "Wenn auf dieser Seite ein Fehler auftritt, klicken Sie auf das Symbol in der Kopfzeile, um die Seite zu melden (derzeit nicht implementiert!)."
    },
    navigation: {
        home: "Hauptseite",
        report: "Fehler melden"
    }
}