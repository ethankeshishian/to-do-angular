import { Injectable } from '@angular/core';
// import {AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { Observable} from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//import 'rxjs/Rx';
// import { AngularFireDatabase } from '@angular/fire/database';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  data;
  completed;
  data$: Observable<any[]>;
  completed$: Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.data = db.list('List');
    this.completed = db.list('Completed');
    this.data$ = this.data.snapshotChanges().pipe(map(changes => changes.map(c => ({ key: c.payload.key, val: c.payload.val()}))))
    this.completed$ = this.completed.snapshotChanges().pipe(map(changes => changes.map(c => ({ key: c.payload.key, val: c.payload.val()}))))
  }
  getItems(){
    return this.data$;
  }
  getCompleted(){
    return this.completed$;
  }
  deleteItem(id){
    //this.data.splice(id, 1);
    this.data.remove(id);
  }
  deleteCompletedItem(id){
    //this.completed.splice(id, 1);
    this.completed.remove(id);
  }
  addItem(id:string){
    this.data.push(id);
  }
  completeItem(id, key){
    this.completed.push(id);//unshift
    this.deleteItem(key);
    //this.marked.splice(this.marked.indexOf(id), 1), similar one for uncompleteItem()
  }
  uncompleteItem(id, key){
    this.data.push(id);
    this.deleteCompletedItem(key);
  }

  // Future features
  // editItem(id:string, change:string){
  //   this.data.splice(this.data.indexOf(id), 1, change);
  // }
  // addMark(id:string){
  //   this.marked.push(id);
  // }
  // getMarked(){
  //   return this.marked;
  // }
}
