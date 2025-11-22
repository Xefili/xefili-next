import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/style.css'
import { createI18n } from 'vue-i18n'
import en from '@/locales/en'
import de from '@/locales/de'
import fr from '@/locales/fr'


const app = createApp(App)

const translation = {
    en,
    de,
    fr
}
const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: translation
})


app.use(router)
app.use(i18n)

app.mount('#app')