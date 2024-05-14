import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'class_03';
// ngModel
  inputText: string = 'two way data buinding'

  // ngClass

  message: string = 'This is message for me'; 
  classes: string = 'bg-danger text-size';

  // ngStyle
  selectedBoxColor: string = 'yellow';
  fontSize30px: string = '32px';

}
