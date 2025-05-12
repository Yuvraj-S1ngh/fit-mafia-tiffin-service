import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliveryAreasPageRoutingModule } from './delivery-areas-routing.module';

import { DeliveryAreasPage } from './delivery-areas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliveryAreasPageRoutingModule
  ],
  declarations: [DeliveryAreasPage]
})
export class DeliveryAreasPageModule {}
