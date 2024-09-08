import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { notas, TypeNota } from 'src/app/utils';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.page.html',
  styleUrls: ['./panel.page.scss'],
})
export class PanelPage {
  listadoNotas: TypeNota[] = notas;
  constructor(private platform: Platform) {
    this.bloquearRetroceso();
  }

  bloquearRetroceso() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Boton - bloqueado');
    });
  }
}
