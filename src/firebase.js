import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyBjdNDVBqXgYLSofmyuGgOzKnriPQbmWxo",
    authDomain: "crwn-clothing-ccaa0.firebaseapp.com",
    databaseURL: "https://crwn-clothing-ccaa0.firebaseio.com",
    projectId: "crwn-clothing-ccaa0",
    storageBucket: "crwn-clothing-ccaa0.appspot.com",
    messagingSenderId: "804701224587",
    appId: "1:804701224587:web:8093350893372d28049e8e"
  };


  // export const UserProfile = async (userAuth, additionalData) =>{
  //   if (!userAuth){
  //     return;
  //   }

  // console.log(firestore.collection("users").doc("2OPx0XIsglUaiyML9HOb").exists)
  // }

  export const CreateUserProfile = (userAuth, providerData, additionalData) =>{
    if (!userAuth){
      return;
    }

    firestore.collection("users").doc(userAuth.uid).get().then(res => {
      
      if (!res.exists){
        const {displayName, email, providerData} = userAuth;
        const createdAt = new Date();

        firestore.collection("users").doc(userAuth.uid).set({
          email: email,
          createdAt: createdAt,
          loginProvider: providerData[0].providerId,
          ...additionalData
        })

      }

      else{
        console.log("bruh")
      }

    })
  }

  firebase.initializeApp(firebaseConfig)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  // const provider = new firebase.auth.GoogleAuthProvider();
  // provider.setCustomParameters({ prompt: "select_account" });

  // export const signInWithGoogle = () => auth.signInWithPopup(provider)
  export function googleLogin(){
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: "select_account"});
  return auth.signInWithPopup(provider)
  }



  export function SignUpWithEmailAndPassword(displayName, email,password){

    firestore.collection("users").where("email", "==", email).get().then(user => {
      // user.docs.forEach((a)=>{
      //   console.log(a.data().displayName)
      // })

      if (user.docs.length > 0){
        console.log("This Email Is Already In Use")
      }

      else{
        firebase.auth().createUserWithEmailAndPassword(email,password).then(cred => {
          console.log(cred.user.uid)
          firestore.collection("users").doc(cred.user.uid).set({
            displayName: displayName,
            createdAt: new Date(),
            loginProvider: "Email&Password",
          })
        })
        
      }
      console.log(user.docs.length)
    

        // else{
        //   firebase.auth().createUserWithEmailAndPassword(email,password)

        // }
      })
    }

    export function SignInWithEmailAndPassword(email,password){
      firebase.auth().signInWithEmailAndPassword(email,password)
    }
    // firebase.auth().createUserWithEmailAndPassword(email,password)
    // CreateUserProfile()
  

  export default firebase
  
  
