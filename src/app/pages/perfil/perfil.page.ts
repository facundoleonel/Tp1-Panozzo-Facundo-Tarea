import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { mostrarAlerta } from 'src/app/utils';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {
  // Temporal
  perfil: any = {
    name: "Facundo Panozzo",
    email: "fcad@uner.com.ar",
    description: "Estudiante de Lic en Sistemas - UNER \nEstudiante de Tecnicatura en Desarrollo Web - (UNER). "
  }

  formulario: FormGroup = new FormGroup({
    name: new FormControl(this.perfil.name, [Validators.required]),
    email: new FormControl(this.perfil.email, [Validators.required, Validators.email]),
    description: new FormControl(this.perfil.description, [Validators.required, Validators.maxLength(300)]),
  });

  cambiarFoto(){
    mostrarAlerta('Error','El sistema esta fuera de servicio.')
  }
  guardarFormulario(){
    if (this.formulario.valid) {
      mostrarAlerta('Error','El sistema esta fuera de servicio.')
    }
  }
}
