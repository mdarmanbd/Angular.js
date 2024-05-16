import { Component, OnInit } from '@angular/core';
import { MessagesService } from './services/messages.service';
// import { NgForm } from '@angular/forms';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [MessagesService],

  
})
export class AppComponent{
    tasks: string[] = ['A', 'B', 'C']

    messages: string = 'jhdfkgh kjfdgh jdfg'

}



