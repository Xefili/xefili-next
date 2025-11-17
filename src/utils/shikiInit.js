import { codeToHtml } from "shiki";

export async function highlightCode(code, lang, theme = 'material-theme-darker') {
    const html = await codeToHtml(code, {
        lang: lang,
        theme: theme,
    })
    return html
}