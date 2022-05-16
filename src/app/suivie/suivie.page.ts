import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ModalController } from '@ionic/angular';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import {SuivieService} from '../Services/suivie.service';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { NavController, AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
    
@Component({
  selector: 'app-suivie',
  templateUrl: './suivie.page.html',
  styleUrls: ['./suivie.page.scss'],
})
export class SuiviePage implements OnInit {
  suivi: Observable<any[]>;
  donnee={
    Numerorecu:'',
    Date:'',
    Destination:'',
     };
 
  constructor(
    public SuivieService: SuivieService, 
    public router:Router,
    public modalControl:ModalController,
    public afDB: AngularFireDatabase,
    public firestore:AngularFirestore,
    public alertCtrl: AlertController
    ){}

  ngOnInit() {
  }
  Valider(){
    this.firestore.collection("suivi").add(this.donnee);
    this.donnee={
   Numerorecu:'',
   Date:'',
   Destination:'',
    };
    
  }
     
}

