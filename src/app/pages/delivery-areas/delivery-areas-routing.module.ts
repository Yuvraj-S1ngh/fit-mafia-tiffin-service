import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveryAreasPage } from './delivery-areas.page';

const routes: Routes = [
  {
    path: '',
    component: DeliveryAreasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryAreasPageRoutingModule {}
