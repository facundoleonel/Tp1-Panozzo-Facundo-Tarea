import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroPage } from './registro.page';

describe('RegisterPage', () => {
  let component: RegistroPage;
  let fixture: ComponentFixture<RegistroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deberia mostrar el componente por pantalla', () => {
    expect(component).toBeTruthy();
  });
});