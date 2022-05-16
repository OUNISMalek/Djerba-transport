import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { NavController, AlertController } from '@ionic/angular';
import { Parcelle } from './Parcelle';
import { Observable } from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  parcelles: any;
  
  constructor(
    private firestore: AngularFirestore,
    public alertCtrl: AlertController
  ) {}

  create_NewUser(record) {
    return this.firestore.collection('parcelles').add(record);
  }

  read_Users() {
    return this.firestore.collection('parcelles').snapshotChanges();
  }

  update_User(record_id) {
    this.firestore.doc('parcelles/' + record_id).update(record_id);
    console.log('updated');
  }

  delete_User(record_id) {
    this.firestore.doc('parcelles/' + record_id).delete();
  }
}

