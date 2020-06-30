import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit{
  listItems:string[];
  completedItems:string[];
  constructor(private service:ItemsService) {
    this.listItems = this.service.getItems();
    this.completedItems = this.service.getCompleted();
   }

  ngOnInit(): void {
  }

}
