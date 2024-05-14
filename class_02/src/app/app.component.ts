import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // one way data buinding
  title: string = 'class_02';
  myBtn: string = 'click me';
  count: number = 0 ;

   // attribuit buinding
  isDisable: boolean = false;
  angularImage: string = '../favicon.ico'

  // style buidding
  bgColor: string = 'green'
  textColor: string = 'white'
  titleColor: string = 'font-size: 50px; color: red';

  // event buinding 
   incrimentCount(){
    this.count++
   
  }

  // class buinding
  redBoolen: boolean = true


}
