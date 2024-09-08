import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroPageRoutingModule } from './registro-routing.module';

import { RegistroPage } from './registro.page';
import { MenuTabsModule } from 'src/app/components/menu-tabs/menu-tabs.module';
import { FormularioModule } from 'src/app/components/formulario/formulario.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPageRoutingModule,
    MenuTabsModule,
    FormularioModule
  ],
  declarations: [RegistroPage]
})
export class RegistroPageModule {}
