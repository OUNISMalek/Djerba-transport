import { Component, OnInit } from '@angular/core';
import { AlertController, IonicModule } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { HomePageModule } from './home.module';
import { ConnexionPage } from '../connexion/connexion.page';
import { InscriptionPage } from '../inscription/inscription.page';
import { IonicAuthService } from '../Services/ionic-auth.service';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  commentaire: Observable<any[]>;
  donnee={
    Nom:'',
    Adresse:'',
    Numerotele:'',
    Message:'',
     };

  constructor(
    public modalControl:ModalController,
    public firestore:AngularFirestore,
    public alertCtrl: AlertController) { }

  ngOnInit() {
  }
async Connexion(){
  const modal =await this.modalControl.create ({
    component: ConnexionPage,
    animated: true,
    mode: 'ios',
    backdropDismiss: false,
    cssClass: 'connexion-modal',
  })
  return await modal.present();
}
async Creercompte(){
  const modal =await this.modalControl.create ({
    component: InscriptionPage,
    animated: true,
    mode: 'ios',
    backdropDismiss: false,
    cssClass: 'Creercompte-modal',
  })
  return await modal.present();
}
Valider(){
  this.firestore.collection("commentaire").add(this.donnee);
  this.donnee={
    Nom:'',
    Adresse:'',
    Numerotele:'',
    Message:'',
  };
  
}
}
