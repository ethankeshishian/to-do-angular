import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {
  completedItems;
  uncompleteItem(id, key){
   this.service.uncompleteItem(id, key);
  }
  deleteItem(id){
   this.service.deleteCompletedItem(id);
  }

  constructor(private service:ItemsService) {
   this.completedItems = this.service.getCompleted();
  }
  ngOnInit(): void {
  }

}
