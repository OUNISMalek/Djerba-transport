import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteupdatePage } from './deleteupdate.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteupdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteupdatePageRoutingModule {}
