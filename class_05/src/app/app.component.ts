import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'class_05'

  name: string = 'Arman';

  today: number = Date.now();

  currency: number = 2.56;
  

}
