export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'uz',
    messages: {
        uz: {
            latest_news: 'So`nggi yangiliklar',
            actual_news: 'Dolzarb yangiliklar',
            most_read_news: 'Eng ko`p o`qilgan yangiliklar',
            contacts: 'Aloqa',
            actual: 'Dolzarb'
        },
        ru: {
            latest_news: 'Последние новости',
            actual_news: 'Актуальные новости',
            most_read_news: 'Самые читаемые новости',
            contacts: 'Контакты',
            actual: 'Актуально'
        },
        en: {
            latest_news: 'Latest news',
            actual_news: 'Actual news',
            most_read_news: 'Most read news',
            contacts: 'Contacts',
            actual: 'Actual'
        }
    }
}))