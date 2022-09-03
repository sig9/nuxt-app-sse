import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    // typescript: {
    //     shim: false
    // },
    publicRuntimeConfig: {
        firebase: {
            apiKey: '', // assigned by nuxi from .env NUXT_PUBLIC_FIREBASE_API_KEY
            authDomain: '',
            projectId: '',
            storageBucket: '',
            messagingSenderId: '',
            appId: '',
            measurementId: ''
        }
    },
    privateRuntimeConfig: {

    }
})
