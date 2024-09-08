import { NgModule } from '@angular/core';
import { MenuTabsComponent } from './menu-tabs.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [MenuTabsComponent],
  exports: [MenuTabsComponent],
  imports: [CommonModule, IonicModule],
})
export class MenuTabsModule {}
