import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreditosPageRoutingModule } from './creditos-routing.module';

import { CreditosPage } from './creditos.page';
import { MenuTabsModule } from 'src/app/components/menu-tabs/menu-tabs.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreditosPageRoutingModule,
    MenuTabsModule
  ],
  declarations: [CreditosPage]
})
export class CreditosPageModule {}
