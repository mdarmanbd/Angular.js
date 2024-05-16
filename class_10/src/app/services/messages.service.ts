import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { post } from '../interfaces/posts.interface';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http:HttpClient) { }

  getMessages(){
    return ['Aramn', 'Rayhan', 'Ariful cac', 'Ronia']
  }

  LArray: string[]= ['A','B','C']

  getPosts(): Observable<post[]> {
    return this.http.get<post[]>(this.apiUrl);
  }

}
