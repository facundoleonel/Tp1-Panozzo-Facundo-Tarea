import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanelPageRoutingModule } from './panel-routing.module';

import { PanelPage } from './panel.page';
import { MenuTabsModule } from 'src/app/components/menu-tabs/menu-tabs.module';
import { NotaComponent } from 'src/app/components/nota/nota.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanelPageRoutingModule,
    MenuTabsModule
  ],
  declarations: [PanelPage, NotaComponent]
})
export class PanelPageModule {}
