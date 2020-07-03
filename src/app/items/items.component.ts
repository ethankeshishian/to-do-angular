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
  constructor(private service:ItemsService) {
    this.listItems = this.service.getItems();
   }
  completeItem(id, key){
    this.service.completeItem(id, key);
  }
  deleteItem(id){
    this.service.deleteItem(id);
  }
  addItem(){
    this.service.addItem(this.newItem);
    this.newItem = "";
  }

  ngOnInit(): void {
  }
}
