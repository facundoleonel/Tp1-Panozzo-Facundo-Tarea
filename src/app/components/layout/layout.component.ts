import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  @Input() title: string = 'test';

  public isLoggedIn: boolean = false;



  constructor(){}

  ngOnInit() { 
    console.log('');
    
  }
}