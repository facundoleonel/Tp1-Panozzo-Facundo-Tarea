import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { mostrarAlerta } from 'src/app/utils';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
 
  formulario: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  @Input() esLogin: boolean;

  constructor(private router: Router, private alertController: AlertController) {
    this.esLogin = true
  }
  
  ngOnInit() {
    if (!this.esLogin) {
      this.formulario = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required]),
        repassword: new FormControl('', [Validators.required]),
      });
    }

  }

  enviarFormulario() {
    // Inicia sesion
    if (this.esLogin && this.formulario.valid) {
      let { email, password } = this.formulario.value;
      if (email === 'fcad@uner.com.ar' && password === '1234')
        this.router.navigate(['/panel']);
      else
        mostrarAlerta('Error', 'Usuario no valido.')

    }
    // Registro
    if (!this.esLogin && this.formulario.valid) {
      mostrarAlerta('Error','El sistema esta fuera de servicio.')
    }
  }

  irAlRegistro(){
    this.router.navigate(['/registro'])
  }
}