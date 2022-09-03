import { initializeApp } from "firebase/app";
import { Analytics, isSupported,  getAnalytics } from "firebase/analytics";
import {
  getAuth,
} from "firebase/auth";

export default defineNuxtPlugin(async (nuxtApp) => {

    const config = useRuntimeConfig();
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
    
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = config.public.firebase;
    console.log("firebaseConfig", firebaseConfig);
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    let ana: Analytics = null;
    if (await isSupported()) {
        ana = getAnalytics(app);
    };
    
    const auth = getAuth();

    nuxtApp.vueApp.provide('auth', auth);
    nuxtApp.provide('auth', auth);
    
    console.log("app", app, "ana", ana, "isSupported", await isSupported());
});
