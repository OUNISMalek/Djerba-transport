import { Injectable, NgZone } from '@angular/core';
import *as firebase from 'firebase/app';
import 'firebase/auth';
import { User } from "../Services/user";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class IonicAuthService {
  userData: any;
  auth: any;
  currentUser: any;
  sendPasswordResetEmail: any;
  constructor(
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public router: Router,  
    public ngZone: NgZone 
  ) {
    this.ngFireAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }
  // connexion avec email/password
  SignIn(email, password) {
    return this.ngFireAuth.signInWithEmailAndPassword(email, password)
  }
  // créer compte avec email/password
  RegisterUser(nomprenom, email, password, confirmpassword) {
    return this.ngFireAuth.createUserWithEmailAndPassword(email, password)
  }
  // verification email lors de creation compte
  async SendVerificationMail() {
    return (await this.ngFireAuth.currentUser).sendEmailVerification()
    .then(() => {
      this.router.navigate(['verify-email']);
    })
  }
  // Recover password
  PasswordRecover(passwordResetEmail) {
    return this.ngFireAuth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email has been sent, please check your inbox.');
    }).catch((error) => {
      window.alert(error)
    })
  }
  // Returns true when user is looged in
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }
  // Returns true when user's email is verified
  get isEmailVerified(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user.emailVerified !== false) ? true : false;
  }

  // Auth providers
  AuthLogin(provider) {
    return this.ngFireAuth.signInWithPopup(provider)
    .then((result) => {
       this.ngZone.run(() => {
          this.router.navigate(['home']);
        })
      this.SetUserData(result.user);
    }).catch((error) => {
      window.alert(error)
    })
  }
  // Store user in localStorage
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afStore.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      emailVerified: user.emailVerified,
      nomprenom: user.nomprenom,
      password: user.password,
      confirmpassword: user.confirmpassword
    }
    return userRef.set(userData, {
      merge: true
    })
  }
  // Sign-out 
  async SignOut() {
    await this.ngFireAuth.signOut()
      localStorage.removeItem('user');
      this.router.navigate(['bienvenue']);
  }
}