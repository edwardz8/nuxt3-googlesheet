// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
            SPREAD_SHEET_ID: process.env.SPREAD_SHEET_ID
        }
    }
})
