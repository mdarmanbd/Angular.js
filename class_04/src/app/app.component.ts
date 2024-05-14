import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'class_04'

  isLoggedIn: boolean = true
  name: string = 'Aramn Hossain'


  // array

  names: string[] = ['Arman','Rayhan','Ariful caca']

  grade: string = 'A'

}
