import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuiviePage } from './suivie.page';

const routes: Routes = [
  {
    path: '',
    component: SuiviePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuiviePageRoutingModule {}
