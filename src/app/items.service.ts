import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  data = ["1", "2", "3"];
  completed = ["done"];
  constructor() { }
  getItems(){
    return this.data;
  }
  getCompleted(){
    return this.completed;
  }
  deleteItem(id:string){
    this.data.splice(this.data.indexOf(id), 1);
  }
  addItem(id:string){
    this.data.push(id);
  }
  completeItem(id:string){
    this.deleteItem(id);
    this.completed.unshift(id);
  }
  editItem(id:string, change:string){
    this.data.splice(this.data.indexOf(id), 1, change);
  }
}
