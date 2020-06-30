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
  removeItem(id){
    this.data.splice(this.data.indexOf(id), 1);
  }
  addItem(id){
    this.data.push(id);
  }
  completeItem(id){
    removeItem(this.data);
    this.completed.unshift(id);
  }
}
