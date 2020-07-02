import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'actions',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  markedItems;
  constructor(private service:ItemsService) {
    //this.markedItems = this.service.getMarked();
   }

  ngOnInit(): void {
  }
  // completeItem(){
  //   let len = this.markedItems.length;
  //   for (let i = 0; i < len; i++){
  //     this.service.completeItem(this.markedItems[i]);
  //   }
  // }
}
