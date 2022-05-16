import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuiviePageRoutingModule } from './suivie-routing.module';

import { SuiviePage } from './suivie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuiviePageRoutingModule
  ],
  declarations: [SuiviePage]
})
export class SuiviePageModule {}
