import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../components/models/user';
import { catchError, map, tap, Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private registerURL = 'api/register';
  private httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json'
      }
    )
  }

  private log(message:string){
    this.messageService.add(`Hero Service${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any) : Observable<T> => {
      console.log(error);
      this.log(`${operation} failed: ${error.message}`);
      //let the app keep running by returning an empty result
      return of(result as T);
    }
  }

  createUser(user: User){
    return this.http.post<User>(this.registerURL, user, this.httpOptions).pipe(
      tap((newUser: User) => this.log(`created user with email ${newUser.email}`)),
      catchError(this.handleError<User>('createUser'))
    )
  }

  constructor(private messageService: MessagesService, private http: HttpClient) { }
}
