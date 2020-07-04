import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {
  completedItems;
  constructor(private service:ItemsService) {
   this.completedItems = this.service.getCompleted();
  }
  uncompleteItem(id, key){
   this.service.uncompleteItem(id, key);
  }
  deleteItem(id){
   this.service.deleteCompletedItem(id);
  }
  clearAll(){
    this.service.clearAll();
  }
  updateItem(prevItem, newItem, ItemID){
    //event.preventDefault(); //unnecessary
    if (prevItem == newItem){
      return;
    }
    this.service.updateCompletedItem(ItemID, newItem);
  }

  ngOnInit(): void {
  }
}
