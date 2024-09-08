import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';
import { FormularioModule } from 'src/app/components/formulario/formulario.module';
import { MenuTabsModule } from 'src/app/components/menu-tabs/menu-tabs.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
    FormularioModule,
    MenuTabsModule
  ],
  declarations: [InicioPage]
})
export class InicioPageModule {}
