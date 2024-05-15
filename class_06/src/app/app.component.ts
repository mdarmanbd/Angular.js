import { Component, OnInit } from '@angular/core';
import { MessagesService } from './services/messages.service';
import { response } from 'express';
import { error } from 'console';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [MessagesService],

  
})
export class AppComponent implements OnInit{

  posts: any[] = [];
  messages: string[] = [];
  newArray: string[] = [];

  constructor(protected messagesService: MessagesService){
   this.messages = messagesService.getMessages();
   this.newArray = messagesService.LArray;

  }

  ngOnInit(){
    this.messagesService.getPosts().subscribe(
      response=>{
        this.posts = response
      },
      (error) => {
        console.log((error))
      }
    )
  }

  // this.messagesService.getPosts().subscribe({
  //   next:(response) => {
  //     this.posts = response;
  //   },
  //   error:(error) => {
  //     console.log((error))
  //   }
  // })

}
