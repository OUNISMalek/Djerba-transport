import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ModalController } from '@ionic/angular';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import { IonicAuthService } from '../Services/ionic-auth.service';

@Component({
  selector: 'app-inscrip',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
nomprenom:string="";
email:string="";
password:string="";
confirmpassword:string="";
  constructor(
    public IonicAuthService: IonicAuthService, 
    public router:Router,
    public modalControl:ModalController,
    public afDB: AngularFireDatabase) {}
  ngOnInit() {
  }

  inscription(nomprenom, email, password, confirmpassword)  {
    this.IonicAuthService. RegisterUser(nomprenom, email, password, confirmpassword).then((res) => {
      // Do something here
      this.IonicAuthService.SendVerificationMail()
      this.router.navigate(['verify-email']);
    }).catch((error) => {
      window.alert(error.message)
    })
}
}
