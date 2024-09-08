import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-tabs',
  templateUrl: './menu-tabs.component.html',
  styleUrls: ['./menu-tabs.component.scss'],
})

export class MenuTabsComponent implements OnInit {
  menuListado: TypeMenuItem[] = [];
  @Input() estaLoggeado: boolean = false;
  
  constructor() {}

  ngOnInit() {
    if (!this.estaLoggeado) {
      this.menuListado = [
        {
          path: 'inicio',
          name: 'Inicio',
          icon: 'home-sharp',
        },
        {
          path: 'registro',
          name: 'Registro',
          icon: 'person-sharp',
        },
        {
          path: 'creditos',
          name: 'Creditos',
          icon: 'glasses-sharp',
        },
      ];
    } else {
      this.menuListado = [
        {
          path: 'panel',
          name: 'Panel',
          icon: 'home-sharp',
        },
        {
          path: 'panel/perfil',
          name: 'Perfil',
          icon: 'person-circle-sharp',
        },
      ];
    }
  }
}

interface TypeMenuItem {
  path: string;
  name: string;
  icon?: string;
}
