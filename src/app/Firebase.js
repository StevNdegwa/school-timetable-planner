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
    try{
      app.initializeApp(config);
    }catch(error){
      console.log("---------------Firebase Initialize------------------")
      console.log(error)
    }
    this.auth = app.auth();
  }
  
  getAuth(){
    return app.auth();
  }
  
  signInWithGoogle(){
    let provider = new app.auth.GoogleAuthProvider();
    
    //Add scopes
    provider.addScope("https://www.googleapis.com/auth/calendar.readonly");
    
    return app.auth().signInWithPopup(provider)
  }
  
  signUpNewUser(email, password, displayName){
    return app.auth().createUserWithEmailAndPassword(email, password)
    .then((result)=>{
      result.user.updateProfile({displayName});
      return result;
    });
  }
  
  signInUser(email, password){
    return app.auth().signInWithEmailAndPassword(email, password);
  }
  
  signOutUser(){
    return app.auth().signOut().then(function(){
      console.log("Sign out successful");
    })
  }
  
}

export default Firebase;
