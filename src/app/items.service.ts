import { Injectable } from '@angular/core';
// import {AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
//import { AngularFirestore } from '@angular/fire/firestore'
//import { Observable}
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  data = ["1", "2", "3"];
  completed = ["done"];
  marked = [];//temp
  constructor(){};
//   data: Observable<any[]>;
//   constructor(db: AngularFireDatabase) {
//   this.data = db.list('List').valueChanges();
// }
  getItems(){
    return this.data;
  }
  getCompleted(){
    return this.completed;
  }
  getMarked(){
    return this.marked;
  }
  deleteItem(id){
    this.data.splice(id, 1);
  }
  deleteCompletedItem(id){
    this.completed.splice(id, 1);
  }
  addItem(id:string){
    this.data.push(id);
  }
  completeItem(id){
    let val = this.data[id];
    this.completed.unshift(val);
    this.deleteItem(id);
    //this.marked.splice(this.marked.indexOf(id), 1)
  }
  uncompleteItem(id){
    let val = this.completed[id];
    this.data.push(val);
    this.deleteCompletedItem(id);
  }

  // Future features
  editItem(id:string, change:string){
    this.data.splice(this.data.indexOf(id), 1, change);
  }
  addMark(id:string){
    this.marked.push(id);
  }
}
