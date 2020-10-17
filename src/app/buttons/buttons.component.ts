import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'actions',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent implements OnInit {
  completedItems;
  listItems;
  newItem;
  constructor(private service: ItemsService) {
    this.completedItems = this.service.getCompleted();
    this.listItems = this.service.getItems();
  }
  addItem() {
    this.service.addItem(this.newItem);
    this.newItem = '';
  }
  clearAll() {
    this.service.clearAll();
  }

  ngOnInit(): void {}
}
