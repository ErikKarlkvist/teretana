import * as firebase from "firebase";

class Firebase {
  static initialize(){
    firebase.initializeApp({
      apiKey: "AIzaSyCthV6KYd5HzEUQZB6UHTpCZSV0ytQJxso",
      authDomain: "gymstat-3b954.firebaseapp.com",
      databaseURL: "https://gymstat-3b954.firebaseio.com",
      projectId: "gymstat-3b954",
      storageBucket: "gymstat-3b954.appspot.com",
      messagingSenderId: "95789888688"
    });
  }
}

module.exports = Firebase;
