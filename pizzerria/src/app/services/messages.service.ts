import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

<<<<<<< HEAD
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
=======
  messages:string[] = [];

  add(message:string){
    this.messages.push(message);
  }

  clear(){
>>>>>>> 7a6ae2366507567b51f39c2c4feec599979bd610
    this.messages = [];
  }

  constructor() { }
}
