import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { initializeApp } from 'firebase/app';
import {getAnalytics} from "firebase/analytics";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

// Firebase
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';

const firebaseConfig = {
  apiKey: "AIzaSyDu8jjSr0ZyfCkR32Hp1EAgQiNcQ-dPP34",
  authDomain: "appjtmpfe-820ce.firebaseapp.com",
  projectId: "appjtmpfe-820ce",
  storageBucket: "appjtmpfe-820ce.appspot.com",
  messagingSenderId: "787690914759",
  appId: "1:787690914759:web:ebeae824c6d858ef1f0fe2",
  measurementId: "G-2N5P4HLG2R"
};


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    }
  ],
  bootstrap: [AppComponent],
})

export class AppModule {}