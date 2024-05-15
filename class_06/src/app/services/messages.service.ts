import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

}
