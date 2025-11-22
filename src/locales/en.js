export default {
    building: {
        title: "How to build from Source",
        subtitle_1: "..for xefili.dev SPA",
        content: "Build using the build command provided by the package.json file. This build step automatically builds TailwindCSS classes and sets up files for the main Vue SPA."
    },
    structure: {
        title: "Structure of Xefili.dev",
        subtitle_1: "The Scaffold",
        content_1: "The app follows the typical Vue 3 structure. The root folder contains all the config files, the src/ folder contains all source files as well as the main.js entry file. To keep everything organized, the src/ folder is divided into more sub-folders; components/, assets/, locales/, router/, utils/ and views/.",
        subtitle_2: "The views/ folder",
        content_2: "The views folder contains all the pages and a rough page structure. These views get routed with Vue Router and are filled with components.",
        subtitle_3: "The components/ folder",
        content_3: "This folder contains the components; prebuild HTML templates for re-use across multiple views. They are dynamic and make use of props.",
        subtitle_4: "The other folders",
        content_4: "The locales/ folder contains the different languages for the documentation website. Since I've got my kind translator by my side, I'm able to provide this documentation in 3 different languages.",
        content_4_1: "The router/ folder contains the script for Vue Router. It is only filled with routes and references to all the view components in the views/ folder.",
        content_4_2: "The utils/ folder contains setup and initialization scripts for plugins and other things. Currently, only the setup for Shiki syntax highlighting is in there.",
        content_4_3: "The assets/ folder contains all assets such as: fonts, images and svg files. The styles/ folder contains the source stylesheet for TailwindCSS and may contain animation styles. Since styles are usually scoped in Vue, you shouldn't expect many files in there."
    },
    contribute: {
        title: "How to contribute to Xefili.dev",
        subtitle_1: "On Github",
        content: "You can contribute on Github by opening issues or creating pull requests. Visit github.com/xefili/xefili-app to learn more.",
        subtitle_2: "On this page",
        content_2: "If there is an error on this page, click the icon in the header to report the page (currently not implemented!)"
    },
    navigation: {
        home: "Home",
        report: "Report Mistake"
    }
}