import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit{
  listItems:string[];
  constructor() {
    let service = new ItemsService();
    this.listItems = service.getItems();
   }

  ngOnInit(): void {
  }



}
