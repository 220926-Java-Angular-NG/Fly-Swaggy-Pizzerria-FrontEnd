import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { User } from '../components/models/user';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loginURL = 'http://localhost:8080/';

private httpOptions = {

    headers: new HttpHeaders(
      {
      'Content-Type': 'application/json'
      }
    )
  };

  constructor(private messageService: MessagesService, private http: HttpClient) { }

  login(credentials: string): Observable<User> {

   return this.http.post<User>(`${this.loginURL}users/login`, credentials, this.httpOptions)
   .pipe(
      tap( (loggedUser: User) => localStorage.setItem("userId", `${loggedUser.userId}`)),
      catchError(this.handleError<User>('login')) 
   );
  }

  register(user: User): Observable<User> {

    return this.http.post<User>
    (`${this.loginURL}users/register`, JSON.stringify(user), this.httpOptions)
    .pipe(catchError(this.handleError<User>('register')));

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

  public updateUser(user: User): Observable <any> {
    
    return this.http.put(`${this.loginURL}users/myProfile`, user, this.httpOptions)
    .pipe(tap(_ => this.log(`Updated user with username: ${user.username}`)),
    catchError(this.handleError<any>(`updateUser`)));
  }
 
  public findUser(userID?:String): Observable<any>{
    return this.http.get(`${this.loginURL}users/${userID}`, this.httpOptions).pipe(tap(_ => this.log(`found user with ID: ${userID}`)),
    catchError(this.handleError<any>(`findUser`)));
  }

  public findUserByUsername(username?:String): Observable<any>{
    return this.http.get(`${this.loginURL}users/findBy/${username}`, this.httpOptions)
    .pipe(tap(_ => this.log(`found user with username: ${username}`)),
    catchError(this.handleError<any>(`findUserByUsername`)));
  }

  verify(credentials: string): Observable<User> {

    return this.http.post<User>(`${this.loginURL}users/verify`, credentials, this.httpOptions)
    .pipe(
       tap( (user: User) => localStorage.setItem("userId", `${user.userId}`)),
       catchError(this.handleError<User>('verify')) 
    );
   }

}
