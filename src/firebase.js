import * as firebase from 'firebase';

const config = {
      // Initialize Firebase
    apiKey: "AIzaSyCoOo9GaANLLG4wk1dKGgMKO0B5d60ou_U",
    authDomain: "react-notes-7892d.firebaseapp.com",
    databaseURL: "https://react-notes-7892d.firebaseio.com",
    projectId: "react-notes-7892d",
    storageBucket: "react-notes-7892d.appspot.com",
    messagingSenderId: "712887227891"
  };

  firebase.initializeApp(config);

  const firebaseDB = firebase.database();
  const firebaseArticles = firebaseDB.ref('articles');
  const firebaseTeams = firebaseDB.ref('teams');
  const firebaseVideos = firebaseDB.ref('videos');

  const firebaseLooper = (snapshot)=>{
      const data = [];
      snapshot.forEach((childSnapshot)=>{
        data.push({
            ...childSnapshot.val(),
            id: childSnapshot.key
        })

    });
    return data;
  }
  export {
      firebase,
      firebaseDB,
      firebaseArticles,
      firebaseVideos,
      firebaseTeams,
      firebaseLooper
  }