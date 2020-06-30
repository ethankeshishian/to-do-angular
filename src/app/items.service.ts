import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }
  getItems(){
    return ["1", "2", "3"];
  }
}
