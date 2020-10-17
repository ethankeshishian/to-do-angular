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
  providedIn: 'root',
})
export class ItemsService {
  data;
  completed;
  data$: Observable<any[]>;
  completed$: Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.data = db.list('List');
    this.completed = db.list('Completed');
    this.data.snapshotChanges().pipe(map((changes) => console.log(changes)));
    this.data$ = this.data
      .snapshotChanges()
      .pipe(
        map((changes: any) =>
          changes.map((c) => ({ key: c.payload.key, val: c.payload.val() }))
        )
      );
    this.completed$ = this.completed
      .snapshotChanges()
      .pipe(
        map((changes: any) =>
          changes.map((c) => ({ key: c.payload.key, val: c.payload.val() }))
        )
      );
  }
  getItems() {
    return this.data$;
  }
  getCompleted() {
    return this.completed$;
  }
  deleteItem(key) {
    this.data.remove(key);
  }
  deleteCompletedItem(key) {
    this.completed.remove(key);
  }
  addItem(val: string) {
    this.data.push(val);
  }
  completeItem(val, key) {
    this.completed.push(val); //was unshift
    this.deleteItem(key);
    //this.marked.splice(this.marked.indexOf(id), 1), similar one for uncompleteItem()
  }
  uncompleteItem(val, key) {
    this.data.push(val);
    this.deleteCompletedItem(key);
  }
  updateItem(key, val) {
    console.log('updating item!');
    this.data.set(key, val);
  }
  updateCompletedItem(key, val) {
    console.log('updating completed item!');
    this.completed.set(key, val);
  }
  clearAll() {
    this.completed.remove();
    this.data.remove();
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
