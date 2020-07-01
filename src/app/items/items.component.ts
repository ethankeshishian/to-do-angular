import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit{
  listItems:string[];
  newItem;
  completeItem(id:string){
    this.service.completeItem(id);
  }
  addItem(){
    this.service.addItem(this.newItem);
    this.newItem = "";
  }
  constructor(private service:ItemsService) {
    this.listItems = this.service.getItems();
   }
  ngOnInit(): void {
  }

}
