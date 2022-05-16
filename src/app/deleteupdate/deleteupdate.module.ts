import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteupdatePageRoutingModule } from './deleteupdate-routing.module';

import { DeleteupdatePage } from './deleteupdate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteupdatePageRoutingModule
  ],
  declarations: [DeleteupdatePage]
})
export class DeleteupdatePageModule {}
