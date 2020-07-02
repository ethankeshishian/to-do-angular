import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit{
  listItems;
  newItem;
  completeItem(id, key){
    this.service.completeItem(id, key);
  }
  addItem(){
    this.service.addItem(this.newItem);
    this.newItem = "";
  }
  deleteItem(id){
    this.service.deleteItem(id);
  }
  
  constructor(private service:ItemsService) {
    this.listItems = this.service.getItems();
   }
  ngOnInit(): void {
  }

}
