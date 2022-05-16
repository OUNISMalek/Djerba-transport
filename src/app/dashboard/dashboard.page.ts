import { Component, OnInit, Type, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { NavController, AlertController } from '@ionic/angular';
import {Router} from '@angular/router';
import { ModalController } from '@ionic/angular';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import {CrudService} from '../Services/crud.service';


@Component({
  selector: 'app-home',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss'],
})
export class DashboardPage implements OnInit{

parcelles: Observable<any[]>;
firebaseData={
    IDParcelle:'',
    TypeParcelle:'',
    EtatParcelle:'',
    VolumeParcelle:'',
    WeightParcelle:'',
    NomClient:'',
    PrenomClient:''
};

  constructor(
      public firestore:AngularFirestore,
      public alertCtrl: AlertController
  ) {}
    ngOnInit() {
    }
    addFirebase(){
        this.firestore.collection("parcelles").add(this.firebaseData);
        this.firebaseData={
            IDParcelle: '',
            TypeParcelle:'',
            EtatParcelle:'',
            VolumeParcelle:'',
            WeightParcelle:'',
            NomClient:'',
            PrenomClient:''

        };
        alert("ajouté avec succés!");
    }
}