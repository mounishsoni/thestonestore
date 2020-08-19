 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAXOUoFx8y5YKUCY52i400oGmP9HSsi-KE",
    authDomain: "thestonestore-f6994.firebaseapp.com",
    databaseURL: "https://thestonestore-f6994.firebaseio.com",
    projectId: "thestonestore-f6994",
    storageBucket: "thestonestore-f6994.appspot.com",
    messagingSenderId: "1087924337223",
    appId: "1:1087924337223:web:91e3fff0f86da3b0b30f62",
    measurementId: "G-3HD072F8HC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const db = firebase.firestore();