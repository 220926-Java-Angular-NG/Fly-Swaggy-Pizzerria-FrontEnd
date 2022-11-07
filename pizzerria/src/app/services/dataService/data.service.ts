import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PizzaBox } from 'src/app/components/models/pizzaBox';
@Injectable({
  providedIn: 'root'
})
export class DataService {
box:PizzaBox[] = []
private data = new BehaviorSubject(this.box);
sharedata = this.data.asObservable();

  constructor() { }
changedata(box: PizzaBox[]){
  this.data.next(box);
}

}
