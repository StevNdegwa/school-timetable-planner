import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import config from "./config.json";

class Firebase{
  constructor(){
    try{
      app.initializeApp({
        apiKey: config.API_KEY,
        authDomain: config.AUTH_DOMAIN,
        databaseURL: config.DATABASE_URL,
        projectId: config.PROJECT_ID,
        storageBucket: config.STORAGE_BUCKET,
        messagingSenderId: config.MESSAGING_SENDER_ID,
        appId: config.APP_ID
      });
    }catch(error){
      
    }
    this.auth = app.auth();
    this.db = app.firestore();
  }
  
  getAuth(){
    return this.auth;
  }
  
  signInWithGoogle(){
    let provider = new app.auth.GoogleAuthProvider();
    
    //Add scopes
    provider.addScope("https://www.googleapis.com/auth/calendar");
    provider.addScope("https://www.googleapis.com/auth/calendar.events");
    
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
    return app.auth().signOut();
  }
  
  addNewSchoolClass(classData){
    return this.db.collection("classes").add(classData);
  }
  
  getAllSchoolClasses(){
    return this.db.collection("classes").get().then((querySnapshot) => {
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push({id: doc.id, ...doc.data()});
      });
      return data;
    });
  }
  
  removeSchoolClassItem(docId){
    return this.db.collection("classes").doc(docId).delete();
  }
  
  addNewSubject(subjectData){
    return this.db.collection("subjects").add(subjectData);
  }
  
  getAllSubjects(){
    return this.db.collection("subjects").get().then((querySnapshot) => {
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push({id: doc.id, ...doc.data()});
      });
      return data;
    });
  }
  
  removeSubject(docId){
    return this.db.collection("subjects").doc(docId).delete();
  }
  
  addNewTeacher(teacherData){
    return this.db.collection("teachers").add(teacherData);
  }
  
  getAllTeachers(){
    return this.db.collection("teachers").get().then((querySnapshot) => {
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push({id: doc.id, ...doc.data()});
      });
      return data;
    });
  }
  
  removeTeacher(docId){
    return this.db.collection("teachers").doc(docId).delete();
  }
  
  addNewSchedule(scheduleData){
    return this.db.collection("schedules").add(scheduleData);
  }
  
  getAllSchedules(){
    return this.db.collection("schedules").get().then((querySnapshot) => {
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push({id: doc.id, ...doc.data()});
      });
      return data;
    });
  }
  
  removeSchedule(docId){
    return this.db.collection("schedules").doc(docId).delete();
  }
  
}

export default Firebase;
