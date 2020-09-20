import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAoCq2hQr1ClabiZ1G-yWgvTB9uAacSxr4",
  authDomain: "school-timetable-planner.firebaseapp.com",
  databaseURL: "https://school-timetable-planner.firebaseio.com",
  projectId: "school-timetable-planner",
  storageBucket: "school-timetable-planner.appspot.com",
  messagingSenderId: "574072331317",
  appId: "1:574072331317:web:458ad67d3953bcbcc6657c"
};

class Firebase{
  constructor(){
    app.initializeApp(config);
  }
  
  signInWithGoogle(){
    let provider = new app.auth.GoogleAuthProvider();
    
    //Add scopes
    provider.addScope("https://www.googleapis.com/auth/calendar.readonly");
    
    return app.auth().signInWithPopup(provider)
  }
  
  signUpNewUser(email, password){
    return app.auth().createUserWithEmailAndPassword(email, password);
  }
  
  signInUser(email, password){
    return app.auth().signInWithEmailAndPassword(email, password);
  }
  
}
export default Firebase;
