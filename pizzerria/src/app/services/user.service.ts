import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { User } from '../components/models/user';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loginURL = 'http://localhost:8080/api/';
  private httpOptions = {
    headers: new HttpHeaders(
      {
      'Content-Type': 'application/json'
      }
    )
  };

  constructor(private messageService: MessagesService, private http: HttpClient) { }

  login(credentials: string): Observable<User> {


   return this.http.post<User>(`${this.loginURL}/users/login`, credentials, this.httpOptions)
   .pipe(
      tap( (loggedUser: User) => localStorage.setItem("token", `${loggedUser.username}`)),
      catchError(this.handleError<User>('login')) 
   );
  }

  register(user: User) {

    

  }

  private log(message: string) {
    this.messageService.add(`UserService: ${message}`);
}

  private handleError<T>(operation = 'operation', result? : T){
    return (error: any) : Observable<T> => {
      // TODO: send the error to the remote logging infrastructure
      console.log(error);

      // Display the error for user to see what when wrong
      this.log(`${operation} failed: ${error.message}`);

      // let the app keep running by returning an empty result
      return of(result as T);
    }
  }

}
