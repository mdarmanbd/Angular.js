import { Component, OnInit } from '@angular/core';
import { MessagesService } from './services/messages.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [MessagesService],

  
})
export class AppComponent{
  title: string = 'From'

  user: {name:string, email: string} = {
    name: '',
    email: ''
  }

  isPageOpen: boolean = false

  submitFrom(form:NgForm){

    if (form.valid) {
      
      if(this.user.name.length < 5 || this.user.email.length <2) {
       this.isPageOpen = false
      } else {
        this.isPageOpen = true
      }

    
     
    }

   
  }



  



    
   
  }



