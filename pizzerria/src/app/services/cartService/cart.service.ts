import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pizza } from 'src/app/components/models/pizza';
import { Cart } from 'src/app/components/models/Cart';
import { catchError, map, tap, Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {

private url = "http://localhost:8080/cart/purchase";
private httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }
  )
};

purchase(pizzas: Pizza[], total: String): Observable<Cart>{
  let cart: Cart
  cart={
    ID:0,
    pizzas:pizzas,
    total: total
  }
  return this.http.post<Cart>(this.url,cart,this.httpOptions).pipe(catchError(this.handelError('purchase',cart)))
}
private handelError<T>(operation ='operation', result?:T){
  return (error: any) :Observable<T> => {
    console.log(error);
    return of(result as T)
  }
}

  constructor(private http: HttpClient) { }
}
