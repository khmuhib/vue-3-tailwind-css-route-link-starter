import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale: 'tr',
    messages: {
        en: {
            signUp: "Sign Up",
            headline: "Vue 3 + Tailwind + Bootstrap + Font Awesome"
        },
        tr: {
            signUp: "Kayit Ol",
            headline: "Vue 3 + Tailwind + Bootstrap + шрифт искиткеч"
        },
    }
})
  

export default i18n;