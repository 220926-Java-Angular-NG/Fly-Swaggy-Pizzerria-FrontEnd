import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PizzaBox } from 'src/app/components/models/pizzaBox';
@Injectable({
  providedIn: 'root'
})
export class DataService {
box:PizzaBox[] = []
usr:String = "";
private data = new BehaviorSubject(this.box);
sharedata = this.data.asObservable();
private user = new BehaviorSubject(this.usr);
pubUser = this.user.asObservable();
  constructor() { }
changedata(box: PizzaBox[]){
  this.data.next(box);
}

changeuser(usr:String){
  this.user.next(usr)
}

}
