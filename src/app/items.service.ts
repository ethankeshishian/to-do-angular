import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  data = ["1", "2", "3"];
  completed = ["done"];
  marked = [];//temp
  constructor() { }
  getItems(){
    return this.data;
  }
  getCompleted(){
    return this.completed;
  }
  getMarked(){
    return this.marked;
  }
  deleteItem(id:string){
    this.data.splice(this.data.indexOf(id), 1);
  }
  deleteCompletedItem(id:string){
    this.completed.splice(this.completed.indexOf(id), 1);
  }
  addItem(id:string){
    this.data.push(id);
  }
  completeItem(id:string){
    this.completed.unshift(id);
    this.deleteItem(id);
    //this.marked.splice(this.marked.indexOf(id), 1)
  }
  uncompleteItem(id:string){
    this.data.push(id);
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
