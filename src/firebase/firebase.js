const firebase = require('firebase');

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_IDT,
    appId: process.env.FIREBASE_APP_ID
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };


//database.ref().set({//
      //name: 'Lee',
      //age:28,
      //isSingle: false,
      //location: {
          //city: 'Williamsburg',
          //country: 'United State'
      //}
  //}).then(() => {
      //console.log('Data is saved');
  //}).catch((e) => {
      //console.log('This is failed.', e)
  //});


