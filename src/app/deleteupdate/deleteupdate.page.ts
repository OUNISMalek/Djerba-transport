import { Component, OnInit, Type, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { NavController, AlertController } from '@ionic/angular';
import {Router} from '@angular/router';
import { ModalController } from '@ionic/angular';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import {CrudService} from '../Services/crud.service';
import { Parcelle } from '../Services/Parcelle';

@Component({
  selector: 'app-deleteupdate',
  templateUrl: './deleteupdate.page.html',
  styleUrls: ['./deleteupdate.page.scss'],
})
export class DeleteupdatePage implements OnInit {
  parcelle:Parcelle;
  parcelles:Parcelle[];
  b=false;
  IDParcelle: any;
 
    constructor(
      private crudService:CrudService,
      public alertCtrl: AlertController) { }
      
      ngOnInit():void {
          localStorage.clear();
          this.read();
      }
      read()
      {
        this.crudService.read_Users().subscribe(data => {
          this.parcelles = data.map(e => {
            return {
             IDParcelle: e.payload.doc.id,
             TypeParcelle: e.payload.doc.data()["TypeParcelle"],
             EtatParcelle: e.payload.doc.data()["EtatParcelle"],
             NomClient: e.payload.doc.data()["NomClient"],
             PrenomClient: e.payload.doc.data()["PrenomClient"],
      
            };
          });
          console.log(this.parcelles);
      
        });
      }
      supprimer(id)
    {
      if(confirm("Voulez-vous supprimer la parcelle ?"))
      this.crudService.delete_User(id);
    }
    async update_User(Parcelle) {
      let alert = this.alertCtrl.create({
          
          message: 'Entrer les données pour modifier!!',
          inputs: [{ name: 'editTask', placeholder: 'Type-Parcelle' },
          { name: 'editTask', placeholder: 'Etat-Parcelle' },
          { name: 'editTask', placeholder: 'Nom-Client' },
          { name: 'editTask', placeholder: 'Prénom-Client' }],
          buttons: [{ text: 'Cancel', role: 'cancel' },
                    { text: 'Update', handler: data => {
                      Parcelle.TypeParcelle = data.editTask;
                      Parcelle.EtatParcelle = data.editTask;
                      Parcelle.NomClient = data.editTask;
                      Parcelle.PrenomClient= data.editTask; }
                    }
                   ]
      });
      (await alert).present();
  }
  }

