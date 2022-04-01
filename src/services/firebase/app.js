import { initializeApp, getApp, getApps } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyBnQf1Baw5uAmLMlblAMWneoQ4PG03lNSI",
  authDomain: "redes3app.firebaseapp.com",
  databaseURL: "https://redes3app-default-rtdb.firebaseio.com",
  projectId: "redes3app",
  storageBucket: "redes3app.appspot.com",
  messagingSenderId: "82437736524",
  appId: "1:82437736524:web:48a9d39c30f0a8d501cce9",
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

export default app
