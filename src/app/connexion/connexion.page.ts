import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ModalController } from '@ionic/angular';
import { NgModel } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Auth } from 'Firebase/auth';
import { IonicAuthService } from '../Services/ionic-auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
  email: String="";
  password:String="";
  sendPasswordResetEmail: any;
  passwordResetEmail: any;
  constructor(
    public modalControl:ModalController,
    public afAuth:AngularFireAuth,
    public IonicAuthService: IonicAuthService, 
    public router:Router,
  ) { }

  ngOnInit() {
  }
async dismiss(){
  await this.modalControl.dismiss();
}

  connexion(email, password) {
    this.IonicAuthService.SignIn(email.value, password.value)
      .then((res) => {
        if(this.IonicAuthService.isEmailVerified) {
          this.router.navigate(['home']);          
        } else {
          window.alert('Adresse Email est non Vérifier')
          return false;
        }
      }).catch((error) => {
        window.alert(error.message)
      })
  }
    // Recover password
    oublier(){
      this.IonicAuthService.PasswordRecover(this.passwordResetEmail)
      .then((res) => {
        if(this.IonicAuthService.sendPasswordResetEmail){
        window.alert('Password reset email has been sent, please check your inbox.');
      }}).catch((error) => {
        window.alert(error)
      })
    }
    
}


