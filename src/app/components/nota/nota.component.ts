import { Component, Input, OnInit } from '@angular/core';
import { TypeNota } from 'src/app/utils';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.scss'],
})
export class NotaComponent {
  @Input() nota: TypeNota = { title: '', description: '' };
}
