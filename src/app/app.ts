import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  x=10;
  y=20;
  z=this.x+this.y;

  showValue() {
    console.log(this.z);
    this.x=100;    
    console.log(this.z);
  }
}
