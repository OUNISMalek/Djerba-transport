import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionPage } from '../inscription/inscription.page';
import {HomePage} from './home.page'

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
