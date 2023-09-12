import { initializeApp,  } from 'firebase/app'

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDttDAF0s0VDYs1doEdXkLdSd2Pl_Ad6JU",
    authDomain: "shorty-7ae3e.firebaseapp.com",
    projectId: "shorty-7ae3e",
    storageBucket: "shorty-7ae3e.appspot.com",
    messagingSenderId: "832446093080",
    appId: "1:832446093080:web:eb10ad30ee246f143a306d",
    measurementId: "G-G5PHRNX2RX"
  };
  
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();


// Method for adding URL to the firebase db
export const addUrl = async (longUrl, shortUrl) => {
    const urlRef = doc(db, 'urls', shortUrl);
    const createdAt = new Date();


    try {
        console.log("test:", longUrl)
        await setDoc(urlRef, {longUrl, createdAt})
    }catch(error){
        console.log("error setting URL", error.message)
    }
        
};


// Method for retrieving a URL from the firebase db
export const getUrl = async (shortUrl) => {
    const urlRef = doc(db, 'urls', shortUrl);
    const urlSnapshot = await getDoc(urlRef);
    if (urlSnapshot.exists()) {
        return urlSnapshot.data()
    }
    else{
        throw Error("URL does not exist")
    }
};