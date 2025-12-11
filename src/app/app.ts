import { Component, signal,computed } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  x=signal(10);
  y=signal(20);
  z=computed(()=>this.x()+this.y());

  showValue() {
    console.log('Initial x value:', this.x());
    console.log('Initial y value:', this.y());
    console.log('Computed z value:', this.z());
    this.x.set(100);
    console.log('After updating x, x value:', this.x());
    console.log('After updating x, Computed z value:', this.z());
  }
}
