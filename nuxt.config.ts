// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        apiKey: process.env.GOOGLE_API_KEY,
        sheetID: process.env.SPREAD_SHEET_ID
    }
})
