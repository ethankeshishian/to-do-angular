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
  markItem(id:string){
    this.service.addMark(id);
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
